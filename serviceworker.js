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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about.html",
    "revision": "5f11dbcc655a3aba1bb2d6cd8838545f"
  },
  {
    "url": "app.js",
    "revision": "72c66ab744c0f74b883981c2942d9ba8"
  },
  {
    "url": "assets/icons/mipmap.png",
    "revision": "a9a961d69659bd050575a65e2838319b"
  },
  {
    "url": "assets/icons/site-icon.png",
    "revision": "e5123bf1999c6fed9c360bf502bb9252"
  },
  {
    "url": "assets/icons/zero.png",
    "revision": "d5791714e8cf7ce8e32a981b57164130"
  },
  {
    "url": "contact.html",
    "revision": "feebabb6619b4530c86e603d0a0738fb"
  },
  {
    "url": "css/font-awesome.css",
    "revision": "63a8a3601d8e9c666d6353c9a6fdab0f"
  },
  {
    "url": "css/materialize.css",
    "revision": "9f3e8a29b2552912f6ffe1e45639a14c"
  },
  {
    "url": "css/materialize.min.css",
    "revision": "fba7562ce0e05fd10137a755b7f8d12b"
  },
  {
    "url": "css/style.css",
    "revision": "9ccf46408cd4616c0a55cd33f2a9fe52"
  },
  {
    "url": "db_connect.php",
    "revision": "e2892f534f203e38cdfa709d51f9ba33"
  },
  {
    "url": "font-awesome-4.7.0/css/font-awesome.css",
    "revision": "4bb3dd721c4652feee0953261d329710"
  },
  {
    "url": "font-awesome-4.7.0/css/font-awesome.min.css",
    "revision": "a0e784c4ca94c271b0338dfb02055be6"
  },
  {
    "url": "font-awesome-4.7.0/fonts/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "font-awesome-4.7.0/fonts/fontawesome-webfont.svg",
    "revision": "acf3dcb7ff752b5296ca23ba2c7c2606"
  },
  {
    "url": "font-awesome-4.7.0/fonts/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "font-awesome-4.7.0/fonts/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "font-awesome-4.7.0/fonts/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "font-awesome-4.7.0/fonts/FontAwesome.otf",
    "revision": "0d2717cd5d853e5c765ca032dfd41a4d"
  },
  {
    "url": "font-awesome-4.7.0/HELP-US-OUT.txt",
    "revision": "e5f4d96ed70c0c372ccf7a0d9841ba53"
  },
  {
    "url": "font-awesome-4.7.0/less/animated.less",
    "revision": "7fec23ef95e17ff623af5dd5db0fc87d"
  },
  {
    "url": "font-awesome-4.7.0/less/bordered-pulled.less",
    "revision": "1f57858ac2a7ab59b01088c778f5fb0a"
  },
  {
    "url": "font-awesome-4.7.0/less/core.less",
    "revision": "da355b2c884a067eedd979b445968147"
  },
  {
    "url": "font-awesome-4.7.0/less/fixed-width.less",
    "revision": "6799c9cf7edf54b7432cca85854b0abf"
  },
  {
    "url": "font-awesome-4.7.0/less/font-awesome.less",
    "revision": "62ab0957ccd3369ed07a6d7241e7b9c1"
  },
  {
    "url": "font-awesome-4.7.0/less/icons.less",
    "revision": "ddaa02ea18934d4e03c9978f13311d5e"
  },
  {
    "url": "font-awesome-4.7.0/less/larger.less",
    "revision": "f588164c1a95535137186bbdb0d236c8"
  },
  {
    "url": "font-awesome-4.7.0/less/list.less",
    "revision": "abcbffd56677821190cf4dc72f660dd9"
  },
  {
    "url": "font-awesome-4.7.0/less/mixins.less",
    "revision": "5b203b320a03575de5f369cf49b1e7c2"
  },
  {
    "url": "font-awesome-4.7.0/less/path.less",
    "revision": "fc4e5dec2b323ba7f687b0414a6faecd"
  },
  {
    "url": "font-awesome-4.7.0/less/rotated-flipped.less",
    "revision": "2088e18f446fcf2fe91e5293fc7f2847"
  },
  {
    "url": "font-awesome-4.7.0/less/screen-reader.less",
    "revision": "79f38eb1f3eea913308f49ab5cd663bf"
  },
  {
    "url": "font-awesome-4.7.0/less/stacked.less",
    "revision": "8b7e28e004c785a0a1a73afde547b9e7"
  },
  {
    "url": "font-awesome-4.7.0/less/variables.less",
    "revision": "62803119d3ed114705a50717a53e2639"
  },
  {
    "url": "font-awesome-4.7.0/scss/_animated.scss",
    "revision": "79db4428659752f59630c4388bbaa174"
  },
  {
    "url": "font-awesome-4.7.0/scss/_bordered-pulled.scss",
    "revision": "6e194951ee06dd4cde6f94ed2ec86e47"
  },
  {
    "url": "font-awesome-4.7.0/scss/_core.scss",
    "revision": "d4d62bafcfb00eb1b208acbf895a95a3"
  },
  {
    "url": "font-awesome-4.7.0/scss/_fixed-width.scss",
    "revision": "e6fac8be09e2d3dc38fe9248b2eb0472"
  },
  {
    "url": "font-awesome-4.7.0/scss/_icons.scss",
    "revision": "e624b0b5cfd7ac3fcb4eefab15f983f6"
  },
  {
    "url": "font-awesome-4.7.0/scss/_larger.scss",
    "revision": "8b00a4d732107fc1844ea18314c3cff9"
  },
  {
    "url": "font-awesome-4.7.0/scss/_list.scss",
    "revision": "c33b069275c5877a4b3f144684664bf5"
  },
  {
    "url": "font-awesome-4.7.0/scss/_mixins.scss",
    "revision": "f07164e3950c5dac464e3f5f9e14858d"
  },
  {
    "url": "font-awesome-4.7.0/scss/_path.scss",
    "revision": "123f2994215b526902be3fa0596c8d13"
  },
  {
    "url": "font-awesome-4.7.0/scss/_rotated-flipped.scss",
    "revision": "9a3f214edda562bf122802da5c686a12"
  },
  {
    "url": "font-awesome-4.7.0/scss/_screen-reader.scss",
    "revision": "b4b497bdd83f580fa3942390763cc270"
  },
  {
    "url": "font-awesome-4.7.0/scss/_stacked.scss",
    "revision": "638e8ae84e80a3428e9446578a7ed6a0"
  },
  {
    "url": "font-awesome-4.7.0/scss/_variables.scss",
    "revision": "547c9f94a31ced29cbc7f029d700a639"
  },
  {
    "url": "font-awesome-4.7.0/scss/font-awesome.css",
    "revision": "63a8a3601d8e9c666d6353c9a6fdab0f"
  },
  {
    "url": "font-awesome-4.7.0/scss/font-awesome.scss",
    "revision": "bc5096695c4092d06d77da5329254590"
  },
  {
    "url": "functions.php",
    "revision": "3a4859f51af52ac24e7b14973f86af1c"
  },
  {
    "url": "includes/psl-config.php",
    "revision": "aabd7a6afa689ea551935b68f0a6e329"
  },
  {
    "url": "index.html",
    "revision": "4757fd3775ee8a62d948eab4f3560082"
  },
  {
    "url": "js/init.js",
    "revision": "9831cd6a3d61d0cc58b5c4aad9085325"
  },
  {
    "url": "js/materialize.js",
    "revision": "f97480c1baa9dc7b7af3ffc5bdc5f17c"
  },
  {
    "url": "js/materialize.min.js",
    "revision": "d923fe16aca408daba23ca2c7795e08b"
  },
  {
    "url": "login.html",
    "revision": "f76589116cbbf89f27d6c11dab100568"
  },
  {
    "url": "manifest.json",
    "revision": "3d2453be1aa2147b33c3dfa36187c30c"
  },
  {
    "url": "package-lock.json",
    "revision": "d0779228dabcc2c624294bffcbad88a5"
  },
  {
    "url": "package.json",
    "revision": "11f0ec7c88052f1732f9c0486cdacfdc"
  },
  {
    "url": "sass/style.scss",
    "revision": "519193aee7145eb940696335d14959c4"
  },
  {
    "url": "sendMessage.php",
    "revision": "26494bdc79eafc10a54c7a7b4ffcf2db"
  },
  {
    "url": "signin.html",
    "revision": "ee7d3fc83ab36989abebfcbf4c5254a4"
  },
  {
    "url": "workbox-config.js",
    "revision": "175ddf6d45e91ec8b3d2e0016b3c3a46"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
