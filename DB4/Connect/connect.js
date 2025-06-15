import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
const string = process.env.ConnectionString;

export const connect = async ()=>{
    try {
        await mongoose.connect(string);
        console.log('DB Connected');
    } catch (error) {
        console.log(error.message);
    }
} 