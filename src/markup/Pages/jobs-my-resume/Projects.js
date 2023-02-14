import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Projects() {
   const [modalOpen, setModalOpen] = useState(false);

   return <div id="projects_bx" className="job-bx bg-white m-b30">
      <div className="d-flex">
         <h5 className="m-b15">Proyectos</h5>
         <Link to={"#"} onClick={() => setModalOpen(true)} className="site-button add-btn button-sm"><i className=""></i> Nuevo</Link>
      </div>
      <div className='list-row'>
         <div className='list-line'>
            <div className='d-flex justify-content-between'>
               <h6 className="font-14 m-b0">Job BoardEdit</h6>
               <span onClick={() => setModalOpen(true)} className="site-button add-btn button-sm"><i className="fa fa-pencil m-r5"></i> Editar</span>
            </div>
            <p className="m-b0">w3itexpert (Offsite)</p>
            <p className="m-b0">Dec 2018 to Present (Full Time)</p>
            <p className="m-b0">Job Board Template</p>
         </div>
         <div className='list-line'>
            <div className='d-flex justify-content-between'>
               <h6 className="font-14 m-b0">Job BoardEdit</h6>
               <span onClick={() => setModalOpen(true)} className="site-button add-btn button-sm"><i className="fa fa-pencil m-r5"></i> Editar</span>
            </div>
            <p className="m-b0">w3itexpert (Offsite)</p>
            <p className="m-b0">Dec 2018 to Present (Full Time)</p>
            <p className="m-b0">Job Board Template</p>
         </div>
      </div>

      <Modal className="modal fade modal-bx-info editor" show={modalOpen} onHide={setModalOpen}>
         <div className="modal-dialog my-0" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="ProjectsModalLongTitle">Agregar Proyecto</h5>
                  <button type="button" className="close" onClick={() => setModalOpen(false)}>
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div className="modal-body">
                  <form>
                     <div className="row">
                        <div className="col-lg-12 col-md-12">
                           <div className="form-group">
                              <label>Proyecto</label>
                              <input type="email" className="form-control" placeholder="Introduce el nombre del proyecto" />
                           </div>
                        </div>
                        {/* <div className="col-lg-12 col-md-12">
                           <div className="form-group">
                              <label>Tag this project with your Employment/Education</label>
                              <select>
                                 <option>Class 12th</option>
                                 <option>Class 10th</option>
                              </select>
                           </div>
                        </div> */}
                        <div className="col-lg-12 col-md-12">
                           <div className="form-group">
                              <label>Cliente</label>
                              <input type="email" className="form-control" placeholder="Introduce el nombre del cliente" />
                           </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                           <div className="form-group">
                              <label>Estatus del Proyecto</label>
                              <div className="row">
                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <div className="custom-control custom-radio">
                                       <input type="radio" className="custom-control-input" id="inprogress" name="example1" />
                                       <label className="custom-control-label" htmlFor="inprogress">En Proceso</label>
                                    </div>
                                 </div>
                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <div className="custom-control custom-radio">
                                       <input type="radio" className="custom-control-input" id="finished" name="example1" />
                                       <label className="custom-control-label" htmlFor="finished">Finalizado</label>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-12 col-md-6">
                           <div className="form-group">
                              <label>Empezé a trabajar en ello desde:</label>
                              <div className="row">
                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <Form.Control as="select">
                                       <option>january</option>
                                       <option>february</option>
                                       <option>March</option>
                                       <option>April</option>
                                       <option>May</option>
                                       <option>Jun</option>
                                       <option>July</option>
                                       <option>August</option>
                                       <option>September</option>
                                       <option>October</option>
                                       <option>November</option>
                                       <option>December</option>
                                    </Form.Control>
                                 </div>
                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <Form.Control as="select">
                                       <option>2018</option>
                                       <option>2017</option>
                                       <option>2016</option>
                                       <option>2015</option>
                                       <option>2014</option>
                                       <option>2013</option>
                                       <option>2012</option>
                                       <option>2011</option>
                                       <option>2010</option>
                                       <option>2009</option>
                                       <option>2008</option>
                                       <option>2007</option>
                                       <option>2006</option>
                                       <option>2005</option>
                                       <option>2004</option>
                                       <option>2003</option>
                                       <option>2002</option>
                                       <option>2001</option>
                                    </Form.Control>
                                 </div>

                              </div>
                           </div>
                        </div>
                        <div className="col-lg-12 col-md-6">
                           <div className="form-group">
                              <label>Trabajé en ello hasta:</label>
                              <div className="row">
                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <Form.Control as="select">
                                       <option>january</option>
                                       <option>february</option>
                                       <option>March</option>
                                       <option>April</option>
                                       <option>May</option>
                                       <option>Jun</option>
                                       <option>July</option>
                                       <option>August</option>
                                       <option>September</option>
                                       <option>October</option>
                                       <option>November</option>
                                       <option>December</option>
                                    </Form.Control>
                                 </div>
                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <Form.Control as="select">
                                       <option>2018</option>
                                       <option>2017</option>
                                       <option>2016</option>
                                       <option>2015</option>
                                       <option>2014</option>
                                       <option>2013</option>
                                       <option>2012</option>
                                       <option>2011</option>
                                       <option>2010</option>
                                       <option>2009</option>
                                       <option>2008</option>
                                       <option>2007</option>
                                       <option>2006</option>
                                       <option>2005</option>
                                       <option>2004</option>
                                       <option>2003</option>
                                       <option>2002</option>
                                       <option>2001</option>
                                    </Form.Control>
                                 </div>

                              </div>
                           </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                           <div className="form-group">
                              <label>Detalles del Proyecto</label>
                              <textarea className="form-control" placeholder="Introduce el Detalle del Proyecto"></textarea>
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