const ADDRESSES = require('../helper/coreAssets.json')

const abi = {
  "getCurrentTokenId": "function currentTokenId() view returns (uint)",
  "getPositions": "function positions(uint256 tokenId) view returns (uint96 nonce,address operator,address token0,address token1,uint24 fee,int24 tickLower,int24 tickUpper,uint128 liquidity,uint256 feeGrowthInside0LastX128,uint256 feeGrowthInside1LastX128,uint128 tokensOwed0,uint128 tokensOwed1)",
  "getAmountsForTicks": "function getAmountsForTicks(int24,int24,uint128) view returns (uint256,uint256)"
}

const managers = [
  '0x69a3e2f167B35c88C9778F59Ce8C1fFc546c8078',
  '0xe3f50A03525EF520818B111beC1F8c5D67fe307E',
  '0x0F7E99716625FF6E47A4382CB177039ddc6c6Ef4',
  '0x4878Acd29D8eFdF8D3E36f90D00fe242CAD792E5',
  '0xbdf672C6895013c41F134F6b9B1fc51c74Fef9Ee',
  '0xF33e335981F42fe4d93b8C23E3517E33Bd61C7e2',
  '0x385D32300C3D500FC9Ab28010a98b039E0FF2c26',
  '0x9000F4E184Aa2e0bDD1657d78c325c67508555D3',
  '0x1A0E998eF8611142906230050ed3E75882313DAe',
  '0x6EeFc6ceF687783F9eD767637Ae3cf06693c0A82',
  '0x6205A335C76F3dE01f5D75a27E9C90b49A5C69dc',
  '0x54250F1cb24304136A5B05fAbfb0C3Fb1E980169',
  '0x0F6EEFd958287FDF80F5B1D4Ea79B928F9Ae933d',

  '0xc291Ecf279714b7f56b0E5a2051DE4C533184A4E',
  '0x562e92916103a9866b5139dE5269c46d6d3f3117',
  '0x4142B8B00713CE9A441B8e3bd40D692BE56137C3',
  '0xa05b2b641A904292E4D835f882235AF4D3E34e7c',
  '0x3c3260a79a50ECD154d2e2F00C857A06dD0e5619',
  '0x75346B1CF609d2FaCBb6e0b187e658869dd3aE83',

  '0xa5E4A293E90fac283E24b2b6446b8d3bE377e52e',
  '0xEc695B2F9e06A5647a51d733beC0186804cbA991',
  '0x3501512Efc4E051A022c7c255D6f9c33b178E29f',
  '0x2a5075229e02939d4b8888725DF01Cb7374970e8',
  '0x0994b93ae05F904F98F59bb64d9266188543fda5',
  '0x3bBA41A6069F539B7540141460584194De2154Ce',
  '0x4664dc8E1710116ff46693FEB42f16CBe58f8237',
  '0xCF49168017096dB97Eb14552bd0af6eE9a27e76A',
  '0x899DF9d131D2276Db3c5f392ce2b396d9b1BFa8c',

  '0xC3ec6F076fE7395B0C263f7E37B084EC4Fd06eaF',
  '0x034a5fC7518d2D1b6a8C9CaccD273ee37C669E95',
  '0xE0D19D57BAFF656d2910BFFBec81E33f1368A0Ee',
  '0x2de0b61a2778169f095A8a7DAD7B566A9973E977',
  '0x440b228411a4D83820e0c63cD71E769a6660E037',
  '0x717FADe04FF819a58128Be591caC8C801F28Cd5b',
  '0x1655cfD162b4148E1715B6302DA4EF075Fa72ADf',
  '0x604Ef6Dc8c7abf78008749b57a4135C87d69fc35',
  '0xa63fa8FE58A5E197f092742619D8F4C7fE4924e8',

  '0xC22c7f332cA100725Bf4eA832f2D169e471923D6',
  '0x1E5F83Fc7f167fF44D58e59142DeE2358346331B',
  '0x8702800D715461Fb7D9C89C74DDB7bE73F5a37C6',
  '0xb6F1E82e7AE822DE9eD64967D04359Fe4D58A569',
  '0xE0213546258ABd7EF0D689D26Cf6d6BCEeE20e8a',
  '0xf732Fc726B3a4bE9f6c86a710Fd3367259DB456e',

  '0x16A3EBd3D55b27FF6e2839DA2078889cA148C040',
  '0xf4447cCFeE677A5b0BaD6bcD5f92A1929c171b48',
  '0x538A753B616F5aAD60852ca039572e5C4B72cA85',

  '0x780A252d7C797cFB255fe2EAa4E1a257a897B6ed',
  '0xffF3c0063f2Fc1Af569C359480b5b62841357169',
  '0xEFF4A3260263A927D0707190C931bE13292bD4Ba',

  '0xD4c68a094De7e1336E261c6EDD595F64cd70A064',
  '0x88609B69feDc0EEF4326c3390a8ae1b2073DcF03',
  '0xdcC4391042d462158C847f73F4232ce47A8F999c',

  '0xB67EFF6590D8457c870f84b5eA3B2CeEb7dbCD50',
  '0xE7cC8F17295cb9975e3D9aB3798C4fe0AA378c5F',
  '0xfb35BeDFB647c0445B9177aFFd6e7b81Bb8Ab9Bc',

  '0x590905F3adC1a16Af6A144Eaca57ba65760e93Cf',
  '0x4568936B2846debb1Ed65122841A500B639f49A7',
  '0x17263600ABccf294C6D0Ec02bCc23A240e883c7D',

  '0x1F73AbC7e254980AB26974C9A13c8493143F97Bc',
  '0x599Dd6b1205E51fbcb2879105051C0EBbfa76b03',
  '0xcC125F83BFe2A30F1BEfdf6E06043dB5a7a02A61',
]

