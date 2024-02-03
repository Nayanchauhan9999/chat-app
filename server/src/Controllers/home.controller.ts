import { Request, Response } from "express";
import { logger } from "../Services/logger.service";
import { sendMessageResponse } from "../Services/common.service";
import { resMessage } from "../utils/api.response";
import { StatusCode } from "../utils/Types";

export const homeController = async (req: Request, res: Response) => {
  try {
    return await sendMessageResponse(
      req,
      res,
      StatusCode.OK,
      resMessage.success
    );
  } catch (error) {
    console.log("some thing went wrong while access home route", error);
    logger.error(`something went wrong while access home route , ${error}`);

    return await sendMessageResponse(
      req,
      res,
      StatusCode.INTERNAL_SERVER_ERROR,
      resMessage.error
    );
  }
};
