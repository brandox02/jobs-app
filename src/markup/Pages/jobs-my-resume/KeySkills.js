import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Form } from '../../../components/form/Form';
import { RHFTextInput } from '../../../components/form/RHFTextInput';
import { useForm } from 'react-hook-form';

export function KeySkills({ methods: { watch, setValue }, isViewingCandidate }) {
   const keySkillsMethods = useForm({ defaultValues: { text: '' } });
   const setModalOpen = value => setValue('keySkillsModalOpen', value);
   const modalOpen = watch('keySkillsModalOpen');

   useEffect(() => {
      keySkillsMethods.setValue('text', watch('keySkills').join(','));
      // eslint-disable-next-line
   }, [watch('keySkills')]);

   function onSubmit(data) {
      const items = data.text.split(',');
      setValue('keySkills', items);
      keySkillsMethods.reset();
      setModalOpen(false);
   }

   return <div id="key_skills_bx" className="job-bx bg-white m-b30">
      <div className="d-flex">
         <h5 className="m-b15">Habilidades Clave</h5>
         {!isViewingCandidate && (
            <Link
               to={"#"}
               data-toggle="modal"
               data-target="#keyskills"
               onClick={() => setModalOpen(true)}
               className="site-button add-btn button-sm"
            ><i className="fa fa-pencil m-r5"></i> Editar
            </Link>
         )}
      </div>
      <div className="job-time mr-auto">
         {watch('keySkills').map(item => (
            <Link to={"#"} className="mr-1"><span key={item}>{item}</span></Link>
         ))}
      </div>

      <Modal show={modalOpen} onHide={setModalOpen} className="modal fade modal-bx-info editor">
         <Form methods={keySkillsMethods} onSubmit={onSubmit}>
            <div className="modal-dialog my-0" role="document">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="KeyskillsModalLongTitle">Habilidades Clave</h5>
                     <button type="button" className="close" onClick={() => setModalOpen(false)}>
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div className="modal-body">
                     <p>Las habilidades clave son tags identificatorios que puedes utilizar para llamar la atención de los reclutadores. Por favor introduce cada una de ellas separadas por coma.</p>
                     <form>
                        <div className="row">
                           <div className="col-lg-12 col-md-12">
                              {/* <div className="form-group">
                              <input type="text" className="form-control tags_input" placeholder="html,css,bootstrap,photoshop" />
                           </div> */}
                              <RHFTextInput
                                 name={'text'}
                                 label={''}
                                 inputProps={{
                                    placeholder: 'html,css,bootstrap,photoshop',
                                    style: { letterSpacing: 2 },
                                    spellCheck: false
                                 }}
                                 inputPattern={{ value: /^[^\s,]+(,[^\s,]+)*$/, message: 'No debes tener espacios en blanco' }}
                              />
                           </div>
                        </div>
                     </form>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="site-button" onClick={() => setModalOpen(false)}>Cancelar</button>
                     <button type="submit" className="site-button">Guardar</button>
                  </div>
               </div>
            </div>
         </Form>
      </Modal>

   </div>
}