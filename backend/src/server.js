import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import { limiter, securityHeaders } from "./middlewares/securityMiddleware.js";

dotenv.config();

// Connect DB before starting server
connectDB();

const PORT = process.env.PORT || 5000;

app.use(errorHandler);

app.use(securityHeaders);
app.use(limiter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
