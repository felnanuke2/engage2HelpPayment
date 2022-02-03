'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3baeea996c17f6f5b73fb81f6f7c7da6",
"index.html": "05983f20b6a721d9503358c742686eb9",
"/": "05983f20b6a721d9503358c742686eb9",
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
