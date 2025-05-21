import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import PageTitle from '../../Layout/PageTitle';
import Jobfindbox from '../../Element/Jobfindbox';
import Accordsidebar from '../../Element/Accordsidebar';
import { useActions } from './useActions';
import { Form } from '../../../components/form/Form';
import { Pagination } from '../../../components/Pagination';
import { NumericFormat } from 'react-number-format';
import dayjs from 'dayjs';

var bnr = require('./../../../images/banner/bnr1.jpg');

function Browsejobfiltergrid() {
	const { methods, setValue, watch, cities = [], categories = [], experienceTimes = [],
		employmentContracts = [], workingModalities = [], dailyWorkTimes = [], clear, page, setPage,
		pageQuantity, totalItems, jobs, refetch
	} = useActions();

	return (
		<Form methods={methods} onSubmit={() => { }}>
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: "url( " + bnr + ")" }}>
					<PageTitle motherName="Inicio" activeName="Búsqueda de Vacantes" />
				</div>
				<Jobfindbox {...{ watch, setValue, cities, categories, refetch }} />
				<div className="content-block">
					<div className="section-full browse-job p-b50">
						<div className="container">
							<div className="row">
								<Accordsidebar {...{ experienceTimes, employmentContracts, workingModalities, dailyWorkTimes, clear, setValue, watch }} />
								<div className="col-xl-9 col-lg-8 col-md-7">
									<div className="job-bx-title clearfix">
										<h5 className="font-weight-700 pull-left text-uppercase">{totalItems} Vacantes Encontradas</h5>
									</div>
									<ul className="post-job-bx browse-job-grid row">
										{jobs.map(({ id, country, city, workingModality, dailyWorkTime,
											name, minSalary, maxSalary, createdAt, createdUser }, index) => {
											const dayjsDiff = dayjs().diff(createdAt, 'days');
											return (
												<li className="col-lg-6 col-md-12" key={index} >
													<div className="post-bx">
														<div className="d-flex m-b30">
															<div className="job-post-info">
																<h5><Link to={`/job-detail/${id}`}>{name}</Link></h5>
																<ul>
																	<li><i className="a fa-building-o"></i>{createdUser?.companyProfile?.name}</li>
																	<li><i className="fa fa-map-marker"></i> {country.name}, {city.name}</li>
																	<li><i className="fa fa-bookmark-o"></i> {workingModality.name}</li>
																	<li><i className="fa fa-clock-o"></i> Publicado hace {dayjsDiff} dias</li>
																</ul>
															</div>
														</div>
														<div className="d-flex">
															<div className="job-time mr-auto">
																<Link to={''}><span>{dailyWorkTime.name}</span></Link>
															</div>
															<div className="salary-bx">
																<NumericFormat
																	displayType='text'
																	value={minSalary}
																	prefix={'$'}
																	thousandSeparator
																/>
																{' - '}

																<NumericFormat
																	displayType='text'
																	value={maxSalary}
																	suffix={'$'}
																	thousandSeparator
																/>
															</div>
														</div>
														{/* <label className="like-btn">
															<input type="checkbox" />
															<span className="checkmark"></span>
														</label> */}
													</div>
												</li>
											)
										})}
									</ul>
									<Pagination
										page={page}
										setPage={setPage}
										pageQuantity={pageQuantity}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</Form>
	)
}
export default Browsejobfiltergrid;