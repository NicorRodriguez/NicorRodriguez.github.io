import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Footer from "./components/footer";

const App: React.FC = () => {
  return (
      <div className="App">
        <div className="main">
          <Home />
        </div>
        <footer>
          <Footer/>
        </footer>
      </div>
  );
};

export default App;
