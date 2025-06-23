"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var NewsletterSignup = function NewsletterSignup(_ref) {
  var props = _ref.props,
    styles = _ref.styles;
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      py: 10,
      px: 4,
      backgroundColor: styles.background,
      textAlign: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h5",
    sx: {
      color: styles.titleColor,
      mb: 2
    }
  }, props.title), /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    variant: "outlined",
    placeholder: "Enter your email",
    sx: {
      mr: 2,
      backgroundColor: "#fff"
    }
  }), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    sx: {
      backgroundColor: styles.buttonBg,
      color: styles.buttonColor
    }
  }, props.buttonText));
};
var _default = exports["default"] = NewsletterSignup;