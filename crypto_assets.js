const _ = require('lodash');

// Source: https://coinmarketcap.com/api
const cryptoAssetList = [
    'bitcoin', // Bitcoin
    'ethereum', // Ethereum
    'litecoin', // Litecoin
    'ripple', // Ripple
    'the-dao', // The DAO
    'dash', // Dash
    'lisk', // Lisk
    'maidsafecoin', // MaidSafeCoin
    'dogecoin', // Dogecoin
    'digixdao', // DigixDAO
    'nem', // NEM
    'steem', // Steem
    'monero', // Monero
    'fedoracoin', // FedoraCoin
    'bitshares', // BitShares
    'peercoin', // Peercoin
    'factom', // Factom
    'stellar', // Stellar
    'nxt', // Nxt
    'bytecoin-bcn', // Bytecoin
    'synereo', // Synereo
    'ybcoin', // YbCoin
    'siacoin', // Siacoin
    'emercoin', // Emercoin
    'namecoin', // Namecoin
    'rubycoin', // Rubycoin
    'storjcoin-x', // Storjcoin X
    'counterparty', // Counterparty
    'agoras-tokens', // Agoras Tokens
    'solarcoin', // SolarCoin
    'xaurum', // Xaurum
    'voxels', // Voxels
    'decred', // Decred
    'tether', // Tether
    'syscoin', // SysCoin
    'bitcrystals', // Bitcrystals
    'vpncoin', // VPNCoin
    'gridcoin', // GridCoin
    'blackcoin', // BlackCoin
    'gamecredits', // GameCredits
    'digibyte', // DigiByte
    'monacoin', // MonaCoin
    'vcash', // Vcash
    'feathercoin', // Feathercoin
    'rimbit', // Rimbit
    'crevacoin', // CrevaCoin
    'auroracoin', // Auroracoin
    'mintcoin', // Mintcoin
    'bitcoindark', // BitcoinDark
    'clams', // Clams
    'nushares', // NuShares
    'earthcoin', // EarthCoin
    'supernet-unity', // SuperNET
    'scotcoin', // Scotcoin
    'primecoin', // Primecoin
    'shadowcoin', // ShadowCash
    'quark', // Quark
    'novacoin', // Novacoin
    'iocoin', // I/O Coin
    'reddcoin', // ReddCoin
    'vericoin', // VeriCoin
    'play', // PLAY
    'omni', // Omni
    'ixcoin', // Ixcoin
    'boostcoin', // BoostCoin
    'vertcoin', // Vertcoin
    'infinitecoin', // Infinitecoin
    'nubits', // NuBits
    'bitshares-music', // MUSE
    'startcoin', // Startcoin
    'stabilityshares', // StabilityShares
    'elcoin-el', // Elcoin
    'loyyal', // Loyyal
    'worldcoin', // WorldCoin
    'gulden', // Gulden
    'radium', // Radium
    'obits', // Obits
    'darknote', // DigitalNote
    'megacoin', // Megacoin
    'qora', // Qora
    'ambercoin', // AmberCoin
    'expanse', // Expanse
    'bilshares', // BilShares
    'crypti', // Crypti
    'safe-exchange-coin', // Safe Exchange Coin
    'global-currency-reserve', // Global Currency Reserve
    'zccoin', // ZcCoin
    'cloakcoin', // CloakCoin
    'curecoin', // CureCoin
    'virtacoin', // Virtacoin
    'wild-beast-block', // Wild Beast Block
    'coinomat', // Coinomat
    'instantdex', // InstantDEX
    'coinshield', // Nexus
    'bitbay', // BitBay
    'unioncoin', // UnionCoin
    'zetacoin', // Zetacoin
    'digitalcoin', // Digitalcoin
    'jinn', // Jinn
    'unobtanium', // Unobtanium
    'diamond', // Diamond
    'fuelcoin', // FuelCoin
    'applecoin', // Applecoin
    'anoncoin', // Anoncoin
    'zeitcoin', // Zeitcoin
    'dubaicoin', // DubaiCoin
    'swarm', // Swarm
    'verge', // Verge
    'sibcoin', // SIBCoin
    'yocoin', // Yocoin
    'neoscoin', // NeosCoin
    'kobocoin', // Kobocoin
    'burst', // Burst
    'mooncoin', // Mooncoin
    'blocknet', // Blocknet
    'riecoin', // Riecoin
    'bitswift', // BitSwift
    'dnotes', // DNotes
    'diem', // Diem
    'neucoin', // NeuCoin
    'tagcoin', // TagCoin
    'tickets', // Tickets
    'securecoin', // SecureCoin
    'nautiluscoin', // NautilusCoin
    'cryptogenic-bullion', // Crypto Bullion
    'casinocoin', // CasinoCoin
    'capricoin', // Capricoin
    'nav-coin', // NAV Coin
    'liquid', // LIQUID
    'spots-spots', // Spots
    'xcurrency', // XCurrency
    'gems', // GetGems
    'maxcoin', // MaxCoin
    'silkcoin', // Silkcoin
    'pandacoin-pnd', // Pandacoin
    'bitshares-pts', // BitShares PTS
    'carboncoin', // Carboncoin
    'pebblecoin', // Pebblecoin
    'potcoin', // PotCoin
    'cryptonite', // Cryptonite
    'mmnxt', // MMNXT
    'florincoin', // FlorinCoin
    'creditbit', // Creditbit
    'coinmarketscoin', // Jumbucks
    'smileycoin', // SmileyCoin
    'cannabiscoin', // CannabisCoin
    'jl777hodl', // jl777hodl
    'boolberry', // Boolberry
    'goldcoin', // GoldCoin
    'electronic-gulden', // Electronic Gulden
    'spreadcoin', // SpreadCoin
    'btsr', // BTSR
    'trumpcoin', // TrumpCoin
    'netcoin', // NetCoin
    'hicoin', // HiCoin
    'viacoin', // Viacoin
    'paycoin2', // PayCoin
    'energycoin', // Energycoin
    'shift', // Shift
    'whitecoin', // WhiteCoin
    'orbitcoin', // Orbitcoin
    'xiaomicoin', // Xiaomicoin
    'pakcoin', // Pakcoin
    'bitusd', // bitUSD
    'darknet', // Darknet
    'mediterraneancoin', // MediterraneanCoin
    'stealthcoin', // Stealthcoin
    'europecoin', // EuropeCoin
    'groestlcoin', // GroestlCoin
    'mojocoin', // MojoCoin
    'salus', // SaluS
    'myriadcoin', // Myriadcoin
    '2give', // 2GIVE
    'applebyte', // ArtByte
    'hodlcoin', // HOdlcoin
    'bitcny', // bitCNY
    'bytecent', // Bytecent
    'gamebet-coin', // GameBet Coin
    'globalcoin', // GlobalCoin
    'flycoin', // Flycoin
    'hyper', // Hyper
    'coin2-1', // Coin2.1
    'next-horizon', // Horizon
    'blitz', // Blitzcoin
    'bitmark', // Bitmark
    'aeon', // Aeon
    'hyperstake', // HyperStake
    'okcash', // OKCash
    'joincoin', // Joincoin
    'hempcoin-hmp', // HempCoin
    'rubies', // Rubies
    'mazacoin', // MazaCoin
    'fluttercoin', // FlutterCoin
    'devcoin', // Devcoin
    'geocoin', // GeoCoin
    'ufo-coin', // UFO Coin
    'pinkcoin', // PinkCoin
    'bitstar', // Bitstar
    'foldingcoin', // FoldingCoin
    'nxttycoin', // Nxttycoin
    'piggycoin', // Piggycoin
    'huntercoin', // HunterCoin
    'deutsche-emark', // Deutsche eMark
    'einsteinium', // Einsteinium
    'yacoin', // Yacoin
    'sexcoin', // Sexcoin
    'woodcoin', // Woodcoin
    'transfercoin', // TransferCoin
    'sync', // Sync
    'bigup', // BigUp
    'bitbean', // BitBean
    'sprouts', // Sprouts
    'krypton', // Krypton
    'adzcoin', // Adzcoin
    'qibuck', // Qibuck
    'uro', // Uro
    'luckycoin', // Luckycoin
    'asiadigicoin', // Asiadigicoin
    'sembro-token', // Sembro Token
    'synergy', // Synergy
    'sphere', // Sphere
    'bbqcoin', // BBQCoin
    'aiden', // Aiden
    'cannacoin', // Cannacoin
    'magi', // Magi
    'memorycoin', // Memorycoin
    'influxcoin', // Influxcoin
    'korecoin', // KoreCoin
    'terracoin', // Terracoin
    'yaccoin', // YACCoin
    'gapcoin', // Gapcoin
    'bata', // Bata
    'aricoin', // Aricoin
    'ziftrcoin', // ZiftrCOIN
    'sixeleven', // SixEleven
    'bitcoin-plus', // Bitcoin Plus
    'tekcoin', // TEKcoin
    'bitsend', // BitSend
    'franko', // Franko
    'sterlingcoin', // Sterlingcoin
    'datacoin', // Datacoin
    '1337', // 1337
    'bitbtc', // bitBTC
    'secretcoin', // SecretCoin
    'metalcoin', // MetalCoin
    'teslacoin', // TeslaCoin
    'cabbage', // Cabbage
    'bios-crypto', // BiosCrypto
    'pesetacoin', // Pesetacoin
    'titcoin', // Titcoin
    'grantcoin', // Grantcoin
    'triangles', // Triangles
    'quatloo', // Quatloo
    'cryptoescudo', // CryptoEscudo
    'universal-currency', // Universal Currency
    'evergreencoin', // EvergreenCoin
    'bitbar', // BitBar
    'daytradercoin', // DayTraderCoin
    'globalboost-y', // GlobalBoost-Y
    'billarycoin', // BillaryCoin
    'zaif', // ZAIF
    'exclusivecoin', // ExclusiveCoin
    'powercoin', // Powercoin
    'soilcoin', // SOILcoin
    'monetaverde', // MonetaVerde
    'truckcoin', // Truckcoin
    'htmlcoin', // HTMLCOIN
    'blakecoin', // Blakecoin
    'wmcoin', // WMCoin
    'sativacoin', // Sativacoin
    'bellacoin', // BellaCoin
    'archcoin', // ARCHcoin
    'digicube', // DigiCube
    'chipcoin', // ChipCoin
    'warp', // WARP
    'monetaryunit', // MonetaryUnit
    'rhinocoin-rhc', // RhinoCoin
    'bitz', // Bitz
    'postcoin', // PostCoin
    'growcoin', // GrowCoin
    '1credit', // 1CRedit
    'cypher', // Cypher
    'cryptographic-anomaly', // Cryptographic Anomaly
    'apexcoin', // ApexCoin
    'saffroncoin', // SaffronCoin
    'paycon', // PayCon
    'neutron', // Neutron
    'berncash', // BERNcash
    'pulse', // Pulse
    'helleniccoin', // Helleniccoin
    'acoin', // Acoin
    'coexistcoin', // CoExistCoin
    'mindcoin', // MindCoin
    'positron', // Positron
    'mangocoinz', // MangoCoinz
    'roscoin', // RosCoin
    'bdsm-fetish', // BDSM-FETISH
    'amsterdamcoin', // AmsterdamCoin
    'islacoin', // IslaCoin
    'bitzeny', // Bitzeny
    'posex', // PosEx
    'prime-xi', // Prime-XI
    'destiny', // Destiny
    'dreamcoin', // Dreamcoin
    'swing', // Swing
    'nevacoin', // NevaCoin
    'gamerholiccoin', // GamerholicCoin
    'gpu-coin', // GPU Coin
    'khancoin', // KhanCoin
    'bolivarcoin', // Bolivarcoin
    'unitus', // Unitus
    'guccionecoin', // GuccioneCoin
    'axiom', // Axiom
    'leacoin', // LeaCoin
    'metal-music-coin', // Metal Music Coin
    'mazecoin', // MazeCoin
    'bowscoin', // BowsCoin
    'biteur', // bitEUR
    'eurocoin', // Eurocoin
    'subcriptio', // Subcriptio
    'lanacoin', // LanaCoin
    'coin-coin', // COIN
    'mmxvi', // MMXVI
    'ponzicoin', // PonziCoin
    'mastertradercoin', // MasterTraderCoin
    'enigma', // Enigma
    'trmb', // TRMB
    'blackjack', // BlackJack
    'blockshares', // BlockShares
    'kilocoin', // KiloCoin
    'faircoin', // FairCoin
    'asiacoin', // AsiaCoin
    'xxxcoin', // XxXcoin
    'i0coin', // I0Coin
    'librexcoin', // Librexcoin
    'vootcoin', // VootCoin
    'skynet-asset', // SkyNET
    'flavorcoin', // FlavorCoin
    'gambit', // Gambit
    'tilecoin', // TileCoin
    'stress', // Stress
    'audiocoin', // AudioCoin
    'fimkrypto', // FIMKrypto
    'microcoin', // microCoin
    'noirshares', // NoirShares
    'czechcrowncoin', // CzechCrownCoin
    'ultracoin', // UltraCoin
    'colossuscoin-v2', // Colossuscoin V2
    'nxtventure', // NXTventure
    'coinoindex', // CoinoIndex
    'cryptofund', // Cryptofund
    'trustplus', // TrustPlus
    'noblecoin', // NobleCoin
    'leafcoin', // LeafCoin
    'pangea-poker', // Pangea Poker
    'execoin', // Execoin
    'heisenberg', // Heisenberg
    'ltbcoin', // LTBcoin
    'francs', // Francs
    'maryjane', // MaryJane
    'fudcoin', // DarkCoin
    'nxtprivacy', // NXTprivacy
    'redcoin', // RedCoin
    'eccoin', // ECCoin
    'bitcredits', // Bitcredits
    'communitycoin', // CommunityCoin
    'extremecoin', // Extremecoin
    'woodshares', // Woodshares
    'buongiorno-caffe', // Buongiorno Caffe
    'litedoge', // LiteDoge
    'freicoin', // Freicoin
    'fibre', // Fibre
    'freshcoin', // FreshCoin
    'greencoin', // Greencoin
    'node', // Node
    'cryptcoin', // CryptCoin
    'lottocoin', // LottoCoin
    'techcoin', // Techcoin
    'checkcoin', // Checkcoin
    'memetic', // Memetic
    'hobonickels', // HoboNickels
    'canada-ecoin', // Canada eCoin
    'parkbyte', // ParkByte
    'animecoin', // Animecoin
    'dogeparty', // Dogeparty
    'the-viral-exchange', // The Viral Exchange
    'sonicscrewdriver', // Sonic
    'freemarket', // FreeMarket
    'dopecoin', // DopeCoin
    'fantomcoin', // Fantomcoin
    'particle', // Particle
    'steps', // Steps
    'incakoin', // IncaKoin
    'gaia', // GAIA
    'hempcoin', // HempCoin
    'dashcoin', // Dashcoin
    'privatebet', // Privatebet
    'dimecoin', // Dimecoin
    'quazarcoin', // QuazarCoin
    'ratecoin', // Ratecoin
    'mmbtcd', // MMBTCD
    'halcyon', // Halcyon
    'clearinghouse', // ClearingHouse
    'bitcointx', // BitcoinTX
    'swagbucks', // SwagBucks
    'mgw', // MGW
    'darkcash', // DarkCash
    'viral', // Viral
    'sproutsextreme', // SproutsExtreme
    'plncoin', // PLNcoin
    'granitecoin', // Granite
    'mapcoin', // MapCoin
    'genesyscoin', // GenesysCoin
    'o2olondoncoin', // 020LondonCoin
    'trollcoin', // Trollcoin
    '8bit', // 8Bit
    'orangecoin', // OrangeCoin
    'moin', // Moin
    'klondikecoin', // KlondikeCoin
    'smartcoin', // SmartCoin
    'russiacoin', // RussiaCoin
    'supercoin', // SuperCoin
    'multiwalletcoin', // MultiWalletCoin
    'marscoin', // Marscoin
    'nyancoin', // Nyancoin
    'kittehcoin', // Kittehcoin
    'octocoin', // OctoCoin
    'cagecoin', // CageCoin
    'nxtinspect', // NXTInspect
    'primechain', // PrimeChain
    'quotient', // Quotient
    'satoshimadness', // SatoshiMadness
    'goldpieces', // GoldPieces
    'argentum', // Argentum
    'bitsilver', // bitSilver
    'viorcoin', // Viorcoin
    'unbreakablecoin', // UnbreakableCoin
    'shacoin', // SHACoin
    'goldreserve', // GoldReserve
    'bitgold', // bitGold
    'neocoin', // Neocoin
    'philosopher-stones', // Philosopher Stones
    'bloodcoin', // Bloodcoin
    'ringo', // Ringo
    'tittiecoin', // TittieCoin
    'debune', // DeBuNe
    'guncoin', // Guncoin
    'bottlecaps', // Bottlecaps
    'cryptocircuits', // CryptoCircuits
    'phoenixcoin', // Phoenixcoin
    'platinumbar', // PlatinumBAR
    'crowncoin', // CrownCoin
    'aerocoin', // AeroMe
    'sling', // Sling
    'fastcoin', // Fastcoin
    'songcoin', // SongCoin
    'hamradiocoin', // HamRadioCoin
    'sapience-aifx', // Sapience AIFX
    'trapcoin', // TrapCoin
    'cryptokenz', // Cryptokenz
    'bitcoin-scrypt', // Bitcoin Scrypt
    'fujicoin', // FujiCoin
    'bluecoin', // BlueCoin
    'bunnycoin', // BunnyCoin
    'britcoin', // BritCoin
    'x-coin', // X-Coin
    'rootcoin', // RootCoin
    'vip-tokens', // VIP Tokens
    'spots', // Spots
    'gcoin', // GCoin
    'newyorkcoin', // NewYorkCoin
    'corgicoin', // CorgiCoin
    'dobbscoin', // Dobbscoin
    'parallelcoin', // ParallelCoin
    'droidz', // Droidz
    'digitalprice', // DigitalPrice
    'petrodollar', // PetroDollar
    'ucoin', // UCoin
    'jay', // Jay
    'noblenxt', // NobleNXT
    'ronpaulcoin', // RonPaulCoin
    'orlycoin', // Orlycoin
    'antibitcoin', // AntiBitcoin
    'captcoin', // CAPTcoin
    'arbit', // ARbit
    'genstake', // Genstake
    'emerald', // Emerald Crypto
    'graffiti', // Graffiti
    'moneta', // Moneta
    'elcoin', // ELcoin
    'palcoin', // Palcoin
    'unicoin', // UniCoin
    '007coin', // 007Coin
    'dirac', // Dirac
    'c-bit', // C-Bit
    'cybercoin', // CyberCoin
    'guarany', // Guarany
    'phalanx', // Phalanx
    'sooncoin', // SoonCoin
    'icash', // iCash
    'anarchistsprime', // AnarchistsPrime
    'litebar', // LiteBar
    'breakcoin', // BREAKcoin
    '42-coin', // 42 Coin
    'vcoin', // Vcoin
    'popularcoin', // PopularCoin
    'cashcoin', // Cashcoin
    'lyrabar', // Lyrabar
    'chaincoin', // ChainCoin
    'returncoin', // ReturnCoin
    'zurcoin', // Zurcoin
    'evotion', // Evotion
    'topcoin', // TopCoin
    'kumacoin', // Kumacoin
    'bitquark', // BitQuark
    'ozziecoin', // Ozziecoin
    'tigercoin', // Tigercoin
    'tagrcoin', // TAGRcoin
    'procom-coin', // PROCOM coin
    'joulecoin', // Joulecoin
    'coinaid', // Coinaid
    'cryptospots', // CryptoSpots
    'litecred', // Litecred
    'darktron', // DarkTron
    'osmiumcoin', // OsmiumCoin
    'bitcoinultra', // BitcoinUltra
    'revenu', // Revenu
    'bitcrystal', // BitCrystal
    'unfed', // Unfed
    'bitcoin-21', // Bitcoin 21
    'ivugeocoin', // IvugeoCoin
    'cygnus', // Cygnus
    'fuzzballs', // FuzzBalls
    'crypto', // Crypto
    'evil-coin', // Evil Coin
    'money', // Money
    'dibbits', // Dibbits
    'bantam', // Bantam
    'vibranium', // Vibranium
    'machinecoin', // Machinecoin
    'number7', // Number7
    'fistbump', // FistBump
    'alexium', // Alexium
    'imperialcoin', // ImperialCoin
    'independent-money-system', // Independent Money System
    'cerium', // Cerium
    'footy-cash', // Footy Cash
    'prototanium', // Prototanium
    'antilitecoin', // Antilitecoin
    'unrealcoin', // Unrealcoin
    'zombiecoin', // ZombieCoin
    'tennet', // TenneT
    'batcoin', // BatCoin
    'selfiecoin', // Selfiecoin
    'sydpak', // SydPak
    'freedomcoin', // FreedomCoin
    'heelcoin', // HeelCoin
    'spacecoin', // SpaceCoin
    'clevercoin', // CleverCoin
    'hazmatcoin', // HazMatCoin
    'p7coin', // P7Coin
    'wearesatoshi', // WeAreSatoshi
    'limitedcoin', // LimitedCoin
    'stronghands', // StrongHands
    'floz', // Floz
    'turbostake', // TurboStake
    'cryptbit', // CryptBit
    'donationcoin', // Donationcoin
    'zoom', // Zoom
    'fantom', // Fantom
    'save-and-gain', // Save and Gain
    'legendarycoin', // LegendaryCoin
    'crtcoin', // CRTCoin
    'hundredcoin', // Hundredcoin
    'digital-credits', // Digital Credits
    'californium', // Californium
    '23-skidoo', // 23 Skidoo
    'xdecoin', // XDECoin
    'duckduckcoin', // DuckDuckCoin
    'horiemoncard', // HoriemonCard
    'forevercoin', // Forevercoin
    'nxttyacci', // NxttyACCI
    'edrcoin', // EDRCoin
    'alphabet-coin-fund', // Alphabet Coin Fund
    'cryptobyte', // CryptoByte
    'ico-openledger', // ICO OpenLedger
    'waves', // Waves (Pre-Launch)
    'coinousd', // CoinoUSD
    'npccoin', // NPCcoin
    'leocoin', // LEOcoin
    'asset-backed-coin', // Asset Backed Coin
    'clubcoin', // ClubCoin
    'gbcgoldcoin', // GBCGoldCoin
    'mayacoin', // MaYaCoin
    'alpacoin', // AlpaCoin
    'firecoin', // Firecoin
    'eggs', // EGGS
    'sarcoin', // SARCoin
    'bnb-coin', // BnB Coin
    'martexcoin', // MarteXcoin
    'uncoin', // UNCoin
    'teslacoilcoin', // TeslaCoilCoin
    'resumeoshares', // Resumeo Shares
    'nocturna', // Nocturna
    'blitzmm', // BlitzMM
    'taopay', // TaoPay
    'faucetcoin', // Faucetcoin
    'tbcoin', // TBCoin
    'sharkcoin', // Sharkcoin
    'kolschcoin', // KolschCoin
    'timekoin', // Timekoin
    'project-decorum', // Project Decorum
    'millenniumcoin', // MillenniumCoin
    'bitalphacoin', // BitAlphaCoin
    'eclipse', // Eclipse
    'invisiblecoin', // InvisibleCoin
    'futcoin', // FutCoin
    'roxcoin', // ROXcoin
    'spikesprivatecoin', // SpikesPrivateCoin
    'shellpay', // ShellPay
    'bitcedi', // Bitcedi
    'vtorrent', // vTorrent
    'gsmcoin', // GSMcoin
    'bitseeds', // BitSeeds
    'kcoin', // Kcoin
    'richcoin', // RichCoin
    'enecoin', // EneCoin
    'goldmaxcoin', // GoldMaxCoin
    'newbium', // Newbium
    'clinton', // Clinton
    'xaucoin', // Xaucoin
    'vector', // Vector
    'chncoin', // CHNCoin
    'asian-investment-bond', // AIB
    'stakerush', // Stakerush
    'cthulhu-offerings', // Cthulhu Offerings
    'megastake', // MegaStake
    'safecoin', // SafeCoin
    'friendshipcoin2', // FriendshipCoin 2
    'trickycoin', // TrickyCoin
    'quebecoin', // Quebecoin
    'local-family-owned', // Local Family Owned
    'hitcoin', // HitCoin
    'skullbuzz', // SkullBuzz
    'nxe', // NXE
    'ocow', // OCOW
    'irishcoin', // IrishCoin
    'omega', // Omega
    'incrementum', // Incrementum
    'upcoin', // UPcoin
    'prismchain', // PrismChain
    'bumbacoin', // BumbaCoin
    'dubstep', // Dubstep
    'dotcoin', // Dotcoin
    'graviton', // Graviton
    'psilocybin', // Psilocybin
    'bithire', // Bithire
    'c0fferc0in', // c0fferC0in
    'digieuro', // DigiEuro
    'gridpay', // GridPay
    'grexit', // Grexit
    'litestarcoin', // LiteStarCoin
    'profitcoin', // ProfitCoin
    'braincoin', // Braincoin
    'pentacoin', // Pentacoin
    'motocoin', // Motocoin
    'murraycoin', // Murraycoin
    'diggits', // Diggits
    'ibits', // iBits
    'operand', // Operand
    'bitcoinfast', // BitcoinFast
    'darkether', // DarkEther
    'rublebit', // RubleBit
    'opescoin', // Opescoin
    'avatarcoin', // AvatarCoin
    'supreme', // Supreme
    'flaxscript', // Flaxscript
    'coin', // Coin(O)
    'skeincoin', // Skeincoin
    'asiccoin', // AsicCoin
    'worldpay', // WorldPay
    'darklisk', // DarkLisk
    'candlecoin', // CandleCoin
    'moneta2', // Moneta
    'thecreed', // TheCreed
    '2bacco', // 2BACCO
    'darkcypher', // DarkCypher
    'purepos', // PurePOS
    'x2', // X2
    'fireflycoin', // FireFlyCoin
    'trinity', // Trinity
    'paypeer', // PayPeer
    'soulcoin', // SoulCoin
    'cashme', // Cashme
    'superturbostake', // SuperTurboStake
    'cionz', // CIONZ
    'biebercoin', // Biebercoin
    'the-cypherfunks', // The Cypherfunks
    'espers', // Espers
    'valorbit', // Valorbit
    'paccoin', // Paccoin
];

const CryptoAssets = _.zipObject(cryptoAssetList, cryptoAssetList);

module.exports = CryptoAssets;
