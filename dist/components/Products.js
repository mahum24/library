"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Products = function Products(_ref) {
  var _styles;
  var prop = _ref.prop,
    actions = _ref.actions;
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      padding: '20px',
      backgroundColor: (_styles = styles) === null || _styles === void 0 ? void 0 : _styles.background
    }
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '20px'
    }
  }, prop.displayitems.map(function (product, index) {
    var _styles2, _styles3, _styles4, _styles5;
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: index,
      style: {
        border: '1px solid #eee',
        padding: '16px',
        borderRadius: '8px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/_react["default"].createElement("h3", {
      style: {
        fontSize: '1.2rem',
        color: (_styles2 = styles) === null || _styles2 === void 0 ? void 0 : _styles2.titleColor
      }
    }, product.name), /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        color: (_styles3 = styles) === null || _styles3 === void 0 ? void 0 : _styles3.descColor
      }
    }, product.description), /*#__PURE__*/_react["default"].createElement("button", {
      onClick: actions.handleBuy,
      "data-payload": product,
      style: {
        marginTop: '10px',
        padding: '10px 16px',
        backgroundColor: ((_styles4 = styles) === null || _styles4 === void 0 ? void 0 : _styles4.buttonBg) || '#1976d2',
        color: ((_styles5 = styles) === null || _styles5 === void 0 ? void 0 : _styles5.buttonColor) || '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '0.95rem'
      }
    }, "Buy Now"));
  })));
};
var _default = exports["default"] = Products;