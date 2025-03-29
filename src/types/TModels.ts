export type TUser = {
    _id: string[];
    role: string;
    name: string;
    username: string;
    email: string;
    password: string;
    encryptedPassword: string;
    contactNumber: string;
    address: string;
    image: string;
    provider?: string;
    balance: number;
    createdAt?: Date;
    updatedAt?: Date;
};

export type TProduct = {
    sku: string,
    tags: string[];
    name: string;
    description: string;
    price: number;
    stock: number;
    brand?: string;
    images: string[];
    createdAt?: Date;
    updatedAt?: Date;
}

export type TCart = {
    sku: string;
    quantity: number;
    email: string;
    createdAt?: Date;
    updatedAt?: Date;
};