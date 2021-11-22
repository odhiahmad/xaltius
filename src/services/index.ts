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
  const baseURL = "http://52.221.251.68:8084/kanban/list";

  const headers = {
    ...initialHeader,
  };

  const token = getToken();
  headers.Authorization = `${token}`;

  const finalConfig = {
    baseURL,
    // headers,
    ...config,
  };
  // RETURN AXIOS
  return instance.request(finalConfig);
}
