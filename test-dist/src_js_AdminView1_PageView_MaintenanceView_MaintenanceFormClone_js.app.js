"use strict";
exports.id = "src_js_AdminView1_PageView_MaintenanceView_MaintenanceFormClone_js";
exports.ids = ["src_js_AdminView1_PageView_MaintenanceView_MaintenanceFormClone_js"];
exports.modules = {

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

/***/ "./node_modules/@mui/icons-material/esm/Edit.js"
/*!******************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Edit.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"
}), 'Edit'));

/***/ },

/***/ "./src/js/AdminView1/PageView/MaintenanceView/MaintenanceFormClone.js"
/*!****************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/MaintenanceView/MaintenanceFormClone.js ***!
  \****************************************************************************/
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Edit.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../CustomerVIew/CustomerFormView2 */ "./src/js/AdminView1/PageView/CustomerVIew/CustomerFormView2.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["children"],
  _excluded5 = ["children"];
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











































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_24__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
function MaintenanceFormClone() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_40__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_40__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_49__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_49__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_50__.setUser)({
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
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/create-maintenance");
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    serviceDate = _useState2[0],
    setServiceDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    visitDate = _useState4[0],
    setVisitDate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    itemDescriptionInfo = _useState6[0],
    setItemDescriptionInfo = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    brand = _useState8[0],
    setBrand = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    model = _useState0[0],
    setModel = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    warranty = _useState10[0],
    setWarranty = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    action = _useState12[0],
    setAction = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Labor Fees'),
    _useState14 = _slicedToArray(_useState13, 2),
    adjustment = _useState14[0],
    setAdjustment = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    adjustmentNumber = _useState16[0],
    setAdjustmentNumber = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    laborQty = _useState18[0],
    setLaborQty = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    laborDiscount = _useState20[0],
    setLaborDiscount = _useState20[1];
  var totalLaborFees = adjustmentNumber * laborQty;
  var totalDiscount = isNaN(totalLaborFees * laborDiscount) ? 0 : parseFloat(totalLaborFees * laborDiscount);
  var laborPercentage = totalDiscount / 100;
  var totalLaborFeesGenerale = parseFloat(totalLaborFees) - parseFloat(laborPercentage);
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    defectDescription = _useState22[0],
    setDefectDescription = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    actionTaken = _useState24[0],
    setActionTaken = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState26 = _slicedToArray(_useState25, 2),
    note = _useState26[0],
    setNote = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState28 = _slicedToArray(_useState27, 2),
    serialNo = _useState28[0],
    setSerialNo = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState30 = _slicedToArray(_useState29, 2),
    items = _useState30[0],
    SetItems = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState32 = _slicedToArray(_useState31, 2),
    subTotal = _useState32[0],
    setSubTotal = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    totalInvoice = _useState34[0],
    setTotalInvoice = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    serviceNumber = _useState36[0],
    setServiceNumber = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    customer = _useState38[0],
    setCustomer = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState40 = _slicedToArray(_useState39, 2),
    customerName = _useState40[0],
    setCustomerName = _useState40[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-maintenance/").concat(id));
          setCustomerName(res.data.data.customerName);
          setItemDescriptionInfo(res.data.data.itemDescriptionInfo);
          setBrand(res.data.data.brand);
          setModel(res.data.data.model);
          setWarranty(res.data.data.warranty);
          setDefectDescription(res.data.data.defectDescription);
          setActionTaken(res.data.data.actionTaken);
          setSerialNo(res.data.data.serialNo);
          setServiceNumber(Number(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.serviceNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.serviceNumber) || 0));
          SetItems(res.data.data.items.map(row => _objectSpread(_objectSpread({}, row), {}, {
            itemOut: 0
          })));
          setNote(res.data.data.note);
          setAction(res.data.data.action);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var _res$data3, _res$data4;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-last-saved-maintenance"));
          setServiceNumber(parseInt(((_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.serviceNumber) || ((_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.serviceNumber) || 0) + 1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchlastNumber() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchlastNumber();
  }, []);
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    ItemInformation = _useState42[0],
    setItemInformation = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState44 = _slicedToArray(_useState43, 2),
    technicianAssign = _useState44[0],
    setTechnicianAssign = _useState44[1];
  var serviceName = "M-00" + serviceNumber;
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue = _React$useState2[0],
    setInputValue = _React$useState2[1];
  {/** Customer Info start */}
  var handleChangeCustomer = newValue => {
    var selectedOptions = customer.find(option => option === newValue);
    setCustomerName({
      _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      customerName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.Customer,
      address: (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingAddress) + ' ' + (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingCity),
      phone: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.customerCompanyPhone
    });
  };
  var handleClearCustomer = () => {
    setCustomerName({
      _id: '',
      customerName: '',
      billingAddress: '',
      billingCity: ''
    });
  };
  var Create = dayjs__WEBPACK_IMPORTED_MODULE_52___default()(Date.now()).format('DD/MM/YYYY') + " " + user.data.userName + ' Created ' + "M-00";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCustomer = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/customer"));
          setCustomer(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchCustomer() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchCustomer();
  }, []);
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    openAutocomplete1 = _useState46[0],
    setOpenAutocomplete1 = _useState46[1];
  var handleOpenOpenAutocomplete1 = e => {
    e.stopPropagation();
    setOpenAutocomplete1(true);
  };
  var handleCloseOpenAutocomplete1 = () => {
    setOpenAutocomplete1(false);
  };
  var handleCreateCustomer = newCustomer => {
    setCustomer([...customer, newCustomer]);
  };
  {/** Customer info end */}
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState48 = _slicedToArray(_useState47, 2),
    employee = _useState48[0],
    setEmployee = _useState48[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchEmployee = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/employee"));
          setEmployee(res.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchEmployee() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchEmployee();
  }, []);
  var filterEmployee = employee.filter(row => row.department === 'TECHNICIAN' && row.status !== 'Fired' || row.status !== 'Resign' || row.status !== 'Suspended');
  var handleChangeEmployee = newValue => {
    var selectedOptions = employee.find(option => option === newValue);
    setTechnicianAssign(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.employeeName);
  };
  {/** Item start */}
  ;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchItem = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/item"));
          setItemInformation(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchItem() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchItem();
  }, []);
  var handleChangeItem = (idRow, newValue) => {
    var selectedOptions = newValue;
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
        itemName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemName
      },
      itemCost: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemCostPrice,
      itemDescription: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemDescription,
      itemRate: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemSellingPrice,
      stock: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.itemQuantity
    }) : row));
  };
  var handleChange = (e, i) => {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var list = [...items];
    list[i][name] = value;
    list[i]['totalAmount'] = Math.round(list[i]['itemQty'] * list[i]['itemRate'] * 100) / 100;
    list[i]['totalCost'] = Math.round(list[i]['itemQty'] * list[i]['itemCost'] * 100) / 100;
    list[i]['discount'] = list[i]['totalAmount'] * list[i]['itemDiscount'];
    list[i]['percentage'] = list[i]['discount'] / 100;
    list[i]['itemAmount'] = Math.round((list[i]['totalAmount'] - list[i]['percentage']) * 100) / 100;
    list[i]['totalGenerale'] = Math.round(list[i]['itemCost'] * list[i]['itemBuy'] * 100) / 100;
    SetItems(list);
  };
  //addItem
  var addItem = () => {
    var newItem = {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_38__["default"])(),
      itemName: {
        _id: "",
        itemName: ""
      },
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemAmount: 0,
      itemCost: 0,
      totalAmount: 0,
      discount: 0,
      percentage: 0,
      itemBuy: 0,
      itemWeight: "",
      totalGenerale: 0,
      totalCost: 0,
      stock: 0,
      itemOut: 0,
      newItemOut: 0
    };
    SetItems([...items, newItem]);
  };
  var addItemWhite = () => {
    SetItems([...items, {
      newDescription: "",
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_38__["default"])(),
      itemName: {
        _id: "",
        itemName: ""
      },
      itemDescription: "",
      itemDiscount: 0,
      itemQty: 0,
      itemRate: 0,
      itemAmount: 0,
      itemCost: 0,
      totalAmount: 0,
      discount: 0,
      percentage: 0,
      itemBuy: 0,
      itemWeight: "",
      totalGenerale: 0,
      totalCost: 0,
      stock: 0,
      itemOut: 0,
      newItemOut: 0
    }]);
  };
  var handleDragEnd = result => {
    if (!result.destination) {
      return;
    }
    var newItems = [...items];
    var _newItems$splice = newItems.splice(result.source.index, 1),
      _newItems$splice2 = _slicedToArray(_newItems$splice, 1),
      removed = _newItems$splice2[0];
    newItems.splice(result.destination.index, 0, removed);
    SetItems(newItems);
  };
  var deleteItem = idRow => {
    SetItems(items => items.filter(Item => Item.idRow !== idRow));
  };
  var filterItemInformation = ItemInformation.filter(option => !items.find(row => {
    var _row$itemName;
    return option._id === ((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName._id) && option.typeItem === "Goods";
  }));
  {/** Item InFO */}
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    openAutocomplete2 = _useState50[0],
    setOpenAutocomplete2 = _useState50[1];
  var handleOpenOpenAutocomplete2 = e => {
    e.stopPropagation();
    setOpenAutocomplete2(true);
  };
  var handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
  };
  var handleCreateItem = newItem => {
    setItemInformation([...ItemInformation, newItem]);
  };
  var handleShowAutocomplete = idRow => {
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: null,
        itemName: null
      }
    }) : row));
  };
  var handleShowAutocompleteDescription = idRow => {
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        itemName: 'empty'
      }
    }) : row));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result1 = items.reduce((sum, row) => sum + row.itemAmount, 0);
    setSubTotal(result1.toFixed(2));
    var newTotal = Number(subTotal) + Number(totalLaborFeesGenerale);
    setTotalInvoice(newTotal);
  });
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState52 = _slicedToArray(_useState51, 2),
    openItemUpdate = _useState52[0],
    setOpenItemUpdate = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState54 = _slicedToArray(_useState53, 2),
    idItem = _useState54[0],
    setIdItem = _useState54[1];
  var handleOpenItemUpdate = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (id) {
      setOpenItemUpdate(true);
      setIdItem(id);
    });
    return function handleOpenItemUpdate(_x) {
      return _ref13.apply(this, arguments);
    };
  }();
  var handleCloseUpdateItem1 = () => {
    setOpenItemUpdate(false);
  };
  var handleCloseItemUpdate = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* () {
      setOpenItemUpdate(false);
      if (idItem) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-item/").concat(idItem));
          SetItems(items => items.map(row => {
            var _row$itemName2;
            return ((_row$itemName2 = row.itemName) === null || _row$itemName2 === void 0 ? void 0 : _row$itemName2._id) === res.data.data._id ? _objectSpread(_objectSpread({}, row), {}, {
              itemName: {
                _id: res.data.data._id,
                itemName: res.data.data.itemName
              },
              itemDescription: res.data.data.itemDescription,
              itemCost: res.data.data.itemCostPrice,
              itemRate: res.data.data.itemSellingPrice,
              stock: res.data.data.itemQuantity,
              totalAmount: row.itemQty * res.data.data.itemSellingPrice,
              discount: row.itemQty * res.data.data.itemSellingPrice * row.itemDiscount,
              percentage: row.itemQty * res.data.data.itemSellingPrice * row.itemDiscount / 100,
              itemAmount: row.itemQty * res.data.data.itemSellingPrice - row.itemQty * res.data.data.itemSellingPrice * row.itemDiscount / 100,
              totalCost: row.itemQty * res.data.data.itemCostPrice,
              totalGenerale: res.data.data.itemCostPrice * row.itemBuy
            }) : row;
          }));
        } catch (error) {}
      }
    });
    return function handleCloseItemUpdate() {
      return _ref14.apply(this, arguments);
    };
  }();
  {/** Item InFO End */}
  {/** Item end */}
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState56 = _slicedToArray(_useState55, 2),
    openBack = _useState56[0],
    setOpenBack = _useState56[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState58 = _slicedToArray(_useState57, 2),
    loading = _useState58[0],
    setLoading = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState60 = _slicedToArray(_useState59, 2),
    loadingOpenModal = _useState60[0],
    setLoadingOpenModal = _useState60[1];
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState62 = _slicedToArray(_useState61, 2),
    loadingOpenNavigateConvertInvoice = _useState62[0],
    setLoadingOpenNavigateConvertInvoice = _useState62[1];
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState64 = _slicedToArray(_useState63, 2),
    ErrorOpenModal = _useState64[0],
    setErrorOpenModal = _useState64[1];
  var handleOpen = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    if (adjustmentNumber > 0) {
      setLoadingOpenNavigateConvertInvoice(true);
    } else {
      setLoadingOpenModal(true);
    }
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
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState66 = _slicedToArray(_useState65, 2),
    idRes = _useState66[0],
    setIdRes = _useState66[1];
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: 'M-' + ReferenceInfoNumber + ' For ' + customerName.customerName,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x2, _x3) {
      return _ref15.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var status = '';
      if (adjustmentNumber > 0) {
        status = 'Close';
      } else if (adjustmentNumber === 0) {
        status = 'Open';
      }
      var data = {
        customerName,
        serviceNumber,
        serviceDate,
        actionTaken,
        visitDate,
        itemDescriptionInfo,
        warranty,
        defectDescription,
        technicianAssign,
        brand,
        model,
        serviceName,
        action,
        serialNo,
        status,
        items,
        adjustmentNumber,
        adjustment,
        totalInvoice,
        subTotal,
        note,
        totalLaborFees,
        laborPercentage,
        totalDiscount,
        laborDiscount,
        laborQty,
        totalLaborFeesGenerale
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post(apiUrl, data);
        if (res) {
          // Open Loading View
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.serviceNumber;
          handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
          handleOpen();
          setIdRes(res.data.data._id);
        } else {
          alert('An Error as Occur');
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmit(_x4) {
      return _ref16.apply(this, arguments);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_26__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_30__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Add new Maintenance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_45__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_51__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_31__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_29__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'block',
      position: 'fixed',
      zIndex: 1,
      float: 'right',
      right: '-5px',
      top: '400px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: addItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: addItemWhite
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    className: "btn1",
    style: {
      backgroundColor: 'gray',
      fontSize: '40px'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 1,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_10__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: 'center'
    }
  }, "Job Card Info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 9
  }, customerName.customerName !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: true,
    name: "CUstomer Name",
    value: customerName.customerName !== undefined ? customerName.customerName : '',
    sx: {
      width: '100%'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleClearCustomer,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    options: customer,
    getOptionLabel: option => option.Customer,
    onChange: (e, newValue) => {
      handleChangeCustomer(newValue);
    },
    PaperComponent: _ref17 => {
      var children = _ref17.children,
        other = _objectWithoutProperties(_ref17, _excluded4);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, other, {
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
      }, "ADD NEW CUSTOMER")));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, params, {
      label: "Customer Name",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "serviceNumber"
  }, "Service Order Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    type: "number",
    id: "serviceNumber",
    name: "serviceNumber",
    label: "Service Order Number",
    value: serviceNumber,
    onChange: e => setServiceNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "start"
    }, "M")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_42__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_43__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_41__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_44__.DatePicker, {
    required: true,
    name: "serviceDate",
    label: "Service Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_52___default()(serviceDate),
    onChange: date => setServiceDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_42__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_43__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_41__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_44__.DatePicker, {
    required: true,
    name: "visitDate",
    label: "Visit Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_52___default()(visitDate),
    onChange: date => setVisitDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: 'center'
    }
  }, "Appliance Info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "itemDescription",
    name: "itemDescription",
    label: "Item Description",
    value: itemDescriptionInfo,
    onChange: e => setItemDescriptionInfo(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "brand",
    name: "brand",
    label: "Brand",
    value: brand,
    onChange: e => setBrand(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "model",
    name: "model",
    label: "Model",
    value: model,
    onChange: e => setModel(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "serialNo",
    name: "serialNo",
    label: "Serial No",
    value: serialNo,
    onChange: e => setSerialNo(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "defectDescription",
    name: "defectDescription",
    label: "Defect Description",
    value: defectDescription,
    onChange: e => setDefectDescription(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "warranty",
    name: "warranty",
    label: "Warranty Status",
    value: warranty,
    onChange: e => setWarranty(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: 'center'
    }
  }, "Technician Assign")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disableClearable: true,
    options: filterEmployee,
    getOptionLabel: option => option.employeeName,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], props, option.employeeName),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, params, {
      label: "Technician",
      required: true
    })),
    onChange: (e, newValue) => handleChangeEmployee(newValue ? newValue : ''),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: 'center'
    }
  }, "Action Taken"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "action"
  }, "Action"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    required: true,
    id: "action",
    value: action,
    onChange: e => setAction(e.target.value),
    name: "action",
    label: "action",
    defaultValue: "Carry-In"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "Carry-In"
  }, "Carry-In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "In-Home"
  }, "In-Home")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "actionTaken",
    name: "actionTaken",
    label: "Action Taken",
    multiline: true,
    rows: 5,
    value: actionTaken,
    onChange: e => setActionTaken(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "note",
    name: "note",
    label: "Note",
    multiline: true,
    rows: 5,
    value: note,
    onChange: e => setNote(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: 'center'
    }
  }, "Finance")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_58__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_58__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), items.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_58__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
    ref: provided.innerRef
  }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    name: "newDescription",
    id: "newDescription",
    value: Item.newDescription,
    onChange: e => handleChange(e, i),
    size: "small",
    sx: {
      width: '100%',
      backgroundColor: 'white',
      fontSize: 12
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
    title: "Delete",
    sx: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => deleteItem(Item.idRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      height: '100px'
    }
  }, Item.itemName.itemName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    hidden: Item.itemName ? Item.itemName.itemName === 'empty' : '',
    sx: {
      fontSize: '23px'
    }
  }, Item.itemName ? Item.itemName.itemName : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "itemDescription",
    id: "itemDescription",
    value: Item.itemDescription,
    multiline: true,
    rows: 3,
    onChange: e => handleChange(e, i),
    size: "small",
    sx: {
      width: '440px',
      backgroundColor: 'white',
      fontSize: 12
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => handleShowAutocomplete(Item.idRow),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), Item.itemName._id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Edit",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => handleOpenItemUpdate(Item.itemName._id),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    disableClearable: true,
    options: filterItemInformation,
    getOptionLabel: option => option.itemName + '/' + option.itemBrand,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
      sx: {
        backgroundColor: '#f2f2f2'
      }
    }), option.itemName + '/' + option.itemBrand),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({
      multiline: true,
      rows: 4
    }, params, {
      required: true
    })),
    inputValue: inputValue,
    onInputChange: (event, newInputValue) => {
      setInputValue(newInputValue);
    },
    filterOptions: (options, _ref18) => {
      var inputValue = _ref18.inputValue;
      return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
    },
    onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
    size: "small",
    PaperComponent: _ref19 => {
      var children = _ref19.children,
        other = _objectWithoutProperties(_ref19, _excluded5);
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
      }, "ADD NEW Item")));
    },
    sx: {
      width: '470px',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "top"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => handleShowAutocompleteDescription(Item.idRow),
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: true,
    name: "stock",
    id: "stock",
    value: Item.stock,
    onChange: e => handleChange(e, i),
    size: "small",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "itemQty",
    id: "itemQty",
    onChange: e => handleChange(e, i),
    size: "small",
    value: Item.itemQty,
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "itemRate",
    id: "itemRate",
    value: Item.itemRate,
    disabled: user.data.role !== 'CEO',
    onChange: e => handleChange(e, i),
    size: "small",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "itemDiscount",
    id: "itemDiscount",
    value: Item.itemDiscount,
    onChange: e => handleChange(e, i),
    size: "small",
    type: "number",
    placeholder: "1 to 5 %",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    id: "amountTotalInvoice"
  }, Item.itemAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
    title: "Delete",
    sx: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => deleteItem(Item.idRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  })))))))), provided.placeholder)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "adjustment",
    id: "adjustment",
    size: "small",
    value: adjustment,
    onChange: e => setAdjustment(e.target.value),
    sx: {
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "laborQty",
    type: "number",
    size: "small",
    placeholder: "labor QTY",
    name: "laborQty",
    value: laborQty !== undefined ? laborQty : 0,
    onChange: e => setLaborQty(e.target.value),
    sx: {
      width: '150px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "adjustmentNumber",
    size: "small",
    placeholder: "labor fees",
    name: "adjustmentNumber",
    onChange: e => setAdjustmentNumber(e.target.value),
    sx: {
      width: '150px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "laborDiscount",
    id: "laborDiscount",
    size: "small",
    onChange: e => setLaborDiscount(e.target.value),
    placeholder: "Discount",
    sx: {
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, totalLaborFeesGenerale.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, "Total Generale"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, totalInvoice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Do you want to stop creating service ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
    onClick: () => navigate('/MaintenanceViewAdmin'),
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
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    onClick: () => handleDecision('stay'),
    className: "btnCustomer"
  }, "Add New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleDecision('previous'),
    className: "btnCustomer"
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: loadingOpenNavigateConvertInvoice,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_48__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Data Saved successfully,Do you want to convert to an invoice ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " You should convert the service order to invoice when it closed"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleDecision('previous'),
    className: "btnCustomer"
  }, "Later")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_39__.NavLink, {
    to: "/MaintenanceConvertToInvoice/".concat(idRes),
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer"
  }, "Convert To Invoice"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: openAutocomplete1,
    onClose: handleCloseOpenAutocomplete1,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_53__["default"], {
    onCreateOption: handleCreateCustomer,
    onClose: handleCloseOpenAutocomplete1
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: openAutocomplete2,
    onClose: handleCloseOpenAutocomplete2,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_55__["default"], {
    onCreateOption: handleCreateItem,
    onClose: handleCloseOpenAutocomplete2
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: openItemUpdate,
    onClose: handleCloseUpdateItem1,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style2), {}, {
      width: 800
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleCloseUpdateItem1,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_54__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_56__["default"], {
    onClose: handleCloseItemUpdate,
    id: idItem
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaintenanceFormClone);

/***/ },

/***/ "./src/js/component/SidebarDash1.js"
/*!******************************************!*\
  !*** ./src/js/component/SidebarDash1.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_SidebarNew_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/SidebarNew.scss */ "./src/js/css/SidebarNew.scss");
/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Dashboard */ "./node_modules/@mui/icons-material/Dashboard.js");
/* harmony import */ var _mui_icons_material_PermIdentity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/PermIdentity */ "./node_modules/@mui/icons-material/PermIdentity.js");
/* harmony import */ var _mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ListAlt */ "./node_modules/@mui/icons-material/ListAlt.js");
/* harmony import */ var _mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Description */ "./node_modules/@mui/icons-material/Description.js");
/* harmony import */ var _mui_icons_material_Receipt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Receipt */ "./node_modules/@mui/icons-material/Receipt.js");
/* harmony import */ var _mui_icons_material_RequestQuote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/RequestQuote */ "./node_modules/@mui/icons-material/RequestQuote.js");
/* harmony import */ var _mui_icons_material_MonetizationOn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/MonetizationOn */ "./node_modules/@mui/icons-material/MonetizationOn.js");
/* harmony import */ var _mui_icons_material_Engineering__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Engineering */ "./node_modules/@mui/icons-material/Engineering.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/ShoppingBagOutlined.js");
/* harmony import */ var _mui_icons_material_RoomPreferences__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/RoomPreferences */ "./node_modules/@mui/icons-material/RoomPreferences.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ "./node_modules/@mui/icons-material/MoreVert.js");




















function SidebarDash1() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Dashboard"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_PermIdentity__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Customer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Store"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_RequestQuote__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Quotation"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Invoice"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_MonetizationOn__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Payment"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Daily Expenses"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_RoomPreferences__WEBPACK_IMPORTED_MODULE_11__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Project"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Receipt__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Purchases Request"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Engineering__WEBPACK_IMPORTED_MODULE_9__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "Maintenance"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_15__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    primary: "More"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarDash1);

/***/ },

/***/ "./node_modules/number-to-words/src/index.js"
/*!***************************************************!*\
  !*** ./node_modules/number-to-words/src/index.js ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

 

module.exports = {
    toOrdinal: __webpack_require__(/*! ./toOrdinal */ "./node_modules/number-to-words/src/toOrdinal.js"),
    toWords: __webpack_require__(/*! ./toWords */ "./node_modules/number-to-words/src/toWords.js"),
    toWordsOrdinal: __webpack_require__(/*! ./toWordsOrdinal */ "./node_modules/number-to-words/src/toWordsOrdinal.js")
};


/***/ },

/***/ "./node_modules/number-to-words/src/isFinite.js"
/*!******************************************************!*\
  !*** ./node_modules/number-to-words/src/isFinite.js ***!
  \******************************************************/
(module) {



// Simplified https://gist.github.com/marlun78/885eb0021e980c6ce0fb
function isFinite(value) {
    return !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity);
}

module.exports = isFinite;


/***/ },

/***/ "./node_modules/number-to-words/src/isSafeNumber.js"
/*!**********************************************************!*\
  !*** ./node_modules/number-to-words/src/isSafeNumber.js ***!
  \**********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



var MAX_SAFE_INTEGER = __webpack_require__(/*! ./maxSafeInteger */ "./node_modules/number-to-words/src/maxSafeInteger.js");

function isSafeNumber(value) {
    return typeof value === 'number' && Math.abs(value) <= MAX_SAFE_INTEGER;
}

module.exports = isSafeNumber;


/***/ },

/***/ "./node_modules/number-to-words/src/makeOrdinal.js"
/*!*********************************************************!*\
  !*** ./node_modules/number-to-words/src/makeOrdinal.js ***!
  \*********************************************************/
(module) {



var ENDS_WITH_DOUBLE_ZERO_PATTERN = /(hundred|thousand|(m|b|tr|quadr)illion)$/;
var ENDS_WITH_TEEN_PATTERN = /teen$/;
var ENDS_WITH_Y_PATTERN = /y$/;
var ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN = /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/;
var ordinalLessThanThirteen = {
    zero: 'zeroth',
    one: 'first',
    two: 'second',
    three: 'third',
    four: 'fourth',
    five: 'fifth',
    six: 'sixth',
    seven: 'seventh',
    eight: 'eighth',
    nine: 'ninth',
    ten: 'tenth',
    eleven: 'eleventh',
    twelve: 'twelfth'
};

/**
 * Converts a number-word into an ordinal number-word.
 * @example makeOrdinal('one') => 'first'
 * @param {string} words
 * @returns {string}
 */
function makeOrdinal(words) {
    // Ends with *00 (100, 1000, etc.) or *teen (13, 14, 15, 16, 17, 18, 19)
    if (ENDS_WITH_DOUBLE_ZERO_PATTERN.test(words) || ENDS_WITH_TEEN_PATTERN.test(words)) {
        return words + 'th';
    }
    // Ends with *y (20, 30, 40, 50, 60, 70, 80, 90)
    else if (ENDS_WITH_Y_PATTERN.test(words)) {
        return words.replace(ENDS_WITH_Y_PATTERN, 'ieth');
    }
    // Ends with one through twelve
    else if (ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN.test(words)) {
        return words.replace(ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN, replaceWithOrdinalVariant);
    }
    return words;
}

function replaceWithOrdinalVariant(match, numberWord) {
    return ordinalLessThanThirteen[numberWord];
}

module.exports = makeOrdinal;


/***/ },

/***/ "./node_modules/number-to-words/src/maxSafeInteger.js"
/*!************************************************************!*\
  !*** ./node_modules/number-to-words/src/maxSafeInteger.js ***!
  \************************************************************/
(module) {



var MAX_SAFE_INTEGER = 9007199254740991;

module.exports = MAX_SAFE_INTEGER;


/***/ },

/***/ "./node_modules/number-to-words/src/toOrdinal.js"
/*!*******************************************************!*\
  !*** ./node_modules/number-to-words/src/toOrdinal.js ***!
  \*******************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



var isFinite = __webpack_require__(/*! ./isFinite */ "./node_modules/number-to-words/src/isFinite.js");
var isSafeNumber = __webpack_require__(/*! ./isSafeNumber */ "./node_modules/number-to-words/src/isSafeNumber.js");

/**
 * Converts an integer into a string with an ordinal postfix.
 * If number is decimal, the decimals will be removed.
 * @example toOrdinal(12) => '12th'
 * @param {number|string} number
 * @returns {string}
 */
function toOrdinal(number) {
    var num = parseInt(number, 10);

    if (!isFinite(num)) {
        throw new TypeError(
            'Not a finite number: ' + number + ' (' + typeof number + ')'
        );
    }
    if (!isSafeNumber(num)) {
        throw new RangeError(
            'Input is not a safe number, it’s either too large or too small.'
        );
    }
    var str = String(num);
    var lastTwoDigits = Math.abs(num % 100);
    var betweenElevenAndThirteen = lastTwoDigits >= 11 && lastTwoDigits <= 13;
    var lastChar = str.charAt(str.length - 1);
    return str + (betweenElevenAndThirteen ? 'th'
            : lastChar === '1' ? 'st'
            : lastChar === '2' ? 'nd'
            : lastChar === '3' ? 'rd'
            : 'th');
}

module.exports = toOrdinal;


/***/ },

/***/ "./node_modules/number-to-words/src/toWords.js"
/*!*****************************************************!*\
  !*** ./node_modules/number-to-words/src/toWords.js ***!
  \*****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



var makeOrdinal = __webpack_require__(/*! ./makeOrdinal */ "./node_modules/number-to-words/src/makeOrdinal.js");
var isFinite = __webpack_require__(/*! ./isFinite */ "./node_modules/number-to-words/src/isFinite.js");
var isSafeNumber = __webpack_require__(/*! ./isSafeNumber */ "./node_modules/number-to-words/src/isSafeNumber.js");

var TEN = 10;
var ONE_HUNDRED = 100;
var ONE_THOUSAND = 1000;
var ONE_MILLION = 1000000;
var ONE_BILLION = 1000000000;           //         1.000.000.000 (9)
var ONE_TRILLION = 1000000000000;       //     1.000.000.000.000 (12)
var ONE_QUADRILLION = 1000000000000000; // 1.000.000.000.000.000 (15)
var MAX = 9007199254740992;             // 9.007.199.254.740.992 (15)

var LESS_THAN_TWENTY = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

var TENTHS_LESS_THAN_HUNDRED = [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

/**
 * Converts an integer into words.
 * If number is decimal, the decimals will be removed.
 * @example toWords(12) => 'twelve'
 * @param {number|string} number
 * @param {boolean} [asOrdinal] - Deprecated, use toWordsOrdinal() instead!
 * @returns {string}
 */
function toWords(number, asOrdinal) {
    var words;
    var num = parseInt(number, 10);

    if (!isFinite(num)) {
        throw new TypeError(
            'Not a finite number: ' + number + ' (' + typeof number + ')'
        );
    }
    if (!isSafeNumber(num)) {
        throw new RangeError(
            'Input is not a safe number, it’s either too large or too small.'
        );
    }
    words = generateWords(num);
    return asOrdinal ? makeOrdinal(words) : words;
}

function generateWords(number) {
    var remainder, word,
        words = arguments[1];

    // We’re done
    if (number === 0) {
        return !words ? 'zero' : words.join(' ').replace(/,$/, '');
    }
    // First run
    if (!words) {
        words = [];
    }
    // If negative, prepend “minus”
    if (number < 0) {
        words.push('minus');
        number = Math.abs(number);
    }

    if (number < 20) {
        remainder = 0;
        word = LESS_THAN_TWENTY[number];

    } else if (number < ONE_HUNDRED) {
        remainder = number % TEN;
        word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
        // In case of remainder, we need to handle it here to be able to add the “-”
        if (remainder) {
            word += '-' + LESS_THAN_TWENTY[remainder];
            remainder = 0;
        }

    } else if (number < ONE_THOUSAND) {
        remainder = number % ONE_HUNDRED;
        word = generateWords(Math.floor(number / ONE_HUNDRED)) + ' hundred';

    } else if (number < ONE_MILLION) {
        remainder = number % ONE_THOUSAND;
        word = generateWords(Math.floor(number / ONE_THOUSAND)) + ' thousand,';

    } else if (number < ONE_BILLION) {
        remainder = number % ONE_MILLION;
        word = generateWords(Math.floor(number / ONE_MILLION)) + ' million,';

    } else if (number < ONE_TRILLION) {
        remainder = number % ONE_BILLION;
        word = generateWords(Math.floor(number / ONE_BILLION)) + ' billion,';

    } else if (number < ONE_QUADRILLION) {
        remainder = number % ONE_TRILLION;
        word = generateWords(Math.floor(number / ONE_TRILLION)) + ' trillion,';

    } else if (number <= MAX) {
        remainder = number % ONE_QUADRILLION;
        word = generateWords(Math.floor(number / ONE_QUADRILLION)) +
        ' quadrillion,';
    }

    words.push(word);
    return generateWords(remainder, words);
}

module.exports = toWords;


/***/ },

