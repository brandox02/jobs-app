import { useForm } from 'react-hook-form'
import { useMutation, gql, useQuery } from '@apollo/client';
import { pick } from 'lodash';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { withErrorHandler } from '../../../withErrorHandler';
import { useEffect } from 'react';
import { useAuth } from '../../../useAuth';
import { useHistory } from 'react-router-dom';
import { setTmpDataBetweenScreens } from '../../../store/slices/appSlice';

// const defaultValues = {
//    resume: '',
//    resumeModal: false,
//    keySkillsModalOpen: false,
//    keySkills: [],
//    laboralExperiences: [],
//    laboralExperiencesModalOpen: false,
//    educations: [],
//    educationsModalOpen: false,
//    projects: [],
//    projectsModalOpen: false,
//    image: null,
//    imageProfilePicture: null
// };

const defaultValues = {
   "resume": "",
   "resumeModal": false,
   "keySkillsModalOpen": false,
   "keySkills": [],
   "laboralExperiences": [],
   "laboralExperiencesModalOpen": false,
   "educations": [],
   "educationsModalOpen": false,
   "projects": [],
   "projectsModalOpen": false,
   "image": null,
   "resumeModalOpen": false
}

const QUERY = gql`
   query Selects ($userId: Float!){
      educations { id name }
      resume: getResume (userId: $userId){
         educations {
          education {
            id name
          }
          educationId
          endDate
          id
          institution
          isStudyingHere
          startDate
          title
        }
        id
        imageId
        imageUrl
        keySkills
        laboralExperiences {
          charge
          companyName
          description
          endDate
          id
          isYourCurrentJob
          startDate
        }
        projects {
          customer
          description
          endDate
          id
          isFinished
          name
          startDate
        }
        resume
      }
   }
`;

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
                     belongToCvBank
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

const MUTATION = gql`
	mutation ApplyJob($input: ApplyJobInput!) {
		applyJob(input: $input)
	}
`


export function useActions() {
   const methods = useForm({ defaultValues });
   const [updateUserMutation] = useMutation(UPDATE_PROFILE);
   const [applyJob] = useMutation(MUTATION);
   const { user: stateUser, tmpDataBetweenScreens } = useSelector(state => state.app);
   const isViewingCandidate = !!tmpDataBetweenScreens?.isViewingCandidate;
   const { data, loading } = useQuery(QUERY, { variables: { userId: isViewingCandidate ? tmpDataBetweenScreens.candidate.id : stateUser.id }, fetchPolicy: 'cache-and-network' });
   const { goToHome } = useAuth();
   const history = useHistory();
   const dispatch = useDispatch();
   const educations = data?.educations || [];
   const resume = data?.resume;
   const isApplyingJob = !!tmpDataBetweenScreens?.applyingJob;
   const userFromViewingCandidate = tmpDataBetweenScreens?.candidate;

   useEffect(() => {
      return () => {
         dispatch(setTmpDataBetweenScreens(null));
      }
      // eslint-disable-next-line
   }, []);

   useEffect(() => {
      if (resume) {
         methods.reset(resume);
      }
      // eslint-disable-next-line
   }, [resume]);

   const onSubmit = withErrorHandler(async () => {
      const data = methods.getValues();

      if (!data.resume.length) {
         toast.error('Debes completar tu resumen')
         return;
      }
      if (!data.educations.length) {
         toast.error('Debes de completar el apartado de Tu Educación');
         return;
      }
      if (!data.image && !resume?.imageUrl) {
         toast.error('Debes subir tu CV');
         return;
      }
      if (!data.keySkills) {
         toast.error('Debes completar el apartado de habilidades clave');
         return;
      }

      const payload = pick(data, 'educations', 'image', 'keySkills', 'laboralExperiences', 'projects', 'resume');
      payload.educations = payload.educations.map(
         item => ({
            ...pick(item, ['endDate', 'id', 'institution', 'isStudyingHere', 'startDate', 'title']),
            educationId: parseInt(item.educationId)
         })
      )
      payload.id = uuid();
      payload.educations = payload.educations.map(item =>
      ({
         ...item, education: educations.find(x => x.id === item.educationId)
      }));
      const imageLoaded = methods.watch('image');

      const profileImageId = stateUser.imageId;
      const profileImageLoaded = methods.watch('imageProfilePicture');
      delete payload.image;
      delete payload.imageProfilePicture;
      // { updateUser: { user, accessToken } }
      const { data: { updateUser: { user, accessToken } } } = await updateUserMutation({
         variables: {
            input: {
               id: stateUser.id,
               image: profileImageLoaded,
               imageId: profileImageId,
               resume: {
                  ...payload,
                  image: imageLoaded,
                  imageId: imageLoaded ? resume?.imageId : undefined
               },
            }
         }
      });
      toast.success('Resumen actualizado correctamente');
      goToHome({ accessToken, user, redirectToTheHome: false });

      // Scroll.scrollToTop();
   })


   const handleApplyJob = withErrorHandler(async () => {
      if (!stateUser.candidateProfile) {
         toast.error('Debes completar tu información de perfil');
         history.push('/jobs-profile');
         return;
      }
      const data = methods.getValues();
      if (!data.resume.length) {
         toast.error('Debes completar tu resumen')
         return;
      }
      if (!data.educations.length) {
         toast.error('Debes de completar el apartado de Tu Educación');
         return;
      }
      if (!data.image && !resume?.imageUrl) {
         toast.error('Debes subir tu CV');
         return;
      }
      if (!data.keySkills) {
         toast.error('Debes completar el apartado de habilidades clave');
         return;
      }



      await applyJob({ variables: { input: { userId: stateUser.id, jobId: tmpDataBetweenScreens.jobId } } });
      toast.success('Haz aplicado correctamente a esta vacante');

      history.push('/jobs-applied-job');
   })

   return {
      methods, onSubmit, educations, stateUser, handleApplyJob,
      isApplyingJob, isViewingCandidate, isLoading: loading,
      userFromViewingCandidate
   }
}