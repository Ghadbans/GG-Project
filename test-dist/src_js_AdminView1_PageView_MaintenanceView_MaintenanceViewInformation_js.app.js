"use strict";
exports.id = "src_js_AdminView1_PageView_MaintenanceView_MaintenanceViewInformation_js";
exports.ids = ["src_js_AdminView1_PageView_MaintenanceView_MaintenanceViewInformation_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/ArrowBack.js"
/*!*******************************************************!*\
  !*** ./node_modules/@mui/icons-material/ArrowBack.js ***!
  \*******************************************************/
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
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
}), 'ArrowBack');

/***/ },

/***/ "./node_modules/@mui/icons-material/KeyboardArrowDown.js"
/*!***************************************************************!*\
  !*** ./node_modules/@mui/icons-material/KeyboardArrowDown.js ***!
  \***************************************************************/
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
  d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z"
}), 'KeyboardArrowDown');

/***/ },

/***/ "./node_modules/@mui/icons-material/esm/FileCopy.js"
/*!**********************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/FileCopy.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2zm-1 7h5.5L14 6.5z"
}), 'FileCopy'));

/***/ },

/***/ "./node_modules/@mui/icons-material/esm/KeyboardArrowUp.js"
/*!*****************************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/KeyboardArrowUp.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), 'KeyboardArrowUp'));

/***/ },

/***/ "./src/js/AdminView1/PageView/MaintenanceView/MaintenanceViewInformation.js"
/*!**********************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/MaintenanceView/MaintenanceViewInformation.js ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/PrintHeader */ "./src/js/component/PrintHeader.js");
/* harmony import */ var _component_PrintFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/PrintFooter */ "./src/js/component/PrintFooter.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/icons-material/LocalPrintshop */ "./node_modules/@mui/icons-material/LocalPrintshop.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/FileCopy.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/KeyboardArrowUp.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var _img_images_png__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../../img/images.png */ "./src/js/img/images.png");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabContext/TabContext.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabList/TabList.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabPanel/TabPanel.js");
/* harmony import */ var _mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @mui/x-charts/PieChart */ "./node_modules/@mui/x-charts/PieChart/PieChart.js");
/* harmony import */ var _mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @mui/x-charts/PieChart */ "./node_modules/@mui/x-charts/PieChart/PieArcLabel.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! exceljs */ "./node_modules/exceljs/excel.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Explicit.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"];
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


























































