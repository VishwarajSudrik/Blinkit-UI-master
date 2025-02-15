'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "781390d7eaf628f3b59fed71726e84a9",
"assets/AssetManifest.bin.json": "ef5dde18b62010a88abe9a42bec01fc9",
"assets/AssetManifest.json": "3e76dc2549088df48737e231e15bd278",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/Blinkit%2520Onboarding%2520Screen.png": "ae61763c442d834e86224a6d21ec64f9",
"assets/assets/images/cart.png": "248782bfb43711fea8f47b37e82ea01d",
"assets/assets/images/category%25201.png": "6a333c8ec8409844bfaf2318d9505458",
"assets/assets/images/document.png": "687d4a101351d43dca9c379e3e70080f",
"assets/assets/images/home%25201.png": "37ca6cb1e571abe7cd6930ba8c1d3cbd",
"assets/assets/images/image%25201%2520(1).png": "bc7eab95d3dcfba5d99df75ffb44bd47",
"assets/assets/images/image%252010.png": "b47d9f591b43c4d309ec759d49f7d4a7",
"assets/assets/images/image%252021.png": "571484cc9a1279f8ce1827d242e5b970",
"assets/assets/images/image%252022.png": "b9165b2bbf005d6346435086cc83c0ce",
"assets/assets/images/image%252023.png": "13bf7f0bb03892c2cfcaab204e864f62",
"assets/assets/images/image%252024.png": "5a98d0f8f464e89b83cfc346db4d2b0d",
"assets/assets/images/image%252025.png": "e7082a85f9a1bbaa02975848848570e1",
"assets/assets/images/image%252031.png": "8a3176e1e35e86d04e5a6a059197c1f6",
"assets/assets/images/image%252032.png": "34e6b35377fc9b363bf4189dd4c6837a",
"assets/assets/images/image%252033.png": "ffc305ebcf283d49b23c298ea44e22f9",
"assets/assets/images/image%252034.png": "80694201cd85b3a143c4a0abd91ccbce",
"assets/assets/images/image%252035.png": "e574fad60c68b548009c058a0e60f4f4",
"assets/assets/images/image%252036.png": "e2655da2ea76f972a5a6a956a8d7f53a",
"assets/assets/images/image%252037.png": "ed2b5c1622ed06232bb118665c7c34d6",
"assets/assets/images/image%252038.png": "6a843f4745e3688d24a6d67789c002b4",
"assets/assets/images/image%252039.png": "627e7a6d13d1a4d9af5681e26a47d98e",
"assets/assets/images/image%252040.png": "53fd4aef7b79e492c458f36ccc8b7590",
"assets/assets/images/image%252041.png": "d2152580152d4911102366aea43f737a",
"assets/assets/images/image%252042.png": "88d9091f373cd6432b3e2496829b3449",
"assets/assets/images/image%252043.png": "9af05aab9cd0b55e5e42ba6c54233450",
"assets/assets/images/image%252044%2520(1).png": "ebccb1d804d0af213cbba7b2d3a976b6",
"assets/assets/images/image%252045%2520(1).png": "38ce2a073cf190408bd559120d8b3be8",
"assets/assets/images/image%252050%2520(1).png": "2cf53ec3b152ed9c8c2c7c1516fefc4d",
"assets/assets/images/image%252050.png": "0737990c9d79da737371f9f523cdde34",
"assets/assets/images/image%252051.png": "01cbbb9c781076984fc666ea6fa8e9c5",
"assets/assets/images/image%252052.png": "b86eb3ddc77c04e74796c5d8c9db2146",
"assets/assets/images/image%252053.png": "da1cb20c35c946fbc4bf694a3339b54f",
"assets/assets/images/image%252054.png": "a55604cd6980821d8c2e0625fa3b9cd3",
"assets/assets/images/image%252055.png": "35ad24ca3b6a71f08bbe956d80022681",
"assets/assets/images/image%252057.png": "b45444ce7c0d4cf6d8fc9f77f573e1c7",
"assets/assets/images/image%252060.png": "93a046c676d7db84b2065c1df24cd952",
"assets/assets/images/image%252061.png": "93a046c676d7db84b2065c1df24cd952",
"assets/assets/images/image%252063.png": "31c0eeae79c5ea12fd3fe0387691dc78",
"assets/assets/images/image%25209.png": "258a1d1595b14e0cec5851a091c6b206",
"assets/assets/images/mic%25201.png": "7c94fc8598372efb4c938c3fa4bb3878",
"assets/assets/images/milk.png": "4bea177068b8a5b33ee1d7707c293eb8",
"assets/assets/images/potato.png": "0debf7ec68aa5bdad921d06967e7a04f",
"assets/assets/images/printer%25201.png": "9fc7a10fbf677a7929bd46dff8d31f1a",
"assets/assets/images/search.png": "8d8cdce35b39cdf60941b40c97711627",
"assets/assets/images/shopping-bag%25201.png": "5edc468c5f8111985f59fcdc193742b5",
"assets/assets/images/star.png": "03edb3564f8087f9e0a9bbd9fb304bd9",
"assets/assets/images/timer%25204.png": "91f69bce64c2c71ecd3cf251b4406637",
"assets/assets/images/tomato.png": "48fd38c14b93a8e93e2b60ed4af657d4",
"assets/assets/images/user.png": "69f5788d8d59be2d6747ad23bae09608",
"assets/FontManifest.json": "4d1598cfbf976d0eee5cb0b10a9a8e7c",
"assets/fonts/MaterialIcons-Regular.otf": "215c398cff0477529301a429b89abd12",
"assets/NOTICES": "8348f2f11e2783c9702845c2f435f011",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "2c1555eb31c117a64e8ff919e736c110",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "15abffc0cbd4ed6f05ad96da9993e0c8",
"/": "15abffc0cbd4ed6f05ad96da9993e0c8",
"main.dart.js": "d5a45665e2c9248c9758eaa0c7772df5",
"manifest.json": "2332ee5e6ba74caaed8c6dce9d98780e",
"version.json": "87992a6ac0cde894a49c62ba0d386559"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
