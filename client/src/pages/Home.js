import React, { useState } from "react";
import Header from "../components/Header";
import Images from "../components/Images";
import User from "../components/user/User";
function Home() {
  const [search, setSearch] = useState("");
  const changeSearch = (value) => {
    setSearch(value);
  };
  return (
    <div>
      <User />

      <Header props={changeSearch} />
      <Images props={search} />
    </div>
  );
}

export default Home;
