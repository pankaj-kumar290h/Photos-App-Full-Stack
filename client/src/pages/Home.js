import React, { useState } from "react";
import Header from "../components/Header";
import Images from "../components/Images";
import User from "../components/user/User";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./Error";
function Home() {
  const [search, setSearch] = useState("");
  const changeSearch = (value) => {
    setSearch(value);
  };
  return (
    <div>
      <ErrorBoundary fallback={<Error />}>

        <User />

        <Header props={changeSearch} />
        <Images props={search} />
      </ErrorBoundary>
    </div>
  );
}

export default Home;
