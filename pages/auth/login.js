import SignIn from "../../components/auth/_signIn";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

export default function login() {
  const router = useRouter();
  const auth = useAuth();
  const isUserLoggedIn = auth?.isUserLogged;

  if (isUserLoggedIn) {
    router.push("/");
    return null;
  } else {
    return <SignIn />;
  }
}

login.getLayout = (page) => page;
