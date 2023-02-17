import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Profilesidebar from '../Element/Profilesidebar';

const postBlog = [
	{ title: 'PHP Web Developer', },
	{ title: 'Software Developer', },
	{ title: 'Branch Credit Manager', },
]

function Jobsappliedjob() {
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white p-t50 p-b20">
						<div className="container">
							<div className="row">
								<Profilesidebar />
								<div className="col-xl-9 col-lg-8 m-b30 browse-job">
									<div className="job-bx-title  clearfix">
										<h5 className="font-weight-700 pull-left text-uppercase">2269 Jobs Found</h5>
										<div className="float-right">
											<span className="select-title">Sort by freshness</span>
											<select className="custom-btn">
												<option>Last 2 Months</option>
												<option>Last Months</option>
												<option>Last Weeks</option>
												<option>Last 3 Days</option>
											</select>
										</div>
									</div>
									<ul className="post-job-bx browse-job">
										{postBlog.map((item, index) => (
											<li key={index}>
												<div className="post-bx">
													<div className="job-post-info m-a0">
														<h4><Link to={"/job-detail"}>{item.title}</Link></h4>
														<ul>
															<li><Link to={"/company-profile"}>@company-name</Link></li>
															<li><i className="fa fa-map-marker"></i> Sacramento, California</li>
															<li><i className="fa fa-money"></i> 25,000</li>
														</ul>
														<div className="job-time m-t15 m-b10">
															<Link to={''} className="mr-1"><span>PHP</span></Link>
															<Link to={''} className="mr-1"><span>Angular</span></Link>
															<Link to={''} className="mr-1"><span>Bootstrap</span></Link>
															<Link to={''} className="mr-1"><span>Wordpress</span></Link>
														</div>
														<div className="posted-info clearfix">
															<p className="m-tb0 text-primary float-left"><span className="text-black m-r10">Posted:</span> 2 day ago</p>
															<Link to={"/jobs-my-resume"} className="site-button button-sm float-right">Apply Job</Link>
														</div>
													</div>
												</div>
											</li>
										))}

									</ul>
									<div className="pagination-bx m-t30">
										<ul className="pagination">
											<li className="previous"><Link to={'#'}><i className="ti-arrow-left"></i> Prev</Link></li>
											<li className="active"><Link to={'#'}>1</Link></li>
											<li><Link to={'#'}>2</Link></li>
											<li><Link to={'#'}>3</Link></li>
											<li className="next"><Link to={'#'}>Next <i className="ti-arrow-right"></i></Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
export default Jobsappliedjob; 