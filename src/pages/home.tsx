import React, { ReactElement, useEffect } from 'react';
import {
  Button,
  makeStyles,
  Container,
  Grid,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core';
import { ApiContainer } from '../hooks/useApi';
import { useHistory } from 'react-router-dom';

import { useQuery } from 'react-query';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

export default function HomePage(): ReactElement {
  const classes = useStyles();
  const { authService } = ApiContainer.useContainer();
  const history = useHistory();

  const { isLoading, error, data } = useQuery('me', authService.getMe);
  const me = data?.data;

  const logout = (): void => {
    authService.logout();
    history.push('/');
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button variant="contained" color="primary" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {me?.email}
                </Typography>
                <Typography variant="h5" component="h2">
                  {me?.firstName} {me?.lastName}
                </Typography>
                <Typography color="textSecondary">{me?.role}</Typography>
                <Typography variant="body2" component="p">
                  {me?.id}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
