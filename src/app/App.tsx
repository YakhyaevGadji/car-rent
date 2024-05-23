import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Cars } from "../pages/Cars";
import { Provider } from "react-redux";
import { store } from "./appStore";
import { Auth } from "../pages/Auth";
import "./styles/normalize.css";
import "./styles/index.scss";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Cars" element={<Cars/>}/>
                    <Route path="/login" element={<Auth/>}/>
                    <Route path="/register" element={<Auth/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    );
}
 
export default App;