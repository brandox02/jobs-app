import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import {
	loadingToggleAction,
	signupAction,
} from '../../store/actions/AuthActions';
var bnr = require('./../../images/background/bg6.jpg');


function Register2({
	errorMessage = '',
	successMessage = '',
	showLoading = false,
	history }) {
	const [email, setEmail] = useState('');
	let errorsObj = { email: '', password: '' };
	const [errors, setErrors] = useState(errorsObj);
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	function onSignUp(e) {
		e.preventDefault();
		let error = false;
		const errorObj = { ...errorsObj };
		if (email === '') {
			errorObj.email = 'Email is Required';
			error = true;
		}
		if (password === '') {
			errorObj.password = 'Password is Required';
			error = true;
		}
		setErrors(errorObj);
		if (error) return;
		dispatch(loadingToggleAction(true));
		dispatch(signupAction(email, password, history));
	}
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
										{errorMessage && (
											<div className=''>
												{errorMessage}
											</div>
										)}
										{successMessage && (
											<div className=''>
												{successMessage}
											</div>
										)}
										<form className=" dez-form p-b30" onSubmit={onSignUp}>
											<h3 className="form-title m-t0">Registro</h3>
											<div className="dez-separator-outer m-b5">
												<div className="dez-separator bg-primary style-liner"></div>
											</div>
											<div className="form-group">
												<label>Nombres</label>
												<input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="" />
												<div className="text-danger">{errors.email && <div>{errors.email}</div>}</div>
											</div>
											<div className="form-group" style={{ marginTop: -20 }}>
												<label>Apellidos</label>
												<input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="" />
												<div className="text-danger">{errors.email && <div>{errors.email}</div>}</div>
											</div>
											<div className="form-group" style={{ marginTop: -20 }}>
												<label>Email</label>
												<input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="" />
												<div className="text-danger">{errors.email && <div>{errors.email}</div>}</div>
											</div>
											<div className="form-group" style={{ marginTop: -20 }}>
												<label>Contraseña</label>
												<input value={password} className="form-control" defaultValue="Password"
													onChange={(e) =>
														setPassword(e.target.value)
													}
												/>
												<div className="text-danger">{errors.password && <div>{errors.password}</div>}</div>
											</div>
											{/* <Link data-toggle="tab" to="#forgot-password" className="forget-pass m-l5"><i className="fa fa-unlock-alt"></i> Olvidé mi contraseña</Link> */}
											{/* <div className="dz-social clearfix">
												<h5 className="form-title m-t5 pull-left">Sign In With</h5>
												<ul className="dez-social-icon dez-border pull-right dez-social-icon-lg text-white">
													<li><Link to={''} className="fa fa-facebook  fb-btn mr-1" target="bank"></Link></li>
													<li><Link to={''} className="fa fa-twitter  tw-btn mr-1" target="bank"></Link></li>
													<li><Link to={''} className="fa fa-linkedin link-btn mr-1" target="bank"></Link></li>
													<li><Link to={''} className="fa fa-google-plus  gplus-btn" target="bank"></Link></li>
												</ul>
											</div> */}
										</form>
										<div className="text-center bottom">
											<Link to="/login" className="site-button button-md btn-block text-white">Registrarme</Link>
										</div>
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