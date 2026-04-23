import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <div style={{ width: "200px", padding: "20px", background: "#111" }}>
          <h3 style={{ color: "white" }}>⚡ App</h3>
          <Link to="/" style={{ color: "white", display: "block" }}>
            Dashboard
          </Link>
        </div>

        <div style={{ padding: "20px", flex: 1 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
