import React from "react";
import { Outlet } from "react-router";

import Header from "../components/Header";
import Footer from "./components/Footer";

function DefaultLayout() {
    return (
        <>
            <hr />
            <h1>DefaultLayout</h1>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <hr />
        </>
    );
}

export default DefaultLayout;
