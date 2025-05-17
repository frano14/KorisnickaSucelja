import express from 'express';
import { connectDb } from './db/connectDb.js';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

app.use(cors({
    origin: "http://localhost:5173", // pusti frontend
    credentials: true // za cookise da me ne gasi
  }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", authRoutes);

app.listen(3000, () => {
    connectDb();
    console.log('Server is running on port 3000');
});
