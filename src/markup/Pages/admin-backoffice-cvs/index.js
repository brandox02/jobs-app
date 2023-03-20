import React from 'react';
import { Link } from 'react-router-dom';
import { useActions } from './useActions';
import { NumericFormat } from 'react-number-format';
import { Pagination } from '../../../components/Pagination';

function AdminBackofficeCVs() {
	const { users,
		totalItems, totalPages, setPage, page, goToCandidateProfile } = useActions();

	return (
		<>
			<div className="job-bx-title clearfix">
				<h5
					className="font-weight-700 pull-left text-uppercase"
				>
					{`Banco de CV's (${totalItems})`}
				</h5>
			</div>
			<ul className="post-job-bx browse-job-grid post-resume row">
				{users.map((user, index) => (
					<li className="col-lg-6 col-md-6" key={index}>
						<div className="post-bx">
							<div className="d-flex m-b20">
								<div className="job-post-info">
									<h5
										className="m-b0"
										onClick={() => goToCandidateProfile({ user })}
									><Link to={"#"}>{`${user?.firstname || ''} ${user?.lastname || ''}`}</Link>
									</h5>
									<p className="m-b5 font-13">
										<span to={`#`} className="text-primary">
											{`${user?.candidateProfile?.city?.name}, ${user?.candidateProfile?.country?.name}`}
										</span>
										<br />
										<span to={'#'} className="text-primary">
											{user?.candidateProfile?.gender?.name || ''}
										</span>
									</p>
								</div>
							</div>
							<div className="job-time m-t15 m-b10">
								{[].map(item => (
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

export default AdminBackofficeCVs;