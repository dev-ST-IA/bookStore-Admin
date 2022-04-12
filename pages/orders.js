import React from "react";
import Layout from "../components/_layout";

export default function Orders() {
  return <div>Orders</div>;
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
