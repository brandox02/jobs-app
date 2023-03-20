import React from 'react';
import { CompanySideBar } from '../../components/CompanySideBar';
import Footer from './Footer';
import Header from './Header';


export function companyLayout(Children) {
   return function CompanyLayout() {
      return <>
         <Header />
         <div className="page-content bg-white">
            <div className="content-block">
               <div className="section-full bg-white p-t50 p-b20">
                  <div className="container">
                     <div className="row">
                        <CompanySideBar />
                        <div className="col-xl-9 col-lg-8 m-b30">
                           <div className="job-bx submit-resume">
                              <Children />
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