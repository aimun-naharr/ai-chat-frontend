"use server";
import axios from "axios";

export const getAiResponse = async (msg: string) => {
  const url = "https://ai-chat-backend-jh3r.onrender.com/api/chat";
  const response = await axios.post(url, { message: msg });
  console.log("server response", response);
  return response.data;
};
