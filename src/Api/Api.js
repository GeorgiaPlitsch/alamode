import axios from "axios";

const apiUrl = "http://localhost:8080/api";

// export const getFabricInfo = async (name) => {
//   if (!name) {
//     return;
//   }

//   try {
//     const res = await axios.get(`${apiUrl}/fabrics/${name}`);

//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getFabrics = async () => {
  try {
    const res = await axios.get(`${apiUrl}/fabrics`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getArticles = async () => {
  try {
    const res = await axios.get(`${apiUrl}/articles`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getQuestions = async () => {
  try {
    const res = await axios.get(`${apiUrl}/quiz`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getResults = async () => {
  try {
    const res = await axios.get(`${apiUrl}/results`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
