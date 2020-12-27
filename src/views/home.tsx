import React from 'react';
import { Button, Typography, Container, AppBar, Toolbar, Grid, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { generateKey } from '../keys';
import { writeData } from '../analytics';
import { NavLink } from 'react-router-dom';
import { KeyList } from '../components/key-list';

const createKey = async () => {
  const key = await generateKey();

  writeData('create_key');
};

const helpAccordionOnChange = (_: any, expanded: any) => {
  if (expanded) {
    writeData('help_expanded');
  }
};

export class Home extends React.Component {
  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">
              <NavLink to={"/"} className="home-link">
                ✍message
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>

        <div className="content">
          <Container maxWidth="lg">
            <div className="mb10 mt10">
              <Grid container justify="flex-end">
                <Button variant="contained" color="primary" onClick={createKey}>
                  Create key
              </Button>
              </Grid>
            </div>

            <div className="mb10 mt10">
              <Accordion onChange={helpAccordionOnChange}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>
                    How it works
                </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos beatae veniam quidem itaque distinctio aliquam fuga esse, sunt perferendis, veritatis sed molestias id ratione doloribus ducimus nam, quam et. Voluptas?
                </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            <div className="mt10 mb10">
              <KeyList />
            </div>
          </Container>
        </div>
      </>
    );
  }
}
