import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
//import { chain } from "./consts/parameters";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={{
        // === Required information for connecting to the network === \\
        chainId: 68840142, // Chain ID of the network
        // Array of RPC URLs to use
        rpc: ["https://rpc.testnet.frame.xyz/http"],

        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: "Frame Testnet",
          symbol: "ETH",
        },
        shortName: "frame-testnet", // Display value shown in the wallet UI
        slug: "frame-testnet", // Display value shown in the wallet UI
        testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
        chain: "FrameTestnet", // Name of the network
        name: "Frame Testnet", // Name of the network
      }}
      clientId={process.env.CLIENT}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>,
);
