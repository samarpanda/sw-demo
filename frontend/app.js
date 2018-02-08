if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js')
    .then(registration => {
      console.log('REGISTERED!!')
      console.log(registration)
    })
    .catch(err => {
      console.log("Couldn't register", err)
    })
} else {
  //Doesn't exist
  console.log('serviceworker not supported')
}