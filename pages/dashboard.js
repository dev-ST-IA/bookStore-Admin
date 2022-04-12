import React from "react";
import Layout from "../components/_layout";
import DashboardContent from "../components/_dashboard";

export default function Dashboard() {
  return <DashboardContent />;
}
export async function getStaticProps(context) {
  return {
    props: {
      pageTitle: "Dashboard",
    }, // will be passed to the page component as props
  };
}
Dashboard.getLayout = (page, pageTitle = "") => {
  return <Layout pageTitle={pageTitle}>{page}</Layout>;
};
