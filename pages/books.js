import React from "react";
import Layout from "../components/_layout";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import _booksTable from "../components/books/_booksTable";

export default function Books() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <_booksTable />
        </Paper>
      </Grid>
    </Grid>
  );
}
export async function getStaticProps(context) {
  return {
    props: {
      pageTitle: "Books",
    }, // will be passed to the page component as props
  };
}
Books.getLayout = (page, pageTitle = "") => {
  return <Layout pageTitle={pageTitle}>{page}</Layout>;
};
