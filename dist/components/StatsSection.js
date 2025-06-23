"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var StatsSection = function StatsSection(_ref) {
  var props = _ref.props,
    styles = _ref.styles;
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      py: 10,
      px: 4,
      backgroundColor: styles.background
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 4
  }, props.stats.map(function (stat, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
      item: true,
      xs: 12,
      md: 3,
      key: index
    }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      variant: "h5",
      sx: {
        color: styles.titleColor
      }
    }, stat.number), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      variant: "body2",
      sx: {
        color: styles.subtitleColor
      }
    }, stat.label));
  })));
};
var _default = exports["default"] = StatsSection;