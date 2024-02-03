import { Request, Response } from "express";
import { sendMessageResponse } from "../Services/common.service";
import { resMessage } from "../utils/api.response";

export const healthController = async (req: Request, res: Response) => {
  try {
    return await sendMessageResponse(
      req,
      res,
      StatusCode.OK,
      resMessage.success
    );
  } catch (error) {
    console.log("Some thing went wrong in health route",error);
  }
};
