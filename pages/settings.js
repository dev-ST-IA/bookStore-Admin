import React from "react";
import Layout from "../components/_layout";

export default function Settings() {
  return <div>Settings</div>;
}

export async function getStaticProps(context) {
  return {
    props: {
      pageTitle: "Settings",
    }, // will be passed to the page component as props
  };
}

Settings.getLayout = (page, pageTitle = "") => {
  return <Layout pageTitle={pageTitle}>{page}</Layout>;
};
