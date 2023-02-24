import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { RHFTextInput } from '../../../components/form/RHFTextInput';
import { RHFRadioGroup } from '../../../components/form/RHFRadioGroup';
import { RHFTextarea } from '../../../components/form/RHFTextarea';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import { Form } from '../../../components/form/Form';

const defaultValues = {
   name: '',
   customer: '',
   isFinished: true,
   startDate: '',
   endDate: '',
   description: ''
};

export function Projects({ methods: { watch, setValue } }) {
   const projectsMethods = useForm({ defaultValues });
   const setModalOpen = value => setValue('projectsModalOpen', value);
   const modalOpen = watch('projectsModalOpen');

   function onSubmit(data) {
      const isEditing = !!data?.id;
      let items = null;
      if (isEditing) {
         items = watch('projects').map(item => item.id === data.id ? data : item);
      } else {
         data.id = uuid();
         items = [...watch('projects'), data];
      }
      setValue('projects', items);
      projectsMethods.reset(defaultValues);
      setModalOpen(false);
   }

   const formatDate = ({ startDate, endDate }) => {
      const from = dayjs(startDate).format('MMM YYYY');
      const to = dayjs(endDate).format('MMM YYYY');
      // const diffYear = dayjs(isFinished ? dayjs() : dayjs(endDate)).diff(startDate, 'years');
      // const diffMonths = dayjs(isFinished ? dayjs() : dayjs(endDate)).diff(startDate, 'months');

      return `${from} hasta ${to}`;
   }

   const deleteItem = id => setValue('projects', watch('projects').filter(item => item.id !== id));

   const editItem = item => {
      projectsMethods.reset(item);
      setModalOpen(true);
   }

   return <div id="projects_bx" className="job-bx bg-white m-b30">
      <div className="d-flex">
         <h5 className="m-b15">Proyectos</h5>
         <Link to={"#"} onClick={() => setModalOpen(true)} className="site-button add-btn button-sm"><i className=""></i> Nuevo</Link>
      </div>
      <div className='list-row'>
         {watch('projects').map(project => (
            <div className='list-line'>
               <div className='d-flex justify-content-between'>
                  <h6 className="font-14 m-b0">{project.name}</h6>
                  <div style={{ gap: 4, display: 'flex' }}>
                     <span
                        onClick={() => editItem(project)}
                        className="site-button add-btn button-sm"
                     ><i className="fa fa-pencil m-r5"></i> Editar</span>
                     <span
                        onClick={() => deleteItem(project.id)}
                        className="site-button add-btn button-sm"
                     >Borrar</span>
                  </div>
               </div>
               <p className="m-b0">{project.customer}</p>
               <p className="m-b0">{formatDate(project)}</p>
               <p className="m-b0">{project.description}</p>
            </div>
         ))}
      </div>

      <Modal className="modal fade modal-bx-info editor" show={modalOpen} onHide={setModalOpen}>
         <Form methods={projectsMethods} onSubmit={onSubmit}>
            <div className="modal-dialog my-0" role="document">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="ProjectsModalLongTitle">Agregar Proyecto</h5>
                     <button type="button" className="close" onClick={() => setModalOpen(false)}>
                        <span aria-hidden="true">&times;</span>
                     </button>
                  </div>
                  <div className="modal-body">
                     <div className="row">
                        <div className="col-lg-12 col-md-12">
                           <RHFTextInput
                              name={'name'}
                              label={'Proyecto'}
                              inputProps={{ placeholder: 'Introduce el nombre del proyecto' }}
                           />
                        </div>
                        <div className="col-lg-12 col-md-12">
                           <RHFTextInput
                              name={'customer'}
                              label={'Cliente'}
                              inputProps={{ placeholder: 'Introduce el nombre del cliente' }}
                           />
                        </div>
                        <div className="col-lg-12 col-md-12">
                           <RHFRadioGroup
                              label={'Estatus del Proyecto'}
                              name={'isFinished'}
                              options={[{ label: 'Finalizado', value: true }, { label: 'En proceso', value: false }]}
                           />
                        </div>
                        <div className="col-lg-12 col-md-6">
                           <RHFTextInput
                              name={'startDate'}
                              label={'Fecha de Inicio del Proyecto'}
                              inputProps={{ placeholder: 'Introduce la fecha de inicio del proyecto', type: 'date' }}
                           />
                        </div>
                        <div className="col-lg-12 col-md-6">
                           <RHFTextInput
                              name={'endDate'}
                              label={'Fecha de Finalización del Proyecto'}
                              inputProps={{ placeholder: 'Introduce la fecha de finalización del proyecto', type: 'date' }}
                           />
                        </div>
                        <div className="col-lg-12 col-md-12">
                           <RHFTextarea
                              name={'description'}
                              label={'Descripción'}
                              inputProps={{ placeholder: 'Introduce la descripción del proyecto' }}
                           />
                        </div>
                     </div>
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