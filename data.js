const data = []

data.push({
    type: 'asset',
    value: {
        id: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        symbol: 'BUSD',
        decimals: 18,
        icon: 'https://bscscan.com/token/images/busd_32.png',
    },
})

data.push({
    type: 'asset',
    value: {
        id: '0x55d398326f99059fF775485246999027B3197955',
        symbol: 'BUSD-T',
        decimals: 18,
        icon: 'https://bscscan.com/token/images/busdt_32.png',
    },
})

data.push({
    type: 'asset',
    value: {
        id: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
        symbol: 'ETH',
        decimals: 18,
        icon: 'https://bscscan.com/token/images/ethereum_32.png',
    },
})

data.push({
    type: 'asset',
    value: {
        id: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
        symbol: 'BTCB',
        decimals: 18,
        icon: 'https://bscscan.com/token/images/btcb_32.png',
    },
})

data.push({
    type: 'recv',
    value: {
        token: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        value: ethers.BigNumber.from('25033924289362740469112'),
    },
})

data.push({
    type: 'recv',
    value: {
        token: '0x55d398326f99059fF775485246999027B3197955',
        value: ethers.BigNumber.from('25000000097690772076779'),
    },
})

data.push({
    type: 'recv',
    value: {
        token: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
        value: ethers.BigNumber.from('11102868009321790693'),
    },
})

data.push({
    type: 'recv',
    value: {
        token: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
        value: ethers.BigNumber.from('438917400609063677'),
    },
})

data.push({
    type: 'earn',
    value: {
        token: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
        farm: ['https://bsc.acoconut.fi/'],
        hash: [
            '0x94b31fbffda293339ecb77af3c9eaa00550ffde342262601a53693c487c97631',
            '0x3e8ffa23bce6936e5dc590fa3bc2cc06051d4ced05f664d2ee27b50ded451dcb',
            '0x51616c8e29651da388bccef0ea19039999d776d07edfc0323aede5afc8a555ed',
            '0xf899a6f241b7f3b50f3c1848f2e891f0fa55b0c696bffda0241c509237f310a0',
        ],
        date: '2021-04-20',
        description: 'deposit BTCB and to acoconut',
        change: ethers.BigNumber.from('0'),
    },
})

data.push({
    type: 'earn',
    value: {
        token: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
        farm: ['https://mdex.com/'],
        hash: [
            '0x51616c8e29651da388bccef0ea19039999d776d07edfc0323aede5afc8a555ed',
            '0x51e450e5e7881a0040ea1d9ebce02c8f79080a96137580b8df57761942457d38',
            '0xa7b00580fb2b7e264792a1ce46fb66b8cc1b769549fab1a4cefb493b82d44410',
            '0x8b5cbcb7376760bd8b6d5eb4e9f1ce5e47b9206c0733fb5a20d98d24e9e9b88d',
            '0x47c932baaa39c38c6df52017e5ceb6aeee54448e991040948b7f78d9fe95948f',
            '0x47c932baaa39c38c6df52017e5ceb6aeee54448e991040948b7f78d9fe95948f',
            '0xd32af3325caf18b6695396d9592fb1fc7a6a9ac9303a55a659635f9269301461',
        ],
        date: '2021-04-20',
        description: 'deposit ETH and BETH LP to mdex',
        change: ethers.BigNumber.from('0'),
    },
})

data.push({
    type: 'earn',
    value: {
        token: '0x55d398326f99059fF775485246999027B3197955',
        farm: ['https://pancakebunny.finance/'],
        hash: [
            '0xd32af3325caf18b6695396d9592fb1fc7a6a9ac9303a55a659635f9269301461',
            '0x0b0b493d566043b43e3b37918d2871ef4f01f2c6e32f6ffec484bb762894f636',
            '0xd43d605cee819f6395a77e0769ff00b6644c2a33ff66239d7f79bf735c83a55f',
            '0x3b3a4ea7ff05d734efeeaa7cb1b8bfe1b8c4d50861dd843fb3b53bf0d0c4c2d1',
        ],
        date: '2021-04-20',
        description: 'deposit BUSD and USDT LP to bunny',
        change: ethers.BigNumber.from('0'),
    },
})

data.push({
    type: 'earn',
    value: {
        token: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        farm: ['https://pancakebunny.finance/'],
        hash: [
            '0x51616c8e29651da388bccef0ea19039999d776d07edfc0323aede5afc8a555ed',
            '0x15c54ff06ac00cf0fc9bf640259d5b1127cb3897152471a39b73b844a3fd4db1',
            '0x0b0b493d566043b43e3b37918d2871ef4f01f2c6e32f6ffec484bb762894f636',
            '0xd43d605cee819f6395a77e0769ff00b6644c2a33ff66239d7f79bf735c83a55f',
            '0x3b3a4ea7ff05d734efeeaa7cb1b8bfe1b8c4d50861dd843fb3b53bf0d0c4c2d1',
        ],
        date: '2021-04-20',
        description: 'deposit BUSD and USDT LP to bunny',
        change: ethers.BigNumber.from('0'),
    },
})


data.push({
    type: 'earn',
    value: {
        token: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
        farm: ['https://pancakebunny.finance/'],
        hash: [
            '0x2cc06abce5bb81c50eaac061000d96f1b4cc4a461e486e0d45423d8ec81d8517',
            '0x65ecb1007713b744394c1773e33bd27cb16ebd32756f5d1c6a9d3fba0f465ac3',
            '0x4f7ff095f5f5ec27c887c4cf92769ab7ea420d7f0ca8a0a0dbe54ecbccee25b7',
            '0x397602059d5fa3dae77170d889311c8ef5244f7b8c921ce285eaa2ff7c20d09b',
            '0x1478387bd51c304b291dac5814c68ed6c46af321afc29f323754efae4bdfd65a',
        ],
        date: '2021-04-24',
        description: 'harvest from bunny',
        change: ethers.BigNumber.from('84393253261318503951'),
    },
})

data.push({
    type: 'earn',
    value: {
        token: '0x55d398326f99059fF775485246999027B3197955',
        farm: ['https://pancakebunny.finance/'],
        hash: [
            '0x2cc06abce5bb81c50eaac061000d96f1b4cc4a461e486e0d45423d8ec81d8517',
            '0x65ecb1007713b744394c1773e33bd27cb16ebd32756f5d1c6a9d3fba0f465ac3',
            '0x4f7ff095f5f5ec27c887c4cf92769ab7ea420d7f0ca8a0a0dbe54ecbccee25b7',
            '0x397602059d5fa3dae77170d889311c8ef5244f7b8c921ce285eaa2ff7c20d09b',
            '0x1478387bd51c304b291dac5814c68ed6c46af321afc29f323754efae4bdfd65a',
        ],
        date: '2021-04-24',
        description: 'harvest from bunny',
        change: ethers.BigNumber.from('65754747679461616495'),
    },
})
