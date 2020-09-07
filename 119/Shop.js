class Shop {
	constructor() {
		this._store = null;
	}

	setStore(value) {
		this._store = value;
	}

	getStore() {
		return this._store;
	}
}

module.exports = new Shop();