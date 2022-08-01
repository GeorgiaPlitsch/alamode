import axios from "axios";

const apiUrl = "http://localhost:8080/api";

export const getFabricInfo = async (name) => {
  if (!name) {
    return;
  }
  try {
    const res = await axios.get(`${apiUrl}/fabrics/${name}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
