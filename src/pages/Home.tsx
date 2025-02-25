import React, { useState } from "react";
import { useDebouncedSearch } from "../hooks/useDebouncedSearch";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebouncedSearch(search);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Advanced React Patterns</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p>Debounced Search Value: {debouncedSearch}</p>

      <button onClick={() => navigate("/about")}>Go to About Page</button>
    </div>
  );
};

export default Home;
