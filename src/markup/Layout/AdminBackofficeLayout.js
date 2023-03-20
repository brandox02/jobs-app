import React from 'react';
import { AdminBackofficeSideBar } from '../../components/AdminBackofficeSideBar';
import Footer from './Footer';
import Header from "./Header"


export function adminBackofficeLayout(Children) {

   return function AdminBackofficeLayout() {
      return <>
         <Header />
         <div className="page-content bg-white">
            <div className="content-block">
               <div className="section-full bg-white p-t50 p-b20">
                  <div className="container">
                     <div className="row">
                        <AdminBackofficeSideBar />
                        <div className="col-xl-9 col-lg-9 m-b30">
                           <div className="job-bx submit-resume">
                              <div className="job-bx-title clearfix">
                                 <Children />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
         <Footer />
      </>
   }
}