import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import CountUp from 'react-countup';
import IndexBanner from '../../Element/IndexBanner';
import Jobcategories from '../../Element/Jobcategories';
import Jobsection from '../../Element/Jobsection';
import { Pagination } from '../../../components/Pagination';
import { NumericFormat } from 'react-number-format';
import { useActions } from './useActions';
import Jobfindbox from '../../Element/Jobfindbox';
import Accordsidebar from '../../Element/Accordsidebar';
import dayjs from 'dayjs';
import { Form } from '../../../components/form/Form';
import { useAuth } from '../../../useAuth';

function Homepage() {

   const { fromBrowseJobs: { methods, setValue, watch, cities = [], categories = [], experienceTimes = [],
      employmentContracts = [], workingModalities = [], dailyWorkTimes = [], clear, page, setPage,
      pageQuantity, totalItems, jobs, refetch
   }, recentJobs, recentJobsTotalItems } = useActions();

   const { logout } = useAuth();

   return (
      <Form methods={methods} onSubmit={() => { }}>
         <div className="page-wraper">
            <Header logout={logout} />
            <div className="page-content">
               <IndexBanner />
               <div className="page-content bg-white">
                  {/* <div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: "url( " + bnr + ")" }}>
                     <PageTitle motherName="Inicio" activeName="Búsqueda de Vacantes" />
                  </div> */}
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
                                       name, minSalary, maxSalary, createdAt, createdUser, englishRequired }, index) => {
                                       const dayjsDiff = dayjs().diff(createdAt, 'days');
                                       return (
                                          <li className="col-lg-6 col-md-12" key={index} >
                                             <div className="post-bx">
                                                <div className=''>
                                                   <div className="d-flex m-b30">
                                                      <div className="job-post-info">
                                                         <h5><Link to={`/job-detail/${id}`}>{name}</Link></h5>
                                                         <ul>
                                                            <li><i className="a fa-building-o"></i>{createdUser.companyProfile.name}</li>
                                                            <li><i className="fa fa-map-marker"></i> {country.name}, {city.name}</li>
                                                            <li><i className="fa fa-bookmark-o"></i> {workingModality.name}</li>
                                                            <li><i className="fa fa-clock-o"></i> Publicado hace {dayjsDiff} dias</li>
                                                         </ul>
                                                      </div>
                                                   </div>
                                                   <div className="d-flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                         <div className="job-time mr-auto">
                                                            <Link to={''}><span>{dailyWorkTime.name}</span></Link>
                                                         </div>
                                                         {englishRequired && (
                                                            <div className="job-time mr-auto">
                                                               <Link to={''}><span>{'Inglés es Requerido'}</span></Link>
                                                            </div>
                                                         )}
                                                      </div>
                                                      <div className="salary-bx" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                                         <NumericFormat
                                                            displayType='text'
                                                            value={minSalary}
                                                            prefix={'$'}
                                                            thousandSeparator
                                                         // style={{ position: 'absolute', right: 0 }}
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
               <div className="section-full job-categories content-inner-2 bg-white">
                  <div className="container">
                     <div className="section-head d-flex head-counter clearfix">
                        <div className="mr-auto">
                           <h2 className="m-b5">Categorias Populares</h2>
                           <h6 className="fw3">{`+${categories.length} categorias esperando por ti`}</h6>
                        </div>
                        <div className="head-counter-bx">
                           <h2 className="m-b5 counter"><CountUp end={totalItems} duration={5} /></h2>
                           <h6 className="fw3">Vacantes Publicadas</h6>
                        </div>
                        {/* <div className="head-counter-bx">
								<h2 className="m-b5 counter"><CountUp end={4500} duration={5} /></h2>
								<h6 className="fw3">Tasks Posted</h6>
							</div>
							<div className="head-counter-bx">
								<h2 className="m-b5 counter"><CountUp end={1500} duration={5} /></h2>
								<h6 className="fw3">Freelancers</h6>
							</div> */}
                     </div>
                     <Jobcategories categories={categories} />
                  </div>
               </div>
               {/* <Featureblog /> */}
               <Jobsection jobs={recentJobs} recentJobsTotalItems={recentJobsTotalItems} />
               {/* <div className="section-full p-tb70 overlay-black-dark text-white text-center bg-img-fix" style={{ backgroundImage: "url(" + bnr2 + ")" }}>
                  <div className="container">
                     <div className="section-head text-center text-white">
                        <h2 className="m-b5">Testimonials</h2>
                        <h5 className="fw4">Few words from candidates</h5>
                     </div>
                     <Owltestimonial />
                  </div>
               </div> */}
               {/* <div className="section-full content-inner-2 overlay-white-middle" style={{ backgroundImage: "url( " + bnr3 + ")", backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundSize: "100%" }}>
                  <div className="container">
                     <div className="section-head text-black text-center">
                        <h2 className="m-b0">Membership Plans</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                     </div>
                     <div className="section-content box-sort-in button-example m-t80">
                        <div className="pricingtable-row">
                           <div className="row max-w1000 m-auto">
                              <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                 <div className="pricingtable-wrapper style2 bg-white">
                                    <div className="pricingtable-inner">
                                       <div className="pricingtable-price">
                                          <h4 className="font-weight-300 m-t10 m-b0">Basic</h4>
                                          <div className="pricingtable-bx"><span>Free</span></div>
                                       </div>
                                       <p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
                                       <div className="m-t20">
                                          <Link to={"/register"} className="site-button radius-xl"><span className="p-lr30">Sign Up</span></Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                 <div className="pricingtable-wrapper style2 bg-primary text-white active">
                                    <div className="pricingtable-inner">
                                       <div className="pricingtable-price">
                                          <h4 className="font-weight-300 m-t10 m-b0">Professional</h4>
                                          <div className="pricingtable-bx"> $ <span>29</span> /  Per Installation </div>
                                       </div>
                                       <p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
                                       <div className="m-t20">
                                          <Link to={"/register"} className="site-button white radius-xl"><span className="text-primary p-lr30">Sign Up</span></Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                 <div className="pricingtable-wrapper style2 bg-white">
                                    <div className="pricingtable-inner">
                                       <div className="pricingtable-price">
                                          <h4 className="font-weight-300 m-t10 m-b0">Extended</h4>
                                          <div className="pricingtable-bx"> $  <span>29</span> /  Per Installation </div>
                                       </div>
                                       <p>Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempors labore et dolore magna siad enim aliqua</p>
                                       <div className="m-t20">
                                          <Link to={"/register"} className="site-button radius-xl"><span className="p-lr30">Sign Up</span></Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div> */}
            </div>
            <Footer />
         </div>
      </Form>
   )
}
export default Homepage;