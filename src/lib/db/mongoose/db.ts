import mongoose from "mongoose";

const db = async () => {
    const uri = process.env.MONGODB_URI as string;
    const dbName = process.env.MONGODB_DATABASE as string;

    try {
        mongoose.connection.on('connected', () => console.log('connected'));
        mongoose.connection.on('open', () => console.log('open'));
        mongoose.connection.on('disconnected', () => console.log('disconnected'));
        mongoose.connection.on('reconnected', () => console.log('reconnected'));
        mongoose.connection.on('disconnecting', () => console.log('disconnecting'));
        mongoose.connection.on('close', () => console.log('close'));

        if (mongoose.connection.readyState >= 1) {
            console.log("readyState: ", mongoose.connection.readyState);
            return;
        }

        await mongoose.connect(uri, {
            dbName
        });
    } catch (error) {
        console.log(error);
        console.log("MongoDB Connection error: " + error);
    }
}

export default db;