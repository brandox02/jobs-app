import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setTmpDataBetweenScreens } from '../../../store/slices/appSlice';

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
                  candidateProfile {
                     city {id name }
                     country {id name}
                     gender {id name}
                     id
                     facebookUrl
                     desiredSalary
                     currentSalary
                     bornDate
                     aboutMe
                     linkedinUrl
                     phone
                     professionalTitle
                     twitterUrl
                  }
         }
      }
   }
`;

export function useActions() {
   const [page, setPage] = useState(0);
   const { data } = useQuery(USERS,
      {
         variables: { isCandidate: true, page, perPage: 12 },
         fetchPolicy: 'cache-and-network'
      });

   const dispatch = useDispatch();
   const history = useHistory();

   const users = data?.users?.items || [];
   const totalPages = data?.users?.metadata?.totalPages || 0;
   const totalItems = data?.users?.metadata?.totalItems || 0;

   const goToCandidateProfile = ({ user }) => {
      dispatch(setTmpDataBetweenScreens({ isViewingCandidate: true, candidate: user }));
      history.push('/jobs-my-resume');
   }

   const goToApplications = ({ userId }) => {
      history.push('/admin-backoffice-applications?userId=' + userId);
      console.log(userId)
   }

   return {
      users, totalPages, totalItems, page, setPage, goToCandidateProfile, goToApplications
   }
}