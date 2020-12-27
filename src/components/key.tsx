import React from 'react';

import { Card, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export class Key extends React.Component {
  render() {
    return <Card style={{ 'marginBottom': '10px' }}>
      <CardHeader title={"Key!!!!"} action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }>
      </CardHeader>
      <CardContent>
        <Typography>
          Content
        </Typography>
      </CardContent>
    </Card>;
  }
}