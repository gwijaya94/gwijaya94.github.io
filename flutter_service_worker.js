'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "905351ec83b4232ed0bfed74cc487e3b",
".git/config": "c484e961fb5e3585c45c10f29229de8b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "34944423fff729a359b29929f2a4b320",
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
".git/index": "f4d87b939b3e1926d555c5942fae061e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "304cc8ce66297b95223752c6cb0df2f4",
".git/logs/refs/heads/master": "304cc8ce66297b95223752c6cb0df2f4",
".git/logs/refs/remotes/origin/master": "87f89e56c720662457060a875d68d605",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/0e/d41579ccb9c34546aeb1afbea555c2e385ac6a": "53766a5c2b3681ee7653332fffcb7cf0",
".git/objects/12/8cd6702e439dea2ab16ee652fed147186ef82d": "70f81fd9958e11592c88617f2da51497",
".git/objects/14/679f1e07351652752770e352a73f89163e5d29": "48f84440c5d00148430aa8d0648dc8c2",
".git/objects/1e/2912d4ac55164980e7921e532e673459fc9b69": "faff86b6d9da4c90cbec92c3c4857658",
".git/objects/1f/00121ddd0556a635f38e27e9586add1294437e": "d0f17b1769717740729d8010e0c64dff",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/38676e6953dc023cc9716c42b9dedd6d371f49": "65bbb5c3a9b5cdd3e8be8d526a3f10fc",
".git/objects/23/72e69985627b1b56660e8181d6a3fc518f8922": "b7eb8bb45e9a1ed63d32c63590fe1d55",
".git/objects/24/b7722dd481e13bc3128cd8f014a7894284860c": "fb84ec667c695589e70c563138134b53",
".git/objects/27/792435a32cbbac4db873b6aca0921c4ef4a4cf": "fc081ef43173b74b930da375307897bb",
".git/objects/2a/6dc0ea175b8983df13df939169d2cc161fb3e5": "5acdc68f14ce54c3c8020d260da646dd",
".git/objects/31/da52288e131053afbe9e57a879dc2b5aee4190": "3db31b72a8aacee33de5c359eb27e9cb",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3b/9c77060eb868f306b3e6cf0beb68fb88e74b04": "9199450278e80bc3af744fc26f4110bd",
".git/objects/3f/580ebedde34467dc4e92a46fa1211e05e357b9": "c20f783b8362d1ae38d187facaaf0810",
".git/objects/40/149cb77e53456dacb70291a459151be96ebe01": "c15e938907d261a2a551b92997023e72",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4c/c28e19963b291b2a6557f32fc6b4c02f6c9594": "15bdc923ffd9903306b3393ade2763d3",
".git/objects/50/f59fb3f3258355cdad5d17620fd9efab076573": "811ec5312e8708e95b851977456946b8",
".git/objects/52/e5eeabf202118faee85843764cde50019d5f0f": "d2116bf6b53840bab59896cbf30b54ff",
".git/objects/55/456295b3f19915380fa8d5c4c99db2b034bbc9": "08214898a93bbc3eefc8f47fb838b857",
".git/objects/57/f30844c5f3b6938555d10b1750bf3471f7f46b": "8dcbe22e5e425c9fbf6fb8b8a805411a",
".git/objects/5a/814e334aeeca2479dfc0b1874cd887e6beb09e": "ad1d0e3e7e3101fcd6638ee7954a0389",
".git/objects/5f/9d7c57da7331e7f28a07c194dbf1ab32499560": "3a911eeb20b145f25a37133f93a8d51a",
".git/objects/62/605cbf670a075f3e5caf43395320559acb6164": "0721c26722f978e2b45b70da626d05de",
".git/objects/63/ae91781b27ac492da799ae4010e2a6bd0c1183": "5fb3a33e244995a80bc868ba08d2ca4b",
".git/objects/6b/12baec0300f9e235f21c7357efe88ba15c4f43": "8321a45b6f8cd9534c79ad067479d735",
".git/objects/6f/c2b927928fdb5c29346145cb32680fb970ff71": "8ac7da517a0ad46dd842998beb570a73",
".git/objects/71/ff460fcb17c8f1f6154144871a622394abb432": "b55e6dc074ba86605fd77a136dd40595",
".git/objects/75/02563324b5a6091e3594dde512f4b31d05b46f": "1bae372d4f4ecae5fcf0e6dee1a72f21",
".git/objects/78/5a64d38edad76e0acf2cfe40a6952564a592d3": "0736621c94441b1c32eac13d6179cee5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/1edad5da7c885453cfbc99891e802983e2d793": "9377b973662434e6e0efc14df2ab05cc",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/86/5f78709c046af2f747a5e5acbe362b7221b1b6": "5e4b021646a01186daba93494db2acf6",
".git/objects/86/ec18fe26fa1e2048898e5fbe3f78b072ba6c4c": "9927642a2c047723ce7cec85ea0ac183",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/cb7b9e30f1e9a70468a95f5699c83ed44202f7": "3460df3f36e277920e57cb3ea24212f2",
".git/objects/90/98c8d4fa4cc79afdf1698e0cfd0dfbe6f67b1d": "ed6b7dca099106ce783eab0654abeff0",
".git/objects/91/e917a866783d2204dc09fbcf39f0db33863519": "d9ef6b57dda6b7ffea71a5d648090419",
".git/objects/93/42fc5eb834c719366e9acf778f6b75f673b737": "d07b72bfceea0fdcbe87a7e4939c9f8b",
".git/objects/96/71e0fd0ff5d0124f91c95fa7eb25e8b58f0009": "265e58d8fd65737a405cd3f8ad09d40b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/9c9cb4be83194eefca83c5c7c280590240146c": "5bcb4e8c60fbff08edcf0c9c035695ef",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/b1/e63a4f926773bac2354f73e4a9955b00bbaf48": "d1730aefca1b29ea5cae8dca756ea0b1",
".git/objects/b2/04561e7b7d87ce7b6f3fd031a1e9b1db67816b": "0b85c4f4c2694c6ca3b41f751d0b276f",
".git/objects/b2/76c256cffd2c5f3a3f7b254508a31361e34285": "3bb49b58b5c3aa7c01095bb4b71daf55",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/dd8dd2f898ad58b0995720a47db3993648d0d1": "27f817fbf7052435fd693cc8a810c630",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/bf/2253c59d589c1e9c0e7f1b49e7a1b4d22f8a0d": "e188bd467b5009db306b1a4307ddb3a0",
".git/objects/c0/f61e97bf8a2847de1757a751d55617e292f947": "2e3175545e52e749adca5d15ef61b73c",
".git/objects/c4/2ab57d682f245ec3b7f6a3286a68961b87cc02": "b8ff1057e73543dc172d01218567e5a0",
".git/objects/c5/f701de7aa4b393f613cee47641b22acad7bf86": "8e083b95e7b42982caa5730a1a2a191e",
".git/objects/c9/33cff80caf478aeff57d534262c17b0bc3356d": "c5a770dbc9d00a4d3aef7990b15f5a8b",
".git/objects/ca/4b412d9b09f1ff124fa699da3d3487574dd24c": "bf7ce0704adce89f79f99fdd1f0af2a6",
".git/objects/ce/99712ba5f01fbdf456e891a2c99f280260b4a3": "8bd1d586943da02d37498b8372a3cc36",
".git/objects/d3/11f3688f918753f9fbbf93dc5bcadf28d96670": "573c8754a9b1b865e2b513557d1cfd95",
".git/objects/d7/1547613eff604d0e77e332c9a8ae8b920860f7": "41b02b8552bafa321c9a140d614f9deb",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/dd/69fd19a7d31d6e18754cfc687183c48d7fa673": "5a354eea3fb606baf71309e3bd04b6b2",
".git/objects/e2/67147df5229e426e39aa0844d57f0dc53271ab": "1416b13107604ac305c8b6f525b2c091",
".git/objects/e2/b241ec4b36ef165548426ea09634fcc1e68d96": "4e46bd22a239401ed1cd06386c817e29",
".git/objects/e4/27d58b9fceae30485530e5c2807eaf3cbba0d7": "d78bcbfa20dc5060e99240d4879b65de",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/254e0f7f61285eb6746f9cff9e1b810f365dba": "c16b390f53e51e55c39a1ba26dcf8c9d",
".git/objects/eb/820c7275612420b3570a4af90f6d71a789a206": "2760b70c01bd47ba2c66a5a747ee7643",
".git/objects/ec/0a10729fce7ad51e94d00d73684b7498f93ffd": "470f84dda11ba07ee9eb077ef6bf224d",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f7/333084d4fe83caf2535d3c265cd2164e3f9648": "44dec0b647561a704d80f7a353c74c3d",
".git/objects/fa/29e8ce2d86fba0effe3c4ee8a6fa6a049d7134": "c9da3708f4ac6fc9c6d60499ba2d148f",
".git/objects/fe/3a11eab6a3a7ce173219340996ecbfcece0a6d": "0214d6724b15444a8612fe92e1bef222",
".git/ORIG_HEAD": "d3efd1e758039f9ec4e34b7a0b0112cc",
".git/refs/heads/master": "3f8377a7c7fa31167f4bf0231bf4778b",
".git/refs/remotes/origin/master": "3f8377a7c7fa31167f4bf0231bf4778b",
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
"assets/NOTICES": "2c348b8e4ea7cbf4248e67c07e6bda4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "525cd255e030e078c59d4ca356dea56b",
"/": "525cd255e030e078c59d4ca356dea56b",
"main.dart.js": "d6a4890a1d88e66a896ccb0b2d1a1226",
"manifest.json": "993c91f78f4b47827e21dc4fa38a902e",
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
