import { Outlet, Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProviders";
import Sidebar from "./Sidebar";

export default function MainLayout() {
    const { token, user } = useStateContext();

    if (!token) {
        return <Navigate to='/auth/login' />
    }

    return (
        <div id="mainLayout" className="premium-layout">
            <Sidebar />
            <div className="main-content">
                <header className="premium-header">
                    <div className="header-title">
                        Меню Кофе
                    </div>
                    <div className="user-badge">
                        <span>{user?.name || 'Гость'}</span>
                        <div className="avatar-small">
                            <img src={`https://ui-avatars.com/api/?name=${user?.name || 'User'}&background=random`} alt="" />
                        </div>
                    </div>
                </header>
                <main className="content-area">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
