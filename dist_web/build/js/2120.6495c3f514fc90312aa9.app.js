"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[2120],{

/***/ 50790
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

"use client";

var _interopRequireDefault = __webpack_require__(24994);
__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(42032));
var _jsxRuntime = __webpack_require__(74848);
var _default = exports.A = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"
}), 'AccountCircle');

/***/ },

/***/ 12120
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdminView1_SettingsViewAdmin)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./src/js/AdminView1/view.css
var view = __webpack_require__(68525);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/AccountCircle.js
var AccountCircle = __webpack_require__(50790);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/material/Box/Box.js + 2 modules
var Box = __webpack_require__(69067);
// EXTERNAL MODULE: ./node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(11641);
// EXTERNAL MODULE: ./node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(14073);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/Tooltip.js
var Tooltip = __webpack_require__(56655);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tooltip/tooltipClasses.js
var tooltipClasses = __webpack_require__(58331);
// EXTERNAL MODULE: ./node_modules/@mui/material/AppBar/AppBar.js + 1 modules
var AppBar = __webpack_require__(89828);
// EXTERNAL MODULE: ./node_modules/@mui/material/Toolbar/Toolbar.js + 1 modules
var Toolbar = __webpack_require__(8532);
// EXTERNAL MODULE: ./node_modules/@mui/material/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(14519);
// EXTERNAL MODULE: ./node_modules/@mui/material/Drawer/Drawer.js + 1 modules
var Drawer = __webpack_require__(88248);
// EXTERNAL MODULE: ./node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(49799);
// EXTERNAL MODULE: ./node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(71543);
// EXTERNAL MODULE: ./node_modules/@mui/material/Container/Container.js + 1 modules
var Container = __webpack_require__(97834);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Menu.js
var Menu = __webpack_require__(62274);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/ChevronLeft.js
var ChevronLeft = __webpack_require__(8451);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 14 modules
var es = __webpack_require__(13561);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(99380);
// EXTERNAL MODULE: ./src/js/utils/apiCache.js
var apiCache = __webpack_require__(46986);
// EXTERNAL MODULE: ./src/js/apiConfig.js
var apiConfig = __webpack_require__(71510);
// EXTERNAL MODULE: ./src/js/features/auth/authSlice.js
var authSlice = __webpack_require__(32005);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(47767);
// EXTERNAL MODULE: ./src/js/component/NetworkLogoutIcon.js
var NetworkLogoutIcon = __webpack_require__(40301);
// EXTERNAL MODULE: ./src/js/component/SidebarDash.js
var SidebarDash = __webpack_require__(4640);
// EXTERNAL MODULE: ./src/js/component/SidebarDashE2.js
var SidebarDashE2 = __webpack_require__(34687);
// EXTERNAL MODULE: ./src/js/AdminView1/MessageAdminView.js + 1 modules
var MessageAdminView = __webpack_require__(3100);
// EXTERNAL MODULE: ./src/js/AdminView1/NotificationVIewInfo.js
var NotificationVIewInfo = __webpack_require__(95236);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tabs/Tabs.js + 6 modules
var Tabs = __webpack_require__(17532);
// EXTERNAL MODULE: ./node_modules/@mui/material/Tab/Tab.js + 1 modules
var Tab = __webpack_require__(10423);
// EXTERNAL MODULE: ./src/js/hooks/useLayoutConfig.js
var useLayoutConfig = __webpack_require__(99076);
// EXTERNAL MODULE: ./src/js/config/layout-config.json
var layout_config = __webpack_require__(96597);
// EXTERNAL MODULE: ./src/js/img/images.png
var img_images = __webpack_require__(72761);
var images_default = /*#__PURE__*/__webpack_require__.n(img_images);
;// ./src/js/AdminView1/PageView/SettingsView/LayoutTemplateManager.js
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;




