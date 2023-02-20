import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '../../components/form/Form';
import { RHFTextInput } from '../../components/form/RHFTextInput';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../useAuth';
import { withErrorHandler } from '../../withErrorHandler';
import { RHFRadioGroup } from '../../components/form/RHFRadioGroup';
var bnr = require('./../../images/background/bg6.jpg');


function Register2() {
	const methods = useForm();
	const { signin } = useAuth();

	const onSignUp = withErrorHandler(async (data) => {
		await signin(data);
	}, () => ({ 'Is not possible to create a user with the given definition because another user already exists with the same attributes': 'Ya existe una cuenta con este mismo correo' }))

	return (
		<div className="page-wraper">
			<div className="browse-job login-style3">
				<div className="bg-img-fix" style={{ backgroundImage: `url(${bnr})`, height: "100vh" }}>
					<div className="row">
						<div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 bg-white z-index2 relative p-a0 content-scroll skew-section left-bottom">
							<div className="login-form style-2">
								<div className="logo-header text-center p-tb30">
									<Link to={"./"}><img src={require("./../../images/logo.png")} alt="" /></Link>
								</div>
								<div className="clearfix"></div>
								<div className="tab-content nav p-b30 tab">
									<div id="login" className="tab-pane active ">
										<h3 className="form-title m-t0">Registro</h3>
										<div className="dez-separator-outer m-b5">
											<div className="dez-separator bg-primary style-liner"></div>
										</div>
										<Form methods={methods} onSubmit={onSignUp}>
											<RHFTextInput
												name={'firstname'}
												label={'Nombres'}
											/>
											<RHFTextInput
												name={'lastname'}
												label={'Apellidos'}
											/>
											<RHFTextInput
												name={'email'}
												label={'Email'}
												inputPattern={{ value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email inválido' }}
											/>
											<RHFTextInput
												name={'password'}
												label={'Contraseña'}
												inputProps={{ type: 'password' }}
											/>
											<RHFRadioGroup
												name={'isCandidate'}
												label={'¿Que estas buscando?'}
												options={[{ label: 'Empleo', value: true }, { label: 'Empleados', value: false }]}
											/>
											<div className="text-center bottom">
												<button type='submit' className='site-button button-md btn-block text-white'>Registrarme</button>
											</div>
										</Form>
									</div>
								</div>
								<div className="bottom-footer clearfix m-t10 m-b20 row text-center">
									<div className="col-lg-12 text-center">
										<span> © Copyright by <i className="fa fa-heart m-lr5 text-red heart"></i>
											<Link to={''} >JobsApp </Link> Todos los derechos reservados.</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Register2;