import { Routes, Route } from "react-router-dom";
import { Contratos } from "./pages/Contratos";
import "./config/firebase";
import { Login } from "./pages/Login";
import { ContractItems } from "./pages/ContractItems";
import { Obras } from "./pages/Obras";
import { MapKML } from "./pages/Map";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/contratos" element={<Contratos />} />
      <Route path="/contratos/:id" element={<ContractItems />} />
      <Route path="/obras/:id" element={<Obras />} />
      <Route path="/obras/:id/map/:id" element={<MapKML />} />
    </Routes>
  );
}
