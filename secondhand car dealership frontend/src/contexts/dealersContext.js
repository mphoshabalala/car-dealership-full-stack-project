const { createContext, useState, useEffect, useContext } = require("react");

const BASE_URL = "http://localhost:8000/api/v1/dealers";
const DealersContext = createContext();

function DealersProvider({ children }) {
  const [dealers, setDealers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentDealer, setCurrentDealer] = useState({});
  const [error, setError] = useState({});
  useEffect(() => {
    async function getDealers() {
      setIsLoading(true);
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        const dealers = data.data.dealers;
        setDealers(dealers);
      } catch (err) {
        const error = await err;
        setIsLoading(false);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    getDealers();
  }, []);

  async function getDealer(id) {
    setIsLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/dealers/${id}`);
      const dealer = await res.json();
      setCurrentDealer(dealer);
    } catch (err) {
      const error = await err;
      setIsLoading(false);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <DealersContext.Provider
      value={{ dealers, isLoading, currentDealer, error, getDealer }}
    >
      {children}
    </DealersContext.Provider>
  );
}
function useDealers() {
  const context = useContext(DealersContext);
  if (context === undefined) {
    throw new Error("DealerContext was used outside the DealersProvider");
  }

  return context;
}

export { useDealers, DealersProvider };
