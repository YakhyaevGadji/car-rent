import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../widgets/header";
import Home from "../pages/Home";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
}
 
export default App;