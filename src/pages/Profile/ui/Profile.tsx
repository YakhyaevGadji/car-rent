import React from "react";
import { Header } from "../../../widgets/header";
import { Footer } from "../../../widgets/footer";
import { Route, Routes } from "react-router-dom";
import "./profile.scss";

const Profile: React.FC = (): React.JSX.Element => {
    return (
        <>
            <Header/>
            <main className="profile container">
                <ul className="profile__list">
                    <li className="profile__list_item">Profile List</li>
                </ul>
                <Routes>
                    <Route path="/orders" element="Мои заказы"/>
                </Routes>
            </main>
            <Footer/>
        </>
    );
}
 
export default Profile;