import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { startDBConnection } from "./db/db.js";


dotenv.config();

const app = express();
app.use(
    cors({
        origin: [
            "http://localhost:3003",
        ],
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }))

const startApp = () => {

    app.listen(process.env.PORT, async () => {
        try {
            const connected = await startDBConnection();
            if (!connected) throw new Error('Failed to connect to DB')
            console.log('Connected to DB.');
            console.log(`Listening on port ${process.env.PORT}`);
        } catch (error) {
            console.error(error);
        }
    });
}

startApp()