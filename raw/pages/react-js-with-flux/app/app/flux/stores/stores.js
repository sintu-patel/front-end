'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');

var _appData = {};

function loadAppData(data) {
  _appData = data
}

var AppStore = _.extend({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit('change');
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },
  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  },
  getData: function() {
    return _appData;
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {
    case 'GET_DATA':
      loadAppData(action.data);
      break;
    default:
      return true;
  }

  AppStore.emitChange();
  return true;

});

module.exports = AppStore;
