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

const tokens = [
    BNB_MAINNET,
    BUSD_MAINNET,
    ETH_MAINNET,
    BTC_MAINNET,
];

const tokenPairs = [];

function pairs(arr) {
    var res = [],
        l = arr.length;
    for(var i=0; i<l; ++i)
        for(var j=i+1; j<l; ++j)
            res.push([arr[i], arr[j]]);
    return res;
}
pairs(exchanges).forEach(function(pair_1){
    pairs(tokens).forEach(function(pair_2){
        let temp = {
            name: `${pair_2[0].symbol}/${pair_2[1].symbol} ${pair_1[0].name}>${pair_1[1].name}`,
            tokenBorrow: pair_2[0].contract,
            amountTokenPay: 1000,
            tokenPay: pair_2[1].contract,
            sourceRouter: pair_1[0].router,
            targetRouter: pair_1[1].router,
            sourceFactory: pair_1[0].factory,
        };
        tokenPairs.push(temp)
    });
});

console.log(tokenPairs)