import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setTmpDataBetweenScreens } from '../../../store/slices/appSlice';
import { JOBS } from './queries/jobs';
import { UPDATE_JOB } from './queries/update-job';


export function useActions() {
  const [page, setPage] = useState(0);
  const { data, refetch } = useQuery(JOBS,
    {
      variables: { page, perPage: 12, where: { statusId: 1 } },
      fetchPolicy: 'cache-and-network'
    });

  const [updateJobMutation] = useMutation(UPDATE_JOB);

  const history = useHistory();
  const dispatch = useDispatch();
  const goToManagement = (job) => {
    dispatch(setTmpDataBetweenScreens(job));
    history.push('/admin-backoffice-detail-job?readonly=true');
  }

  const enableJob = async ({ jobId }) => {
    await updateJobMutation({ variables: { input: { id: jobId, statusId: 2 } } });
    await refetch();
    toast.success('Vacante activada exitosamente');
  }

  const jobs = data?.jobs?.items || [];
  const totalPages = data?.jobs?.metadata?.totalPages || 0;
  return {
    jobs, page, setPage, history, goToManagement, totalPages, enableJob
  }
}