const { createContext, useContext, useState, useEffect } = require("react");

const BASE_URL = "http://localhost:8000/api/v1/cars";
const CarsContext = createContext();

function CarsProvier({ children }) {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCar, setCurrentCar] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    async function getCars() {
      setIsLoading(true);
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        const cars = await data.data.cars;
        setCars(cars);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    getCars();
  }, []);

  async function getCar(id) {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/${id}`);
      const data = await res.json();
      const car = await data.data.car;

      setCurrentCar(car);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CarsContext.Provider
      value={{ cars, isLoading, error, currentCar, getCar }}
    >
      {children}
    </CarsContext.Provider>
  );
}

function useCars() {
  const context = useContext(CarsContext);
  if (context === undefined) {
    throw new Error("CarsContext was used outside the CarsProvider");
  }
  return context;
}

export { useCars, CarsProvier };
