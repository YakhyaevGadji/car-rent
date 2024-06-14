import React from "react";
import { Header } from "../../../widgets/header";
import { Footer } from "../../../widgets/footer";
import { Route, Routes } from "react-router-dom";
import "./profile.scss";
import { useAppSelector } from "../../../app/appStore";
import { Avatar } from "@mui/material";

const Profile: React.FC = (): React.JSX.Element => {
    const { user } = useAppSelector((state) => state.auth);
   
    return (
        <>
            <Header />
            <main className="profile">
                <div className="container">
                    <div className="profile__inner">
                        <ul className="profile__list">
                            <li className="profile__list_item">
                                <Avatar alt={user.data.name} src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }}/>
                            </li>
                        </ul>
                        <Routes>
                            <Route path="/orders" element="Мои заказы" />
                        </Routes>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Profile;