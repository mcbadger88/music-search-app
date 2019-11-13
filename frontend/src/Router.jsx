import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchPage from './components/searchPage.jsx';


const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component={SearchPage} />
    </Switch>
  );
};


export default Router;
