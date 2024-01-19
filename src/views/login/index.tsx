import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Avatar, Button, CssBaseline, TextField, Paper, Box, Grid, Typography, FormControl } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { LOGIN_API, DASHBOARD_URL, EMAIL_REGEX } from '../../utility/constant';
import { handleLogin } from '../../redux/actions';
import { IntlContext } from '../../utility/context/Internationalization';

const IntlDropdown = React.lazy(() => import('../../components/IntlDropdown'));
const Loader = React.lazy(() => import('../../components/Loader'));
const ToggleMode = React.lazy(() => import('../../components/ToggleMode'));
const Signup = React.lazy(() => import('../../components/Signup'));

interface IFormInputs {
  email: string
  password: string
}

const Login = () => {
  const intlContext = useContext(IntlContext);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [openSignup, setOpenSignup] = useState<boolean>(false);

  const { handleSubmit, control } = useForm<IFormInputs>({
    defaultValues: {
      email: "",
      password: ""
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    setLoading(true);
    axios
      .post(
        LOGIN_API,
        { email: data?.email, password: data?.password }
      )
      .then((res: any) => {
        setLoading(false);
        dispatch(handleLogin(res?.data));
        navigate(DASHBOARD_URL);
      })
      .catch((error: any) => {
        console.log(error);
        setLoading(false);
        const _error = error?.response?.data?.message || error?.message;
        toast(_error, { type: "error" })
      });
  }

  const validateEmail = (value: any) => {
    const regex = EMAIL_REGEX[intlContext.locale];
    const isValid = regex.test(value);

    if (!isValid) {
      return `Please enter valid email with .${intlContext.locale}`
    }
  };

  return (
    <Box>
      <Loader enable={loading} />

      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 6,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box mb={12} display="flex" alignItems="center" justifyContent="space-between" width="100%">
              <IntlDropdown />
              <Box display="flex" alignItems="center">
                <Box ml={2}><ToggleMode /></Box>
              </Box>
            </Box>

            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              <FormattedMessage id="sign_in" />
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <FormControl fullWidth>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true, validate: validateEmail }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error }
                  }) => (
                    <TextField
                      margin="normal"
                      autoFocus
                      autoComplete="email"
                      label={<FormattedMessage id="email" />}
                      value={value}
                      helperText={error ? error.message : null}
                      error={!!error}
                      onChange={onChange}
                    />
                  )}
                />
              </FormControl>

              <FormControl fullWidth>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: true }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error }
                  }) => (
                    <TextField
                      type="password"
                      margin="normal"
                      label={<FormattedMessage id="password" />}
                      value={value}
                      helperText={error ? error.message : null}
                      error={!!error}
                      onChange={onChange}
                    />
                  )}
                />
              </FormControl>

              <Button
                type="submit"
                fullWidth
                size='large'
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {<FormattedMessage id="sign_in" />}
              </Button>

              <Box display="flex" justifyContent="flex-end">
                <Button onClick={() => setOpenSignup(true)} style={{ textTransform: "inherit" }}>
                  <FormattedMessage id="no_ac_sign_up" />
                </Button>
              </Box>

            </Box>
          </Box>
        </Grid>
      </Grid>

      {openSignup ? <Signup open={openSignup} setOpen={setOpenSignup} /> : null}
    </Box>
  );
}

export default Login;
