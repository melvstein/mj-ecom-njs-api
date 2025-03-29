const mjEcommerceApi = [
    {
        apiName: "Product API",
        apiPath: "/api/products",
        apis: [
            {
                httpMethod: "GET",
                description: "Get all products.",
                path: "/api/products",
                requestParams: {
                    headers: [],
                    query: [
                        {
                            name: "sku",
                            rules: "optional",
                            description: "SKU (Stock Keeping Unit) is a unique identifier assigned to a product. Use this to get a specific product."
                        }
                    ],
                    path: [],
                    body: [],
                }
            },
            {
                httpMethod: "POST",
                description: "Create a new product.",
                path: "/api/products",
                requestParams: {
                    headers: [
                        {
                            name: "X-API-Key",
                            rules: "required",
                            description: "API key for authentication."
                        }
                    ],
                    query: [],
                    path: [],
                    body: [
                        {
                            name: "sku",
                            rules: "required",
                            description: "SKU (Stock Keeping Unit) is a unique identifier assigned to a product."
                        },
                        {
                            name: "tags",
                            rules: "required",
                            description: "Product tags."
                        },
                        {
                            name: "name",
                            rules: "required",
                            description: "Product Name."
                        },
                        {
                            name: "description",
                            rules: "required",
                            description: "Product description."
                        },
                        {
                            name: "price",
                            rules: "required",
                            description: "Product price."
                        },
                        {
                            name: "stock",
                            rules: "required",
                            description: "Number of stocks."
                        },
                        {
                            name: "brand",
                            rules: "optional",
                            description: "Brand name."
                        },
                        {
                            name: "images",
                            rules: "required",
                            description: "Product images."
                        }
                    ],
                },
            },
            {
                httpMethod: "PUT",
                description: "Update product details.",
                path: "/api/products/{sku}",
                requestParams: {
                    headers: [
                        {
                            name: "X-API-Key",
                            rules: "required",
                            description: "API key for authentication."
                        }
                    ],
                    query: [],
                    path: [
                        {
                            name: "sku",
                            rules: "required",
                            description: "SKU of the product to update."
                        }
                    ],
                    body: [
                        {
                            name: "tags",
                            rules: "required",
                            description: "Product tags."
                        },
                        {
                            name: "name",
                            rules: "required",
                            description: "Product Name."
                        },
                        {
                            name: "description",
                            rules: "required",
                            description: "Product description."
                        },
                        {
                            name: "price",
                            rules: "required",
                            description: "Product price."
                        },
                        {
                            name: "stock",
                            rules: "required",
                            description: "Number of stocks."
                        },
                        {
                            name: "brand",
                            rules: "optional",
                            description: "Brand name."
                        },
                        {
                            name: "images",
                            rules: "required",
                            description: "Product images."
                        }
                    ]
                }
            },
            {
                httpMethod: "DELETE",
                description: "Delete a product.",
                path: "/api/products/{sku}",
                requestParams: {
                    headers: [
                        {
                            name: "X-API-Key",
                            rules: "required",
                            description: "API key for authentication.",
                        }
                    ],
                    query: [],
                    path: [
                        {
                            name: "sku",
                            rules: "required",
                            description: "SKU of the product to delete.",
                        }
                    ],
                    body: []
                }
            }
        ]
    },
    {
        apiName: "Cart API",
        apiPath: "/api/cart",
        apis: [
            {
                httpMethod: "GET",
                description: "Get cart list.",
                path: "/api/cart",
                requestParams: {
                    headers: [],
                    query: [
                        {
                            name: "sku",
                            rules: "optional",
                            description: "SKU (Stock Keeping Unit) is a unique identifier assigned to a product. Use this to get a specific product."
                        }
                    ],
                    path: [],
                    body: []
                }
            },
            {
                httpMethod: "POST",
                description: "Add product to cart.",
                path: "/api/cart",
                requestParams: {
                    headers: [
                        {
                            name: "X-API-Key",
                            rules: "required",
                            description: "API key for authentication."
                        }
                    ],
                    query: [],
                    path: [],
                    body: [
                        {
                            name: "sku",
                            rules: "required",
                            description: "SKU of the product to add to the cart."
                        },
                        {
                            name: "quantity",
                            rules: "required, int",
                            description: "quantity of the product in the cart. Default 1"
                        }
                    ]
                }
            },
            {
                httpMethod: "PUT",
                description: "Update cart item.",
                path: "/api/cart/{sku}/{email}",
                requestParams: {
                    headers: [
                        {
                            name: "X-API-Key",
                            rules: "required",
                            description: "API key for authentication."
                        }
                    ],
                    query: [],
                    path: [
                        {
                            name: "sku",
                            rules: "required",
                            description: "SKU of the product in the cart to update."
                        }
                    ],
                    body: [
                        {
                            name: "action",
                            rules: "required",
                            description: "increase or decrease. Default increase"
                        },
                        {
                            name: "quantity",
                            rules: "required, int",
                            description: "New quantity of the product in the cart."
                        }
                    ]
                }
            },
            {
                httpMethod: "DELETE",
                description: "Remove product from cart.",
                path: "/api/cart/{sku}",
                requestParams: {
                    headers: [
                        {
                            name: "X-API-Key",
                            rules: "required",
                            description: "API key for authentication."
                        }
                    ],
                    query: [],
                    path: [
                        {
                            name: "sku",
                            rules: "required",
                            description: "SKU of the product to remove from the cart."
                        }
                    ],
                    body: []
                }
            }
        ]
    }
];

export default mjEcommerceApi;
