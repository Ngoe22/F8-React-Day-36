import { Outlet } from "react-router";
import AuthSidebar from "./components/AuthSidebar";

function AuthLayout() {
    return (
        <>
            <hr />

            <h1>AuthLayout</h1>

            <div style={{ display: "flex" }}>
                <AuthSidebar></AuthSidebar>
                <Outlet></Outlet>
            </div>
            <hr />
        </>
    );
}
export default AuthLayout;
