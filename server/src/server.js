import "dotenv/config";

import express from "express";
import cors from "cors";

import YAML from "yamljs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

import "./config/mongodb.js";
import "./config/cloudinary.js";

import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import orderRoutes from "./routes/order.routes.js";
import { swaggerHtml } from "./config/swagger-vercel.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let swaggerDocument = {};
try {
  const swaggerPath = resolve(__dirname, "../swagger.yaml");
  swaggerDocument = YAML.load(swaggerPath);
} catch (e) {
  console.error("Swagger YAML load failed:", e.message);
}

app.use(express.json());

app.use(
  cors({
    origin: [
      `${process.env.FRONTEND_PROD}`,
      `${process.env.ADMIN_PROD}`,
      `http://localhost:${process.env.ADMIN_DEV}`,
      `http://localhost:${process.env.FRONTEND_DEV}`,
      `http://localhost:${process.env.PORT}`,
    ].filter(Boolean),
    credentials: true,
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    allowedHeaders: "*",
  })
);

// Routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);

//dynamically inject the current server URL
app.get("/api-docs/swagger.json", (req, res) => {
  const protocol = req.headers["x-forwarded-proto"] || req.protocol;
  const host = req.headers["x-forwarded-host"] || req.get("host");
  const baseUrl = `${protocol}://${host}`;

  const dynamicDoc = {
    ...swaggerDocument,
    servers: [
      {
        url: baseUrl,
        description: "Current server (auto-detected)",
      },
    ],
  };

  res.json(dynamicDoc);
});

app.get("/api-docs", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(swaggerHtml);
});

app.get("/api-docs/", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(swaggerHtml);
});

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is working!",
    documentation: "/api-docs",
  });
});

const PORT = process.env.PORT;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
  });
}

export default app;