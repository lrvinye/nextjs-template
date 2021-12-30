import type { GetStaticProps, NextPage } from "next";
import { useMemo } from "react";
import { dehydrate, useQuery } from "react-query";
import { createQueryClient } from "../util/react-query";

interface PageProps {}
const Home: NextPage<PageProps> = () => {
  const req = useQuery<{
    body: string;
    title: string;
    userId: string;
    id: string;
  }>([
    `https://jsonplaceholder.typicode.com/posts/${(
      Math.random() * 10
    ).toPrecision(1)}`,
  ]);

  const data = useMemo(() => {
    return Boolean(req.data)
      ? req.data
      : {
          body: "empty body",
          title: "empty title",
          userId: "empty user",
          id: "empty id",
        };
  }, [req.data]);

  return (
    <div className={``}>
      <p>Next.js Template for react-query</p>
      <div>id is {data?.id}</div>
      <div>title is {data?.title}</div>
      <div>body is {data?.body}</div>
      <div>userId is {data?.userId}</div>
      <button onClick={() => req.refetch()}>Click to refetch</button>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const queryClient = createQueryClient();

  // 提前请求缓存数据
  queryClient.prefetchQuery(["https://jsonplaceholder.typicode.com/posts/1"]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      // Will be passed to the page component as props
    },
  };
};

export default Home;
