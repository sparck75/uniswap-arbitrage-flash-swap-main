const pancake = {
    name: "PancakeSwap",
    router: "0x10ed43c718714eb63d5aa57b78b54704e256024e",
    factory: "0xca143ce32fe78f1f7019d7d551a6402fc5350c73",
    routerV1: "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F",
    factoryV1: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
};
const panther = {
    name: "PantherSwap",
    router: "0xbe65b8f75b9f20f4c522e0067a3887fada714800",
    factory: "0x0eb58e5c8aa63314ff5547289185cc4583dfcbd5"
};
const biSwap = {
    name: "BiSwap",
    router: "0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8",
    factory: "0x858E3312ed3A876947EA49d572A7C42DE08af7EE",
};
const cafeSwap = {
    name: "CafeSwap",
    router: "0x933DAea3a5995Fb94b14A7696a5F3ffD7B1E385A",
    factory: "0x3e708FdbE3ADA63fc94F8F61811196f1302137AD",
};
const jetSwap = {
    name: "JetSwap",
    router: "0xBe65b8f75B9F20f4C522e0067a3887FADa714800",
    factory: "0x0eb58E5c8aA63314ff5547289185cC4583DfCBD5",
};
const wardenSwap = {
    name: "WardenSwap",
    router: "0x71ac17934b60a4610dc58b715b61e45dcbde4054",
    routerV1: "0x68FaC8a95d04b69bdbF66CA554F47A8193D0E5b6",
    factory: "0x3657952d7ba5a0a4799809b5b6fdff9ec5b46293",
};

// Store all exchanges consts into another array
const exchanges = [
    pancake,
    panther,
    biSwap,
    cafeSwap,
    jetSwap,
    wardenSwap,
];

const BNB_MAINNET = {
    name: "Binance Coin",
    symbol: "BNB",
    contract: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
};

const BUSD_MAINNET = {
    name: "Binance USD",
    symbol: "BUSD",
    contract: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
};

const ETH_MAINNET = {
    name: "Etherium",
    symbol: "ETH",
    contract: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
};

const BTC_MAINNET = {
    name: "Bitcoin",
    symbol: "BTC",
    contract: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
};

const DOT_MAINNET = {
    name: "Polkadot",
    symbol: "DOT",
    contract: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
};

const SHIB_MAINNET = {
    name: "Shiba Inu",
    symbol: "SHIB",
    contract: "0x2859e4544c4bb03966803b044a93563bd2d0dd4d",
};

const LINK_MAINNET = {
    name: "Chainlink",
    symbol: "LINK",
    contract: "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
};

const LTC_MAINNET = {
    name: "Litecoin",
    symbol: "LTC",
    contract: "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
};

const DAI_MAINNET = {
    name: "DAI",
    symbol: "DAI",
    contract: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
};

const FTM_MAINNET = {
    name: "Fantom",
    symbol: "FTM",
    contract: "0xAD29AbB318791D579433D831ed122aFeAf29dcfe",
};

const UNI_MAINNET = {
    name: "Uniswap",
    symbol: "UNI",
    contract: "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
};

const BCH_MAINNET = {
    name: "Bitcoin Cash",
    symbol: "BCH",
    contract: "0x8ff795a6f4d97e7887c79bea79aba5cc76444adf",
};

const TRX_MAINNET = {
    name: "Tron",
    symbol: "TRX",
    contract: "0x85eac5ac2f758618dfa09bdbe0cf174e7d574d5b",
};

const XLM_MAINNET = {
    name: "Stellar",
    symbol: "XLM",
    contract: "0x43c934a845205f0b514417d757d7235b8f53f1b9",
};

const AXS_MAINNET = {
    name: "Axie Infinity",
    symbol: "AXS",
    contract: "0x715d400f88c167884bbcc41c5fea407ed4d2f8a0",
};

const CAKE_MAINNET = {
    name: "PancakeSwap Coin",
    symbol: "CAKE",
    contract: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
};

const SIP_MAINNET = {
    name: "Space SIP",
    symbol: "SIP",
    contract: "0x9e5965d28E8D44CAE8F9b809396E0931F9Df71CA",
};

const tokens = [
    BNB_MAINNET,
    BUSD_MAINNET,
    ETH_MAINNET,
    BTC_MAINNET,
    DOT_MAINNET,
    SHIB_MAINNET,
    LINK_MAINNET,
    LTC_MAINNET,
    DAI_MAINNET,
    FTM_MAINNET,
    UNI_MAINNET,
    BCH_MAINNET,
    TRX_MAINNET,
    XLM_MAINNET,
    AXS_MAINNET,
];

module.exports.getPairs = () => {

    const tokenPairs = [];

    function ePairs(arr) {
        var res = [],
            l = arr.length;
        for(var i=0; i<l; ++i)
            for(var j=i+1; j<l; ++j)
                res.push([arr[i], arr[j]]);
        return res;
    }

    function tPairs(arr) {
        var res = [],
            l = arr.length;
        for(var i=0; i<l; ++i)
                res.push([arr[0], arr[i]]);
        return res;
    }

    ePairs(exchanges).forEach(function(exchange){
        tPairs(tokens).forEach(function(token){
            let temp = {
                name: `${token[0].symbol}/${token[1].symbol} ${exchange[0].name}>${exchange[1].name}`,
                tokenBorrow: token[1].contract,
                amountTokenPay: 100000,
                tokenPay: token[0].contract,
                sourceRouter: exchange[0].router,
                targetRouter: exchange[1].router,
                sourceFactory: exchange[0].factory,
            };
            tokenPairs.push(temp)
        });
    });

    return tokenPairs;
}