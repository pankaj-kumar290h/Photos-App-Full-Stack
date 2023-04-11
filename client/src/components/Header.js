import React, { useState } from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";

function Header({ props }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props(query);
  };
  return (
    <section id="header">
      <div className="search-section">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search Image"
          />
          <button type="submit">
            <BsSearch />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Header;
