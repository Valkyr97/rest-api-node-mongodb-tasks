import express from "express";
import morgan from "morgan";
import cors from "cors";

import TaskRoutes from "./routes/tasks.routes";

const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.use("/api/tasks", TaskRoutes);

// Synchronus error handler
app.use((err, req, res, next) => {
  res.json(status(500).json({message: err.message || "Unknown error"}))
})

export default app;
