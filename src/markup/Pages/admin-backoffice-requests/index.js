import React from 'react';
import { Link } from 'react-router-dom';
import { useActions } from './useActions';
import { Pagination } from '../../../components/Pagination';

function AdminBackofficeRequests() {
	const { jobs, page, setPage, goToManagement, totalPages, enableJob
	} = useActions();
	return (
		<>
			<div className="job-bx-title  clearfix">
				<h5 className="font-weight-700 pull-left text-uppercase">Administrar Vacantes</h5>
			</div>
			<table className="table-job-bx cv-manager company-manage-job">
				<thead>
					<tr>
						<th>Vacante</th>
						<th>Estatus</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{jobs.map(job => (
						<tr key={job.id}>
							<td className="job-name">
								<Link to={"#"} onClick={() => goToManagement(job)}>{job.name}</Link>
								<ul className="job-post-info">
									<li><i className="fa fa-map-marker"></i>{`${job.city.name}, ${job.country.name}`}</li>
									<li><i className="fa fa-bookmark-o"></i> {job.dailyWorkTime.name}</li>
									<li><i className="fa fa-filter"></i> {job.workingModality.name}</li>
								</ul>
							</td>
							<td className="expired pending">{job.status.name} </td>
							<td className="job-links">
								<Link to={"#"} onClick={() => goToManagement(job)}>
									<i className="fa fa-eye"></i></Link>

								<Link to={"#"} onClick={() => enableJob({ jobId: job.id })}>
									<i className="fa fa-power-off"></i></Link>
								{/* <Link to={"#"} onClick={() => setDeleteJobModal(job)}><i className="ti-trash"></i></Link> */}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination page={page} setPage={setPage} pageQuantity={totalPages} />
		</>
	)

}
export default AdminBackofficeRequests;