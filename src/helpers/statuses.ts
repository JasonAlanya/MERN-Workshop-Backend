import { Response } from "express";

export const sucessStatus = (dataToResponse: any) => ({
  statuscode: 200,
  dataToResponse,
});

export const failedStatus = (errorDescription: any) => ({
  statuscode: 400,
  errorDescription,
});
