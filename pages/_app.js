import "../styles/globals.css";
import Layout from "../components/_layout";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  // console.log(Component);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
