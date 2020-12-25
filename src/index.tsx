// https://github.com/diafygi/webcrypto-examples
import '../css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Switch, Route, useParams } from 'react-router-dom';

const Home = () => {
  return <div>
    Home
    <div>
      <NavLink to="/verify">
        Verify
      </NavLink>
    </div>
  </div>;
};

const Verify = () => {
  const params = useParams();
  return <div>Verify</div>;
};

const App: React.FC = () => {
  return <HashRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/verify">
        <Verify />
      </Route>
      <Route exact path="/verify/:id">
        <Verify />
      </Route>
    </Switch>
  </HashRouter>;
};

ReactDOM.render(<App />, document.getElementById('root'));
