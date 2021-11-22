import APIKit from "./index";

export const tasks = async () => {
  try {
    const response = await APIKit({
      method: "GET",
    });

    return response;
  } catch (error) {
    throw error;
  }
};
