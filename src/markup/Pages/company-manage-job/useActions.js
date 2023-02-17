import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const JOBS = gql`
   query Jobs($page: Float!, $perPage: Float!, $where: JobWhereInput!) {
  jobs(page: $page, perPage: $perPage, where: $where) {
    items {
      createdUser {
        id
      }
      id
      location
      maxSalary
      minSalary
      name
      status {
        name
        id
      }
      workingModality {
        name
        id
      }
      vigencyDays
      tags {
        id
        name
      }
      experienceTime {
        id
        name
      }
      englishRequired
      employmentContract {
        id
        name
      }
      dailyWorkTime {
        name
        id
      }
      contactEmail
      country {
        name
        id
      }
      city {
        name
        id
      }
      category {
        name
        id
      }
    }
  }
}
`;

export function useActions() {
  const { user } = useSelector(state => state.app);
  const [page, setPage] = useState(0);
  const { data } = useQuery(JOBS, { variables: { page: 0, perPage: 12, where: { createdUserId: user.id } }, fetchPolicy: 'cache-and-network' });

  const jobs = data?.jobs?.items || [];
  return { jobs, page, setPage }
}