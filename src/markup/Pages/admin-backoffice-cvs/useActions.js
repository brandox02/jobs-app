import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setTmpDataBetweenScreens } from "../../../store/slices/appSlice";

const USERS = gql`
   query Users($isCandidate: Boolean, $page: Float, $perPage: Float, $belongToCvBank: Boolean){
      users(where: {isCandidate: $isCandidate, belongToCvBank: $belongToCvBank}, page: $page, perPage: $perPage) {
         metadata {
            totalItems
            totalPages
         }
         items {
                  applications { id }
                  resume {
                     imageUrl
                  }
                  isAdmin
                  
                  id 
                  email       
                  lastname
                  firstname
                  candidateProfile {
                     belongToCvBank
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

   const { data } = useQuery(USERS, {
      variables:
      {
         belongToCvBank: true, isCandidate: true, page, perPage: 10
      },
      fetchPolicy: 'cache-and-network'
   });

   const dispatch = useDispatch();
   const history = useHistory();

   const totalItems = data?.users?.metadata?.totalItems || 0;
   const totalPages = data?.users?.metadata?.totalPages || 0;
   const users = data?.users?.items || [];

   const goToCandidateProfile = ({ user }) => {
      dispatch(setTmpDataBetweenScreens({ isViewingCandidate: true, candidate: user }));
      history.push('/jobs-my-resume');
   }

   return {
      totalPages, totalItems, users, setPage, page, goToCandidateProfile
   };
}