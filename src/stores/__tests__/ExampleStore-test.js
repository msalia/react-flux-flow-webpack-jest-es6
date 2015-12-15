// Dont mock BaseStore to test the store thoroughly
jest.dontMock('BaseStore');
// Tell jest to not mock the module that we are trying to test
jest.dontMock('ExampleStore');

// Required contants
var AppConstants = require('AppConstants');
var AppDispatcher;
var ExampleStore;
var callback;

var {ActionTypes} = AppConstants;

// Helper functions
function sendAction(actionType, data) {
    callback && callback({ actionType, ...data });
}

describe('Example Store Test', () => {

    var exampleData = { test: 'test' };

    beforeEach(() => {
        AppDispatcher = require('AppDispatcher');
        AppDispatcher.register = jest.genMockFn();
        ExampleStore = require('ExampleStore');
        callback = AppDispatcher.register.mock.calls[0][0];
    });

    // ****DO NOT DELETE****
    // This test will ensure that the store handler is available
    it('is ready for takeoff', () => expect(callback).toBeDefined());

    it('can initialize', () => {
        sendAction(ActionTypes.INIT_LOAD, { data: exampleData });

        expect(ExampleStore.getData()).toEqual(exampleData);
    });

});
