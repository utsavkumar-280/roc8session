import { createContext, useContext, useReducer } from "react";
import { AppDataReducer } from "../reducer/AppDataReducer";

const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  const initialState = {
    products: [],
    filters: {
      genderFilter: [],
      brandFilter: [],
      sizeFilter: []
    },
    sortBy: ""
  };

  const [state, dispatch] = useReducer(AppDataReducer, initialState);

  return (
    <AppDataContext.Provider value={{ state, dispatch }}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppDataContext = () => useContext(AppDataContext);
