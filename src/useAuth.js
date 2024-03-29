import { gql, createHttpLink, useApolloClient } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setAccessToken, setUser } from './store/slices/appSlice';

const LOGIN = gql`
         mutation Login($email: String!, $password: String!){
            login(email: $email, password: $password) {
               accessToken user {
                  isAdmin
                  isCandidate
                  id 
                  email       
                  lastname
                  imageUrl
                  imageId
                  firstname
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
                  candidateProfile {
                     belongToCvBank
                     city {id name }
                     country {id name}
                     id
                     genderId
                     facebookUrl
                     desiredSalary
                     currentSalary
                     countryId
                     cityId
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

const SIGNIN = gql`
         mutation Signin($user: CreateUserInput!){
            signin(user: $user) {
               accessToken user { 
                  isCandidate
                  isAdmin
                  
                  id 
                  email       
                  lastname
                  imageUrl
                  imageId
                  firstname
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
                  candidateProfile {
                     belongToCvBank
                     city {id name }
                     country {id name}
                     city { id name}
                     id
                     genderId
                     facebookUrl
                     desiredSalary
                     currentSalary
                     countryId
                     cityId
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

export function useAuth() {
   const client = useApolloClient();
   const dispatch = useDispatch();
   const history = useHistory();


   function goToHome({ accessToken, user, redirectToTheHome = true }) {
      dispatch(setAccessToken(accessToken));
      dispatch(setUser(user));
      localStorage.setItem('auth-metadata', JSON.stringify({ accessToken, user }));

      client.setLink(createHttpLink({
         uri: process.env.REACT_APP_API_URL,
         headers: {
            'authorization': `Bearer ${accessToken}`
         },
      }));

      if (redirectToTheHome) {
         history.push('/home');
      }
   }

   async function login({ email, password }) {

      const { data: { login } } = await client.mutate({ mutation: LOGIN, variables: { email, password } });
      const { accessToken, user } = login;

      goToHome({ accessToken, user });
   }

   async function signin({
      password,
      lastname,
      firstname,
      email,
      isCandidate
   }) {


      const { data: { signin } } = await client.mutate({
         mutation: SIGNIN, variables: {
            user: {
               password,
               lastname,
               firstname,
               email,
               isCandidate
            }
         }
      });

      const { accessToken, user } = signin;
      goToHome({ accessToken, user });
   }

   async function logout() {
      dispatch(setAccessToken(null));
      dispatch(setUser(null));
      localStorage.removeItem('auth-metadata');

      client.setLink(createHttpLink({
         uri: process.env.REACT_APP_API_URL,
         headers: {},
      }));
      history.push('/');
   }


   return { login, signin, logout, goToHome }
}