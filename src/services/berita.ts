import APIKit from "./index";

export const berita = async () => {
  try {
    const response = await APIKit({
      method: "GET",
    });

    return response;
  } catch (error) {
    throw error;
  }
};
