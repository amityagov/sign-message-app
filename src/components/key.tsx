import React from 'react';

import { Card, CardContent, CardHeader, IconButton, Typography, Button } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';

type Props = {
  id: string;
  name: string;
  dateCreated: number;
  signCount: number;
  onDelete: (id: string) => void;
};
export class Key extends React.Component<Props> {
  render() {
    const { id, name, dateCreated, onDelete } = this.props;

    const dt = new Date(dateCreated).toLocaleString();

    return <Card style={{ 'marginBottom': '10px' }}>
      <CardHeader title={dt} action={
        <>
          <IconButton aria-label="settings">
            <EditIcon />
          </IconButton>

          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        </>
      }>
      </CardHeader>
      <CardContent>
        <Typography>
          <Button color={'primary'}>
            Sign data
          </Button>
          <Button color={'secondary'} onClick={() => onDelete(id)}>
            Delete
          </Button>
        </Typography>
      </CardContent>
    </Card>;
  }
}