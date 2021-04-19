import React from 'react';
import { Button, Typography, Container, AppBar, Toolbar, Grid } from '@material-ui/core';

import { NavLink } from 'react-router-dom';

import { createKeyName, generateKey, exportKey } from '../keys';

import { writeData } from '../analytics';

import { LocalStorageKeyStorageInstance, LocalStorageKeyStatsStorageInstance } from '../storage';

import { KeyList } from '../components/key-list';
import { HowItWorks } from '../components/how-it-works';
import { KeyType, KeyStatsData } from '../types';

type State = {
  keys: KeyType[];
  stats: KeyStatsData[];
};

export class Home extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      keys: [],
      stats: []
    };
  }

  private loadKeys = async () => {
    const serializedKeys = await LocalStorageKeyStorageInstance.getItems();

    const keys = serializedKeys.map(x => {
      return JSON.parse(x) as KeyType;
    }).sort((x) => x.dateCreated);

    this.setState({ keys });
  }

  private loadStats = async () => {
    const serializedKeys = await LocalStorageKeyStatsStorageInstance.getItems();
    const stats = serializedKeys.map(x => {
      return JSON.parse(x) as KeyStatsData;
    });

    this.setState({ stats });
  }

  async componentDidMount() {
    await this.loadKeys();
    await this.loadStats();
  }

  createKey = async () => {
    const key = await generateKey();
    const exportedPrivateKey = await exportKey(key.privateKey);

    const name = createKeyName(exportedPrivateKey.x!, exportedPrivateKey.y!);

    const keyData: KeyType = {
      id: name,
      name,
      key: btoa(JSON.stringify(exportedPrivateKey)),
      dateCreated: +new Date(),
    }

    await LocalStorageKeyStorageInstance.save(name, JSON.stringify(keyData));

    writeData('create_key');

    await this.loadKeys();
  }

  delete = async (id: string) => {
    await LocalStorageKeyStorageInstance.delete(id);
    await LocalStorageKeyStatsStorageInstance.delete(id);

    await this.loadKeys();
    await this.loadStats();
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
              <KeyList
                stats={this.state.stats}
                keys={this.state.keys}
                onDelete={this.delete}
              />
            </div>
          </Container>
        </div>
      </>
    );
  }
}
