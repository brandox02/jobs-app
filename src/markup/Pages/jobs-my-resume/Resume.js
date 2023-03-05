import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { RHFTextarea } from '../../../components/form/RHFTextarea';
import { Form } from '../../../components/form/Form';

export function Resume({ methods: { watch, setValue }, isViewingCandidate }) {
   const resumeMethods = useForm({ defaultValues: { text: '' } });
   const setResumeModalOpen = value => setValue('resumeModalOpen', value);
   const resumeModalOpen = watch('resumeModalOpen');

   useEffect(() => {
      resumeMethods.setValue('text', watch('resume'));
      // eslint-disable-next-line
   }, [watch('resumeModalOpen')]);

   function onSubmit(data) {
      setValue('resume', data.text);
      resumeMethods.reset();
      setResumeModalOpen(false);
   }

   return <div id="resume_headline_bx" className=" job-bx bg-white m-b30">
      <Modal show={resumeModalOpen} onHide={setResumeModalOpen} className="modal fade modal-bx-info editor" >
         <div className="modal-dialog my-0" style={{ width: '100%' }} role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="ResumeheadlineModalLongTitle">Resumen</h5>
                  <button type="button" className="close" onClick={() => setResumeModalOpen(false)}>
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <Form methods={resumeMethods} onSubmit={onSubmit}>
                  <div className="modal-body">
                     <p>Es lo primero que notan los reclutadores en tu perfil. Escribe de manera concisa qué te hace la persona única y adecuada para el trabajo que estás buscando.</p>
                     <p>Su resumen de perfil debe mencionar los aspectos más destacados de su carrera y educación, cuáles son sus intereses profesionales y qué tipo de carrera está buscando.</p>
                     <div className="row">
                        <div className="col-lg-12 col-md-12">
                           <RHFTextarea
                              name={'text'}
                              label={''}
                              inputProps={{ placeholder: 'Escribe tu resumen descriptivo' }}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="site-button" onClick={() => setResumeModalOpen(false)}>Cancelar</button>
                     <button type="submit" className="site-button">Guardar</button>
                  </div>
               </Form>
            </div>
         </div>
      </Modal>
      <div className="d-flex">
         <h5 className="m-b15">Resumen</h5>
         {!isViewingCandidate && <Link to={"#"} className="site-button add-btn button-sm" onClick={() => setResumeModalOpen(true)}>
            <i className="fa fa-pencil m-r5"></i> Editar
         </Link>}
      </div>
      <p className="m-b0">{watch('resume')}</p>
   </div>
}