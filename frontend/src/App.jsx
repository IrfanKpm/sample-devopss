import { useState } from "react";
import "./App.css";

export default function App() {
  const [id, setId] = useState("E71");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const fetchUser = async () => {
    try {
      setError("");
      setUser(null);

      const res = await fetch(`http://localhost:8000/api/id/${id}`);

      if (!res.ok) {
        throw new Error("User not found");
      }

      const data = await res.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Fake DB Search</h2>

      <select value={id} onChange={(e) => setId(e.target.value)}>
        <option value="E71">E71</option>
        <option value="E72">E72</option>
        <option value="E73">E73</option>
        <option value="E74">E74</option>
      </select>

      <button onClick={fetchUser}>Search</button>

      {error && <p className="error">{error}</p>}

      {user && (
        <div className="card">
          <p><b>ID:</b> {user.id}</p>
          <p><b>Username:</b> {user.username}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Role:</b> {user.role}</p>
          <p><b>Department:</b> {user.department}</p>
          <p><b>Status:</b> {user.status}</p>
        </div>
      )}
    </div>
  );
}