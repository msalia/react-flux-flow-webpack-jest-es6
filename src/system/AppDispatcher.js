/*
 * Application Dispatcher
 * @flow
 */

var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = action => {
    this.dispatch({ source: 'VIEW_ACTION', action });
};

module.exports = AppDispatcher;
