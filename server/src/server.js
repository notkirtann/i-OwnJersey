import "dotenv/config";

import express from "express";
import cors from "cors";

import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";
import { resolve } from "path";

import "./config/mongodb.js";
import "./config/cloudinary.js";

import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import orderRoutes from "./routes/order.routes.js";

const app = express();

// ================= Swagger =================
const swaggerDocument = YAML.load(resolve("./swagger.yaml"));

// Dynamic server URL
swaggerDocument.servers = [
  {
    url:
      process.env.NODE_ENV === "production"
        ? "https://i-own-jersey-backend.vercel.app"
        : `http://localhost:${process.env.PORT}`,
    description: "API Server",
  },
];

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "i-OwnJersey API Docs",
  })
);

// ===========================================

app.use(express.json());

app.use(
  cors({
    origin: [
      process.env.FRONTEND_PROD,
      process.env.ADMIN_PROD,
      `http://localhost:${process.env.ADMIN_DEV}`,
      `http://localhost:${process.env.FRONTEND_DEV}`,
      `http://localhost:${process.env.PORT}`,
    ],
    credentials: true,
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "*",
  })
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is working!",
    documentation: "/api-docs",
  });
});

// Routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

export default app;