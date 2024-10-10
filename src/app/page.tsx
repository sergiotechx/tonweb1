"use client";

import { SendTransactionRequest, TonConnectButton, useTonAddress, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";




const transaction: SendTransactionRequest = {
  validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes
  messages: [
    {
      address:
        "0QCzntJE-fVK42LRj_aZmDsiduTFWU7KoIhq1g4mC-bFGO2j", // message destination in user-friendly format
      amount: "10000000", // Toncoin in nanotons
    },
  ],
};








export default function Home() {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();
  



  


  return (
    <div>
      <TonConnectButton />
      <p><span>User-friendly address: {userFriendlyAddress}</span></p>
      <p><span>Raw address: {rawAddress}</span></p>
      <p><span>Connected wallet address: {wallet?.account.address}</span></p>
      <p><span>Device: {wallet?.device.appName}</span></p>
      <p><span>Connected via: {wallet?.provider}</span></p>
      <div>
        <button onClick={() => tonConnectUI.sendTransaction(transaction)}>
          Send transaction
        </button>
      </div>
    </div>
  );
}
