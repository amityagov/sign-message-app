// https://github.com/diafygi/webcrypto-examples
import '../css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, HashRouter, Switch, Route, useParams } from 'react-router-dom';

import { Button, Typography, Card, Container, makeStyles, CardContent, CardActions, AppBar, Toolbar, IconButton } from '@material-ui/core';

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

const Home = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">
          ✍message
        </Typography>
      </Toolbar>
    </AppBar>

    <Container maxWidth="lg">
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
        </Typography>
          <Typography variant="h5" component="h2">
            be{bull}nev{bull}o{bull}lent
        </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
        </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
          <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
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
