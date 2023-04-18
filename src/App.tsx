import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// import Header from './components/Header';
// import Navigation from './components/Navigation';

import About from "./pages/About";
import Home from "./pages/Home";
// import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        {/* <Header darkMode={false} toggleDarkMode={function (): void {
          throw new Error("Function not implemented.");
        } } /> */}
        <div className="main">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        {/* <footer>
          <Footer/>
        </footer> */}
      </div>
    </Router>
  );
};

export default App;
