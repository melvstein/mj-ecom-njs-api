const mjEcommerceApi = [
    {
        apiName: "User API",
        apiPath: "api/users",
        apis: [
            {
                httpMethod: "GET",
                description: "Get all users.",
                path: "/api/users?email={email}",
                requestParams: {
                    headers: [],
                    query: [
                        {
                            name: "email",
                            type: "string",
                            requirement: "optional",
                            description: "User email address"
                        }
                    ],
                    path: [],
                    body: []
                }
            },
            {
                httpMethod: "POST",
                description: "Create a new user.",
                path: "/api/users",
                requestParams: {
                    headers: [
                        {
                            name: "X-API-Key",
                            type: "string",
                            requirement: "required",
                            description: "API key for authentication."
                        }
                    ],
                    query: [],
                    path: [],
                    body: [
                        {
                            name: "role",
                            type: "string",
                            requirement: "required",
                            description: "User role: Admin, Moderator, Seller, Customer"
                        },
                        {
                            name: "name",
                            type: "string",
                            requirement: "required",
                            description: "User full name"
                        },
                        {
                            name: "username",
                            type: "string",
                            requirement: "required",
                            description: "User unique username"
                        },
                        {
                            name: "email",
                            type: "string",
                            requirement: "required",
                            description: "User unique email address"
                        },
                        {
                            name: "password",
                            type: "string",
                            requirement: "required",
                            description: "User password"
                        },
                        {
                            name: "contactNumber",
                            type: "string",
                            requirement: "required",
                            description: "User unique contact number"
                        },
                        {
                            name: "address",
                            type: "object",
                            requirement: "required",
                            description: "User complete address",
                            properties: [
                                {
                                    name: "street",
                                    type: "string",
                                    requirement: "required",
                                    description: "Street address"
                                },
                                {
                                    name: "barangay",
                                    type: "string",
                                    requirement: "required",
                                    description: "Barangay"
                                },
                                {
                                    name: "city",
                                    type: "string",
                                    requirement: "required",
                                    description: "City"
                                },
                                {
                                    name: "postCode",
                                    type: "number",
                                    requirement: "required",
                                    description: "Postal code"
                                }
                            ]
                        },
                        {
                            name: "provider",
                            type: "string",
                            requirement: "optional",
                            description: "Authentication provider (e.g., Google, Facebook, etc.)"
                        },
                    ]
                }
            },
            {
                httpMethod: "PUT",
                description: "Update user details.",
                path: "/api/users/{email}",
                requestParams: {
                    headers: [
                        {
                            name: "X-API-Key",
                            type: "string",
                            requirement: "required",
                            description: "API key for authentication."
                        }
                    ],
                    query: [],
                    path: [
                        {
                            name: "email",
                            type: "string",
                            requirement: "required",
                            description: "User unique email address"
                        }
                    ],
                    body: [
                        {
                            name: "role",
                            type: "string",
                            requirement: "optional",
                            description: "User role: Admin, Moderator, Seller, Customer"
                        },
                        {
                            name: "name",
                            type: "string",
                            requirement: "optional",
                            description: "User full name"
                        },
                        {
                            name: "username",
                            type: "string",
                            requirement: "optional",
                            description: "User unique username"
                        },
                        {
                            name: "password",
                            type: "string",
                            requirement: "optional",
                            description: "User password"
                        },
                        {
                            name: "contactNumber",
                            type: "string",
                            requirement: "optional",
                            description: "User unique contact number"
                        },
                        {
                            name: "address",
                            type: "object",
                            requirement: "optional",
                            description: "User complete address",
                            properties: [
                                {
                                    name: "street",
                                    type: "string",
                                    requirement: "optional",
                                    description: "Street address"
                                },
                                {
                                    name: "barangay",
                                    type: "string",
                                    requirement: "optional",
                                    description: "Barangay"
                                },
                                {
                                    name: "city",
                                    type: "string",
                                    requirement: "optional",
                                    description: "City"
                                },
                                {
                                    name: "postCode",
                                    type: "number",
                                    requirement: "optional",
                                    description: "Postal code"
                                }
                            ]
                        },
                        {
                            name: "provider",
                            type: "string",
                            requirement: "optional",
                            description: "Authentication provider (e.g., Google, Facebook, etc.)"
                        },
                    ]
                }
            },
            {
                httpMethod: "DELETE",
                description: "Delete a user.",
                path: "/api/users/{email}",
                requestParams: {
                    headers: [
                        {
                            name: "X-API-Key",
                            type: "string",
                            requirement: "required",
                            description: "API key for authentication.",
                        }
                    ],
                    query: [],
                    path: [
                        {
                            name: "email",
                            type: "string",
                            requirement: "required",
                            description: "User unique email address"
                        }
                    ],
                    body: []
                }
            }
        ]
    },
    {
        apiName: "Product API",
        apiPath: "/api/products",
        apis: [
            {
                httpMethod: "GET",
                description: "Get all products.",
                path: "/api/products?sku={sku}",
                requestParams: {
                    headers: [],
                    query: [
                        {
                            name: "sku",
                            type: "string",
                            requirement: "optional",
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
                            type: "string",
                            requirement: "required",
                            description: "API key for authentication."
                        }
                    ],
                    query: [],
                    path: [],
                    body: [
                        {
                            name: "sku",
                            type: "string",
                            requirement: "required",
                            description: "SKU (Stock Keeping Unit) is a unique identifier assigned to a product."
                        },
                        {
                            name: "tags",
                            type: "string[]",
                            requirement: "required",
                            description: "Product tags."
                        },
                        {
                            name: "name",
                            type: "string",
                            requirement: "required",
                            description: "Product Name."
                        },
                        {
                            name: "description",
                            type: "string",
                            requirement: "required",
                            description: "Product description."
                        },
                        {
                            name: "price",
                            type: "number",
                            requirement: "required",
                            description: "Product price."
                        },
                        {
                            name: "stock",
                            type: "integer",
                            requirement: "required",
                            description: "Number of stocks."
                        },
                        {
                            name: "brand",
                            type: "string",
                            requirement: "optional",
                            description: "Brand name."
                        },
                        {
                            name: "images",
                            type: "string[]",
                            requirement: "required",
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
                            type: "string",
                            requirement: "required",
                            description: "API key for authentication."
                        }
                    ],
                    query: [],
                    path: [
                        {
                            name: "sku",
                            type: "string",
                            requirement: "required",
                            description: "SKU of the product to update."
                        }
                    ],
                    body: [
                        {
                            name: "tags",
                            type: "string[]",
                            requirement: "required",
                            description: "Product tags."
                        },
                        {
                            name: "name",
                            type: "string",
                            requirement: "required",
                            description: "Product Name."
                        },
                        {
                            name: "description",
                            type: "string",
                            requirement: "required",
                            description: "Product description."
                        },
                        {
                            name: "price",
                            type: "number",
                            requirement: "required",
                            description: "Product price."
                        },
                        {
                            name: "stock",
                            type: "integer",
                            requirement: "required",
                            description: "Number of stocks."
                        },
                        {
                            name: "brand",
                            type: "string",
                            requirement: "optional",
                            description: "Brand name."
                        },
                        {
                            name: "images",
                            type: "string[]",
                            requirement: "required",
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
                            type: "string",
                            requirement: "required",
                            description: "API key for authentication.",
                        }
                    ],
                    query: [],
                    path: [
                        {
                            name: "sku",
                            type: "string",
                            requirement: "required",
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
                path: "/api/cart/{email}",
                requestParams: {
                    headers: [],
                    query: [
                        {
                            name: "sku",
                            type: "string",
                            requirement: "optional",
                            description: "SKU (Stock Keeping Unit) is a unique identifier assigned to a product. Use this to get a specific product."
                        }
                    ],
                    path: [
                        {
                            name: "email",
                            type: "string",
                            requirement: "required",
                            description: "User email address"
                        }
                    ],
                    body: []
                }
            },
            {
                httpMethod: "POST",
                description: "Add product to cart.",
                path: "/api/cart/{email}",
                requestParams: {
                    headers: [
                        {
                            name: "X-API-Key",
                            type: "string",
                            requirement: "required",
                            description: "API key for authentication."
                        }
                    ],
                    query: [],
                    path: [
                        {
                            name: "email",
                            type: "string",
                            requirement: "required",
                            description: "User email address"
                        }
                    ],
                    body: [
                        {
                            name: "sku",
                            type: "string",
                            requirement: "required",
                            description: "SKU of the product to add to the cart."
                        },
                        {
                            name: "quantity",
                            type: "integer",
                            requirement: "required",
                            description: "quantity of the product in the cart. Default 1"
                        }
                    ]
                }
            },
            {
                httpMethod: "PUT",
                description: "Update cart item.",
                path: "/api/cart/{email}",
                requestParams: {
                    headers: [
                        {
                            name: "X-API-Key",
                            type: "string",
                            requirement: "required",
                            description: "API key for authentication."
                        }
                    ],
                    query: [],
                    path: [
                        {
                            name: "email",
                            type: "string",
                            requirement: "required",
                            description: "Customer email"
                        }
                    ],
                    body: [
                        {
                            name: "action",
                            type: "string",
                            requirement: "required",
                            description: "increase or decrease. Default increase"
                        },
                        {
                            name: "sku",
                            type: "string",
                            requirement: "required",
                            description: "SKU of the product in the cart to update."
                        },
                        {
                            name: "quantity",
                            type: "integer",
                            requirement: "required",
                            description: "New quantity of the product in the cart."
                        }
                    ]
                }
            },
            {
                httpMethod: "DELETE",
                description: "Removes a product from the cart. If no SKU is provided, all items in the cart for the given user will be removed.",
                path: "/api/cart/{email}",
                requestParams: {
                    headers: [
                        {
                            name: "X-API-Key",
                            type: "string",
                            requirement: "required",
                            description: "API key for authentication."
                        }
                    ],
                    query: [],
                    path: [
                        {
                            name: "email",
                            type: "string",
                            requirement: "required",
                            description: "Customer email"
                        }
                    ],
                    body: [
                        {
                            name: "sku",
                            type: "string",
                            requirement: "optional",
                            description: "SKU of the product to remove from the cart."
                        }
                    ]
                }
            }
        ]
    }
];

export default mjEcommerceApi;
