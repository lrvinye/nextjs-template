import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/hooks";
import { selectLang, setLang, toggleLang } from "../store/slice/common";

interface PageProps {}
const Home: NextPage<PageProps> = () => {
  const dispatch = useDispatch();
  const currentLang = useAppSelector(selectLang);
  return (
    <div className={` `}>
      <p>Next.js Template for redux-toolkit</p>
      <button
        onClick={() => dispatch(setLang(currentLang === "zh" ? "en" : "zh"))}
      >
        Click to Change the Language
      </button>
      <div>You can open the dev console to check redux state</div>
    </div>
  );
};

export default Home;
