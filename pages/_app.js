import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }) {
  const Layout = Component.getLayout || ((page) => page);
  const pageTitle = pageProps.pageTitle;

  return (
    <Provider store={store}>
      {Layout(<Component {...pageProps} />, pageTitle)}
    </Provider>
  );
}

export default MyApp;
