const request = require("async-request");

module.exports.getPrices = async () => {
    const response = await request('https://api.coingecko.com/api/v3/simple/price?ids=space,cake,axie-infinity,stellar,tron,bitcoin-cash,uniswap,fantom,dai,litecoin,binancecoin,ethereum,bitcoin,tether,usd-coin,busd,polkadot,shiba-inu,chainlink&vs_currencies=usd');

    const prices = {};

    try {
        const json = JSON.parse(response.body);
        prices['0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'.toLowerCase()] = json.binancecoin.usd;
        prices['0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'.toLowerCase()] = json.busd.usd;
        prices['0x2170Ed0880ac9A755fd29B2688956BD959F933F8'.toLowerCase()] = json.ethereum.usd;
        prices['0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c'.toLowerCase()] = json.bitcoin.usd;
        prices['0x55d398326f99059ff775485246999027b3197955'.toLowerCase()] = json.tether.usd;
        prices['0x7083609fce4d1d8dc0c979aab8c869ea2c873402'.toLowerCase()] = json.polkadot.usd;
        prices['0x2859e4544c4bb03966803b044a93563bd2d0dd4d'.toLowerCase()] = json["shiba-inu"].usd;
        prices['0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd'.toLowerCase()] = json.chainlink.usd;
        prices['0x4338665cbb7b2485a8855a139b75d5e34ab0db94'.toLowerCase()] = json.litecoin.usd;
        prices['0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3'.toLowerCase()] = json.dai.usd;
        prices['0xAD29AbB318791D579433D831ed122aFeAf29dcfe'.toLowerCase()] = json.fantom.usd;
        prices['0xbf5140a22578168fd562dccf235e5d43a02ce9b1'.toLowerCase()] = json.uniswap.usd;
        prices['0x8ff795a6f4d97e7887c79bea79aba5cc76444adf'.toLowerCase()] = json["bitcoin-cash"].usd;
        prices['0x85eac5ac2f758618dfa09bdbe0cf174e7d574d5b'.toLowerCase()] = json.tron.usd;
        prices['0x43c934a845205f0b514417d757d7235b8f53f1b9'.toLowerCase()] = json.stellar.usd;
        prices['0x715d400f88c167884bbcc41c5fea407ed4d2f8a0'.toLowerCase()] = json["axie-infinity"].usd;
        prices['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'.toLowerCase()] = json.cake.usd;
        prices['0x9e5965d28E8D44CAE8F9b809396E0931F9Df71CA'.toLowerCase()] = json.space.usd;
        // prices['??'.toLowerCase()] = json['usd-coin'].usd;
    } catch (e) {
        console.error(e)
        return {};
    }

    return prices;
}
