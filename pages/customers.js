import React from "react";
import Layout from "../components/_layout";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import _customersTable from "../components/customerTable.js";

export default function Customers() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <_customersTable />
        </Paper>
      </Grid>
    </Grid>
  );
}
export async function getStaticProps(context) {
  return {
    props: {
      pageTitle: "Customers",
    }, // will be passed to the page component as props
  };
}
Customers.getLayout = (page, pageTitle = "") => {
  return <Layout pageTitle={pageTitle}>{page}</Layout>;
};  
