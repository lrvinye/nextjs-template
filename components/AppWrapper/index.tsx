import React, { FunctionComponent, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../util/i18next";

interface Props {
  preferLang: string;
}
const AppWrapper: FunctionComponent<Props> = ({ children, preferLang }) => {
  useEffect(() => {
    i18n.changeLanguage(preferLang);
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default AppWrapper;
