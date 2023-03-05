import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setTmpDataBetweenScreens } from "../../../store/slices/appSlice";

const QUERY = gql`
	query Applications($page: Float!, $perPage: Float!, $where: ApplicationWhereInput!){
		applications(where:$where, page: $page, perPage: $perPage){
			items {
            user {firstname lastname id}

				job {
      createdUserId
      createdUser {
        id
		  companyProfile {
			name
		  }
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
      createdAt
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
			metadata{
				totalItems
				totalPages
			}
		}
	}
`;

export function useActions() {
  const [page, setPage] = useState(0);
  const { user } = useSelector(state => state.app);
  const { data } = useQuery(QUERY, {
    variables:
    {
      where: { createdUserId: user.id }, page, perPage: 10
    }
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const goToCandidateProfile = ({ userId }) => {
    dispatch(setTmpDataBetweenScreens({ isViewingCandidate: true, candidateId: userId }));
    history.push('/jobs-my-resume');
  }

  const totalItems = data?.applications?.metadata?.totalItems || 0;
  const totalPages = data?.applications?.metadata?.totalPages || 0;
  const applications = data?.applications?.items || [];

  return {
    totalPages, totalItems, applications, setPage, page, goToCandidateProfile
  };
}