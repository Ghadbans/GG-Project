"use strict";
exports.id = "src_js_AdminView1_SettingsViewAdmin_js";
exports.ids = ["src_js_AdminView1_SettingsViewAdmin_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/AccountCircle.js"
/*!***********************************************************!*\
  !*** ./node_modules/@mui/icons-material/AccountCircle.js ***!
  \***********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


"use client";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));
var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _default = exports["default"] = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"
}), 'AccountCircle');

/***/ },

/***/ "./src/js/AdminView1/PageView/SettingsView/LayoutTemplateManager.js"
/*!**************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/SettingsView/LayoutTemplateManager.js ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _hooks_useLayoutConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useLayoutConfig */ "./src/js/hooks/useLayoutConfig.js");
/* harmony import */ var _config_layout_config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../config/layout-config.json */ "./src/js/config/layout-config.json");
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../img/images.png */ "./src/js/img/images.png");
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    tabIndex = _useState2[0],
    setTabIndex = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
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
  var renderHeader = title => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_images_png__WEBPACK_IMPORTED_MODULE_6__,
    alt: "Company Logo",
    style: {
      maxHeight: '80px',
      maxWidth: "".concat(logoWidth, "px"),
      objectFit: 'contain',
      margin: 0
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("address", {
    style: {
      textAlign: textAlign,
      fontStyle: 'normal',
      margin: 0,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontWeight: 'bold',
      margin: '0 0 2px',
      fontSize: "".concat(nameFontSize, "px")
    }
  }, "GLOBAL GATE SARL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontWeight: 'normal',
      margin: 0,
      fontSize: "".concat(detailsFontSize, "px"),
      lineHeight: 1.4
    }
  }, "RCCM CD/KWZ/RCCM/22-B-00317 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "ID NAT 14-H5300N11179P ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "AVENUE SALONGO Q/INDUSTRIEL C/MANIKA ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "KOLWEZI LUALABA ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "DR CONGO"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: 'center',
      fontWeight: 'bold',
      margin: '10px 0'
    }
  }, title));
  var renderTableContent = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: "".concat(globalFontSize, "px"),
      marginTop: '10px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      backgroundColor: '#e8f7fe'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'left',
      border: '1px solid #DDD'
    }
  }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'center',
      border: '1px solid #DDD'
    }
  }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'right',
      border: '1px solid #DDD'
    }
  }, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'right',
      border: '1px solid #DDD'
    }
  }, "Total"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: "".concat(tablePadding, "px"),
      border: '1px solid #DDD'
    }
  }, "Sample Service Retainer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'center',
      border: '1px solid #DDD'
    }
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'right',
      border: '1px solid #DDD'
    }
  }, "$500.00"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'right',
      border: '1px solid #DDD'
    }
  }, "$500.00"))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      borderBottom: 1,
      borderColor: 'divider',
      bgcolor: '#f8f9ff'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: tabIndex,
    onChange: (e, val) => setTabIndex(val),
    "aria-label": "preview tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Invoice Preview"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Quotation Preview"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Payment Slip Preview"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '20px',
      minHeight: '300px'
    }
  }, tabIndex === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundColor: 'white',
      padding: '10px',
      color: 'black'
    }
  }, renderHeader('INVOICE'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      boxSizing: 'border-box',
      padding: '0px',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("address", {
    onMouseDown: e => handleMouseDown(e, 'client'),
    style: {
      marginLeft: localConfig['--client-block-left-offset'] || '0px',
      lineHeight: 1.35,
      width: 'fit-content',
      minWidth: '200px',
      cursor: 'ew-resize'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: '10px'
    }
  }, "Bill To"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontWeight: 'bold',
      fontSize: '15px'
    }
  }, "JOHN DOE LLC"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onMouseDown: e => handleMouseDown(e, 'metadata'),
    style: {
      marginLeft: 'auto',
      marginRight: localConfig['--metadata-block-right-offset'] || '0px',
      width: 'fit-content',
      display: 'block',
      marginBottom: '10px',
      cursor: 'ew-resize'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      columnGap: '24px',
      rowGap: '6px',
      fontSize: "".concat(globalFontSize, "px"),
      alignContent: 'start',
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontWeight: 'bold',
      textAlign: 'left'
    }
  }, "Invoice #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, "INV-000123"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontWeight: 'bold',
      textAlign: 'left'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, "17/07/2026")))), renderTableContent()), tabIndex === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundColor: 'white',
      padding: '10px',
      color: 'black'
    }
  }, renderHeader('QUOTATION'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      boxSizing: 'border-box',
      padding: '0px',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("address", {
    onMouseDown: e => handleMouseDown(e, 'client'),
    style: {
      marginLeft: localConfig['--client-block-left-offset'] || '0px',
      lineHeight: 1.35,
      width: 'fit-content',
      minWidth: '200px',
      cursor: 'ew-resize'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontSize: '10px'
    }
  }, "Quotation For"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontWeight: 'bold',
      fontSize: '15px'
    }
  }, "ACME CORP"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onMouseDown: e => handleMouseDown(e, 'metadata'),
    style: {
      marginLeft: 'auto',
      marginRight: localConfig['--metadata-block-right-offset'] || '0px',
      width: 'fit-content',
      display: 'block',
      marginBottom: '10px',
      cursor: 'ew-resize'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      columnGap: '24px',
      rowGap: '6px',
      fontSize: "".concat(globalFontSize, "px"),
      alignContent: 'start',
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontWeight: 'bold',
      textAlign: 'left'
    }
  }, "Quotation #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, "QUO-000456"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontWeight: 'bold',
      textAlign: 'left'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, "17/07/2026")))), renderTableContent()), tabIndex === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      backgroundColor: 'white',
      padding: '10px',
      color: 'black'
    }
  }, renderHeader('PAYMENT'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      boxSizing: 'border-box',
      padding: '0px',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("address", {
    onMouseDown: e => handleMouseDown(e, 'client'),
    style: {
      marginLeft: localConfig['--client-block-left-offset'] || '0px',
      lineHeight: 1.35,
      width: 'fit-content',
      minWidth: '200px',
      cursor: 'ew-resize'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Payment From", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, "JANE SMITH"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    onMouseDown: e => handleMouseDown(e, 'metadata'),
    style: {
      marginLeft: 'auto',
      marginRight: localConfig['--metadata-block-right-offset'] || '0px',
      width: 'fit-content',
      display: 'block',
      marginBottom: '10px',
      cursor: 'ew-resize'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      columnGap: '24px',
      rowGap: '6px',
      fontSize: "".concat(globalFontSize, "px"),
      alignContent: 'start',
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontWeight: 'bold',
      textAlign: 'left'
    }
  }, "PAY #"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, "PAY-000789"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontWeight: 'bold',
      textAlign: 'left'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, "17/07/2026"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      fontWeight: 'bold',
      textAlign: 'left'
    }
  }, "Mode"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, "CASH")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    style: {
      width: '100%',
      fontSize: "".concat(globalFontSize, "px"),
      marginTop: '10px',
      border: '1px solid #DDD',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      backgroundColor: '#e8f7fe'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'center',
      border: '1px solid #DDD'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'center',
      border: '1px solid #DDD'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'right',
      border: '1px solid #DDD'
    }
  }, "Amount Paid"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'center',
      border: '1px solid #DDD'
    }
  }, "INV-000123"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'center',
      border: '1px solid #DDD'
    }
  }, "17/07/2026"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: "".concat(tablePadding, "px"),
      textAlign: 'right',
      border: '1px solid #DDD'
    }
  }, "$500.00")))))));
}
function LayoutTemplateManager() {
  var _useLayoutConfig = (0,_hooks_useLayoutConfig__WEBPACK_IMPORTED_MODULE_4__["default"])(),
    config = _useLayoutConfig.config,
    setConfigVar = _useLayoutConfig.setConfigVar,
    resetConfig = _useLayoutConfig.resetConfig;

  // Local shadow state for the sliders so preview updates live without saving yet
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_objectSpread({}, config)),
    _useState6 = _slicedToArray(_useState5, 2),
    localConfig = _useState6[0],
    setLocalConfig = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
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
    setLocalConfig(_objectSpread({}, _config_layout_config_json__WEBPACK_IMPORTED_MODULE_5__));
    resetConfig();
    setSaved(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '24px',
      alignItems: 'stretch',
      maxWidth: '100%',
      padding: '8px 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      flex: '0 0 38%',
      minWidth: '350px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    style: {
      margin: '0 0 4px',
      color: '#30368a',
      fontSize: 16
    }
  }, "Layout & Print Template Manager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: '#666'
    }
  }, "Adjust these values to control how document headers and tables look across ALL modules \u2014 Payment, Invoice, Dashboard Reports, Maintenance, and more. Changes apply instantly. Click ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Save & Apply"), " to persist across sessions.")), sliders.map(_ref4 => {
    var key = _ref4.key,
      label = _ref4.label,
      unit = _ref4.unit,
      min = _ref4.min,
      max = _ref4.max,
      step = _ref4.step,
      description = _ref4.description;
    var currentPx = parsePx(localConfig[key]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: key,
      style: {
        marginBottom: 20,
        backgroundColor: '#f8f9ff',
        borderRadius: 8,
        padding: '12px 16px',
        border: '1px solid #e8eaf6'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
      style: {
        fontWeight: 600,
        fontSize: 13,
        color: '#30368a',
        display: 'block',
        padding: 0,
        margin: 0
      }
    }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontWeight: 700,
        color: '#30368a',
        fontSize: 14,
        minWidth: 52,
        textAlign: 'right'
      }
    }, currentPx, unit)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 10,
        color: '#999',
        marginTop: 2
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, min, unit), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        fontSize: 11,
        color: '#888',
        textAlign: 'center',
        flex: 1,
        padding: '0 8px'
      }
    }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, max, unit)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginBottom: 24,
      backgroundColor: '#f8f9ff',
      borderRadius: 8,
      padding: '12px 16px',
      border: '1px solid #e8eaf6'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    style: {
      fontWeight: 600,
      fontSize: 13,
      color: '#30368a',
      display: 'block',
      marginBottom: 6,
      padding: 0
    }
  }, "Header Text Alignment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, ['left', 'center', 'right'].map(align => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
  }, align))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: 11,
      color: '#888',
      margin: '6px 0 0'
    }
  }, "Aligns the company name and address block in all document headers.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 32
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
  }, "Reset Defaults"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
  }, saved ? 'Saved!' : 'Save & Apply'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      flex: '1'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'sticky',
      top: '24px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LiveDocumentPreview, {
    localConfig: localConfig,
    setLocalConfig: setLocalConfig,
    setSaved: setSaved
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutTemplateManager);

/***/ },

/***/ "./src/js/AdminView1/SettingsViewAdmin.js"
/*!************************************************!*\
  !*** ./src/js/AdminView1/SettingsViewAdmin.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/AccountCircle */ "./node_modules/@mui/icons-material/AccountCircle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../component/SidebarDashE2 */ "./src/js/component/SidebarDashE2.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _PageView_SettingsView_LayoutTemplateManager__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./PageView/SettingsView/LayoutTemplateManager */ "./src/js/AdminView1/PageView/SettingsView/LayoutTemplateManager.js");
var _excluded = ["className"];
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
;































