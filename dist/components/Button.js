"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Button = function Button(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return alert('Hi');
    },
    style: {
      padding: '10px',
      fontSize: '16px'
    }
  }, label);
};
var _default = exports["default"] = Button;