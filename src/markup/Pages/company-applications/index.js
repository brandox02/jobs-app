import React from 'react';
import { Link } from 'react-router-dom';
import { useActions } from './useActions';
import { NumericFormat } from 'react-number-format';
import { Pagination } from '../../../components/Pagination';


function Companyresume() {
	const { applications,
		totalItems, totalPages, setPage, page, goToCandidateProfile, jobName, preLabel } = useActions();

	return (
		<>
			<div className="job-bx-title clearfix">
				<h5
					className="font-weight-700 pull-left text-uppercase"
				>
					{`${preLabel ? `${preLabel} > ` : ''}Postulaciones${jobName ? ` de ${jobName}` : ''} (${totalItems})`}
				</h5>
			</div>
			<ul className="post-job-bx browse-job-grid post-resume row">
				{applications.map(({ job, user }, index) => (
					<li className="col-lg-6 col-md-6" key={index}>
						<div className="post-bx">
							<div className="d-flex m-b20">
								<div className="job-post-info">
									<h5
										onClick={() => goToCandidateProfile({ user })}
										className="m-b0"
									><Link to={"#"}>{`${user?.firstname} ${user?.lastname}`}</Link>
									</h5>
									<p className="m-b5 font-13">
										<Link to={`/job-detail/${job.id}`} className="text-primary">{job.name}</Link></p>
									<ul>
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
								</div>
							</div>
							<div className="job-time m-t15 m-b10">
								{job.tags.map(item => (
									<Link to={"#"} className="mr-1"><span>{item.name}</span></Link>
								))}
							</div>
							<a
								href={user.resume.imageUrl}
								target="blank"
								className="job-links"
							>
								<i className="fa fa-download"></i>
							</a>
						</div>
					</li>
				))}

			</ul>
			<Pagination
				{...{ page, setPage, pageQuantity: totalPages }}
			/>
		</>
	)
}
export default Companyresume;