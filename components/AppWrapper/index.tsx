import React, { FunctionComponent } from "react";
import LangSwitcher from "../LangSwitcher";

// redux
import { Provider } from "react-redux";
import store, { persistor } from "../../store";
import { PersistGate } from "redux-persist/integration/react";

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
      <Provider store={store}>
        <PersistGate
          loading={"waiting for loading persisted states"}
          persistor={persistor}
        >
          <FloatThings />
          {children}
        </PersistGate>
      </Provider>
    </>
  );
};

export default AppWrapper;
