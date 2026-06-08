import { useState } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import MethodGrid from "../components/MethodGrid";

import { arrayMethods } from "../data/arrayMethods";

const ArrayMethods=()=>{
  const [search, setSearch] = useState("");

  const filteredMethods =
    arrayMethods.filter((item) =>
      item.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <>
      <Navbar />

      <div className="page-container">

        <h1>Array Methods</h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <MethodGrid methods={filteredMethods} />

      </div>
    </>
  );
}

export default ArrayMethods;