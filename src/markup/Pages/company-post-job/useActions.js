import { useForm } from 'react-hook-form';
import { withErrorHandler } from '../../../withErrorHandler';
import { gql, useQuery } from '@apollo/client';

const SELECTS = gql`
   query ListSelects{
      genders {
         updatedAt
         name
         id
         createdAt
      }
      workingModalities {
         name
         id
      }
      experienceTimes {
         name
         id
      }
      employmentContracts {
         name
         id
      }
      dailyWorkTimes {
         name
         id
      }
      countries {
         name
         id
      }
      categories {
         name
         id
      }
}
`

const CITIES = gql`
   query Cities($countryId: Float) {
      cities(countryId: $countryId) {
         id
         countryId
         country {
            name
            id
         }
         name
      }
   }
`

export const useActions = () => {
   const methods = useForm({ defaultValues: { englishRequired: false } });
   const countryId = methods.watch('countryId') ? parseInt(methods.watch('countryId')) : null;
   const { data } = useQuery(CITIES, { variables: { countryId }, fetchPolicy: 'cache-and-network' });
   const { data: dataSelects } = useQuery(SELECTS, { fetchPolicy: 'cache-and-network' });

   const onSubmit = withErrorHandler((data) => {
      console.log({ data });
   });

   const cities = data?.cities || [];

   return { methods, onSubmit, dataSelects, cities }
}