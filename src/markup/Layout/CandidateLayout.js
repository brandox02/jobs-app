import React from 'react';
import Profilesidebar from '../Element/Profilesidebar';
import Footer from './Footer';
import Header from "./Header";

export function candidateLayout(Children) {
   return function CandidateLayout() {
      return (
         <>
            <Header />
            <div className="page-content bg-white">
               <div className="content-block">
                  <div className="section-full bg-white browse-job p-t50 p-b20">
                     <div className="container">
                        <div className="row">
                           <Profilesidebar />
                           <div className="col-xl-9 col-lg-8 m-b30">
                              <div className="job-bx job-profile">
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
      )
   }

}