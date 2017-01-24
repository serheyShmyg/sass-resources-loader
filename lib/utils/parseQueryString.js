'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (queryString) {
  if (!queryString || queryString === '?') {
    return {};
  }

  return queryString.slice(1).split('&').reduce(function (prev, queryItem) {
    var queryArr = queryItem.split('=');

    prev[queryArr[0]] = queryArr[1];

    return prev;
  }, {});
};