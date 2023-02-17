import { useForm } from 'react-hook-form';
import { withErrorHandler } from '../../../withErrorHandler';
import { gql, useQuery, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import { parseIntKeysInObject } from '../../../utils/parseIntKeysInObject';


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
`;

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
`;

const CREATE_JOB = gql`
   mutation CreateJob($input: CreateJobInput!) {
      createJob(input: $input) {
         id
      }
   }
`;

export const useActions = () => {
   const methods = useForm({ defaultValues: { englishRequired: false } });
   const countryId = methods.watch('countryId') ? parseInt(methods.watch('countryId')) : null;
   const { data } = useQuery(CITIES, { variables: { countryId }, fetchPolicy: 'cache-and-network' });
   const { data: dataSelects } = useQuery(SELECTS, { fetchPolicy: 'cache-and-network' });
   const [createJobMutation] = useMutation(CREATE_JOB);
   const history = useHistory();

   const onSubmit = withErrorHandler(async (data) => {
      const copyData = { ...data };

      copyData.tags = copyData.tags ? copyData.tags.split(',').map(item => ({ name: item })) : [];
      copyData.statusId = 1;

      await createJobMutation({
         variables:
         {
            input: parseIntKeysInObject(copyData,
               ['workingModalityId', 'employmentContractId', 'experienceTimeId', 'dailyWorkTimeId', 'categoryId', 'countryId', 'cityId', 'statusId']
            )
         }
      });

      toast.success('Vacante creada correctamente');
      history.push('/company-manage-job');
   });

   const cities = data?.cities || [];

   return { methods, onSubmit, dataSelects, cities }
}