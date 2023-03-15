import React from 'react';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Profilesidebar from '../Element/Profilesidebar';
import { Form } from '../../components/form/Form';
import { useForm } from 'react-hook-form';
import { RHFTextInput } from '../../components/form/RHFTextInput';
import { gql, useMutation } from '@apollo/client';
import { withErrorHandler } from '../../withErrorHandler';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const UPDATE_PASSWORD = gql`
	mutation UpdatePassword($input: ChangePasswordInput!){
		changePassword(input: $input)
	}
`;

function Changepasswordpage() {
	const methods = useForm();
	const [updatePasswordMutation] = useMutation(UPDATE_PASSWORD);
	const { user } = useSelector(state => state.app);

	const handleSubmit = withErrorHandler(async (data) => {
		data.email = user.email;
		await updatePasswordMutation({ variables: { input: data } });
		toast.success('Contraseña actualizada exitosamente');
	}, () => {
		return {
			'UMMATCH_PASS_CURR': 'La contraseña actual es incorrecta',
			'MATCH_NEW_PASS_AND_OLD': 'La contraseña actual y la nueva son iguales',
			'UNMATCH_NEW_PASSWORD_AND_COPY_NEW_PASSWORD': 'La nueva contraseña y su confimación no son iguales'
		}
	});

	return (
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="content-block">
					<div className="section-full bg-white browse-job p-t50 p-b20">
						<div className="container">
							<div className="row">
								<Profilesidebar />
								<div className="col-xl-9 col-lg-8 m-b30">
									<div className="job-bx job-profile">
										<div className="job-bx-title clearfix">
											<h5 className="font-weight-700 pull-left text-uppercase">Cambiar Contraseña</h5>
											{/* <Link to={"/jobs-cv-manager"} className="site-button right-arrow button-sm float-right">Back</Link> */}
										</div>
										<Form methods={methods} onSubmit={handleSubmit}>
											<div className="row">
												<div className="col-lg-12">
													<RHFTextInput
														name={'oldPassword'}
														label={'Antigua Contraseña'}
														inputProps={{ type: 'password' }}
													/>
												</div>
												<div className="col-lg-6">
													<RHFTextInput
														name={'newPassword'}
														label={'Nueva Contraseña'}
														inputProps={{ type: 'password' }}
													/>
												</div>
												<div className="col-lg-6">
													<RHFTextInput
														name={'copyNewPassword'}
														label={'Repetir Nueva Contraseña'}
														inputProps={{ type: 'password' }}
													/>
												</div>
												<div className="col-lg-12 m-b10">
													<button className="site-button">Actualizar Contraseña</button>
												</div>
											</div>
										</Form>
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
export default Changepasswordpage;