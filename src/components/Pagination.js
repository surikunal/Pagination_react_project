import React from 'react';

const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 0; i < totalPosts/postsPerPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;