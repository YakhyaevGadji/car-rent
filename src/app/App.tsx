import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Header } from "../widgets/header";
import { Footer } from "../widgets/footer";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}
 
export default App;