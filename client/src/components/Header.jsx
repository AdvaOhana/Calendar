import { SlidersHorizontal, Calendar1 } from "lucide-react";

export default function Header() {

    return (

        <header className="app-header">
            <h1 className="app-title">My Calendar <Calendar1 size={22} /></h1>
            <p className="app-subtitle">Organize your schedule efficiently</p>
            <button
                className="preferences-btn"
            >
                <SlidersHorizontal size={18} />
            </button>

        </header>);
}