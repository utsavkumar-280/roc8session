import mainData from "./data.json";
export const callProducts = async (dispatch) => {
  try {
    const { products } = mainData;
    console.log({ products });

    dispatch({ type: "SET_PRODUCTS", payload: products });
  } catch (error) {
    console.log(error);
  }
};
