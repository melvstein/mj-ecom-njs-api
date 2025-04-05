import { NextRequest } from "next/server";

export const requestHeaders = (request: NextRequest) => {
    const headers: Record<string, string> = {};

    for (const [key, value] of request.headers.entries()) {
        headers[key] = value;
    }

    return headers;
}