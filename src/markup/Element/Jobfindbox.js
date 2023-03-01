import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
class Jobfindbox extends Component {
	componentDidMount() {

		var i = 0;

		// Placeholder Animation Start
		var inputSelector = document.querySelectorAll('input, textarea');

		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('focus', function (event) {
				return this.parentElement.parentElement.classList.add("focused");
			});
		}


		for (i = 0; i < inputSelector.length; i++) {
			inputSelector[i].addEventListener('blur', function (event) {
				var inputValue = this.value;
				if (inputValue === '') {
					this.parentElement.parentElement.classList.remove('filled');
					this.parentElement.parentElement.classList.remove('focused');
				} else {
					this.parentElement.parentElement.classList.add('filled');
				}
			});
		}

		// Placeholder Animation End
	}
	render() {
		const { cities, categories, refetch, setValue, watch } = this.props;
		return (
			<div className="section-full browse-job-find">
				<div className="container">
					<div className="find-job-bx">
						<form className="dezPlaceAni">
							<div className="row">
								<div className="col-lg-4 col-md-6">
									<div className="form-group">
										<label>Buscar por nombre</label>
										<div className="input-group">
											<input type="text" className="form-control" placeholder="" onChange={e => setValue('name', e.currentTarget.value || null)} />
											<div className="input-group-append">
												<span className="input-group-text"><i className="fa fa-search"></i></span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<select className="select-btn custom-select" onChange={e => setValue('cityId', parseInt(e.currentTarget.value))}>
											<option>Selecciona una Provincia</option>
											{cities.map(({ name, id }, index) => (<option value={id}>{name}</option>))}

										</select>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="form-group">
										<Form.Control as="select" custom className="select-btn" onChange={e => setValue('categoryId', parseInt(e.currentTarget.value))}>
											<option>Selecciona la Categoría</option>
											{categories.map(({ name, id }) => <option value={id}>{name}</option>)}
										</Form.Control>
									</div>
								</div>
								<div className="col-lg-2 col-md-6">
									<button type="submit" className="site-button btn-block" onClick={() => refetch()}>Buscar vacantes</button>
								</div>
							</div>
						</form>
					</div>
				</div >
			</div >
		)
	}
}
export default Jobfindbox;