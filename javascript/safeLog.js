// Safe log
$.log = function() {
	var consoleExists = (typeof(console) == "object") && (typeof(console.log) == "function");
	if (consoleExists) {
		if (navigator.userAgent.toLowerCase().indexOf("applewebkit") != -1) {
			console.log(arguments);
		} else {
			console.log.apply(this,arguments);
		}
	}
};
