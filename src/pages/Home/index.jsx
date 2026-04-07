/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Home.module.scss";

function Home() {
    const url = new URL("https://example.com/posts?page=2&limit=10");

    console.log(url.pathname); // /posts
    console.log(url.search); // ?page=2&limit=10

    return <h1>Home</h1>;
}

export default Home;
