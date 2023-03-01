import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Card } from 'react-bootstrap';
import { RHFNumberFormatInput } from '../../components/form/RHFNumberFormatInput';
import { RHFRadioGroup } from '../../components/form/RHFRadioGroup';

function Accordsidebar({ experienceTimes, employmentContracts, workingModalities
	, dailyWorkTimes, clear, setValue, watch
}) {
	return (
		<div className="col-xl-3 col-lg-4 col-md-5 m-b30">
			<aside id="accordion1" className="sticky-top sidebar-filter bg-white">
				<Accordion>
					<h6
						className="title">
						<i className="fa fa-sliders m-r5"></i> Filtrar por
						<Link
							to={"#"}
							className="font-12 float-right"
							onClick={() => {
								clear();
								console.log('mood')
							}}
						>Limpiar Filtros</Link>
					</h6>

					{/* <Accordion.Toggle as={Card} eventKey="0">
						<div className="acod-head">
							<h6 className="acod-title">
								<Link data-toggle="collapse" to="#">Compañias</Link>
							</h6>
						</div>
					</Accordion.Toggle>

					<Accordion.Collapse eventKey="0">
						<div id="companies" className="acod-body collapse show">
							<div className="acod-content">
								<div className="custom-control custom-checkbox">
									<input className="custom-control-input" id="companies1" type="checkbox" name="checkbox-companies" />
									<label className="custom-control-label" htmlFor="companies1">Job Mirror Consultancy <span>(50)</span> </label>
								</div>
								<div className="custom-control custom-checkbox">
									<input className="custom-control-input" id="companies2" type="checkbox" name="checkbox-companies" />
									<label className="custom-control-label" htmlFor="companies2">Engineering Group <span>(80)</span> </label>
								</div>
								<div className="custom-control custom-checkbox">
									<input className="custom-control-input" id="companies3" type="checkbox" name="checkbox-companies" />
									<label className="custom-control-label" htmlFor="companies3">Electric Co. <span>(235)</span> </label>
								</div>
								<div className="custom-control custom-checkbox">
									<input className="custom-control-input" id="companies4" type="checkbox" name="checkbox-companies" />
									<label className="custom-control-label" htmlFor="companies4">Telecom industry <span>(568)</span></label>
								</div>
								<div className="custom-control custom-checkbox">
									<input className="custom-control-input" id="companies5" type="checkbox" name="checkbox-companies" />
									<label className="custom-control-label" htmlFor="companies5">Safety/ Health <span>(798)</span></label>
								</div>
							</div>
						</div>
					</Accordion.Collapse> */}

					<Accordion.Toggle as={Card} eventKey="1">
						<div className="acod-head">
							<h6 className="acod-title">
								<a data-toggle="collapse" href="#" className="collapsed">Experiencia</a>
							</h6>
						</div>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="1">
						<div id="job-function" className="acod-body collapse show">
							<div className="acod-content">
								{experienceTimes.map(({ id, name }) => (
									<div className="custom-control custom-radio" key={id}>
										<input className="custom-control-input" id={`experience-times-${id}`} type="radio" name={`radio-experience-${id}`}
											onClick={() => setValue('experienceTimeId', id)}
											checked={watch('experienceTimeId') === id}
										/>
										<label className="custom-control-label" htmlFor={`experience-times-${id}`}>{name}</label>
									</div>
								))}
							</div>
						</div>
					</Accordion.Collapse>

					<Accordion.Toggle as={Card} eventKey="2">
						<div className="acod-head">
							<h6 className="acod-title">
								<a data-toggle="collapse" href="#" className="collapsed" >
									Salario
								</a>
							</h6>
						</div>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="2">
						<div id="salary" className="acod-body collapse show">
							<div className="acod-content">
								<RHFNumberFormatInput
									label={'Desde'}
									inputProps={{
										className: "form-control",
										prefix: 'RD$',
										thousandSeparator: true,
										placeholder: 'RD$'
									}}
									name={'minSalary'}
									required={false}
								/>
								<RHFNumberFormatInput
									label={'Hasta'}
									inputProps={{
										className: "form-control",
										prefix: 'RD$',
										thousandSeparator: true,
										placeholder: 'RD$'
									}}
									name={'maxSalary'}
									required={false}
								/>
							</div>
						</div>
					</Accordion.Collapse>
					<Accordion.Toggle as={Card} eventKey="3">
						<div className="acod-head">
							<h6 className="acod-title">
								<a data-toggle="collapse" href="#" className="collapsed" >
									Contrato de Trabajo
								</a>
							</h6>
						</div>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="3">
						<div id="job-function" className="acod-body collapse show">
							<div className="acod-content">
								{employmentContracts.map(({ id, name }) => (
									<div className="custom-control custom-radio" key={id}>
										<input className="custom-control-input" id={`employment-contract-${id}`} type="radio" name={`employment-contract-${id}`}
											onClick={() => setValue('employmentContractId', id)}
											checked={watch('employmentContractId') === id}
										/>
										<label className="custom-control-label" htmlFor={`employment-contract-${id}`}>{name}</label>
									</div>
								))}
							</div>
						</div>
					</Accordion.Collapse>
					<Accordion.Toggle as={Card} eventKey="4">
						<div className="acod-head">
							<h6 className="acod-title">
								<a data-toggle="collapse" href="#" className="collapsed" >
									Modalidad de Trabajo
								</a>
							</h6>
						</div>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="4">
						<div id="industry" className="acod-body collapse show">
							<div className="acod-content">
								{workingModalities.map(({ id, name }) => (
									<div className="custom-control custom-radio">
										<input
											className="custom-control-input"
											id={`workModality${id}`}
											type="radio"
											name={`radio-workModality${id}`}
											onClick={() => setValue('workingModalityId', id)}
											checked={watch('workingModalityId') === id}
										/>
										<label className="custom-control-label" htmlFor={`workModality${id}`}>{name} </label>
									</div>
								))}
							</div>
						</div>
					</Accordion.Collapse>

					<Accordion.Toggle as={Card} eventKey="5">
						<div className="acod-head">
							<h6 className="acod-title">
								<a data-toggle="collapse" href={'#'} className="collapsed" >
									Horario de Trabajo
								</a>
							</h6>
						</div>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="5">
						<div id="industry" className="acod-body collapse show">
							<div className="acod-content">
								{dailyWorkTimes.map(({ id, name }) => (
									<div className="custom-control custom-radio">
										<input
											className="custom-control-input"
											id={`dailyWorkTime${id}`}
											type="radio"
											name={`radio-dailyWorkTime${id}`}
											onClick={() => setValue('dailyWorkTimeId', id)}
											checked={watch('dailyWorkTimeId') === id}
										/>
										<label className="custom-control-label" htmlFor={`dailyWorkTime${id}`}>{name} </label>
									</div>
								))}
							</div>
						</div>
					</Accordion.Collapse>
					<Accordion.Toggle as={Card} eventKey="6">
						<div className="acod-head">
							<h6 className="acod-title">
								<a data-toggle="collapse" href="#" className="collapsed" >
									Mostrar Vacantes Que Requieran Inglés
								</a>
							</h6>
						</div>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="6">
						<div id="industry" className="acod-body collapse show">
							<div>

								<RHFRadioGroup
									className='column'
									label={''}
									name={'englishRequired'}
									options={[{ label: 'Si', value: true }, { label: 'No', value: false }]}

								/>
							</div>
						</div>
					</Accordion.Collapse>

				</Accordion>

			</aside>
		</div>
	)
}
export default Accordsidebar; 