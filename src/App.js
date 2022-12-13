import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import OnorableMensions from "./components/OnorableMensions/OnorableMensions";
import Characters from "./components/Characters/Characters";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";
import Rules from "./components/Rules/Rules";
import Footer from "./components/Footer";
import Places from "./components/Places/Places";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/onorablemensions" element={<OnorableMensions />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/places" element={<Places />} />
	  	  <Route path="/charactersDetails/:name" element={<CharacterDetails />}  />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
