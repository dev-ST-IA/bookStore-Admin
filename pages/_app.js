import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store.js";

function MyApp({ Component, pageProps }) {
  const Layout = Component.getLayout || ((page) => page);
  const pageTitle = pageProps.pageTitle;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {Layout(<Component {...pageProps} />, pageTitle)}
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
