import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import connectDB from './config/connectDB.js';
import userRouter from './route/user.route.js';
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL, // e.g., http://localhost:3000
}));

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(helmet({
  crossOriginResourcePolicy: false,
}));

// Routes
app.get("/", (req, res) => {
  res.json({
    message: `Server is running on PORT ${PORT}`
  });
});

app.use('/api/user', userRouter);

// Port
const PORT = process.env.PORT || 8081;

// Start server after DB connection
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error("❌ Failed to connect to DB", error);
});
