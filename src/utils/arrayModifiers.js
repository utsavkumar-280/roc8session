export const getSortedData = (state, arr) => {
  if (state.sortBy === "PRICE_HIGH_TO_LOW")
    return [...arr].sort((product1, product2) => {
      return Number(product2.price) - Number(product1.price);
    });
  if (state.sortBy === "PRICE_LOW_TO_HIGH")
    return [...arr].sort((product1, product2) => {
      return Number(product1.price) - Number(product2.price);
    });
  return arr;
};

export const getFilteredData = (state, arr) => {
  let newArr = [...arr];

  if (state.filters.genderFilter.length !== 0) {
    newArr = newArr.filter((product) =>
      state.filters.genderFilter.includes(product.gender)
    );
  }

  if (state.filters.brandFilter.length !== 0) {
    newArr = newArr.filter((product) =>
      state.filters.brandFilter.includes(product.brand)
    );
  }

  if (state.filters.sizeFilter.length !== 0) {
    newArr = newArr.filter((product) =>
      state.filters.sizeFilter.includes(product.size)
    );
  }
  return newArr;
};

export const isPresentInArray = (array, id) => {
  if (array) {
    return array.find((item) => item?.product?._id === id);
  } else {
    return false;
  }
};
