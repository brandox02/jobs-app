import { useMutation, gql, useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { withErrorHandler } from '../../../withErrorHandler';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { clone, omit } from 'lodash';
import { useAuth } from '../../../useAuth';
import { useEffect } from 'react';

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

export function useActions() {
   const methods = useForm();
   const { goToHome } = useAuth();
   const { watch, reset } = methods;
   const [updateProfileMutation] = useMutation(UPDATE_PROFILE);
   const countryId = watch('countryId') ? parseInt(watch('countryId')) : null;
   const { data } = useQuery(SELECT_DATA, { variables: { countryId }, fetchPolicy: 'cache-and-network' });
   const { user } = useSelector(state => state.app);

   useEffect(() => {
      reset(user.companyProfile);
      // eslint-disable-next-line
   }, [user]);

   const onSubmit = withErrorHandler(async (data) => {
      const copyData = clone(data);
      copyData.countryId = parseInt(copyData.countryId);
      copyData.cityId = parseInt(copyData.cityId);

      const omitUser = omit(user, ['imageUrl', 'imageId', 'isCandidate']);

      const payload = { ...omitUser, companyProfile: copyData };
      delete payload.companyProfile.city;
      delete payload.companyProfile.country;
      const { data: { updateUser } } = await updateProfileMutation({ variables: { input: payload } });
      toast.success('Información de Perfil Actualizada Correctamente');
      goToHome(updateUser);

   });


   const countries = data?.countries || [];
   const cities = data?.cities || [];

   return {
      methods, onSubmit, countries, cities
   }
}