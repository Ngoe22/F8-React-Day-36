/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useSearchParams, useNavigate } from "react-router";

import styles from "./PostDetail.module.scss";

function PostDetail() {
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();
    const [post, setPost] = React.useState(null);
    const [comments, setComments] = React.useState(null);

    React.useEffect(() => {
        (async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${searchParams.get(`id`)}`,
            );
            if (!response.ok) {
                return navigate("/posts", { replace: true });
            }
            const data = await response.json();
            setPost(data);
        })();
    }, [navigate, searchParams]);

    React.useEffect(() => {
        (async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/posts/${searchParams.get(`id`)}/comments`,
            );
            const data = await response.json();
            setComments(data);
        })();
    }, [searchParams]);

    if (!post) {
        return <h1>Loading...</h1>;
    }

    const commentList = !comments ? (
        <h1>Loading...</h1>
    ) : (
        comments.map((item) => {
            return (
                <li className={styles.comment} key={item.id}>
                    <p className={styles.commentName}>{item.name}</p>
                    <p className={styles.commentEmail}>{item.email}</p>
                    <p className={styles.commentBody}>{item.body}</p>
                </li>
            );
        })
    );

    return (
        <>
            <h1>PostDetail</h1>
            <div className={styles.postDetail}>
                <div className={styles.post}>
                    <p className={styles.postTitle}>
                        {post.title}
                        <span className={styles.postId}>{post.id}</span>
                    </p>

                    <p className={styles.postBody}>{post.body}</p>
                </div>

                <div className={styles.comments}>{commentList}</div>
            </div>
        </>
    );
}

export default PostDetail;
