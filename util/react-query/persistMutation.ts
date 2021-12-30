import { QueryClient } from "react-query";

export const persistMutations = (client: QueryClient) => {
  // login(client);
};

// const login = (client: QueryClient) => {
//   client.setMutationDefaults("login", {
//     retryDelay: 500,
//     retry: 3,
//     mutationFn: async (param: {
//       username: string;
//       email: string;
//       password: string;
//     }) => {
//       return { res: await axios.post("/api/login", param) };
//     },
//     onMutate: async (variables) => {
//       // Cancel current queries for  login
//       await client.cancelQueries("login");
//     },
//     onSuccess: async (result, variables, context) => {
//       const data = result.res.data;
//       console.log(`onSuccess`, result, data);
//       //  登录成功，写入状态
//       if (data.pass) {
//         dispatch(userSlice.actions.login({ uid: data.uid, token: data.jwt }));
//         const res = await client.fetchQuery(["userInfo", { uid: data.uid }]);
//         if (res.res.data.uid)
//           dispatch(userSlice.actions.setUserInfo(res.res.data));
//       }
//     },
//     onError: (error, variables, context) => {},
//   });
// };
