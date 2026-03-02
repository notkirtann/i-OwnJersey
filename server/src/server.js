import "dotenv/config";

import express from "express";
import cors from "cors";

//swagger-----
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
//-------------

import "./config/mongodb.js";
import "./config/cloudinary.js";

import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import orderRoutes from "./routes/order.routes.js";

const app = express();

// ================= Swagger =================


// __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Adjust path based on your project structure
const swaggerPath = resolve(__dirname, "../swagger.yaml");

const swaggerDocument = YAML.load(swaggerPath);
///-----------------------
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
  }),
);
// Routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/order", orderRoutes);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "i-OwnJersey API Docs",
  }),
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is working!",
    documentation: "/api-docs",
  });
});


// Server
const PORT = process.env.PORT;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
  });
}

export default app;
