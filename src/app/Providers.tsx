"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";

const manifestUrl = "https://ton-connect.github.io/demo-dapp-with-wallet/tonconnect-manifest.json";


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      {children}
    </TonConnectUIProvider>
  );
}