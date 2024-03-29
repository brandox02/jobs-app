import React from 'react';
import { Link } from 'react-router-dom';

export function AdminBackofficeSideBar() {
   const items = [
      {
         text: 'Candidatos',
         to: '/admin-backoffice-candidates',
         iconClassname: 'fa fa-user-o'
      },
      // {
      //    text: 'Publicar una Vacante',
      //    to: '/company-post-jobs',
      //    iconClassname: 'fa fa-file-text-o'
      // },
      {
         text: 'Compañias',
         to: '/admin-backoffice-companies',
         iconClassname: 'fa fa-briefcase'
      },
      {
         text: 'Solicitudes',
         to: '/admin-backoffice-requests',
         iconClassname: 'fa fa-id-card-o'
      },
      {
         text: `Banco de CV's`,
         to: '/admin-backoffice-users-bank',
         iconClassname: 'fa fa-key'
      },
   ];
   // const companyName = user?.companyProfile?.name || '';
   return (
      <div className="col-xl-3 col-lg-4 m-b30">
         <div className="sticky-top">
            <div className="candidate-info company-info">
               <div className="candidate-detail text-center">
                  {/* <div className="canditate-des">
                     <Link to={"#"}>
                        <img alt="" src={require("../images/logo/icon3.jpg")} />
                     </Link>
                     <div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
                        <input type="file" className="update-flie" />
                        <i className="fa fa-pencil"></i>
                     </div>
                  </div>
                  <div className="candidate-title">
                     <h4 className="m-b5"><Link to={"#"}>{companyName}</Link></h4>
                  </div> */}
                  ADMINISTRADOR
               </div>
               <ul>
                  {items.map(item => (
                     <li
                        onClick={item?.onClick ? item.onClick : () => { }}
                        key={item.to}
                     >
                        <Link to={item.to} className={window.location.href.includes(item.to) ? 'active' : ''}>
                           <i className={item.iconClassname} aria-hidden="true"></i>
                           <span>{item.text}</span>
                        </Link>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   )
}