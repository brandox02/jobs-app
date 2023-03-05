import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Profilesidebar from '../Element/Profilesidebar';
import { gql, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import dayjs from 'dayjs';
import { Pagination } from '../../components/Pagination'

const postBlog = [
	{ title: 'PHP Web Developer', },
	{ title: 'Software Developer', },
	{ title: 'Branch Credit Manager', },
];

const QUERY = gql`
	query Applications($page: Float!, $perPage: Float!, $where: ApplicationWhereInput!){
		applications(where:$where, page: $page, perPage: $perPage){
			items {
				job {
      createdUserId
      createdUser {
        id
		  companyProfile {
			name
		  }
      }
      id
      location
      maxSalary
      description
      minSalary
      name
      tags {
        id name
      }
      statusId
      status {
        name
        id
      }
      createdAt
      workingModalityId
      workingModality {
        name
        id
      }
      vigencyDays
      tags {
        id
        name
      }
      experienceTimeId
      experienceTime {
        id
        name
      }
      englishRequired
      employmentContractId
      employmentContract {
        id
        name
      }
      dailyWorkTimeId
      dailyWorkTime {
        name
        id
      }
      contactEmail
      countryId
      country {
        name
        id
      }
      cityId
      city {
        name
        id
      }
      categoryId
      category {
        name
        id
      }
		}
			}
			metadata{
				totalItems
				totalPages
			}
		}
	}
`

function Jobsappliedjob() {
	const { user } = useSelector(state => state.app);
	const [page, setPage] = useState(0);
	const { data } = useQuery(QUERY, {
		variables:
		{
			where: { userId: user.id }, page, perPage: 10
		}
	});

	if (!data) {
		return <></>;
	}

	const jobQuantity = (data?.applications?.metadata?.totalItems || 0);
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
										<h5 className="font-weight-700 pull-left text-uppercase">{jobQuantity + ` vacante${jobQuantity === 1 ? '' : 's'} aplicada${jobQuantity === 1 ? '' : 's'}`} </h5>
										{/* <div className="float-right">
											<span className="select-title">Sort by freshness</span>
											<select className="custom-btn">
												<option>Last 2 Months</option>
												<option>Last Months</option>
												<option>Last Weeks</option>
												<option>Last 3 Days</option>
											</select>
										</div> */}
									</div>
									<ul className="post-job-bx browse-job">
										{(data?.applications?.items || []).map(({ job }, index) => {
											const diff = dayjs().diff(job.createdAt, 'days');
											return (
												<li key={index}>
													<div className="post-bx">
														<div className="job-post-info m-a0">
															{/* <h4><Link to={"/job-detail"}>{job.title}</Link></h4> */}
															<ul>
																<li><Link to={`/job-detail/${job.id}`}><h5>{job.name}</h5></Link></li><br />
																<li><Link to={"/company-profile"}>{`@${job.createdUser.companyProfile.name}`}</Link></li>
																<li><i className="fa fa-map-marker"></i>{`${job.city.name}, ${job.country.name}`}</li>
																<li><i className="fa fa-money"></i>
																	<NumericFormat
																		thousandSeparator
																		prefix='$'
																		displayType='text'
																		value={job.minSalary}
																	/> {' - '}

																	<NumericFormat
																		thousandSeparator
																		prefix='$'
																		displayType='text'
																		value={job.maxSalary}
																	/>
																</li>
															</ul>
															<div className="job-time m-t15 m-b10">
																{job.tags.map(item => <Link to={''} className="mr-1"><span>{item.name}</span></Link>)}
															</div>
															{diff ? <div className="posted-info clearfix">
																<p className="m-tb0 text-primary float-left">
																	<span className="text-black m-r10">Publicado hace:</span>{diff + ` dia${diff === 1 ? '' : 's'}`}
																</p>
																{/* <Link to={"/jobs-my-resume"} className="site-button button-sm float-right">Apply Job</Link> */}
															</div> : ''}
														</div>
													</div>
												</li>
											)
										})}

									</ul>
									<Pagination
										page={page}
										setPage={setPage}
										pageQuantity={data?.applications?.metadata?.totalPages || 0}
									/>
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