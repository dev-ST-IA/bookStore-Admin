import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { setCreateOpen } from "../../store/modelSlice";
import { useFormik } from "formik";
import { registerSchema } from "../../schemas/registerSchema";
import { useRegisterMutation } from "../../services/bookStoreApi";
// import { bookSchema } from "../../schemas/bookSchema";

export default function _addNewBook() {
  const dispatch = useDispatch();
  const [register, { data, isError, isSuccess, error, isLoading }] =
    useRegisterMutation();
  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      userName: "",
      password: "",
      cPassword: "",
      phoneNumber: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: registerSchema,
    onSubmit: () => {},
    validateOnChange: true,
    isInitialValid: true,
  });

  const handleSubmit = async (event, val) => {
    event.preventDefault();
    try {
      await register(formik.values);
      dispatch(setCreateOpen(false));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        margin: " auto",
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={formik.values.emailAddress}
              onChange={formik.handleChange}
              error={
                formik.touched.emailAddress &&
                Boolean(formik.errors.emailAddress)
              }
              helperText={
                formik.touched.emailAddress && formik.errors.emailAddress
              }
              required
              fullWidth
              id="email"
              label="Email Address"
              name="emailAddress"
              autoComplete="email"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={formik.values.userName}
              onChange={formik.handleChange}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
              required
              fullWidth
              id="userName"
              label="Username"
              name="userName"
              autoComplete="username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
              required
              fullWidth
              id="phoneNumber"
              label="Mobile Number"
              name="phoneNumber"
              autoComplete="phoneNumber"
              type="tel"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={formik.values.cPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.cPassword && Boolean(formik.errors.cPassword)
              }
              helperText={formik.touched.cPassword && formik.errors.cPassword}
              required
              fullWidth
              name="cPassword"
              label="Confirm Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          {/* <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid> */}
        </Grid>
        <Box
          sx={{ display: "flex", gap: 2, justifyContent: "space-evenly", p: 2 }}
        >
          <Button
            type="submit"
            variant="contained"
            size="small"
            color="success"
          >
            Register User
          </Button>
          <Button
            variant="contained"
            size="small"
            color="warning"
            onClick={() => dispatch(setCreateOpen(false))}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
