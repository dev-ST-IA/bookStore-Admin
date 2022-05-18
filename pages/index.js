import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";
import Layout from "../components/_layout";

function Home() {
  const auth = useAuth();
  const isUserLoggedIn = auth?.isUserLogged;
  const router = useRouter();

  useEffect(() => {
    if (isUserLoggedIn) {
      router.push("/dashboard");
    } else {
      router.push("auth/login");
    }
  });

  return null;
}

Home.getLayout = (page, pageTitle = "") => {
  return <Layout pageTitle={pageTitle}>{page}</Layout>;
};

export default Home;
