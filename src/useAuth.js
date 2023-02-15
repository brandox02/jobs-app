import { gql, createHttpLink, useApolloClient } from '@apollo/client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setAccessToken, setUser } from './store/slices/appSlice';

export function useAuth() {
   const client = useApolloClient();
   const dispatch = useDispatch();
   const history = useHistory()

   useEffect(() => {
      const appInfo = JSON.parse(localStorage.getItem('auth-metadata'));
      if (appInfo) {
         client.setLink(createHttpLink({
            uri: 'http://localhost:3000/graphql',
            headers: {
               'authorization': `Bearer ${appInfo.accessToken}`
            },
         }));
         dispatch(setAccessToken(appInfo.accessToken));
         dispatch(setUser(appInfo.user));
         return;
      }
      history.push('/login');

      // eslint-disable-next-line
   }, []);

   async function login({ email, password }) {
      const LOGIN = gql`
         mutation Login($email: String!, $password: String!){
            login(email: $email, password: $password) {
               accessToken user { id firstname}
            }
         }
      `;

      const { data: { login } } = await client.mutate({ mutation: LOGIN, variables: { email, password } });

      return login;
   }

   async function signin({
      password,
      lastname,
      firstname,
      email,
   }) {
      const SIGNIN = gql`
         mutation Signin($user: CreateUserInput!){
            signin(user: $user) {
               accessToken user { id firstname lastname}
            }
         }
      `;

      const response = await client.mutate({
         mutation: SIGNIN, variables: {
            password,
            lastname,
            firstname,
            email,
         }
      });

      console.log({ response });
   }


   return { login, signin }
}