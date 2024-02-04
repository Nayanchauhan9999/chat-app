import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { IUserSignUp, StatusCode } from "../utils/Types";
import { credentialValidationFieldMessage } from "../utils/api.response";
import { sendMessageResponse } from "../Services/common.service";

export const signupValidator = async (
  req: Request<{}, {}, IUserSignUp>,
  res: Response,
  next: NextFunction
) => {
  try {
    const requestFields: IUserSignUp = {
      firstName: req.body?.firstName,
      lastName: req.body?.lastName,
      email: req.body?.email,
      password: req.body?.password,
      phone: req.body?.phone,
    };

    const signupSchema = Joi.object<IUserSignUp>({
      firstName: Joi.string()
        .required()
        .messages({ "string.empty": "First Name is required." }),
      lastName: Joi.string()
        .required()
        .messages({ "string.empty": "Last Name is required." }),
      phone: Joi.number().required().messages({
        "number.base": credentialValidationFieldMessage.phone,
      }),
      email: Joi.string().required().email().messages({
        "string.empty": credentialValidationFieldMessage.email,
      }),
      password: Joi.string().required().messages({
        "string.empty": credentialValidationFieldMessage.password,
      }),
    }).options({ abortEarly: false });

    const { error, value, warning } = signupSchema.validate(requestFields);

    //  ceating array of error message
    const errorMessageArray = error?.details?.map((item) => {
      return { message: item?.message, field: item?.context?.key };
    });
      
      console.log(error);

    if (errorMessageArray && errorMessageArray?.length > 0) {
      return await sendMessageResponse(
        req,
        res,
        StatusCode.BAD_REQUEST,
        errorMessageArray
      );
    }

    next();
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};
