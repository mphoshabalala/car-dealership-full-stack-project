const { createContext, useState, useEffect, useContext } = require("react");

const BASE_URL = "http://localhost:8000/api/v1/sellers";
const SellerContext = createContext();

function SellerProvider({ children }) {
  const [soldCar, setSoldCar] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSoldCar, setCurrentSoldCar] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    async function getSoldCars() {
      setIsLoading(true);
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        const soldCars = data.data.sellerInfo;
        setSoldCar(soldCars);
      } catch (err) {
        const error = await err;
        setIsLoading(false);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getSoldCars();
  }, []);

  async function getSoldCar(id) {
    setIsLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/sellers/${id}`);
      const soldCar = await res.json();
      setCurrentSoldCar(soldCar);
    } catch (err) {
      const error = await err;
      setIsLoading(false);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <SellerContext.Provider
      value={{ soldCar, isLoading, currentSoldCar, error, getSoldCar }}
    >
      {children}
    </SellerContext.Provider>
  );
}

function useSoldCars() {
  const context = useContext(SellerContext);
  if (context === undefined) {
    throw new Error("DealerContext was used outside the DealersProvider");
  }

  return context;
}

export { useSoldCars, SellerProvider };
