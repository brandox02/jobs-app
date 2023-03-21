import React from 'react';
import { Modal as UIModal } from 'react-bootstrap';

export function Modal({ open, setOpen, deleteJob }) {
   const onClose = () => setOpen(null);

   function handleCommit() {
      deleteJob(open.id);
      onClose();
   }

   return (
      <UIModal show={open} onHide={setOpen} className="modal fade modal-bx-info editor">
         <div className="modal-dialog my-0" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="ResumeheadlineModalLongTitle">¿Estás seguro que deseas eliminar esta vacante?</h5>
                  <button type="button" className="close" onClick={onClose}>
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div className="modal-body">
                  <p>¿Estás seguro que deseas eliminar esta vacante? Una vez borrada no hay vuelta atrás.</p>
               </div>
               <div className="modal-footer">
                  <button type="button" className="site-button" onClick={onClose}>Cancelar</button>
                  <button type="button" className="site-button" onClick={handleCommit}>Confirmar</button>
               </div>
            </div>
         </div>
      </UIModal>
   )
}