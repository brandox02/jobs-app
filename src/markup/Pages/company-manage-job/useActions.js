import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setTmpDataBetweenScreens } from '../../../store/slices/appSlice';
import { JOBS } from './queries/jobs';
import { useMutation } from '@apollo/client';
import { UPDATE_JOB } from '../company-post-job/queries/update-job';
import { withErrorHandler } from '../../../withErrorHandler';
import toast from 'react-hot-toast';


export function useActions() {
  const { user } = useSelector(state => state.app);
  const [page, setPage] = useState(0);
  const [deleteJobModal, setDeleteJobModal] = useState(null);
  const { data, refetch } = useQuery(JOBS,
    {
      variables: { page, perPage: 12, where: { createdUserId: user.id } },
      fetchPolicy: 'cache-and-network'
    });
  const [updateJobMutation] = useMutation(UPDATE_JOB);

  const history = useHistory();
  const dispatch = useDispatch();
  const goToManagement = (job) => {
    dispatch(setTmpDataBetweenScreens(job));
    history.push('/company-update-job');
  }

  const deleteJob = withErrorHandler(async (jobId) => {
    await updateJobMutation({ variables: { input: { id: jobId, enabled: false } } });
    toast.success('Vacante eliminada');
    await refetch();
  });

  const jobs = data?.jobs?.items || [];
  const totalPages = data?.jobs?.metadata?.totalPages || 0;
  return { jobs, page, setPage, history, goToManagement, deleteJob, deleteJobModal, setDeleteJobModal, totalPages }
}