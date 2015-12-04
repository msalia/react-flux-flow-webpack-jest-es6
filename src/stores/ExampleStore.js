/*
 * Data Store
 * @flow
 */

var AppConstants = require('AppConstants');
var BaseStore = require('BaseStore');

var {ActionTypes} = AppConstants;

class ExampleStore extends BaseStore {

    constructor() {
        super();
        this._data = {};
        this._setupActions();
    }

    _setupActions(): void {
        this.addAction(ActionTypes.INIT_LOAD, this.initLoad);
    }

    initLoad(action: Object): void {
        this._data = action.data || {};
        this.emitChange();
    }

    getData(): Object {
        return this._data;
    }

}

module.exports = new ExampleStore();
