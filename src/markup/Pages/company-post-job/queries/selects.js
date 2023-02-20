import { gql } from '@apollo/client';

export const SELECTS = gql`
   query ListSelects{
      genders {
         name
         id
      }
      workingModalities {
         name
         id
      }
      experienceTimes {
         name
         id
      }
      employmentContracts {
         name
         id
      }
      dailyWorkTimes {
         name
         id
      }
      countries {
         name
         id
      }
      categories {
         name
         id
      }
}
`;