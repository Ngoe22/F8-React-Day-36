import { BrowserRouter, HashRouter, Router, Routes, Route } from "react-router";

// pages
import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Posts from "../../pages/Posts";
import PostDetail from "../../pages/PostDetail";
import Privacy from "../../pages/Privacy";

import Login from "../../pages/Login";
import Register from "../../pages/Register";

import Dashboard from "../../pages/Dashboard";
import Setting from "../../pages/Settings";
import Users from "../../pages/Users";

import NotFound from "../../pages/NotFound";

// layouts
import DefaultLayout from "../../layout/DefaultLayout";
import AdminLayout from "../../layout/AdminLayout";
import AuthLayout from "../../layout/AuthLayout";

import ScrollToTop from "../ScrollToTop";

function AppRoutes() {
    return (
        <HashRouter>
            <ScrollToTop />

            <Routes>
                {/* Default layout */}
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="privacy" element={<Privacy />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="posts-detail/:id" element={<PostDetail />} />
                    <Route path="posts-detail" element={<PostDetail />} />
                </Route>

                {/* Auth pages */}
                <Route element={<AuthLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                {/* Admin */}
                <Route element={<AdminLayout />}>
                    <Route path="admin" element={<Dashboard />}>
                        <Route path="settings" element={<Setting />} />
                        <Route path="users" element={<Users />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    );
}

export default AppRoutes;
