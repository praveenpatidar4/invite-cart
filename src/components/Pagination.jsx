import React from "react";
import { Link } from "react-router-dom";

function Pagination() {
  return (
    <nav className="ic_pagination_wrap">
      <ul className="pagination ic_pagination">
        <li className="page-item ic_page_item">
          <Link className="page-link ic_page_link ic_page_link_prev" to="#" aria-label="Previous">
            <span aria-hidden="true">&larr;</span>
          </Link>
        </li>
        <li className="page-item ic_page_item active">
          <Link className="page-link ic_page_link" to="#">
            1
          </Link>
        </li>
        <li className="page-item ic_page_item">
          <Link className="page-link ic_page_link" to="#">
            2
          </Link>
        </li>
        <li className="page-item ic_page_item">
          <Link className="page-link ic_page_link" to="#">
            3
          </Link>
        </li>
        <li className="page-item ic_page_item">
          <Link className="page-link ic_page_link ic_page_link_next" to="#" aria-label="Next">
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
