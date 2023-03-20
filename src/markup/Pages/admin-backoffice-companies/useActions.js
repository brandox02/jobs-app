import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const USERS = gql`
   query Users($isCandidate: Boolean, $page: Float, $perPage: Float){
      users(where: {isCandidate: $isCandidate}, page: $page, perPage: $perPage) {
         metadata {
            totalItems
            totalPages
         }
         items {
                  applications { id }
                  isAdmin
                  id 
                  email       
                  lastname
                  firstname
                  createdJobs {
                     id
                     applications {
                        id
                     }
                  }
                  companyProfile {
                     city {id name }
                     country {id name}
                     website
                     twitterUrl
                     linkedinUrl
                     name
                     email
                     description
                     countryId
                     id
                     foundationDate
                     facebookUrl
                     cityId
                  }
         }
      }
   }
`;

export function useActions() {
   const [page, setPage] = useState(0);
   const { data } = useQuery(USERS,
      {
         variables: { isCandidate: false, isAdmin: false, page, perPage: 12 },
         fetchPolicy: 'cache-and-network'
      });

   const history = useHistory();

   const users = data?.users?.items || [];
   const totalPages = data?.users?.metadata?.totalPages || 0;
   const totalItems = data?.users?.metadata?.totalItems || 0;


   const goToApplications = ({ userId }) => {
      history.push(`/admin-backoffice-applications?createdUserId=${userId}&pre-label=Compañias`);
      console.log(userId)
   }

   return {
      users, totalPages, totalItems, page, setPage, goToApplications
   }
}