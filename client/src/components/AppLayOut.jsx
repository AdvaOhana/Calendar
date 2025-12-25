import { Outlet } from "react-router-dom";
import Header from "./Header";
export default function AppLayOut() {
    return (
        <div className="app-layout">
            <header>
                <Header />
            </header>
            <div>
                <Outlet />
            </div>
        </div >);
}