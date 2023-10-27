import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { DealersProvider } from "./contexts/dealersContext";
import Cars from "./pages/Cars";
import { CarsProvier } from "./contexts/carsContext";
import DetailedCar from "./pages/DetailedCar";
import SellYourCar from "./pages/SellYourCar";
import DealersPage from "./pages/DealersPage";

function App() {
  return (
    <DealersProvider>
      <CarsProvier>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cars/:id" element={<DetailedCar />} />
            <Route path="/sell-your-car" element={<SellYourCar />} />
            <Route path="/dealers" element={<DealersPage />} />
          </Routes>
        </BrowserRouter>
      </CarsProvier>
    </DealersProvider>
  );
}

export default App;
