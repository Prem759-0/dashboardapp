import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>🚀 Dashboard</h2>

      <Card title="Users" value="1200" />
      <Card title="Revenue" value="$8450" />
      <Card title="Growth" value="+32%" />
    </div>
  );
}
