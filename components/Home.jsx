import React, { useContext, useState } from "react";
import Search from "./search";
import Filter from "./filter";
import Countrycards from "./countries-card";
import { useOutletContext } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
  const [isDark] = useContext(ThemeContext);
  
  const [query, Setquery] = useState("");
  const [region, Setregion] = useState("");
  return (
    <main className={isDark ? "dark" : " "}>
      <div className="search-filter-container">
        <Search setquery={Setquery} />
        <Filter setregion={Setregion} />
      </div>
      <Countrycards query={query} region={region} />
    </main>
  );
}
