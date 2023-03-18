import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import reportWebVitals from "./reportWebVitals";
import SimpleReactLightbox from "simple-react-lightbox";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Toaster } from 'react-hot-toast';
// console.log('env: ', process.env.API_URL)
const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache({ addTypename: false }),
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <SimpleReactLightbox>
                <BrowserRouter >
                    <ApolloProvider client={client}>
                        <Toaster />
                        <App />
                    </ApolloProvider>
                </BrowserRouter>
            </SimpleReactLightbox>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
reportWebVitals();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
