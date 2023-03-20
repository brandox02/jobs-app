import React from 'react';
import { Link } from 'react-router-dom';
import { useActions } from './useActions';
import { Form } from '../../../components/form/Form';
import { RHFTextInput } from '../../../components/form/RHFTextInput';
import { RHFCheckbox } from '../../../components/form/RHFCheckbox';
import { RHFSelect } from '../../../components/form/RHFSelect';
import { RHFNumberFormatInput } from '../../../components/form/RHFNumberFormatInput';
import { RHFTextarea } from '../../../components/form/RHFTextarea';
import ListGroup from 'react-bootstrap/ListGroup';


function CompanyPostJob() {
	const { methods, onSubmit, dataSelects, cities, isEditing, goBack, addNewRequirement, deleteRequirement, readonly } = useActions();
	return (
		<>
			<div className="job-bx-title clearfix">
				<h5 className="font-weight-700 pull-left text-uppercase">
					{(() => {
						if (readonly) {
							return 'Detalle de Vacante';
						}
						if (isEditing) {
							return 'Editando Vacante';
						}
						else {
							return 'Publicar una Vacante';
						}
					})()}
				</h5>
				{isEditing && !readonly &&
					<Link
						to={"#"}
						className="site-button right-arrow button-sm float-right"
						onClick={goBack}
					>Atrás</Link>}
			</div>
			<Form methods={methods} onSubmit={onSubmit}>
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<RHFTextInput
							name={'name'}
							label={'Titulo'}
							inputProps={{ placeholder: 'Introduce el titulo de la vacante', disabled: readonly }}

						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<RHFTextInput
							name={'contactEmail'}
							label={'Email de Contacto'}
							// eslint-disable-next-line
							inputPattern={{ value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' }}
							inputProps={{ placeholder: 'Introduce el email de contacto de la vacante', disabled: readonly }}
						/>
					</div>
					<div className="col-lg-12 col-md-12">
						<RHFTextarea
							label={'Descripción'}
							name={'description2'}
							inputProps={{ placeholder: 'Agrega una descripción detallada a esta vacante', disabled: readonly }}
						/>
					</div>

					<div className="col-lg-8 col-md-8">
						<RHFTextInput
							required={false}
							name={'tags'}
							label={'Tags'}
							inputPattern={{ value: /^[^\s,]+(,[^\s,]+)*$/, message: 'No debes tener espacios en blanco' }}
							inputProps={{ placeholder: 'html,css,javascript', style: { letterSpacing: 2 }, disabled: readonly }}
						/>
					</div>
					<div className='d-flex align-items-center col-lg-4 col-md-4'>
						<RHFCheckbox
							name={'englishRequired'}
							label={'Ingles Requerido'}
							required={false}
							disabled={readonly}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<RHFSelect
							label={'Contrato de Trabajo'}
							name={'employmentContractId'}
							options={(dataSelects?.employmentContracts || []).map(item => ({ value: item.id, label: item.name }))}
							disabled={readonly}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<RHFSelect
							label={'Modalidad de Trabajo'}
							name={'workingModalityId'}
							options={(dataSelects?.workingModalities || []).map(item => ({ value: item.id, label: item.name }))}
							disabled={readonly}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<RHFSelect
							label={'Horario de Trabajo'}
							name={'dailyWorkTimeId'}
							options={(dataSelects?.dailyWorkTimes || []).map(item => ({ value: item.id, label: item.name }))}
							disabled={readonly}
						/>
					</div>

					<div className="col-lg-6 col-md-6">
						<RHFSelect
							label={'Tiempo de Experiencia Requerido'}
							name={'experienceTimeId'}
							options={(dataSelects?.experienceTimes || []).map(item => ({ value: item.id, label: item.name }))}
							disabled={readonly}
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
								disabled: readonly
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
								disabled: readonly
							}}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<RHFSelect
							label={'País'}
							name={'countryId'}
							options={(dataSelects?.countries || []).map(item => ({ value: item.id, label: item.name }))}
							disabled={readonly}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<RHFSelect
							label={'Ciudad'}
							name={'cityId'}
							options={cities.map(item => ({ value: item.id, label: item.name }))}
							disabled={readonly}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<RHFSelect
							label={'Categoría'}
							name={'categoryId'}
							options={(dataSelects?.categories || []).map(item => ({ value: item.id, label: item.name }))}
							disabled={readonly}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<RHFTextInput
							name={'location'}
							label={'Dirección'}
							inputProps={{ placeholder: 'Introduce la dirección del trabajo', disabled: readonly }}
						/>
					</div>

					<div className="col-lg-4 col-md-4 d-flex align-items-center">
						<RHFNumberFormatInput
							name={'vigencyDays'}
							label={'Tiempo de Vigencia de la Vacante'}
							inputProps={{
								className: 'form-control',
								suffix: ' Dias',
								placeholder: 'Dias',
								disabled: readonly
							}}
						/>
					</div>
					<div className='col-lg-12 col-md-12' style={{ position: 'relative' }}>
						<button
							className='site-button m-b30'
							style={{ bottom: 0, right: 20, position: 'absolute' }}
							onClick={addNewRequirement}
							type='button'
						>
							Añadir
						</button>
						<RHFTextarea
							name={'requirementTxt'}
							label={'Requerimientos'}
							placeholder={'Escribe un nuevo requerimiento...'}
							required={false}
							disabled={readonly}
						/>
					</div>
					<div className='col-lg-12 col-md-12'>
						<ListGroup style={{ marginBottom: 10 }}>
							{(methods.watch('requirements') || []).map((item, index) => (
								<ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
									{`${index + 1}. ${item.name}`}
									<i
										class="fa fa-trash"
										aria-hidden="true"
										style={{ cursor: 'pointer' }}
										onClick={() => deleteRequirement(item.id)}
									>
									</i>
								</ListGroup.Item>
							))}
						</ListGroup>
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
				<button type="submit" className="site-button m-b30">{isEditing ? 'Actualizar Información' : 'Publicar Vacante'}</button>
			</Form>
		</>
	)
}
export default CompanyPostJob;