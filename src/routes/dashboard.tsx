import { Navbar } from "@/components/common/navbar";
import { Outlet } from "react-router-dom";

export default function DashboardPage() {
    return (
        <div className="flex flex-col w-full h-screen max-w-screen-sm">
            <Outlet />
            <Navbar />
        </div>
    );
}
