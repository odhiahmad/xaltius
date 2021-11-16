import APIKit from "./index";

export interface ILogin {
  username: string;
  password: string;
}

export const login = async (payload: ILogin) => {
  try {
    const response = await APIKit({
      url: "/auth/login",
      method: "POST",
      data: payload,
    });

    return response;
  } catch (error) {
    throw error;
  }
};
