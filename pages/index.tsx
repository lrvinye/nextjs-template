import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../next-i18next.config";

interface PageProps {}
const Home: NextPage<PageProps> = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <div className={` `}>
      <p>{t("title")}</p>
      <p>{t("description")}</p>
      <button
        onClick={() => {
          i18n.changeLanguage(
            SUPPORTED_LANGUAGES[
              SUPPORTED_LANGUAGES.indexOf(i18n.language) === 1 ? 0 : 1
            ]
          );
        }}
      >
        {t("btn.changeLang")}
      </button>
    </div>
  );
};

export default Home;
