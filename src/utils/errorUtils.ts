import axios, { AxiosError } from "axios";
import { ErrorResponse } from "../types/error";

export const extractErrorMessage = (error: any) => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<ErrorResponse>;
    if (axiosError.response?.data?.detail) {
      return axiosError.response.data.detail;
    }
  }
  return 'An error occurred.';
};
