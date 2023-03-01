import { useForm } from 'react-hook-form'
import { useMutation, gql, useQuery } from '@apollo/client';
import { pick } from 'lodash';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { withErrorHandler } from '../../../withErrorHandler';
import { useEffect } from 'react';
import { useAuth } from '../../../useAuth';

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
   "resume": "fdsfdsgd",
   "resumeModal": false,
   "keySkillsModalOpen": false,
   "keySkills": [
      "klk",
      "bro"
   ],
   "laboralExperiences": [
      {
         "companyName": "fdsfsdfds",
         "charge": "fsdfds",
         "isYourCurrentJob": true,
         "startDate": "2023-02-12",
         "endDate": "",
         "description": "fsdfsfds",
         "id": "d3833e2d-0cf8-4d31-bbc5-adf06ffef5fd"
      }
   ],
   "laboralExperiencesModalOpen": false,
   "educations": [
      {
         "educationId": "1",
         "education": {
            "id": 1,
            "name": "Graduado"
         },
         "title": "fdsfds",
         "institution": "fdsfds",
         "isStudyingHere": true,
         "startDate": "2023-03-11",
         "endDate": null,
         "id": "08258156-7b2a-4b18-8cdb-acfede505455"
      }
   ],
   "educationsModalOpen": false,
   "projects": [
      {
         "name": "fdsfds",
         "customer": "ffdsfds",
         "isFinished": true,
         "startDate": "2023-02-12",
         "endDate": "2023-03-01",
         "description": "fdsffsdfsd",
         "id": "7b70281a-b6f5-4270-99df-60768e36a813"
      }
   ],
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


export function useActions() {
   const methods = useForm({ defaultValues });
   const [updateUserMutation] = useMutation(UPDATE_PROFILE);
   const { user: stateUser } = useSelector(state => state.app);
   const { data } = useQuery(QUERY, { variables: { userId: stateUser.id }, fetchPolicy: 'cache-and-network' });
   const { goToHome } = useAuth();

   const educations = data?.educations || [];
   const resume = data?.resume;

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
      goToHome({ accessToken, user });

      // Scroll.scrollToTop();
   })

   return { methods, onSubmit, educations, stateUser }
}