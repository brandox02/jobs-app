import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Profilesidebar from '../../Element/Profilesidebar';
import { Form } from '../../../components/form/Form';
import { useActions } from './useActions';
import { RHFTextInput } from '../../../components/form/RHFTextInput';
import { RHFNumberFormatInput } from '../../../components/form/RHFNumberFormatInput';
import { RHFRadioGroup } from '../../../components/form/RHFRadioGroup';
import { RHFSelect } from '../../../components/form/RHFSelect';

function Jobprofile() {
	const { methods, onSubmit, countries, cities } = useActions();

	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white browse-job p-t50 p-b20">
						<div className="container">
							<div className="row">
								<Profilesidebar />
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx job-profile">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Información Básica</h5>
											<Link to={"./"} className="site-button right-arrow button-sm float-right">Back</Link>
										</div>
										<Form methods={methods} onSubmit={onSubmit}>
											<div className="row m-b30">
												<div className="col-lg-6 col-md-6">
													<RHFTextInput
														name={'professionalTitle'}
														label={'Titulo Profesional'}
														inputProps={{ placeholder: 'Introduce tu titulo profesional' }}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFRadioGroup
														name={'genderId'}
														label={'Género'}
														options={[{ label: 'Masculino', value: 1 }, { label: 'Femenino', value: 2 }]}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFNumberFormatInput
														label={'Salario Actual'}
														inputProps={{
															className: "form-control",
															prefix: 'RD$',
															thousandSeparator: true,
															placeholder: 'RD$'
														}}
														name={'currentSalary'}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFNumberFormatInput
														label={'Salario Deseado'}
														inputProps={{
															className: "form-control",
															prefix: 'RD$',
															thousandSeparator: true,
															placeholder: 'RD$'
														}}
														name={'desiredSalary'}

													/>
												</div>
												{/* <div className="col-lg-6 col-md-6">
													<label>Idiomas:</label>
													<select class="selectpicker" multiple data-live-search="true">
														<option>Español</option>
														<option>Ingles</option>
														<option>Frances</option>
													</select>
												</div> */}

												<div className="col-lg-6 col-md-6">
													<RHFTextInput
														name={'bornDate'}
														label={'Fecha de nacimiento'}
														inputProps={{ type: 'date' }}
													/>
												</div>
											</div>
											<div className="job-bx-title clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">Información de Contacto</h5>
											</div>
											<div className="row">

												<div className="col-lg-6 col-md-6">
													<RHFSelect
														name={'countryId'}
														label={'Pais de Residencia'}
														options={countries.map(({ id, name }) => ({ label: name, value: id }))}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFSelect
														name={'cityId'}
														label={'Ciudad de Residencia'}
														options={cities.map(({ id, name }) => ({ label: name, value: id }))}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFTextInput
														name={'phone'}
														label={'Teléfono'}
														inputProps={{
															type: 'text',
															placeholder: 'Introduce tu numero telefónico'
														}}
													/>
												</div>
											</div>
											<div className="job-bx-title clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">Redes Sociales</h5>
											</div>
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<RHFTextInput
														name={'facebookUrl'}
														label={'Facebook'}
														required={false}
														inputProps={{
															type: 'text',
															placeholder: 'https://facebook.com'
														}}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFTextInput
														name={'twitterUrl'}
														required={false}
														label={'Twitter'}
														inputProps={{
															type: 'text',
															placeholder: 'https://twitter.com'
														}}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFTextInput
														name={'linkedinUrl'}
														required={false}
														label={'Linkedin'}
														inputProps={{
															type: 'text',
															placeholder: 'https://linkedin.com'
														}}
													/>
												</div>
												<div className="col-lg-6 col-md-6">
													<RHFTextInput
														name={'githubUrl'}
														required={false}
														label={'Github'}
														inputProps={{
															type: 'text',
															placeholder: 'https://github.com'
														}}
													/>
												</div>
											</div>
											<button className="site-button m-b30">Guardar</button>
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
export default Jobprofile;