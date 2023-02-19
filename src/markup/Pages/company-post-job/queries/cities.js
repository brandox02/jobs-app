import { gql } from '@apollo/client';

export const CITIES = gql`
   query Cities($countryId: Float) {
      cities(countryId: $countryId) {
         id
         countryId
         country {
            name
            id
         }
         name
      }
   }
`;