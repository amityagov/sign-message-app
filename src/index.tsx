import '../css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Switch, Route, useParams } from 'react-router-dom';

import { Button, Typography, Card, Container, makeStyles, CardContent, CardActions, AppBar, Toolbar, IconButton } from '@material-ui/core';

import { LocalStorageKeyStorage } from './storage';

const storage = new LocalStorageKeyStorage();

storage.getKeys();

import { generateKey } from './keys';
import { writeData } from './analytics';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  title2: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
});

const createKey = async () => {
  const key = await generateKey();

  console.log(key);

  writeData('create_key');
};

const signData = () => {
  writeData('sign_data');
};

const verifyData = () => {
  writeData('verify_data');
};

const Home = () => {
  return <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">
          ✍message
        </Typography>
      </Toolbar>
    </AppBar>

    <Container maxWidth="lg">
      <Button onClick={createKey}>
        Create key
      </Button>
      <Button onClick={verifyData}>
        verify data
      </Button>
      <Button onClick={signData}>
        sign data
      </Button>
    </Container>
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
