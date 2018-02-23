"use strict";
var precacheConfig = [
        ["/0.chunk.c7c2f.js", "3a08b38acb3cd86750cd5b6ff869bb1a"],
        ["/1.chunk.c5ac0.js", "3bbf2ac67e14e199391985624b1da004"],
        ["/21e7ee3db5dfc5671c3355a4f2182331.jpg", "21e7ee3db5dfc5671c3355a4f2182331"],
        ["/3833fc531ca259e9728369a2fa06d3c0.jpg", "3833fc531ca259e9728369a2fa06d3c0"],
        ["/809b24734d6b08040735c339cf532402.jpg", "809b24734d6b08040735c339cf532402"],
        ["/assets/icon.png", "cf3fdf7af60a294d6d3f48cb7ad82488"],
        ["/bundle.1ce73.js", "d09eada9edae9423fdbfb372f5166bd0"],
        ["/c5b013ac2e3e57111d4455c1ad466dd7.png", "c5b013ac2e3e57111d4455c1ad466dd7"],
        ["/favicon.ico", "94eae66bebbd6bbfe48a669f245048ac"],
        ["/index.html", "ec4eda705cf6042320afa5d0eafb6af7"],
        ["/manifest.json", "310a916537fc6f66deb88310b13a2759"],
        ["/style.ae313.css", "a5bd37c2cdd2cb13c522d89236e41f26"]
    ],
    cacheName = "sw-precache-v3-sw-precache-webpack-plugin-" + (self.registration ? self.registration.scope : ""),
    ignoreUrlParametersMatching = [/^utm_/],
    addDirectoryIndex = function (e, n) {
        var t = new URL(e);
        return "/" === t.pathname.slice(-1) && (t.pathname += n), t.toString()
    },
    cleanResponse = function (e) {
        return e.redirected ? ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function (n) {
            return new Response(n, {
                headers: e.headers,
                status: e.status,
                statusText: e.statusText
            })
        }) : Promise.resolve(e)
    },
    createCacheKey = function (e, n, t, r) {
        var a = new URL(e);
        return r && a.pathname.match(r) || (a.search += (a.search ? "&" : "") + encodeURIComponent(n) + "=" + encodeURIComponent(t)), a.toString()
    },
    isPathWhitelisted = function (e, n) {
        if (0 === e.length) return !0;
        var t = new URL(n).pathname;
        return e.some(function (e) {
            return t.match(e)
        })
    },
    stripIgnoredUrlParameters = function (e, n) {
        var t = new URL(e);
        return t.hash = "", t.search = t.search.slice(1).split("&").map(function (e) {
            return e.split("=")
        }).filter(function (e) {
            return n.every(function (n) {
                return !n.test(e[0])
            })
        }).map(function (e) {
            return e.join("=")
        }).join("&"), t.toString()
    },
    hashParamName = "_sw-precache",
    urlsToCacheKeys = new Map(precacheConfig.map(function (e) {
        var n = e[0],
            t = e[1],
            r = new URL(n, self.location),
            a = createCacheKey(r, hashParamName, t, !1);
        return [r.toString(), a]
    }));

function setOfCachedUrls(e) {
    return e.keys().then(function (e) {
        return e.map(function (e) {
            return e.url
        })
    }).then(function (e) {
        return new Set(e)
    })
}
self.addEventListener("install", function (e) {
    e.waitUntil(caches.open(cacheName).then(function (e) {
        return setOfCachedUrls(e).then(function (n) {
            return Promise.all(Array.from(urlsToCacheKeys.values()).map(function (t) {
                if (!n.has(t)) {
                    var r = new Request(t, {
                        credentials: "same-origin"
                    });
                    return fetch(r).then(function (n) {
                        if (!n.ok) throw new Error("Request for " + t + " returned a response with status " + n.status);
                        return cleanResponse(n).then(function (n) {
                            return e.put(t, n)
                        })
                    })
                }
            }))
        })
    }).then(function () {
        return self.skipWaiting()
    }))
}), self.addEventListener("activate", function (e) {
    var n = new Set(urlsToCacheKeys.values());
    e.waitUntil(caches.open(cacheName).then(function (e) {
        return e.keys().then(function (t) {
            return Promise.all(t.map(function (t) {
                if (!n.has(t.url)) return e.delete(t)
            }))
        })
    }).then(function () {
        return self.clients.claim()
    }))
}), self.addEventListener("fetch", function (e) {
    if ("GET" === e.request.method) {
        var n, t = stripIgnoredUrlParameters(e.request.url, ignoreUrlParametersMatching),
            r = "index.html";
        (n = urlsToCacheKeys.has(t)) || (t = addDirectoryIndex(t, r), n = urlsToCacheKeys.has(t));
        var a = "index.html";
        !n && "navigate" === e.request.mode && isPathWhitelisted(["^(?!\\/__).*"], e.request.url) && (t = new URL(a, self.location).toString(), n = urlsToCacheKeys.has(t)), n && e.respondWith(caches.open(cacheName).then(function (e) {
            return e.match(urlsToCacheKeys.get(t)).then(function (e) {
                if (e) return e;
                throw Error("The cached response that was expected is missing.")
            })
        }).catch(function (n) {
            return console.warn('Couldn\'t serve response for "%s" from cache: %O', e.request.url, n), fetch(e.request)
        }))
    }
});