var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var PrintTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__["default"].tooltip)]: {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_ref7 => {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded4);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref8 => {
  var theme = _ref8.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};
var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_29__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref9 => {
  var theme = _ref9.theme,
    open = _ref9.open;
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_32__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref0 => {
  var theme = _ref0.theme,
    open = _ref0.open;
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
var palette = ['red', 'blue', 'green'];
function MaintenanceViewInformation() {
  var _maintenance$filter;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_42__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_42__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_48__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_48__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_49__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_49__.setUser)({
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
        return _ref1.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_49__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/grantAccess"));
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchNumber() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);
  var MaintenanceInfoU = grantAccess.filter(row => row.moduleName === "Maintenance" && row.access.editM === true);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    maintenance = _useState4[0],
    setMaintenance = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    quotation = _useState6[0],
    setQuotation = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    item = _useState8[0],
    SetItems = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
    _useState0 = _slicedToArray(_useState9, 2),
    loadingData = _useState0[0],
    setLoadingData = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    itemOut = _useState10[0],
    setItemOut = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    itemReturn = _useState12[0],
    setItemReturn = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    planingInfo = _useState14[0],
    setPlaningInfo = _useState14[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        try {
          var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/maintenance?summary=true")), axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/item")), axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/get-maintenance/").concat(id)), axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/estimation?summary=true"))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 4),
            resM = _yield$Promise$all2[0],
            resI = _yield$Promise$all2[1],
            resSingle = _yield$Promise$all2[2],
            resEstimate = _yield$Promise$all2[3];
          var allMaintenance = resM.data.data;
          setMaintenance(allMaintenance.sort((a, b) => b.serviceNumber - a.serviceNumber));
          SetItems(resI.data.data);

          // Process single maintenance record data
          var maintenanceData = resSingle.data.data;
          var refName = '';
          if (maintenanceData) {
            var _maintenanceData$cust, _resEstimate$data;
            refName = maintenanceData.ReferenceName || '';
            setReferenceName(refName);
            setCustomerName1(((_maintenanceData$cust = maintenanceData.customerName) === null || _maintenanceData$cust === void 0 || (_maintenanceData$cust = _maintenanceData$cust.customerName) === null || _maintenanceData$cust === void 0 ? void 0 : _maintenanceData$cust.replace(/\s+/g, '_').replace(/\./g, '')) || "");
            setServiceNumber(maintenanceData.serviceNumber || 0);
            setItem(maintenanceData.items || []);
            var sellTotal = parseFloat(maintenanceData.subTotal || 0).toFixed(2);
            setTotalSell(sellTotal);
            var allEstimations = ((_resEstimate$data = resEstimate.data) === null || _resEstimate$data === void 0 ? void 0 : _resEstimate$data.data) || [];
            setQuotation(allEstimations.filter(row => row._id === refName || row.ReferenceName === maintenanceData._id));
          }
          try {
            // Attempt to fetch optimized specific data
            var resRelated = yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/get-maintenance-related-info/").concat(id));
            var relatedData = resRelated.data.data;
            setItemOut(relatedData.itemOuts.map(row => _objectSpread(_objectSpread({}, row), {}, {
              outNumber: "O-".concat(String(row.outNumber).padStart(6, '0')),
              type: 'Item Out'
            })));
            setItemReturn(relatedData.itemReturns.map(row => _objectSpread(_objectSpread({}, row), {}, {
              outNumber: "R-".concat(String(row.outNumber).padStart(6, '0')),
              type: 'Item return'
            })));
            var resultPlaning = relatedData.planings.map(row => _objectSpread(_objectSpread({}, row), {}, {
              totalWorkDay: parseFloat(row.dayPayUSd * row.workNumber || 0).toFixed(2)
            }));
            setPlaningInfo(resultPlaning);
            var filteredInvoice = relatedData.invoices.filter(row => row.invoiceName === refName);
            var filteredInvoice2 = relatedData.invoices.filter(row => row.ReferenceName === id);
            setInvoice(filteredInvoice);
            setInvoice2(filteredInvoice2);
            setComments(relatedData.comments.reverse());
            setNotification(relatedData.notifications);
          } catch (fallbackError) {
            var _resIO$data, _resIR$data, _resP$data, _resComment$data, _resNotification$data;
            // Fallback to old massive data fetch if endpoint not found yet
            var _yield$Promise$all3 = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/itemOut")), axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/itemReturn")), axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/planing")), axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/invoice?summary=true")), axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/comment")), axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/notification"))]),
              _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 6),
              resIO = _yield$Promise$all4[0],
              resIR = _yield$Promise$all4[1],
              resP = _yield$Promise$all4[2],
              resInvoice = _yield$Promise$all4[3],
              resComment = _yield$Promise$all4[4],
              resNotification = _yield$Promise$all4[5];
            setItemOut((_resIO$data = resIO.data) === null || _resIO$data === void 0 || (_resIO$data = _resIO$data.data) === null || _resIO$data === void 0 ? void 0 : _resIO$data.filter(row => {
              var _row$reference;
              return ((_row$reference = row.reference) === null || _row$reference === void 0 ? void 0 : _row$reference._id) === id;
            }).map(row => _objectSpread(_objectSpread({}, row), {}, {
              outNumber: "O-".concat(String(row.outNumber).padStart(6, '0')),
              type: 'Item Out'
            })));
            setItemReturn((_resIR$data = resIR.data) === null || _resIR$data === void 0 || (_resIR$data = _resIR$data.data) === null || _resIR$data === void 0 ? void 0 : _resIR$data.filter(row => {
              var _row$reference2;
              return ((_row$reference2 = row.reference) === null || _row$reference2 === void 0 ? void 0 : _row$reference2._id) === id;
            }).map(row => _objectSpread(_objectSpread({}, row), {}, {
              outNumber: "R-".concat(String(row.outNumber).padStart(6, '0')),
              type: 'Item return'
            })));
            var _resultPlaning = (_resP$data = resP.data) === null || _resP$data === void 0 || (_resP$data = _resP$data.data) === null || _resP$data === void 0 ? void 0 : _resP$data.filter(row => {
              var _row$projectName;
              return row.projectName !== undefined && ((_row$projectName = row.projectName) === null || _row$projectName === void 0 ? void 0 : _row$projectName._id) === id;
            }).map(row => _objectSpread(_objectSpread({}, row), {}, {
              totalWorkDay: parseFloat(row.dayPayUSd * row.workNumber || 0).toFixed(2)
            }));
            setPlaningInfo(_resultPlaning);
            var allInvoices = resInvoice.data.data;
            var _filteredInvoice = allInvoices.filter(row => row.invoiceName === refName);
            var _filteredInvoice2 = allInvoices.filter(row => row.ReferenceName === id);
            setInvoice(_filteredInvoice);
            setInvoice2(_filteredInvoice2);
            var filteredComments = (_resComment$data = resComment.data) === null || _resComment$data === void 0 || (_resComment$data = _resComment$data.data) === null || _resComment$data === void 0 ? void 0 : _resComment$data.filter(row => row.CommentInfo.idInfo === id);
            setComments(filteredComments.reverse());
            setNotification((_resNotification$data = resNotification.data) === null || _resNotification$data === void 0 || (_resNotification$data = _resNotification$data.data) === null || _resNotification$data === void 0 ? void 0 : _resNotification$data.filter(row => row.idInfo === id));
          }
          setLoadingData(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      });
      return function fetchData() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchData();
  }, [id]);
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    referenceName = _useState16[0],
    setReferenceName = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    totalCost = _useState18[0],
    setTotalCost = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    totalSell = _useState20[0],
    setTotalSell = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    customerName1 = _useState22[0],
    setCustomerName1 = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    serviceNumber = _useState24[0],
    setServiceNumber = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    items = _useState26[0],
    setItem = _useState26[1];
  {/** planing start */}
  var planingObject = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return planingInfo === null || planingInfo === void 0 ? void 0 : planingInfo.reduce((acc, item) => {
      var id = item.employeeID;
      var name = item.employeeName;
      var dayPay = item.dayPayUSd;
      if (!acc[id]) {
        acc[id] = {
          id,
          name,
          dayPay,
          workD: 0,
          total: 0
        };
      }
      acc[id].total += parseFloat(item.totalWorkDay);
      acc[id].workD += parseFloat(item.workNumber);
      return acc;
    }, {});
  }, [planingInfo]);
  var totalAmount2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => Object.keys(planingObject).map(row => planingObject[row]), [planingObject]);
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    totalAmountPlaning = _useState28[0],
    setTotalAmountPlaning = _useState28[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var totalPayRoll = totalAmount2 === null || totalAmount2 === void 0 ? void 0 : totalAmount2.reduce((sum, row) => sum + row.total, 0);
    setTotalAmountPlaning(totalPayRoll);
  }, [totalAmount2]);
  {/** planing end */}
  ;(0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (items.length > 0) {
      var totalInfo = items.map(row => ({
        total: parseFloat(row.itemOut || 0) * parseFloat(row.itemCost || 0)
      }));
      var costInfo = totalInfo.reduce((sum, row) => sum + row.total, 0);
      var totalCostInfo = Number(totalAmountPlaning || 0) + Number(costInfo);
      setTotalCost(totalCostInfo.toFixed(2));
    } else {
      setTotalCost(Number(totalAmountPlaning || 0).toFixed(2));
    }
  }, [items, totalAmountPlaning]);
  {/** Item out sync start */}
  var itemMap = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    var map = {};
    item.forEach(i => {
      map[i._id] = i;
    });
    return map;
  }, [item]);
  var related = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (itemOut.length === 0) return null;
    return itemOut.reduce((acc, row) => {
      (row.itemsQtyArray || []).filter(item => parseFloat(item.newItemOut) > 0).forEach(item => {
        var _item$itemName, _item$itemName2;
        var rawId = ((_item$itemName = item.itemName) === null || _item$itemName === void 0 ? void 0 : _item$itemName._id) || item.itemName;
        var Id = rawId ? rawId.toString() : '';
        var ItemName = ((_item$itemName2 = item.itemName) === null || _item$itemName2 === void 0 ? void 0 : _item$itemName2.itemName) || Id;
        if (Id) {
          if (!acc[Id]) {
            acc[Id] = {
              ItemName,
              Id,
              total: 0
            };
          }
          acc[Id].total += parseFloat(item.newItemOut);
        }
      });
      return acc;
    }, {});
  }, [itemOut]);
  var relatedReturn = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (itemReturn.length === 0) return null;
    return itemReturn.reduce((acc, row) => {
      (row.itemsQtyArray || []).filter(item => parseFloat(item.newItemOut) > 0).forEach(item => {
        var _item$itemName3, _item$itemName4;
        var rawId = ((_item$itemName3 = item.itemName) === null || _item$itemName3 === void 0 ? void 0 : _item$itemName3._id) || item.itemName;
        var Id1 = rawId ? rawId.toString() : '';
        var ItemName1 = ((_item$itemName4 = item.itemName) === null || _item$itemName4 === void 0 ? void 0 : _item$itemName4.itemName) || Id1;
        if (Id1) {
          if (!acc[Id1]) {
            acc[Id1] = {
              ItemName1,
              Id1,
              total1: 0
            };
          }
          acc[Id1].total1 += parseFloat(item.newItemOut);
        }
      });
      return acc;
    }, {});
  }, [itemReturn]);
  var newAllOutReturn = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (related === null) return null;
    return Object.values(related).map(_ref12 => {
      var ItemName = _ref12.ItemName,
        Id = _ref12.Id,
        total = _ref12.total;
      var related1 = relatedReturn !== null ? Object.values(relatedReturn).find(_ref13 => {
        var Id1 = _ref13.Id1;
        return Id1 === Id;
      }) : null;
      return {
        ItemName,
        Id,
        total: related1 ? total - related1.total1 : total
      };
    });
  }, [related, relatedReturn]);
  var relatedPurchase = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    return maintenance.filter(row => row._id === id).map(row => _objectSpread(_objectSpread({}, row), {}, {
      items: (row.items || []).map(Item => {
        var _Item$itemName;
        var targetId = (_Item$itemName = Item.itemName) !== null && _Item$itemName !== void 0 && _Item$itemName._id ? Item.itemName._id.toString() : '';
        var newAllOutReturnInfo = newAllOutReturn !== null ? newAllOutReturn.find(Item1 => Item1.Id === targetId) : null;
        return _objectSpread(_objectSpread({}, Item), {}, {
          itemOut: newAllOutReturnInfo ? newAllOutReturnInfo.total : 0
        });
      })
    }));
  }, [maintenance, id, newAllOutReturn]);
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('false'),
    _useState30 = _slicedToArray(_useState29, 2),
    synchro = _useState30[0],
    setSynchro = _useState30[1];
  var handleSynced = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        var updateTasks = relatedPurchase.map(/*#__PURE__*/function () {
          var _ref15 = _asyncToGenerator(function* (row) {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/get-maintenance/").concat(row._id));
            var currentData = res.data.data;
            var mergedItems = (currentData.items || []).map(currentItem => {
              var syncItem = row.items.find(item => item.idRow === currentItem.idRow);
              if (syncItem) {
                return _objectSpread(_objectSpread({}, currentItem), {}, {
                  itemOut: syncItem.itemOut
                });
              }
              return currentItem;
            });
            return axios__WEBPACK_IMPORTED_MODULE_37__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/update-maintenance/").concat(row._id), {
              items: mergedItems
            });
          });
          return function (_x2) {
            return _ref15.apply(this, arguments);
          };
        }());
        yield Promise.all(updateTasks);
        setSynchro('true');
        handleOpen();
      } catch (error) {
        console.error('An error occurred during sync:', error);
        handleError();
      }
    });
    return function handleSynced(_x) {
      return _ref14.apply(this, arguments);
    };
  }();
  {/** Item Out sync end */}
  var Gain = isNaN(totalSell - totalCost) ? 0 : parseFloat(totalSell - totalCost).toFixed(2);
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState32 = _slicedToArray(_useState31, 2),
    invoice = _useState32[0],
    setInvoice = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState34 = _slicedToArray(_useState33, 2),
    invoice2 = _useState34[0],
    setInvoice2 = _useState34[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    anchorEl = _React$useState2[0],
    setAnchorEl = _React$useState2[1];
  var open = Boolean(anchorEl);
  var handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  var handleCloseMenu = () => {
    setAnchorEl(null);
  };
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState36 = _slicedToArray(_useState35, 2),
    show = _useState36[0],
    setShow = _useState36[1];
  var handleShow = e => {
    setShow(e);
    setAnchorEl(null);
  };
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_51__.useReactToPrint)({
    content: () => componentRef.current,
    documentTitle: "M-".concat(String(serviceNumber).padStart(6, '0'), " For ").concat(customerName1)
  });
  var handleOpenPrint = () => {
    handlePrint();
    setAnchorEl(null);
  };
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
    _useState38 = _slicedToArray(_useState37, 2),
    reason = _useState38[0],
    setReason = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState40 = _slicedToArray(_useState39, 2),
    Comments1 = _useState40[0],
    setComments = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    notification = _useState42[0],
    setNotification = _useState42[1];
  var CommentInfo = {
    idInfo: id,
    person: user.data.userName,
    reason
  };
  {/** Loading Start */}
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    loading = _useState44[0],
    setLoading = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    loadingOpenModal = _useState46[0],
    setLoadingOpenModal = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState48 = _slicedToArray(_useState47, 2),
    ErrorOpenModal = _useState48[0],
    setErrorOpenModal = _useState48[1];
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    setLoadingOpenModal(false);
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  {/** Loading End */}
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_43___default()(Date.now());
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        CommentInfo,
        dateComment
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_37__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_38__.ENDPOINT_URL, "/create-comment/"), data);
        if (res) {
          setReason("");
          handleOpen();
          var newData = res.data.data;
          setComments([newData, ...Comments1]);
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmitEdit(_x3) {
      return _ref16.apply(this, arguments);
    };
  }();
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
    _useState50 = _slicedToArray(_useState49, 2),
    maintenance2 = _useState50[0],
    SetMaintenance2 = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState52 = _slicedToArray(_useState51, 2),
    show2 = _useState52[0],
    setShow2 = _useState52[1];
  var handleShow2 = e => {
    setShow2(e);
  };
  var maintenanceFiltered = maintenance === null || maintenance === void 0 ? void 0 : maintenance.filter(row => row._id === maintenance2._id);
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
    _useState54 = _slicedToArray(_useState53, 2),
    showRef = _useState54[0],
    setShowRef = _useState54[1];
  var handleShowRef = e => {
    setShowRef(e);
    setAnchorEl(null);
  };
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState56 = _slicedToArray(_useState55, 2),
    value = _useState56[0],
    setValue = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState58 = _slicedToArray(_useState57, 2),
    value2 = _useState58[0],
    setValue2 = _useState58[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var selectedIndex = maintenance.findIndex(row => row._id === id);
    if (selectedIndex !== -1) {
      setValue(selectedIndex);
    }
  }, [maintenance, id]);
  var handleChange = (e, newValue) => {
    setValue(newValue);
  };
  var handleChange2 = (e, newValue) => {
    setValue2(newValue);
  };
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''),
    _useState60 = _slicedToArray(_useState59, 2),
    search = _useState60[0],
    setSearch = _useState60[1];
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
  };
  var newArray = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    if (search === '') return maintenance;
    var lowerSearch = search.toLowerCase();
    return maintenance.filter(row => {
      var _row$customerName;
      return row.serviceName && row.serviceName.toLowerCase().includes(lowerSearch) || row.serviceNumber && String(row.serviceNumber).includes(lowerSearch) || row.brand && row.brand.toLowerCase().includes(lowerSearch) || ((_row$customerName = row.customerName) === null || _row$customerName === void 0 || (_row$customerName = _row$customerName.customerName) === null || _row$customerName === void 0 ? void 0 : _row$customerName.toLowerCase().includes(lowerSearch)) || row.items && row.items.some(Item => {
        var _Item$itemName$itemNa;
        return Item.itemName && ((_Item$itemName$itemNa = Item.itemName.itemName) === null || _Item$itemName$itemNa === void 0 ? void 0 : _Item$itemName$itemNa.toLowerCase().includes(lowerSearch));
      }) || row.items && row.items.some(Item => Item.itemDescription && Item.itemDescription.toLowerCase().includes(lowerSearch));
    });
  }, [maintenance, search]);
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default().useState('1'),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    value3 = _React$useState4[0],
    setValue3 = _React$useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    var result = localStorage.getItem('TabMaintenanceView');
    if (result) {
      setValue3(result);
    }
  });
  var handleChange3 = (event, newValue) => {
    var changeValue = newValue;
    setValue3(changeValue);
    localStorage.setItem('TabMaintenanceView', changeValue);
  };
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(true),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    sideBar = _React$useState6[0],
    setSideBar = _React$useState6[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var data1 = maintenance.filter(row => row._id === id).map(row => ({
    number: "M-".concat(String(row.serviceNumber).padStart(6, '0')),
    visitDate: dayjs__WEBPACK_IMPORTED_MODULE_43___default()(row.visitDate).format('DD/MM/YYYY'),
    serviceDate: dayjs__WEBPACK_IMPORTED_MODULE_43___default()(row.serviceDate).format('DD/MM/YYYY'),
    status: row.status
  }));
  var data2 = maintenance.filter(row => row._id === id).map(row => {
    var _row$customerName2, _row$customerName3, _row$customerName4;
    return {
      Customer: (_row$customerName2 = row.customerName) === null || _row$customerName2 === void 0 ? void 0 : _row$customerName2.customerName,
      Phone: (_row$customerName3 = row.customerName) === null || _row$customerName3 === void 0 ? void 0 : _row$customerName3.phone,
      Address: (_row$customerName4 = row.customerName) === null || _row$customerName4 === void 0 ? void 0 : _row$customerName4.address
    };
  });
  var data3 = maintenance.filter(row => row._id === id).map(row => ({
    itemDescriptionInfo: row.itemDescriptionInfo,
    brand: row.brand,
    serialNo: row.serialNo,
    model: row.model,
    warranty: row.warranty,
    defectDescription: row.defectDescription
  }));
  var data4 = maintenance.filter(row => row._id === id).map(row => ({
    action: row.action,
    actionTaken: row.actionTaken,
    note: row.note
  }));
  var data5 = items.map((Item, i) => {
    var _Item$itemName2;
    return {
      no: i + 1,
      item: (_Item$itemName2 = Item.itemName) === null || _Item$itemName2 === void 0 ? void 0 : _Item$itemName2.itemName,
      itemDescription: Item.itemDescription,
      itemQty: Item.itemQty,
      itemRate: '$' + Item.itemRate,
      itemDiscount: '%' + Item.itemDiscount,
      itemAmount: '$' + Item.itemAmount
    };
  });
  var data6 = maintenance.filter(row => row._id === id).map(row => ({
    no: '',
    description: 'Labor Fees',
    no1: '',
    laborQty: row.laborQty,
    adjustmentNumber: '$' + row.adjustmentNumber,
    laborDiscount: '%' + row.laborDiscount,
    totalLaborFeesGenerale: '$' + row.totalLaborFeesGenerale
  }));
  var data7 = maintenance.filter(row => row._id === id).map(row => ({
    no: '',
    no1: 'Total General',
    description: '',
    laborQty: '',
    adjustmentNumber: '',
    laborDiscount: '',
    totalInvoice: '$' + row.totalInvoice
  }));
  var exportToExcel = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(function* () {
      var workbook = new (exceljs__WEBPACK_IMPORTED_MODULE_62___default().Workbook)();
      var workSheet = workbook.addWorksheet('Sheet1');
      var columns1 = [{
        header: "#",
        key: 'number',
        width: 20
      }, {
        header: "Date",
        key: 'visitDate',
        width: 20
      }, {
        header: "Service Date",
        key: 'serviceDate',
        width: 20
      }, {
        header: "Status",
        key: 'status',
        width: 20
      }];
      var columns2 = [{
        header: "Customer",
        key: 'Customer',
        width: 20
      }, {
        header: "Phone",
        key: 'Phone',
        width: 20
      }, {
        header: "Address",
        key: 'Address',
        width: 20
      }];
      var columns3 = [{
        header: "Item Description",
        key: 'itemDescriptionInfo',
        width: 20
      }, {
        header: "Brand",
        key: 'brand',
        width: 20
      }, {
        header: "Serial No.",
        key: 'serialNo',
        width: 20
      }, {
        header: "Model",
        key: 'model',
        width: 20
      }, {
        header: "Warranty Status",
        key: 'warranty',
        width: 20
      }, {
        header: "Defect Description",
        key: 'defectDescription',
        width: 20
      }];
      var columns4 = [{
        header: "Action",
        key: 'action',
        width: 20
      }, {
        header: "Action Taken",
        key: 'actionTaken',
        width: 20
      }, {
        header: "Note",
        key: 'note',
        width: 20
      }];
      var columns5 = [{
        header: "#",
        key: 'no',
        width: 20
      }, {
        header: "Item",
        key: 'item',
        width: 20
      }, {
        header: "Item Description",
        key: 'itemDescription',
        width: 20
      }, {
        header: "Qty",
        key: 'itemQty',
        width: 20
      }, {
        header: "Rate",
        key: 'itemRate',
        width: 20
      }, {
        header: "Discount",
        key: 'itemDiscount',
        width: 20
      }, {
        header: "Amount",
        key: 'itemAmount',
        width: 20
      }];
      workSheet.addRow([]);
      workSheet.addRow(['Job Card Info']);
      workSheet.addRow(columns1.map(col => col.header));
      data1.forEach(item => {
        workSheet.addRow([item.number, item.visitDate, item.serviceDate, item.status]);
      });
      workSheet.addRow([]);
      workSheet.addRow(['Client Info']);
      workSheet.addRow(columns2.map(col => col.header));
      data2.forEach(item => {
        workSheet.addRow([item.Customer, item.Phone, item.Address]);
      });
      workSheet.addRow([]);
      workSheet.addRow(['Appliance Info']);
      workSheet.addRow(columns3.map(col => col.header));
      data3.forEach(item => {
        workSheet.addRow([item.itemDescriptionInfo, item.brand, item.serialNo, item.model, item.warranty, item.defectDescription]);
      });
      workSheet.addRow([]);
      workSheet.addRow(['Repair Details']);
      workSheet.addRow(columns4.map(col => col.header));
      data4.forEach(item => {
        workSheet.addRow([item.action, item.actionTaken, item.note]);
      });
      workSheet.addRow([]);
      workSheet.addRow(['Finance']);
      workSheet.addRow(columns5.map(col => col.header));
      data5.forEach(item => {
        workSheet.addRow([item.no, item.item, item.itemDescription, item.itemQty, item.itemRate, item.itemDiscount, item.itemAmount]);
      });
      data6.forEach(item => {
        workSheet.addRow([item.no, item.description, item.no1, item.laborQty, item.adjustmentNumber, item.laborDiscount, item.totalLaborFeesGenerale]);
      });
      data7.forEach(item => {
        workSheet.addRow([item.no, item.no1, item.description, item.laborQty, item.adjustmentNumber, item.laborDiscount, item.totalInvoice]);
      });
      var buffer = yield workbook.xlsx.writeBuffer();
      var bold = new Blob([buffer], {
        type: 'application/octet-stream'
      });
      (0,file_saver__WEBPACK_IMPORTED_MODULE_63__.saveAs)(bold, "M-".concat(String(serviceNumber).padStart(6, '0'), " for ").concat(customerName1, ".xlsx"));
    });
    return function exportToExcel() {
      return _ref17.apply(this, arguments);
    };
  }();
  var Row2 = _ref18 => {
    var totalAmountPlaning = _ref18.totalAmountPlaning,
      totalAmount2 = _ref18.totalAmount2;
    var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      open = _React$useState8[0],
      setOpen = _React$useState8[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
      style: {
        '& > *': {
          borderBottom: 'unset'
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid black',
        cursor: 'pointer'
      },
      onClick: () => setOpen(!open)
    }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_40__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 4,
      align: "left",
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 4,
      style: {
        border: '1px solid black'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, totalAmountPlaning === null || totalAmountPlaning === void 0 ? void 0 : totalAmountPlaning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid black',
        paddingBottom: 0,
        paddingTop: 0
      },
      colSpan: 9
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      in: open,
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        margin: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      gutterBottom: true,
      component: "div"
    }, "Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      style: {
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Days Works"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Total Pay Day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Total Pay"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, totalAmount2 === null || totalAmount2 === void 0 ? void 0 : totalAmount2.map((row, i) => {
      var _row$dayPay, _row$total;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
        key: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        align: "left",
        style: {
          textAlign: 'left',
          border: '1px solid black'
        }
      }, row.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        },
        align: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.workD)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        },
        align: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, (_row$dayPay = row.dayPay) === null || _row$dayPay === void 0 ? void 0 : _row$dayPay.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        },
        align: "left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, (_row$total = row.total) === null || _row$total === void 0 ? void 0 : _row$total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))));
    }))))))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_31__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_30__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Maintenance Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => navigate('/MaintenanceViewAdmin')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_44__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_61__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_60__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_50__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_30__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_36__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_33__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_30__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_34__["default"], {
    maxWidth: "none",
    sx: {
      mt: 2
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_47__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    spacing: 2
  }, show === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 3
  }, show2 === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      padding: '5px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "h6"
  }, "All Service")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow2(2)
  }, "Filter"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      height: 'calc(100vh - 170px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: value,
    onChange: handleChange,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, maintenance === null || maintenance === void 0 ? void 0 : maintenance.map((row, index) => {
    var _row$customerName5;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: index,
      label: ((_row$customerName5 = row.customerName) === null || _row$customerName5 === void 0 ? void 0 : _row$customerName5.customerName) + ' | ' + row.serviceName,
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_41__.Link,
      to: "/MaintenanceViewInformation/".concat(row._id),
      sx: {
        '&.Mui-selected': {
          color: 'white',
          backgroundColor: '#30368a',
          borderRadius: '10px'
        }
      }
    });
  })))) : '', show2 === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '10px'
    },
    spacing: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    label: "search",
    id: "search",
    value: search,
    variant: "standard",
    onChange: handleSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => handleShow2(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__["default"], {
    style: {
      color: '#30368a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      height: 'calc(100vh - 125px)',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: value2,
    onChange: handleChange2,
    orientation: "vertical",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: '#30368a'
      }
    }
  }, newArray === null || newArray === void 0 ? void 0 : newArray.map((row, index) => {
    var _row$customerName6;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      key: index,
      label: ((_row$customerName6 = row.customerName) === null || _row$customerName6 === void 0 ? void 0 : _row$customerName6.customerName) + ' | ' + row.serviceName,
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_41__.Link,
      to: "/MaintenanceViewInformation/".concat(row._id),
      sx: {
        '&.Mui-selected': {
          color: '#30368a'
        }
      }
    });
  })))) : '') : "", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      width: '100%',
      background: 'white'
    }
  }, maintenance === null || maintenance === void 0 || (_maintenance$filter = maintenance.filter(row => row._id === id)) === null || _maintenance$filter === void 0 ? void 0 : _maintenance$filter.map(row => {
    var _row$customerName7, _data, _row$customerName8, _row$customerName9, _row$customerName0;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      key: row._id,
      style: {
        padding: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("header", {
      style: {
        display: 'block'
      }
    }, showRef === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "h5"
    }, (_row$customerName7 = row.customerName) === null || _row$customerName7 === void 0 ? void 0 : _row$customerName7.customerName, " | ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "  M-", String(row.serviceNumber).padStart(6, '0'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      color: row.status === "Open" ? "blue" : row.status === "Pending" ? "red" : row.status === "Reschedule" ? "Orange" : row.status === "Close" ? "green" : "black",
      sx: {
        textAlign: 'center'
      }
    }, row.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      "aria-controls": open ? 'demo-customized-menu' : undefined,
      "aria-haspopup": "true",
      "aria-expanded": open ? 'true' : undefined,
      variant: "contained",
      disableElevation: true,
      onClick: handleClick,
      endIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_54__["default"], null),
      sx: {
        bgcolor: 'gray',
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray'
        }
      }
    }, "Options"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      id: "demo-customized-menu",
      MenuListProps: {
        'aria-labelledby': 'demo-customized-button'
      },
      anchorEl: anchorEl,
      open: open,
      onClose: handleCloseMenu,
      TransitionComponent: _mui_material__WEBPACK_IMPORTED_MODULE_18__["default"]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      disabled: row.status === 'Converted' && MaintenanceInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
      to: "/MaintenanceUpdateView/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_25__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Edit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
      to: "/MaintenanceFormClone/".concat(row._id),
      className: "LinkName",
      style: {
        display: 'flex',
        gap: '20px',
        alignItems: 'center',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null, "Clone"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      onClick: handleOpenPrint,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_LocalPrintshop__WEBPACK_IMPORTED_MODULE_26__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Print")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      onClick: exportToExcel,
      sx: {
        display: 'flex',
        gap: '20px',
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_64__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Export to Excel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      onClick: () => handleShow(2)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        color: 'gray'
      }
    }, "Comments"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      onClick: () => handleShow(3)
    }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        color: 'gray'
      }
    }, "History")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, row.ReferenceName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      style: {
        color: 'gray'
      },
      onClick: () => handleShowRef(2)
    }, "Reference") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      onClick: handleCloseMenu,
      style: {
        color: 'gray'
      }
    }, "No Related Reference")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], null, row.status === 'Close' && row.Converted !== true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
      to: "/MaintenanceConvertToInvoice/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Convert To Invoice")), row.Converted === true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
      to: "/MaintenanceConvertToInvoice/".concat(row._id),
      className: "LinkName",
      style: {
        color: 'gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "Convert To Invoice (Again)")))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("section", null, showRef === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      className: "secondTable",
      style: {
        fontSize: '80%',
        marginBottom: '5px'
      }
    }, quotation && quotation.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, quotation.map(row => {
      var _ref19;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
        key: row._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Date ", dayjs__WEBPACK_IMPORTED_MODULE_43___default()(row.estimateDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Quotation # ", (_ref19 = row.estimateName || row.invoiceName) === null || _ref19 === void 0 ? void 0 : _ref19.replace(/EST\s*-?/i, 'QUO-')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Amount  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), " ", row.totalInvoice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        colSpan: 2,
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Status: ", row.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
        to: "/EstimateViewAdminAll/".concat(row._id),
        className: "LinkName"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        style: {
          fontSize: '12px'
        }
      }, "View")))))));
    })), invoice && invoice.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, invoice.map(row => {
      var _row$balanceDue;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
        key: row._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Date ", dayjs__WEBPACK_IMPORTED_MODULE_43___default()(row.invoiceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Invoice # ", row.invoiceName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Amount  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), " ", row.totalInvoice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Paid  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), " ", row.total), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Balance  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), " ", (_row$balanceDue = row.balanceDue) === null || _row$balanceDue === void 0 ? void 0 : _row$balanceDue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
        to: "/InvoiceViewAdminAll/".concat(row._id),
        className: "LinkName"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        style: {
          fontSize: '12px'
        }
      }, "View")))))));
    })), invoice2 && invoice2.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, invoice2.map(row => {
      var _row$balanceDue2;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
        key: row._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Date ", dayjs__WEBPACK_IMPORTED_MODULE_43___default()(row.invoiceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Invoice # ", row.invoiceName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Amount  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), " ", row.totalInvoice), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Paid  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), " ", row.total), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'left',
          border: '1px solid #DDD'
        }
      }, " Balance  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), " ", (_row$balanceDue2 = row.balanceDue) === null || _row$balanceDue2 === void 0 ? void 0 : _row$balanceDue2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid #DDD'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_41__.NavLink, {
        to: "/InvoiceViewAdminAll/".concat(row._id),
        className: "LinkName"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        style: {
          fontSize: '12px'
        }
      }, "View")))))));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ViewTooltip, {
      title: "Close",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      onClick: () => handleShowRef(1),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__["default"], {
      style: {
        color: '#202a5a'
      }
    })))) : '', " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        width: '100%',
        typography: 'body1'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_55__["default"], {
      value: value3
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        borderBottom: 1,
        borderColor: 'divider'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_56__["default"], {
      onChange: handleChange3,
      "aria-label": "lab API tabs example",
      sx: {
        '& .MuiTabs-indicator': {
          backgroundColor: 'white',
          height: '0px'
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      label: "Overview",
      value: "1",
      sx: {
        '&.Mui-selected': {
          color: 'white',
          backgroundColor: 'gray',
          borderRadius: '10px'
        },
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray',
          borderRadius: '10px'
        }
      }
    }), user.data.role === 'CEO' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      label: "Summary",
      value: "2",
      sx: {
        '&.Mui-selected': {
          color: 'white',
          backgroundColor: 'gray',
          borderRadius: '10px'
        },
        '&:hover': {
          color: 'gray',
          bgcolor: 'white',
          border: '1px solid gray',
          borderRadius: '10px'
        }
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_57__["default"], {
      value: "1",
      sx: {
        height: '500px',
        overflow: 'hidden',
        overflowY: 'scroll'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      ref: componentRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      style: {
        backgroundColor: 'white',
        width: '100%',
        padding: '10px',
        fontSize: '90%',
        color: 'black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_PrintHeader__WEBPACK_IMPORTED_MODULE_0__["default"], {
      branchId: typeof row !== "undefined" ? row === null || row === void 0 ? void 0 : row.branchId : typeof data !== "undefined" ? (_data = data) === null || _data === void 0 ? void 0 : _data.branchId : ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100%',
        textAlign: 'center',
        border: '1px solid black'
      },
      colSpan: 4
    }, "Job Card Info"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, "Maintenance Order Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_43___default()(row.serviceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, " Maintenance Order No."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, "M-", String(row.serviceNumber).padStart(6, '0'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, "Visit Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_43___default()(row.visitDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, "status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, row.status)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100%',
        textAlign: 'center',
        border: '1px solid black'
      },
      colSpan: 4
    }, "Client Info"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black',
        width: '10px'
      }
    }, "Customer Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black',
        width: '100px'
      }
    }, (_row$customerName8 = row.customerName) === null || _row$customerName8 === void 0 ? void 0 : _row$customerName8.customerName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, " Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black',
        width: '100px'
      }
    }, (_row$customerName9 = row.customerName) === null || _row$customerName9 === void 0 ? void 0 : _row$customerName9.phone)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, "Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 3,
      style: {
        border: '1px solid black'
      }
    }, (_row$customerName0 = row.customerName) === null || _row$customerName0 === void 0 ? void 0 : _row$customerName0.address)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100%',
        textAlign: 'center',
        border: '1px solid black'
      },
      colSpan: 4
    }, "Appliance Info"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, "Item Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 3,
      style: {
        border: '1px solid black'
      }
    }, row.itemDescriptionInfo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, "Brand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black',
        width: '100px'
      }
    }, row.brand), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, " Serial No."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black',
        width: '100px'
      }
    }, row.serialNo)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, "Model"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black',
        width: '100px'
      }
    }, row.model), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, "Warranty Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black',
        width: '100px'
      }
    }, row.warranty)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, "Defect Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 3,
      style: {
        border: '1px solid black'
      }
    }, row.defectDescription)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        height: '130px',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100%',
        textAlign: 'center',
        border: '1px solid black'
      },
      colSpan: 2
    }, "Repair Details")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid black',
        width: '20px'
      }
    }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, row.action !== undefined ? row.action : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid black'
      }
    }, "Action Taken"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        border: '1px solid black'
      }
    }, "Note"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black',
        width: '50%',
        textAlign: 'left'
      }
    }, row.actionTaken), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black',
        width: '50%',
        textAlign: 'left'
      }
    }, row.note !== undefined ? row.note : '')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        height: '130px',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        width: '100%',
        textAlign: 'center',
        border: '1px solid black'
      },
      colSpan: 6
    }, "Finance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black',
        width: '120px'
      }
    }, "Parts/s Model"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black',
        width: '150px'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Brand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black',
        width: '50px'
      }
    }, "Discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black',
        width: '100px'
      }
    }, "Total"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, (row.items || []).map((Item, i) => {
      var _Item$itemName3, _Item$itemName4;
      var relatedUnit = itemMap[(_Item$itemName3 = Item.itemName) === null || _Item$itemName3 === void 0 ? void 0 : _Item$itemName3._id];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
        key: Item.idRow
      }, Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid black'
        },
        colSpan: 5
      }, Item.newDescription)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        hidden: Item.itemName ? Item.itemName.itemName === 'empty' : ''
      }, ((_Item$itemName4 = Item.itemName) === null || _Item$itemName4 === void 0 || (_Item$itemName4 = _Item$itemName4.itemName) === null || _Item$itemName4 === void 0 ? void 0 : _Item$itemName4.toUpperCase()) || '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        }
      }, Item.itemDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        }
      }, relatedUnit !== undefined ? relatedUnit.itemBrand.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        }
      }, Item.itemQty, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        "data-prefix": true
      }, "$ "), Item.itemRate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        "data-prefix": true
      }, "% "), Item.itemDiscount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        "data-prefix": true
      }, "$ "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        id: "totalItemService"
      }, Number(Item.itemAmount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      },
      colSpan: 3
    }, "Labor Fees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, row.laborQty !== undefined ? row.laborQty : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$ "), row.adjustmentNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "% "), row.laborDiscount !== undefined ? row.laborDiscount : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$ "), row.totalLaborFeesGenerale !== undefined ? row.totalLaborFeesGenerale : 0)), user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Row2, {
      totalAmountPlaning: totalAmountPlaning,
      totalAmount2: totalAmount2
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black',
        width: '100px'
      },
      colSpan: 5
    }, "Grand Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black',
        width: '100px'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$ "), Number(row.totalInvoice || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_57__["default"], {
      value: "2",
      sx: {
        height: '500px',
        overflow: 'hidden',
        overflowY: 'scroll',
        padding: '20px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      sx: {
        marginBottom: '15px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      sx: {
        textAlign: 'center',
        color: 'gray'
      }
    }, "Summary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
      onClick: handleSynced,
      className: "btnCustomer"
    }, "sync"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_58__.PieChart, {
      colors: palette,
      series: [{
        arcLabel: item => "".concat(item.label, "($").concat(item.value, ")"),
        arcLabelMinAngle: 35,
        highlightScope: {
          faded: 'global',
          highlighted: 'item'
        },
        faded: {
          innerRadius: 30,
          additionalRadius: -30,
          color: 'gray'
        },
        data: [{
          "id": 1,
          "label": "Cost",
          "value": totalCost
        }, {
          "id": 2,
          "label": "Sell",
          "value": totalSell
        }, {
          "id": 3,
          "label": "Gain",
          "value": Gain
        }]
      }],
      width: 450,
      height: 250,
      sx: {
        ["& .".concat(_mui_x_charts_PieChart__WEBPACK_IMPORTED_MODULE_59__.pieArcLabelClasses.root)]: {
          fill: 'white',
          fontWeight: 'bold'
        }
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Item Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Qty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Sell Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Out"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Cost Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("th", {
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Total Cost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, (row.items || []).map((Item, i) => {
      var _Item$itemName6, _parseFloat;
      var relatedUnit = item.find(Item1 => {
        var _Item$itemName5;
        return Item1._id === ((_Item$itemName5 = Item.itemName) === null || _Item$itemName5 === void 0 ? void 0 : _Item$itemName5._id);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
        key: Item.idRow
      }, Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          textAlign: 'center',
          border: '1px solid black'
        },
        colSpan: 5
      }, Item.newDescription)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        hidden: Item.itemName ? Item.itemName.itemName === 'empty' : ''
      }, ((_Item$itemName6 = Item.itemName) === null || _Item$itemName6 === void 0 || (_Item$itemName6 = _Item$itemName6.itemName) === null || _Item$itemName6 === void 0 ? void 0 : _Item$itemName6.toUpperCase()) || '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black',
          width: '200px'
        }
      }, Item.itemDescription), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        }
      }, Item.itemQty, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        }
      }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        "data-prefix": true
      }, "$ "), Item.itemRate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        "data-prefix": true
      }, "% "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemDiscount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        "data-prefix": true
      }, "$ "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        id: "totalItemService"
      }, Number(Item.itemAmount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemOut !== undefined ? Item.itemOut : 0, " ", relatedUnit !== undefined ? relatedUnit.unit.toUpperCase() : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        "data-prefix": true
      }, "$ "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemCost !== undefined ? Item.itemCost : 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
        style: {
          border: '1px solid black'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
        "data-prefix": true
      }, "$ "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Item.itemOut !== undefined ? (_parseFloat = parseFloat(Item.itemOut * Item.itemCost)) === null || _parseFloat === void 0 ? void 0 : _parseFloat.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0))));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        textAlign: 'left',
        border: '1px solid black',
        cursor: 'pointer'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 4,
      align: "left",
      style: {
        textAlign: 'left',
        border: '1px solid black'
      }
    }, "Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      colSpan: 4,
      style: {
        border: '1px solid black'
      },
      align: "left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, Number(totalAmountPlaning || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black',
        textAlign: 'center'
      },
      colSpan: 9
    }, " Total Sell: (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$ "), totalSell.replace(/\B(?=(\d{3})+(?!\d))/g, ','), ") - Total Cost: (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$ "), totalCost.replace(/\B(?=(\d{3})+(?!\d))/g, ','), ") = Gain: (", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$ "), Gain.replace(/\B(?=(\d{3})+(?!\d))/g, ','), ") ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      },
      colSpan: 2
    }, "Labor Fees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, row.laborQty !== undefined ? row.laborQty : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$ "), row.adjustmentNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "% "), row.laborDiscount !== undefined ? row.laborDiscount : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
      style: {
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
      "data-prefix": true
    }, "$ "), row.totalLaborFees !== undefined ? row.totalLaborFees : 0))))))))));
  })))), show === 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "Comments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    className: "btnCustomer1",
    onClick: () => handleShow(1)
  }, "Close")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("form", {
    onSubmit: handleSubmitEdit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    required: true,
    id: "comments",
    name: "comments",
    multiline: true,
    rows: 4,
    value: reason,
    onChange: e => setReason(e.target.value),
    label: "Comments",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    type: "submit",
    style: {
      width: '100%'
    },
    className: "btnCustomer6"
  }, "Save")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      height: '333px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("table", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tbody", null, Comments1.map(Item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("tr", {
    key: Item._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("td", {
    style: {
      width: '100%',
      borderBottom: '1px solid black'
    }
  }, dayjs__WEBPACK_IMPORTED_MODULE_43___default()(Item.dateComment).format('DD/MM'), " ", Item.CommentInfo.person + ': ' + Item.CommentInfo.reason))))))))) : "", show === 3 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: "itemInfoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, "HISTORY"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: () => handleShow(1),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__["default"], {
    style: {
      color: '#202a5a'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      height: '518px',
      overflow: 'hidden',
      overflowY: 'scroll',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      padding: '10px'
    }
  }, notification.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", null, row.person + ' on ' + dayjs__WEBPACK_IMPORTED_MODULE_43___default()(row.dateNotification).format('DD/MMMM'), ": ", row.reason))))))) : ""))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_22__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_47__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_45__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), synchro === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Item Out Sync successfully") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    onClick: handleClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_22__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_47__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaintenanceViewInformation);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfTWFpbnRlbmFuY2VWaWV3X01haW50ZW5hbmNlVmlld0luZm9ybWF0aW9uX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyxnQjs7Ozs7Ozs7OztBQ1pZO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyx3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ1pEOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLGNBQWMsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05mOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLHFCQUFxQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ050QixDQUF5RDtBQUNBO0FBQ1c7QUFDWDtBQUNqQztBQUNFO0FBQzBCO0FBQ3NCO0FBQ1I7QUFDZDtBQUNvVjtBQUN4VjtBQUNRO0FBQ1k7QUFDUjtBQUNaO0FBQ2dCO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFD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RUFBRSxLQUFLO01BQUVpZ0IsTUFBTSxFQUFFLE1BQU07TUFBRTVlLEtBQUssRUFBRTtJQUFPO0VBQUUsQ0FBRSxDQUFJLENBQUMsZUFDN0VsSiwwREFBQSxhQUFJLHVCQUF5QixDQUFDLGVBQzlCQSwwREFBQTtJQUFRZ0gsU0FBUyxFQUFDLGFBQWE7SUFBQ29mLE9BQU8sRUFBRXhJO0VBQWlCLEdBQUMsV0FFbkQsQ0FDTCxDQUVKLENBQ0EsQ0FDSixDQUFDO0FBRVY7QUFFQSxpRUFBZTFTLDBCQUEwQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjay5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd0Rvd24uanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9GaWxlQ29weS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0tleWJvYXJkQXJyb3dVcC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvTWFpbnRlbmFuY2VWaWV3L01haW50ZW5hbmNlVmlld0luZm9ybWF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwelwiXG59KSwgJ0Fycm93QmFjaycpOyIsIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk03LjQxIDguNTkgMTIgMTMuMTdsNC41OS00LjU4TDE4IDEwbC02IDYtNi02elwiXG59KSwgJ0tleWJvYXJkQXJyb3dEb3duJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTYgMUg0Yy0xLjEgMC0yIC45LTIgMnYxNGgyVjNoMTJ6bS0xIDQgNiA2djEwYzAgMS4xLS45IDItMiAySDcuOTlDNi44OSAyMyA2IDIyLjEgNiAyMWwuMDEtMTRjMC0xLjEuODktMiAxLjk5LTJ6bS0xIDdoNS41TDE0IDYuNXpcIlxufSksICdGaWxlQ29weScpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTcuNDEgMTUuNDEgMTIgMTAuODNsNC41OSA0LjU4TDE4IDE0bC02LTYtNiA2elwiXG59KSwgJ0tleWJvYXJkQXJyb3dVcCcpOyIsImltcG9ydCBQcmludEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvUHJpbnRIZWFkZXInO1xyXG5pbXBvcnQgUHJpbnRGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1ByaW50Rm9vdGVyJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXJEYXNoIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaCc7XHJcbmltcG9ydCAnLi4vLi4vdmlldy5jc3MnO1xyXG5pbXBvcnQgJy4uL0NoYXJ0dmlldy5jc3MnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGUnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlUm93LCBUYWJsZUhlYWQsIFBhcGVyLCBUYWJsZUNvbnRhaW5lciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBBdXRvY29tcGxldGUsIHN0eWxlZCwgTW9kYWwsIEJhY2tkcm9wLCBGYWRlLCBCb3gsIE91dGxpbmVkSW5wdXQsIElucHV0QWRvcm5tZW50LCBDaGVja2JveCwgTGluZWFyUHJvZ3Jlc3MsIFN0ZXBwZXIsIFN0ZXAsIFN0ZXBMYWJlbCwgQnV0dG9uLCBUYWJzLCBUYWIsIE1lbnUsIERpdmlkZXIsIENhcmQsIENhcmRDb250ZW50LCBjb2xvcnMsIENvbGxhcHNlIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgSW9zU2hhcmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSW9zU2hhcmUnO1xyXG5pbXBvcnQgTG9jYWxQcmludHNob3BJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9jYWxQcmludHNob3AnO1xyXG5pbXBvcnQgQXR0YWNoRmlsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BdHRhY2hGaWxlJztcclxuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VuZCc7XHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgQWRkLCBBcnJvd1Vwd2FyZE91dGxpbmVkLCBFeGl0VG9BcHAsIEZpbGVDb3B5LCBLZXlib2FyZEFycm93VXAgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIE5hdkxpbmssIHVzZVBhcmFtcywgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBDdXJyZW5jeUV4Y2hhbmdlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ3VycmVuY3lFeGNoYW5nZSc7XHJcbmltcG9ydCBNb25ldGl6YXRpb25PbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vbmV0aXphdGlvbk9uJztcclxuaW1wb3J0IHsgRGF0YUdyaWQgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcclxuaW1wb3J0IFJlYWN0VG9QcmludCwgeyB1c2VSZWFjdFRvUHJpbnQgfSBmcm9tICdyZWFjdC10by1wcmludCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi8uLi9pbWcvaW1hZ2VzLnBuZydcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgeyBhbHBoYSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuaW1wb3J0IEtleWJvYXJkQXJyb3dEb3duSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0tleWJvYXJkQXJyb3dEb3duJztcclxuaW1wb3J0IHsgVGFiQ29udGV4dCwgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tICdAbXVpL2xhYic7XHJcbmltcG9ydCB7IFBpZUNoYXJ0LCBwaWVBcmNMYWJlbENsYXNzZXMgfSBmcm9tICdAbXVpL3gtY2hhcnRzL1BpZUNoYXJ0JztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5pbXBvcnQgRXhjZWxKUyBmcm9tICdleGNlbGpzJ1xyXG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcclxuaW1wb3J0IHsgRXhwbGljaXQgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuXHJcblxyXG5jb25zdCBFZGl0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IFByaW50VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgY29sb3I6ICdibGFjaycsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuY29uc3QgcGFsZXR0ZSA9IFsncmVkJywgJ2JsdWUnLCAnZ3JlZW4nXTtcclxuZnVuY3Rpb24gTWFpbnRlbmFuY2VWaWV3SW5mb3JtYXRpb24oKSB7XHJcbiAgbGV0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFtncmFudEFjY2Vzcywgc2V0R3JhbnRBY2Nlc3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ncmFudEFjY2Vzc2ApO1xyXG4gICAgICAgIHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnVzZXJJRCA9PT0gdXNlci5kYXRhLmlkKVxyXG4gICAgICAgICAgLm1hcCgocm93KSA9PiBzZXRHcmFudEFjY2Vzcyhyb3cubW9kdWxlcykpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoTnVtYmVyKClcclxuICB9LCBbdXNlcl0pXHJcblxyXG4gIGNvbnN0IE1haW50ZW5hbmNlSW5mb1UgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiTWFpbnRlbmFuY2VcIiAmJiByb3cuYWNjZXNzLmVkaXRNID09PSB0cnVlKTtcclxuXHJcbiAgY29uc3QgW21haW50ZW5hbmNlLCBzZXRNYWludGVuYW5jZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3F1b3RhdGlvbiwgc2V0UXVvdGF0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXRlbSwgU2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2l0ZW1PdXQsIHNldEl0ZW1PdXRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpdGVtUmV0dXJuLCBzZXRJdGVtUmV0dXJuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGxhbmluZ0luZm8sIHNldFBsYW5pbmdJbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IFtyZXNNLCByZXNJLCByZXNTaW5nbGUsIHJlc0VzdGltYXRlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L21haW50ZW5hbmNlP3N1bW1hcnk9dHJ1ZWApLFxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbWApLFxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LW1haW50ZW5hbmNlLyR7aWR9YCksXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9lc3RpbWF0aW9uP3N1bW1hcnk9dHJ1ZWApXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFsbE1haW50ZW5hbmNlID0gcmVzTS5kYXRhLmRhdGE7XHJcbiAgICAgICAgc2V0TWFpbnRlbmFuY2UoYWxsTWFpbnRlbmFuY2Uuc29ydCgoYSxiKSA9PiBiLnNlcnZpY2VOdW1iZXIgLSBhLnNlcnZpY2VOdW1iZXIpKTtcclxuICAgICAgICBTZXRJdGVtcyhyZXNJLmRhdGEuZGF0YSk7XHJcblxyXG4gICAgICAgIC8vIFByb2Nlc3Mgc2luZ2xlIG1haW50ZW5hbmNlIHJlY29yZCBkYXRhXHJcbiAgICAgICAgY29uc3QgbWFpbnRlbmFuY2VEYXRhID0gcmVzU2luZ2xlLmRhdGEuZGF0YTtcclxuICAgICAgICBsZXQgcmVmTmFtZSA9ICcnO1xyXG4gICAgICAgIGlmIChtYWludGVuYW5jZURhdGEpIHtcclxuICAgICAgICAgIHJlZk5hbWUgPSBtYWludGVuYW5jZURhdGEuUmVmZXJlbmNlTmFtZSB8fCAnJztcclxuICAgICAgICAgIHNldFJlZmVyZW5jZU5hbWUocmVmTmFtZSk7XHJcbiAgICAgICAgICBzZXRDdXN0b21lck5hbWUxKG1haW50ZW5hbmNlRGF0YS5jdXN0b21lck5hbWU/LmN1c3RvbWVyTmFtZT8ucmVwbGFjZSgvXFxzKy9nLCAnXycpLnJlcGxhY2UoL1xcLi9nLCAnJykgfHwgXCJcIik7XHJcbiAgICAgICAgICBzZXRTZXJ2aWNlTnVtYmVyKG1haW50ZW5hbmNlRGF0YS5zZXJ2aWNlTnVtYmVyIHx8IDApO1xyXG4gICAgICAgICAgc2V0SXRlbShtYWludGVuYW5jZURhdGEuaXRlbXMgfHwgW10pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHNlbGxUb3RhbCA9IHBhcnNlRmxvYXQobWFpbnRlbmFuY2VEYXRhLnN1YlRvdGFsIHx8IDApLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICBzZXRUb3RhbFNlbGwoc2VsbFRvdGFsKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgY29uc3QgYWxsRXN0aW1hdGlvbnMgPSByZXNFc3RpbWF0ZS5kYXRhPy5kYXRhIHx8IFtdO1xyXG4gICAgICAgICAgc2V0UXVvdGF0aW9uKGFsbEVzdGltYXRpb25zLmZpbHRlcihyb3cgPT4gcm93Ll9pZCA9PT0gcmVmTmFtZSB8fCByb3cuUmVmZXJlbmNlTmFtZSA9PT0gbWFpbnRlbmFuY2VEYXRhLl9pZCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIC8vIEF0dGVtcHQgdG8gZmV0Y2ggb3B0aW1pemVkIHNwZWNpZmljIGRhdGFcclxuICAgICAgICAgIGNvbnN0IHJlc1JlbGF0ZWQgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbWFpbnRlbmFuY2UtcmVsYXRlZC1pbmZvLyR7aWR9YCk7XHJcbiAgICAgICAgICBjb25zdCByZWxhdGVkRGF0YSA9IHJlc1JlbGF0ZWQuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBzZXRJdGVtT3V0KHJlbGF0ZWREYXRhLml0ZW1PdXRzLm1hcCgocm93KSA9PiAoeyAuLi5yb3csIG91dE51bWJlcjogYE8tJHtTdHJpbmcocm93Lm91dE51bWJlcikucGFkU3RhcnQoNiwgJzAnKX1gLCB0eXBlOiAnSXRlbSBPdXQnIH0pKSk7XHJcbiAgICAgICAgICBzZXRJdGVtUmV0dXJuKHJlbGF0ZWREYXRhLml0ZW1SZXR1cm5zLm1hcCgocm93KSA9PiAoeyAuLi5yb3csIG91dE51bWJlcjogYFItJHtTdHJpbmcocm93Lm91dE51bWJlcikucGFkU3RhcnQoNiwgJzAnKX1gLCB0eXBlOiAnSXRlbSByZXR1cm4nIH0pKSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdFBsYW5pbmcgPSByZWxhdGVkRGF0YS5wbGFuaW5ncy5tYXAoKHJvdykgPT4gKHtcclxuICAgICAgICAgICAgLi4ucm93LFxyXG4gICAgICAgICAgICB0b3RhbFdvcmtEYXk6IHBhcnNlRmxvYXQocm93LmRheVBheVVTZCAqIHJvdy53b3JrTnVtYmVyIHx8IDApLnRvRml4ZWQoMilcclxuICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIHNldFBsYW5pbmdJbmZvKHJlc3VsdFBsYW5pbmcpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGZpbHRlcmVkSW52b2ljZSA9IHJlbGF0ZWREYXRhLmludm9pY2VzLmZpbHRlcigocm93KSA9PiByb3cuaW52b2ljZU5hbWUgPT09IHJlZk5hbWUpO1xyXG4gICAgICAgICAgY29uc3QgZmlsdGVyZWRJbnZvaWNlMiA9IHJlbGF0ZWREYXRhLmludm9pY2VzLmZpbHRlcigocm93KSA9PiByb3cuUmVmZXJlbmNlTmFtZSA9PT0gaWQpO1xyXG4gICAgICAgICAgc2V0SW52b2ljZShmaWx0ZXJlZEludm9pY2UpO1xyXG4gICAgICAgICAgc2V0SW52b2ljZTIoZmlsdGVyZWRJbnZvaWNlMik7XHJcblxyXG4gICAgICAgICAgc2V0Q29tbWVudHMocmVsYXRlZERhdGEuY29tbWVudHMucmV2ZXJzZSgpKTtcclxuICAgICAgICAgIHNldE5vdGlmaWNhdGlvbihyZWxhdGVkRGF0YS5ub3RpZmljYXRpb25zKTtcclxuICAgICAgICB9IGNhdGNoKGZhbGxiYWNrRXJyb3IpIHtcclxuICAgICAgICAgIC8vIEZhbGxiYWNrIHRvIG9sZCBtYXNzaXZlIGRhdGEgZmV0Y2ggaWYgZW5kcG9pbnQgbm90IGZvdW5kIHlldFxyXG4gICAgICAgICAgY29uc3QgW3Jlc0lPLCByZXNJUiwgcmVzUCwgcmVzSW52b2ljZSwgcmVzQ29tbWVudCwgcmVzTm90aWZpY2F0aW9uXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbU91dGApLFxyXG4gICAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtUmV0dXJuYCksXHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3BsYW5pbmdgKSxcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaW52b2ljZT9zdW1tYXJ5PXRydWVgKSxcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vY29tbWVudGApLFxyXG4gICAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ub3RpZmljYXRpb25gKVxyXG4gICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICAgc2V0SXRlbU91dChyZXNJTy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnJlZmVyZW5jZT8uX2lkID09PSBpZCkubWFwKChyb3cpID0+ICh7IC4uLnJvdywgb3V0TnVtYmVyOiBgTy0ke1N0cmluZyhyb3cub3V0TnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfWAsIHR5cGU6ICdJdGVtIE91dCcgfSkpKTtcclxuICAgICAgICAgIHNldEl0ZW1SZXR1cm4ocmVzSVIuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5yZWZlcmVuY2U/Ll9pZCA9PT0gaWQpLm1hcCgocm93KSA9PiAoeyAuLi5yb3csIG91dE51bWJlcjogYFItJHtTdHJpbmcocm93Lm91dE51bWJlcikucGFkU3RhcnQoNiwgJzAnKX1gLCB0eXBlOiAnSXRlbSByZXR1cm4nIH0pKSk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcmVzdWx0UGxhbmluZyA9IHJlc1AuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5wcm9qZWN0TmFtZSAhPT0gdW5kZWZpbmVkICYmIHJvdy5wcm9qZWN0TmFtZT8uX2lkID09PSBpZClcclxuICAgICAgICAgICAgLm1hcCgocm93KSA9PiAoe1xyXG4gICAgICAgICAgICAgIC4uLnJvdyxcclxuICAgICAgICAgICAgICB0b3RhbFdvcmtEYXk6IHBhcnNlRmxvYXQocm93LmRheVBheVVTZCAqIHJvdy53b3JrTnVtYmVyIHx8IDApLnRvRml4ZWQoMilcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgc2V0UGxhbmluZ0luZm8ocmVzdWx0UGxhbmluZyk7XHJcblxyXG4gICAgICAgICAgY29uc3QgYWxsSW52b2ljZXMgPSByZXNJbnZvaWNlLmRhdGEuZGF0YTtcclxuICAgICAgICAgIGNvbnN0IGZpbHRlcmVkSW52b2ljZSA9IGFsbEludm9pY2VzLmZpbHRlcigocm93KSA9PiByb3cuaW52b2ljZU5hbWUgPT09IHJlZk5hbWUpO1xyXG4gICAgICAgICAgY29uc3QgZmlsdGVyZWRJbnZvaWNlMiA9IGFsbEludm9pY2VzLmZpbHRlcigocm93KSA9PiByb3cuUmVmZXJlbmNlTmFtZSA9PT0gaWQpO1xyXG4gICAgICAgICAgc2V0SW52b2ljZShmaWx0ZXJlZEludm9pY2UpO1xyXG4gICAgICAgICAgc2V0SW52b2ljZTIoZmlsdGVyZWRJbnZvaWNlMik7XHJcblxyXG4gICAgICAgICAgY29uc3QgZmlsdGVyZWRDb21tZW50cyA9IHJlc0NvbW1lbnQuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5Db21tZW50SW5mby5pZEluZm8gPT09IGlkKTtcclxuICAgICAgICAgIHNldENvbW1lbnRzKGZpbHRlcmVkQ29tbWVudHMucmV2ZXJzZSgpKTtcclxuICAgICAgICAgIHNldE5vdGlmaWNhdGlvbihyZXNOb3RpZmljYXRpb24uZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5pZEluZm8gPT09IGlkKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW2lkXSk7XHJcbiAgY29uc3QgW3JlZmVyZW5jZU5hbWUsIHNldFJlZmVyZW5jZU5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0b3RhbENvc3QsIHNldFRvdGFsQ29zdF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG90YWxTZWxsLCBzZXRUb3RhbFNlbGxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2N1c3RvbWVyTmFtZTEsIHNldEN1c3RvbWVyTmFtZTFdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NlcnZpY2VOdW1iZXIsIHNldFNlcnZpY2VOdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtXSA9IHVzZVN0YXRlKFtdKTtcclxuICB7LyoqIHBsYW5pbmcgc3RhcnQgKi8gfVxyXG4gIGNvbnN0IHBsYW5pbmdPYmplY3QgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiBwbGFuaW5nSW5mbz8ucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgaWQgPSBpdGVtLmVtcGxveWVlSUQ7XHJcbiAgICAgIGNvbnN0IG5hbWUgPSBpdGVtLmVtcGxveWVlTmFtZTtcclxuICAgICAgY29uc3QgZGF5UGF5ID0gaXRlbS5kYXlQYXlVU2Q7XHJcbiAgICAgIGlmICghYWNjW2lkXSkge1xyXG4gICAgICAgIGFjY1tpZF0gPSB7IGlkLCBuYW1lLCBkYXlQYXksIHdvcmtEOiAwLCB0b3RhbDogMCB9XHJcbiAgICAgIH1cclxuICAgICAgYWNjW2lkXS50b3RhbCArPSBwYXJzZUZsb2F0KGl0ZW0udG90YWxXb3JrRGF5KVxyXG4gICAgICBhY2NbaWRdLndvcmtEICs9IHBhcnNlRmxvYXQoaXRlbS53b3JrTnVtYmVyKVxyXG4gICAgICByZXR1cm4gYWNjXHJcbiAgICB9LCB7fSlcclxuICB9LCBbcGxhbmluZ0luZm9dKTtcclxuXHJcbiAgY29uc3QgdG90YWxBbW91bnQyID0gdXNlTWVtbygoKSA9PiBPYmplY3Qua2V5cyhwbGFuaW5nT2JqZWN0KS5tYXAoKHJvdykgPT4gcGxhbmluZ09iamVjdFtyb3ddKSwgW3BsYW5pbmdPYmplY3RdKTtcclxuICBjb25zdCBbdG90YWxBbW91bnRQbGFuaW5nLCBzZXRUb3RhbEFtb3VudFBsYW5pbmddID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b3RhbFBheVJvbGwgPSB0b3RhbEFtb3VudDI/LnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHJvdy50b3RhbCwgMCk7XHJcbiAgICBzZXRUb3RhbEFtb3VudFBsYW5pbmcodG90YWxQYXlSb2xsKVxyXG4gIH0sIFt0b3RhbEFtb3VudDJdKVxyXG5cclxuICB7LyoqIHBsYW5pbmcgZW5kICovIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGNvbnN0IHRvdGFsSW5mbyA9IGl0ZW1zLm1hcCgocm93KSA9PiAoe1xyXG4gICAgICAgIHRvdGFsOiBwYXJzZUZsb2F0KHJvdy5pdGVtT3V0IHx8IDApICogcGFyc2VGbG9hdChyb3cuaXRlbUNvc3QgfHwgMClcclxuICAgICAgfSkpO1xyXG5cclxuICAgICAgY29uc3QgY29zdEluZm8gPSB0b3RhbEluZm8ucmVkdWNlKChzdW0sIHJvdykgPT4gc3VtICsgcm93LnRvdGFsLCAwKTtcclxuICAgICAgY29uc3QgdG90YWxDb3N0SW5mbyA9IE51bWJlcih0b3RhbEFtb3VudFBsYW5pbmcgfHwgMCkgKyBOdW1iZXIoY29zdEluZm8pO1xyXG4gICAgICBzZXRUb3RhbENvc3QodG90YWxDb3N0SW5mby50b0ZpeGVkKDIpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFRvdGFsQ29zdChOdW1iZXIodG90YWxBbW91bnRQbGFuaW5nIHx8IDApLnRvRml4ZWQoMikpO1xyXG4gICAgfVxyXG4gIH0sIFtpdGVtcywgdG90YWxBbW91bnRQbGFuaW5nXSk7XHJcblxyXG4gIHsvKiogSXRlbSBvdXQgc3luYyBzdGFydCAqLyB9XHJcbiAgY29uc3QgaXRlbU1hcCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgbWFwID0ge307XHJcbiAgICBpdGVtLmZvckVhY2goaSA9PiB7IG1hcFtpLl9pZF0gPSBpOyB9KTtcclxuICAgIHJldHVybiBtYXA7XHJcbiAgfSwgW2l0ZW1dKTtcclxuXHJcbiAgY29uc3QgcmVsYXRlZCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKGl0ZW1PdXQubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiBpdGVtT3V0LnJlZHVjZSgoYWNjLCByb3cpID0+IHtcclxuICAgICAgKHJvdy5pdGVtc1F0eUFycmF5IHx8IFtdKS5maWx0ZXIoKGl0ZW0pID0+IHBhcnNlRmxvYXQoaXRlbS5uZXdJdGVtT3V0KSA+IDApLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCByYXdJZCA9IGl0ZW0uaXRlbU5hbWU/Ll9pZCB8fCBpdGVtLml0ZW1OYW1lO1xyXG4gICAgICAgIGNvbnN0IElkID0gcmF3SWQgPyByYXdJZC50b1N0cmluZygpIDogJyc7XHJcbiAgICAgICAgY29uc3QgSXRlbU5hbWUgPSBpdGVtLml0ZW1OYW1lPy5pdGVtTmFtZSB8fCBJZDtcclxuICAgICAgICBpZiAoSWQpIHtcclxuICAgICAgICAgIGlmICghYWNjW0lkXSkge1xyXG4gICAgICAgICAgICBhY2NbSWRdID0geyBJdGVtTmFtZSwgSWQsIHRvdGFsOiAwIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFjY1tJZF0udG90YWwgKz0gcGFyc2VGbG9hdChpdGVtLm5ld0l0ZW1PdXQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGFjY1xyXG4gICAgfSwge30pO1xyXG4gIH0sIFtpdGVtT3V0XSk7XHJcblxyXG4gIGNvbnN0IHJlbGF0ZWRSZXR1cm4gPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChpdGVtUmV0dXJuLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gaXRlbVJldHVybi5yZWR1Y2UoKGFjYywgcm93KSA9PiB7XHJcbiAgICAgIChyb3cuaXRlbXNRdHlBcnJheSB8fCBbXSkuZmlsdGVyKChpdGVtKSA9PiBwYXJzZUZsb2F0KGl0ZW0ubmV3SXRlbU91dCkgPiAwKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmF3SWQgPSBpdGVtLml0ZW1OYW1lPy5faWQgfHwgaXRlbS5pdGVtTmFtZTtcclxuICAgICAgICBjb25zdCBJZDEgPSByYXdJZCA/IHJhd0lkLnRvU3RyaW5nKCkgOiAnJztcclxuICAgICAgICBjb25zdCBJdGVtTmFtZTEgPSBpdGVtLml0ZW1OYW1lPy5pdGVtTmFtZSB8fCBJZDE7XHJcbiAgICAgICAgaWYgKElkMSkge1xyXG4gICAgICAgICAgaWYgKCFhY2NbSWQxXSkge1xyXG4gICAgICAgICAgICBhY2NbSWQxXSA9IHsgSXRlbU5hbWUxLCBJZDEsIHRvdGFsMTogMCB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhY2NbSWQxXS50b3RhbDEgKz0gcGFyc2VGbG9hdChpdGVtLm5ld0l0ZW1PdXQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGFjY1xyXG4gICAgfSwge30pO1xyXG4gIH0sIFtpdGVtUmV0dXJuXSk7XHJcblxyXG4gIGNvbnN0IG5ld0FsbE91dFJldHVybiA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKHJlbGF0ZWQgPT09IG51bGwpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMocmVsYXRlZCkubWFwKCh7IEl0ZW1OYW1lLCBJZCwgdG90YWwgfSkgPT4ge1xyXG4gICAgICBjb25zdCByZWxhdGVkMSA9IHJlbGF0ZWRSZXR1cm4gIT09IG51bGwgPyBPYmplY3QudmFsdWVzKHJlbGF0ZWRSZXR1cm4pLmZpbmQoKHsgSWQxIH0pID0+IElkMSA9PT0gSWQpIDogbnVsbFxyXG4gICAgICByZXR1cm4gKHtcclxuICAgICAgICBJdGVtTmFtZSxcclxuICAgICAgICBJZCxcclxuICAgICAgICB0b3RhbDogcmVsYXRlZDEgPyB0b3RhbCAtIHJlbGF0ZWQxLnRvdGFsMSA6IHRvdGFsXHJcbiAgICAgIH0pXHJcbiAgICB9KTtcclxuICB9LCBbcmVsYXRlZCwgcmVsYXRlZFJldHVybl0pO1xyXG5cclxuICBjb25zdCByZWxhdGVkUHVyY2hhc2UgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiBtYWludGVuYW5jZS5maWx0ZXIoKHJvdykgPT4gcm93Ll9pZCA9PT0gaWQpLm1hcCgocm93KSA9PiAoe1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1zOiAocm93Lml0ZW1zIHx8IFtdKS5tYXAoKEl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IEl0ZW0uaXRlbU5hbWU/Ll9pZCA/IEl0ZW0uaXRlbU5hbWUuX2lkLnRvU3RyaW5nKCkgOiAnJztcclxuICAgICAgICBjb25zdCBuZXdBbGxPdXRSZXR1cm5JbmZvID0gbmV3QWxsT3V0UmV0dXJuICE9PSBudWxsID8gbmV3QWxsT3V0UmV0dXJuLmZpbmQoKEl0ZW0xKSA9PiBJdGVtMS5JZCA9PT0gdGFyZ2V0SWQpIDogbnVsbFxyXG4gICAgICAgIHJldHVybiAoe1xyXG4gICAgICAgICAgLi4uSXRlbSxcclxuICAgICAgICAgIGl0ZW1PdXQ6IG5ld0FsbE91dFJldHVybkluZm8gPyBuZXdBbGxPdXRSZXR1cm5JbmZvLnRvdGFsIDogMFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KSlcclxuICB9LCBbbWFpbnRlbmFuY2UsIGlkLCBuZXdBbGxPdXRSZXR1cm5dKTtcclxuXHJcbiAgY29uc3QgW3N5bmNocm8sIHNldFN5bmNocm9dID0gdXNlU3RhdGUoJ2ZhbHNlJylcclxuICBjb25zdCBoYW5kbGVTeW5jZWQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdXBkYXRlVGFza3MgPSByZWxhdGVkUHVyY2hhc2UubWFwKGFzeW5jIChyb3cpID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbWFpbnRlbmFuY2UvJHtyb3cuX2lkfWApO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgICBjb25zdCBtZXJnZWRJdGVtcyA9IChjdXJyZW50RGF0YS5pdGVtcyB8fCBbXSkubWFwKGN1cnJlbnRJdGVtID0+IHtcclxuICAgICAgICAgIGNvbnN0IHN5bmNJdGVtID0gcm93Lml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmlkUm93ID09PSBjdXJyZW50SXRlbS5pZFJvdyk7XHJcbiAgICAgICAgICBpZiAoc3luY0l0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uY3VycmVudEl0ZW0sIGl0ZW1PdXQ6IHN5bmNJdGVtLml0ZW1PdXQgfTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBjdXJyZW50SXRlbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLW1haW50ZW5hbmNlLyR7cm93Ll9pZH1gLCB7IGl0ZW1zOiBtZXJnZWRJdGVtcyB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKHVwZGF0ZVRhc2tzKTtcclxuICAgICAgc2V0U3luY2hybygndHJ1ZScpO1xyXG4gICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgc3luYzonLCBlcnJvcik7XHJcbiAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB7LyoqIEl0ZW0gT3V0IHN5bmMgZW5kICovIH1cclxuXHJcblxyXG4gIGNvbnN0IEdhaW4gPSBpc05hTih0b3RhbFNlbGwgLSB0b3RhbENvc3QpID8gMCA6IHBhcnNlRmxvYXQodG90YWxTZWxsIC0gdG90YWxDb3N0KS50b0ZpeGVkKDIpXHJcblxyXG4gIGNvbnN0IFtpbnZvaWNlLCBzZXRJbnZvaWNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW52b2ljZTIsIHNldEludm9pY2UyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgaGFuZGxlU2hvdyA9IChlKSA9PiB7XHJcbiAgICBzZXRTaG93KGUpO1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfVxyXG4gIGNvbnN0IGNvbXBvbmVudFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmludCA9IHVzZVJlYWN0VG9QcmludCh7XHJcbiAgICBjb250ZW50OiAoKSA9PiBjb21wb25lbnRSZWYuY3VycmVudCxcclxuICAgIGRvY3VtZW50VGl0bGU6IGBNLSR7U3RyaW5nKHNlcnZpY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9IEZvciAke2N1c3RvbWVyTmFtZTF9YCxcclxuICB9KVxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblByaW50ID0gKCkgPT4ge1xyXG4gICAgaGFuZGxlUHJpbnQoKVxyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtDb21tZW50czEsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbm90aWZpY2F0aW9uLCBzZXROb3RpZmljYXRpb25dID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgY29uc3QgQ29tbWVudEluZm8gPVxyXG4gIHtcclxuICAgIGlkSW5mbzogaWQsXHJcbiAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSxcclxuICAgIHJlYXNvblxyXG4gIH1cclxuXHJcbiAgey8qKiBMb2FkaW5nIFN0YXJ0ICovIH1cclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRXJyb3JPcGVuTW9kYWwsIHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG5cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIHsvKiogTG9hZGluZyBFbmQgKi8gfVxyXG4gIGNvbnN0IGRhdGVDb21tZW50ID0gZGF5anMoRGF0ZS5ub3coKSk7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0RWRpdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBDb21tZW50SW5mbyxcclxuICAgICAgZGF0ZUNvbW1lbnRcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLWNvbW1lbnQvYCwgZGF0YSlcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIHNldFJlYXNvbihcIlwiKTtcclxuICAgICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlcy5kYXRhLmRhdGFcclxuICAgICAgICBzZXRDb21tZW50cyhbbmV3RGF0YSwgLi4uQ29tbWVudHMxXSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbbWFpbnRlbmFuY2UyLCBTZXRNYWludGVuYW5jZTJdID0gdXNlU3RhdGUoe30pXHJcbiAgY29uc3QgW3Nob3cyLCBzZXRTaG93Ml0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBoYW5kbGVTaG93MiA9IChlKSA9PiB7XHJcbiAgICBzZXRTaG93MihlKTtcclxuICB9XHJcbiAgY29uc3QgbWFpbnRlbmFuY2VGaWx0ZXJlZCA9IG1haW50ZW5hbmNlPy5maWx0ZXIoKHJvdykgPT4gcm93Ll9pZCA9PT0gbWFpbnRlbmFuY2UyLl9pZClcclxuICBjb25zdCBbc2hvd1JlZiwgc2V0U2hvd1JlZl0gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IGhhbmRsZVNob3dSZWYgPSAoZSkgPT4ge1xyXG4gICAgc2V0U2hvd1JlZihlKTtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH1cclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt2YWx1ZTIsIHNldFZhbHVlMl0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IG1haW50ZW5hbmNlLmZpbmRJbmRleChyb3cgPT4gcm93Ll9pZCA9PT0gaWQpO1xyXG4gICAgaWYgKHNlbGVjdGVkSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHNldFZhbHVlKHNlbGVjdGVkSW5kZXgpXHJcbiAgICB9XHJcbiAgfSwgW21haW50ZW5hbmNlLCBpZF0pXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlMiA9IChlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgc2V0VmFsdWUyKG5ld1ZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRTZWFyY2godmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IG5ld0FycmF5ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAoc2VhcmNoID09PSAnJykgcmV0dXJuIG1haW50ZW5hbmNlO1xyXG4gICAgY29uc3QgbG93ZXJTZWFyY2ggPSBzZWFyY2gudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiBtYWludGVuYW5jZS5maWx0ZXIoKHJvdykgPT5cclxuICAgICAgKHJvdy5zZXJ2aWNlTmFtZSAmJiByb3cuc2VydmljZU5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclNlYXJjaCkpIHx8XHJcbiAgICAgIChyb3cuc2VydmljZU51bWJlciAmJiBTdHJpbmcocm93LnNlcnZpY2VOdW1iZXIpLmluY2x1ZGVzKGxvd2VyU2VhcmNoKSkgfHxcclxuICAgICAgKHJvdy5icmFuZCAmJiByb3cuYnJhbmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclNlYXJjaCkpIHx8XHJcbiAgICAgIChyb3cuY3VzdG9tZXJOYW1lPy5jdXN0b21lck5hbWU/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJTZWFyY2gpKSB8fFxyXG4gICAgICAocm93Lml0ZW1zICYmIHJvdy5pdGVtcy5zb21lKChJdGVtKSA9PiBJdGVtLml0ZW1OYW1lICYmIEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWU/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJTZWFyY2gpKSkgfHxcclxuICAgICAgKHJvdy5pdGVtcyAmJiByb3cuaXRlbXMuc29tZSgoSXRlbSkgPT4gSXRlbS5pdGVtRGVzY3JpcHRpb24gJiYgSXRlbS5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclNlYXJjaCkpKVxyXG4gICAgKTtcclxuICB9LCBbbWFpbnRlbmFuY2UsIHNlYXJjaF0pO1xyXG5cclxuICBjb25zdCBbdmFsdWUzLCBzZXRWYWx1ZTNdID0gUmVhY3QudXNlU3RhdGUoJzEnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUYWJNYWludGVuYW5jZVZpZXcnKVxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBzZXRWYWx1ZTMocmVzdWx0KVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlMyA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGNoYW5nZVZhbHVlID0gbmV3VmFsdWVcclxuICAgIHNldFZhbHVlMyhjaGFuZ2VWYWx1ZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVGFiTWFpbnRlbmFuY2VWaWV3JywgY2hhbmdlVmFsdWUpXHJcbiAgfTtcclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIGNvbnN0IGRhdGExID0gbWFpbnRlbmFuY2UuZmlsdGVyKHJvdyA9PiByb3cuX2lkID09PSBpZCkubWFwKChyb3cpID0+ICh7XHJcbiAgICBudW1iZXI6IGBNLSR7U3RyaW5nKHJvdy5zZXJ2aWNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfWAsXHJcbiAgICB2aXNpdERhdGU6IGRheWpzKHJvdy52aXNpdERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpLFxyXG4gICAgc2VydmljZURhdGU6IGRheWpzKHJvdy5zZXJ2aWNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyksXHJcbiAgICBzdGF0dXM6IHJvdy5zdGF0dXMsXHJcbiAgfSkpXHJcbiAgY29uc3QgZGF0YTIgPSBtYWludGVuYW5jZS5maWx0ZXIocm93ID0+IHJvdy5faWQgPT09IGlkKS5tYXAoKHJvdykgPT4gKHtcclxuICAgIEN1c3RvbWVyOiByb3cuY3VzdG9tZXJOYW1lPy5jdXN0b21lck5hbWUsXHJcbiAgICBQaG9uZTogcm93LmN1c3RvbWVyTmFtZT8ucGhvbmUsXHJcbiAgICBBZGRyZXNzOiByb3cuY3VzdG9tZXJOYW1lPy5hZGRyZXNzXHJcbiAgfSkpXHJcbiAgY29uc3QgZGF0YTMgPSBtYWludGVuYW5jZS5maWx0ZXIocm93ID0+IHJvdy5faWQgPT09IGlkKS5tYXAoKHJvdykgPT4gKHtcclxuICAgIGl0ZW1EZXNjcmlwdGlvbkluZm86IHJvdy5pdGVtRGVzY3JpcHRpb25JbmZvLFxyXG4gICAgYnJhbmQ6IHJvdy5icmFuZCxcclxuICAgIHNlcmlhbE5vOiByb3cuc2VyaWFsTm8sXHJcbiAgICBtb2RlbDogcm93Lm1vZGVsLFxyXG4gICAgd2FycmFudHk6IHJvdy53YXJyYW50eSxcclxuICAgIGRlZmVjdERlc2NyaXB0aW9uOiByb3cuZGVmZWN0RGVzY3JpcHRpb24sXHJcbiAgfSkpXHJcbiAgY29uc3QgZGF0YTQgPSBtYWludGVuYW5jZS5maWx0ZXIocm93ID0+IHJvdy5faWQgPT09IGlkKS5tYXAoKHJvdykgPT4gKHtcclxuICAgIGFjdGlvbjogcm93LmFjdGlvbixcclxuICAgIGFjdGlvblRha2VuOiByb3cuYWN0aW9uVGFrZW4sXHJcbiAgICBub3RlOiByb3cubm90ZSxcclxuICB9KSlcclxuICBjb25zdCBkYXRhNSA9IGl0ZW1zLm1hcCgoSXRlbSwgaSkgPT4ge1xyXG4gICAgcmV0dXJuICh7XHJcbiAgICAgIG5vOiBpICsgMSxcclxuICAgICAgaXRlbTogSXRlbS5pdGVtTmFtZT8uaXRlbU5hbWUsXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogSXRlbS5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgIGl0ZW1RdHk6IEl0ZW0uaXRlbVF0eSxcclxuICAgICAgaXRlbVJhdGU6ICckJyArIEl0ZW0uaXRlbVJhdGUsXHJcbiAgICAgIGl0ZW1EaXNjb3VudDogJyUnICsgSXRlbS5pdGVtRGlzY291bnQsXHJcbiAgICAgIGl0ZW1BbW91bnQ6ICckJyArIEl0ZW0uaXRlbUFtb3VudFxyXG4gICAgfSlcclxuICB9KVxyXG4gIGNvbnN0IGRhdGE2ID0gbWFpbnRlbmFuY2UuZmlsdGVyKHJvdyA9PiByb3cuX2lkID09PSBpZCkubWFwKChyb3cpID0+ICh7XHJcbiAgICBubzogJycsXHJcbiAgICBkZXNjcmlwdGlvbjogJ0xhYm9yIEZlZXMnLFxyXG4gICAgbm8xOiAnJyxcclxuICAgIGxhYm9yUXR5OiByb3cubGFib3JRdHksXHJcbiAgICBhZGp1c3RtZW50TnVtYmVyOiAnJCcgKyByb3cuYWRqdXN0bWVudE51bWJlcixcclxuICAgIGxhYm9yRGlzY291bnQ6ICclJyArIHJvdy5sYWJvckRpc2NvdW50LFxyXG4gICAgdG90YWxMYWJvckZlZXNHZW5lcmFsZTogJyQnICsgcm93LnRvdGFsTGFib3JGZWVzR2VuZXJhbGUsXHJcbiAgfSkpXHJcbiAgY29uc3QgZGF0YTcgPSBtYWludGVuYW5jZS5maWx0ZXIocm93ID0+IHJvdy5faWQgPT09IGlkKS5tYXAoKHJvdykgPT4gKHtcclxuICAgIG5vOiAnJyxcclxuICAgIG5vMTogJ1RvdGFsIEdlbmVyYWwnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgbGFib3JRdHk6ICcnLFxyXG4gICAgYWRqdXN0bWVudE51bWJlcjogJycsXHJcbiAgICBsYWJvckRpc2NvdW50OiAnJyxcclxuICAgIHRvdGFsSW52b2ljZTogJyQnICsgcm93LnRvdGFsSW52b2ljZSxcclxuICB9KSlcclxuXHJcbiAgY29uc3QgZXhwb3J0VG9FeGNlbCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHdvcmtib29rID0gbmV3IEV4Y2VsSlMuV29ya2Jvb2soKTtcclxuICAgIGNvbnN0IHdvcmtTaGVldCA9IHdvcmtib29rLmFkZFdvcmtzaGVldCgnU2hlZXQxJyk7XHJcbiAgICBjb25zdCBjb2x1bW5zMSA9IFtcclxuICAgICAgeyBoZWFkZXI6IFwiI1wiLCBrZXk6ICdudW1iZXInLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiRGF0ZVwiLCBrZXk6ICd2aXNpdERhdGUnLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiU2VydmljZSBEYXRlXCIsIGtleTogJ3NlcnZpY2VEYXRlJywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIlN0YXR1c1wiLCBrZXk6ICdzdGF0dXMnLCB3aWR0aDogMjAgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBjb2x1bW5zMiA9IFtcclxuICAgICAgeyBoZWFkZXI6IFwiQ3VzdG9tZXJcIiwga2V5OiAnQ3VzdG9tZXInLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiUGhvbmVcIiwga2V5OiAnUGhvbmUnLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiQWRkcmVzc1wiLCBrZXk6ICdBZGRyZXNzJywgd2lkdGg6IDIwIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3QgY29sdW1uczMgPSBbXHJcbiAgICAgIHsgaGVhZGVyOiBcIkl0ZW0gRGVzY3JpcHRpb25cIiwga2V5OiAnaXRlbURlc2NyaXB0aW9uSW5mbycsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJCcmFuZFwiLCBrZXk6ICdicmFuZCcsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJTZXJpYWwgTm8uXCIsIGtleTogJ3NlcmlhbE5vJywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIk1vZGVsXCIsIGtleTogJ21vZGVsJywgd2lkdGg6IDIwIH0sXHJcbiAgICAgIHsgaGVhZGVyOiBcIldhcnJhbnR5IFN0YXR1c1wiLCBrZXk6ICd3YXJyYW50eScsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJEZWZlY3QgRGVzY3JpcHRpb25cIiwga2V5OiAnZGVmZWN0RGVzY3JpcHRpb24nLCB3aWR0aDogMjAgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBjb2x1bW5zNCA9IFtcclxuICAgICAgeyBoZWFkZXI6IFwiQWN0aW9uXCIsIGtleTogJ2FjdGlvbicsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJBY3Rpb24gVGFrZW5cIiwga2V5OiAnYWN0aW9uVGFrZW4nLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiTm90ZVwiLCBrZXk6ICdub3RlJywgd2lkdGg6IDIwIH1cclxuICAgIF07XHJcbiAgICBjb25zdCBjb2x1bW5zNSA9IFtcclxuICAgICAgeyBoZWFkZXI6IFwiI1wiLCBrZXk6ICdubycsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJJdGVtXCIsIGtleTogJ2l0ZW0nLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiSXRlbSBEZXNjcmlwdGlvblwiLCBrZXk6ICdpdGVtRGVzY3JpcHRpb24nLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiUXR5XCIsIGtleTogJ2l0ZW1RdHknLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiUmF0ZVwiLCBrZXk6ICdpdGVtUmF0ZScsIHdpZHRoOiAyMCB9LFxyXG4gICAgICB7IGhlYWRlcjogXCJEaXNjb3VudFwiLCBrZXk6ICdpdGVtRGlzY291bnQnLCB3aWR0aDogMjAgfSxcclxuICAgICAgeyBoZWFkZXI6IFwiQW1vdW50XCIsIGtleTogJ2l0ZW1BbW91bnQnLCB3aWR0aDogMjAgfVxyXG4gICAgXTtcclxuXHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KFtdKTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coWydKb2IgQ2FyZCBJbmZvJ10pO1xyXG4gICAgd29ya1NoZWV0LmFkZFJvdyhjb2x1bW5zMS5tYXAoY29sID0+IGNvbC5oZWFkZXIpKTtcclxuICAgIGRhdGExLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHdvcmtTaGVldC5hZGRSb3coW2l0ZW0ubnVtYmVyLCBpdGVtLnZpc2l0RGF0ZSwgaXRlbS5zZXJ2aWNlRGF0ZSwgaXRlbS5zdGF0dXNdKVxyXG4gICAgfSk7XHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KFtdKTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coWydDbGllbnQgSW5mbyddKTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coY29sdW1uczIubWFwKGNvbCA9PiBjb2wuaGVhZGVyKSlcclxuICAgIGRhdGEyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHdvcmtTaGVldC5hZGRSb3coW2l0ZW0uQ3VzdG9tZXIsIGl0ZW0uUGhvbmUsIGl0ZW0uQWRkcmVzc10pXHJcbiAgICB9KTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coW10pO1xyXG4gICAgd29ya1NoZWV0LmFkZFJvdyhbJ0FwcGxpYW5jZSBJbmZvJ10pO1xyXG4gICAgd29ya1NoZWV0LmFkZFJvdyhjb2x1bW5zMy5tYXAoY29sID0+IGNvbC5oZWFkZXIpKVxyXG4gICAgZGF0YTMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgd29ya1NoZWV0LmFkZFJvdyhbaXRlbS5pdGVtRGVzY3JpcHRpb25JbmZvLCBpdGVtLmJyYW5kLCBpdGVtLnNlcmlhbE5vLCBpdGVtLm1vZGVsLCBpdGVtLndhcnJhbnR5LCBpdGVtLmRlZmVjdERlc2NyaXB0aW9uXSlcclxuICAgIH0pO1xyXG4gICAgd29ya1NoZWV0LmFkZFJvdyhbXSk7XHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KFsnUmVwYWlyIERldGFpbHMnXSk7XHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KGNvbHVtbnM0Lm1hcChjb2wgPT4gY29sLmhlYWRlcikpXHJcbiAgICBkYXRhNC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB3b3JrU2hlZXQuYWRkUm93KFtpdGVtLmFjdGlvbiwgaXRlbS5hY3Rpb25UYWtlbiwgaXRlbS5ub3RlXSlcclxuICAgIH0pO1xyXG4gICAgd29ya1NoZWV0LmFkZFJvdyhbXSk7XHJcbiAgICB3b3JrU2hlZXQuYWRkUm93KFsnRmluYW5jZSddKTtcclxuICAgIHdvcmtTaGVldC5hZGRSb3coY29sdW1uczUubWFwKGNvbCA9PiBjb2wuaGVhZGVyKSlcclxuICAgIGRhdGE1LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHdvcmtTaGVldC5hZGRSb3coW2l0ZW0ubm8sIGl0ZW0uaXRlbSwgaXRlbS5pdGVtRGVzY3JpcHRpb24sIGl0ZW0uaXRlbVF0eSwgaXRlbS5pdGVtUmF0ZSwgaXRlbS5pdGVtRGlzY291bnQsIGl0ZW0uaXRlbUFtb3VudF0pXHJcbiAgICB9KTtcclxuICAgIGRhdGE2LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHdvcmtTaGVldC5hZGRSb3coW2l0ZW0ubm8sIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0ubm8xLCBpdGVtLmxhYm9yUXR5LCBpdGVtLmFkanVzdG1lbnROdW1iZXIsIGl0ZW0ubGFib3JEaXNjb3VudCwgaXRlbS50b3RhbExhYm9yRmVlc0dlbmVyYWxlXSlcclxuICAgIH0pO1xyXG4gICAgZGF0YTcuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgd29ya1NoZWV0LmFkZFJvdyhbaXRlbS5ubywgaXRlbS5ubzEsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0ubGFib3JRdHksIGl0ZW0uYWRqdXN0bWVudE51bWJlciwgaXRlbS5sYWJvckRpc2NvdW50LCBpdGVtLnRvdGFsSW52b2ljZV0pXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBidWZmZXIgPSBhd2FpdCB3b3JrYm9vay54bHN4LndyaXRlQnVmZmVyKCk7XHJcbiAgICBjb25zdCBib2xkID0gbmV3IEJsb2IoW2J1ZmZlcl0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgfSk7XHJcbiAgICBzYXZlQXMoYm9sZCwgYE0tJHtTdHJpbmcoc2VydmljZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX0gZm9yICR7Y3VzdG9tZXJOYW1lMX0ueGxzeGApXHJcbiAgfVxyXG5jb25zdCBSb3cyID0gKHsgdG90YWxBbW91bnRQbGFuaW5nLCB0b3RhbEFtb3VudDIgfSkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8dHIgc3R5bGU9e3sgJyYgPiAqJzogeyBib3JkZXJCb3R0b206ICd1bnNldCcgfSB9fT5cclxuICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIGN1cnNvcjogJ3BvaW50ZXInIH19IG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfT5cclxuICAgICAgICAgIHtvcGVuID8gPEtleWJvYXJkQXJyb3dVcCAvPiA6IDxzcGFuPjE8L3NwYW4+fVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkIGNvbFNwYW49ezR9IGFsaWduPVwibGVmdFwiIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PkVtcGxveWVlPC90ZD5cclxuICAgICAgICA8dGQgY29sU3Bhbj17NH0gc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fSBhbGlnbj1cImxlZnRcIj48c3Bhbj4kPC9zcGFuPjxzcGFuPnt0b3RhbEFtb3VudFBsYW5pbmc/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJywgcGFkZGluZ0JvdHRvbTogMCwgcGFkZGluZ1RvcDogMCB9fSBjb2xTcGFuPXs5fT5cclxuICAgICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0gdGltZW91dD1cImF1dG9cIiB1bm1vdW50T25FeGl0PlxyXG4gICAgICAgICAgICA8Qm94IHN4PXt7IG1hcmdpbjogMSB9fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gY29tcG9uZW50PVwiZGl2XCI+XHJcbiAgICAgICAgICAgICAgICBFbXBsb3llZVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+RGF5cyBXb3JrczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PlRvdGFsIFBheSBEYXk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5Ub3RhbCBQYXk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQW1vdW50Mj8ubWFwKChyb3csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJsZWZ0XCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+e3Jvdy5uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPjwvc3Bhbj48c3Bhbj57cm93LndvcmtEfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fSBhbGlnbj1cImxlZnRcIj48c3Bhbj4kPC9zcGFuPjxzcGFuPntyb3cuZGF5UGF5Py50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19IGFsaWduPVwibGVmdFwiPjxzcGFuPiQ8L3NwYW4+PHNwYW4+e3Jvdy50b3RhbD8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTWFpbnRlbmFuY2UgSW5mb3JtYXRpb25cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL01haW50ZW5hbmNlVmlld0FkbWluJyl9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19Pnt1c2VyLmRhdGEudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiAyIH19ID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxvYWRpbmdEYXRhID8gPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiA6IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvdyA9PT0gMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3cyID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBwYWRkaW5nOiAnNXB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3ggLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J2g2Jz5BbGwgU2VydmljZTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIxJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93MigyKX0+RmlsdGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTcwcHgpJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpVGFicy1pbmRpY2F0b3InOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWFpbnRlbmFuY2U/Lm1hcCgocm93LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cm93LmN1c3RvbWVyTmFtZT8uY3VzdG9tZXJOYW1lICsgJyB8ICcgKyByb3cuc2VydmljZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgL01haW50ZW5hbmNlVmlld0luZm9ybWF0aW9uLyR7cm93Ll9pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93MiA9PT0gMiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtSW5mb0NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzEwcHgnIH19IHNwYWNpbmc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3cyKDEpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzMwMzY4YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICdjYWxjKDEwMHZoIC0gMTI1cHgpJywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmIC5NdWlUYWJzLWluZGljYXRvcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXdBcnJheT8ubWFwKChyb3csIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtyb3cuY3VzdG9tZXJOYW1lPy5jdXN0b21lck5hbWUgKyAnIHwgJyArIHJvdy5zZXJ2aWNlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e2AvTWFpbnRlbmFuY2VWaWV3SW5mb3JtYXRpb24vJHtyb3cuX2lkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMzAzNjhhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgIFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXIyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHttYWludGVuYW5jZT8uZmlsdGVyKHJvdyA9PiByb3cuX2lkID09PSBpZCk/Lm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cm93Ll9pZH0gc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyIHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1JlZiA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNSc+e3Jvdy5jdXN0b21lck5hbWU/LmN1c3RvbWVyTmFtZX0gfCA8c3Bhbj4gIE0te1N0cmluZyhyb3cuc2VydmljZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX08L3NwYW4+PC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e3Jvdy5zdGF0dXMgPT09IFwiT3BlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJibHVlXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSBcIlBlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyZWRcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1cyA9PT0gXCJSZXNjaGVkdWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJPcmFuZ2VcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzID09PSBcIkNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImdyZWVuXCIgOiBcImJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0gID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyb3cuc3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPXtvcGVuID8gJ2RlbW8tY3VzdG9taXplZC1tZW51JyA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPXtvcGVuID8gJ3RydWUnIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUVsZXZhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17PEtleWJvYXJkQXJyb3dEb3duSWNvbiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnZ3JheScsICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1jdXN0b21pemVkLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNZW51TGlzdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWxsZWRieSc6ICdkZW1vLWN1c3RvbWl6ZWQtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU1lbnV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYW5zaXRpb25Db21wb25lbnQ9e0ZhZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBkaXNhYmxlZD17cm93LnN0YXR1cyA9PT0gJ0NvbnZlcnRlZCcgJiYgTWFpbnRlbmFuY2VJbmZvVS5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9NYWludGVuYW5jZVVwZGF0ZVZpZXcvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5FZGl0PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL01haW50ZW5hbmNlRm9ybUNsb25lLyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaWxlQ29weSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+Q2xvbmU8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlT3BlblByaW50fSBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbFByaW50c2hvcEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5QcmludDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2V4cG9ydFRvRXhjZWx9IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjBweCcsIGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV4cGxpY2l0IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RXhwb3J0IHRvIEV4Y2VsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdygyKX0+IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+Q29tbWVudHM8L3NwYW4+IDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93KDMpfT4gPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT5IaXN0b3J5PC9zcGFuPjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuUmVmZXJlbmNlTmFtZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93UmVmKDIpfT5SZWZlcmVuY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogPHNwYW4gb25DbGljaz17aGFuZGxlQ2xvc2VNZW51fSBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19Pk5vIFJlbGF0ZWQgUmVmZXJlbmNlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zdGF0dXMgPT09ICdDbG9zZScgJiYgcm93LkNvbnZlcnRlZCAhPT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL01haW50ZW5hbmNlQ29udmVydFRvSW52b2ljZS8ke3Jvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZScgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db252ZXJ0IFRvIEludm9pY2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LkNvbnZlcnRlZCA9PT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL01haW50ZW5hbmNlQ29udmVydFRvSW52b2ljZS8ke3Jvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZScgc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5Db252ZXJ0IFRvIEludm9pY2UgKEFnYWluKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UmVmID09PSAyID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlY29uZFRhYmxlXCIgc3R5bGU9e3sgZm9udFNpemU6ICc4MCUnLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdW90YXRpb24gJiYgcXVvdGF0aW9uLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtxdW90YXRpb24ubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cm93Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IERhdGUge2RheWpzKHJvdy5lc3RpbWF0ZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IFF1b3RhdGlvbiAjIHsocm93LmVzdGltYXRlTmFtZSB8fCByb3cuaW52b2ljZU5hbWUpPy5yZXBsYWNlKC9FU1RcXHMqLT8vaSwgJ1FVTy0nKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PiBBbW91bnQgIDxzcGFuPiQ8L3NwYW4+IHtyb3cudG90YWxJbnZvaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IFN0YXR1czoge3Jvdy5zdGF0dXN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9Fc3RpbWF0ZVZpZXdBZG1pbkFsbC8ke3Jvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMTJweCcgfX0+Vmlldzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52b2ljZSAmJiBpbnZvaWNlLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZvaWNlLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PiBEYXRlIHtkYXlqcyhyb3cuaW52b2ljZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IEludm9pY2UgIyB7cm93Lmludm9pY2VOYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IEFtb3VudCAgPHNwYW4+JDwvc3Bhbj4ge3Jvdy50b3RhbEludm9pY2V9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT4gUGFpZCAgPHNwYW4+JDwvc3Bhbj4ge3Jvdy50b3RhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PiBCYWxhbmNlICA8c3Bhbj4kPC9zcGFuPiB7cm93LmJhbGFuY2VEdWU/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL0ludm9pY2VWaWV3QWRtaW5BbGwvJHtyb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogJzEycHgnIH19PlZpZXc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludm9pY2UyICYmIGludm9pY2UyLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbnZvaWNlMi5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtyb3cuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT4gRGF0ZSB7ZGF5anMocm93Lmludm9pY2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PiBJbnZvaWNlICMge3Jvdy5pbnZvaWNlTmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PiBBbW91bnQgIDxzcGFuPiQ8L3NwYW4+IHtyb3cudG90YWxJbnZvaWNlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+IFBhaWQgIDxzcGFuPiQ8L3NwYW4+IHtyb3cudG90YWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT4gQmFsYW5jZSAgPHNwYW4+JDwvc3Bhbj4ge3Jvdy5iYWxhbmNlRHVlPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9JbnZvaWNlVmlld0FkbWluQWxsLyR7cm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcxMnB4JyB9fT5WaWV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93UmVmKDEpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyB3aWR0aDogJzEwMCUnLCB0eXBvZ3JhcGh5OiAnYm9keTEnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJDb250ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgYm9yZGVyQm90dG9tOiAxLCBib3JkZXJDb2xvcjogJ2RpdmlkZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiTGlzdCBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibGFiIEFQSSB0YWJzIGV4YW1wbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpVGFicy1pbmRpY2F0b3InOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk92ZXJ2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5kYXRhLnJvbGUgPT09ICdDRU8nICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBsYWJlbD1cIlN1bW1hcnlcIiB2YWx1ZT1cIjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjFcIiBzeD17eyBoZWlnaHQ6ICc1MDBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e2NvbXBvbmVudFJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcxMHB4JywgZm9udFNpemU6ICc5MCUnLCBjb2xvcjogJ2JsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmludEhlYWRlciBicmFuY2hJZD17dHlwZW9mIHJvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJvdz8uYnJhbmNoSWQgOiB0eXBlb2YgZGF0YSAhPT0gXCJ1bmRlZmluZWRcIiA/IGRhdGE/LmJyYW5jaElkIDogXCJcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsIG1hcmdpbkJvdHRvbTogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fSBjb2xTcGFuPXs0fT5Kb2IgQ2FyZCBJbmZvPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19Pk1haW50ZW5hbmNlIE9yZGVyIERhdGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT57ZGF5anMocm93LnNlcnZpY2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT4gTWFpbnRlbmFuY2UgT3JkZXIgTm8uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+TS17U3RyaW5nKHJvdy5zZXJ2aWNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5WaXNpdCBEYXRlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+e2RheWpzKHJvdy52aXNpdERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PnN0YXR1czwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19Pntyb3cuc3RhdHVzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsIG1hcmdpbkJvdHRvbTogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fSBjb2xTcGFuPXs0fT5DbGllbnQgSW5mbzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJywgd2lkdGg6ICcxMHB4JyB9fT5DdXN0b21lciBOYW1lPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIHdpZHRoOiAnMTAwcHgnIH19Pntyb3cuY3VzdG9tZXJOYW1lPy5jdXN0b21lck5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+IFBob25lPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIHdpZHRoOiAnMTAwcHgnIH19Pntyb3cuY3VzdG9tZXJOYW1lPy5waG9uZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+QWRkcmVzczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfSBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19Pntyb3cuY3VzdG9tZXJOYW1lPy5hZGRyZXNzfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsIG1hcmdpbkJvdHRvbTogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fSBjb2xTcGFuPXs0fT5BcHBsaWFuY2UgSW5mbzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5JdGVtIERlc2NyaXB0aW9uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+e3Jvdy5pdGVtRGVzY3JpcHRpb25JbmZvfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5CcmFuZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLCB3aWR0aDogJzEwMHB4JyB9fT57cm93LmJyYW5kfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PiBTZXJpYWwgTm8uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIHdpZHRoOiAnMTAwcHgnIH19Pntyb3cuc2VyaWFsTm99PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19Pk1vZGVsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIHdpZHRoOiAnMTAwcHgnIH19Pntyb3cubW9kZWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+V2FycmFudHkgU3RhdHVzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIHdpZHRoOiAnMTAwcHgnIH19Pntyb3cud2FycmFudHl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PkRlZmVjdCBEZXNjcmlwdGlvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfSBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19Pntyb3cuZGVmZWN0RGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJywgaGVpZ2h0OiAnMTMwcHgnLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2NlbnRlcicsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0gY29sU3Bhbj17Mn0+UmVwYWlyIERldGFpbHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIHdpZHRoOiAnMjBweCcgfX0+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+e3Jvdy5hY3Rpb24gIT09IHVuZGVmaW5lZCA/IHJvdy5hY3Rpb24gOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+QWN0aW9uIFRha2VuPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+Tm90ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJywgd2lkdGg6ICc1MCUnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT57cm93LmFjdGlvblRha2VufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLCB3aWR0aDogJzUwJScsIHRleHRBbGlnbjogJ2xlZnQnIH19Pntyb3cubm90ZSAhPT0gdW5kZWZpbmVkID8gcm93Lm5vdGUgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnLCBoZWlnaHQ6ICcxMzBweCcsIG1hcmdpbkJvdHRvbTogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnY2VudGVyJywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fSBjb2xTcGFuPXs2fT5GaW5hbmNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJywgd2lkdGg6ICcxMjBweCcgfX0+UGFydHMvcyBNb2RlbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJywgd2lkdGg6ICcxNTBweCcgfX0+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+QnJhbmQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+UXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLCB3aWR0aDogJzUwcHgnIH19PkRpc2NvdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLCB3aWR0aDogJzEwMHB4JyB9fT5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocm93Lml0ZW1zIHx8IFtdKS5tYXAoKEl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGVkVW5pdCA9IGl0ZW1NYXBbSXRlbS5pdGVtTmFtZT8uX2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17SXRlbS5pZFJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19IGNvbFNwYW49ezV9PntJdGVtLm5ld0Rlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PiA8c3BhbiBoaWRkZW49e0l0ZW0uaXRlbU5hbWUgPyBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lID09PSAnZW1wdHknIDogJyd9PntJdGVtLml0ZW1OYW1lPy5pdGVtTmFtZT8udG9VcHBlckNhc2UoKSB8fCAnJ308L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT57SXRlbS5pdGVtRGVzY3JpcHRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT57cmVsYXRlZFVuaXQgIT09IHVuZGVmaW5lZCA/IHJlbGF0ZWRVbml0Lml0ZW1CcmFuZC50b1VwcGVyQ2FzZSgpIDogJyd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT57SXRlbS5pdGVtUXR5fSB7cmVsYXRlZFVuaXQgIT09IHVuZGVmaW5lZCA/IHJlbGF0ZWRVbml0LnVuaXQudG9VcHBlckNhc2UoKSA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+IDxzcGFuIGRhdGEtcHJlZml4PiQgPC9zcGFuPntJdGVtLml0ZW1SYXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+IDxzcGFuIGRhdGEtcHJlZml4PiUgPC9zcGFuPntJdGVtLml0ZW1EaXNjb3VudH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19ID48c3BhbiBkYXRhLXByZWZpeD4kIDwvc3Bhbj48c3BhbiBpZD0ndG90YWxJdGVtU2VydmljZSc+e051bWJlcihJdGVtLml0ZW1BbW91bnQgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fSBjb2xTcGFuPXszfT5MYWJvciBGZWVzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0gPntyb3cubGFib3JRdHkgIT09IHVuZGVmaW5lZCA/IHJvdy5sYWJvclF0eSA6IDB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0gPjxzcGFuIGRhdGEtcHJlZml4PiQgPC9zcGFuPntyb3cuYWRqdXN0bWVudE51bWJlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fSA+PHNwYW4gZGF0YS1wcmVmaXg+JSA8L3NwYW4+e3Jvdy5sYWJvckRpc2NvdW50ICE9PSB1bmRlZmluZWQgPyByb3cubGFib3JEaXNjb3VudCA6IDB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0gPjxzcGFuIGRhdGEtcHJlZml4PiQgPC9zcGFuPntyb3cudG90YWxMYWJvckZlZXNHZW5lcmFsZSAhPT0gdW5kZWZpbmVkID8gcm93LnRvdGFsTGFib3JGZWVzR2VuZXJhbGUgOiAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb3cyIHRvdGFsQW1vdW50UGxhbmluZz17dG90YWxBbW91bnRQbGFuaW5nfSB0b3RhbEFtb3VudDI9e3RvdGFsQW1vdW50Mn0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJywgd2lkdGg6ICcxMDBweCcgfX0gY29sU3Bhbj17NX0+R3JhbmQgVG90YWw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJywgd2lkdGg6ICcxMDBweCcgfX0gY29sU3Bhbj17Mn0gPjxzcGFuIGRhdGEtcHJlZml4PiQgPC9zcGFuPntOdW1iZXIocm93LnRvdGFsSW52b2ljZSB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPVwiMlwiIHN4PXt7IGhlaWdodDogJzUwMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN4PXt7IG1hcmdpbkJvdHRvbTogJzE1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGNvbG9yOiAnZ3JheScgfX0+U3VtbWFyeTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTeW5jZWR9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPnN5bmM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBpZUNoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3JzPXtwYWxldHRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmNMYWJlbDogKGl0ZW0pID0+IGAke2l0ZW0ubGFiZWx9KCQke2l0ZW0udmFsdWV9KWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyY0xhYmVsTWluQW5nbGU6IDM1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRTY29wZTogeyBmYWRlZDogJ2dsb2JhbCcsIGhpZ2hsaWdodGVkOiAnaXRlbScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFkZWQ6IHsgaW5uZXJSYWRpdXM6IDMwLCBhZGRpdGlvbmFsUmFkaXVzOiAtMzAsIGNvbG9yOiAnZ3JheScgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJDb3N0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHRvdGFsQ29zdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJTZWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHRvdGFsU2VsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogMyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJHYWluXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IEdhaW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCYgLiR7cGllQXJjTGFiZWxDbGFzc2VzLnJvb3R9YF06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5JdGVtIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5RdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PlNlbGwgUmF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+RGlzY291bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PlRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5PdXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PkNvc3QgUmF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+VG90YWwgQ29zdDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyb3cuaXRlbXMgfHwgW10pLm1hcCgoSXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWxhdGVkVW5pdCA9IGl0ZW0uZmluZCgoSXRlbTEpID0+IEl0ZW0xLl9pZCA9PT0gSXRlbS5pdGVtTmFtZT8uX2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0l0ZW0uaWRSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19IGNvbFNwYW49ezV9PntJdGVtLm5ld0Rlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PiA8c3BhbiBoaWRkZW49e0l0ZW0uaXRlbU5hbWUgPyBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lID09PSAnZW1wdHknIDogJyd9PntJdGVtLml0ZW1OYW1lPy5pdGVtTmFtZT8udG9VcHBlckNhc2UoKSB8fCAnJ308L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsIHdpZHRoOiAnMjAwcHgnIH19PntJdGVtLml0ZW1EZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT57SXRlbS5pdGVtUXR5fSB7cmVsYXRlZFVuaXQgIT09IHVuZGVmaW5lZCA/IHJlbGF0ZWRVbml0LnVuaXQudG9VcHBlckNhc2UoKSA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PiA8c3BhbiBkYXRhLXByZWZpeD4kIDwvc3Bhbj57SXRlbS5pdGVtUmF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fSA+PHNwYW4gZGF0YS1wcmVmaXg+JSA8L3NwYW4+PHNwYW4+e0l0ZW0uaXRlbURpc2NvdW50fTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fSA+PHNwYW4gZGF0YS1wcmVmaXg+JCA8L3NwYW4+PHNwYW4gaWQ9J3RvdGFsSXRlbVNlcnZpY2UnPntOdW1iZXIoSXRlbS5pdGVtQW1vdW50IHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0gPjxzcGFuID57SXRlbS5pdGVtT3V0ICE9PSB1bmRlZmluZWQgPyBJdGVtLml0ZW1PdXQgOiAwfSB7cmVsYXRlZFVuaXQgIT09IHVuZGVmaW5lZCA/IHJlbGF0ZWRVbml0LnVuaXQudG9VcHBlckNhc2UoKSA6ICcnfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fSA+PHNwYW4gZGF0YS1wcmVmaXg+JCA8L3NwYW4+PHNwYW4gPntJdGVtLml0ZW1Db3N0ICE9PSB1bmRlZmluZWQgPyBJdGVtLml0ZW1Db3N0IDogMH08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0gPjxzcGFuIGRhdGEtcHJlZml4PiQgPC9zcGFuPjxzcGFuID57SXRlbS5pdGVtT3V0ICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KEl0ZW0uaXRlbU91dCAqIEl0ZW0uaXRlbUNvc3QpPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLCBjdXJzb3I6ICdwb2ludGVyJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17NH0gYWxpZ249XCJsZWZ0XCIgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+RW1wbG95ZWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezR9IHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0gYWxpZ249XCJsZWZ0XCI+PHNwYW4+JDwvc3Bhbj48c3Bhbj57TnVtYmVyKHRvdGFsQW1vdW50UGxhbmluZyB8fCAwKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBjb2xTcGFuPXs5fT4gVG90YWwgU2VsbDogKDxzcGFuIGRhdGEtcHJlZml4PiQgPC9zcGFuPnt0b3RhbFNlbGwucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0pIC0gVG90YWwgQ29zdDogKDxzcGFuIGRhdGEtcHJlZml4PiQgPC9zcGFuPnt0b3RhbENvc3QucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0pID0gR2FpbjogKDxzcGFuIGRhdGEtcHJlZml4PiQgPC9zcGFuPntHYWluLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9KSA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0gY29sU3Bhbj17Mn0+TGFib3IgRmVlczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fSA+e3Jvdy5sYWJvclF0eSAhPT0gdW5kZWZpbmVkID8gcm93LmxhYm9yUXR5IDogMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0gPjxzcGFuIGRhdGEtcHJlZml4PiQgPC9zcGFuPntyb3cuYWRqdXN0bWVudE51bWJlcn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0gPjxzcGFuIGRhdGEtcHJlZml4PiUgPC9zcGFuPntyb3cubGFib3JEaXNjb3VudCAhPT0gdW5kZWZpbmVkID8gcm93LmxhYm9yRGlzY291bnQgOiAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fSA+PHNwYW4gZGF0YS1wcmVmaXg+JCA8L3NwYW4+e3Jvdy50b3RhbExhYm9yRmVlcyAhPT0gdW5kZWZpbmVkID8gcm93LnRvdGFsTGFib3JGZWVzIDogMH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJDb250ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvdyA9PT0gMiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW1JbmZvQ29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q29tbWVudHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIxJyBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93KDEpfT5DbG9zZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdEVkaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0gc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nY29tbWVudHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2NvbW1lbnRzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ29tbWVudHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnPlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzMzM3B4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtDb21tZW50czEubWFwKChJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e0l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXlqcyhJdGVtLmRhdGVDb21tZW50KS5mb3JtYXQoJ0REL01NJyl9IHtJdGVtLkNvbW1lbnRJbmZvLnBlcnNvbiArICc6ICcgKyBJdGVtLkNvbW1lbnRJbmZvLnJlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93ID09PSAzID9cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbUluZm9Db250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5ISVNUT1JZPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvdygxKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc1MThweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cm93LnBlcnNvbiArICcgb24gJyArIGRheWpzKHJvdy5kYXRlTm90aWZpY2F0aW9uKS5mb3JtYXQoJ0REL01NTU0nKX06IHtyb3cucmVhc29ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+IDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KX1cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICB7c3luY2hybyA9PT0gJ3RydWUnID8gPGgyPiBJdGVtIE91dCBTeW5jIHN1Y2Nlc3NmdWxseTwvaDI+IDogPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+fVxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIEZhaWxlZCB0byBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW50ZW5hbmNlVmlld0luZm9ybWF0aW9uXHJcbiJdLCJuYW1lcyI6WyJQcmludEhlYWRlciIsIlByaW50Rm9vdGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZU1lbW8iLCJTaWRlYmFyRGFzaCIsIlNlYXJjaEljb24iLCJOb3RpZmljYXRpb25zTm9uZUljb24iLCJBY2NvdW50Q2lyY2xlSWNvbiIsIkRlbGV0ZUljb24iLCJNZW51SXRlbSIsIkdyaWQiLCJJY29uQnV0dG9uIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZVJvdyIsIlRhYmxlSGVhZCIsIlBhcGVyIiwiVGFibGVDb250YWluZXIiLCJUZXh0RmllbGQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJUeXBvZ3JhcGh5IiwiQXV0b2NvbXBsZXRlIiwic3R5bGVkIiwiTW9kYWwiLCJCYWNrZHJvcCIsIkZhZGUiLCJCb3giLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJDaGVja2JveCIsIkxpbmVhclByb2dyZXNzIiwiU3RlcHBlciIsIlN0ZXAiLCJTdGVwTGFiZWwiLCJCdXR0b24iLCJUYWJzIiwiVGFiIiwiTWVudSIsIkRpdmlkZXIiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJjb2xvcnMiLCJDb2xsYXBzZSIsIkVkaXRJY29uIiwiSW9zU2hhcmVJY29uIiwiTG9jYWxQcmludHNob3BJY29uIiwiQXR0YWNoRmlsZUljb24iLCJTZW5kSWNvbiIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkNvbnRhaW5lciIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIkFkZCIsIkFycm93VXB3YXJkT3V0bGluZWQiLCJFeGl0VG9BcHAiLCJGaWxlQ29weSIsIktleWJvYXJkQXJyb3dVcCIsInY0IiwidXNlTmF2aWdhdGUiLCJOYXZMaW5rIiwidXNlUGFyYW1zIiwiTGluayIsIkRlbW9Db250YWluZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXlqcyIsIkRhdGVQaWNrZXIiLCJkYXlqcyIsIkFycm93QmFjayIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2FkZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiQ3VycmVuY3lFeGNoYW5nZSIsIk1vbmV0aXphdGlvbk9uIiwiRGF0YUdyaWQiLCJSZWFjdFRvUHJpbnQiLCJ1c2VSZWFjdFRvUHJpbnQiLCJJbWFnZSIsIkNsb3NlIiwiYWxwaGEiLCJLZXlib2FyZEFycm93RG93bkljb24iLCJUYWJDb250ZXh0IiwiVGFiTGlzdCIsIlRhYlBhbmVsIiwiUGllQ2hhcnQiLCJwaWVBcmNMYWJlbENsYXNzZXMiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJFeGNlbEpTIiwic2F2ZUFzIiwiRXhwbGljaXQiLCJFZGl0VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiQmxhY2tUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJQcmludFRvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsIlZpZXdUb29sdGlwIiwiX3JlZjciLCJfZXhjbHVkZWQ0IiwiX3JlZjgiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjkiLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjAiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJwYWxldHRlIiwiTWFpbnRlbmFuY2VWaWV3SW5mb3JtYXRpb24iLCJfbWFpbnRlbmFuY2UkZmlsdGVyIiwiX3VzZVBhcmFtcyIsImlkIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjEiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImdyYW50QWNjZXNzIiwic2V0R3JhbnRBY2Nlc3MiLCJmZXRjaE51bWJlciIsIl9yZWYxMCIsIl9yZXMkZGF0YSIsImZpbHRlciIsInJvdyIsInVzZXJJRCIsIm1hcCIsIm1vZHVsZXMiLCJNYWludGVuYW5jZUluZm9VIiwibW9kdWxlTmFtZSIsImFjY2VzcyIsImVkaXRNIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJtYWludGVuYW5jZSIsInNldE1haW50ZW5hbmNlIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJxdW90YXRpb24iLCJzZXRRdW90YXRpb24iLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIml0ZW0iLCJTZXRJdGVtcyIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsIml0ZW1PdXQiLCJzZXRJdGVtT3V0IiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsIml0ZW1SZXR1cm4iLCJzZXRJdGVtUmV0dXJuIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsInBsYW5pbmdJbmZvIiwic2V0UGxhbmluZ0luZm8iLCJmZXRjaERhdGEiLCJfcmVmMTEiLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJQcm9taXNlIiwiYWxsIiwiX3lpZWxkJFByb21pc2UkYWxsMiIsInJlc00iLCJyZXNJIiwicmVzU2luZ2xlIiwicmVzRXN0aW1hdGUiLCJhbGxNYWludGVuYW5jZSIsInNvcnQiLCJhIiwiYiIsInNlcnZpY2VOdW1iZXIiLCJtYWludGVuYW5jZURhdGEiLCJyZWZOYW1lIiwiX21haW50ZW5hbmNlRGF0YSRjdXN0IiwiX3Jlc0VzdGltYXRlJGRhdGEiLCJSZWZlcmVuY2VOYW1lIiwic2V0UmVmZXJlbmNlTmFtZSIsInNldEN1c3RvbWVyTmFtZTEiLCJjdXN0b21lck5hbWUiLCJyZXBsYWNlIiwic2V0U2VydmljZU51bWJlciIsInNldEl0ZW0iLCJpdGVtcyIsInNlbGxUb3RhbCIsInBhcnNlRmxvYXQiLCJzdWJUb3RhbCIsInRvRml4ZWQiLCJzZXRUb3RhbFNlbGwiLCJhbGxFc3RpbWF0aW9ucyIsIl9pZCIsInJlc1JlbGF0ZWQiLCJyZWxhdGVkRGF0YSIsIml0ZW1PdXRzIiwib3V0TnVtYmVyIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJ0eXBlIiwiaXRlbVJldHVybnMiLCJyZXN1bHRQbGFuaW5nIiwicGxhbmluZ3MiLCJ0b3RhbFdvcmtEYXkiLCJkYXlQYXlVU2QiLCJ3b3JrTnVtYmVyIiwiZmlsdGVyZWRJbnZvaWNlIiwiaW52b2ljZXMiLCJpbnZvaWNlTmFtZSIsImZpbHRlcmVkSW52b2ljZTIiLCJzZXRJbnZvaWNlIiwic2V0SW52b2ljZTIiLCJzZXRDb21tZW50cyIsImNvbW1lbnRzIiwicmV2ZXJzZSIsInNldE5vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbnMiLCJmYWxsYmFja0Vycm9yIiwiX3Jlc0lPJGRhdGEiLCJfcmVzSVIkZGF0YSIsIl9yZXNQJGRhdGEiLCJfcmVzQ29tbWVudCRkYXRhIiwiX3Jlc05vdGlmaWNhdGlvbiRkYXRhIiwiX3lpZWxkJFByb21pc2UkYWxsMyIsIl95aWVsZCRQcm9taXNlJGFsbDQiLCJyZXNJTyIsInJlc0lSIiwicmVzUCIsInJlc0ludm9pY2UiLCJyZXNDb21tZW50IiwicmVzTm90aWZpY2F0aW9uIiwiX3JvdyRyZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJfcm93JHJlZmVyZW5jZTIiLCJfcm93JHByb2plY3ROYW1lIiwicHJvamVjdE5hbWUiLCJ1bmRlZmluZWQiLCJhbGxJbnZvaWNlcyIsImZpbHRlcmVkQ29tbWVudHMiLCJDb21tZW50SW5mbyIsImlkSW5mbyIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJyZWZlcmVuY2VOYW1lIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInRvdGFsQ29zdCIsInNldFRvdGFsQ29zdCIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJ0b3RhbFNlbGwiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwiY3VzdG9tZXJOYW1lMSIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwicGxhbmluZ09iamVjdCIsInJlZHVjZSIsImFjYyIsImVtcGxveWVlSUQiLCJuYW1lIiwiZGF5UGF5Iiwid29ya0QiLCJ0b3RhbCIsInRvdGFsQW1vdW50MiIsIk9iamVjdCIsImtleXMiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4IiwidG90YWxBbW91bnRQbGFuaW5nIiwic2V0VG90YWxBbW91bnRQbGFuaW5nIiwidG90YWxQYXlSb2xsIiwic3VtIiwibGVuZ3RoIiwidG90YWxJbmZvIiwiaXRlbUNvc3QiLCJjb3N0SW5mbyIsInRvdGFsQ29zdEluZm8iLCJOdW1iZXIiLCJpdGVtTWFwIiwiZm9yRWFjaCIsImkiLCJyZWxhdGVkIiwiaXRlbXNRdHlBcnJheSIsIm5ld0l0ZW1PdXQiLCJfaXRlbSRpdGVtTmFtZSIsIl9pdGVtJGl0ZW1OYW1lMiIsInJhd0lkIiwiaXRlbU5hbWUiLCJJZCIsInRvU3RyaW5nIiwiSXRlbU5hbWUiLCJyZWxhdGVkUmV0dXJuIiwiX2l0ZW0kaXRlbU5hbWUzIiwiX2l0ZW0kaXRlbU5hbWU0IiwiSWQxIiwiSXRlbU5hbWUxIiwidG90YWwxIiwibmV3QWxsT3V0UmV0dXJuIiwidmFsdWVzIiwiX3JlZjEyIiwicmVsYXRlZDEiLCJmaW5kIiwiX3JlZjEzIiwicmVsYXRlZFB1cmNoYXNlIiwiSXRlbSIsIl9JdGVtJGl0ZW1OYW1lIiwidGFyZ2V0SWQiLCJuZXdBbGxPdXRSZXR1cm5JbmZvIiwiSXRlbTEiLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwic3luY2hybyIsInNldFN5bmNocm8iLCJoYW5kbGVTeW5jZWQiLCJfcmVmMTQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVUYXNrcyIsIl9yZWYxNSIsImN1cnJlbnREYXRhIiwibWVyZ2VkSXRlbXMiLCJjdXJyZW50SXRlbSIsInN5bmNJdGVtIiwiaWRSb3ciLCJwdXQiLCJfeDIiLCJoYW5kbGVPcGVuIiwiaGFuZGxlRXJyb3IiLCJfeCIsIkdhaW4iLCJpc05hTiIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJpbnZvaWNlIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsImludm9pY2UyIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJCb29sZWFuIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZU1lbnUiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2Iiwic2hvdyIsInNldFNob3ciLCJoYW5kbGVTaG93IiwiY29tcG9uZW50UmVmIiwiaGFuZGxlUHJpbnQiLCJjb250ZW50IiwiY3VycmVudCIsImRvY3VtZW50VGl0bGUiLCJoYW5kbGVPcGVuUHJpbnQiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwicmVhc29uIiwic2V0UmVhc29uIiwiX3VzZVN0YXRlMzkiLCJfdXNlU3RhdGU0MCIsIkNvbW1lbnRzMSIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJub3RpZmljYXRpb24iLCJwZXJzb24iLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2IiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGU0NyIsIl91c2VTdGF0ZTQ4IiwiRXJyb3JPcGVuTW9kYWwiLCJzZXRFcnJvck9wZW5Nb2RhbCIsInNldFRpbWVvdXQiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNsb3NlRXJyb3IiLCJkYXRlQ29tbWVudCIsIkRhdGUiLCJub3ciLCJoYW5kbGVTdWJtaXRFZGl0IiwiX3JlZjE2IiwicG9zdCIsIm5ld0RhdGEiLCJfeDMiLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwibWFpbnRlbmFuY2UyIiwiU2V0TWFpbnRlbmFuY2UyIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsInNob3cyIiwic2V0U2hvdzIiLCJoYW5kbGVTaG93MiIsIm1haW50ZW5hbmNlRmlsdGVyZWQiLCJfdXNlU3RhdGU1MyIsIl91c2VTdGF0ZTU0Iiwic2hvd1JlZiIsInNldFNob3dSZWYiLCJoYW5kbGVTaG93UmVmIiwiX3VzZVN0YXRlNTUiLCJfdXNlU3RhdGU1NiIsInZhbHVlIiwic2V0VmFsdWUiLCJfdXNlU3RhdGU1NyIsIl91c2VTdGF0ZTU4IiwidmFsdWUyIiwic2V0VmFsdWUyIiwic2VsZWN0ZWRJbmRleCIsImZpbmRJbmRleCIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlIiwiaGFuZGxlQ2hhbmdlMiIsIl91c2VTdGF0ZTU5IiwiX3VzZVN0YXRlNjAiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJoYW5kbGVTZWFyY2giLCJ0YXJnZXQiLCJuZXdBcnJheSIsImxvd2VyU2VhcmNoIiwidG9Mb3dlckNhc2UiLCJfcm93JGN1c3RvbWVyTmFtZSIsInNlcnZpY2VOYW1lIiwiaW5jbHVkZXMiLCJicmFuZCIsInNvbWUiLCJfSXRlbSRpdGVtTmFtZSRpdGVtTmEiLCJpdGVtRGVzY3JpcHRpb24iLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsInZhbHVlMyIsInNldFZhbHVlMyIsInJlc3VsdCIsImhhbmRsZUNoYW5nZTMiLCJjaGFuZ2VWYWx1ZSIsIl9SZWFjdCR1c2VTdGF0ZTUiLCJfUmVhY3QkdXNlU3RhdGU2Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJkYXRhMSIsIm51bWJlciIsInZpc2l0RGF0ZSIsImZvcm1hdCIsInNlcnZpY2VEYXRlIiwic3RhdHVzIiwiZGF0YTIiLCJfcm93JGN1c3RvbWVyTmFtZTIiLCJfcm93JGN1c3RvbWVyTmFtZTMiLCJfcm93JGN1c3RvbWVyTmFtZTQiLCJDdXN0b21lciIsIlBob25lIiwicGhvbmUiLCJBZGRyZXNzIiwiYWRkcmVzcyIsImRhdGEzIiwiaXRlbURlc2NyaXB0aW9uSW5mbyIsInNlcmlhbE5vIiwibW9kZWwiLCJ3YXJyYW50eSIsImRlZmVjdERlc2NyaXB0aW9uIiwiZGF0YTQiLCJhY3Rpb24iLCJhY3Rpb25UYWtlbiIsIm5vdGUiLCJkYXRhNSIsIl9JdGVtJGl0ZW1OYW1lMiIsIm5vIiwiaXRlbVF0eSIsIml0ZW1SYXRlIiwiaXRlbURpc2NvdW50IiwiaXRlbUFtb3VudCIsImRhdGE2IiwiZGVzY3JpcHRpb24iLCJubzEiLCJsYWJvclF0eSIsImFkanVzdG1lbnROdW1iZXIiLCJsYWJvckRpc2NvdW50IiwidG90YWxMYWJvckZlZXNHZW5lcmFsZSIsImRhdGE3IiwidG90YWxJbnZvaWNlIiwiZXhwb3J0VG9FeGNlbCIsIl9yZWYxNyIsIndvcmtib29rIiwiV29ya2Jvb2siLCJ3b3JrU2hlZXQiLCJhZGRXb3Jrc2hlZXQiLCJjb2x1bW5zMSIsImhlYWRlciIsImtleSIsImNvbHVtbnMyIiwiY29sdW1uczMiLCJjb2x1bW5zNCIsImNvbHVtbnM1IiwiYWRkUm93IiwiY29sIiwiYnVmZmVyIiwieGxzeCIsIndyaXRlQnVmZmVyIiwiYm9sZCIsIkJsb2IiLCJSb3cyIiwiX3JlZjE4IiwiX1JlYWN0JHVzZVN0YXRlNyIsIl9SZWFjdCR1c2VTdGF0ZTgiLCJzZXRPcGVuIiwiRnJhZ21lbnQiLCJib3JkZXJCb3R0b20iLCJ0ZXh0QWxpZ24iLCJib3JkZXIiLCJjdXJzb3IiLCJvbkNsaWNrIiwiY29sU3BhbiIsImFsaWduIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJpbiIsInRpbWVvdXQiLCJ1bm1vdW50T25FeGl0Iiwic3giLCJtYXJnaW4iLCJndXR0ZXJCb3R0b20iLCJjb21wb25lbnQiLCJtYXJnaW5Cb3R0b20iLCJfcm93JGRheVBheSIsIl9yb3ckdG90YWwiLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwibWFyZ2luUmlnaHQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsImNvbnRhaW5lciIsInhzIiwicGFkZGluZyIsIm92ZXJmbG93WSIsIm9uQ2hhbmdlIiwib3JpZW50YXRpb24iLCJpbmRleCIsIl9yb3ckY3VzdG9tZXJOYW1lNSIsImxhYmVsIiwidG8iLCJib3JkZXJSYWRpdXMiLCJ0aXRsZSIsInBsYWNlbWVudCIsImZsb2F0IiwiX3JvdyRjdXN0b21lck5hbWU2IiwiYmFja2dyb3VuZCIsIl9yb3ckY3VzdG9tZXJOYW1lNyIsIl9kYXRhIiwiX3JvdyRjdXN0b21lck5hbWU4IiwiX3JvdyRjdXN0b21lck5hbWU5IiwiX3JvdyRjdXN0b21lck5hbWUwIiwiZGlzYWJsZUVsZXZhdGlvbiIsImVuZEljb24iLCJNZW51TGlzdFByb3BzIiwib25DbG9zZSIsIlRyYW5zaXRpb25Db21wb25lbnQiLCJkaXNhYmxlZCIsImdhcCIsIkNvbnZlcnRlZCIsIl9yZWYxOSIsImVzdGltYXRlRGF0ZSIsImVzdGltYXRlTmFtZSIsIl9yb3ckYmFsYW5jZUR1ZSIsImludm9pY2VEYXRlIiwiYmFsYW5jZUR1ZSIsIl9yb3ckYmFsYW5jZUR1ZTIiLCJ0eXBvZ3JhcGh5IiwiYm9yZGVyQ29sb3IiLCJyZWYiLCJicmFuY2hJZCIsImJvcmRlckNvbGxhcHNlIiwiX0l0ZW0kaXRlbU5hbWUzIiwiX0l0ZW0kaXRlbU5hbWU0IiwicmVsYXRlZFVuaXQiLCJuZXdEZXNjcmlwdGlvbiIsImhpZGRlbiIsInRvVXBwZXJDYXNlIiwiaXRlbUJyYW5kIiwidW5pdCIsInNlcmllcyIsImFyY0xhYmVsIiwiYXJjTGFiZWxNaW5BbmdsZSIsImhpZ2hsaWdodFNjb3BlIiwiZmFkZWQiLCJoaWdobGlnaHRlZCIsImlubmVyUmFkaXVzIiwiYWRkaXRpb25hbFJhZGl1cyIsInJvb3QiLCJmaWxsIiwiZm9udFdlaWdodCIsIl9JdGVtJGl0ZW1OYW1lNiIsIl9wYXJzZUZsb2F0IiwiX0l0ZW0kaXRlbU5hbWU1IiwidG90YWxMYWJvckZlZXMiLCJvblN1Ym1pdCIsInJlcXVpcmVkIiwibXVsdGlsaW5lIiwicm93cyIsImRhdGVOb3RpZmljYXRpb24iLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=