import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './Pages/homepage';
import Homepage2 from './Pages/Homepage2';

import Jobprofile from './Pages/job-profile';
import Jobmyresume from './Pages/jobs-my-resume';
import Jobsappliedjob from './Pages/Jobsappliedjob';
import Jobsalert from './Pages/Jobsalert';
import Jobsavedjobs from './Pages/Jobsavedjobs';
import Jobcvmanager from './Pages/Jobcvmanager';
import Changepasswordpage from './Pages/Changepasswordpage';

import Companyprofile from './Pages/company-profile';
import Companyresume from './Pages/company-applications';
import CompanyPostJob from './Pages/company-post-job';
import CompanyManageJob from './Pages/company-manage-job';
import Companytransactions from './Pages/Companytransactions';
import Browsecandidates from './Pages/Browsecandidates';


import Aboutus from './Pages/Aboutus';
import Jobdetail from './Pages/Jobdetail';
import Companies from './Pages/Companies';
import Freejobalerts from './Pages/Freejobalerts';
import Browsejoblist from './Pages/Browsejoblist';
import Browsejobgrid from './Pages/Browsejobgrid';
import Browsejobfilterlist from './Pages/Browsejobfilterlist';
import Browsejobfiltergrid from './Pages/browse-jobs';

import Categoryalljob from './Pages/Categoryalljob';
import Categorycompanyjob from './Pages/Categorycompanyjob';
import Categorydesignationsjob from './Pages/Categorydesignationsjob';
import Categoryjobs from './Pages/Categoryjobs';
import Categorylocationjobs from './Pages/Categorylocationjobs';
import Categoryskilljobs from './Pages/Categoryskilljobs';

import Portfoliogrid2 from './Pages/Portfoliogrid2';
import Register1 from './Pages/Register1';
import Register2 from './Pages/Register2';
import Error404 from './Pages/Error404';

import Contact from './Pages/Contact';


import Blogclassic from './Pages/Blogclassic';
import Blogclassicsidebar from './Pages/Blogclassicsidebar';
import Blogdetailgrid from './Pages/Blogdetailgrid';
import Blogdetailgridsidebar from './Pages/Blogdetailgridsidebar';
import Blogleftimg from './Pages/Blogleftimg';
import Blogdetail from './Pages/Blogdetail';
import ScrollToTop from './Element/ScrollToTop';
import CompanyChangePassword from './Pages/Componychangepasword';
import AdminBackofficeCandidates from './Pages/admin-backoffice-candidates';
import AdminBackofficeCompanies from './Pages/admin-backoffice-companies';
import AdminBackofficeRequests from './Pages/admin-backoffice-requests';
import { candidateLayout } from './Layout/CandidateLayout';
import { companyLayout } from './Layout/CompanyLayout';
import { adminBackofficeLayout } from './Layout/AdminBackofficeLayout';
import AdminBackofficeCVs from './Pages/admin-backoffice-cvs';

const Markup = () => {
	return (
		<>
			<div className="page-wraper">
				<Switch>
					<Route path='/' exact component={Homepage} />
					<Route path='/home' exact component={Homepage} />
					<Route path='/index-2' exact component={Homepage2} />
					<Route path='/jobs-profile' exact component={candidateLayout(Jobprofile)} />
					<Route path='/jobs-my-resume' exact component={Jobmyresume} />
					<Route path='/jobs-applied-job' exact component={candidateLayout(Jobsappliedjob)} />
					<Route path='/jobs-alerts' exact component={Jobsalert} />
					<Route path='/jobs-saved-jobs' exact component={Jobsavedjobs} />
					<Route path='/jobs-cv-manager' exact component={Jobcvmanager} />
					<Route path='/jobs-change-password' exact component={candidateLayout(Changepasswordpage)} />


					<Route path='/company-profile' exact component={companyLayout(Companyprofile)} />
					<Route path='/company-resume' exact component={companyLayout(Companyresume)} />
					<Route path='/company-post-jobs' exact component={companyLayout(CompanyPostJob)} />
					<Route path='/company-update-job' exact component={companyLayout(CompanyPostJob)} />
					<Route path='/company-manage-job' exact component={companyLayout(CompanyManageJob)} />
					<Route path='/company-transactions' exact component={Companytransactions} />
					<Route path='/company-change-password' exact component={companyLayout(CompanyChangePassword)} />
					<Route path='/browse-candidates' exact component={Browsecandidates} />


					<Route path='/about-us' exact component={Aboutus} />
					<Route path='/job-detail/:id' exact component={Jobdetail} />
					<Route path='/companies' exact component={Companies} />
					<Route path='/free-job-alerts' exact component={Freejobalerts} />
					<Route path='/browse-job-list' exact component={Browsejoblist} />
					<Route path='/browse-job-grid' exact component={Browsejobgrid} />
					<Route path='/browse-job-filter-list' exact component={Browsejobfilterlist} />
					<Route path='/browse-job-filter-grid' exact component={Browsejobfiltergrid} />

					<Route path='/category-all-jobs' exact component={Categoryalljob} />
					<Route path='/category-company-jobs' exact component={Categorycompanyjob} />
					<Route path='/category-designations-jobs' exact component={Categorydesignationsjob} />
					<Route path='/category-jobs' exact component={Categoryjobs} />
					<Route path='/category-location-jobs' exact component={Categorylocationjobs} />
					<Route path='/category-skill-jobs' exact component={Categoryskilljobs} />

					<Route path='/portfolio-grid-2' exact component={Portfoliogrid2} />

					<Route path='/register' exact component={Register1} />
					<Route path='/register-2' exact component={Register2} />
					<Route path='/error-404' exact component={Error404} />

					<Route path='/contact' exact component={Contact} />

					<Route path='/blog-classic' exact component={Blogclassic} />
					<Route path='/blog-classic-sidebar' exact component={Blogclassicsidebar} />
					<Route path='/blog-detailed-grid' exact component={Blogdetailgrid} />
					<Route path='/blog-detailed-grid-sidebar' exact component={Blogdetailgridsidebar} />
					<Route path='/blog-left-img' exact component={Blogleftimg} />
					<Route path='/blog-details' exact component={Blogdetail} />

					<Route path='/admin-backoffice-candidates' exact component={adminBackofficeLayout(AdminBackofficeCandidates)} />

					<Route path='/admin-backoffice-applications' exact component={adminBackofficeLayout(Companyresume)} />
					<Route path='/admin-backoffice-companies' exact component={AdminBackofficeCompanies} />
					<Route path='/admin-backoffice-requests' exact component={adminBackofficeLayout(AdminBackofficeRequests)} />
					<Route path='/admin-backoffice-detail-job' exact component={adminBackofficeLayout(CompanyPostJob)} />
					<Route path='/admin-backoffice-users-bank' exact component={adminBackofficeLayout(AdminBackofficeCVs)} />

				</Switch>
			</div>
			<ScrollToTop />
		</>
	)


}

export default Markup;