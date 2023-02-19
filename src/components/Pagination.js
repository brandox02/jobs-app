import React from 'react';
import { Link } from 'react-router-dom';

export function Pagination({ page, setPage, pageQuantity }) {
   return (
      <div className="pagination-bx m-t30 float-right">
         <ul className="pagination">
            <li
               className="previous"
               onClick={() => setPage(page - (page > 0 ? 1 : 0))}
            >
               <Link to={"#"}><i className="ti-arrow-left"></i>
               </Link>
            </li>
            {[...Array(pageQuantity)].map((_, index) => (
               <li className={page === index ? 'active' : ''}><Link to={"#"} onClick={() => setPage(index)}>{index + 1}</Link></li>
            ))}
            <li className="next">
               <Link
                  to={"#"}
                  onClick={() => setPage(page + (page + 1 < pageQuantity ? 1 : 0))}
               >
                  <i className="ti-arrow-right"></i>
               </Link>
            </li>
         </ul>
      </div>
   )
}