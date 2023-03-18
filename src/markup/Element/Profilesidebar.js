import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { gql, useMutation } from '@apollo/client';
import { getBase64 } from '../Pages/jobs-my-resume';
import { useAuth } from '../../useAuth';
import toast from 'react-hot-toast';
import { withErrorHandler } from '../../withErrorHandler';

const items = [
	{
		text: 'Información de Perfil',
		to: '/jobs-profile',
		iconClassname: 'fa fa-user-o'
	},
	{
		text: 'Mi Resumen',
		to: '/jobs-my-resume',
		iconClassname: 'fa fa-file-text-o'
	},
	{
		text: 'Mis Aplicaciones',
		to: '/jobs-applied-job',
		iconClassname: 'fa fa-briefcase'
	},
	{
		text: 'Cambiar Contraseña',
		to: '/jobs-change-password',
		iconClassname: 'fa fa-key'
	},
];

const UPDATE_PROFILE = gql`
   mutation UpdateUser($input: UpdateUserInput!) {
   updateUser(input: $input) {
      accessToken user { 
                  isCandidate
						isAdmin
                  id 
                  email       
                  lastname
                  imageUrl
                  imageId
                  firstname
                  companyProfile {
                     city { id name }
                     country { id name }
                     website
                     twitterUrl
                     linkedinUrl
                     name
                     email
                     description
                     countryId
                     id
                     foundationDate
                     facebookUrl
                     cityId
                  }
                  candidateProfile {
                     city { id name }
                     country { id name }
                     id
                     genderId
                     facebookUrl
                     desiredSalary
                     currentSalary
                     countryId
                     cityId
                     bornDate
                     aboutMe
                     linkedinUrl
                     phone
                     professionalTitle
                     twitterUrl
                  }
               }
   }
}
`;

function Profilesidebar() {
	const { user } = useSelector(state => state.app);
	const [updateProfileMutation] = useMutation(UPDATE_PROFILE);
	const { goToHome } = useAuth();

	const onSubmit = withErrorHandler(async (data) => {
		const imageBase64 = await getBase64(data.currentTarget.files[0]);
		const payload = {
			input: {
				id: user.id,
				image: imageBase64,
				imageId: user.imageId
			}
		};
		const { data: { updateUser: { user: userResponse, accessToken } } } = await updateProfileMutation({ variables: payload });

		goToHome({ user: userResponse, accessToken });
		toast.success('Imagen de perfil actualizada correctamente');
	})

	return (
		<div className="col-xl-3 col-lg-4 m-b30">
			<div className="sticky-top">
				<div className="candidate-info">
					<div className="candidate-detail text-center">
						<div className="canditate-des">
							<Link to={''}>
								<img alt="" src={user.imageUrl || require('./../../images/unrecognized-image.jpg')} />
							</Link>
							<div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
								<input type="file" className="update-flie" onChange={onSubmit} accept='image/*' />
								<i className="fa fa-camera"></i>
							</div>
						</div>
						<div className="candidate-title">
							<div className="" style={{ zIndex: 2 }}>
								<h4 className="m-b5">{`${user.firstname} ${user.lastname}`}</h4>
								<p className="m-b0">{user?.candidateProfile?.professionalTitle || ''}</p>
							</div>
						</div>
					</div>
					<ul>
						{items.map(item => (
							<li><Link to={item.to} className={window.location.href.includes(item.to) ? 'active' : ''}>
								<i className={item.iconClassname} aria-hidden="true"></i>
								<span>{item.text}</span></Link></li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
export default Profilesidebar;