var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_8__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref3 => {
  var theme = _ref3.theme,
    open = _ref3.open;
  return _objectSpread({
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_12__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref4 => {
  var theme = _ref4.theme,
    open = _ref4.open;
  return {
    '& .MuiDrawer-paper': _objectSpread({
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
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_18__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_21__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_19__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_20__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_21__.setUser)({
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_21__.logOut)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    tabIndex = _React$useState4[0],
    setTabIndex = _React$useState4[1];
  var handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    hasLayoutAccess = _useState2[0],
    setHasLayoutAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_19__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_20__.ENDPOINT_URL, "/grantAccess"));
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_11__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_16__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_27__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_26__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_23__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_17__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_25__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_15__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      borderBottom: 1,
      borderColor: 'divider',
      mb: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_28__["default"], {
    value: tabIndex,
    onChange: handleTabChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_29__["default"], {
    label: "Profile"
  }), hasLayoutAccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_29__["default"], {
    label: "Layout & Print"
  }))), tabIndex === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Customerbuttonadd1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "settingsView"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "settingsViewtitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_AccountCircle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "settingsViewIcon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      lineHeight: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, user === null || user === void 0 || (_user$data3 = user.data) === null || _user$data3 === void 0 ? void 0 : _user$data3.userName)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "settingsViewcontent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, " Profile Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, user === null || user === void 0 || (_user$data4 = user.data) === null || _user$data4 === void 0 ? void 0 : _user$data4.role))))), tabIndex === 1 && hasLayoutAccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_SettingsView_LayoutTemplateManager__WEBPACK_IMPORTED_MODULE_30__["default"], null)))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsViewAdmin);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfU2V0dGluZ3NWaWV3QWRtaW5fanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRCxDQUF3QztBQUNPO0FBQ2M7QUFDRTtBQUNuQjtBQUU1QyxJQUFNUSxPQUFPLEdBQUcsQ0FDZDtFQUNFQyxHQUFHLEVBQUUscUJBQXFCO0VBQzFCQyxLQUFLLEVBQUUsbUJBQW1CO0VBQzFCQyxJQUFJLEVBQUUsSUFBSTtFQUNWQyxHQUFHLEVBQUUsRUFBRTtFQUNQQyxHQUFHLEVBQUUsR0FBRztFQUNSQyxJQUFJLEVBQUUsQ0FBQztFQUNQQyxXQUFXLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDRU4sR0FBRyxFQUFFLHlCQUF5QjtFQUM5QkMsS0FBSyxFQUFFLHdCQUF3QjtFQUMvQkMsSUFBSSxFQUFFLElBQUk7RUFDVkMsR0FBRyxFQUFFLENBQUM7RUFDTkMsR0FBRyxFQUFFLEVBQUU7RUFDUEMsSUFBSSxFQUFFLENBQUM7RUFDUEMsV0FBVyxFQUFFO0FBQ2YsQ0FBQyxFQUNEO0VBQ0VOLEdBQUcsRUFBRSw0QkFBNEI7RUFDakNDLEtBQUssRUFBRSwyQkFBMkI7RUFDbENDLElBQUksRUFBRSxJQUFJO0VBQ1ZDLEdBQUcsRUFBRSxDQUFDO0VBQ05DLEdBQUcsRUFBRSxFQUFFO0VBQ1BDLElBQUksRUFBRSxDQUFDO0VBQ1BDLFdBQVcsRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNFTixHQUFHLEVBQUUsb0JBQW9CO0VBQ3pCQyxLQUFLLEVBQUUseUJBQXlCO0VBQ2hDQyxJQUFJLEVBQUUsSUFBSTtFQUNWQyxHQUFHLEVBQUUsQ0FBQztFQUNOQyxHQUFHLEVBQUUsRUFBRTtFQUNQQyxJQUFJLEVBQUUsQ0FBQztFQUNQQyxXQUFXLEVBQUU7QUFDZixDQUFDLEVBQ0Q7RUFDRU4sR0FBRyxFQUFFLGlCQUFpQjtFQUN0QkMsS0FBSyxFQUFFLG9CQUFvQjtFQUMzQkMsSUFBSSxFQUFFLElBQUk7RUFDVkMsR0FBRyxFQUFFLENBQUM7RUFDTkMsR0FBRyxFQUFFLEVBQUU7RUFDUEMsSUFBSSxFQUFFLENBQUM7RUFDUEMsV0FBVyxFQUFFO0FBQ2YsQ0FBQyxDQUNGO0FBRUQsSUFBTUMsT0FBTyxHQUFJQyxHQUFHLElBQUtDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDRixHQUFHLENBQUMsQ0FBQ0csT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDO0FBRXpFLFNBQVNDLG1CQUFtQkEsQ0FBQUMsSUFBQSxFQUE0QztFQUFBLElBQXpDQyxXQUFXLEdBQUFELElBQUEsQ0FBWEMsV0FBVztJQUFFQyxjQUFjLEdBQUFGLElBQUEsQ0FBZEUsY0FBYztJQUFFQyxRQUFRLEdBQUFILElBQUEsQ0FBUkcsUUFBUTtFQUNsRSxJQUFBQyxTQUFBLEdBQWdDekIsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQTBCLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXBDRyxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBQzVCLElBQUFJLFVBQUEsR0FBa0M5QiwrQ0FBUSxDQUFDO01BQUUrQixRQUFRLEVBQUUsSUFBSTtNQUFFQyxNQUFNLEVBQUUsQ0FBQztNQUFFQyxXQUFXLEVBQUU7SUFBRSxDQUFDLENBQUM7SUFBQUMsVUFBQSxHQUFBUCxjQUFBLENBQUFHLFVBQUE7SUFBbEZLLFNBQVMsR0FBQUQsVUFBQTtJQUFFRSxZQUFZLEdBQUFGLFVBQUE7RUFFOUIsSUFBTUcsU0FBUyxHQUFHdEIsT0FBTyxDQUFDTyxXQUFXLENBQUMscUJBQXFCLENBQUMsQ0FBQztFQUM3RCxJQUFNZ0IsWUFBWSxHQUFHdkIsT0FBTyxDQUFDTyxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQztFQUNwRSxJQUFNaUIsU0FBUyxHQUFHakIsV0FBVyxDQUFDLHlCQUF5QixDQUFDLElBQUksT0FBTztFQUNuRSxJQUFNa0IsY0FBYyxHQUFHekIsT0FBTyxDQUFDTyxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQztFQUNqRSxJQUFNbUIsWUFBWSxHQUFHMUIsT0FBTyxDQUFDTyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQztFQUU1RCxJQUFNb0IsZUFBZSxHQUFHM0IsT0FBTyxDQUFDTyxXQUFXLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxJQUFJLEVBQUU7RUFFaEYsSUFBTXFCLGVBQWUsR0FBR0EsQ0FBQ0MsQ0FBQyxFQUFFQyxLQUFLLEtBQUs7SUFDcENELENBQUMsQ0FBQ0UsY0FBYyxDQUFDLENBQUM7SUFDbEIsSUFBTUMsYUFBYSxHQUFHaEMsT0FBTyxDQUMzQjhCLEtBQUssS0FBSyxRQUFRLEdBQ2R2QixXQUFXLENBQUMsNEJBQTRCLENBQUMsR0FDekNBLFdBQVcsQ0FBQywrQkFBK0IsQ0FDakQsQ0FBQztJQUNEYyxZQUFZLENBQUM7TUFBRUwsUUFBUSxFQUFFYyxLQUFLO01BQUViLE1BQU0sRUFBRVksQ0FBQyxDQUFDSSxPQUFPO01BQUVmLFdBQVcsRUFBRWM7SUFBYyxDQUFDLENBQUM7RUFDbEYsQ0FBQztFQUVELElBQU1FLGVBQWUsR0FBSUwsQ0FBQyxJQUFLO0lBQzdCLElBQUksQ0FBQ1QsU0FBUyxDQUFDSixRQUFRLEVBQUU7SUFDekIsSUFBTW1CLE1BQU0sR0FBR04sQ0FBQyxDQUFDSSxPQUFPLEdBQUdiLFNBQVMsQ0FBQ0gsTUFBTTtJQUUzQyxJQUFJRyxTQUFTLENBQUNKLFFBQVEsS0FBSyxRQUFRLEVBQUU7TUFDbkMsSUFBTW9CLFNBQVMsR0FBR2hCLFNBQVMsQ0FBQ0YsV0FBVyxHQUFHaUIsTUFBTTtNQUNoRDNCLGNBQWMsQ0FBQzZCLElBQUksSUFBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQVVELElBQUk7UUFBRSw0QkFBNEIsS0FBQUUsTUFBQSxDQUFLSCxTQUFTO01BQUksRUFBRyxDQUFDO0lBQ3ZGLENBQUMsTUFBTTtNQUNMLElBQU1BLFVBQVMsR0FBR2hCLFNBQVMsQ0FBQ0YsV0FBVyxHQUFHaUIsTUFBTTtNQUNoRDNCLGNBQWMsQ0FBQzZCLElBQUksSUFBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQVVELElBQUk7UUFBRSwrQkFBK0IsS0FBQUUsTUFBQSxDQUFLSCxVQUFTO01BQUksRUFBRyxDQUFDO0lBQzFGO0lBQ0EzQixRQUFRLENBQUMsS0FBSyxDQUFDO0VBQ2pCLENBQUM7RUFFRCxJQUFNK0IsYUFBYSxHQUFHQSxDQUFBLEtBQU07SUFDMUIsSUFBSXBCLFNBQVMsQ0FBQ0osUUFBUSxFQUFFO01BQ3RCSyxZQUFZLENBQUM7UUFBRUwsUUFBUSxFQUFFLElBQUk7UUFBRUMsTUFBTSxFQUFFLENBQUM7UUFBRUMsV0FBVyxFQUFFO01BQUUsQ0FBQyxDQUFDO0lBQzdEO0VBQ0YsQ0FBQztFQUVELElBQU11QixZQUFZLEdBQUlDLEtBQUssaUJBQ3pCMUQsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRUMsT0FBTyxFQUFFLE1BQU07TUFBRUMsY0FBYyxFQUFFLGVBQWU7TUFBRUMsVUFBVSxFQUFFLFFBQVE7TUFBRUMsS0FBSyxFQUFFLE1BQU07TUFBRUMsWUFBWSxFQUFFO0lBQU87RUFBRSxnQkFDMUhsRSwwREFBQSwyQkFDRUEsMERBQUE7SUFDRW1FLEdBQUcsRUFBRTVELDRDQUFNO0lBQ1g2RCxHQUFHLEVBQUMsY0FBYztJQUNsQlAsS0FBSyxFQUFFO01BQUVRLFNBQVMsRUFBRSxNQUFNO01BQUVDLFFBQVEsS0FBQWYsTUFBQSxDQUFLakIsU0FBUyxPQUFJO01BQUVpQyxTQUFTLEVBQUUsU0FBUztNQUFFQyxNQUFNLEVBQUU7SUFBRTtFQUFFLENBQzNGLENBQ0UsQ0FBQyxlQUNOeEUsMERBQUE7SUFBUzZELEtBQUssRUFBRTtNQUFFckIsU0FBUyxFQUFFQSxTQUFTO01BQUVpQyxTQUFTLEVBQUUsUUFBUTtNQUFFRCxNQUFNLEVBQUUsQ0FBQztNQUFFRSxVQUFVLEVBQUU7SUFBSTtFQUFFLGdCQUN4RjFFLDBEQUFBO0lBQUc2RCxLQUFLLEVBQUU7TUFBRWMsVUFBVSxFQUFFLE1BQU07TUFBRUgsTUFBTSxFQUFFLFNBQVM7TUFBRUksUUFBUSxLQUFBckIsTUFBQSxDQUFLaEIsWUFBWTtJQUFLO0VBQUUsR0FBQyxrQkFBbUIsQ0FBQyxlQUN4R3ZDLDBEQUFBO0lBQUc2RCxLQUFLLEVBQUU7TUFBRWMsVUFBVSxFQUFFLFFBQVE7TUFBRUgsTUFBTSxFQUFFLENBQUM7TUFBRUksUUFBUSxLQUFBckIsTUFBQSxDQUFLWixlQUFlLE9BQUk7TUFBRStCLFVBQVUsRUFBRTtJQUFJO0VBQUUsR0FBQyw4QkFDcEUsZUFBQTFFLDBEQUFBLFdBQUssQ0FBQywyQkFDWCxlQUFBQSwwREFBQSxXQUFLLENBQUMseUNBQ1EsZUFBQUEsMERBQUEsV0FBSyxDQUFDLG9CQUMzQixlQUFBQSwwREFBQSxXQUFLLENBQUMsWUFFckIsQ0FDSSxDQUNOLENBQUMsZUFDTkEsMERBQUEsV0FBSyxDQUFDLGVBQUFBLDBEQUFBO0lBQUc2RCxLQUFLLEVBQUU7TUFBRXJCLFNBQVMsRUFBRSxRQUFRO01BQUVtQyxVQUFVLEVBQUUsTUFBTTtNQUFFSCxNQUFNLEVBQUU7SUFBUztFQUFFLEdBQUVkLEtBQVMsQ0FDekYsQ0FDSDtFQUVELElBQU1tQixrQkFBa0IsR0FBR0EsQ0FBQSxrQkFDekI3RSwwREFBQTtJQUFPNkQsS0FBSyxFQUFFO01BQUVJLEtBQUssRUFBRSxNQUFNO01BQUVhLGNBQWMsRUFBRSxVQUFVO01BQUVGLFFBQVEsS0FBQXJCLE1BQUEsQ0FBS2QsY0FBYyxPQUFJO01BQUVzQyxTQUFTLEVBQUUsTUFBTTtNQUFFQyxNQUFNLEVBQUU7SUFBaUI7RUFBRSxnQkFDeEloRiwwREFBQSw2QkFDRUEsMERBQUE7SUFBSTZELEtBQUssRUFBRTtNQUFFb0IsZUFBZSxFQUFFO0lBQVU7RUFBRSxnQkFDeENqRiwwREFBQTtJQUFJNkQsS0FBSyxFQUFFO01BQUVxQixPQUFPLEtBQUEzQixNQUFBLENBQUtiLFlBQVksT0FBSTtNQUFFRixTQUFTLEVBQUUsTUFBTTtNQUFFd0MsTUFBTSxFQUFFO0lBQWlCO0VBQUUsR0FBQyxhQUFlLENBQUMsZUFDMUdoRiwwREFBQTtJQUFJNkQsS0FBSyxFQUFFO01BQUVxQixPQUFPLEtBQUEzQixNQUFBLENBQUtiLFlBQVksT0FBSTtNQUFFRixTQUFTLEVBQUUsUUFBUTtNQUFFd0MsTUFBTSxFQUFFO0lBQWlCO0VBQUUsR0FBQyxLQUFPLENBQUMsZUFDcEdoRiwwREFBQTtJQUFJNkQsS0FBSyxFQUFFO01BQUVxQixPQUFPLEtBQUEzQixNQUFBLENBQUtiLFlBQVksT0FBSTtNQUFFRixTQUFTLEVBQUUsT0FBTztNQUFFd0MsTUFBTSxFQUFFO0lBQWlCO0VBQUUsR0FBQyxPQUFTLENBQUMsZUFDckdoRiwwREFBQTtJQUFJNkQsS0FBSyxFQUFFO01BQUVxQixPQUFPLEtBQUEzQixNQUFBLENBQUtiLFlBQVksT0FBSTtNQUFFRixTQUFTLEVBQUUsT0FBTztNQUFFd0MsTUFBTSxFQUFFO0lBQWlCO0VBQUUsR0FBQyxPQUFTLENBQ2xHLENBQ0MsQ0FBQyxlQUNSaEYsMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQTtJQUFJNkQsS0FBSyxFQUFFO01BQUVxQixPQUFPLEtBQUEzQixNQUFBLENBQUtiLFlBQVksT0FBSTtNQUFFc0MsTUFBTSxFQUFFO0lBQWlCO0VBQUUsR0FBQyx5QkFBMkIsQ0FBQyxlQUNuR2hGLDBEQUFBO0lBQUk2RCxLQUFLLEVBQUU7TUFBRXFCLE9BQU8sS0FBQTNCLE1BQUEsQ0FBS2IsWUFBWSxPQUFJO01BQUVGLFNBQVMsRUFBRSxRQUFRO01BQUV3QyxNQUFNLEVBQUU7SUFBaUI7RUFBRSxHQUFDLEdBQUssQ0FBQyxlQUNsR2hGLDBEQUFBO0lBQUk2RCxLQUFLLEVBQUU7TUFBRXFCLE9BQU8sS0FBQTNCLE1BQUEsQ0FBS2IsWUFBWSxPQUFJO01BQUVGLFNBQVMsRUFBRSxPQUFPO01BQUV3QyxNQUFNLEVBQUU7SUFBaUI7RUFBRSxHQUFDLFNBQVcsQ0FBQyxlQUN2R2hGLDBEQUFBO0lBQUk2RCxLQUFLLEVBQUU7TUFBRXFCLE9BQU8sS0FBQTNCLE1BQUEsQ0FBS2IsWUFBWSxPQUFJO01BQUVGLFNBQVMsRUFBRSxPQUFPO01BQUV3QyxNQUFNLEVBQUU7SUFBaUI7RUFBRSxHQUFDLFNBQVcsQ0FDcEcsQ0FDQyxDQUNGLENBQ1I7RUFFRCxvQkFDRWhGLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFDVm1CLE1BQU0sRUFBRSxnQkFBZ0I7TUFDeEJHLFlBQVksRUFBRSxDQUFDO01BQ2ZGLGVBQWUsRUFBRSxNQUFNO01BQ3ZCZixZQUFZLEVBQUUsRUFBRTtNQUNoQmtCLFFBQVEsRUFBRTtJQUNaLENBQUU7SUFDQUMsV0FBVyxFQUFFbkMsZUFBZ0I7SUFDN0JvQyxTQUFTLEVBQUU5QixhQUFjO0lBQ3pCK0IsWUFBWSxFQUFFL0I7RUFBYyxnQkFFNUJ4RCwwREFBQSxDQUFDSSxxREFBRztJQUFDb0YsRUFBRSxFQUFFO01BQUVDLFlBQVksRUFBRSxDQUFDO01BQUVDLFdBQVcsRUFBRSxTQUFTO01BQUVDLE9BQU8sRUFBRTtJQUFVO0VBQUUsZ0JBQ3ZFM0YsMERBQUEsQ0FBQ0UscURBQUk7SUFBQzBGLEtBQUssRUFBRS9ELFFBQVM7SUFBQ2dFLFFBQVEsRUFBRUEsQ0FBQ2hELENBQUMsRUFBRTVCLEdBQUcsS0FBS2EsV0FBVyxDQUFDYixHQUFHLENBQUU7SUFBQyxjQUFXO0VBQWMsZ0JBQ3RGakIsMERBQUEsQ0FBQ0cscURBQUc7SUFBQ08sS0FBSyxFQUFDO0VBQWlCLENBQUUsQ0FBQyxlQUMvQlYsMERBQUEsQ0FBQ0cscURBQUc7SUFBQ08sS0FBSyxFQUFDO0VBQW1CLENBQUUsQ0FBQyxlQUNqQ1YsMERBQUEsQ0FBQ0cscURBQUc7SUFBQ08sS0FBSyxFQUFDO0VBQXNCLENBQUUsQ0FDL0IsQ0FDSCxDQUFDLGVBQ05WLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRXFCLE9BQU8sRUFBRSxNQUFNO01BQUVZLFNBQVMsRUFBRTtJQUFRO0VBQUUsR0FDakRqRSxRQUFRLEtBQUssQ0FBQyxpQkFDYjdCLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRW9CLGVBQWUsRUFBRSxPQUFPO01BQUVDLE9BQU8sRUFBRSxNQUFNO01BQUVhLEtBQUssRUFBRTtJQUFRO0VBQUUsR0FDdkV0QyxZQUFZLENBQUMsU0FBUyxDQUFDLGVBQ3hCekQsMERBQUE7SUFBUzZELEtBQUssRUFBRTtNQUFFSSxLQUFLLEVBQUUsTUFBTTtNQUFFSCxPQUFPLEVBQUUsTUFBTTtNQUFFQyxjQUFjLEVBQUUsZUFBZTtNQUFFQyxVQUFVLEVBQUUsWUFBWTtNQUFFZ0MsU0FBUyxFQUFFLFlBQVk7TUFBRWQsT0FBTyxFQUFFLEtBQUs7TUFBRWhCLFlBQVksRUFBRTtJQUFPO0VBQUUsZ0JBQzNLbEUsMERBQUE7SUFDRWlHLFdBQVcsRUFBR3BELENBQUMsSUFBS0QsZUFBZSxDQUFDQyxDQUFDLEVBQUUsUUFBUSxDQUFFO0lBQ2pEZ0IsS0FBSyxFQUFFO01BQUVxQyxVQUFVLEVBQUUzRSxXQUFXLENBQUMsNEJBQTRCLENBQUMsSUFBSSxLQUFLO01BQUVtRCxVQUFVLEVBQUUsSUFBSTtNQUFFVCxLQUFLLEVBQUUsYUFBYTtNQUFFa0MsUUFBUSxFQUFFLE9BQU87TUFBRUMsTUFBTSxFQUFFO0lBQVk7RUFBRSxnQkFFMUpwRywwREFBQSx5QkFBR0EsMERBQUE7SUFBTTZELEtBQUssRUFBRTtNQUFFZSxRQUFRLEVBQUU7SUFBTztFQUFFLEdBQUMsU0FBYSxDQUFDLGVBQUE1RSwwREFBQSxXQUFLLENBQUMsZUFBQUEsMERBQUE7SUFBTTZELEtBQUssRUFBRTtNQUFFYyxVQUFVLEVBQUUsTUFBTTtNQUFFQyxRQUFRLEVBQUU7SUFBTztFQUFFLEdBQUMsY0FBa0IsQ0FBSSxDQUNoSSxDQUFDLGVBQ1Y1RSwwREFBQTtJQUNFaUcsV0FBVyxFQUFHcEQsQ0FBQyxJQUFLRCxlQUFlLENBQUNDLENBQUMsRUFBRSxVQUFVLENBQUU7SUFDbkRnQixLQUFLLEVBQUU7TUFBRXFDLFVBQVUsRUFBRSxNQUFNO01BQUVHLFdBQVcsRUFBRTlFLFdBQVcsQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLEtBQUs7TUFBRTBDLEtBQUssRUFBRSxhQUFhO01BQUVILE9BQU8sRUFBRSxPQUFPO01BQUVJLFlBQVksRUFBRSxNQUFNO01BQUVrQyxNQUFNLEVBQUU7SUFBWTtFQUFFLGdCQUVyTHBHLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRUMsT0FBTyxFQUFFLE1BQU07TUFBRXdDLG1CQUFtQixFQUFFLFVBQVU7TUFBRUMsU0FBUyxFQUFFLE1BQU07TUFBRUMsTUFBTSxFQUFFLEtBQUs7TUFBRTVCLFFBQVEsS0FBQXJCLE1BQUEsQ0FBS2QsY0FBYyxPQUFJO01BQUVnRSxZQUFZLEVBQUUsT0FBTztNQUFFQyxRQUFRLEVBQUU7SUFBVztFQUFFLGdCQUMvSzFHLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRWMsVUFBVSxFQUFFLE1BQU07TUFBRW5DLFNBQVMsRUFBRTtJQUFPO0VBQUUsR0FBQyxXQUFjLENBQUMsZUFDdEV4QywwREFBQTtJQUFLNkQsS0FBSyxFQUFFO01BQUVyQixTQUFTLEVBQUU7SUFBTztFQUFFLEdBQUMsWUFBZSxDQUFDLGVBQ25EeEMsMERBQUE7SUFBSzZELEtBQUssRUFBRTtNQUFFYyxVQUFVLEVBQUUsTUFBTTtNQUFFbkMsU0FBUyxFQUFFO0lBQU87RUFBRSxHQUFDLE1BQVMsQ0FBQyxlQUNqRXhDLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRXJCLFNBQVMsRUFBRTtJQUFPO0VBQUUsR0FBQyxZQUFlLENBQy9DLENBQ0YsQ0FDRSxDQUFDLEVBQ1RxQyxrQkFBa0IsQ0FBQyxDQUNqQixDQUNOLEVBQ0FoRCxRQUFRLEtBQUssQ0FBQyxpQkFDYjdCLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRW9CLGVBQWUsRUFBRSxPQUFPO01BQUVDLE9BQU8sRUFBRSxNQUFNO01BQUVhLEtBQUssRUFBRTtJQUFRO0VBQUUsR0FDdkV0QyxZQUFZLENBQUMsV0FBVyxDQUFDLGVBQzFCekQsMERBQUE7SUFBUzZELEtBQUssRUFBRTtNQUFFSSxLQUFLLEVBQUUsTUFBTTtNQUFFSCxPQUFPLEVBQUUsTUFBTTtNQUFFQyxjQUFjLEVBQUUsZUFBZTtNQUFFQyxVQUFVLEVBQUUsWUFBWTtNQUFFZ0MsU0FBUyxFQUFFLFlBQVk7TUFBRWQsT0FBTyxFQUFFLEtBQUs7TUFBRWhCLFlBQVksRUFBRTtJQUFPO0VBQUUsZ0JBQzNLbEUsMERBQUE7SUFDRWlHLFdBQVcsRUFBR3BELENBQUMsSUFBS0QsZUFBZSxDQUFDQyxDQUFDLEVBQUUsUUFBUSxDQUFFO0lBQ2pEZ0IsS0FBSyxFQUFFO01BQUVxQyxVQUFVLEVBQUUzRSxXQUFXLENBQUMsNEJBQTRCLENBQUMsSUFBSSxLQUFLO01BQUVtRCxVQUFVLEVBQUUsSUFBSTtNQUFFVCxLQUFLLEVBQUUsYUFBYTtNQUFFa0MsUUFBUSxFQUFFLE9BQU87TUFBRUMsTUFBTSxFQUFFO0lBQVk7RUFBRSxnQkFFMUpwRywwREFBQSx5QkFBR0EsMERBQUE7SUFBTTZELEtBQUssRUFBRTtNQUFFZSxRQUFRLEVBQUU7SUFBTztFQUFFLEdBQUMsZUFBbUIsQ0FBQyxlQUFBNUUsMERBQUEsV0FBSyxDQUFDLGVBQUFBLDBEQUFBO0lBQU02RCxLQUFLLEVBQUU7TUFBRWMsVUFBVSxFQUFFLE1BQU07TUFBRUMsUUFBUSxFQUFFO0lBQU87RUFBRSxHQUFDLFdBQWUsQ0FBSSxDQUNuSSxDQUFDLGVBQ1Y1RSwwREFBQTtJQUNFaUcsV0FBVyxFQUFHcEQsQ0FBQyxJQUFLRCxlQUFlLENBQUNDLENBQUMsRUFBRSxVQUFVLENBQUU7SUFDbkRnQixLQUFLLEVBQUU7TUFBRXFDLFVBQVUsRUFBRSxNQUFNO01BQUVHLFdBQVcsRUFBRTlFLFdBQVcsQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLEtBQUs7TUFBRTBDLEtBQUssRUFBRSxhQUFhO01BQUVILE9BQU8sRUFBRSxPQUFPO01BQUVJLFlBQVksRUFBRSxNQUFNO01BQUVrQyxNQUFNLEVBQUU7SUFBWTtFQUFFLGdCQUVyTHBHLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRUMsT0FBTyxFQUFFLE1BQU07TUFBRXdDLG1CQUFtQixFQUFFLFVBQVU7TUFBRUMsU0FBUyxFQUFFLE1BQU07TUFBRUMsTUFBTSxFQUFFLEtBQUs7TUFBRTVCLFFBQVEsS0FBQXJCLE1BQUEsQ0FBS2QsY0FBYyxPQUFJO01BQUVnRSxZQUFZLEVBQUUsT0FBTztNQUFFQyxRQUFRLEVBQUU7SUFBVztFQUFFLGdCQUMvSzFHLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRWMsVUFBVSxFQUFFLE1BQU07TUFBRW5DLFNBQVMsRUFBRTtJQUFPO0VBQUUsR0FBQyxhQUFnQixDQUFDLGVBQ3hFeEMsMERBQUE7SUFBSzZELEtBQUssRUFBRTtNQUFFckIsU0FBUyxFQUFFO0lBQU87RUFBRSxHQUFDLFlBQWUsQ0FBQyxlQUNuRHhDLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRWMsVUFBVSxFQUFFLE1BQU07TUFBRW5DLFNBQVMsRUFBRTtJQUFPO0VBQUUsR0FBQyxNQUFTLENBQUMsZUFDakV4QywwREFBQTtJQUFLNkQsS0FBSyxFQUFFO01BQUVyQixTQUFTLEVBQUU7SUFBTztFQUFFLEdBQUMsWUFBZSxDQUMvQyxDQUNGLENBQ0UsQ0FBQyxFQUNUcUMsa0JBQWtCLENBQUMsQ0FDakIsQ0FDTixFQUNBaEQsUUFBUSxLQUFLLENBQUMsaUJBQ2I3QiwwREFBQTtJQUFLNkQsS0FBSyxFQUFFO01BQUVvQixlQUFlLEVBQUUsT0FBTztNQUFFQyxPQUFPLEVBQUUsTUFBTTtNQUFFYSxLQUFLLEVBQUU7SUFBUTtFQUFFLEdBQ3ZFdEMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxlQUN4QnpELDBEQUFBO0lBQVM2RCxLQUFLLEVBQUU7TUFBRUksS0FBSyxFQUFFLE1BQU07TUFBRUgsT0FBTyxFQUFFLE1BQU07TUFBRUMsY0FBYyxFQUFFLGVBQWU7TUFBRUMsVUFBVSxFQUFFLFlBQVk7TUFBRWdDLFNBQVMsRUFBRSxZQUFZO01BQUVkLE9BQU8sRUFBRSxLQUFLO01BQUVoQixZQUFZLEVBQUU7SUFBTztFQUFFLGdCQUMzS2xFLDBEQUFBO0lBQ0VpRyxXQUFXLEVBQUdwRCxDQUFDLElBQUtELGVBQWUsQ0FBQ0MsQ0FBQyxFQUFFLFFBQVEsQ0FBRTtJQUNqRGdCLEtBQUssRUFBRTtNQUFFcUMsVUFBVSxFQUFFM0UsV0FBVyxDQUFDLDRCQUE0QixDQUFDLElBQUksS0FBSztNQUFFbUQsVUFBVSxFQUFFLElBQUk7TUFBRVQsS0FBSyxFQUFFLGFBQWE7TUFBRWtDLFFBQVEsRUFBRSxPQUFPO01BQUVDLE1BQU0sRUFBRTtJQUFZO0VBQUUsZ0JBRTFKcEcsMERBQUEsWUFBRyxjQUFZLGVBQUFBLDBEQUFBLFdBQUssQ0FBQyxlQUFBQSwwREFBQTtJQUFNNkQsS0FBSyxFQUFFO01BQUVjLFVBQVUsRUFBRTtJQUFPO0VBQUUsR0FBQyxZQUFnQixDQUFJLENBQ3ZFLENBQUMsZUFDVjNFLDBEQUFBO0lBQ0VpRyxXQUFXLEVBQUdwRCxDQUFDLElBQUtELGVBQWUsQ0FBQ0MsQ0FBQyxFQUFFLFVBQVUsQ0FBRTtJQUNuRGdCLEtBQUssRUFBRTtNQUFFcUMsVUFBVSxFQUFFLE1BQU07TUFBRUcsV0FBVyxFQUFFOUUsV0FBVyxDQUFDLCtCQUErQixDQUFDLElBQUksS0FBSztNQUFFMEMsS0FBSyxFQUFFLGFBQWE7TUFBRUgsT0FBTyxFQUFFLE9BQU87TUFBRUksWUFBWSxFQUFFLE1BQU07TUFBRWtDLE1BQU0sRUFBRTtJQUFZO0VBQUUsZ0JBRXJMcEcsMERBQUE7SUFBSzZELEtBQUssRUFBRTtNQUFFQyxPQUFPLEVBQUUsTUFBTTtNQUFFd0MsbUJBQW1CLEVBQUUsVUFBVTtNQUFFQyxTQUFTLEVBQUUsTUFBTTtNQUFFQyxNQUFNLEVBQUUsS0FBSztNQUFFNUIsUUFBUSxLQUFBckIsTUFBQSxDQUFLZCxjQUFjLE9BQUk7TUFBRWdFLFlBQVksRUFBRSxPQUFPO01BQUVDLFFBQVEsRUFBRTtJQUFXO0VBQUUsZ0JBQy9LMUcsMERBQUE7SUFBSzZELEtBQUssRUFBRTtNQUFFYyxVQUFVLEVBQUUsTUFBTTtNQUFFbkMsU0FBUyxFQUFFO0lBQU87RUFBRSxHQUFDLE9BQVUsQ0FBQyxlQUNsRXhDLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRXJCLFNBQVMsRUFBRTtJQUFPO0VBQUUsR0FBQyxZQUFlLENBQUMsZUFDbkR4QywwREFBQTtJQUFLNkQsS0FBSyxFQUFFO01BQUVjLFVBQVUsRUFBRSxNQUFNO01BQUVuQyxTQUFTLEVBQUU7SUFBTztFQUFFLEdBQUMsTUFBUyxDQUFDLGVBQ2pFeEMsMERBQUE7SUFBSzZELEtBQUssRUFBRTtNQUFFckIsU0FBUyxFQUFFO0lBQU87RUFBRSxHQUFDLFlBQWUsQ0FBQyxlQUNuRHhDLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRWMsVUFBVSxFQUFFLE1BQU07TUFBRW5DLFNBQVMsRUFBRTtJQUFPO0VBQUUsR0FBQyxNQUFTLENBQUMsZUFDakV4QywwREFBQTtJQUFLNkQsS0FBSyxFQUFFO01BQUVyQixTQUFTLEVBQUU7SUFBTztFQUFFLEdBQUMsTUFBUyxDQUN6QyxDQUNGLENBQ0UsQ0FBQyxlQUNWeEMsMERBQUE7SUFBTzZELEtBQUssRUFBRTtNQUFFSSxLQUFLLEVBQUUsTUFBTTtNQUFFVyxRQUFRLEtBQUFyQixNQUFBLENBQUtkLGNBQWMsT0FBSTtNQUFFc0MsU0FBUyxFQUFFLE1BQU07TUFBRUMsTUFBTSxFQUFFLGdCQUFnQjtNQUFFRixjQUFjLEVBQUU7SUFBVztFQUFFLGdCQUN4STlFLDBEQUFBLDZCQUNFQSwwREFBQTtJQUFJNkQsS0FBSyxFQUFFO01BQUVvQixlQUFlLEVBQUU7SUFBVTtFQUFFLGdCQUN4Q2pGLDBEQUFBO0lBQUk2RCxLQUFLLEVBQUU7TUFBRXFCLE9BQU8sS0FBQTNCLE1BQUEsQ0FBS2IsWUFBWSxPQUFJO01BQUVGLFNBQVMsRUFBRSxRQUFRO01BQUV3QyxNQUFNLEVBQUU7SUFBaUI7RUFBRSxHQUFDLEdBQUssQ0FBQyxlQUNsR2hGLDBEQUFBO0lBQUk2RCxLQUFLLEVBQUU7TUFBRXFCLE9BQU8sS0FBQTNCLE1BQUEsQ0FBS2IsWUFBWSxPQUFJO01BQUVGLFNBQVMsRUFBRSxRQUFRO01BQUV3QyxNQUFNLEVBQUU7SUFBaUI7RUFBRSxHQUFDLE1BQVEsQ0FBQyxlQUNyR2hGLDBEQUFBO0lBQUk2RCxLQUFLLEVBQUU7TUFBRXFCLE9BQU8sS0FBQTNCLE1BQUEsQ0FBS2IsWUFBWSxPQUFJO01BQUVGLFNBQVMsRUFBRSxPQUFPO01BQUV3QyxNQUFNLEVBQUU7SUFBaUI7RUFBRSxHQUFDLGFBQWUsQ0FDeEcsQ0FDQyxDQUFDLGVBQ1JoRiwwREFBQSw2QkFDRUEsMERBQUEsMEJBQ0VBLDBEQUFBO0lBQUk2RCxLQUFLLEVBQUU7TUFBRXFCLE9BQU8sS0FBQTNCLE1BQUEsQ0FBS2IsWUFBWSxPQUFJO01BQUVGLFNBQVMsRUFBRSxRQUFRO01BQUV3QyxNQUFNLEVBQUU7SUFBaUI7RUFBRSxHQUFDLFlBQWMsQ0FBQyxlQUMzR2hGLDBEQUFBO0lBQUk2RCxLQUFLLEVBQUU7TUFBRXFCLE9BQU8sS0FBQTNCLE1BQUEsQ0FBS2IsWUFBWSxPQUFJO01BQUVGLFNBQVMsRUFBRSxRQUFRO01BQUV3QyxNQUFNLEVBQUU7SUFBaUI7RUFBRSxHQUFDLFlBQWMsQ0FBQyxlQUMzR2hGLDBEQUFBO0lBQUk2RCxLQUFLLEVBQUU7TUFBRXFCLE9BQU8sS0FBQTNCLE1BQUEsQ0FBS2IsWUFBWSxPQUFJO01BQUVGLFNBQVMsRUFBRSxPQUFPO01BQUV3QyxNQUFNLEVBQUU7SUFBaUI7RUFBRSxHQUFDLFNBQVcsQ0FDcEcsQ0FDQyxDQUNGLENBQ0osQ0FFSixDQUNGLENBQUM7QUFFVjtBQUVBLFNBQVMyQixxQkFBcUJBLENBQUEsRUFBRztFQUMvQixJQUFBQyxnQkFBQSxHQUE4Q3ZHLGtFQUFlLENBQUMsQ0FBQztJQUF2RHdHLE1BQU0sR0FBQUQsZ0JBQUEsQ0FBTkMsTUFBTTtJQUFFQyxZQUFZLEdBQUFGLGdCQUFBLENBQVpFLFlBQVk7SUFBRUMsV0FBVyxHQUFBSCxnQkFBQSxDQUFYRyxXQUFXOztFQUV6QztFQUNBLElBQUFDLFVBQUEsR0FBc0MvRywrQ0FBUSxDQUFBcUQsYUFBQSxLQUFNdUQsTUFBTSxDQUFFLENBQUM7SUFBQUksVUFBQSxHQUFBckYsY0FBQSxDQUFBb0YsVUFBQTtJQUF0RHpGLFdBQVcsR0FBQTBGLFVBQUE7SUFBRXpGLGNBQWMsR0FBQXlGLFVBQUE7RUFDbEMsSUFBQUMsVUFBQSxHQUEwQmpILCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFrSCxVQUFBLEdBQUF2RixjQUFBLENBQUFzRixVQUFBO0lBQWxDRSxLQUFLLEdBQUFELFVBQUE7SUFBRTFGLFFBQVEsR0FBQTBGLFVBQUE7RUFFdEIsSUFBTUUsWUFBWSxHQUFHQSxDQUFDNUcsR0FBRyxFQUFFNkcsUUFBUSxLQUFLO0lBQ3RDLElBQU0xQixLQUFLLEdBQUcwQixRQUFRLEdBQUcsSUFBSTtJQUM3QjlGLGNBQWMsQ0FBQzZCLElBQUksSUFBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQVVELElBQUk7TUFBRSxDQUFDNUMsR0FBRyxHQUFHbUY7SUFBSyxFQUFHLENBQUM7SUFDbkRuRSxRQUFRLENBQUMsS0FBSyxDQUFDO0VBQ2pCLENBQUM7RUFFRCxJQUFNOEYsZUFBZSxHQUFHQSxDQUFDOUcsR0FBRyxFQUFFbUYsS0FBSyxLQUFLO0lBQ3RDcEUsY0FBYyxDQUFDNkIsSUFBSSxJQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FBVUQsSUFBSTtNQUFFLENBQUM1QyxHQUFHLEdBQUdtRjtJQUFLLEVBQUcsQ0FBQztJQUNuRG5FLFFBQVEsQ0FBQyxLQUFLLENBQUM7RUFDakIsQ0FBQztFQUVELElBQU0rRixVQUFVLEdBQUdBLENBQUEsS0FBTTtJQUN2QkMsTUFBTSxDQUFDQyxPQUFPLENBQUNuRyxXQUFXLENBQUMsQ0FBQ29HLE9BQU8sQ0FBQ0MsS0FBQSxJQUFrQjtNQUFBLElBQUFDLEtBQUEsR0FBQWpHLGNBQUEsQ0FBQWdHLEtBQUE7UUFBaEJuSCxHQUFHLEdBQUFvSCxLQUFBO1FBQUVqQyxLQUFLLEdBQUFpQyxLQUFBO01BQzlDZixZQUFZLENBQUNyRyxHQUFHLEVBQUVtRixLQUFLLENBQUM7SUFDMUIsQ0FBQyxDQUFDO0lBQ0ZuRSxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ2RxRyxVQUFVLENBQUMsTUFBTXJHLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDekMsQ0FBQztFQUVELElBQU1zRyxXQUFXLEdBQUdBLENBQUEsS0FBTTtJQUN4QnZHLGNBQWMsQ0FBQThCLGFBQUEsS0FBTWhELHVEQUFhLENBQUUsQ0FBQztJQUNwQ3lHLFdBQVcsQ0FBQyxDQUFDO0lBQ2J0RixRQUFRLENBQUMsS0FBSyxDQUFDO0VBQ2pCLENBQUM7RUFFRCxvQkFDRXpCLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRUMsT0FBTyxFQUFFLE1BQU07TUFBRWtFLEdBQUcsRUFBRSxNQUFNO01BQUVoRSxVQUFVLEVBQUUsU0FBUztNQUFFTSxRQUFRLEVBQUUsTUFBTTtNQUFFWSxPQUFPLEVBQUU7SUFBUTtFQUFFLGdCQUd0R2xGLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRW9FLElBQUksRUFBRSxTQUFTO01BQUU5QixRQUFRLEVBQUU7SUFBUTtFQUFFLGdCQUNqRG5HLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRUssWUFBWSxFQUFFO0lBQUc7RUFBRSxnQkFDL0JsRSwwREFBQTtJQUFJNkQsS0FBSyxFQUFFO01BQUVXLE1BQU0sRUFBRSxTQUFTO01BQUV1QixLQUFLLEVBQUUsU0FBUztNQUFFbkIsUUFBUSxFQUFFO0lBQUc7RUFBRSxHQUFDLGlDQUF1QyxDQUFDLGVBQzFHNUUsMERBQUE7SUFBRzZELEtBQUssRUFBRTtNQUFFVyxNQUFNLEVBQUUsQ0FBQztNQUFFSSxRQUFRLEVBQUUsRUFBRTtNQUFFbUIsS0FBSyxFQUFFO0lBQU87RUFBRSxHQUFDLDJMQUc5QyxlQUFBL0YsMERBQUEsaUJBQVEsY0FBd0IsQ0FBQyxnQ0FDdEMsQ0FDQSxDQUFDLEVBR1BRLE9BQU8sQ0FBQzBILEdBQUcsQ0FBQ0MsS0FBQSxJQUF1RDtJQUFBLElBQXBEMUgsR0FBRyxHQUFBMEgsS0FBQSxDQUFIMUgsR0FBRztNQUFFQyxLQUFLLEdBQUF5SCxLQUFBLENBQUx6SCxLQUFLO01BQUVDLElBQUksR0FBQXdILEtBQUEsQ0FBSnhILElBQUk7TUFBRUMsR0FBRyxHQUFBdUgsS0FBQSxDQUFIdkgsR0FBRztNQUFFQyxHQUFHLEdBQUFzSCxLQUFBLENBQUh0SCxHQUFHO01BQUVDLElBQUksR0FBQXFILEtBQUEsQ0FBSnJILElBQUk7TUFBRUMsV0FBVyxHQUFBb0gsS0FBQSxDQUFYcEgsV0FBVztJQUMzRCxJQUFNcUgsU0FBUyxHQUFHcEgsT0FBTyxDQUFDTyxXQUFXLENBQUNkLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLG9CQUNFVCwwREFBQTtNQUFLUyxHQUFHLEVBQUVBLEdBQUk7TUFBQ29ELEtBQUssRUFBRTtRQUFFSyxZQUFZLEVBQUUsRUFBRTtRQUFFZSxlQUFlLEVBQUUsU0FBUztRQUFFRSxZQUFZLEVBQUUsQ0FBQztRQUFFRCxPQUFPLEVBQUUsV0FBVztRQUFFRixNQUFNLEVBQUU7TUFBb0I7SUFBRSxnQkFDekloRiwwREFBQTtNQUFLNkQsS0FBSyxFQUFFO1FBQUVDLE9BQU8sRUFBRSxNQUFNO1FBQUVDLGNBQWMsRUFBRSxlQUFlO1FBQUVDLFVBQVUsRUFBRSxRQUFRO1FBQUVFLFlBQVksRUFBRTtNQUFFO0lBQUUsZ0JBQ3RHbEUsMERBQUE7TUFBTzZELEtBQUssRUFBRTtRQUFFYyxVQUFVLEVBQUUsR0FBRztRQUFFQyxRQUFRLEVBQUUsRUFBRTtRQUFFbUIsS0FBSyxFQUFFLFNBQVM7UUFBRWpDLE9BQU8sRUFBRSxPQUFPO1FBQUVvQixPQUFPLEVBQUUsQ0FBQztRQUFFVixNQUFNLEVBQUU7TUFBRTtJQUFFLEdBQ3hHOUQsS0FDSSxDQUFDLGVBQ1JWLDBEQUFBO01BQU02RCxLQUFLLEVBQUU7UUFBRWMsVUFBVSxFQUFFLEdBQUc7UUFBRW9CLEtBQUssRUFBRSxTQUFTO1FBQUVuQixRQUFRLEVBQUUsRUFBRTtRQUFFdUIsUUFBUSxFQUFFLEVBQUU7UUFBRTNELFNBQVMsRUFBRTtNQUFRO0lBQUUsR0FDaEc0RixTQUFTLEVBQUV6SCxJQUNSLENBQ0gsQ0FBQyxlQUNOWCwwREFBQTtNQUNFcUksSUFBSSxFQUFDLE9BQU87TUFDWnpILEdBQUcsRUFBRUEsR0FBSTtNQUNUQyxHQUFHLEVBQUVBLEdBQUk7TUFDVEMsSUFBSSxFQUFFQSxJQUFLO01BQ1g4RSxLQUFLLEVBQUV3QyxTQUFVO01BQ2pCdkMsUUFBUSxFQUFFaEQsQ0FBQyxJQUFJd0UsWUFBWSxDQUFDNUcsR0FBRyxFQUFFNkgsTUFBTSxDQUFDekYsQ0FBQyxDQUFDMEYsTUFBTSxDQUFDM0MsS0FBSyxDQUFDLENBQUU7TUFDekQvQixLQUFLLEVBQUU7UUFBRUksS0FBSyxFQUFFLE1BQU07UUFBRXVFLFdBQVcsRUFBRSxTQUFTO1FBQUVwQyxNQUFNLEVBQUU7TUFBVTtJQUFFLENBQ3JFLENBQUMsZUFDRnBHLDBEQUFBO01BQUs2RCxLQUFLLEVBQUU7UUFBRUMsT0FBTyxFQUFFLE1BQU07UUFBRUMsY0FBYyxFQUFFLGVBQWU7UUFBRWEsUUFBUSxFQUFFLEVBQUU7UUFBRW1CLEtBQUssRUFBRSxNQUFNO1FBQUVoQixTQUFTLEVBQUU7TUFBRTtJQUFFLGdCQUMxRy9FLDBEQUFBLGVBQU9ZLEdBQUcsRUFBRUQsSUFBVyxDQUFDLGVBQ3hCWCwwREFBQTtNQUFNNkQsS0FBSyxFQUFFO1FBQUVlLFFBQVEsRUFBRSxFQUFFO1FBQUVtQixLQUFLLEVBQUUsTUFBTTtRQUFFdkQsU0FBUyxFQUFFLFFBQVE7UUFBRXlGLElBQUksRUFBRSxDQUFDO1FBQUUvQyxPQUFPLEVBQUU7TUFBUTtJQUFFLEdBQUVuRSxXQUFrQixDQUFDLGVBQ2xIZiwwREFBQSxlQUFPYSxHQUFHLEVBQUVGLElBQVcsQ0FDcEIsQ0FDRixDQUFDO0VBRVYsQ0FBQyxDQUFDLGVBR0ZYLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRUssWUFBWSxFQUFFLEVBQUU7TUFBRWUsZUFBZSxFQUFFLFNBQVM7TUFBRUUsWUFBWSxFQUFFLENBQUM7TUFBRUQsT0FBTyxFQUFFLFdBQVc7TUFBRUYsTUFBTSxFQUFFO0lBQW9CO0VBQUUsZ0JBQy9IaEYsMERBQUE7SUFBTzZELEtBQUssRUFBRTtNQUFFYyxVQUFVLEVBQUUsR0FBRztNQUFFQyxRQUFRLEVBQUUsRUFBRTtNQUFFbUIsS0FBSyxFQUFFLFNBQVM7TUFBRWpDLE9BQU8sRUFBRSxPQUFPO01BQUVJLFlBQVksRUFBRSxDQUFDO01BQUVnQixPQUFPLEVBQUU7SUFBRTtFQUFFLEdBQUMsdUJBRTNHLENBQUMsZUFDUmxGLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRUMsT0FBTyxFQUFFLE1BQU07TUFBRWtFLEdBQUcsRUFBRTtJQUFHO0VBQUUsR0FDdEMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDRSxHQUFHLENBQUNPLEtBQUssaUJBQ3BDekksMERBQUE7SUFDRVMsR0FBRyxFQUFFZ0ksS0FBTTtJQUNYQyxPQUFPLEVBQUVBLENBQUEsS0FBTW5CLGVBQWUsQ0FBQyx5QkFBeUIsRUFBRWtCLEtBQUssQ0FBRTtJQUNqRTVFLEtBQUssRUFBRTtNQUNMcUIsT0FBTyxFQUFFLFVBQVU7TUFDbkJDLFlBQVksRUFBRSxDQUFDO01BQ2ZILE1BQU0sRUFBRSxXQUFXO01BQ25CVSxXQUFXLEVBQUVuRSxXQUFXLENBQUMseUJBQXlCLENBQUMsS0FBS2tILEtBQUssR0FBRyxTQUFTLEdBQUcsTUFBTTtNQUNsRnhELGVBQWUsRUFBRTFELFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLa0gsS0FBSyxHQUFHLFNBQVMsR0FBRyxNQUFNO01BQ3RGMUMsS0FBSyxFQUFFeEUsV0FBVyxDQUFDLHlCQUF5QixDQUFDLEtBQUtrSCxLQUFLLEdBQUcsTUFBTSxHQUFHLE1BQU07TUFDekU5RCxVQUFVLEVBQUUsR0FBRztNQUNmQyxRQUFRLEVBQUUsRUFBRTtNQUNad0IsTUFBTSxFQUFFLFNBQVM7TUFDakJ1QyxhQUFhLEVBQUUsWUFBWTtNQUMzQkMsVUFBVSxFQUFFO0lBQ2Q7RUFBRSxHQUVESCxLQUNLLENBQ1QsQ0FDRSxDQUFDLGVBQ056SSwwREFBQTtJQUFHNkQsS0FBSyxFQUFFO01BQUVlLFFBQVEsRUFBRSxFQUFFO01BQUVtQixLQUFLLEVBQUUsTUFBTTtNQUFFdkIsTUFBTSxFQUFFO0lBQVU7RUFBRSxHQUFDLG9FQUUzRCxDQUNBLENBQUMsZUFHTnhFLDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRUMsT0FBTyxFQUFFLE1BQU07TUFBRWtFLEdBQUcsRUFBRSxFQUFFO01BQUVqRCxTQUFTLEVBQUU7SUFBRztFQUFFLGdCQUN0RC9FLDBEQUFBO0lBQ0UwSSxPQUFPLEVBQUVYLFdBQVk7SUFDckJsRSxLQUFLLEVBQUU7TUFBRXFCLE9BQU8sRUFBRSxXQUFXO01BQUVDLFlBQVksRUFBRSxDQUFDO01BQUVILE1BQU0sRUFBRSxNQUFNO01BQUVDLGVBQWUsRUFBRSxTQUFTO01BQUVjLEtBQUssRUFBRSxNQUFNO01BQUVwQixVQUFVLEVBQUUsTUFBTTtNQUFFeUIsTUFBTSxFQUFFLFNBQVM7TUFBRTZCLElBQUksRUFBRTtJQUFFO0VBQUUsR0FDN0osZ0JBRU8sQ0FBQyxlQUNUakksMERBQUE7SUFDRTBJLE9BQU8sRUFBRWxCLFVBQVc7SUFDcEIzRCxLQUFLLEVBQUU7TUFBRXFCLE9BQU8sRUFBRSxXQUFXO01BQUVDLFlBQVksRUFBRSxDQUFDO01BQUVILE1BQU0sRUFBRSxNQUFNO01BQUVDLGVBQWUsRUFBRW1DLEtBQUssR0FBRyxTQUFTLEdBQUcsU0FBUztNQUFFckIsS0FBSyxFQUFFLE9BQU87TUFBRXBCLFVBQVUsRUFBRSxNQUFNO01BQUV5QixNQUFNLEVBQUUsU0FBUztNQUFFNkIsSUFBSSxFQUFFLENBQUM7TUFBRVcsVUFBVSxFQUFFO0lBQXdCO0VBQUUsR0FFck54QixLQUFLLEdBQUcsUUFBUSxHQUFHLGNBQ2QsQ0FDTCxDQUNGLENBQUMsZUFHTnBILDBEQUFBO0lBQUs2RCxLQUFLLEVBQUU7TUFBRW9FLElBQUksRUFBRTtJQUFJO0VBQUUsZ0JBQ3hCakksMERBQUE7SUFBSzZELEtBQUssRUFBRTtNQUFFNkMsUUFBUSxFQUFFLFFBQVE7TUFBRW1DLEdBQUcsRUFBRTtJQUFPO0VBQUUsZ0JBQzlDN0ksMERBQUEsQ0FBQ3FCLG1CQUFtQjtJQUFDRSxXQUFXLEVBQUVBLFdBQVk7SUFBQ0MsY0FBYyxFQUFFQSxjQUFlO0lBQUNDLFFBQVEsRUFBRUE7RUFBUyxDQUFFLENBQ2pHLENBQ0YsQ0FFRixDQUFDO0FBRVI7QUFFQSxpRUFBZWtGLHFCQUFxQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvWXBDLENBQW1EO0FBQy9CO0FBQ2dDO0FBQ3NCO0FBQ1I7QUFDK0g7QUFDakk7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ0k7QUFDSTtBQUNWO0FBQ1U7QUFDYztBQUNJO0FBQ1g7QUFDN0I7QUFDa0I7QUFDb0M7QUFDeEI7QUFDUjtBQUNHO0FBQ0k7QUFDTDtBQUNBO0FBQ1E7QUFDaEI7QUFDd0M7QUFHbEYsSUFBTW1GLFdBQVcsR0FBR3pDLHlEQUFNLENBQUMvSCxJQUFBO0VBQUEsSUFBR3lLLFNBQVMsR0FBQXpLLElBQUEsQ0FBVHlLLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBM0ssSUFBQSxFQUFBNEssU0FBQTtFQUFBLG9CQUMvQ2xNLDBEQUFBLENBQUNpSyw2REFBTyxFQUFBa0MsUUFBQSxLQUFLSCxLQUFLO0lBQUVJLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVOO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNuRSxLQUFBO0VBQUEsSUFBRzBFLEtBQUssR0FBQTFFLEtBQUEsQ0FBTDBFLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUEvSSxNQUFBLENBQU8yRyw2REFBYyxDQUFDcUMsT0FBTyxJQUFLO01BQ2hDdEgsZUFBZSxFQUFFLFNBQVM7TUFDMUJjLEtBQUssRUFBRSxPQUFPO01BQ2R5RyxTQUFTLEVBQUVGLEtBQUssQ0FBQ0csT0FBTyxDQUFDLENBQUMsQ0FBQztNQUMzQjdILFFBQVEsRUFBRTtJQUNaO0VBQ0YsQ0FBQztBQUFBLENBQUMsQ0FBQztBQUNILElBQU04SCxXQUFXLEdBQUcsR0FBRztBQUN2QixJQUFNQyxNQUFNLEdBQUd0RCx5REFBTSxDQUFDYyw0REFBUyxFQUFFO0VBQy9CeUMsaUJBQWlCLEVBQUdDLElBQUksSUFBS0EsSUFBSSxLQUFLO0FBQ3hDLENBQUMsQ0FBQyxDQUFDaEYsS0FBQTtFQUFBLElBQUd5RSxLQUFLLEdBQUF6RSxLQUFBLENBQUx5RSxLQUFLO0lBQUVRLElBQUksR0FBQWpGLEtBQUEsQ0FBSmlGLElBQUk7RUFBQSxPQUFBeEosYUFBQTtJQUNmeUosTUFBTSxFQUFFVCxLQUFLLENBQUNTLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDL0JwRSxVQUFVLEVBQUUwRCxLQUFLLENBQUNXLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFO01BQ3hEQyxNQUFNLEVBQUViLEtBQUssQ0FBQ1csV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7TUFDdENDLFFBQVEsRUFBRWYsS0FBSyxDQUFDVyxXQUFXLENBQUNJLFFBQVEsQ0FBQ0M7SUFDdkMsQ0FBQztFQUFDLEdBQ0VSLElBQUksSUFBSTtJQUNWNUcsVUFBVSxFQUFFd0csV0FBVztJQUN2QnpJLEtBQUssaUJBQUFWLE1BQUEsQ0FBaUJtSixXQUFXLFFBQUs7SUFDdEM5RCxVQUFVLEVBQUUwRCxLQUFLLENBQUNXLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFO01BQ3hEQyxNQUFNLEVBQUViLEtBQUssQ0FBQ1csV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7TUFDdENDLFFBQVEsRUFBRWYsS0FBSyxDQUFDVyxXQUFXLENBQUNJLFFBQVEsQ0FBQ0U7SUFDdkMsQ0FBQztFQUNILENBQUM7QUFBQSxDQUNELENBQUM7QUFDSCxJQUFNQyxNQUFNLEdBQUduRSx5REFBTSxDQUFDaUIsNkRBQVMsRUFBRTtFQUFFc0MsaUJBQWlCLEVBQUdDLElBQUksSUFBS0EsSUFBSSxLQUFLO0FBQU8sQ0FBQyxDQUFDLENBQ2hGMUUsS0FBQTtFQUFBLElBQUdtRSxLQUFLLEdBQUFuRSxLQUFBLENBQUxtRSxLQUFLO0lBQUVRLElBQUksR0FBQTNFLEtBQUEsQ0FBSjJFLElBQUk7RUFBQSxPQUFRO0lBQ3BCLG9CQUFvQixFQUFBeEosYUFBQTtNQUNsQm9ELFFBQVEsRUFBRSxVQUFVO01BQ3BCK0csVUFBVSxFQUFFLFFBQVE7TUFDcEJ4SixLQUFLLEVBQUV5SSxXQUFXO01BQ2xCOUQsVUFBVSxFQUFFMEQsS0FBSyxDQUFDVyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDNUNDLE1BQU0sRUFBRWIsS0FBSyxDQUFDVyxXQUFXLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztRQUN0Q0MsUUFBUSxFQUFFZixLQUFLLENBQUNXLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDRTtNQUN2QyxDQUFDLENBQUM7TUFDRnZILFNBQVMsRUFBRTtJQUFZLEdBQ25CLENBQUM4RyxJQUFJLElBQUk7TUFDWFksU0FBUyxFQUFFLFFBQVE7TUFDbkI5RSxVQUFVLEVBQUUwRCxLQUFLLENBQUNXLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLE9BQU8sRUFBRTtRQUM1Q0MsTUFBTSxFQUFFYixLQUFLLENBQUNXLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1FBQ3RDQyxRQUFRLEVBQUVmLEtBQUssQ0FBQ1csV0FBVyxDQUFDSSxRQUFRLENBQUNDO01BQ3ZDLENBQUMsQ0FBQztNQUNGckosS0FBSyxFQUFFcUksS0FBSyxDQUFDcUIsT0FBTyxDQUFDLENBQUMsQ0FBQztNQUN2QixDQUFDckIsS0FBSyxDQUFDc0IsV0FBVyxDQUFDQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUc7UUFDNUI1SixLQUFLLEVBQUVxSSxLQUFLLENBQUNxQixPQUFPLENBQUMsQ0FBQztNQUN4QjtJQUNGLENBQUM7RUFFTCxDQUFDO0FBQUEsQ0FDSCxDQUFDO0FBQ0QsU0FBU0csaUJBQWlCQSxDQUFBLEVBQUc7RUFBQSxJQUFBQyxXQUFBLEVBQUFDLFdBQUE7RUFDM0IsSUFBTUMsUUFBUSxHQUFHMUMsOERBQVcsQ0FBQyxDQUFDO0VBQzlCLElBQU0yQyxRQUFRLEdBQUduRCx5REFBVyxDQUFDLENBQUM7RUFDOUIsSUFBTW9ELElBQUksR0FBR25ELHlEQUFXLENBQUNJLHdFQUFpQixDQUFDO0VBRTNDdEMsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBTXNGLFlBQVksR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2pELElBQU1DLFNBQVM7TUFBQSxJQUFBQyxLQUFBLEdBQUFDLGlCQUFBLENBQUcsYUFBWTtRQUM1QixJQUFJTCxZQUFZLEVBQUU7VUFDaEIsSUFBSTtZQUNGLElBQU1NLEdBQUcsU0FBU3pELDhDQUFLLENBQUMwRCxHQUFHLElBQUFwTCxNQUFBLENBQUkySCxxREFBWSx3QkFBQTNILE1BQUEsQ0FBcUI2SyxZQUFZLENBQUUsQ0FBQztZQUMvRSxJQUFNUSxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNDLFlBQVk7WUFDdkMsSUFBTUMsSUFBSSxHQUFHTCxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDRyxJQUFJO1lBQy9CZCxRQUFRLENBQUM3QyxrRUFBTyxDQUFDO2NBQUU0RCxRQUFRLEVBQUVMLElBQUk7Y0FBRUksSUFBSSxFQUFFRDtZQUFLLENBQUMsQ0FBQyxDQUFDO1VBQ25ELENBQUMsQ0FBQyxPQUFPRyxLQUFLLEVBQUU7WUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsc0JBQXNCLEVBQUVBLEtBQUssQ0FBQztVQUM5QztRQUNGLENBQUMsTUFBTTtVQUNMakIsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNmO01BQ0YsQ0FBQztNQUFBLGdCQWJLTSxTQUFTQSxDQUFBO1FBQUEsT0FBQUMsS0FBQSxDQUFBWSxLQUFBLE9BQUFDLFNBQUE7TUFBQTtJQUFBLEdBYWQ7SUFDRGQsU0FBUyxDQUFDLENBQUM7RUFDYixDQUFDLEVBQUUsQ0FBQ0wsUUFBUSxDQUFDLENBQUM7RUFFZCxJQUFNb0IsWUFBWSxHQUFHQSxDQUFBLEtBQU07SUFDekJqQixZQUFZLENBQUNrQixVQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CckIsUUFBUSxDQUFDL0MsaUVBQU0sQ0FBQyxDQUFDLENBQUM7SUFDbEI4QyxRQUFRLENBQUMsR0FBRyxDQUFDO0VBQ2YsQ0FBQztFQUNELElBQUF1QixlQUFBLEdBQThCeFAscURBQWMsQ0FBQyxJQUFJLENBQUM7SUFBQXlQLGdCQUFBLEdBQUE3TixjQUFBLENBQUE0TixlQUFBO0lBQTNDRSxPQUFPLEdBQUFELGdCQUFBO0lBQUVFLFVBQVUsR0FBQUYsZ0JBQUE7RUFDMUIsSUFBTUcsWUFBWSxHQUFHQSxDQUFBLEtBQU07SUFDekJELFVBQVUsQ0FBQyxDQUFDRCxPQUFPLENBQUM7RUFDdEIsQ0FBQztFQUNELElBQUFHLGdCQUFBLEdBQWdDN1AscURBQWMsQ0FBQyxDQUFDLENBQUM7SUFBQThQLGdCQUFBLEdBQUFsTyxjQUFBLENBQUFpTyxnQkFBQTtJQUExQ2hPLFFBQVEsR0FBQWlPLGdCQUFBO0lBQUVoTyxXQUFXLEdBQUFnTyxnQkFBQTtFQUM1QixJQUFNQyxlQUFlLEdBQUdBLENBQUNDLEtBQUssRUFBRUMsUUFBUSxLQUFLO0lBQzNDbk8sV0FBVyxDQUFDbU8sUUFBUSxDQUFDO0VBQ3ZCLENBQUM7RUFFRCxJQUFBdk8sU0FBQSxHQUE4Q3pCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUEwQixVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUF0RHdPLGVBQWUsR0FBQXZPLFVBQUE7SUFBRXdPLGtCQUFrQixHQUFBeE8sVUFBQTtFQUMxQ21ILGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQU1zSCxXQUFXO01BQUEsSUFBQUMsS0FBQSxHQUFBNUIsaUJBQUEsQ0FBRyxhQUFZO1FBQzlCLElBQUk7VUFBQSxJQUFBNkIsVUFBQSxFQUFBQyxXQUFBO1VBQ0YsSUFBTXRCLFFBQVEsR0FBR2QsSUFBSSxhQUFKQSxJQUFJLGdCQUFBbUMsVUFBQSxHQUFKbkMsSUFBSSxDQUFFVSxJQUFJLGNBQUF5QixVQUFBLHVCQUFWQSxVQUFBLENBQVlyQixRQUFRO1VBQ3JDLElBQU11QixNQUFNLEdBQUdyQyxJQUFJLGFBQUpBLElBQUksZ0JBQUFvQyxXQUFBLEdBQUpwQyxJQUFJLENBQUVVLElBQUksY0FBQTBCLFdBQUEsdUJBQVZBLFdBQUEsQ0FBWUUsR0FBRztVQUM5QixJQUFJLENBQUN4QixRQUFRLEVBQUU7VUFFZixJQUFJQSxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ3JCa0Isa0JBQWtCLENBQUMsSUFBSSxDQUFDO1lBQ3hCO1VBQ0Y7VUFFQSxJQUFNekIsR0FBRyxTQUFTekQsOENBQUssQ0FBQzBELEdBQUcsSUFBQXBMLE1BQUEsQ0FBSTJILHFEQUFZLGlCQUFjLENBQUM7VUFDMUQsSUFBTXdGLFFBQVEsR0FBR2hDLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUM4QixLQUFLLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQ25EQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0MsTUFBTSxLQUFLUCxNQUNwQixDQUFDO1VBRUQsSUFBSUUsUUFBUSxJQUFJTSxLQUFLLENBQUNDLE9BQU8sQ0FBQ1AsUUFBUSxDQUFDUSxPQUFPLENBQUMsRUFBRTtZQUMvQyxJQUFNQyxPQUFPLEdBQUdULFFBQVEsQ0FBQ1EsT0FBTyxDQUFDRSxJQUFJLENBQUNDLENBQUMsSUFBSTtjQUFBLElBQUFDLFNBQUE7Y0FDekMsSUFBTUMsSUFBSSxHQUFHLE9BQU9GLENBQUMsS0FBSyxRQUFRLEdBQUdBLENBQUMsR0FBSSxDQUFBQSxDQUFDLGFBQURBLENBQUMsdUJBQURBLENBQUMsQ0FBRUcsVUFBVSxNQUFJSCxDQUFDLGFBQURBLENBQUMsdUJBQURBLENBQUMsQ0FBRUUsSUFBSSxNQUFJRixDQUFDLGFBQURBLENBQUMsdUJBQURBLENBQUMsQ0FBRUksTUFBTSxLQUFJLEVBQUc7Y0FDdEYsT0FBT0YsSUFBSSxLQUFLLGNBQWMsS0FBSUYsQ0FBQyxhQUFEQSxDQUFDLGdCQUFBQyxTQUFBLEdBQURELENBQUMsQ0FBRUssTUFBTSxjQUFBSixTQUFBLHVCQUFUQSxTQUFBLENBQVdLLEtBQUs7WUFDcEQsQ0FBQyxDQUFDO1lBQ0Z4QixrQkFBa0IsQ0FBQ2dCLE9BQU8sQ0FBQztVQUM3QjtRQUNGLENBQUMsQ0FBQyxPQUFPUyxHQUFHLEVBQUU7VUFDWnpDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHVCQUF1QixFQUFFMEMsR0FBRyxDQUFDO1FBQzdDO01BQ0YsQ0FBQztNQUFBLGdCQTFCS3hCLFdBQVdBLENBQUE7UUFBQSxPQUFBQyxLQUFBLENBQUFqQixLQUFBLE9BQUFDLFNBQUE7TUFBQTtJQUFBLEdBMEJoQjtJQUNEZSxXQUFXLENBQUMsQ0FBQztFQUNmLENBQUMsRUFBRSxDQUFDakMsSUFBSSxDQUFDLENBQUM7RUFFVixvQkFDRW5PLDBEQUFBO0lBQUsrTCxTQUFTLEVBQUM7RUFBYyxnQkFDM0IvTCwwREFBQSxDQUFDSSxxREFBRztJQUFDb0YsRUFBRSxFQUFFO01BQUUxQixPQUFPLEVBQUU7SUFBTztFQUFFLGdCQUMzQjlELDBEQUFBLENBQUNxSyxrRUFBVyxNQUFFLENBQUMsZUFDZnJLLDBEQUFBLENBQUMyTSxNQUFNO0lBQUNqRyxRQUFRLEVBQUMsVUFBVTtJQUFDb0csSUFBSSxFQUFFNEMsT0FBUTtJQUFDbEssRUFBRSxFQUFFO01BQUVQLGVBQWUsRUFBRTtJQUFVO0VBQUUsZ0JBQzVFakYsMERBQUEsQ0FBQ29LLDhEQUFPO0lBQ041RSxFQUFFLEVBQUU7TUFDRnFNLEVBQUUsRUFBRSxNQUFNLENBQUU7SUFDZDtFQUFFLGdCQUVGN1IsMERBQUEsQ0FBQ29KLHFEQUFVO0lBQ1QwSSxJQUFJLEVBQUMsT0FBTztJQUNaL0wsS0FBSyxFQUFDLFNBQVM7SUFDZixjQUFXLGFBQWE7SUFDeEIyQyxPQUFPLEVBQUVrSCxZQUFhO0lBQ3RCcEssRUFBRSxFQUFBbEMsYUFBQTtNQUNBK0MsV0FBVyxFQUFFO0lBQU0sR0FDZnFKLE9BQU8sSUFBSTtNQUFFNUwsT0FBTyxFQUFFO0lBQU8sQ0FBQztFQUNsQyxnQkFFRjlELDBEQUFBLENBQUM0SyxpRUFBUSxNQUFFLENBQ0QsQ0FBQyxlQUNiNUssMERBQUEsQ0FBQzZKLHFEQUFVO0lBQ1RrSSxTQUFTLEVBQUMsSUFBSTtJQUNkQyxPQUFPLEVBQUMsSUFBSTtJQUNaak0sS0FBSyxFQUFDLFNBQVM7SUFDZmtNLE1BQU07SUFDTnpNLEVBQUUsRUFBRTtNQUFFME0sUUFBUSxFQUFFO0lBQUU7RUFBRSxHQUNyQixTQUVXLENBQUMsZUFDYmxTLDBEQUFBLENBQUM2TCw4REFBb0IsTUFBRSxDQUFDLGVBQ3hCN0wsMERBQUEsQ0FBQzRMLDBEQUFnQjtJQUFDMkYsSUFBSSxFQUFFcEQsSUFBSSxDQUFDVSxJQUFJLENBQUNJLFFBQVM7SUFBQ0QsSUFBSSxFQUFFYixJQUFJLENBQUNVLElBQUksQ0FBQ0c7RUFBSyxDQUFFLENBQUMsZUFDcEVoUCwwREFBQSxDQUFDb0oscURBQVU7SUFBQ3JELEtBQUssRUFBQyxTQUFTO0lBQUMyQyxPQUFPLEVBQUU0RztFQUFhLGdCQUNoRHRQLDBEQUFBLENBQUN3TCxtRUFBTTtJQUFDM0gsS0FBSyxFQUFFO01BQUVrQyxLQUFLLEVBQUU7SUFBUTtFQUFFLENBQUUsQ0FDMUIsQ0FDTCxDQUNILENBQUMsZUFDVC9GLDBEQUFBLENBQUN3TixNQUFNO0lBQUN3RSxPQUFPLEVBQUMsV0FBVztJQUFDbEYsSUFBSSxFQUFFNEMsT0FBUTtJQUFDeUMsWUFBWSxFQUFFQSxDQUFBLEtBQU14QyxVQUFVLENBQUMsSUFBSSxDQUFFO0lBQUNwSyxZQUFZLEVBQUVBLENBQUEsS0FBTW9LLFVBQVUsQ0FBQyxLQUFLO0VBQUUsZ0JBQ3JIM1AsMERBQUEsQ0FBQ29LLDhEQUFPO0lBQ041RSxFQUFFLEVBQUU7TUFDRjFCLE9BQU8sRUFBRSxNQUFNO01BQ2ZFLFVBQVUsRUFBRSxRQUFRO01BQ3BCRCxjQUFjLEVBQUUsVUFBVTtNQUMxQnFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUjtFQUFFLGdCQUVGcFMsMERBQUEsQ0FBQ29KLHFEQUFVO0lBQUNWLE9BQU8sRUFBRWtIO0VBQWEsZ0JBQ2hDNVAsMERBQUEsQ0FBQzZLLHdFQUFlLE1BQUUsQ0FDUixDQUNMLENBQUMsZUFDVjdLLDBEQUFBLENBQUN5Syw4REFBTyxNQUFFLENBQUMsZUFDWHpLLDBEQUFBLENBQUN1SywyREFBSTtJQUFDL0UsRUFBRSxFQUFFO01BQUU2TSxNQUFNLEVBQUU7SUFBUTtFQUFFLGdCQUM1QnJTLDBEQUFBLENBQUMwTCxpRUFBYSxNQUFFLENBQ1osQ0FDQSxDQUFDLGVBQ1QxTCwwREFBQSxDQUFDSSxxREFBRztJQUNGMlIsU0FBUyxFQUFDLE1BQU07SUFDaEJ2TSxFQUFFLEVBQUU7TUFDRlAsZUFBZSxFQUFHcUgsS0FBSyxJQUNyQkEsS0FBSyxDQUFDZ0csT0FBTyxDQUFDQyxJQUFJLEtBQUssT0FBTyxHQUMxQmpHLEtBQUssQ0FBQ2dHLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUN2QmxHLEtBQUssQ0FBQ2dHLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQztNQUM3Qk4sUUFBUSxFQUFFLENBQUM7TUFDWGpPLEtBQUssRUFBRSxNQUFNO01BQ2JvTyxNQUFNLEVBQUUsT0FBTztNQUNmak4sUUFBUSxFQUFFO0lBQ1o7RUFBRSxnQkFFRnBGLDBEQUFBLENBQUNvSyw4REFBTyxNQUFFLENBQUMsZUFDWHBLLDBEQUFBLENBQUMwSyxnRUFBUztJQUFDcEcsUUFBUSxFQUFDLE1BQU07SUFBQ2tCLEVBQUUsRUFBRTtNQUFFaU4sRUFBRSxFQUFFO0lBQUU7RUFBRSxnQkFDdkN6UywwREFBQSxDQUFDSSxxREFBRztJQUFDb0YsRUFBRSxFQUFFO01BQUVDLFlBQVksRUFBRSxDQUFDO01BQUVDLFdBQVcsRUFBRSxTQUFTO01BQUVnTixFQUFFLEVBQUU7SUFBRTtFQUFFLGdCQUMxRDFTLDBEQUFBLENBQUNFLHNEQUFJO0lBQUMwRixLQUFLLEVBQUUvRCxRQUFTO0lBQUNnRSxRQUFRLEVBQUVrSztFQUFnQixnQkFDL0MvUCwwREFBQSxDQUFDRyxzREFBRztJQUFDTyxLQUFLLEVBQUM7RUFBUyxDQUFFLENBQUMsRUFDdEJ3UCxlQUFlLGlCQUFJbFEsMERBQUEsQ0FBQ0csc0RBQUc7SUFBQ08sS0FBSyxFQUFDO0VBQWdCLENBQUUsQ0FDN0MsQ0FDSCxDQUFDLEVBRUxtQixRQUFRLEtBQUssQ0FBQyxpQkFDYjdCLDBEQUFBO0lBQUsrTCxTQUFTLEVBQUM7RUFBb0IsZ0JBQ2pDL0wsMERBQUE7SUFBSytMLFNBQVMsRUFBQztFQUFjLGdCQUMzQi9MLDBEQUFBO0lBQUsrTCxTQUFTLEVBQUM7RUFBbUIsZ0JBQ2hDL0wsMERBQUE7SUFBSzZELEtBQUssRUFBRTtNQUFFQyxPQUFPLEVBQUUsTUFBTTtNQUFFRSxVQUFVLEVBQUU7SUFBUztFQUFFLGdCQUNwRGhFLDBEQUFBLENBQUNpSix5RUFBaUI7SUFBQzhDLFNBQVMsRUFBQztFQUFrQixDQUFFLENBQUMsZUFDbEQvTCwwREFBQTtJQUFLNkQsS0FBSyxFQUFFO01BQUVhLFVBQVUsRUFBRTtJQUFPO0VBQUUsZ0JBQ2pDMUUsMERBQUEsYUFBS21PLElBQUksYUFBSkEsSUFBSSxnQkFBQUosV0FBQSxHQUFKSSxJQUFJLENBQUVVLElBQUksY0FBQWQsV0FBQSx1QkFBVkEsV0FBQSxDQUFZa0IsUUFBYSxDQUMzQixDQUNGLENBQ0YsQ0FBQyxlQUNOalAsMERBQUEsV0FBSyxDQUFDLGVBQ05BLDBEQUFBO0lBQUsrTCxTQUFTLEVBQUM7RUFBcUIsZ0JBQ2xDL0wsMERBQUEsMkJBQ0VBLDBEQUFBLGFBQUksZUFBaUIsQ0FBQyxlQUN0QkEsMERBQUEsWUFBSW1PLElBQUksYUFBSkEsSUFBSSxnQkFBQUgsV0FBQSxHQUFKRyxJQUFJLENBQUVVLElBQUksY0FBQWIsV0FBQSx1QkFBVkEsV0FBQSxDQUFZZ0IsSUFBUSxDQUNyQixDQUNGLENBQ0YsQ0FDRixDQUNOLEVBRUFuTixRQUFRLEtBQUssQ0FBQyxJQUFJcU8sZUFBZSxpQkFDaENsUSwwREFBQSxDQUFDMkcscUZBQXFCLE1BQUUsQ0FFakIsQ0FDUixDQUNGLENBQ0YsQ0FBQztBQUVWO0FBRUEsaUVBQWVtSCxpQkFBaUIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9TZXR0aW5nc1ZpZXcvTGF5b3V0VGVtcGxhdGVNYW5hZ2VyLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9TZXR0aW5nc1ZpZXdBZG1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMm0wIDRjMS45MyAwIDMuNSAxLjU3IDMuNSAzLjVTMTMuOTMgMTMgMTIgMTNzLTMuNS0xLjU3LTMuNS0zLjVTMTAuMDcgNiAxMiA2bTAgMTRjLTIuMDMgMC00LjQzLS44Mi02LjE0LTIuODhDNy41NSAxNS44IDkuNjggMTUgMTIgMTVzNC40NS44IDYuMTQgMi4xMkMxNi40MyAxOS4xOCAxNC4wMyAyMCAxMiAyMFwiXG59KSwgJ0FjY291bnRDaXJjbGUnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRhYnMsIFRhYiwgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB1c2VMYXlvdXRDb25maWcgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlTGF5b3V0Q29uZmlnJztcclxuaW1wb3J0IGRlZmF1bHRDb25maWcgZnJvbSAnLi4vLi4vLi4vY29uZmlnL2xheW91dC1jb25maWcuanNvbic7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi8uLi9pbWcvaW1hZ2VzLnBuZyc7XHJcblxyXG5jb25zdCBzbGlkZXJzID0gW1xyXG4gIHtcclxuICAgIGtleTogJy0taGVhZGVyLWxvZ28td2lkdGgnLFxyXG4gICAgbGFiZWw6ICdIZWFkZXIgTG9nbyBXaWR0aCcsXHJcbiAgICB1bml0OiAncHgnLFxyXG4gICAgbWluOiA4MCxcclxuICAgIG1heDogNDUwLFxyXG4gICAgc3RlcDogNSxcclxuICAgIGRlc2NyaXB0aW9uOiAnQ29udHJvbHMgdGhlIGxvZ28gc2l6ZSBpbiBQYXltZW50IHNsaXBzLCBJbnZvaWNlcywgRGFzaGJvYXJkIHJlcG9ydHMsIGFuZCBNYWludGVuYW5jZSB2aWV3cy4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICctLWhlYWRlci1uYW1lLWZvbnQtc2l6ZScsXHJcbiAgICBsYWJlbDogJ0NvbXBhbnkgTmFtZSBGb250IFNpemUnLFxyXG4gICAgdW5pdDogJ3B4JyxcclxuICAgIG1pbjogOCxcclxuICAgIG1heDogMTgsXHJcbiAgICBzdGVwOiAxLFxyXG4gICAgZGVzY3JpcHRpb246ICdGb250IHNpemUgb2YgdGhlIGJvbGQgY29tcGFueSBuYW1lIChHTE9CQUwgR0FURSBTQVJMKSBpbiBhbGwgZG9jdW1lbnQgaGVhZGVycy4nXHJcbiAgfSxcclxuICB7XHJcbiAgICBrZXk6ICctLWhlYWRlci1kZXRhaWxzLWZvbnQtc2l6ZScsXHJcbiAgICBsYWJlbDogJ0NvbXBhbnkgRGV0YWlscyBGb250IFNpemUnLFxyXG4gICAgdW5pdDogJ3B4JyxcclxuICAgIG1pbjogOCxcclxuICAgIG1heDogMTYsXHJcbiAgICBzdGVwOiAxLFxyXG4gICAgZGVzY3JpcHRpb246ICdGb250IHNpemUgb2YgdGhlIGNvbXBhbnkgZGV0YWlscyAoUkNDTSwgSUQgTkFULCBBZGRyZXNzKSBiZW5lYXRoIHRoZSBjb21wYW55IG5hbWUuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAga2V5OiAnLS1nbG9iYWwtZm9udC1zaXplJyxcclxuICAgIGxhYmVsOiAnRG9jdW1lbnQgQmFzZSBGb250IFNpemUnLFxyXG4gICAgdW5pdDogJ3B4JyxcclxuICAgIG1pbjogOCxcclxuICAgIG1heDogMTgsXHJcbiAgICBzdGVwOiAxLFxyXG4gICAgZGVzY3JpcHRpb246ICdCYXNlIGZvbnQgc2l6ZSBmb3IgYWxsIGRvY3VtZW50L2ludm9pY2UvcGF5bWVudCBkZXRhaWwgcGFuZWxzLidcclxuICB9LFxyXG4gIHtcclxuICAgIGtleTogJy0tdGFibGUtcGFkZGluZycsXHJcbiAgICBsYWJlbDogJ1RhYmxlIENlbGwgUGFkZGluZycsXHJcbiAgICB1bml0OiAncHgnLFxyXG4gICAgbWluOiAxLFxyXG4gICAgbWF4OiAyMCxcclxuICAgIHN0ZXA6IDEsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0NvbnRyb2xzIHNwYWNpbmcgaW5zaWRlIHRhYmxlIGNlbGxzIGFjcm9zcyBkb2N1bWVudCB2aWV3cy4nXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHBhcnNlUHggPSAodmFsKSA9PiBwYXJzZUludChTdHJpbmcodmFsKS5yZXBsYWNlKCdweCcsICcnKSwgMTApIHx8IDA7XHJcblxyXG5mdW5jdGlvbiBMaXZlRG9jdW1lbnRQcmV2aWV3KHsgbG9jYWxDb25maWcsIHNldExvY2FsQ29uZmlnLCBzZXRTYXZlZCB9KSB7XHJcbiAgY29uc3QgW3RhYkluZGV4LCBzZXRUYWJJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZHJhZ1N0YXRlLCBzZXREcmFnU3RhdGVdID0gdXNlU3RhdGUoeyBkcmFnZ2luZzogbnVsbCwgc3RhcnRYOiAwLCBzdGFydE9mZnNldDogMCB9KTtcclxuXHJcbiAgY29uc3QgbG9nb1dpZHRoID0gcGFyc2VQeChsb2NhbENvbmZpZ1snLS1oZWFkZXItbG9nby13aWR0aCddKTtcclxuICBjb25zdCBuYW1lRm9udFNpemUgPSBwYXJzZVB4KGxvY2FsQ29uZmlnWyctLWhlYWRlci1uYW1lLWZvbnQtc2l6ZSddKTtcclxuICBjb25zdCB0ZXh0QWxpZ24gPSBsb2NhbENvbmZpZ1snLS1oZWFkZXItdGV4dC1hbGlnbm1lbnQnXSB8fCAncmlnaHQnO1xyXG4gIGNvbnN0IGdsb2JhbEZvbnRTaXplID0gcGFyc2VQeChsb2NhbENvbmZpZ1snLS1nbG9iYWwtZm9udC1zaXplJ10pO1xyXG4gIGNvbnN0IHRhYmxlUGFkZGluZyA9IHBhcnNlUHgobG9jYWxDb25maWdbJy0tdGFibGUtcGFkZGluZyddKTtcclxuXHJcbiAgY29uc3QgZGV0YWlsc0ZvbnRTaXplID0gcGFyc2VQeChsb2NhbENvbmZpZ1snLS1oZWFkZXItZGV0YWlscy1mb250LXNpemUnXSkgfHwgMTA7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChlLCBibG9jaykgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgY3VycmVudE9mZnNldCA9IHBhcnNlUHgoXHJcbiAgICAgIGJsb2NrID09PSAnY2xpZW50J1xyXG4gICAgICAgID8gbG9jYWxDb25maWdbJy0tY2xpZW50LWJsb2NrLWxlZnQtb2Zmc2V0J11cclxuICAgICAgICA6IGxvY2FsQ29uZmlnWyctLW1ldGFkYXRhLWJsb2NrLXJpZ2h0LW9mZnNldCddXHJcbiAgICApO1xyXG4gICAgc2V0RHJhZ1N0YXRlKHsgZHJhZ2dpbmc6IGJsb2NrLCBzdGFydFg6IGUuY2xpZW50WCwgc3RhcnRPZmZzZXQ6IGN1cnJlbnRPZmZzZXQgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGUpID0+IHtcclxuICAgIGlmICghZHJhZ1N0YXRlLmRyYWdnaW5nKSByZXR1cm47XHJcbiAgICBjb25zdCBkZWx0YVggPSBlLmNsaWVudFggLSBkcmFnU3RhdGUuc3RhcnRYO1xyXG4gICAgXHJcbiAgICBpZiAoZHJhZ1N0YXRlLmRyYWdnaW5nID09PSAnY2xpZW50Jykge1xyXG4gICAgICBjb25zdCBuZXdPZmZzZXQgPSBkcmFnU3RhdGUuc3RhcnRPZmZzZXQgKyBkZWx0YVg7XHJcbiAgICAgIHNldExvY2FsQ29uZmlnKHByZXYgPT4gKHsgLi4ucHJldiwgJy0tY2xpZW50LWJsb2NrLWxlZnQtb2Zmc2V0JzogYCR7bmV3T2Zmc2V0fXB4YCB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBuZXdPZmZzZXQgPSBkcmFnU3RhdGUuc3RhcnRPZmZzZXQgLSBkZWx0YVg7XHJcbiAgICAgIHNldExvY2FsQ29uZmlnKHByZXYgPT4gKHsgLi4ucHJldiwgJy0tbWV0YWRhdGEtYmxvY2stcmlnaHQtb2Zmc2V0JzogYCR7bmV3T2Zmc2V0fXB4YCB9KSk7XHJcbiAgICB9XHJcbiAgICBzZXRTYXZlZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VVcCA9ICgpID0+IHtcclxuICAgIGlmIChkcmFnU3RhdGUuZHJhZ2dpbmcpIHtcclxuICAgICAgc2V0RHJhZ1N0YXRlKHsgZHJhZ2dpbmc6IG51bGwsIHN0YXJ0WDogMCwgc3RhcnRPZmZzZXQ6IDAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVySGVhZGVyID0gKHRpdGxlKSA9PiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIHdpZHRoOiAnMTAwJScsIG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIHNyYz17SW1hZ2V9XHJcbiAgICAgICAgICAgIGFsdD1cIkNvbXBhbnkgTG9nb1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogJzgwcHgnLCBtYXhXaWR0aDogYCR7bG9nb1dpZHRofXB4YCwgb2JqZWN0Rml0OiAnY29udGFpbicsIG1hcmdpbjogMCB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YWRkcmVzcyBzdHlsZT17eyB0ZXh0QWxpZ246IHRleHRBbGlnbiwgZm9udFN0eWxlOiAnbm9ybWFsJywgbWFyZ2luOiAwLCBsaW5lSGVpZ2h0OiAxLjUgfX0+XHJcbiAgICAgICAgICA8cCBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcsIG1hcmdpbjogJzAgMCAycHgnLCBmb250U2l6ZTogYCR7bmFtZUZvbnRTaXplfXB4YCB9fT5HTE9CQUwgR0FURSBTQVJMPC9wPlxyXG4gICAgICAgICAgPHAgc3R5bGU9e3sgZm9udFdlaWdodDogJ25vcm1hbCcsIG1hcmdpbjogMCwgZm9udFNpemU6IGAke2RldGFpbHNGb250U2l6ZX1weGAsIGxpbmVIZWlnaHQ6IDEuNCB9fT5cclxuICAgICAgICAgICAgUkNDTSBDRC9LV1ovUkNDTS8yMi1CLTAwMzE3IDxiciAvPlxyXG4gICAgICAgICAgICBJRCBOQVQgMTQtSDUzMDBOMTExNzlQIDxiciAvPlxyXG4gICAgICAgICAgICBBVkVOVUUgU0FMT05HTyBRL0lORFVTVFJJRUwgQy9NQU5JS0EgPGJyIC8+XHJcbiAgICAgICAgICAgIEtPTFdFWkkgTFVBTEFCQSA8YnIgLz5cclxuICAgICAgICAgICAgRFIgQ09OR09cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2FkZHJlc3M+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aHIgLz48cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250V2VpZ2h0OiAnYm9sZCcsIG1hcmdpbjogJzEwcHggMCcgfX0+e3RpdGxlfTwvcD5cclxuICAgIDwvPlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHJlbmRlclRhYmxlQ29udGVudCA9ICgpID0+IChcclxuICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJywgZm9udFNpemU6IGAke2dsb2JhbEZvbnRTaXplfXB4YCwgbWFyZ2luVG9wOiAnMTBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgPHRoZWFkPlxyXG4gICAgICAgIDx0ciBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fT5cclxuICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiBgJHt0YWJsZVBhZGRpbmd9cHhgLCB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiBgJHt0YWJsZVBhZGRpbmd9cHhgLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+UXR5PC90aD5cclxuICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiBgJHt0YWJsZVBhZGRpbmd9cHhgLCB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5QcmljZTwvdGg+XHJcbiAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogYCR7dGFibGVQYWRkaW5nfXB4YCwgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+VG90YWw8L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGhlYWQ+XHJcbiAgICAgIDx0Ym9keT5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogYCR7dGFibGVQYWRkaW5nfXB4YCwgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlNhbXBsZSBTZXJ2aWNlIFJldGFpbmVyPC90ZD5cclxuICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiBgJHt0YWJsZVBhZGRpbmd9cHhgLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+MTwvdGQ+XHJcbiAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogYCR7dGFibGVQYWRkaW5nfXB4YCwgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+JDUwMC4wMDwvdGQ+XHJcbiAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogYCR7dGFibGVQYWRkaW5nfXB4YCwgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+JDUwMC4wMDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICBtYXJnaW5Cb3R0b206IDI0LFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcclxuICAgIH19XHJcbiAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XHJcbiAgICAgIG9uTW91c2VVcD17aGFuZGxlTW91c2VVcH1cclxuICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZVVwfVxyXG4gICAgPlxyXG4gICAgICA8Qm94IHN4PXt7IGJvcmRlckJvdHRvbTogMSwgYm9yZGVyQ29sb3I6ICdkaXZpZGVyJywgYmdjb2xvcjogJyNmOGY5ZmYnIH19PlxyXG4gICAgICAgIDxUYWJzIHZhbHVlPXt0YWJJbmRleH0gb25DaGFuZ2U9eyhlLCB2YWwpID0+IHNldFRhYkluZGV4KHZhbCl9IGFyaWEtbGFiZWw9XCJwcmV2aWV3IHRhYnNcIj5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJJbnZvaWNlIFByZXZpZXdcIiAvPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIlF1b3RhdGlvbiBQcmV2aWV3XCIgLz5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJQYXltZW50IFNsaXAgUHJldmlld1wiIC8+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcsIG1pbkhlaWdodDogJzMwMHB4JyB9fT5cclxuICAgICAgICB7dGFiSW5kZXggPT09IDAgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHBhZGRpbmc6ICcxMHB4JywgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJIZWFkZXIoJ0lOVk9JQ0UnKX1cclxuICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nOiAnMHB4JywgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgPGFkZHJlc3MgXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IGhhbmRsZU1vdXNlRG93bihlLCAnY2xpZW50Jyl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBsb2NhbENvbmZpZ1snLS1jbGllbnQtYmxvY2stbGVmdC1vZmZzZXQnXSB8fCAnMHB4JywgbGluZUhlaWdodDogMS4zNSwgd2lkdGg6ICdmaXQtY29udGVudCcsIG1pbldpZHRoOiAnMjAwcHgnLCBjdXJzb3I6ICdldy1yZXNpemUnIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxMHB4JyB9fT5CaWxsIFRvPC9zcGFuPjxiciAvPjxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcxNXB4JyB9fT5KT0hOIERPRSBMTEM8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiBoYW5kbGVNb3VzZURvd24oZSwgJ21ldGFkYXRhJyl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycsIG1hcmdpblJpZ2h0OiBsb2NhbENvbmZpZ1snLS1tZXRhZGF0YS1ibG9jay1yaWdodC1vZmZzZXQnXSB8fCAnMHB4Jywgd2lkdGg6ICdmaXQtY29udGVudCcsIGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbkJvdHRvbTogJzEwcHgnLCBjdXJzb3I6ICdldy1yZXNpemUnIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdhdXRvIDFmcicsIGNvbHVtbkdhcDogJzI0cHgnLCByb3dHYXA6ICc2cHgnLCBmb250U2l6ZTogYCR7Z2xvYmFsRm9udFNpemV9cHhgLCBhbGlnbkNvbnRlbnQ6ICdzdGFydCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+SW52b2ljZSAjPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+SU5WLTAwMDEyMzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+RGF0ZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PjE3LzA3LzIwMjY8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIHtyZW5kZXJUYWJsZUNvbnRlbnQoKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3RhYkluZGV4ID09PSAxICYmIChcclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBwYWRkaW5nOiAnMTBweCcsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgICAgICB7cmVuZGVySGVhZGVyKCdRVU9UQVRJT04nKX1cclxuICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nOiAnMHB4JywgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgPGFkZHJlc3MgXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IGhhbmRsZU1vdXNlRG93bihlLCAnY2xpZW50Jyl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBsb2NhbENvbmZpZ1snLS1jbGllbnQtYmxvY2stbGVmdC1vZmZzZXQnXSB8fCAnMHB4JywgbGluZUhlaWdodDogMS4zNSwgd2lkdGg6ICdmaXQtY29udGVudCcsIG1pbldpZHRoOiAnMjAwcHgnLCBjdXJzb3I6ICdldy1yZXNpemUnIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxMHB4JyB9fT5RdW90YXRpb24gRm9yPC9zcGFuPjxiciAvPjxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgZm9udFNpemU6ICcxNXB4JyB9fT5BQ01FIENPUlA8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiBoYW5kbGVNb3VzZURvd24oZSwgJ21ldGFkYXRhJyl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycsIG1hcmdpblJpZ2h0OiBsb2NhbENvbmZpZ1snLS1tZXRhZGF0YS1ibG9jay1yaWdodC1vZmZzZXQnXSB8fCAnMHB4Jywgd2lkdGg6ICdmaXQtY29udGVudCcsIGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbkJvdHRvbTogJzEwcHgnLCBjdXJzb3I6ICdldy1yZXNpemUnIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdhdXRvIDFmcicsIGNvbHVtbkdhcDogJzI0cHgnLCByb3dHYXA6ICc2cHgnLCBmb250U2l6ZTogYCR7Z2xvYmFsRm9udFNpemV9cHhgLCBhbGlnbkNvbnRlbnQ6ICdzdGFydCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+UXVvdGF0aW9uICM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5RVU8tMDAwNDU2PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5EYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+MTcvMDcvMjAyNjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAge3JlbmRlclRhYmxlQ29udGVudCgpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7dGFiSW5kZXggPT09IDIgJiYgKFxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHBhZGRpbmc6ICcxMHB4JywgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgICAgICAgIHtyZW5kZXJIZWFkZXIoJ1BBWU1FTlQnKX1cclxuICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nOiAnMHB4JywgbWFyZ2luQm90dG9tOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgPGFkZHJlc3MgXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGUpID0+IGhhbmRsZU1vdXNlRG93bihlLCAnY2xpZW50Jyl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiBsb2NhbENvbmZpZ1snLS1jbGllbnQtYmxvY2stbGVmdC1vZmZzZXQnXSB8fCAnMHB4JywgbGluZUhlaWdodDogMS4zNSwgd2lkdGg6ICdmaXQtY29udGVudCcsIG1pbldpZHRoOiAnMjAwcHgnLCBjdXJzb3I6ICdldy1yZXNpemUnIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHA+UGF5bWVudCBGcm9tPGJyIC8+PHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkpBTkUgU01JVEg8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgIDwvYWRkcmVzcz5cclxuICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhlKSA9PiBoYW5kbGVNb3VzZURvd24oZSwgJ21ldGFkYXRhJyl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycsIG1hcmdpblJpZ2h0OiBsb2NhbENvbmZpZ1snLS1tZXRhZGF0YS1ibG9jay1yaWdodC1vZmZzZXQnXSB8fCAnMHB4Jywgd2lkdGg6ICdmaXQtY29udGVudCcsIGRpc3BsYXk6ICdibG9jaycsIG1hcmdpbkJvdHRvbTogJzEwcHgnLCBjdXJzb3I6ICdldy1yZXNpemUnIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdhdXRvIDFmcicsIGNvbHVtbkdhcDogJzI0cHgnLCByb3dHYXA6ICc2cHgnLCBmb250U2l6ZTogYCR7Z2xvYmFsRm9udFNpemV9cHhgLCBhbGlnbkNvbnRlbnQ6ICdzdGFydCcsIHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+UEFZICM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5QQVktMDAwNzg5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5EYXRlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+MTcvMDcvMjAyNjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJywgdGV4dEFsaWduOiAnbGVmdCcgfX0+TW9kZTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PkNBU0g8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBmb250U2l6ZTogYCR7Z2xvYmFsRm9udFNpemV9cHhgLCBtYXJnaW5Ub3A6ICcxMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJyB9fT5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiBgJHt0YWJsZVBhZGRpbmd9cHhgLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiBgJHt0YWJsZVBhZGRpbmd9cHhgLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiBgJHt0YWJsZVBhZGRpbmd9cHhgLCB0ZXh0QWxpZ246ICdyaWdodCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5BbW91bnQgUGFpZDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogYCR7dGFibGVQYWRkaW5nfXB4YCwgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PklOVi0wMDAxMjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogYCR7dGFibGVQYWRkaW5nfXB4YCwgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PjE3LzA3LzIwMjY8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogYCR7dGFibGVQYWRkaW5nfXB4YCwgdGV4dEFsaWduOiAncmlnaHQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+JDUwMC4wMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExheW91dFRlbXBsYXRlTWFuYWdlcigpIHtcclxuICBjb25zdCB7IGNvbmZpZywgc2V0Q29uZmlnVmFyLCByZXNldENvbmZpZyB9ID0gdXNlTGF5b3V0Q29uZmlnKCk7XHJcblxyXG4gIC8vIExvY2FsIHNoYWRvdyBzdGF0ZSBmb3IgdGhlIHNsaWRlcnMgc28gcHJldmlldyB1cGRhdGVzIGxpdmUgd2l0aG91dCBzYXZpbmcgeWV0XHJcbiAgY29uc3QgW2xvY2FsQ29uZmlnLCBzZXRMb2NhbENvbmZpZ10gPSB1c2VTdGF0ZSh7IC4uLmNvbmZpZyB9KTtcclxuICBjb25zdCBbc2F2ZWQsIHNldFNhdmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2xpZGVyID0gKGtleSwgcmF3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gcmF3VmFsdWUgKyAncHgnO1xyXG4gICAgc2V0TG9jYWxDb25maWcocHJldiA9PiAoeyAuLi5wcmV2LCBba2V5XTogdmFsdWUgfSkpO1xyXG4gICAgc2V0U2F2ZWQoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFsaWdubWVudCA9IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRMb2NhbENvbmZpZyhwcmV2ID0+ICh7IC4uLnByZXYsIFtrZXldOiB2YWx1ZSB9KSk7XHJcbiAgICBzZXRTYXZlZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcclxuICAgIE9iamVjdC5lbnRyaWVzKGxvY2FsQ29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgICAgc2V0Q29uZmlnVmFyKGtleSwgdmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgICBzZXRTYXZlZCh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0U2F2ZWQoZmFsc2UpLCAyNTAwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuICAgIHNldExvY2FsQ29uZmlnKHsgLi4uZGVmYXVsdENvbmZpZyB9KTtcclxuICAgIHJlc2V0Q29uZmlnKCk7XHJcbiAgICBzZXRTYXZlZChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcyNHB4JywgYWxpZ25JdGVtczogJ3N0cmV0Y2gnLCBtYXhXaWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnOHB4IDAnIH19PlxyXG5cclxuICAgICAgey8qIExlZnQgQ29sdW1uOiBUb29scyAoMzUtNDAlKSAqL31cclxuICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAnMCAwIDM4JScsIG1pbldpZHRoOiAnMzUwcHgnIH19PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fT5cclxuICAgICAgICAgIDxoMyBzdHlsZT17eyBtYXJnaW46ICcwIDAgNHB4JywgY29sb3I6ICcjMzAzNjhhJywgZm9udFNpemU6IDE2IH19PkxheW91dCAmYW1wOyBQcmludCBUZW1wbGF0ZSBNYW5hZ2VyPC9oMz5cclxuICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbjogMCwgZm9udFNpemU6IDEyLCBjb2xvcjogJyM2NjYnIH19PlxyXG4gICAgICAgICAgICBBZGp1c3QgdGhlc2UgdmFsdWVzIHRvIGNvbnRyb2wgaG93IGRvY3VtZW50IGhlYWRlcnMgYW5kIHRhYmxlcyBsb29rIGFjcm9zcyBBTEwgbW9kdWxlcyDigJRcclxuICAgICAgICAgICAgUGF5bWVudCwgSW52b2ljZSwgRGFzaGJvYXJkIFJlcG9ydHMsIE1haW50ZW5hbmNlLCBhbmQgbW9yZS4gQ2hhbmdlcyBhcHBseSBpbnN0YW50bHkuXHJcbiAgICAgICAgICAgIENsaWNrIDxzdHJvbmc+U2F2ZSAmYW1wOyBBcHBseTwvc3Ryb25nPiB0byBwZXJzaXN0IGFjcm9zcyBzZXNzaW9ucy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgey8qIFNsaWRlcnMgKi99XHJcbiAgICAgIHtzbGlkZXJzLm1hcCgoeyBrZXksIGxhYmVsLCB1bml0LCBtaW4sIG1heCwgc3RlcCwgZGVzY3JpcHRpb24gfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQeCA9IHBhcnNlUHgobG9jYWxDb25maWdba2V5XSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYga2V5PXtrZXl9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAsIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmYnLCBib3JkZXJSYWRpdXM6IDgsIHBhZGRpbmc6ICcxMnB4IDE2cHgnLCBib3JkZXI6ICcxcHggc29saWQgI2U4ZWFmNicgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgbWFyZ2luQm90dG9tOiA0IH19PlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIGZvbnRTaXplOiAxMywgY29sb3I6ICcjMzAzNjhhJywgZGlzcGxheTogJ2Jsb2NrJywgcGFkZGluZzogMCwgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNzAwLCBjb2xvcjogJyMzMDM2OGEnLCBmb250U2l6ZTogMTQsIG1pbldpZHRoOiA1MiwgdGV4dEFsaWduOiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAge2N1cnJlbnRQeH17dW5pdH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICAgIG1pbj17bWlufVxyXG4gICAgICAgICAgICAgIG1heD17bWF4fVxyXG4gICAgICAgICAgICAgIHN0ZXA9e3N0ZXB9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e2N1cnJlbnRQeH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVTbGlkZXIoa2V5LCBOdW1iZXIoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBhY2NlbnRDb2xvcjogJyMzMDM2OGEnLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgZm9udFNpemU6IDEwLCBjb2xvcjogJyM5OTknLCBtYXJnaW5Ub3A6IDIgfX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e21pbn17dW5pdH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IDExLCBjb2xvcjogJyM4ODgnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBmbGV4OiAxLCBwYWRkaW5nOiAnMCA4cHgnIH19PntkZXNjcmlwdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e21heH17dW5pdH08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7LyogSGVhZGVyIFRleHQgQWxpZ25tZW50IERyb3Bkb3duICovfVxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjQsIGJhY2tncm91bmRDb2xvcjogJyNmOGY5ZmYnLCBib3JkZXJSYWRpdXM6IDgsIHBhZGRpbmc6ICcxMnB4IDE2cHgnLCBib3JkZXI6ICcxcHggc29saWQgI2U4ZWFmNicgfX0+XHJcbiAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgZm9udFNpemU6IDEzLCBjb2xvcjogJyMzMDM2OGEnLCBkaXNwbGF5OiAnYmxvY2snLCBtYXJnaW5Cb3R0b206IDYsIHBhZGRpbmc6IDAgfX0+XHJcbiAgICAgICAgICBIZWFkZXIgVGV4dCBBbGlnbm1lbnRcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDEwIH19PlxyXG4gICAgICAgICAge1snbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXS5tYXAoYWxpZ24gPT4gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAga2V5PXthbGlnbn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBbGlnbm1lbnQoJy0taGVhZGVyLXRleHQtYWxpZ25tZW50JywgYWxpZ24pfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNnB4IDIwcHgnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA2LFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBsb2NhbENvbmZpZ1snLS1oZWFkZXItdGV4dC1hbGlnbm1lbnQnXSA9PT0gYWxpZ24gPyAnIzMwMzY4YScgOiAnI2NjYycsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGxvY2FsQ29uZmlnWyctLWhlYWRlci10ZXh0LWFsaWdubWVudCddID09PSBhbGlnbiA/ICcjMzAzNjhhJyA6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBsb2NhbENvbmZpZ1snLS1oZWFkZXItdGV4dC1hbGlnbm1lbnQnXSA9PT0gYWxpZ24gPyAnI2ZmZicgOiAnIzU1NScsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4xNXMnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YWxpZ259XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IDExLCBjb2xvcjogJyM4ODgnLCBtYXJnaW46ICc2cHggMCAwJyB9fT5cclxuICAgICAgICAgIEFsaWducyB0aGUgY29tcGFueSBuYW1lIGFuZCBhZGRyZXNzIGJsb2NrIGluIGFsbCBkb2N1bWVudCBoZWFkZXJzLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogMTYsIG1hcmdpblRvcDogMzIgfX0+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUmVzZXR9XHJcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCAyNHB4JywgYm9yZGVyUmFkaXVzOiA4LCBib3JkZXI6ICdub25lJywgYmFja2dyb3VuZENvbG9yOiAnI2Y1ZjVmNScsIGNvbG9yOiAnIzMzMycsIGZvbnRXZWlnaHQ6ICdib2xkJywgY3Vyc29yOiAncG9pbnRlcicsIGZsZXg6IDEgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBSZXNldCBEZWZhdWx0c1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNhdmV9XHJcbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCAyNHB4JywgYm9yZGVyUmFkaXVzOiA4LCBib3JkZXI6ICdub25lJywgYmFja2dyb3VuZENvbG9yOiBzYXZlZCA/ICcjNGNhZjUwJyA6ICcjMzAzNjhhJywgY29sb3I6ICd3aGl0ZScsIGZvbnRXZWlnaHQ6ICdib2xkJywgY3Vyc29yOiAncG9pbnRlcicsIGZsZXg6IDIsIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kLWNvbG9yIDAuM3MnIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3NhdmVkID8gJ1NhdmVkIScgOiAnU2F2ZSAmIEFwcGx5J31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICB7LyogUmlnaHQgQ29sdW1uOiBTdGlja3kgUHJldmlldyAoNjIlKSAqL31cclxuICAgIDxkaXYgc3R5bGU9e3sgZmxleDogJzEnIH19PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnc3RpY2t5JywgdG9wOiAnMjRweCcgfX0+XHJcbiAgICAgICAgPExpdmVEb2N1bWVudFByZXZpZXcgbG9jYWxDb25maWc9e2xvY2FsQ29uZmlnfSBzZXRMb2NhbENvbmZpZz17c2V0TG9jYWxDb25maWd9IHNldFNhdmVkPXtzZXRTYXZlZH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0VGVtcGxhdGVNYW5hZ2VyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL3ZpZXcuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IHsgVGFibGUsIE1vZGFsLCBJY29uQnV0dG9uLCBzdHlsZWQsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBDaGVja2JveCwgVGFibGVDb250YWluZXIsIFBhcGVyLCBUeXBvZ3JhcGh5LCBCb3gsIEF1dG9jb21wbGV0ZSwgVGV4dEZpZWxkLCBCYWNrZHJvcCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGl2aWRlcic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IFNpZGViYXJEYXNoIGZyb20gJy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaCc7XHJcbmltcG9ydCBTaWRlYmFyRGFzaEUyIGZyb20gJy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaEUyJztcclxuaW1wb3J0IHsgTWFpbE91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5pbXBvcnQgeyBUYWJzLCBUYWIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IExheW91dFRlbXBsYXRlTWFuYWdlciBmcm9tICcuL1BhZ2VWaWV3L1NldHRpbmdzVmlldy9MYXlvdXRUZW1wbGF0ZU1hbmFnZXInO1xyXG5cclxuXHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIFNldHRpbmdzVmlld0FkbWluKCkge1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIGNvbnN0IFt0YWJJbmRleCwgc2V0VGFiSW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgaGFuZGxlVGFiQ2hhbmdlID0gKGV2ZW50LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VGFiSW5kZXgobmV3VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtoYXNMYXlvdXRBY2Nlc3MsIHNldEhhc0xheW91dEFjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoQWNjZXNzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVzZXJOYW1lID0gdXNlcj8uZGF0YT8udXNlck5hbWU7XHJcbiAgICAgICAgY29uc3QgdXNlcklkID0gdXNlcj8uZGF0YT8uX2lkO1xyXG4gICAgICAgIGlmICghdXNlck5hbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHVzZXJOYW1lID09PSAnR0cnKSB7XHJcbiAgICAgICAgICBzZXRIYXNMYXlvdXRBY2Nlc3ModHJ1ZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ncmFudEFjY2Vzc2ApO1xyXG4gICAgICAgIGNvbnN0IG15QWNjZXNzID0gcmVzLmRhdGEuZGF0YS5zbGljZSgpLnJldmVyc2UoKS5maW5kKFxyXG4gICAgICAgICAgYSA9PiBhLnVzZXJJRCA9PT0gdXNlcklkXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKG15QWNjZXNzICYmIEFycmF5LmlzQXJyYXkobXlBY2Nlc3MubW9kdWxlcykpIHtcclxuICAgICAgICAgIGNvbnN0IGFsbG93ZWQgPSBteUFjY2Vzcy5tb2R1bGVzLnNvbWUobSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0eXBlb2YgbSA9PT0gJ3N0cmluZycgPyBtIDogKG0/Lm1vZHVsZU5hbWUgfHwgbT8ubmFtZSB8fCBtPy5tb2R1bGUgfHwgJycpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gJ0xheW91dC1QcmludCcgJiYgbT8uYWNjZXNzPy52aWV3TTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc2V0SGFzTGF5b3V0QWNjZXNzKGFsbG93ZWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGFjY2Vzc1wiLCBlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hBY2Nlc3MoKTtcclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUHJvZmlsZVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoRTIgLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDEgfX0gPlxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IGJvcmRlckJvdHRvbTogMSwgYm9yZGVyQ29sb3I6ICdkaXZpZGVyJywgbWI6IDIgfX0+XHJcbiAgICAgICAgICAgICAgPFRhYnMgdmFsdWU9e3RhYkluZGV4fSBvbkNoYW5nZT17aGFuZGxlVGFiQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgIDxUYWIgbGFiZWw9XCJQcm9maWxlXCIgLz5cclxuICAgICAgICAgICAgICAgIHtoYXNMYXlvdXRBY2Nlc3MgJiYgPFRhYiBsYWJlbD1cIkxheW91dCAmIFByaW50XCIgLz59XHJcbiAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICAgIHt0YWJJbmRleCA9PT0gMCAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J0N1c3RvbWVyYnV0dG9uYWRkMSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2V0dGluZ3NWaWV3Jz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NldHRpbmdzVmlld3RpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QWNjb3VudENpcmNsZUljb24gY2xhc3NOYW1lPSdzZXR0aW5nc1ZpZXdJY29uJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBsaW5lSGVpZ2h0OiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dXNlcj8uZGF0YT8udXNlck5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZXR0aW5nc1ZpZXdjb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg0PiBQcm9maWxlIEluZm88L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+e3VzZXI/LmRhdGE/LnJvbGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3RhYkluZGV4ID09PSAxICYmIGhhc0xheW91dEFjY2VzcyAmJiAoXHJcbiAgICAgICAgICAgICAgPExheW91dFRlbXBsYXRlTWFuYWdlciAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1ZpZXdBZG1pblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlRhYnMiLCJUYWIiLCJCb3giLCJ1c2VMYXlvdXRDb25maWciLCJkZWZhdWx0Q29uZmlnIiwiSW1hZ2UiLCJzbGlkZXJzIiwia2V5IiwibGFiZWwiLCJ1bml0IiwibWluIiwibWF4Iiwic3RlcCIsImRlc2NyaXB0aW9uIiwicGFyc2VQeCIsInZhbCIsInBhcnNlSW50IiwiU3RyaW5nIiwicmVwbGFjZSIsIkxpdmVEb2N1bWVudFByZXZpZXciLCJfcmVmIiwibG9jYWxDb25maWciLCJzZXRMb2NhbENvbmZpZyIsInNldFNhdmVkIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidGFiSW5kZXgiLCJzZXRUYWJJbmRleCIsIl91c2VTdGF0ZTMiLCJkcmFnZ2luZyIsInN0YXJ0WCIsInN0YXJ0T2Zmc2V0IiwiX3VzZVN0YXRlNCIsImRyYWdTdGF0ZSIsInNldERyYWdTdGF0ZSIsImxvZ29XaWR0aCIsIm5hbWVGb250U2l6ZSIsInRleHRBbGlnbiIsImdsb2JhbEZvbnRTaXplIiwidGFibGVQYWRkaW5nIiwiZGV0YWlsc0ZvbnRTaXplIiwiaGFuZGxlTW91c2VEb3duIiwiZSIsImJsb2NrIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50T2Zmc2V0IiwiY2xpZW50WCIsImhhbmRsZU1vdXNlTW92ZSIsImRlbHRhWCIsIm5ld09mZnNldCIsInByZXYiLCJfb2JqZWN0U3ByZWFkIiwiY29uY2F0IiwiaGFuZGxlTW91c2VVcCIsInJlbmRlckhlYWRlciIsInRpdGxlIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJtYXJnaW5Cb3R0b20iLCJzcmMiLCJhbHQiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsIm9iamVjdEZpdCIsIm1hcmdpbiIsImZvbnRTdHlsZSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJyZW5kZXJUYWJsZUNvbnRlbnQiLCJib3JkZXJDb2xsYXBzZSIsIm1hcmdpblRvcCIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwib25Nb3VzZUxlYXZlIiwic3giLCJib3JkZXJCb3R0b20iLCJib3JkZXJDb2xvciIsImJnY29sb3IiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwibWluSGVpZ2h0IiwiY29sb3IiLCJib3hTaXppbmciLCJvbk1vdXNlRG93biIsIm1hcmdpbkxlZnQiLCJtaW5XaWR0aCIsImN1cnNvciIsIm1hcmdpblJpZ2h0IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImNvbHVtbkdhcCIsInJvd0dhcCIsImFsaWduQ29udGVudCIsInBvc2l0aW9uIiwiTGF5b3V0VGVtcGxhdGVNYW5hZ2VyIiwiX3VzZUxheW91dENvbmZpZyIsImNvbmZpZyIsInNldENvbmZpZ1ZhciIsInJlc2V0Q29uZmlnIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInNhdmVkIiwiaGFuZGxlU2xpZGVyIiwicmF3VmFsdWUiLCJoYW5kbGVBbGlnbm1lbnQiLCJoYW5kbGVTYXZlIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJfcmVmMiIsIl9yZWYzIiwic2V0VGltZW91dCIsImhhbmRsZVJlc2V0IiwiZ2FwIiwiZmxleCIsIm1hcCIsIl9yZWY0IiwiY3VycmVudFB4IiwidHlwZSIsIk51bWJlciIsInRhcmdldCIsImFjY2VudENvbG9yIiwiYWxpZ24iLCJvbkNsaWNrIiwidGV4dFRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJ0b3AiLCJ1c2VFZmZlY3QiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiQWNjb3VudENpcmNsZUljb24iLCJUYWJsZSIsIk1vZGFsIiwiSWNvbkJ1dHRvbiIsInN0eWxlZCIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiQ2hlY2tib3giLCJUYWJsZUNvbnRhaW5lciIsIlBhcGVyIiwiVHlwb2dyYXBoeSIsIkF1dG9jb21wbGV0ZSIsIlRleHRGaWVsZCIsIkJhY2tkcm9wIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiRGl2aWRlciIsIkNvbnRhaW5lciIsIkxpbmsiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTmF2TGluayIsInVzZU5hdmlnYXRlIiwiTG9nb3V0IiwiU2lkZWJhckRhc2giLCJTaWRlYmFyRGFzaEUyIiwiTWFpbE91dGxpbmUiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJWaWV3VG9vbHRpcCIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwidGhlbWUiLCJ0b29sdGlwIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwib3BlbiIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIndoaXRlU3BhY2UiLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIlNldHRpbmdzVmlld0FkbWluIiwiX3VzZXIkZGF0YTMiLCJfdXNlciRkYXRhNCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY1IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsImhhbmRsZVRhYkNoYW5nZSIsImV2ZW50IiwibmV3VmFsdWUiLCJoYXNMYXlvdXRBY2Nlc3MiLCJzZXRIYXNMYXlvdXRBY2Nlc3MiLCJmZXRjaEFjY2VzcyIsIl9yZWY2IiwiX3VzZXIkZGF0YSIsIl91c2VyJGRhdGEyIiwidXNlcklkIiwiX2lkIiwibXlBY2Nlc3MiLCJzbGljZSIsInJldmVyc2UiLCJmaW5kIiwiYSIsInVzZXJJRCIsIkFycmF5IiwiaXNBcnJheSIsIm1vZHVsZXMiLCJhbGxvd2VkIiwic29tZSIsIm0iLCJfbSRhY2Nlc3MiLCJuYW1lIiwibW9kdWxlTmFtZSIsIm1vZHVsZSIsImFjY2VzcyIsInZpZXdNIiwiZXJyIiwicHIiLCJlZGdlIiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93Iiwib25Nb3VzZUVudGVyIiwicHgiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJtdCIsIm1iIl0sInNvdXJjZVJvb3QiOiIifQ==