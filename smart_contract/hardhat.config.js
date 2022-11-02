require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/VfJtrNWDlIOR_yQh17ychuBiFeriC99y",
      accounts: [
        "896a97e174182994c5471c8c9dbaf74d6d61f56a8f4bf180202e74886e6c6d5c",
      ],
    },
  },
};
