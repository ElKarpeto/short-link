import express, { json, Request, Response } from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: "Permintaan tidak dapat diproses",
    });
});

export default app;
