import { QueryClient } from "react-query";
import { persistMutations } from "./persistMutation";
import { persistQuery } from "./persistQuery";
import { defaultOption } from "./defaultOpt";

export const wrapClient = (client: QueryClient) => {
  // 设置默认参数
  defaultOption(client);
  // 提前持久化 Queries
  persistQuery(client);
  // 提前持久化Mutations
  persistMutations(client);
};

export const createQueryClient = () => {
  const client = new QueryClient();
  // 初始化包装请求客户端
  wrapClient(client);
  return client;
};
