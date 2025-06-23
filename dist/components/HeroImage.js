"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var HeroImage = function HeroImage(_ref) {
  var props = _ref.props,
    styles = _ref.styles;
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      backgroundImage: "url(".concat(props.imageUrl, ")"),
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: styles.titleColor,
      py: 10,
      px: 4,
      textAlign: "center",
      position: "relative"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      backgroundColor: styles.backgroundOverlay,
      p: 5,
      borderRadius: 2,
      display: "inline-block"
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3",
    sx: {
      color: styles.titleColor
    }
  }, props.title), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle1",
    sx: {
      color: styles.subtitleColor,
      mt: 2
    }
  }, props.subtitle), /*#__PURE__*/_react["default"].createElement(_material.Button, {
    sx: {
      mt: 4,
      backgroundColor: styles.buttonBg,
      color: styles.buttonColor,
      px: 4,
      py: 1
    }
  }, props.buttonText)));
};
var _default = exports["default"] = HeroImage;