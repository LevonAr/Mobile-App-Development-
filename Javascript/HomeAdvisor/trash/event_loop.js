console.log('Message no. 1: Sync');

setTimeout(function() {
   console.log('Message no. 2: setTimeout');
}, 0);

var promise = new Promise(function(resolve, reject) {
   resolve();
});

promise.then(function(resolve) {
   console.log('Message no. 3: 1st Promise');
})

promise.then(function(resolve) {
   console.log('Message no. 3: 1st Promise');
})

console.log('Message no. 5: Sync');
