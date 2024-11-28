import { NavLink } from "react-router-dom";
import { Bell, BuildingStorefront, CheckDone2 } from "../UI/svgs";

export const Navbar = () => {
    return (
        <div className="fixed bottom-0 w-full max-w-screen-sm px-4 pb-4">
            <nav className="text-white bg-neutral-900 rounded-2xl">
                <ul className="flex justify-between px-8 py-4">
                    <NavLink to={"catalog"} className="w-6 h-6">
                        <BuildingStorefront />
                    </NavLink>
                    <NavLink to={"orders"} className="w-6 h-6">
                        <CheckDone2 />
                    </NavLink>
                    <NavLink to={"notifications"} className="w-6 h-6">
                        <Bell />
                    </NavLink>
                    <NavLink to={"profile"} className="w-6 h-6">
                        <div className="w-6 h-6 overflow-hidden bg-orange-200 rounded-full"></div>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
};
