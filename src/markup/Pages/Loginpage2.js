import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../../components/form/Form';
import { RHFTextInput } from '../../components/form/RHFTextInput';
import { useAuth } from '../../useAuth';
import loginbg from "./../../images/bg6.jpg";
import logo2 from './../../images/logo-white2.png';
import { useForm } from 'react-hook-form';
import { withErrorHandler } from '../../withErrorHandler';

function Login() {
	const methods = useForm();
	const { login } = useAuth();

	const onLogin = withErrorHandler(login, () => ({ "Resource not found": 'Usuario o contraseña incorrectos', 'Unauthorized': 'Usuario o contraseña incorrectos' }));

	return (

		<div className="page-wraper">
			<div className="page-content bg-white login-style2" style={{ backgroundImage: "url(" + loginbg + ")", backgroundSize: "cover" }}>
				<div className="section-full">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-md-6 d-flex">
								<div className="text-white max-w400 align-self-center">
									<div className="logo">
										<Link to={"/"}><img src={logo2} alt="" /></Link>
									</div>
									<h2 className="m-b10">Inicia Sesión Ahora</h2>
									<p className="m-b30">JobBoard es la app que necesitas para encontrar tu trabajo o empleado ideal.</p>
									{/* <ul className="list-inline m-a0">
										<li><Link to={''} className="m-r10 text-white "><i className="fa fa-facebook"></i></Link></li>
										<li><Link to={''} className="m-r10 text-white "><i className="fa fa-google-plus"></i></Link></li>
										<li><Link to={''} className="m-r10 text-white "><i className="fa fa-linkedin"></i></Link></li>
										<li><Link to={''} className="m-r10 text-white "><i className="fa fa-instagram"></i></Link></li>
										<li><Link to={''} className="m-r10 text-white"><i className="fa fa-twitter"></i></Link></li>
									</ul> */}
								</div>
							</div>
							<div className="col-lg-6 col-md-6">
								<div className="login-2 submit-resume p-a30 seth">
									<div className="nav">
										<Form onSubmit={onLogin} methods={methods} className="col-12 p-a0 ">
											<p className="font-weight-600">Si tienes una cuenta con nosotros. Puedes Iniciar Sesión</p>
											<RHFTextInput
												name={'email'}
												label={'Email'}
												inputProps={{ placeholder: 'Introduce tu correo' }}
												inputPattern={{ value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'El email es inválido' }}
											/>
											<RHFTextInput
												label={'Contraseña'}
												name={'password'}
												inputProps={{ type: 'password', placeholder: 'Introduce tu contraseña' }}
											/>
											<div className="text-center">
												<button className="site-button float-left">Iniciar Sesión</button>
												<Link to="register-2" className="site-button-link forget-pass m-t15 float-right"><i className="fa fa-unlock-alt"></i> Registrarme</Link>
											</div>
										</Form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer className="login-footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<span className="float-left">© Powered by <i className="fa fa-heart m-lr5 text-red heart"></i>
									<Link to={"#"}>Brandox02 Development </Link> </span>
								<span className="float-right">
									Todos los Derechos Reservados.
								</span>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Login;
