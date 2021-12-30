import React, { FunctionComponent, useEffect, useState } from "react";

// 引用 tailwindcss 中的样式
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
// @ts-ignore
const tailwind = resolveConfig(tailwindConfig);

interface Props {}
const DarkModeBtn: FunctionComponent<Props> = ({}) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.setProperty(
        "--theme-ui-background-color",
        // @ts-ignore
        tailwind.theme.colors.background.dark
      );
      document.documentElement.style.setProperty(
        "--theme-ui-foreground-color",
        // @ts-ignore
        tailwind.theme.colors.foreground.dark
      );
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.setProperty(
        "--theme-ui-background-color",
        // @ts-ignore
        tailwind.theme.colors.background.light
      );
      document.documentElement.style.setProperty(
        "--theme-ui-foreground-color",
        // @ts-ignore
        tailwind.theme.colors.foreground.light
      );
    }
  }, [isDark]);

  return (
    <button
      aria-label="Activate dark mode"
      title="Activate dark mode"
      className=" text-xl cursor-pointer shadow-sm  transition duration-300 ease-in-out transform hover:scale-125"
      onClick={() => setIsDark(!!!isDark)}
    >
      {isDark ? <div>🌛</div> : <div>☀</div>}
    </button>
  );
};

export default DarkModeBtn;
