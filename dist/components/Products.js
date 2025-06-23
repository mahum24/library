"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _material = require("@mui/material");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Products = function Products(_ref) {
  var prop = _ref.prop,
    actions = _ref.actions,
    styles = _ref.styles,
    states = _ref.states;
  var _useState = (0, _react.useState)(prop.displayitems || []),
    _useState2 = _slicedToArray(_useState, 2),
    products = _useState2[0],
    setProducts = _useState2[1];

  // Filter products when query changes
  (0, _react.useEffect)(function () {
    if (states.query && states.query.trim() !== "") {
      var filtered = prop.displayitems.filter(function (p) {
        return p.name.toLowerCase().includes(states.query.toLowerCase());
      });
      setProducts(filtered);
    } else {
      setProducts(prop.displayitems || []);
    }
  }, [states.query, prop.displayitems]);
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    style: {
      padding: '20px',
      backgroundColor: styles === null || styles === void 0 ? void 0 : styles.background
    }
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '20px'
    }
  }, products.map(function (product, index) {
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
        color: styles === null || styles === void 0 ? void 0 : styles.titleColor
      }
    }, product.name), /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        color: styles === null || styles === void 0 ? void 0 : styles.descColor
      }
    }, product.description), /*#__PURE__*/_react["default"].createElement("button", {
      onClick: actions.handleBuy(product),
      "data-payload": JSON.stringify(product),
      style: {
        marginTop: '10px',
        padding: '10px 16px',
        backgroundColor: (styles === null || styles === void 0 ? void 0 : styles.buttonBg) || '#1976d2',
        color: (styles === null || styles === void 0 ? void 0 : styles.buttonColor) || '#fff',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '0.95rem'
      }
    }, "Buy Now"));
  })));
};
var _default = exports["default"] = Products;