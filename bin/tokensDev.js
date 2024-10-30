"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokens = void 0;
const tokenSymbol_1 = require("./tokenSymbol");
const chainId_1 = require("./chainId");
exports.tokens = [
    {
        name: 'iZUMi Token',
        symbol: tokenSymbol_1.TokenSymbol.IZI,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/izumi.svg',
        chains: [chainId_1.ChainId.Izumi],
        contracts: {
            [chainId_1.ChainId.Izumi]: {
                address: '0xEe5e3852434eB67F8e9E97015e32845861ea15E8',
                decimal: 18,
            },
        },
    },
    {
        name: 'USD Coin',
        symbol: tokenSymbol_1.TokenSymbol.USDC,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/usdc.png',
        chains: [chainId_1.ChainId.Izumi],
        contracts: {
            [chainId_1.ChainId.Izumi]: {
                address: '0xe507AAC9eFb2A08F53C7BC73B3B1b8BCf883E41B',
                decimal: 6,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: tokenSymbol_1.TokenSymbol.USDT,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/usdt.png',
        chains: [chainId_1.ChainId.Izumi],
        contracts: {
            [chainId_1.ChainId.Izumi]: {
                address: '0x2d2bA91b026E08e0f23Eb01d7ecAb0e7E279a45f',
                decimal: 6,
            },
        },
    },
    {
        name: 'DAI',
        chains: [chainId_1.ChainId.Izumi],
        symbol: tokenSymbol_1.TokenSymbol.DAI,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/dai.png',
        contracts: {
            [chainId_1.ChainId.Izumi]: {
                address: '0xA97f8bc2b98a56f648340e05406cc7E34bB25D3A',
                decimal: 6,
            },
        },
    },
    {
        name: 'Ether',
        symbol: tokenSymbol_1.TokenSymbol.ETH,
        chains: [chainId_1.ChainId.Izumi],
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/eth.png',
        contracts: {
            [chainId_1.ChainId.Izumi]: {
                address: '0x3AD23A16A81Cd40010F39309876978F20DD2f682',
                decimal: 18,
            },
        },
    },
    {
        name: "BIT Dao",
        symbol: tokenSymbol_1.TokenSymbol.BIT,
        chains: [chainId_1.ChainId.Izumi],
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/bit.png',
        contracts: {
            [chainId_1.ChainId.Izumi]: {
                address: '0x41BC21bdcF0FA87ae6eeFcBE0e4dB29dB2b650C1',
                decimal: 18,
            },
        },
    },
    {
        name: "Decentralized Eternal Virtual Traveller",
        symbol: tokenSymbol_1.TokenSymbol.DEVT,
        chains: [chainId_1.ChainId.Izumi],
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/devt.png',
        contracts: {
            [chainId_1.ChainId.Izumi]: {
                address: '0xD93FfD9B4d5D643A175B7DcBf4Fb0dA0016D35C7',
                decimal: 18,
            },
        },
    },
    {
        name: "YIN Finance",
        symbol: tokenSymbol_1.TokenSymbol.YIN,
        chains: [chainId_1.ChainId.Izumi],
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/yin.png',
        contracts: {
            [chainId_1.ChainId.Izumi]: {
                address: '0x628571078add0031Ff6E9975AE6ddE1123fC423b',
                decimal: 18,
            },
        },
    }
];
