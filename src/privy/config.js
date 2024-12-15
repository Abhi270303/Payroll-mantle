import { mantleNetwork } from "./chains";

export const privyConfig = {
  appId: "cm2vpnu5606elij5dxqxknyhx",
  config: {
    logo: "https://your.logo.url",
    appearance: { theme: "dark" },
    loginMethods: ["wallet", "email"],
    appearance: {
      walletList: ["metamask", "detected_wallets", "rainbow"],
      theme: "dark",
    },
    defaultChain: mantleNetwork,
    supportedChains: [mantleNetwork],
    embeddedWallets: {
      createOnLogin: "users-without-wallets",
    },
  },
};
