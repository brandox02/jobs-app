import { gql } from '@apollo/client';

export const CREATE_JOB = gql`
   mutation CreateJob($input: CreateJobInput!) {
      createJob(input: $input) {
         id
      }
   }
`;