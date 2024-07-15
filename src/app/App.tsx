import { lazy, Suspense, useEffect } from "react";
import PrivateRoute from "./route/privateRoute";
import { Header } from "../widgets/header";
import { Footer } from "../widgets/footer";
import { message } from 'antd';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { useAppDispatch, useAppSelector } from "./appStore";
import { Auth } from "../pages/Auth";
import { useAuth } from "../shared/utils/hooks/useAuth";
import { userAuthMe } from "../entities/viewer/model/userSlice";
import { About } from "../pages/About";
import { NoticeType } from "antd/es/message/interface";
import "./styles/normalize.css";
import "./styles/index.scss";

const Cars = lazy(() => import('../pages/Cars'));
const Profile = lazy(() => import('../pages/Profile'));

const App: React.FC = () => {
    const { showWindow } = useAppSelector((state) => state.getCar);
    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useAppDispatch();
    const auth = useAuth();

    if(showWindow === 'open') {
        document.body.classList.add('body-scroll');
    }else {
        document.body.classList.remove('body-scroll');
    }
    
    useEffect(() => {
        if(auth) {
            dispatch(userAuthMe());
        }
    }, []);

    const messageTop = (status: NoticeType, content: string) => {
        messageApi.open({
          type: status,
          content: content,
        });
    };

    return (
        <BrowserRouter>
        <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Home contextHolder={contextHolder} messageTop={messageTop}/>}/>
                    <Route path="/Cars" element={<Suspense fallback="Loading...">
                        <Cars messageTop={messageTop}/>
                    </Suspense>}/>
                    <Route path="/login" element={<Auth/>}/>
                    <Route path="/register" element={<Auth/>}/>
                    <Route element={<PrivateRoute/>}>
                        <Route path="/profile/*" element={<Suspense fallback="Loading...">
                            <Profile/>
                        </Suspense>}/>
                    </Route>
                    <Route path="/About"  element={<About/>}/>
                </Routes>
            </main>
        <Footer/>
        </BrowserRouter>
    );
}
 
export default App;