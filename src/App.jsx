import React from "react";
import Nav from "./components/shared/Nav";

import SidebarLayout from "./components/Banner";

const App = () => {
  return (
    <>
      <nav>
        <Nav />
        <SidebarLayout/>
      </nav>
    </>
  );
};

export default App;
