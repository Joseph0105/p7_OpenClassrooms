import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import DetailsLogement from "./pages/DetailsLogement";
import About from "./pages/About";
import Error from "./pages/Error";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Style
import "./normalize.css"
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/logement/:id" element={<DetailsLogement />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />

                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;

