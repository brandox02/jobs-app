import React, { useState } from 'react';
import { Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Education() {
   const [modalOpen, setModalOpen] = useState(false);

   return <div id="education_bx" className="job-bx bg-white m-b30">
      <div className="d-flex">
         <h5 className="m-b15">Educación</h5>
         <Link to={"#"} onClick={() => setModalOpen(true)} className="site-button add-btn button-sm"><i className=""></i> Agregar</Link>
      </div>
      <p>Detalla la información concerniente a tus estudios profesionales</p>

      <div className="row">
         <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="clearfix m-b20">
               <div className='d-flex justify-content-between'>
                  <label className="m-b0">Ingenieria en Sistemas En Harvard</label>
                  <span onClick={() => setModalOpen(true)} className="site-button add-btn button-sm"><i className="fa fa-pencil m-r5"></i> Editar</span>
               </div>
               <span className="clearfix font-13">Agosto 2022 - Actualidad</span>
               <span className="clearfix font-13">Graduado</span>
            </div>
            <div className="clearfix m-b20">
               <div className='d-flex justify-content-between'>
                  <label className="m-b0">Ingenieria en Sistemas En Harvard</label>
                  <span onClick={() => setModalOpen(true)} className="site-button add-btn button-sm"><i className="fa fa-pencil m-r5"></i> Editar</span>
               </div>
               <span className="clearfix font-13">Agosto 2022 - Actualidad</span>
               <span className="clearfix font-13">Graduado</span>
            </div>

         </div>
      </div>

      <Modal className="modal fade modal-bx-info editor" show={modalOpen} onHide={setModalOpen}>
         <div className="modal-dialog my-0" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="EducationModalLongTitle">Education</h5>
                  <button type="button" className="close" onClick={() => setModalOpen(false)}>
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div className="modal-body">
                  <form>
                     <div className="row">
                        <div className="col-lg-12 col-md-12">
                           <div className="form-group">
                              <label>Educación</label>
                              <Form.Control as="select">
                                 <option>Graduado</option>
                                 <option>Maestría</option>
                                 <option>Doctorado</option>
                              </Form.Control>
                           </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                           <div className="form-group">
                              <label>Curso/titulo/carrera</label>
                              <input type="email" className="form-control" placeholder="Introduce el nombre del curso/titulo/carrera" />
                           </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                           <div className="form-group">
                              <label>Universidad/Instituto</label>
                              <input type="email" className="form-control" placeholder="Introduce la universidad/instituto donde realizaste tus estudios" />
                           </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                           <div className="form-group">
                              <label>Estas actualmente estudiando aquí?</label>
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
                              <label>Inicio de Estudios:</label>
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
                              <label>Finalización de Estudios:</label>
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
                     </div>
                  </form>
               </div>
               <div className="modal-footer">
                  <button type="button" className="site-button" onClick={() => setModalOpen(false)}>Cancel</button>
                  <button type="button" className="site-button">Save</button>
               </div>
            </div>
         </div>
      </Modal>
   </div>
}