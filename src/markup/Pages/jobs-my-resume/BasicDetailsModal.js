import React from 'react';
import { Form, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { PatternFormat } from 'react-number-format';

export function BasicDetailsModal({ basicdetails, setBasicDetails }) {


   return <Modal className="modal fade browse-job modal-bx-info editor" show={basicdetails} onHide={setBasicDetails}>
      <div className="modal-dialog my-0" role="document">
         <div className="modal-content">
            <div className="modal-header">
               <h5 className="modal-title" id="ProfilenameModalLongTitle">Detalles Básicos</h5>
               <button type="button" className="close" onClick={() => setBasicDetails(false)}>
                  <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div className="modal-body">
               <form>
                  <div className="row">
                     <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                           <label>Tu Nombre</label>
                           <input type="email" className="form-control" placeholder="" />
                        </div>
                     </div>
                     {/* <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                           <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                 <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" id="fresher" name="example1" />
                                    <label className="custom-control-label" htmlFor="fresher">Fresher</label>
                                 </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                                 <div className="custom-control custom-radio">
                                    <input type="radio" className="custom-control-input" id="experienced" name="example1" />
                                    <label className="custom-control-label" htmlFor="experienced">Experienced</label>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div> */}
                     <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                           <label>Selecciona tu Pais</label>
                           <Form.Control as="select">
                              <option>India</option>
                              <option>Australia</option>
                              <option>Bahrain</option>
                              <option>China</option>
                              <option>Dubai</option>
                              <option>France</option>
                              <option>Germany</option>
                              <option>Hong Kong</option>
                              <option>Kuwait</option>
                           </Form.Control>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                           <label>Selecciona tu Ciudad</label>
                           <Form.Control as="select">
                              <option>India</option>
                              <option>Australia</option>
                              <option>Bahrain</option>
                              <option>China</option>
                              <option>Dubai</option>
                              <option>France</option>
                              <option>Germany</option>
                              <option>Hong Kong</option>
                              <option>Kuwait</option>
                           </Form.Control>
                        </div>
                     </div>

                     <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                           <label>Número de Contacto</label>
                           <div className="">
                              <PatternFormat
                                 className="form-control"
                                 format='(###)-###-####'
                              />
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                           <label>Email</label>
                           <div className="">
                             <input type="email" className="form-control" placeholder="" />
                           </div>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
            <div className="modal-footer">
               <button type="button" className="site-button" onClick={() => setBasicDetails(false)}>Cancel</button>
               <button type="button" className="site-button">Save</button>
            </div>
         </div>
      </div>
   </Modal>
}