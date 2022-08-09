import axios from "axios";

const apiUrl = "http://localhost:8080/api";

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

export const getArticle = async (article) => {
  try {
    const res = await axios.get(`${apiUrl}/articles/${article}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getScoredQuestions = async () => {
  try {
    const res = await axios.get(`${apiUrl}/quiz/scored`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRecQuestions = async () => {
  try {
    const res = await axios.get(`${apiUrl}/quiz/rec`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getResult = async (result) => {
  try {
    const res = await axios.get(`${apiUrl}/results/${result}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getForumPosts = async (result) => {
  try {
    const res = await axios.get(`${apiUrl}/forum`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getForumPost = async (post) => {
  try {
    const res = await axios.get(`${apiUrl}/forum/${post}`);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
