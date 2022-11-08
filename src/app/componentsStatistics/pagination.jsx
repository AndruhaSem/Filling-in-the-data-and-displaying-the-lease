import React from "react";


function Pagination() {
    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link">1</button>
                </li>
                <li>
                    <button className="page-link">2</button>
                </li>
                <li>
                    <button className="page-link">3</button>
                </li>
            </ul>
        </nav>
    )
}
export default Pagination