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
    "revision": "40f6b2e1ba7902ab45fca39c114d3940"
  },
  {
    "url": "src.02f46fdc.css",
    "revision": "cb11540491958ef5a92cf86f0054699d"
  },
  {
    "url": "src.f9265682.js",
    "revision": "460b28788fb7265090fd4cd51a214d9c"
  },
  {
    "url": "/",
    "revision": "e2bd9c03a225f73f4e162bb659ea13f1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
