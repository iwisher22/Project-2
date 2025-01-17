import express from "express";
import dbConnect from "./database/db.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config();

app.use(
	cors({
		origin: [process.env.FRONTEND_URL],
		methods: ["POST"],
		credentials: true,
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);

dbConnect();

export default app;
