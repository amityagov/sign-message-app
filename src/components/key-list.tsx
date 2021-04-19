import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { KeyStatsData, KeyType } from '../types';
import { Key } from './key';

type Props = {
  keys: KeyType[];
  stats: KeyStatsData[];
  onDelete: (id: string) => void;
};

export const KeyList: React.FC<Props> = ({ keys = [], onDelete }) => {
  if (keys.length == 0) {
    return (
      <Grid container justify="center">
        <Typography>
          No keys yet...
        </Typography>
      </Grid>
    );
  }


  return (
    <Grid container direction="column">
      {keys.map(({ id, name, dateCreated }, index) => {
        return <Key
          key={index}
          id={id}
          name={name}
          signCount={0}
          onDelete={onDelete}
          dateCreated={dateCreated} />;
      })}
    </Grid>
  );
};
