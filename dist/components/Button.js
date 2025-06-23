"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Button = function Button(_ref) {
  var label = _ref.label,
    action = _ref.action;
  console.log("Received action:", label, action);
  return /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: action,
    variant: "contained",
    size: "medium",
    sx: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: '#1976d2'
    }
  }, label);
};
var _default = exports["default"] = Button;