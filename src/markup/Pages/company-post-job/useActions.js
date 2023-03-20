import { useForm } from 'react-hook-form';
import { withErrorHandler } from '../../../withErrorHandler';
import { useQuery, useMutation } from '@apollo/client';
import { useHistory, useLocation } from 'react-router-dom';
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
import { v4 as uuid } from 'uuid';

export const useActions = () => {
   const location = useLocation();
   const searchParams = new URLSearchParams(location);
   const readonly = searchParams.get('readonly') === 'true' ? true : false;
   const methods = useForm({ defaultValues: { englishRequired: false, requirements: [] } });
   const countryId = methods.watch('countryId') ? parseInt(methods.watch('countryId')) : null;
   const { data } = useQuery(CITIES, { variables: { countryId }, fetchPolicy: 'cache-and-network' });
   const { data: dataSelects } = useQuery(SELECTS, { fetchPolicy: 'cache-and-network' });
   const [createJobMutation] = useMutation(CREATE_JOB);
   const [updateJobMutation] = useMutation(UPDATE_JOB);
   const history = useHistory();
   const job = useSelector(state => state.app.tmpDataBetweenScreens);
   const dispatch = useDispatch();
   const isEditing = !!job;

   const addNewRequirement = () => {
      if (methods.watch('requirementTxt') === '') {
         return;
      }
      methods.setValue('requirements', [...(methods.watch('requirements') || []), { id: uuid(), name: methods.watch('requirementTxt') }]);
      methods.setValue('requirementTxt', null);
   }

   const deleteRequirement = (id) => {
      methods.setValue('requirements', methods.watch('requirements').filter(item => item.id !== id));
   }

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
               'description2',
               'tags',
               'requirements',
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
      delete copyData.requirementTxt;
      const mutation = isEditing ? updateJobMutation : createJobMutation;

      await mutation({
         variables:
         {
            input: parseIntKeysInObject(copyData,
               ['workingModalityId', 'employmentContractId', 'experienceTimeId', 'dailyWorkTimeId', 'categoryId', 'countryId', 'cityId', 'statusId']
            )
         }
      });

      if (isEditing) {
         toast.success(`Vacante actualizada correctamente`);
         return;
      }

      toast.success('Tu vacante se ha mandado a revisar, cuando sea aprobada se te notificará por correo electrónico'
         , { duration: 5000 }
      );


      history.push('/company-manage-job');
   });
   const goBack = () => history.push('/company-manage-job');

   const cities = data?.cities || [];

   return { methods, onSubmit, dataSelects, cities, isEditing, goBack, addNewRequirement, deleteRequirement, readonly }
}