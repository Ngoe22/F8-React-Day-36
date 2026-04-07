

import React from "react";
import styles from "./Pagination.module.scss";

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <li
                key={i}
                className={`${styles.pageItem} ${currentPage === i ? styles.active : ""}`}
                onClick={() => onPageChange(i)}
            >
                {i}
            </li>,
        );
    }

    return (
        <div className={styles.pagination}>
            <div
                className={`${styles.buttons} ${currentPage === 1 ? styles.disabled : ""}`}
            >
                <button onClick={() => onPageChange(1)}>First</button>
                <button onClick={() => onPageChange(currentPage - 1)}>
                    Previous
                </button>
            </div>
            <ul className={styles.pageList}>{pages}</ul>
            <div
                className={`${styles.buttons} ${currentPage === totalPages ? styles.disabled : ""}`}
            >
                <button onClick={() => onPageChange(currentPage + 1)}>
                    Next
                </button>
                <button onClick={() => onPageChange(totalPages)}>Last</button>
            </div>
        </div>
    );
}

export default Pagination;
