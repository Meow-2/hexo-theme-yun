/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0d52dc09176606fb1b379560b9f30ef7"
  },
  {
    "url": "about.html",
    "revision": "f811bcde793ee6a63d7c0e330532289f"
  },
  {
    "url": "assets/css/0.styles.08a0540f.css",
    "revision": "3f1cf95f285c5d73fc435b716670412d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.986af9d6.js",
    "revision": "8d07197e0e8ffe74ab8db0680dd8ed31"
  },
  {
    "url": "assets/js/11.28a1b3a6.js",
    "revision": "83df86d6c4a946c2638759a669559fac"
  },
  {
    "url": "assets/js/12.5fd97cf6.js",
    "revision": "bb57067cdfdb151bf29302b1576ff985"
  },
  {
    "url": "assets/js/13.09db7eea.js",
    "revision": "3fe7aad03328d4d7050ea713c24f29e0"
  },
  {
    "url": "assets/js/14.c1170179.js",
    "revision": "98d8b33ae4dd390152c24f39f777563b"
  },
  {
    "url": "assets/js/15.2d278adf.js",
    "revision": "969ec4734b992124e9f621a39f31c53b"
  },
  {
    "url": "assets/js/16.9759059d.js",
    "revision": "9e662ff2d19be0fa9b43e352c43b4926"
  },
  {
    "url": "assets/js/17.23774980.js",
    "revision": "271c1bf4db03274f85479f089e6d5737"
  },
  {
    "url": "assets/js/18.1a89581b.js",
    "revision": "8ee614d4c81f4cdda1ebecf6b61c7a34"
  },
  {
    "url": "assets/js/19.6247161d.js",
    "revision": "4f1807d0dc6e3c755ff9f9842d1dbc34"
  },
  {
    "url": "assets/js/2.c8e318ee.js",
    "revision": "e1f218e12637a8884888842fc51279d9"
  },
  {
    "url": "assets/js/20.c46fab6a.js",
    "revision": "0a6664afcec81aa45d5e74b459bbc73c"
  },
  {
    "url": "assets/js/21.564c4976.js",
    "revision": "629f3d2052785cd2a546fadec468edf1"
  },
  {
    "url": "assets/js/22.3b48eab1.js",
    "revision": "6e930c27f8ee76525cd6111ee8136a51"
  },
  {
    "url": "assets/js/23.ee93132b.js",
    "revision": "00c38376d9c112d482f5017208c510c4"
  },
  {
    "url": "assets/js/24.485409c5.js",
    "revision": "c8467897aceccc49d7355dcdc1a76b86"
  },
  {
    "url": "assets/js/25.e4ea53f1.js",
    "revision": "b0e3a6f56ec0e1b33d5fbbc0b0e8f9fe"
  },
  {
    "url": "assets/js/26.efbed168.js",
    "revision": "f8297d743b6af929f87707f17e0d01ed"
  },
  {
    "url": "assets/js/27.b083e58b.js",
    "revision": "fe1a1eaf2e5f5ba562b3be4afe8a3534"
  },
  {
    "url": "assets/js/3.636665fe.js",
    "revision": "a4ead256bede2f71f22b73488497aed5"
  },
  {
    "url": "assets/js/4.b3719a29.js",
    "revision": "b8c9e78403bf0c6be59a1d7e58043579"
  },
  {
    "url": "assets/js/5.09d06dfa.js",
    "revision": "0ba187f2ee57db2931fc864b5958665f"
  },
  {
    "url": "assets/js/6.a2b0b332.js",
    "revision": "2a6a1b7a4ede9558423a8a608b62ba3e"
  },
  {
    "url": "assets/js/7.7e31cc32.js",
    "revision": "9191d0227b6c7c55a50296c1df51c492"
  },
  {
    "url": "assets/js/8.917805ff.js",
    "revision": "4417099c1a4238e8600d2463bb824e3b"
  },
  {
    "url": "assets/js/9.1b223ebc.js",
    "revision": "24700ad8b668545992064f5762bcec0b"
  },
  {
    "url": "assets/js/app.3a2da09c.js",
    "revision": "3948547265f98fd4d33b393963912838"
  },
  {
    "url": "demo.html",
    "revision": "9d00952dd141b80cc795ae2b94da7ed8"
  },
  {
    "url": "en/about.html",
    "revision": "170459f1e2d0c36ce081d1ec6c3832da"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "e95c02e00a621010fd4ee7320c7da39a"
  },
  {
    "url": "en/guide/config.html",
    "revision": "bb7b23de34cf79ce6c16a6d8847a5a78"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "eb563538ca63acc51618bbf9eb975a73"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "2d2f9ac302b9ae23861181fb44d35d79"
  },
  {
    "url": "en/guide/index.html",
    "revision": "cd451f693d67f6a550ac7d3d9a4905d6"
  },
  {
    "url": "en/guide/page.html",
    "revision": "70da6088ca54f99451a60ac42158a40e"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "375bce37384f0d06a1603187e737ee55"
  },
  {
    "url": "en/index.html",
    "revision": "f00d0e99642505a926ad149529b6b040"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "99046c709779d890bb199714e472a3d1"
  },
  {
    "url": "guide/config.html",
    "revision": "9de31e890e12de414661c994d0f2b23f"
  },
  {
    "url": "guide/faq.html",
    "revision": "78c79776663ce669c9fea190f069e44a"
  },
  {
    "url": "guide/icon.html",
    "revision": "c047fdf475ae1d23fc8decddd7151e5e"
  },
  {
    "url": "guide/index.html",
    "revision": "bc391581ba0399810a89c8db9aab7459"
  },
  {
    "url": "guide/migrate.html",
    "revision": "084ff280aad44bf46e00403d0d27ada6"
  },
  {
    "url": "guide/page.html",
    "revision": "161ca6b58648ad1483f4d369c1b6d909"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "b5777b40e162e130a6b701d77da4d347"
  },
  {
    "url": "index.html",
    "revision": "de19e4cd35567388c876e3bdda35e343"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
