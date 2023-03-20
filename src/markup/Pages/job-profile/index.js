import React from 'react';
import { Form } from '../../../components/form/Form';
import { useActions } from './useActions';
import { RHFTextInput } from '../../../components/form/RHFTextInput';
import { RHFNumberFormatInput } from '../../../components/form/RHFNumberFormatInput';
import { RHFRadioGroup } from '../../../components/form/RHFRadioGroup';
import { RHFSelect } from '../../../components/form/RHFSelect';
import { RHFCheckbox } from '../../../components/form/RHFCheckbox';

function Jobprofile() {
	const { methods, onSubmit, countries, cities } = useActions();
	return (
		<>
			<div className="job-bx-title clearfix">
				<h5 className="font-weight-700 pull-left text-uppercase">Información Básica</h5>
				{/* <Link to={"./"} className="site-button right-arrow button-sm float-right">Back</Link> */}
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
							required={false}
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
					<div className="col-lg-6 col-md-6">
						<RHFCheckbox
							required={false}
							name={'belongToCvBank'}
							label={'Deseo que se me tome en cuenta para recomendarme en algún trabajo'}
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
		</>
	)
}
export default Jobprofile;