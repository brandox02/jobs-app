import React from 'react';
import { Form } from '../../../components/form/Form';
import { useActions } from './useActions';
import { RHFTextInput } from '../../../components/form/RHFTextInput';
import { RHFSelect } from '../../../components/form/RHFSelect';
import { RHFTextarea } from '../../../components/form/RHFTextarea';

function Companyprofile() {
	const { methods, onSubmit, cities, countries } = useActions();
	return (
		<>
			<div className="job-bx-title clearfix">
				<h5 className="font-weight-700 pull-left text-uppercase">Perfil de Compañia</h5>
				{/* <Link to={"/company-profile"} className="site-button right-arrow button-sm float-right">Atrás</Link> */}
			</div>

			<Form methods={methods} onSubmit={onSubmit}>
				<div className="row m-b30">
					<div className="col-lg-6 col-md-6">
						<RHFTextInput
							name={'name'}
							label={'Nombre'}
							inputProps={{ placeholder: 'Introduce el nombre de la empresa' }}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<RHFTextInput
							name={'email'}
							label={'Email de Contacto'}
							inputProps={{ placeholder: 'Introduce algún email de contacto de la empresa' }}
							// eslint-disable-next-line
							inputPattern={{ message: 'Email inválido', value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ }}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<RHFTextInput
							name={'website'}
							label={'Sitio Web'}
							inputProps={{ placeholder: 'Introduce el sitio web de la empresa' }}
							required={false}
							// eslint-disable-next-line
							inputPattern={{ value: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/, message: 'Link inválido' }}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<RHFTextInput
							name={'foundationDate'}
							label={'Fecha de Fundación'}
							inputProps={{ placeholder: 'Introduce la fecha de fundación de la empresa', type: 'date' }}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<RHFSelect
							name={'countryId'}
							label={'País'}
							options={countries.map(({ id, name }) => ({ label: name, value: id }))}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<RHFSelect
							name={'cityId'}
							label={'Ciudad'}
							options={cities.map(({ id, name }) => ({ label: name, value: id }))}
						/>
					</div>
					<div className="col-lg-12 col-md-12">
						<RHFTextarea name={'description'} label={'Descripción'} inputProps={{ placeholder: 'Descripción de la empresa' }} />
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
							inputProps={{ placeholder: 'https://www.facebook.com' }}
							required={false}
							// eslint-disable-next-line
							inputPattern={{ value: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/, message: 'Link inválido' }}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<RHFTextInput
							name={'twitterUrl'}
							label={'Twitter'}
							inputProps={{ placeholder: 'https://www.twitter.com/' }}
							required={false}
							// eslint-disable-next-line
							inputPattern={{ value: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/, message: 'Link inválido' }}
						/>
					</div>
					<div className="col-lg-6 col-md-6">
						<RHFTextInput
							name={'linkedinUrl'}
							label={'Linkedin'}
							inputProps={{ placeholder: 'https://www.linkedin.com/' }}
							required={false}
							// eslint-disable-next-line
							inputPattern={{ value: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/, message: 'Link inválido' }}
						/>
					</div>
				</div>
				<button type="submit" className="site-button m-b30">Guardar</button>
			</Form>
		</>
	)
}
export default Companyprofile;