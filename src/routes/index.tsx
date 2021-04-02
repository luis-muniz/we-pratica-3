import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from '../pages/Main';

const GlobalRoutes: React.FC = () => {
  return (
    <>
      <Router>
        <Route path="/companies" component={Main} exact />
      </Router>
    </>
  );
};

export default GlobalRoutes;
