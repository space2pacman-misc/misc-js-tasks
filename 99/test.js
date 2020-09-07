for(var i = 0; i < 100000000; i++) {}

addEventListener("message", function(data) {
	postMessage(data.data)
	postMessage(i)
})
