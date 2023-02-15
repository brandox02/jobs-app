import React from 'react';
import { Link } from 'react-router-dom';

const items = [
	{
		text: 'Información de Perfil',
		to: '/jobs-profile',
		iconClassname: 'fa fa-user-o'
	},
	{
		text: 'Mi Resumen',
		to: '/jobs-my-resume',
		iconClassname: 'fa fa-file-text-o'
	},
	{
		text: 'Mis Aplicaciones',
		to: '/jobs-applied-job',
		iconClassname: 'fa fa-briefcase'
	},
	{
		text: 'Cambiar Contraseña',
		to: '/jobs-change-password',
		iconClassname: 'fa fa-key'
	},
	{
		text: 'Cerrar Sesión',
		to: './',
		iconClassname: 'fa fa-sign-out'
	}
]

function Profilesidebar() {
	return (
		<div className="col-xl-3 col-lg-4 m-b30">
			<div className="sticky-top">
				<div className="candidate-info">
					<div className="candidate-detail text-center">
						<div className="canditate-des">
							<Link to={''}>
								<img alt="" src={require('./../../images/team/pic1.jpg')} />
							</Link>
							<div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
								<input type="file" className="update-flie" />
								<i className="fa fa-camera"></i>
							</div>
						</div>
						<div className="candidate-title">
							<div className="">
								<h4 className="m-b5"><Link to={"#"}>David Martin</Link></h4>
								<p className="m-b0"><Link to={"#"}>Web developer</Link></p>
							</div>
						</div>
					</div>
					<ul>
						{items.map(item => (
							<li><Link to={item.to} className={window.location.href.includes(item.to) ? 'active' : ''}>
								<i className={item.iconClassname} aria-hidden="true"></i>
								<span>{item.text}</span></Link></li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
export default Profilesidebar;