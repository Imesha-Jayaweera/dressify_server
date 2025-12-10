import mongoose from "mongoose";
export const initDatabase = async () => {
    try {
        mongoose.Promise = global.Promise;
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGODB_URL!, {});
        console.log("MongoDB Atlas connected");
    } catch (e) {
        console.log("Database connection failed",(e));
    }
};