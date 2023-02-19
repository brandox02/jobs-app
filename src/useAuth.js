import { gql, createHttpLink, useApolloClient } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setAccessToken, setUser } from './store/slices/appSlice';

const LOGIN = gql`
         mutation Login($email: String!, $password: String!){
            login(email: $email, password: $password) {
               accessToken user { 
                  id 
                  email       
                  lastname
                  imageUrl
                  imageId
                  firstname
                  companyProfile {
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
                     updatedAt
                  }
               }
            }
         }
`;

const SIGNIN = gql`
         mutation Signin($user: CreateUserInput!){
            signin(user: $user) {
               accessToken user { id firstname lastname}
            }
         }
`;

export function useAuth() {
   const client = useApolloClient();
   const dispatch = useDispatch();
   const history = useHistory();


   function goToHome({ accessToken, user }) {
      dispatch(setAccessToken(accessToken));
      dispatch(setUser(user));
      localStorage.setItem('auth-metadata', JSON.stringify({ accessToken, user }));

      client.setLink(createHttpLink({
         uri: 'http://localhost:3000/graphql',
         headers: {
            'authorization': `Bearer ${accessToken}`
         },
      }));
      history.push('/home');
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
   }) {


      const { data: { signin } } = await client.mutate({
         mutation: SIGNIN, variables: {
            user: {
               password,
               lastname,
               firstname,
               email,
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
         uri: 'http://localhost:3000/graphql',
         headers: {},
      }));
      history.push('/login');
   }


   return { login, signin, logout, goToHome }
}