var sliders = [{
  key: '--header-logo-width',
  label: 'Header Logo Width',
  unit: 'px',
  min: 80,
  max: 450,
  step: 5,
  description: 'Controls the logo size in Payment slips, Invoices, Dashboard reports, and Maintenance views.'
}, {
  key: '--header-name-font-size',
  label: 'Company Name Font Size',
  unit: 'px',
  min: 8,
  max: 18,
  step: 1,
  description: 'Font size of the bold company name (GLOBAL GATE SARL) in all document headers.'
}, {
  key: '--header-details-font-size',
  label: 'Company Details Font Size',
  unit: 'px',
  min: 8,
  max: 16,
  step: 1,
  description: 'Font size of the company details (RCCM, ID NAT, Address) beneath the company name.'
}, {
  key: '--global-font-size',
  label: 'Document Base Font Size',
  unit: 'px',
  min: 8,
  max: 18,
  step: 1,
  description: 'Base font size for all document/invoice/payment detail panels.'
}, {
  key: '--table-padding',
  label: 'Table Cell Padding',
  unit: 'px',
  min: 1,
  max: 20,
  step: 1,
  description: 'Controls spacing inside table cells across document views.'
}];
var parsePx = val => parseInt(String(val).replace('px', ''), 10) || 0;
function LiveDocumentPreview(_ref) {
  var localConfig = _ref.localConfig,
    setLocalConfig = _ref.setLocalConfig,
    setSaved = _ref.setSaved;
  var _useState = (0,react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    tabIndex = _useState2[0],
    setTabIndex = _useState2[1];
  var _useState3 = (0,react.useState)({
      dragging: null,
      startX: 0,
      startOffset: 0
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    dragState = _useState4[0],
    setDragState = _useState4[1];
  var logoWidth = parsePx(localConfig['--header-logo-width']);
  var nameFontSize = parsePx(localConfig['--header-name-font-size']);
  var textAlign = localConfig['--header-text-alignment'] || 'right';
  var globalFontSize = parsePx(localConfig['--global-font-size']);
  var tablePadding = parsePx(localConfig['--table-padding']);
  var detailsFontSize = parsePx(localConfig['--header-details-font-size']) || 10;
  var handleMouseDown = (e, block) => {
    e.preventDefault();
    var currentOffset = parsePx(block === 'client' ? localConfig['--client-block-left-offset'] : localConfig['--metadata-block-right-offset']);
    setDragState({
      dragging: block,
      startX: e.clientX,
      startOffset: currentOffset
    });
  };
  var handleMouseMove = e => {
    if (!dragState.dragging) return;
    var deltaX = e.clientX - dragState.startX;
    if (dragState.dragging === 'client') {
      var newOffset = dragState.startOffset + deltaX;
      setLocalConfig(prev => _objectSpread(_objectSpread({}, prev), {}, {
        '--client-block-left-offset': "".concat(newOffset, "px")
      }));
    } else {
      var _newOffset = dragState.startOffset - deltaX;
      setLocalConfig(prev => _objectSpread(_objectSpread({}, prev), {}, {
        '--metadata-block-right-offset': "".concat(_newOffset, "px")
      }));
    }
    setSaved(false);
  };
  var handleMouseUp = () => {
    if (dragState.dragging) {
      setDragState({
        dragging: null,
        startX: 0,
        startOffset: 0
      });
    }
  };
  var renderHeader = title => /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("img", {
    src: (images_default()),
    alt: "Company Logo",
    style: {
      maxHeight: '80px',
      maxWidth: "".concat(logoWidth, "px"),
      objectFit: 'contain',
      margin: 0
    }
  })), /*#__PURE__*/react.createElement("address", {
    style: {
      textAlign: textAlign,
      fontStyle: 'normal',
      margin: 0,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/react.createElement("p", {
    style: {
      fontWeight: 'bold',
      margin: '0 0 2px',
      fontSize: "".concat(nameFontSize, "px")
    }
  }, "GLOBAL GATE SARL"), /*#__PURE__*/react.createElement("p", {
    style: {
      fontWeight: 'normal',
      margin: 0,
      fontSize: "".concat(detailsFontSize, "px"),
      lineHeight: 1.4
    }
  }, "RCCM CD/KWZ/RCCM/22-B-00317 ", /*#__PURE__*/react.createElement("br", null), "ID NAT 14-H5300N11179P ", /*#__PURE__*/react.createElement("br", null), "AVENUE SALONGO Q/INDUSTRIEL C/MANIKA ", /*#__PURE__*/react.createElement("br", null), "KOLWEZI LUALABA ", /*#__PURE__*/react.createElement("br", null), "DR CONGO"))), /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("p", {
    style: {
      textAlign: 'center',
      fontWeight: 'bold',
      margin: '10px 0'
    }
  }, title));
  var renderTableContent = () => /*#__PURE__*/react.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: "".concat(globalFontSize, "px"),
      marginTop: '10px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", {
    style: {
      backgroundColor: '#e8f7fe'
    }
  }, /*#__PURE__*/react.createElement("th", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'left',
      border: '1px solid #DDD'
    }
  }, "Description"), /*#__PURE__*/react.createElement("th", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'center',
      border: '1px solid #DDD'
    }
  }, "Qty"), /*#__PURE__*/react.createElement("th", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'right',
      border: '1px solid #DDD'
    }
  }, "Price"), /*#__PURE__*/react.createElement("th", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'right',
      border: '1px solid #DDD'
    }
  }, "Total"))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    style: {
      padding: "".concat(tablePadding, "px"),
      border: '1px solid #DDD'
    }
  }, "Sample Service Retainer"), /*#__PURE__*/react.createElement("td", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'center',
      border: '1px solid #DDD'
    }
  }, "1"), /*#__PURE__*/react.createElement("td", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'right',
      border: '1px solid #DDD'
    }
  }, "$500.00"), /*#__PURE__*/react.createElement("td", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'right',
      border: '1px solid #DDD'
    }
  }, "$500.00"))));
  return /*#__PURE__*/react.createElement("div", {
    style: {
      border: '1px solid #ddd',
      borderRadius: 8,
      backgroundColor: '#fff',
      marginBottom: 24,
      overflow: 'hidden'
    },
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseUp
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      borderBottom: 1,
      borderColor: 'divider',
      bgcolor: '#f8f9ff'
    }
  }, /*#__PURE__*/react.createElement(Tabs/* default */.A, {
    value: tabIndex,
    onChange: (e, val) => setTabIndex(val),
    "aria-label": "preview tabs"
  }, /*#__PURE__*/react.createElement(Tab/* default */.A, {
    label: "Invoice Preview"
  }), /*#__PURE__*/react.createElement(Tab/* default */.A, {
    label: "Quotation Preview"
  }), /*#__PURE__*/react.createElement(Tab/* default */.A, {
    label: "Payment Slip Preview"
  }))), /*#__PURE__*/react.createElement("div", {
    style: {
      padding: '20px',
      minHeight: '300px'
    }
  }, tabIndex === 0 && /*#__PURE__*/react.createElement("div", {
    style: {
      backgroundColor: 'white',
      padding: '10px',
      color: 'black'
    }
  }, renderHeader('INVOICE'), /*#__PURE__*/react.createElement("section", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      boxSizing: 'border-box',
      padding: '0px',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/react.createElement("address", {
    onMouseDown: e => handleMouseDown(e, 'client'),
    style: {
      marginLeft: localConfig['--client-block-left-offset'] || '0px',
      lineHeight: 1.35,
      width: 'fit-content',
      minWidth: '200px',
      cursor: 'ew-resize'
    }
  }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("span", {
    style: {
      fontSize: '10px'
    }
  }, "Bill To"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
    style: {
      fontWeight: 'bold',
      fontSize: '15px'
    }
  }, "JOHN DOE LLC"))), /*#__PURE__*/react.createElement("div", {
    onMouseDown: e => handleMouseDown(e, 'metadata'),
    style: {
      marginLeft: 'auto',
      marginRight: localConfig['--metadata-block-right-offset'] || '0px',
      width: 'fit-content',
      display: 'block',
      marginBottom: '10px',
      cursor: 'ew-resize'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      columnGap: '24px',
      rowGap: '6px',
      fontSize: "".concat(globalFontSize, "px"),
      alignContent: 'start',
      position: 'relative'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      fontWeight: 'bold',
      textAlign: 'left'
    }
  }, "Invoice #"), /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, "INV-000123"), /*#__PURE__*/react.createElement("div", {
    style: {
      fontWeight: 'bold',
      textAlign: 'left'
    }
  }, "Date"), /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, "17/07/2026")))), renderTableContent()), tabIndex === 1 && /*#__PURE__*/react.createElement("div", {
    style: {
      backgroundColor: 'white',
      padding: '10px',
      color: 'black'
    }
  }, renderHeader('QUOTATION'), /*#__PURE__*/react.createElement("section", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      boxSizing: 'border-box',
      padding: '0px',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/react.createElement("address", {
    onMouseDown: e => handleMouseDown(e, 'client'),
    style: {
      marginLeft: localConfig['--client-block-left-offset'] || '0px',
      lineHeight: 1.35,
      width: 'fit-content',
      minWidth: '200px',
      cursor: 'ew-resize'
    }
  }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("span", {
    style: {
      fontSize: '10px'
    }
  }, "Quotation For"), /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
    style: {
      fontWeight: 'bold',
      fontSize: '15px'
    }
  }, "ACME CORP"))), /*#__PURE__*/react.createElement("div", {
    onMouseDown: e => handleMouseDown(e, 'metadata'),
    style: {
      marginLeft: 'auto',
      marginRight: localConfig['--metadata-block-right-offset'] || '0px',
      width: 'fit-content',
      display: 'block',
      marginBottom: '10px',
      cursor: 'ew-resize'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      columnGap: '24px',
      rowGap: '6px',
      fontSize: "".concat(globalFontSize, "px"),
      alignContent: 'start',
      position: 'relative'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      fontWeight: 'bold',
      textAlign: 'left'
    }
  }, "Quotation #"), /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, "QUO-000456"), /*#__PURE__*/react.createElement("div", {
    style: {
      fontWeight: 'bold',
      textAlign: 'left'
    }
  }, "Date"), /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, "17/07/2026")))), renderTableContent()), tabIndex === 2 && /*#__PURE__*/react.createElement("div", {
    style: {
      backgroundColor: 'white',
      padding: '10px',
      color: 'black'
    }
  }, renderHeader('PAYMENT'), /*#__PURE__*/react.createElement("section", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      boxSizing: 'border-box',
      padding: '0px',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/react.createElement("address", {
    onMouseDown: e => handleMouseDown(e, 'client'),
    style: {
      marginLeft: localConfig['--client-block-left-offset'] || '0px',
      lineHeight: 1.35,
      width: 'fit-content',
      minWidth: '200px',
      cursor: 'ew-resize'
    }
  }, /*#__PURE__*/react.createElement("p", null, "Payment From", /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, "JANE SMITH"))), /*#__PURE__*/react.createElement("div", {
    onMouseDown: e => handleMouseDown(e, 'metadata'),
    style: {
      marginLeft: 'auto',
      marginRight: localConfig['--metadata-block-right-offset'] || '0px',
      width: 'fit-content',
      display: 'block',
      marginBottom: '10px',
      cursor: 'ew-resize'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      columnGap: '24px',
      rowGap: '6px',
      fontSize: "".concat(globalFontSize, "px"),
      alignContent: 'start',
      position: 'relative'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      fontWeight: 'bold',
      textAlign: 'left'
    }
  }, "PAY #"), /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, "PAY-000789"), /*#__PURE__*/react.createElement("div", {
    style: {
      fontWeight: 'bold',
      textAlign: 'left'
    }
  }, "Date"), /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, "17/07/2026"), /*#__PURE__*/react.createElement("div", {
    style: {
      fontWeight: 'bold',
      textAlign: 'left'
    }
  }, "Mode"), /*#__PURE__*/react.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, "CASH")))), /*#__PURE__*/react.createElement("table", {
    style: {
      width: '100%',
      fontSize: "".concat(globalFontSize, "px"),
      marginTop: '10px',
      border: '1px solid #DDD',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/react.createElement("thead", null, /*#__PURE__*/react.createElement("tr", {
    style: {
      backgroundColor: '#e8f7fe'
    }
  }, /*#__PURE__*/react.createElement("th", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'center',
      border: '1px solid #DDD'
    }
  }, "#"), /*#__PURE__*/react.createElement("th", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'center',
      border: '1px solid #DDD'
    }
  }, "Date"), /*#__PURE__*/react.createElement("th", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'right',
      border: '1px solid #DDD'
    }
  }, "Amount Paid"))), /*#__PURE__*/react.createElement("tbody", null, /*#__PURE__*/react.createElement("tr", null, /*#__PURE__*/react.createElement("td", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'center',
      border: '1px solid #DDD'
    }
  }, "INV-000123"), /*#__PURE__*/react.createElement("td", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'center',
      border: '1px solid #DDD'
    }
  }, "17/07/2026"), /*#__PURE__*/react.createElement("td", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'right',
      border: '1px solid #DDD'
    }
  }, "$500.00")))))));
}
function LayoutTemplateManager() {
  var _useLayoutConfig = (0,useLayoutConfig/* default */.A)(),
    config = _useLayoutConfig.config,
    setConfigVar = _useLayoutConfig.setConfigVar,
    resetConfig = _useLayoutConfig.resetConfig;

  // Local shadow state for the sliders so preview updates live without saving yet
  var _useState5 = (0,react.useState)(_objectSpread({}, config)),
    _useState6 = _slicedToArray(_useState5, 2),
    localConfig = _useState6[0],
    setLocalConfig = _useState6[1];
  var _useState7 = (0,react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    saved = _useState8[0],
    setSaved = _useState8[1];
  var handleSlider = (key, rawValue) => {
    var value = rawValue + 'px';
    setLocalConfig(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [key]: value
    }));
    setSaved(false);
  };
  var handleAlignment = (key, value) => {
    setLocalConfig(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [key]: value
    }));
    setSaved(false);
  };
  var handleSave = () => {
    Object.entries(localConfig).forEach(_ref2 => {
      var _ref3 = _slicedToArray(_ref2, 2),
        key = _ref3[0],
        value = _ref3[1];
      setConfigVar(key, value);
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };
  var handleReset = () => {
    setLocalConfig(_objectSpread({}, layout_config));
    resetConfig();
    setSaved(false);
  };
  return /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      gap: '24px',
      alignItems: 'stretch',
      maxWidth: '100%',
      padding: '8px 0'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      flex: '0 0 38%',
      minWidth: '350px'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/react.createElement("h3", {
    style: {
      margin: '0 0 4px',
      color: '#30368a',
      fontSize: 16
    }
  }, "Layout & Print Template Manager"), /*#__PURE__*/react.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: '#666'
    }
  }, "Adjust these values to control how document headers and tables look across ALL modules \u2014 Payment, Invoice, Dashboard Reports, Maintenance, and more. Changes apply instantly. Click ", /*#__PURE__*/react.createElement("strong", null, "Save & Apply"), " to persist across sessions.")), sliders.map(_ref4 => {
    var key = _ref4.key,
      label = _ref4.label,
      unit = _ref4.unit,
      min = _ref4.min,
      max = _ref4.max,
      step = _ref4.step,
      description = _ref4.description;
    var currentPx = parsePx(localConfig[key]);
    return /*#__PURE__*/react.createElement("div", {
      key: key,
      style: {
        marginBottom: 20,
        backgroundColor: '#f8f9ff',
        borderRadius: 8,
        padding: '12px 16px',
        border: '1px solid #e8eaf6'
      }
    }, /*#__PURE__*/react.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4
      }
    }, /*#__PURE__*/react.createElement("label", {
      style: {
        fontWeight: 600,
        fontSize: 13,
        color: '#30368a',
        display: 'block',
        padding: 0,
        margin: 0
      }
    }, label), /*#__PURE__*/react.createElement("span", {
      style: {
        fontWeight: 700,
        color: '#30368a',
        fontSize: 14,
        minWidth: 52,
        textAlign: 'right'
      }
    }, currentPx, unit)), /*#__PURE__*/react.createElement("input", {
      type: "range",
      min: min,
      max: max,
      step: step,
      value: currentPx,
      onChange: e => handleSlider(key, Number(e.target.value)),
      style: {
        width: '100%',
        accentColor: '#30368a',
        cursor: 'pointer'
      }
    }), /*#__PURE__*/react.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 10,
        color: '#999',
        marginTop: 2
      }
    }, /*#__PURE__*/react.createElement("span", null, min, unit), /*#__PURE__*/react.createElement("span", {
      style: {
        fontSize: 11,
        color: '#888',
        textAlign: 'center',
        flex: 1,
        padding: '0 8px'
      }
    }, description), /*#__PURE__*/react.createElement("span", null, max, unit)));
  }), /*#__PURE__*/react.createElement("div", {
    style: {
      marginBottom: 24,
      backgroundColor: '#f8f9ff',
      borderRadius: 8,
      padding: '12px 16px',
      border: '1px solid #e8eaf6'
    }
  }, /*#__PURE__*/react.createElement("label", {
    style: {
      fontWeight: 600,
      fontSize: 13,
      color: '#30368a',
      display: 'block',
      marginBottom: 6,
      padding: 0
    }
  }, "Header Text Alignment"), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['left', 'center', 'right'].map(align => /*#__PURE__*/react.createElement("button", {
    key: align,
    onClick: () => handleAlignment('--header-text-alignment', align),
    style: {
      padding: '6px 20px',
      borderRadius: 6,
      border: '2px solid',
      borderColor: localConfig['--header-text-alignment'] === align ? '#30368a' : '#ccc',
      backgroundColor: localConfig['--header-text-alignment'] === align ? '#30368a' : '#fff',
      color: localConfig['--header-text-alignment'] === align ? '#fff' : '#555',
      fontWeight: 600,
      fontSize: 12,
      cursor: 'pointer',
      textTransform: 'capitalize',
      transition: 'all 0.15s'
    }
  }, align))), /*#__PURE__*/react.createElement("p", {
    style: {
      fontSize: 11,
      color: '#888',
      margin: '6px 0 0'
    }
  }, "Aligns the company name and address block in all document headers.")), /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 32
    }
  }, /*#__PURE__*/react.createElement("button", {
    onClick: handleReset,
    style: {
      padding: '10px 24px',
      borderRadius: 8,
      border: 'none',
      backgroundColor: '#f5f5f5',
      color: '#333',
      fontWeight: 'bold',
      cursor: 'pointer',
      flex: 1
    }
  }, "Reset Defaults"), /*#__PURE__*/react.createElement("button", {
    onClick: handleSave,
    style: {
      padding: '10px 24px',
      borderRadius: 8,
      border: 'none',
      backgroundColor: saved ? '#4caf50' : '#30368a',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer',
      flex: 2,
      transition: 'background-color 0.3s'
    }
  }, saved ? 'Saved!' : 'Save & Apply'))), /*#__PURE__*/react.createElement("div", {
    style: {
      flex: '1'
    }
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      position: 'sticky',
      top: '24px'
    }
  }, /*#__PURE__*/react.createElement(LiveDocumentPreview, {
    localConfig: localConfig,
    setLocalConfig: setLocalConfig,
    setSaved: setSaved
  }))));
}
/* harmony default export */ const SettingsView_LayoutTemplateManager = (LayoutTemplateManager);
;// ./src/js/AdminView1/SettingsViewAdmin.js
var _excluded = ["className"];
function SettingsViewAdmin_slicedToArray(r, e) { return SettingsViewAdmin_arrayWithHoles(r) || SettingsViewAdmin_iterableToArrayLimit(r, e) || SettingsViewAdmin_unsupportedIterableToArray(r, e) || SettingsViewAdmin_nonIterableRest(); }
function SettingsViewAdmin_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function SettingsViewAdmin_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return SettingsViewAdmin_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? SettingsViewAdmin_arrayLikeToArray(r, a) : void 0; } }
function SettingsViewAdmin_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function SettingsViewAdmin_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function SettingsViewAdmin_arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function SettingsViewAdmin_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function SettingsViewAdmin_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? SettingsViewAdmin_ownKeys(Object(t), !0).forEach(function (r) { SettingsViewAdmin_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : SettingsViewAdmin_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function SettingsViewAdmin_defineProperty(e, r, t) { return (r = SettingsViewAdmin_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function SettingsViewAdmin_toPropertyKey(t) { var i = SettingsViewAdmin_toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function SettingsViewAdmin_toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
;
































var ViewTooltip = (0,styled/* default */.Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement(Tooltip/* default */.A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(tooltipClasses/* default */.A.tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var drawerWidth = 240;
var SettingsViewAdmin_AppBar = (0,styled/* default */.Ay)(AppBar/* default */.A, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref3 => {
  var theme = _ref3.theme,
    open = _ref3.open;
  return SettingsViewAdmin_objectSpread({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }, open && {
    marginLeft: drawerWidth,
    width: "calc(100% - ".concat(drawerWidth, "px)"),
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  });
});
var SettingsViewAdmin_Drawer = (0,styled/* default */.Ay)(Drawer/* default */.Ay, {
  shouldForwardProp: prop => prop !== 'open'
})(_ref4 => {
  var theme = _ref4.theme,
    open = _ref4.open;
  return {
    '& .MuiDrawer-paper': SettingsViewAdmin_objectSpread({
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      boxSizing: 'border-box'
    }, !open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9)
      }
    })
  };
});
function SettingsViewAdmin() {
  var _user$data3, _user$data4;
  var navigate = (0,dist/* useNavigate */.Zp)();
  var dispatch = (0,es/* useDispatch */.wA)();
  var user = (0,es/* useSelector */.d4)(authSlice/* selectCurrentUser */.xu);
  (0,react.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios/* default */.A.get("".concat(apiConfig/* ENDPOINT_URL */.m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,authSlice/* setUser */.gV)({
              userName: Name,
              role: Role
            }));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        } else {
          navigate('/');
        }
      });
      return function fetchUser() {
        return _ref5.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,authSlice/* logOut */.je)());
    navigate('/');
  };
  var _React$useState = react.useState(true),
    _React$useState2 = SettingsViewAdmin_slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _React$useState3 = react.useState(0),
    _React$useState4 = SettingsViewAdmin_slicedToArray(_React$useState3, 2),
    tabIndex = _React$useState4[0],
    setTabIndex = _React$useState4[1];
  var handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  var _useState = (0,react.useState)(false),
    _useState2 = SettingsViewAdmin_slicedToArray(_useState, 2),
    hasLayoutAccess = _useState2[0],
    setHasLayoutAccess = _useState2[1];
  (0,react.useEffect)(() => {
    var fetchAccess = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(function* () {
        try {
          var _user$data, _user$data2;
          var userName = user === null || user === void 0 || (_user$data = user.data) === null || _user$data === void 0 ? void 0 : _user$data.userName;
          var userId = user === null || user === void 0 || (_user$data2 = user.data) === null || _user$data2 === void 0 ? void 0 : _user$data2._id;
          if (!userName) return;
          if (userName === 'GG') {
            setHasLayoutAccess(true);
            return;
          }
          var res = yield (0,apiCache/* cachedGet */.Fe)("".concat(apiConfig/* ENDPOINT_URL */.m, "/grantAccess"));
          var myAccess = res.data.data.slice().reverse().find(a => a.userID === userId);
          if (myAccess && Array.isArray(myAccess.modules)) {
            var allowed = myAccess.modules.some(m => {
              var _m$access;
              var name = typeof m === 'string' ? m : (m === null || m === void 0 ? void 0 : m.moduleName) || (m === null || m === void 0 ? void 0 : m.name) || (m === null || m === void 0 ? void 0 : m.module) || '';
              return name === 'Layout-Print' && (m === null || m === void 0 || (_m$access = m.access) === null || _m$access === void 0 ? void 0 : _m$access.viewM);
            });
            setHasLayoutAccess(allowed);
          }
        } catch (err) {
          console.error("Error fetching access", err);
        }
      });
      return function fetchAccess() {
        return _ref6.apply(this, arguments);
      };
    }();
    fetchAccess();
  }, [user]);
  return /*#__PURE__*/react.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react.createElement(CssBaseline/* default */.Ay, null), /*#__PURE__*/react.createElement(SettingsViewAdmin_AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react.createElement(Toolbar/* default */.A, {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: SettingsViewAdmin_objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react.createElement(Menu/* default */.A, null)), /*#__PURE__*/react.createElement(Typography/* default */.A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Profile"), /*#__PURE__*/react.createElement(NotificationVIewInfo/* default */.A, null), /*#__PURE__*/react.createElement(MessageAdminView/* default */.A, {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react.createElement(NetworkLogoutIcon/* default */.A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react.createElement(SettingsViewAdmin_Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react.createElement(Toolbar/* default */.A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react.createElement(IconButton/* default */.A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react.createElement(ChevronLeft/* default */.A, null))), /*#__PURE__*/react.createElement(Divider/* default */.A, null), /*#__PURE__*/react.createElement(List/* default */.A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react.createElement(SidebarDashE2/* default */.A, null))), /*#__PURE__*/react.createElement(Box/* default */.A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react.createElement(Toolbar/* default */.A, null), /*#__PURE__*/react.createElement(Container/* default */.A, {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/react.createElement(Box/* default */.A, {
    sx: {
      borderBottom: 1,
      borderColor: 'divider',
      mb: 2
    }
  }, /*#__PURE__*/react.createElement(Tabs/* default */.A, {
    value: tabIndex,
    onChange: handleTabChange
  }, /*#__PURE__*/react.createElement(Tab/* default */.A, {
    label: "Profile"
  }), hasLayoutAccess && /*#__PURE__*/react.createElement(Tab/* default */.A, {
    label: "Layout & Print"
  }))), tabIndex === 0 && /*#__PURE__*/react.createElement("div", {
    className: "Customerbuttonadd1"
  }, /*#__PURE__*/react.createElement("div", {
    className: "settingsView"
  }, /*#__PURE__*/react.createElement("div", {
    className: "settingsViewtitle"
  }, /*#__PURE__*/react.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react.createElement(AccountCircle/* default */.A, {
    className: "settingsViewIcon"
  }), /*#__PURE__*/react.createElement("div", {
    style: {
      lineHeight: '10px'
    }
  }, /*#__PURE__*/react.createElement("h2", null, user === null || user === void 0 || (_user$data3 = user.data) === null || _user$data3 === void 0 ? void 0 : _user$data3.userName)))), /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("div", {
    className: "settingsViewcontent"
  }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h4", null, " Profile Info"), /*#__PURE__*/react.createElement("p", null, user === null || user === void 0 || (_user$data4 = user.data) === null || _user$data4 === void 0 ? void 0 : _user$data4.role)), /*#__PURE__*/react.createElement("div", {
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://www.globalgate.sarl/downloads/GlobalGate_Setup.exe",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/react.createElement("button", {
    className: "btnCustomer",
    style: {
      padding: '10px 20px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 'bold'
    }
  }, "Download Windows App (.exe)")))))), tabIndex === 1 && hasLayoutAccess && /*#__PURE__*/react.createElement(SettingsView_LayoutTemplateManager, null)))));
}
/* harmony default export */ const AdminView1_SettingsViewAdmin = (SettingsViewAdmin);

/***/ }

}]);