import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';

import { KeyType } from '../types';
import { Key } from './key';

type Props = {
  keys: KeyType[];
};

export const KeyList: React.FC<Props> = ({ keys = [] }) => {
  return <>
    {keys.length === 0 && <Grid container justify="center">
      <Typography>
        No keys yet...
      </Typography>
    </Grid>}

    {keys.length !== 0 && <Grid container direction="column">
        {keys.map(({ key, name, dateCreated }, index) => {
          return <Key key={index} />;
        })}
    </Grid>}
  </>;
};
