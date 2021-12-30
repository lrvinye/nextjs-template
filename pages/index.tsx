import type { NextPage } from "next";

// scss 支持
import style from "./index.module.scss";

interface PageProps {}
const Home: NextPage<PageProps> = () => {
  return (
    <div className={`${style.bg} page  flex-col flex-nowrap items-center   `}>
      <p>Next.js Template for tailwind css</p>
      <div className="p-8">
        <p className="text-text-title-light dark:text-text-title-dark text-4xl">
          This is a Title
        </p>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-xl">
          Some Secondary Text...
        </p>
        <p className="text-text-content-light dark:text-text-content-dark text-base">
          Now that we know who you are, I know who I am. I'm not a mistake! It
          all makes sense! In a comic, you know how you can tell who the
          arch-villain's going to be? He's the exact opposite of the hero. And
          most times they're friends, like you and me! I should've known way
          back when... You know why, David? Because of the kids. They called me
          Mr Glass. You think water moves fast? You should see ice. It moves
          like it has a mind. Like it knows it killed the world once and got a
          taste for murder. After the avalanche, it took us a week to climb out.
          Now, I don't know exactly when we turned on each other, but I know
          that seven of us survived the slide... and only five made it out. Now
          we took an oath, that I'm breaking now. We said we'd say it was the
          snow that killed the other two, but it wasn't. Nature is lethal but it
          doesn't hold a candle to man. Now that we know who you are, I know who
          I am. I'm not a mistake! It all makes sense! In a comic, you know how
          you can tell who the arch-villain's going to be? He's the exact
          opposite of the hero. And most times they're friends, like you and me!
          I should've known way back when... You know why, David? Because of the
          kids. They called me Mr Glass.
        </p>
        <p className="text-text-tip-light dark:text-text-tip-dark text-xs">
          Proident exercitation tempor veniam labore ullamco reprehenderit. Sint
          consectetur veniam dolor reprehenderit commodo laboris qui
          reprehenderit mollit eu consequat occaecat. Fugiat Lorem do laboris
          consectetur. Id excepteur do in dolore sunt occaecat reprehenderit
          dolore consectetur enim ea. Deserunt laboris dolor enim sint duis
          proident. Culpa nulla reprehenderit sit eu commodo. Incididunt dolore
          nulla ex ea reprehenderit ea in aliqua duis consectetur laborum.
        </p>
      </div>
      <div className="p-10">
        <p className="text-xs ">The quick brown fox ...</p>
        <p className="text-sm ">The quick brown fox ...</p>
        <p className="text-base ">The quick brown fox ...</p>
        <p className="text-lg ">The quick brown fox ...</p>
        <p className="text-xl ">The quick brown fox ...</p>
        <p className="text-2xl ">The quick brown fox ...</p>
        <p className="text-3xl ">The quick brown fox ...</p>
        <p className="text-4xl ">The quick brown fox ...</p>
        <p className="text-5xl ">The quick brown fox ...</p>
        <p className="text-6xl ">The quick brown fox ...</p>
        <p className="text-7xl ">The quick brown fox ...</p>
        <p className="text-8xl ">The quick brown fox ...</p>
        <p className="text-9xl ">The quick brown fox ...</p>
      </div>
    </div>
  );
};

export default Home;
