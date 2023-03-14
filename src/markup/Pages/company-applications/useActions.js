import { gql, useQuery } from "@apollo/client";
import { isNil } from "lodash";
import { omitBy } from "lodash";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setTmpDataBetweenScreens } from "../../../store/slices/appSlice";

const QUERY = gql`
	query Applications($page: Float!, $perPage: Float!, $where: ApplicationWhereInput!){
		applications(where:$where, page: $page, perPage: $perPage){
			items {
            user {
              firstname 
              lastname 
              id 
              email 
              imageUrl
              resume { imageUrl } 
              candidateProfile {
                gender {id name}
                professionalTitle
                aboutMe
                phone
                country { id name }
                city { id name }
                facebookUrl
                twitterUrl
                linkedinUrl
            } 
          }

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
      description2
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
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const jobId = params?.jobId ? parseInt(params.jobId) : null;
  const jobName = params?.jobName || '';
  const { data } = useQuery(QUERY, {
    variables:
    {
      where: omitBy({ createdUserId: user.id, jobId }, isNil), page, perPage: 10
    }
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const goToCandidateProfile = ({ user }) => {
    dispatch(setTmpDataBetweenScreens({ isViewingCandidate: true, candidate: user }));
    history.push('/jobs-my-resume');
  }

  function download(dataUrl) {
    window.open(dataUrl, '_blank');
  }

  const totalItems = data?.applications?.metadata?.totalItems || 0;
  const totalPages = data?.applications?.metadata?.totalPages || 0;
  const applications = data?.applications?.items || [];

  return {
    totalPages, totalItems, applications, setPage, page, goToCandidateProfile, download, jobName
  };
}