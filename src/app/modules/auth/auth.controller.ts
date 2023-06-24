import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await loginData;
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester update successfully',
    data: result,
  });
});

export const AuthController = {
  loginUser,
};
