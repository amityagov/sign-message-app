import React from 'react';
import { Button, Typography, Container, AppBar, Toolbar, Grid, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';

import { NavLink } from 'react-router-dom';

import { createKeyName, generateKey, exportKey } from '../keys';
import { writeData } from '../analytics';

import { LocalStorageKeyStorageInstance } from '../storage';

import { KeyList } from '../components/key-list';
import { HowItWorks } from '../components/how-it-works';
import { KeyType } from '../types';


type State = {
  keys: KeyType[];
};
export class Home extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      keys: []
    };
  }

  private loadKeys = async () => {
    const serializedKeys = await LocalStorageKeyStorageInstance.getKeys();

    const keys = serializedKeys.map(x => {
      return JSON.parse(x) as KeyType;
    }).sort((x) => x.dateCreated);

    this.setState({ keys });
  }

  async componentDidMount() {
    await this.loadKeys();
  }

  createKey = async () => {
    const key = await generateKey();
    const exportedPrivateKey = await exportKey(key.privateKey);

    const name = createKeyName(exportedPrivateKey.x!, exportedPrivateKey.y!);

    const keyData: KeyType = {
      name,
      key: btoa(JSON.stringify(exportedPrivateKey)),
      dateCreated: +new Date(),
    }

    await LocalStorageKeyStorageInstance.saveKey(name, JSON.stringify(keyData));

    writeData('create_key');

    await this.loadKeys();
  }

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
                <Button variant="contained" color="primary" onClick={this.createKey}>
                  Create key
              </Button>
              </Grid>
            </div>

            <div className="mb10 mt10">
              <HowItWorks />
            </div>

            <div className="mt10 mb10">
              <KeyList keys={this.state.keys} />
            </div>
          </Container>
        </div>
      </>
    );
  }
}
