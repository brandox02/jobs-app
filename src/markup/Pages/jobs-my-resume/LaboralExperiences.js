import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { RHFTextarea } from '../../../components/form/RHFTextarea';
import { Form } from '../../../components/form/Form';
import { RHFTextInput } from '../../../components/form/RHFTextInput';
import { RHFRadioGroup } from '../../../components/form/RHFRadioGroup';
import uuid from 'uuid';
import dayjs from 'dayjs';

const defaultValues = {
   companyName: '',
   charge: '',
   isYourCurrentJob: null,
   startDate: '',
   endDate: '',
   description: ''
}

export function LaboralExperiences({ methods: { watch, setValue } }) {
   const laboralExperiencesMethods = useForm({ defaultValues });
   const setModalOpen = value => setValue('laboralExperiencesModalOpen', value);
   const modalOpen = watch('laboralExperiencesModalOpen');

   function onSubmit(data) {
      const isEditing = !!data?.id;
      let items = null;
      if (isEditing) {
         items = watch('laboralExperiences').map(item => item.id === data.id ? data : item);
      } else {
         data.id = uuid();
         items = [...watch('laboralExperiences'), data];
      }

      setValue('laboralExperiences', items);
      laboralExperiencesMethods.reset()
      setModalOpen(false);
   }

   const formatDate = ({ startDate, isYourCurrentJob, endDate }) => {
      let from = dayjs(startDate).format('MMM YYYY');
      let to = dayjs(endDate).format('MMM YYYY');
      const diffYear = dayjs(isYourCurrentJob ? dayjs() : dayjs(endDate)).diff(startDate, 'years');
      const diffMonths = dayjs(isYourCurrentJob ? dayjs() : dayjs(endDate)).diff(startDate, 'months');

      return `${from} hasta ${isYourCurrentJob ? 'actualidad' : to} (${diffYear} años ${diffMonths} mes${diffMonths === 1 ? '' : 'es'})`;
   }

   const deleteItem = id => setValue('laboralExperiences', watch('laboralExperiences').filter(item => item.id !== id));

   const editItem = item => {
      laboralExperiencesMethods.reset(item);
      setModalOpen(true);
   }

   return <div id="employment_bx" className="job-bx bg-white m-b30 ">
      <div className="d-flex">
         <h5 className="m-b15">Experiencias Laborales</h5>
         <Link to={"#"} onClick={() => setModalOpen(true)} className="site-button add-btn button-sm"><i className="bi bi-plus"></i> Nueva</Link>
      </div>
      <div className='list-row'>
         {watch('laboralExperiences').map(item => (
            <div className='list-line' key={item.id}>

               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                     <h6 className="font-14 m-b0">{item.charge}</h6>
                     <p className="m-b0">{item.companyName}</p>
                     <p className="m-b0">{formatDate(item)}</p>
                     <p className="m-b0">{item.description}</p>
                  </div>
                  <div style={{}}>
                     <span onClick={() => editItem(item)} className="site-button add-btn button-sm">
                        <i className="fa fa-pencil m-r5"></i> Editar
                     </span>
                     <span style={{ marginLeft: 3 }} onClick={() => deleteItem(item.id)} className="site-button add-btn button-sm">
                        <i className=""></i> Borrar
                     </span>
                  </div>
               </div>

            </div>
         ))}
      </div>
      <Modal show={modalOpen} onHide={setModalOpen} className="modal fade modal-bx-info editor" >
         <Form methods={laboralExperiencesMethods} onSubmit={onSubmit}>
            <div className="modal-dialog my-0" role="document">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="EmploymentModalLongTitle">Agregar Nueva Experiencia Laboral</h5>
                     <button type="button" className="close" onClick={() => setModalOpen(false)}>
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div className="modal-body">
                     <div className="row">
                        <div className="col-lg-12 col-md-12">
                           <RHFTextInput
                              name={'companyName'}
                              label={'Nombre de la Compañia'}
                              inputProps={{ placeholder: 'Introduce el nombre de la compañia' }}
                           />
                        </div>
                        <div className="col-lg-12 col-md-12">
                           <RHFTextInput
                              name={'charge'}
                              label={'Tu Cargo en la Compañia'}
                              inputProps={{ placeholder: 'Introduce tu cargo' }}
                           />
                        </div>
                        <div className="col-lg-12 col-md-12">
                           <RHFRadioGroup
                              name={'isYourCurrentJob'}
                              label={'Es esta tu actual compañia?'}
                              options={[{ label: 'Si', value: true }, { label: 'No', value: false }]}
                           />
                        </div>
                        <div className="col-lg-12 col-md-12">
                           <RHFTextInput
                              inputProps={{ type: 'date' }}
                              name={'startDate'}
                              label={'Fecha de Inicio'}
                           />
                        </div>
                        {!laboralExperiencesMethods.watch('isYourCurrentJob') && (
                           <div className="col-lg-12 col-md-12">
                              <RHFTextInput
                                 inputProps={{ type: 'date' }}
                                 name={'endDate'}
                                 label={'Fecha de Salida'}
                                 required={!laboralExperiencesMethods.watch('isYourCurrentJob')}
                              />
                           </div>
                        )}
                        <div className="col-lg-12 col-md-12">
                           <RHFTextarea
                              name={'description'}
                              label={'Descripción'}
                              inputProps={{ placeholder: 'Describe tus labores en esta empresa' }}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="site-button" onClick={() => setModalOpen(false)} >Cancelar</button>
                     <button type="submit" className="site-button">Guardar</button>
                  </div>
               </div>
            </div>

         </Form>
      </Modal>
   </div >
}