const counts = {
  installs: 0,
  activations: 0,
  fetches: 0
}

self.addEventListener('install', event => {
  console.log('install', ++counts.installs)

  // self.skipWaiting()
})

self.addEventListener('activate', event => {
  console.log('activate', ++counts.activations)

})

self.addEventListener('fetch', event => {
  console.log('fetches', ++counts.fetches)
})