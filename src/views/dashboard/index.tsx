import * as React from 'react';
import { CssBaseline, Box, Toolbar, Container, Grid, Paper } from '@mui/material';

const Header = React.lazy(() => import('../../components/Header'));
const SideDrawer = React.lazy(() => import('../../components/SideDrawer'));
const Chart = React.lazy(() => import('../../components/Chart'));
const UserInfo = React.lazy(() => import('../../components/UserInfo'));
const Orders = React.lazy(() => import('../../components/Orders'));

const Dashboard = () => {
  const [open, setOpen] = React.useState<boolean>(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Header open={open} toggleDrawer={toggleDrawer} />
      <SideDrawer open={open} toggleDrawer={toggleDrawer} />

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>

            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <Chart />
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <UserInfo />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Dashboard;