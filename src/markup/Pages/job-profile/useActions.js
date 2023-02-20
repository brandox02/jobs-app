import { useForm } from 'react-hook-form';
import { withErrorHandler } from '../../../withErrorHandler';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useAuth } from '../../../useAuth';

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

const SELECT_DATA = gql`
   query SelectData($countryId: Float){
      countries {
         id name
      }
      cities(countryId: $countryId){
         id name
      }
   }
`

export const useActions = () => {
   const methods = useForm();
   const { goToHome } = useAuth();
   const { watch, reset } = methods;
   const [updateProfileMutation] = useMutation(UPDATE_PROFILE);
   const countryId = watch('countryId') ? parseInt(watch('countryId')) : null;
   const { data } = useQuery(SELECT_DATA, { variables: { countryId }, fetchPolicy: 'cache-and-network' });
   const { user } = useSelector(state => state.app);


   useEffect(() => {
      reset(user.candidateProfile);
      // eslint-disable-next-line
   }, [user]);

   const onSubmit = withErrorHandler(async data => {
      const copyData = { ...data };
      copyData.countryId = parseInt(copyData.countryId);
      copyData.cityId = parseInt(copyData.cityId);
      console.log({ copyData });
      const { data: { updateUser } } = await updateProfileMutation({ variables: { input: { id: user.id, candidateProfile: copyData } } });
      toast.success('Perfil actualizado correctamente');
      goToHome(updateUser);
   });


   const countries = data?.countries || [];
   const cities = data?.cities || [];

   return { methods, onSubmit, countries, cities }
}