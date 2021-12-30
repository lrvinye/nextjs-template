import { QueryClient } from "react-query";

export const persistQuery = (client: QueryClient) => {
  // fetchUserInfo(client);
};

// const fetchUserInfo = (client: QueryClient) => {
//   client.setQueryDefaults("userInfo", {
//     enabled: Boolean(getState().user.accessToken),
//     refetchOnWindowFocus: true,
//     refetchOnReconnect: true,
//     refetchInterval: 60 * 1000,
//     refetchIntervalInBackground: true,
//     retryDelay: 500,
//     retry: 3,
//     queryFn: async ({ queryKey }) => {
//       const { uid } = queryKey[1];
//       const jwt = getState().user.accessToken;
//       return {
//         res: await axios.get(`/api/user/${uid}`, {
//           headers: {
//             Authorization: `Bearer ${jwt}`,
//           },
//         }),
//       };
//     },
//     onSuccess: (result) => {
//       console.log(`onSuccess`, result);
//       const data = result.res.data;
//       //  ...写入状态
//     },
//     onError: (error) => {
//       console.log(`onError`, error);
//     },
//     onSettled: (res, error) => {
//       console.log(`onSettled`, res, error);
//     },
//   });
// };
