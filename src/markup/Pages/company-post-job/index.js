import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import { CompanySideBar } from '../../../components/CompanySideBar';
import { useActions } from './useActions';
import { Form } from '../../../components/form/Form';
import { RHFTextInput } from '../../../components/form/RHFTextInput';
import { RHFCheckbox } from '../../../components/form/RHFCheckbox';
import { RHFSelect } from '../../../components/form/RHFSelect';
import { RHFNumberFormatInput } from '../../../components/form/RHFNumberFormatInput';
import { RHFTextarea } from '../../../components/form/RHFTextarea';

function CompanyPostJob() {
	const { methods, onSubmit, dataSelects, cities } = useActions();
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white p-t50 p-b20">
						<div className="container">
							<div className="row">
								<CompanySideBar />
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx submit-resume">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Publicar una Vacante</h5>
											<Link to={"/company-profile"} className="site-button right-arrow button-sm float-right">Back</Link>
										</div>
										<Form methods={methods} onSubmit={onSubmit}>
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<RHFTextInput
														name={'name'}
														label={'Titulo'}
														inputProps={{ placeholder: 'Introduce el titulo de la vacante' }}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFTextInput
														name={'contactEmail'}
														label={'Email de Contacto'}
														// eslint-disable-next-line
														inputPattern={{ value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' }}
														inputProps={{ placeholder: 'Introduce el email de contacto de la vacante' }}
													/>
												</div>
												<div className="col-lg-12 col-md-12">
													<RHFTextarea
														label={'Descripción'}
														name={'description'}
														inputProps={{ placeholder: 'Agrega una descripción detallada a esta vacante' }}
													/>
												</div>
												<div className="col-lg-8 col-md-8">
													<RHFTextInput
														required={false}
														name={'tags'}
														label={'Tags'}
														inputPattern={{ value: /^[^\s,]+(,[^\s,]+)*$/, message: 'No debes tener espacios en blanco' }}
														inputProps={{ placeholder: 'html,css,javascript', style: { letterSpacing: 2 } }}
													/>
												</div>
												<div className='d-flex align-items-center col-lg-4 col-md-4'>
													<RHFCheckbox
														name={'englishRequired'}
														label={'Ingles Requerido'}
														required={false}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFSelect
														label={'Contrato de Trabajo'}
														name={'employmentContractId'}
														options={(dataSelects?.employmentContracts || []).map(item => ({ value: item.id, label: item.name }))}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFSelect
														label={'Modalidad de Trabajo'}
														name={'workingModalityId'}
														options={(dataSelects?.workingModalities || []).map(item => ({ value: item.id, label: item.name }))}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFSelect
														label={'Horario de Trabajo'}
														name={'dailyWorkTimeId'}
														options={(dataSelects?.dailyWorkTimes || []).map(item => ({ value: item.id, label: item.name }))}
													/>
												</div>

												<div className="col-lg-6 col-md-6">
													<RHFSelect
														label={'Tiempo de Experiencia Requerido'}
														name={'experienceTimeId'}
														options={(dataSelects?.experienceTimes || []).map(item => ({ value: item.id, label: item.name }))}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFNumberFormatInput
														name={'minSalary'}
														label={'Salario Mínimo'}
														inputProps={{
															prefix: '$',
															thousandSeparator: true,
															placeholder: 'Introduce el salario mínimo para esta vacante',
															className: 'form-control',
														}}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFNumberFormatInput
														name={'maxSalary'}
														label={'Salario Máximo'}
														inputProps={{
															prefix: '$',
															thousandSeparator: true,
															placeholder: 'Introduce el salario máximo para esta vacante',
															className: 'form-control',
														}}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFSelect
														label={'País'}
														name={'countryId'}
														options={(dataSelects?.countries || []).map(item => ({ value: item.id, label: item.name }))}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFSelect
														label={'Ciudad'}
														name={'cityId'}
														options={cities.map(item => ({ value: item.id, label: item.name }))}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFSelect
														label={'Categoría'}
														name={'categoryId'}
														options={(dataSelects?.categories || []).map(item => ({ value: item.id, label: item.name }))}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFTextInput
														name={'location'}
														label={'Dirección'}
														inputProps={{ placeholder: 'Introduce la dirección del trabajo' }}
													/>
												</div>

												<div className="col-lg-4 col-md-4 d-flex align-items-center">
													<RHFNumberFormatInput
														name={'vigencyDays'}
														label={'Tiempo de Vigencia de la Vacante'}
														inputProps={{
															className: 'form-control',
															suffix: ' Dias',
															placeholder: 'Dias'
														}}
													/>
												</div>
												{/* <div className="col-lg-12 col-md-12">
													<div className="form-group">
														<label>Upload File</label>
														<div className="custom-file">
															<p className="m-a0">
																<i className="fa fa-upload"></i>
																Upload File
															</p>
															<input type="file" className="site-button form-control" id="customFile" />
														</div>
													</div>
												</div> */}
											</div>
											<button type="submit" className="site-button m-b30">Publicar Vacante</button>
										</Form>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
			<Footer />
		</>
	)
}
export default CompanyPostJob;