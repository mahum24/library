"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SearchBar = function SearchBar(_ref) {
  var _styles;
  var query = _ref.query,
    actions = _ref.actions;
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      padding: '20px',
      textAlign: 'center',
      backgroundColor: (_styles = styles) === null || _styles === void 0 ? void 0 : _styles.background
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    defaultValue: query,
    placeholder: "Search products...",
    style: {
      padding: '10px',
      width: '300px',
      fontSize: '1rem',
      borderRadius: '8px',
      border: '1px solid #ccc'
    },
    onChange: actions.handleSearch
  }));
};
var _default = exports["default"] = SearchBar;