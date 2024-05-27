// src/index.js
import express, { Request, Response } from "express";
import cors from "cors";

import { StatusCodes } from "http-status-codes";
import { personRouter } from "./person/routes";

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.use(`/api/v1/persons`, personRouter);

// Catch-all route
app.use("*", (req: Request, res: Response) => {
  res.status(StatusCodes.NOT_FOUND).json({ message: "Not found" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
