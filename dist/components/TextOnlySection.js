"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var TextOnlySection = function TextOnlySection(_ref) {
  var props = _ref.props,
    styles = _ref.styles;
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      py: 8,
      px: 4,
      backgroundColor: styles.background
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h4",
    sx: {
      color: styles.titleColor,
      mb: 2
    }
  }, props.title), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body1",
    sx: {
      color: styles.subtitleColor
    }
  }, props.text));
};
var _default = exports["default"] = TextOnlySection;