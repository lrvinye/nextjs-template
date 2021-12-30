import React, { FunctionComponent, useState } from "react";
import { Hydrate, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createQueryClient } from "../../util/react-query";

interface Props {
  pageProps: any;
}
const AppWrapper: FunctionComponent<Props> = ({ children, pageProps }) => {
  const [queryClient] = useState(() => createQueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
      </Hydrate>
    </QueryClientProvider>
  );
};

export default AppWrapper;
