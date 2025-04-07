import axios from "axios";
import { retrieveRawInitData } from "@telegram-apps/sdk-vue";

const initDataRaw = retrieveRawInitData();

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

const request = async (endpoint, method = "GET", data = undefined) => {
  const response = await axios.request({
    url: `${BASE_API_URL}/api/${endpoint}`,
    method: method,
    headers: {
      initData: `${initDataRaw}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      "tuna-skip-browser-warning": "fjsdfsfj",
      "User-Agent": "CustomUser Agent/1.0",
    },
    data: data != undefined ? JSON.stringify() : undefined,
  });

  return response;
};

export default request;
