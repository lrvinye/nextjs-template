import type { AppContext, AppProps } from "next/app";

import AppWrapper from "../components/AppWrapper";
import { SUPPORTED_LANGUAGES } from "../next-i18next.config";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { preferLang } = pageProps;
  return (
    <AppWrapper preferLang={preferLang ?? SUPPORTED_LANGUAGES[0]}>
      <Component {...pageProps} />
    </AppWrapper>
  );
};

export default MyApp;
