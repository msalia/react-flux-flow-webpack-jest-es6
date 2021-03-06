/*
 * Application Actions
 * @flow
 */

var AppConstants = require('AppConstants');
var AppDispatcher = require('AppDispatcher');

var {ActionTypes} = AppConstants;

class AppActions {

    dispatch(actionType: string, data?: Object) {
        AppDispatcher.dispatch({ actionType, ...data });
    }

    initLoad(data?: Object) {
        this.dispatch(ActionTypes.INIT_LOAD, data);
    }

};

module.exports = new AppActions();
