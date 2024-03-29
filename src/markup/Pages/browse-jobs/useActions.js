import { useForm } from "react-hook-form"
import { gql, useQuery } from '@apollo/client';
import { isNil, omit, omitBy } from "lodash";
import { useEffect, useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";

export const SELECTS = gql`
   query ListSelects{
      cities(countryId: 1) {
         id
         countryId
         country {
            name
            id
         }
         name
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
      categories {
         name
         id
         count
         classnameIcon
      }
}
`;

export const JOBS = gql`
   query Jobs($page: Float!, $perPage: Float!, $where: JobWhereInput!) {
  jobs(page: $page, perPage: $perPage, where: $where) {
    metadata {
      totalPages
      totalItems
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
        companyProfile { name }
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
}
`;

const defaultValues = {
  name: null,
  cityId: null,
  categoryId: null,
  dailyWorkTimeId: null,
  employmentContractId: null,
  workingModalityId: null,
  englishRequired: null,
  experienceTimeId: null,
  minSalary: null,
  maxSalary: null,
  cities: [],
  categories: []
}

export function useActions() {
  const methods = useForm({ defaultValues });
  // const { watch: w } = methods;
  const [page, setPage] = useState(0);
  // const { user } = useSelector(state => state.app);
  const { setValue, watch, reset } = methods;
  const { data } = useQuery(SELECTS, { fetchPolicy: 'cache-and-network' });

  const filters = omitBy(omit(methods.getValues(), ['cities', 'categories']), isNil);
  const { data: jobsData, refetch } = useQuery(JOBS,
    {
      variables: { page, perPage: 10, where: filters },
      fetchPolicy: 'cache-and-network'
    });

  // const history = useHistory();

  useEffect(() => {
    if (watch('englishRequired')) {
      refetch();
    }
    // eslint-disable-next-line
  }, [watch('englishRequired')]);
  // const location = useLocation();

  // useEffect(() => {
  //   const search = `?${Object.entries(methods.getValues())
  //     .filter(([_, value]) => !isNil(value) && !Array.isArray(value))
  //     .map(([key, value]) => `${key}=${value}`)
  //     .join('&')}`;

  //   // history.push({
  //   //   pathname: location.pathname,
  //   //   search
  //   // });


  //   // console.log(`${location.pathname}${search}`);
  //   // history.push(`${location.pathname}${search}`);


  //   // history.push('/home?englishRequired=true');
  //   // history.replace({
  //   //   pathname: location.pathname,
  //   //   search,
  //   // });
  // }, [
  //   /* eslint-disable */
  //   w('experienceTimeId'),
  //   w('maxSalary'),
  //   w('minSalary'),
  //   w('employmentContractId'),
  //   w('workingModalityId'),
  //   w('dailyWorkTimeId'),
  //   w('englishRequired'),
  //   w('name'),
  //   w('cityId'),
  //   w('categoryId')
  // ]);

  const clear = () => {
    reset(defaultValues);
  }

  // const onSubmit = withErrorHandler(() => {
  //   const data = methods.getValues();
  //   const variables = omit(data, ['cities', 'categories']);
  // });y

  const pageQuantity = jobsData?.jobs?.metadata?.totalPages || 0;
  const totalItems = jobsData?.jobs?.metadata?.totalItems || 0;
  const jobs = jobsData?.jobs?.items || [];

  return {
    refetch, jobs, totalItems, pageQuantity, methods, setValue, watch, clear, reset, page, setPage, ...(data || {})
  }
}