"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var Header = function Header(_ref) {
  var prop = _ref.prop,
    styles = _ref.styles;
  return /*#__PURE__*/_react["default"].createElement("header", {
    style: {
      backgroundColor: styles === null || styles === void 0 ? void 0 : styles.background,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    style: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
      color: styles === null || styles === void 0 ? void 0 : styles.linkColor
    }
  }, "MyBrand"), /*#__PURE__*/_react["default"].createElement("nav", {
    style: {
      display: 'flex',
      gap: '1.5rem'
    }
  }, prop.links.map(function (link, index) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      key: index,
      href: link.url,
      style: {
        color: styles === null || styles === void 0 ? void 0 : styles.linkColor,
        textDecoration: 'none'
      },
      onMouseOver: function onMouseOver(e) {
        return e.target.style.color = styles === null || styles === void 0 ? void 0 : styles.linkHoverColor;
      },
      onMouseOut: function onMouseOut(e) {
        return e.target.style.color = styles === null || styles === void 0 ? void 0 : styles.linkColor;
      }
    }, link.label);
  })));
};
var _default = exports["default"] = Header;