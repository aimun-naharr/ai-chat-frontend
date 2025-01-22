"use server";

import { baseAxios } from "@/services";

export const getAiResponse = async (msg: string) => {
  const url = "/api/chat";
  const response = await baseAxios.post(url, { message: msg });
  console.log("server response", response);
  return response?.data;
};
