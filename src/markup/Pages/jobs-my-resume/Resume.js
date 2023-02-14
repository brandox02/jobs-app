import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Resume() {
   const [resumeModalOpen, setResumeModalOpen] = useState(false);

   return <div id="resume_headline_bx" className=" job-bx bg-white m-b30">
      <Modal show={resumeModalOpen} onHide={setResumeModalOpen} className="modal fade modal-bx-info editor">
         <div className="modal-dialog my-0" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="ResumeheadlineModalLongTitle">Resume Headline</h5>
                  <button type="button" className="close" onClick={() => setResumeModalOpen(false)}>
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div className="modal-body">
                  <p>Es lo primero que notan los reclutadores en tu perfil. Escribe de manera concisa qué te hace la persona única y adecuada para el trabajo que estás buscando.</p>
                  <p>Su resumen de perfil debe mencionar los aspectos más destacados de su carrera y educación, cuáles son sus intereses profesionales y qué tipo de carrera está buscando.</p>
                  <p>Escriba un resumen significativo de más de 50 caracteres</p>
                  <form>
                     <div className="row">
                        <div className="col-lg-12 col-md-12">
                           <div className="form-group">
                              <textarea className="form-control" placeholder="Escribe tu resumen descriptivo"></textarea>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="modal-footer">
                  <button type="button" className="site-button" onClick={() => setResumeModalOpen(false)}>Cancel</button>
                  <button type="button" className="site-button">Save</button>
               </div>
            </div>
         </div>
      </Modal>
      <div className="d-flex">
         <h5 className="m-b15">Resumen</h5>
         <Link to={"#"} className="site-button add-btn button-sm" onClick={() => setResumeModalOpen(true)}>
            <i className="fa fa-pencil m-r5"></i> Editar
         </Link>
      </div>
      <p className="m-b0">Soy una persona que le gusta impresionar a los demás</p>
   </div>
}