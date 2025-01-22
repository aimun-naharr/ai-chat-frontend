import axios from "axios";
const API = "http://ai-chat-backend-jh3r.onrender.com";
// const API = "http://localhost:5000";
export const baseAxios = axios.create({
  baseURL: API,
});
