import React from "react";
import Nav from "./components/shared/Nav";

import Home from "./pages/Home";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <>
      <nav>
        <Nav />
        <Home />
      </nav>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
