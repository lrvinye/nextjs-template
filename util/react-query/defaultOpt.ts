import axios from "axios";
import {
  MutationFunction,
  QueryClient,
  QueryFunction,
  QueryKey,
} from "react-query";

const defaultQueryFn: QueryFunction = async ({ queryKey }) => {
  const jwt = "some token";
  const req_opt = {
    headers: {
      // 携带 jwt 令牌
      Authorization: `Bearer ${jwt}`,
    },
  };
  if (queryKey[1]) {
    // @ts-ignore
    if (queryKey[1]["headers"]) {
      req_opt.headers = {
        ...req_opt.headers,
        // @ts-ignore
        ...queryKey[1]["headers"],
      };
    }
    // @ts-ignore
    if (queryKey[1]["query"]) {
      // @ts-ignore
      req_opt.params = queryKey[1]["query"];
    }
  }
  const { data } = await axios.get(`${queryKey[0]}`, req_opt);
  return data;
};

export interface MutationVar {
  url: string; // 请求url
  body?: object; // 请求体
  query?: object; // query对象
  headers?: object; // 请求头
  cancelQueries?: QueryKey[]; // 请求同时将取消的query
}

// @ts-ignore
const defaultMutationFn: MutationFunction = async (variables: MutationVar) => {
  const { url, body, query, headers } = variables;
  const jwt = "some token";
  const { data } = await axios.post(`/api/${url}`, body, {
    headers: {
      // 携带 jwt 令牌
      Authorization: `Bearer ${jwt}`,
      ...headers,
    },
    params: query,
  });
  return data;
};

export const defaultOption = (client: QueryClient) => {
  client.setDefaultOptions({
    queries: {
      queryFn: defaultQueryFn,
      staleTime: 300 * 1000,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      refetchInterval: 60 * 1000,
      refetchIntervalInBackground: true,
      retryDelay: 500,
      retry: 3,
      onError: (error) => {
        console.log(`[React-Query onError]`, error);
      },
      onSettled: (res, error) => {
        console.log(`[React-Query] onSettled`, res, error);
      },
    },
    mutations: {
      mutationFn: defaultMutationFn,
      retryDelay: 500,
      retry: 3,
      // @ts-ignore
      onMutate: async (variables: MutationVar) => {
        // Cancel  queries
        await client.cancelQueries({
          predicate(q) {
            const p: boolean = variables.cancelQueries
              ? variables.cancelQueries.includes(q.queryKey)
              : false;
            return p;
          },
        });
      },
      onError: (error, variables, context) => {
        console.log(`[React-Query onError]`, error, variables, context);
      },
      onSettled: (res, error, variables, context) => {
        console.log(`[React-Query] onSettled`, res, error, variables, context);
      },
    },
  });
};
