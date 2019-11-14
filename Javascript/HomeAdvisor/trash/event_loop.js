console.log('Message no. 1: Sync');

setTimeout(function() {
   console.log('Message no. 2: setTimeout');
}, 0);

var promise = new Promise(function(resolve, reject) {
   resolve();
});
