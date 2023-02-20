import { useForm } from 'react-hook-form';
import { withErrorHandler } from '../../../withErrorHandler';
import { useQuery, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import { parseIntKeysInObject } from '../../../utils/parseIntKeysInObject';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SELECTS } from './queries/selects';
import { CITIES } from './queries/cities';
import { CREATE_JOB } from './queries/create-job';
import { UPDATE_JOB } from './queries/update-job';
import { clone, pick } from 'lodash';
import { setTmpDataBetweenScreens } from '../../../store/slices/appSlice';


export const useActions = () => {
   const methods = useForm({ defaultValues: { englishRequired: false } });
   const countryId = methods.watch('countryId') ? parseInt(methods.watch('countryId')) : null;
   const { data } = useQuery(CITIES, { variables: { countryId }, fetchPolicy: 'cache-and-network' });
   const { data: dataSelects } = useQuery(SELECTS, { fetchPolicy: 'cache-and-network' });
   const [createJobMutation] = useMutation(CREATE_JOB);
   const [updateJobMutation] = useMutation(UPDATE_JOB);
   const history = useHistory();
   const job = useSelector(state => state.app.tmpDataBetweenScreens);
   const dispatch = useDispatch();
   const isEditing = !!job;

   useEffect(() => {
      if (job) {
         const copyJob = pick(
            clone(job),
            [
               'id',
               'name',
               'contactEmail',
               'englishRequired',
               'workingModalityId',
               'employmentContractId',
               'experienceTimeId',
               'dailyWorkTimeId',
               'categoryId',
               'maxSalary',
               'minSalary',
               'countryId',
               'cityId',
               'location',
               'vigencyDays',
               'statusId',
               'tags',
               'description',
               'tags',
            ]);
         copyJob.tags = copyJob.tags.map(tag => tag.name).join(',');
         methods.reset(copyJob);
      }
      // eslint-disable-next-line
   }, [job]);


   useEffect(() => {
      return () => {
         dispatch(setTmpDataBetweenScreens(null));
      }
      // eslint-disable-next-line
   }, [])

   const onSubmit = withErrorHandler(async (data) => {
      const copyData = { ...data };

      copyData.tags = copyData.tags ? copyData.tags.split(',').map(item => ({ name: item, ...(isEditing ? { jobId: data.id } : {}) })) : [];
      copyData.statusId = 1;

      const mutation = isEditing ? updateJobMutation : createJobMutation;

      await mutation({
         variables:
         {
            input: parseIntKeysInObject(copyData,
               ['workingModalityId', 'employmentContractId', 'experienceTimeId', 'dailyWorkTimeId', 'categoryId', 'countryId', 'cityId', 'statusId']
            )
         }
      });

      toast.success(`Vacante ${isEditing ? 'actualizada' : 'creada'} correctamente`);
      history.push('/company-manage-job');
   });
   const goBack = () => history.push('/company-manage-job');

   const cities = data?.cities || [];

   return { methods, onSubmit, dataSelects, cities, isEditing, goBack }
}