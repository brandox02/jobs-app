import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import PageTitle from './../Layout/PageTitle';
import { gql, useQuery } from '@apollo/client';
import dayjs from 'dayjs';
import { NumericFormat } from 'react-number-format';
import { useDispatch, useSelector } from 'react-redux';
import { setTmpDataBetweenScreens } from '../../store/slices/appSlice';
import toast from 'react-hot-toast';

var bnr = require('./../../images/banner/bnr1.jpg');

const QUERY = gql`
	query Job($where: JobWhereInput!){
		job(where: $where){
			
		applications {
			user { id firstname lastname }
        id
        status {
          id
          name
        }
      }
		requirements { id name }
      createdUserId
      createdUser {
        id
      }
      id
      location
      maxSalary
      description2
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
`;

function Jobdetail({ history }) {
	const d = useParams();

	const { data } = useQuery(QUERY,
		{
			variables: { where: { id: parseInt(d.id) } },
			fetchPolicy: 'cache-and-network'
		});
	const { user } = useSelector(state => state.app);
	const dispatch = useDispatch();


	const handleSubmit = () => {
		if (!user) {
			toast.error('Antes de iniciar sesión debes iniciar sesión');
			return;
		}
		if (data.job.applications.some(x => x.user.id === user.id)) {
			toast('Ya has aplicado a esta vacante anteriormente');
			history.push('/jobs-applied-job')
			return;
		}

		if (!user.isCandidate) {
			toast.error('Solo puedes aplicar a esta vacante siendo candidato!');
			return;
		}
		dispatch(setTmpDataBetweenScreens({ applyingJob: true, jobId: job.id }));
		history.push('/jobs-my-resume');
	}

	if (!data) {
		return <></>;
	}
	const { job } = data;
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bnr + ")" }}>
					<PageTitle activeName="Detalle de Vacante" motherName="Inicio" />
				</div>
				<div className="content-block">
					<div className="section-full content-inner-1">
						<div className="container">
							<div className="row">
								<div className="col-lg-4">
									<div className="sticky-top">
										<div className="row">
											<div className="col-lg-12 col-md-6">
												<div className="m-b30">
													<img src={require("./../../images/blog/grid/pic1.jpg")} alt="" />
												</div>
											</div>
											<div className="col-lg-12 col-md-6">
												<div className="widget bg-white p-lr20 p-t20  widget_getintuch radius-sm">
													<h4 className="text-black font-weight-700 p-t10 m-b15">Detalles de la Vacante</h4>
													<ul>
														<li><i className="ti-location-pin"></i><strong className="font-weight-700 text-black">Dirección</strong><span className="text-black-light"> {job.location} </span></li>
														<li>
															<i className="ti-money"></i><strong className="font-weight-700 text-black">Salario</strong>
															<NumericFormat
																value={job.minSalary}
																thousandSeparator
																prefix='$'
																displayType='text'
															/>
															{' - '}
															<NumericFormat
																value={job.maxSalary}
																thousandSeparator
																prefix='$'
																displayType='text'
															/>
														</li>
														<li><i className="ti-shield"></i><strong className="font-weight-700 text-black">Experiencia Requerida</strong>{job.experienceTime.name}</li>
														<li><i className="ti-shield"></i><strong className="font-weight-700 text-black">Modalidad de Trabajo</strong>{job.workingModality.name}</li>
														<li><i className="ti-shield"></i><strong className="font-weight-700 text-black">Contrato de Trabajo</strong>{job.employmentContract.name}</li>
														<li><i className="ti-shield"></i><strong className="font-weight-700 text-black">Horario Laboral</strong>{job.dailyWorkTime.name}</li>
														<li><i className="ti-shield"></i><strong className="font-weight-700 text-black">Requiere Inglés</strong>{job.englishRequired ? 'Si' : 'No'}</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-8">
									<div className="job-info-box">
										<h3 className="m-t0 m-b10 font-weight-700 title-head">
											<Link to={"#"} className="text-secondry m-r30">{job.name}</Link>
										</h3>
										<ul className="job-info">
											<li><strong>{'Email de contacto: '}</strong>{job.contactEmail}</li>
											<li>
												<strong>{'Tiempo de vigencia: '}</strong> {'Vence el ' + dayjs(job.createdAt).add(job.vigencyDays, 'day').format('DD/MM/YYYY')}
											</li>
											<li><i className="ti-location-pin text-black m-r5"></i> {`${job.city.name} ${job.country.name}`} </li>
										</ul>

										<h5 className="font-weight-600 mt-3">Descripción</h5>
										<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
										<p>{job.description2}</p>
										<h5 className="font-weight-600">Requerimientos</h5>
										<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
										<ul className="list-num-count no-round">
											{job.requirements.map(item => <li>{item.name}</li>)}
										</ul>
										<Link to={"#"} className="site-button" onClick={handleSubmit}>Aplicar a este trabajo</Link>
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
export default Jobdetail;