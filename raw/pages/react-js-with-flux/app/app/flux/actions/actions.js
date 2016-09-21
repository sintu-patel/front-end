'use strict';

var AppDispatcher = require('../dispatcher/app-dispatcher');
import {data} from '../../components/data.js';

var Actions = {

  updateData: function(payload) {
    AppDispatcher.handleAction({
      actionType: 'GET_DATA',
      data: data[payload.pageNo]
    });
  }
};

module.exports = Actions;
