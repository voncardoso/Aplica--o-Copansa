import { Routes, Route } from "react-router-dom";
import { Contratos } from "./pages/Contratos";
import "./config/firebase";
import { Login } from "./pages/Login";
import { ContractItems } from "./pages/ContractItems";
import { Construction } from "./pages/Construction";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/contratos" element={<Contratos />} />
      <Route path="/contratos/:id" element={<ContractItems />} />
      <Route path="/obras/:id" element={<Construction />} />
    </Routes>
  );
}
