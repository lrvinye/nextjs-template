import React, { FunctionComponent, useEffect } from "react";
import DarkModeBtn from "../DarkModeBtn";

// 浮动工具栏
const FloatThings = () => (
  <div className="fixed z-20 top-5 right-8 flex justify-between items-center w-auto">
    <DarkModeBtn />
  </div>
);

const AppWrapper: FunctionComponent = ({ children }) => {
  return (
    <>
      <FloatThings />
      {children}
    </>
  );
};

export default AppWrapper;
