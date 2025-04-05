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

const addProductSchema = z.object({
    sku: z.string({
        required_error: "Sku is required",
        invalid_type_error: "Sku must be string"
    }).min(1, "Sku cannot be empty"),
    tags: z.array(z.string(), {
        required_error: "Tags is required",
        invalid_type_error: "Tags must be string"
    }).min(1, "Tags cannot be empty"),
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be string"
    }).min(1, "Name cannot be empty"),
    description: z.string({
        required_error: "Description is required",
        invalid_type_error: "Description must be string"
    }).min(1, "Description cannot be empty"),
    price: z.number({
        required_error: "Price is required",
        invalid_type_error: "Price must be a number"
    }).nonnegative("Price must be greater than or equal to 0"),
    stock: z.number({
        required_error: "Stock is required",
        invalid_type_error: "Stock must be a number"
    }).nonnegative("Stock must be greater than or equal to 0"),
    brand: z.string({
        invalid_type_error: "Brand must be string"
    }).default("local"),
});

/**
 * Get all products
 */
export const GET = async (request: NextRequest) => {
    let response: TResponse = ApiResponse.error;
    let status;
    const sku = request.nextUrl.searchParams.get('sku');
    const query = sku ? { sku } : {};

    try {
        await db();
        response = ApiResponse.success;
        response.data = await Product.find(query);
        status = 200;
    } catch (error: unknown) {
        status = 500;

        if (error instanceof Error) {
            response.message = error.message;
        }
    }

    return NextResponse.json(response, { status });
}

/**
 * Create a new product
 */
export const POST = async (request: NextRequest) => {
    let response: TResponse = ApiResponse.error;
    let status: number = 500;
    let createdProduct;

    try {
        const headers: RequestHeaders = requestHeaders(request);
        const validateHeaders = headerSchema.safeParse(headers);
        const requestParams = await request.json();
        const validation = addProductSchema.safeParse(requestParams);

        // Validating headers
        if (!validateHeaders.success) {
            throw validateHeaders.error;
        }

        // Validating product data
        if (!validation.success) {
            throw validation.error;
        }

        await db();

        createdProduct = new Product(requestParams);
        await createdProduct.save();

        response = ApiResponse.success;
        response.message = "Product created successfully";
        response.data = createdProduct;
        status = 200;
    } catch (error: unknown) {
        status = 500;

        if (error instanceof Error) {
            response.message = error.message;
        }

        if (error instanceof z.ZodError) {
            response.message = error.errors[0].message;
        }
    }

    return NextResponse.json(response, { status });
};