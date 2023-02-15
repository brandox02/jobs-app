import React, { Suspense, useEffect } from 'react';
import Index from './markup/Markup';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { checkAutoLogin } from './services/AuthService';
import './css/plugins.css';
import './css/style.css';
import './css/templete.css';
import './css/skin/skin-1.css';
import './plugins/slick/slick.min.css';
import './plugins/slick/slick-theme.min.css';
import Login from './markup/Pages/Loginpage2';
import SignUp from './markup/Pages/Register2';
import { useAuth } from './useAuth';



function App(props) {
    const dispatch = useDispatch();
    const { accessToken } = useSelector(state => state.app);
    const { login } = useAuth();
    // useEffect(() => {
    //     checkAutoLogin(dispatch, props.history);
    // }, [dispatch, props.history]);


    let routes = (
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register-2' component={SignUp} />
        </Switch>
    );
    console.log({ accessToken });
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

export default withRouter((App));

//export default App;
