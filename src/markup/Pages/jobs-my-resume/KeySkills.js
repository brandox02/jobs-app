import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function KeySkills() {
   const [modalOpen, setModalOpen] = useState(false);

   return <div id="key_skills_bx" className="job-bx bg-white m-b30">
      <div className="d-flex">
         <h5 className="m-b15">Habilidades Clave</h5>
         <Link to={"#"} data-toggle="modal" data-target="#keyskills" onClick={() => setModalOpen(true)} className="site-button add-btn button-sm"><i className="fa fa-pencil m-r5"></i> Editar</Link>
      </div>
      <div className="job-time mr-auto">
         <Link to={"#"} className="mr-1"><span>Javascript</span></Link>
         <Link to={"#"} className="mr-1"><span>CSS</span></Link>
         <Link to={"#"} className="mr-1"><span>HTML</span></Link>
         <Link to={"#"} className="mr-1"><span>Bootstrap</span></Link>
         <Link to={"#"} className="mr-1"><span>Web Designing</span></Link>
         <Link to={"#"} className="mr-1"><span>Photoshop</span></Link>
      </div>

      <Modal show={modalOpen} onHide={setModalOpen} className="modal fade modal-bx-info editor">
         <div className="modal-dialog my-0" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="KeyskillsModalLongTitle">Key Skills</h5>
                  <button type="button" className="close" onClick={() => setModalOpen(false)}>
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div className="modal-body">
                  <p>Las habilidades clave son tags identificatorios que puedes utilizar para llamar la atención de los reclutadores. Por favor introduce cada una de ellas separadas por coma.</p>
                  <form>
                     <div className="row">
                        <div className="col-lg-12 col-md-12">
                           <div className="form-group">
                              <input type="text" className="form-control tags_input" placeholder="html,css,bootstrap,photoshop" />
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="modal-footer">
                  <button type="button" className="site-button" onClick={() => setModalOpen(false)}>Cancelar</button>
                  <button type="button" className="site-button">Guardar</button>
               </div>
            </div>
         </div>
      </Modal>

   </div>
}