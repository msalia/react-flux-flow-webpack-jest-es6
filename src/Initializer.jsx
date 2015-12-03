/*
 * Applicaiton Initializer
 * @flow
 */

var App = require('App');
var AppActions = require('AppActions');
var AppConstants = require('AppConstants');
var AppDispatcher = require('AppDispatcher');
var ExampleStore = require('ExampleStore');
var React = require('react');
var ReactDOM = require('react-dom');

var {ActionTypes} = AppConstants;

/* Inital entry point and bootstrapper for application */
class Initializer {

    initialize(): void {
        // Perform store initialization
        AppDispatcher.register(action => {
            if (action.type === ActionTypes.INIT_LOAD) {
                var stores = [
                    ExampleStore,
                ];
                AppDispatcher.waitFor(
                    stores.map(store => store.getDispatchToken())
                );

                // Render the application
                ReactDOM.render(
                    <App />,
                    document.getElementById("app-root")
                );
            }
        });

        // send the initializing action
        AppActions.initLoad();
    }

}

var initializer = new Initializer();
initializer.initialize();

module.exports = Initializer;
