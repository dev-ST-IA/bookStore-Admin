import React from "react";
import Layout from "../components/_layout";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import _salesTable from "../components/_salesTable.js";

export default function Sales() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <_salesTable />
        </Paper>
      </Grid>
    </Grid>
  );
}
export async function getStaticProps(context) {
  return {
    props: {
      pageTitle: "Sales",
    }, // will be passed to the page component as props
  };
}
Sales.getLayout = (page, pageTitle = "") => {
  return <Layout pageTitle={pageTitle}>{page}</Layout>;
};  
