import axios from "axios";

// const API_URL = "http://localhost:5000/api/products"
const API_URL = "https://fakestoreapi.com/products";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
