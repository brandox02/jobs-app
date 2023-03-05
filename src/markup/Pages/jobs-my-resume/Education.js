import React, { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import { Form } from '../../../components/form/Form';
import { RHFTextInput } from '../../../components/form/RHFTextInput';
import { RHFRadioGroup } from '../../../components/form/RHFRadioGroup';
import { RHFSelect } from '../../../components/form/RHFSelect';
import { v4 as uuid } from 'uuid';

const defaultValues = {
   educationId: null,
   education: null,
   title: null,
   institution: null,
   isStudyingHere: null,
   startDate: null,
   endDate: null
}

export function Education({ methods: { watch, setValue }, educations, isViewingCandidate }) {
   const educationMethods = useForm({ defaultValues });
   const setModalOpen = value => setValue('educationsModalOpen', value);
   const modalOpen = watch('educationsModalOpen');


   useEffect(() => {
      const items = educations.find(x => x.id === parseInt(educationMethods.watch('educationId')));
      educationMethods.setValue('education', items);
      // eslint-disable-next-line
   }, [educationMethods.watch('educationId')]);

   function onSubmit(data) {
      const isEditing = !!data?.id;
      let items = null;
      if (isEditing) {
         items = watch('educations').map(item => item.id === data.id ? data : item);
      } else {
         data.id = uuid();
         items = [...watch('educations'), data];
      }

      setValue('educations', items);
      educationMethods.reset(defaultValues);
      setModalOpen(false);
   }

   const formatDate = ({ startDate, isStudyingHere, endDate }) => {
      const from = dayjs(startDate).format('MMM YYYY');
      const to = dayjs(endDate).format('MMM YYYY');
      const diffYear = dayjs(isStudyingHere ? dayjs() : dayjs(endDate)).diff(startDate, 'years');
      const diffMonths = dayjs(isStudyingHere ? dayjs() : dayjs(endDate)).diff(startDate, 'months');

      return `${from} hasta ${isStudyingHere ? 'actualidad' : to} (${diffYear} años ${diffMonths} mes${diffMonths === 1 ? '' : 'es'})`;
   }

   const deleteItem = id => setValue('educations', watch('educations').filter(item => item.id !== id));

   const editItem = item => {
      educationMethods.reset(item);
      setModalOpen(true);
   }
   const onCancel = () => {
      educationMethods.reset(defaultValues);
      setModalOpen(false);
   }

   return <div id="education_bx" className="job-bx bg-white m-b30">
      <div className="d-flex">
         <h5 className="m-b15">Educación</h5>
         {!isViewingCandidate && <Link to={"#"} onClick={() => setModalOpen(true)} className="site-button add-btn button-sm"><i className=""></i> Nueva</Link>}
      </div>
      <div className="row">
         <div className="col-lg-12 col-md-12 col-sm-12">
            {watch('educations').map(item => {
               const { title, education, startDate, endDate, isStudyingHere, institution } = item;
               return (
                  <div className="" style={{}}>
                     {!isViewingCandidate && (<div style={{ position: 'absolute', right: 0 }}>
                        <span onClick={() => editItem(item)} className="site-button add-btn button-sm">
                           <i className="fa fa-pencil m-r5"></i> Editar
                        </span>
                        <span style={{ marginLeft: 3 }} onClick={() => deleteItem(item.id)} className="site-button add-btn button-sm">
                           <i className=""></i> Borrar
                        </span>
                     </div>)}
                     <label className="m-b0">{title}</label>
                     <span className="clearfix font-13">{institution}</span>
                     <span className="clearfix font-13">{education?.name}</span>
                     <span className="clearfix font-13">
                        {formatDate({ startDate, endDate, isStudyingHere })}
                     </span>
                  </div>
               )
            })}
         </div>
      </div>
      <Modal className="modal fade modal-bx-info editor" show={modalOpen} onHide={setModalOpen}>
         <Form methods={educationMethods} onSubmit={onSubmit}>
            <div className="modal-dialog my-0" role="document">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="EducationModalLongTitle">Educación</h5>
                     <button type="button" className="close" onClick={() => setModalOpen(false)}>
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div className="modal-body">
                     <form>
                        <div className="row">
                           <div className="col-lg-12 col-md-12">
                              <RHFSelect
                                 label={'Educación'}
                                 name={'educationId'}
                                 options={educations.map(({ name, id }) => ({ label: name, value: id }))}
                              />
                           </div>
                           <div className="col-lg-12 col-md-12">
                              <RHFTextInput
                                 label={'Curso/titulo/carrera'}
                                 name={'title'}
                              />
                           </div>
                           <div className="col-lg-12 col-md-12">
                              <RHFTextInput
                                 label={'Universidad/Instituto'}
                                 name={'institution'}
                              />
                           </div>
                           <div className="col-lg-12 col-md-12">
                              <RHFRadioGroup
                                 label={'Estas estudiando aquí actualmente?'}
                                 name={'isStudyingHere'}
                                 options={[{ label: 'Si', value: true }, { label: 'No', value: false }]}
                              />
                           </div>
                           <div className="col-lg-12 col-md-12">
                              <RHFTextInput
                                 label={'Inicio de Estudios'}
                                 name={'startDate'}
                                 inputProps={{ type: 'date' }}
                              />
                           </div>
                           {!educationMethods.watch('isStudyingHere') && (
                              <div className="col-lg-12 col-md-12">
                                 <RHFTextInput
                                    required={!educationMethods.watch('isStudyingHere')}
                                    label={'Finalización de Estudios'}
                                    name={'endDate'}
                                    inputProps={{ type: 'date' }}
                                 />
                              </div>
                           )}
                        </div>
                     </form>
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="site-button" onClick={onCancel}>Cancel</button>
                     <button type="submit" className="site-button">Save</button>
                  </div>
               </div>
            </div>
         </Form>
      </Modal>
   </div>
}