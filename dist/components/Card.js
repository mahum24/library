"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Card = function Card(_ref) {
  var title = _ref.title,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '8px'
    }
  }, /*#__PURE__*/_react["default"].createElement("h2", null, title), /*#__PURE__*/_react["default"].createElement("div", null, children));
};
var _default = exports["default"] = Card;