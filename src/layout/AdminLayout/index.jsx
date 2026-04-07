import React from "react";
import AdminFooter from "./components/AdminFooter";
import AdminSidebar from "./components/AdminSidebar";
import { Outlet } from "react-router";

function AdminLayout() {
    return (
        <>
            <hr />
            <h1>AdminLayout</h1>

            <div>Own Header</div>
            <AdminSidebar></AdminSidebar>
            <Outlet></Outlet>

            <AdminFooter></AdminFooter>
            <hr />
        </>
    );
}

export default AdminLayout;
