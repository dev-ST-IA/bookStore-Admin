import SignUp from "../../components/auth/_signUp";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/dist/client/router";

export default function register() {
  const router = useRouter();
  const auth = useAuth();
  const isUserLoggedIn = auth?.isUserLogged;
  if (isUserLoggedIn) {
    router.push("/");
    return null;
  } else {
    return <SignUp />;
  }
}

register.getLayout = (page) => page;
