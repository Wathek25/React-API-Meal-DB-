import React, { useEffect, useState } from "react";

const SearchC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Searchfor meal..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button>Search meal</button>
    </div>
  );
};

export default SearchC;
