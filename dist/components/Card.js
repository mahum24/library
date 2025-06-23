"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Card = function Card(_ref) {
  var title = _ref.title,
    description = _ref.description;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }
  }, title && /*#__PURE__*/_react["default"].createElement("h2", {
    style: {
      margin: '0 0 10px'
    }
  }, title), description && /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      marginBottom: '10px'
    }
  }, description));
};
var _default = exports["default"] = Card;