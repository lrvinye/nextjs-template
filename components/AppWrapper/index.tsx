import React, { FunctionComponent } from "react";
import LangSwitcher from "../LangSwitcher";

// 浮动工具栏
const FloatThings = () => (
  <div className="fixed z-20 top-5 right-8 flex justify-between items-center w-auto">
    <LangSwitcher />
  </div>
);

interface Props {}
const AppWrapper: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <FloatThings />
      {children}
    </>
  );
};

export default AppWrapper;
