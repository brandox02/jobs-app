import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<footer className="site-footer">
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-xl-5 col-lg-4 col-md-12 col-sm-12">
							<div className="widget">
								<img src={require("./../../images/logo-white.png")} width="180" className="m-b15" alt=""/>
								<p className="text-capitalize m-b20">
									JobList conecta talento con oportunidades. Facilitamos la búsqueda de empleo y selección de candidatos de forma rápida, segura y efectiva.
								</p>
								<div className="subscribe-form m-b20">
									<form className="dzSubscribe" action="script/mailchamp.php" method="post">
										<div className="dzSubscribeMsg"></div>
										<div className="input-group">
											<input name="dzEmail" required="required" className="form-control" placeholder="Tu correo electrónico" type="email" />
											<span className="input-group-btn">
												<button name="submit" value="Submit" type="submit" className="site-button radius-xl">Suscribirse</button>
											</span>
										</div>
									</form>
								</div>
								<ul className="list-inline m-a0">
									<li><Link to={''} className="site-button white facebook circle"><i className="fa fa-facebook"></i></Link></li>
									<li><Link to={''} className="site-button white google-plus circle"><i className="fa fa-google-plus"></i></Link></li>
									<li><Link to={''} className="site-button white linkedin circle"><i className="fa fa-linkedin"></i></Link></li>
									<li><Link to={''} className="site-button white instagram circle"><i className="fa fa-instagram"></i></Link></li>
									<li><Link to={''} className="site-button white twitter circle"><i className="fa fa-twitter"></i></Link></li>
								</ul>
							</div>
						</div>
						<div className="col-xl-5 col-lg-5 col-md-8 col-sm-8 col-12">
							<div className="widget border-0">
								<h5 className="m-b30 text-white">Preguntas Frecuentes</h5>
								<ul className="list-2 list-line">
									<li><Link to={''}>Privacidad y Seguridad</Link></li>
									<li><Link to={''}>Términos del Servicio</Link></li>
									<li><Link to={''}>Comunicaciones</Link></li>
									<li><Link to={''}>Términos de Referencia</Link></li>
									<li><Link to={''}>Licencias de Préstamo</Link></li>
									<li><Link to={''}>Soporte</Link></li>
									<li><Link to={''}>Cómo Funciona</Link></li>
									<li><Link to={''}>Para Empleadores</Link></li>
									<li><Link to={''}>Evaluación Crediticia</Link></li>
									<li><Link to={''}>Contáctanos</Link></li>
									<li><Link to={''}>Licencias de Préstamo</Link></li>
									<li><Link to={''}>Soporte</Link></li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12">
							<div className="widget border-0">
								<h5 className="m-b30 text-white">Buscar Empleos</h5>
								<ul className="list-2 w10 list-line">
									<li><Link to={''}>Trabajos en EE.UU.</Link></li>
									<li><Link to={''}>Trabajos en Canadá</Link></li>
									<li><Link to={''}>Trabajos en Reino Unido</Link></li>
									<li><Link to={''}>Emplois en Francia</Link></li>
									<li><Link to={''}>Trabajos en Alemania</Link></li>
									<li><Link to={''}>Vacantes en China</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 text-center">
							<span> © Copyright por
							<Link to={''}> InnovaCore </Link> Todos los derechos reservados.</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
