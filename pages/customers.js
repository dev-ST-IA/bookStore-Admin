import React from "react";
import Layout from "../components/_layout";

export default function Customers() {
  return <div>Customers</div>;
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
