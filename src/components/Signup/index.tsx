import React, { useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Grid, Box, Typography, Avatar, Modal, Button, TextField, FormControl } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { SIGNUP_API, DASHBOARD_URL, EMAIL_REGEX } from '../../utility/constant';
import { IntlContext } from '../../utility/context/Internationalization';
import { handleSignup } from '../../redux/actions';

const Loader = React.lazy(() => import('../../components/Loader'))

interface IFormInputs {
  firstname: string
  lastname: string
  email: string
  password: string
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  p: 4,
};

const SignUp = ({ open, setOpen }: { [Key: string]: any }) => {
  const intlContext = useContext(IntlContext);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const { handleSubmit, control } = useForm<IFormInputs>({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
    setLoading(true);
    axios
      .post(
        SIGNUP_API,
        {
          email: data?.email,
          password: data?.password,
          firstname: data?.firstname,
          lastname: data?.lastname
        }
      )
      .then((res: any) => {
        setLoading(false);
        dispatch(handleSignup(res?.data));
        navigate(DASHBOARD_URL);
      })
      .catch((error: any) => {
        console.log(error);
        setLoading(false);
        const _error = error?.response?.data?.message || error?.message;
        toast(_error, { type: "error" });
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
    <>
      <Loader enable={loading} />

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>
          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
              <FormattedMessage id="no_ac_sign_up" />
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <Controller
                      name="firstname"
                      control={control}
                      rules={{ required: true }}
                      render={({
                        field: { onChange, value },
                        fieldState: { error }
                      }) => (
                        <TextField
                          margin="normal"
                          label={<FormattedMessage id="first_name" />}
                          value={value}
                          helperText={error ? error.message : null}
                          error={!!error}
                          onChange={onChange}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <Controller
                      name="lastname"
                      control={control}
                      rules={{ required: true }}
                      render={({
                        field: { onChange, value },
                        fieldState: { error }
                      }) => (
                        <TextField
                          margin="normal"
                          label={<FormattedMessage id="last_name" />}
                          value={value}
                          helperText={error ? error.message : null}
                          error={!!error}
                          onChange={onChange}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
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
                          label={<FormattedMessage id="email" />}
                          value={value}
                          helperText={error ? error.message : null}
                          error={!!error}
                          onChange={onChange}
                        />
                      )}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
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
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                size='large'
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <FormattedMessage id="sign_up" />
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default SignUp;
