
function Emitter () {
	this.initEmitter();
}

Emitter.prototype.initEmitter = function () {
	this.callbacks = {};
};

Emitter.prototype.emit = function (eventName) {
	var callbacks = this.callbacks[eventName];
	if (!callbacks) {
		console.warn('No valid callback specified.');
		return;
	}
	var args = [].slice.call(arguments);
	// Eliminate the first param (the callback).
	args.shift();
	for (var i = 0; i < callbacks.length; i++) {
		callbacks[i].apply(this, args);
	}
};

Emitter.prototype.on = function (eventName, callback) {
	var self = this,
		cbs = this.callbacks[eventName];

	if (eventName in this.callbacks)  {
		if (cbs.indexOf(callback) === -1) {
			cbs.push(callback);
		}
	} else {
		this.callbacks[eventName] = [callback];
	}

	// return off method wrapper func
	return function () {
		self.off(eventName, callback);
	};
};

Emitter.prototype.off = function (eventName, callback) {
	if (!(eventName in this.callbacks)) {
		return;
	}
	var cbs = this.callbacks[eventName],
		ind = cbs.indexOf(callback);
	if (ind === -1) {
		console.warn('No matching callback found');
		return;
	}
	cbs.splice(ind, 1);
};
