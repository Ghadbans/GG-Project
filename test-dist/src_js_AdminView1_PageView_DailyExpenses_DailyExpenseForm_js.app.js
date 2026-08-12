"use strict";
exports.id = "src_js_AdminView1_PageView_DailyExpenses_DailyExpenseForm_js";
exports.ids = ["src_js_AdminView1_PageView_DailyExpenses_DailyExpenseForm_js"];
exports.modules = {

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

/***/ "./src/js/AdminView1/PageView/DailyExpenses/DailyExpenseForm.js"
/*!**********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/DailyExpenses/DailyExpenseForm.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_SidebarDash1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/SidebarDash1 */ "./src/js/component/SidebarDash1.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../utils/apiCache */ "./src/js/utils/apiCache.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_CurrencyExchange__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @mui/icons-material/CurrencyExchange */ "./node_modules/@mui/icons-material/CurrencyExchange.js");
/* harmony import */ var _mui_icons_material_MonetizationOn__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/icons-material/MonetizationOn */ "./node_modules/@mui/icons-material/MonetizationOn.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ProjectView_ProjectFormView__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../ProjectView/ProjectFormView */ "./src/js/AdminView1/PageView/ProjectView/ProjectFormView.js");
/* harmony import */ var _ProjectView_ProjectFormView2__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../ProjectView/ProjectFormView2 */ "./src/js/AdminView1/PageView/ProjectView/ProjectFormView2.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["children"];
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












































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_25__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_26__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref5 => {
  var theme = _ref5.theme,
    open = _ref5.open;
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_29__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref6 => {
  var theme = _ref6.theme,
    open = _ref6.open;
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
function DailyExpenseForm() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_41__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_51__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_51__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_52__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_52__.setUser)({
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
        return _ref7.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_52__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    categories = _useState2[0],
    setCategories = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    employee = _useState4[0],
    setEmployee = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    project = _useState6[0],
    setProject = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    project2 = _useState8[0],
    setProject2 = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    PayRate = _useState0[0],
    setPayRate = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState10 = _slicedToArray(_useState1, 2),
    expenseCategory = _useState10[0],
    setExpenseCategory = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    employeeName = _useState12[0],
    setEmployeeName = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    accountName = _useState14[0],
    setAccountName = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    reason = _useState16[0],
    setReason = _useState16[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValueProject = _React$useState2[0],
    setInputValueProject = _React$useState2[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    description = _useState18[0],
    setDescription = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      _id: "",
      name: ""
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    accountNameInfo = _useState20[0],
    setAccountNameInfo = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    expenseDate = _useState22[0],
    setExpenseDate = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    amount = _useState24[0],
    setAmount = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    rate = _useState26[0],
    setRate = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    total = _useState28[0],
    setTotal = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState30 = _slicedToArray(_useState29, 2),
    expenseNumber = _useState30[0],
    setExpenseNumber = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState32 = _slicedToArray(_useState31, 2),
    expensesCategory = _useState32[0],
    setExpensesCategory = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    CheckTvA = _useState34[0],
    setCheckTvA = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    tax = _useState36[0],
    setTax = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    openAutocomplete1 = _useState38[0],
    setOpenAutocomplete1 = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    openAutocomplete2 = _useState40[0],
    setOpenAutocomplete2 = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    cash = _useState42[0],
    setCash = _useState42[1];
  var dateComment = new Date();
  var dateFormate = dayjs__WEBPACK_IMPORTED_MODULE_46___default()(dateComment).format('DD/MM/YYYY');
  var Create = {
    person: user.data.userName + ' Created ',
    dateComment: dateFormate
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var _projectResponse$data;
          var projectResponse = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/projects"));
          var categoryResponse = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/expensesCategory"));
          var employeeResponse = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/employee"));
          setProject(projectResponse.data.data);
          setProject2((_projectResponse$data = projectResponse.data) === null || _projectResponse$data === void 0 || (_projectResponse$data = _projectResponse$data.data) === null || _projectResponse$data === void 0 ? void 0 : _projectResponse$data.filter(row => row.status === "On-Going"));
          setCategories(categoryResponse.data.data);
          setEmployee(employeeResponse.data.data);
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchData() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/get-last-saved-expense"));
          var num = res.data && res.data.expenseNumber ? parseInt(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.expenseNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.expenseNumber) || 0) : 0;
          setExpenseNumber(num + 1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchlastNumber() {
        return _ref9.apply(this, arguments);
      };
    }();
    fetchlastNumber();
  }, []);
  var handleOpenOpenAutocomplete1 = e => {
    e.stopPropagation();
    setOpenAutocomplete1(true);
  };
  var handleCloseOpenAutocomplete1 = () => {
    setOpenAutocomplete1(false);
  };
  var handleOpenOpenAutocomplete2 = e => {
    e.stopPropagation();
    setOpenAutocomplete2(true);
  };
  var handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
    setModalOpenLoading(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _cashResponse$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/rate"));
          res.data.data.map(row => setRate(row.rate));
          var cashResponse = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/cash"));
          setCash((_cashResponse$data = cashResponse.data) === null || _cashResponse$data === void 0 || (_cashResponse$data = _cashResponse$data.data) === null || _cashResponse$data === void 0 ? void 0 : _cashResponse$data.filter(row => dayjs__WEBPACK_IMPORTED_MODULE_46___default()(row.cashDate).format('DD/MM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_46___default()(expenseDate).format('DD/MM/YYYY')).map(row => row.status));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchData();
  }, [expenseDate]);
  var filterCash = cash.map(row => row).toString();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var _res$data3;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/paymentRate"));
          (((_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.data) || []).map(row => setPayRate(row.paymentRate));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (accountName === 'Employee') return;
    if (amount > 0) {
      var currentRate = parseFloat(rate || 1);
      var newTotal = currentRate > 0 ? parseFloat(amount || 0) / currentRate : 0;
      var result = Math.round(newTotal * 100) / 100;
      setTotal(result);
      setTax(CheckTvA ? Math.round(result * 0.16 * 100) / 100 : 0);
    } else {
      // If amount is 0 (manual USD entry), still update the tax based on the current total
      // But only if total is actually a number
      var currentTotal = parseFloat(total) || 0;
      setTax(CheckTvA ? Math.round(currentTotal * 0.16 * 100) / 100 : 0);
    }
  }, [amount, rate, total, CheckTvA, accountName]);
  var handleAccountChange = e => {
    setAccountName(e.target.value);
    setAccountNameInfo({
      _id: "",
      name: ""
    });
    setTotal(0);
    setAmount(0);
    setEmployeeName([]);
  };
  var handleChangeReason = e => {
    setReason(e.target.value);
    setAccountNameInfo({
      _id: "",
      name: ""
    });
  };
  {/** Employee Start */}
  var filterEmployee = employee.filter(row => row.status !== 'Suspended' && row.status !== 'Fired' && row.status !== 'Resign');
  var addItem = () => {
    setEmployeeName([...employeeName, {
      idInfo: (0,uuid__WEBPACK_IMPORTED_MODULE_40__["default"])(),
      idRow: "",
      employee: "",
      description: "",
      amount: 0,
      rate: PayRate,
      total: 0
    }]);
  };
  var handleChangeEmployee = (e, i) => {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var list = [...employeeName];
    list[i][name] = value;
    if (!list[i]['rate'] || parseFloat(list[i]['rate']) === 0) {
      list[i]['rate'] = PayRate;
    }
    var currentRate = parseFloat(list[i]['rate'] || PayRate || 1);
    var currentAmount = parseFloat(list[i]['amount'] || 0);
    list[i]['total'] = currentRate > 0 ? Math.round(currentAmount / currentRate * 100) / 100 : 0;
    setEmployeeName(list);
  };
  var handleChange = (idInfo, newValue) => {
    var selectedOptions = employee.find(option => option === newValue);
    setEmployeeName(employeeName => employeeName.map(row => row.idInfo === idInfo ? _objectSpread(_objectSpread({}, row), {}, {
      idRow: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      employee: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.employeeName,
      rate: row.rate || PayRate
    }) : row));
  };
  var handleShowAutocomplete = idInfo => {
    setEmployeeName(employeeName => employeeName.map(row => row.idInfo === idInfo ? _objectSpread(_objectSpread({}, row), {}, {
      idRow: '',
      employee: "",
      description: '',
      amount: 0,
      rate: PayRate,
      total: 0
    }) : row));
  };
  var deleteItem = idInfo => {
    setEmployeeName(employeeName => employeeName.filter(Item => Item.idInfo !== idInfo));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Only run this if we are in Employee mode
    if (accountName !== 'Employee') return;
    var sum = employeeName.reduce((acc, row) => acc + (parseFloat(row.total) || 0), 0);
    var result = Math.round(sum * 100) / 100;
    setTotal(result);
    setTax(CheckTvA ? result * 0.16 : 0);
    var sum1 = employeeName.reduce((acc, row) => acc + (parseFloat(row.amount) || 0), 0);
    var result1 = Math.round(sum1 * 100) / 100;
    setAmount(result1);
  }, [employeeName, CheckTvA, accountName]); // Added missing dependencies
  {/** Employee End */}
  var handleChangeProject = newValue => {
    var selectedOptions = project.find(option => option === newValue);
    setAccountNameInfo({
      _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      name: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.projectName
    });
  };
  var handleClearAccountName = () => {
    setAccountNameInfo({
      _id: "",
      name: ""
    });
  };
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    openBack = _useState44[0],
    setOpenBack = _useState44[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    loading = _useState46[0],
    setLoading = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState48 = _slicedToArray(_useState47, 2),
    loadingOpenModal = _useState48[0],
    setLoadingOpenModal = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    ErrorOpenModal = _useState50[0],
    setErrorOpenModal = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState52 = _slicedToArray(_useState51, 2),
    modalOpenLoading = _useState52[0],
    setModalOpenLoading = _useState52[1];
  var handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
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
    setAccountName("");
    setAccountNameInfo({
      _id: "",
      name: ""
    });
    setExpenseCategory({});
    setInputValueProject('');
    setDescription("");
    setExpenseDate(new Date());
    setAmount(0);
    setTotal(0);
    setEmployeeName([]);
    setReason("");
    setCheckTvA(false);
    setTax(0);
    setExpenseNumber(prev => Number(prev) + 1);
    setSaving('');
  };
  var handleCloseAdd = () => {
    setLoadingOpenModal(false);
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  var handleDecision = navigate => {
    //Navigate Based on th Decision
    if (navigate === 'previous') {
      window.history.back();
    } else if (navigate === 'stay') {
      handleClose();
    }
  };
  var handleSubmitCategory = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        expensesCategory
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/create-expensesCategory"), data);
        if (res) {
          handleOpenModal();
          setCategories([...categories, res.data.data]);
        }
      } catch (error) {
        if (error) {
          alert('An error as Occur');
        }
      }
    });
    return function handleSubmitCategory(_x) {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber, ReferenceInfoCategory) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created EXPENSE ',
        reason: "D-".concat(String(ReferenceInfoNumber).padStart(6, '0'), " For ").concat(ReferenceInfoCategory, " to ").concat(accountName, " Account Which Has a Description: ").concat(description),
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x2, _x3, _x4) {
      return _ref11.apply(this, arguments);
    };
  }();
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState54 = _slicedToArray(_useState53, 2),
    saving = _useState54[0],
    setSaving = _useState54[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var data = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_40__["default"])(),
        expenseCategory,
        accountName,
        description,
        expenseDate,
        amount,
        employeeName,
        CheckTvA,
        checkTvA: CheckTvA,
        CheckTva: CheckTvA,
        hasTVA: CheckTvA,
        tva: CheckTvA,
        TVA: CheckTvA,
        tax: CheckTvA ? Number(total) * 0.16 : 0,
        taxAmount: CheckTvA ? Number(total) * 0.16 : 0,
        vatAmount: CheckTvA ? Number(total) * 0.16 : 0,
        TvaAmount: CheckTvA ? Number(total) * 0.16 : 0,
        taxUSD: CheckTvA ? Number(total) * 0.16 : 0,
        rate: accountName === 'Employee' ? PayRate : rate,
        total,
        expenseNumber,
        accountNameInfo,
        reason,
        Create,
        synced: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/create-expense"), data);
        if (res) {
          (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_36__.invalidateCache)('/expense');
          handleOpen();
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.expenseNumber;
          var ReferenceInfoCategory = res.data.data.expenseCategory.expensesCategory;
          // await db.dailyExpenseSchema.add({...res.data.data,_id:res.data.data._id, synced: true })
          handleCreateNotification(ReferenceInfo, ReferenceInfoNumber, ReferenceInfoCategory);
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x5) {
      return _ref12.apply(this, arguments);
    };
  }();
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_28__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_32__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Add new Expenses"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_47__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_60__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_59__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_53__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_33__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_30__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash1__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_27__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_31__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_10__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "expensesCategory",
    options: categories,
    getOptionLabel: Option => Option.expensesCategory,
    value: Object.keys(expenseCategory).length === 0 ? null : expenseCategory,
    onChange: (e, newValue) => setExpenseCategory(newValue || {}),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    PaperComponent: _ref13 => {
      var children = _ref13.children,
        other = _objectWithoutProperties(_ref13, _excluded3);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, other, {
        sx: {
          backgroundColor: 'white',
          left: '0',
          marginTop: '10px'
        }
      }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
        onClick: e => handleOpenOpenAutocomplete2(e),
        disabled: user.data.role === 'User',
        onMouseDown: e => e.preventDefault(),
        className: "btnCustomer7",
        style: {
          width: '100%'
        }
      }, "ADD NEW CATEGORY")));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, params, {
      label: "Category",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "accountName"
  }, "Account Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    required: true,
    id: "accountName",
    value: accountName,
    onChange: e => handleAccountChange(e),
    name: "accountName",
    label: "Account Name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    value: "Office"
  }, "Office"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    value: "Project"
  }, "Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    value: "Employee"
  }, "Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    value: "Home"
  }, "Home")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "expenseNumber"
  }, "Expense Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "expenseNumber",
    name: "expenseNumber",
    label: "Expense Number",
    value: String(expenseNumber).padStart(6, '0'),
    onChange: e => setExpenseNumber(parseInt(e.target.value) || 0),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      position: "start"
    }, "D-")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_43__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_44__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_42__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_45__.DatePicker, {
    required: true,
    name: "expenseDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_46___default()(expenseDate),
    onChange: date => setExpenseDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), accountName === 'Employee' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "reason"
  }, "Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    required: true,
    id: "reason",
    value: reason,
    onChange: e => handleChangeReason(e),
    name: "reason",
    label: "Reason"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    value: "Office"
  }, "Office"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    value: "Project"
  }, "Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    value: "None"
  }, "None")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    required: true,
    name: "description",
    id: "description",
    label: "Expense Description",
    value: description,
    multiline: true,
    maxRows: 5,
    onChange: e => setDescription(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), reason === "Project" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, accountNameInfo.name !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '75px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "Project",
    value: accountNameInfo.name,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleClearAccountName,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    options: project,
    getOptionLabel: option => option.projectName.toUpperCase(),
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], props, " ", option.customerName.customerName, " | ", option.projectName, " | ", option.description),
    onChange: (e, newValue) => handleChangeProject(newValue ? newValue : ''),
    inputValue: inputValueProject,
    onInputChange: (event, newInputValue) => {
      setInputValueProject(newInputValue);
    },
    filterOptions: (options, _ref14) => {
      var inputValue = _ref14.inputValue;
      return options.filter(option => option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) || option.projectName.toLowerCase().includes(inputValue.toLowerCase()) || option.description.toLowerCase().includes(inputValue.toLowerCase()));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, params, {
      label: "Project Name"
    })),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    options: project2,
    getOptionLabel: option => option.projectName.toUpperCase(),
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], props, " ", option.customerName.customerName, " | ", option.projectName, " | ", option.description),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, params, {
      label: "Project Name"
    })),
    onChange: (e, newValue) => handleChangeProject(newValue ? newValue : ''),
    inputValue: inputValueProject,
    onInputChange: (event, newInputValue) => {
      setInputValueProject(newInputValue);
    },
    filterOptions: (options, _ref15) => {
      var inputValue = _ref15.inputValue;
      return options.filter(option => option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) || option.projectName.toLowerCase().includes(inputValue.toLowerCase()) || option.description.toLowerCase().includes(inputValue.toLowerCase()));
    },
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Employee Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, employeeName ? employeeName.map((row, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: row.idInfo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      height: '100px'
    }
  }, row.employee !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      fontSize: '20px',
      fontWeight: 'bold'
    }
  }, row.employee ? row.employee : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "description",
    id: "description",
    value: row.description,
    multiline: true,
    rows: 3,
    placeholder: "Description",
    onChange: e => handleChangeEmployee(e, i),
    size: "small",
    disabled: user.data.role === 'User',
    sx: {
      width: '440px',
      backgroundColor: 'white',
      fontSize: 12
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => handleShowAutocomplete(row.idInfo),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disableClearable: true,
    options: filterEmployee,
    getOptionLabel: option => option.employeeName.toUpperCase(),
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
      sx: {
        backgroundColor: '#f2f2f2'
      }
    }), option.employeeName.toUpperCase()),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({
      multiline: true,
      rows: 4
    }, params, {
      required: true
    })),
    onChange: (e, newValue) => handleChange(row.idInfo, newValue),
    size: "small",
    sx: {
      width: '470px',
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    name: "amount",
    id: "amount",
    value: row.amount,
    onChange: e => handleChangeEmployee(e, i),
    size: "small",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disabled: true,
    name: "rate",
    id: "rate",
    value: row.rate || PayRate,
    onChange: e => handleChangeEmployee(e, i),
    size: "small",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disabled: true,
    name: "total",
    id: "total",
    value: row.total,
    onChange: e => handleChangeEmployee(e, i),
    size: "small",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    hidden: true,
    id: "amountTotalInvoice1"
  }, row.amount), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    hidden: true,
    id: "amountTotalInvoice"
  }, row.total), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
    title: "Delete",
    sx: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => deleteItem(row.idInfo)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  })))))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 2,
    style: {
      textAlign: 'center'
    }
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "amount",
    name: "amount",
    type: "number",
    label: "Total FC",
    value: amount,
    sx: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'center'
    }
  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "total",
    name: "total",
    type: "number",
    label: "Total $",
    value: total,
    sx: {
      width: '200px',
      backgroundColor: 'white'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'fixed',
      zIndex: '1'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: addItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      checked: CheckTvA,
      onChange: e => setCheckTvA(e.target.checked)
    }),
    label: "TVA (16%)"
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, accountNameInfo.name !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '75px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "Project",
    value: accountNameInfo.name,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleClearAccountName,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_39__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    options: project,
    disabled: accountName !== 'Project',
    getOptionLabel: option => option.projectName.toUpperCase(),
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], props, " ", option.customerName.customerName, " | ", option.projectName, " | ", option.description),
    onChange: (e, newValue) => handleChangeProject(newValue ? newValue : ''),
    inputValue: inputValueProject,
    onInputChange: (event, newInputValue) => {
      setInputValueProject(newInputValue);
    },
    filterOptions: (options, _ref16) => {
      var inputValue = _ref16.inputValue;
      return options.filter(option => option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) || option.projectName.toLowerCase().includes(inputValue.toLowerCase()) || option.description.toLowerCase().includes(inputValue.toLowerCase()));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, params, {
      label: "Project Name"
    })),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    options: project2,
    disabled: accountName !== 'Project',
    getOptionLabel: option => option.projectName.toUpperCase(),
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], props, " ", option.customerName.customerName, " | ", option.projectName, " | ", option.description),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], _extends({}, params, {
      label: "Project Name"
    })),
    onChange: (e, newValue) => handleChangeProject(newValue ? newValue : ''),
    inputValue: inputValueProject,
    onInputChange: (event, newInputValue) => {
      setInputValueProject(newInputValue);
    },
    filterOptions: (options, _ref17) => {
      var inputValue = _ref17.inputValue;
      return options.filter(option => option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) || option.projectName.toLowerCase().includes(inputValue.toLowerCase()) || option.description.toLowerCase().includes(inputValue.toLowerCase()));
    },
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    required: true,
    name: "description",
    id: "description",
    label: "Expense Description",
    value: description,
    multiline: true,
    maxRows: 5,
    onChange: e => setDescription(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "amount"
  }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "amount",
    name: "amount",
    type: "number",
    label: "Amount",
    value: amount,
    onChange: e => setAmount(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      position: "start"
    }, "Fc")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "rate"
  }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "rate",
    name: "rate",
    type: "number",
    label: "Rate",
    value: rate,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      position: "start"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CurrencyExchange__WEBPACK_IMPORTED_MODULE_54__["default"], null))
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "total"
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "total",
    name: "total",
    type: "number",
    label: "Total",
    value: total,
    onChange: e => setTotal(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      position: "start"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_MonetizationOn__WEBPACK_IMPORTED_MODULE_55__["default"], null))
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 3,
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      checked: CheckTvA,
      onChange: e => setCheckTvA(e.target.checked)
    }),
    label: "TVA (16%)"
  }))), filterCash === 'Close' ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, "Saving...")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: openBack,
    onClose: handleCloseBack,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_56__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Do you want to stop creating daily expenses ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop creating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate('/DailyExpenses'),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: handleCloseBack,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_21__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_50__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_48__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleDecision('stay'),
    className: "btnCustomer"
  }, "Add New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleDecision('previous'),
    className: "btnCustomer"
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_21__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_50__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_49__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      color: 'red'
    }
  }, "Saving Failed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "txt2"
  }, "Please Check the Previous Invoice Number And the New Invoice Number Can Not be The Same"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt1",
    style: {
      color: 'red'
    }
  }, "Note:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, "To Add Number Click On the Arrow Up Button")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: modalOpenLoading,
    onClose: handleCloseOpenAutocomplete2,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_21__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_50__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_48__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data successfully Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCloseOpenAutocomplete2,
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: openAutocomplete2,
    onClose: handleCloseOpenAutocomplete2,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_56__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Create Expenses Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitCategory
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "expensesCategory",
    name: "expensesCategory",
    value: expensesCategory,
    label: "Expenses Category",
    onChange: e => setExpensesCategory(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DailyExpenseForm);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRGFpbHlFeHBlbnNlc19EYWlseUV4cGVuc2VGb3JtX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLFNBQVMsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05WOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLDBCQUEwQixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjNCOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLHlCQUF5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMUIsQ0FBbUQ7QUFDUTtBQUNuQztBQUNFO0FBQzBCO0FBQ3NCO0FBQ1I7QUFDZDtBQUM2UDtBQUNqUDtBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDUTtBQUNBO0FBQ2M7QUFDSTtBQUN4QztBQUN3QjtBQUNRO0FBQ2dEO0FBQ2hGO0FBQ3FCO0FBQ29CO0FBQ2E7QUFDaEI7QUFDSjtBQUNsQztBQUM0QjtBQUNRO0FBQ1Y7QUFDTDtBQUNRO0FBQytCO0FBQ3RDO0FBQ29CO0FBQ0o7QUFDbEI7QUFDZTtBQUNFO0FBQ1Q7QUFDUTtBQUk5RCxJQUFNNkUsWUFBWSxHQUFHckQsMERBQU0sQ0FBQ3NELElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNoRGxGLDBEQUFBLENBQUNrQyw4REFBTyxFQUFBa0QsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8s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O0lBQU87RUFBRSxHQUFDLE1BQVksQ0FDbkUsQ0FDRixDQUNGLENBQ0gsQ0FDQSxDQUNKLENBQUM7QUFFVjtBQUVBLGlFQUFlZ0MsZ0JBQWdCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0FkZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0RyYWdJbmRpY2F0b3JSb3VuZGVkLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vUmVtb3ZlQ2lyY2xlT3V0bGluZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvRGFpbHlFeHBlbnNlcy9EYWlseUV4cGVuc2VGb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ6XCJcbn0pLCAnQWRkJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTEgMThjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0yLThjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0ybTAtNmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJtNiA0YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMm0wIDJjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0ybTAgNmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJcIlxufSksICdEcmFnSW5kaWNhdG9yUm91bmRlZCcpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTcgMTF2MmgxMHYtMnptNS05QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAybTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4XCJcbn0pLCAnUmVtb3ZlQ2lyY2xlT3V0bGluZScpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2lkZWJhckRhc2gxIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaDEnO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZVJvdywgVGFibGVIZWFkLCBQYXBlciwgVGFibGVDb250YWluZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgQXV0b2NvbXBsZXRlLCBzdHlsZWQsIE1vZGFsLCBCYWNrZHJvcCwgRmFkZSwgQm94LCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgRGl2aWRlciwgQ2hlY2tib3gsIEZvcm1Db250cm9sTGFiZWwgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IGludmFsaWRhdGVDYWNoZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2FwaUNhY2hlJztcclxuaW1wb3J0IHsgQWRkLCBBcnJvd1Vwd2FyZE91dGxpbmVkLCBEcmFnSW5kaWNhdG9yUm91bmRlZCwgUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBDdXJyZW5jeUV4Y2hhbmdlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ3VycmVuY3lFeGNoYW5nZSc7XHJcbmltcG9ydCBNb25ldGl6YXRpb25PbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vbmV0aXphdGlvbk9uJztcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgUHJvamVjdEZvcm1WaWV3IGZyb20gJy4uL1Byb2plY3RWaWV3L1Byb2plY3RGb3JtVmlldyc7XHJcbmltcG9ydCBQcm9qZWN0Rm9ybVZpZXcyIGZyb20gJy4uL1Byb2plY3RWaWV3L1Byb2plY3RGb3JtVmlldzInO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuXHJcblxyXG5cclxuY29uc3QgTGlnaHRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQmxhY2tUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IHN0eWxlMiA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDgwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIERhaWx5RXhwZW5zZUZvcm0oKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlbXBsb3llZSwgc2V0RW1wbG95ZWVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwcm9qZWN0LCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvamVjdDIsIHNldFByb2plY3QyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbUGF5UmF0ZSwgc2V0UGF5UmF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZXhwZW5zZUNhdGVnb3J5LCBzZXRFeHBlbnNlQ2F0ZWdvcnldID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtlbXBsb3llZU5hbWUsIHNldEVtcGxveWVlTmFtZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FjY291bnROYW1lLCBzZXRBY2NvdW50TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaW5wdXRWYWx1ZVByb2plY3QsIHNldElucHV0VmFsdWVQcm9qZWN0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYWNjb3VudE5hbWVJbmZvLCBzZXRBY2NvdW50TmFtZUluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgX2lkOiBcIlwiLFxyXG4gICAgbmFtZTogXCJcIlxyXG4gIH0pO1xyXG4gIGNvbnN0IFtleHBlbnNlRGF0ZSwgc2V0RXhwZW5zZURhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSk7XHJcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2V4cGVuc2VOdW1iZXIsIHNldEV4cGVuc2VOdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2V4cGVuc2VzQ2F0ZWdvcnksIHNldEV4cGVuc2VzQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW0NoZWNrVHZBLCBzZXRDaGVja1R2QV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RheCwgc2V0VGF4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtvcGVuQXV0b2NvbXBsZXRlMSwgc2V0T3BlbkF1dG9jb21wbGV0ZTFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuQXV0b2NvbXBsZXRlMiwgc2V0T3BlbkF1dG9jb21wbGV0ZTJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjYXNoLCBzZXRDYXNoXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBkYXRlQ29tbWVudCA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgZGF0ZUZvcm1hdGUgPSBkYXlqcyhkYXRlQ29tbWVudCkuZm9ybWF0KCdERC9NTS9ZWVlZJylcclxuICBjb25zdCBDcmVhdGUgPSB7XHJcbiAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgQ3JlYXRlZCAnLFxyXG4gICAgZGF0ZUNvbW1lbnQ6IGRhdGVGb3JtYXRlXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdFJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcHJvamVjdHNgKVxyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9leHBlbnNlc0NhdGVnb3J5YClcclxuICAgICAgICBjb25zdCBlbXBsb3llZVJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZW1wbG95ZWVgKVxyXG4gICAgICAgIHNldFByb2plY3QocHJvamVjdFJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgc2V0UHJvamVjdDIocHJvamVjdFJlc3BvbnNlLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuc3RhdHVzID09PSBcIk9uLUdvaW5nXCIpKTtcclxuICAgICAgICBzZXRDYXRlZ29yaWVzKGNhdGVnb3J5UmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRFbXBsb3llZShlbXBsb3llZVJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNobGFzdE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbGFzdC1zYXZlZC1leHBlbnNlYClcclxuICAgICAgICBjb25zdCBudW0gPSByZXMuZGF0YSAmJiByZXMuZGF0YS5leHBlbnNlTnVtYmVyID8gKHBhcnNlSW50KHJlcy5kYXRhPy5kYXRhPy5leHBlbnNlTnVtYmVyIHx8IHJlcy5kYXRhPy5leHBlbnNlTnVtYmVyIHx8IDApKSA6IDA7XHJcbiAgICAgICAgc2V0RXhwZW5zZU51bWJlcihudW0gKyAxKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaGxhc3ROdW1iZXIoKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMSA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTEgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTIodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTIoZmFsc2UpO1xyXG4gICAgc2V0TW9kYWxPcGVuTG9hZGluZyhmYWxzZSlcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3JhdGVgKVxyXG4gICAgICAgIHJlcy5kYXRhLmRhdGEubWFwKChyb3cpID0+IHNldFJhdGUocm93LnJhdGUpKVxyXG4gICAgICAgIGNvbnN0IGNhc2hSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2Nhc2hgKVxyXG4gICAgICAgIHNldENhc2goY2FzaFJlc3BvbnNlLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiBkYXlqcyhyb3cuY2FzaERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpID09PSBkYXlqcyhleHBlbnNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJykpXHJcbiAgICAgICAgICAubWFwKChyb3cpID0+IHJvdy5zdGF0dXMpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbZXhwZW5zZURhdGVdKTtcclxuICBjb25zdCBmaWx0ZXJDYXNoID0gY2FzaC5tYXAoKHJvdykgPT4gcm93KS50b1N0cmluZygpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wYXltZW50UmF0ZWApO1xyXG4gICAgICAgIChyZXMuZGF0YT8uZGF0YSB8fCBbXSkubWFwKChyb3cpID0+IHNldFBheVJhdGUocm93LnBheW1lbnRSYXRlKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWNjb3VudE5hbWUgPT09ICdFbXBsb3llZScpIHJldHVybjtcclxuICAgIGlmIChhbW91bnQgPiAwKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRSYXRlID0gcGFyc2VGbG9hdChyYXRlIHx8IDEpO1xyXG4gICAgICBjb25zdCBuZXdUb3RhbCA9IChjdXJyZW50UmF0ZSA+IDApID8gKHBhcnNlRmxvYXQoYW1vdW50IHx8IDApIC8gY3VycmVudFJhdGUpIDogMDtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gTWF0aC5yb3VuZChuZXdUb3RhbCAqIDEwMCkgLyAxMDA7XHJcbiAgICAgIHNldFRvdGFsKHJlc3VsdCk7XHJcbiAgICAgIHNldFRheChDaGVja1R2QSA/IE1hdGgucm91bmQocmVzdWx0ICogMC4xNiAqIDEwMCkgLyAxMDAgOiAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIElmIGFtb3VudCBpcyAwIChtYW51YWwgVVNEIGVudHJ5KSwgc3RpbGwgdXBkYXRlIHRoZSB0YXggYmFzZWQgb24gdGhlIGN1cnJlbnQgdG90YWxcclxuICAgICAgLy8gQnV0IG9ubHkgaWYgdG90YWwgaXMgYWN0dWFsbHkgYSBudW1iZXJcclxuICAgICAgY29uc3QgY3VycmVudFRvdGFsID0gcGFyc2VGbG9hdCh0b3RhbCkgfHwgMDtcclxuICAgICAgc2V0VGF4KENoZWNrVHZBID8gTWF0aC5yb3VuZChjdXJyZW50VG90YWwgKiAwLjE2ICogMTAwKSAvIDEwMCA6IDApO1xyXG4gICAgfVxyXG4gIH0sIFthbW91bnQsIHJhdGUsIHRvdGFsLCBDaGVja1R2QSwgYWNjb3VudE5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWNjb3VudENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRBY2NvdW50TmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgIHNldEFjY291bnROYW1lSW5mbyh7XHJcbiAgICAgIF9pZDogXCJcIixcclxuICAgICAgbmFtZTogXCJcIlxyXG4gICAgfSk7XHJcbiAgICBzZXRUb3RhbCgwKTtcclxuICAgIHNldEFtb3VudCgwKVxyXG4gICAgc2V0RW1wbG95ZWVOYW1lKFtdKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VSZWFzb24gPSAoZSkgPT4ge1xyXG4gICAgc2V0UmVhc29uKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgc2V0QWNjb3VudE5hbWVJbmZvKHtcclxuICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICBuYW1lOiBcIlwiXHJcbiAgICB9KTtcclxuICB9XHJcbiAgey8qKiBFbXBsb3llZSBTdGFydCAqLyB9XHJcbiAgY29uc3QgZmlsdGVyRW1wbG95ZWUgPSBlbXBsb3llZS5maWx0ZXIoKHJvdykgPT4gcm93LnN0YXR1cyAhPT0gJ1N1c3BlbmRlZCcgJiYgcm93LnN0YXR1cyAhPT0gJ0ZpcmVkJyAmJiByb3cuc3RhdHVzICE9PSAnUmVzaWduJylcclxuICBjb25zdCBhZGRJdGVtID0gKCkgPT4ge1xyXG4gICAgc2V0RW1wbG95ZWVOYW1lKFsuLi5lbXBsb3llZU5hbWUsIHtcclxuICAgICAgaWRJbmZvOiB2NCgpLFxyXG4gICAgICBpZFJvdzogXCJcIixcclxuICAgICAgZW1wbG95ZWU6IFwiXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBhbW91bnQ6IDAsXHJcbiAgICAgIHJhdGU6IFBheVJhdGUsXHJcbiAgICAgIHRvdGFsOiAwLFxyXG4gICAgfV0pO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VFbXBsb3llZSA9IChlLCBpKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIGNvbnN0IGxpc3QgPSBbLi4uZW1wbG95ZWVOYW1lXTtcclxuICAgIGxpc3RbaV1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIGlmICghbGlzdFtpXVsncmF0ZSddIHx8IHBhcnNlRmxvYXQobGlzdFtpXVsncmF0ZSddKSA9PT0gMCkge1xyXG4gICAgICBsaXN0W2ldWydyYXRlJ10gPSBQYXlSYXRlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY3VycmVudFJhdGUgPSBwYXJzZUZsb2F0KGxpc3RbaV1bJ3JhdGUnXSB8fCBQYXlSYXRlIHx8IDEpO1xyXG4gICAgY29uc3QgY3VycmVudEFtb3VudCA9IHBhcnNlRmxvYXQobGlzdFtpXVsnYW1vdW50J10gfHwgMCk7XHJcbiAgICBsaXN0W2ldWyd0b3RhbCddID0gKGN1cnJlbnRSYXRlID4gMCkgPyBNYXRoLnJvdW5kKChjdXJyZW50QW1vdW50IC8gY3VycmVudFJhdGUpICogMTAwKSAvIDEwMCA6IDA7XHJcbiAgICBzZXRFbXBsb3llZU5hbWUobGlzdClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGlkSW5mbywgbmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IGVtcGxveWVlLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uID09PSBuZXdWYWx1ZSlcclxuICAgIHNldEVtcGxveWVlTmFtZShlbXBsb3llZU5hbWUgPT4gZW1wbG95ZWVOYW1lLm1hcCgocm93KSA9PiByb3cuaWRJbmZvID09PSBpZEluZm8gPyB7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgaWRSb3c6IHNlbGVjdGVkT3B0aW9ucz8uX2lkLFxyXG4gICAgICBlbXBsb3llZTogc2VsZWN0ZWRPcHRpb25zPy5lbXBsb3llZU5hbWUsXHJcbiAgICAgIHJhdGU6IHJvdy5yYXRlIHx8IFBheVJhdGVcclxuICAgIH0gOiByb3cpKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU2hvd0F1dG9jb21wbGV0ZSA9IChpZEluZm8pID0+IHtcclxuICAgIHNldEVtcGxveWVlTmFtZShlbXBsb3llZU5hbWUgPT4gZW1wbG95ZWVOYW1lLm1hcCgocm93KSA9PiByb3cuaWRJbmZvID09PSBpZEluZm8gPyB7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgaWRSb3c6ICcnLFxyXG4gICAgICBlbXBsb3llZTogXCJcIixcclxuICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICBhbW91bnQ6IDAsXHJcbiAgICAgIHJhdGU6IFBheVJhdGUsXHJcbiAgICAgIHRvdGFsOiAwLFxyXG4gICAgfSA6IHJvdykpXHJcbiAgfVxyXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSBpZEluZm8gPT4ge1xyXG4gICAgc2V0RW1wbG95ZWVOYW1lKGVtcGxveWVlTmFtZSA9PiBlbXBsb3llZU5hbWUuZmlsdGVyKChJdGVtKSA9PiBJdGVtLmlkSW5mbyAhPT0gaWRJbmZvKSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gT25seSBydW4gdGhpcyBpZiB3ZSBhcmUgaW4gRW1wbG95ZWUgbW9kZVxyXG4gICAgaWYgKGFjY291bnROYW1lICE9PSAnRW1wbG95ZWUnKSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgc3VtID0gZW1wbG95ZWVOYW1lLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIChwYXJzZUZsb2F0KHJvdy50b3RhbCkgfHwgMCksIDApO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gTWF0aC5yb3VuZChzdW0gKiAxMDApIC8gMTAwO1xyXG4gICAgc2V0VG90YWwocmVzdWx0KTtcclxuICAgIHNldFRheChDaGVja1R2QSA/IHJlc3VsdCAqIDAuMTYgOiAwKTtcclxuXHJcbiAgICBjb25zdCBzdW0xID0gZW1wbG95ZWVOYW1lLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIChwYXJzZUZsb2F0KHJvdy5hbW91bnQpIHx8IDApLCAwKTtcclxuICAgIGNvbnN0IHJlc3VsdDEgPSBNYXRoLnJvdW5kKHN1bTEgKiAxMDApIC8gMTAwO1xyXG4gICAgc2V0QW1vdW50KHJlc3VsdDEpO1xyXG4gIH0sIFtlbXBsb3llZU5hbWUsIENoZWNrVHZBLCBhY2NvdW50TmFtZV0pOyAvLyBBZGRlZCBtaXNzaW5nIGRlcGVuZGVuY2llc1xyXG4gIHsvKiogRW1wbG95ZWUgRW5kICovIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VQcm9qZWN0ID0gKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBwcm9qZWN0LmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uID09PSBuZXdWYWx1ZSlcclxuICAgIHNldEFjY291bnROYW1lSW5mbyh7XHJcbiAgICAgIF9pZDogc2VsZWN0ZWRPcHRpb25zPy5faWQsXHJcbiAgICAgIG5hbWU6IHNlbGVjdGVkT3B0aW9ucz8ucHJvamVjdE5hbWVcclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbGVhckFjY291bnROYW1lID0gKCkgPT4ge1xyXG4gICAgc2V0QWNjb3VudE5hbWVJbmZvKHtcclxuICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICBuYW1lOiBcIlwiXHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgW29wZW5CYWNrLCBzZXRPcGVuQmFja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5CYWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbkJhY2sodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQmFjayhmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbE9wZW5Mb2FkaW5nLCBzZXRNb2RhbE9wZW5Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxPcGVuTG9hZGluZyh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICBzZXRBY2NvdW50TmFtZShcIlwiKTtcclxuICAgIHNldEFjY291bnROYW1lSW5mbyh7IF9pZDogXCJcIiwgbmFtZTogXCJcIiB9KTtcclxuICAgIHNldEV4cGVuc2VDYXRlZ29yeSh7fSk7XHJcbiAgICBzZXRJbnB1dFZhbHVlUHJvamVjdCgnJyk7XHJcbiAgICBzZXREZXNjcmlwdGlvbihcIlwiKTtcclxuICAgIHNldEV4cGVuc2VEYXRlKG5ldyBEYXRlKCkpO1xyXG4gICAgc2V0QW1vdW50KDApO1xyXG4gICAgc2V0VG90YWwoMCk7XHJcbiAgICBzZXRFbXBsb3llZU5hbWUoW10pO1xyXG4gICAgc2V0UmVhc29uKFwiXCIpO1xyXG4gICAgc2V0Q2hlY2tUdkEoZmFsc2UpO1xyXG4gICAgc2V0VGF4KDApO1xyXG4gICAgc2V0RXhwZW5zZU51bWJlcihwcmV2ID0+IE51bWJlcihwcmV2KSArIDEpO1xyXG4gICAgc2V0U2F2aW5nKCcnKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VBZGQgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVjaXNpb24gPSAobmF2aWdhdGUpID0+IHtcclxuICAgIC8vTmF2aWdhdGUgQmFzZWQgb24gdGggRGVjaXNpb25cclxuICAgIGlmIChuYXZpZ2F0ZSA9PT0gJ3ByZXZpb3VzJykge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRlID09PSAnc3RheScpIHtcclxuICAgICAgaGFuZGxlQ2xvc2UoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0Q2F0ZWdvcnkgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGV4cGVuc2VzQ2F0ZWdvcnlcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtZXhwZW5zZXNDYXRlZ29yeWAsIGRhdGEpO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaGFuZGxlT3Blbk1vZGFsKCk7XHJcbiAgICAgICAgc2V0Q2F0ZWdvcmllcyhbLi4uY2F0ZWdvcmllcywgcmVzLmRhdGEuZGF0YV0pXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KCdBbiBlcnJvciBhcyBPY2N1cicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jIChSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyLCBSZWZlcmVuY2VJbmZvQ2F0ZWdvcnkpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogUmVmZXJlbmNlSW5mbyxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIENyZWF0ZWQgRVhQRU5TRSAnLFxyXG4gICAgICByZWFzb246IGBELSR7U3RyaW5nKFJlZmVyZW5jZUluZm9OdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9IEZvciAke1JlZmVyZW5jZUluZm9DYXRlZ29yeX0gdG8gJHthY2NvdW50TmFtZX0gQWNjb3VudCBXaGljaCBIYXMgYSBEZXNjcmlwdGlvbjogJHtkZXNjcmlwdGlvbn1gLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBkYXRlQ29tbWVudFxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2F2aW5nKCd0cnVlJylcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIF9pZDogdjQoKSxcclxuICAgICAgZXhwZW5zZUNhdGVnb3J5LCBhY2NvdW50TmFtZSxcclxuICAgICAgZGVzY3JpcHRpb24sIGV4cGVuc2VEYXRlLCBhbW91bnQsXHJcbiAgICAgIGVtcGxveWVlTmFtZSxcclxuICAgICAgQ2hlY2tUdkEsXHJcbiAgICAgIGNoZWNrVHZBOiBDaGVja1R2QSxcclxuICAgICAgQ2hlY2tUdmE6IENoZWNrVHZBLFxyXG4gICAgICBoYXNUVkE6IENoZWNrVHZBLFxyXG4gICAgICB0dmE6IENoZWNrVHZBLFxyXG4gICAgICBUVkE6IENoZWNrVHZBLFxyXG4gICAgICB0YXg6IENoZWNrVHZBID8gTnVtYmVyKHRvdGFsKSAqIDAuMTYgOiAwLFxyXG4gICAgICB0YXhBbW91bnQ6IENoZWNrVHZBID8gTnVtYmVyKHRvdGFsKSAqIDAuMTYgOiAwLFxyXG4gICAgICB2YXRBbW91bnQ6IENoZWNrVHZBID8gTnVtYmVyKHRvdGFsKSAqIDAuMTYgOiAwLFxyXG4gICAgICBUdmFBbW91bnQ6IENoZWNrVHZBID8gTnVtYmVyKHRvdGFsKSAqIDAuMTYgOiAwLFxyXG4gICAgICB0YXhVU0Q6IENoZWNrVHZBID8gTnVtYmVyKHRvdGFsKSAqIDAuMTYgOiAwLFxyXG4gICAgICByYXRlOiBhY2NvdW50TmFtZSA9PT0gJ0VtcGxveWVlJyA/IFBheVJhdGUgOiByYXRlXHJcbiAgICAgICwgdG90YWwsIGV4cGVuc2VOdW1iZXIsIGFjY291bnROYW1lSW5mbywgcmVhc29uLCBDcmVhdGUsIHN5bmNlZDogZmFsc2VcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtZXhwZW5zZWAsIGRhdGEpO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaW52YWxpZGF0ZUNhY2hlKCcvZXhwZW5zZScpO1xyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvID0gcmVzLmRhdGEuZGF0YS5faWRcclxuICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvTnVtYmVyID0gcmVzLmRhdGEuZGF0YS5leHBlbnNlTnVtYmVyXHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mb0NhdGVnb3J5ID0gcmVzLmRhdGEuZGF0YS5leHBlbnNlQ2F0ZWdvcnkuZXhwZW5zZXNDYXRlZ29yeVxyXG4gICAgICAgIC8vIGF3YWl0IGRiLmRhaWx5RXhwZW5zZVNjaGVtYS5hZGQoey4uLnJlcy5kYXRhLmRhdGEsX2lkOnJlcy5kYXRhLmRhdGEuX2lkLCBzeW5jZWQ6IHRydWUgfSlcclxuICAgICAgICBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oUmVmZXJlbmNlSW5mbywgUmVmZXJlbmNlSW5mb051bWJlciwgUmVmZXJlbmNlSW5mb0NhdGVnb3J5KVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBzZXRTYXZpbmcoJycpXHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGQgbmV3IEV4cGVuc2VzXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlbkJhY2t9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19Pnt1c2VyLmRhdGEudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoMSAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogNCB9fSA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZXhwZW5zZXNDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhPcHRpb24pID0+IE9wdGlvbi5leHBlbnNlc0NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e09iamVjdC5rZXlzKGV4cGVuc2VDYXRlZ29yeSkubGVuZ3RoID09PSAwID8gbnVsbCA6IGV4cGVuc2VDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IHNldEV4cGVuc2VDYXRlZ29yeShuZXdWYWx1ZSB8fCB7fSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB7Li4ub3RoZXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgbGVmdDogJzAnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMihlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNycgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREIE5FVyBDQVRFR09SWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiQ2F0ZWdvcnlcIiByZXF1aXJlZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiYWNjb3VudE5hbWVcIj5BY2NvdW50IE5hbWU8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWNjb3VudE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWNjb3VudE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQWNjb3VudENoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjY291bnROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBY2NvdW50IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJPZmZpY2VcIj5PZmZpY2U8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJQcm9qZWN0XCI+UHJvamVjdDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkVtcGxveWVlXCI+RW1wbG95ZWU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJIb21lXCI+SG9tZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiZXhwZW5zZU51bWJlclwiPkV4cGVuc2UgTnVtYmVyPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2V4cGVuc2VOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2V4cGVuc2VOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFeHBlbnNlIE51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1N0cmluZyhleHBlbnNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEV4cGVuc2VOdW1iZXIocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpIHx8IDApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5ELTwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2V4cGVuc2VEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhleHBlbnNlRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRFeHBlbnNlRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lID09PSAnRW1wbG95ZWUnID9cclxuICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwicmVhc29uXCI+UmVhc29uPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJlYXNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWFzb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlUmVhc29uKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVhc29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZWFzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJPZmZpY2VcIj5PZmZpY2U8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJQcm9qZWN0XCI+UHJvamVjdDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIk5vbmVcIj5Ob25lPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFeHBlbnNlIERlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSb3dzPXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWFzb24gPT09IFwiUHJvamVjdFwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lSW5mby5uYW1lICE9PSBcIlwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc3NXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdQcm9qZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY2NvdW50TmFtZUluZm8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJBY2NvdW50TmFtZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvamVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5wcm9qZWN0TmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9PiB7b3B0aW9uLmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWV9IHwge29wdGlvbi5wcm9qZWN0TmFtZX0gfCB7b3B0aW9uLmRlc2NyaXB0aW9ufTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZVByb2plY3QobmV3VmFsdWUgPyBuZXdWYWx1ZSA6ICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZVByb2plY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWVQcm9qZWN0KG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucywgeyBpbnB1dFZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIlByb2plY3QgTmFtZVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9qZWN0Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5wcm9qZWN0TmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9PiB7b3B0aW9uLmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWV9IHwge29wdGlvbi5wcm9qZWN0TmFtZX0gfCB7b3B0aW9uLmRlc2NyaXB0aW9ufTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiUHJvamVjdCBOYW1lXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZVByb2plY3QobmV3VmFsdWUgPyBuZXdWYWx1ZSA6ICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZVByb2plY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWVQcm9qZWN0KG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucywgeyBpbnB1dFZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD4gOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZUluZm8xMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVtcGxveWVlIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BbW91bnQgRkM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlTmFtZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbXBsb3llZU5hbWUubWFwKChyb3csIGkpID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Jvdy5pZEluZm99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48RHJhZ0luZGljYXRvclJvdW5kZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBoZWlnaHQ6ICcxMDBweCcgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuZW1wbG95ZWUgIT09ICcnID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6ICcyMHB4JywgZm9udFdlaWdodDogJ2JvbGQnIH19Pntyb3cuZW1wbG95ZWUgPyByb3cuZW1wbG95ZWUgOiAnJ308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nIGlkPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb3cuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUVtcGxveWVlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGUocm93LmlkSW5mbyl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlckVtcGxveWVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLmVtcGxveWVlTmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNmMmYyZjInIH19PntvcHRpb24uZW1wbG95ZWVOYW1lLnRvVXBwZXJDYXNlKCl9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9IHsuLi5wYXJhbXN9IHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZShyb3cuaWRJbmZvLCBuZXdWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNDcwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYW1vdW50JyBpZD0nYW1vdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm93LmFtb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VFbXBsb3llZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncmF0ZScgaWQ9J3JhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb3cucmF0ZSB8fCBQYXlSYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUVtcGxveWVlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0b3RhbCcgaWQ9J3RvdGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm93LnRvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUVtcGxveWVlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGhpZGRlbiBpZD0nYW1vdW50VG90YWxJbnZvaWNlMSc+e3Jvdy5hbW91bnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaGlkZGVuIGlkPSdhbW91bnRUb3RhbEludm9pY2UnPntyb3cudG90YWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShyb3cuaWRJbmZvKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXsyfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2Ftb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYW1vdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdUb3RhbCBGQydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ndG90YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3RvdGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdUb3RhbCAkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMjAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCB6SW5kZXg6ICcxJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCBjb250cm9sPXs8Q2hlY2tib3ggY2hlY2tlZD17Q2hlY2tUdkF9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2tUdkEoZS50YXJnZXQuY2hlY2tlZCl9IC8+fSBsYWJlbD1cIlRWQSAoMTYlKVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3VudE5hbWVJbmZvLm5hbWUgIT09IFwiXCIgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc3NXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1Byb2plY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY2NvdW50TmFtZUluZm8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsZWFyQWNjb3VudE5hbWV9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9qZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjY291bnROYW1lICE9PSAnUHJvamVjdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLnByb2plY3ROYW1lLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9PiB7b3B0aW9uLmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWV9IHwge29wdGlvbi5wcm9qZWN0TmFtZX0gfCB7b3B0aW9uLmRlc2NyaXB0aW9ufTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBoYW5kbGVDaGFuZ2VQcm9qZWN0KG5ld1ZhbHVlID8gbmV3VmFsdWUgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlUHJvamVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlUHJvamVjdChuZXdJbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucywgeyBpbnB1dFZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5wcm9qZWN0TmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiUHJvamVjdCBOYW1lXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICg8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9qZWN0Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY2NvdW50TmFtZSAhPT0gJ1Byb2plY3QnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5wcm9qZWN0TmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsIG9wdGlvbikgPT4gKDxCb3ggey4uLnByb3BzfT4ge29wdGlvbi5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lfSB8IHtvcHRpb24ucHJvamVjdE5hbWV9IHwge29wdGlvbi5kZXNjcmlwdGlvbn08L0JveD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJQcm9qZWN0IE5hbWVcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZVByb2plY3QobmV3VmFsdWUgPyBuZXdWYWx1ZSA6ICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWVQcm9qZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGV2ZW50LCBuZXdJbnB1dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWVQcm9qZWN0KG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbnM9eyhvcHRpb25zLCB7IGlucHV0VmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFeHBlbnNlIERlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSb3dzPXs1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdhbW91bnQnPkFtb3VudDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nYW1vdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Ftb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Ftb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPSdzdGFydCc+RmM8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9J3JhdGUnPlJhdGU8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3JhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncmF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1JhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj0nc3RhcnQnPjxDdXJyZW5jeUV4Y2hhbmdlIC8+PC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSd0b3RhbCc+VG90YWw8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3RvdGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3RvdGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVG90YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VG90YWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249J3N0YXJ0Jz48TW9uZXRpemF0aW9uT24gLz48L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIGNvbnRyb2w9ezxDaGVja2JveCBjaGVja2VkPXtDaGVja1R2QX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVja1R2QShlLnRhcmdldC5jaGVja2VkKX0gLz59IGxhYmVsPVwiVFZBICgxNiUpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJDYXNoID09PSAnQ2xvc2UnID8gbnVsbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZpbmcgIT09ICd0cnVlJyA/IDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+IDogPHAgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+U2F2aW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQmFja31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUJhY2t9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RG8geW91IHdhbnQgdG8gc3RvcCBjcmVhdGluZyBkYWlseSBleHBlbnNlcyA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGUgOjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiPiBJZiB5b3Ugc3RvcCBjcmVhdGluZyB3aXRob3V0IHNhdmluZywgYWxsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3Q8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9EYWlseUV4cGVuc2VzJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+WWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ObzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzIwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2lzaW9uKCdzdGF5Jyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBBZGQgTmV3XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3ByZXZpb3VzJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5TYXZpbmcgRmFpbGVkPC9oMj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0eHQyXCI+UGxlYXNlIENoZWNrIHRoZSBQcmV2aW91cyBJbnZvaWNlIE51bWJlciBBbmQgdGhlIE5ldyBJbnZvaWNlIE51bWJlciBDYW4gTm90IGJlIFRoZSBTYW1lPC9wPlxyXG4gICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT0ndHh0MScgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGU6PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj5UbyBBZGQgTnVtYmVyIENsaWNrIE9uIHRoZSBBcnJvdyBVcCBCdXR0b248L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7Lyo8TW9kYWxcclxuICAgICAgb3Blbj17b3BlbkF1dG9jb21wbGV0ZTF9XHJcbiAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTF9XHJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgID5cclxuICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMX0gc3R5bGU9e3sgcG9zaXRpb246J3JlbGF0aXZlJywgZmxvYXQ6J3JpZ2h0J319PiBcclxuICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17e2NvbG9yOicjMjAyYTVhJ319Lz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0Oic2MDBweCcsIHBhZGRpbmc6JzIwcHgnLG92ZXJmbG93OidoaWRkZW4nLG92ZXJmbG93WTonc2Nyb2xsJ319PlxyXG4gICAgICAgICAgICA8UHJvamVjdEZvcm1WaWV3MiBvbkNyZWF0ZU9wdGlvbj17aGFuZGxlQ3JlYXRlUHJvamVjdH0gb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMX0vPiAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD4qL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bW9kYWxPcGVuTG9hZGluZ31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGgyPiBEYXRhIHN1Y2Nlc3NmdWxseSBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgQ3JlYXRlIEV4cGVuc2VzIENhdGVnb3J5XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0Q2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdleHBlbnNlc0NhdGVnb3J5J1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdleHBlbnNlc0NhdGVnb3J5J1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZXhwZW5zZXNDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J0V4cGVuc2VzIENhdGVnb3J5J1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEV4cGVuc2VzQ2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYWlseUV4cGVuc2VGb3JtXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhckRhc2gxIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiRGVsZXRlSWNvbiIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlUm93IiwiVGFibGVIZWFkIiwiUGFwZXIiLCJUYWJsZUNvbnRhaW5lciIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIlR5cG9ncmFwaHkiLCJBdXRvY29tcGxldGUiLCJzdHlsZWQiLCJNb2RhbCIsIkJhY2tkcm9wIiwiRmFkZSIsIkJveCIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIkRpdmlkZXIiLCJDaGVja2JveCIsIkZvcm1Db250cm9sTGFiZWwiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJDb250YWluZXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJpbnZhbGlkYXRlQ2FjaGUiLCJBZGQiLCJBcnJvd1Vwd2FyZE91dGxpbmVkIiwiRHJhZ0luZGljYXRvclJvdW5kZWQiLCJSZW1vdmVDaXJjbGVPdXRsaW5lIiwidjQiLCJ1c2VOYXZpZ2F0ZSIsIkRlbW9Db250YWluZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXlqcyIsIkRhdGVQaWNrZXIiLCJkYXlqcyIsIkFycm93QmFjayIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2FkZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiQ3VycmVuY3lFeGNoYW5nZSIsIk1vbmV0aXphdGlvbk9uIiwiQ2xvc2UiLCJQcm9qZWN0Rm9ybVZpZXciLCJQcm9qZWN0Rm9ybVZpZXcyIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiTGlnaHRUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJCbGFja1Rvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwic3R5bGUyIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNSIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmNiIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkRhaWx5RXhwZW5zZUZvcm0iLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmNyIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImVtcGxveWVlIiwic2V0RW1wbG95ZWUiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInByb2plY3QiLCJzZXRQcm9qZWN0IiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJwcm9qZWN0MiIsInNldFByb2plY3QyIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJQYXlSYXRlIiwic2V0UGF5UmF0ZSIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImV4cGVuc2VDYXRlZ29yeSIsInNldEV4cGVuc2VDYXRlZ29yeSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJzZXRFbXBsb3llZU5hbWUiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwiYWNjb3VudE5hbWUiLCJzZXRBY2NvdW50TmFtZSIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJyZWFzb24iLCJzZXRSZWFzb24iLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiaW5wdXRWYWx1ZVByb2plY3QiLCJzZXRJbnB1dFZhbHVlUHJvamVjdCIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiX3VzZVN0YXRlMTkiLCJfaWQiLCJuYW1lIiwiX3VzZVN0YXRlMjAiLCJhY2NvdW50TmFtZUluZm8iLCJzZXRBY2NvdW50TmFtZUluZm8iLCJfdXNlU3RhdGUyMSIsImRhdGUiLCJEYXRlIiwiX3VzZVN0YXRlMjIiLCJleHBlbnNlRGF0ZSIsInNldEV4cGVuc2VEYXRlIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsImFtb3VudCIsInNldEFtb3VudCIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJyYXRlIiwic2V0UmF0ZSIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJ0b3RhbCIsInNldFRvdGFsIiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsImV4cGVuc2VOdW1iZXIiLCJzZXRFeHBlbnNlTnVtYmVyIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsImV4cGVuc2VzQ2F0ZWdvcnkiLCJzZXRFeHBlbnNlc0NhdGVnb3J5IiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsIkNoZWNrVHZBIiwic2V0Q2hlY2tUdkEiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2IiwidGF4Iiwic2V0VGF4IiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsIm9wZW5BdXRvY29tcGxldGUxIiwic2V0T3BlbkF1dG9jb21wbGV0ZTEiLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwib3BlbkF1dG9jb21wbGV0ZTIiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMiIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJjYXNoIiwic2V0Q2FzaCIsImRhdGVDb21tZW50IiwiZGF0ZUZvcm1hdGUiLCJmb3JtYXQiLCJDcmVhdGUiLCJwZXJzb24iLCJmZXRjaERhdGEiLCJfcmVmOCIsIl9wcm9qZWN0UmVzcG9uc2UkZGF0YSIsInByb2plY3RSZXNwb25zZSIsImNhdGVnb3J5UmVzcG9uc2UiLCJlbXBsb3llZVJlc3BvbnNlIiwiZmlsdGVyIiwicm93Iiwic3RhdHVzIiwibG9nIiwiZmV0Y2hsYXN0TnVtYmVyIiwiX3JlZjkiLCJfcmVzJGRhdGEiLCJfcmVzJGRhdGEyIiwibnVtIiwicGFyc2VJbnQiLCJoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTEiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMSIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIiLCJzZXRNb2RhbE9wZW5Mb2FkaW5nIiwiX3JlZjAiLCJfY2FzaFJlc3BvbnNlJGRhdGEiLCJtYXAiLCJjYXNoUmVzcG9uc2UiLCJjYXNoRGF0ZSIsImZpbHRlckNhc2giLCJ0b1N0cmluZyIsIl9yZWYxIiwiX3JlcyRkYXRhMyIsInBheW1lbnRSYXRlIiwiY3VycmVudFJhdGUiLCJwYXJzZUZsb2F0IiwibmV3VG90YWwiLCJyZXN1bHQiLCJNYXRoIiwicm91bmQiLCJjdXJyZW50VG90YWwiLCJoYW5kbGVBY2NvdW50Q2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VSZWFzb24iLCJmaWx0ZXJFbXBsb3llZSIsImFkZEl0ZW0iLCJpZEluZm8iLCJpZFJvdyIsImhhbmRsZUNoYW5nZUVtcGxveWVlIiwiaSIsIl9lJHRhcmdldCIsImxpc3QiLCJjdXJyZW50QW1vdW50IiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWUiLCJzZWxlY3RlZE9wdGlvbnMiLCJmaW5kIiwib3B0aW9uIiwiaGFuZGxlU2hvd0F1dG9jb21wbGV0ZSIsImRlbGV0ZUl0ZW0iLCJJdGVtIiwic3VtIiwicmVkdWNlIiwiYWNjIiwic3VtMSIsInJlc3VsdDEiLCJoYW5kbGVDaGFuZ2VQcm9qZWN0IiwicHJvamVjdE5hbWUiLCJoYW5kbGVDbGVhckFjY291bnROYW1lIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsIm9wZW5CYWNrIiwic2V0T3BlbkJhY2siLCJoYW5kbGVPcGVuQmFjayIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VCYWNrIiwiX3VzZVN0YXRlNDUiLCJfdXNlU3RhdGU0NiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJfdXNlU3RhdGU1MSIsIl91c2VTdGF0ZTUyIiwibW9kYWxPcGVuTG9hZGluZyIsImhhbmRsZU9wZW5Nb2RhbCIsInNldFRpbWVvdXQiLCJoYW5kbGVPcGVuIiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVDbG9zZSIsInByZXYiLCJOdW1iZXIiLCJzZXRTYXZpbmciLCJoYW5kbGVDbG9zZUFkZCIsImhhbmRsZUNsb3NlRXJyb3IiLCJoYW5kbGVEZWNpc2lvbiIsIndpbmRvdyIsImhpc3RvcnkiLCJiYWNrIiwiaGFuZGxlU3VibWl0Q2F0ZWdvcnkiLCJfcmVmMTAiLCJwb3N0IiwiYWxlcnQiLCJfeCIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWYxMSIsIlJlZmVyZW5jZUluZm8iLCJSZWZlcmVuY2VJbmZvTnVtYmVyIiwiUmVmZXJlbmNlSW5mb0NhdGVnb3J5IiwiU3RyaW5nIiwicGFkU3RhcnQiLCJkYXRlTm90aWZpY2F0aW9uIiwiX3gyIiwiX3gzIiwiX3g0IiwiX3VzZVN0YXRlNTMiLCJfdXNlU3RhdGU1NCIsInNhdmluZyIsImhhbmRsZVN1Ym1pdCIsIl9yZWYxMiIsImNoZWNrVHZBIiwiQ2hlY2tUdmEiLCJoYXNUVkEiLCJ0dmEiLCJUVkEiLCJ0YXhBbW91bnQiLCJ2YXRBbW91bnQiLCJUdmFBbW91bnQiLCJ0YXhVU0QiLCJzeW5jZWQiLCJfeDUiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwib25DbGljayIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10Iiwib25TdWJtaXQiLCJjb250YWluZXIiLCJwYWRkaW5nIiwiaXRlbSIsInhzIiwiaWQiLCJvcHRpb25zIiwiZ2V0T3B0aW9uTGFiZWwiLCJPcHRpb24iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwib25DaGFuZ2UiLCJQYXBlckNvbXBvbmVudCIsIl9yZWYxMyIsImNoaWxkcmVuIiwib3RoZXIiLCJfZXhjbHVkZWQzIiwibWFyZ2luVG9wIiwiZGlzYWJsZWQiLCJvbk1vdXNlRG93biIsInJlbmRlcklucHV0IiwicGFyYW1zIiwibGFiZWwiLCJyZXF1aXJlZCIsImh0bWxGb3IiLCJzdGFydEFkb3JubWVudCIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsIkZyYWdtZW50IiwibXVsdGlsaW5lIiwibWF4Um93cyIsImdhcCIsInRpdGxlIiwicGxhY2VtZW50IiwiZmxvYXQiLCJ0b1VwcGVyQ2FzZSIsInJlbmRlck9wdGlvbiIsImN1c3RvbWVyTmFtZSIsImlucHV0VmFsdWUiLCJvbklucHV0Q2hhbmdlIiwiZXZlbnQiLCJuZXdJbnB1dFZhbHVlIiwiZmlsdGVyT3B0aW9ucyIsIl9yZWYxNCIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJfcmVmMTUiLCJrZXkiLCJmb250V2VpZ2h0Iiwicm93cyIsInBsYWNlaG9sZGVyIiwic2l6ZSIsImRpc2FibGVDbGVhcmFibGUiLCJoaWRkZW4iLCJjdXJzb3IiLCJjb2xTcGFuIiwidGV4dEFsaWduIiwidHlwZSIsImNvbnRyb2wiLCJjaGVja2VkIiwiX3JlZjE2IiwiX3JlZjE3Iiwib25DbG9zZSIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=