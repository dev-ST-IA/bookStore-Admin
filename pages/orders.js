import React from "react";
import Layout from "../components/_layout";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import _ordersTable from "../components/orders/_ordersTable";

export default function Orders() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <_ordersTable />
        </Paper>
      </Grid>
    </Grid>
  );
}
export async function getStaticProps(context) {
  return {
    props: {
      pageTitle: "Orders",
    }, // will be passed to the page component as props
  };
}
Orders.getLayout = (page, pageTitle = "") => {
  return <Layout pageTitle={pageTitle}>{page}</Layout>;
};
