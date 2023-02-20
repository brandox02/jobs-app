import { gql } from '@apollo/client';

export const JOBS = gql`
   query Jobs($page: Float!, $perPage: Float!, $where: JobWhereInput!) {
  jobs(page: $page, perPage: $perPage, where: $where) {
    metadata {
      totalPages
    }
    items {
      applications {
        id
        status {
          id
          name
        }
      }
      createdUserId
      createdUser {
        id
      }
      id
      location
      maxSalary
      description
      minSalary
      name
      tags {
        id name
      }
      statusId
      status {
        name
        id
      }
      workingModalityId
      workingModality {
        name
        id
      }
      vigencyDays
      tags {
        id
        name
      }
      experienceTimeId
      experienceTime {
        id
        name
      }
      englishRequired
      employmentContractId
      employmentContract {
        id
        name
      }
      dailyWorkTimeId
      dailyWorkTime {
        name
        id
      }
      contactEmail
      countryId
      country {
        name
        id
      }
      cityId
      city {
        name
        id
      }
      categoryId
      category {
        name
        id
      }
    }
  }
}
`;