import { useForm } from 'react-hook-form'
import { animateScroll as Scroll } from 'react-scroll';
import { useMutation, gql, useQuery } from '@apollo/client';
import { pick } from 'lodash';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { withErrorHandler } from '../../../withErrorHandler';
import { useEffect } from 'react';

const defaultValues = {
   resume: '',
   resumeModal: false,
   keySkillsModalOpen: false,
   keySkills: [],
   laboralExperiences: [],
   laboralExperiencesModalOpen: false,
   educations: [],
   educationsModalOpen: false,
   projects: [],
   projectsModalOpen: false,
   image: null
};

// const defaultValues = {
//    "resume": "fdsfdsgd",
//    "resumeModal": false,
//    "keySkillsModalOpen": false,
//    "keySkills": [
//       "klk",
//       "bro"
//    ],
//    "laboralExperiences": [
//       {
//          "companyName": "fdsfsdfds",
//          "charge": "fsdfds",
//          "isYourCurrentJob": true,
//          "startDate": "2023-02-12",
//          "endDate": "",
//          "description": "fsdfsfds",
//          "id": "d3833e2d-0cf8-4d31-bbc5-adf06ffef5fd"
//       }
//    ],
//    "laboralExperiencesModalOpen": false,
//    "educations": [
//       {
//          "educationId": "1",
//          "education": {
//             "id": 1,
//             "name": "Graduado"
//          },
//          "title": "fdsfds",
//          "institution": "fdsfds",
//          "isStudyingHere": true,
//          "startDate": "2023-03-11",
//          "endDate": null,
//          "id": "08258156-7b2a-4b18-8cdb-acfede505455"
//       }
//    ],
//    "educationsModalOpen": false,
//    "projects": [
//       {
//          "name": "fdsfds",
//          "customer": "ffdsfds",
//          "isFinished": true,
//          "startDate": "2023-02-12",
//          "endDate": "2023-03-01",
//          "description": "fdsffsdfsd",
//          "id": "7b70281a-b6f5-4270-99df-60768e36a813"
//       }
//    ],
//    "projectsModalOpen": false,
//    "image": null,
//    "resumeModalOpen": false
// }

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

const UPDATE_USER = gql`
   mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    accessToken 
    user {
      
      companyProfile {
        cityId countryId id cityId 
      }
    }
  }
}
`;

// const GET_RESUME = gql`
//    query GetResume($userId: number){
//       getResume(userId: $userId){
//          educations {
//           education {
//             id name
//           }
//           endDate
//           id
//           institution
//           isStudyingHere
//           startDate
//           title
//         }
//         id
//         imageId
//         imageUrl
//         keySkills
//         laboralExperiences {
//           charge
//           companyName
//           description
//           endDate
//           id
//           isYourCurrentJob
//           startDate
//         }
//         projects {
//           customer
//           description
//           endDate
//           id
//           isFinished
//           name
//           startDate
//         }
//         resume
//       }
//    }
// `

export function useActions() {
   const methods = useForm({ defaultValues });
   const [updateUserMutation] = useMutation(UPDATE_USER);
   const { user } = useSelector(state => state.app);
   const { data } = useQuery(QUERY, { variables: { userId: user.id } });

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

      console.log({ resume })
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
      }))
      const imageLoaded = methods.watch('image');
      delete payload.image;
      await updateUserMutation({
         variables: {
            input: {
               id: user.id,
               resume: {
                  ...payload,
                  ...(imageLoaded ? {
                     image: imageLoaded
                  } : {})
               },
               image: methods.watch('image')
            }
         }
      });
      Scroll.scrollToTop();
      toast.success('Resumen actualizado correctamente');
   })

   return { methods, onSubmit, educations }
}