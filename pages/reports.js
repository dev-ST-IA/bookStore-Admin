import React from "react";
import Layout from "../components/_layout";

export default function Reports() {
  return <div>Reports</div>;
}
export async function getStaticProps(context) {
  return {
    props: {
      pageTitle: "Reports",
    }, // will be passed to the page component as props
  };
}
Reports.getLayout = (page, pageTitle = "") => {
  return <Layout pageTitle={pageTitle}>{page}</Layout>;
};
