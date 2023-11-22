import { createContext, useContext, useReducer } from "react";

const SellYourCarContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true, error: "" };
    case "data/loaded":
      return {
        ...state,
        isLoading: false,
      };
    case "updateFields":
      return { ...state, [action.field]: action.value };
    case "updateImages":
      return { ...state, [action.field]: action.value };
    case "error":
      return { ...state, isLoading: false, error: action.value };
    default:
      throw new Error("Unknown Error");
  }
}

const initialState = {
  model: "",
  brand: "",
  dateOfPurchase: "",
  mileage: "",
  carType: "",
  driveMode: "",
  fuelType: "",
  maxSpeed: "",
  fullExterior: null,
  interiorDahboardImg: null,
  interior1: null,
  interior2: null,
  engine: null,
  idCopy: null,
  registration: null,
  isLoading: false,
  error: "",
};

function SellYourCarProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = { state, dispatch };

  return (
    <SellYourCarContext.Provider value={contextValue}>
      {children}
    </SellYourCarContext.Provider>
  );
}

function useSellYourCarContext() {
  const context = useContext(SellYourCarContext);
  if (!context) {
    throw new Error(
      "useSellYourCarContext must be used within a SellYourCarProvider"
    );
  }
  return context;
}

export { useSellYourCarContext, SellYourCarProvider };
