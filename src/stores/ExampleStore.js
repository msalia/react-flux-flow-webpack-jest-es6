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
        this.setupActions();
    }

    setupActions() {
        this.addAction(ActionTypes.INIT_LOAD, this.initLoad);
    }

    initLoad(action: Object) {
        this.emitChange();
    }

}

module.exports = new ExampleStore();
