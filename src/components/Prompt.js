import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import api from "../api/generate"

export default function Home() {
  const [countryInput, setCountryInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("../api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ country: countryInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setCountryInput("");
  }

  return (
    <div>
      <main>
        <h3>Gather information</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="command"
            placeholder="Learn about locations"
            value={countryInput}
            onChange={(e) => setCountryInput(e.target.value)}
          />
          <input type="submit" value="Find Out" />
        </form>
        <div>{result}</div>
      </main>
    </div>
  );
}
