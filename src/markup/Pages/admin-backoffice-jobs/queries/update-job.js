import { gql } from "@apollo/client";

export const UPDATE_JOB = gql`
   mutation UpdateJob($input: UpdateJobInput!) {
      updateJob(input: $input) {
         id
      }
   }
`;