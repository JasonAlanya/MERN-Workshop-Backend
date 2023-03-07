export const sucessStatus = (data: any) => ({
  statuscode: 200,
  data,
});

export const failedStatus = (errorDescription: any) => ({
  statuscode: 400,
  errorDescription,
});
