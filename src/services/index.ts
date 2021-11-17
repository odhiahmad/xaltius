import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { getToken } from "utils/cookie";
let instance: any = axios;

const initialHeader = {
  "Content-Type": "application/json",
  Authorization: "",
};

export function setUpAxios() {
  instance.interceptors.request.use((req: AxiosRequestConfig) => {
    // console.log(
    //   "wkwkehjfsdcfsdv.jsfjhashfeiuekufhsuijfhsdycdsgfsygpatenanwigksfvaydhshw"
    // );
    return req;
  });
  instance.interceptors.response.use((res: AxiosResponse) => {
    console.log(res);

    return res;
  });
}

export default function APIKit(config: AxiosRequestConfig) {
  const baseURL =
    "https://newsapi.org/v2/everything?q=tesla&from=2021-10-16&sortBy=publishedAt&apiKey=a881a187ec4048efb0cae4437293c67b";

  const headers = {
    ...initialHeader,
  };

  const token = getToken();
  headers.Authorization = `${token}`;

  const finalConfig = {
    baseURL,
    headers,
    ...config,
  };
  // RETURN AXIOS
  return instance.request(finalConfig);
}
