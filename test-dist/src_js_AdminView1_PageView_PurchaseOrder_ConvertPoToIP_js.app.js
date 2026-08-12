"use strict";
exports.id = "src_js_AdminView1_PageView_PurchaseOrder_ConvertPoToIP_js";
exports.ids = ["src_js_AdminView1_PageView_PurchaseOrder_ConvertPoToIP_js"];
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

/***/ "./node_modules/@mui/icons-material/esm/Add.js"
/*!*****************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Add.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), 'Add'));

/***/ },

/***/ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js"
/*!**********************************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
}), 'DragIndicatorRounded'));

/***/ },

/***/ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js"
/*!*********************************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M7 11v2h10v-2zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}), 'RemoveCircleOutline'));

/***/ },

/***/ "./src/js/AdminView1/PageView/PurchaseOrder/ConvertPoToIP.js"
/*!*******************************************************************!*\
  !*** ./src/js/AdminView1/PageView/PurchaseOrder/ConvertPoToIP.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_SideMaintenance2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/SideMaintenance2 */ "./src/js/component/SideMaintenance2.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../CustomerVIew/CustomerFormView2 */ "./src/js/AdminView1/PageView/CustomerVIew/CustomerFormView2.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _Supplier_SupplierForm2__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../Supplier/SupplierForm2 */ "./src/js/AdminView1/PageView/Supplier/SupplierForm2.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["children"],
  _excluded5 = ["children"],
  _excluded6 = ["children"];
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










































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"].tooltip)]: {
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
var style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};
var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_25__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref7 => {
  var theme = _ref7.theme,
    open = _ref7.open;
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_28__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref8 => {
  var theme = _ref8.theme,
    open = _ref8.open;
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
function ConvertPoToIP() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_39__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_39__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_49__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_49__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__.setUser)({
              userName: Name,
              role: Role
            }));
          } catch (error) {
            console.error('Error fetching data:', error);
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__.logOut)());
          }
        } else {
          navigate('/');
        }
      });
      return function fetchUser() {
        return _ref9.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openBack = _useState2[0],
    setOpenBack = _useState2[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return dayjs__WEBPACK_IMPORTED_MODULE_44___default()(date);
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    itemPurchaseDate = _useState4[0],
    setItemPurchaseDate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    itemPurchaseNumber = _useState6[0],
    setItemPurchaseNumber = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    manufacturer = _useState8[0],
    setManufacturer = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    reason = _useState0[0],
    setReason = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    projects = _useState10[0],
    setProject = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    maintenance = _useState12[0],
    setMaintenance = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    note = _useState14[0],
    setNote = _useState14[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue2 = _React$useState2[0],
    setInputValue2 = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    inputValue4 = _React$useState4[0],
    setInputValue4 = _React$useState4[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    manufacturerNumber = _useState16[0],
    setManufacturerNumber = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    manufacturerID = _useState18[0],
    setManufacturerID = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    supplier = _useState20[0],
    setSupplier = _useState20[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    inputValue3 = _React$useState6[0],
    setInputValue3 = _React$useState6[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    description = _useState22[0],
    setDescription = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    totalUSD = _useState24[0],
    setTotalUSD = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    total = _useState26[0],
    setTotal = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    totalFC = _useState28[0],
    setTotalFC = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState30 = _slicedToArray(_useState29, 2),
    items = _useState30[0],
    setItems = _useState30[1];
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_44___default()(Date.now()).format('DD/MM/YYYY');
  var Create = {
    person: user.data.userName + ' CREATED ',
    dateComment
  };
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState32 = _slicedToArray(_useState31, 2),
    projectName = _useState32[0],
    setProjectName = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState34 = _slicedToArray(_useState33, 2),
    purchase = _useState34[0],
    setPurchase = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState36 = _slicedToArray(_useState35, 2),
    maintenanceInfo = _useState36[0],
    setMaintenanceInfo = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    invoiceInfo = _useState38[0],
    setInvoiceInfo = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState40 = _slicedToArray(_useState39, 2),
    itemArray = _useState40[0],
    setItemArray = _useState40[1];
  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    inputValue = _React$useState8[0],
    setInputValue = _React$useState8[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState42 = _slicedToArray(_useState41, 2),
    purchaseOrderData = _useState42[0],
    setPurchaseOrderData = _useState42[1];
  {/** Item Info Start */}
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState44 = _slicedToArray(_useState43, 2),
    ItemInformation = _useState44[0],
    setItemInformation = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState46 = _slicedToArray(_useState45, 2),
    rate = _useState46[0],
    setRate = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState48 = _slicedToArray(_useState47, 2),
    invoice = _useState48[0],
    setInvoice = _useState48[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetch = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _resItemOut$data, _resItemOut$data2, _resInvoice$data;
          var resSupplier = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/Supplier"));
          setSupplier(resSupplier.data.data.reverse());
          var resItemOut = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/get-last-saved-itemPurchase"));
          setItemPurchaseNumber(parseInt(((_resItemOut$data = resItemOut.data) === null || _resItemOut$data === void 0 || (_resItemOut$data = _resItemOut$data.data) === null || _resItemOut$data === void 0 ? void 0 : _resItemOut$data.itemPurchaseNumber) || ((_resItemOut$data2 = resItemOut.data) === null || _resItemOut$data2 === void 0 ? void 0 : _resItemOut$data2.itemPurchaseNumber) || 0) + 1);
          var resItem = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/item"));
          setItemInformation(resItem.data.data.reverse());
          var resProject = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/projects"));
          setProject(resProject.data.data.reverse());
          var resMaintenance = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/maintenance?summary=true"));
          setMaintenance(resMaintenance.data.data.reverse());
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/rate"));
          res.data.data.map(row => setRate(row.rate));
          var resPurchase = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/purchase?summary=true"));
          var resInvoice = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/invoice?summary=true"));
          var newData = (_resInvoice$data = resInvoice.data) === null || _resInvoice$data === void 0 || (_resInvoice$data = _resInvoice$data.data) === null || _resInvoice$data === void 0 ? void 0 : _resInvoice$data.filter(row => !resPurchase.data.data.some(Item => Item._id === row.ReferenceName2) && !resMaintenance.data.data.some(Item2 => Item2.ReferenceName === row._id && Item2._id === row.ReferenceName));
          setInvoice(newData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function handleFetch() {
        return _ref0.apply(this, arguments);
      };
    }();
    handleFetch();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/get-purchaseOrder/").concat(id));
          var poData = res.data.data;
          setPurchaseOrderData(poData);
          setReason(poData.reason);
          setDescription(poData.description);
          setItems(poData.itemsQtyArray.map(row => ({
            idRow: row.idRow,
            itemName: row.itemName,
            itemDescription: row.itemDescription,
            newDescription: row.newDescription,
            orderedQty: row.itemQty,
            itemQty: row.qtyBuy,
            itemRate: row.itemRate,
            Taux: row.Taux,
            cost: 0,
            amountFc: 0,
            totalAmountUSD: row.totalAmountUSD,
            fcConvertToUsd: row.fcConvertToUsd,
            fcConvertToUsdTotal: row.fcConvertToUsdTotal,
            totalAmount: row.totalAmount,
            totalAmountFC: row.totalAmountFC
          })));
          setDescription(res.data.data.description);
          setManufacturer(res.data.data.manufacturer);
          setManufacturerNumber(Number(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.manufacturerNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.manufacturerNumber) || 0));
          setProjectName({
            _id: res.data.data.reference._id,
            name: res.data.data.reference.referenceName
          });
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchData();
  }, [id]);
  var handleReason = e => {
    setReason(e.target.value);
    setProjectName({});
    setDescription("");
    setItems([]);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchPur = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        if (reason === 'Project') {
          try {
            var _resPurchase$data;
            var resPurchase = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/purchase?summary=true"));
            setPurchase((_resPurchase$data = resPurchase.data) === null || _resPurchase$data === void 0 || (_resPurchase$data = _resPurchase$data.data) === null || _resPurchase$data === void 0 ? void 0 : _resPurchase$data.filter(row => row.projectName._id === projectName._id));
          } catch (error) {
            console.log(error);
          }
        } else if (reason === 'Maintenance') {
          var _resM$data;
          var resM = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/maintenance?summary=true"));
          setMaintenanceInfo((_resM$data = resM.data) === null || _resM$data === void 0 || (_resM$data = _resM$data.data) === null || _resM$data === void 0 ? void 0 : _resM$data.filter(row => row._id === projectName._id));
        } else if (reason === 'Invoice') {
          var _resM$data2;
          var _resM = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/invoice?summary=true"));
          setInvoiceInfo((_resM$data2 = _resM.data) === null || _resM$data2 === void 0 || (_resM$data2 = _resM$data2.data) === null || _resM$data2 === void 0 ? void 0 : _resM$data2.filter(row => row._id === projectName._id));
        }
      });
      return function fetchPur() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchPur();
  }, [reason, projectName]);
  var handleChangeItem = (idRow, newValue) => {
    var selectedOptions = newValue;
    setItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
        itemName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemName
      },
      itemDescription: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemDescription
    }) : row));
  };
  var handleChange = (e, idRow) => {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var list = [...items];
    var i = items.findIndex(Item => Item.idRow === idRow);
    list[i][name] = value;
    list[i]['totalAmountUSD'] = Math.round(list[i]['itemQty'] * list[i]['itemRate'] * 100) / 100;
    list[i]['fcConvertToUsd'] = Math.round(list[i]['totalAmountFC'] / list[i]['Taux'] * 100) / 100;
    list[i]['fcConvertToUsdTotal'] = Math.round((parseFloat(list[i]['fcConvertToUsd']) + parseFloat(list[i]['totalAmount'])) * 100) / 100;
    setItems(list);
  };
  var addItem = () => {
    setItems([...items, {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_38__["default"])(),
      itemName: {},
      itemDescription: "",
      itemQty: 0,
      itemRate: 0,
      Taux: rate,
      cost: 0,
      amountFc: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0
    }]);
  };
  var addItemRow = i => {
    var newItem = {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_38__["default"])(),
      itemName: {},
      itemDescription: "",
      Taux: rate,
      itemQty: 0,
      itemRate: 0,
      cost: 0,
      amountFc: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0
    };
    var update = [...items];
    update.splice(i + 1, 0, newItem);
    setItems(update);
  };
  var handleShowAutocomplete = idRow => {
    setItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: null,
        itemName: null
      },
      itemDescription: "",
      itemQty: 0,
      itemRate: 0,
      Taux: rate,
      cost: 0,
      amountFc: 0,
      totalAmountUSD: 0,
      fcConvertToUsd: 0,
      fcConvertToUsdTotal: 0,
      totalAmount: 0,
      totalAmountFC: 0
    }) : row));
  };
  var deleteItem = idRow => {
    setItems(items => items.filter(Item => Item.idRow !== idRow));
  };
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    openAutocomplete1 = _useState50[0],
    setOpenAutocomplete1 = _useState50[1];
  var handleOpenOpenAutocomplete1 = e => {
    e.stopPropagation();
    setOpenAutocomplete1(true);
  };
  var handleCloseOpenAutocomplete1 = () => {
    setOpenAutocomplete1(false);
  };
  var handleCreateCustomer = newCustomer => {
    setSupplier([newCustomer, ...supplier]);
  };
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState52 = _slicedToArray(_useState51, 2),
    openAutocomplete2 = _useState52[0],
    setOpenAutocomplete2 = _useState52[1];
  var handleOpenOpenAutocomplete2 = e => {
    e.stopPropagation();
    setOpenAutocomplete2(true);
  };
  var handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
  };
  var handleCreateItem = newItem => {
    setItemInformation([newItem, ...ItemInformation]);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result0 = items.reduce((sum, row) => sum + parseFloat(row.fcConvertToUsdTotal), 0);
    setTotalUSD(result0.toFixed(2));
    var result1 = items.reduce((sum, row) => sum + parseFloat(row.totalAmount), 0);
    setTotal(result1.toFixed(2));
    var result2 = items.reduce((sum, row) => sum + parseFloat(row.totalAmountFC), 0);
    setTotalFC(result2.toFixed(2));
  });
  {/** Item Info End */}
  var handleChangeSupplier = newValue => {
    var selectedOptions = supplier.find(option => option === newValue);
    setManufacturer(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.storeName);
    setManufacturerID(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id);
  };
  var handleClearCustomer = () => {
    setManufacturer(null);
  };
  var filterItemInformation = ItemInformation.filter(option => !items.find(row => {
    var _row$itemName;
    return option._id === ((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName._id) && option.typeItem === "Goods";
  }));
  {/** purchase start**/}
  // Safe Update Logic: handleUpdatePurchase and onStatusUpdate will now fetch and merge records on-the-fly during submission
  var arrayItemRelated = items.filter(row => row.itemQty !== 0 || row.newDescription !== undefined);
  var handleUpdatePurchase = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* () {
      if (arrayItemRelated.length === 0 || !(projectName !== null && projectName !== void 0 && projectName._id)) return;
      try {
        if (reason === 'Project') {
          var _resPur$data;
          var resPur = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/purchase?summary=true"));
          var relevantPurchases = (_resPur$data = resPur.data) === null || _resPur$data === void 0 || (_resPur$data = _resPur$data.data) === null || _resPur$data === void 0 ? void 0 : _resPur$data.filter(row => {
            var _row$projectName;
            return ((_row$projectName = row.projectName) === null || _row$projectName === void 0 ? void 0 : _row$projectName._id) === projectName._id;
          });
          var _loop = function* _loop() {
            var currentRes = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/get-purchase/").concat(purchaseRow._id));
            var currentData = currentRes.data.data;
            var updatedItems = currentData.items.map(Item => {
              var RelatedItem = arrayItemRelated.find(Item2 => Item2.idRow === Item.idRow);
              if (RelatedItem) {
                var itemBuy = parseFloat(Item.itemBuy || 0) + parseFloat(RelatedItem.itemQty || 0);
                var itemCost = parseFloat(RelatedItem.itemRate || 0) !== 0 ? parseFloat(RelatedItem.itemRate) : parseFloat(Item.itemCost || 0);
                var totalGenerale = itemCost * itemBuy;
                return _objectSpread(_objectSpread({}, Item), {}, {
                  itemBuy,
                  itemCost,
                  totalGenerale
                });
              }
              return Item;
            });

            // Append manually added items that were not originally in the purchase order
            var newItems = arrayItemRelated.filter(Item2 => !currentData.items.some(Item => Item.idRow === Item2.idRow));
            newItems.forEach(RelatedItem => {
              var _RelatedItem$itemName, _RelatedItem$itemName2;
              var itemBuy = parseFloat(RelatedItem.itemQty || 0);
              var itemCost = parseFloat(RelatedItem.itemRate || 0) !== 0 ? parseFloat(RelatedItem.itemRate) : parseFloat(RelatedItem.cost || 0);
              var totalGenerale = itemCost * itemBuy;
              updatedItems.push({
                idRow: RelatedItem.idRow,
                itemName: {
                  _id: ((_RelatedItem$itemName = RelatedItem.itemName) === null || _RelatedItem$itemName === void 0 ? void 0 : _RelatedItem$itemName._id) || "",
                  itemName: ((_RelatedItem$itemName2 = RelatedItem.itemName) === null || _RelatedItem$itemName2 === void 0 ? void 0 : _RelatedItem$itemName2.itemName) || ""
                },
                newDescription: RelatedItem.newDescription,
                itemDescription: RelatedItem.itemDescription || "",
                itemDiscount: 0,
                itemQty: 0,
                // Originally requested 0
                itemRate: RelatedItem.itemRate || 0,
                itemCost: itemCost,
                totalAmount: 0,
                discount: 0,
                percentage: 0,
                itemAmount: 0,
                totalCost: 0,
                totalGenerale: totalGenerale,
                itemBuy: itemBuy,
                itemWeight: "",
                stock: RelatedItem.stock || 0,
                itemOut: 0,
                newItemOut: 0
              });
            });
            var purchaseAmount2 = updatedItems.reduce((sum, row) => sum + (parseFloat(row.totalGenerale) || 0), 0);
            yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/update-purchase/").concat(purchaseRow._id), {
              items: updatedItems,
              purchaseAmount2
            });
          };
          for (var purchaseRow of relevantPurchases) {
            yield* _loop();
          }
        } else if (reason === 'Maintenance') {
          var _resM$data3;
          var resM = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/maintenance?summary=true"));
          var relevantMaintenance = (_resM$data3 = resM.data) === null || _resM$data3 === void 0 || (_resM$data3 = _resM$data3.data) === null || _resM$data3 === void 0 ? void 0 : _resM$data3.filter(row => row._id === projectName._id);
          var _loop2 = function* _loop2() {
            var currentRes = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/get-maintenance/").concat(maintenanceRow._id));
            var currentData = currentRes.data.data;
            var updatedItems = currentData.items.map(Item => {
              var RelatedItem = arrayItemRelated.find(Item2 => Item2.idRow === Item.idRow);
              if (RelatedItem) {
                var itemBuy = parseFloat(Item.itemBuy || 0) + parseFloat(RelatedItem.itemQty || 0);
                var totalGenerale = parseFloat(RelatedItem.itemRate || 0) * itemBuy;
                return _objectSpread(_objectSpread({}, Item), {}, {
                  itemBuy,
                  totalGenerale
                });
              }
              return Item;
            });

            // Append manually added items that were not originally in the maintenance request
            var newItems = arrayItemRelated.filter(Item2 => !currentData.items.some(Item => Item.idRow === Item2.idRow));
            newItems.forEach(RelatedItem => {
              var _RelatedItem$itemName3, _RelatedItem$itemName4;
              var itemBuy = parseFloat(RelatedItem.itemQty || 0);
              var totalGenerale = parseFloat(RelatedItem.itemRate || 0) * itemBuy;
              updatedItems.push({
                idRow: RelatedItem.idRow,
                itemName: {
                  _id: ((_RelatedItem$itemName3 = RelatedItem.itemName) === null || _RelatedItem$itemName3 === void 0 ? void 0 : _RelatedItem$itemName3._id) || "",
                  itemName: ((_RelatedItem$itemName4 = RelatedItem.itemName) === null || _RelatedItem$itemName4 === void 0 ? void 0 : _RelatedItem$itemName4.itemName) || ""
                },
                newDescription: RelatedItem.newDescription,
                itemDescription: RelatedItem.itemDescription || "",
                itemDiscount: 0,
                itemQty: 0,
                itemRate: RelatedItem.itemRate || 0,
                itemCost: RelatedItem.itemRate || 0,
                totalAmount: 0,
                discount: 0,
                percentage: 0,
                itemAmount: 0,
                totalCost: 0,
                totalGenerale: totalGenerale,
                itemBuy: itemBuy,
                itemWeight: "",
                stock: RelatedItem.stock || 0,
                itemOut: 0,
                newItemOut: 0
              });
            });
            yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/update-maintenance/").concat(maintenanceRow._id), {
              items: updatedItems
            });
          };
          for (var maintenanceRow of relevantMaintenance) {
            yield* _loop2();
          }
        } else if (reason === 'Invoice') {
          var _resI$data;
          var resI = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/invoice?summary=true"));
          var relevantInvoices = (_resI$data = resI.data) === null || _resI$data === void 0 || (_resI$data = _resI$data.data) === null || _resI$data === void 0 ? void 0 : _resI$data.filter(row => row._id === projectName._id);
          var _loop3 = function* _loop3() {
            var currentRes = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/get-invoice/").concat(invoiceRow._id));
            var currentData = currentRes.data.data;
            var updatedItems = currentData.items.map(Item => {
              var RelatedItem = arrayItemRelated.find(Item2 => Item2.idRow === Item.idRow);
              if (RelatedItem) {
                var itemBuy = parseFloat(Item.itemBuy || 0) + parseFloat(RelatedItem.itemQty || 0);
                var totalGenerale = parseFloat(RelatedItem.itemRate || 0) * itemBuy;
                return _objectSpread(_objectSpread({}, Item), {}, {
                  itemBuy,
                  totalGenerale
                });
              }
              return Item;
            });

            // Append manually added items that were not originally in the invoice request
            var newItems = arrayItemRelated.filter(Item2 => !currentData.items.some(Item => Item.idRow === Item2.idRow));
            newItems.forEach(RelatedItem => {
              var _RelatedItem$itemName5, _RelatedItem$itemName6;
              var itemBuy = parseFloat(RelatedItem.itemQty || 0);
              var totalGenerale = parseFloat(RelatedItem.itemRate || 0) * itemBuy;
              updatedItems.push({
                idRow: RelatedItem.idRow,
                itemName: {
                  _id: ((_RelatedItem$itemName5 = RelatedItem.itemName) === null || _RelatedItem$itemName5 === void 0 ? void 0 : _RelatedItem$itemName5._id) || "",
                  itemName: ((_RelatedItem$itemName6 = RelatedItem.itemName) === null || _RelatedItem$itemName6 === void 0 ? void 0 : _RelatedItem$itemName6.itemName) || ""
                },
                newDescription: RelatedItem.newDescription,
                itemDescription: RelatedItem.itemDescription || "",
                itemDiscount: 0,
                itemQty: 0,
                itemRate: RelatedItem.itemRate || 0,
                itemCost: RelatedItem.itemRate || 0,
                totalAmount: 0,
                discount: 0,
                percentage: 0,
                itemAmount: 0,
                totalCost: 0,
                totalGenerale: totalGenerale,
                itemBuy: itemBuy,
                itemWeight: "",
                stock: RelatedItem.stock || 0,
                itemOut: 0,
                newItemOut: 0
              });
            });
            yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/update-invoice/").concat(invoiceRow._id), {
              items: updatedItems
            });
          };
          for (var invoiceRow of relevantInvoices) {
            yield* _loop3();
          }
        }
      } catch (error) {
        console.error('Error in handleUpdatePurchase (Convert PO Safe Merge):', error);
      }
    });
    return function handleUpdatePurchase() {
      return _ref11.apply(this, arguments);
    };
  }();
  {/** purchase end */}
  {/** update Item Qty Start 
   const handleUpdateQty = async () => {
    const initialState = {}
    const QtyUpdate = {}
    //Get Qty Arrays
   const QtyNew = arrayItemRelated.filter((Item)=> Item.itemName._id !== undefined).map((Item)=> Item.itemQty )
    //Get ItemName Id
    arrayItemRelated.filter((Item)=> Item.itemName._id !== undefined).forEach((Item,index)=> {
      initialState[`id${index+1}`] = {ids : Item.itemName._id}
    })
      // Get Value
     const getRequestId = Object.values(initialState).map(({ids})=>{
      return axios.get(`${ENDPOINT_URL}/get-item/${ids}`)
    })
    try {
      const res = await Promise.all(getRequestId);
      res.forEach((resp, index)=> { QtyUpdate[`id${index+1}`] = {ids: resp.data.data._id ,data : { itemQuantity: (Number(resp.data?.data?.itemQuantity || resp.data?.itemQuantity || 0)) + Number(QtyNew[index])}}})
     }catch (error) {
      alert('An error as occur');
    }// Update Value 
    const updateRequest = Object.values(QtyUpdate).map(({ids, data})=>{
      return axios.put(`${ENDPOINT_URL}/update-item/${ids}`,data)
     }) 
     try {
       await Promise.all(updateRequest);
     }catch (error) {
      alert('An error as occur');
    }
   } 
   {/** update Item Qty End */}
  {/** loading Start */}
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState54 = _slicedToArray(_useState53, 2),
    loading = _useState54[0],
    setLoading = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState56 = _slicedToArray(_useState55, 2),
    loadingOpenModal = _useState56[0],
    setLoadingOpenModal = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState58 = _slicedToArray(_useState57, 2),
    loadingOpenModalUpdate = _useState58[0],
    setLoadingOpenModalUpdate = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState60 = _slicedToArray(_useState59, 2),
    ErrorOpenModal = _useState60[0],
    setErrorOpenModal = _useState60[1];
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleOpenUpdate = () => {
    setLoadingOpenModalUpdate(true);
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
    window.location.reload();
  };
  var handleCloseUpdate = () => {
    setLoadingOpenModalUpdate(false);
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  var handleDecision = navigate => {
    //Navigate Based on th Decision
    if (navigate === 'previous') {
      navigate('/PurchaseOrderViewAdmin');
    } else if (navigate === 'stay') {
      handleClose();
    }
  };
  var reasonInfo = projectName.name !== undefined ? projectName.name : description;
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: 'IP-' + ReferenceInfoNumber + ' For ' + reasonInfo,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x, _x2) {
      return _ref12.apply(this, arguments);
    };
  }();
  var onStatusUpdate = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      try {
        // Fetch latest PO record to avoid overwriting concurrent changes
        var currentPORes = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/get-purchaseOrder/").concat(id));
        var latestPOData = currentPORes.data.data;

        // Logic to merge current form items with original PO items to avoid data loss
        var mergedItems = latestPOData.itemsQtyArray.map(originalItem => {
          var updatedItem = items.find(i => i.idRow === originalItem.idRow);
          if (updatedItem) {
            return _objectSpread(_objectSpread({}, originalItem), {}, {
              itemQty: originalItem.itemQty,
              qtyBuy: updatedItem.itemQty,
              itemRate: updatedItem.itemRate,
              Taux: updatedItem.Taux,
              totalAmountUSD: updatedItem.totalAmountUSD,
              fcConvertToUsd: updatedItem.fcConvertToUsd,
              fcConvertToUsdTotal: updatedItem.fcConvertToUsdTotal,
              totalAmount: updatedItem.totalAmount,
              totalAmountFC: updatedItem.totalAmountFC
            });
          }
          return originalItem;
        });
        var existingIds = new Set(latestPOData.itemsQtyArray.map(i => i.idRow));
        var addedItems = arrayItemRelated.filter(i => !existingIds.has(i.idRow)).map(newItem => _objectSpread(_objectSpread({}, newItem), {}, {
          itemQty: newItem.itemQty,
          qtyBuy: newItem.itemQty
        }));
        var finalItems = [...mergedItems, ...addedItems];
        var data = _objectSpread(_objectSpread({}, latestPOData), {}, {
          Converted: true,
          IpRelated: {
            id: ReferenceInfo,
            number: ReferenceInfoNumber
          },
          itemsQtyArray: finalItems
        });
        yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/update-purchaseOrder/").concat(id), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function onStatusUpdate(_x3, _x4) {
      return _ref13.apply(this, arguments);
    };
  }();
  var handleQty = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* () {
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/CalculateTotal"));
      } catch (error) {
        console.log(error);
      }
    });
    return function handleQty() {
      return _ref14.apply(this, arguments);
    };
  }();
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState62 = _slicedToArray(_useState61, 2),
    saving = _useState62[0],
    setSaving = _useState62[1];
  {/** loading End */}
  var handleSubmit = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var data = {
        POID: id,
        itemPurchaseDate,
        itemPurchaseNumber,
        manufacturer,
        manufacturerID,
        status: "UnPaid",
        manufacturerNumber,
        description,
        Create,
        totalUSD,
        total,
        totalFC,
        items: arrayItemRelated,
        reason,
        projectName,
        note
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_37__.ENDPOINT_URL, "/create-itemPurchase"), data);
        if (res) {
          invalidateCache('/itemPurchase');
          // Open Loading View
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.itemPurchaseNumber;
          yield onStatusUpdate(ReferenceInfo, ReferenceInfoNumber);
          yield handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
          yield handleQty();
          yield handleUpdatePurchase();
          handleOpen();
        } else {
          console.log('An Error as Occur');
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x5) {
      return _ref15.apply(this, arguments);
    };
  }();
  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    sideBar = _React$useState0[0],
    setSideBar = _React$useState0[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState64 = _slicedToArray(_useState63, 2),
    search2 = _useState64[0],
    setSearch2 = _useState64[1];
  var handleSearch2 = e => {
    var value = e.target.value;
    setSearch2(value);
  };
  var newArray2 = search2 !== '' ? items.filter(Item => Item.itemName && Item.itemName.itemName.toLowerCase().includes(search2.toLowerCase()) || Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) || Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase())) : items;
  var tableRows = reason !== 'Other' ? newArray2.map((Item, i) => {
    var _Item$totalAmountUSD, _Item$fcConvertToUsdT;
    var related = itemArray.find(row => row.idRow === Item.idRow);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: Item.idRow
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "newDescription",
      value: Item.newDescription,
      multiline: true,
      placeholder: "Note/Header",
      rows: 2,
      onChange: e => handleChange(e, Item.idRow),
      sx: {
        width: '300px',
        backgroundColor: 'white',
        fontWeight: 'bold'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Clear",
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => handleShowAutocomplete(Item.idRow),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
      style: {
        color: '#202a5a'
      }
    })))) : Item.itemName.itemName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        fontSize: '16px',
        fontWeight: 'bold'
      }
    }, Item.itemName.itemName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "itemDescription",
      value: Item.itemDescription,
      multiline: true,
      placeholder: "Description",
      rows: 3,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      disabled: user.data.role === 'User',
      sx: {
        width: '300px',
        backgroundColor: 'white',
        fontSize: 12
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Clear",
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => handleShowAutocomplete(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
      style: {
        color: '#202a5a'
      }
    })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      disableClearable: true,
      options: filterItemInformation,
      getOptionLabel: option => option.itemName + '/' + option.itemBrand,
      renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
        sx: {
          backgroundColor: '#f2f2f2'
        }
      }), option.itemName + '/' + option.itemBrand),
      renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
        multiline: true,
        rows: 4
      }, params, {
        required: true
      })),
      inputValue: inputValue,
      onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
      size: "small",
      onInputChange: (event, newInputValue) => setInputValue(newInputValue),
      filterOptions: (options, _ref16) => {
        var inputValue = _ref16.inputValue;
        return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
      },
      PaperComponent: _ref17 => {
        var children = _ref17.children,
          other = _objectWithoutProperties(_ref17, _excluded4);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, other, {
          sx: {
            backgroundColor: 'white',
            zIndex: 10
          }
        }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
          onClick: e => handleOpenOpenAutocomplete2(e),
          disabled: user.data.role === 'User',
          onMouseDown: e => e.preventDefault(),
          className: "btnCustomer7",
          style: {
            width: '100%'
          }
        }, "ADD NEW Item"));
      },
      sx: {
        width: '300px',
        backgroundColor: 'white'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "itemQty",
      id: "itemQty",
      label: "Qty",
      value: Item.itemQty,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      required: true,
      name: "itemRate",
      id: "itemRate",
      label: "Price$",
      value: Item.itemRate,
      helperText: 'Purchase Cost: $' + Item.cost,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      required: true,
      name: "totalAmountFC",
      id: "totalAmountFC",
      value: Item.totalAmountFC,
      label: "FC",
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      required: true,
      name: "Taux",
      id: "Taux",
      value: Item.Taux,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      required: true,
      name: "totalAmount",
      id: "totalAmount",
      value: Item.totalAmount,
      label: "$",
      size: "small",
      onChange: e => handleChange(e, Item.idRow),
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Cost USD: ", (_Item$totalAmountUSD = Item.totalAmountUSD) === null || _Item$totalAmountUSD === void 0 ? void 0 : _Item$totalAmountUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "amountTotalInvoice"
    }, (_Item$fcConvertToUsdT = Item.fcConvertToUsdTotal) === null || _Item$fcConvertToUsdT === void 0 ? void 0 : _Item$fcConvertToUsdT.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
  }) : null;
  var tableRows2 = newArray2.map((Item, i) => {
    var _Item$totalAmountUSD2, _Item$fcConvertToUsdT2;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: Item.idRow
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "newDescription",
      value: Item.newDescription,
      multiline: true,
      placeholder: "Note/Header",
      rows: 2,
      onChange: e => handleChange(e, Item.idRow),
      sx: {
        width: '300px',
        backgroundColor: 'white',
        fontWeight: 'bold'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Clear",
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => handleShowAutocomplete(Item.idRow),
      style: {
        position: 'relative',
        float: 'right'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
      style: {
        color: '#202a5a'
      }
    })))) : Item.itemName.itemName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        gap: '30px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      sx: {
        fontSize: '16px',
        fontWeight: 'bold'
      }
    }, Item.itemName.itemName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "itemDescription",
      value: Item.itemDescription,
      multiline: true,
      placeholder: "Description",
      rows: 3,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      disabled: user.data.role === 'User',
      sx: {
        width: '300px',
        backgroundColor: 'white',
        fontSize: 12
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Clear",
      placement: "top"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => handleShowAutocomplete(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
      style: {
        color: '#202a5a'
      }
    })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      disableClearable: true,
      options: filterItemInformation,
      getOptionLabel: option => option.itemName + '/' + option.itemBrand,
      renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
        sx: {
          backgroundColor: '#f2f2f2'
        }
      }), option.itemName + '/' + option.itemBrand),
      renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({
        multiline: true,
        rows: 4
      }, params, {
        required: true
      })),
      inputValue: inputValue,
      onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
      size: "small",
      onInputChange: (event, newInputValue) => setInputValue(newInputValue),
      filterOptions: (options, _ref18) => {
        var inputValue = _ref18.inputValue;
        return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
      },
      PaperComponent: _ref19 => {
        var children = _ref19.children,
          other = _objectWithoutProperties(_ref19, _excluded5);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, other, {
          sx: {
            backgroundColor: 'white',
            zIndex: 10
          }
        }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
          onClick: e => handleOpenOpenAutocomplete2(e),
          disabled: user.data.role === 'User',
          onMouseDown: e => e.preventDefault(),
          className: "btnCustomer7",
          style: {
            width: '100%'
          }
        }, "ADD NEW Item"));
      },
      sx: {
        width: '300px',
        backgroundColor: 'white'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: "itemQty",
      id: "itemQty",
      label: "Qty",
      value: Item.itemQty,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      required: true,
      name: "itemRate",
      id: "itemRate",
      label: "Price$",
      value: Item.itemRate,
      helperText: 'Purchase Cost: $' + Item.cost,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        display: 'flex',
        gap: '10px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      required: true,
      name: "totalAmountFC",
      id: "totalAmountFC",
      value: Item.totalAmountFC,
      label: "FC",
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      required: true,
      name: "Taux",
      id: "Taux",
      value: Item.Taux,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      required: true,
      name: "totalAmount",
      id: "totalAmount",
      value: Item.totalAmount,
      label: "$",
      size: "small",
      onChange: e => handleChange(e, Item.idRow),
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Cost USD: ", (_Item$totalAmountUSD2 = Item.totalAmountUSD) === null || _Item$totalAmountUSD2 === void 0 ? void 0 : _Item$totalAmountUSD2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "amountTotalInvoice"
    }, (_Item$fcConvertToUsdT2 = Item.fcConvertToUsdTotal) === null || _Item$fcConvertToUsdT2 === void 0 ? void 0 : _Item$fcConvertToUsdT2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
      title: "Delete",
      sx: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => deleteItem(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "New-Row",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => addItemRow(i),
      disabled: reason === 'Project'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
      style: {
        color: '#202a5a'
      }
    }))))));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_27__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Make new Item Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_45__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_56__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_55__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_51__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_32__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_29__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SideMaintenance2__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_30__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_12__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_41__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_42__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_40__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_43__.DatePicker, {
    required: true,
    name: "itemPurchaseDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_44___default()(itemPurchaseDate),
    onChange: date => setItemPurchaseDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "itemPurchaseNumber"
  }, "Item Purchase Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disabled: true,
    type: "number",
    id: "itemPurchaseNumber",
    name: "itemPurchaseNumber",
    label: "Item Purchase Number",
    value: '00' + itemPurchaseNumber,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "IP")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 4
  }, manufacturer !== null && manufacturer !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, manufacturer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleClearCustomer,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    disableClearable: true,
    options: supplier,
    getOptionLabel: option => option.supplierName + ' | ' + option.storeName,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], props, " ", option.supplierName, " | ", option.storeName, " "),
    onChange: (e, newValue) => {
      handleChangeSupplier(newValue);
    },
    inputValue: inputValue3,
    onInputChange: (event, newInputValue) => {
      setInputValue3(newInputValue);
    },
    filterOptions: (options, _ref20) => {
      var inputValue = _ref20.inputValue;
      return options.filter(option => option.supplierName.toLowerCase().includes(inputValue.toLowerCase()) || option.storeName.toLowerCase().includes(inputValue.toLowerCase()) || option.description.toLowerCase().includes(inputValue.toLowerCase()));
    },
    PaperComponent: _ref21 => {
      var children = _ref21.children,
        other = _objectWithoutProperties(_ref21, _excluded6);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, other, {
        sx: {
          backgroundColor: 'white',
          left: '0',
          marginTop: '10px'
        }
      }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: e => handleOpenOpenAutocomplete1(e),
        disabled: user.data.role === 'User',
        onMouseDown: e => e.preventDefault(),
        className: "btnCustomer7",
        style: {
          width: '100%'
        }
      }, "ADD NEW SUPPLIER")));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, params, {
      label: "Manufacturer",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "manufacturerNumber",
    name: "manufacturerNumber",
    label: "Reference",
    value: manufacturerNumber,
    onChange: e => setManufacturerNumber(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "reason"
  }, "Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    disabled: true,
    required: true,
    id: "reason",
    value: reason !== undefined ? reason : '',
    onChange: e => handleReason(e),
    name: "reason",
    label: "Reason"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "Project"
  }, "Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "Maintenance"
  }, "Maintenance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "Invoice"
  }, "Invoice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "Other"
  }, "Other")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12
  }, reason === 'Other' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "description",
    name: "description",
    label: "Description",
    value: description,
    onChange: e => setDescription(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '80px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, projectName !== undefined ? projectName.name : '')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'fixed',
      zIndex: 1,
      float: 'right',
      right: '-6px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: addItem,
    disabled: reason === 'Project' || reason === 'Maintenance'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    sx: {
      marginLeft: '-15px'
    }
  }, reason === 'Project' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Search",
    id: "search2",
    value: search2,
    variant: "standard",
    onChange: handleSearch2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Price$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total Paid"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, tableRows, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "totalFC",
    size: "small",
    label: "Amount Fc",
    value: totalFC,
    sx: {
      width: '150px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "FC")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "total",
    size: "small",
    label: "Amount $",
    value: total,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "totalUSD",
    size: "small",
    label: "Total USD",
    value: totalUSD,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "$")
  }))))))), reason === 'Maintenance' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Search",
    id: "search2",
    value: search2,
    variant: "standard",
    onChange: handleSearch2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Price$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total Paid"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, tableRows, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "totalFC",
    size: "small",
    label: "Amount Fc",
    value: totalFC,
    sx: {
      width: '150px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "FC")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "total",
    size: "small",
    label: "Amount $",
    value: total,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "totalUSD",
    size: "small",
    label: "Total USD",
    value: totalUSD,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "$")
  }))))))), reason === 'Invoice' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Search",
    id: "search2",
    value: search2,
    variant: "standard",
    onChange: handleSearch2
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Price$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total Paid"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, tableRows, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "totalFC",
    size: "small",
    label: "Amount Fc",
    value: totalFC,
    sx: {
      width: '150px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "FC")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "total",
    size: "small",
    label: "Amount $",
    value: total,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "totalUSD",
    size: "small",
    label: "Total USD",
    value: totalUSD,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "$")
  }))))))), reason === 'Other' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Price$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, tableRows2, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 2
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "totalFC",
    size: "small",
    label: "Amount Fc",
    value: totalFC,
    sx: {
      width: '150px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "FC")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "total",
    size: "small",
    label: "Amount $",
    value: total,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "$")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "totalUSD",
    size: "small",
    label: "Total USD",
    value: totalUSD,
    sx: {
      width: '120px',
      backgroundColor: 'white'
    },
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "$")
  }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "note",
    name: "note",
    multiline: true,
    rows: 4,
    value: note,
    label: "Note",
    onChange: e => setNote(e.target.value),
    sx: {
      width: '60%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12
  }, saving !== 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "btnCustomer6",
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "Saving...")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: openBack,
    onClose: handleCloseBack,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleCloseBack,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Do you want to stop creating customer ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop creating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate('/PurchaseOrderViewAdmin'),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: handleCloseBack,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: openAutocomplete2,
    onClose: handleCloseOpenAutocomplete2,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style2), {}, {
      width: 800
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleCloseOpenAutocomplete2,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '600px',
      padding: '20px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_54__["default"], {
    onCreateOption: handleCreateItem,
    onClose: handleCloseOpenAutocomplete2
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: openAutocomplete1,
    onClose: handleCloseOpenAutocomplete1,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style2), {}, {
      width: 800
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleCloseOpenAutocomplete1,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: '600px',
      padding: '20px',
      overflow: 'hidden',
      overflowY: 'scroll'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Supplier_SupplierForm2__WEBPACK_IMPORTED_MODULE_57__["default"], {
    onCreateOption: handleCreateCustomer,
    onClose: handleCloseOpenAutocomplete1
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_20__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_48__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => navigate('/PurchaseOrderViewAdmin'),
    className: "btnCustomer"
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_20__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_48__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_47__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      color: 'red'
    }
  }, "Saving Failed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: loadingOpenModalUpdate,
    onClose: handleCloseUpdate,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_20__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_48__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCloseUpdate,
    className: "btnCustomer"
  }, "Close"))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConvertPoToIP);

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/native.js"
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/native.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID: (crypto__WEBPACK_IMPORTED_MODULE_0___default().randomUUID)
});

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/regex.js"
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/regex.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/rng.js"
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/rng.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    crypto__WEBPACK_IMPORTED_MODULE_0___default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/stringify.js"
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/stringify.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-node/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/v4.js"
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v4.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-node/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-node/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-node/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ },

