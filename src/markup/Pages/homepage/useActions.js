// import { gql, useQuery } from '@apollo/client';
import { gql, useQuery } from '@apollo/client';
import { useActions as useActionsBrowseJobs } from '../../../markup/Pages/browse-jobs/useActions';

export const JOBS = gql`
   query Jobs($page: Float!, $perPage: Float!, $where: JobWhereInput!) {
  jobs(page: $page, perPage: $perPage, where: $where) {
    metadata {
      totalPages
      totalItems
    }
    items {
      id
      location
      maxSalary
      description2
      minSalary
      name
      createdAt
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

export const useActions = () => {
  const fromBrowseJobs = useActionsBrowseJobs();
  const { data } = useQuery(JOBS, { variables: { page: 0, perPage: 20, where: {} } });


  const recentJobs = data?.jobs?.items || [];
  const recentJobsTotalItems = data?.jobs?.metadata?.totalItems || 0;
  return {
    fromBrowseJobs, recentJobs, recentJobsTotalItems
  }
}