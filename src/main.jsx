import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const [place, setPlace] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [people, setPeople] = useState([]);

  const handleAdd = () => {
    if (!place.trim() || !name.trim() || !age.trim()) {
      return;
    }

    setPeople((prev) => [
      ...prev,
      {
        id: Date.now(),
        place,
        name,
        age,
      },
    ]);

    setPlace("");
    setName("");
    setAge("");
  };

  const handleClear = () => {
    setPlace("");
    setName("");
    setAge("");
  };

  const handleRemove = (id) => {
    setPeople((prev) => prev.filter((person) => person.id !== id));
  };

  return (
    <div className="page">
      <div className="card">
        <h1>Add People to Table</h1>
        <p className="subtitle">
          Enter Place, Name, and Age, then click Add.
        </p>

        <div className="form">
          <div className="field">
            <label htmlFor="place">Place</label>
            <input
              id="place"
              name="place"
              type="text"
              placeholder="e.g. Mumbai"
              value={place}
              onChange={(event) => setPlace(event.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="e.g. Akash"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              name="age"
              type="number"
              placeholder="e.g. 24"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
        </div>

        <div className="actions">
          <button className="add-button" onClick={handleAdd}>
            Add
          </button>
          <button className="clear-button" onClick={handleClear}>
            Clear
          </button>
        </div>

        {people.length === 0 ? (
          <div className="empty-state">
            No entries yet. Add your first row!
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Place</th>
                <th>Name</th>
                <th>Age</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {people.map((person) => (
                <tr key={person.id}>
                  <td>{person.place}</td>
                  <td>{person.name}</td>
                  <td>{person.age}</td>
                  <td>
                    <button
                      className="remove-button"
                      onClick={() => handleRemove(person.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);