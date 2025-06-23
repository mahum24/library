"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ImageLeftContentRight = function ImageLeftContentRight(_ref) {
  var props = _ref.props,
    styles = _ref.styles;
  return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 4,
    sx: {
      py: 8,
      px: 4,
      backgroundColor: styles.background
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    component: "img",
    src: props.imageUrl,
    alt: "Section Image",
    sx: {
      width: "100%",
      borderRadius: 2
    }
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h4",
    sx: {
      color: styles.titleColor,
      mb: 2
    }
  }, props.title), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body1",
    sx: {
      color: styles.subtitleColor,
      mb: 2
    }
  }, props.text), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    sx: {
      backgroundColor: styles.buttonBg,
      color: styles.buttonColor
    }
  }, props.buttonText)));
};
var _default = exports["default"] = ImageLeftContentRight;