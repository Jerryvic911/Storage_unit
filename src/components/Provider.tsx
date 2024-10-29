"use client";
import React from "react";

import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  publicProvider,
  argent,
  braavos,
  useInjectedConnectors,
  voyager,
  jsonRpcProvider,
} from "@starknet-react/core";

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [argent(), braavos()],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: "onlyIfNoConnectors",
    // Randomize the order of the connectors.
    order: "random",
  });

  return (
    <StarknetConfig
      chains={[sepolia]}
    //   provider={
    //     jsonRpcProvider({
    //         rpc: (chain) => ({
    //             nodeUrl: process.env.REACT_APP_RPC_URL
    //         }),
    //     })
    //   }
      provider={jsonRpcProvider({
        rpc: (chain) => ({ nodeUrl: "https://starknet-sepolia.g.alchemy.com/starknet/version/rpc/v0_7/XAfZ30s6Q0tnPqb_tUrJAO8qRzBhDk6w" }),
      })}
      connectors={connectors}
      explorer={voyager}
    >
      {children}
    </StarknetConfig>
  );
}
