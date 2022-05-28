import React from "react";
import Layout from "../components/_layout";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import _usersTable from "../components/users/_usersTable";

export default function Users() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <_usersTable />
        </Paper>
      </Grid>
    </Grid>
  );
}
export async function getStaticProps(context) {
  return {
    props: {
      pageTitle: "Users",
    }, // will be passed to the page component as props
  };
}
Users.getLayout = (page, pageTitle = "") => {
  return <Layout pageTitle={pageTitle}>{page}</Layout>;
};
