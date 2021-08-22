'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d1df5a5b14bd621cb817163fbb67f0e1",
".git/config": "c484e961fb5e3585c45c10f29229de8b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "7acfbd0b95490796a628f29884379f7f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d6990d60a19bea5911980bb83b51f73a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2a7471270ff119c7fa38c81cc6e6cd82",
".git/logs/refs/heads/master": "2a7471270ff119c7fa38c81cc6e6cd82",
".git/logs/refs/remotes/origin/master": "48734a8a5a15d42498e11f99e6ae92a2",
".git/objects/06/522ccbf41682a8919fa23d4e48c410ab7756da": "c8c664833ca90622fe3f285fe3a035fc",
".git/objects/07/3200fe3d7be8a6152aaf339ac8585bf3400d0a": "8d75292dd03b3dc06bd3d8b334dac656",
".git/objects/1d/dcfbe79e2396170cd3607a8bbf795bade4d6d2": "130ecb9cc72cfeef424fe1e2134e09bf",
".git/objects/2b/bed1488aa911d8805121e365e78fb16ae83ce3": "1b67c8bd76dbe96e7f9d6c1eb482707d",
".git/objects/2f/16e4fc749a1ab993d1ef1f5e9d130cccf5ac7e": "d0604ea3caf8bc1bf1c2691d39df8aa8",
".git/objects/49/1794ec2612391558c45f9160d00f91491174bb": "f9372563ba1f4f226e7bf6d8b2f38dbb",
".git/objects/58/8fbd3616d3040d483beed0297a1296d31b250e": "fe6a04be6f3e05d7d1fbb92801b30137",
".git/objects/6f/c7bb5ce239565425614f0886aabbc3497a111d": "657d6c72d6c4f455fca1b9cf4ca9c336",
".git/objects/75/f2b1955670117fccfeb52ab96280e4f54e9bb4": "8f1f8a23e33d5454d0a758cabc77b24d",
".git/objects/78/9513f42497068535384a95d3db458bf60899bd": "94d4c606803d568345d8bdd1c5bd6065",
".git/objects/b6/826cc745b0d4e5f11f43c35e559f3d2f60d916": "dd0773d717a76c6327f5b199b1dac0ea",
".git/objects/cc/b83b256ff234b81cf0bd596e5d0abf15163078": "1a7229ca1f61dde30725c4e09b4824c9",
".git/objects/ce/01a5ef2a61daf8eba1672a86c5a92571c39425": "bb83d64e11fa8c70ec5968795f05acb8",
".git/objects/d0/045ea908c37609280fcefc50674e1b2ad30fd6": "fa79186ffd5f7289d57f9733a7f9a5cc",
".git/objects/d4/cb8e53e0d682f9639c51efd52d44defc6c0b21": "9ed6b6560993b0f121cee77117304528",
".git/objects/e4/02e6f93463030ccfab9d6ebb3b8684d80c6411": "99ba91da567134ab35acb55d232aa761",
".git/objects/eb/0d4a3c0c5f4f4ecc29e315b32a0d5a789c3f5f": "feaefb98c9f53a1a5ac69d3284014c0a",
".git/objects/ed/76ff3425c7895c75281644f340e70004592b1a": "9c7aff163fa7236aea35c0bf0e272ed0",
".git/objects/f9/56d42a8d154a47ed381f3886462b5cc84ca98c": "b5e817e64d0322534e32d14418168a97",
".git/objects/pack/pack-6b11dc63c832748ebd6cde2c79030f013e318f76.idx": "67693fa75018c95fad3936431adb0d6a",
".git/objects/pack/pack-6b11dc63c832748ebd6cde2c79030f013e318f76.pack": "cff5e7141426daca472183cc3f6f561c",
".git/refs/heads/master": "f20f667f6e58217e5e121bc4f66498b4",
".git/refs/remotes/origin/master": "f20f667f6e58217e5e121bc4f66498b4",
"assets/AssetManifest.json": "460c25b60a9206189ae22d536d55d396",
"assets/assets/icons/behance.svg": "1487dff57f5c15131037cb6965a4d0bf",
"assets/assets/icons/check.svg": "bce7a581bb999caac446c9138a57a401",
"assets/assets/icons/download.svg": "8c24d4679cb0c5297277321bf7b65d28",
"assets/assets/icons/dribble.svg": "cf842513f50591eb280695ad14bfa409",
"assets/assets/icons/github.svg": "49b7a0f6543674cc4743ec1a9f02e368",
"assets/assets/icons/linkedin.svg": "2f5e837978e8a6bb595dfd11c8dbd42f",
"assets/assets/icons/twitter.svg": "c09d9f98cb67b0dfc2aa4c63170f2632",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/bg.jpg": "2af160a321eae6ca52a0181b6f689e38",
"assets/assets/images/img001.jpg": "9fb99dc61f4cbe8b3b725c5214d84876",
"assets/assets/images/IMG_7344.jpg": "bb74c3d7c6f5599d40c05a866b31ffd6",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7d2ebf3f1f24524939906cd47ce387c0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8f704f0b49552ea1b9c9c2a33bee5491",
"/": "8f704f0b49552ea1b9c9c2a33bee5491",
"main.dart.js": "11d730525dc1aa69eb78538778ba3ce1",
"manifest.json": "993c91f78f4b47827e21dc4fa38a902e",
"README.md": "4aebe8fa68aa11368b0581d351ce77b0",
"version.json": "1c9fd7f667f0acc698c51d2e29e08cd7"
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
