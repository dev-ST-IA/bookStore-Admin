import React from "react";
import Layout from "../components/_layout";

export default function Users() {
  return <div>Users</div>;
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
