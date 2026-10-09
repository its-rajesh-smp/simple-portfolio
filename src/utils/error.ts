import axios from "axios";

export const getAPIError = (err: unknown, defaultMessage: string): string => {
  if (axios.isAxiosError(err)) return err.message;
  if (err instanceof Error) return err.message;
  return defaultMessage;
};

export const isAxiosCanceledError = (err: unknown): boolean => axios.isCancel(err);
