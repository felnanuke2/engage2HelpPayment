'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3baeea996c17f6f5b73fb81f6f7c7da6",
"index.html": "4598d8bceb679857b53f94862f0347ed",
"/": "4598d8bceb679857b53f94862f0347ed",
"images/mao_rosa_claro.svg": "c94d4f6d14ba5c186ab02e3a8df3f5e8",
"images/mao_rosa.svg": "88d85796744e1ba7cdb8fb51301f5b5c",
"images/hand-one.png": "3b24dda99790c91355673fb763d9b272",
"images/hand-two.png": "395969926387ba4ae96af208c0394c77",
"images/mao_azul.svg": "281fa5ca185eac5a298b8f54b112383f",
"main.dart.js": "040bff2546c1b2cb4d14c816549ac814",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192%20copy.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512%20copy.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/logo_black.svg": "fa5044532bb7f06965833da2e53196f3",
"icons/logo.svg": "623a477cbe27e6038f51de0ca04adfba",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "599981c3975741f29508af860b37edfb",
".git/config": "039718eb9f77768cdb3696922968e06b",
".git/objects/61/f3200d997fb3f84ddff23710c81eb875962f48": "94be32a0b52c2f8f53fd8fb0b330b125",
".git/objects/0d/c922643cea0ee7a0b3736f1e52c055c969607a": "641fcb8fbe8ca3e90f0e0fe9b6d17b3f",
".git/objects/6f/9279daefbb746564babab403af1204dfbbf2df": "a67c16500511997bd6210b7bf25d7b08",
".git/objects/03/c978af99af0d01dd422c14385d104850ac5128": "0150a68801e82f1ee36dd0233bcaf308",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/6a/6c885e77f28ec873c7463262226bd2351efc34": "010a89874cee631b7904a8cfb57bfe95",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/6ba0e4bb136583fe3a01ac604aadc9f583d12e": "389481eb76f095602c31f7937f48b105",
".git/objects/51/4abbdd3b9828b010cdeda678ab54d2de352691": "73d8cc4fe6773e27aabe9a09f5101780",
".git/objects/3d/9e8584c0119dddd1bbea21f3a3ae68834b8349": "371bf15a50a2f7856d4c0d14fb29d09e",
".git/objects/93/7716ad0676b2a2c21a26f2f26bb04fea08d285": "ac98890eebe96768c992a85236babb12",
".git/objects/94/2c0e50c1d93e59f618b95cfc0f3c8768d8d5f1": "5c0960ec6a80e66817fcfc00e61ac01d",
".git/objects/34/6c7c1884c75d9a62477cf11f6e9bbd9960b977": "878f532af0d702d4094ededd7c7ded69",
".git/objects/b2/a9bf557a4f15b6b3878624104d4b282bd195ad": "dd25ae5c56b0984fdd181c0433440fc6",
".git/objects/ac/96b6375b79e404a9ef70afcf8f823248ccfc85": "c49b07ade7558016c0e6b50e5172608a",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ad/99d9db7ee05cedeea2dccb09bd8015b09ff462": "59ae501ee027417707af5e07fba2527c",
".git/objects/d0/792d7e5934ed5555ccaf5061949e0c48321eac": "2b7a252b249ab3aee4594f04f9839639",
".git/objects/d0/06a1a716e28c0e23e53553ecb3b0838b28f62b": "09a1dd5dd9a0f7077aa8b2b64cbeb3a9",
".git/objects/be/60295bad91ccd9961e3d6b7ea23b72edfb103a": "d24a6c103c232e6e52e71d3b441e83c9",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/bd/adf13178b0a44531ced99733481a4393879461": "6a363a28c67dede2dc58cc18f29b3b1b",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/bc/fea02037d6dc1988efd16e4529888e05870edd": "2fc705c0336f2b47d3bddf2765139034",
".git/objects/d8/a251c7c46441b9ac1e2c6d176a217c16595460": "87bbd68e89ce9dcc855f173e0802d66b",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/e64456c7f8e6b714d699a912bda3fc21583f44": "abcb9efd018b8bc75a096cf323207f04",
".git/objects/eb/fdd707e55e1d050595f4c58c45ae4ab44d000d": "f75fb9db9bc528e1ca887c240e413a32",
".git/objects/c7/cb149517dc261f93bdeed9bfab9b4ade42b968": "16aff2691999fcdec2c7cd6cbce73ef5",
".git/objects/ee/6238251f406e932d4d3479d7f1627d1b70bf69": "196937910c1004cc3277e8897c92a3e2",
".git/objects/fc/483e02c72a42ad274cd5f87f56f8929f3c1942": "34f64228cd6c1f688c3ac4b9e5844352",
".git/objects/fd/3d4268e18a9897ae1198f8779eef6094dce293": "867b042bdb5a09fc4e35488595480f54",
".git/objects/f2/e241062aa15fcd35e02c5148ad42ac0feb9ced": "6104422f8564e00aa03342b2a99bab32",
".git/objects/f5/c0fdd5313d1b65ab554124ba302fca992134ca": "cd7f02aa634edd5f4821629d12367180",
".git/objects/e3/92492abdb3640da80637c8e69d7049e9ed3c41": "457c98db190edf70f51f43c67464a919",
".git/objects/e3/0f114e39d80ee7f72985ccda340972a9f806a3": "a625123dde72dea6843e812aa172c6db",
".git/objects/ed/7708f4611184a03b54a43583d3e821566348ed": "88907f85004061a651809c2e2cc5427c",
".git/objects/c1/7dadc95451d4a2162914265a1c5cd2168efbb4": "0552a6bf6be030c52b2bc2c57f2a74f7",
".git/objects/ec/6f6a60b664609b8564c4d0c059f5dfb00b4dc8": "25b2eb8b7e7b142a588160fc703ec608",
".git/objects/27/f5a2751cb8986c2ee25e0058d6b0d14bbbb9fe": "7ad2b361a7b13204c020fbb2186f0d5c",
".git/objects/4b/998bf403c74f51db09ab4a117be6d33ced25de": "3218ac38f7882116d92802d9910d1cf6",
".git/objects/4b/d2b4efe65edbfe9c3160f0af6e60148f8f7e85": "811c7152b6ede4b9c8781ddc826433f8",
".git/objects/29/d5f7419bd5a91f113861f1ccd615afdbce712f": "e3ac6ec442953675f750009ff701de51",
".git/objects/80/0e31be72adb6fef11db48aa12ec243c3e4f3f7": "54d57c2d4ca0028ac60a79066958d9eb",
".git/objects/17/b6d6b1fd40dba61095840c4b35f5e0c8b07c60": "dea3e953dda8c339d4328c56d9340f08",
".git/objects/8f/008c36844f28454149ce1a22effe513dc726e6": "0fa45b087e693064e5a2ce35615095ae",
".git/objects/8f/64d5ca230a8cadc80d6d23ceda4554cccc1435": "6861247a73ef9027546277d5bb22a975",
".git/objects/8f/116fbaf81ac53dbf01778ea628c4ff926dc8b9": "82a74c52503139abc4a9547e8af40ccc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/11c9ab3b82f042b8af4c0297b209c61a390eb5": "a934a01a4a68d714835db8559191963e",
".git/objects/26/f7baf2a2a8bf71a3dc60c138dc0e048533021c": "dc624760420dc21927002b0e867fb39b",
".git/objects/75/a72a050543654d9951294aadf018d40457285c": "974ce38c0f826379792285f305c80ec3",
".git/objects/81/ccdf28c2210e891ea5bf812b3c91b2ffa16791": "177d4f8d92b549a4e7cad90cee719cfa",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/4dc152b9c76098b01794b4c44322cd0354ab2e": "b9e85964bac4795f69320fe5d2d46527",
".git/objects/38/42b440871c11ee8deb3427196053ba883376e2": "c010d249c87301c51a44deab76dbfbe7",
".git/objects/9a/e06c190db4d9468501b57a32ca037210c6439a": "4cc97bc00f38d75b08db7340444e6989",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/5c/8160a098159c696ec994660d3d60a4288895ac": "a4e355a8db82d046d28b3b998b003eee",
".git/objects/5d/7cf047ee58b4b55c27622342ae587fbc00be89": "8e38dcbc95c3173309b91db0b4ee4321",
".git/objects/96/1c50b2b57d92eb23d0d776e6dd334a0f67e5c7": "3b670f6564622b094a176a936507a0f6",
".git/objects/54/1164bf7a56c049971f46b6f8024b7e4de92f2f": "73fac2a6142a53ff14b4e2238b275d9d",
".git/objects/5e/5536912ac6a750811b11d37d7c544e0f0fec2c": "5fd69aabf8bd20e0a246d79c71f444c5",
".git/objects/37/af0ba73d3ac713ecbe2cd86982e37ab30dc664": "5184db9ed2395097e8e9c56ddaad73ac",
".git/objects/6d/3cef1f87c2e4f432c9989386af62e2430859cc": "278fe6886708d5fa144eb05b60820c56",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/d4/64ea627dbc8a0fa9a1f6e22b62998875f93b09": "c172cffb38d946a13949c758dc18343f",
".git/objects/b8/9293a32aa3a4ea854ed0333715dbfcdbe62c86": "d384ed92aaa0d0bcef5604ec2e327310",
".git/objects/b1/48a48d78969be425e76a680cdf794cff89eb70": "666ed046150955dfe986adb0a5b85f70",
".git/objects/b1/88fc04efa8c5cfe64e03136ce1083230567044": "f0722c8567543bf9244b4b359d2792c1",
".git/objects/b6/6ed2ac727d82ddb5c3fe1f322c778fb29675be": "0a190d768d39307dad20b5a0e1f14477",
".git/objects/a9/520b78ac4635319aafe2cc88f1b40c8289b1c8": "f268f08f109671711197a41d2104993e",
".git/objects/d5/13b66730a8da7d7f92fb8cc6715af8faa4e703": "d9a413ea22d78b7b5f48449f76ea1360",
".git/objects/af/bbdfa813d5f0fbca44584cc2fe06804dbdae85": "52bdde83bdc1280f812ca001384931c2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/e16e8bf8fd9e803c9aaea19a754bd6f88b975b": "d6456d648d9c392843a784a40d498a71",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/1008931638da058823109b2a5b45fbc96556b7": "5fea84123251ad5eecf5f151fc0b5d63",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/b9/86d5d9b9f52620e23db5acdf1809664f47c476": "f484bdbc4d476d1acbc6343e0879370c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/75785f74f942010f6e919384177cded63c8105": "86cac4d40a430111a37579916d899817",
".git/objects/ea/41a86fc196d597b03da23f589f8e4b08747d7d": "3ec8247a332ba2df3190d1dab376555f",
".git/objects/e1/2344ea8dd9b3877556e6aaa5a49ffcc54ed713": "9a7f93255050e5ee79bdf53c0f9b452c",
".git/objects/f9/c4d0165097313a901151abacc06bb5eda080aa": "dc59d3c06b232b412fc51d37a21c7e68",
".git/objects/f6/66462bf03ffb0d592fa6dff985939aa1a25188": "dd83488bc4dd68d36fbec3e36dcb5670",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e7/069145b26a773fdbf58e6e2fa7cb40bd5e4b1f": "79d18519f23963f7b2282dcb92398644",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/70653be13166562d0fe8beeec40804e24648db": "5bc715005db40937c6880c58c6f6002a",
".git/objects/77/4fe9cd9fd148f0a455ef69f37dcac143d90540": "2765a095283a2227072dcd32c9f8cc60",
".git/objects/77/632d10c7a4e7cada835d2df58c3b28e7701acd": "12177ea7f538ab5147efd66cd941f6e7",
".git/objects/1e/cdd23e51407b7794f652b4f1999263248a6f15": "3afde308aa048ead2e82c7d221fa60fa",
".git/objects/84/0bc60460ffef56dc9ed1628795f43598a8e4dc": "7119ff3060b00c074f3c981bfb64399f",
".git/objects/2e/f41a80fae5f77a9bb02016a41dbce6778de956": "b4e5d62ce69b50d4402f56a33580e93d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "82f64b8d3ce7ccbc52cea911f730f890",
".git/logs/refs/heads/master": "82f64b8d3ce7ccbc52cea911f730f890",
".git/logs/refs/remotes/origin/master": "5f9985ce746e26eb0988a9e1c2771055",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "1bad45d39e5b0dfa9b1c5f81b447e02b",
".git/refs/remotes/origin/master": "1bad45d39e5b0dfa9b1c5f81b447e02b",
".git/index": "dae2bfa6186352d9a4db6db0bc521846",
".git/COMMIT_EDITMSG": "3bf77e28af88b4b627e39443e24fb6be",
"assets/AssetManifest.json": "c2a1211b8882789b02a275280fce315d",
"assets/NOTICES": "bc6eb961f5e5a4374dc79d9e8aac77ca",
"assets/FontManifest.json": "16e2a6bf9e081c4e076217a59a70f4a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/app/fonts/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/packages/app/fonts/Poppins-ThinItalic.ttf": "c93e22e98b7a8d58f83ce42b278815eb",
"assets/packages/app/fonts/Poppins-ExtraLightItalic.ttf": "05139b6509a2baa8f188fbade78fc3ed",
"assets/packages/app/fonts/Poppins-BoldItalic.ttf": "09775bde3e9448b38c063b746e21cb6b",
"assets/packages/app/fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/packages/app/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/packages/app/fonts/Poppins-SemiBoldItalic.ttf": "378a091bc1b1e6e6d6327beb6bfb07b9",
"assets/packages/app/fonts/ARCO.ttf": "f81b28ad37a60340bd37f458ac4c3662",
"assets/packages/app/fonts/Poppins-ExtraBoldItalic.ttf": "29f7dd016eeed2bcd79ba482eb3f27ec",
"assets/packages/app/fonts/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/packages/app/fonts/Poppins-BlackItalic.ttf": "3fb21c8084013f3d0176bc98bcf76e60",
"assets/packages/app/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/packages/app/fonts/Poppins-LightItalic.ttf": "1eaf3af47612e6163a2e27e847c6ac7d",
"assets/packages/app/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/packages/app/fonts/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/packages/app/fonts/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/packages/app/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/packages/app/fonts/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/packages/app/fonts/Poppins-MediumItalic.ttf": "1749e4b603749026393f64506a3bcbbe",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images-confirmation/6%2520Voucher%2520Iris.png": "e6ad4755231f3c05ba82ec459e7e686c",
"assets/assets/images-confirmation/2%2520Moeda%2520Haru.png": "88fc2b71521bbc2690a57ac6092cde1d",
"assets/assets/images-confirmation/5%2520Voucher%2520Ruda.png": "00b5eeb4005594241a9b6f3661402d72",
"assets/assets/images-confirmation/6%2520Moeda%2520Iris.png": "f1783598c94d00107ebf8bea28d80da3",
"assets/assets/images-confirmation/4%2520Moeda%2520NIA.png": "7a689a53259e99d2442d796ff8537a4f",
"assets/assets/images-confirmation/1%2520Voucher%2520Leo.png": "b09f7fe38c9a17a6f963c2323c2e8b7e",
"assets/assets/images-confirmation/3%2520Moeda%2520Hugo.png": "161a4f3b0b7d0af717f13a859eeb4524",
"assets/assets/images-confirmation/5%2520Moeda%2520Ruda%2520.png": "e243d0b984b1c004019bdcf0ab02044d",
"assets/assets/images-confirmation/4%2520Voucher%2520Nia.png": "24f9201e93f60721953c0a9439fb9bd9",
"assets/assets/images-confirmation/1%2520Moeda%2520Leo.png": "284b47b72dc7fdc6da4016e201796a7e",
"assets/assets/images-confirmation/2%2520Voucher%2520Haru.png": "a0880fda33fc00450554202164c1c4c3",
"assets/assets/images-confirmation/3%2520Voucher%2520Hugo.png": "b27619a9296c7fe7678bb4c4fb6111ae",
"assets/assets/images/hand.svg": "e905d6f9fab828d5b694cf468976038a",
"assets/assets/images/hand-orange.png": "d7bcf11030d5e100766572a4687ed328",
"assets/assets/images/ticket.png": "41ccb7a9b3dc8d1a97dc9d9d397c8c2c",
"assets/assets/images/hand-green.png": "9ae7898189a6ab05f8c1b73756c2bf81",
"assets/assets/images/confirmation.png": "ee6944db87c360b10485bdca008d6726",
"assets/assets/images/hand-one.png": "3b24dda99790c91355673fb763d9b272",
"assets/assets/images/futebol.png": "b9e1e5f4cc663f86e140fc90bdb9f60a",
"assets/assets/images/error.png": "f403f364ab6244704bc1c9db6f229f9a",
"assets/assets/images/hand-two.png": "395969926387ba4ae96af208c0394c77",
"assets/assets/images/hand-blue.png": "ca5ada945be317a9e14caad302b5be83",
"assets/assets/images/coin.png": "e70c6829143936bd545e3c0837fd7ebb",
"assets/assets/social-login-icons/instagram.svg": "0f684a6c324626642014621961246f09",
"assets/assets/social-login-icons/facebook.svg": "6b4bbe718b71a560d0a570d4c8224778",
"assets/assets/social-login-icons/twitter.svg": "a70eb82b7cf742795ad335bf29830c31",
"assets/assets/icons/arrow.svg": "6189e6d9503483a93f0497bc02b44eaf",
"assets/assets/icons/loading.gif": "5cb368c53d6481df53cfb1db348f6d13",
"assets/assets/icons/logo-dark.svg": "372ebd1766bb690db4350937fea93ecf",
"assets/assets/icons/copy.svg": "e10471702d1e53cd3ff21fd866dc6007",
"assets/assets/icons/notification.svg": "3495f61506d6ccf21c2fcea0556a7a1c",
"assets/assets/icons/logo.svg": "623a477cbe27e6038f51de0ca04adfba",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
