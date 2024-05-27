import express, { Request, Response } from "express";
import { Person } from "./model";
import { StatusCodes } from "http-status-codes";
import * as db from "./data";

export const personRouter = express.Router();

personRouter.get("/", async (req: Request, res: Response) => {
  try {
    const persons: Person[] = await db.findAll();

    if (!persons) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: `No persons found` });
    }

    return res.status(StatusCodes.OK).json({ persons: persons });
  } catch (err) {
    console.error(err);

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: err instanceof Error ? err.message : err });
  }
});
