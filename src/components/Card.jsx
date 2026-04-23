export default function Card({ title, value }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p style={{ fontSize: "1.5rem", marginTop: "10px" }}>{value}</p>
    </div>
  );
}
