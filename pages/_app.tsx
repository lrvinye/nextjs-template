import type { AppContext, AppProps } from "next/app";

import AppWrapper from "../components/AppWrapper";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppWrapper pageProps={pageProps}>
      <Component {...pageProps} />
    </AppWrapper>
  );
};

export default MyApp;
