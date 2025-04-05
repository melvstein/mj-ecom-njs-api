import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db/mongoose/db";
import Product from "@/models/Product";
import ApiError from "@/lib/errors/apiError";
import { z } from "zod";
import { RequestHeaders } from "next/dist/client/components/router-reducer/fetch-server-response";
import { requestHeaders } from "@/lib/utils";
import { TResponse } from "@/types";
import ApiResponse from "@/lib/apiResponse";

const API_KEY = process.env.API_KEY;

const headerSchema = z.object({
    "x-api-key": z.string({
        required_error: "Header x-api-key is required",
        invalid_type_error: "Header x-api-key must be string"
    }).min(1, "Header x-api-key cannot be empty")
        .refine((apiKey) => apiKey === API_KEY, {
            message: "Invalid Header x-api-key",
        })
});

const updateProductSchema = z.object({
    tags: z.array(z.string(), {
        invalid_type_error: "Tags must be an array of strings",
    }).min(1, "Tags cannot be empty").optional(),
    name: z.string({
        invalid_type_error: "Name must be a string",
    }).min(1, "Name cannot be empty").optional(),
    description: z.string({
        invalid_type_error: "Description must be a string",
    }).min(1, "Description cannot be empty").optional(),
    price: z.number({
        invalid_type_error: "Price must be a number",
    }).nonnegative("Price must be greater than or equal to 0").optional(), 
    stock: z.number({
        invalid_type_error: "Stock must be a number",
    }).nonnegative("Stock must be greater than or equal to 0").optional(),
    brand: z.string({
        invalid_type_error: "Brand must be a string",
    }).default("local"),
});

export const PUT = async (request: NextRequest) => {
    let response: TResponse = ApiResponse.error;
    let status: number = 500;
    let updatedProduct;
    const sku = request.nextUrl.pathname.split('/').pop();

    try {
        // Validate headers
        const headers: RequestHeaders = requestHeaders(request);
        const validateHeaders = headerSchema.safeParse(headers);
        if (!validateHeaders.success) {
            throw new Error(validateHeaders.error.errors[0].message);
        }

        // Parse the request body and validate product data
        const requestParams = await request.json();
        const validation = updateProductSchema.safeParse(requestParams);
        if (!validation.success) {
            throw new Error(validation.error.errors[0].message);
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { sku: _sku, ...updateData } = requestParams;

        await db();

        updatedProduct = await Product.findOneAndUpdate(
            { sku },
            { $set: updateData },
            { new: true }
        );

        if (!updatedProduct) {
            throw new Error("Product not found");
        }

        // Successful update
        response = ApiResponse.success;
        response.message = "Product updated successfully";
        response.data = updatedProduct;
        status = 200;
    } catch (error: unknown) {
        if (error instanceof Error) {
            response.message = error.message;
        } else if (error instanceof z.ZodError) {
            response.message = error.errors[0].message;
        } else {
            response.message = "An unknown error occurred";
        }
    }

    return NextResponse.json(response, { status });
};

export const DELETE = async (request: NextRequest) => {
    let response: TResponse = ApiResponse.error;
    let status: number = 500;
    let deletedProduct;
    const sku = request.nextUrl.pathname.split('/').pop();

    try {
        // Validate headers
        const headers: RequestHeaders = requestHeaders(request);
        const validateHeaders = headerSchema.safeParse(headers);
        if (!validateHeaders.success) {
            throw new Error(validateHeaders.error.errors[0].message);
        }

        await db();

        deletedProduct = await Product.deleteOne({ sku });

        if (deletedProduct.deletedCount === 0) {
            throw new Error("Product not found");
        }

        // Successful update
        response = ApiResponse.success;
        response.message = "Product deleted successfully";
        response.data = deletedProduct;
        status = 200;
    } catch (error: unknown) {
        if (error instanceof Error) {
            response.message = error.message;
        } else if (error instanceof z.ZodError) {
            response.message = error.errors[0].message;
        } else {
            response.message = "An unknown error occurred";
        }
    }

    return NextResponse.json(response, { status });
}