import { TokenSymbol } from "../symbols/tokenBSC";
import { ChainId } from "../chainId";

export interface TokenInfo {
    chains: number[];
    name: string;
    symbol: TokenSymbol,
    icon: string;
    contracts: Partial<Record<ChainId, { address: string; decimal: number }>>;
}

const baseURL = 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/'

export const tokens: TokenInfo[] = [
    {
        name: "BNB Token",
        symbol: TokenSymbol.BNB,
        chains: [ChainId.BSC],
        icon: baseURL + 'bnb.png',
        contracts: {
            [ChainId.BSC]: {
                address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', //Wrapped BNB
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped BNB",
        symbol: TokenSymbol.WBNB,
        chains: [ChainId.BSC],
        icon: baseURL + 'bnb.png',
        contracts: {
            [ChainId.BSC]: {
                address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', 
                decimal: 18,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDT,
        chains: [ChainId.BSC],
        icon: baseURL + 'usdt.png',
        contracts: {
            [ChainId.BSC]: {
                address: '0x55d398326f99059fF775485246999027B3197955',
                decimal: 18,
            },
        },
    },
    {
        name: "USD Coin",
        symbol: TokenSymbol.USDC,
        chains: [ChainId.BSC],
        icon: baseURL + 'usdc.png',
        contracts: {
            [ChainId.BSC]: {
                address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
                decimal: 18,
            },
        },
    },
]