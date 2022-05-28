import "../styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store.js";
import AuthProvider from "../components/auth/_authProvider";

function MyApp({ Component, pageProps }) {
  const Layout =
    Component.getLayout ||
    ((page) => {
      page;
    });
  const pageTitle = pageProps.pageTitle;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          {Layout(<Component {...pageProps} />, pageTitle)}
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
