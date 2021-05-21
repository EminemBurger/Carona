import {  BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import store from './store'
import { Provider } from 'react-redux'
import React, { useEffect } from 'react'
import { loadUser } from './action/auth';
import { setToken } from './setToken';

import Home from './pages/Home';
import Forum from './pages/Forum'
import Board from './pages/Board'
import BoardDetail from './pages/BoardDetail'
import Map from './pages/Mappage'

import  Nav  from './components/Nav';

if (sessionStorage.getItem('token')) {
  setToken(sessionStorage.getItem('token'));
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (

    <Provider store={store}>
      <div>

        <BrowserRouter>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/Forum" component={Forum} />
            <Route exact path="/Board" component={Board} />
            <Route exact path="/BoardDetail" component={BoardDetail} />
            <Route exact path="/Map" component={Map} />

          </Switch>
        </BrowserRouter>
      </div>
    </Provider>

  );
}


export default App