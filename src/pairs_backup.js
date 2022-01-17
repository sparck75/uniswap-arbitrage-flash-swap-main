const pancake = {
    router: "0x10ed43c718714eb63d5aa57b78b54704e256024e",
    factory: "0xca143ce32fe78f1f7019d7d551a6402fc5350c73",
    routerV1: "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F",
    factoryV1: "0xBCfCcbde45cE874adCB698cC183deBcF17952812"
};
const panther = {
    router: "0xbe65b8f75b9f20f4c522e0067a3887fada714800",
    factory: "0x0eb58e5c8aa63314ff5547289185cc4583dfcbd5"
};
const biSwap = {
    router: "0x3a6d8cA21D1CF76F653A67577FA0D27453350dD8",
    factory: "0x858E3312ed3A876947EA49d572A7C42DE08af7EE",
};
const cafeSwap = {
    router: "0x933DAea3a5995Fb94b14A7696a5F3ffD7B1E385A",
    factory: "0x3e708FdbE3ADA63fc94F8F61811196f1302137AD",
};
const jetSwap = {
    router: "0xBe65b8f75B9F20f4C522e0067a3887FADa714800",
    factory: "0x0eb58E5c8aA63314ff5547289185cC4583DfCBD5",
};
const wardenSwap = {
    router: "0x71ac17934b60a4610dc58b715b61e45dcbde4054",
    routerV1: "0x68FaC8a95d04b69bdbF66CA554F47A8193D0E5b6",
    factory: "0x3657952d7ba5a0a4799809b5b6fdff9ec5b46293",
};

// pancake>panther || panther>pancake
// pancake>biSwap || biSwap>pancake
// pancake>cafeSwap || cafeSwap>pancake
// pancake>jetSwap || jetSwap>pancake
// pancake>wardenSwap || wardenSwap > pancakeSwap

// panther>biSwap || biSwap>panther
// panther>cafeSwap || cafeSwap>panther
// panther>jetSwap || jetSwap>panther
// panther>wardenSwap || wardenSwap>panther

// biSwap>cafeSwap || cafeSwap>biSwap
// biSwap>jetSwap || jetSwap>biSwap
// biswap>wardenSwap || wardenSwap>biSwap

// cafeSwap>jetSwap || jetSwap>cafeSwap
// cafeSwap>wardenSwap || wardenSwap>cafeSwap

module.exports.getPairs = () => {

    const BNB_MAINNET = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';
    const BUSD_MAINNET = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';

    const pairs = [
        {
            name: 'BUSD/BNB pancake>panther',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: pancake.router,
            targetRouter: panther.router,
            sourceFactory: pancake.factory,
        },
        {
            name: 'BUSD/BNB panther>pancake',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: panther.router,
            targetRouter: pancake.router,
            sourceFactory: panther.factory,
        },
        {
            name: 'BUSD/BNB pancake>biSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: pancake.router,
            targetRouter: biSwap.router,
            sourceFactory: pancake.factory,
        },
        {
            name: 'BUSD/BNB biSwap>pancake',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: biSwap.router,
            targetRouter: pancake.router,
            sourceFactory: biSwap.factory,
        },
        {
            name: 'BUSD/BNB panther>biSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: panther.router,
            targetRouter: biSwap.router,
            sourceFactory: panther.factory,
        },
        {
            name: 'BUSD/BNB biSwap>panther',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: biSwap.router,
            targetRouter: panther.router,
            sourceFactory: biSwap.factory,
        },
        {
            name: 'BUSD/BNB pancake>cafeSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: pancake.router,
            targetRouter: cafeSwap.router,
            sourceFactory: pancake.factory,
        },
        {
            name: 'BUSD/BNB cafeSwap>pancake',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: cafeSwap.router,
            targetRouter: pancake.router,
            sourceFactory: cafeSwap.factory,
        },
        {
            name: 'BUSD/BNB panther>cafeSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: panther.router,
            targetRouter: cafeSwap.router,
            sourceFactory: panther.factory,
        },
        {
            name: 'BUSD/BNB cafeSwap>panther',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: cafeSwap.router,
            targetRouter: panther.router,
            sourceFactory: cafeSwap.factory,
        },
        {
            name: 'BUSD/BNB biSwap>cafeSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: biSwap.router,
            targetRouter: cafeSwap.router,
            sourceFactory: biSwap.factory,
        },
        {
            name: 'BUSD/BNB cafeSwap>biSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: cafeSwap.router,
            targetRouter: biSwap.router,
            sourceFactory: cafeSwap.factory,
        },
        {
            name: 'BUSD/BNB pancake>jetSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: pancake.router,
            targetRouter: jetSwap.router,
            sourceFactory: pancake.factory,
        },
        {
            name: 'BUSD/BNB jetSwap>pancake',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: jetSwap.router,
            targetRouter: pancake.router,
            sourceFactory: jetSwap.factory,
        },
        {
            name: 'BUSD/BNB panther>jetSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: panther.router,
            targetRouter: jetSwap.router,
            sourceFactory: panther.factory,
        },
        {
            name: 'BUSD/BNB jetSwap>panther',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: jetSwap.router,
            targetRouter: panther.router,
            sourceFactory: jetSwap.factory,
        },
        {
            name: 'BUSD/BNB biSwap>jetSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: biSwap.router,
            targetRouter: jetSwap.router,
            sourceFactory: biSwap.factory,
        },
        {
            name: 'BUSD/BNB jetSwap>biSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: jetSwap.router,
            targetRouter: biSwap.router,
            sourceFactory: jetSwap.factory,
        },
        {
            name: 'BUSD/BNB cafeSwap>jetSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: cafeSwap.router,
            targetRouter: jetSwap.router,
            sourceFactory: cafeSwap.factory,
        },
        {
            name: 'BUSD/BNB jetSwap>cafeSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: jetSwap.router,
            targetRouter: cafeSwap.router,
            sourceFactory: jetSwap.factory,
        },
        {
            name: 'BUSD/BNB pancake>wardenSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: pancake.router,
            targetRouter: wardenSwap.router,
            sourceFactory: pancake.factory,
        },
        {
            name: 'BUSD/BNB wardenSwap>pancake',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: wardenSwap.router,
            targetRouter: pancake.router,
            sourceFactory: wardenSwap.factory,
        },
        {
            name: 'BUSD/BNB panther>wardenSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: panther.router,
            targetRouter: wardenSwap.router,
            sourceFactory: panther.factory,
        },
        {
            name: 'BUSD/BNB wardenSwap>panther',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: wardenSwap.router,
            targetRouter: panther.router,
            sourceFactory: wardenSwap.factory,
        },
        {
            name: 'BUSD/BNB biSwap>wardenSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: biSwap.router,
            targetRouter: wardenSwap.router,
            sourceFactory: biSwap.factory,
        },
        {
            name: 'BUSD/BNB wardenSwap>biSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: wardenSwap.router,
            targetRouter: biSwap.router,
            sourceFactory: wardenSwap.factory,
        },
        {
            name: 'BUSD/BNB cafeSwap>wardenSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: cafeSwap.router,
            targetRouter: wardenSwap.router,
            sourceFactory: cafeSwap.factory,
        },
        {
            name: 'BUSD/BNB wardenSwap>cafeSwap',
            tokenBorrow: BUSD_MAINNET,
            amountTokenPay: 1000,
            tokenPay: BNB_MAINNET,
            sourceRouter: wardenSwap.router,
            targetRouter: cafeSwap.router,
            sourceFactory: wardenSwap.factory,
        },
    ]

    return pairs
}