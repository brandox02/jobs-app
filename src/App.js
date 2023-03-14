import React, { Suspense, useEffect } from 'react';
import Index from './markup/Markup';
import { useSelector } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import './css/plugins.css';
import './css/style.css';
import './css/templete.css';
import './css/skin/skin-1.css';
import './plugins/slick/slick.min.css';
import './plugins/slick/slick-theme.min.css';
import Login from './markup/Pages/Loginpage2';
import SignUp from './markup/Pages/Register2';
import { useAuth } from './useAuth';
import Homepage from './markup/Pages/homepage';
import Jobdetail from './markup/Pages/Jobdetail';
import Browsejobfiltergrid from './markup/Pages/browse-jobs';

function App() {
    const { accessToken } = useSelector(state => state.app);
    const { goToHome } = useAuth();
    let routes = (
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register-2' component={SignUp} />
            <Route path='/job-detail/:id' exact component={Jobdetail} />
            <Route path='/browse-job-filter-grid' component={Browsejobfiltergrid} />
            <Route path='/' exact component={Homepage} />
        </Switch>
    );

    // const history = useHistory();

    // useEffect(() => {
    //     if (accessToken) {
    //         history.push('/jobs-applied-job');
    //     }
    //     // eslint-disable-next-line
    // }, [accessToken]);

    useEffect(() => {
        const appInfo = JSON.parse(localStorage.getItem('auth-metadata'));
        if (!accessToken) {
            if (appInfo) {
                goToHome(appInfo);
                return;
            }
            // history.push('/login');
        }
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {!!accessToken ? (
                <Suspense fallback={
                    <div id="preloader">
                        <div className="sk-three-bounce">
                            <div className="sk-child sk-bounce1"></div>
                            <div className="sk-child sk-bounce2"></div>
                            <div className="sk-child sk-bounce3"></div>
                        </div>
                    </div>
                }
                >
                    <Index />
                </Suspense>
            ) : (
                <div className="vh-100">
                    <Suspense fallback={
                        <div id="preloader">
                            <div className="sk-three-bounce">
                                <div className="sk-child sk-bounce1"></div>
                                <div className="sk-child sk-bounce2"></div>
                                <div className="sk-child sk-bounce3"></div>
                            </div>
                        </div>
                    }
                    >
                        {routes}
                    </Suspense>
                </div>
            )}
        </>
    )
};

export default withRouter(App);
