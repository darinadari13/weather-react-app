import React, { useState } from "react";
import "./styles.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [isCityVisible, setIsCityVisible] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsCityVisible(true);
  }

  function updateCity(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Search" />
      {/* {isCityVisible && <h2>It is currently 20°C in {city}</h2>} */}
      {isCityVisible ? <h2>It is currently 20°C in {city}</h2> : null}
    </form>
  );
}
