import type { AppContext, AppProps } from "next/app";

// redux
import { Provider } from "react-redux";
import store from "../store";
import AppWrapper from "../components/AppWrapper";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </Provider>
  );
};

export default MyApp;
