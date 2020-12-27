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

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "favicon.ec075e50.png",
    "revision": "cca25ad41caeb16ad20d545824a18d37"
  },
  {
    "url": "index.html",
    "revision": "41fd459e7d8760755f4972425005e9b6"
  },
  {
    "url": "src.02f46fdc.css",
    "revision": "cb11540491958ef5a92cf86f0054699d"
  },
  {
    "url": "src.b84a11e8.js",
    "revision": "d657a5e7456a4b3f79402e824a27c13d"
  },
  {
    "url": "/",
    "revision": "9f1fdf7f2cd62fae637f943a6893f500"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
