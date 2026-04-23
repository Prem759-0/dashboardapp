import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "200px", padding: "20px", background: "#111" }}>
        <h3 style={{ color: "white" }}>⚡ App</h3>
        <Link to="/" style={{ color: "white", display: "block" }}>
          Dashboard
        </Link>
        <Link to="/analytics" style={{ color: "white", display: "block" }}>
          Analytics
        </Link>
        <Link to="/profile" style={{ color: "white", display: "block" }}>
          Profile
        </Link>
      </div>

      <div style={{ padding: "20px", flex: 1 }}>{children}</div>
    </div>
  );
}

function Dashboard() {
  return <h1>Dashboard 🚀</h1>;
}

function Analytics() {
  return <h1>Analytics 📊</h1>;
}

function Profile() {
  return <h1>Profile 👤</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
