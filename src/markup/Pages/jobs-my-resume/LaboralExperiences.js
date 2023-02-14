import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function LaboralExperiences() {
   const [modalOpen, setModalOpen] = useState(false);

   return <div id="employment_bx" className="job-bx bg-white m-b30 ">
      <div className="d-flex">
         <h5 className="m-b15">Experiencias Laborales</h5>
         <Link to={"#"} onClick={() => setModalOpen(true)} className="site-button add-btn button-sm"><i className="bi bi-plus"></i> Nueva</Link>
      </div>
      <div className='list-row'>
         <div className='list-line'>
            <div className='d-flex justify-content-between'>
               <h6 className="font-14 m-b0">Junior Software Developer</h6>
               <span onClick={() => setModalOpen(true)} className="site-button add-btn button-sm"><i className="fa fa-pencil m-r5"></i> Editar</span>
            </div>
            <p className="m-b0">W3itexperts</p>
            <p className="m-b0">Oct 2015 to Present (3 years 4 months)</p>
            <p className="m-b0">Available to join in 1 Months</p>
            <p className="m-b0">Junior Software Developer</p>
         </div>
         <div className='list-line'>
            <div className='d-flex justify-content-between'>
               <h6 className="font-14 m-b0">Junior Software Developer</h6>
               <span onClick={() => setModalOpen(true)} className="site-button add-btn button-sm"><i className="fa fa-pencil m-r5"></i> Editar</span>
            </div>
            <p className="m-b0">W3itexperts</p>
            <p className="m-b0">Oct 2015 to Present (3 years 4 months)</p>
            <p className="m-b0">Available to join in 1 Months</p>
            <p className="m-b0">Junior Software Developer</p>
         </div>

         <div className='list-line'>
            <div className='d-flex justify-content-between'>
               <h6 className="font-14 m-b0">Junior Software Developer</h6>
               <span onClick={() => setModalOpen(true)} className="site-button add-btn button-sm"><i className="fa fa-pencil m-r5"></i> Editar</span>
            </div>
            <p className="m-b0">W3itexperts</p>
            <p className="m-b0">Oct 2015 to Present (3 years 4 months)</p>
            <p className="m-b0">Available to join in 1 Months</p>
            <p className="m-b0">Junior Software Developer</p>
         </div>
      </div>

      <Modal show={modalOpen} onHide={setModalOpen} className="modal fade modal-bx-info editor" >
         <div className="modal-dialog my-0" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="EmploymentModalLongTitle">Agregar Nueva Experiencia Laboral</h5>
                  <button type="button" className="close" onClick={() => setModalOpen(false)}>
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div className="modal-body">
                  <form>
                     <div className="row">
                        <div className="col-lg-12 col-md-12">
                           <div className="form-group">
                              <label>Nombre de la Compañia</label>
                              <input type="email" className="form-control" placeholder="Enter Your Organization" />
                           </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                           <div className="form-group">
                              <label>Tu Cargo en la Compañia</label>
                              <input type="email" className="form-control" placeholder="Introduce tu cargo" />
                           </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                           <div className="form-group">
                              <label>Es esta tu actual compañia?</label>
                              <div className="row">
                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <div className="custom-control custom-radio">
                                       <input type="radio" className="custom-control-input" id="employ_yes" name="example1" />
                                       <label className="custom-control-label" htmlFor="employ_yes">Si</label>
                                    </div>
                                 </div>
                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <div className="custom-control custom-radio">
                                       <input type="radio" className="custom-control-input" id="employ_no" name="example1" />
                                       <label className="custom-control-label" htmlFor="employ_no">No</label>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                           <div className="form-group">
                              <label>Empezé a trabajar en esta compañia desde:</label>
                              <div className="row">
                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <Form.Control as="select">
                                       <option>Enero</option>
                                       <option>Febrero</option>
                                       <option>Marzo</option>
                                       <option>Abril</option>
                                       <option>Mayo</option>
                                       <option>Junio</option>
                                       <option>Julio</option>
                                       <option>Agosto</option>
                                       <option>Septiembre</option>
                                       <option>Octubre</option>
                                       <option>Noviembre</option>
                                       <option>Diciembre</option>
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
                              <label>Acabé de trabajar en esta empresa:</label>
                              <div className="row">
                                 <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                    <Form.Control as="select">
                                       <option>Enero</option>
                                       <option>Febrero</option>
                                       <option>Marzo</option>
                                       <option>Abril</option>
                                       <option>Mayo</option>
                                       <option>Junio</option>
                                       <option>Julio</option>
                                       <option>Agosto</option>
                                       <option>Septiembre</option>
                                       <option>Octubre</option>
                                       <option>Noviembre</option>
                                       <option>Diciembre</option>
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
                              <label>Describe Tus Labores en esta Empresa:</label>
                              <textarea className="form-control" placeholder="Introduce tus labores en esta empresa"></textarea>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="modal-footer">
                  <button type="button" className="site-button" onClick={() => setModalOpen(false)} >Cancel</button>
                  <button type="button" className="site-button">Save</button>
               </div>
            </div>
         </div>
      </Modal>
   </div >
}