async function tvl(api) {
  const { managers } = config[api.chain]
  const positionManagers = await api.multiCall({ abi: 'address:positionManager', calls: managers })
  const tokenIds = await api.multiCall({ abi: abi.getCurrentTokenId, calls: managers })
  const liquidities = await api.multiCall({ abi: abi.getPositions, calls: positionManagers.map((v, i) => ({ target: v, params: tokenIds[i] })) })
  const tokenAmounts = await api.multiCall({ abi: abi.getAmountsForTicks, calls: liquidities.map((v, i) => ({ target: managers[i], params: [v.tickLower, v.tickUpper, v.liquidity] })) })

  const ownerTokens = liquidities.map((v, i) => [[v.token0, v.token1, ADDRESSES.null], managers[i]])
  liquidities.forEach((v, i) => {
    api.add(v.token0, tokenAmounts[i][0])
    api.add(v.token1, tokenAmounts[i][1])
  })
  return api.sumTokens({ ownerTokens })
}

module.exports = {
  doublecounted: true,
}

const config = {
  arbitrum: { managers },
  ethereum: {
    managers: [
      '0x65D1788F9d9A800c5Fc9b9CB8e49A1b488C736c7',
      '0x01Af749E58c076c301B1F57D0BCBBf2D49B503bD',
      '0x47Dd57DFe9e01616e4Adc28015243Ea6A2C09cEC',
      '0x0a4a169a6b2ac75c86e2F0e42822fdEA13fB1CC8',
      '0xafFA16b152232dAd8BF3AaDF6bb6F895A836F917',
      '0xFB04d48e4CE9C042188Ef933ff4cf58921Ab59B8',
      '0x36232356758c746A50AD5078815F09e39E34628d',
      '0xA0FDf5DC858ea552d51B4fa304e72cEB34e736fb',
      '0xaC36A41da8f069C4874Dda60e073B5DcF889B56E'
    ]
  }
}

Object.keys(config).forEach(chain => {
  module.exports[chain] = { tvl }
})
