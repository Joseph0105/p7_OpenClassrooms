import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'tailwindcss/tailwind.css';


const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />

                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;

