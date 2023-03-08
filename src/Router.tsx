import { Routes, Route } from "react-router-dom";
import { Contratos } from "./pages/Contratos";
import "./config/firebase";
import { Login } from "./pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/contratos" element={<Contratos />} />
    </Routes>
  );
}
