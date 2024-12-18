'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cd46f5963bca964e35ca5302b6efa196",
"assets/AssetManifest.bin.json": "d25cb70fe3b235023236dc91d1b28a27",
"assets/AssetManifest.json": "af8dac65cce0c0986898161b66a8b30a",
"assets/assets/audio/bell.mp3": "169cbafd150d1471a34eb327ae94b310",
"assets/assets/ChakraPetch-SemiBold.ttf": "2c5f0890be62b29479ab1453e038fbbf",
"assets/assets/images/cards/c1.jpg": "704f7e50db5a0af96ccd3221eac3e972",
"assets/assets/images/cards/c10.jpg": "4cc023e1189105b9ad09d69f3328349d",
"assets/assets/images/cards/c11.jpg": "0439ca7806e6e80fc113e1d88cb4e954",
"assets/assets/images/cards/c12.jpg": "d08ce9d13e1f5ecadbf182b0480a6ad5",
"assets/assets/images/cards/c13.jpg": "1c1810d82dd0994de1843af04c889b00",
"assets/assets/images/cards/c14.jpg": "d342d502a9d43e02e0c95f82316f3761",
"assets/assets/images/cards/c15.jpg": "b972d33d18f46be3f7350c7ab2a35beb",
"assets/assets/images/cards/c16.jpg": "c11de5c5fc2ca232166e787f4ccfe7d5",
"assets/assets/images/cards/c17.jpg": "176a2267e4390a3583047c91a8bc6e32",
"assets/assets/images/cards/c18.jpg": "aa978794b12a0aba58089bdb8cebf1bf",
"assets/assets/images/cards/c19.jpg": "554315d9ea9e65f9ad97e0660096301f",
"assets/assets/images/cards/c2.jpg": "10119ff846d1a8094e98cbbf81fe1adf",
"assets/assets/images/cards/c20.jpg": "3913a910d63cc96e8ee0d09cb81a650c",
"assets/assets/images/cards/c21.jpg": "faf669b809c4ce5554c2386d2436eca2",
"assets/assets/images/cards/c22.jpg": "9d99a40e5a028c2a551a03323e8abb60",
"assets/assets/images/cards/c23.jpg": "94ef3d7d7bbffc60cfbfdc488351bc54",
"assets/assets/images/cards/c24.jpg": "dfd7eb94334cf8aaccba3f4173d75dc5",
"assets/assets/images/cards/c3.jpg": "46f2db174a358590175ecd8591a74ffd",
"assets/assets/images/cards/c4.jpg": "c5013ffe0540e2cdea866aee8c05dd98",
"assets/assets/images/cards/c5.jpg": "b8b9408fb5401dd8d2331f76830f7d79",
"assets/assets/images/cards/c6.jpg": "80c0bfaf857f8bface75660915566445",
"assets/assets/images/cards/c7.jpg": "8ac098a7e74f76a629bd67a216c04455",
"assets/assets/images/cards/c8.jpg": "a7f7632ed52cf148f07182938d16f067",
"assets/assets/images/cards/c9.jpg": "6957b2bc440f339f276166562e070c7a",
"assets/assets/images/crown.png": "a838663ce5b29993a21a3336ef309b16",
"assets/assets/images/flags/AD.png": "0934740359071c0bf2dbe32d62ab59c3",
"assets/assets/images/flags/AE.png": "84bf33921e64ca8dbf8f5736f2781ff5",
"assets/assets/images/flags/AF.png": "61e5c4e5a0841b84f2a5f5c26d3feff7",
"assets/assets/images/flags/AL.png": "528f3314c449522e147d78d97500c478",
"assets/assets/images/flags/AM.png": "2aa59afe1046a0ee6f548bc84d6b9066",
"assets/assets/images/flags/AO.png": "9ea9675910b02d9f3eb18b5c358ff7ee",
"assets/assets/images/flags/AQ.png": "9f26c12661d86a2fe54a67751ec79a65",
"assets/assets/images/flags/AR.png": "fabb9ed0fff646f713b8b4c23d6d2bbe",
"assets/assets/images/flags/AT.png": "4445d4a7ee61a1cc0411a6b432ae7059",
"assets/assets/images/flags/AU.png": "5410b58eeb9553c8528b8ba254ed7d84",
"assets/assets/images/flags/AZ.png": "678e0ed0a4088ccca70110a3d8135e82",
"assets/assets/images/flags/BB.png": "c6f79170be352848bdcb7f5b2b667ce9",
"assets/assets/images/flags/BD.png": "e69fae6ff1d2735b5bb9cc301ae6f9d5",
"assets/assets/images/flags/BE.png": "ddde0afedffce34df7f7af25784679fe",
"assets/assets/images/flags/BG.png": "9194ff9e38836ae9b3da3165aea0335c",
"assets/assets/images/flags/BH.png": "ad80af133f84048a1a9dde3858143a90",
"assets/assets/images/flags/BO.png": "2ba421b109d638394fabd4fe68433e4f",
"assets/assets/images/flags/BR.png": "7cf5465e794febdc683c4aaea78d0c5f",
"assets/assets/images/flags/BS.png": "28a61381dc077ebf34883feffb853133",
"assets/assets/images/flags/BT.png": "aaab97e83d9dd2daf9f9d5f79a202592",
"assets/assets/images/flags/BW.png": "1988a7fd27707b3acebbadb8a0907307",
"assets/assets/images/flags/BY.png": "49e98075d293559d99618abddb7e3d15",
"assets/assets/images/flags/CA.png": "ffc0416a2ee37950f8db3b45e6e62ba8",
"assets/assets/images/flags/CH.png": "1c9e4274704c803197e814c4f5e96b2b",
"assets/assets/images/flags/CI.png": "fd5849564bc0ff0397b92c2a62e08bae",
"assets/assets/images/flags/CL.png": "0c1d90ed5f20ad2fc21fdb73eb0dc829",
"assets/assets/images/flags/CM.png": "f8560f1304cb5f0f6f8276fe428b3fa4",
"assets/assets/images/flags/CN.png": "9ad1a22342d2e4e343f45de7a2425441",
"assets/assets/images/flags/CO.png": "7da45cbd0eed5d471ed1119821ba6cbb",
"assets/assets/images/flags/CR.png": "61d5af15f4be114a8a913d69c23ed6b1",
"assets/assets/images/flags/CU.png": "9c4146c5b782518224ef4b9e05efab2a",
"assets/assets/images/flags/CY.png": "7d15db19e607caca7a0bfd485aad8dc7",
"assets/assets/images/flags/CZ.png": "9a4d987b1a984b95b68f3f0f9224e096",
"assets/assets/images/flags/DE.png": "1c335a1907025f79c3b54f513de4f02c",
"assets/assets/images/flags/DJ.png": "ab42b86fef26e852df395c98201dd96d",
"assets/assets/images/flags/DK.png": "7000b38ccc388a740a5874e64f26f063",
"assets/assets/images/flags/DZ.png": "eae1b1d0c6e01e0915bfd2210016b271",
"assets/assets/images/flags/EC.png": "97d8164182e028a73a945b32df149be4",
"assets/assets/images/flags/EE.png": "0be84afc6d5f7ca9380806c568e7c31f",
"assets/assets/images/flags/EG.png": "d6591536486ecfd0e52d6d5a6b7af948",
"assets/assets/images/flags/ES.png": "3bbc6d91f27e126eca1dea83cecb848b",
"assets/assets/images/flags/ET.png": "e8749f6cce4c7e380c4cf4018ef5ff43",
"assets/assets/images/flags/FI.png": "0fe3635a5896e99e8eec6fd1088b3a57",
"assets/assets/images/flags/FJ.png": "4225226672100fcb80df8b71e4335f62",
"assets/assets/images/flags/FR.png": "77e7c1e5eaf06a1d7d645e39e3f5de8b",
"assets/assets/images/flags/GB.png": "acc6d569017e34981d275c03520e03aa",
"assets/assets/images/flags/GD.png": "816bd4b0d1325db8d9bc4e4bdccd1b16",
"assets/assets/images/flags/GE.png": "e42123d6fa494d2013f45b7b78c8ae79",
"assets/assets/images/flags/GH.png": "ffb84ee4a7b678ca047c94e7fe5c2b81",
"assets/assets/images/flags/GN.png": "7b4785a357ccf77698da5a4fe78abcef",
"assets/assets/images/flags/GR.png": "f4f51e1b7c1023e4479b56f661b1431c",
"assets/assets/images/flags/GT.png": "6d5a1aae3dbe3eee3314e7eef340e4cf",
"assets/assets/images/flags/HR.png": "c09fe3c04cce9ba7447cb9e9157aeddf",
"assets/assets/images/flags/HU.png": "52b2c632d0d17d5d21a8299d0061da62",
"assets/assets/images/flags/ID.png": "a3e4941f90baed38b3c37d76e7e1f4f3",
"assets/assets/images/flags/IE.png": "23e7cb4a0c4a85c11fa6548eddf0cb59",
"assets/assets/images/flags/IL.png": "9e73aa59981677a7cde85337a0531537",
"assets/assets/images/flags/IN.png": "242214975e91e69aad98559376a24be1",
"assets/assets/images/flags/IQ.png": "ee2eafc421bc512864f29dfaaaa813d1",
"assets/assets/images/flags/IR.png": "16cfb1c22e1ccae43b9b477beb0de594",
"assets/assets/images/flags/IS.png": "44227e12d1022a38c8b2d39024da8257",
"assets/assets/images/flags/IT.png": "771ed4d835927734bb94d6c75f48c3aa",
"assets/assets/images/flags/JM.png": "d54e603ec486bb499564d5f285707d85",
"assets/assets/images/flags/JO.png": "394c09742ca078ac5d66e571f881ed78",
"assets/assets/images/flags/JP.png": "09773bc4a6580d1b38c2243fe70d8508",
"assets/assets/images/flags/KE.png": "71cab57c208281b84bc5db91d5f242e7",
"assets/assets/images/flags/KG.png": "6047a9beed8801b6d1a7f227f9d6d19b",
"assets/assets/images/flags/KH.png": "fd89b1698e2775703eb9702b1113a736",
"assets/assets/images/flags/KP.png": "6ae023ad9b011708d2aef97c47a71fbe",
"assets/assets/images/flags/KR.png": "45dc7cd6f31eb27fd33e8a38e2bd5fec",
"assets/assets/images/flags/KW.png": "2c8178ffaebb059b206f0002d9103436",
"assets/assets/images/flags/KZ.png": "ec07eda4425ab4bb1d792107f4696b77",
"assets/assets/images/flags/LA.png": "e91171bf7f9573355d72b4cf1532d92a",
"assets/assets/images/flags/LB.png": "1345ce5bd191955fc4181e47b19763ee",
"assets/assets/images/flags/LI.png": "ca0196e8de372d781afa6cd1323a8c6c",
"assets/assets/images/flags/LK.png": "c1b00284ad29520172f8017f72e0ea5a",
"assets/assets/images/flags/LT.png": "c8059f088a50535954ec7d88eaf96e86",
"assets/assets/images/flags/LU.png": "c33a1d63f1ef3a09fb16183d3d69d55a",
"assets/assets/images/flags/LV.png": "082d7d1ee2e4eb6397f68e07d604d466",
"assets/assets/images/flags/LY.png": "862c834bfae11061dcf9b49571d7e547",
"assets/assets/images/flags/MA.png": "4aed010e05ad5709c745f2b8574e3884",
"assets/assets/images/flags/MC.png": "83002f75d5be1e3f9cd1ddf303b81b22",
"assets/assets/images/flags/MD.png": "22f3974cdf2a78359838cc75b7a5b91e",
"assets/assets/images/flags/MG.png": "92ae93cbc2e32353416366a17999f594",
"assets/assets/images/flags/MK.png": "ebb58ed2e661d1f546b810c0c22cacf9",
"assets/assets/images/flags/MM.png": "df77db257e3f9e6223427cc7f2880558",
"assets/assets/images/flags/MN.png": "555db54442062e2e6648dba331810984",
"assets/assets/images/flags/MT.png": "68943604d7c68f47537234ce68fb45f9",
"assets/assets/images/flags/MU.png": "ecae23b7165856e1f6d3ccaab5852cf1",
"assets/assets/images/flags/MV.png": "74e611f8d59c3158fd7f0b39becea50e",
"assets/assets/images/flags/MX.png": "4325fd3bea86ec185e82078302861a56",
"assets/assets/images/flags/MY.png": "434b37e85ab7d0ee5fc33d160e008d3e",
"assets/assets/images/flags/MZ.png": "8f8f586b88524a49b5ece0087e5fdfef",
"assets/assets/images/flags/NA.png": "33dd09e991df6fde258a31c52906a78b",
"assets/assets/images/flags/NG.png": "8133faf9ac78b32c4e21658d64fe0b31",
"assets/assets/images/flags/NI.png": "ddaff41d1c169600cef562b9b3a5b60a",
"assets/assets/images/flags/NL.png": "736578f6aa239451de9bd71347c8897e",
"assets/assets/images/flags/NO.png": "d19190167c0fc981944997909697ec22",
"assets/assets/images/flags/NP.png": "0082faac55de5cfbd0096d1a710a2d5c",
"assets/assets/images/flags/NZ.png": "79a3e35df5a3dec493e3564d054f6e8b",
"assets/assets/images/flags/OM.png": "1d748dd127029228519001b42b210692",
"assets/assets/images/flags/PA.png": "8c4af3007a8605829418e378170c9cfa",
"assets/assets/images/flags/PE.png": "784f4117929839b34087852ba14bcf0b",
"assets/assets/images/flags/PH.png": "8e1049514b252113e0feeaf63e523804",
"assets/assets/images/flags/PK.png": "4566d633af11e2bf2c9eb5d8f14cac79",
"assets/assets/images/flags/PL.png": "44e88eb2e9b51b4b907eb27616ad8eb3",
"assets/assets/images/flags/PR.png": "96d4d653897bebc5ddd303c3af57a313",
"assets/assets/images/flags/PT.png": "9bc2b7a7a37353994c7926eb15509548",
"assets/assets/images/flags/PY.png": "79914c6cbb04a1297bf6813d0fd491f1",
"assets/assets/images/flags/QA.png": "ea4e3f85dc7a8f2029ebcd1b67caedc4",
"assets/assets/images/flags/RO.png": "909e63135a4b1604fbc5d8e40fef1090",
"assets/assets/images/flags/RS.png": "1692531819eed98c9f59ec0b1b3b1036",
"assets/assets/images/flags/RU.png": "ebb138214aae14802b88eff6c92a35d8",
"assets/assets/images/flags/RW.png": "047137ed024855b3b755761f9288d728",
"assets/assets/images/flags/SA.png": "4710487bd6eea9919c764b79616aec6d",
"assets/assets/images/flags/SC.png": "cdf2ede554aaeb97b4cd7381c40daa3b",
"assets/assets/images/flags/SD.png": "3af31f63ef1200ebfcef223a3ac218a1",
"assets/assets/images/flags/SE.png": "dc097cad277e6cfdcc2149b16dc16b42",
"assets/assets/images/flags/SG.png": "a9d6e459367c0b06d0976ca6e8d0042b",
"assets/assets/images/flags/SI.png": "33ae2b327ce19703757fdd4c4aee360b",
"assets/assets/images/flags/SK.png": "0072f7356b34f242a26dd57fc37cb47a",
"assets/assets/images/flags/SM.png": "5050271664cb02d2cd668186b3255b45",
"assets/assets/images/flags/SN.png": "c208b3e9a69893717a824a60d3813666",
"assets/assets/images/flags/SO.png": "dd7fb39904768b775d9986bfd1fb559b",
"assets/assets/images/flags/SY.png": "0ce9ea6a4b15a4d4884b03d5b8330e3f",
"assets/assets/images/flags/TG.png": "12c0c2adeb08d1b9ead2e7dffad24df7",
"assets/assets/images/flags/TH.png": "a6b1b22608c910f8dd21200d6b335b46",
"assets/assets/images/flags/TJ.png": "9cb7f3f6b82dd08f82248cb38d295d5e",
"assets/assets/images/flags/TM.png": "5b744c18ef43901c566c8220407ed9c8",
"assets/assets/images/flags/TN.png": "dc0c5bdc974e934446d8e7052ff3d2e4",
"assets/assets/images/flags/TO.png": "cfe698187f14d8b8159bde492f51e903",
"assets/assets/images/flags/TR.png": "f3f361292eb657c14e4bb88ef512718e",
"assets/assets/images/flags/TT.png": "5d606ef65058a5c6c0b84f9c4041706c",
"assets/assets/images/flags/TZ.png": "10023f80756f31bc8d13bbed215e091c",
"assets/assets/images/flags/UA.png": "7fc8335b97498d2bf894bee40f5699aa",
"assets/assets/images/flags/UG.png": "cc21dc5ee8d017be4a8cd1bb876a86ce",
"assets/assets/images/flags/US.png": "bdd5bc66a1c8d7073a828e748419c067",
"assets/assets/images/flags/UY.png": "3053038685a2eb46872d4a5df26b1357",
"assets/assets/images/flags/UZ.png": "0fa861d5e9bd3db900a729ca2f935e02",
"assets/assets/images/flags/VE.png": "f938cd7c47b50fcd1b79fee2c60f04d2",
"assets/assets/images/flags/VN.png": "4f97b752af1aa0b34e5469a8159590da",
"assets/assets/images/flags/VU.png": "d0457389480f42cd52494028488979d0",
"assets/assets/images/flags/YE.png": "93bc0f064f565d92ce9b9af21e4b8d3f",
"assets/assets/images/flags/ZA.png": "c610c2c5ed23e0bcbc546ccfbd0bd6c1",
"assets/assets/images/flags/ZM.png": "a7383a00ce002db5a3b618b560ffa4d7",
"assets/assets/images/flags/ZW.png": "b93fc02911402c39ca2349a28c3456ca",
"assets/assets/images/gold.png": "34145005f2327895e7466ea6fc2cbdb9",
"assets/assets/images/logos/adidas.jpg": "1544367bb0077de360f4e04d914b233a",
"assets/assets/images/logos/adobe.jpg": "b35771ac92d8c88c0ee79af4e0ab66cf",
"assets/assets/images/logos/alibaba.jpg": "5589708eec1c2100dc6bbe6e6fd427c0",
"assets/assets/images/logos/amazon.jpg": "df447fc3182545570dbf93d9e1871f7c",
"assets/assets/images/logos/android.jpg": "aebe56c2c2efdae1887a4c23bdad21ef",
"assets/assets/images/logos/apple.png": "3216f27ad3e2829e25dfce2cafc4caf4",
"assets/assets/images/logos/appstore.jpg": "a45982320cf31b809adf2730f41b059c",
"assets/assets/images/logos/ariel.png": "c7ffc12f19848e5bf9b607cd24f6b9c0",
"assets/assets/images/logos/atnt.jpg": "36fdb7ab05a0d48aa1c3b98a455d1e06",
"assets/assets/images/logos/audi.jpg": "395a1f424bf9a70431e0660bc9cea2a8",
"assets/assets/images/logos/avengers.jpg": "2009ce2a200f84ccb7507f3bce0d19a6",
"assets/assets/images/logos/barbie.png": "9bb0c8ab25d9115b0e43df7bee951d79",
"assets/assets/images/logos/baskinrobbins.png": "2af0f13afc935ff6f3ed011373f1aee9",
"assets/assets/images/logos/beats.jpg": "eb43f04a6a8a7274f24ba707b6457fc8",
"assets/assets/images/logos/bp.jpg": "c14cd90eea3c86f4c6c81c5576ac83b6",
"assets/assets/images/logos/chanel.png": "7f7f8aa1653a72437aad5b08b2503bbf",
"assets/assets/images/logos/chevy.jpg": "71cff707ed69b0bdd336e5e2764dd2ef",
"assets/assets/images/logos/chrome.jpg": "e5d6b8372523dfd07c47806aecb46541",
"assets/assets/images/logos/cisco.jpg": "204f687354feab292ed990951443ce8a",
"assets/assets/images/logos/clashofclans.png": "55648e6e1e4884f78847466152b2447a",
"assets/assets/images/logos/cn.jpg": "81f0d7a44c13bd3c669a59880a048a89",
"assets/assets/images/logos/cs.jpg": "0395ee7c341462765fc8c74d1d5d533b",
"assets/assets/images/logos/discord.jpg": "c7a44184471f59ec1c765952fdee0cae",
"assets/assets/images/logos/disney.jpg": "6b098a76291afb7506e11100404f8f46",
"assets/assets/images/logos/dominos.jpg": "ab8b3a489001c437aceeddad355552ee",
"assets/assets/images/logos/dove.jpg": "3e3d976e9ae0259377caca515c692fb9",
"assets/assets/images/logos/emirates.png": "0314bb516694f3bc900c8069102b5d11",
"assets/assets/images/logos/evernote.png": "6db8f49d988214b3d52099a05c7df9ec",
"assets/assets/images/logos/facebook.jpg": "57fed257d4ac14f54b7b5ea1cbf3d65f",
"assets/assets/images/logos/facetime.jpg": "b0be01f7c5853aa4a4e2c3de520bc411",
"assets/assets/images/logos/fila.jpg": "1e51e8a4d6016475b99c7353999d0b95",
"assets/assets/images/logos/flipkart.png": "7de227db893518f35968bc72bd592024",
"assets/assets/images/logos/formula1.jpg": "0b1a302a21a48bd6fbabd2c03af06e7e",
"assets/assets/images/logos/frosch.png": "a9c56fe27eb47b82bba91619cb2fa735",
"assets/assets/images/logos/ghostbusters.jpg": "dbcd92f4278d2c9dfd7031c68aa14907",
"assets/assets/images/logos/git.jpg": "6369f8c3d27373e199b453feb794fd75",
"assets/assets/images/logos/googledrive.jpg": "569e767f14197a7296812c5f4dcaba06",
"assets/assets/images/logos/googlemaps.jpg": "6d59dfdc4931a859c5137b70816b1ae8",
"assets/assets/images/logos/gta5.jpg": "c319b21934813b1812e0a370d75d8d07",
"assets/assets/images/logos/honda.jpg": "d36204b4872a104b3ccb05ed480bc112",
"assets/assets/images/logos/hp.jpg": "cbf4d9d8e5720e0c5e149d6cbd5d7186",
"assets/assets/images/logos/hyundai.jpg": "32d6c662841c16c3b5b65e77da76e5ae",
"assets/assets/images/logos/instagram.jpg": "98421534f1d2a3f2cb21851fe3293bf8",
"assets/assets/images/logos/jaguar.jpg": "8f6f13c024bd7bdbb892cfdac3ba1908",
"assets/assets/images/logos/jnj.jpg": "689bd97b7512184d949262bb9ab7edb8",
"assets/assets/images/logos/kfc.jpg": "d861b0d512c8cb193e07b0a984554855",
"assets/assets/images/logos/kisses.jpg": "8875ebfe7dd42c88eef2c996d60a0397",
"assets/assets/images/logos/lacoste.jpg": "32f4a8b03b4731f835d1d433534edde3",
"assets/assets/images/logos/lexus.jpg": "e33cc0ac33a51438e4f99a7ec633f2ba",
"assets/assets/images/logos/lufthansa.jpg": "cbb5c4a55676a21e76a89bb656847bad",
"assets/assets/images/logos/lv.jpg": "caa533873ab37942f10d6d4a7bc00b27",
"assets/assets/images/logos/mastercard.jpg": "5022629b0b9b3e3a4dfc882a9e986463",
"assets/assets/images/logos/mazda.jpg": "7fee8c15923743ace4ce15c1ccf92e60",
"assets/assets/images/logos/mcdonald.png": "2b0115fc974a83ddde83ce2728564389",
"assets/assets/images/logos/mercedes.jpg": "cf663b3d44e6431ea511c465f904da1a",
"assets/assets/images/logos/messenger.JPG": "a69fa100f35f7d8bb86f2a06f9f1907e",
"assets/assets/images/logos/minecraft.png": "9e9c68cca7a019693a274a8c3ae6b455",
"assets/assets/images/logos/mitsubishi.jpg": "a8bccefe8f2169ad7179eb5958bde1b0",
"assets/assets/images/logos/motorola.jpg": "556405a432864d24eb9f26986bb36daf",
"assets/assets/images/logos/nbc.jpg": "03da13a2b94035d50fa4421c01589225",
"assets/assets/images/logos/netflix.jpg": "3d6c22e1def5d8c3d2d4677e08fccc1d",
"assets/assets/images/logos/nike.jpg": "ca538db363c668cf82c99b3917279921",
"assets/assets/images/logos/opel.jpg": "e69af1ad5324e845cf3d82f9571a9dcd",
"assets/assets/images/logos/paramount.jpg": "8cb008ccc38d0b2f74913774baaf7aed",
"assets/assets/images/logos/paypal.jpg": "9f3210c18389c328344d656b9fdd3ba5",
"assets/assets/images/logos/pepsi.jpg": "7a33614414814b1592fbdfed4286e455",
"assets/assets/images/logos/peugeot.jpg": "3f4d5efc6c179e4c8c7b0fe2ab5b657a",
"assets/assets/images/logos/pinterest.png": "83935ddf3c3490454584f54b17c6161f",
"assets/assets/images/logos/playstore.jpg": "1343c8063aa8e07ad7edd7ee2501da47",
"assets/assets/images/logos/ps2.png": "10e76d3117cff2ac97984fc9003c7925",
"assets/assets/images/logos/puma.jpg": "a2afd1e8cbade212245425d957c3e3e3",
"assets/assets/images/logos/redbull.png": "435a4a07c2b28a14721409b4ea6c1f3b",
"assets/assets/images/logos/redcross.jpg": "aa27032cafe761fd6d9da96215a9d370",
"assets/assets/images/logos/reddit.jpg": "d643aefecf10199a1fd4c9db5745aca3",
"assets/assets/images/logos/reebok.jpg": "4b7e46beca62b518ab8ec27f1e10a5a8",
"assets/assets/images/logos/roblox.jpg": "e31fe429f7a5aa4b33b3ecb45b9508fc",
"assets/assets/images/logos/rogerfederer.jpg": "15defe5a51d896b1af27ef9807f32a28",
"assets/assets/images/logos/rolex.jpg": "e7a03fec834e2925489d1cbd0088a6ab",
"assets/assets/images/logos/rollingstones.jpg": "847959b46dec5256c19f7c51b139cad9",
"assets/assets/images/logos/rollsroyce.jpg": "d33a67c3535b55eccddad8caa2d29b3d",
"assets/assets/images/logos/ryanair.jpg": "b476c7ad7b2cc8b9257d71d09cdb04a6",
"assets/assets/images/logos/shell.jpg": "cbf9ab41bea29bd43accd978ac4ef102",
"assets/assets/images/logos/shopify.jpg": "d866ea563664e13032692d49bb8e6b56",
"assets/assets/images/logos/skoda.jpg": "3c6da42a6a967757a17c804d4e709ca1",
"assets/assets/images/logos/skype.jpg": "43cddbe99889358a15354970aee1c267",
"assets/assets/images/logos/snapchat.jpg": "d69705c388e5595bf45131a0cd899056",
"assets/assets/images/logos/spotify.png": "62f7e16e03a403b8d16cde2bfa799a2b",
"assets/assets/images/logos/starbucks.jpg": "d2b82c76e1490c68e0b8d9d7c45e9d32",
"assets/assets/images/logos/subaru.jpg": "3837cedcc2c7360816c25714b596d5a8",
"assets/assets/images/logos/subway.jpg": "3a85986f12c27b0c53fa85bb8ac409fc",
"assets/assets/images/logos/suzuki.jpg": "5d671598c1e41cecd4ba48774e5a859c",
"assets/assets/images/logos/swissair.png": "ac640c581b9afc0c00f66d4c4d64ee33",
"assets/assets/images/logos/target.jpg": "20f6ce08833990179431406e1b14e29d",
"assets/assets/images/logos/templerun.jpg": "5ff51e828826ae924f1726da095dc031",
"assets/assets/images/logos/tesla.jpg": "a8bcb7deeaaa19a2173038e751d1eae1",
"assets/assets/images/logos/tiktok.jpg": "34e1bc0e9baa228530a9bf0c954ee39d",
"assets/assets/images/logos/toyota.jpg": "d5b050ea114ac2db5cf544eea768fe1d",
"assets/assets/images/logos/tripadvisor.png": "c50cce35ef5dba2a127a73b070ca2e25",
"assets/assets/images/logos/twitch.jpg": "6eb48bcb72fe0ee2fc5b08df7d21a19d",
"assets/assets/images/logos/twitter.png": "efbfffd04d3c1440fe2b68f846ed6e98",
"assets/assets/images/logos/vaio.jpg": "67501a66404f0c34029c5acaebe4a5f9",
"assets/assets/images/logos/vlc.png": "e6dc7ba0b9a3ab67c77b387beaa5755d",
"assets/assets/images/logos/vodafone.jpg": "1288f4d684e4604d0a42cb6651b6aa37",
"assets/assets/images/logos/vw.jpg": "67d059bd3c275280d5660f75aa1349a4",
"assets/assets/images/logos/walmart.jpg": "b90799e58fe18723fc65f1ecd51bbfb5",
"assets/assets/images/logos/whatsapp.jpg": "aaa2dccaac82a3de5c47c9fae21ba495",
"assets/assets/images/logos/wikipedia.jpg": "5ebe7d71fd1384914963b48e71b8fdb6",
"assets/assets/images/logos/wwe.png": "41a66fe6e29d3dc0952b7967ce99fa6a",
"assets/assets/images/logos/wwf.jpg": "23eb27f046d316d231a73ba55db686f0",
"assets/assets/images/logos/xbox.png": "2a25cdfb898a5417b3b64e0f1a095b6c",
"assets/assets/images/logos/xiaomi.jpg": "3e573c6bb4a40549826d4e3b6382a91e",
"assets/assets/images/logos/zoom.jpg": "63bb3966293d2feab1c5c841cd6b78b0",
"assets/assets/images/pointer.png": "2a6e2227b0b0764e81a900d607a204ed",
"assets/assets/images/spinner.png": "23e105a18512c49cadf1dc3ce05552b8",
"assets/assets/images/star.png": "b0fc0589c9b105e60d41e7271d29288e",
"assets/assets/images/stopwatch.png": "1cf7080ff6d25ef80bfb509fa9471574",
"assets/FontManifest.json": "9c0575f61d987e3ce6b1f4e36d2c1d10",
"assets/fonts/MaterialIcons-Regular.otf": "f6ef9e07dc6d7284b757bf02211fab5f",
"assets/NOTICES": "578764c0fcbdae1165c66dd77bb177c8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3431694c3445dea7da8d97498759b919",
"/": "3431694c3445dea7da8d97498759b919",
"main.dart.js": "6b07fafe046f98289e53afd296e7181f",
"manifest.json": "649f43d3602e07a351811d1f39f766db",
"version.json": "bf66ecb6bfa5a84454d4ce66b3e5dd0c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
