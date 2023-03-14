import React from 'react';
import { Link } from 'react-router-dom';

function Jobcategories({ categories }) {
	return (
		<div className="row sp20">
			{categories.map(({ name, count, classnameIcon }) => (
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="icon-bx-wraper">
						<div className="icon-content">
							<div className="icon-md text-primary m-b20"><i className={classnameIcon || 'ti-wand'}></i></div>
							<Link to={"/company-manage-job"} className="dez-tilte">{name}</Link>
							<p className="m-a0">{`${count} vacantes disponibles`}</p>
							<div className="rotate-icon"><i className="ti-location-pin"></i></div>
						</div>
					</div>
				</div>
			))}
			{/* <div className="col-lg-12 text-center m-t30">
				<button className="site-button radius-xl">All Categories</button>
			</div> */}
		</div>
	)
}

export default Jobcategories;