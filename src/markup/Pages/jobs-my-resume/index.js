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

export function getBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});
}

var bnr = require('./../../../images/banner/bnr1.jpg');
//var bnr2 = require('./../../images/background/bg3.jpg');

function Jobmyresume() {
	const { methods, onSubmit, educations, stateUser,
		handleApplyJob,
		isApplyingJob, isLoading,
		isViewingCandidate, userFromViewingCandidate } = useActions();
	const { user } = useSelector(state => state.app);

	async function onFileChangeCv(data) {
		const base64 = await getBase64(data.currentTarget.files[0]);
		methods.setValue('image', base64);
	}

	async function onFileChangeProfilePicture(data) {
		const base64 = await getBase64(data.currentTarget.files[0]);
		methods.setValue('imageProfilePicture', base64);
	}

	if (isLoading) {
		return <div>Cargando...</div>
	}


	const linkedinUrl = (isViewingCandidate ? userFromViewingCandidate : user)?.candidateProfile?.linkedinUrl || '';
	const facebookUrl = (isViewingCandidate ? userFromViewingCandidate : user)?.candidateProfile?.facebookUrl || '';
	const twitterUrl = (isViewingCandidate ? userFromViewingCandidate : user)?.candidateProfile?.twitterUrl || '';

	return (
		<>
			<Header />
			<div className="page-content">
				<div className="overlay-black-dark profile-edit p-t50 p-b20" style={{ backgroundImage: "url(" + bnr + ")" }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-md-7 candidate-info">
								<div className="candidate-detail">
									<div className="canditate-des text-center">
										<Link to={"#"}>
											<img
												alt=""
												src={methods.watch('imageProfilePicture') || stateUser.imageUrl || userFromViewingCandidate?.imageUrl || require("./../../../images/unrecognized-image.jpg")}
											/>
										</Link>
										{!isViewingCandidate && (
											<div className="upload-link border" title="update" data-toggle="tooltip" data-placement="right" style={{ cursor: 'pointer' }}>
												<input type="file" className="update-flie" onChange={onFileChangeProfilePicture} style={{ cursor: 'pointer' }} accept='image/*' />
												<i className="fa fa-camera" style={{ cursor: 'pointer' }}></i>
											</div>
										)}
									</div>
									<div className="text-white browse-job text-left">
										<h4 className="m-b0">{isViewingCandidate ? `${userFromViewingCandidate.firstname} ${userFromViewingCandidate.lastname}` : `${user.firstname} ${user.lastname}`}
											{/* <Link to={"#"} onClick={()=>setBasicDetails(true)} className="m-l15 font-16 text-white"><i className="fa fa-pencil"></i></Link> */}
										</h4>
										<p className="m-b15">{isViewingCandidate ? userFromViewingCandidate?.candidateProfile?.professionalTitle : user?.candidateProfile?.professionalTitle}</p>
										<ul className="clearfix" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
											<li><i className="ti-email"></i>{isViewingCandidate ? userFromViewingCandidate.email : user?.email}</li>
											<li><i className="ti-mobile"></i>{isViewingCandidate ? userFromViewingCandidate?.candidateProfile?.phone : user?.candidateProfile?.phone}</li>
											<li><i className="ti-location-pin"></i> {`${(isViewingCandidate ? userFromViewingCandidate : user)?.candidateProfile?.city?.name || ''}, ${(isViewingCandidate ? userFromViewingCandidate : user)?.candidateProfile?.country?.name || ''}`}</li>
											<li><i className="ti-filter"></i>{(isViewingCandidate ? userFromViewingCandidate : user)?.candidateProfile?.gender?.name}</li>
											{facebookUrl && <li><i className="ti-facebook"></i>{facebookUrl}</li>}
											{linkedinUrl && <li><i className="ti-linkedin"></i> {linkedinUrl}</li>}
											{twitterUrl && <li><i className="ti-twitter"></i> {twitterUrl}</li>}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="content-block">
					<div className="section-full browse-job content-inner-2">
						<div className="container">
							<div className="row">
								<div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 m-b30">
									<Listingsidebar isViewingCandidate={isViewingCandidate} />
								</div>
								<div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 m-b30">
									<Form methods={methods} onSubmit={() => { }}>
										<div className="col-xl-9 col-lg-8 col-md-8 col-sm-12">
											<Resume methods={methods} isViewingCandidate={isViewingCandidate} />
											<KeySkills methods={methods} isViewingCandidate={isViewingCandidate} />
											<LaboralExperiences methods={methods} isViewingCandidate={isViewingCandidate} />
											<Education methods={methods} educations={educations} isViewingCandidate={isViewingCandidate} />
											<Projects methods={methods} isViewingCandidate={isViewingCandidate} />
											<div id="attach_resume_bx" className="job-bx bg-white m-b30" >
												<h5 className="m-b10">{isViewingCandidate ? 'CV' : "Anexar CV"}</h5>
												{!isViewingCandidate && <p>El currículum es el documento más importante que buscan los reclutadores. Los reclutadores generalmente no miran perfiles sin currículums.</p>}
												{!isViewingCandidate && <form className="attach-resume" onSubmit={(d) => console.log(d)}>
													<div className="row">
														<div className="col-lg-12 col-md-12">
															<div className="form-group">
																<div className="custom-file">
																	<p className="m-auto align-self-center">
																		<i className="fa fa-upload"></i>
																		{' Cargar CV'}
																	</p>
																	<input accept="application/pdf" onChange={onFileChangeCv} type="file" className="site-button form-control" id="customFile" />
																</div>
															</div>
														</div>
													</div>
												</form>}
												{(methods.watch('image') || methods.watch('imageUrl')) && (
													<div style={{ height: 700 }}>
														<iframe
															src={methods.watch('image') || methods.watch('imageUrl')}
															frameBorder="0"
															scrolling="auto"
															height="100%"
															width="100%"
															title='prueba'
														></iframe>
													</div>
												)}
											</div>
											{!isViewingCandidate && (
												isApplyingJob ? (
													<div onClick={handleApplyJob}>
														<Link
															to={"#"}
															data-toggle="modal"
															data-target="#keyskills"
															onClick={() => { }}
															className="site-button add-btn button-sm"
															style={{ padding: 10 }}
														>
															{'Aplicar a la Vacante'}
														</Link>
													</div>
												) : (
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
												)
											)}
										</div>
									</Form>
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
export default Jobmyresume;