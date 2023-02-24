import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import Listingsidebar from '../../Element/Listingsidebar';
import { Resume } from './Resume';
import { KeySkills } from './KeySkills';
import { LaboralExperiences } from './LaboralExperiences';
import { Education } from './Education';
import { Projects } from './Projects';
import { useSelector } from 'react-redux';
import { useActions } from './useActions';
import { Form } from '../../../components/form/Form';
// import { BasicDetailsModal } from './BasicDetailsModal';



var bnr = require('./../../../images/banner/bnr1.jpg');
//var bnr2 = require('./../../images/background/bg3.jpg');

function Jobmyresume() {
	const { methods, onSubmit, educations } = useActions();
	const { user } = useSelector(state => state.app);

	async function onFileChange(data) {
		function getBase64(file) {
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = () => resolve(reader.result);
				reader.onerror = error => reject(error);
			});
		}
		const base64 = await getBase64(data.currentTarget.files[0]);
		methods.setValue('image', base64);
	}

	return (
		<>
			<Header />
			{/* <BasicDetailsModal basicdetails={basicdetails} setBasicDetails={setBasicDetails}/> */}
			<div className="page-content">
				<div className="overlay-black-dark profile-edit p-t50 p-b20" style={{ backgroundImage: "url(" + bnr + ")" }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-7 candidate-info">
								<div className="candidate-detail">
									<div className="canditate-des text-center">
										<Link to={"#"}>
											<img alt="" src={require("./../../../images/team/pic1.jpg")} />
										</Link>
										<div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
											<input type="file" className="update-flie" />
											<i className="fa fa-camera"></i>
										</div>
									</div>
									<div className="text-white browse-job text-left">
										<h4 className="m-b0">{`${user.firstname} ${user.lastname}`}
											{/* <Link to={"#"} onClick={()=>setBasicDetails(true)} className="m-l15 font-16 text-white"><i className="fa fa-pencil"></i></Link> */}
										</h4>
										<p className="m-b15">{user?.candidateProfile?.professionalTitle}</p>
										<ul className="clearfix">
											<li><i className="ti-email"></i>{user?.email}</li>
											<li><i className="ti-mobile"></i>{user?.candidateProfile.phone}</li>
											{/* <li><i className="ti-briefcase"></i>{user?.candidateProfile?.professionalTitle}</li> */}

											<li><i className="ti-location-pin"></i> {`${user?.candidateProfile?.city.name}, ${user?.candidateProfile?.country.name}`}</li>
										</ul>
										{/* <div className="progress-box m-t10">
											<div className="progress-info">Profile Strength (Average)<span>70%</span></div>
											<div className="progress">
												<div className="progress-bar bg-primary" style={{width: "80%",}} role="progressbar" ></div>
											</div>
										</div> */}
									</div>
								</div>
							</div>
							{/* <div className="col-lg-4 col-md-5">
								<Link to={"#"}>
									<div className="pending-info text-white p-a25">
										<h5>Pending Action</h5>
										<ul className="list-check secondry">
											<li>Verify Mobile Number</li>
											<li>Add Preferred Location</li>
											<li>Add Resume</li>
										</ul>
									</div>
								</Link>
							</div> */}
						</div>
					</div>
				</div>
				<div className="content-block">
					<div className="section-full browse-job content-inner-2">
						<div className="container">
							<div className="row">
								<div className="col-xl-3 col-lg-4 col-md-4 col-sm-12 m-b30">
									<Listingsidebar />
								</div>
								<Form methods={methods} onSubmit={() => { }}>
									<div className="col-xl-9 col-lg-8 col-md-8 col-sm-12">
										<Resume methods={methods} />
										<KeySkills methods={methods} />
										<LaboralExperiences methods={methods} />
										<Education methods={methods} educations={educations} />
										<Projects methods={methods} />
										{/* <div id="it_skills_bx" className="job-bx table-job-bx bg-white m-b30">
											<div className="d-flex">
												<h5 className="m-b15">IT Skills</h5>
												<Link to={"#"} onClick={() => setItSkills(true)} className="site-button add-btn button-sm">
													<i className="fa fa-pencil m-r5"></i> Edit
												</Link>
											</div>
											<p>Mention your employment details including your current and previous company work experience</p>
											<table>
												<thead>
													<tr>
														<th>Skills</th>
														<th>Version</th>
														<th>Last Used</th>
														<th>Experience</th>
														<th></th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>Bootstrap</td>
														<td>3</td>
														<td>2018</td>
														<td>1 Year 5 Months</td>
														<td><Link to={"#"} className="m-l15 font-14" data-toggle="modal" data-target="#itskills" ><i className="fa fa-pencil"></i></Link></td>
													</tr>
													<tr>
														<td>Bootstrap</td>
														<td>4</td>
														<td>2013</td>
														<td>5 Year 5 Months</td>
														<td><Link to={"#"} className="m-l15 font-14" data-toggle="modal" data-target="#itskills"><i className="fa fa-pencil"></i></Link></td>
													</tr>
													<tr>
														<td>html</td>
														<td>5</td>
														<td>2016</td>
														<td>2 Year 7 Months</td>
														<td><Link to={"#"} className="m-l15 font-14" data-toggle="modal" data-target="#itskills" ><i className="fa fa-pencil"></i></Link></td>
													</tr>
													<tr>
														<td>css</td>
														<td>3</td>
														<td>2018</td>
														<td>0 Year 5 Months</td>
														<td><Link to={"#"} className="m-l15 font-14" data-toggle="modal" data-target="#itskills"><i className="fa fa-pencil"></i></Link></td>
													</tr>
													<tr>
														<td>photoshop</td>
														<td>64bit</td>
														<td>2017</td>
														<td>1 Year 0 Months</td>
														<td><Link to={"#"} className="m-l15 font-14" data-toggle="modal" data-target="#itskills"><i className="fa fa-pencil"></i></Link></td>
													</tr>
												</tbody>
											</table>

											<Modal className="modal fade modal-bx-info editor" show={itskills} onHide={setItSkills}>
												<div className="modal-dialog my-0" role="document">
													<div className="modal-content">
														<div className="modal-header">
															<h5 className="modal-title" >IT Skills</h5>
															<button type="button" className="close" onClick={() => setItSkills(false)}><span>&times;</span>
															</button>
														</div>
														<div className="modal-body">
															<form>
																<div className="row">
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>IT Skills</label>
																			<input type="email" className="form-control" placeholder="Enter IT Skills" />
																		</div>
																	</div>
																	<div className="col-lg-6 col-md-6">
																		<div className="form-group">
																			<label>Version</label>
																			<input type="email" className="form-control" placeholder="Enter Version" />
																		</div>
																	</div>
																	<div className="col-lg-6 col-md-6">
																		<div className="form-group">
																			<label>Last Used</label>
																			<Form.Control as="select">
																				<option>2018</option>
																				<option>2017</option>
																				<option>2016</option>
																				<option>2015</option>
																				<option>2014</option>
																				<option>2013</option>
																				<option>2012</option>
																				<option>2011</option>
																				<option>2010</option>
																				<option>2009</option>
																				<option>2008</option>
																				<option>2007</option>
																				<option>2006</option>
																				<option>2005</option>
																				<option>2004</option>
																				<option>2003</option>
																				<option>2002</option>
																				<option>2001</option>
																			</Form.Control>
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-6">
																		<div className="form-group">
																			<label>Experience</label>
																			<div className="row">
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<Form.Control as="select">
																						<option>2018</option>
																						<option>2017</option>
																						<option>2016</option>
																						<option>2015</option>
																						<option>2014</option>
																						<option>2013</option>
																						<option>2012</option>
																						<option>2011</option>
																						<option>2010</option>
																						<option>2009</option>
																						<option>2008</option>
																						<option>2007</option>
																						<option>2006</option>
																						<option>2005</option>
																						<option>2004</option>
																						<option>2003</option>
																						<option>2002</option>
																						<option>2001</option>
																					</Form.Control>
																				</div>
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<Form.Control as="select">
																						<option>january</option>
																						<option>february</option>
																						<option>March</option>
																						<option>April</option>
																						<option>May</option>
																						<option>Jun</option>
																						<option>July</option>
																						<option>August</option>
																						<option>September</option>
																						<option>October</option>
																						<option>November</option>
																						<option>December</option>
																					</Form.Control>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</form>
														</div>
														<div className="modal-footer">
															<button type="button" className="site-button" onClick={() => setItSkills(false)}>Cancel</button>
															<button type="button" className="site-button">Save</button>
														</div>
													</div>
												</div>
											</Modal>

										</div> */}

										{/* <div id="profile_summary_bx" className="job-bx bg-white m-b30" >
											<div className="d-flex">
												<h5 className="m-b15">Profile Summary</h5>
												<Link to={"#"} onClick={() => setProfileSummary(true)} className="site-button add-btn button-sm">
													<i className="fa fa-pencil m-r5"></i> Edit
												</Link>
											</div>
											<p className="m-b0">Your Profile Summary should mention the highlights of your career and education, what your professional interests are, and what kind of a career you are looking for. Write a meaningful summary of more than 50 characters.</p>

											<Modal className="modal fade modal-bx-info editor" show={profilesummary} onHide={setProfileSummary}>
												<div className="modal-dialog my-0" role="document">
													<div className="modal-content">
														<div className="modal-header">
															<h5 className="modal-title" >Profile Summary</h5>
															<button type="button" className="close" onClick={() => setProfileSummary(false)}>
																<span aria-hidden="true">&times;</span>
															</button>
														</div>
														<div className="modal-body">
															<p>Your Profile Summary should mention the highlights of your career and education, what your professional interests are, and what kind of a career you are looking for. Write a meaningful summary of more than 50 characters.</p>
															<form>
																<div className="row">
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Details of Project</label>
																			<textarea className="form-control" placeholder="Type Description"></textarea>
																		</div>
																	</div>
																</div>
															</form>
														</div>
														<div className="modal-footer">
															<button type="button" className="site-button" onClick={() => setProfileSummary(false)}>Cancel</button>
															<button type="button" className="site-button">Save</button>
														</div>
													</div>
												</div>
											</Modal>

										</div> */}
										{/* <div id="accomplishments_bx" className="job-bx bg-white m-b30">
											<h5 className="m-b10">Accomplishments</h5>
											<div className="list-row">
												<div className="list-line">
													<div className="d-flex">
														<h6 className="font-14 m-b5">Online Profile</h6>
														<Link to={"#"} onClick={() => setOnlineProfile(true)} className="site-button add-btn button-sm">
															<i className="fa fa-pencil m-r5"></i> Edit
														</Link>
													</div>
													<p className="m-b0">Add link to Online profiles (e.g. Linkedin, Facebook etc.).</p>

													<Modal className="modal fade modal-bx-info editor" show={onlineprofile} onHide={setOnlineProfile}>
														<div className="modal-dialog my-0" role="document">
															<div className="modal-content">
																<div className="modal-header">
																	<h5 className="modal-title">Online Profiles</h5>
																	<button type="button" className="close" onClick={() => setOnlineProfile(false)}>
																		<span aria-hidden="true">&times;</span>
																	</button>
																</div>
																<div className="modal-body">
																	<form>
																		<div className="row">
																			<div className="col-lg-12 col-md-12">
																				<div className="form-group">
																					<label>Social Profile</label>
																					<input type="email" className="form-control" placeholder="Social Profile Name" />
																				</div>
																			</div>
																			<div className="col-lg-12 col-md-12">
																				<div className="form-group">
																					<label>URL</label>
																					<input type="email" className="form-control" placeholder="www.google.com" />
																				</div>
																			</div>
																			<div className="col-lg-12 col-md-12">
																				<div className="form-group">
																					<label>Description</label>
																					<textarea className="form-control" placeholder="Type Description"></textarea>
																				</div>
																			</div>
																		</div>
																	</form>
																</div>
																<div className="modal-footer">
																	<button type="button" className="site-button" onClick={() => setOnlineProfile(false)}>Cancel</button>
																	<button type="button" className="site-button">Save</button>
																</div>
															</div>
														</div>
													</Modal>

													<div className="list-line">
														<div className="d-flex">
															<h6 className="font-14 m-b5">Work Sample</h6>
															<Link to={"#"} onClick={() => setWorkSample(true)} className="site-button add-btn button-sm">
																<i className="fa fa-pencil m-r5"></i> Edit
															</Link>
														</div>
														<p className="m-b0">Add link to your Projects (e.g. Github links etc.).</p>

														<Modal className="modal fade modal-bx-info editor" show={worksample} onHide={setWorkSample}>
															<div className="modal-dialog my-0" role="document">
																<div className="modal-content">
																	<div className="modal-header">
																		<h5 className="modal-title" >Work Sample</h5>
																		<button type="button" className="close" onClick={() => setWorkSample(false)}>
																			<span aria-hidden="true">&times;</span>
																		</button>
																	</div>
																	<div className="modal-body">
																		<form>
																			<div className="row">
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>Work Title</label>
																						<input type="email" className="form-control" placeholder="Enter Title" />
																					</div>
																				</div>
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>URL</label>
																						<input type="email" className="form-control" placeholder="www.google.com" />
																					</div>
																				</div>
																				<div className="col-lg-6 col-md-6">
																					<div className="form-group">
																						<label>Duration From</label>
																						<div className="row">
																							<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																								<Form.Control as="select">
																									<option>2018</option>
																									<option>2017</option>
																									<option>2016</option>
																									<option>2015</option>
																									<option>2014</option>
																									<option>2013</option>
																									<option>2012</option>
																									<option>2011</option>
																									<option>2010</option>
																									<option>2009</option>
																									<option>2008</option>
																									<option>2007</option>
																									<option>2006</option>
																									<option>2005</option>
																									<option>2004</option>
																									<option>2003</option>
																									<option>2002</option>
																									<option>2001</option>
																								</Form.Control>
																							</div>
																							<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																								<Form.Control as="select">
																									<option>january</option>
																									<option>february</option>
																									<option>March</option>
																									<option>April</option>
																									<option>May</option>
																									<option>Jun</option>
																									<option>July</option>
																									<option>August</option>
																									<option>September</option>
																									<option>October</option>
																									<option>November</option>
																									<option>December</option>
																								</Form.Control>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="col-lg-6 col-md-6">
																					<div className="form-group">
																						<label>Duration To</label>
																						<div className="row">
																							<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																								<Form.Control as="select">
																									<option>2018</option>
																									<option>2017</option>
																									<option>2016</option>
																									<option>2015</option>
																									<option>2014</option>
																									<option>2013</option>
																									<option>2012</option>
																									<option>2011</option>
																									<option>2010</option>
																									<option>2009</option>
																									<option>2008</option>
																									<option>2007</option>
																									<option>2006</option>
																									<option>2005</option>
																									<option>2004</option>
																									<option>2003</option>
																									<option>2002</option>
																									<option>2001</option>
																								</Form.Control>
																							</div>
																							<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																								<Form.Control as="select">
																									<option>january</option>
																									<option>february</option>
																									<option>March</option>
																									<option>April</option>
																									<option>May</option>
																									<option>Jun</option>
																									<option>July</option>
																									<option>August</option>
																									<option>September</option>
																									<option>October</option>
																									<option>November</option>
																									<option>December</option>
																								</Form.Control>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<div className="custom-control custom-checkbox">
																							<input type="checkbox" className="custom-control-input" id="check1" name="example1" />
																							<label className="custom-control-label" htmlFor="check1">I am currently working on this</label>
																						</div>
																					</div>
																				</div>
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>Description</label>
																						<textarea className="form-control" placeholder="Type Description"></textarea>
																					</div>
																				</div>
																			</div>
																		</form>
																	</div>
																	<div className="modal-footer">
																		<button type="button" className="site-button" onClick={() => setWorkSample(false)}>Cancel</button>
																		<button type="button" className="site-button">Save</button>
																	</div>
																</div>
															</div>
														</Modal>

													</div>
													<div className="list-line">
														<div className="d-flex">
															<h6 className="font-14 m-b5">White Paper / Research Publication / Journal Entry</h6>
															<Link to={"#"} onClick={() => setWhitePaper(true)} className="site-button add-btn button-sm"><i className="fa fa-pencil m-r5"></i> Edit</Link>
														</div>
														<p className="m-b0">Add links to your Online publications.</p>

														<Modal className="modal fade modal-bx-info editor" show={whitepaper} onHide={setWhitePaper}>
															<div className="modal-dialog my-0" role="document">
																<div className="modal-content">
																	<div className="modal-header">
																		<h5 className="modal-title" id="JournalentryModalLongTitle">White Paper / Research Publication / Journal Entry</h5>
																		<button type="button" className="close" onClick={() => setWhitePaper(false)}>
																			<span aria-hidden="true">&times;</span>
																		</button>
																	</div>
																	<div className="modal-body">
																		<form>
																			<div className="row">
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>Title</label>
																						<input type="email" className="form-control" placeholder="Enter Title" />
																					</div>
																				</div>
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>URL</label>
																						<input type="email" className="form-control" placeholder="www.google.com" />
																					</div>
																				</div>
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>Published On</label>
																						<div className="row">
																							<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																								<Form.Control as="select">
																									<option>2018</option>
																									<option>2017</option>
																									<option>2016</option>
																									<option>2015</option>
																									<option>2014</option>
																									<option>2013</option>
																									<option>2012</option>
																									<option>2011</option>
																									<option>2010</option>
																									<option>2009</option>
																									<option>2008</option>
																									<option>2007</option>
																									<option>2006</option>
																									<option>2005</option>
																									<option>2004</option>
																									<option>2003</option>
																									<option>2002</option>
																									<option>2001</option>
																								</Form.Control>
																							</div>
																							<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																								<Form.Control as="select">
																									<option>january</option>
																									<option>february</option>
																									<option>March</option>
																									<option>April</option>
																									<option>May</option>
																									<option>Jun</option>
																									<option>July</option>
																									<option>August</option>
																									<option>September</option>
																									<option>October</option>
																									<option>November</option>
																									<option>December</option>
																								</Form.Control>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>Description</label>
																						<textarea className="form-control" placeholder="Type Description"></textarea>
																					</div>
																				</div>
																			</div>
																		</form>
																	</div>
																	<div className="modal-footer">
																		<button type="button" className="site-button" onClick={() => setWhitePaper(false)}>Cancel</button>
																		<button type="button" className="site-button">Save</button>
																	</div>
																</div>
															</div>
														</Modal>

													</div>
													<div className="list-line">
														<div className="d-flex">
															<h6 className="font-14 m-b5">Presentation</h6>
															<Link to={"#"} onClick={() => setPresentation(true)} className="site-button add-btn button-sm"><i className="fa fa-pencil m-r5"></i> Edit</Link>
														</div>
														<p className="m-b0">Add links to your Online presentations (e.g. Slideshare presentation links etc.).</p>

														<Modal className="modal fade modal-bx-info editor" id="presentation" show={presentation} onHide={setPresentation}>
															<div className="modal-dialog my-0" role="document">
																<div className="modal-content">
																	<div className="modal-header">
																		<h5 className="modal-title" id="PresentationModalLongTitle">Presentation</h5>
																		<button type="button" className="close" onClick={() => setPresentation(false)} >
																			<span aria-hidden="true">&times;</span>
																		</button>
																	</div>
																	<div className="modal-body">
																		<form>
																			<div className="row">
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>Title</label>
																						<input type="email" className="form-control" placeholder="Enter Title" />
																					</div>
																				</div>
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>URL</label>
																						<input type="email" className="form-control" placeholder="www.google.com" />
																					</div>
																				</div>
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>Description</label>
																						<textarea className="form-control" placeholder="Type Description"></textarea>
																					</div>
																				</div>
																			</div>
																		</form>
																	</div>
																	<div className="modal-footer">
																		<button type="button" className="site-button" data-dismiss="modal">Cancel</button>
																		<button type="button" className="site-button">Save</button>
																	</div>
																</div>
															</div>
														</Modal>

													</div>
													<div className="list-line">
														<div className="d-flex">
															<h6 className="font-14 m-b5">Patent</h6>
															<Link to={"#"} data-toggle="modal" data-target="#patent" onClick={() => setPatent(true)} className="site-button add-btn button-sm"><i className="fa fa-pencil m-r5"></i> Edit</Link>
														</div>
														<p className="m-b0">Add details of Patents you have filed.</p>

														<Modal className="modal fade modal-bx-info editor" show={patent} onHide={setPatent}>
															<div className="modal-dialog my-0" role="document">
																<div className="modal-content">
																	<div className="modal-header">
																		<h5 className="modal-title" id="PatentModalLongTitle">Patent</h5>
																		<button type="button" className="close" onClick={() => setPatent(false)}>
																			<span aria-hidden="true">&times;</span>
																		</button>
																	</div>
																	<div className="modal-body">
																		<form>
																			<div className="row">
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>Title</label>
																						<input type="email" className="form-control" placeholder="Enter Title" />
																					</div>
																				</div>
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>URL</label>
																						<input type="email" className="form-control" placeholder="www.google.com" />
																					</div>
																				</div>
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>Patent Office</label>
																						<input type="email" className="form-control" placeholder="Enter Patent Office" />
																					</div>
																				</div>
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>Status</label>
																						<div className="row">
																							<div className="col-lg-6 col-md-6">
																								<div className="custom-control custom-radio">
																									<input type="radio" className="custom-control-input" id="check2" name="example1" />
																									<label className="custom-control-label" htmlFor="check2">Patent Issued</label>
																								</div>
																							</div>
																							<div className="col-lg-6 col-md-6">
																								<div className="custom-control custom-radio">
																									<input type="radio" className="custom-control-input" id="check3" name="example1" />
																									<label className="custom-control-label" htmlFor="check3">Patent pending</label>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>Application Number</label>
																						<input type="email" className="form-control" placeholder="Enter Application Number" />
																					</div>
																				</div>
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>Published On</label>
																						<div className="row">
																							<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																								<Form.Control as="select">
																									<option>2018</option>
																									<option>2017</option>
																									<option>2016</option>
																									<option>2015</option>
																									<option>2014</option>
																									<option>2013</option>
																									<option>2012</option>
																									<option>2011</option>
																									<option>2010</option>
																									<option>2009</option>
																									<option>2008</option>
																									<option>2007</option>
																									<option>2006</option>
																									<option>2005</option>
																									<option>2004</option>
																									<option>2003</option>
																									<option>2002</option>
																									<option>2001</option>
																								</Form.Control>
																							</div>
																							<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																								<Form.Control as="select">
																									<option>january</option>
																									<option>february</option>
																									<option>March</option>
																									<option>April</option>
																									<option>May</option>
																									<option>Jun</option>
																									<option>July</option>
																									<option>August</option>
																									<option>September</option>
																									<option>October</option>
																									<option>November</option>
																									<option>December</option>
																								</Form.Control>
																							</div>
																						</div>
																					</div>
																				</div>
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>Description</label>
																						<textarea className="form-control" placeholder="Type Description"></textarea>
																					</div>
																				</div>
																			</div>
																		</form>
																	</div>
																	<div className="modal-footer">
																		<button type="button" className="site-button" onClick={() => setPatent(false)}>Cancel</button>
																		<button type="button" className="site-button">Save</button>
																	</div>
																</div>
															</div>
														</Modal>

													</div>
													<div className="list-line">
														<div className="d-flex">
															<h6 className="font-14 m-b5">Certification</h6>
															<Link to={"#"} onClick={() => setCertification(true)} className="site-button add-btn button-sm"><i className="fa fa-pencil m-r5"></i> Edit</Link>
														</div>
														<p className="m-b0">Add details of Certification you have filed.</p>

														<Modal className="modal fade modal-bx-info editor" show={certification} onHide={setCertification}>
															<div className="modal-dialog my-0" role="document">
																<div className="modal-content">
																	<div className="modal-header">
																		<h5 className="modal-title" id="CertificationModalLongTitle">Certification</h5>
																		<button type="button" className="close" onClick={() => setCertification(false)}>
																			<span aria-hidden="true">&times;</span>
																		</button>
																	</div>
																	<div className="modal-body">
																		<form>
																			<div className="row">
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>Certification Name</label>
																						<input type="text" className="form-control" placeholder="Enter Certification Name" />
																					</div>
																				</div>
																				<div className="col-lg-12 col-md-12">
																					<div className="form-group">
																						<label>Certification Body</label>
																						<input type="text" className="form-control" placeholder="Enter Certification Body" />
																					</div>
																				</div>
																				<div className="col-lg-6 col-md-6">
																					<div className="form-group">
																						<label>Year Onlabel</label>
																						<Form.Control as="select">
																							<option>2018</option>
																							<option>2017</option>
																							<option>2016</option>
																							<option>2015</option>
																							<option>2014</option>
																							<option>2013</option>
																							<option>2012</option>
																							<option>2011</option>
																							<option>2010</option>
																							<option>2009</option>
																							<option>2008</option>
																							<option>2007</option>
																							<option>2006</option>
																							<option>2005</option>
																							<option>2004</option>
																							<option>2003</option>
																							<option>2002</option>
																							<option>2001</option>
																						</Form.Control>
																					</div>
																				</div>
																			</div>
																		</form>
																	</div>
																	<div className="modal-footer">
																		<button type="button" className="site-button" onClick={() => setCertification(false)} >Cancel</button>
																		<button type="button" className="site-button">Save</button>
																	</div>
																</div>
															</div>
														</Modal>

													</div>
												</div>
											</div>

										</div> */}
										{/* <div id="desired_career_profile_bx" className="job-bx bg-white m-b30">
											<div className="d-flex">
												<h5 className="m-b30">Desired Career Profile</h5>
												<Link to={"#"} onClick={() => setCareerProfile(true)} className="site-button add-btn button-sm"><i className="fa fa-pencil m-r5"></i> Edit</Link>
											</div>
											<Modal className="modal fade modal-bx-info editor" show={careerprofile} onHide={setCareerProfile}>
												<div className="modal-dialog my-0" role="document">
													<div className="modal-content">
														<div className="modal-header">
															<h5 className="modal-title" id="DesiredprofileModalLongTitle">Desired Career Profile </h5>
															<button type="button" className="close" onClick={() => setCareerProfile(false)}>
																<span aria-hidden="true">&times;</span>
															</button>
														</div>
														<div className="modal-body">
															<form>
																<div className="row">
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Industry</label>
																			<Form.Control as="select">
																				<option>Accounting / Finance</option>
																				<option>Banking / Financial Services / Broking</option>
																				<option>Education / Teaching / Training</option>
																				<option>IT-Hardware &amp; Networking</option>
																				<option>Other</option>
																			</Form.Control>
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Functional Area / Department</label>
																			<Form.Control as="select">
																				<option>Agent</option>
																				<option>Architecture / Interior Design</option>
																				<option>Beauty / Fitness / Spa Services</option>
																				<option>IT Hardware / Technical Support</option>
																				<option>IT Software - System Programming</option>
																				<option>Other</option>
																			</Form.Control>
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Role</label>
																			<Form.Control as="select">
																				<option>Creative</option>
																				<option>Web Designer</option>
																				<option>Graphic Designer</option>
																				<option>National Creative Director</option>
																				<option>Fresher</option>
																				<option>Other</option>
																			</Form.Control>
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Job Type</label>
																			<div className="row">
																				<div className="col-lg-3 col-md-6 col-sm-6 col-6">
																					<div className="custom-control custom-checkbox">
																						<input type="checkbox" className="custom-control-input" id="permanent" name="example1" />
																						<label className="custom-control-label" htmlFor="permanent">Permanent</label>
																					</div>
																				</div>
																				<div className="col-lg-3 col-md-6 col-sm-6 col-6">
																					<div className="custom-control custom-checkbox">
																						<input type="checkbox" className="custom-control-input" id="contractual" name="example1" />
																						<label className="custom-control-label" htmlFor="contractual">Contractual</label>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Employment Type</label>
																			<div className="row">
																				<div className="col-lg-3 col-md-6 col-sm-6 col-6">
																					<div className="custom-control custom-checkbox">
																						<input type="checkbox" className="custom-control-input" id="fulltime" name="example1" />
																						<label className="custom-control-label" htmlFor="fulltime">Full Time</label>
																					</div>
																				</div>
																				<div className="col-lg-3 col-md-6 col-sm-6 col-6">
																					<div className="custom-control custom-checkbox">
																						<input type="checkbox" className="custom-control-input" id="parttime" name="example1" />
																						<label className="custom-control-label" htmlFor="parttime">Part Time</label>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Preferred Shift</label>
																			<div className="row">
																				<div className="col-lg-3 col-md-6 col-sm-6 col-6">
																					<div className="custom-control custom-radio">
																						<input type="radio" className="custom-control-input" id="day" name="example1" />
																						<label className="custom-control-label" htmlFor="day">Day</label>
																					</div>
																				</div>
																				<div className="col-lg-3 col-md-6 col-sm-6 col-6">
																					<div className="custom-control custom-radio">
																						<input type="radio" className="custom-control-input" id="night" name="example1" />
																						<label className="custom-control-label" htmlFor="night">Night</label>
																					</div>
																				</div>
																				<div className="col-lg-3 col-md-6 col-sm-6 col-6">
																					<div className="custom-control custom-radio">
																						<input type="radio" className="custom-control-input" id="flexible" name="example1" />
																						<label className="custom-control-label" htmlFor="flexible">Part Time</label>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-6">
																		<div className="form-group">
																			<label>Availability to Join</label>
																			<div className="row">
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<Form.Control as="select">
																						<option>2018</option>
																						<option>2019</option>
																						<option>2020</option>
																						<option>2021</option>
																						<option>2022</option>
																					</Form.Control>
																				</div>
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<Form.Control as="select">
																						<option>january</option>
																						<option>february</option>
																						<option>March</option>
																						<option>April</option>
																						<option>May</option>
																						<option>Jun</option>
																						<option>July</option>
																						<option>August</option>
																						<option>September</option>
																						<option>October</option>
																						<option>November</option>
																						<option>December</option>
																					</Form.Control>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Expected Salary</label>
																			<div className="row">
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<div className="custom-control custom-radio">
																						<input type="radio" className="custom-control-input" id="usdollars" name="example1" />
																						<label className="custom-control-label" htmlFor="usdollars">US Dollars</label>
																					</div>
																				</div>
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<div className="custom-control custom-radio">
																						<input type="radio" className="custom-control-input" id="rupees" name="example1" />
																						<label className="custom-control-label" htmlFor="rupees">Indian Rupees</label>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-6">
																		<div className="form-group">
																			<div className="row">
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<Form.Control as="select">
																						<option>0 lakh</option>
																						<option>1 lakh</option>
																						<option>2 lakh</option>
																						<option>5 lakh</option>
																						<option>4 lakh</option>
																						<option>5 lakh</option>
																					</Form.Control>
																				</div>
																				<div className="col-lg-6 col-md-6 col-sm-6 col-6">
																					<Form.Control as="select">
																						<option> 05 Thousand </option>
																						<option> 10 Thousand </option>
																						<option> 15 Thousand </option>
																						<option> 20 Thousand </option>
																						<option> 25 Thousand </option>
																						<option> 30 Thousand </option>
																						<option> 35 Thousand </option>
																						<option> 40 Thousand </option>
																						<option> 45 Thousand </option>
																						<option> 50 Thousand </option>
																					</Form.Control>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Desired Location</label>
																			<Form.Control as="select">
																				<option>India</option>
																				<option>Australia</option>
																				<option>Bahrain</option>
																				<option>China</option>
																				<option>Dubai</option>
																				<option>France</option>
																				<option>Germany</option>
																				<option>Hong Kong</option>
																				<option>Kuwait</option>
																			</Form.Control>
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Desired Industry</label>
																			<Form.Control as="select">
																				<option>Software</option>
																				<option>Factory</option>
																				<option>Ngo</option>
																				<option>Other</option>
																			</Form.Control>
																		</div>
																	</div>
																</div>
															</form>
														</div>
														<div className="modal-footer">
															<button type="button" className="site-button" onClick={() => setCareerProfile(false)}>Cancel</button>
															<button type="button" className="site-button">Save</button>
														</div>
													</div>
												</div>
											</Modal>

											<div className="row">
												<div className="col-lg-6 col-md-6 col-sm-6">
													<div className="clearfix m-b20">
														<label className="m-b0">Industry</label>
														<span className="clearfix font-13">IT-Software/Software Services</span>
													</div>
													<div className="clearfix m-b20">
														<label className="m-b0">Role</label>
														<span className="clearfix font-13">Web Designer</span>
													</div>
													<div className="clearfix m-b20">
														<label className="m-b0">Employment Type</label>
														<span className="clearfix font-13">Full Time</span>
													</div>
													<div className="clearfix m-b20">
														<label className="m-b0">Availability to Join</label>
														<span className="clearfix font-13">12 july</span>
													</div>
													<div className="clearfix m-b20">
														<label className="m-b0">Desired Location</label>
														<span className="clearfix font-13">Add Desired Location</span>
													</div>
												</div>
												<div className="col-lg-6 col-md-6 col-sm-6">
													<div className="clearfix m-b20">
														<label className="m-b0">Functional Area</label>
														<span className="clearfix font-13">Design / Creative / User Experience</span>
													</div>
													<div className="clearfix m-b20">
														<label className="m-b0">Job Type</label>
														<span className="clearfix font-13">permanent</span>
													</div>
													<div className="clearfix m-b20">
														<label className="m-b0">Desired Shift</label>
														<span className="clearfix font-13">Add Desired Shift</span>
													</div>
													<div className="clearfix m-b20">
														<label className="m-b0">Expected Salary</label>
														<span className="clearfix font-13">1 Lakhs</span>
													</div>
													<div className="clearfix m-b20">
														<label className="m-b0">Desired Industry</label>
														<span className="clearfix font-13">Add Desired Industry</span>
													</div>
												</div>
											</div>

										</div> */}
										{/* <div id="personal_details_bx" className="job-bx bg-white m-b30">
											<div className="d-flex">
												<h5 className="m-b30">Personal Details</h5>
												<Link to={"#"} onClick={() => setPersonalDetails(true)} className="site-button add-btn button-sm"><i className="fa fa-pencil m-r5"></i> Edit</Link>
											</div>

											<Modal className="modal fade modal-bx-info editor" show={personaldetails} onHide={setPersonalDetails}>
												<div className="modal-dialog my-0" role="document">
													<div className="modal-content">
														<div className="modal-header">
															<h5 className="modal-title" id="PersonaldetailsModalLongTitle">Personal Details</h5>
															<button type="button" className="close" onClick={() => setPersonalDetails(false)}>
																<span aria-hidden="true">&times;</span>
															</button>
														</div>
														<div className="modal-body">
															<form>
																<div className="row">
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Date of Birth</label>
																			<div className="row">
																				<div className="col-lg-4 col-md-4 col-sm-4 col-4">
																					<Form.Control as="select">
																						<option>1</option>
																						<option>2</option>
																						<option>3</option>
																						<option>4</option>
																						<option>5</option>
																						<option>6</option>
																						<option>7</option>
																						<option>8</option>
																						<option>9</option>
																						<option>10</option>
																						<option>11</option>
																						<option>12</option>
																						<option>13</option>
																						<option>14</option>
																						<option>15</option>
																						<option>16</option>
																						<option>17</option>
																						<option>18</option>
																						<option>19</option>
																						<option>20</option>
																						<option>21</option>
																						<option>22</option>
																						<option>23</option>
																						<option>24</option>
																						<option>25</option>
																						<option>26</option>
																						<option>27</option>
																						<option>28</option>
																						<option>29</option>
																						<option>30</option>
																						<option>31</option>
																					</Form.Control>
																				</div>
																				<div className="col-lg-4 col-md-4 col-sm-4 col-4">
																					<Form.Control as="select">
																						<option>january</option>
																						<option>february</option>
																						<option>March</option>
																						<option>April</option>
																						<option>May</option>
																						<option>Jun</option>
																						<option>July</option>
																						<option>August</option>
																						<option>September</option>
																						<option>October</option>
																						<option>November</option>
																						<option>December</option>
																					</Form.Control>
																				</div>
																				<div className="col-lg-4 col-md-4 col-sm-4 col-4">
																					<Form.Control as="select">
																						<option>2018</option>
																						<option>2017</option>
																						<option>2016</option>
																						<option>2015</option>
																						<option>2014</option>
																						<option>2013</option>
																						<option>2012</option>
																						<option>2011</option>
																						<option>2010</option>
																						<option>2009</option>
																						<option>2008</option>
																						<option>2007</option>
																						<option>2006</option>
																						<option>2005</option>
																						<option>2004</option>
																						<option>2003</option>
																						<option>2002</option>
																						<option>2001</option>
																					</Form.Control>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Gender</label>
																			<div className="row">
																				<div className="col-lg-3 col-md-6 col-sm-6 col-6">
																					<div className="custom-control custom-radio">
																						<input type="radio" className="custom-control-input" id="male" name="example1" />
																						<label className="custom-control-label" htmlFor="male">Male</label>
																					</div>
																				</div>
																				<div className="col-lg-3 col-md-6 col-sm-6 col-6">
																					<div className="custom-control custom-radio">
																						<input type="radio" className="custom-control-input" id="female" name="example1" />
																						<label className="custom-control-label" htmlFor="female">Female</label>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Permanent Address</label>
																			<input type="email" className="form-control" placeholder="Enter Your Permanent Address" />
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Hometown</label>
																			<input type="email" className="form-control" placeholder="Enter Hometown" />
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Pincode</label>
																			<input type="email" className="form-control" placeholder="Enter Pincode" />
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Marital Status</label>
																			<select>
																				<option>Married</option>
																				<option>Single / Unmarried</option>
																			</select>
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Passport Number</label>
																			<input type="email" className="form-control" placeholder="Enter Passport Number" />
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>What assistance do you need</label>
																			<textarea className="form-control" placeholder="Type Description"></textarea>
																		</div>
																	</div>
																	<div className="col-lg-12 col-md-12">
																		<div className="form-group">
																			<label>Work Permit for Other Countries</label>
																			<Form.Control as="select">
																				<option>India</option>
																				<option>Australia</option>
																				<option>Bahrain</option>
																				<option>China</option>
																				<option>Dubai</option>
																				<option>France</option>
																				<option>Germany</option>
																				<option>Hong Kong</option>
																				<option>Kuwait</option>
																			</Form.Control>
																		</div>
																	</div>
																</div>
															</form>
														</div>
														<div className="modal-footer">
															<button type="button" className="site-button" onClick={() => setPersonalDetails(false)}>Cancel</button>
															<button type="button" className="site-button">Save</button>
														</div>
													</div>
												</div>
											</Modal>

											<div className="row">
												<div className="col-lg-6 col-md-6 col-sm-6">
													<div className="clearfix m-b20">
														<label className="m-b0">Date of Birth</label>
														<span className="clearfix font-13">31 July 1998</span>
													</div>
													<div className="clearfix m-b20">
														<label className="m-b0">Gender</label>
														<span className="clearfix font-13">male</span>
													</div>
													<div className="clearfix m-b20">
														<label className="m-b0">Marital Status</label>
														<span className="clearfix font-13">Single / unmarried</span>
													</div>
													<div className="clearfix m-b20">
														<label className="m-b0">Passport Number</label>
														<span className="clearfix font-13">+ 123 456 7890</span>
													</div>
													<div className="clearfix m-b20">
														<label className="m-b0">Differently Abled</label>
														<span className="clearfix font-13">None</span>
													</div>
													<div className="clearfix m-b20">
														<label className="m-b0">Languages</label>
														<span className="clearfix font-13">English</span>
													</div>
												</div>
												<div className="col-lg-6 col-md-6 col-sm-6">
													<div className="clearfix m-b20">
														<label className="m-b0">Permanent Address</label>
														<span className="clearfix font-13">Add Permanent Address</span>
													</div>
													<div className="clearfix m-b20">
														<label className="m-b0">Area Pin Code</label>
														<span className="clearfix font-13">302010</span>
													</div>
													<div className="clearfix m-b20">
														<label className="m-b0">Hometown</label>
														<span className="clearfix font-13">Delhi</span>
													</div>
													<div className="clearfix m-b20">
														<label className="m-b0">Work permit of other country</label>
														<span className="clearfix font-13">USA</span>
													</div>
												</div>
											</div>
										</div> */}
										<div id="attach_resume_bx" className="job-bx bg-white m-b30" >
											<h5 className="m-b10">Anexar CV</h5>
											<p>El currículum es el documento más importante que buscan los reclutadores. Los reclutadores generalmente no miran perfiles sin currículums.</p>
											{/* <iframe
												src="https://drive.google.com/viewerng/viewer?embedded=true&url=http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&scrollbar=0"
												frameBorder="0"
												scrolling="auto"
												height="100%"
												width="100%"
											></iframe> */}
											<form className="attach-resume" onSubmit={(d) => console.log(d)}>
												<div className="row">
													<div className="col-lg-12 col-md-12">
														<div className="form-group">
															<div className="custom-file">
																<p className="m-auto align-self-center">
																	<i className="fa fa-upload"></i>
																	{' Cargar CV'}
																</p>
																<input onChange={onFileChange} type="file" className="site-button form-control" id="customFile" />
															</div>
														</div>
													</div>
												</div>
											</form>
										</div>
										<div onClick={onSubmit}>
											<Link
												to={"#"}
												data-toggle="modal"
												data-target="#keyskills"
												onClick={() => { }}
												className="site-button add-btn button-sm"
												style={{ padding: 10 }}
											>
												{'Guardar'}
											</Link>
										</div>
									</div>
								</Form>
							</div>
						</div>

					</div>

				</div>
			</div>
			<Footer />
		</>
	)
}
export default Jobmyresume;