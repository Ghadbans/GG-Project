"use strict";
exports.id = "src_js_AdminView1_PageView_DailyExpenses_DailyExpenseUpdate_js";
exports.ids = ["src_js_AdminView1_PageView_DailyExpenses_DailyExpenseUpdate_js"];
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

/***/ "./src/js/AdminView1/PageView/DailyExpenses/DailyExpenseUpdate.js"
/*!************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/DailyExpenses/DailyExpenseUpdate.js ***!
  \************************************************************************/
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
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
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_CurrencyExchange__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/icons-material/CurrencyExchange */ "./node_modules/@mui/icons-material/CurrencyExchange.js");
/* harmony import */ var _mui_icons_material_MonetizationOn__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @mui/icons-material/MonetizationOn */ "./node_modules/@mui/icons-material/MonetizationOn.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ProjectView_ProjectFormView__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../ProjectView/ProjectFormView */ "./src/js/AdminView1/PageView/ProjectView/ProjectFormView.js");
/* harmony import */ var _ProjectView_ProjectFormView2__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../ProjectView/ProjectFormView2 */ "./src/js/AdminView1/PageView/ProjectView/ProjectFormView2.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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
function DailyExpenseUpdate() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_40__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_40__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_50__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_50__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_51__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_51__.setUser)({
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_51__.logOut)());
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
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState0 = _slicedToArray(_useState9, 2),
    accountNameInfo = _useState0[0],
    setAccountNameInfo = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState10 = _slicedToArray(_useState1, 2),
    expenseCategory = _useState10[0],
    setExpenseCategory = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    description = _useState12[0],
    setDescription = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    expenseDate = _useState14[0],
    setExpenseDate = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    accountName = _useState16[0],
    setAccountName = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    amount = _useState18[0],
    setAmount = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    rate = _useState20[0],
    setRate = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    total = _useState22[0],
    setTotal = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState24 = _slicedToArray(_useState23, 2),
    reason1 = _useState24[0],
    setReason1 = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    expenseNumber = _useState26[0],
    setExpenseNumber = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    employeeName = _useState28[0],
    setEmployeeName = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState30 = _slicedToArray(_useState29, 2),
    projectName = _useState30[0],
    setProjectName = _useState30[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValueProject = _React$useState2[0],
    setInputValueProject = _React$useState2[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    CheckTvA = _useState32[0],
    setCheckTvA = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    tax = _useState34[0],
    setTax = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState36 = _slicedToArray(_useState35, 2),
    cash = _useState36[0],
    setCash = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    isDataLoaded = _useState38[0],
    setIsDataLoaded = _useState38[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2, _res$data3, _res$data4;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/get-expense/").concat(id));
          setExpenseCategory(res.data.data.expenseCategory);
          setDescription(res.data.data.description);
          setExpenseDate(res.data.data.expenseDate);
          setAmount(res.data.data.amount);
          setRate(res.data.data.rate);
          setTotal(res.data.data.total);
          setExpenseNumber(Number(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.expenseNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.expenseNumber) || 0));
          setAccountName(res.data.data.accountName);
          setEmployeeName(res.data.data.employeeName);
          setAccountNameInfo(res.data.data.accountNameInfo);
          setReason1(res.data.data.reason);
          var hasTva = res.data.data.CheckTvA || res.data.data.checkTvA || res.data.data.CheckTva || res.data.data.hasTVA || res.data.data.tva || false;
          setCheckTvA(hasTva);
          setTax(res.data.data.tax || (hasTva ? Number(((_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.total) || ((_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.total) || 0) * 0.16 : 0));
          setIsDataLoaded(true);
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
  {/** Category && Project Start */}
  var handleClearCategory = () => {
    setExpenseCategory({
      _id: '',
      expensesCategory: ''
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
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
        return _ref9.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _cashResponse$data;
          var cashResponse = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/cash"));
          setCash((_cashResponse$data = cashResponse.data) === null || _cashResponse$data === void 0 || (_cashResponse$data = _cashResponse$data.data) === null || _cashResponse$data === void 0 ? void 0 : _cashResponse$data.filter(row => dayjs__WEBPACK_IMPORTED_MODULE_45___default()(row.cashDate).format('DD/MM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_45___default()(expenseDate).format('DD/MM/YYYY')).map(row => row.status));
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
  var handleOpenOpenAutocomplete2 = e => {
    e.stopPropagation();
    setOpenAutocomplete2(true);
  };
  var handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
    setModalOpenLoading(false);
  };
  {/** Category && Project End */}
  {/** Employee Start */}
  var filterEmployee = employee.filter(row => row.status !== 'Suspended' && row.status !== 'Fired' && row.status !== 'Resign');
  var addItem = () => {
    setEmployeeName([...employeeName, {
      idInfo: (0,uuid__WEBPACK_IMPORTED_MODULE_39__["default"])(),
      idRow: "",
      employee: "",
      description: "",
      amount: 0,
      rate: rate,
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
      list[i]['rate'] = rate;
    }
    var currentRate = parseFloat(list[i]['rate'] || rate || 1);
    var currentAmount = parseFloat(list[i]['amount'] || 0);
    list[i]['total'] = currentRate > 0 ? Math.round(currentAmount / currentRate * 100) / 100 : 0;
    setEmployeeName(list);
  };
  var handleChange = (idInfo, newValue) => {
    var selectedOptions = employee.find(option => option === newValue);
    setEmployeeName(employeeName => employeeName.map(row => row.idInfo === idInfo ? _objectSpread(_objectSpread({}, row), {}, {
      idRow: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      employee: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.employeeName,
      rate: row.rate || rate
    }) : row));
  };
  var handleShowAutocomplete = idInfo => {
    setEmployeeName(employeeName => employeeName.map(row => row.idInfo === idInfo ? _objectSpread(_objectSpread({}, row), {}, {
      idRow: '',
      employee: "",
      description: '',
      amount: 0,
      rate: rate,
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
  {/** Total Function Start */}
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
    setReason1(e.target.value);
    setAccountNameInfo({
      _id: "",
      name: ""
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isDataLoaded) return;
    if (accountName === 'Employee') return;
    // Only calculate total from amount/rate if amount is provided
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
      setTax(CheckTvA ? currentTotal * 0.16 : 0);
    }
  }, [amount, rate, total, CheckTvA, isDataLoaded, accountName]);
  {/** Total Function End */}
  {/** account info start */}
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
  {/** account info end */}
  {/** Reason Modal start */}
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    open2 = _useState40[0],
    setOpen2 = _useState40[1];
  var handleOpenUpdateReason = e => {
    e.preventDefault();
    setOpen2(true);
  };
  var handleCloseUpdateReason = () => {
    setOpen2(false);
  };
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState42 = _slicedToArray(_useState41, 2),
    reason = _useState42[0],
    setReason = _useState42[1];
  var dateComment = new Date();
  {/** Reason Modal end */}
  {/** Loading Start */}
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
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setOpen2(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setOpen2(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    navigate(-1);
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  {/** Loading End */}
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState52 = _slicedToArray(_useState51, 2),
    hideBack = _useState52[0],
    setHideBack = _useState52[1];
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* () {
      var data = {
        idInfo: id,
        person: user.data.userName + ' Modify EXPENSE ',
        reason: 'D-' + String(expenseNumber).padStart(6, '0') + ' ' + reason,
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/create-notification/"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateComment() {
      return _ref1.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
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
        rate,
        total,
        accountNameInfo,
        reason: reason1,
        updateS: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/update-expense/").concat(id), data);
        if (res) {
          handleCreateComment();
          handleOpen();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmit(_x) {
      return _ref10.apply(this, arguments);
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
  }, "update Expenses"), hideBack === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: 'white'
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_59__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_58__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_52__["default"], {
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
    onSubmit: handleOpenUpdateReason
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
  }, expenseCategory.expensesCategory !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontWeight: 'bold'
    }
  }, " Category: "), " ", expenseCategory.expensesCategory), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleClearCategory,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "expensesCategory",
    options: categories,
    getOptionLabel: Option => Option.expensesCategory,
    onChange: (e, newValue) => setExpenseCategory(newValue),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    PaperComponent: _ref11 => {
      var children = _ref11.children,
        other = _objectWithoutProperties(_ref11, _excluded3);
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
    disabled: true,
    id: "expenseNumber",
    name: "expenseNumber",
    label: "Expense Number",
    value: String(expenseNumber).padStart(6, '0'),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
      position: "start"
    }, "D-")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_42__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_43__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_41__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_44__.DatePicker, {
    required: true,
    name: "expenseDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_45___default()(expenseDate),
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
    value: reason1,
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
  })), reason1 === "Project" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    options: project,
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
    filterOptions: (options, _ref12) => {
      var inputValue = _ref12.inputValue;
      return options.filter(option => option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) || option.projectName.toLowerCase().includes(inputValue.toLowerCase()) || option.description.toLowerCase().includes(inputValue.toLowerCase()));
    },
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
    filterOptions: (options, _ref13) => {
      var inputValue = _ref13.inputValue;
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], {
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
    value: row.rate || rate,
    onChange: e => handleChangeEmployee(e, i),
    size: "small",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 2,
    style: {
      textAlign: 'center'
    }
  }, "VAT (16%)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    checked: CheckTvA,
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'center'
    }
  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disabled: true,
    label: "Tax $",
    value: tax.toFixed(2),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      checked: CheckTvA,
      onChange: e => setCheckTvA(e.target.checked)
    }),
    label: "TVA (16%)"
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, accountNameInfo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, accountNameInfo.name !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '75px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: "Project",
    value: accountNameInfo.name ? accountNameInfo.name : '',
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], {
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
    filterOptions: (options, _ref15) => {
      var inputValue = _ref15.inputValue;
      return options.filter(option => option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) || option.projectName.toLowerCase().includes(inputValue.toLowerCase()) || option.description.toLowerCase().includes(inputValue.toLowerCase()));
    },
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }))) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
    required: true,
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CurrencyExchange__WEBPACK_IMPORTED_MODULE_53__["default"], null))
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_MonetizationOn__WEBPACK_IMPORTED_MODULE_54__["default"], null))
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 3,
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
      checked: CheckTvA,
      onChange: e => setCheckTvA(e.target.checked)
    }),
    label: "TVA (16%)"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_55__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Do you want to stop updating daily expense ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop updating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_49__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_47__["default"], {
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
    onClick: handleClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_49__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_48__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    open: open2,
    onClose: handleCloseUpdateReason,
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
    onClick: handleCloseUpdateReason,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_55__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Reason Of Updating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
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
    required: true,
    id: "reason",
    name: "reason",
    multiline: true,
    rows: 4,
    value: reason,
    onChange: e => setReason(e.target.value),
    label: "Comments",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DailyExpenseUpdate);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRGFpbHlFeHBlbnNlc19EYWlseUV4cGVuc2VVcGRhdGVfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMsU0FBUyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTlY7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMsMEJBQTBCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOM0I7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMseUJBQXlCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjFCLENBQW1EO0FBQ1E7QUFDbkM7QUFDRTtBQUMwQjtBQUNzQjtBQUNSO0FBQ2Q7QUFDNlA7QUFDalA7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ1E7QUFDQTtBQUNjO0FBQ0k7QUFDeEM7QUFDd0I7QUFDd0Q7QUFDaEY7QUFDZ0M7QUFDUztBQUNhO0FBQ2hCO0FBQ0o7QUFDbEM7QUFDNEI7QUFDUTtBQUNWO0FBQ0w7QUFDUTtBQUMrQjtBQUN0QztBQUNvQjtBQUNKO0FBQ2xCO0FBQ2U7QUFDRTtBQUNUO0FBQ1E7QUFHOUQsSUFBTTZFLFlBQVksR0FBR3JELDBEQUFNLENBQUNzRCxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDaERsRiwwREFBQSxDQUFDa0MsOERBQU8sRUFBQWtELFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7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T0FBTyxFQUFFO0lBQU8sQ0FBRTtJQUFDalIsT0FBTyxFQUFFO0VBQUUsZ0JBQzNFckksMERBQUEsQ0FBQ1MscURBQUk7SUFBQzhZLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCeFosMERBQUEsQ0FBQ2tCLHNEQUFTO0lBQ1IyWixRQUFRO0lBQ1JuUyxFQUFFLEVBQUMsUUFBUTtJQUNYNkosSUFBSSxFQUFDLFFBQVE7SUFDYjRJLFNBQVM7SUFDVGUsSUFBSSxFQUFFLENBQUU7SUFDUjFKLEtBQUssRUFBRXpDLE1BQU87SUFDZGtLLFFBQVEsRUFBR3ZJLENBQUMsSUFBS2tELFNBQVMsQ0FBQ2xELENBQUMsQ0FBQ1ksTUFBTSxDQUFDRSxLQUFLLENBQUU7SUFDM0NvSSxLQUFLLEVBQUMsVUFBVTtJQUNoQjdDLEVBQUUsRUFBRTtNQUFFdFIsS0FBSyxFQUFFLE1BQU07TUFBRWQsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNqRCxDQUNHLENBQUMsZUFDUDNGLDBEQUFBLFdBQUssQ0FBQyxlQUNOQSwwREFBQSxDQUFDUyxxREFBSTtJQUFDOFksSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRyxnQkFDaEJ4WiwwREFBQTtJQUFRMGMsSUFBSSxFQUFDLFFBQVE7SUFBQzNYLFNBQVMsRUFBQyxhQUFhO0lBQUNxQixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFO0lBQU87RUFBRSxHQUFDLE1BQVksQ0FDaEYsQ0FDRixDQUNGLENBRUgsQ0FDQSxDQUNKLENBQUM7QUFHVjtBQUVBLGlFQUFlK0Isa0JBQWtCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0FkZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0RyYWdJbmRpY2F0b3JSb3VuZGVkLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vUmVtb3ZlQ2lyY2xlT3V0bGluZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvRGFpbHlFeHBlbnNlcy9EYWlseUV4cGVuc2VVcGRhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnpcIlxufSksICdBZGQnKTsiLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xMSAxOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtLTItOGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJtMC02Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMm02IDRjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAybTAgMmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJtMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMlwiXG59KSwgJ0RyYWdJbmRpY2F0b3JSb3VuZGVkJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNNyAxMXYyaDEwdi0yem01LTlDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJtMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDhcIlxufSksICdSZW1vdmVDaXJjbGVPdXRsaW5lJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWRlYmFyRGFzaDEgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoMSc7XHJcbmltcG9ydCAnLi4vLi4vdmlldy5jc3MnO1xyXG5pbXBvcnQgJy4uL0NoYXJ0dmlldy5jc3MnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGUnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlUm93LCBUYWJsZUhlYWQsIFBhcGVyLCBUYWJsZUNvbnRhaW5lciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBBdXRvY29tcGxldGUsIHN0eWxlZCwgTW9kYWwsIEJhY2tkcm9wLCBGYWRlLCBCb3gsIE91dGxpbmVkSW5wdXQsIElucHV0QWRvcm5tZW50LCBEaXZpZGVyLCBDaGVja2JveCwgRm9ybUNvbnRyb2xMYWJlbCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgQWRkLCBBcnJvd1Vwd2FyZE91dGxpbmVkLCBEcmFnSW5kaWNhdG9yUm91bmRlZCwgUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IERlbW9Db250YWluZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL2ludGVybmFscy9kZW1vJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0xvY2FsaXphdGlvblByb3ZpZGVyJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9EYXRlUGlja2VyJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IEN1cnJlbmN5RXhjaGFuZ2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DdXJyZW5jeUV4Y2hhbmdlJztcclxuaW1wb3J0IE1vbmV0aXphdGlvbk9uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9uZXRpemF0aW9uT24nO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCBQcm9qZWN0Rm9ybVZpZXcgZnJvbSAnLi4vUHJvamVjdFZpZXcvUHJvamVjdEZvcm1WaWV3JztcclxuaW1wb3J0IFByb2plY3RGb3JtVmlldzIgZnJvbSAnLi4vUHJvamVjdFZpZXcvUHJvamVjdEZvcm1WaWV3Mic7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4uLy4uL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi4vLi4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5cclxuXHJcbmNvbnN0IExpZ2h0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gRGFpbHlFeHBlbnNlVXBkYXRlKCkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZW1wbG95ZWUsIHNldEVtcGxveWVlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvamVjdCwgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2plY3QyLCBzZXRQcm9qZWN0Ml0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2FjY291bnROYW1lSW5mbywgc2V0QWNjb3VudE5hbWVJbmZvXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbZXhwZW5zZUNhdGVnb3J5LCBzZXRFeHBlbnNlQ2F0ZWdvcnldID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtleHBlbnNlRGF0ZSwgc2V0RXhwZW5zZURhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSk7XHJcbiAgY29uc3QgW2FjY291bnROYW1lLCBzZXRBY2NvdW50TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3JlYXNvbjEsIHNldFJlYXNvbjFdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtleHBlbnNlTnVtYmVyLCBzZXRFeHBlbnNlTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtlbXBsb3llZU5hbWUsIHNldEVtcGxveWVlTmFtZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2plY3ROYW1lLCBzZXRQcm9qZWN0TmFtZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2lucHV0VmFsdWVQcm9qZWN0LCBzZXRJbnB1dFZhbHVlUHJvamVjdF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW0NoZWNrVHZBLCBzZXRDaGVja1R2QV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RheCwgc2V0VGF4XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjYXNoLCBzZXRDYXNoXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaXNEYXRhTG9hZGVkLCBzZXRJc0RhdGFMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1leHBlbnNlLyR7aWR9YClcclxuICAgICAgICBzZXRFeHBlbnNlQ2F0ZWdvcnkocmVzLmRhdGEuZGF0YS5leHBlbnNlQ2F0ZWdvcnkpO1xyXG4gICAgICAgIHNldERlc2NyaXB0aW9uKHJlcy5kYXRhLmRhdGEuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIHNldEV4cGVuc2VEYXRlKHJlcy5kYXRhLmRhdGEuZXhwZW5zZURhdGUpO1xyXG4gICAgICAgIHNldEFtb3VudChyZXMuZGF0YS5kYXRhLmFtb3VudCk7XHJcbiAgICAgICAgc2V0UmF0ZShyZXMuZGF0YS5kYXRhLnJhdGUpO1xyXG4gICAgICAgIHNldFRvdGFsKHJlcy5kYXRhLmRhdGEudG90YWwpO1xyXG4gICAgICAgIHNldEV4cGVuc2VOdW1iZXIoTnVtYmVyKHJlcy5kYXRhPy5kYXRhPy5leHBlbnNlTnVtYmVyIHx8IHJlcy5kYXRhPy5leHBlbnNlTnVtYmVyIHx8IDApKTtcclxuICAgICAgICBzZXRBY2NvdW50TmFtZShyZXMuZGF0YS5kYXRhLmFjY291bnROYW1lKTtcclxuICAgICAgICBzZXRFbXBsb3llZU5hbWUocmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWUpO1xyXG4gICAgICAgIHNldEFjY291bnROYW1lSW5mbyhyZXMuZGF0YS5kYXRhLmFjY291bnROYW1lSW5mbyk7XHJcbiAgICAgICAgc2V0UmVhc29uMShyZXMuZGF0YS5kYXRhLnJlYXNvbik7XHJcbiAgICAgICAgY29uc3QgaGFzVHZhID0gcmVzLmRhdGEuZGF0YS5DaGVja1R2QSB8fCByZXMuZGF0YS5kYXRhLmNoZWNrVHZBIHx8IHJlcy5kYXRhLmRhdGEuQ2hlY2tUdmEgfHwgcmVzLmRhdGEuZGF0YS5oYXNUVkEgfHwgcmVzLmRhdGEuZGF0YS50dmEgfHwgZmFsc2U7XHJcbiAgICAgICAgc2V0Q2hlY2tUdkEoaGFzVHZhKTtcclxuICAgICAgICBzZXRUYXgocmVzLmRhdGEuZGF0YS50YXggfHwgKGhhc1R2YSA/IChOdW1iZXIocmVzLmRhdGE/LmRhdGE/LnRvdGFsIHx8IHJlcy5kYXRhPy50b3RhbCB8fCAwKSkgKiAwLjE2IDogMCkpO1xyXG4gICAgICAgIHNldElzRGF0YUxvYWRlZCh0cnVlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbXSlcclxuICB7LyoqIENhdGVnb3J5ICYmIFByb2plY3QgU3RhcnQgKi8gfVxyXG4gIGNvbnN0IGhhbmRsZUNsZWFyQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgICBzZXRFeHBlbnNlQ2F0ZWdvcnkoe1xyXG4gICAgICBfaWQ6ICcnLFxyXG4gICAgICBleHBlbnNlc0NhdGVnb3J5OiAnJ1xyXG4gICAgfSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wcm9qZWN0c2ApXHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2V4cGVuc2VzQ2F0ZWdvcnlgKVxyXG4gICAgICAgIGNvbnN0IGVtcGxveWVlUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9lbXBsb3llZWApXHJcbiAgICAgICAgc2V0UHJvamVjdChwcm9qZWN0UmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgICBzZXRQcm9qZWN0Mihwcm9qZWN0UmVzcG9uc2UuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5zdGF0dXMgPT09IFwiT24tR29pbmdcIikpO1xyXG4gICAgICAgIHNldENhdGVnb3JpZXMoY2F0ZWdvcnlSZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldEVtcGxveWVlKGVtcGxveWVlUmVzcG9uc2UuZGF0YS5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNhc2hSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2Nhc2hgKVxyXG4gICAgICAgIHNldENhc2goY2FzaFJlc3BvbnNlLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiBkYXlqcyhyb3cuY2FzaERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpID09PSBkYXlqcyhleHBlbnNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJykpXHJcbiAgICAgICAgICAubWFwKChyb3cpID0+IHJvdy5zdGF0dXMpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbZXhwZW5zZURhdGVdKTtcclxuICBjb25zdCBmaWx0ZXJDYXNoID0gY2FzaC5tYXAoKHJvdykgPT4gcm93KS50b1N0cmluZygpXHJcbiAgY29uc3QgaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMiA9ICgpID0+IHtcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKGZhbHNlKTtcclxuICAgIHNldE1vZGFsT3BlbkxvYWRpbmcoZmFsc2UpXHJcbiAgfTtcclxuXHJcbiAgey8qKiBDYXRlZ29yeSAmJiBQcm9qZWN0IEVuZCAqLyB9XHJcblxyXG4gIHsvKiogRW1wbG95ZWUgU3RhcnQgKi8gfVxyXG4gIGNvbnN0IGZpbHRlckVtcGxveWVlID0gZW1wbG95ZWUuZmlsdGVyKChyb3cpID0+IHJvdy5zdGF0dXMgIT09ICdTdXNwZW5kZWQnICYmIHJvdy5zdGF0dXMgIT09ICdGaXJlZCcgJiYgcm93LnN0YXR1cyAhPT0gJ1Jlc2lnbicpXHJcbiAgY29uc3QgYWRkSXRlbSA9ICgpID0+IHtcclxuICAgIHNldEVtcGxveWVlTmFtZShbLi4uZW1wbG95ZWVOYW1lLCB7XHJcbiAgICAgIGlkSW5mbzogdjQoKSxcclxuICAgICAgaWRSb3c6IFwiXCIsXHJcbiAgICAgIGVtcGxveWVlOiBcIlwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgYW1vdW50OiAwLFxyXG4gICAgICByYXRlOiByYXRlLFxyXG4gICAgICB0b3RhbDogMCxcclxuICAgIH1dKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRW1wbG95ZWUgPSAoZSwgaSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBsaXN0ID0gWy4uLmVtcGxveWVlTmFtZV07XHJcbiAgICBsaXN0W2ldW25hbWVdID0gdmFsdWU7XHJcbiAgICBpZiAoIWxpc3RbaV1bJ3JhdGUnXSB8fCBwYXJzZUZsb2F0KGxpc3RbaV1bJ3JhdGUnXSkgPT09IDApIHtcclxuICAgICAgbGlzdFtpXVsncmF0ZSddID0gcmF0ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGN1cnJlbnRSYXRlID0gcGFyc2VGbG9hdChsaXN0W2ldWydyYXRlJ10gfHwgcmF0ZSB8fCAxKTtcclxuICAgIGNvbnN0IGN1cnJlbnRBbW91bnQgPSBwYXJzZUZsb2F0KGxpc3RbaV1bJ2Ftb3VudCddIHx8IDApO1xyXG4gICAgbGlzdFtpXVsndG90YWwnXSA9IChjdXJyZW50UmF0ZSA+IDApID8gTWF0aC5yb3VuZCgoY3VycmVudEFtb3VudCAvIGN1cnJlbnRSYXRlKSAqIDEwMCkgLyAxMDAgOiAwO1xyXG4gICAgc2V0RW1wbG95ZWVOYW1lKGxpc3QpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpZEluZm8sIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBlbXBsb3llZS5maW5kKChvcHRpb24pID0+IG9wdGlvbiA9PT0gbmV3VmFsdWUpXHJcbiAgICBzZXRFbXBsb3llZU5hbWUoZW1wbG95ZWVOYW1lID0+IGVtcGxveWVlTmFtZS5tYXAoKHJvdykgPT4gcm93LmlkSW5mbyA9PT0gaWRJbmZvID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGlkUm93OiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgZW1wbG95ZWU6IHNlbGVjdGVkT3B0aW9ucz8uZW1wbG95ZWVOYW1lLFxyXG4gICAgICByYXRlOiByb3cucmF0ZSB8fCByYXRlXHJcbiAgICB9IDogcm93KSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVNob3dBdXRvY29tcGxldGUgPSAoaWRJbmZvKSA9PiB7XHJcbiAgICBzZXRFbXBsb3llZU5hbWUoZW1wbG95ZWVOYW1lID0+IGVtcGxveWVlTmFtZS5tYXAoKHJvdykgPT4gcm93LmlkSW5mbyA9PT0gaWRJbmZvID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGlkUm93OiAnJyxcclxuICAgICAgZW1wbG95ZWU6IFwiXCIsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgYW1vdW50OiAwLFxyXG4gICAgICByYXRlOiByYXRlLFxyXG4gICAgICB0b3RhbDogMCxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBkZWxldGVJdGVtID0gaWRJbmZvID0+IHtcclxuICAgIHNldEVtcGxveWVlTmFtZShlbXBsb3llZU5hbWUgPT4gZW1wbG95ZWVOYW1lLmZpbHRlcigoSXRlbSkgPT4gSXRlbS5pZEluZm8gIT09IGlkSW5mbykpO1xyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIE9ubHkgcnVuIHRoaXMgaWYgd2UgYXJlIGluIEVtcGxveWVlIG1vZGVcclxuICAgIGlmIChhY2NvdW50TmFtZSAhPT0gJ0VtcGxveWVlJykgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHN1bSA9IGVtcGxveWVlTmFtZS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyAocGFyc2VGbG9hdChyb3cudG90YWwpIHx8IDApLCAwKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IE1hdGgucm91bmQoc3VtICogMTAwKSAvIDEwMDtcclxuICAgIHNldFRvdGFsKHJlc3VsdCk7XHJcbiAgICBzZXRUYXgoQ2hlY2tUdkEgPyByZXN1bHQgKiAwLjE2IDogMCk7XHJcblxyXG4gICAgY29uc3Qgc3VtMSA9IGVtcGxveWVlTmFtZS5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyAocGFyc2VGbG9hdChyb3cuYW1vdW50KSB8fCAwKSwgMCk7XHJcbiAgICBjb25zdCByZXN1bHQxID0gTWF0aC5yb3VuZChzdW0xICogMTAwKSAvIDEwMDtcclxuICAgIHNldEFtb3VudChyZXN1bHQxKTtcclxuICB9LCBbZW1wbG95ZWVOYW1lLCBDaGVja1R2QSwgYWNjb3VudE5hbWVdKTsgLy8gQWRkZWQgbWlzc2luZyBkZXBlbmRlbmNpZXNcclxuICB7LyoqIEVtcGxveWVlIEVuZCAqLyB9XHJcblxyXG4gIHsvKiogVG90YWwgRnVuY3Rpb24gU3RhcnQgKi8gfVxyXG4gIGNvbnN0IGhhbmRsZUFjY291bnRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0QWNjb3VudE5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICBzZXRBY2NvdW50TmFtZUluZm8oe1xyXG4gICAgICBfaWQ6IFwiXCIsXHJcbiAgICAgIG5hbWU6IFwiXCJcclxuICAgIH0pO1xyXG4gICAgc2V0VG90YWwoMCk7XHJcbiAgICBzZXRBbW91bnQoMClcclxuICAgIHNldEVtcGxveWVlTmFtZShbXSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUmVhc29uID0gKGUpID0+IHtcclxuICAgIHNldFJlYXNvbjEoZS50YXJnZXQudmFsdWUpXHJcbiAgICBzZXRBY2NvdW50TmFtZUluZm8oe1xyXG4gICAgICBfaWQ6IFwiXCIsXHJcbiAgICAgIG5hbWU6IFwiXCJcclxuICAgIH0pO1xyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc0RhdGFMb2FkZWQpIHJldHVybjtcclxuICAgIGlmIChhY2NvdW50TmFtZSA9PT0gJ0VtcGxveWVlJykgcmV0dXJuO1xyXG4gICAgLy8gT25seSBjYWxjdWxhdGUgdG90YWwgZnJvbSBhbW91bnQvcmF0ZSBpZiBhbW91bnQgaXMgcHJvdmlkZWRcclxuICAgIGlmIChhbW91bnQgPiAwKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRSYXRlID0gcGFyc2VGbG9hdChyYXRlIHx8IDEpO1xyXG4gICAgICBjb25zdCBuZXdUb3RhbCA9IChjdXJyZW50UmF0ZSA+IDApID8gKHBhcnNlRmxvYXQoYW1vdW50IHx8IDApIC8gY3VycmVudFJhdGUpIDogMDtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gTWF0aC5yb3VuZChuZXdUb3RhbCAqIDEwMCkgLyAxMDA7XHJcbiAgICAgIHNldFRvdGFsKHJlc3VsdCk7XHJcbiAgICAgIHNldFRheChDaGVja1R2QSA/IE1hdGgucm91bmQocmVzdWx0ICogMC4xNiAqIDEwMCkgLyAxMDAgOiAwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIElmIGFtb3VudCBpcyAwIChtYW51YWwgVVNEIGVudHJ5KSwgc3RpbGwgdXBkYXRlIHRoZSB0YXggYmFzZWQgb24gdGhlIGN1cnJlbnQgdG90YWxcclxuICAgICAgLy8gQnV0IG9ubHkgaWYgdG90YWwgaXMgYWN0dWFsbHkgYSBudW1iZXJcclxuICAgICAgY29uc3QgY3VycmVudFRvdGFsID0gcGFyc2VGbG9hdCh0b3RhbCkgfHwgMDtcclxuICAgICAgc2V0VGF4KENoZWNrVHZBID8gY3VycmVudFRvdGFsICogMC4xNiA6IDApO1xyXG4gICAgfVxyXG4gIH0sIFthbW91bnQsIHJhdGUsIHRvdGFsLCBDaGVja1R2QSwgaXNEYXRhTG9hZGVkLCBhY2NvdW50TmFtZV0pO1xyXG4gIHsvKiogVG90YWwgRnVuY3Rpb24gRW5kICovIH1cclxuXHJcbiAgey8qKiBhY2NvdW50IGluZm8gc3RhcnQgKi8gfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVByb2plY3QgPSAobmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHByb2plY3QuZmluZCgob3B0aW9uKSA9PiBvcHRpb24gPT09IG5ld1ZhbHVlKVxyXG4gICAgc2V0QWNjb3VudE5hbWVJbmZvKHtcclxuICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgbmFtZTogc2VsZWN0ZWRPcHRpb25zPy5wcm9qZWN0TmFtZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsZWFyQWNjb3VudE5hbWUgPSAoKSA9PiB7XHJcbiAgICBzZXRBY2NvdW50TmFtZUluZm8oe1xyXG4gICAgICBfaWQ6IFwiXCIsXHJcbiAgICAgIG5hbWU6IFwiXCJcclxuICAgIH0pO1xyXG4gIH1cclxuICB7LyoqIGFjY291bnQgaW5mbyBlbmQgKi8gfVxyXG5cclxuICB7LyoqIFJlYXNvbiBNb2RhbCBzdGFydCAqLyB9XHJcblxyXG4gIGNvbnN0IFtvcGVuMiwgc2V0T3BlbjJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuVXBkYXRlUmVhc29uID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbjIodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVVwZGF0ZVJlYXNvbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4yKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IFtyZWFzb24sIHNldFJlYXNvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBkYXRlQ29tbWVudCA9IG5ldyBEYXRlKClcclxuICB7LyoqIFJlYXNvbiBNb2RhbCBlbmQgKi8gfVxyXG5cclxuICB7LyoqIExvYWRpbmcgU3RhcnQgKi8gfVxyXG4gIGNvbnN0IFtvcGVuQmFjaywgc2V0T3BlbkJhY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuQmFjayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW5CYWNrKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VCYWNrID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkJhY2soZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRXJyb3JPcGVuTW9kYWwsIHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuXHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldE9wZW4yKGZhbHNlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0T3BlbjIoZmFsc2UpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIG5hdmlnYXRlKC0xKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgey8qKiBMb2FkaW5nIEVuZCAqLyB9XHJcbiAgY29uc3QgW2hpZGVCYWNrLCBzZXRIaWRlQmFja10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQ29tbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogaWQsXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBNb2RpZnkgRVhQRU5TRSAnLFxyXG4gICAgICByZWFzb246ICdELScgKyBTdHJpbmcoZXhwZW5zZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKSArICcgJyArIHJlYXNvbixcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogZGF0ZUNvbW1lbnRcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbi9gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBleHBlbnNlQ2F0ZWdvcnksIGFjY291bnROYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbiwgZXhwZW5zZURhdGUsIGFtb3VudCxcclxuICAgICAgZW1wbG95ZWVOYW1lLFxyXG4gICAgICBDaGVja1R2QSxcclxuICAgICAgY2hlY2tUdkE6IENoZWNrVHZBLFxyXG4gICAgICBDaGVja1R2YTogQ2hlY2tUdkEsXHJcbiAgICAgIGhhc1RWQTogQ2hlY2tUdkEsXHJcbiAgICAgIHR2YTogQ2hlY2tUdkEsXHJcbiAgICAgIFRWQTogQ2hlY2tUdkEsXHJcbiAgICAgIHRheDogQ2hlY2tUdkEgPyBOdW1iZXIodG90YWwpICogMC4xNiA6IDAsXHJcbiAgICAgIHRheEFtb3VudDogQ2hlY2tUdkEgPyBOdW1iZXIodG90YWwpICogMC4xNiA6IDAsXHJcbiAgICAgIHZhdEFtb3VudDogQ2hlY2tUdkEgPyBOdW1iZXIodG90YWwpICogMC4xNiA6IDAsXHJcbiAgICAgIFR2YUFtb3VudDogQ2hlY2tUdkEgPyBOdW1iZXIodG90YWwpICogMC4xNiA6IDAsXHJcbiAgICAgIHRheFVTRDogQ2hlY2tUdkEgPyBOdW1iZXIodG90YWwpICogMC4xNiA6IDAsXHJcbiAgICAgIHJhdGUsIHRvdGFsLCBhY2NvdW50TmFtZUluZm8sIHJlYXNvbjogcmVhc29uMSwgdXBkYXRlUzogZmFsc2VcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1leHBlbnNlLyR7aWR9YCwgZGF0YSk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBoYW5kbGVDcmVhdGVDb21tZW50KCk7XHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuXHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgdXBkYXRlIEV4cGVuc2VzXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGhpZGVCYWNrID09PSAndHJ1ZScgP1xyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj4gOlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlbkJhY2t9PlxyXG4gICAgICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+fVxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19Pnt1c2VyLmRhdGEudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoMSAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogNCB9fSA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9wZW5VcGRhdGVSZWFzb259PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0gY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBleHBlbnNlQ2F0ZWdvcnkuZXhwZW5zZXNDYXRlZ29yeSAhPT0gJycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzEwcHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogJzIwcHgnIH19PjxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT4gQ2F0ZWdvcnk6IDwvc3Bhbj4ge2V4cGVuc2VDYXRlZ29yeS5leHBlbnNlc0NhdGVnb3J5fTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J3JpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsZWFyQ2F0ZWdvcnl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZXhwZW5zZXNDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhPcHRpb24pID0+IE9wdGlvbi5leHBlbnNlc0NhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gc2V0RXhwZW5zZUNhdGVnb3J5KG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFwZXJDb21wb25lbnQ9eyh7IGNoaWxkcmVuLCAuLi5vdGhlciB9KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHsuLi5vdGhlcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBsZWZ0OiAnMCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyKGUpfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ30gb25Nb3VzZURvd249eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI3JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIENBVEVHT1JZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJDYXRlZ29yeVwiIHJlcXVpcmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJhY2NvdW50TmFtZVwiPkFjY291bnQgTmFtZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhY2NvdW50TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY2NvdW50TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVBY2NvdW50Q2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWNjb3VudE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFjY291bnQgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIk9mZmljZVwiPk9mZmljZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlByb2plY3RcIj5Qcm9qZWN0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRW1wbG95ZWVcIj5FbXBsb3llZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkhvbWVcIj5Ib21lPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJleHBlbnNlTnVtYmVyXCI+RXhwZW5zZSBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nZXhwZW5zZU51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZXhwZW5zZU51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0V4cGVuc2UgTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17U3RyaW5nKGV4cGVuc2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPkQtPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZXhwZW5zZURhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0RhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKGV4cGVuc2VEYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldEV4cGVuc2VEYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZSA9PT0gJ0VtcGxveWVlJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInJlYXNvblwiPlJlYXNvbjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJyZWFzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29uMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VSZWFzb24oZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWFzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlYXNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIk9mZmljZVwiPk9mZmljZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlByb2plY3RcIj5Qcm9qZWN0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiTm9uZVwiPk5vbmU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRXhwZW5zZSBEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4Um93cz17NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvbjEgPT09IFwiUHJvamVjdFwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lSW5mby5uYW1lICE9PSBcIlwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc3NXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdQcm9qZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY2NvdW50TmFtZUluZm8ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJBY2NvdW50TmFtZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9qZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLnByb2plY3ROYW1lLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+ICg8Qm94IHsuLi5wcm9wc30+IHtvcHRpb24uY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZX0gfCB7b3B0aW9uLnByb2plY3ROYW1lfSB8IHtvcHRpb24uZGVzY3JpcHRpb259PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJQcm9qZWN0IE5hbWVcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlUHJvamVjdChuZXdWYWx1ZSA/IG5ld1ZhbHVlIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlUHJvamVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGV2ZW50LCBuZXdJbnB1dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZVByb2plY3QobmV3SW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbnM9eyhvcHRpb25zLCB7IGlucHV0VmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9qZWN0Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5wcm9qZWN0TmFtZS50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9PiB7b3B0aW9uLmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWV9IHwge29wdGlvbi5wcm9qZWN0TmFtZX0gfCB7b3B0aW9uLmRlc2NyaXB0aW9ufTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiUHJvamVjdCBOYW1lXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZVByb2plY3QobmV3VmFsdWUgPyBuZXdWYWx1ZSA6ICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZVByb2plY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWVQcm9qZWN0KG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucywgeyBpbnB1dFZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPiA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlSW5mbzEwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RW1wbG95ZWUgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFtb3VudCBGQzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOYW1lID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlTmFtZS5tYXAoKHJvdywgaSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cm93LmlkSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGhlaWdodDogJzEwMHB4JyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5lbXBsb3llZSAhPT0gJycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBmb250U2l6ZTogJzIwcHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e3Jvdy5lbXBsb3llZSA/IHJvdy5lbXBsb3llZSA6ICcnfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbicgaWQ9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvdy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlRW1wbG95ZWUoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzQ0MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J3RvcCc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZShyb3cuaWRJbmZvKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlsdGVyRW1wbG95ZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uZW1wbG95ZWVOYW1lLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+ICg8Qm94IHsuLi5wcm9wc30gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI2YyZjJmMicgfX0+e29wdGlvbi5lbXBsb3llZU5hbWUudG9VcHBlckNhc2UoKX08L0JveD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH0gey4uLnBhcmFtc30gcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKHJvdy5pZEluZm8sIG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NzBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnQnIGlkPSdhbW91bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb3cuYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUVtcGxveWVlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdyYXRlJyBpZD0ncmF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvdy5yYXRlIHx8IHJhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlRW1wbG95ZWUoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3RvdGFsJyBpZD0ndG90YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb3cudG90YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlRW1wbG95ZWUoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaGlkZGVuIGlkPSdhbW91bnRUb3RhbEludm9pY2UxJz57cm93LmFtb3VudH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBoaWRkZW4gaWQ9J2Ftb3VudFRvdGFsSW52b2ljZSc+e3Jvdy50b3RhbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKHJvdy5pZEluZm8pfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb3RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nYW1vdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1RvdGFsIEZDJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YW1vdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzIwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd0b3RhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndG90YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1RvdGFsICQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWQVQgKDE2JSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveCBjaGVja2VkPXtDaGVja1R2QX0gZGlzYWJsZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVGF4ICQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YXgudG9GaXhlZCgyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdmaXhlZCcsIHpJbmRleDogJzEnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkFkZFwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXthZGRJdGVtfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnIHN0eWxlPXt7IGZvbnRTaXplOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsIGNvbnRyb2w9ezxDaGVja2JveCBjaGVja2VkPXtDaGVja1R2QX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRDaGVja1R2QShlLnRhcmdldC5jaGVja2VkKX0gLz59IGxhYmVsPVwiVFZBICgxNiUpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50TmFtZUluZm8gP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnROYW1lSW5mby5uYW1lICE9PSBcIlwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdQcm9qZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWNjb3VudE5hbWVJbmZvLm5hbWUgPyBhY2NvdW50TmFtZUluZm8ubmFtZSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J3JpZ2h0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJBY2NvdW50TmFtZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb2plY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWNjb3VudE5hbWUgIT09ICdQcm9qZWN0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24ucHJvamVjdE5hbWUudG9VcHBlckNhc2UoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+ICg8Qm94IHsuLi5wcm9wc30+IHtvcHRpb24uY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZX0gfCB7b3B0aW9uLnByb2plY3ROYW1lfSB8IHtvcHRpb24uZGVzY3JpcHRpb259PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZVByb2plY3QobmV3VmFsdWUgPyBuZXdWYWx1ZSA6ICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWVQcm9qZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGV2ZW50LCBuZXdJbnB1dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWVQcm9qZWN0KG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbnM9eyhvcHRpb25zLCB7IGlucHV0VmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJQcm9qZWN0IE5hbWVcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogKDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3Byb2plY3QyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjY291bnROYW1lICE9PSAnUHJvamVjdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLnByb2plY3ROYW1lLnRvVXBwZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9PiB7b3B0aW9uLmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWV9IHwge29wdGlvbi5wcm9qZWN0TmFtZX0gfCB7b3B0aW9uLmRlc2NyaXB0aW9ufTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIlByb2plY3QgTmFtZVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlUHJvamVjdChuZXdWYWx1ZSA/IG5ld1ZhbHVlIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZVByb2plY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZVByb2plY3QobmV3SW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KG9wdGlvbnMsIHsgaW5wdXRWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucHJvamVjdE5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0V4cGVuc2UgRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFJvd3M9ezV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9J2Ftb3VudCc+QW1vdW50PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2Ftb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdBbW91bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFtb3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj0nc3RhcnQnPkZjPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdyYXRlJz5SYXRlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdyYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3JhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdSYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249J3N0YXJ0Jz48Q3VycmVuY3lFeGNoYW5nZSAvPjwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0ndG90YWwnPlRvdGFsPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd0b3RhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0b3RhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1RvdGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRvdGFsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPSdzdGFydCc+PE1vbmV0aXphdGlvbk9uIC8+PC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCBjb250cm9sPXs8Q2hlY2tib3ggY2hlY2tlZD17Q2hlY2tUdkF9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2hlY2tUdkEoZS50YXJnZXQuY2hlY2tlZCl9IC8+fSBsYWJlbD1cIlRWQSAoMTYlKVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5CYWNrfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlQmFja31cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzeD17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5EbyB5b3Ugd2FudCB0byBzdG9wIHVwZGF0aW5nIGRhaWx5IGV4cGVuc2UgPyA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlIDo8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj4gSWYgeW91IHN0b3AgdXBkYXRpbmcgd2l0aG91dCBzYXZpbmcsIGFsbCB5b3VyIGNoYW5nZXMgd2lsbCBiZSBsb3N0PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvRGFpbHlFeHBlbnNlcycpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlllczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+Tm88L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIEZhaWxlZCB0byBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW4yfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVXBkYXRlUmVhc29ufVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlUmVhc29ufSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgUmVhc29uIE9mIFVwZGF0aW5nXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBpZD0ncmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdyZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlYXNvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdDb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFpbHlFeHBlbnNlVXBkYXRlXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhckRhc2gxIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiRGVsZXRlSWNvbiIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlUm93IiwiVGFibGVIZWFkIiwiUGFwZXIiLCJUYWJsZUNvbnRhaW5lciIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIlR5cG9ncmFwaHkiLCJBdXRvY29tcGxldGUiLCJzdHlsZWQiLCJNb2RhbCIsIkJhY2tkcm9wIiwiRmFkZSIsIkJveCIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIkRpdmlkZXIiLCJDaGVja2JveCIsIkZvcm1Db250cm9sTGFiZWwiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJDb250YWluZXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJBZGQiLCJBcnJvd1Vwd2FyZE91dGxpbmVkIiwiRHJhZ0luZGljYXRvclJvdW5kZWQiLCJSZW1vdmVDaXJjbGVPdXRsaW5lIiwidjQiLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsIkRlbW9Db250YWluZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXlqcyIsIkRhdGVQaWNrZXIiLCJkYXlqcyIsIkFycm93QmFjayIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2FkZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiQ3VycmVuY3lFeGNoYW5nZSIsIk1vbmV0aXphdGlvbk9uIiwiQ2xvc2UiLCJQcm9qZWN0Rm9ybVZpZXciLCJQcm9qZWN0Rm9ybVZpZXcyIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiTGlnaHRUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJCbGFja1Rvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNSIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmNiIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkRhaWx5RXhwZW5zZVVwZGF0ZSIsIl91c2VQYXJhbXMiLCJpZCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY3IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZW1wbG95ZWUiLCJzZXRFbXBsb3llZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwicHJvamVjdCIsInNldFByb2plY3QiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInByb2plY3QyIiwic2V0UHJvamVjdDIiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsImFjY291bnROYW1lSW5mbyIsInNldEFjY291bnROYW1lSW5mbyIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImV4cGVuc2VDYXRlZ29yeSIsInNldEV4cGVuc2VDYXRlZ29yeSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiX3VzZVN0YXRlMTMiLCJkYXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTE0IiwiZXhwZW5zZURhdGUiLCJzZXRFeHBlbnNlRGF0ZSIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJhY2NvdW50TmFtZSIsInNldEFjY291bnROYW1lIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsImFtb3VudCIsInNldEFtb3VudCIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJyYXRlIiwic2V0UmF0ZSIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJ0b3RhbCIsInNldFRvdGFsIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsInJlYXNvbjEiLCJzZXRSZWFzb24xIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsImV4cGVuc2VOdW1iZXIiLCJzZXRFeHBlbnNlTnVtYmVyIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsInNldEVtcGxveWVlTmFtZSIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJwcm9qZWN0TmFtZSIsInNldFByb2plY3ROYW1lIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsImlucHV0VmFsdWVQcm9qZWN0Iiwic2V0SW5wdXRWYWx1ZVByb2plY3QiLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwiQ2hlY2tUdkEiLCJzZXRDaGVja1R2QSIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJ0YXgiLCJzZXRUYXgiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2IiwiY2FzaCIsInNldENhc2giLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwiaXNEYXRhTG9hZGVkIiwic2V0SXNEYXRhTG9hZGVkIiwiZmV0Y2hEYXRhIiwiX3JlZjgiLCJfcmVzJGRhdGEiLCJfcmVzJGRhdGEyIiwiX3JlcyRkYXRhMyIsIl9yZXMkZGF0YTQiLCJOdW1iZXIiLCJyZWFzb24iLCJoYXNUdmEiLCJjaGVja1R2QSIsIkNoZWNrVHZhIiwiaGFzVFZBIiwidHZhIiwibG9nIiwiaGFuZGxlQ2xlYXJDYXRlZ29yeSIsIl9pZCIsImV4cGVuc2VzQ2F0ZWdvcnkiLCJfcmVmOSIsIl9wcm9qZWN0UmVzcG9uc2UkZGF0YSIsInByb2plY3RSZXNwb25zZSIsImNhdGVnb3J5UmVzcG9uc2UiLCJlbXBsb3llZVJlc3BvbnNlIiwiZmlsdGVyIiwicm93Iiwic3RhdHVzIiwiX3JlZjAiLCJfY2FzaFJlc3BvbnNlJGRhdGEiLCJjYXNoUmVzcG9uc2UiLCJjYXNoRGF0ZSIsImZvcm1hdCIsIm1hcCIsImZpbHRlckNhc2giLCJ0b1N0cmluZyIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJzZXRPcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIiLCJzZXRNb2RhbE9wZW5Mb2FkaW5nIiwiZmlsdGVyRW1wbG95ZWUiLCJhZGRJdGVtIiwiaWRJbmZvIiwiaWRSb3ciLCJoYW5kbGVDaGFuZ2VFbXBsb3llZSIsImkiLCJfZSR0YXJnZXQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJsaXN0IiwicGFyc2VGbG9hdCIsImN1cnJlbnRSYXRlIiwiY3VycmVudEFtb3VudCIsIk1hdGgiLCJyb3VuZCIsImhhbmRsZUNoYW5nZSIsIm5ld1ZhbHVlIiwic2VsZWN0ZWRPcHRpb25zIiwiZmluZCIsIm9wdGlvbiIsImhhbmRsZVNob3dBdXRvY29tcGxldGUiLCJkZWxldGVJdGVtIiwiSXRlbSIsInN1bSIsInJlZHVjZSIsImFjYyIsInJlc3VsdCIsInN1bTEiLCJyZXN1bHQxIiwiaGFuZGxlQWNjb3VudENoYW5nZSIsImhhbmRsZUNoYW5nZVJlYXNvbiIsIm5ld1RvdGFsIiwiY3VycmVudFRvdGFsIiwiaGFuZGxlQ2hhbmdlUHJvamVjdCIsImhhbmRsZUNsZWFyQWNjb3VudE5hbWUiLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwib3BlbjIiLCJzZXRPcGVuMiIsImhhbmRsZU9wZW5VcGRhdGVSZWFzb24iLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsb3NlVXBkYXRlUmVhc29uIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsInNldFJlYXNvbiIsImRhdGVDb21tZW50IiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsIm9wZW5CYWNrIiwic2V0T3BlbkJhY2siLCJoYW5kbGVPcGVuQmFjayIsImhhbmRsZUNsb3NlQmFjayIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3BlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2xvc2VFcnJvciIsIl91c2VTdGF0ZTUxIiwiX3VzZVN0YXRlNTIiLCJoaWRlQmFjayIsInNldEhpZGVCYWNrIiwiaGFuZGxlQ3JlYXRlQ29tbWVudCIsIl9yZWYxIiwicGVyc29uIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJkYXRlTm90aWZpY2F0aW9uIiwicG9zdCIsImhhbmRsZVN1Ym1pdCIsIl9yZWYxMCIsIlRWQSIsInRheEFtb3VudCIsInZhdEFtb3VudCIsIlR2YUFtb3VudCIsInRheFVTRCIsInVwZGF0ZVMiLCJwdXQiLCJfeCIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJfUmVhY3QkdXNlU3RhdGU0Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJvblN1Ym1pdCIsImNvbnRhaW5lciIsInBhZGRpbmciLCJpdGVtIiwieHMiLCJnYXAiLCJmb250V2VpZ2h0IiwidGl0bGUiLCJwbGFjZW1lbnQiLCJmbG9hdCIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIk9wdGlvbiIsIm9uQ2hhbmdlIiwiUGFwZXJDb21wb25lbnQiLCJfcmVmMTEiLCJjaGlsZHJlbiIsIm90aGVyIiwiX2V4Y2x1ZGVkMyIsIm1hcmdpblRvcCIsImRpc2FibGVkIiwib25Nb3VzZURvd24iLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsImxhYmVsIiwicmVxdWlyZWQiLCJodG1sRm9yIiwic3RhcnRBZG9ybm1lbnQiLCJkYXRlQWRhcHRlciIsImNvbXBvbmVudHMiLCJGcmFnbWVudCIsIm11bHRpbGluZSIsIm1heFJvd3MiLCJ0b1VwcGVyQ2FzZSIsInJlbmRlck9wdGlvbiIsImN1c3RvbWVyTmFtZSIsImlucHV0VmFsdWUiLCJvbklucHV0Q2hhbmdlIiwiZXZlbnQiLCJuZXdJbnB1dFZhbHVlIiwiZmlsdGVyT3B0aW9ucyIsIl9yZWYxMiIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJfcmVmMTMiLCJrZXkiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJzaXplIiwiZGlzYWJsZUNsZWFyYWJsZSIsImhpZGRlbiIsImN1cnNvciIsImNvbFNwYW4iLCJ0ZXh0QWxpZ24iLCJ0eXBlIiwiY2hlY2tlZCIsInRvRml4ZWQiLCJjb250cm9sIiwiX3JlZjE0IiwiX3JlZjE1Iiwib25DbG9zZSIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=