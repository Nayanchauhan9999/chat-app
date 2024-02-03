import { Request, Response } from "express";
import { logger } from "./logger.service";
import { resMessage } from "../utils/api.response";
import { StatusCode } from "../utils/Types";

export const sendMessageResponse = async (
  req: Request,
  res: Response,
  statusCode: number,
  message: string
) => {
  try {
    return res.status(statusCode).json({
      statusCode,
      message,
    });
  } catch (error) {
    console.log("Getting error while send message response ::: ", error);
    logger.error(`Getting error while send message response, ${error}`);

    return res.status(statusCode).json({
      statusCode: StatusCode.INTERNAL_SERVER_ERROR,
      message: resMessage.error,
    });
  }
};
