'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b13d9e3935b3509ea37a052f0dc87d44",
"version.json": "90dc643b46ab20c187cdb6bbd1e15a75",
"index.html": "6930d36b7c7b7f915d5604795dc5e9a7",
"/": "6930d36b7c7b7f915d5604795dc5e9a7",
"main.dart.js": "75afff67e67a7edc7c2d37fa60e3318f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "2d8c58b703b675b59863d09a215f716d",
"main.dart.mjs": "fbc4ab24942ba7054f2ec4f6c0fdbc22",
"icons/Icon-192.png": "4d30b7889da9c627e5a023583f42d200",
"icons/Icon-maskable-192.png": "4d30b7889da9c627e5a023583f42d200",
"icons/Icon-maskable-512.png": "d2b2f56a36910d7f8ec77a40f7f1f0bd",
"icons/Icon-512.png": "d2b2f56a36910d7f8ec77a40f7f1f0bd",
"manifest.json": "80c02cd5e096ec60da546c1b892bc2ea",
"main.dart.wasm": "d5c8f97017cf419c1489b9f7af403794",
"assets/AssetManifest.json": "2e5de697d92ef97a2a32f7f0b90761c0",
"assets/NOTICES": "995eb8d11bf9b656583252f20e423d07",
"assets/FontManifest.json": "e044d1efa7a5b9bd1701639b7a9c4008",
"assets/AssetManifest.bin.json": "3c880adb6f39d41d782bdfb21b51abfe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b7f39ffbe16db5b2ded88d45a6d7e51a",
"assets/fonts/segoe_cufonfonts/Segoe%2520UI%2520Bold.ttf": "65099f98c7cb19b3dac57b15a6a708cf",
"assets/fonts/segoe_cufonfonts/Segoe%2520UI.ttf": "0e7e9a9b5c4abaadef7bc8f4e4574084",
"assets/fonts/segoe_cufonfonts/Segoe%2520UI%2520Bold%2520Italic.ttf": "676a12075e14377f6f44a3e29b4d72af",
"assets/fonts/segoe_cufonfonts/Segoe%2520UI%2520Italic.ttf": "5eb716ee36ae3ea66de512bcb63af3d8",
"assets/fonts/MaterialIcons-Regular.otf": "66d4f5d2465bced74f86e2a1ae875c54",
"assets/assets/images/error_images.jpg": "5b41f2b889a6d4361ab4cc788cec081b",
"assets/assets/images/dashboard.png": "c6ed5cc21af529c072fad050d1d4602e",
"assets/assets/images/empty.png": "c4b907da6377130afc05f9986c05e5b1",
"assets/assets/images/city.png": "bad412febdbdb5158a44bb98a891c903",
"assets/assets/images/web_logo_transparent.png": "88bd7429fedd8b532473dbc9264697ee",
"assets/assets/images/social-network.png": "c395c2903697b1afb432907147c97773",
"assets/assets/images/app_logo.png": "08f21c22faeb880309d3f1aaea6aa1d2",
"assets/assets/images/web_logo.png": "9331bf7e11400b467511d4241f35a711",
"assets/assets/images/network.png": "8bc3ce31046f71233b434f9266674964",
"assets/assets/svg_icons/asset_icon.svg": "bc0485776537d282a08d3c3ac9c0193b",
"assets/assets/svg_icons/admin_icon.svg": "f7707e5f2666a48ad5bf7b74011346be",
"assets/assets/svg_icons/edit_icon.svg": "d4a18be5b73c786a77bcdacde683953c",
"assets/assets/svg_icons/tasks_icon.svg": "ce9eb43fdc21a7e0dffab58ca297cbb6",
"assets/assets/svg_icons/task_icon.svg": "534e1942c92be8a8fd0eaf9d8cdfaf3a",
"assets/assets/svg_icons/profile_icon.svg": "50a35e976ef888c560d1d1a1852cc2ed",
"assets/assets/svg_icons/sales.svg": "f57762eac60967fa07b15f2ef0bc4edd",
"assets/assets/svg_icons/google_icon.svg": "d677415d7c9c5baea125e867d6d78c2f",
"assets/assets/svg_icons/projects_icon.svg": "804798a2d3702fe4bbaae0138e063627",
"assets/assets/svg_icons/asset_container.svg": "ba781261b754f9cce63d6ea50f522a55",
"assets/assets/svg_icons/complete_icon.svg": "52e1bad3b29c06a9ccc9294b3b8daf9c",
"assets/assets/svg_icons/lock_icon.svg": "0a9178c4c90a5aac1637910bac436ad3",
"assets/assets/svg_icons/graph_icon.svg": "4d9e8fb4a3c138dba68de2a7c193afff",
"assets/assets/svg_icons/human_resource.svg": "00bffcad8cae600b2b8d573cfef08a74",
"assets/assets/svg_icons/sign_in_icon.svg": "8cc4258cd4657991afd30b52aecf55ff",
"assets/assets/svg_icons/filter_icon.svg": "3a6b01a47b4897621aab150796a273df",
"assets/assets/svg_icons/notification_icon.svg": "07725b0467b420fe12e4b2584ccc3fa5",
"assets/assets/svg_icons/sign_up_image.svg": "00602f52fc0b711c51178e35d6b6208b",
"assets/assets/svg_images/loading.json": "3602f57316528e1f97155943ad8316c8",
"assets/assets/svg_images/dashboard.svg": "b5adee8d695b7506498a55ae3491e84e",
"assets/assets/lotie/loading.json": "34814a21f9bcf4c2a96bae4668732b4b",
"assets/assets/lotie/no_internet.json": "5e63f1271475d4f71efacd0745fb4644",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
