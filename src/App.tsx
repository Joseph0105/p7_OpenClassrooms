import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage";
import DetailsLogement from "./pages/DetailsLogement";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";


const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/logement/:id" element={<DetailsLogement />} />

                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;

