import { Outlet } from "react-router-dom"
import SideNav from "./components/SideNav"
function Layout() {
    return (
        <main className="h-dvh flex">
            <SideNav />
            <Outlet />
        </main>
    )
}

export default Layout