/* eslint-disable no-unused-vars */

import React from "react";
import { Link, useSearchParams } from "react-router";
import Pagination from "../../components/Pagination";

function Posts() {
    const [ppp, setPpp] = React.useState(250);

    const [searchParams, setSearchParams] = useSearchParams();
    const [posts, setPosts] = React.useState(null);

    React.useEffect(() => {
        setSearchParams({ page: searchParams.get(`page`) || 1 });
    }, [setSearchParams, searchParams]);

    React.useEffect(() => {
        (async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
            );
            const data = await response.json();
            setPosts(data);
        })();
    }, []);

    if (posts) {
        const start = (Number(searchParams.get(`page`)) - 1) * ppp;
        const end = Number(searchParams.get(`page`)) * ppp;
        var list = [];
        for (let i = start; i < end; i++) {
            // console.log(i);
            if (!posts[i]) break;
            list.push(
                <li key={i}>
                    <Link
                        to={`/posts-detail/?id=${posts[i].id}`}
                    >{`${posts[i].id} | ${posts[i].title}`}</Link>
                </li>,
            );
        }
    } else {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <h1>
                Posts
                {list}
            </h1>
            <Pagination
                currentPage={Number(searchParams.get(`page`))}
                totalPages={Math.ceil(posts.length / ppp)}
                onPageChange={(page) => {
                    setSearchParams({ page });
                }}
            ></Pagination>
        </>
    );
}

export default Posts;
