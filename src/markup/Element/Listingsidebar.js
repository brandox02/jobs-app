import React from 'react';
import { Link } from "react-scroll";
import { useHistory } from 'react-router-dom'

function Listingsidebar({ isViewingCandidate }) {
	const { push } = useHistory();
	const goBack = () => push('/jobs-profile');
	return (
		<div className="sticky-top bg-white">
			{!isViewingCandidate && (
				<Link onClick={goBack} className="site-button right-arrow button-sm float-right" style={{ color: 'white', transform: 'scale(1.2)', marginRight: 5 }}>Atrás</Link>
			)}
			<div className="candidate-info onepage">
				<ul>
					<li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="resume_headline_bx" smooth={true} offset={-70} duration={500}><span>Resumen</span>
						</Link>

					</li>
					<li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="key_skills_bx" smooth={true} offset={-70} duration={500}><span>Habilidades Clave</span>
						</Link>
					</li>
					<li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="employment_bx" smooth={true} offset={-70} duration={500}><span>Experiencias Laborales</span>
						</Link>
					</li>
					<li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="education_bx" smooth={true} offset={-70} duration={500}><span>Educación</span>
						</Link>
					</li>
					{/* <li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="it_skills_bx" smooth={true}  offset={-70} duration={500}><span>Nada</span> 
						</Link>
					</li> */}
					<li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="projects_bx" smooth={true} offset={-70} duration={500}><span>Proyectos</span>
						</Link>
					</li>
					{/* <li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="profile_summary_bx" smooth={true} offset={-70} duration={500}><span>Nada</span>
						</Link>
					</li> */}
					{/* <li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="accomplishments_bx" smooth={true} offset={-70} duration={500}><span>Logros</span>
						</Link>
					</li> */}
					{/* <li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="desired_career_profile_bx" smooth={true} offset={-70} duration={500}><span>Perfil Profesional Deseado</span>
						</Link>
					</li> */}
					{/* <li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="personal_details_bx" smooth={true} offset={-70} duration={500}><span>Detalles Personales</span>
						</Link>
					</li> */}
					<li>
						<Link activeClass="active"
							className="scroll-bar nav-link" to="attach_resume_bx" smooth={true} offset={-70} duration={500}><span>{isViewingCandidate ? 'CV' : 'Anexar CV'}</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>

	)
}
export default Listingsidebar;