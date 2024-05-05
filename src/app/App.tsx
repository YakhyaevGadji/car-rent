import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cars } from "../pages/Cars";
import { Header } from "../widgets/header";
import { Footer } from "../widgets/footer";
import "./styles/normalize.css";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { store } from "./appStore";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/Cars" element={<Cars/>}/>
                    </Routes>
                </main>
                <Footer/>
            </Provider>
        </BrowserRouter>
    );
}
 
export default App;