/***/ "./node_modules/number-to-words/src/toWordsOrdinal.js"
/*!************************************************************!*\
  !*** ./node_modules/number-to-words/src/toWordsOrdinal.js ***!
  \************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



var makeOrdinal = __webpack_require__(/*! ./makeOrdinal */ "./node_modules/number-to-words/src/makeOrdinal.js");
var toWords = __webpack_require__(/*! ./toWords */ "./node_modules/number-to-words/src/toWords.js");

/**
 * Converts a number into ordinal words.
 * @example toWordsOrdinal(12) => 'twelfth'
 * @param {number|string} number
 * @returns {string}
 */
function toWordsOrdinal(number) {
    var words = toWords(number);
    return makeOrdinal(words);
}

module.exports = toWordsOrdinal;


/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfTWFpbnRlbmFuY2VWaWV3X01haW50ZW5hbmNlRm9ybUNsb25lX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLDBCQUEwQixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjNCOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLFVBQVUsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlgsQ0FBbUQ7QUFDUTtBQUNuQztBQUNFO0FBQzBCO0FBQ3NCO0FBQ3RCO0FBQzBLO0FBQzlKO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNRO0FBQ0E7QUFDYztBQUNJO0FBQ3hDO0FBQ3dCO0FBQzhEO0FBQ3RGO0FBQ3lDO0FBQ0E7QUFDYTtBQUNoQjtBQUNKO0FBQ047QUFDUTtBQUNWO0FBQ0w7QUFDUTtBQUMrQjtBQUN0QztBQUN0QjtBQUN3QztBQUNwQjtBQUNRO0FBQ0k7QUFDZjtBQUNpQztBQUN0QjtBQUNRO0FBRzlELElBQU15RSxZQUFZLEdBQUd6RCwwREFBTSxDQUFDMEQsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2hEOUUsMERBQUEsQ0FBQ3lCLDhEQUFPLEVBQUF1RCxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU8zRCw4REFBYyxDQUFDNEQsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsS0FBSztNQUN0QkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDM0JDLFFBQVEsRUFBRTtJQUNaO0VBQ0YsQ0FBQztBQUFBLENBQUMsQ0FBQztBQUVILElBQU1DLFlBQVksR0FBRzVFLDBEQUFNLENBQUM2RSxLQUFBO0VBQUEsSUFBR2xCLFNBQVMsR0FBQWtCLEtBQUEsQ0FBVGxCLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBZ0IsS0FBQSxFQUFBQyxVQUFBO0VBQUEsb0JBQ2hEOUYsMERBQUEsQ0FBQ3lCLDhEQUFPLEVBQUF1RCxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ29CLEtBQUE7RUFBQSxJQUFHWCxLQUFLLEdBQUFXLEtBQUEsQ0FBTFgsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPM0QsOERBQWMsQ0FBQzRELE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLFNBQVM7TUFDMUJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQzNCQyxRQUFRLEVBQUU7SUFDWjtFQUNGLENBQUM7QUFBQSxDQUFDLENBQUM7QUFFSCxJQUFNSyxXQUFXLEdBQUdoRiwwREFBTSxDQUFDaUYsS0FBQTtFQUFBLElBQUd0QixTQUFTLEdBQUFzQixLQUFBLENBQVR0QixTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQW9CLEtBQUEsRUFBQUMsVUFBQTtFQUFBLG9CQUMvQ2xHLDBEQUFBLENBQUN5Qiw4REFBTyxFQUFBdUQsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUN3QixLQUFBO0VBQUEsSUFBR2YsS0FBSyxHQUFBZSxLQUFBLENBQUxmLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBTzNELDhEQUFjLENBQUM0RCxPQUFPLElBQUs7TUFDaENDLGVBQWUsRUFBRSxTQUFTO01BQzFCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxTQUFTLEVBQUVMLEtBQUssQ0FBQ00sT0FBTyxDQUFDLENBQUMsQ0FBQztNQUMzQkMsUUFBUSxFQUFFO0lBQ1o7RUFDRixDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBTVMsS0FBSyxHQUFHO0VBQ1pDLFFBQVEsRUFBRSxVQUFVO0VBQ3BCQyxHQUFHLEVBQUUsS0FBSztFQUNWQyxJQUFJLEVBQUUsS0FBSztFQUNYQyxTQUFTLEVBQUUsdUJBQXVCO0VBQ2xDQyxLQUFLLEVBQUUsR0FBRztFQUNWQyxPQUFPLEVBQUUsa0JBQWtCO0VBQzNCakIsU0FBUyxFQUFFLEVBQUU7RUFDYmtCLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEVBQUUsRUFBRTtBQUNOLENBQUM7QUFFRCxJQUFNQyxNQUFNLEdBQUc7RUFDYlQsUUFBUSxFQUFFLFVBQVU7RUFDcEJDLEdBQUcsRUFBRSxLQUFLO0VBQ1ZDLElBQUksRUFBRSxLQUFLO0VBQ1hDLFNBQVMsRUFBRSx1QkFBdUI7RUFDbENDLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLE9BQU8sRUFBRSxrQkFBa0I7RUFDM0JqQixTQUFTLEVBQUUsRUFBRTtFQUNia0IsRUFBRSxFQUFFLENBQUM7RUFDTEMsRUFBRSxFQUFFLENBQUM7RUFDTEMsRUFBRSxFQUFFO0FBQ04sQ0FBQztBQUNELElBQU1FLFdBQVcsR0FBRyxHQUFHO0FBQ3ZCLElBQU1DLE1BQU0sR0FBR2hHLDBEQUFNLENBQUNXLDZEQUFTLEVBQUU7RUFDL0JzRixpQkFBaUIsRUFBR0MsSUFBSSxJQUFLQSxJQUFJLEtBQUs7QUFDeEMsQ0FBQyxDQUFDLENBQUNDLEtBQUE7RUFBQSxJQUFHL0IsS0FBSyxHQUFBK0IsS0FBQSxDQUFML0IsS0FBSztJQUFFZ0MsSUFBSSxHQUFBRCxLQUFBLENBQUpDLElBQUk7RUFBQSxPQUFBQyxhQUFBO0lBQ2ZDLE1BQU0sRUFBRWxDLEtBQUssQ0FBQ2tDLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDL0JDLFVBQVUsRUFBRXBDLEtBQUssQ0FBQ3FDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFO01BQ3hEQyxNQUFNLEVBQUV2QyxLQUFLLENBQUNxQyxXQUFXLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztNQUN0Q0MsUUFBUSxFQUFFekMsS0FBSyxDQUFDcUMsV0FBVyxDQUFDSSxRQUFRLENBQUNDO0lBQ3ZDLENBQUM7RUFBQyxHQUNFVixJQUFJLElBQUk7SUFDVlcsVUFBVSxFQUFFaEIsV0FBVztJQUN2Qk4sS0FBSyxpQkFBQXBCLE1BQUEsQ0FBaUIwQixXQUFXLFFBQUs7SUFDdENTLFVBQVUsRUFBRXBDLEtBQUssQ0FBQ3FDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFO01BQ3hEQyxNQUFNLEVBQUV2QyxLQUFLLENBQUNxQyxXQUFXLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztNQUN0Q0MsUUFBUSxFQUFFekMsS0FBSyxDQUFDcUMsV0FBVyxDQUFDSSxRQUFRLENBQUNHO0lBQ3ZDLENBQUM7RUFDSCxDQUFDO0FBQUEsQ0FDRCxDQUFDO0FBQ0gsSUFBTUMsTUFBTSxHQUFHakgsMERBQU0sQ0FBQ2MsNkRBQVMsRUFBRTtFQUFFbUYsaUJBQWlCLEVBQUdDLElBQUksSUFBS0EsSUFBSSxLQUFLO0FBQU8sQ0FBQyxDQUFDLENBQ2hGZ0IsS0FBQTtFQUFBLElBQUc5QyxLQUFLLEdBQUE4QyxLQUFBLENBQUw5QyxLQUFLO0lBQUVnQyxJQUFJLEdBQUFjLEtBQUEsQ0FBSmQsSUFBSTtFQUFBLE9BQVE7SUFDcEIsb0JBQW9CLEVBQUFDLGFBQUE7TUFDbEJoQixRQUFRLEVBQUUsVUFBVTtNQUNwQjhCLFVBQVUsRUFBRSxRQUFRO01BQ3BCMUIsS0FBSyxFQUFFTSxXQUFXO01BQ2xCUyxVQUFVLEVBQUVwQyxLQUFLLENBQUNxQyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDNUNDLE1BQU0sRUFBRXZDLEtBQUssQ0FBQ3FDLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1FBQ3RDQyxRQUFRLEVBQUV6QyxLQUFLLENBQUNxQyxXQUFXLENBQUNJLFFBQVEsQ0FBQ0c7TUFDdkMsQ0FBQyxDQUFDO01BQ0ZJLFNBQVMsRUFBRTtJQUFZLEdBQ25CLENBQUNoQixJQUFJLElBQUk7TUFDWGlCLFNBQVMsRUFBRSxRQUFRO01BQ25CYixVQUFVLEVBQUVwQyxLQUFLLENBQUNxQyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDNUNDLE1BQU0sRUFBRXZDLEtBQUssQ0FBQ3FDLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1FBQ3RDQyxRQUFRLEVBQUV6QyxLQUFLLENBQUNxQyxXQUFXLENBQUNJLFFBQVEsQ0FBQ0M7TUFDdkMsQ0FBQyxDQUFDO01BQ0ZyQixLQUFLLEVBQUVyQixLQUFLLENBQUNrRCxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQ3ZCLENBQUNsRCxLQUFLLENBQUNtRCxXQUFXLENBQUNDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRztRQUM1Qi9CLEtBQUssRUFBRXJCLEtBQUssQ0FBQ2tELE9BQU8sQ0FBQyxDQUFDO01BQ3hCO0lBQ0YsQ0FBQztFQUVMLENBQUM7QUFBQSxDQUNILENBQUM7QUFDRCxTQUFTRyxvQkFBb0JBLENBQUEsRUFBRztFQUM5QixJQUFBQyxVQUFBLEdBQWUzRiw0REFBUyxDQUFDLENBQUM7SUFBbEI0RixFQUFFLEdBQUFELFVBQUEsQ0FBRkMsRUFBRTtFQUNWLElBQU1DLFFBQVEsR0FBRzlGLDhEQUFXLENBQUMsQ0FBQztFQUM5QixJQUFNK0YsUUFBUSxHQUFHckYseURBQVcsQ0FBQyxDQUFDO0VBQzlCLElBQU1zRixJQUFJLEdBQUdyRix5REFBVyxDQUFDRSx3RUFBaUIsQ0FBQztFQUUzQzFELGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQU04SSxZQUFZLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNqRCxJQUFNQyxTQUFTO01BQUEsSUFBQUMsS0FBQSxHQUFBQyxpQkFBQSxDQUFHLGFBQVk7UUFDNUIsSUFBSUwsWUFBWSxFQUFFO1VBQ2hCLElBQUk7WUFDRixJQUFNTSxHQUFHLFNBQVNoSCw4Q0FBSyxDQUFDaUgsR0FBRyxJQUFBakUsTUFBQSxDQUFJL0MscURBQVksd0JBQUErQyxNQUFBLENBQXFCMEQsWUFBWSxDQUFFLENBQUM7WUFDL0UsSUFBTVEsSUFBSSxHQUFHRixHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxZQUFZO1lBQ3ZDLElBQU1DLElBQUksR0FBR0wsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ0csSUFBSTtZQUMvQmQsUUFBUSxDQUFDakYsa0VBQU8sQ0FBQztjQUFFZ0csUUFBUSxFQUFFTCxJQUFJO2NBQUVJLElBQUksRUFBRUQ7WUFBSyxDQUFDLENBQUMsQ0FBQztVQUNuRCxDQUFDLENBQUMsT0FBT0csS0FBSyxFQUFFO1lBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7VUFDOUM7UUFDRixDQUFDLE1BQU07VUFDTGpCLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDZjtNQUNGLENBQUM7TUFBQSxnQkFiS00sU0FBU0EsQ0FBQTtRQUFBLE9BQUFDLEtBQUEsQ0FBQVksS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQWFkO0lBQ0RkLFNBQVMsQ0FBQyxDQUFDO0VBQ2IsQ0FBQyxFQUFFLENBQUNMLFFBQVEsQ0FBQyxDQUFDO0VBRWQsSUFBTW9CLFlBQVksR0FBR0EsQ0FBQSxLQUFNO0lBQ3pCakIsWUFBWSxDQUFDa0IsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQnJCLFFBQVEsQ0FBQ25GLGlFQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xCa0YsUUFBUSxDQUFDLEdBQUcsQ0FBQztFQUNmLENBQUM7RUFDRCxJQUFNdUIsTUFBTSxNQUFBOUUsTUFBQSxDQUFNL0MscURBQVksd0JBQXFCO0VBQ25ELElBQUE4SCxTQUFBLEdBQXNDbEssK0NBQVEsQ0FBQyxNQUFNO01BQ25ELElBQU1tSyxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDdkIsT0FBT0QsSUFBSTtJQUNiLENBQUMsQ0FBQztJQUFBRSxVQUFBLEdBQUFDLGNBQUEsQ0FBQUosU0FBQTtJQUhLSyxXQUFXLEdBQUFGLFVBQUE7SUFBRUcsY0FBYyxHQUFBSCxVQUFBO0VBSWxDLElBQUFJLFVBQUEsR0FBa0N6SywrQ0FBUSxDQUFDLE1BQU07TUFDL0MsSUFBTW1LLElBQUksR0FBRyxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUN2QixPQUFPRCxJQUFJO0lBQ2IsQ0FBQyxDQUFDO0lBQUFPLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBSEtFLFNBQVMsR0FBQUQsVUFBQTtJQUFFRSxZQUFZLEdBQUFGLFVBQUE7RUFJOUIsSUFBQUcsVUFBQSxHQUFzRDdLLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE4SyxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUEzREUsbUJBQW1CLEdBQUFELFVBQUE7SUFBRUUsc0JBQXNCLEdBQUFGLFVBQUE7RUFDbEQsSUFBQUcsVUFBQSxHQUEwQmpMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFrTCxVQUFBLEdBQUFaLGNBQUEsQ0FBQVcsVUFBQTtJQUEvQkUsS0FBSyxHQUFBRCxVQUFBO0lBQUVFLFFBQVEsR0FBQUYsVUFBQTtFQUN0QixJQUFBRyxVQUFBLEdBQTBCckwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQXNMLFVBQUEsR0FBQWhCLGNBQUEsQ0FBQWUsVUFBQTtJQUEvQkUsS0FBSyxHQUFBRCxVQUFBO0lBQUVFLFFBQVEsR0FBQUYsVUFBQTtFQUN0QixJQUFBRyxVQUFBLEdBQWdDekwsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTBMLFdBQUEsR0FBQXBCLGNBQUEsQ0FBQW1CLFVBQUE7SUFBckNFLFFBQVEsR0FBQUQsV0FBQTtJQUFFRSxXQUFXLEdBQUFGLFdBQUE7RUFDNUIsSUFBQUcsV0FBQSxHQUE0QjdMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUE4TCxXQUFBLEdBQUF4QixjQUFBLENBQUF1QixXQUFBO0lBQWpDRSxNQUFNLEdBQUFELFdBQUE7SUFBRUUsU0FBUyxHQUFBRixXQUFBO0VBQ3hCLElBQUFHLFdBQUEsR0FBb0NqTSwrQ0FBUSxDQUFDLFlBQVksQ0FBQztJQUFBa00sV0FBQSxHQUFBNUIsY0FBQSxDQUFBMkIsV0FBQTtJQUFuREUsVUFBVSxHQUFBRCxXQUFBO0lBQUVFLGFBQWEsR0FBQUYsV0FBQTtFQUNoQyxJQUFBRyxXQUFBLEdBQWdEck0sK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQXNNLFdBQUEsR0FBQWhDLGNBQUEsQ0FBQStCLFdBQUE7SUFBcERFLGdCQUFnQixHQUFBRCxXQUFBO0lBQUVFLG1CQUFtQixHQUFBRixXQUFBO0VBQzVDLElBQUFHLFdBQUEsR0FBZ0N6TSwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBME0sV0FBQSxHQUFBcEMsY0FBQSxDQUFBbUMsV0FBQTtJQUFwQ0UsUUFBUSxHQUFBRCxXQUFBO0lBQUVFLFdBQVcsR0FBQUYsV0FBQTtFQUM1QixJQUFBRyxXQUFBLEdBQTBDN00sK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQThNLFdBQUEsR0FBQXhDLGNBQUEsQ0FBQXVDLFdBQUE7SUFBOUNFLGFBQWEsR0FBQUQsV0FBQTtJQUFFRSxnQkFBZ0IsR0FBQUYsV0FBQTtFQUN0QyxJQUFNRyxjQUFjLEdBQUdWLGdCQUFnQixHQUFHSSxRQUFRO0VBQ2xELElBQU1PLGFBQWEsR0FBR0MsS0FBSyxDQUFDRixjQUFjLEdBQUdGLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBR0ssVUFBVSxDQUFDSCxjQUFjLEdBQUdGLGFBQWEsQ0FBQztFQUM1RyxJQUFNTSxlQUFlLEdBQUdILGFBQWEsR0FBRyxHQUFHO0VBQzNDLElBQU1JLHNCQUFzQixHQUFHRixVQUFVLENBQUNILGNBQWMsQ0FBQyxHQUFHRyxVQUFVLENBQUNDLGVBQWUsQ0FBQztFQUN2RixJQUFBRSxXQUFBLEdBQWtEdk4sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQXdOLFdBQUEsR0FBQWxELGNBQUEsQ0FBQWlELFdBQUE7SUFBdkRFLGlCQUFpQixHQUFBRCxXQUFBO0lBQUVFLG9CQUFvQixHQUFBRixXQUFBO0VBQzlDLElBQUFHLFdBQUEsR0FBc0MzTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBNE4sV0FBQSxHQUFBdEQsY0FBQSxDQUFBcUQsV0FBQTtJQUEzQ0UsV0FBVyxHQUFBRCxXQUFBO0lBQUVFLGNBQWMsR0FBQUYsV0FBQTtFQUNsQyxJQUFBRyxXQUFBLEdBQXdCL04sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQWdPLFdBQUEsR0FBQTFELGNBQUEsQ0FBQXlELFdBQUE7SUFBN0JFLElBQUksR0FBQUQsV0FBQTtJQUFFRSxPQUFPLEdBQUFGLFdBQUE7RUFDcEIsSUFBQUcsV0FBQSxHQUFnQ25PLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFvTyxXQUFBLEdBQUE5RCxjQUFBLENBQUE2RCxXQUFBO0lBQXJDRSxRQUFRLEdBQUFELFdBQUE7SUFBRUUsV0FBVyxHQUFBRixXQUFBO0VBQzVCLElBQUFHLFdBQUEsR0FBMEJ2TywrQ0FBUSxDQUFDLEVBQ2xDLENBQUM7SUFBQXdPLFdBQUEsR0FBQWxFLGNBQUEsQ0FBQWlFLFdBQUE7SUFES0UsS0FBSyxHQUFBRCxXQUFBO0lBQUVFLFFBQVEsR0FBQUYsV0FBQTtFQUV0QixJQUFBRyxXQUFBLEdBQWdDM08sK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQTRPLFdBQUEsR0FBQXRFLGNBQUEsQ0FBQXFFLFdBQUE7SUFBcENFLFFBQVEsR0FBQUQsV0FBQTtJQUFFRSxXQUFXLEdBQUFGLFdBQUE7RUFDNUIsSUFBQUcsV0FBQSxHQUF3Qy9PLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFnUCxXQUFBLEdBQUExRSxjQUFBLENBQUF5RSxXQUFBO0lBQTVDRSxZQUFZLEdBQUFELFdBQUE7SUFBRUUsZUFBZSxHQUFBRixXQUFBO0VBQ3BDLElBQUFHLFdBQUEsR0FBMENuUCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBb1AsV0FBQSxHQUFBOUUsY0FBQSxDQUFBNkUsV0FBQTtJQUE5Q0UsYUFBYSxHQUFBRCxXQUFBO0lBQUVFLGdCQUFnQixHQUFBRixXQUFBO0VBQ3RDLElBQUFHLFdBQUEsR0FBZ0N2UCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBd1AsV0FBQSxHQUFBbEYsY0FBQSxDQUFBaUYsV0FBQTtJQUFyQ0UsUUFBUSxHQUFBRCxXQUFBO0lBQUVFLFdBQVcsR0FBQUYsV0FBQTtFQUM1QixJQUFBRyxXQUFBLEdBQXdDM1AsK0NBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFBNFAsV0FBQSxHQUFBdEYsY0FBQSxDQUFBcUYsV0FBQTtJQUE3Q0UsWUFBWSxHQUFBRCxXQUFBO0lBQUVFLGVBQWUsR0FBQUYsV0FBQTtFQUNwQzdQLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQU1nUSxTQUFTO01BQUEsSUFBQUMsS0FBQSxHQUFBOUcsaUJBQUEsQ0FBRyxhQUFZO1FBQzVCLElBQUk7VUFBQSxJQUFBK0csU0FBQSxFQUFBQyxVQUFBO1VBQ0YsSUFBTS9HLEdBQUcsU0FBU2hILDhDQUFLLENBQUNpSCxHQUFHLElBQUFqRSxNQUFBLENBQUkvQyxxREFBWSx1QkFBQStDLE1BQUEsQ0FBb0JzRCxFQUFFLENBQUUsQ0FBQztVQUNwRXFILGVBQWUsQ0FBQzNHLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUN1RyxZQUFZLENBQUM7VUFDM0M3RSxzQkFBc0IsQ0FBQzdCLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUN5QixtQkFBbUIsQ0FBQztVQUN6REssUUFBUSxDQUFDakMsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQzZCLEtBQUssQ0FBQztVQUM3QkssUUFBUSxDQUFDckMsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ2lDLEtBQUssQ0FBQztVQUM3QkssV0FBVyxDQUFDekMsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ3FDLFFBQVEsQ0FBQztVQUNuQytCLG9CQUFvQixDQUFDdkUsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ21FLGlCQUFpQixDQUFDO1VBQ3JESyxjQUFjLENBQUMzRSxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDdUUsV0FBVyxDQUFDO1VBQ3pDUyxXQUFXLENBQUNuRixHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDK0UsUUFBUSxDQUFDO1VBQ25DaUIsZ0JBQWdCLENBQUNhLE1BQU0sQ0FBQyxFQUFBRixTQUFBLEdBQUE5RyxHQUFHLENBQUNHLElBQUksY0FBQTJHLFNBQUEsZ0JBQUFBLFNBQUEsR0FBUkEsU0FBQSxDQUFVM0csSUFBSSxjQUFBMkcsU0FBQSx1QkFBZEEsU0FBQSxDQUFnQlosYUFBYSxPQUFBYSxVQUFBLEdBQUkvRyxHQUFHLENBQUNHLElBQUksY0FBQTRHLFVBQUEsdUJBQVJBLFVBQUEsQ0FBVWIsYUFBYSxLQUFJLENBQUMsQ0FBQyxDQUFDO1VBQ3ZGWCxRQUFRLENBQUN2RixHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDbUYsS0FBSyxDQUFDMkIsR0FBRyxDQUFFQyxHQUFHLElBQUFsSixhQUFBLENBQUFBLGFBQUEsS0FBV2tKLEdBQUc7WUFBRUMsT0FBTyxFQUFFO1VBQUMsRUFBRyxDQUFDLENBQUM7VUFDcEVwQyxPQUFPLENBQUMvRSxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDMkUsSUFBSSxDQUFDO1VBQzNCakMsU0FBUyxDQUFDN0MsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ3lDLE1BQU0sQ0FBQztRQUNqQyxDQUFDLENBQUMsT0FBT3BDLEtBQUssRUFBRTtVQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO1FBQzlDO01BQ0YsQ0FBQztNQUFBLGdCQWxCS29HLFNBQVNBLENBQUE7UUFBQSxPQUFBQyxLQUFBLENBQUFuRyxLQUFBLE9BQUFDLFNBQUE7TUFBQTtJQUFBLEdBa0JkO0lBQ0RpRyxTQUFTLENBQUMsQ0FBQztFQUNiLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTmhRLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQU13USxlQUFlO01BQUEsSUFBQUMsS0FBQSxHQUFBdEgsaUJBQUEsQ0FBRyxhQUFZO1FBQ2xDLElBQUk7VUFBQSxJQUFBdUgsVUFBQSxFQUFBQyxVQUFBO1VBQ0YsSUFBTXZILEdBQUcsU0FBU2hILDhDQUFLLENBQUNpSCxHQUFHLElBQUFqRSxNQUFBLENBQUkvQyxxREFBWSxnQ0FBNkIsQ0FBQztVQUN6RWtOLGdCQUFnQixDQUFFcUIsUUFBUSxDQUFDLEVBQUFGLFVBQUEsR0FBQXRILEdBQUcsQ0FBQ0csSUFBSSxjQUFBbUgsVUFBQSxnQkFBQUEsVUFBQSxHQUFSQSxVQUFBLENBQVVuSCxJQUFJLGNBQUFtSCxVQUFBLHVCQUFkQSxVQUFBLENBQWdCcEIsYUFBYSxPQUFBcUIsVUFBQSxHQUFJdkgsR0FBRyxDQUFDRyxJQUFJLGNBQUFvSCxVQUFBLHVCQUFSQSxVQUFBLENBQVVyQixhQUFhLEtBQUksQ0FBQyxDQUFDLEdBQUksQ0FBQyxDQUFDO1FBQ2pHLENBQUMsQ0FBQyxPQUFPMUYsS0FBSyxFQUFFO1VBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7UUFDOUM7TUFDRixDQUFDO01BQUEsZ0JBUEs0RyxlQUFlQSxDQUFBO1FBQUEsT0FBQUMsS0FBQSxDQUFBM0csS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQU9wQjtJQUNEeUcsZUFBZSxDQUFDLENBQUM7RUFDbkIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLElBQUFLLFdBQUEsR0FBOEM1USwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBNlEsV0FBQSxHQUFBdkcsY0FBQSxDQUFBc0csV0FBQTtJQUFuREUsZUFBZSxHQUFBRCxXQUFBO0lBQUVFLGtCQUFrQixHQUFBRixXQUFBO0VBQzFDLElBQUFHLFdBQUEsR0FBZ0RoUiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBaVIsV0FBQSxHQUFBM0csY0FBQSxDQUFBMEcsV0FBQTtJQUFyREUsZ0JBQWdCLEdBQUFELFdBQUE7SUFBRUUsbUJBQW1CLEdBQUFGLFdBQUE7RUFDNUMsSUFBTUcsV0FBVyxHQUFHLE1BQU0sR0FBRy9CLGFBQWE7RUFDMUMsSUFBQWdDLGVBQUEsR0FBb0N2UixxREFBYyxDQUFDLEVBQUUsQ0FBQztJQUFBd1IsZ0JBQUEsR0FBQWhILGNBQUEsQ0FBQStHLGVBQUE7SUFBL0NFLFVBQVUsR0FBQUQsZ0JBQUE7SUFBRUUsYUFBYSxHQUFBRixnQkFBQTtFQUNoQyxDQUFDO0VBQ0QsSUFBTUcsb0JBQW9CLEdBQUlDLFFBQVEsSUFBSztJQUN6QyxJQUFNQyxlQUFlLEdBQUdsQyxRQUFRLENBQUNtQyxJQUFJLENBQUVDLE1BQU0sSUFBS0EsTUFBTSxLQUFLSCxRQUFRLENBQUM7SUFDdEU1QixlQUFlLENBQUM7TUFDZGdDLEdBQUcsRUFBRUgsZUFBZSxhQUFmQSxlQUFlLHVCQUFmQSxlQUFlLENBQUVHLEdBQUc7TUFDekJqQyxZQUFZLEVBQUU4QixlQUFlLGFBQWZBLGVBQWUsdUJBQWZBLGVBQWUsQ0FBRUksUUFBUTtNQUN2Q0MsT0FBTyxFQUFFLENBQUFMLGVBQWUsYUFBZkEsZUFBZSx1QkFBZkEsZUFBZSxDQUFFTSxjQUFjLElBQUcsR0FBRyxJQUFHTixlQUFlLGFBQWZBLGVBQWUsdUJBQWZBLGVBQWUsQ0FBRU8sV0FBVztNQUM3RUMsS0FBSyxFQUFFUixlQUFlLGFBQWZBLGVBQWUsdUJBQWZBLGVBQWUsQ0FBRVM7SUFDMUIsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUNELElBQU1DLG1CQUFtQixHQUFHQSxDQUFBLEtBQU07SUFDaEN2QyxlQUFlLENBQUM7TUFDZGdDLEdBQUcsRUFBRSxFQUFFO01BQ1BqQyxZQUFZLEVBQUUsRUFBRTtNQUNoQm9DLGNBQWMsRUFBRSxFQUFFO01BQ2xCQyxXQUFXLEVBQUU7SUFDZixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0QsSUFBTUksTUFBTSxHQUFHMU8sNkNBQUssQ0FBQ3dHLElBQUksQ0FBQ21JLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsR0FBRzVKLElBQUksQ0FBQ1UsSUFBSSxDQUFDSSxRQUFRLEdBQUcsV0FBVyxHQUFHLE1BQU07RUFDdkczSixnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFNMFMsYUFBYTtNQUFBLElBQUFDLE1BQUEsR0FBQXhKLGlCQUFBLENBQUcsYUFBWTtRQUNoQyxJQUFJO1VBQ0YsSUFBTUMsR0FBRyxTQUFTaEgsOENBQUssQ0FBQ2lILEdBQUcsSUFBQWpFLE1BQUEsQ0FBSS9DLHFEQUFZLGNBQVcsQ0FBQztVQUN2RHNOLFdBQVcsQ0FBQ3ZHLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNxSixPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxPQUFPaEosS0FBSyxFQUFFO1VBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7UUFDOUM7TUFDRixDQUFDO01BQUEsZ0JBUEs4SSxhQUFhQSxDQUFBO1FBQUEsT0FBQUMsTUFBQSxDQUFBN0ksS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQU9sQjtJQUNEMkksYUFBYSxDQUFDLENBQUM7RUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLElBQUFHLFdBQUEsR0FBa0Q1UywrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBNlMsV0FBQSxHQUFBdkksY0FBQSxDQUFBc0ksV0FBQTtJQUExREUsaUJBQWlCLEdBQUFELFdBQUE7SUFBRUUsb0JBQW9CLEdBQUFGLFdBQUE7RUFFOUMsSUFBTUcsMkJBQTJCLEdBQUlDLENBQUMsSUFBSztJQUN6Q0EsQ0FBQyxDQUFDQyxlQUFlLENBQUMsQ0FBQztJQUNuQkgsb0JBQW9CLENBQUMsSUFBSSxDQUFDO0VBQzVCLENBQUM7RUFDRCxJQUFNSSw0QkFBNEIsR0FBR0EsQ0FBQSxLQUFNO0lBQ3pDSixvQkFBb0IsQ0FBQyxLQUFLLENBQUM7RUFDN0IsQ0FBQztFQUNELElBQU1LLG9CQUFvQixHQUFJQyxXQUFXLElBQUs7SUFDNUMzRCxXQUFXLENBQUMsQ0FBQyxHQUFHRCxRQUFRLEVBQUU0RCxXQUFXLENBQUMsQ0FBQztFQUN6QyxDQUFDO0VBQ0QsQ0FBQztFQUNELElBQUFDLFdBQUEsR0FBZ0N0VCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBdVQsV0FBQSxHQUFBakosY0FBQSxDQUFBZ0osV0FBQTtJQUFyQ0UsUUFBUSxHQUFBRCxXQUFBO0lBQUVFLFdBQVcsR0FBQUYsV0FBQTtFQUM1QnhULGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQU0yVCxhQUFhO01BQUEsSUFBQUMsTUFBQSxHQUFBekssaUJBQUEsQ0FBRyxhQUFZO1FBQ2hDLElBQUk7VUFDRixJQUFNQyxHQUFHLFNBQVNoSCw4Q0FBSyxDQUFDaUgsR0FBRyxJQUFBakUsTUFBQSxDQUFJL0MscURBQVksY0FBVyxDQUFDO1VBQ3ZEcVIsV0FBVyxDQUFDdEssR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQztRQUM1QixDQUFDLENBQUMsT0FBT0ssS0FBSyxFQUFFO1VBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7UUFDOUM7TUFDRixDQUFDO01BQUEsZ0JBUEsrSixhQUFhQSxDQUFBO1FBQUEsT0FBQUMsTUFBQSxDQUFBOUosS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQU9sQjtJQUNENEosYUFBYSxDQUFDLENBQUM7RUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQU1FLGNBQWMsR0FBR0osUUFBUSxDQUFDSyxNQUFNLENBQUV4RCxHQUFHLElBQUtBLEdBQUcsQ0FBQ3lELFVBQVUsS0FBSyxZQUFZLElBQUl6RCxHQUFHLENBQUMwRCxNQUFNLEtBQUssT0FBTyxJQUFJMUQsR0FBRyxDQUFDMEQsTUFBTSxLQUFLLFFBQVEsSUFBSTFELEdBQUcsQ0FBQzBELE1BQU0sS0FBSyxXQUFXLENBQUM7RUFFbkssSUFBTUMsb0JBQW9CLEdBQUl0QyxRQUFRLElBQUs7SUFDekMsSUFBTUMsZUFBZSxHQUFHNkIsUUFBUSxDQUFDNUIsSUFBSSxDQUFFQyxNQUFNLElBQUtBLE1BQU0sS0FBS0gsUUFBUSxDQUFDO0lBQ3RFUCxtQkFBbUIsQ0FBQ1EsZUFBZSxhQUFmQSxlQUFlLHVCQUFmQSxlQUFlLENBQUVwSSxZQUFZLENBQUM7RUFDcEQsQ0FBQztFQUNELENBQUM7RUFDRHhKLGlEQUFTLENBQUMsTUFBTTtJQUNkLElBQU1rVSxTQUFTO01BQUEsSUFBQUMsTUFBQSxHQUFBaEwsaUJBQUEsQ0FBRyxhQUFZO1FBQzVCLElBQUk7VUFDRixJQUFNQyxHQUFHLFNBQVNoSCw4Q0FBSyxDQUFDaUgsR0FBRyxJQUFBakUsTUFBQSxDQUFJL0MscURBQVksVUFBTyxDQUFDO1VBQ25EMk8sa0JBQWtCLENBQUM1SCxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDcUosT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsT0FBT2hKLEtBQUssRUFBRTtVQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO1FBQzlDO01BQ0YsQ0FBQztNQUFBLGdCQVBLc0ssU0FBU0EsQ0FBQTtRQUFBLE9BQUFDLE1BQUEsQ0FBQXJLLEtBQUEsT0FBQUMsU0FBQTtNQUFBO0lBQUEsR0FPZDtJQUNEbUssU0FBUyxDQUFDLENBQUM7RUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ04sSUFBTUUsZ0JBQWdCLEdBQUdBLENBQUNDLEtBQUssRUFBRTFDLFFBQVEsS0FBSztJQUM1QyxJQUFNQyxlQUFlLEdBQUdELFFBQVE7SUFDaENoRCxRQUFRLENBQUNELEtBQUssSUFBSUEsS0FBSyxDQUFDMkIsR0FBRyxDQUFFQyxHQUFHLElBQUtBLEdBQUcsQ0FBQytELEtBQUssS0FBS0EsS0FBSyxHQUFBak4sYUFBQSxDQUFBQSxhQUFBLEtBQ25Ea0osR0FBRztNQUNOZ0UsUUFBUSxFQUFFO1FBQ1J2QyxHQUFHLEVBQUVILGVBQWUsYUFBZkEsZUFBZSx1QkFBZkEsZUFBZSxDQUFFRyxHQUFHO1FBQ3pCdUMsUUFBUSxFQUFFMUMsZUFBZSxhQUFmQSxlQUFlLHVCQUFmQSxlQUFlLENBQUUwQztNQUM3QixDQUFDO01BQ0RDLFFBQVEsRUFBRTNDLGVBQWUsYUFBZkEsZUFBZSx1QkFBZkEsZUFBZSxDQUFFNEMsYUFBYTtNQUN4Q0MsZUFBZSxFQUFFN0MsZUFBZSxhQUFmQSxlQUFlLHVCQUFmQSxlQUFlLENBQUU2QyxlQUFlO01BQ2pEQyxRQUFRLEVBQUU5QyxlQUFlLGFBQWZBLGVBQWUsdUJBQWZBLGVBQWUsQ0FBRStDLGdCQUFnQjtNQUMzQ0MsS0FBSyxFQUFFaEQsZUFBZSxhQUFmQSxlQUFlLHVCQUFmQSxlQUFlLENBQUVpRDtJQUFZLEtBQ2xDdkUsR0FBRyxDQUFDLENBQUM7RUFDWCxDQUFDO0VBQ0QsSUFBTXdFLFlBQVksR0FBR0EsQ0FBQzVCLENBQUMsRUFBRTZCLENBQUMsS0FBSztJQUM3QixJQUFBQyxTQUFBLEdBQXdCOUIsQ0FBQyxDQUFDK0IsTUFBTTtNQUF4QkMsSUFBSSxHQUFBRixTQUFBLENBQUpFLElBQUk7TUFBRUMsS0FBSyxHQUFBSCxTQUFBLENBQUxHLEtBQUs7SUFDbkIsSUFBTUMsSUFBSSxHQUFHLENBQUMsR0FBRzFHLEtBQUssQ0FBQztJQUN2QjBHLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUNHLElBQUksQ0FBQyxHQUFHQyxLQUFLO0lBQ3JCQyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHTSxJQUFJLENBQUNDLEtBQUssQ0FBRUYsSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBR0ssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBSSxHQUFHLENBQUMsR0FBRyxHQUFHO0lBQzNGSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHTSxJQUFJLENBQUNDLEtBQUssQ0FBRUYsSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBR0ssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBSSxHQUFHLENBQUMsR0FBRyxHQUFHO0lBQ3pGSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztJQUN0RUssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBR0ssSUFBSSxDQUFDTCxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHO0lBQ2pESyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHTSxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDRixJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUc7SUFDaEdLLElBQUksQ0FBQ0wsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLEdBQUdNLElBQUksQ0FBQ0MsS0FBSyxDQUFFRixJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHSyxJQUFJLENBQUNMLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUc7SUFDN0ZwRyxRQUFRLENBQUN5RyxJQUFJLENBQUM7RUFDaEIsQ0FBQztFQUNEO0VBQ0EsSUFBTUcsT0FBTyxHQUFHQSxDQUFBLEtBQU07SUFDcEIsSUFBTUMsT0FBTyxHQUFHO01BQ2RuQixLQUFLLEVBQUUxUixpREFBRSxDQUFDLENBQUM7TUFDWDJSLFFBQVEsRUFBRTtRQUNSdkMsR0FBRyxFQUFFLEVBQUU7UUFDUHVDLFFBQVEsRUFBRTtNQUNaLENBQUM7TUFDREcsZUFBZSxFQUFFLEVBQUU7TUFDbkJnQixZQUFZLEVBQUUsQ0FBQztNQUNmQyxPQUFPLEVBQUUsQ0FBQztNQUNWaEIsUUFBUSxFQUFFLENBQUM7TUFDWGlCLFVBQVUsRUFBRSxDQUFDO01BQ2JwQixRQUFRLEVBQUUsQ0FBQztNQUNYcUIsV0FBVyxFQUFFLENBQUM7TUFDZEMsUUFBUSxFQUFFLENBQUM7TUFDWEMsVUFBVSxFQUFFLENBQUM7TUFDYkMsT0FBTyxFQUFFLENBQUM7TUFDVkMsVUFBVSxFQUFFLEVBQUU7TUFDZEMsYUFBYSxFQUFFLENBQUM7TUFDaEJDLFNBQVMsRUFBRSxDQUFDO01BQ1p0QixLQUFLLEVBQUUsQ0FBQztNQUNSckUsT0FBTyxFQUFFLENBQUM7TUFDVjRGLFVBQVUsRUFBRTtJQUNkLENBQUM7SUFDRHhILFFBQVEsQ0FBQyxDQUFDLEdBQUdELEtBQUssRUFBRThHLE9BQU8sQ0FBQyxDQUFDO0VBQy9CLENBQUM7RUFDRCxJQUFNWSxZQUFZLEdBQUdBLENBQUEsS0FBTTtJQUN6QnpILFFBQVEsQ0FBQyxDQUFDLEdBQUdELEtBQUssRUFBRTtNQUNsQjJILGNBQWMsRUFBRSxFQUFFO01BQ2xCaEMsS0FBSyxFQUFFMVIsaURBQUUsQ0FBQyxDQUFDO01BQ1gyUixRQUFRLEVBQUU7UUFDUnZDLEdBQUcsRUFBRSxFQUFFO1FBQ1B1QyxRQUFRLEVBQUU7TUFDWixDQUFDO01BQ0RHLGVBQWUsRUFBRSxFQUFFO01BQ25CZ0IsWUFBWSxFQUFFLENBQUM7TUFDZkMsT0FBTyxFQUFFLENBQUM7TUFDVmhCLFFBQVEsRUFBRSxDQUFDO01BQ1hpQixVQUFVLEVBQUUsQ0FBQztNQUNicEIsUUFBUSxFQUFFLENBQUM7TUFDWHFCLFdBQVcsRUFBRSxDQUFDO01BQ2RDLFFBQVEsRUFBRSxDQUFDO01BQ1hDLFVBQVUsRUFBRSxDQUFDO01BQ2JDLE9BQU8sRUFBRSxDQUFDO01BQ1ZDLFVBQVUsRUFBRSxFQUFFO01BQ2RDLGFBQWEsRUFBRSxDQUFDO01BQ2hCQyxTQUFTLEVBQUUsQ0FBQztNQUNadEIsS0FBSyxFQUFFLENBQUM7TUFDUnJFLE9BQU8sRUFBRSxDQUFDO01BQ1Y0RixVQUFVLEVBQUU7SUFDZCxDQUFDLENBQUMsQ0FBQztFQUNMLENBQUM7RUFDRCxJQUFNRyxhQUFhLEdBQUlDLE1BQU0sSUFBSztJQUNoQyxJQUFJLENBQUNBLE1BQU0sQ0FBQ0MsV0FBVyxFQUFFO01BQ3ZCO0lBQ0Y7SUFDQSxJQUFNQyxRQUFRLEdBQUcsQ0FBQyxHQUFHL0gsS0FBSyxDQUFDO0lBQzNCLElBQUFnSSxnQkFBQSxHQUFrQkQsUUFBUSxDQUFDRSxNQUFNLENBQUNKLE1BQU0sQ0FBQ0ssTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO01BQUFDLGlCQUFBLEdBQUF2TSxjQUFBLENBQUFtTSxnQkFBQTtNQUFsREssT0FBTyxHQUFBRCxpQkFBQTtJQUNkTCxRQUFRLENBQUNFLE1BQU0sQ0FBQ0osTUFBTSxDQUFDQyxXQUFXLENBQUNLLEtBQUssRUFBRSxDQUFDLEVBQUVFLE9BQU8sQ0FBQztJQUNyRHBJLFFBQVEsQ0FBQzhILFFBQVEsQ0FBQztFQUNwQixDQUFDO0VBQ0QsSUFBTU8sVUFBVSxHQUFHM0MsS0FBSyxJQUFJO0lBQzFCMUYsUUFBUSxDQUFDRCxLQUFLLElBQUlBLEtBQUssQ0FBQ29GLE1BQU0sQ0FBRW1ELElBQUksSUFBS0EsSUFBSSxDQUFDNUMsS0FBSyxLQUFLQSxLQUFLLENBQUMsQ0FBQztFQUNqRSxDQUFDO0VBQ0QsSUFBTTZDLHFCQUFxQixHQUFHbkcsZUFBZSxDQUFDK0MsTUFBTSxDQUFDaEMsTUFBTSxJQUFJLENBQUNwRCxLQUFLLENBQUNtRCxJQUFJLENBQUV2QixHQUFHO0lBQUEsSUFBQTZHLGFBQUE7SUFBQSxPQUFLckYsTUFBTSxDQUFDQyxHQUFHLE9BQUFvRixhQUFBLEdBQUs3RyxHQUFHLENBQUNnRSxRQUFRLGNBQUE2QyxhQUFBLHVCQUFaQSxhQUFBLENBQWNwRixHQUFHLEtBQUlELE1BQU0sQ0FBQ3NGLFFBQVEsS0FBSyxPQUFPO0VBQUEsRUFBQyxDQUFDO0VBQ3JKLENBQUM7RUFDRCxJQUFBQyxXQUFBLEdBQWtEcFgsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQXFYLFdBQUEsR0FBQS9NLGNBQUEsQ0FBQThNLFdBQUE7SUFBMURFLGlCQUFpQixHQUFBRCxXQUFBO0lBQUVFLG9CQUFvQixHQUFBRixXQUFBO0VBRTlDLElBQU1HLDJCQUEyQixHQUFJdkUsQ0FBQyxJQUFLO0lBQ3pDQSxDQUFDLENBQUNDLGVBQWUsQ0FBQyxDQUFDO0lBQ25CcUUsb0JBQW9CLENBQUMsSUFBSSxDQUFDO0VBQzVCLENBQUM7RUFDRCxJQUFNRSw0QkFBNEIsR0FBR0EsQ0FBQSxLQUFNO0lBQ3pDRixvQkFBb0IsQ0FBQyxLQUFLLENBQUM7RUFDN0IsQ0FBQztFQUNELElBQU1HLGdCQUFnQixHQUFJbkMsT0FBTyxJQUFLO0lBQ3BDeEUsa0JBQWtCLENBQUMsQ0FBQyxHQUFHRCxlQUFlLEVBQUV5RSxPQUFPLENBQUMsQ0FBQztFQUNuRCxDQUFDO0VBQ0QsSUFBTW9DLHNCQUFzQixHQUFJdkQsS0FBSyxJQUFLO0lBQ3hDMUYsUUFBUSxDQUFDRCxLQUFLLElBQUlBLEtBQUssQ0FBQzJCLEdBQUcsQ0FBRUMsR0FBRyxJQUFLQSxHQUFHLENBQUMrRCxLQUFLLEtBQUtBLEtBQUssR0FBQWpOLGFBQUEsQ0FBQUEsYUFBQSxLQUNuRGtKLEdBQUc7TUFDTmdFLFFBQVEsRUFBRTtRQUNSdkMsR0FBRyxFQUFFLElBQUk7UUFDVHVDLFFBQVEsRUFBRTtNQUNaO0lBQUMsS0FDQ2hFLEdBQUcsQ0FBQyxDQUFDO0VBQ1gsQ0FBQztFQUNELElBQU11SCxpQ0FBaUMsR0FBSXhELEtBQUssSUFBSztJQUNuRDFGLFFBQVEsQ0FBQ0QsS0FBSyxJQUFJQSxLQUFLLENBQUMyQixHQUFHLENBQUVDLEdBQUcsSUFBS0EsR0FBRyxDQUFDK0QsS0FBSyxLQUFLQSxLQUFLLEdBQUFqTixhQUFBLENBQUFBLGFBQUEsS0FDbkRrSixHQUFHO01BQ05nRSxRQUFRLEVBQUU7UUFDUkEsUUFBUSxFQUFFO01BQ1o7SUFBQyxLQUNDaEUsR0FBRyxDQUFDLENBQUM7RUFDWCxDQUFDO0VBQ0R0USxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFNOFgsT0FBTyxHQUFHcEosS0FBSyxDQUFDcUosTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRTFILEdBQUcsS0FBSzBILEdBQUcsR0FBRzFILEdBQUcsQ0FBQ3FGLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDbkU1RyxXQUFXLENBQUMrSSxPQUFPLENBQUNHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixJQUFJQyxRQUFRLEdBQUc5SCxNQUFNLENBQUN0QixRQUFRLENBQUMsR0FBR3NCLE1BQU0sQ0FBQzdDLHNCQUFzQixDQUFDO0lBQ2hFNEIsZUFBZSxDQUFDK0ksUUFBUSxDQUFDO0VBQzNCLENBQUMsQ0FBQztFQUVGLElBQUFDLFdBQUEsR0FBNENsWSwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBbVksV0FBQSxHQUFBN04sY0FBQSxDQUFBNE4sV0FBQTtJQUFwREUsY0FBYyxHQUFBRCxXQUFBO0lBQUVFLGlCQUFpQixHQUFBRixXQUFBO0VBQ3hDLElBQUFHLFdBQUEsR0FBNEJ0WSwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBdVksV0FBQSxHQUFBak8sY0FBQSxDQUFBZ08sV0FBQTtJQUFuQ0UsTUFBTSxHQUFBRCxXQUFBO0lBQUVFLFNBQVMsR0FBQUYsV0FBQTtFQUV4QixJQUFNRyxvQkFBb0I7SUFBQSxJQUFBQyxNQUFBLEdBQUF6UCxpQkFBQSxDQUFHLFdBQU9ULEVBQUUsRUFBSztNQUN6QzRQLGlCQUFpQixDQUFDLElBQUksQ0FBQztNQUN2QkksU0FBUyxDQUFDaFEsRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUFBLGdCQUhLaVEsb0JBQW9CQSxDQUFBRSxFQUFBO01BQUEsT0FBQUQsTUFBQSxDQUFBOU8sS0FBQSxPQUFBQyxTQUFBO0lBQUE7RUFBQSxHQUd6QjtFQUNELElBQU0rTyxzQkFBc0IsR0FBR0EsQ0FBQSxLQUFNO0lBQ25DUixpQkFBaUIsQ0FBQyxLQUFLLENBQUM7RUFDMUIsQ0FBQztFQUNELElBQU1TLHFCQUFxQjtJQUFBLElBQUFDLE1BQUEsR0FBQTdQLGlCQUFBLENBQUcsYUFBWTtNQUN4Q21QLGlCQUFpQixDQUFDLEtBQUssQ0FBQztNQUN4QixJQUFJRyxNQUFNLEVBQUU7UUFDVixJQUFJO1VBQ0YsSUFBTXJQLEdBQUcsU0FBU2hILDhDQUFLLENBQUNpSCxHQUFHLElBQUFqRSxNQUFBLENBQUkvQyxxREFBWSxnQkFBQStDLE1BQUEsQ0FBYXFULE1BQU0sQ0FBRSxDQUFDO1VBQ2pFOUosUUFBUSxDQUFDRCxLQUFLLElBQUlBLEtBQUssQ0FBQzJCLEdBQUcsQ0FBRUMsR0FBRztZQUFBLElBQUEySSxjQUFBO1lBQUEsT0FBSyxFQUFBQSxjQUFBLEdBQUEzSSxHQUFHLENBQUNnRSxRQUFRLGNBQUEyRSxjQUFBLHVCQUFaQSxjQUFBLENBQWNsSCxHQUFHLE1BQUszSSxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDd0ksR0FBRyxHQUFBM0ssYUFBQSxDQUFBQSxhQUFBLEtBQ3ZFa0osR0FBRztjQUNOZ0UsUUFBUSxFQUFFO2dCQUNSdkMsR0FBRyxFQUFFM0ksR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ3dJLEdBQUc7Z0JBQ3RCdUMsUUFBUSxFQUFFbEwsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQytLO2NBQzFCLENBQUM7Y0FDREcsZUFBZSxFQUFFckwsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ2tMLGVBQWU7Y0FDOUNGLFFBQVEsRUFBRW5MLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNpTCxhQUFhO2NBQ3JDRSxRQUFRLEVBQUV0TCxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDb0wsZ0JBQWdCO2NBQ3hDQyxLQUFLLEVBQUV4TCxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDc0wsWUFBWTtjQUNqQ2UsV0FBVyxFQUFFdEYsR0FBRyxDQUFDb0YsT0FBTyxHQUFHdE0sR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ29MLGdCQUFnQjtjQUN6RGtCLFFBQVEsRUFBR3ZGLEdBQUcsQ0FBQ29GLE9BQU8sR0FBR3RNLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNvTCxnQkFBZ0IsR0FBSXJFLEdBQUcsQ0FBQ21GLFlBQVk7Y0FDM0VLLFVBQVUsRUFBSXhGLEdBQUcsQ0FBQ29GLE9BQU8sR0FBR3RNLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNvTCxnQkFBZ0IsR0FBSXJFLEdBQUcsQ0FBQ21GLFlBQVksR0FBSSxHQUFHO2NBQ3JGRSxVQUFVLEVBQUdyRixHQUFHLENBQUNvRixPQUFPLEdBQUd0TSxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDb0wsZ0JBQWdCLEdBQU9yRSxHQUFHLENBQUNvRixPQUFPLEdBQUd0TSxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDb0wsZ0JBQWdCLEdBQUlyRSxHQUFHLENBQUNtRixZQUFZLEdBQUksR0FBSTtjQUN4SVMsU0FBUyxFQUFFNUYsR0FBRyxDQUFDb0YsT0FBTyxHQUFHdE0sR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ2lMLGFBQWE7Y0FDcER5QixhQUFhLEVBQUU3TSxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDaUwsYUFBYSxHQUFHbEUsR0FBRyxDQUFDeUY7WUFBTyxLQUN0RHpGLEdBQUc7VUFBQSxFQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsT0FBTzFHLEtBQUssRUFBRSxDQUVoQjtNQUNGO0lBQ0YsQ0FBQztJQUFBLGdCQTFCS21QLHFCQUFxQkEsQ0FBQTtNQUFBLE9BQUFDLE1BQUEsQ0FBQWxQLEtBQUEsT0FBQUMsU0FBQTtJQUFBO0VBQUEsR0EwQjFCO0VBQ0QsQ0FBQztFQUNELENBQUM7RUFDRCxJQUFBbVAsV0FBQSxHQUFnQ2paLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFrWixXQUFBLEdBQUE1TyxjQUFBLENBQUEyTyxXQUFBO0lBQXhDRSxRQUFRLEdBQUFELFdBQUE7SUFBRUUsV0FBVyxHQUFBRixXQUFBO0VBRTVCLElBQU1HLGNBQWMsR0FBSXBHLENBQUMsSUFBSztJQUM1QkEsQ0FBQyxDQUFDcUcsY0FBYyxDQUFDLENBQUM7SUFDbEJGLFdBQVcsQ0FBQyxJQUFJLENBQUM7RUFDbkIsQ0FBQztFQUNELElBQU1HLGVBQWUsR0FBR0EsQ0FBQSxLQUFNO0lBQzVCSCxXQUFXLENBQUMsS0FBSyxDQUFDO0VBQ3BCLENBQUM7RUFFRCxJQUFBSSxXQUFBLEdBQThCeFosK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQXlaLFdBQUEsR0FBQW5QLGNBQUEsQ0FBQWtQLFdBQUE7SUFBdENFLE9BQU8sR0FBQUQsV0FBQTtJQUFFRSxVQUFVLEdBQUFGLFdBQUE7RUFDMUIsSUFBQUcsV0FBQSxHQUFnRDVaLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE2WixXQUFBLEdBQUF2UCxjQUFBLENBQUFzUCxXQUFBO0lBQXhERSxnQkFBZ0IsR0FBQUQsV0FBQTtJQUFFRSxtQkFBbUIsR0FBQUYsV0FBQTtFQUM1QyxJQUFBRyxXQUFBLEdBQWtGaGEsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWlhLFdBQUEsR0FBQTNQLGNBQUEsQ0FBQTBQLFdBQUE7SUFBMUZFLGlDQUFpQyxHQUFBRCxXQUFBO0lBQUVFLG9DQUFvQyxHQUFBRixXQUFBO0VBQzlFLElBQUFHLFdBQUEsR0FBNENwYSwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBcWEsV0FBQSxHQUFBL1AsY0FBQSxDQUFBOFAsV0FBQTtJQUFwREUsY0FBYyxHQUFBRCxXQUFBO0lBQUVFLGlCQUFpQixHQUFBRixXQUFBO0VBRXhDLElBQU1HLFVBQVUsR0FBR0EsQ0FBQSxLQUFNO0lBQ3ZCYixVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2hCYyxVQUFVLENBQUMsTUFBTTtNQUNmZCxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDUCxJQUFJcE4sZ0JBQWdCLEdBQUcsQ0FBQyxFQUFFO01BQ3hCNE4sb0NBQW9DLENBQUMsSUFBSSxDQUFDO0lBQzVDLENBQUMsTUFBTTtNQUNMSixtQkFBbUIsQ0FBQyxJQUFJLENBQUM7SUFDM0I7RUFDRixDQUFDO0VBQ0QsSUFBTVcsV0FBVyxHQUFHQSxDQUFBLEtBQU07SUFDeEJILGlCQUFpQixDQUFDLElBQUksQ0FBQztJQUN2QlosVUFBVSxDQUFDLElBQUksQ0FBQztJQUNoQmMsVUFBVSxDQUFDLE1BQU07TUFDZmQsVUFBVSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDLEVBQUUsR0FBRyxDQUFDO0VBQ1QsQ0FBQztFQUVELElBQU1nQixXQUFXLEdBQUdBLENBQUEsS0FBTTtJQUN4QlosbUJBQW1CLENBQUMsS0FBSyxDQUFDO0lBQzFCYSxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDLENBQUM7RUFDMUIsQ0FBQztFQUNELElBQU1DLGdCQUFnQixHQUFHQSxDQUFBLEtBQU07SUFDN0JSLGlCQUFpQixDQUFDLEtBQUssQ0FBQztFQUMxQixDQUFDO0VBQ0QsSUFBTVMsY0FBYyxHQUFJdFMsUUFBUSxJQUFLO0lBQ25DO0lBQ0EsSUFBSUEsUUFBUSxLQUFLLFVBQVUsRUFBRTtNQUMzQmtTLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDLE1BQU0sSUFBSXhTLFFBQVEsS0FBSyxNQUFNLEVBQUU7TUFDOUJpUyxXQUFXLENBQUMsQ0FBQztJQUNmO0VBQ0YsQ0FBQztFQUNELElBQUFRLFdBQUEsR0FBMEJuYiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBb2IsV0FBQSxHQUFBOVEsY0FBQSxDQUFBNlEsV0FBQTtJQUEvQkUsS0FBSyxHQUFBRCxXQUFBO0lBQUVFLFFBQVEsR0FBQUYsV0FBQTtFQUN0QixJQUFNRyx3QkFBd0I7SUFBQSxJQUFBQyxNQUFBLEdBQUF0UyxpQkFBQSxDQUFHLFdBQU91UyxhQUFhLEVBQUVDLG1CQUFtQixFQUFLO01BQzdFLElBQU1wUyxJQUFJLEdBQUc7UUFDWHFTLE1BQU0sRUFBRUYsYUFBYTtRQUNyQkcsTUFBTSxFQUFFaFQsSUFBSSxDQUFDVSxJQUFJLENBQUNJLFFBQVEsR0FBRyxXQUFXO1FBQ3hDbVMsTUFBTSxFQUFFLElBQUksR0FBR0gsbUJBQW1CLEdBQUcsT0FBTyxHQUFHN0wsWUFBWSxDQUFDQSxZQUFZO1FBQ3hFaU0sZ0JBQWdCLEVBQUUsSUFBSTFSLElBQUksQ0FBQztNQUM3QixDQUFDO01BQ0QsSUFBSTtRQUNGLE1BQU1qSSw4Q0FBSyxDQUFDNFosSUFBSSxJQUFBNVcsTUFBQSxDQUFJL0MscURBQVksMkJBQXdCa0gsSUFBSSxDQUFDO01BQy9ELENBQUMsQ0FBQyxPQUFPSyxLQUFLLEVBQUU7UUFDZEMsT0FBTyxDQUFDb1MsR0FBRyxDQUFDclMsS0FBSyxDQUFDO01BQ3BCO0lBQ0YsQ0FBQztJQUFBLGdCQVpLNFIsd0JBQXdCQSxDQUFBVSxHQUFBLEVBQUFDLEdBQUE7TUFBQSxPQUFBVixNQUFBLENBQUEzUixLQUFBLE9BQUFDLFNBQUE7SUFBQTtFQUFBLEdBWTdCO0VBQ0QsSUFBTXFTLFlBQVk7SUFBQSxJQUFBQyxNQUFBLEdBQUFsVCxpQkFBQSxDQUFHLFdBQU8rSixDQUFDLEVBQUs7TUFDaENBLENBQUMsQ0FBQ3FHLGNBQWMsQ0FBQyxDQUFDO01BQ2xCLElBQUl2RixNQUFNLEdBQUcsRUFBRTtNQUNmLElBQUl4SCxnQkFBZ0IsR0FBRyxDQUFDLEVBQUU7UUFDeEJ3SCxNQUFNLEdBQUcsT0FBTztNQUNsQixDQUFDLE1BQU0sSUFBSXhILGdCQUFnQixLQUFLLENBQUMsRUFBRTtRQUNqQ3dILE1BQU0sR0FBRyxNQUFNO01BQ2pCO01BQ0EsSUFBTXpLLElBQUksR0FBRztRQUNYdUcsWUFBWTtRQUFFUixhQUFhO1FBQUU5RSxXQUFXO1FBQUVzRCxXQUFXO1FBQUVsRCxTQUFTO1FBQUVJLG1CQUFtQjtRQUNyRlksUUFBUTtRQUFFOEIsaUJBQWlCO1FBQUV5RCxnQkFBZ0I7UUFBRS9GLEtBQUs7UUFBRUksS0FBSztRQUFFNkYsV0FBVztRQUFFckYsTUFBTTtRQUNoRnNDLFFBQVE7UUFBRTBGLE1BQU07UUFBRXRGLEtBQUs7UUFBRWxDLGdCQUFnQjtRQUFFSixVQUFVO1FBQUU4QyxZQUFZO1FBQUVKLFFBQVE7UUFDN0VaLElBQUk7UUFBRWhCLGNBQWM7UUFBRUksZUFBZTtRQUFFSCxhQUFhO1FBQUVILGFBQWE7UUFBRUosUUFBUTtRQUFFVztNQUNqRixDQUFDO01BQ0QsSUFBSTtRQUNGLElBQU1uRSxHQUFHLFNBQVNoSCw4Q0FBSyxDQUFDNFosSUFBSSxDQUFDOVIsTUFBTSxFQUFFWCxJQUFJLENBQUM7UUFDMUMsSUFBSUgsR0FBRyxFQUFFO1VBQ1A7VUFDQSxJQUFNc1MsYUFBYSxHQUFHdFMsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ3dJLEdBQUc7VUFDdkMsSUFBTTRKLG1CQUFtQixHQUFHdlMsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQytGLGFBQWE7VUFDdkRrTSx3QkFBd0IsQ0FBQ0UsYUFBYSxFQUFFQyxtQkFBbUIsQ0FBQztVQUM1RGxCLFVBQVUsQ0FBQyxDQUFDO1VBQ1pjLFFBQVEsQ0FBQ25TLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUN3SSxHQUFHLENBQUM7UUFDN0IsQ0FBQyxNQUFNO1VBQ0x1SyxLQUFLLENBQUMsbUJBQW1CLENBQUM7UUFDNUI7TUFDRixDQUFDLENBQUMsT0FBTzFTLEtBQUssRUFBRTtRQUNkLElBQUlBLEtBQUssRUFBRTtVQUNUK1EsV0FBVyxDQUFDLENBQUM7UUFDZjtNQUNGO0lBQ0YsQ0FBQztJQUFBLGdCQS9CS3lCLFlBQVlBLENBQUFHLEdBQUE7TUFBQSxPQUFBRixNQUFBLENBQUF2UyxLQUFBLE9BQUFDLFNBQUE7SUFBQTtFQUFBLEdBK0JqQjtFQUNELElBQUF5UyxnQkFBQSxHQUE4QnpjLHFEQUFjLENBQUMsSUFBSSxDQUFDO0lBQUEwYyxnQkFBQSxHQUFBbFMsY0FBQSxDQUFBaVMsZ0JBQUE7SUFBM0NFLE9BQU8sR0FBQUQsZ0JBQUE7SUFBRUUsVUFBVSxHQUFBRixnQkFBQTtFQUMxQixJQUFNRyxZQUFZLEdBQUdBLENBQUEsS0FBTTtJQUN6QkQsVUFBVSxDQUFDLENBQUNELE9BQU8sQ0FBQztFQUN0QixDQUFDO0VBQ0Qsb0JBQ0UzYywwREFBQTtJQUFLMkUsU0FBUyxFQUFDO0VBQWMsZ0JBQzNCM0UsMERBQUEsQ0FBQ2lCLHFEQUFHO0lBQUM2YixFQUFFLEVBQUU7TUFBRUMsT0FBTyxFQUFFO0lBQU87RUFBRSxnQkFDM0IvYywwREFBQSxDQUFDNkIsa0VBQVcsTUFBRSxDQUFDLGVBQ2Y3QiwwREFBQSxDQUFDZ0gsTUFBTTtJQUFDWCxRQUFRLEVBQUMsVUFBVTtJQUFDZSxJQUFJLEVBQUV1VixPQUFRO0lBQUNHLEVBQUUsRUFBRTtNQUFFdlgsZUFBZSxFQUFFO0lBQVU7RUFBRSxnQkFDNUV2RiwwREFBQSxDQUFDNEIsOERBQU87SUFDTmtiLEVBQUUsRUFBRTtNQUNGRSxFQUFFLEVBQUUsTUFBTSxDQUFFO0lBQ2Q7RUFBRSxnQkFFRmhkLDBEQUFBLENBQUNTLHFEQUFVO0lBQ1R3YyxJQUFJLEVBQUMsT0FBTztJQUNaelgsS0FBSyxFQUFDLFNBQVM7SUFDZixjQUFXLGFBQWE7SUFDeEIwWCxPQUFPLEVBQUVMLFlBQWE7SUFDdEJDLEVBQUUsRUFBQXpWLGFBQUE7TUFDQThWLFdBQVcsRUFBRTtJQUFNLEdBQ2ZSLE9BQU8sSUFBSTtNQUFFSSxPQUFPLEVBQUU7SUFBTyxDQUFDO0VBQ2xDLGdCQUVGL2MsMERBQUEsQ0FBQ2tDLGlFQUFRLE1BQUUsQ0FDRCxDQUFDLGVBQ2JsQywwREFBQSxDQUFDZSxxREFBVTtJQUNUcWMsU0FBUyxFQUFDLElBQUk7SUFDZEMsT0FBTyxFQUFDLElBQUk7SUFDWjdYLEtBQUssRUFBQyxTQUFTO0lBQ2Y4WCxNQUFNO0lBQ05SLEVBQUUsRUFBRTtNQUFFUyxRQUFRLEVBQUU7SUFBRTtFQUFFLEdBQ3JCLHFCQUVXLENBQUMsZUFDYnZkLDBEQUFBLENBQUNTLHFEQUFVO0lBQUN5YyxPQUFPLEVBQUUzRDtFQUFlLGdCQUNsQ3ZaLDBEQUFBLENBQUNvRCxzRUFBUztJQUFDZ0QsS0FBSyxFQUFFO01BQUVaLEtBQUssRUFBRTtJQUFRO0VBQUUsQ0FBRSxDQUM3QixDQUFDLGVBQ2J4RiwwREFBQSxDQUFDd0UsOERBQW9CLE1BQUUsQ0FBQyxlQUN4QnhFLDBEQUFBLENBQUN1RSwwREFBZ0I7SUFBQzRRLElBQUksRUFBRXJNLElBQUksQ0FBQ1UsSUFBSSxDQUFDSSxRQUFTO0lBQUNELElBQUksRUFBRWIsSUFBSSxDQUFDVSxJQUFJLENBQUNHO0VBQUssQ0FBRSxDQUFDLGVBQ3BFM0osMERBQUEsQ0FBQ2UscURBQVU7SUFBQytiLEVBQUUsRUFBRTtNQUFFL1UsVUFBVSxFQUFFLE1BQU07TUFBRW9WLFdBQVcsRUFBRTtJQUFPO0VBQUUsR0FBRXJVLElBQUksQ0FBQ1UsSUFBSSxDQUFDSSxRQUFxQixDQUFDLGVBQzlGNUosMERBQUEsQ0FBQ1MscURBQVU7SUFBQytFLEtBQUssRUFBQyxTQUFTO0lBQUMwWCxPQUFPLEVBQUVqVDtFQUFhLGdCQUNoRGpLLDBEQUFBLENBQUM2RCxtRUFBTTtJQUFDdUMsS0FBSyxFQUFFO01BQUVaLEtBQUssRUFBRTtJQUFRO0VBQUUsQ0FBRSxDQUMxQixDQUNMLENBQ0gsQ0FBQyxlQUNUeEYsMERBQUEsQ0FBQ2lJLE1BQU07SUFBQ29WLE9BQU8sRUFBQyxXQUFXO0lBQUNqVyxJQUFJLEVBQUV1VixPQUFRO0lBQUNhLFlBQVksRUFBRUEsQ0FBQSxLQUFNWixVQUFVLENBQUMsSUFBSSxDQUFFO0lBQUNhLFlBQVksRUFBRUEsQ0FBQSxLQUFNYixVQUFVLENBQUMsS0FBSztFQUFFLGdCQUNySDVjLDBEQUFBLENBQUM0Qiw4REFBTztJQUNOa2IsRUFBRSxFQUFFO01BQ0ZDLE9BQU8sRUFBRSxNQUFNO01BQ2ZXLFVBQVUsRUFBRSxRQUFRO01BQ3BCQyxjQUFjLEVBQUUsVUFBVTtNQUMxQi9XLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUjtFQUFFLGdCQUVGNUcsMERBQUEsQ0FBQ1MscURBQVU7SUFBQ3ljLE9BQU8sRUFBRUw7RUFBYSxnQkFDaEM3YywwREFBQSxDQUFDbUMsd0VBQWUsTUFBRSxDQUNSLENBQ0wsQ0FBQyxlQUNWbkMsMERBQUEsQ0FBQ3dCLHFEQUFPLE1BQUUsQ0FBQyxlQUNYeEIsMERBQUEsQ0FBQytCLDJEQUFJO0lBQUMrYSxFQUFFLEVBQUU7TUFBRWMsTUFBTSxFQUFFO0lBQVE7RUFBRSxnQkFDNUI1ZCwwREFBQSxDQUFDRywrREFBWSxNQUFFLENBQ1gsQ0FDQSxDQUFDLGVBQ1RILDBEQUFBLENBQUNpQixxREFBRztJQUNGbWMsU0FBUyxFQUFDLE1BQU07SUFDaEJOLEVBQUUsRUFBRTtNQUNGdlgsZUFBZSxFQUFHSCxLQUFLLElBQ3JCQSxLQUFLLENBQUN5WSxPQUFPLENBQUNDLElBQUksS0FBSyxPQUFPLEdBQzFCMVksS0FBSyxDQUFDeVksT0FBTyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQ3ZCM1ksS0FBSyxDQUFDeVksT0FBTyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDO01BQzdCUixRQUFRLEVBQUUsQ0FBQztNQUNYOVcsS0FBSyxFQUFFLE1BQU07TUFDYm1YLE1BQU0sRUFBRSxPQUFPO01BQ2ZJLFFBQVEsRUFBRTtJQUNaO0VBQUUsZ0JBRUZoZSwwREFBQSxDQUFDNEIsOERBQU8sTUFBRSxDQUFDLGVBQ1g1QiwwREFBQSxDQUFDaUMsZ0VBQVM7SUFBQ2djLFFBQVEsRUFBQyxNQUFNO0lBQUNuQixFQUFFLEVBQUU7TUFBRW9CLEVBQUUsRUFBRTtJQUFFO0VBQUUsZ0JBQ3ZDbGUsMERBQUEsMkJBQ0VBLDBEQUFBO0lBQU1tZSxRQUFRLEVBQUU5QjtFQUFhLGdCQUMzQnJjLDBEQUFBO0lBQUtvRyxLQUFLLEVBQUU7TUFBRTJXLE9BQU8sRUFBRSxPQUFPO01BQUUxVyxRQUFRLEVBQUUsT0FBTztNQUFFaUIsTUFBTSxFQUFFLENBQUM7TUFBRThXLEtBQUssRUFBRSxPQUFPO01BQUVDLEtBQUssRUFBRSxNQUFNO01BQUUvWCxHQUFHLEVBQUU7SUFBUTtFQUFFLGdCQUMxR3RHLDBEQUFBLCtCQUNFQSwwREFBQSxDQUFDNEYsWUFBWTtJQUFDMFksS0FBSyxFQUFDLEtBQUs7SUFBQ0MsU0FBUyxFQUFDO0VBQUssZ0JBQ3ZDdmUsMERBQUEsQ0FBQ1MscURBQVU7SUFBQ3ljLE9BQU8sRUFBRTFIO0VBQVEsZ0JBQzNCeFYsMERBQUEsQ0FBQ3VDLDREQUFHO0lBQUNvQyxTQUFTLEVBQUMsTUFBTTtJQUFDeUIsS0FBSyxFQUFFO01BQUVULFFBQVEsRUFBRTtJQUFPO0VBQUUsQ0FBRSxDQUMxQyxDQUNBLENBQ1AsQ0FBQyxlQUNWM0YsMERBQUEsK0JBQ0VBLDBEQUFBLENBQUM0RixZQUFZO0lBQUMwWSxLQUFLLEVBQUMsS0FBSztJQUFDQyxTQUFTLEVBQUM7RUFBUSxnQkFDMUN2ZSwwREFBQSxDQUFDUyxxREFBVTtJQUFDeWMsT0FBTyxFQUFFN0c7RUFBYSxnQkFDaENyVywwREFBQSxDQUFDdUMsNERBQUc7SUFBQ29DLFNBQVMsRUFBQyxNQUFNO0lBQUN5QixLQUFLLEVBQUU7TUFBRWIsZUFBZSxFQUFFLE1BQU07TUFBRUksUUFBUSxFQUFFO0lBQU87RUFBRSxDQUFFLENBQ25FLENBQ0EsQ0FDUCxDQUNOLENBQUMsZUFDTjNGLDBEQUFBLENBQUNRLHFEQUFJO0lBQUNnZSxTQUFTO0lBQUNwWSxLQUFLLEVBQUU7TUFBRXNYLFVBQVUsRUFBRSxRQUFRO01BQUVlLE9BQU8sRUFBRTtJQUFPLENBQUU7SUFBQ25XLE9BQU8sRUFBRSxDQUFFO0lBQUM4VSxTQUFTLEVBQUUxYyxzREFBS0E7RUFBQyxnQkFDN0ZWLDBEQUFBLENBQUNRLHFEQUFJO0lBQUNrZSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNoQjNlLDBEQUFBO0lBQUdvRyxLQUFLLEVBQUU7TUFBRXdZLFNBQVMsRUFBRTtJQUFTO0VBQUUsR0FBQyxlQUFnQixDQUMvQyxDQUFDLGVBQ1A1ZSwwREFBQSxDQUFDUSxxREFBSTtJQUFDa2UsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxHQUViNU8sWUFBWSxDQUFDQSxZQUFZLEtBQUssRUFBRSxnQkFFNUIvUCwwREFBQTtJQUFLb0csS0FBSyxFQUFFO01BQUUyVyxPQUFPLEVBQUUsTUFBTTtNQUFFVyxVQUFVLEVBQUUsUUFBUTtNQUFFQyxjQUFjLEVBQUU7SUFBZ0I7RUFBRSxnQkFDckYzZCwwREFBQSxDQUFDVyxzREFBUztJQUNSa2UsUUFBUTtJQUNSMUosSUFBSSxFQUFDLGVBQWU7SUFDcEJDLEtBQUssRUFBRXJGLFlBQVksQ0FBQ0EsWUFBWSxLQUFLK08sU0FBUyxHQUFHL08sWUFBWSxDQUFDQSxZQUFZLEdBQUcsRUFBRztJQUNoRitNLEVBQUUsRUFBRTtNQUFFclcsS0FBSyxFQUFFO0lBQU87RUFBRSxDQUN2QixDQUFDLGVBQ0Z6RywwREFBQSxDQUFDNEYsWUFBWTtJQUFDMFksS0FBSyxFQUFDLE9BQU87SUFBQ0MsU0FBUyxFQUFDO0VBQUssZ0JBQ3pDdmUsMERBQUEsQ0FBQ1MscURBQVU7SUFBQ3ljLE9BQU8sRUFBRTNLLG1CQUFvQjtJQUFDbk0sS0FBSyxFQUFFO01BQUVDLFFBQVEsRUFBRSxVQUFVO01BQUUrWCxLQUFLLEVBQUU7SUFBUTtFQUFFLGdCQUN4RnBlLDBEQUFBLENBQUMyQyw0REFBbUI7SUFBQ3lELEtBQUssRUFBRTtNQUFFWixLQUFLLEVBQUU7SUFBVTtFQUFFLENBQUUsQ0FDekMsQ0FDQSxDQUNYLENBQUMsZ0JBR054RiwwREFBQSxDQUFDa0Isc0RBQVk7SUFDWDZkLE9BQU8sRUFBRXBQLFFBQVM7SUFDbEJxUCxjQUFjLEVBQUdqTixNQUFNLElBQUtBLE1BQU0sQ0FBQ0UsUUFBUztJQUM1Q2dOLFFBQVEsRUFBRUEsQ0FBQzlMLENBQUMsRUFBRXZCLFFBQVEsS0FBSztNQUN6QkQsb0JBQW9CLENBQUNDLFFBQVEsQ0FBQztJQUNoQyxDQUFFO0lBQ0ZzTixjQUFjLEVBQUVDLE1BQUE7TUFBQSxJQUFHQyxRQUFRLEdBQUFELE1BQUEsQ0FBUkMsUUFBUTtRQUFLQyxLQUFLLEdBQUF4YSx3QkFBQSxDQUFBc2EsTUFBQSxFQUFBRyxVQUFBO01BQUEsb0JBRW5DdGYsMERBQUEsQ0FBQ2lCLHFEQUFHLEVBQUErRCxRQUFBLEtBQUtxYSxLQUFLO1FBQUV2QyxFQUFFLEVBQUU7VUFBRXZYLGVBQWUsRUFBRSxPQUFPO1VBQUVnQixJQUFJLEVBQUUsR0FBRztVQUFFZ1osU0FBUyxFQUFFO1FBQU87TUFBRSxJQUM1RUgsUUFBUSxlQUNUcGYsMERBQUEsMkJBQ0VBLDBEQUFBO1FBQVFrZCxPQUFPLEVBQUcvSixDQUFDLElBQUtELDJCQUEyQixDQUFDQyxDQUFDLENBQUU7UUFBQzBMLFFBQVEsRUFBRS9WLElBQUksQ0FBQ1UsSUFBSSxDQUFDRyxJQUFJLEtBQUssTUFBTztRQUFDNlYsV0FBVyxFQUFHck0sQ0FBQyxJQUFLQSxDQUFDLENBQUNxRyxjQUFjLENBQUMsQ0FBRTtRQUFDN1UsU0FBUyxFQUFDLGNBQWM7UUFBQ3lCLEtBQUssRUFBRTtVQUFFSyxLQUFLLEVBQUU7UUFBTztNQUFFLEdBQUMsa0JBRWhMLENBQ0wsQ0FDRixDQUFDO0lBQUEsQ0FDTjtJQUNGZ1osV0FBVyxFQUFHQyxNQUFNLGlCQUFLMWYsMERBQUEsQ0FBQ1csc0RBQVMsRUFBQXFFLFFBQUEsS0FBSzBhLE1BQU07TUFBRUMsS0FBSyxFQUFDLGVBQWU7TUFBQ0MsUUFBUTtJQUFBLEVBQUU7RUFBRSxDQUNuRixDQUdILENBQUMsZUFDUDVmLDBEQUFBLENBQUNRLHFEQUFJO0lBQUNrZSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUVmM2UsMERBQUEsQ0FBQ1ksc0RBQVc7SUFBQ2tjLEVBQUUsRUFBRTtNQUFFclcsS0FBSyxFQUFFLE1BQU07TUFBRWxCLGVBQWUsRUFBRTtJQUFRO0VBQUUsZ0JBQzNEdkYsMERBQUEsQ0FBQ2Esc0RBQVU7SUFBQ2dmLE9BQU8sRUFBQztFQUFlLEdBQUMsc0JBQWdDLENBQUMsZUFDckU3ZiwwREFBQSxDQUFDc0Isc0RBQWE7SUFDWndlLElBQUksRUFBQyxRQUFRO0lBQ2JuWCxFQUFFLEVBQUMsZUFBZTtJQUNsQndNLElBQUksRUFBQyxlQUFlO0lBQ3BCd0ssS0FBSyxFQUFDLHNCQUFzQjtJQUM1QnZLLEtBQUssRUFBRTdGLGFBQWM7SUFDckIwUCxRQUFRLEVBQUc5TCxDQUFDLElBQUszRCxnQkFBZ0IsQ0FBQzJELENBQUMsQ0FBQytCLE1BQU0sQ0FBQ0UsS0FBSyxDQUFFO0lBQ2xEMkssY0FBYyxlQUFFL2YsMERBQUEsQ0FBQ3VCLHNEQUFjO01BQUM4RSxRQUFRLEVBQUM7SUFBTyxHQUFDLEdBQWlCO0VBQUUsQ0FDckUsQ0FDVSxDQUNULENBQUMsZUFDUHJHLDBEQUFBLENBQUNRLHFEQUFJO0lBQUNrZSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUNmM2UsMERBQUEsQ0FBQ2lELDJGQUFvQjtJQUFDK2MsV0FBVyxFQUFFOWMsMkVBQVlBO0VBQUMsZ0JBQzlDbEQsMERBQUEsQ0FBQ2dELDhFQUFhO0lBQUNpZCxVQUFVLEVBQUUsQ0FBQyxZQUFZO0VBQUUsZ0JBQ3hDamdCLDBEQUFBLENBQUNtRCx1RUFBVTtJQUNUeWMsUUFBUTtJQUNSekssSUFBSSxFQUFDLGFBQWE7SUFDbEJ3SyxLQUFLLEVBQUMsY0FBYztJQUNwQnZLLEtBQUssRUFBRXRSLDZDQUFLLENBQUMyRyxXQUFXLENBQUU7SUFDMUJ3VSxRQUFRLEVBQUc1VSxJQUFJLElBQUtLLGNBQWMsQ0FBQ0wsSUFBSSxDQUFFO0lBQ3pDeVMsRUFBRSxFQUFFO01BQUVyVyxLQUFLLEVBQUUsTUFBTTtNQUFFbEIsZUFBZSxFQUFFO0lBQVEsQ0FBRTtJQUNoRG1OLE1BQU0sRUFBQztFQUFZLENBQ3BCLENBQ1ksQ0FDSyxDQUNsQixDQUFDLGVBQ1AxUywwREFBQSxDQUFDUSxxREFBSTtJQUFDa2UsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZjNlLDBEQUFBLENBQUNpRCwyRkFBb0I7SUFBQytjLFdBQVcsRUFBRTljLDJFQUFZQTtFQUFDLGdCQUM5Q2xELDBEQUFBLENBQUNnRCw4RUFBYTtJQUFDaWQsVUFBVSxFQUFFLENBQUMsWUFBWTtFQUFFLGdCQUN4Q2pnQiwwREFBQSxDQUFDbUQsdUVBQVU7SUFDVHljLFFBQVE7SUFDUnpLLElBQUksRUFBQyxXQUFXO0lBQ2hCd0ssS0FBSyxFQUFDLFlBQVk7SUFDbEJ2SyxLQUFLLEVBQUV0Uiw2Q0FBSyxDQUFDK0csU0FBUyxDQUFFO0lBQ3hCb1UsUUFBUSxFQUFHNVUsSUFBSSxJQUFLUyxZQUFZLENBQUNULElBQUksQ0FBRTtJQUN2Q3lTLEVBQUUsRUFBRTtNQUFFclcsS0FBSyxFQUFFLE1BQU07TUFBRWxCLGVBQWUsRUFBRTtJQUFRLENBQUU7SUFDaERtTixNQUFNLEVBQUM7RUFBWSxDQUNwQixDQUNZLENBQ0ssQ0FDbEIsQ0FBQyxlQUNQMVMsMERBQUEsQ0FBQ1EscURBQUk7SUFBQ2tlLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCM2UsMERBQUE7SUFBR29HLEtBQUssRUFBRTtNQUFFd1ksU0FBUyxFQUFFO0lBQVM7RUFBRSxHQUFDLGdCQUFpQixDQUNoRCxDQUFDLGVBQ1A1ZSwwREFBQSxDQUFDUSxxREFBSTtJQUFDa2UsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRyxnQkFDaEIzZSwwREFBQSxDQUFDVyxzREFBUztJQUNSZ0ksRUFBRSxFQUFDLGlCQUFpQjtJQUNwQndNLElBQUksRUFBQyxpQkFBaUI7SUFDdEJ3SyxLQUFLLEVBQUMsa0JBQWtCO0lBQ3hCdkssS0FBSyxFQUFFbkssbUJBQW9CO0lBQzNCZ1UsUUFBUSxFQUFHOUwsQ0FBQyxJQUFLakksc0JBQXNCLENBQUNpSSxDQUFDLENBQUMrQixNQUFNLENBQUNFLEtBQUssQ0FBRTtJQUN4RDBILEVBQUUsRUFBRTtNQUFFclcsS0FBSyxFQUFFLE1BQU07TUFBRWxCLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDakQsQ0FDRyxDQUFDLGVBQ1B2RiwwREFBQSxDQUFDUSxxREFBSTtJQUFDa2UsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZjNlLDBEQUFBLENBQUNXLHNEQUFTO0lBQ1JnSSxFQUFFLEVBQUMsT0FBTztJQUNWd00sSUFBSSxFQUFDLE9BQU87SUFDWndLLEtBQUssRUFBQyxPQUFPO0lBQ2J2SyxLQUFLLEVBQUUvSixLQUFNO0lBQ2I0VCxRQUFRLEVBQUc5TCxDQUFDLElBQUs3SCxRQUFRLENBQUM2SCxDQUFDLENBQUMrQixNQUFNLENBQUNFLEtBQUssQ0FBRTtJQUMxQzBILEVBQUUsRUFBRTtNQUFFclcsS0FBSyxFQUFFLE1BQU07TUFBRWxCLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDakQsQ0FDRyxDQUFDLGVBQ1B2RiwwREFBQSxDQUFDUSxxREFBSTtJQUFDa2UsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZjNlLDBEQUFBLENBQUNXLHNEQUFTO0lBQ1JnSSxFQUFFLEVBQUMsT0FBTztJQUNWd00sSUFBSSxFQUFDLE9BQU87SUFDWndLLEtBQUssRUFBQyxPQUFPO0lBQ2J2SyxLQUFLLEVBQUUzSixLQUFNO0lBQ2J3VCxRQUFRLEVBQUc5TCxDQUFDLElBQUt6SCxRQUFRLENBQUN5SCxDQUFDLENBQUMrQixNQUFNLENBQUNFLEtBQUssQ0FBRTtJQUMxQzBILEVBQUUsRUFBRTtNQUFFclcsS0FBSyxFQUFFLE1BQU07TUFBRWxCLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDakQsQ0FDRyxDQUFDLGVBQ1B2RiwwREFBQSxDQUFDUSxxREFBSTtJQUFDa2UsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZjNlLDBEQUFBLENBQUNXLHNEQUFTO0lBQ1JnSSxFQUFFLEVBQUMsVUFBVTtJQUNid00sSUFBSSxFQUFDLFVBQVU7SUFDZndLLEtBQUssRUFBQyxXQUFXO0lBQ2pCdkssS0FBSyxFQUFFN0csUUFBUztJQUNoQjBRLFFBQVEsRUFBRzlMLENBQUMsSUFBSzNFLFdBQVcsQ0FBQzJFLENBQUMsQ0FBQytCLE1BQU0sQ0FBQ0UsS0FBSyxDQUFFO0lBQzdDMEgsRUFBRSxFQUFFO01BQUVyVyxLQUFLLEVBQUUsTUFBTTtNQUFFbEIsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNqRCxDQUNHLENBQUMsZUFFUHZGLDBEQUFBLENBQUNRLHFEQUFJO0lBQUNrZSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUNmM2UsMERBQUEsQ0FBQ1csc0RBQVM7SUFDUmdJLEVBQUUsRUFBQyxtQkFBbUI7SUFDdEJ3TSxJQUFJLEVBQUMsbUJBQW1CO0lBQ3hCd0ssS0FBSyxFQUFDLG9CQUFvQjtJQUMxQnZLLEtBQUssRUFBRXpILGlCQUFrQjtJQUN6QnNSLFFBQVEsRUFBRzlMLENBQUMsSUFBS3ZGLG9CQUFvQixDQUFDdUYsQ0FBQyxDQUFDK0IsTUFBTSxDQUFDRSxLQUFLLENBQUU7SUFDdEQwSCxFQUFFLEVBQUU7TUFBRXJXLEtBQUssRUFBRSxNQUFNO01BQUVsQixlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2pELENBQ0csQ0FBQyxlQUNQdkYsMERBQUEsQ0FBQ1EscURBQUk7SUFBQ2tlLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2YzZSwwREFBQSxDQUFDVyxzREFBUztJQUNSZ0ksRUFBRSxFQUFDLFVBQVU7SUFDYndNLElBQUksRUFBQyxVQUFVO0lBQ2Z3SyxLQUFLLEVBQUMsaUJBQWlCO0lBQ3ZCdkssS0FBSyxFQUFFdkosUUFBUztJQUNoQm9ULFFBQVEsRUFBRzlMLENBQUMsSUFBS3JILFdBQVcsQ0FBQ3FILENBQUMsQ0FBQytCLE1BQU0sQ0FBQ0UsS0FBSyxDQUFFO0lBQzdDMEgsRUFBRSxFQUFFO01BQUVyVyxLQUFLLEVBQUUsTUFBTTtNQUFFbEIsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNqRCxDQUNHLENBQUMsZUFDUHZGLDBEQUFBLENBQUNRLHFEQUFJO0lBQUNrZSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNoQjNlLDBEQUFBO0lBQUdvRyxLQUFLLEVBQUU7TUFBRXdZLFNBQVMsRUFBRTtJQUFTO0VBQUUsR0FBQyxtQkFBb0IsQ0FDbkQsQ0FBQyxlQUNQNWUsMERBQUEsQ0FBQ1EscURBQUk7SUFBQ2tlLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCM2UsMERBQUEsQ0FBQ2tCLHNEQUFZO0lBQ1hnZixnQkFBZ0I7SUFDaEJuQixPQUFPLEVBQUVqTCxjQUFlO0lBQ3hCa0wsY0FBYyxFQUFHak4sTUFBTSxJQUFLQSxNQUFNLENBQUN0SSxZQUFhO0lBQ2hEMFcsWUFBWSxFQUFFQSxDQUFDdmIsS0FBSyxFQUFFbU4sTUFBTSxrQkFBTS9SLDBEQUFBLENBQUNpQixxREFBRyxFQUFLMkQsS0FBSyxFQUFHbU4sTUFBTSxDQUFDdEksWUFBa0IsQ0FBRztJQUMvRWdXLFdBQVcsRUFBR0MsTUFBTSxpQkFBSzFmLDBEQUFBLENBQUNXLHNEQUFTLEVBQUFxRSxRQUFBLEtBQUswYSxNQUFNO01BQUVDLEtBQUssRUFBQyxZQUFZO01BQUNDLFFBQVE7SUFBQSxFQUFFLENBQUU7SUFDL0VYLFFBQVEsRUFBRUEsQ0FBQzlMLENBQUMsRUFBRXZCLFFBQVEsS0FBS3NDLG9CQUFvQixDQUFDdEMsUUFBUSxHQUFHQSxRQUFRLEdBQUcsRUFBRSxDQUFFO0lBQzFFa0wsRUFBRSxFQUFFO01BQUVyVyxLQUFLLEVBQUUsTUFBTTtNQUFFbEIsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNqRCxDQUNHLENBQUMsZUFDUHZGLDBEQUFBLENBQUNRLHFEQUFJO0lBQUNrZSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNoQjNlLDBEQUFBO0lBQUdvRyxLQUFLLEVBQUU7TUFBRXdZLFNBQVMsRUFBRTtJQUFTO0VBQUUsR0FBQyxjQUFlLENBQUMsZUFDbkQ1ZSwwREFBQSxDQUFDWSxzREFBVztJQUFDa2MsRUFBRSxFQUFFO01BQUVyVyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNqQ3pHLDBEQUFBLENBQUNhLHNEQUFVO0lBQUM4SCxFQUFFLEVBQUM7RUFBUSxHQUFDLFFBQWtCLENBQUMsZUFDM0MzSSwwREFBQSxDQUFDYyxzREFBTTtJQUNMOGUsUUFBUTtJQUNSalgsRUFBRSxFQUFDLFFBQVE7SUFDWHlNLEtBQUssRUFBRW5KLE1BQU87SUFDZGdULFFBQVEsRUFBRzlMLENBQUMsSUFBS2pILFNBQVMsQ0FBQ2lILENBQUMsQ0FBQytCLE1BQU0sQ0FBQ0UsS0FBSyxDQUFFO0lBQzNDRCxJQUFJLEVBQUMsUUFBUTtJQUNid0ssS0FBSyxFQUFDLFFBQVE7SUFDZFMsWUFBWSxFQUFDO0VBQVUsZ0JBRXZCcGdCLDBEQUFBLENBQUNPLHNEQUFRO0lBQUM2VSxLQUFLLEVBQUM7RUFBVSxHQUFDLFVBQWtCLENBQUMsZUFDOUNwViwwREFBQSxDQUFDTyxzREFBUTtJQUFDNlUsS0FBSyxFQUFDO0VBQVMsR0FBQyxTQUFpQixDQUNyQyxDQUNHLENBQ1QsQ0FBQyxlQUNQcFYsMERBQUEsQ0FBQ1EscURBQUk7SUFBQ2tlLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2YzZSwwREFBQSxDQUFDVyxzREFBUztJQUNSZ0ksRUFBRSxFQUFDLGFBQWE7SUFDaEJ3TSxJQUFJLEVBQUMsYUFBYTtJQUNsQndLLEtBQUssRUFBQyxjQUFjO0lBQ3BCVSxTQUFTO0lBQ1RDLElBQUksRUFBRSxDQUFFO0lBQ1JsTCxLQUFLLEVBQUVySCxXQUFZO0lBQ25Ca1IsUUFBUSxFQUFHOUwsQ0FBQyxJQUFLbkYsY0FBYyxDQUFDbUYsQ0FBQyxDQUFDK0IsTUFBTSxDQUFDRSxLQUFLLENBQUU7SUFDaEQwSCxFQUFFLEVBQUU7TUFBRXJXLEtBQUssRUFBRSxNQUFNO01BQUVsQixlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2pELENBQ0csQ0FBQyxlQUNQdkYsMERBQUEsQ0FBQ1EscURBQUk7SUFBQ2tlLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2YzZSwwREFBQSxDQUFDVyxzREFBUztJQUNSZ0ksRUFBRSxFQUFDLE1BQU07SUFDVHdNLElBQUksRUFBQyxNQUFNO0lBQ1h3SyxLQUFLLEVBQUMsTUFBTTtJQUNaVSxTQUFTO0lBQ1RDLElBQUksRUFBRSxDQUFFO0lBQ1JsTCxLQUFLLEVBQUVqSCxJQUFLO0lBQ1o4USxRQUFRLEVBQUc5TCxDQUFDLElBQUsvRSxPQUFPLENBQUMrRSxDQUFDLENBQUMrQixNQUFNLENBQUNFLEtBQUssQ0FBRTtJQUN6QzBILEVBQUUsRUFBRTtNQUFFclcsS0FBSyxFQUFFLE1BQU07TUFBRWxCLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDakQsQ0FDRyxDQUFDLGVBQ1B2RiwwREFBQSxDQUFDUSxxREFBSTtJQUFDa2UsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRyxnQkFDaEIzZSwwREFBQTtJQUFHb0csS0FBSyxFQUFFO01BQUV3WSxTQUFTLEVBQUU7SUFBUztFQUFFLEdBQUMsU0FBVSxDQUN6QyxDQUFDLGVBQ1A1ZSwwREFBQSxDQUFDUSxxREFBSTtJQUFDa2UsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRyxnQkFFaEIzZSwwREFBQSwyQkFDRUEsMERBQUEsQ0FBQ29FLGlFQUFlO0lBQUNtYyxTQUFTLEVBQUVoSztFQUFjLGdCQUN4Q3ZXLDBEQUFBO0lBQU8yRSxTQUFTLEVBQUMsYUFBYTtJQUFDeUIsS0FBSyxFQUFFO01BQUUyQixVQUFVLEVBQUU7SUFBUTtFQUFFLGdCQUM1RC9ILDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUEsYUFBSSxHQUFLLENBQUMsZUFDVkEsMERBQUEsYUFBSSxNQUFRLENBQUMsZUFDYkEsMERBQUEsYUFBSSxTQUFXLENBQUMsZUFDaEJBLDBEQUFBLGFBQUksVUFBWSxDQUFDLGVBQ2pCQSwwREFBQSxhQUFJLE1BQVEsQ0FBQyxlQUNiQSwwREFBQSxhQUFJLFVBQVksQ0FBQyxlQUNqQkEsMERBQUEsYUFBSSxRQUFVLENBQUMsZUFDZkEsMERBQUEsYUFBSSxRQUFVLENBQ1osQ0FDQyxDQUFDLGVBQ1JBLDBEQUFBLENBQUNzRSwyREFBUztJQUFDa2MsV0FBVyxFQUFDO0VBQVcsR0FDL0IsQ0FBQ0MsUUFBUSxFQUFFQyxRQUFRLGtCQUNsQjFnQiwwREFBQSxVQUFBZ0YsUUFBQTtJQUNFMkQsRUFBRSxFQUFDO0VBQVcsR0FDVjhYLFFBQVEsQ0FBQ0UsY0FBYztJQUMzQkMsR0FBRyxFQUFFSCxRQUFRLENBQUNJO0VBQVMsSUFFdEJsUyxLQUFLLENBQUMyQixHQUFHLENBQUMsQ0FBQzRHLElBQUksRUFBRWxDLENBQUMsa0JBQ2pCaFYsMERBQUEsQ0FBQ3FFLDJEQUFTO0lBQUN5YyxHQUFHLEVBQUU1SixJQUFJLENBQUM1QyxLQUFNO0lBQUN5TSxXQUFXLGNBQUExYixNQUFBLENBQWM2UixJQUFJLENBQUM1QyxLQUFLLENBQUc7SUFBQ3dDLEtBQUssRUFBRTlCO0VBQUUsR0FDekUsQ0FBQ3lMLFFBQVEsRUFBRUMsUUFBUSxrQkFDbEIxZ0IsMERBQUEsT0FBQWdGLFFBQUE7SUFDRTRiLEdBQUcsRUFBRUgsUUFBUSxDQUFDSTtFQUFTLEdBQ25CSixRQUFRLENBQUNPLGNBQWMsR0FHekI5SixJQUFJLENBQUNaLGNBQWMsS0FBS3dJLFNBQVMsZ0JBQy9COWUsMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBLE9BQVF5Z0IsUUFBUSxDQUFDUyxlQUFlLGVBQUdsaEIsMERBQUEsQ0FBQ3lDLDREQUFvQixNQUFFLENBQUssQ0FBQyxlQUNoRXpDLDBEQUFBO0lBQUltaEIsT0FBTyxFQUFFO0VBQUUsZ0JBQUNuaEIsMERBQUEsQ0FBQ1csc0RBQVM7SUFDeEJpZixRQUFRO0lBQ1J6SyxJQUFJLEVBQUMsZ0JBQWdCO0lBQUN4TSxFQUFFLEVBQUMsZ0JBQWdCO0lBQ3pDeU0sS0FBSyxFQUFFOEIsSUFBSSxDQUFDWixjQUFlO0lBQzNCMkksUUFBUSxFQUFHOUwsQ0FBQyxJQUFLNEIsWUFBWSxDQUFDNUIsQ0FBQyxFQUFFNkIsQ0FBQyxDQUFFO0lBQ3BDb00sSUFBSSxFQUFDLE9BQU87SUFDWnRFLEVBQUUsRUFBRTtNQUFFclcsS0FBSyxFQUFFLE1BQU07TUFBRWxCLGVBQWUsRUFBRSxPQUFPO01BQUVJLFFBQVEsRUFBRTtJQUFHO0VBQUUsQ0FDL0QsQ0FBSyxDQUFDLGVBQ1AzRiwwREFBQSwwQkFDRUEsMERBQUEsQ0FBQ3lFLFlBQVk7SUFBQzZaLEtBQUssRUFBQyxRQUFRO0lBQUN4QixFQUFFLEVBQUUsQ0FBQztFQUFFLGdCQUNsQzljLDBEQUFBLENBQUNTLHFEQUFVO0lBQUN5YyxPQUFPLEVBQUVBLENBQUEsS0FBTWpHLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDNUMsS0FBSztFQUFFLGdCQUNoRHRVLDBEQUFBLENBQUNNLGtFQUFVO0lBQUM4RixLQUFLLEVBQUU7TUFBRWliLE1BQU0sRUFBRSxTQUFTO01BQUU3YixLQUFLLEVBQUU7SUFBTTtFQUFFLENBQUUsQ0FDL0MsQ0FDQSxDQUNaLENBQUMsZUFDTHhGLDBEQUFBLFdBQVEsQ0FDUixDQUFDLGdCQUVIQSwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUEsT0FBUXlnQixRQUFRLENBQUNTLGVBQWUsZUFBR2xoQiwwREFBQSxDQUFDeUMsNERBQW9CLE1BQUUsQ0FBSyxDQUFDLGVBQ2hFekMsMERBQUE7SUFBSW9HLEtBQUssRUFBRTtNQUFFd1gsTUFBTSxFQUFFO0lBQVE7RUFBRSxHQUUzQjFHLElBQUksQ0FBQzNDLFFBQVEsQ0FBQ0EsUUFBUSxnQkFFbEJ2VSwwREFBQTtJQUFLb0csS0FBSyxFQUFFO01BQUUyVyxPQUFPLEVBQUUsTUFBTTtNQUFFWSxjQUFjLEVBQUUsZUFBZTtNQUFFRCxVQUFVLEVBQUU7SUFBUztFQUFFLGdCQUNyRjFkLDBEQUFBLDJCQUNFQSwwREFBQSxDQUFDZSxxREFBVTtJQUFDdWdCLE1BQU0sRUFBRXBLLElBQUksQ0FBQzNDLFFBQVEsR0FBRzJDLElBQUksQ0FBQzNDLFFBQVEsQ0FBQ0EsUUFBUSxLQUFLLE9BQU8sR0FBRyxFQUFHO0lBQUN1SSxFQUFFLEVBQUU7TUFBRW5YLFFBQVEsRUFBRTtJQUFPO0VBQUUsR0FBRXVSLElBQUksQ0FBQzNDLFFBQVEsR0FBRzJDLElBQUksQ0FBQzNDLFFBQVEsQ0FBQ0EsUUFBUSxHQUFHLEVBQWUsQ0FBQyxlQUNqS3ZVLDBEQUFBLENBQUNXLHNEQUFTO0lBQ1J3VSxJQUFJLEVBQUMsaUJBQWlCO0lBQUN4TSxFQUFFLEVBQUMsaUJBQWlCO0lBQzNDeU0sS0FBSyxFQUFFOEIsSUFBSSxDQUFDeEMsZUFBZ0I7SUFDNUIyTCxTQUFTO0lBQ1RDLElBQUksRUFBRSxDQUFFO0lBQ1JyQixRQUFRLEVBQUc5TCxDQUFDLElBQUs0QixZQUFZLENBQUM1QixDQUFDLEVBQUU2QixDQUFDLENBQUU7SUFDcENvTSxJQUFJLEVBQUMsT0FBTztJQUNadEUsRUFBRSxFQUFFO01BQUVyVyxLQUFLLEVBQUUsT0FBTztNQUFFbEIsZUFBZSxFQUFFLE9BQU87TUFBRUksUUFBUSxFQUFFO0lBQUc7RUFBRSxDQUNoRSxDQUNFLENBQUMsZUFDTjNGLDBEQUFBLDJCQUNFQSwwREFBQSxDQUFDNEYsWUFBWTtJQUFDMFksS0FBSyxFQUFDLE9BQU87SUFBQ0MsU0FBUyxFQUFDO0VBQUssZ0JBQ3pDdmUsMERBQUEsQ0FBQ1MscURBQVU7SUFBQ3ljLE9BQU8sRUFBRUEsQ0FBQSxLQUFNckYsc0JBQXNCLENBQUNYLElBQUksQ0FBQzVDLEtBQUssQ0FBRTtJQUFDbE8sS0FBSyxFQUFFO01BQUVDLFFBQVEsRUFBRSxVQUFVO01BQUUrWCxLQUFLLEVBQUU7SUFBUTtFQUFFLGdCQUM3R3BlLDBEQUFBLENBQUMyQyw0REFBbUI7SUFBQ3lELEtBQUssRUFBRTtNQUFFWixLQUFLLEVBQUU7SUFBVTtFQUFFLENBQUUsQ0FDekMsQ0FDQSxDQUFDLEVBRWIwUixJQUFJLENBQUMzQyxRQUFRLENBQUN2QyxHQUFHLGlCQUNmaFMsMERBQUEsQ0FBQzRGLFlBQVk7SUFBQzBZLEtBQUssRUFBQyxNQUFNO0lBQUNDLFNBQVMsRUFBQztFQUFRLGdCQUMzQ3ZlLDBEQUFBLENBQUNTLHFEQUFVO0lBQUN5YyxPQUFPLEVBQUVBLENBQUEsS0FBTXRFLG9CQUFvQixDQUFDMUIsSUFBSSxDQUFDM0MsUUFBUSxDQUFDdkMsR0FBRyxDQUFFO0lBQUM1TCxLQUFLLEVBQUU7TUFBRUMsUUFBUSxFQUFFLFVBQVU7TUFBRStYLEtBQUssRUFBRTtJQUFRO0VBQUUsZ0JBQ2xIcGUsMERBQUEsQ0FBQzBDLDREQUFJO0lBQUMwRCxLQUFLLEVBQUU7TUFBRVosS0FBSyxFQUFFO0lBQVU7RUFBRSxDQUFFLENBQzFCLENBQ0EsQ0FJZixDQUNGLENBQUMsZ0JBRVJ4RiwwREFBQTtJQUFLb0csS0FBSyxFQUFFO01BQUUyVyxPQUFPLEVBQUUsTUFBTTtNQUFFVyxVQUFVLEVBQUU7SUFBUztFQUFFLGdCQUNwRDFkLDBEQUFBLENBQUNrQixzREFBWTtJQUNYZ2YsZ0JBQWdCO0lBQ2hCbkIsT0FBTyxFQUFFNUgscUJBQXNCO0lBQy9CNkgsY0FBYyxFQUFHak4sTUFBTSxJQUFLQSxNQUFNLENBQUN3QyxRQUFRLEdBQUcsR0FBRyxHQUFHeEMsTUFBTSxDQUFDd1AsU0FBVTtJQUNyRXBCLFlBQVksRUFBRUEsQ0FBQ3ZiLEtBQUssRUFBRW1OLE1BQU0sa0JBQU0vUiwwREFBQSxDQUFDaUIscURBQUcsRUFBQStELFFBQUEsS0FBS0osS0FBSztNQUFFa1ksRUFBRSxFQUFFO1FBQUV2WCxlQUFlLEVBQUU7TUFBVTtJQUFFLElBQUV3TSxNQUFNLENBQUN3QyxRQUFRLEdBQUcsR0FBRyxHQUFHeEMsTUFBTSxDQUFDd1AsU0FBZSxDQUFHO0lBQ3hJOUIsV0FBVyxFQUFHQyxNQUFNLGlCQUNsQjFmLDBEQUFBLENBQUNXLHNEQUFTLEVBQUFxRSxRQUFBO01BQUNxYixTQUFTO01BQ2xCQyxJQUFJLEVBQUU7SUFBRSxHQUFLWixNQUFNO01BQUVFLFFBQVE7SUFBQSxFQUM5QixDQUFFO0lBQ0xuTyxVQUFVLEVBQUVBLFVBQVc7SUFDdkIrUCxhQUFhLEVBQUVBLENBQUNDLEtBQUssRUFBRUMsYUFBYSxLQUFLO01BQ3ZDaFEsYUFBYSxDQUFDZ1EsYUFBYSxDQUFDO0lBQzlCLENBQUU7SUFDRkMsYUFBYSxFQUFFQSxDQUFDNUMsT0FBTyxFQUFBNkMsTUFBQSxLQUFxQjtNQUFBLElBQWpCblEsVUFBVSxHQUFBbVEsTUFBQSxDQUFWblEsVUFBVTtNQUNuQyxPQUFPc04sT0FBTyxDQUFDaEwsTUFBTSxDQUNsQmhDLE1BQU0sSUFDTEEsTUFBTSxDQUFDd0MsUUFBUSxDQUFDc04sV0FBVyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDclEsVUFBVSxDQUFDb1EsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUNoRTlQLE1BQU0sQ0FBQ3dQLFNBQVMsQ0FBQ00sV0FBVyxDQUFDLENBQUMsQ0FBQ0MsUUFBUSxDQUFDclEsVUFBVSxDQUFDb1EsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUNqRTlQLE1BQU0sQ0FBQzJDLGVBQWUsQ0FBQ21OLFdBQVcsQ0FBQyxDQUFDLENBQUNDLFFBQVEsQ0FBQ3JRLFVBQVUsQ0FBQ29RLFdBQVcsQ0FBQyxDQUFDLENBQzFFLENBQUM7SUFDSCxDQUFFO0lBQ0Y1QyxRQUFRLEVBQUVBLENBQUM5TCxDQUFDLEVBQUV2QixRQUFRLEtBQUt5QyxnQkFBZ0IsQ0FBQzZDLElBQUksQ0FBQzVDLEtBQUssRUFBRTFDLFFBQVEsQ0FBRTtJQUNsRXdQLElBQUksRUFBQyxPQUFPO0lBQ1psQyxjQUFjLEVBQUU2QyxNQUFBO01BQUEsSUFBRzNDLFFBQVEsR0FBQTJDLE1BQUEsQ0FBUjNDLFFBQVE7UUFBS0MsS0FBSyxHQUFBeGEsd0JBQUEsQ0FBQWtkLE1BQUEsRUFBQUMsVUFBQTtNQUFBLG9CQUVuQ2hpQiwwREFBQSxDQUFDaUIscURBQUcsRUFBQStELFFBQUEsS0FBS3FhLEtBQUs7UUFBRXZDLEVBQUUsRUFBRTtVQUFFdlgsZUFBZSxFQUFFLE9BQU87VUFBRWdCLElBQUksRUFBRSxHQUFHO1VBQUVnWixTQUFTLEVBQUU7UUFBTztNQUFFLElBQzVFSCxRQUFRLGVBQ1RwZiwwREFBQSwyQkFDRUEsMERBQUE7UUFBUWtkLE9BQU8sRUFBRy9KLENBQUMsSUFBS3VFLDJCQUEyQixDQUFDdkUsQ0FBQyxDQUFFO1FBQUMwTCxRQUFRLEVBQUUvVixJQUFJLENBQUNVLElBQUksQ0FBQ0csSUFBSSxLQUFLLE1BQU87UUFBQzZWLFdBQVcsRUFBR3JNLENBQUMsSUFBS0EsQ0FBQyxDQUFDcUcsY0FBYyxDQUFDLENBQUU7UUFBQzdVLFNBQVMsRUFBQyxjQUFjO1FBQUN5QixLQUFLLEVBQUU7VUFBRUssS0FBSyxFQUFFO1FBQU87TUFBRSxHQUFDLGNBRWhMLENBQ0wsQ0FDRixDQUFDO0lBQUEsQ0FDTjtJQUNGcVcsRUFBRSxFQUFFO01BQUVyVyxLQUFLLEVBQUUsT0FBTztNQUFFbEIsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNsRCxDQUFDLGVBQ0Z2RiwwREFBQSxDQUFDNEYsWUFBWTtJQUFDMFksS0FBSyxFQUFDLE9BQU87SUFBQ0MsU0FBUyxFQUFDO0VBQUssZ0JBQ3pDdmUsMERBQUEsQ0FBQ1MscURBQVU7SUFBQ3ljLE9BQU8sRUFBRUEsQ0FBQSxLQUFNcEYsaUNBQWlDLENBQUNaLElBQUksQ0FBQzVDLEtBQUssQ0FBRTtJQUFDbE8sS0FBSyxFQUFFO01BQUVDLFFBQVEsRUFBRSxVQUFVO01BQUUrWCxLQUFLLEVBQUU7SUFBUTtFQUFFLGdCQUN4SHBlLDBEQUFBLENBQUMyQyw0REFBbUI7SUFBQ3lELEtBQUssRUFBRTtNQUFFWixLQUFLLEVBQUU7SUFBVTtFQUFFLENBQUUsQ0FDekMsQ0FDQSxDQUNYLENBSVAsQ0FBQyxlQUNMeEYsMERBQUEsMEJBQ0VBLDBEQUFBLENBQUNXLHNEQUFTO0lBQ1JrZSxRQUFRO0lBQ1IxSixJQUFJLEVBQUMsT0FBTztJQUFDeE0sRUFBRSxFQUFDLE9BQU87SUFDdkJ5TSxLQUFLLEVBQUU4QixJQUFJLENBQUNyQyxLQUFNO0lBRWxCb0ssUUFBUSxFQUFHOUwsQ0FBQyxJQUFLNEIsWUFBWSxDQUFDNUIsQ0FBQyxFQUFFNkIsQ0FBQyxDQUFFO0lBQ3BDb00sSUFBSSxFQUFDLE9BQU87SUFDWnRFLEVBQUUsRUFBRTtNQUFFclcsS0FBSyxFQUFFLE9BQU87TUFBRWxCLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDbEQsQ0FDQyxDQUFDLGVBQ0x2RiwwREFBQSwwQkFDRUEsMERBQUEsQ0FBQ1csc0RBQVM7SUFDUndVLElBQUksRUFBQyxTQUFTO0lBQUN4TSxFQUFFLEVBQUMsU0FBUztJQUMzQnNXLFFBQVEsRUFBRzlMLENBQUMsSUFBSzRCLFlBQVksQ0FBQzVCLENBQUMsRUFBRTZCLENBQUMsQ0FBRTtJQUNwQ29NLElBQUksRUFBQyxPQUFPO0lBRVpoTSxLQUFLLEVBQUU4QixJQUFJLENBQUN2QixPQUFRO0lBQ3BCbUgsRUFBRSxFQUFFO01BQUVyVyxLQUFLLEVBQUUsT0FBTztNQUFFbEIsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNsRCxDQUNDLENBQUMsZUFDTHZGLDBEQUFBLDBCQUNFQSwwREFBQSxDQUFDVyxzREFBUztJQUNSd1UsSUFBSSxFQUFDLFVBQVU7SUFBQ3hNLEVBQUUsRUFBQyxVQUFVO0lBQzdCeU0sS0FBSyxFQUFFOEIsSUFBSSxDQUFDdkMsUUFBUztJQUVyQmtLLFFBQVEsRUFBRS9WLElBQUksQ0FBQ1UsSUFBSSxDQUFDRyxJQUFJLEtBQUssS0FBTTtJQUNuQ3NWLFFBQVEsRUFBRzlMLENBQUMsSUFBSzRCLFlBQVksQ0FBQzVCLENBQUMsRUFBRTZCLENBQUMsQ0FBRTtJQUNwQ29NLElBQUksRUFBQyxPQUFPO0lBQ1p0RSxFQUFFLEVBQUU7TUFBRXJXLEtBQUssRUFBRSxPQUFPO01BQUVsQixlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2xELENBQ0MsQ0FBQyxlQUNMdkYsMERBQUEsMEJBQ0VBLDBEQUFBLENBQUNXLHNEQUFTO0lBQ1J3VSxJQUFJLEVBQUMsY0FBYztJQUFDeE0sRUFBRSxFQUFDLGNBQWM7SUFDckN5TSxLQUFLLEVBQUU4QixJQUFJLENBQUN4QixZQUFhO0lBQ3pCdUosUUFBUSxFQUFHOUwsQ0FBQyxJQUFLNEIsWUFBWSxDQUFDNUIsQ0FBQyxFQUFFNkIsQ0FBQyxDQUFFO0lBQ3BDb00sSUFBSSxFQUFDLE9BQU87SUFDWnRCLElBQUksRUFBQyxRQUFRO0lBQ2JtQyxXQUFXLEVBQUMsVUFBVTtJQUN0Qm5GLEVBQUUsRUFBRTtNQUFFclcsS0FBSyxFQUFFLE9BQU87TUFBRWxCLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDbEQsQ0FDQyxDQUFDLGVBQ0x2RiwwREFBQTtJQUFJMkksRUFBRSxFQUFDO0VBQW9CLEdBQUV1TyxJQUFJLENBQUN0QixVQUFVLENBQUNzQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNnSyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFNLENBQUMsZUFDbkdsaUIsMERBQUEsMEJBQ0VBLDBEQUFBLENBQUN5RSxZQUFZO0lBQUM2WixLQUFLLEVBQUMsUUFBUTtJQUFDeEIsRUFBRSxFQUFFLENBQUM7RUFBRSxnQkFDbEM5YywwREFBQSxDQUFDUyxxREFBVTtJQUFDeWMsT0FBTyxFQUFFQSxDQUFBLEtBQU1qRyxVQUFVLENBQUNDLElBQUksQ0FBQzVDLEtBQUs7RUFBRSxnQkFDaER0VSwwREFBQSxDQUFDTSxrRUFBVTtJQUFDOEYsS0FBSyxFQUFFO01BQUVpYixNQUFNLEVBQUUsU0FBUztNQUFFN2IsS0FBSyxFQUFFO0lBQU07RUFBRSxDQUFFLENBQy9DLENBQ0EsQ0FDWixDQUNKLENBR0osQ0FFRyxDQUNaLENBQUMsRUFDRGliLFFBQVEsQ0FBQ3dCLFdBQ0wsQ0FFQSxDQUFDLGVBQ1pqaUIsMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQSxXQUFRLENBQUMsZUFDVEEsMERBQUE7SUFBSW1oQixPQUFPLEVBQUU7RUFBRSxnQkFDYm5oQiwwREFBQSxDQUFDVyxzREFBUztJQUNSd1UsSUFBSSxFQUFDLFlBQVk7SUFBQ3hNLEVBQUUsRUFBQyxZQUFZO0lBQ2pDeVksSUFBSSxFQUFDLE9BQU87SUFDWmhNLEtBQUssRUFBRS9JLFVBQVc7SUFDbEI0UyxRQUFRLEVBQUc5TCxDQUFDLElBQUs3RyxhQUFhLENBQUM2RyxDQUFDLENBQUMrQixNQUFNLENBQUNFLEtBQUssQ0FBRTtJQUMvQzBILEVBQUUsRUFBRTtNQUFFdlgsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNsQyxDQUNDLENBQUMsZUFDTHZGLDBEQUFBLDBCQUNFQSwwREFBQSxDQUFDVyxzREFBUztJQUNSZ0ksRUFBRSxFQUFDLFVBQVU7SUFDYm1YLElBQUksRUFBQyxRQUFRO0lBQ2JzQixJQUFJLEVBQUMsT0FBTztJQUNaYSxXQUFXLEVBQUMsV0FBVztJQUN2QjlNLElBQUksRUFBQyxVQUFVO0lBQ2ZDLEtBQUssRUFBRXZJLFFBQVEsS0FBS2lTLFNBQVMsR0FBR2pTLFFBQVEsR0FBRyxDQUFFO0lBQzdDb1MsUUFBUSxFQUFHOUwsQ0FBQyxJQUFLckcsV0FBVyxDQUFDcUcsQ0FBQyxDQUFDK0IsTUFBTSxDQUFDRSxLQUFLLENBQUU7SUFDN0MwSCxFQUFFLEVBQUU7TUFBRXJXLEtBQUssRUFBRSxPQUFPO01BQUVsQixlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2xELENBQ0MsQ0FBQyxlQUNMdkYsMERBQUEsMEJBQ0VBLDBEQUFBLENBQUNXLHNEQUFTO0lBQ1JnSSxFQUFFLEVBQUMsa0JBQWtCO0lBQ3JCeVksSUFBSSxFQUFDLE9BQU87SUFDWmEsV0FBVyxFQUFDLFlBQVk7SUFDeEI5TSxJQUFJLEVBQUMsa0JBQWtCO0lBQ3ZCOEosUUFBUSxFQUFHOUwsQ0FBQyxJQUFLekcsbUJBQW1CLENBQUN5RyxDQUFDLENBQUMrQixNQUFNLENBQUNFLEtBQUssQ0FBRTtJQUNyRDBILEVBQUUsRUFBRTtNQUFFclcsS0FBSyxFQUFFLE9BQU87TUFBRWxCLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDbEQsQ0FDQyxDQUFDLGVBQ0x2RiwwREFBQSwwQkFDRUEsMERBQUEsQ0FBQ1csc0RBQVM7SUFDUndVLElBQUksRUFBQyxlQUFlO0lBQUN4TSxFQUFFLEVBQUMsZUFBZTtJQUN2Q3lZLElBQUksRUFBQyxPQUFPO0lBQ1puQyxRQUFRLEVBQUc5TCxDQUFDLElBQUtqRyxnQkFBZ0IsQ0FBQ2lHLENBQUMsQ0FBQytCLE1BQU0sQ0FBQ0UsS0FBSyxDQUFFO0lBQ2xENk0sV0FBVyxFQUFDLFVBQVU7SUFDdEJuRixFQUFFLEVBQUU7TUFBRXZYLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDbEMsQ0FDQyxDQUFDLGVBQ0x2RiwwREFBQSwwQkFDRUEsMERBQUEsZUFBTSxHQUFPLENBQUMsZUFBQUEsMERBQUEsZUFBT3dOLHNCQUFzQixDQUFDMEssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDZ0ssT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUNqRyxDQUNGLENBQUMsZUFDTGxpQiwwREFBQSwwQkFDRUEsMERBQUEsV0FBUSxDQUFDLGVBQ1RBLDBEQUFBLFdBQVEsQ0FBQyxlQUNUQSwwREFBQSxXQUFRLENBQUMsZUFDVEEsMERBQUE7SUFBSW1oQixPQUFPLEVBQUU7RUFBRSxHQUFDLGdCQUFrQixDQUFDLGVBQ25DbmhCLDBEQUFBLDBCQUFJQSwwREFBQSxlQUFNLEdBQU8sQ0FBQyxlQUFBQSwwREFBQSxlQUFPbVAsWUFBWSxDQUFDK0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDZ0ssT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUFLLENBQ2hHLENBQ0MsQ0FDRixDQUNRLENBQ2QsQ0FDRCxDQUFDLGVBQ1BsaUIsMERBQUEsQ0FBQ1EscURBQUk7SUFBQ2tlLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCM2UsMERBQUE7SUFBUThmLElBQUksRUFBQyxRQUFRO0lBQUNuYixTQUFTLEVBQUMsY0FBYztJQUFDeUIsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRTtJQUFPO0VBQUUsR0FBQyxNQUFZLENBQ2pGLENBQ0YsQ0FDRixDQUNILENBQ0ksQ0FDUixDQUNGLENBQUMsZUFDTnpHLDBEQUFBLENBQUNtQixzREFBSztJQUNKaUcsSUFBSSxFQUFFaVMsUUFBUztJQUNmOEksT0FBTyxFQUFFMUksZUFBZ0I7SUFDekIsbUJBQWdCLG1CQUFtQjtJQUNuQyxvQkFBaUI7RUFBeUIsZ0JBRTFDelosMERBQUEsQ0FBQ2lCLHFEQUFHO0lBQUM2YixFQUFFLEVBQUF6VixhQUFBLENBQUFBLGFBQUEsS0FBT2pCLEtBQUs7TUFBRUssS0FBSyxFQUFFO0lBQUc7RUFBRyxnQkFDaEN6RywwREFBQSxDQUFDNEYsWUFBWTtJQUFDMFksS0FBSyxFQUFDLE9BQU87SUFBQ0MsU0FBUyxFQUFDO0VBQU0sZ0JBQzFDdmUsMERBQUEsQ0FBQ1MscURBQVU7SUFBQ3ljLE9BQU8sRUFBRXpELGVBQWdCO0lBQUNyVCxLQUFLLEVBQUU7TUFBRUMsUUFBUSxFQUFFLFVBQVU7TUFBRStYLEtBQUssRUFBRTtJQUFRO0VBQUUsZ0JBQ3BGcGUsMERBQUEsQ0FBQ2dFLGtFQUFLO0lBQUNvQyxLQUFLLEVBQUU7TUFBRVosS0FBSyxFQUFFO0lBQVU7RUFBRSxDQUFFLENBQzNCLENBQ0EsQ0FBQyxlQUNmeEYsMERBQUEsQ0FBQ1EscURBQUk7SUFBQ2dlLFNBQVM7SUFBQzFCLEVBQUUsRUFBRTtNQUFFWSxVQUFVLEVBQUUsUUFBUTtNQUFFZSxPQUFPLEVBQUU7SUFBTyxDQUFFO0lBQUNuVyxPQUFPLEVBQUU7RUFBRSxnQkFDeEV0SSwwREFBQSxDQUFDUSxxREFBSTtJQUFDa2UsSUFBSTtJQUFDQyxFQUFFLEVBQUUsRUFBRztJQUFDN0IsRUFBRSxFQUFFO01BQUU4QixTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUM3QzVlLDBEQUFBLENBQUNlLHFEQUFVLFFBQUMseUNBQW1ELENBQUMsZUFDaEVmLDBEQUFBLHlCQUFHQSwwREFBQTtJQUFNMkUsU0FBUyxFQUFDLE1BQU07SUFBQ3lCLEtBQUssRUFBRTtNQUFFWixLQUFLLEVBQUU7SUFBTTtFQUFFLEdBQUMsUUFBWSxDQUFDLEtBQUMsZUFBQXhGLDBEQUFBO0lBQU0yRSxTQUFTLEVBQUM7RUFBTSxHQUFDLHFFQUF5RSxDQUFJLENBQ2pLLENBQUMsZUFDUDNFLDBEQUFBLFdBQUssQ0FBQyxlQUNOQSwwREFBQSxDQUFDUSxxREFBSTtJQUFDa2UsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZjNlLDBEQUFBO0lBQVE4ZixJQUFJLEVBQUMsUUFBUTtJQUFDNUMsT0FBTyxFQUFFQSxDQUFBLEtBQU10VSxRQUFRLENBQUMsdUJBQXVCLENBQUU7SUFBQ2pFLFNBQVMsRUFBQyxhQUFhO0lBQUN5QixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFO0lBQU87RUFBRSxHQUFDLEtBQVcsQ0FDakksQ0FBQyxlQUNQekcsMERBQUEsQ0FBQ1EscURBQUk7SUFBQ2tlLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2YzZSwwREFBQTtJQUFROGYsSUFBSSxFQUFDLFFBQVE7SUFBQzVDLE9BQU8sRUFBRXpELGVBQWdCO0lBQUM5VSxTQUFTLEVBQUMsYUFBYTtJQUFDeUIsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRTtJQUFPO0VBQUUsR0FBQyxJQUFVLENBQ3hHLENBQ0YsQ0FDSCxDQUNBLENBQUMsZUFDUnpHLDBEQUFBLENBQUNtQixzREFBSztJQUNKaUcsSUFBSSxFQUFFNFMsZ0JBQWlCO0lBQ3ZCbUksT0FBTyxFQUFFdEgsV0FBWTtJQUNyQnVILG9CQUFvQjtJQUNwQkMsaUJBQWlCLEVBQUVqaEIsc0RBQVM7SUFDNUJraEIsYUFBYSxFQUFFO01BQ2JDLE9BQU8sRUFBRTtJQUNYLENBQUU7SUFDRixtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUN2aUIsMERBQUEsQ0FBQ2lCLHFEQUFHO0lBQUM2YixFQUFFLEVBQUF6VixhQUFBLENBQUFBLGFBQUEsS0FBT2pCLEtBQUs7TUFBRUssS0FBSyxFQUFFO0lBQUc7RUFBRyxHQUUvQm1ULE9BQU8sZ0JBQUk1WiwwREFBQSxDQUFDdUQsMERBQU0sTUFBRSxDQUFDLGdCQUVwQnZELDBEQUFBO0lBQUtvRyxLQUFLLEVBQUU7TUFBRXVYLGNBQWMsRUFBRSxRQUFRO01BQUVpQixTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUM1RDVlLDBEQUFBLHlCQUFHQSwwREFBQSxDQUFDcUQsd0VBQWU7SUFBQytDLEtBQUssRUFBRTtNQUFFWixLQUFLLEVBQUUsT0FBTztNQUFFb1ksTUFBTSxFQUFFLE1BQU07TUFBRW5YLEtBQUssRUFBRTtJQUFPO0VBQUUsQ0FBRSxDQUFJLENBQUMsZUFDcEZ6RywwREFBQSxhQUFJLDBCQUE0QixDQUFDLGVBQ2pDQSwwREFBQTtJQUFLb0csS0FBSyxFQUFFO01BQUUyVyxPQUFPLEVBQUUsTUFBTTtNQUFFeUYsR0FBRyxFQUFFLE1BQU07TUFBRTdFLGNBQWMsRUFBRTtJQUFTO0VBQUUsZ0JBQ3JFM2QsMERBQUE7SUFBUWtkLE9BQU8sRUFBRUEsQ0FBQSxLQUFNaEMsY0FBYyxDQUFDLE1BQU0sQ0FBRTtJQUFDdlcsU0FBUyxFQUFDO0VBQWEsR0FBQyxTQUUvRCxDQUFDLGVBQ1QzRSwwREFBQTtJQUFRa2QsT0FBTyxFQUFFQSxDQUFBLEtBQU1oQyxjQUFjLENBQUMsVUFBVSxDQUFFO0lBQUN2VyxTQUFTLEVBQUM7RUFBYSxHQUFDLFNBRW5FLENBQ0wsQ0FDRixDQUVKLENBQ0EsQ0FBQyxlQUNSM0UsMERBQUEsQ0FBQ21CLHNEQUFLO0lBQ0ppRyxJQUFJLEVBQUVnVCxpQ0FBa0M7SUFDeENnSSxvQkFBb0I7SUFDcEJDLGlCQUFpQixFQUFFamhCLHNEQUFTO0lBQzVCa2hCLGFBQWEsRUFBRTtNQUNiQyxPQUFPLEVBQUU7SUFDWCxDQUFFO0lBQ0YsbUJBQWdCLG1CQUFtQjtJQUNuQyxvQkFBaUI7RUFBeUIsZ0JBRTFDdmlCLDBEQUFBLENBQUNpQixxREFBRztJQUFDNmIsRUFBRSxFQUFBelYsYUFBQSxDQUFBQSxhQUFBLEtBQU9qQixLQUFLO01BQUVLLEtBQUssRUFBRTtJQUFHO0VBQUcsR0FFL0JtVCxPQUFPLGdCQUFJNVosMERBQUEsQ0FBQ3VELDBEQUFNLE1BQUUsQ0FBQyxnQkFFcEJ2RCwwREFBQTtJQUFLb0csS0FBSyxFQUFFO01BQUV1WCxjQUFjLEVBQUUsUUFBUTtNQUFFaUIsU0FBUyxFQUFFO0lBQVM7RUFBRSxnQkFDNUQ1ZSwwREFBQSxDQUFDUSxxREFBSTtJQUFDZ2UsU0FBUztJQUFDMUIsRUFBRSxFQUFFO01BQUVZLFVBQVUsRUFBRSxRQUFRO01BQUVlLE9BQU8sRUFBRTtJQUFPLENBQUU7SUFBQ25XLE9BQU8sRUFBRTtFQUFFLGdCQUN4RXRJLDBEQUFBLENBQUNRLHFEQUFJO0lBQUNrZSxJQUFJO0lBQUNDLEVBQUUsRUFBRSxFQUFHO0lBQUM3QixFQUFFLEVBQUU7TUFBRThCLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQzdDNWUsMERBQUEseUJBQUdBLDBEQUFBLENBQUNxRCx3RUFBZTtJQUFDK0MsS0FBSyxFQUFFO01BQUVaLEtBQUssRUFBRSxPQUFPO01BQUVvWSxNQUFNLEVBQUUsTUFBTTtNQUFFblgsS0FBSyxFQUFFO0lBQU87RUFBRSxDQUFFLENBQUksQ0FBQyxlQUNwRnpHLDBEQUFBLENBQUNlLHFEQUFVLFFBQUMsaUVBQTJFLENBQUMsZUFDeEZmLDBEQUFBLHlCQUFHQSwwREFBQTtJQUFNMkUsU0FBUyxFQUFDLE1BQU07SUFBQ3lCLEtBQUssRUFBRTtNQUFFWixLQUFLLEVBQUU7SUFBTTtFQUFFLEdBQUMsUUFBWSxDQUFDLEtBQUMsZUFBQXhGLDBEQUFBO0lBQU0yRSxTQUFTLEVBQUM7RUFBTSxHQUFDLGlFQUFxRSxDQUFJLENBQzdKLENBQUMsZUFDUDNFLDBEQUFBLFdBQUssQ0FBQyxlQUNOQSwwREFBQSxDQUFDUSxxREFBSTtJQUFDa2UsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZjNlLDBEQUFBO0lBQVFrZCxPQUFPLEVBQUVBLENBQUEsS0FBTWhDLGNBQWMsQ0FBQyxVQUFVLENBQUU7SUFBQ3ZXLFNBQVMsRUFBQztFQUFhLEdBQUMsT0FFbkUsQ0FDSixDQUFDLGVBQ1AzRSwwREFBQSxDQUFDUSxxREFBSTtJQUFDa2UsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZjNlLDBEQUFBLENBQUM2QyxzREFBTztJQUFDNGYsRUFBRSxrQ0FBQXBkLE1BQUEsQ0FBa0NrVyxLQUFLLENBQUc7SUFBQzVXLFNBQVMsRUFBQztFQUFVLGdCQUN4RTNFLDBEQUFBO0lBQVEyRSxTQUFTLEVBQUM7RUFBYSxHQUFDLG9CQUEwQixDQUNuRCxDQUNMLENBQ0YsQ0FDSCxDQUVKLENBQ0EsQ0FBQyxlQUNSM0UsMERBQUEsQ0FBQ21CLHNEQUFLO0lBQ0ppRyxJQUFJLEVBQUVvVCxjQUFlO0lBQ3JCMkgsT0FBTyxFQUFFbEgsZ0JBQWlCO0lBQzFCbUgsb0JBQW9CO0lBQ3BCQyxpQkFBaUIsRUFBRWpoQixzREFBUztJQUM1QmtoQixhQUFhLEVBQUU7TUFDYkMsT0FBTyxFQUFFO0lBQ1gsQ0FBRTtJQUNGLG1CQUFnQixtQkFBbUI7SUFDbkMsb0JBQWlCO0VBQXlCLGdCQUUxQ3ZpQiwwREFBQSxDQUFDaUIscURBQUc7SUFBQzZiLEVBQUUsRUFBQXpWLGFBQUEsQ0FBQUEsYUFBQSxLQUFPakIsS0FBSztNQUFFSyxLQUFLLEVBQUU7SUFBRztFQUFHLEdBRS9CbVQsT0FBTyxnQkFBSTVaLDBEQUFBLENBQUN1RCwwREFBTSxNQUFFLENBQUMsZ0JBRXBCdkQsMERBQUE7SUFBS29HLEtBQUssRUFBRTtNQUFFdVgsY0FBYyxFQUFFLFFBQVE7TUFBRWlCLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQzVENWUsMERBQUEseUJBQUdBLDBEQUFBLENBQUNzRCxtRUFBVTtJQUFDOEMsS0FBSyxFQUFFO01BQUVaLEtBQUssRUFBRSxLQUFLO01BQUVvWSxNQUFNLEVBQUUsTUFBTTtNQUFFblgsS0FBSyxFQUFFO0lBQU87RUFBRSxDQUFFLENBQUksQ0FBQyxlQUM3RXpHLDBEQUFBO0lBQUlvRyxLQUFLLEVBQUU7TUFBRVosS0FBSyxFQUFFO0lBQU07RUFBRSxHQUFDLGVBQWlCLENBQUMsZUFDL0N4RiwwREFBQTtJQUFRMkUsU0FBUyxFQUFDLGFBQWE7SUFBQ3VZLE9BQU8sRUFBRWpDO0VBQWlCLEdBQUMsV0FFbkQsQ0FDTCxDQUVKLENBQ0EsQ0FBQyxlQUVSamIsMERBQUEsQ0FBQ21CLHNEQUFLO0lBQ0ppRyxJQUFJLEVBQUU0TCxpQkFBa0I7SUFDeEJtUCxPQUFPLEVBQUU5Tyw0QkFBNkI7SUFDdEMsbUJBQWdCLG1CQUFtQjtJQUNuQyxvQkFBaUI7RUFBeUIsZ0JBRTFDclQsMERBQUEsQ0FBQ2lCLHFEQUFHO0lBQUM2YixFQUFFLEVBQUF6VixhQUFBLENBQUFBLGFBQUEsS0FBT1AsTUFBTTtNQUFFTCxLQUFLLEVBQUU7SUFBRztFQUFHLGdCQUNqQ3pHLDBEQUFBLENBQUM0RixZQUFZO0lBQUMwWSxLQUFLLEVBQUMsT0FBTztJQUFDQyxTQUFTLEVBQUM7RUFBTSxnQkFDMUN2ZSwwREFBQSxDQUFDUyxxREFBVTtJQUFDeWMsT0FBTyxFQUFFN0osNEJBQTZCO0lBQUNqTixLQUFLLEVBQUU7TUFBRUMsUUFBUSxFQUFFLFVBQVU7TUFBRStYLEtBQUssRUFBRTtJQUFRO0VBQUUsZ0JBQ2pHcGUsMERBQUEsQ0FBQ2dFLGtFQUFLO0lBQUNvQyxLQUFLLEVBQUU7TUFBRVosS0FBSyxFQUFFO0lBQVU7RUFBRSxDQUFFLENBQzNCLENBQ0EsQ0FBQyxlQUNmeEYsMERBQUEsV0FBSyxDQUFDLGVBQ05BLDBEQUFBO0lBQUtvRyxLQUFLLEVBQUU7TUFBRXdYLE1BQU0sRUFBRSxPQUFPO01BQUVhLE9BQU8sRUFBRSxNQUFNO01BQUVULFFBQVEsRUFBRSxRQUFRO01BQUUwRSxTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUN4RjFpQiwwREFBQSxDQUFDK0Qsd0VBQWlCO0lBQUM0ZSxjQUFjLEVBQUVyUCxvQkFBcUI7SUFBQzZPLE9BQU8sRUFBRTlPO0VBQTZCLENBQUUsQ0FDOUYsQ0FDRixDQUNBLENBQUMsZUFDUnJULDBEQUFBLENBQUNtQixzREFBSztJQUNKaUcsSUFBSSxFQUFFb1EsaUJBQWtCO0lBQ3hCMkssT0FBTyxFQUFFeEssNEJBQTZCO0lBQ3RDLG1CQUFnQixtQkFBbUI7SUFDbkMsb0JBQWlCO0VBQXlCLGdCQUUxQzNYLDBEQUFBLENBQUNpQixxREFBRztJQUFDNmIsRUFBRSxFQUFBelYsYUFBQSxDQUFBQSxhQUFBLEtBQU9QLE1BQU07TUFBRUwsS0FBSyxFQUFFO0lBQUc7RUFBRyxnQkFDakN6RywwREFBQSxDQUFDNEYsWUFBWTtJQUFDMFksS0FBSyxFQUFDLE9BQU87SUFBQ0MsU0FBUyxFQUFDO0VBQU0sZ0JBQzFDdmUsMERBQUEsQ0FBQ1MscURBQVU7SUFBQ3ljLE9BQU8sRUFBRXZGLDRCQUE2QjtJQUFDdlIsS0FBSyxFQUFFO01BQUVDLFFBQVEsRUFBRSxVQUFVO01BQUUrWCxLQUFLLEVBQUU7SUFBUTtFQUFFLGdCQUNqR3BlLDBEQUFBLENBQUNnRSxrRUFBSztJQUFDb0MsS0FBSyxFQUFFO01BQUVaLEtBQUssRUFBRTtJQUFVO0VBQUUsQ0FBRSxDQUMzQixDQUNBLENBQUMsZUFDZnhGLDBEQUFBLFdBQUssQ0FBQyxlQUNOQSwwREFBQTtJQUFLb0csS0FBSyxFQUFFO01BQUV3WCxNQUFNLEVBQUUsT0FBTztNQUFFYSxPQUFPLEVBQUUsTUFBTTtNQUFFVCxRQUFRLEVBQUUsUUFBUTtNQUFFMEUsU0FBUyxFQUFFO0lBQVM7RUFBRSxnQkFDeEYxaUIsMERBQUEsQ0FBQ2lFLGdFQUFhO0lBQUMwZSxjQUFjLEVBQUUvSyxnQkFBaUI7SUFBQ3VLLE9BQU8sRUFBRXhLO0VBQTZCLENBQUUsQ0FDdEYsQ0FDRixDQUNBLENBQUMsZUFDUjNYLDBEQUFBLENBQUNtQixzREFBSztJQUNKaUcsSUFBSSxFQUFFa1IsY0FBZTtJQUNyQjZKLE9BQU8sRUFBRXBKLHNCQUF1QjtJQUNoQyxtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUMvWSwwREFBQSxDQUFDaUIscURBQUc7SUFBQzZiLEVBQUUsRUFBQXpWLGFBQUEsQ0FBQUEsYUFBQSxLQUFPUCxNQUFNO01BQUVMLEtBQUssRUFBRTtJQUFHO0VBQUcsZ0JBQ2pDekcsMERBQUEsQ0FBQzRGLFlBQVk7SUFBQzBZLEtBQUssRUFBQyxPQUFPO0lBQUNDLFNBQVMsRUFBQztFQUFNLGdCQUMxQ3ZlLDBEQUFBLENBQUNTLHFEQUFVO0lBQUN5YyxPQUFPLEVBQUVuRSxzQkFBdUI7SUFBQzNTLEtBQUssRUFBRTtNQUFFQyxRQUFRLEVBQUUsVUFBVTtNQUFFK1gsS0FBSyxFQUFFO0lBQVE7RUFBRSxnQkFDM0ZwZSwwREFBQSxDQUFDZ0Usa0VBQUs7SUFBQ29DLEtBQUssRUFBRTtNQUFFWixLQUFLLEVBQUU7SUFBVTtFQUFFLENBQUUsQ0FDM0IsQ0FDQSxDQUFDLGVBQ2Z4RiwwREFBQSxXQUFLLENBQUMsZUFDTkEsMERBQUE7SUFBS29HLEtBQUssRUFBRTtNQUFFd1gsTUFBTSxFQUFFLE9BQU87TUFBRWEsT0FBTyxFQUFFLE1BQU07TUFBRVQsUUFBUSxFQUFFLFFBQVE7TUFBRTBFLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQ3hGMWlCLDBEQUFBLENBQUNrRSxrRUFBZTtJQUFDaWUsT0FBTyxFQUFFbkoscUJBQXNCO0lBQUNyUSxFQUFFLEVBQUUrUDtFQUFPLENBQUUsQ0FDM0QsQ0FDRixDQUNBLENBQ0osQ0FBQztBQUVWO0FBRUEsaUVBQWVqUSxvQkFBb0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzV6Q1Y7QUFDTTtBQUNzQztBQUNYO0FBQ007QUFDVjtBQUNRO0FBQ1I7QUFDRjtBQUNJO0FBQ2M7QUFDUjtBQUNFO0FBQ0k7QUFDTjtBQUNNO0FBQ0U7QUFDaUI7QUFDakM7QUFDRTtBQUN4RCxTQUFTdEksWUFBWUEsQ0FBQSxFQUFHO0VBQ3RCLG9CQUNFSCwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUEsQ0FBQzhqQixzREFBYztJQUFDaEgsRUFBRSxFQUFFO01BQUV0WCxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQ3hGLDBEQUFBLENBQUMrakIsc0RBQVk7SUFBQ2pILEVBQUUsRUFBRTtNQUFFdFgsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbEN4RiwwREFBQSxDQUFDK2lCLHFFQUFhLE1BQUUsQ0FDSixDQUFDLGVBQ2YvaUIsMERBQUEsQ0FBQ2drQixzREFBWTtJQUFDSSxPQUFPLEVBQUM7RUFBVyxDQUFFLENBQ3JCLENBQUMsZUFDakJwa0IsMERBQUEsQ0FBQzhqQixzREFBYztJQUFDaEgsRUFBRSxFQUFFO01BQUV0WCxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQ3hGLDBEQUFBLENBQUMrakIsc0RBQVk7SUFBQ2pILEVBQUUsRUFBRTtNQUFFdFgsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbEN4RiwwREFBQSxDQUFDZ2pCLHdFQUFnQixNQUFFLENBQ1AsQ0FBQyxlQUNmaGpCLDBEQUFBLENBQUNna0Isc0RBQVk7SUFBQ0ksT0FBTyxFQUFDO0VBQVUsQ0FBRSxDQUNwQixDQUFDLGVBQ2pCcGtCLDBEQUFBLENBQUM4akIsc0RBQWM7SUFBQ2hILEVBQUUsRUFBRTtNQUFFdFgsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcEN4RiwwREFBQSxDQUFDK2pCLHNEQUFZO0lBQUNqSCxFQUFFLEVBQUU7TUFBRXRYLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDeEYsMERBQUEsQ0FBQ2lqQixtRUFBVyxNQUFFLENBQ0YsQ0FBQyxlQUNmampCLDBEQUFBLENBQUNna0Isc0RBQVk7SUFBQ0ksT0FBTyxFQUFDO0VBQU8sQ0FBRSxDQUNqQixDQUFDLGVBQ2pCcGtCLDBEQUFBLENBQUM4akIsc0RBQWM7SUFBQ2hILEVBQUUsRUFBRTtNQUFFdFgsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcEN4RiwwREFBQSxDQUFDK2pCLHNEQUFZO0lBQUNqSCxFQUFFLEVBQUU7TUFBRXRYLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDeEYsMERBQUEsQ0FBQ3dqQix3RUFBZ0IsTUFBRSxDQUNQLENBQUMsZUFDZnhqQiwwREFBQSxDQUFDZ2tCLHNEQUFZO0lBQUNJLE9BQU8sRUFBQztFQUFXLENBQUUsQ0FDckIsQ0FBQyxlQUNqQnBrQiwwREFBQSxDQUFDOGpCLHNEQUFjO0lBQUNoSCxFQUFFLEVBQUU7TUFBRXRYLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3BDeEYsMERBQUEsQ0FBQytqQixzREFBWTtJQUFDakgsRUFBRSxFQUFFO01BQUV0WCxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQ3hGLDBEQUFBLENBQUNrakIsdUVBQWUsTUFBRSxDQUNOLENBQUMsZUFDZmxqQiwwREFBQSxDQUFDZ2tCLHNEQUFZO0lBQUNJLE9BQU8sRUFBQztFQUFTLENBQUUsQ0FDbkIsQ0FBQyxlQUNqQnBrQiwwREFBQSxDQUFDOGpCLHNEQUFjO0lBQUNoSCxFQUFFLEVBQUU7TUFBRXRYLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3BDeEYsMERBQUEsQ0FBQytqQixzREFBWTtJQUFDakgsRUFBRSxFQUFFO01BQUV0WCxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQ3hGLDBEQUFBLENBQUN5akIsMEVBQWtCLE1BQUUsQ0FDVCxDQUFDLGVBQ2Z6akIsMERBQUEsQ0FBQ2drQixzREFBWTtJQUFDSSxPQUFPLEVBQUM7RUFBUyxDQUFFLENBQ25CLENBQUMsZUFDakJwa0IsMERBQUEsQ0FBQzhqQixzREFBYztJQUFDaEgsRUFBRSxFQUFFO01BQUV0WCxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQ3hGLDBEQUFBLENBQUMrakIsc0RBQVk7SUFBQ2pILEVBQUUsRUFBRTtNQUFFdFgsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbEN4RiwwREFBQSxDQUFDNGpCLDREQUFtQixNQUFFLENBQ1YsQ0FBQyxlQUNmNWpCLDBEQUFBLENBQUNna0Isc0RBQVk7SUFBQ0ksT0FBTyxFQUFDO0VBQWdCLENBQUUsQ0FDMUIsQ0FBQyxlQUNqQnBrQiwwREFBQSxDQUFDOGpCLHNEQUFjO0lBQUNoSCxFQUFFLEVBQUU7TUFBRXRYLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3BDeEYsMERBQUEsQ0FBQytqQixzREFBWTtJQUFDakgsRUFBRSxFQUFFO01BQUV0WCxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQ3hGLDBEQUFBLENBQUM2akIsNEVBQW1CLE1BQUUsQ0FDVixDQUFDLGVBQ2Y3akIsMERBQUEsQ0FBQ2drQixzREFBWTtJQUFDSSxPQUFPLEVBQUM7RUFBUyxDQUFFLENBQ25CLENBQUMsZUFDakJwa0IsMERBQUEsQ0FBQzhqQixzREFBYztJQUFDaEgsRUFBRSxFQUFFO01BQUV0WCxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQ3hGLDBEQUFBLENBQUMrakIsc0RBQVk7SUFBQ2pILEVBQUUsRUFBRTtNQUFFdFgsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbEN4RiwwREFBQSxDQUFDbWpCLG1FQUFXLE1BQUUsQ0FDRixDQUFDLGVBQ2ZuakIsMERBQUEsQ0FBQ2drQixzREFBWTtJQUFDSSxPQUFPLEVBQUM7RUFBbUIsQ0FBRSxDQUM3QixDQUFDLGVBQ2pCcGtCLDBEQUFBLENBQUM4akIsc0RBQWM7SUFBQ2hILEVBQUUsRUFBRTtNQUFFdFgsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcEN4RiwwREFBQSxDQUFDK2pCLHNEQUFZO0lBQUNqSCxFQUFFLEVBQUU7TUFBRXRYLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDeEYsMERBQUEsQ0FBQzBqQix1RUFBZSxNQUFFLENBQ04sQ0FBQyxlQUNmMWpCLDBEQUFBLENBQUNna0Isc0RBQVk7SUFBQ0ksT0FBTyxFQUFDO0VBQWEsQ0FBRSxDQUN2QixDQUFDLGVBQ2pCcGtCLDBEQUFBLENBQUM4akIsc0RBQWM7SUFBQ2hILEVBQUUsRUFBRTtNQUFFdFgsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcEN4RiwwREFBQSxDQUFDK2pCLHNEQUFZO0lBQUNqSCxFQUFFLEVBQUU7TUFBRXRYLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDeEYsMERBQUEsQ0FBQ21rQixxRUFBWSxNQUFFLENBQ0gsQ0FBQyxlQUNmbmtCLDBEQUFBLENBQUNna0Isc0RBQVk7SUFBQ0ksT0FBTyxFQUFDO0VBQU0sQ0FBRSxDQUNoQixDQUNoQixDQUFDO0FBRVA7QUFFQSxpRUFBZWprQixZQUFZLEU7Ozs7Ozs7Ozs7QUM3RmQ7O0FBRWI7QUFDQSxlQUFlLG1CQUFPLENBQUMsb0VBQWE7QUFDcEMsYUFBYSxtQkFBTyxDQUFDLGdFQUFXO0FBQ2hDLG9CQUFvQixtQkFBTyxDQUFDLDhFQUFrQjtBQUM5Qzs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNQYTs7QUFFYix1QkFBdUIsbUJBQU8sQ0FBQyw4RUFBa0I7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNSYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNoRGE7O0FBRWI7O0FBRUE7Ozs7Ozs7Ozs7O0FDSmE7O0FBRWIsZUFBZSxtQkFBTyxDQUFDLGtFQUFZO0FBQ25DLG1CQUFtQixtQkFBTyxDQUFDLDBFQUFnQjs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3BDYTs7QUFFYixrQkFBa0IsbUJBQU8sQ0FBQyx3RUFBZTtBQUN6QyxlQUFlLG1CQUFPLENBQUMsa0VBQVk7QUFDbkMsbUJBQW1CLG1CQUFPLENBQUMsMEVBQWdCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDLHdDQUF3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLFdBQVcsU0FBUztBQUNwQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUMvR2E7O0FBRWIsa0JBQWtCLG1CQUFPLENBQUMsd0VBQWU7QUFDekMsY0FBYyxtQkFBTyxDQUFDLGdFQUFXOztBQUVqQztBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0RyYWdJbmRpY2F0b3JSb3VuZGVkLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRWRpdC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvTWFpbnRlbmFuY2VWaWV3L01haW50ZW5hbmNlRm9ybUNsb25lLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvY29tcG9uZW50L1NpZGViYXJEYXNoMS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL2lzRmluaXRlLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy9pc1NhZmVOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL21ha2VPcmRpbmFsLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy9tYXhTYWZlSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvdG9PcmRpbmFsLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy90b1dvcmRzLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy90b1dvcmRzT3JkaW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xMSAxOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtLTItOGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJtMC02Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMm02IDRjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAybTAgMmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJtMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMlwiXG59KSwgJ0RyYWdJbmRpY2F0b3JSb3VuZGVkJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRhLjk5NTkuOTk1OSAwIDAgMC0xLjQxIDBsLTEuODMgMS44MyAzLjc1IDMuNzV6XCJcbn0pLCAnRWRpdCcpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2lkZWJhckRhc2gxIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaDEnO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBQYXBlciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBzdHlsZWQsIEJveCwgQXV0b2NvbXBsZXRlLCBNb2RhbCwgQmFja2Ryb3AsIFRhYmxlQ29udGFpbmVyLCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgRGl2aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IEFkZCwgQXJyb3dVcHdhcmRPdXRsaW5lZCwgRHJhZ0luZGljYXRvclJvdW5kZWQsIEVkaXQsIFJlbW92ZUNpcmNsZU91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBDdXN0b21lckZvcm1WaWV3MiBmcm9tICcuLi9DdXN0b21lclZJZXcvQ3VzdG9tZXJGb3JtVmlldzInO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCBJdGVtRm9ybVZpZXcyIGZyb20gJy4uL0l0ZW1WaWV3L0l0ZW1Gb3JtVmlldzInO1xyXG5pbXBvcnQgSXRlbVVwZGF0ZVZpZXcyIGZyb20gJy4uL0l0ZW1WaWV3L0l0ZW1VcGRhdGVWaWV3Mic7XHJcbmltcG9ydCBudW1iZXJUb1dvcmRzIGZyb20gJ251bWJlci10by13b3JkcydcclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4uLy4uL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi4vLi4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5cclxuXHJcbmNvbnN0IExpZ2h0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuXHJcbmNvbnN0IHN0eWxlMiA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDgwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIE1haW50ZW5hbmNlRm9ybUNsb25lKCkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpXHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IGFwaVVybCA9IGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW1haW50ZW5hbmNlYDtcclxuICBjb25zdCBbc2VydmljZURhdGUsIHNldFNlcnZpY2VEYXRlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICByZXR1cm4gZGF0ZVxyXG4gIH0pO1xyXG4gIGNvbnN0IFt2aXNpdERhdGUsIHNldFZpc2l0RGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgcmV0dXJuIGRhdGVcclxuICB9KTtcclxuICBjb25zdCBbaXRlbURlc2NyaXB0aW9uSW5mbywgc2V0SXRlbURlc2NyaXB0aW9uSW5mb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYnJhbmQsIHNldEJyYW5kXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFttb2RlbCwgc2V0TW9kZWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3dhcnJhbnR5LCBzZXRXYXJyYW50eV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYWN0aW9uLCBzZXRBY3Rpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FkanVzdG1lbnQsIHNldEFkanVzdG1lbnRdID0gdXNlU3RhdGUoJ0xhYm9yIEZlZXMnKTtcclxuICBjb25zdCBbYWRqdXN0bWVudE51bWJlciwgc2V0QWRqdXN0bWVudE51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbGFib3JRdHksIHNldExhYm9yUXR5XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtsYWJvckRpc2NvdW50LCBzZXRMYWJvckRpc2NvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHRvdGFsTGFib3JGZWVzID0gYWRqdXN0bWVudE51bWJlciAqIGxhYm9yUXR5XHJcbiAgY29uc3QgdG90YWxEaXNjb3VudCA9IGlzTmFOKHRvdGFsTGFib3JGZWVzICogbGFib3JEaXNjb3VudCkgPyAwIDogcGFyc2VGbG9hdCh0b3RhbExhYm9yRmVlcyAqIGxhYm9yRGlzY291bnQpO1xyXG4gIGNvbnN0IGxhYm9yUGVyY2VudGFnZSA9IHRvdGFsRGlzY291bnQgLyAxMDA7XHJcbiAgY29uc3QgdG90YWxMYWJvckZlZXNHZW5lcmFsZSA9IHBhcnNlRmxvYXQodG90YWxMYWJvckZlZXMpIC0gcGFyc2VGbG9hdChsYWJvclBlcmNlbnRhZ2UpO1xyXG4gIGNvbnN0IFtkZWZlY3REZXNjcmlwdGlvbiwgc2V0RGVmZWN0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FjdGlvblRha2VuLCBzZXRBY3Rpb25UYWtlbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbm90ZSwgc2V0Tm90ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VyaWFsTm8sIHNldFNlcmlhbE5vXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpdGVtcywgU2V0SXRlbXNdID0gdXNlU3RhdGUoW1xyXG4gIF0pO1xyXG4gIGNvbnN0IFtzdWJUb3RhbCwgc2V0U3ViVG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RvdGFsSW52b2ljZSwgc2V0VG90YWxJbnZvaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzZXJ2aWNlTnVtYmVyLCBzZXRTZXJ2aWNlTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjdXN0b21lck5hbWUsIHNldEN1c3RvbWVyTmFtZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbWFpbnRlbmFuY2UvJHtpZH1gKVxyXG4gICAgICAgIHNldEN1c3RvbWVyTmFtZShyZXMuZGF0YS5kYXRhLmN1c3RvbWVyTmFtZSk7XHJcbiAgICAgICAgc2V0SXRlbURlc2NyaXB0aW9uSW5mbyhyZXMuZGF0YS5kYXRhLml0ZW1EZXNjcmlwdGlvbkluZm8pO1xyXG4gICAgICAgIHNldEJyYW5kKHJlcy5kYXRhLmRhdGEuYnJhbmQpO1xyXG4gICAgICAgIHNldE1vZGVsKHJlcy5kYXRhLmRhdGEubW9kZWwpO1xyXG4gICAgICAgIHNldFdhcnJhbnR5KHJlcy5kYXRhLmRhdGEud2FycmFudHkpO1xyXG4gICAgICAgIHNldERlZmVjdERlc2NyaXB0aW9uKHJlcy5kYXRhLmRhdGEuZGVmZWN0RGVzY3JpcHRpb24pO1xyXG4gICAgICAgIHNldEFjdGlvblRha2VuKHJlcy5kYXRhLmRhdGEuYWN0aW9uVGFrZW4pO1xyXG4gICAgICAgIHNldFNlcmlhbE5vKHJlcy5kYXRhLmRhdGEuc2VyaWFsTm8pO1xyXG4gICAgICAgIHNldFNlcnZpY2VOdW1iZXIoTnVtYmVyKHJlcy5kYXRhPy5kYXRhPy5zZXJ2aWNlTnVtYmVyIHx8IHJlcy5kYXRhPy5zZXJ2aWNlTnVtYmVyIHx8IDApKTtcclxuICAgICAgICBTZXRJdGVtcyhyZXMuZGF0YS5kYXRhLml0ZW1zLm1hcCgocm93KSA9PiAoeyAuLi5yb3csIGl0ZW1PdXQ6IDAgfSkpKTtcclxuICAgICAgICBzZXROb3RlKHJlcy5kYXRhLmRhdGEubm90ZSlcclxuICAgICAgICBzZXRBY3Rpb24ocmVzLmRhdGEuZGF0YS5hY3Rpb24pXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNobGFzdE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbGFzdC1zYXZlZC1tYWludGVuYW5jZWApXHJcbiAgICAgICAgc2V0U2VydmljZU51bWJlcigocGFyc2VJbnQocmVzLmRhdGE/LmRhdGE/LnNlcnZpY2VOdW1iZXIgfHwgcmVzLmRhdGE/LnNlcnZpY2VOdW1iZXIgfHwgMCkpICsgMSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hsYXN0TnVtYmVyKClcclxuICB9LCBbXSlcclxuICBjb25zdCBbSXRlbUluZm9ybWF0aW9uLCBzZXRJdGVtSW5mb3JtYXRpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0ZWNobmljaWFuQXNzaWduLCBzZXRUZWNobmljaWFuQXNzaWduXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBzZXJ2aWNlTmFtZSA9IFwiTS0wMFwiICsgc2VydmljZU51bWJlcjtcclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgey8qKiBDdXN0b21lciBJbmZvIHN0YXJ0ICovIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDdXN0b21lciA9IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gY3VzdG9tZXIuZmluZCgob3B0aW9uKSA9PiBvcHRpb24gPT09IG5ld1ZhbHVlKVxyXG4gICAgc2V0Q3VzdG9tZXJOYW1lKHtcclxuICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgY3VzdG9tZXJOYW1lOiBzZWxlY3RlZE9wdGlvbnM/LkN1c3RvbWVyLFxyXG4gICAgICBhZGRyZXNzOiBzZWxlY3RlZE9wdGlvbnM/LmJpbGxpbmdBZGRyZXNzICsgJyAnICsgc2VsZWN0ZWRPcHRpb25zPy5iaWxsaW5nQ2l0eSxcclxuICAgICAgcGhvbmU6IHNlbGVjdGVkT3B0aW9ucz8uY3VzdG9tZXJDb21wYW55UGhvbmVcclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbGVhckN1c3RvbWVyID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VzdG9tZXJOYW1lKHtcclxuICAgICAgX2lkOiAnJyxcclxuICAgICAgY3VzdG9tZXJOYW1lOiAnJyxcclxuICAgICAgYmlsbGluZ0FkZHJlc3M6ICcnLFxyXG4gICAgICBiaWxsaW5nQ2l0eTogJydcclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBDcmVhdGUgPSBkYXlqcyhEYXRlLm5vdygpKS5mb3JtYXQoJ0REL01NL1lZWVknKSArIFwiIFwiICsgdXNlci5kYXRhLnVzZXJOYW1lICsgJyBDcmVhdGVkICcgKyBcIk0tMDBcIlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEN1c3RvbWVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2N1c3RvbWVyYClcclxuICAgICAgICBzZXRDdXN0b21lcihyZXMuZGF0YS5kYXRhLnJldmVyc2UoKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoQ3VzdG9tZXIoKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IFtvcGVuQXV0b2NvbXBsZXRlMSwgc2V0T3BlbkF1dG9jb21wbGV0ZTFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTEgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTEodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTEoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQ3VzdG9tZXIgPSAobmV3Q3VzdG9tZXIpID0+IHtcclxuICAgIHNldEN1c3RvbWVyKFsuLi5jdXN0b21lciwgbmV3Q3VzdG9tZXJdKVxyXG4gIH1cclxuICB7LyoqIEN1c3RvbWVyIGluZm8gZW5kICovIH1cclxuICBjb25zdCBbZW1wbG95ZWUsIHNldEVtcGxveWVlXSA9IHVzZVN0YXRlKFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEVtcGxveWVlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2VtcGxveWVlYClcclxuICAgICAgICBzZXRFbXBsb3llZShyZXMuZGF0YS5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hFbXBsb3llZSgpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGZpbHRlckVtcGxveWVlID0gZW1wbG95ZWUuZmlsdGVyKChyb3cpID0+IHJvdy5kZXBhcnRtZW50ID09PSAnVEVDSE5JQ0lBTicgJiYgcm93LnN0YXR1cyAhPT0gJ0ZpcmVkJyB8fCByb3cuc3RhdHVzICE9PSAnUmVzaWduJyB8fCByb3cuc3RhdHVzICE9PSAnU3VzcGVuZGVkJylcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRW1wbG95ZWUgPSAobmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IGVtcGxveWVlLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uID09PSBuZXdWYWx1ZSlcclxuICAgIHNldFRlY2huaWNpYW5Bc3NpZ24oc2VsZWN0ZWRPcHRpb25zPy5lbXBsb3llZU5hbWUpXHJcbiAgfVxyXG4gIHsvKiogSXRlbSBzdGFydCAqLyB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoSXRlbSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pdGVtYClcclxuICAgICAgICBzZXRJdGVtSW5mb3JtYXRpb24ocmVzLmRhdGEuZGF0YS5yZXZlcnNlKCkpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoSXRlbSgpXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSXRlbSA9IChpZFJvdywgbmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IG5ld1ZhbHVlXHJcbiAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93LmlkUm93ID09PSBpZFJvdyA/IHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogc2VsZWN0ZWRPcHRpb25zPy5faWQsXHJcbiAgICAgICAgaXRlbU5hbWU6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbU5hbWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1Db3N0OiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogc2VsZWN0ZWRPcHRpb25zPy5pdGVtRGVzY3JpcHRpb24sXHJcbiAgICAgIGl0ZW1SYXRlOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgIHN0b2NrOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1RdWFudGl0eSxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgaSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBsaXN0ID0gWy4uLml0ZW1zXTtcclxuICAgIGxpc3RbaV1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtUmF0ZSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWyd0b3RhbENvc3QnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1RdHknXSAqIGxpc3RbaV1bJ2l0ZW1Db3N0J10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2Rpc2NvdW50J10gPSBsaXN0W2ldWyd0b3RhbEFtb3VudCddICogbGlzdFtpXVsnaXRlbURpc2NvdW50J107XHJcbiAgICBsaXN0W2ldWydwZXJjZW50YWdlJ10gPSBsaXN0W2ldWydkaXNjb3VudCddIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsnaXRlbUFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsndG90YWxBbW91bnQnXSAtIGxpc3RbaV1bJ3BlcmNlbnRhZ2UnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxHZW5lcmFsZSddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbUNvc3QnXSAqIGxpc3RbaV1bJ2l0ZW1CdXknXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgU2V0SXRlbXMobGlzdCk7XHJcbiAgfVxyXG4gIC8vYWRkSXRlbVxyXG4gIGNvbnN0IGFkZEl0ZW0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJdGVtID0ge1xyXG4gICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IFwiXCIsXHJcbiAgICAgICAgaXRlbU5hbWU6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQW1vdW50OiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgfVxyXG4gICAgU2V0SXRlbXMoWy4uLml0ZW1zLCBuZXdJdGVtXSk7XHJcbiAgfVxyXG4gIGNvbnN0IGFkZEl0ZW1XaGl0ZSA9ICgpID0+IHtcclxuICAgIFNldEl0ZW1zKFsuLi5pdGVtcywge1xyXG4gICAgICBuZXdEZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH1dKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRHJhZ0VuZCA9IChyZXN1bHQpID0+IHtcclxuICAgIGlmICghcmVzdWx0LmRlc3RpbmF0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0l0ZW1zID0gWy4uLml0ZW1zXTtcclxuICAgIGNvbnN0IFtyZW1vdmVkXSA9IG5ld0l0ZW1zLnNwbGljZShyZXN1bHQuc291cmNlLmluZGV4LCAxKTtcclxuICAgIG5ld0l0ZW1zLnNwbGljZShyZXN1bHQuZGVzdGluYXRpb24uaW5kZXgsIDAsIHJlbW92ZWQpO1xyXG4gICAgU2V0SXRlbXMobmV3SXRlbXMpXHJcbiAgfTtcclxuICBjb25zdCBkZWxldGVJdGVtID0gaWRSb3cgPT4ge1xyXG4gICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMuZmlsdGVyKChJdGVtKSA9PiBJdGVtLmlkUm93ICE9PSBpZFJvdykpO1xyXG4gIH07XHJcbiAgY29uc3QgZmlsdGVySXRlbUluZm9ybWF0aW9uID0gSXRlbUluZm9ybWF0aW9uLmZpbHRlcihvcHRpb24gPT4gIWl0ZW1zLmZpbmQoKHJvdykgPT4gb3B0aW9uLl9pZCA9PT0gcm93Lml0ZW1OYW1lPy5faWQgJiYgb3B0aW9uLnR5cGVJdGVtID09PSBcIkdvb2RzXCIpKVxyXG4gIHsvKiogSXRlbSBJbkZPICovIH1cclxuICBjb25zdCBbb3BlbkF1dG9jb21wbGV0ZTIsIHNldE9wZW5BdXRvY29tcGxldGUyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMiA9ICgpID0+IHtcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUl0ZW0gPSAobmV3SXRlbSkgPT4ge1xyXG4gICAgc2V0SXRlbUluZm9ybWF0aW9uKFsuLi5JdGVtSW5mb3JtYXRpb24sIG5ld0l0ZW1dKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTaG93QXV0b2NvbXBsZXRlID0gKGlkUm93KSA9PiB7XHJcbiAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93LmlkUm93ID09PSBpZFJvdyA/IHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogbnVsbCxcclxuICAgICAgICBpdGVtTmFtZTogbnVsbFxyXG4gICAgICB9LFxyXG4gICAgfSA6IHJvdykpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbiA9IChpZFJvdykgPT4ge1xyXG4gICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKChyb3cpID0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgPyB7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBpdGVtTmFtZTogJ2VtcHR5J1xyXG4gICAgICB9LFxyXG4gICAgfSA6IHJvdykpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQxID0gaXRlbXMucmVkdWNlKChzdW0sIHJvdykgPT4gc3VtICsgcm93Lml0ZW1BbW91bnQsIDApXHJcbiAgICBzZXRTdWJUb3RhbChyZXN1bHQxLnRvRml4ZWQoMikpXHJcbiAgICBsZXQgbmV3VG90YWwgPSBOdW1iZXIoc3ViVG90YWwpICsgTnVtYmVyKHRvdGFsTGFib3JGZWVzR2VuZXJhbGUpXHJcbiAgICBzZXRUb3RhbEludm9pY2UobmV3VG90YWwpXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgW29wZW5JdGVtVXBkYXRlLCBzZXRPcGVuSXRlbVVwZGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lkSXRlbSwgc2V0SWRJdGVtXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5JdGVtVXBkYXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBzZXRPcGVuSXRlbVVwZGF0ZSh0cnVlKTtcclxuICAgIHNldElkSXRlbShpZCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVVwZGF0ZUl0ZW0xID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbkl0ZW1VcGRhdGUoZmFsc2UpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUl0ZW1VcGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRPcGVuSXRlbVVwZGF0ZShmYWxzZSk7XHJcbiAgICBpZiAoaWRJdGVtKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWl0ZW0vJHtpZEl0ZW19YClcclxuICAgICAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93Lml0ZW1OYW1lPy5faWQgPT09IHJlcy5kYXRhLmRhdGEuX2lkID8ge1xyXG4gICAgICAgICAgLi4ucm93LFxyXG4gICAgICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICAgICAgX2lkOiByZXMuZGF0YS5kYXRhLl9pZCxcclxuICAgICAgICAgICAgaXRlbU5hbWU6IHJlcy5kYXRhLmRhdGEuaXRlbU5hbWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpdGVtRGVzY3JpcHRpb246IHJlcy5kYXRhLmRhdGEuaXRlbURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgaXRlbUNvc3Q6IHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSxcclxuICAgICAgICAgIGl0ZW1SYXRlOiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogcmVzLmRhdGEuZGF0YS5pdGVtUXVhbnRpdHksXHJcbiAgICAgICAgICB0b3RhbEFtb3VudDogcm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICBkaXNjb3VudDogKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAqIHJvdy5pdGVtRGlzY291bnQsXHJcbiAgICAgICAgICBwZXJjZW50YWdlOiAoKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAqIHJvdy5pdGVtRGlzY291bnQpIC8gMTAwLFxyXG4gICAgICAgICAgaXRlbUFtb3VudDogKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAtICgoKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAqIHJvdy5pdGVtRGlzY291bnQpIC8gMTAwKSxcclxuICAgICAgICAgIHRvdGFsQ29zdDogcm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgICAgICB0b3RhbEdlbmVyYWxlOiByZXMuZGF0YS5kYXRhLml0ZW1Db3N0UHJpY2UgKiByb3cuaXRlbUJ1eVxyXG4gICAgICAgIH0gOiByb3cpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgey8qKiBJdGVtIEluRk8gRW5kICovIH1cclxuICB7LyoqIEl0ZW0gZW5kICovIH1cclxuICBjb25zdCBbb3BlbkJhY2ssIHNldE9wZW5CYWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbkJhY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRPcGVuQmFjayh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQmFjayA9ICgpID0+IHtcclxuICAgIHNldE9wZW5CYWNrKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk5hdmlnYXRlQ29udmVydEludm9pY2UsIHNldExvYWRpbmdPcGVuTmF2aWdhdGVDb252ZXJ0SW52b2ljZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gICAgaWYgKGFkanVzdG1lbnROdW1iZXIgPiAwKSB7XHJcbiAgICAgIHNldExvYWRpbmdPcGVuTmF2aWdhdGVDb252ZXJ0SW52b2ljZSh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVjaXNpb24gPSAobmF2aWdhdGUpID0+IHtcclxuICAgIC8vTmF2aWdhdGUgQmFzZWQgb24gdGggRGVjaXNpb25cclxuICAgIGlmIChuYXZpZ2F0ZSA9PT0gJ3ByZXZpb3VzJykge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRlID09PSAnc3RheScpIHtcclxuICAgICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgW2lkUmVzLCBzZXRJZFJlc10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24gPSBhc3luYyAoUmVmZXJlbmNlSW5mbywgUmVmZXJlbmNlSW5mb051bWJlcikgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiBSZWZlcmVuY2VJbmZvLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgQ3JlYXRlZCAnLFxyXG4gICAgICByZWFzb246ICdNLScgKyBSZWZlcmVuY2VJbmZvTnVtYmVyICsgJyBGb3IgJyArIGN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUsXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHN0YXR1cyA9ICcnXHJcbiAgICBpZiAoYWRqdXN0bWVudE51bWJlciA+IDApIHtcclxuICAgICAgc3RhdHVzID0gJ0Nsb3NlJ1xyXG4gICAgfSBlbHNlIGlmIChhZGp1c3RtZW50TnVtYmVyID09PSAwKSB7XHJcbiAgICAgIHN0YXR1cyA9ICdPcGVuJ1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgY3VzdG9tZXJOYW1lLCBzZXJ2aWNlTnVtYmVyLCBzZXJ2aWNlRGF0ZSwgYWN0aW9uVGFrZW4sIHZpc2l0RGF0ZSwgaXRlbURlc2NyaXB0aW9uSW5mbyxcclxuICAgICAgd2FycmFudHksIGRlZmVjdERlc2NyaXB0aW9uLCB0ZWNobmljaWFuQXNzaWduLCBicmFuZCwgbW9kZWwsIHNlcnZpY2VOYW1lLCBhY3Rpb24sXHJcbiAgICAgIHNlcmlhbE5vLCBzdGF0dXMsIGl0ZW1zLCBhZGp1c3RtZW50TnVtYmVyLCBhZGp1c3RtZW50LCB0b3RhbEludm9pY2UsIHN1YlRvdGFsLFxyXG4gICAgICBub3RlLCB0b3RhbExhYm9yRmVlcywgbGFib3JQZXJjZW50YWdlLCB0b3RhbERpc2NvdW50LCBsYWJvckRpc2NvdW50LCBsYWJvclF0eSwgdG90YWxMYWJvckZlZXNHZW5lcmFsZVxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYXBpVXJsLCBkYXRhKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIC8vIE9wZW4gTG9hZGluZyBWaWV3XHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mbyA9IHJlcy5kYXRhLmRhdGEuX2lkXHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mb051bWJlciA9IHJlcy5kYXRhLmRhdGEuc2VydmljZU51bWJlclxyXG4gICAgICAgIGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbihSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyKVxyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgICBzZXRJZFJlcyhyZXMuZGF0YS5kYXRhLl9pZClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydCgnQW4gRXJyb3IgYXMgT2NjdXInKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGQgbmV3IE1haW50ZW5hbmNlXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlbkJhY2t9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBtYXJnaW5SaWdodDogJzEwcHgnIH19Pnt1c2VyLmRhdGEudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoMSAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogNCB9fSA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycsIHBvc2l0aW9uOiAnZml4ZWQnLCB6SW5kZXg6IDEsIGZsb2F0OiAncmlnaHQnLCByaWdodDogJy01cHgnLCB0b3A6ICc0MDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWRkIGNsYXNzTmFtZT0nYnRuMScgc3R5bGU9e3sgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW1XaGl0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JywgZm9udFNpemU6ICc0MHB4JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezF9IGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5Kb2IgQ2FyZCBJbmZvPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezl9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUgIT09ICcnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nQ1VzdG9tZXIgTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUgIT09IHVuZGVmaW5lZCA/IGN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJDdXN0b21lcn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17Y3VzdG9tZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLkN1c3RvbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2VDdXN0b21lcihuZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFwZXJDb21wb25lbnQ9eyh7IGNoaWxkcmVuLCAuLi5vdGhlciB9KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHsuLi5vdGhlcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBsZWZ0OiAnMCcsIG1hcmdpblRvcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUxKGUpfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ30gb25Nb3VzZURvd249eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI3JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIENVU1RPTUVSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJDdXN0b21lciBOYW1lXCIgcmVxdWlyZWQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJzZXJ2aWNlTnVtYmVyXCI+U2VydmljZSBPcmRlciBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZXJ2aWNlTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzZXJ2aWNlTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU2VydmljZSBPcmRlciBOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXJ2aWNlTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlcnZpY2VOdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5NPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc2VydmljZURhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1NlcnZpY2UgRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoc2VydmljZURhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0U2VydmljZURhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndmlzaXREYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdWaXNpdCBEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyh2aXNpdERhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0VmlzaXREYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkFwcGxpYW5jZSBJbmZvPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0naXRlbURlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0l0ZW0gRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbURlc2NyaXB0aW9uSW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SXRlbURlc2NyaXB0aW9uSW5mbyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdicmFuZCdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2JyYW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0JyYW5kJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCcmFuZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdtb2RlbCdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J21vZGVsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J01vZGVsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNb2RlbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZXJpYWxObydcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3NlcmlhbE5vJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1NlcmlhbCBObydcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZXJpYWxOb31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VyaWFsTm8oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2RlZmVjdERlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGVmZWN0RGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGVmZWN0IERlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RlZmVjdERlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZWZlY3REZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSd3YXJyYW50eSdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3dhcnJhbnR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1dhcnJhbnR5IFN0YXR1cydcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3YXJyYW50eX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0V2FycmFudHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5UZWNobmljaWFuIEFzc2lnbjwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlsdGVyRW1wbG95ZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLmVtcGxveWVlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+ICg8Qm94IHsuLi5wcm9wc30+e29wdGlvbi5lbXBsb3llZU5hbWV9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiVGVjaG5pY2lhblwiIHJlcXVpcmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlRW1wbG95ZWUobmV3VmFsdWUgPyBuZXdWYWx1ZSA6ICcnKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+QWN0aW9uIFRha2VuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJhY3Rpb25cIj5BY3Rpb248L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FjdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBY3Rpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJhY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJDYXJyeS1JblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkNhcnJ5LUluXCI+Q2FycnktSW48L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJJbi1Ib21lXCI+SW4tSG9tZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdhY3Rpb25UYWtlbidcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2FjdGlvblRha2VuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0FjdGlvbiBUYWtlbidcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17NX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthY3Rpb25UYWtlbn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWN0aW9uVGFrZW4oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nbm90ZSdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nTm90ZSdcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17NX1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+RmluYW5jZTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RhYmxlSW5mbzEwJyBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnLTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdG9jay1BPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlF1YW50aXR5PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGlzY291bnQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZHJvcHBhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKEl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUga2V5PXtJdGVtLmlkUm93fSBkcmFnZ2FibGVJZD17YGRyb3BwYWJsZSR7SXRlbS5pZFJvd31gfSBpbmRleD17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17NX0+PFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduZXdEZXNjcmlwdGlvbicgaWQ9J25ld0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5uZXdEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID48RHJhZ0luZGljYXRvclJvdW5kZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGhlaWdodDogJzEwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGhpZGRlbj17SXRlbS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPT09ICdlbXB0eScgOiAnJ30gc3g9e3sgZm9udFNpemU6ICcyM3B4JyB9fT57SXRlbS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgOiAnJ308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EZXNjcmlwdGlvbicgaWQ9J2l0ZW1EZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNDQwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTaG93QXV0b2NvbXBsZXRlKEl0ZW0uaWRSb3cpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZS5faWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJFZGl0XCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3Blbkl0ZW1VcGRhdGUoSXRlbS5pdGVtTmFtZS5faWQpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0IHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlsdGVySXRlbUluZm9ybWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uaXRlbU5hbWUgKyAnLycgKyBvcHRpb24uaXRlbUJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+ICg8Qm94IHsuLi5wcm9wc30gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI2YyZjJmMicgfX0+e29wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9IHsuLi5wYXJhbXN9IHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShuZXdJbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbnM9eyhvcHRpb25zLCB7IGlucHV0VmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbUJyYW5kLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBoYW5kbGVDaGFuZ2VJdGVtKEl0ZW0uaWRSb3csIG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNDcwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbihJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdG9jaycgaWQ9J3N0b2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLnN0b2NrfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUXR5JyBpZD0naXRlbVF0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVJhdGUnIGlkPSdpdGVtUmF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUmF0ZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURpc2NvdW50JyBpZD0naXRlbURpc2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EaXNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMSB0byA1ICUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD0nYW1vdW50VG90YWxJbnZvaWNlJz57SXRlbS5pdGVtQW1vdW50LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2FkanVzdG1lbnQnIGlkPSdhZGp1c3RtZW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGp1c3RtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZGp1c3RtZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nbGFib3JRdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2xhYm9yIFFUWSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2xhYm9yUXR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xhYm9yUXR5ICE9PSB1bmRlZmluZWQgPyBsYWJvclF0eSA6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExhYm9yUXR5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2FkanVzdG1lbnROdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2xhYm9yIGZlZXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhZGp1c3RtZW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZGp1c3RtZW50TnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbGFib3JEaXNjb3VudCcgaWQ9J2xhYm9yRGlzY291bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMYWJvckRpc2NvdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdEaXNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kPC9zcGFuPjxzcGFuPnt0b3RhbExhYm9yRmVlc0dlbmVyYWxlLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17M30+VG90YWwgR2VuZXJhbGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4+JDwvc3Bhbj48c3Bhbj57dG90YWxJbnZvaWNlLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkJhY2t9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VCYWNrfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkRvIHlvdSB3YW50IHRvIHN0b3AgY3JlYXRpbmcgc2VydmljZSA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGUgOjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiPiBJZiB5b3Ugc3RvcCBjcmVhdGluZyB3aXRob3V0IHNhdmluZywgYWxsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3Q8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9NYWludGVuYW5jZVZpZXdBZG1pbicpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlllczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+Tm88L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNpc2lvbignc3RheScpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQWRkIE5ld1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2lzaW9uKCdwcmV2aW91cycpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgR28gQmFja1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5OYXZpZ2F0ZUNvbnZlcnRJbnZvaWNlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzeD17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5EYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseSxEbyB5b3Ugd2FudCB0byBjb252ZXJ0IHRvIGFuIGludm9pY2UgPyA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZSA6PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCI+IFlvdSBzaG91bGQgY29udmVydCB0aGUgc2VydmljZSBvcmRlciB0byBpbnZvaWNlIHdoZW4gaXQgY2xvc2VkPC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3ByZXZpb3VzJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIExhdGVyXHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL01haW50ZW5hbmNlQ29udmVydFRvSW52b2ljZS8ke2lkUmVzfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+Q29udmVydCBUbyBJbnZvaWNlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17RXJyb3JPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VFcnJvcn1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2FuY2VsSWNvbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+U2F2aW5nIEZhaWxlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQXV0b2NvbXBsZXRlMX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnLCBwYWRkaW5nOiAnMjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgPEN1c3RvbWVyRm9ybVZpZXcyIG9uQ3JlYXRlT3B0aW9uPXtoYW5kbGVDcmVhdGVDdXN0b21lcn0gb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQXV0b2NvbXBsZXRlMn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZTIsIHdpZHRoOiA4MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnLCBwYWRkaW5nOiAnMjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgPEl0ZW1Gb3JtVmlldzIgb25DcmVhdGVPcHRpb249e2hhbmRsZUNyZWF0ZUl0ZW19IG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbkl0ZW1VcGRhdGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VVcGRhdGVJdGVtMX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUyLCB3aWR0aDogODAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VVcGRhdGVJdGVtMX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzYwMHB4JywgcGFkZGluZzogJzIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgIDxJdGVtVXBkYXRlVmlldzIgb25DbG9zZT17aGFuZGxlQ2xvc2VJdGVtVXBkYXRlfSBpZD17aWRJdGVtfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW50ZW5hbmNlRm9ybUNsb25lXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9jc3MvU2lkZWJhck5ldy5zY3NzJ1xyXG5pbXBvcnQgeyBPdXRsZXQsIE5hdkxpbmssIExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IERhc2hib2FyZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgUGVybUlkZW50aXR5SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Blcm1JZGVudGl0eSc7XHJcbmltcG9ydCBMaXN0QWx0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xpc3RBbHQnO1xyXG5pbXBvcnQgRGVzY3JpcHRpb25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVzY3JpcHRpb24nO1xyXG5pbXBvcnQgUmVjZWlwdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZWNlaXB0JztcclxuaW1wb3J0IE1vdmluZ0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3ZpbmcnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3MnO1xyXG5pbXBvcnQgSW5zZXJ0RHJpdmVGaWxlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0luc2VydERyaXZlRmlsZSc7XHJcbmltcG9ydCBSZXN0b3JlUGFnZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZXN0b3JlUGFnZSc7XHJcbmltcG9ydCBSZXF1ZXN0UXVvdGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUmVxdWVzdFF1b3RlJztcclxuaW1wb3J0IE1vbmV0aXphdGlvbk9uSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vbmV0aXphdGlvbk9uJztcclxuaW1wb3J0IEVuZ2luZWVyaW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VuZ2luZWVyaW5nJztcclxuaW1wb3J0IHsgRXhwbGljaXQsIFNob3BwaW5nQmFnT3V0bGluZWQgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IFJvb21QcmVmZXJlbmNlc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Sb29tUHJlZmVyZW5jZXMnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbUJ1dHRvbiwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQsIG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFBheW1lbnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGF5bWVudCc7XHJcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3JlVmVydCc7XHJcbmZ1bmN0aW9uIFNpZGViYXJEYXNoMSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8RGFzaGJvYXJkSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhc2hib2FyZFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UGVybUlkZW50aXR5SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkN1c3RvbWVyXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPExpc3RBbHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiU3RvcmVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJlcXVlc3RRdW90ZUljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJRdW90YXRpb25cIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxEZXNjcmlwdGlvbkljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJJbnZvaWNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TW9uZXRpemF0aW9uT25JY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUGF5bWVudFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFNob3BwaW5nQmFnT3V0bGluZWQgLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEYWlseSBFeHBlbnNlc1wiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ICA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxSb29tUHJlZmVyZW5jZXNJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHJvamVjdFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJlY2VpcHRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHVyY2hhc2VzIFJlcXVlc3RcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgPEVuZ2luZWVyaW5nSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk1haW50ZW5hbmNlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTW9yZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJEYXNoMSIsIid1c2Ugc3RyaWN0JzsgXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHRvT3JkaW5hbDogcmVxdWlyZSgnLi90b09yZGluYWwnKSxcbiAgICB0b1dvcmRzOiByZXF1aXJlKCcuL3RvV29yZHMnKSxcbiAgICB0b1dvcmRzT3JkaW5hbDogcmVxdWlyZSgnLi90b1dvcmRzT3JkaW5hbCcpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBTaW1wbGlmaWVkIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL21hcmx1bjc4Lzg4NWViMDAyMWU5ODBjNmNlMGZiXG5mdW5jdGlvbiBpc0Zpbml0ZSh2YWx1ZSkge1xuICAgIHJldHVybiAhKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgfHwgdmFsdWUgIT09IHZhbHVlIHx8IHZhbHVlID09PSBJbmZpbml0eSB8fCB2YWx1ZSA9PT0gLUluZmluaXR5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Zpbml0ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSByZXF1aXJlKCcuL21heFNhZmVJbnRlZ2VyJyk7XG5cbmZ1bmN0aW9uIGlzU2FmZU51bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE1hdGguYWJzKHZhbHVlKSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2FmZU51bWJlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEVORFNfV0lUSF9ET1VCTEVfWkVST19QQVRURVJOID0gLyhodW5kcmVkfHRob3VzYW5kfChtfGJ8dHJ8cXVhZHIpaWxsaW9uKSQvO1xudmFyIEVORFNfV0lUSF9URUVOX1BBVFRFUk4gPSAvdGVlbiQvO1xudmFyIEVORFNfV0lUSF9ZX1BBVFRFUk4gPSAveSQvO1xudmFyIEVORFNfV0lUSF9aRVJPX1RIUk9VR0hfVFdFTFZFX1BBVFRFUk4gPSAvKHplcm98b25lfHR3b3x0aHJlZXxmb3VyfGZpdmV8c2l4fHNldmVufGVpZ2h0fG5pbmV8dGVufGVsZXZlbnx0d2VsdmUpJC87XG52YXIgb3JkaW5hbExlc3NUaGFuVGhpcnRlZW4gPSB7XG4gICAgemVybzogJ3plcm90aCcsXG4gICAgb25lOiAnZmlyc3QnLFxuICAgIHR3bzogJ3NlY29uZCcsXG4gICAgdGhyZWU6ICd0aGlyZCcsXG4gICAgZm91cjogJ2ZvdXJ0aCcsXG4gICAgZml2ZTogJ2ZpZnRoJyxcbiAgICBzaXg6ICdzaXh0aCcsXG4gICAgc2V2ZW46ICdzZXZlbnRoJyxcbiAgICBlaWdodDogJ2VpZ2h0aCcsXG4gICAgbmluZTogJ25pbnRoJyxcbiAgICB0ZW46ICd0ZW50aCcsXG4gICAgZWxldmVuOiAnZWxldmVudGgnLFxuICAgIHR3ZWx2ZTogJ3R3ZWxmdGgnXG59O1xuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyLXdvcmQgaW50byBhbiBvcmRpbmFsIG51bWJlci13b3JkLlxuICogQGV4YW1wbGUgbWFrZU9yZGluYWwoJ29uZScpID0+ICdmaXJzdCdcbiAqIEBwYXJhbSB7c3RyaW5nfSB3b3Jkc1xuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gbWFrZU9yZGluYWwod29yZHMpIHtcbiAgICAvLyBFbmRzIHdpdGggKjAwICgxMDAsIDEwMDAsIGV0Yy4pIG9yICp0ZWVuICgxMywgMTQsIDE1LCAxNiwgMTcsIDE4LCAxOSlcbiAgICBpZiAoRU5EU19XSVRIX0RPVUJMRV9aRVJPX1BBVFRFUk4udGVzdCh3b3JkcykgfHwgRU5EU19XSVRIX1RFRU5fUEFUVEVSTi50ZXN0KHdvcmRzKSkge1xuICAgICAgICByZXR1cm4gd29yZHMgKyAndGgnO1xuICAgIH1cbiAgICAvLyBFbmRzIHdpdGggKnkgKDIwLCAzMCwgNDAsIDUwLCA2MCwgNzAsIDgwLCA5MClcbiAgICBlbHNlIGlmIChFTkRTX1dJVEhfWV9QQVRURVJOLnRlc3Qod29yZHMpKSB7XG4gICAgICAgIHJldHVybiB3b3Jkcy5yZXBsYWNlKEVORFNfV0lUSF9ZX1BBVFRFUk4sICdpZXRoJyk7XG4gICAgfVxuICAgIC8vIEVuZHMgd2l0aCBvbmUgdGhyb3VnaCB0d2VsdmVcbiAgICBlbHNlIGlmIChFTkRTX1dJVEhfWkVST19USFJPVUdIX1RXRUxWRV9QQVRURVJOLnRlc3Qod29yZHMpKSB7XG4gICAgICAgIHJldHVybiB3b3Jkcy5yZXBsYWNlKEVORFNfV0lUSF9aRVJPX1RIUk9VR0hfVFdFTFZFX1BBVFRFUk4sIHJlcGxhY2VXaXRoT3JkaW5hbFZhcmlhbnQpO1xuICAgIH1cbiAgICByZXR1cm4gd29yZHM7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VXaXRoT3JkaW5hbFZhcmlhbnQobWF0Y2gsIG51bWJlcldvcmQpIHtcbiAgICByZXR1cm4gb3JkaW5hbExlc3NUaGFuVGhpcnRlZW5bbnVtYmVyV29yZF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFrZU9yZGluYWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxubW9kdWxlLmV4cG9ydHMgPSBNQVhfU0FGRV9JTlRFR0VSO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNGaW5pdGUgPSByZXF1aXJlKCcuL2lzRmluaXRlJyk7XG52YXIgaXNTYWZlTnVtYmVyID0gcmVxdWlyZSgnLi9pc1NhZmVOdW1iZXInKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBpbnRlZ2VyIGludG8gYSBzdHJpbmcgd2l0aCBhbiBvcmRpbmFsIHBvc3RmaXguXG4gKiBJZiBudW1iZXIgaXMgZGVjaW1hbCwgdGhlIGRlY2ltYWxzIHdpbGwgYmUgcmVtb3ZlZC5cbiAqIEBleGFtcGxlIHRvT3JkaW5hbCgxMikgPT4gJzEydGgnXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9PcmRpbmFsKG51bWJlcikge1xuICAgIHZhciBudW0gPSBwYXJzZUludChudW1iZXIsIDEwKTtcblxuICAgIGlmICghaXNGaW5pdGUobnVtKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ05vdCBhIGZpbml0ZSBudW1iZXI6ICcgKyBudW1iZXIgKyAnICgnICsgdHlwZW9mIG51bWJlciArICcpJ1xuICAgICAgICApO1xuICAgIH1cbiAgICBpZiAoIWlzU2FmZU51bWJlcihudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgICAgJ0lucHV0IGlzIG5vdCBhIHNhZmUgbnVtYmVyLCBpdOKAmXMgZWl0aGVyIHRvbyBsYXJnZSBvciB0b28gc21hbGwuJ1xuICAgICAgICApO1xuICAgIH1cbiAgICB2YXIgc3RyID0gU3RyaW5nKG51bSk7XG4gICAgdmFyIGxhc3RUd29EaWdpdHMgPSBNYXRoLmFicyhudW0gJSAxMDApO1xuICAgIHZhciBiZXR3ZWVuRWxldmVuQW5kVGhpcnRlZW4gPSBsYXN0VHdvRGlnaXRzID49IDExICYmIGxhc3RUd29EaWdpdHMgPD0gMTM7XG4gICAgdmFyIGxhc3RDaGFyID0gc3RyLmNoYXJBdChzdHIubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIHN0ciArIChiZXR3ZWVuRWxldmVuQW5kVGhpcnRlZW4gPyAndGgnXG4gICAgICAgICAgICA6IGxhc3RDaGFyID09PSAnMScgPyAnc3QnXG4gICAgICAgICAgICA6IGxhc3RDaGFyID09PSAnMicgPyAnbmQnXG4gICAgICAgICAgICA6IGxhc3RDaGFyID09PSAnMycgPyAncmQnXG4gICAgICAgICAgICA6ICd0aCcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvT3JkaW5hbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1ha2VPcmRpbmFsID0gcmVxdWlyZSgnLi9tYWtlT3JkaW5hbCcpO1xudmFyIGlzRmluaXRlID0gcmVxdWlyZSgnLi9pc0Zpbml0ZScpO1xudmFyIGlzU2FmZU51bWJlciA9IHJlcXVpcmUoJy4vaXNTYWZlTnVtYmVyJyk7XG5cbnZhciBURU4gPSAxMDtcbnZhciBPTkVfSFVORFJFRCA9IDEwMDtcbnZhciBPTkVfVEhPVVNBTkQgPSAxMDAwO1xudmFyIE9ORV9NSUxMSU9OID0gMTAwMDAwMDtcbnZhciBPTkVfQklMTElPTiA9IDEwMDAwMDAwMDA7ICAgICAgICAgICAvLyAgICAgICAgIDEuMDAwLjAwMC4wMDAgKDkpXG52YXIgT05FX1RSSUxMSU9OID0gMTAwMDAwMDAwMDAwMDsgICAgICAgLy8gICAgIDEuMDAwLjAwMC4wMDAuMDAwICgxMilcbnZhciBPTkVfUVVBRFJJTExJT04gPSAxMDAwMDAwMDAwMDAwMDAwOyAvLyAxLjAwMC4wMDAuMDAwLjAwMC4wMDAgKDE1KVxudmFyIE1BWCA9IDkwMDcxOTkyNTQ3NDA5OTI7ICAgICAgICAgICAgIC8vIDkuMDA3LjE5OS4yNTQuNzQwLjk5MiAoMTUpXG5cbnZhciBMRVNTX1RIQU5fVFdFTlRZID0gW1xuICAgICd6ZXJvJywgJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCcsICdzZXZlbicsICdlaWdodCcsICduaW5lJywgJ3RlbicsXG4gICAgJ2VsZXZlbicsICd0d2VsdmUnLCAndGhpcnRlZW4nLCAnZm91cnRlZW4nLCAnZmlmdGVlbicsICdzaXh0ZWVuJywgJ3NldmVudGVlbicsICdlaWdodGVlbicsICduaW5ldGVlbidcbl07XG5cbnZhciBURU5USFNfTEVTU19USEFOX0hVTkRSRUQgPSBbXG4gICAgJ3plcm8nLCAndGVuJywgJ3R3ZW50eScsICd0aGlydHknLCAnZm9ydHknLCAnZmlmdHknLCAnc2l4dHknLCAnc2V2ZW50eScsICdlaWdodHknLCAnbmluZXR5J1xuXTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBpbnRlZ2VyIGludG8gd29yZHMuXG4gKiBJZiBudW1iZXIgaXMgZGVjaW1hbCwgdGhlIGRlY2ltYWxzIHdpbGwgYmUgcmVtb3ZlZC5cbiAqIEBleGFtcGxlIHRvV29yZHMoMTIpID0+ICd0d2VsdmUnXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlclxuICogQHBhcmFtIHtib29sZWFufSBbYXNPcmRpbmFsXSAtIERlcHJlY2F0ZWQsIHVzZSB0b1dvcmRzT3JkaW5hbCgpIGluc3RlYWQhXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b1dvcmRzKG51bWJlciwgYXNPcmRpbmFsKSB7XG4gICAgdmFyIHdvcmRzO1xuICAgIHZhciBudW0gPSBwYXJzZUludChudW1iZXIsIDEwKTtcblxuICAgIGlmICghaXNGaW5pdGUobnVtKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgJ05vdCBhIGZpbml0ZSBudW1iZXI6ICcgKyBudW1iZXIgKyAnICgnICsgdHlwZW9mIG51bWJlciArICcpJ1xuICAgICAgICApO1xuICAgIH1cbiAgICBpZiAoIWlzU2FmZU51bWJlcihudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFxuICAgICAgICAgICAgJ0lucHV0IGlzIG5vdCBhIHNhZmUgbnVtYmVyLCBpdOKAmXMgZWl0aGVyIHRvbyBsYXJnZSBvciB0b28gc21hbGwuJ1xuICAgICAgICApO1xuICAgIH1cbiAgICB3b3JkcyA9IGdlbmVyYXRlV29yZHMobnVtKTtcbiAgICByZXR1cm4gYXNPcmRpbmFsID8gbWFrZU9yZGluYWwod29yZHMpIDogd29yZHM7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlV29yZHMobnVtYmVyKSB7XG4gICAgdmFyIHJlbWFpbmRlciwgd29yZCxcbiAgICAgICAgd29yZHMgPSBhcmd1bWVudHNbMV07XG5cbiAgICAvLyBXZeKAmXJlIGRvbmVcbiAgICBpZiAobnVtYmVyID09PSAwKSB7XG4gICAgICAgIHJldHVybiAhd29yZHMgPyAnemVybycgOiB3b3Jkcy5qb2luKCcgJykucmVwbGFjZSgvLCQvLCAnJyk7XG4gICAgfVxuICAgIC8vIEZpcnN0IHJ1blxuICAgIGlmICghd29yZHMpIHtcbiAgICAgICAgd29yZHMgPSBbXTtcbiAgICB9XG4gICAgLy8gSWYgbmVnYXRpdmUsIHByZXBlbmQg4oCcbWludXPigJ1cbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgICB3b3Jkcy5wdXNoKCdtaW51cycpO1xuICAgICAgICBudW1iZXIgPSBNYXRoLmFicyhudW1iZXIpO1xuICAgIH1cblxuICAgIGlmIChudW1iZXIgPCAyMCkge1xuICAgICAgICByZW1haW5kZXIgPSAwO1xuICAgICAgICB3b3JkID0gTEVTU19USEFOX1RXRU5UWVtudW1iZXJdO1xuXG4gICAgfSBlbHNlIGlmIChudW1iZXIgPCBPTkVfSFVORFJFRCkge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBURU47XG4gICAgICAgIHdvcmQgPSBURU5USFNfTEVTU19USEFOX0hVTkRSRURbTWF0aC5mbG9vcihudW1iZXIgLyBURU4pXTtcbiAgICAgICAgLy8gSW4gY2FzZSBvZiByZW1haW5kZXIsIHdlIG5lZWQgdG8gaGFuZGxlIGl0IGhlcmUgdG8gYmUgYWJsZSB0byBhZGQgdGhlIOKAnC3igJ1cbiAgICAgICAgaWYgKHJlbWFpbmRlcikge1xuICAgICAgICAgICAgd29yZCArPSAnLScgKyBMRVNTX1RIQU5fVFdFTlRZW3JlbWFpbmRlcl07XG4gICAgICAgICAgICByZW1haW5kZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9USE9VU0FORCkge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfSFVORFJFRDtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfSFVORFJFRCkpICsgJyBodW5kcmVkJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX01JTExJT04pIHtcbiAgICAgICAgcmVtYWluZGVyID0gbnVtYmVyICUgT05FX1RIT1VTQU5EO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9USE9VU0FORCkpICsgJyB0aG91c2FuZCwnO1xuXG4gICAgfSBlbHNlIGlmIChudW1iZXIgPCBPTkVfQklMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfTUlMTElPTjtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfTUlMTElPTikpICsgJyBtaWxsaW9uLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9UUklMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfQklMTElPTjtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfQklMTElPTikpICsgJyBiaWxsaW9uLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9RVUFEUklMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfVFJJTExJT047XG4gICAgICAgIHdvcmQgPSBnZW5lcmF0ZVdvcmRzKE1hdGguZmxvb3IobnVtYmVyIC8gT05FX1RSSUxMSU9OKSkgKyAnIHRyaWxsaW9uLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8PSBNQVgpIHtcbiAgICAgICAgcmVtYWluZGVyID0gbnVtYmVyICUgT05FX1FVQURSSUxMSU9OO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9RVUFEUklMTElPTikpICtcbiAgICAgICAgJyBxdWFkcmlsbGlvbiwnO1xuICAgIH1cblxuICAgIHdvcmRzLnB1c2god29yZCk7XG4gICAgcmV0dXJuIGdlbmVyYXRlV29yZHMocmVtYWluZGVyLCB3b3Jkcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Xb3JkcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1ha2VPcmRpbmFsID0gcmVxdWlyZSgnLi9tYWtlT3JkaW5hbCcpO1xudmFyIHRvV29yZHMgPSByZXF1aXJlKCcuL3RvV29yZHMnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIG51bWJlciBpbnRvIG9yZGluYWwgd29yZHMuXG4gKiBAZXhhbXBsZSB0b1dvcmRzT3JkaW5hbCgxMikgPT4gJ3R3ZWxmdGgnXG4gKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9Xb3Jkc09yZGluYWwobnVtYmVyKSB7XG4gICAgdmFyIHdvcmRzID0gdG9Xb3JkcyhudW1iZXIpO1xuICAgIHJldHVybiBtYWtlT3JkaW5hbCh3b3Jkcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Xb3Jkc09yZGluYWw7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXJEYXNoMSIsIlNlYXJjaEljb24iLCJOb3RpZmljYXRpb25zTm9uZUljb24iLCJEZWxldGVJY29uIiwiTWVudUl0ZW0iLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIlBhcGVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsInN0eWxlZCIsIkJveCIsIkF1dG9jb21wbGV0ZSIsIk1vZGFsIiwiQmFja2Ryb3AiLCJUYWJsZUNvbnRhaW5lciIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIkRpdmlkZXIiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJDb250YWluZXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJBZGQiLCJBcnJvd1Vwd2FyZE91dGxpbmVkIiwiRHJhZ0luZGljYXRvclJvdW5kZWQiLCJFZGl0IiwiUmVtb3ZlQ2lyY2xlT3V0bGluZSIsInY0IiwiTmF2TGluayIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsIkFycm93QmFjayIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2FkZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiZGF5anMiLCJDdXN0b21lckZvcm1WaWV3MiIsIkNsb3NlIiwiSXRlbUZvcm1WaWV3MiIsIkl0ZW1VcGRhdGVWaWV3MiIsIm51bWJlclRvV29yZHMiLCJEcmFnRHJvcENvbnRleHQiLCJEcmFnZ2FibGUiLCJEcm9wcGFibGUiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJMaWdodFRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIkJsYWNrVG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiVmlld1Rvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwic3R5bGUyIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNyIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmOCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIk1haW50ZW5hbmNlRm9ybUNsb25lIiwiX3VzZVBhcmFtcyIsImlkIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjkiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsImFwaVVybCIsIl91c2VTdGF0ZSIsImRhdGUiLCJEYXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2VydmljZURhdGUiLCJzZXRTZXJ2aWNlRGF0ZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwidmlzaXREYXRlIiwic2V0VmlzaXREYXRlIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJpdGVtRGVzY3JpcHRpb25JbmZvIiwic2V0SXRlbURlc2NyaXB0aW9uSW5mbyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiYnJhbmQiLCJzZXRCcmFuZCIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwibW9kZWwiLCJzZXRNb2RlbCIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsIndhcnJhbnR5Iiwic2V0V2FycmFudHkiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsImFkanVzdG1lbnQiLCJzZXRBZGp1c3RtZW50IiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsImFkanVzdG1lbnROdW1iZXIiLCJzZXRBZGp1c3RtZW50TnVtYmVyIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsImxhYm9yUXR5Iiwic2V0TGFib3JRdHkiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwibGFib3JEaXNjb3VudCIsInNldExhYm9yRGlzY291bnQiLCJ0b3RhbExhYm9yRmVlcyIsInRvdGFsRGlzY291bnQiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJsYWJvclBlcmNlbnRhZ2UiLCJ0b3RhbExhYm9yRmVlc0dlbmVyYWxlIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsImRlZmVjdERlc2NyaXB0aW9uIiwic2V0RGVmZWN0RGVzY3JpcHRpb24iLCJfdXNlU3RhdGUyMyIsIl91c2VTdGF0ZTI0IiwiYWN0aW9uVGFrZW4iLCJzZXRBY3Rpb25UYWtlbiIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJub3RlIiwic2V0Tm90ZSIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJzZXJpYWxObyIsInNldFNlcmlhbE5vIiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsIml0ZW1zIiwiU2V0SXRlbXMiLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwic3ViVG90YWwiLCJzZXRTdWJUb3RhbCIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJ0b3RhbEludm9pY2UiLCJzZXRUb3RhbEludm9pY2UiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2Iiwic2VydmljZU51bWJlciIsInNldFNlcnZpY2VOdW1iZXIiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJjdXN0b21lck5hbWUiLCJzZXRDdXN0b21lck5hbWUiLCJmZXRjaERhdGEiLCJfcmVmMCIsIl9yZXMkZGF0YSIsIl9yZXMkZGF0YTIiLCJOdW1iZXIiLCJtYXAiLCJyb3ciLCJpdGVtT3V0IiwiZmV0Y2hsYXN0TnVtYmVyIiwiX3JlZjEiLCJfcmVzJGRhdGEzIiwiX3JlcyRkYXRhNCIsInBhcnNlSW50IiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsIkl0ZW1JbmZvcm1hdGlvbiIsInNldEl0ZW1JbmZvcm1hdGlvbiIsIl91c2VTdGF0ZTQzIiwiX3VzZVN0YXRlNDQiLCJ0ZWNobmljaWFuQXNzaWduIiwic2V0VGVjaG5pY2lhbkFzc2lnbiIsInNlcnZpY2VOYW1lIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaGFuZGxlQ2hhbmdlQ3VzdG9tZXIiLCJuZXdWYWx1ZSIsInNlbGVjdGVkT3B0aW9ucyIsImZpbmQiLCJvcHRpb24iLCJfaWQiLCJDdXN0b21lciIsImFkZHJlc3MiLCJiaWxsaW5nQWRkcmVzcyIsImJpbGxpbmdDaXR5IiwicGhvbmUiLCJjdXN0b21lckNvbXBhbnlQaG9uZSIsImhhbmRsZUNsZWFyQ3VzdG9tZXIiLCJDcmVhdGUiLCJub3ciLCJmb3JtYXQiLCJmZXRjaEN1c3RvbWVyIiwiX3JlZjEwIiwicmV2ZXJzZSIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJvcGVuQXV0b2NvbXBsZXRlMSIsInNldE9wZW5BdXRvY29tcGxldGUxIiwiaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUxIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTEiLCJoYW5kbGVDcmVhdGVDdXN0b21lciIsIm5ld0N1c3RvbWVyIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsImVtcGxveWVlIiwic2V0RW1wbG95ZWUiLCJmZXRjaEVtcGxveWVlIiwiX3JlZjExIiwiZmlsdGVyRW1wbG95ZWUiLCJmaWx0ZXIiLCJkZXBhcnRtZW50Iiwic3RhdHVzIiwiaGFuZGxlQ2hhbmdlRW1wbG95ZWUiLCJmZXRjaEl0ZW0iLCJfcmVmMTIiLCJoYW5kbGVDaGFuZ2VJdGVtIiwiaWRSb3ciLCJpdGVtTmFtZSIsIml0ZW1Db3N0IiwiaXRlbUNvc3RQcmljZSIsIml0ZW1EZXNjcmlwdGlvbiIsIml0ZW1SYXRlIiwiaXRlbVNlbGxpbmdQcmljZSIsInN0b2NrIiwiaXRlbVF1YW50aXR5IiwiaGFuZGxlQ2hhbmdlIiwiaSIsIl9lJHRhcmdldCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImxpc3QiLCJNYXRoIiwicm91bmQiLCJhZGRJdGVtIiwibmV3SXRlbSIsIml0ZW1EaXNjb3VudCIsIml0ZW1RdHkiLCJpdGVtQW1vdW50IiwidG90YWxBbW91bnQiLCJkaXNjb3VudCIsInBlcmNlbnRhZ2UiLCJpdGVtQnV5IiwiaXRlbVdlaWdodCIsInRvdGFsR2VuZXJhbGUiLCJ0b3RhbENvc3QiLCJuZXdJdGVtT3V0IiwiYWRkSXRlbVdoaXRlIiwibmV3RGVzY3JpcHRpb24iLCJoYW5kbGVEcmFnRW5kIiwicmVzdWx0IiwiZGVzdGluYXRpb24iLCJuZXdJdGVtcyIsIl9uZXdJdGVtcyRzcGxpY2UiLCJzcGxpY2UiLCJzb3VyY2UiLCJpbmRleCIsIl9uZXdJdGVtcyRzcGxpY2UyIiwicmVtb3ZlZCIsImRlbGV0ZUl0ZW0iLCJJdGVtIiwiZmlsdGVySXRlbUluZm9ybWF0aW9uIiwiX3JvdyRpdGVtTmFtZSIsInR5cGVJdGVtIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsIm9wZW5BdXRvY29tcGxldGUyIiwic2V0T3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyIiwiaGFuZGxlQ3JlYXRlSXRlbSIsImhhbmRsZVNob3dBdXRvY29tcGxldGUiLCJoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24iLCJyZXN1bHQxIiwicmVkdWNlIiwic3VtIiwidG9GaXhlZCIsIm5ld1RvdGFsIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsIm9wZW5JdGVtVXBkYXRlIiwic2V0T3Blbkl0ZW1VcGRhdGUiLCJfdXNlU3RhdGU1MyIsIl91c2VTdGF0ZTU0IiwiaWRJdGVtIiwic2V0SWRJdGVtIiwiaGFuZGxlT3Blbkl0ZW1VcGRhdGUiLCJfcmVmMTMiLCJfeCIsImhhbmRsZUNsb3NlVXBkYXRlSXRlbTEiLCJoYW5kbGVDbG9zZUl0ZW1VcGRhdGUiLCJfcmVmMTQiLCJfcm93JGl0ZW1OYW1lMiIsIl91c2VTdGF0ZTU1IiwiX3VzZVN0YXRlNTYiLCJvcGVuQmFjayIsInNldE9wZW5CYWNrIiwiaGFuZGxlT3BlbkJhY2siLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsb3NlQmFjayIsIl91c2VTdGF0ZTU3IiwiX3VzZVN0YXRlNTgiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTU5IiwiX3VzZVN0YXRlNjAiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTYxIiwiX3VzZVN0YXRlNjIiLCJsb2FkaW5nT3Blbk5hdmlnYXRlQ29udmVydEludm9pY2UiLCJzZXRMb2FkaW5nT3Blbk5hdmlnYXRlQ29udmVydEludm9pY2UiLCJfdXNlU3RhdGU2MyIsIl91c2VTdGF0ZTY0IiwiRXJyb3JPcGVuTW9kYWwiLCJzZXRFcnJvck9wZW5Nb2RhbCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVDbG9zZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlQ2xvc2VFcnJvciIsImhhbmRsZURlY2lzaW9uIiwiaGlzdG9yeSIsImJhY2siLCJfdXNlU3RhdGU2NSIsIl91c2VTdGF0ZTY2IiwiaWRSZXMiLCJzZXRJZFJlcyIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWYxNSIsIlJlZmVyZW5jZUluZm8iLCJSZWZlcmVuY2VJbmZvTnVtYmVyIiwiaWRJbmZvIiwicGVyc29uIiwicmVhc29uIiwiZGF0ZU5vdGlmaWNhdGlvbiIsInBvc3QiLCJsb2ciLCJfeDIiLCJfeDMiLCJoYW5kbGVTdWJtaXQiLCJfcmVmMTYiLCJhbGVydCIsIl94NCIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJfUmVhY3QkdXNlU3RhdGU0Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJvblN1Ym1pdCIsImZsb2F0IiwicmlnaHQiLCJ0aXRsZSIsInBsYWNlbWVudCIsImNvbnRhaW5lciIsInBhZGRpbmciLCJpdGVtIiwieHMiLCJ0ZXh0QWxpZ24iLCJkaXNhYmxlZCIsInVuZGVmaW5lZCIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIm9uQ2hhbmdlIiwiUGFwZXJDb21wb25lbnQiLCJfcmVmMTciLCJjaGlsZHJlbiIsIm90aGVyIiwiX2V4Y2x1ZGVkNCIsIm1hcmdpblRvcCIsIm9uTW91c2VEb3duIiwicmVuZGVySW5wdXQiLCJwYXJhbXMiLCJsYWJlbCIsInJlcXVpcmVkIiwiaHRtbEZvciIsInR5cGUiLCJzdGFydEFkb3JubWVudCIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsImRpc2FibGVDbGVhcmFibGUiLCJyZW5kZXJPcHRpb24iLCJkZWZhdWx0VmFsdWUiLCJtdWx0aWxpbmUiLCJyb3dzIiwib25EcmFnRW5kIiwiZHJvcHBhYmxlSWQiLCJwcm92aWRlZCIsInNuYXBzaG90IiwiZHJvcHBhYmxlUHJvcHMiLCJyZWYiLCJpbm5lclJlZiIsImtleSIsImRyYWdnYWJsZUlkIiwiZHJhZ2dhYmxlUHJvcHMiLCJGcmFnbWVudCIsImRyYWdIYW5kbGVQcm9wcyIsImNvbFNwYW4iLCJzaXplIiwiY3Vyc29yIiwiaGlkZGVuIiwiaXRlbUJyYW5kIiwib25JbnB1dENoYW5nZSIsImV2ZW50IiwibmV3SW5wdXRWYWx1ZSIsImZpbHRlck9wdGlvbnMiLCJfcmVmMTgiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiX3JlZjE5IiwiX2V4Y2x1ZGVkNSIsInBsYWNlaG9sZGVyIiwicmVwbGFjZSIsIm9uQ2xvc2UiLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJnYXAiLCJ0byIsIm92ZXJmbG93WSIsIm9uQ3JlYXRlT3B0aW9uIiwiT3V0bGV0IiwiTGluayIsInVzZUxvY2F0aW9uIiwiRGFzaGJvYXJkSWNvbiIsIlBlcm1JZGVudGl0eUljb24iLCJMaXN0QWx0SWNvbiIsIkRlc2NyaXB0aW9uSWNvbiIsIlJlY2VpcHRJY29uIiwiTW92aW5nSWNvbiIsIlNldHRpbmdzSWNvbiIsIkluc2VydERyaXZlRmlsZUljb24iLCJSZXN0b3JlUGFnZUljb24iLCJSZXF1ZXN0UXVvdGVJY29uIiwiTW9uZXRpemF0aW9uT25JY29uIiwiRW5naW5lZXJpbmdJY29uIiwiRXhwbGljaXQiLCJTaG9wcGluZ0JhZ091dGxpbmVkIiwiUm9vbVByZWZlcmVuY2VzSWNvbiIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwibWFrZVN0eWxlcyIsIlBheW1lbnRJY29uIiwiTW9yZVZlcnRJY29uIiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=