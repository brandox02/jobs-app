import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setTmpDataBetweenScreens } from '../../../store/slices/appSlice';
import { JOBS } from './queries/jobs';



export function useActions() {
  const { user } = useSelector(state => state.app);
  const [page, setPage] = useState(0);
  const [selectedJob, setSelectedJob] = useState(null);
  const { data } = useQuery(JOBS,
    {
      variables: { page, perPage: 12, where: { createdUserId: user.id } },
      fetchPolicy: 'cache-and-network'
    });

  const history = useHistory();
  const dispatch = useDispatch();
  const goToManagement = (job) => {
    dispatch(setTmpDataBetweenScreens(job));
    history.push('/company-update-job');
  }

  const jobs = data?.jobs?.items || [];
  return { jobs, page, setPage, selectedJob, setSelectedJob, history, goToManagement }
}