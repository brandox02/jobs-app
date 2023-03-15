import React from 'react';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import { dateToStringAgo } from '../../utils/dateToStringAgo';

function Jobsection({ jobs, recentJobsTotalItems }) {
	return (
		<div className="section-full bg-white content-inner-2">
			<div className="container">
				<div className="d-flex job-title-bx section-head">
					<div className="mr-auto">
						<h2 className="m-b5">Trabajos Recientes</h2>
						<h6 className="fw4 m-b0">+{recentJobsTotalItems} nuevos trabajos</h6>
					</div>
					<div className="align-self-end">
						<Link
							to={"/browse-job-filter-grid"}
							className="site-button button-sm"
						>
							Buscar todos los trabajos
							<i className="fa fa-long-arrow-right"></i>
						</Link>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-9">
						<ul className="post-job-bx browse-job">
							{jobs.map(({
								id, name, country, city, dailyWorkTime,
								workingModality, minSalary, maxSalary, createdAt
							}) => (
								<li key={id}>
									<div className="post-bx" >
										<div className="d-flex m-b30">
											<div className="job-post-company">
												<span><img alt="" src={require("./../../images/logo/icon1.png")} /></span>
											</div>
											<div className="job-post-info">
												<h4><Link to={"/job-detail"}>{name}</Link></h4>
												<ul>
													<li><i className="fa fa-map-marker"></i> {`${city.name}, ${country.name}`}</li>
													<li><i className="fa fa-bookmark-o"></i> {dailyWorkTime.name}</li>
													<li><i className="fa fa-clock-o"></i>{dateToStringAgo(createdAt)}</li>
												</ul>
											</div>
										</div>
										<div className="d-flex">
											<div className="job-time mr-auto">
												<Link to={"#"}><span>{workingModality.name}</span></Link>
											</div>
											<div className="salary-bx">
												<NumericFormat
													value={minSalary}
													prefix={'$'}
													thousandSeparator
													displayType='text'
												/>
												{' - '}
												<NumericFormat
													value={maxSalary}
													prefix={'$'}
													thousandSeparator
													displayType='text'
												/>
											</div>
										</div>
										{/* <label className="like-btn">
											<input type="checkbox" />
											<span className="checkmark"></span>
										</label> */}
									</div>
								</li>
							))}

						</ul>
						{/* <div className="m-t30">
							<div className="d-flex">
								<Link className="site-button button-sm mr-auto" to={""}><i className="ti-arrow-left"></i> Prev</Link>
								<Link className="site-button button-sm" to={""}>Next <i className="ti-arrow-right"></i></Link>
							</div>
						</div> */}
					</div>
					<div className="col-lg-3">
						<div className="sticky-top">
							{/* <div className="candidates-are-sys m-b30">
								<div className="candidates-bx">
									<div className="testimonial-pic radius"><img src={require("./../../images/testimonials/pic3.jpg")} alt="" width="100" height="100" /></div>
									<div className="testimonial-text">
										<p>I just got a job that I applied for via careerfy! I used the site all the time during my job hunt.</p>
									</div>
									<div className="testimonial-detail"> <strong className="testimonial-name">Richard Anderson</strong> <span className="testimonial-position">Nevada, USA</span> </div>
								</div>
							</div> */}
							<div className="quote-bx">
								<div className="quote-info">
									<h4>Haz la Diferencia con Tu Perfil Online!</h4>
									<p>Tu resumen estará listo en minutos con el asisten ágil JobBoard!</p>
									<Link to={"/register-2"} className="site-button">Crear mi Cuenta</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Jobsection;