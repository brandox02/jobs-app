import React from 'react';
import { Link } from 'react-router-dom';



export function CompanySideBar() {
   const items = [
      {
         text: 'Información de Perfil',
         to: '/company-profile',
         iconClassname: 'fa fa-user-o'
      },
      {
         text: 'Publicar una Vacante',
         to: '/company-post-jobs',
         iconClassname: 'fa fa-file-text-o'
      },
      {
         text: 'Administrar Vacantes',
         to: '/company-manage-job',
         iconClassname: 'fa fa-briefcase'
      },
      {
         text: 'Postulaciones',
         to: '/company-resume',
         iconClassname: 'fa fa-id-card-o'
      },
      {
         text: 'Cambiar contraseña',
         to: '/company-change-password',
         iconClassname: 'fa fa-key'
      },
      {
         text: 'Cerrar Sesión',
         to: './',
         iconClassname: 'fa fa-sign-out'
      }
   ]
   return (
      <div className="col-xl-3 col-lg-4 m-b30">
         <div className="sticky-top">
            <div className="candidate-info company-info">
               <div className="candidate-detail text-center">
                  <div className="canditate-des">
                     <Link to={"#"}>
                        <img alt="" src={require("./../images/logo/icon3.jpg")} />
                     </Link>
                     <div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
                        <input type="file" className="update-flie" />
                        <i className="fa fa-pencil"></i>
                     </div>
                  </div>
                  <div className="candidate-title">
                     <h4 className="m-b5"><Link to={"#"}>@COMPANY</Link></h4>
                  </div>
               </div>
               <ul>
                  {items.map(item => (
                     <li><Link to={item.to} className={window.location.href.includes(item.to) ? 'active' : ''}>
                        <i className={item.iconClassname} aria-hidden="true"></i>
                        <span>{item.text}</span></Link></li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   )
}