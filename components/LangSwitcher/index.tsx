import React, { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setLang, selectLang } from "../../store/slice/common";

interface Props {}
const LangSwitcher: FunctionComponent<Props> = ({}) => {
  const currentLang = useAppSelector(selectLang);

  return (
    <>
      <div
        aria-label="Switch Language"
        title="Switch Language"
        id="lang-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        Current Language is {currentLang.toUpperCase()}
      </div>
    </>
  );
};

export default LangSwitcher;
