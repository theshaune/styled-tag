'use strict';

var _react = require('react');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (styles) {
  return function (props) {
    return (0, _react.createElement)(_styledComponents2.default[props.tag || 'div'](styles), props, props.children);
  };
};