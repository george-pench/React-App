import React, { useState, useEffect, useRef } from "react";
import styles from "./search.m.scss";
import { SearchProps } from "../../models/search";

function Search({ onSearch, isLoading }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        ref={inputRef}
        className={styles.searchInput}
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search"
      />
      {isLoading && <div className={styles.loader} />}
    </div>
  );
}

export default Search;