/***/ "./node_modules/uuid/dist/esm-node/validate.js"
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/validate.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-node/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUHVyY2hhc2VPcmRlcl9Db252ZXJ0UG9Ub0lQX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyxnQjs7Ozs7Ozs7Ozs7Ozs7OztBQ1pEOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLFNBQVMsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05WOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLDBCQUEwQixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjNCOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLHlCQUF5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMUIsQ0FBbUQ7QUFDZ0I7QUFDM0M7QUFDRTtBQUMwQjtBQUNzQjtBQUNSO0FBQ2Q7QUFDeUs7QUFDN0o7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ1E7QUFDQTtBQUNjO0FBQ0k7QUFDekM7QUFDaUY7QUFDeEQ7QUFDeEI7QUFDZ0M7QUFDUztBQUNhO0FBQ2hCO0FBQ0o7QUFDbEM7QUFDNEI7QUFDUTtBQUNWO0FBQ0w7QUFDUTtBQUMrQjtBQUN0QztBQUNrQjtBQUNwQjtBQUNRO0FBQ0E7QUFDUTtBQUNSO0FBR3RELElBQU1vRSxZ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QUNGLENBRUosQ0FDQSxDQUNKLENBQUM7QUFFVjtBQUVBLGlFQUFlOEQsYUFBYSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDenREQTtBQUM1QixpRUFBZTtBQUNmLGNBQWMsMERBQWlCO0FBQy9CLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7QUNIRCxpRUFBZSxjQUFjLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUcseUNBQXlDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeEc7QUFDNUIsdUNBQXVDOztBQUV2QztBQUNlO0FBQ2Y7QUFDQSxJQUFJLDREQUFxQjtBQUN6QjtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1hxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyx3REFBUTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxTQUFTLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaENTO0FBQ047QUFDc0I7O0FBRWpEO0FBQ0EsTUFBTSxrREFBTTtBQUNaLFdBQVcsa0RBQU07QUFDakI7O0FBRUE7QUFDQSxpREFBaUQsK0NBQUcsS0FBSzs7QUFFekQ7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7O0FBRUEsb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFNBQVMsOERBQWU7QUFDeEI7O0FBRUEsaUVBQWUsRUFBRSxFOzs7Ozs7Ozs7Ozs7Ozs7QUM1QmM7O0FBRS9CO0FBQ0EscUNBQXFDLGlEQUFLO0FBQzFDOztBQUVBLGlFQUFlLFFBQVEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2suanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BZGQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9EcmFnSW5kaWNhdG9yUm91bmRlZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1JlbW92ZUNpcmNsZU91dGxpbmUuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L1B1cmNoYXNlT3JkZXIvQ29udmVydFBvVG9JUC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLW5vZGUvcmVnZXguanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLW5vZGUvcm5nLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS92NC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS92YWxpZGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNMjAgMTFINy44M2w1LjU5LTUuNTlMMTIgNGwtOCA4IDggOCAxLjQxLTEuNDFMNy44MyAxM0gyMHpcIlxufSksICdBcnJvd0JhY2snKTsiLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xOSAxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2elwiXG59KSwgJ0FkZCcpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTExIDE4YzAgMS4xLS45IDItMiAycy0yLS45LTItMiAuOS0yIDItMiAyIC45IDIgMm0tMi04Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMm0wLTZjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0ybTYgNGMxLjEgMCAyLS45IDItMnMtLjktMi0yLTItMiAuOS0yIDIgLjkgMiAyIDJtMCAyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMm0wIDZjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yXCJcbn0pLCAnRHJhZ0luZGljYXRvclJvdW5kZWQnKTsiLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk03IDExdjJoMTB2LTJ6bTUtOUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMm0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOFwiXG59KSwgJ1JlbW92ZUNpcmNsZU91dGxpbmUnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGVNYWludGVuYW5jZTIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGVNYWludGVuYW5jZTInO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgUGFwZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgc3R5bGVkLCBCb3gsIEF1dG9jb21wbGV0ZSwgTW9kYWwsIEJhY2tkcm9wLCBUYWJsZUNvbnRhaW5lciwgT3V0bGluZWRJbnB1dCwgSW5wdXRBZG9ybm1lbnQsIERpdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgQWRkLCBBcnJvd1Vwd2FyZE91dGxpbmVkLCBEcmFnSW5kaWNhdG9yUm91bmRlZCwgUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IERlbW9Db250YWluZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL2ludGVybmFscy9kZW1vJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0xvY2FsaXphdGlvblByb3ZpZGVyJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9EYXRlUGlja2VyJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IEN1c3RvbWVyRm9ybVZpZXcyIGZyb20gJy4uL0N1c3RvbWVyVklldy9DdXN0b21lckZvcm1WaWV3Mic7XHJcbmltcG9ydCBDbG9zZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IEl0ZW1Gb3JtVmlldzIgZnJvbSAnLi4vSXRlbVZpZXcvSXRlbUZvcm1WaWV3Mic7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4uLy4uL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi4vLi4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5pbXBvcnQgU3VwcGxpZXJGb3JtMiBmcm9tICcuLi9TdXBwbGllci9TdXBwbGllckZvcm0yJztcclxuXHJcblxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBCbGFja1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3Qgc3R5bGUyID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogODAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcblxyXG5mdW5jdGlvbiBDb252ZXJ0UG9Ub0lQKCkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW29wZW5CYWNrLCBzZXRPcGVuQmFja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5CYWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbkJhY2sodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQmFjayhmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbaXRlbVB1cmNoYXNlRGF0ZSwgc2V0SXRlbVB1cmNoYXNlRGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgcmV0dXJuIGRheWpzKGRhdGUpXHJcbiAgfSk7XHJcbiAgY29uc3QgW2l0ZW1QdXJjaGFzZU51bWJlciwgc2V0SXRlbVB1cmNoYXNlTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFttYW51ZmFjdHVyZXIsIHNldE1hbnVmYWN0dXJlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbWFpbnRlbmFuY2UsIHNldE1haW50ZW5hbmNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbm90ZSwgc2V0Tm90ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW5wdXRWYWx1ZTIsIHNldElucHV0VmFsdWUyXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaW5wdXRWYWx1ZTQsIHNldElucHV0VmFsdWU0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbWFudWZhY3R1cmVyTnVtYmVyLCBzZXRNYW51ZmFjdHVyZXJOdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW21hbnVmYWN0dXJlcklELCBzZXRNYW51ZmFjdHVyZXJJRF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3VwcGxpZXIsIHNldFN1cHBsaWVyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaW5wdXRWYWx1ZTMsIHNldElucHV0VmFsdWUzXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt0b3RhbFVTRCwgc2V0VG90YWxVU0RdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG90YWxGQywgc2V0VG90YWxGQ10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBkYXRlQ29tbWVudCA9IGRheWpzKERhdGUubm93KCkpLmZvcm1hdCgnREQvTU0vWVlZWScpO1xyXG4gIGNvbnN0IENyZWF0ZSA9IHtcclxuICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBDUkVBVEVEICcsXHJcbiAgICBkYXRlQ29tbWVudFxyXG4gIH1cclxuICBjb25zdCBbcHJvamVjdE5hbWUsIHNldFByb2plY3ROYW1lXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbcHVyY2hhc2UsIHNldFB1cmNoYXNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbWFpbnRlbmFuY2VJbmZvLCBzZXRNYWludGVuYW5jZUluZm9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpbnZvaWNlSW5mbywgc2V0SW52b2ljZUluZm9dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtpdGVtQXJyYXksIHNldEl0ZW1BcnJheV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3B1cmNoYXNlT3JkZXJEYXRhLCBzZXRQdXJjaGFzZU9yZGVyRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB7LyoqIEl0ZW0gSW5mbyBTdGFydCAqLyB9XHJcbiAgY29uc3QgW0l0ZW1JbmZvcm1hdGlvbiwgc2V0SXRlbUluZm9ybWF0aW9uXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaW52b2ljZSwgc2V0SW52b2ljZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVGZXRjaCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNTdXBwbGllciA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L1N1cHBsaWVyYClcclxuICAgICAgICBzZXRTdXBwbGllcihyZXNTdXBwbGllci5kYXRhLmRhdGEucmV2ZXJzZSgpKVxyXG4gICAgICAgIGNvbnN0IHJlc0l0ZW1PdXQgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbGFzdC1zYXZlZC1pdGVtUHVyY2hhc2VgKVxyXG4gICAgICAgIHNldEl0ZW1QdXJjaGFzZU51bWJlcigocGFyc2VJbnQocmVzSXRlbU91dC5kYXRhPy5kYXRhPy5pdGVtUHVyY2hhc2VOdW1iZXIgfHwgcmVzSXRlbU91dC5kYXRhPy5pdGVtUHVyY2hhc2VOdW1iZXIgfHwgMCkpICsgMSlcclxuICAgICAgICBjb25zdCByZXNJdGVtID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbWApXHJcbiAgICAgICAgc2V0SXRlbUluZm9ybWF0aW9uKHJlc0l0ZW0uZGF0YS5kYXRhLnJldmVyc2UoKSlcclxuICAgICAgICBjb25zdCByZXNQcm9qZWN0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcHJvamVjdHNgKVxyXG4gICAgICAgIHNldFByb2plY3QocmVzUHJvamVjdC5kYXRhLmRhdGEucmV2ZXJzZSgpKTtcclxuICAgICAgICBjb25zdCByZXNNYWludGVuYW5jZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L21haW50ZW5hbmNlP3N1bW1hcnk9dHJ1ZWApXHJcbiAgICAgICAgc2V0TWFpbnRlbmFuY2UocmVzTWFpbnRlbmFuY2UuZGF0YS5kYXRhLnJldmVyc2UoKSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcmF0ZWApXHJcbiAgICAgICAgcmVzLmRhdGEuZGF0YS5tYXAoKHJvdykgPT4gc2V0UmF0ZShyb3cucmF0ZSkpXHJcbiAgICAgICAgY29uc3QgcmVzUHVyY2hhc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wdXJjaGFzZT9zdW1tYXJ5PXRydWVgKVxyXG4gICAgICAgIGNvbnN0IHJlc0ludm9pY2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pbnZvaWNlP3N1bW1hcnk9dHJ1ZWApXHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IHJlc0ludm9pY2UuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+ICFyZXNQdXJjaGFzZS5kYXRhLmRhdGEuc29tZSgoSXRlbSkgPT4gSXRlbS5faWQgPT09IHJvdy5SZWZlcmVuY2VOYW1lMikgJiYgIXJlc01haW50ZW5hbmNlLmRhdGEuZGF0YS5zb21lKChJdGVtMikgPT4gSXRlbTIuUmVmZXJlbmNlTmFtZSA9PT0gcm93Ll9pZCAmJiBJdGVtMi5faWQgPT09IHJvdy5SZWZlcmVuY2VOYW1lKSlcclxuICAgICAgICBzZXRJbnZvaWNlKG5ld0RhdGEpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUZldGNoKClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1wdXJjaGFzZU9yZGVyLyR7aWR9YClcclxuICAgICAgICBjb25zdCBwb0RhdGEgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgIHNldFB1cmNoYXNlT3JkZXJEYXRhKHBvRGF0YSk7XHJcbiAgICAgICAgc2V0UmVhc29uKHBvRGF0YS5yZWFzb24pO1xyXG4gICAgICAgIHNldERlc2NyaXB0aW9uKHBvRGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgc2V0SXRlbXMocG9EYXRhLml0ZW1zUXR5QXJyYXkubWFwKChyb3cpID0+ICh7XHJcbiAgICAgICAgICBpZFJvdzogcm93LmlkUm93LFxyXG4gICAgICAgICAgaXRlbU5hbWU6IHJvdy5pdGVtTmFtZSxcclxuICAgICAgICAgIGl0ZW1EZXNjcmlwdGlvbjogcm93Lml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uOiByb3cubmV3RGVzY3JpcHRpb24sXHJcbiAgICAgICAgICBvcmRlcmVkUXR5OiByb3cuaXRlbVF0eSxcclxuICAgICAgICAgIGl0ZW1RdHk6IHJvdy5xdHlCdXksXHJcbiAgICAgICAgICBpdGVtUmF0ZTogcm93Lml0ZW1SYXRlLFxyXG4gICAgICAgICAgVGF1eDogcm93LlRhdXgsXHJcbiAgICAgICAgICBjb3N0OiAwLFxyXG4gICAgICAgICAgYW1vdW50RmM6IDAsXHJcbiAgICAgICAgICB0b3RhbEFtb3VudFVTRDogcm93LnRvdGFsQW1vdW50VVNELFxyXG4gICAgICAgICAgZmNDb252ZXJ0VG9Vc2Q6IHJvdy5mY0NvbnZlcnRUb1VzZCxcclxuICAgICAgICAgIGZjQ29udmVydFRvVXNkVG90YWw6IHJvdy5mY0NvbnZlcnRUb1VzZFRvdGFsLFxyXG4gICAgICAgICAgdG90YWxBbW91bnQ6IHJvdy50b3RhbEFtb3VudCxcclxuICAgICAgICAgIHRvdGFsQW1vdW50RkM6IHJvdy50b3RhbEFtb3VudEZDXHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICBzZXREZXNjcmlwdGlvbihyZXMuZGF0YS5kYXRhLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICBzZXRNYW51ZmFjdHVyZXIocmVzLmRhdGEuZGF0YS5tYW51ZmFjdHVyZXIpO1xyXG4gICAgICAgIHNldE1hbnVmYWN0dXJlck51bWJlcihOdW1iZXIocmVzLmRhdGE/LmRhdGE/Lm1hbnVmYWN0dXJlck51bWJlciB8fCByZXMuZGF0YT8ubWFudWZhY3R1cmVyTnVtYmVyIHx8IDApKTtcclxuICAgICAgICBzZXRQcm9qZWN0TmFtZSh7XHJcbiAgICAgICAgICBfaWQ6IHJlcy5kYXRhLmRhdGEucmVmZXJlbmNlLl9pZCxcclxuICAgICAgICAgIG5hbWU6IHJlcy5kYXRhLmRhdGEucmVmZXJlbmNlLnJlZmVyZW5jZU5hbWVcclxuICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbaWRdKVxyXG5cclxuICBjb25zdCBoYW5kbGVSZWFzb24gPSAoZSkgPT4ge1xyXG4gICAgc2V0UmVhc29uKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgc2V0UHJvamVjdE5hbWUoe30pXHJcbiAgICBzZXREZXNjcmlwdGlvbihcIlwiKVxyXG4gICAgc2V0SXRlbXMoW10pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQdXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChyZWFzb24gPT09ICdQcm9qZWN0Jykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXNQdXJjaGFzZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3B1cmNoYXNlP3N1bW1hcnk9dHJ1ZWApXHJcbiAgICAgICAgICBzZXRQdXJjaGFzZShyZXNQdXJjaGFzZS5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnByb2plY3ROYW1lLl9pZCA9PT0gcHJvamVjdE5hbWUuX2lkKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChyZWFzb24gPT09ICdNYWludGVuYW5jZScpIHtcclxuICAgICAgICBjb25zdCByZXNNID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vbWFpbnRlbmFuY2U/c3VtbWFyeT10cnVlYClcclxuICAgICAgICBzZXRNYWludGVuYW5jZUluZm8ocmVzTS5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93Ll9pZCA9PT0gcHJvamVjdE5hbWUuX2lkKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAocmVhc29uID09PSAnSW52b2ljZScpIHtcclxuICAgICAgICBjb25zdCByZXNNID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaW52b2ljZT9zdW1tYXJ5PXRydWVgKVxyXG4gICAgICAgIHNldEludm9pY2VJbmZvKHJlc00uZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5faWQgPT09IHByb2plY3ROYW1lLl9pZCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2hQdXIoKVxyXG4gIH0sIFtyZWFzb24sIHByb2plY3ROYW1lXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSXRlbSA9IChpZFJvdywgbmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IG5ld1ZhbHVlXHJcbiAgICBzZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93LmlkUm93ID09PSBpZFJvdyA/IHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogc2VsZWN0ZWRPcHRpb25zPy5faWQsXHJcbiAgICAgICAgaXRlbU5hbWU6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbU5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogc2VsZWN0ZWRPcHRpb25zPy5pdGVtRGVzY3JpcHRpb25cclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgaWRSb3cpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5pdGVtc107XHJcbiAgICBjb25zdCBpID0gaXRlbXMuZmluZEluZGV4KEl0ZW0gPT4gSXRlbS5pZFJvdyA9PT0gaWRSb3cpXHJcbiAgICBsaXN0W2ldW25hbWVdID0gdmFsdWVcclxuICAgIGxpc3RbaV1bJ3RvdGFsQW1vdW50VVNEJ10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtUmF0ZSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWydmY0NvbnZlcnRUb1VzZCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsndG90YWxBbW91bnRGQyddIC8gbGlzdFtpXVsnVGF1eCddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWydmY0NvbnZlcnRUb1VzZFRvdGFsJ10gPSBNYXRoLnJvdW5kKChwYXJzZUZsb2F0KGxpc3RbaV1bJ2ZjQ29udmVydFRvVXNkJ10pICsgcGFyc2VGbG9hdChsaXN0W2ldWyd0b3RhbEFtb3VudCddKSkgKiAxMDApIC8gMTAwO1xyXG5cclxuICAgIHNldEl0ZW1zKGxpc3QpO1xyXG4gIH1cclxuICBjb25zdCBhZGRJdGVtID0gKCkgPT4ge1xyXG4gICAgc2V0SXRlbXMoWy4uLml0ZW1zLCB7XHJcbiAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICBpdGVtTmFtZToge30sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgaXRlbVJhdGU6IDAsXHJcbiAgICAgIFRhdXg6IHJhdGUsXHJcbiAgICAgIGNvc3Q6IDAsXHJcbiAgICAgIGFtb3VudEZjOiAwLFxyXG4gICAgICB0b3RhbEFtb3VudFVTRDogMCxcclxuICAgICAgZmNDb252ZXJ0VG9Vc2Q6IDAsXHJcbiAgICAgIGZjQ29udmVydFRvVXNkVG90YWw6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICB0b3RhbEFtb3VudEZDOiAwXHJcbiAgICB9XSk7XHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW1Sb3cgPSAoaSkgPT4ge1xyXG4gICAgY29uc3QgbmV3SXRlbSA9IHtcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7fSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBUYXV4OiByYXRlLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgY29zdDogMCxcclxuICAgICAgYW1vdW50RmM6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50VVNEOiAwLFxyXG4gICAgICBmY0NvbnZlcnRUb1VzZDogMCxcclxuICAgICAgZmNDb252ZXJ0VG9Vc2RUb3RhbDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50RkM6IDBcclxuICAgIH1cclxuICAgIGNvbnN0IHVwZGF0ZSA9IFsuLi5pdGVtc107XHJcbiAgICB1cGRhdGUuc3BsaWNlKGkgKyAxLCAwLCBuZXdJdGVtKTtcclxuICAgIHNldEl0ZW1zKHVwZGF0ZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dBdXRvY29tcGxldGUgPSAoaWRSb3cpID0+IHtcclxuICAgIHNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBudWxsLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgaXRlbVJhdGU6IDAsXHJcbiAgICAgIFRhdXg6IHJhdGUsXHJcbiAgICAgIGNvc3Q6IDAsXHJcbiAgICAgIGFtb3VudEZjOiAwLFxyXG4gICAgICB0b3RhbEFtb3VudFVTRDogMCxcclxuICAgICAgZmNDb252ZXJ0VG9Vc2Q6IDAsXHJcbiAgICAgIGZjQ29udmVydFRvVXNkVG90YWw6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICB0b3RhbEFtb3VudEZDOiAwXHJcbiAgICB9IDogcm93KSlcclxuICB9XHJcbiAgY29uc3QgZGVsZXRlSXRlbSA9IGlkUm93ID0+IHtcclxuICAgIHNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLmZpbHRlcigoSXRlbSkgPT4gSXRlbS5pZFJvdyAhPT0gaWRSb3cpKTtcclxuICB9O1xyXG4gIGNvbnN0IFtvcGVuQXV0b2NvbXBsZXRlMSwgc2V0T3BlbkF1dG9jb21wbGV0ZTFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTEgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTEodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTEoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQ3VzdG9tZXIgPSAobmV3Q3VzdG9tZXIpID0+IHtcclxuICAgIHNldFN1cHBsaWVyKFtuZXdDdXN0b21lciwgLi4uc3VwcGxpZXJdKVxyXG4gIH1cclxuICBjb25zdCBbb3BlbkF1dG9jb21wbGV0ZTIsIHNldE9wZW5BdXRvY29tcGxldGUyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMiA9ICgpID0+IHtcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUl0ZW0gPSAobmV3SXRlbSkgPT4ge1xyXG4gICAgc2V0SXRlbUluZm9ybWF0aW9uKFtuZXdJdGVtLCAuLi5JdGVtSW5mb3JtYXRpb25dKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0MCA9IGl0ZW1zLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHBhcnNlRmxvYXQocm93LmZjQ29udmVydFRvVXNkVG90YWwpLCAwKVxyXG4gICAgc2V0VG90YWxVU0QocmVzdWx0MC50b0ZpeGVkKDIpKVxyXG4gICAgY29uc3QgcmVzdWx0MSA9IGl0ZW1zLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHBhcnNlRmxvYXQocm93LnRvdGFsQW1vdW50KSwgMClcclxuICAgIHNldFRvdGFsKHJlc3VsdDEudG9GaXhlZCgyKSlcclxuICAgIGNvbnN0IHJlc3VsdDIgPSBpdGVtcy5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyBwYXJzZUZsb2F0KHJvdy50b3RhbEFtb3VudEZDKSwgMClcclxuICAgIHNldFRvdGFsRkMocmVzdWx0Mi50b0ZpeGVkKDIpKVxyXG5cclxuICB9KVxyXG4gIHsvKiogSXRlbSBJbmZvIEVuZCAqLyB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVN1cHBsaWVyID0gKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBzdXBwbGllci5maW5kKChvcHRpb24pID0+IG9wdGlvbiA9PT0gbmV3VmFsdWUpXHJcbiAgICBzZXRNYW51ZmFjdHVyZXIoc2VsZWN0ZWRPcHRpb25zPy5zdG9yZU5hbWUpO1xyXG4gICAgc2V0TWFudWZhY3R1cmVySUQoc2VsZWN0ZWRPcHRpb25zPy5faWQpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsZWFyQ3VzdG9tZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRNYW51ZmFjdHVyZXIobnVsbClcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbHRlckl0ZW1JbmZvcm1hdGlvbiA9IEl0ZW1JbmZvcm1hdGlvbi5maWx0ZXIob3B0aW9uID0+ICFpdGVtcy5maW5kKChyb3cpID0+IG9wdGlvbi5faWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkICYmIG9wdGlvbi50eXBlSXRlbSA9PT0gXCJHb29kc1wiKSlcclxuICB7LyoqIHB1cmNoYXNlIHN0YXJ0KiovIH1cclxuLy8gU2FmZSBVcGRhdGUgTG9naWM6IGhhbmRsZVVwZGF0ZVB1cmNoYXNlIGFuZCBvblN0YXR1c1VwZGF0ZSB3aWxsIG5vdyBmZXRjaCBhbmQgbWVyZ2UgcmVjb3JkcyBvbi10aGUtZmx5IGR1cmluZyBzdWJtaXNzaW9uXHJcbmNvbnN0IGFycmF5SXRlbVJlbGF0ZWQgPSBpdGVtcy5maWx0ZXIoKHJvdykgPT4gcm93Lml0ZW1RdHkgIT09IDAgfHwgcm93Lm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZVB1cmNoYXNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGFycmF5SXRlbVJlbGF0ZWQubGVuZ3RoID09PSAwIHx8ICFwcm9qZWN0TmFtZT8uX2lkKSByZXR1cm47XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHJlYXNvbiA9PT0gJ1Byb2plY3QnKSB7XHJcbiAgICAgICAgY29uc3QgcmVzUHVyID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcHVyY2hhc2U/c3VtbWFyeT10cnVlYCk7XHJcbiAgICAgICAgY29uc3QgcmVsZXZhbnRQdXJjaGFzZXMgPSByZXNQdXIuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5wcm9qZWN0TmFtZT8uX2lkID09PSBwcm9qZWN0TmFtZS5faWQpO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IHB1cmNoYXNlUm93IG9mIHJlbGV2YW50UHVyY2hhc2VzKSB7XHJcbiAgICAgICAgICBjb25zdCBjdXJyZW50UmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LXB1cmNoYXNlLyR7cHVyY2hhc2VSb3cuX2lkfWApO1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudERhdGEgPSBjdXJyZW50UmVzLmRhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVkSXRlbXMgPSBjdXJyZW50RGF0YS5pdGVtcy5tYXAoKEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgUmVsYXRlZEl0ZW0gPSBhcnJheUl0ZW1SZWxhdGVkLmZpbmQoKEl0ZW0yKSA9PiBJdGVtMi5pZFJvdyA9PT0gSXRlbS5pZFJvdyk7XHJcbiAgICAgICAgICAgIGlmIChSZWxhdGVkSXRlbSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW1CdXkgPSBwYXJzZUZsb2F0KEl0ZW0uaXRlbUJ1eSB8fCAwKSArIHBhcnNlRmxvYXQoUmVsYXRlZEl0ZW0uaXRlbVF0eSB8fCAwKTtcclxuICAgICAgICAgICAgICBjb25zdCBpdGVtQ29zdCA9IHBhcnNlRmxvYXQoUmVsYXRlZEl0ZW0uaXRlbVJhdGUgfHwgMCkgIT09IDAgPyBwYXJzZUZsb2F0KFJlbGF0ZWRJdGVtLml0ZW1SYXRlKSA6IHBhcnNlRmxvYXQoSXRlbS5pdGVtQ29zdCB8fCAwKTtcclxuICAgICAgICAgICAgICBjb25zdCB0b3RhbEdlbmVyYWxlID0gaXRlbUNvc3QgKiBpdGVtQnV5O1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLkl0ZW0sIGl0ZW1CdXksIGl0ZW1Db3N0LCB0b3RhbEdlbmVyYWxlIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIEl0ZW07XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvLyBBcHBlbmQgbWFudWFsbHkgYWRkZWQgaXRlbXMgdGhhdCB3ZXJlIG5vdCBvcmlnaW5hbGx5IGluIHRoZSBwdXJjaGFzZSBvcmRlclxyXG4gICAgICAgICAgY29uc3QgbmV3SXRlbXMgPSBhcnJheUl0ZW1SZWxhdGVkLmZpbHRlcigoSXRlbTIpID0+ICFjdXJyZW50RGF0YS5pdGVtcy5zb21lKChJdGVtKSA9PiBJdGVtLmlkUm93ID09PSBJdGVtMi5pZFJvdykpO1xyXG4gICAgICAgICAgbmV3SXRlbXMuZm9yRWFjaCgoUmVsYXRlZEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUJ1eSA9IHBhcnNlRmxvYXQoUmVsYXRlZEl0ZW0uaXRlbVF0eSB8fCAwKTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUNvc3QgPSBwYXJzZUZsb2F0KFJlbGF0ZWRJdGVtLml0ZW1SYXRlIHx8IDApICE9PSAwID8gcGFyc2VGbG9hdChSZWxhdGVkSXRlbS5pdGVtUmF0ZSkgOiBwYXJzZUZsb2F0KFJlbGF0ZWRJdGVtLmNvc3QgfHwgMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsR2VuZXJhbGUgPSBpdGVtQ29zdCAqIGl0ZW1CdXk7XHJcbiAgICAgICAgICAgIHVwZGF0ZWRJdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICBpZFJvdzogUmVsYXRlZEl0ZW0uaWRSb3csXHJcbiAgICAgICAgICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICAgICAgICAgIF9pZDogUmVsYXRlZEl0ZW0uaXRlbU5hbWU/Ll9pZCB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgaXRlbU5hbWU6IFJlbGF0ZWRJdGVtLml0ZW1OYW1lPy5pdGVtTmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBuZXdEZXNjcmlwdGlvbjogUmVsYXRlZEl0ZW0ubmV3RGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uOiBSZWxhdGVkSXRlbS5pdGVtRGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICAgICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgaXRlbVF0eTogMCwgLy8gT3JpZ2luYWxseSByZXF1ZXN0ZWQgMFxyXG4gICAgICAgICAgICAgIGl0ZW1SYXRlOiBSZWxhdGVkSXRlbS5pdGVtUmF0ZSB8fCAwLFxyXG4gICAgICAgICAgICAgIGl0ZW1Db3N0OiBpdGVtQ29zdCxcclxuICAgICAgICAgICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgICAgICAgICBkaXNjb3VudDogMCxcclxuICAgICAgICAgICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICAgICAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgICAgICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICAgICAgICAgIHRvdGFsR2VuZXJhbGU6IHRvdGFsR2VuZXJhbGUsXHJcbiAgICAgICAgICAgICAgaXRlbUJ1eTogaXRlbUJ1eSxcclxuICAgICAgICAgICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICAgICAgICAgIHN0b2NrOiBSZWxhdGVkSXRlbS5zdG9jayB8fCAwLFxyXG4gICAgICAgICAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgICAgICAgICAgbmV3SXRlbU91dDogMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHB1cmNoYXNlQW1vdW50MiA9IHVwZGF0ZWRJdGVtcy5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyAocGFyc2VGbG9hdChyb3cudG90YWxHZW5lcmFsZSkgfHwgMCksIDApO1xyXG4gICAgICAgICAgYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLXB1cmNoYXNlLyR7cHVyY2hhc2VSb3cuX2lkfWAsIHsgaXRlbXM6IHVwZGF0ZWRJdGVtcywgcHVyY2hhc2VBbW91bnQyIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChyZWFzb24gPT09ICdNYWludGVuYW5jZScpIHtcclxuICAgICAgICBjb25zdCByZXNNID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vbWFpbnRlbmFuY2U/c3VtbWFyeT10cnVlYCk7XHJcbiAgICAgICAgY29uc3QgcmVsZXZhbnRNYWludGVuYW5jZSA9IHJlc00uZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5faWQgPT09IHByb2plY3ROYW1lLl9pZCk7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgbWFpbnRlbmFuY2VSb3cgb2YgcmVsZXZhbnRNYWludGVuYW5jZSkge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudFJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1tYWludGVuYW5jZS8ke21haW50ZW5hbmNlUm93Ll9pZH1gKTtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gY3VycmVudFJlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW1zID0gY3VycmVudERhdGEuaXRlbXMubWFwKChJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFJlbGF0ZWRJdGVtID0gYXJyYXlJdGVtUmVsYXRlZC5maW5kKChJdGVtMikgPT4gSXRlbTIuaWRSb3cgPT09IEl0ZW0uaWRSb3cpO1xyXG4gICAgICAgICAgICBpZiAoUmVsYXRlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICBjb25zdCBpdGVtQnV5ID0gcGFyc2VGbG9hdChJdGVtLml0ZW1CdXkgfHwgMCkgKyBwYXJzZUZsb2F0KFJlbGF0ZWRJdGVtLml0ZW1RdHkgfHwgMCk7XHJcbiAgICAgICAgICAgICAgY29uc3QgdG90YWxHZW5lcmFsZSA9IHBhcnNlRmxvYXQoUmVsYXRlZEl0ZW0uaXRlbVJhdGUgfHwgMCkgKiBpdGVtQnV5O1xyXG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLkl0ZW0sIGl0ZW1CdXksIHRvdGFsR2VuZXJhbGUgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gSXRlbTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vIEFwcGVuZCBtYW51YWxseSBhZGRlZCBpdGVtcyB0aGF0IHdlcmUgbm90IG9yaWdpbmFsbHkgaW4gdGhlIG1haW50ZW5hbmNlIHJlcXVlc3RcclxuICAgICAgICAgIGNvbnN0IG5ld0l0ZW1zID0gYXJyYXlJdGVtUmVsYXRlZC5maWx0ZXIoKEl0ZW0yKSA9PiAhY3VycmVudERhdGEuaXRlbXMuc29tZSgoSXRlbSkgPT4gSXRlbS5pZFJvdyA9PT0gSXRlbTIuaWRSb3cpKTtcclxuICAgICAgICAgIG5ld0l0ZW1zLmZvckVhY2goKFJlbGF0ZWRJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1CdXkgPSBwYXJzZUZsb2F0KFJlbGF0ZWRJdGVtLml0ZW1RdHkgfHwgMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsR2VuZXJhbGUgPSBwYXJzZUZsb2F0KFJlbGF0ZWRJdGVtLml0ZW1SYXRlIHx8IDApICogaXRlbUJ1eTtcclxuICAgICAgICAgICAgdXBkYXRlZEl0ZW1zLnB1c2goe1xyXG4gICAgICAgICAgICAgIGlkUm93OiBSZWxhdGVkSXRlbS5pZFJvdyxcclxuICAgICAgICAgICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgICAgICAgICAgX2lkOiBSZWxhdGVkSXRlbS5pdGVtTmFtZT8uX2lkIHx8IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBpdGVtTmFtZTogUmVsYXRlZEl0ZW0uaXRlbU5hbWU/Lml0ZW1OYW1lIHx8IFwiXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uOiBSZWxhdGVkSXRlbS5uZXdEZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICBpdGVtRGVzY3JpcHRpb246IFJlbGF0ZWRJdGVtLml0ZW1EZXNjcmlwdGlvbiB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgICAgICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICAgICAgICAgIGl0ZW1SYXRlOiBSZWxhdGVkSXRlbS5pdGVtUmF0ZSB8fCAwLFxyXG4gICAgICAgICAgICAgIGl0ZW1Db3N0OiBSZWxhdGVkSXRlbS5pdGVtUmF0ZSB8fCAwLFxyXG4gICAgICAgICAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICAgICAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgICAgICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgICAgICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgICAgICAgICAgdG90YWxHZW5lcmFsZTogdG90YWxHZW5lcmFsZSxcclxuICAgICAgICAgICAgICBpdGVtQnV5OiBpdGVtQnV5LFxyXG4gICAgICAgICAgICAgIGl0ZW1XZWlnaHQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgc3RvY2s6IFJlbGF0ZWRJdGVtLnN0b2NrIHx8IDAsXHJcbiAgICAgICAgICAgICAgaXRlbU91dDogMCxcclxuICAgICAgICAgICAgICBuZXdJdGVtT3V0OiAwXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLW1haW50ZW5hbmNlLyR7bWFpbnRlbmFuY2VSb3cuX2lkfWAsIHsgaXRlbXM6IHVwZGF0ZWRJdGVtcyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAocmVhc29uID09PSAnSW52b2ljZScpIHtcclxuICAgICAgICBjb25zdCByZXNJID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaW52b2ljZT9zdW1tYXJ5PXRydWVgKTtcclxuICAgICAgICBjb25zdCByZWxldmFudEludm9pY2VzID0gcmVzSS5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93Ll9pZCA9PT0gcHJvamVjdE5hbWUuX2lkKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBpbnZvaWNlUm93IG9mIHJlbGV2YW50SW52b2ljZXMpIHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRSZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaW52b2ljZS8ke2ludm9pY2VSb3cuX2lkfWApO1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudERhdGEgPSBjdXJyZW50UmVzLmRhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgICBjb25zdCB1cGRhdGVkSXRlbXMgPSBjdXJyZW50RGF0YS5pdGVtcy5tYXAoKEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgUmVsYXRlZEl0ZW0gPSBhcnJheUl0ZW1SZWxhdGVkLmZpbmQoKEl0ZW0yKSA9PiBJdGVtMi5pZFJvdyA9PT0gSXRlbS5pZFJvdyk7XHJcbiAgICAgICAgICAgIGlmIChSZWxhdGVkSXRlbSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW1CdXkgPSBwYXJzZUZsb2F0KEl0ZW0uaXRlbUJ1eSB8fCAwKSArIHBhcnNlRmxvYXQoUmVsYXRlZEl0ZW0uaXRlbVF0eSB8fCAwKTtcclxuICAgICAgICAgICAgICBjb25zdCB0b3RhbEdlbmVyYWxlID0gcGFyc2VGbG9hdChSZWxhdGVkSXRlbS5pdGVtUmF0ZSB8fCAwKSAqIGl0ZW1CdXk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uSXRlbSwgaXRlbUJ1eSwgdG90YWxHZW5lcmFsZSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBJdGVtO1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgLy8gQXBwZW5kIG1hbnVhbGx5IGFkZGVkIGl0ZW1zIHRoYXQgd2VyZSBub3Qgb3JpZ2luYWxseSBpbiB0aGUgaW52b2ljZSByZXF1ZXN0XHJcbiAgICAgICAgICBjb25zdCBuZXdJdGVtcyA9IGFycmF5SXRlbVJlbGF0ZWQuZmlsdGVyKChJdGVtMikgPT4gIWN1cnJlbnREYXRhLml0ZW1zLnNvbWUoKEl0ZW0pID0+IEl0ZW0uaWRSb3cgPT09IEl0ZW0yLmlkUm93KSk7XHJcbiAgICAgICAgICBuZXdJdGVtcy5mb3JFYWNoKChSZWxhdGVkSXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtQnV5ID0gcGFyc2VGbG9hdChSZWxhdGVkSXRlbS5pdGVtUXR5IHx8IDApO1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbEdlbmVyYWxlID0gcGFyc2VGbG9hdChSZWxhdGVkSXRlbS5pdGVtUmF0ZSB8fCAwKSAqIGl0ZW1CdXk7XHJcbiAgICAgICAgICAgIHVwZGF0ZWRJdGVtcy5wdXNoKHtcclxuICAgICAgICAgICAgICBpZFJvdzogUmVsYXRlZEl0ZW0uaWRSb3csXHJcbiAgICAgICAgICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICAgICAgICAgIF9pZDogUmVsYXRlZEl0ZW0uaXRlbU5hbWU/Ll9pZCB8fCBcIlwiLFxyXG4gICAgICAgICAgICAgICAgaXRlbU5hbWU6IFJlbGF0ZWRJdGVtLml0ZW1OYW1lPy5pdGVtTmFtZSB8fCBcIlwiXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBuZXdEZXNjcmlwdGlvbjogUmVsYXRlZEl0ZW0ubmV3RGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgaXRlbURlc2NyaXB0aW9uOiBSZWxhdGVkSXRlbS5pdGVtRGVzY3JpcHRpb24gfHwgXCJcIixcclxuICAgICAgICAgICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgICAgICAgICBpdGVtUmF0ZTogUmVsYXRlZEl0ZW0uaXRlbVJhdGUgfHwgMCxcclxuICAgICAgICAgICAgICBpdGVtQ29zdDogUmVsYXRlZEl0ZW0uaXRlbVJhdGUgfHwgMCxcclxuICAgICAgICAgICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgICAgICAgICBkaXNjb3VudDogMCxcclxuICAgICAgICAgICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICAgICAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgICAgICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICAgICAgICAgIHRvdGFsR2VuZXJhbGU6IHRvdGFsR2VuZXJhbGUsXHJcbiAgICAgICAgICAgICAgaXRlbUJ1eTogaXRlbUJ1eSxcclxuICAgICAgICAgICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICAgICAgICAgIHN0b2NrOiBSZWxhdGVkSXRlbS5zdG9jayB8fCAwLFxyXG4gICAgICAgICAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgICAgICAgICAgbmV3SXRlbU91dDogMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1pbnZvaWNlLyR7aW52b2ljZVJvdy5faWR9YCwgeyBpdGVtczogdXBkYXRlZEl0ZW1zIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gaGFuZGxlVXBkYXRlUHVyY2hhc2UgKENvbnZlcnQgUE8gU2FmZSBNZXJnZSk6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICB7LyoqIHB1cmNoYXNlIGVuZCAqLyB9XHJcbiAgey8qKiB1cGRhdGUgSXRlbSBRdHkgU3RhcnQgXHJcbiAgIGNvbnN0IGhhbmRsZVVwZGF0ZVF0eSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XHJcbiAgICBjb25zdCBRdHlVcGRhdGUgPSB7fVxyXG4gICAgLy9HZXQgUXR5IEFycmF5c1xyXG4gICBjb25zdCBRdHlOZXcgPSBhcnJheUl0ZW1SZWxhdGVkLmZpbHRlcigoSXRlbSk9PiBJdGVtLml0ZW1OYW1lLl9pZCAhPT0gdW5kZWZpbmVkKS5tYXAoKEl0ZW0pPT4gSXRlbS5pdGVtUXR5IClcclxuICAgIC8vR2V0IEl0ZW1OYW1lIElkXHJcbiAgICBhcnJheUl0ZW1SZWxhdGVkLmZpbHRlcigoSXRlbSk9PiBJdGVtLml0ZW1OYW1lLl9pZCAhPT0gdW5kZWZpbmVkKS5mb3JFYWNoKChJdGVtLGluZGV4KT0+IHtcclxuICAgICAgaW5pdGlhbFN0YXRlW2BpZCR7aW5kZXgrMX1gXSA9IHtpZHMgOiBJdGVtLml0ZW1OYW1lLl9pZH1cclxuICAgIH0pXHJcbiAgICAgIC8vIEdldCBWYWx1ZVxyXG4gICAgIGNvbnN0IGdldFJlcXVlc3RJZCA9IE9iamVjdC52YWx1ZXMoaW5pdGlhbFN0YXRlKS5tYXAoKHtpZHN9KT0+e1xyXG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWl0ZW0vJHtpZHN9YClcclxuICAgIH0pXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbChnZXRSZXF1ZXN0SWQpO1xyXG4gICAgICByZXMuZm9yRWFjaCgocmVzcCwgaW5kZXgpPT4geyBRdHlVcGRhdGVbYGlkJHtpbmRleCsxfWBdID0ge2lkczogcmVzcC5kYXRhLmRhdGEuX2lkICxkYXRhIDogeyBpdGVtUXVhbnRpdHk6IChOdW1iZXIocmVzcC5kYXRhPy5kYXRhPy5pdGVtUXVhbnRpdHkgfHwgcmVzcC5kYXRhPy5pdGVtUXVhbnRpdHkgfHwgMCkpICsgTnVtYmVyKFF0eU5ld1tpbmRleF0pfX19KVxyXG4gICAgIH1jYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoJ0FuIGVycm9yIGFzIG9jY3VyJyk7XHJcbiAgICB9Ly8gVXBkYXRlIFZhbHVlIFxyXG4gICAgY29uc3QgdXBkYXRlUmVxdWVzdCA9IE9iamVjdC52YWx1ZXMoUXR5VXBkYXRlKS5tYXAoKHtpZHMsIGRhdGF9KT0+e1xyXG4gICAgICByZXR1cm4gYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLWl0ZW0vJHtpZHN9YCxkYXRhKVxyXG4gICAgIH0pIFxyXG4gICAgIHRyeSB7XHJcbiAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh1cGRhdGVSZXF1ZXN0KTtcclxuICAgICB9Y2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGFsZXJ0KCdBbiBlcnJvciBhcyBvY2N1cicpO1xyXG4gICAgfVxyXG4gIH0gXHJcbiAgey8qKiB1cGRhdGUgSXRlbSBRdHkgRW5kICovfVxyXG4gIHsvKiogbG9hZGluZyBTdGFydCAqLyB9XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbFVwZGF0ZSwgc2V0TG9hZGluZ09wZW5Nb2RhbFVwZGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWxVcGRhdGUodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbFVwZGF0ZShmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlY2lzaW9uID0gKG5hdmlnYXRlKSA9PiB7XHJcbiAgICAvL05hdmlnYXRlIEJhc2VkIG9uIHRoIERlY2lzaW9uXHJcbiAgICBpZiAobmF2aWdhdGUgPT09ICdwcmV2aW91cycpIHtcclxuICAgICAgbmF2aWdhdGUoJy9QdXJjaGFzZU9yZGVyVmlld0FkbWluJylcclxuICAgIH0gZWxzZSBpZiAobmF2aWdhdGUgPT09ICdzdGF5Jykge1xyXG4gICAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCByZWFzb25JbmZvID0gcHJvamVjdE5hbWUubmFtZSAhPT0gdW5kZWZpbmVkID8gcHJvamVjdE5hbWUubmFtZSA6IGRlc2NyaXB0aW9uXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uID0gYXN5bmMgKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9OdW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogUmVmZXJlbmNlSW5mbyxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIENyZWF0ZWQgJyxcclxuICAgICAgcmVhc29uOiAnSVAtJyArIFJlZmVyZW5jZUluZm9OdW1iZXIgKyAnIEZvciAnICsgcmVhc29uSW5mbyxcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogbmV3IERhdGUoKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IG9uU3RhdHVzVXBkYXRlID0gYXN5bmMgKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9OdW1iZXIpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIEZldGNoIGxhdGVzdCBQTyByZWNvcmQgdG8gYXZvaWQgb3ZlcndyaXRpbmcgY29uY3VycmVudCBjaGFuZ2VzXHJcbiAgICAgIGNvbnN0IGN1cnJlbnRQT1JlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1wdXJjaGFzZU9yZGVyLyR7aWR9YCk7XHJcbiAgICAgIGNvbnN0IGxhdGVzdFBPRGF0YSA9IGN1cnJlbnRQT1Jlcy5kYXRhLmRhdGE7XHJcblxyXG4gICAgICAvLyBMb2dpYyB0byBtZXJnZSBjdXJyZW50IGZvcm0gaXRlbXMgd2l0aCBvcmlnaW5hbCBQTyBpdGVtcyB0byBhdm9pZCBkYXRhIGxvc3NcclxuICAgICAgY29uc3QgbWVyZ2VkSXRlbXMgPSBsYXRlc3RQT0RhdGEuaXRlbXNRdHlBcnJheS5tYXAob3JpZ2luYWxJdGVtID0+IHtcclxuICAgICAgICBjb25zdCB1cGRhdGVkSXRlbSA9IGl0ZW1zLmZpbmQoaSA9PiBpLmlkUm93ID09PSBvcmlnaW5hbEl0ZW0uaWRSb3cpO1xyXG4gICAgICAgIGlmICh1cGRhdGVkSXRlbSkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4ub3JpZ2luYWxJdGVtLFxyXG4gICAgICAgICAgICBpdGVtUXR5OiBvcmlnaW5hbEl0ZW0uaXRlbVF0eSxcclxuICAgICAgICAgICAgcXR5QnV5OiB1cGRhdGVkSXRlbS5pdGVtUXR5LFxyXG4gICAgICAgICAgICBpdGVtUmF0ZTogdXBkYXRlZEl0ZW0uaXRlbVJhdGUsXHJcbiAgICAgICAgICAgIFRhdXg6IHVwZGF0ZWRJdGVtLlRhdXgsXHJcbiAgICAgICAgICAgIHRvdGFsQW1vdW50VVNEOiB1cGRhdGVkSXRlbS50b3RhbEFtb3VudFVTRCxcclxuICAgICAgICAgICAgZmNDb252ZXJ0VG9Vc2Q6IHVwZGF0ZWRJdGVtLmZjQ29udmVydFRvVXNkLFxyXG4gICAgICAgICAgICBmY0NvbnZlcnRUb1VzZFRvdGFsOiB1cGRhdGVkSXRlbS5mY0NvbnZlcnRUb1VzZFRvdGFsLFxyXG4gICAgICAgICAgICB0b3RhbEFtb3VudDogdXBkYXRlZEl0ZW0udG90YWxBbW91bnQsXHJcbiAgICAgICAgICAgIHRvdGFsQW1vdW50RkM6IHVwZGF0ZWRJdGVtLnRvdGFsQW1vdW50RkNcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbEl0ZW07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgZXhpc3RpbmdJZHMgPSBuZXcgU2V0KGxhdGVzdFBPRGF0YS5pdGVtc1F0eUFycmF5Lm1hcChpID0+IGkuaWRSb3cpKTtcclxuICAgICAgY29uc3QgYWRkZWRJdGVtcyA9IGFycmF5SXRlbVJlbGF0ZWQuZmlsdGVyKGkgPT4gIWV4aXN0aW5nSWRzLmhhcyhpLmlkUm93KSkubWFwKG5ld0l0ZW0gPT4gKHtcclxuICAgICAgICAuLi5uZXdJdGVtLFxyXG4gICAgICAgIGl0ZW1RdHk6IG5ld0l0ZW0uaXRlbVF0eSxcclxuICAgICAgICBxdHlCdXk6IG5ld0l0ZW0uaXRlbVF0eVxyXG4gICAgICB9KSk7XHJcblxyXG4gICAgICBjb25zdCBmaW5hbEl0ZW1zID0gWy4uLm1lcmdlZEl0ZW1zLCAuLi5hZGRlZEl0ZW1zXTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgLi4ubGF0ZXN0UE9EYXRhLFxyXG4gICAgICAgIENvbnZlcnRlZDogdHJ1ZSxcclxuICAgICAgICBJcFJlbGF0ZWQ6IHtcclxuICAgICAgICAgIGlkOiBSZWZlcmVuY2VJbmZvLFxyXG4gICAgICAgICAgbnVtYmVyOiBSZWZlcmVuY2VJbmZvTnVtYmVyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtc1F0eUFycmF5OiBmaW5hbEl0ZW1zXHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLXB1cmNoYXNlT3JkZXIvJHtpZH1gLCBkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVRdHkgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vQ2FsY3VsYXRlVG90YWxgKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZSgnJylcclxuICB7LyoqIGxvYWRpbmcgRW5kICovIH1cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2F2aW5nKCd0cnVlJylcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIFBPSUQ6IGlkLFxyXG4gICAgICBpdGVtUHVyY2hhc2VEYXRlLFxyXG4gICAgICBpdGVtUHVyY2hhc2VOdW1iZXIsXHJcbiAgICAgIG1hbnVmYWN0dXJlciwgbWFudWZhY3R1cmVySUQsIHN0YXR1czogXCJVblBhaWRcIixcclxuICAgICAgbWFudWZhY3R1cmVyTnVtYmVyLFxyXG4gICAgICBkZXNjcmlwdGlvbiwgQ3JlYXRlLCB0b3RhbFVTRCwgdG90YWwsIHRvdGFsRkMsIGl0ZW1zOiBhcnJheUl0ZW1SZWxhdGVkLCByZWFzb24sIHByb2plY3ROYW1lLCBub3RlXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLWl0ZW1QdXJjaGFzZWAsIGRhdGEpO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaW52YWxpZGF0ZUNhY2hlKCcvaXRlbVB1cmNoYXNlJyk7XHJcbiAgICAgICAgLy8gT3BlbiBMb2FkaW5nIFZpZXdcclxuICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvID0gcmVzLmRhdGEuZGF0YS5faWRcclxuICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvTnVtYmVyID0gcmVzLmRhdGEuZGF0YS5pdGVtUHVyY2hhc2VOdW1iZXJcclxuICAgICAgICBhd2FpdCBvblN0YXR1c1VwZGF0ZShSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyKVxyXG4gICAgICAgIGF3YWl0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbihSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyKVxyXG4gICAgICAgIGF3YWl0IGhhbmRsZVF0eSgpO1xyXG4gICAgICAgIGF3YWl0IGhhbmRsZVVwZGF0ZVB1cmNoYXNlKCk7XHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBbiBFcnJvciBhcyBPY2N1cicpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBzZXRTYXZpbmcoJycpXHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIGNvbnN0IFtzZWFyY2gyLCBzZXRTZWFyY2gyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2gyID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICAgIHNldFNlYXJjaDIodmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IG5ld0FycmF5MiA9IHNlYXJjaDIgIT09ICcnID8gaXRlbXMuZmlsdGVyKChJdGVtKSA9PlxyXG4gICAgSXRlbS5pdGVtTmFtZSAmJiBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoMi50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgSXRlbS5pdGVtRGVzY3JpcHRpb24gJiYgSXRlbS5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gyLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICYmIEl0ZW0ubmV3RGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gyLnRvTG93ZXJDYXNlKCkpXHJcbiAgKSA6IGl0ZW1zXHJcblxyXG4gIGNvbnN0IHRhYmxlUm93cyA9IHJlYXNvbiAhPT0gJ090aGVyJyA/IG5ld0FycmF5Mi5tYXAoKEl0ZW0sIGkpID0+IHtcclxuICAgIGNvbnN0IHJlbGF0ZWQgPSBpdGVtQXJyYXkuZmluZCgocm93KSA9PiByb3cuaWRSb3cgPT09IEl0ZW0uaWRSb3cpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dHIga2V5PXtJdGVtLmlkUm93fT5cclxuICAgICAgICA8dGQgPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgPHRkICA+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIEl0ZW0ubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMzBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICBuYW1lPSduZXdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0ubmV3RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nTm90ZS9IZWFkZXInXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzMwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J3RvcCc+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGUoSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA/IChcclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMzBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6ICcxNnB4JywgZm9udFdlaWdodDogJ2JvbGQnIH19PntJdGVtLml0ZW1OYW1lLml0ZW1OYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ31cclxuICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzMwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93QXV0b2NvbXBsZXRlKEl0ZW0uaWRSb3cpfT5cclxuICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtmaWx0ZXJJdGVtSW5mb3JtYXRpb259XHJcbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uaXRlbU5hbWUgKyAnLycgKyBvcHRpb24uaXRlbUJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNmMmYyZjInIH19PntvcHRpb24uaXRlbU5hbWUgKyAnLycgKyBvcHRpb24uaXRlbUJyYW5kfTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIG11bHRpbGluZSByb3dzPXs0fSB7Li4ucGFyYW1zfSByZXF1aXJlZCAvPn1cclxuICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlSXRlbShJdGVtLmlkUm93LCBuZXdWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4gc2V0SW5wdXRWYWx1ZShuZXdJbnB1dFZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KG9wdGlvbnMsIHsgaW5wdXRWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbUJyYW5kLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbURlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgUGFwZXJDb21wb25lbnQ9eyh7IGNoaWxkcmVuLCAuLi5vdGhlciB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCB7Li4ub3RoZXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgekluZGV4OiAxMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMihlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNycgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQUREIE5FVyBJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICczMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBuYW1lPSdpdGVtUXR5JyBpZD0naXRlbVF0eSdcclxuICAgICAgICAgICAgbGFiZWw9J1F0eSdcclxuICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVF0eX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkID5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbmFtZT0naXRlbVJhdGUnIGlkPSdpdGVtUmF0ZSdcclxuICAgICAgICAgICAgbGFiZWw9J1ByaWNlJCdcclxuICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVJhdGV9XHJcbiAgICAgICAgICAgIGhlbHBlclRleHQ9eydQdXJjaGFzZSBDb3N0OiAkJyArIEl0ZW0uY29zdH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbmFtZT0ndG90YWxBbW91bnRGQycgaWQ9J3RvdGFsQW1vdW50RkMnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0udG90YWxBbW91bnRGQ31cclxuICAgICAgICAgICAgICBsYWJlbD0nRkMnXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG5hbWU9J1RhdXgnIGlkPSdUYXV4J1xyXG4gICAgICAgICAgICAgIHZhbHVlPXtJdGVtLlRhdXh9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIG5hbWU9J3RvdGFsQW1vdW50JyBpZD0ndG90YWxBbW91bnQnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0udG90YWxBbW91bnR9XHJcbiAgICAgICAgICAgICAgbGFiZWw9JyQnXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj5Ub3RhbCBDb3N0IFVTRDoge0l0ZW0udG90YWxBbW91bnRVU0Q/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgaWQ9J2Ftb3VudFRvdGFsSW52b2ljZSc+e0l0ZW0uZmNDb252ZXJ0VG9Vc2RUb3RhbD8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICApXHJcbiAgfSkgOiBudWxsXHJcbiAgY29uc3QgdGFibGVSb3dzMiA9IG5ld0FycmF5Mi5tYXAoKEl0ZW0sIGkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ciBrZXk9e0l0ZW0uaWRSb3d9PlxyXG4gICAgICAgIDx0ZCA+PERyYWdJbmRpY2F0b3JSb3VuZGVkIC8+PC90ZD5cclxuICAgICAgICA8dGQgID5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgSXRlbS5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICczMHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J25ld0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5uZXdEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdOb3RlL0hlYWRlcidcclxuICAgICAgICAgICAgICAgICAgcm93cz17Mn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMzAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZShJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lID8gKFxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICczMHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogJzE2cHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e0l0ZW0uaXRlbU5hbWUuaXRlbU5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfVxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMzAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J3RvcCc+XHJcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGUoSXRlbS5pZFJvdyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlckl0ZW1JbmZvcm1hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+ICg8Qm94IHsuLi5wcm9wc30gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI2YyZjJmMicgfX0+e29wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgbXVsdGlsaW5lIHJvd3M9ezR9IHsuLi5wYXJhbXN9IHJlcXVpcmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBoYW5kbGVDaGFuZ2VJdGVtKEl0ZW0uaWRSb3csIG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGV2ZW50LCBuZXdJbnB1dFZhbHVlKSA9PiBzZXRJbnB1dFZhbHVlKG5ld0lucHV0VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucywgeyBpbnB1dFZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbU5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtQnJhbmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBQYXBlckNvbXBvbmVudD17KHsgY2hpbGRyZW4sIC4uLm90aGVyIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHsuLi5vdGhlcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCB6SW5kZXg6IDEwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyKGUpfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ30gb25Nb3VzZURvd249eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI3JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzMwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIG5hbWU9J2l0ZW1RdHknIGlkPSdpdGVtUXR5J1xyXG4gICAgICAgICAgICBsYWJlbD0nUXR5J1xyXG4gICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUXR5fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBuYW1lPSdpdGVtUmF0ZScgaWQ9J2l0ZW1SYXRlJ1xyXG4gICAgICAgICAgICBsYWJlbD0nUHJpY2UkJ1xyXG4gICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUmF0ZX1cclxuICAgICAgICAgICAgaGVscGVyVGV4dD17J1B1cmNoYXNlIENvc3Q6ICQnICsgSXRlbS5jb3N0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxMHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcblxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICBuYW1lPSd0b3RhbEFtb3VudEZDJyBpZD0ndG90YWxBbW91bnRGQydcclxuICAgICAgICAgICAgICB2YWx1ZT17SXRlbS50b3RhbEFtb3VudEZDfVxyXG4gICAgICAgICAgICAgIGxhYmVsPSdGQydcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbmFtZT0nVGF1eCcgaWQ9J1RhdXgnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uVGF1eH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgbmFtZT0ndG90YWxBbW91bnQnIGlkPSd0b3RhbEFtb3VudCdcclxuICAgICAgICAgICAgICB2YWx1ZT17SXRlbS50b3RhbEFtb3VudH1cclxuICAgICAgICAgICAgICBsYWJlbD0nJCdcclxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPlRvdGFsIENvc3QgVVNEOiB7SXRlbS50b3RhbEFtb3VudFVTRD8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZCBpZD0nYW1vdW50VG90YWxJbnZvaWNlJz57SXRlbS5mY0NvbnZlcnRUb1VzZFRvdGFsPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIiA+XHJcbiAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiTmV3LVJvd1wiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBhZGRJdGVtUm93KGkpfSBkaXNhYmxlZD17cmVhc29uID09PSAnUHJvamVjdCd9PlxyXG4gICAgICAgICAgICAgICAgPEFkZCBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgKVxyXG4gIH0pO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBNYWtlIG5ldyBJdGVtIFB1cmNoYXNlXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlbkJhY2t9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19Pnt1c2VyLmRhdGEudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGVNYWludGVuYW5jZTIgLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDQgfX0gPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0gY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1QdXJjaGFzZURhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0RhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKGl0ZW1QdXJjaGFzZURhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0SXRlbVB1cmNoYXNlRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cIml0ZW1QdXJjaGFzZU51bWJlclwiPkl0ZW0gUHVyY2hhc2UgTnVtYmVyPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0naXRlbVB1cmNoYXNlTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUHVyY2hhc2VOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdJdGVtIFB1cmNoYXNlIE51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eycwMCcgKyBpdGVtUHVyY2hhc2VOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPklQPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbWFudWZhY3R1cmVyICE9PSBudWxsICYmIG1hbnVmYWN0dXJlciAhPT0gJycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCA+e21hbnVmYWN0dXJlcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJDdXN0b21lcn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17c3VwcGxpZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5zdXBwbGllck5hbWUgKyAnIHwgJyArIG9wdGlvbi5zdG9yZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsIG9wdGlvbikgPT4gKDxCb3ggey4uLnByb3BzfT4ge29wdGlvbi5zdXBwbGllck5hbWV9IHwge29wdGlvbi5zdG9yZU5hbWV9IDwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4geyBoYW5kbGVDaGFuZ2VTdXBwbGllcihuZXdWYWx1ZSkgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUzKG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KG9wdGlvbnMsIHsgaW5wdXRWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnN1cHBsaWVyTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc3RvcmVOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB7Li4ub3RoZXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgbGVmdDogJzAnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMShlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNycgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERCBORVcgU1VQUExJRVJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiTWFudWZhY3R1cmVyXCIgcmVxdWlyZWQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdtYW51ZmFjdHVyZXJOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdtYW51ZmFjdHVyZXJOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nUmVmZXJlbmNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21hbnVmYWN0dXJlck51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWFudWZhY3R1cmVyTnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInJlYXNvblwiPlJlYXNvbjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZWFzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29uICE9PSB1bmRlZmluZWQgPyByZWFzb24gOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVSZWFzb24oZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWFzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlYXNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlByb2plY3RcIj5Qcm9qZWN0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiTWFpbnRlbmFuY2VcIj5NYWludGVuYW5jZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkludm9pY2VcIj5JbnZvaWNlPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiT3RoZXJcIj5PdGhlcjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWFzb24gPT09ICdPdGhlcicgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzgwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e3Byb2plY3ROYW1lICE9PSB1bmRlZmluZWQgPyBwcm9qZWN0TmFtZS5uYW1lIDogJyd9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCB6SW5kZXg6IDEsIGZsb2F0OiAncmlnaHQnLCByaWdodDogJy02cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQWRkXCIgcGxhY2VtZW50PVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXthZGRJdGVtfSBkaXNhYmxlZD17cmVhc29uID09PSAnUHJvamVjdCcgfHwgcmVhc29uID09PSAnTWFpbnRlbmFuY2UnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnIHN0eWxlPXt7IGZvbnRTaXplOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXIgc3g9e3sgbWFyZ2luTGVmdDogJy0xNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvbiA9PT0gJ1Byb2plY3QnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JywgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nc2VhcmNoMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2gyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2gyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZSQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QW1vdW50IFBhaWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgUGFpZDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhYmxlUm93c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9PlRvdGFsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ndG90YWxGQydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Ftb3VudCBGYydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsRkN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+RkM8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ndG90YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBbW91bnQgJCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEyMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3RvdGFsVVNEJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVG90YWwgVVNEJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWxVU0R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTIwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvbiA9PT0gJ01haW50ZW5hbmNlJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3NlYXJjaDInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlSW5mbzEwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2UkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFtb3VudCBQYWlkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIFBhaWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWJsZVJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfT5Ub3RhbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3RvdGFsRkMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBbW91bnQgRmMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbEZDfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzE1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPkZDPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3RvdGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQW1vdW50ICQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMjBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd0b3RhbFVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1RvdGFsIFVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsVVNEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEyMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb24gPT09ICdJbnZvaWNlJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3NlYXJjaDInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2VhcmNoMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlSW5mbzEwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UHJpY2UkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFtb3VudCBQYWlkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIFBhaWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWJsZVJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXszfT5Ub3RhbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3RvdGFsRkMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBbW91bnQgRmMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbEZDfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzE1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPkZDPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3RvdGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQW1vdW50ICQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMjBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd0b3RhbFVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1RvdGFsIFVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsVVNEfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEyMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb24gPT09ICdPdGhlcicgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5QcmljZSQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFtb3VudCBQYWlkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCBQYWlkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFibGVSb3dzMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Mn0+VG90YWw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ndG90YWxGQydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQW1vdW50IEZjJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsRkN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzE1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5GQzwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ndG90YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Ftb3VudCAkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMjBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3RvdGFsVVNEJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdUb3RhbCBVU0QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWxVU0R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEyMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nbm90ZSdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdOb3RlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNjAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2F2aW5nICE9PSAndHJ1ZScgPyA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPiA6IDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlNhdmluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQmFja31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUJhY2t9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RG8geW91IHdhbnQgdG8gc3RvcCBjcmVhdGluZyBjdXN0b21lciA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGUgOjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiPiBJZiB5b3Ugc3RvcCBjcmVhdGluZyB3aXRob3V0IHNhdmluZywgYWxsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3Q8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9QdXJjaGFzZU9yZGVyVmlld0FkbWluJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+WWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ObzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc2MDBweCcsIHBhZGRpbmc6ICcyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICA8SXRlbUZvcm1WaWV3MiBvbkNyZWF0ZU9wdGlvbj17aGFuZGxlQ3JlYXRlSXRlbX0gb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQXV0b2NvbXBsZXRlMX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnLCBwYWRkaW5nOiAnMjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgPFN1cHBsaWVyRm9ybTIgb25DcmVhdGVPcHRpb249e2hhbmRsZUNyZWF0ZUN1c3RvbWVyfSBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvUHVyY2hhc2VPcmRlclZpZXdBZG1pbicpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgR28gQmFja1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17RXJyb3JPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VFcnJvcn1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2FuY2VsSWNvbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+U2F2aW5nIEZhaWxlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWxVcGRhdGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VVcGRhdGV9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnZlcnRQb1RvSVBcclxuIiwiaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEOiBjcnlwdG8ucmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuY29uc3Qgcm5kczhQb29sID0gbmV3IFVpbnQ4QXJyYXkoMjU2KTsgLy8gIyBvZiByYW5kb20gdmFsdWVzIHRvIHByZS1hbGxvY2F0ZVxuXG5sZXQgcG9vbFB0ciA9IHJuZHM4UG9vbC5sZW5ndGg7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIGlmIChwb29sUHRyID4gcm5kczhQb29sLmxlbmd0aCAtIDE2KSB7XG4gICAgY3J5cHRvLnJhbmRvbUZpbGxTeW5jKHJuZHM4UG9vbCk7XG4gICAgcG9vbFB0ciA9IDA7XG4gIH1cblxuICByZXR1cm4gcm5kczhQb29sLnNsaWNlKHBvb2xQdHIsIHBvb2xQdHIgKz0gMTYpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZU1haW50ZW5hbmNlMiIsIlNlYXJjaEljb24iLCJOb3RpZmljYXRpb25zTm9uZUljb24iLCJBY2NvdW50Q2lyY2xlSWNvbiIsIkRlbGV0ZUljb24iLCJNZW51SXRlbSIsIkdyaWQiLCJJY29uQnV0dG9uIiwiUGFwZXIiLCJUZXh0RmllbGQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJUeXBvZ3JhcGh5Iiwic3R5bGVkIiwiQm94IiwiQXV0b2NvbXBsZXRlIiwiTW9kYWwiLCJCYWNrZHJvcCIsIlRhYmxlQ29udGFpbmVyIiwiT3V0bGluZWRJbnB1dCIsIklucHV0QWRvcm5tZW50IiwiRGl2aWRlciIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkNvbnRhaW5lciIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkFkZCIsIkFycm93VXB3YXJkT3V0bGluZWQiLCJEcmFnSW5kaWNhdG9yUm91bmRlZCIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJFTkRQT0lOVF9VUkwiLCJ2NCIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsImRheWpzIiwiQXJyb3dCYWNrIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkxvYWRlciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJDdXN0b21lckZvcm1WaWV3MiIsIkNsb3NlIiwiSXRlbUZvcm1WaWV3MiIsIk1lc3NhZ2VBZG1pblZpZXciLCJOb3RpZmljYXRpb25WSWV3SW5mbyIsIlN1cHBsaWVyRm9ybTIiLCJMaWdodFRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIkJsYWNrVG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiVmlld1Rvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwic3R5bGUyIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNyIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmOCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkNvbnZlcnRQb1RvSVAiLCJfdXNlUGFyYW1zIiwiaWQiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmOSIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwib3BlbkJhY2siLCJzZXRPcGVuQmFjayIsImhhbmRsZU9wZW5CYWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VCYWNrIiwiX3VzZVN0YXRlMyIsImRhdGUiLCJEYXRlIiwiX3VzZVN0YXRlNCIsIml0ZW1QdXJjaGFzZURhdGUiLCJzZXRJdGVtUHVyY2hhc2VEYXRlIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJpdGVtUHVyY2hhc2VOdW1iZXIiLCJzZXRJdGVtUHVyY2hhc2VOdW1iZXIiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIm1hbnVmYWN0dXJlciIsInNldE1hbnVmYWN0dXJlciIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwicmVhc29uIiwic2V0UmVhc29uIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0IiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsIm1haW50ZW5hbmNlIiwic2V0TWFpbnRlbmFuY2UiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0Iiwibm90ZSIsInNldE5vdGUiLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiaW5wdXRWYWx1ZTIiLCJzZXRJbnB1dFZhbHVlMiIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJfUmVhY3QkdXNlU3RhdGU0IiwiaW5wdXRWYWx1ZTQiLCJzZXRJbnB1dFZhbHVlNCIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJtYW51ZmFjdHVyZXJOdW1iZXIiLCJzZXRNYW51ZmFjdHVyZXJOdW1iZXIiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwibWFudWZhY3R1cmVySUQiLCJzZXRNYW51ZmFjdHVyZXJJRCIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJzdXBwbGllciIsInNldFN1cHBsaWVyIiwiX1JlYWN0JHVzZVN0YXRlNSIsIl9SZWFjdCR1c2VTdGF0ZTYiLCJpbnB1dFZhbHVlMyIsInNldElucHV0VmFsdWUzIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJfdXNlU3RhdGUyMyIsIl91c2VTdGF0ZTI0IiwidG90YWxVU0QiLCJzZXRUb3RhbFVTRCIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJ0b3RhbCIsInNldFRvdGFsIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsInRvdGFsRkMiLCJzZXRUb3RhbEZDIiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsIml0ZW1zIiwic2V0SXRlbXMiLCJkYXRlQ29tbWVudCIsIm5vdyIsImZvcm1hdCIsIkNyZWF0ZSIsInBlcnNvbiIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJwcm9qZWN0TmFtZSIsInNldFByb2plY3ROYW1lIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsInB1cmNoYXNlIiwic2V0UHVyY2hhc2UiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2IiwibWFpbnRlbmFuY2VJbmZvIiwic2V0TWFpbnRlbmFuY2VJbmZvIiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsImludm9pY2VJbmZvIiwic2V0SW52b2ljZUluZm8iLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwiaXRlbUFycmF5Iiwic2V0SXRlbUFycmF5IiwiX1JlYWN0JHVzZVN0YXRlNyIsIl9SZWFjdCR1c2VTdGF0ZTgiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJwdXJjaGFzZU9yZGVyRGF0YSIsInNldFB1cmNoYXNlT3JkZXJEYXRhIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsIkl0ZW1JbmZvcm1hdGlvbiIsInNldEl0ZW1JbmZvcm1hdGlvbiIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJyYXRlIiwic2V0UmF0ZSIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJpbnZvaWNlIiwic2V0SW52b2ljZSIsImhhbmRsZUZldGNoIiwiX3JlZjAiLCJfcmVzSXRlbU91dCRkYXRhIiwiX3Jlc0l0ZW1PdXQkZGF0YTIiLCJfcmVzSW52b2ljZSRkYXRhIiwicmVzU3VwcGxpZXIiLCJyZXZlcnNlIiwicmVzSXRlbU91dCIsInBhcnNlSW50IiwicmVzSXRlbSIsInJlc1Byb2plY3QiLCJyZXNNYWludGVuYW5jZSIsIm1hcCIsInJvdyIsInJlc1B1cmNoYXNlIiwicmVzSW52b2ljZSIsIm5ld0RhdGEiLCJmaWx0ZXIiLCJzb21lIiwiSXRlbSIsIl9pZCIsIlJlZmVyZW5jZU5hbWUyIiwiSXRlbTIiLCJSZWZlcmVuY2VOYW1lIiwiZmV0Y2hEYXRhIiwiX3JlZjEiLCJfcmVzJGRhdGEiLCJfcmVzJGRhdGEyIiwicG9EYXRhIiwiaXRlbXNRdHlBcnJheSIsImlkUm93IiwiaXRlbU5hbWUiLCJpdGVtRGVzY3JpcHRpb24iLCJuZXdEZXNjcmlwdGlvbiIsIm9yZGVyZWRRdHkiLCJpdGVtUXR5IiwicXR5QnV5IiwiaXRlbVJhdGUiLCJUYXV4IiwiY29zdCIsImFtb3VudEZjIiwidG90YWxBbW91bnRVU0QiLCJmY0NvbnZlcnRUb1VzZCIsImZjQ29udmVydFRvVXNkVG90YWwiLCJ0b3RhbEFtb3VudCIsInRvdGFsQW1vdW50RkMiLCJOdW1iZXIiLCJyZWZlcmVuY2UiLCJuYW1lIiwicmVmZXJlbmNlTmFtZSIsImhhbmRsZVJlYXNvbiIsInRhcmdldCIsInZhbHVlIiwiZmV0Y2hQdXIiLCJfcmVmMTAiLCJfcmVzUHVyY2hhc2UkZGF0YSIsImxvZyIsIl9yZXNNJGRhdGEiLCJyZXNNIiwiX3Jlc00kZGF0YTIiLCJoYW5kbGVDaGFuZ2VJdGVtIiwibmV3VmFsdWUiLCJzZWxlY3RlZE9wdGlvbnMiLCJoYW5kbGVDaGFuZ2UiLCJfZSR0YXJnZXQiLCJsaXN0IiwiaSIsImZpbmRJbmRleCIsIk1hdGgiLCJyb3VuZCIsInBhcnNlRmxvYXQiLCJhZGRJdGVtIiwiYWRkSXRlbVJvdyIsIm5ld0l0ZW0iLCJ1cGRhdGUiLCJzcGxpY2UiLCJoYW5kbGVTaG93QXV0b2NvbXBsZXRlIiwiZGVsZXRlSXRlbSIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJvcGVuQXV0b2NvbXBsZXRlMSIsInNldE9wZW5BdXRvY29tcGxldGUxIiwiaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUxIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMSIsImhhbmRsZUNyZWF0ZUN1c3RvbWVyIiwibmV3Q3VzdG9tZXIiLCJfdXNlU3RhdGU1MSIsIl91c2VTdGF0ZTUyIiwib3BlbkF1dG9jb21wbGV0ZTIiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVDcmVhdGVJdGVtIiwicmVzdWx0MCIsInJlZHVjZSIsInN1bSIsInRvRml4ZWQiLCJyZXN1bHQxIiwicmVzdWx0MiIsImhhbmRsZUNoYW5nZVN1cHBsaWVyIiwiZmluZCIsIm9wdGlvbiIsInN0b3JlTmFtZSIsImhhbmRsZUNsZWFyQ3VzdG9tZXIiLCJmaWx0ZXJJdGVtSW5mb3JtYXRpb24iLCJfcm93JGl0ZW1OYW1lIiwidHlwZUl0ZW0iLCJhcnJheUl0ZW1SZWxhdGVkIiwidW5kZWZpbmVkIiwiaGFuZGxlVXBkYXRlUHVyY2hhc2UiLCJfcmVmMTEiLCJsZW5ndGgiLCJfcmVzUHVyJGRhdGEiLCJyZXNQdXIiLCJyZWxldmFudFB1cmNoYXNlcyIsIl9yb3ckcHJvamVjdE5hbWUiLCJfbG9vcCIsImN1cnJlbnRSZXMiLCJwdXJjaGFzZVJvdyIsImN1cnJlbnREYXRhIiwidXBkYXRlZEl0ZW1zIiwiUmVsYXRlZEl0ZW0iLCJpdGVtQnV5IiwiaXRlbUNvc3QiLCJ0b3RhbEdlbmVyYWxlIiwibmV3SXRlbXMiLCJmb3JFYWNoIiwiX1JlbGF0ZWRJdGVtJGl0ZW1OYW1lIiwiX1JlbGF0ZWRJdGVtJGl0ZW1OYW1lMiIsInB1c2giLCJpdGVtRGlzY291bnQiLCJkaXNjb3VudCIsInBlcmNlbnRhZ2UiLCJpdGVtQW1vdW50IiwidG90YWxDb3N0IiwiaXRlbVdlaWdodCIsInN0b2NrIiwiaXRlbU91dCIsIm5ld0l0ZW1PdXQiLCJwdXJjaGFzZUFtb3VudDIiLCJwdXQiLCJfcmVzTSRkYXRhMyIsInJlbGV2YW50TWFpbnRlbmFuY2UiLCJfbG9vcDIiLCJtYWludGVuYW5jZVJvdyIsIl9SZWxhdGVkSXRlbSRpdGVtTmFtZTMiLCJfUmVsYXRlZEl0ZW0kaXRlbU5hbWU0IiwiX3Jlc0kkZGF0YSIsInJlc0kiLCJyZWxldmFudEludm9pY2VzIiwiX2xvb3AzIiwiaW52b2ljZVJvdyIsIl9SZWxhdGVkSXRlbSRpdGVtTmFtZTUiLCJfUmVsYXRlZEl0ZW0kaXRlbU5hbWU2IiwiX3VzZVN0YXRlNTMiLCJfdXNlU3RhdGU1NCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlNTUiLCJfdXNlU3RhdGU1NiIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlNTciLCJfdXNlU3RhdGU1OCIsImxvYWRpbmdPcGVuTW9kYWxVcGRhdGUiLCJzZXRMb2FkaW5nT3Blbk1vZGFsVXBkYXRlIiwiX3VzZVN0YXRlNTkiLCJfdXNlU3RhdGU2MCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZU9wZW5VcGRhdGUiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVDbG9zZVVwZGF0ZSIsImhhbmRsZUNsb3NlRXJyb3IiLCJoYW5kbGVEZWNpc2lvbiIsInJlYXNvbkluZm8iLCJoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24iLCJfcmVmMTIiLCJSZWZlcmVuY2VJbmZvIiwiUmVmZXJlbmNlSW5mb051bWJlciIsImlkSW5mbyIsImRhdGVOb3RpZmljYXRpb24iLCJwb3N0IiwiX3giLCJfeDIiLCJvblN0YXR1c1VwZGF0ZSIsIl9yZWYxMyIsImN1cnJlbnRQT1JlcyIsImxhdGVzdFBPRGF0YSIsIm1lcmdlZEl0ZW1zIiwib3JpZ2luYWxJdGVtIiwidXBkYXRlZEl0ZW0iLCJleGlzdGluZ0lkcyIsIlNldCIsImFkZGVkSXRlbXMiLCJoYXMiLCJmaW5hbEl0ZW1zIiwiQ29udmVydGVkIiwiSXBSZWxhdGVkIiwibnVtYmVyIiwiX3gzIiwiX3g0IiwiaGFuZGxlUXR5IiwiX3JlZjE0IiwiX3VzZVN0YXRlNjEiLCJfdXNlU3RhdGU2MiIsInNhdmluZyIsInNldFNhdmluZyIsImhhbmRsZVN1Ym1pdCIsIl9yZWYxNSIsIlBPSUQiLCJzdGF0dXMiLCJpbnZhbGlkYXRlQ2FjaGUiLCJfeDUiLCJfUmVhY3QkdXNlU3RhdGU5IiwiX1JlYWN0JHVzZVN0YXRlMCIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwiX3VzZVN0YXRlNjMiLCJfdXNlU3RhdGU2NCIsInNlYXJjaDIiLCJzZXRTZWFyY2gyIiwiaGFuZGxlU2VhcmNoMiIsIm5ld0FycmF5MiIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJ0YWJsZVJvd3MiLCJfSXRlbSR0b3RhbEFtb3VudFVTRCIsIl9JdGVtJGZjQ29udmVydFRvVXNkVCIsInJlbGF0ZWQiLCJrZXkiLCJkaXNwbGF5IiwiZ2FwIiwiYWxpZ25JdGVtcyIsIm11bHRpbGluZSIsInBsYWNlaG9sZGVyIiwicm93cyIsIm9uQ2hhbmdlIiwic3giLCJmb250V2VpZ2h0IiwidGl0bGUiLCJwbGFjZW1lbnQiLCJvbkNsaWNrIiwiZmxvYXQiLCJzaXplIiwiZGlzYWJsZWQiLCJkaXNhYmxlQ2xlYXJhYmxlIiwib3B0aW9ucyIsImdldE9wdGlvbkxhYmVsIiwiaXRlbUJyYW5kIiwicmVuZGVyT3B0aW9uIiwicmVuZGVySW5wdXQiLCJwYXJhbXMiLCJyZXF1aXJlZCIsIm9uSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5ld0lucHV0VmFsdWUiLCJmaWx0ZXJPcHRpb25zIiwiX3JlZjE2IiwiUGFwZXJDb21wb25lbnQiLCJfcmVmMTciLCJjaGlsZHJlbiIsIm90aGVyIiwiX2V4Y2x1ZGVkNCIsIm9uTW91c2VEb3duIiwibGFiZWwiLCJoZWxwZXJUZXh0IiwidGV4dEFsaWduIiwicmVwbGFjZSIsInRhYmxlUm93czIiLCJfSXRlbSR0b3RhbEFtb3VudFVTRDIiLCJfSXRlbSRmY0NvbnZlcnRUb1VzZFQyIiwiX3JlZjE4IiwiX3JlZjE5IiwiX2V4Y2x1ZGVkNSIsImFsaWduIiwiY3Vyc29yIiwicHIiLCJlZGdlIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwicGFkZGluZyIsIml0ZW0iLCJ4cyIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsImh0bWxGb3IiLCJ0eXBlIiwic3RhcnRBZG9ybm1lbnQiLCJzdXBwbGllck5hbWUiLCJfcmVmMjAiLCJfcmVmMjEiLCJfZXhjbHVkZWQ2IiwibWFyZ2luVG9wIiwicmlnaHQiLCJGcmFnbWVudCIsImNvbFNwYW4iLCJvbkNsb3NlIiwib3ZlcmZsb3dZIiwib25DcmVhdGVPcHRpb24iLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9