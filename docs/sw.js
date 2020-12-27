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
    "revision": "ca22f51c1e5af50851f6eb80fa0147a2"
  },
  {
    "url": "src.05ab8499.css",
    "revision": "0ecbba21dd36e676a24736788c9b5f9a"
  },
  {
    "url": "src.4f0803dc.js",
    "revision": "edd3de8383a03776e3542a1ed7e8bd67"
  },
  {
    "url": "/",
    "revision": "06618538a694968bb1d5a984fdfeac82"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
