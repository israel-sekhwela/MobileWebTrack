navigator.serviceWorker.register('/sw.js').then(function(reg){
	console.log('Success!');
}).catch(function(err){
	console.log('Failure');
});
