"use strict";
exports.id = "src_js_AdminView1_PageView_PurchasesView_ConvertToInvoice_js";
exports.ids = ["src_js_AdminView1_PageView_PurchasesView_ConvertToInvoice_js"];
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

/***/ "./src/js/AdminView1/PageView/PurchasesView/ConvertToInvoice.js"
/*!**********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/PurchasesView/ConvertToInvoice.js ***!
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var _component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../../../component/ItemThumbnail */ "./src/js/component/ItemThumbnail.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["children"],
  _excluded5 = ["children"];
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
var DownTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref5 => {
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
function ConvertToInvoice() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_39__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_39__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_47__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_47__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    if (storesUserId) {
      axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId)).then(res => {
        // Handle the response data here
        var Name = res.data.data.employeeName;
        var Role = res.data.data.role;
        dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__.setUser)({
          userName: Name,
          role: Role
        }));
      }).catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
        dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__.logOut)());
      });
    } else {
      console.log('no id');
      navigate('/');
    }
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__.logOut)());
    navigate('/');
  };
  var apiUrl = "".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/create-invoice");
  var invoiceDate = dayjs__WEBPACK_IMPORTED_MODULE_45___default()(Date.now());
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    invoiceDueDate = _useState2[0],
    setInvoiceDueDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    invoiceSubject = _useState4[0],
    setInvoiceSubject = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    projectId = _useState6[0],
    setProjectID = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    invoiceDefect = _useState8[0],
    setInvoiceDefect = _useState8[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue = _React$useState2[0],
    setInputValue = _React$useState2[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    invoiceNumber = _useState0[0],
    setInvoiceNumber = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    items = _useState10[0],
    SetItems = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    purchaseName = _useState12[0],
    setPurchaseName = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    subTotal = _useState14[0],
    setSubTotal = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    total = _useState16[0],
    setTotal = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    shipping = _useState18[0],
    setShipping = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Adjustment'),
    _useState20 = _slicedToArray(_useState19, 2),
    adjustment = _useState20[0],
    setAdjustment = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    adjustmentNumber = _useState22[0],
    setAdjustmentNumber = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    totalInvoice = _useState24[0],
    setTotalInvoice = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    balanceDue = _useState26[0],
    setBalanceDue = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState28 = _slicedToArray(_useState27, 2),
    totalW = _useState28[0],
    setTotalW = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState30 = _slicedToArray(_useState29, 2),
    ItemInformation = _useState30[0],
    setItemInformation = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Thanks For your Business."),
    _useState32 = _slicedToArray(_useState31, 2),
    note = _useState32[0],
    setNote = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("ESTIMATES ARE FOR LABOR AND ADDITIONAL MATERIAL ONLY, MATERIALS SOLD ARE NEITHER TAKEN BACK OR EXCHANGED WE WILL NOT BE RESPONSIBLE FOR LOSS OR DAMAGE CAUSED BY FIRE, THEFT, TESTING, DEFECTED PARE PARTS, OR ANY OTHER CAUSE BEYOND OUR CONTROL. "),
    _useState34 = _slicedToArray(_useState33, 2),
    terms = _useState34[0],
    setTerms = _useState34[1];
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_45___default()(Date.now()).format('DD/MM/YYYY');
  var Create = {
    person: user.data.userName + ' CREATED ',
    dateComment
  };
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState36 = _slicedToArray(_useState35, 2),
    expensesInfo = _useState36[0],
    setExpensesInfo = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    categories = _useState38[0],
    setCategories = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState40 = _slicedToArray(_useState39, 2),
    noteInfo = _useState40[0],
    setNoteInfo = _useState40[1];
  var invoiceName = "INV-".concat(String(invoiceNumber).padStart(6, '0'));
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState42 = _slicedToArray(_useState41, 2),
    customer = _useState42[0],
    setCustomer = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState44 = _slicedToArray(_useState43, 2),
    customerName = _useState44[0],
    setCustomerName = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState46 = _slicedToArray(_useState45, 2),
    expenses = _useState46[0],
    setExpenses = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState48 = _slicedToArray(_useState47, 2),
    planingInfo = _useState48[0],
    setPlaningInfo = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState50 = _slicedToArray(_useState49, 2),
    projectAdvancesSum = _useState50[0],
    setProjectAdvancesSum = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState52 = _slicedToArray(_useState51, 2),
    currentCredit = _useState52[0],
    setCurrentCredit = _useState52[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchPaymentsAndCredit = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (projectId && customer !== null && customer !== void 0 && customer._id) {
          try {
            var _resPayments$data;
            var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/payment")), axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-customer/").concat(customer._id))]),
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2),
              resPayments = _yield$Promise$all2[0],
              resCustomer = _yield$Promise$all2[1];
            var projectPayments = (_resPayments$data = resPayments.data) === null || _resPayments$data === void 0 || (_resPayments$data = _resPayments$data.data) === null || _resPayments$data === void 0 ? void 0 : _resPayments$data.filter(pay => {
              var _pay$TotalAmount;
              return (_pay$TotalAmount = pay.TotalAmount) === null || _pay$TotalAmount === void 0 ? void 0 : _pay$TotalAmount.some(item => item.id === projectId);
            });
            var sum = projectPayments.reduce((acc, pay) => {
              var _pay$TotalAmount$find;
              var projectAmount = ((_pay$TotalAmount$find = pay.TotalAmount.find(item => item.id === projectId)) === null || _pay$TotalAmount$find === void 0 ? void 0 : _pay$TotalAmount$find.amount) || 0;
              return acc + Number(projectAmount);
            }, 0);
            setProjectAdvancesSum(sum);
            setCurrentCredit(resCustomer.data.data.credit || 0);
            setTotal(sum);
          } catch (error) {
            console.error("Error fetching project payments/credit:", error);
          }
        }
      });
      return function fetchPaymentsAndCredit() {
        return _ref9.apply(this, arguments);
      };
    }();
    fetchPaymentsAndCredit();
  }, [projectId, customer === null || customer === void 0 ? void 0 : customer._id]);
  var handleUpdateCredit = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* (overage) {
      if (overage <= 0) return;
      var newCredit = parseFloat(currentCredit) + parseFloat(overage);
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/update-customer/").concat(customer._id), {
          credit: newCredit
        });
      } catch (error) {
        console.error("Error updating customer credit:", error);
      }
    });
    return function handleUpdateCredit(_x) {
      return _ref0.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-purchase/").concat(id));
          setCustomer(res.data.data.customerName);
          setProjectID(res.data.data.projectName._id);
          var purchaseItems = res.data.data.items || [];
          SetItems(prev => {
            // If we already have items (e.g. from expenses loop), merge them carefully.
            // For now, fetchData is the primary source, so we just set it but preserve any existing non-purchase items if they were added (unlikely this early but safe).
            return purchaseItems;
          });
          setPurchaseName(res.data.data._id);
          setNoteInfo(res.data.data.noteInfo);
          setInvoiceSubject(res.data.data.projectName.projectName);
          setInvoiceDefect(res.data.data.estimateDefect);
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
    var fetchCustomer = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        if (customer) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-customer/").concat(customer._id));
            setCustomerName({
              _id: res.data.data._id,
              customerName: res.data.data.Customer,
              billingAddress: res.data.data.billingAddress,
              billingCity: res.data.data.billingCity
            });
            if (res.data.data.paymentTerms === "Net 3") {
              var currentDate = new Date();
              currentDate.setDate(currentDate.getDate() + 3);
              setInvoiceDueDate(currentDate);
            } else if (res.data.data.paymentTerms === "Net 10") {
              var _currentDate = new Date();
              _currentDate.setDate(_currentDate.getDate() + 10);
              setInvoiceDueDate(_currentDate);
            } else if (res.data.data.paymentTerms === "Net 15") {
              var _currentDate2 = new Date();
              _currentDate2.setDate(_currentDate2.getDate() + 15);
              setInvoiceDueDate(_currentDate2);
            } else if (res.data.data.paymentTerms === "Net 20") {
              var _currentDate3 = new Date();
              _currentDate3.setDate(_currentDate3.getDate() + 20);
              setInvoiceDueDate(_currentDate3);
            } else if (res.data.data.paymentTerms === "Net 25") {
              var _currentDate4 = new Date();
              _currentDate4.setDate(_currentDate4.getDate() + 25);
              setInvoiceDueDate(_currentDate4);
            } else if (res.data.data.paymentTerms === "Due end of the month") {
              var _currentDate5 = new Date();
              _currentDate5.setDate(_currentDate5.getMonth() + 1);
              _currentDate5.setDate(0);
              setInvoiceDueDate(_currentDate5);
            } else if (res.data.data.paymentTerms === "Due on Receipt") {
              var _currentDate6 = new Date();
              setInvoiceDueDate(_currentDate6);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      });
      return function fetchCustomer() {
        return _ref10.apply(this, arguments);
      };
    }();
    fetchCustomer();
  }, [customer]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-last-saved-invoice"));
          var num = res.data && res.data.invoiceNumber ? parseInt(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.invoiceNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.invoiceNumber) || 0) : 0;
          setInvoiceNumber(num + 1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchlastNumber() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchlastNumber();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchItem = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/item"));
          setItemInformation(res.data.data.reverse());
          SetItems(items => items.map(row => {
            var _res$data3;
            var related = (_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.find(row2 => {
              var _row$itemName;
              return row.itemName !== undefined && row2._id === ((_row$itemName = row.itemName) === null || _row$itemName === void 0 ? void 0 : _row$itemName._id);
            });
            if (related) {
              return _objectSpread(_objectSpread({}, row), {}, {
                itemRate: related.itemSellingPrice,
                totalAmount: row.itemQty * related.itemSellingPrice,
                discount: row.itemQty * related.itemSellingPrice * row.itemDiscount,
                percentage: row.itemQty * related.itemSellingPrice * row.itemDiscount / 100,
                itemAmount: row.itemQty * related.itemSellingPrice - row.itemQty * related.itemSellingPrice * row.itemDiscount / 100
              });
            }
            return row;
          }));
          var resCategory = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/expensesCategory"));
          setCategories(resCategory.data.data);
          var resExpenses = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/expense?summary=true"));
          var resPlaning = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/planing"));
          if (projectId) {
            var _resExpenses$data, _resPlaning$data;
            var result = (_resExpenses$data = resExpenses.data) === null || _resExpenses$data === void 0 || (_resExpenses$data = _resExpenses$data.data) === null || _resExpenses$data === void 0 ? void 0 : _resExpenses$data.filter(row => row.accountNameInfo !== undefined && row.accountNameInfo._id === projectId);
            setExpensesInfo(result);
            var resultPlaning = (_resPlaning$data = resPlaning.data) === null || _resPlaning$data === void 0 || (_resPlaning$data = _resPlaning$data.data) === null || _resPlaning$data === void 0 ? void 0 : _resPlaning$data.filter(row => row.projectName !== undefined && row.projectName._id === projectId).map(row => _objectSpread(_objectSpread({}, row), {}, {
              totalWorkDay: parseFloat(row.dayPayUSd * row.workNumber).toFixed(2)
            }));
            setPlaningInfo(resultPlaning);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchItem() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchItem();
  }, [projectId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var _Object$keys;
    var categoryTotal = expensesInfo === null || expensesInfo === void 0 ? void 0 : expensesInfo.reduce((acc, curr) => {
      if (!acc[curr.expenseCategory.expensesCategory]) {
        acc[curr.expenseCategory.expensesCategory] = 0;
      }
      acc[curr.expenseCategory.expensesCategory] += parseFloat(curr.total);
      return acc;
    }, {});
    var newRow = [];
    var newRow1 = [];
    (_Object$keys = Object.keys(categoryTotal)) === null || _Object$keys === void 0 || _Object$keys.forEach((Item, i) => {
      newRow.push({
        idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_40__["default"])(),
        itemName: {
          itemName: 'empty'
        },
        itemDescription: Item.toUpperCase(),
        itemDiscount: 0,
        discount: 1 * categoryTotal[Item] * 0,
        percentage: 1 * categoryTotal[Item] * 0 / 100,
        itemRate: categoryTotal[Item],
        totalAmount: 1 * categoryTotal[Item],
        itemAmount: 1 * categoryTotal[Item] - 1 * categoryTotal[Item] * 0 / 100,
        itemQty: 1,
        totalCost: 0,
        itemCost: 0
      });
    });
    var planingObject = planingInfo === null || planingInfo === void 0 ? void 0 : planingInfo.reduce((acc, item) => {
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
    var totalAmount2 = Object.keys(planingObject).map(row => planingObject[row]);
    var totalPayRoll = totalAmount2 === null || totalAmount2 === void 0 ? void 0 : totalAmount2.reduce((sum, row) => sum + row.total, 0);
    newRow1.push({
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_40__["default"])(),
      itemName: {
        itemName: 'empty'
      },
      itemDescription: "EMPLOYEE",
      itemDiscount: 0,
      discount: 1 * totalPayRoll * 0,
      percentage: 1 * totalPayRoll * 0 / 100,
      itemRate: totalPayRoll,
      totalAmount: 1 * totalPayRoll,
      itemAmount: 1 * totalPayRoll - 1 * totalPayRoll * 0 / 100,
      itemQty: 1,
      totalCost: 0,
      itemCost: 0
    });
    SetItems(prevItems => {
      // Filter out existing specialized rows to avoid duplicates or overwriting main items
      var filtered = prevItems.filter(item => {
        var isEmployee = item.itemDescription === "EMPLOYEE";
        var isExpense = categories.some(cat => cat.expensesCategory.toUpperCase() === item.itemDescription);
        return !isEmployee && !isExpense;
      });
      return [...filtered, ...newRow, ...newRow1];
    });
  }, [expensesInfo, planingInfo, categories]);
  var handleChange = (e, idRow) => {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var list = [...items];
    var i = items.findIndex(Item => Item.idRow === idRow);
    list[i][name] = value;
    list[i]['totalAmount'] = Math.round(list[i]['itemQty'] * list[i]['itemRate'] * 100) / 100;
    list[i]['totalCost'] = Math.round(list[i]['itemQty'] * list[i]['itemCost'] * 100) / 100;
    list[i]['discount'] = list[i]['totalAmount'] * list[i]['itemDiscount'];
    list[i]['percentage'] = list[i]['discount'] / 100;
    list[i]['itemAmount'] = Math.round((list[i]['totalAmount'] - list[i]['percentage']) * 100) / 100;
    list[i]['totalGenerale'] = Math.round(list[i]['itemCost'] * list[i]['itemBuy'] * 100) / 100;
    SetItems(list);
  };
  var handleChangeCEO = (e, idRow) => {
    var _e$target2 = e.target,
      name = _e$target2.name,
      value = _e$target2.value;
    var list = [...items];
    var i = items.findIndex(Item => Item.idRow === idRow);
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
    SetItems([...items, {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_40__["default"])(),
      itemName: {},
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
  var addItemWhite = () => {
    SetItems([...items, {
      newDescription: "",
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_40__["default"])(),
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
  var handleShowAutocompleteDescription = idRow => {
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        itemName: 'empty'
      }
    }) : row));
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
  var filterItemInformation = ItemInformation.filter(option => !items.find(row => {
    var _row$itemName2;
    return option._id === ((_row$itemName2 = row.itemName) === null || _row$itemName2 === void 0 ? void 0 : _row$itemName2._id) && option.typeItem === "Goods";
  }));
  {/** Modal Item Show */}
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState54 = _slicedToArray(_useState53, 2),
    selectedRowId = _useState54[0],
    setSelectedRowId = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState56 = _slicedToArray(_useState55, 2),
    showModal = _useState56[0],
    setShowModal = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState58 = _slicedToArray(_useState57, 2),
    targetRowId = _useState58[0],
    setTargetRowId = _useState58[1];
  var handleDelete = idRow => {
    setSelectedRowId(idRow);
    setShowModal(true);
  };
  var handleCloseRowId = () => {
    setShowModal(false);
  };
  var deleteItem = idRow => {
    // If idRow is passed directly (e.g. from white row delete button), use it.
    // Otherwise use selectedRowId (from modal Confirm button).
    var rowToDelete = typeof idRow === 'string' || typeof idRow === 'number' ? idRow : selectedRowId;
    if (!rowToDelete) return;
    var newRowId = targetRowId;
    if (newRowId) {
      var selectRow = items.find(item => item.idRow === rowToDelete);
      var targetRow = items.find(item => item.idRow === newRowId);
      if (selectRow && targetRow) {
        var newTotal = Math.round((targetRow.totalAmount += selectRow.totalAmount) * 100) / 100;
        var newRate = Math.round(newTotal / targetRow.itemQty * 100) / 100;
        var newTotalAmount = Math.round(targetRow.itemQty * newRate * 100) / 100;
        var discountTarget = Math.round(targetRow.itemDiscount * newTotalAmount * 100) / 100;
        var newPercentage = Math.round(discountTarget / 100 * 100) / 100;
        var newTotalG = Math.round((newTotalAmount - newPercentage) * 100) / 100;
        //update rate
        var updateRate = items.map(item => {
          if (item.idRow === targetRow.idRow) {
            return _objectSpread(_objectSpread({}, item), {}, {
              itemRate: newRate,
              totalAmount: newTotalAmount,
              discount: discountTarget,
              percentage: newPercentage,
              itemAmount: newTotalG
            });
          }
          return item;
        });
        SetItems(updateRate);
      }
    }
    SetItems(items => items.filter(Item => Item.idRow !== rowToDelete));
    setSelectedRowId('');
    setShowModal(false);
    setTargetRowId('');
  };
  {/** Modal Item Show End */}
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState60 = _slicedToArray(_useState59, 2),
    open1 = _useState60[0],
    setOpen1 = _useState60[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpen1(true);
  };
  var handleCloseBack = () => {
    setOpen1(false);
  };
  {/** Item InFO */}
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
  var handleShowAutocomplete = idRow => {
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        _id: null,
        itemName: null
      }
    }) : row));
  };
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState62 = _slicedToArray(_useState61, 2),
    openItemUpdate = _useState62[0],
    setOpenItemUpdate = _useState62[1];
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState64 = _slicedToArray(_useState63, 2),
    idItem = _useState64[0],
    setIdItem = _useState64[1];
  var handleOpenItemUpdate = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (id) {
      setOpenItemUpdate(true);
      setIdItem(id);
    });
    return function handleOpenItemUpdate(_x2) {
      return _ref13.apply(this, arguments);
    };
  }();
  var handleCloseItemUpdate = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* () {
      setOpenItemUpdate(false);
      if (idItem) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-item/").concat(idItem));
          SetItems(items => items.map(row => {
            var _row$itemName3;
            return ((_row$itemName3 = row.itemName) === null || _row$itemName3 === void 0 ? void 0 : _row$itemName3._id) === res.data.data._id ? _objectSpread(_objectSpread({}, row), {}, {
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
              itemAmount: row.itemQty * res.data.data.itemSellingPrice - row.itemQty * res.data.data.itemSellingPrice * row.itemDiscount / 100
            }) : row;
          }));
        } catch (error) {}
      }
    });
    return function handleCloseItemUpdate() {
      return _ref14.apply(this, arguments);
    };
  }();
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    openAutocomplete2 = _useState66[0],
    setOpenAutocomplete2 = _useState66[1];
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result1 = items.reduce((sum, row) => sum + row.itemAmount, 0);
    setSubTotal(result1.toFixed(2));
    var newTotal = Number(subTotal) + Number(shipping) + Number(adjustmentNumber);
    setTotalInvoice(newTotal);
    var newBalance = totalInvoice - total;
    setBalanceDue(newBalance);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (totalInvoice) {
      var wholePart = Math.floor(totalInvoice);
      var fractionalPart = (totalInvoice % 1).toFixed(2).split('.')[1];
      var wholeWords = number_to_words__WEBPACK_IMPORTED_MODULE_56___default().toWords(wholePart);
      var fractionalWords = number_to_words__WEBPACK_IMPORTED_MODULE_56___default().toWords(fractionalPart);
      setTotalW("".concat(wholeWords, " and ").concat(fractionalWords, " cents"));
    }
  }, [totalInvoice]);
  {/** Item InFO End */}
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState68 = _slicedToArray(_useState67, 2),
    loading = _useState68[0],
    setLoading = _useState68[1];
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState70 = _slicedToArray(_useState69, 2),
    loadingOpenModal = _useState70[0],
    setLoadingOpenModal = _useState70[1];
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState72 = _slicedToArray(_useState71, 2),
    loadingOpenModalUpdate = _useState72[0],
    setLoadingOpenModalUpdate = _useState72[1];
  var _useState73 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState74 = _slicedToArray(_useState73, 2),
    ErrorOpenModal = _useState74[0],
    setErrorOpenModal = _useState74[1];
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setOpen1(false);
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
    setOpen1(false);
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
      window.history.back();
    } else if (navigate === 'stay') {
      handleClose();
    }
  };
  var statusPurchase = 'Invoiced';
  var handleSubmitStatusUpdate = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (ReferenceInfo) {
      var data = {
        status: statusPurchase,
        ReferenceName2: ReferenceInfo,
        statusInfo: 'Completed'
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/update-purchase/").concat(id), data);
      } catch (error) {
        console.error(error);
      }
    });
    return function handleSubmitStatusUpdate(_x3) {
      return _ref15.apply(this, arguments);
    };
  }();
  var handleSubmitStatusProject = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* () {
      var data = {
        status: 'Completed'
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/update-projects/").concat(projectId), data);
      } catch (error) {
        console.error(error);
      }
    });
    return function handleSubmitStatusProject() {
      return _ref16.apply(this, arguments);
    };
  }();
  var _useState75 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState76 = _slicedToArray(_useState75, 2),
    idInvoice = _useState76[0],
    setIdInvoice = _useState76[1];
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: "INV-".concat(String(ReferenceInfoNumber).padStart(6, '0'), " For ").concat(customerName.customerName),
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x4, _x5) {
      return _ref17.apply(this, arguments);
    };
  }();
  var _useState77 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState78 = _slicedToArray(_useState77, 2),
    saving = _useState78[0],
    setSaving = _useState78[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var status = '';
      if (total > 0 && total < totalInvoice) {
        status = 'Partially-Paid';
      } else if (parseFloat(total) === parseFloat(totalInvoice) && parseFloat(total) !== 0) {
        status = 'Paid';
      } else {
        status = 'Pending';
      }
      try {
        var overage = Math.max(0, parseFloat(total) - parseFloat(totalInvoice));
        var finalPaidAmount = Math.min(parseFloat(total), parseFloat(totalInvoice));
        var finalBalanceDue = Math.max(0, parseFloat(totalInvoice) - finalPaidAmount);
        var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post(apiUrl, {
          customerName,
          invoiceNumber,
          invoiceDate,
          invoiceDueDate,
          invoiceSubject,
          invoiceDefect,
          status: finalBalanceDue === 0 ? 'Paid' : finalPaidAmount > 0 ? 'Partially-Paid' : 'Sent',
          items,
          subTotal,
          noteInfo,
          invoiceName,
          invoicePurchase: 'Purchased',
          Position: 'Last',
          ReferenceName2: id,
          total: finalPaidAmount,
          balanceDue: finalBalanceDue,
          totalW,
          note,
          Create,
          shipping,
          adjustment,
          adjustmentNumber,
          totalInvoice,
          terms
        });
        if (res) {
          if (overage > 0) {
            yield handleUpdateCredit(overage);
          }
          // Open Loading View
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.invoiceNumber;
          handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
          handleSubmitStatusUpdate(ReferenceInfo);
          handleSubmitStatusProject();
          setIdInvoice(res.data.data._id);
          //submit Item
          handleOpen();
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x6) {
      return _ref18.apply(this, arguments);
    };
  }();
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _useState79 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState80 = _slicedToArray(_useState79, 2),
    search2 = _useState80[0],
    setSearch2 = _useState80[1];
  var handleSearch2 = e => {
    var value = e.target.value;
    setSearch2(value);
  };
  var newArray2 = search2 !== '' ? items.filter(Item => Item.itemName && Item.itemName.itemName.toLowerCase().includes(search2.toLowerCase()) || Item.itemDescription && Item.itemDescription.toLowerCase().includes(search2.toLowerCase()) || Item.newDescription && Item.newDescription.toLowerCase().includes(search2.toLowerCase())) : items;
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
  }, "Convert to Invoice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    disabled: true,
    id: "customerName",
    name: "customerName",
    label: "Customer Name",
    value: customer ? customer.customerName : '',
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    htmlFor: "invoiceNumber"
  }, "Invoice Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    type: "number",
    id: "invoiceNumber",
    name: "invoiceNumber",
    label: "Invoice Number",
    value: invoiceNumber,
    onChange: e => setInvoiceNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      position: "start"
    }, "INV-")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_42__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_43__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_41__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_44__.DatePicker, {
    required: true,
    name: "invoiceDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_45___default()(invoiceDate),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_42__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_43__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_41__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_44__.DatePicker, {
    required: true,
    name: "invoiceDueDate",
    label: "Due Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_45___default()(invoiceDueDate),
    onChange: date => setInvoiceDueDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "invoiceSubject",
    name: "invoiceSubject",
    label: "Subject",
    value: invoiceSubject !== undefined ? invoiceSubject : '',
    onChange: e => setInvoiceSubject(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "invoiceDefect",
    name: "invoiceDefect",
    label: "Defect",
    value: invoiceDefect !== undefined ? invoiceDefect : '',
    onChange: e => setInvoiceDefect(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "noteInfo",
    name: "noteInfo",
    multiline: true,
    rows: 3,
    value: noteInfo !== undefined ? noteInfo : '',
    label: "Note",
    onChange: e => setNoteInfo(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: "Search",
    id: "search2",
    value: search2,
    variant: "standard",
    onChange: handleSearch2
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'block',
      position: 'fixed',
      zIndex: 1,
      float: 'right',
      right: '-5px'
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
  }))))), user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), newArray2.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => {
    var _Item$itemName, _Item$itemName2, _Item$itemName3;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
      ref: provided.innerRef
    }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      required: true,
      name: "newDescription",
      id: "newDescription",
      value: Item.newDescription,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      disabled: user.data.role === 'User',
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
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        height: '100px'
      }
    }, Item.itemName.itemName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: '15px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ItemThumbnail__WEBPACK_IMPORTED_MODULE_60__["default"], {
      itemId: (_Item$itemName = Item.itemName) === null || _Item$itemName === void 0 ? void 0 : _Item$itemName._id,
      initialData: Item.data,
      initialType: Item.contentType
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      hidden: Item.itemName ? Item.itemName.itemName === 'empty' : '',
      sx: {
        fontSize: '20px',
        fontWeight: 'bold'
      }
    }, ((_Item$itemName2 = Item.itemName) === null || _Item$itemName2 === void 0 || (_Item$itemName2 = _Item$itemName2.itemName) === null || _Item$itemName2 === void 0 ? void 0 : _Item$itemName2.toUpperCase()) || ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "itemDescription",
      id: "itemDescription",
      value: Item.itemDescription,
      multiline: true,
      rows: 3,
      onChange: e => handleChangeCEO(e, Item.idRow),
      size: "small",
      disabled: user.data.role !== 'CEO',
      sx: {
        width: '440px',
        backgroundColor: 'white',
        fontSize: 12
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
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
    }))), ((_Item$itemName3 = Item.itemName) === null || _Item$itemName3 === void 0 ? void 0 : _Item$itemName3._id) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Edit",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => {
        var _Item$itemName4;
        return handleOpenItemUpdate((_Item$itemName4 = Item.itemName) === null || _Item$itemName4 === void 0 ? void 0 : _Item$itemName4._id);
      },
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      disableClearable: true,
      options: filterItemInformation,
      getOptionLabel: option => option.itemName + '/' + option.itemBrand,
      renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], props, option.itemName + '/' + option.itemBrand),
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
      filterOptions: (options, _ref19) => {
        var inputValue = _ref19.inputValue;
        return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
      },
      onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
      size: "small",
      PaperComponent: _ref20 => {
        var children = _ref20.children,
          other = _objectWithoutProperties(_ref20, _excluded4);
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
      name: "itemQty",
      id: "itemQty",
      onChange: e => handleChangeCEO(e, Item.idRow),
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
      onChange: e => handleChangeCEO(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "itemDiscount",
      id: "itemDiscount",
      value: Item.itemDiscount,
      onChange: e => handleChangeCEO(e, Item.idRow),
      size: "small",
      placeholder: "1 to 5 %",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "amountTotalInvoice"
    }, Number(Item.itemAmount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
      title: "Delete",
      sx: {}
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => handleDelete(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))));
  })), provided.placeholder))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), newArray2.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_57__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => {
    var _Item$itemName5, _Item$itemName6, _Item$itemName7;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
      ref: provided.innerRef
    }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      required: true,
      name: "newDescription",
      id: "newDescription",
      value: Item.newDescription,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      disabled: user.data.role === 'User',
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
    }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        height: '100px'
      }
    }, (_Item$itemName5 = Item.itemName) !== null && _Item$itemName5 !== void 0 && _Item$itemName5.itemName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    }, ((_Item$itemName6 = Item.itemName) === null || _Item$itemName6 === void 0 || (_Item$itemName6 = _Item$itemName6.itemName) === null || _Item$itemName6 === void 0 ? void 0 : _Item$itemName6.toUpperCase()) || ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "itemDescription",
      id: "itemDescription",
      value: Item.itemDescription,
      multiline: true,
      rows: 3,
      onChange: true,
      size: "small",
      disabled: user.data.role !== 'CEO',
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
    }))), ((_Item$itemName7 = Item.itemName) === null || _Item$itemName7 === void 0 ? void 0 : _Item$itemName7._id) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
      title: "Edit",
      placement: "bottom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => {
        var _Item$itemName8;
        return handleOpenItemUpdate((_Item$itemName8 = Item.itemName) === null || _Item$itemName8 === void 0 ? void 0 : _Item$itemName8._id);
      },
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      disableClearable: true,
      options: filterItemInformation,
      getOptionLabel: option => option.itemName + '/' + option.itemBrand,
      renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], props, option.itemName + '/' + option.itemBrand),
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
      filterOptions: (options, _ref21) => {
        var inputValue = _ref21.inputValue;
        return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
      },
      onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
      size: "small",
      PaperComponent: _ref22 => {
        var children = _ref22.children,
          other = _objectWithoutProperties(_ref22, _excluded5);
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
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "itemQty",
      id: "itemQty",
      onChange: e => handleChange(e, Item.idRow),
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
      disabled: true,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      name: "itemDiscount",
      id: "itemDiscount",
      value: Item.itemDiscount,
      onChange: e => handleChange(e, Item.idRow),
      size: "small",
      placeholder: "1 to 5 %",
      sx: {
        width: '100px',
        backgroundColor: 'white'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "amountTotalInvoice"
    }, Number(Item.itemAmount || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => handleDelete(Item.idRow)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))));
  })), provided.placeholder)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "note",
    name: "note",
    multiline: true,
    rows: 4,
    value: note,
    label: "Invoice Note",
    onChange: e => setNote(e.target.value),
    sx: {
      width: '50%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "firstTable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Sub-Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    disabled: true,
    type: "number",
    id: "subTotal",
    size: "small",
    name: "subTotal",
    value: subTotal,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Shipping Fees"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "shipping",
    size: "small",
    name: "shipping",
    value: shipping,
    onChange: e => setShipping(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "      ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "adjustment",
    id: "adjustment",
    size: "small",
    value: adjustment,
    onChange: e => setAdjustment(e.target.value),
    sx: {
      width: '250px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "adjustmentNumber",
    size: "small",
    name: "adjustmentNumber",
    value: adjustmentNumber,
    onChange: e => setAdjustmentNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    disabled: true,
    type: "number",
    id: "totalInvoice",
    size: "small",
    name: "totalInvoice",
    value: totalInvoice,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    style: {
      borderBottom: '1px solid black'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Balance Due"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    type: "number",
    id: "balanceDue",
    size: "small",
    name: "balanceDue",
    value: balanceDue,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      position: "start"
    }, "$")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, "Total In Words"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    name: "totalW",
    id: "totalW",
    value: totalW,
    multiline: true,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    maxRows: 3
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "terms",
    name: "terms",
    multiline: true,
    rows: 4,
    value: terms,
    label: "Invoice Terms",
    onChange: e => setTerms(e.target.value),
    sx: {
      width: '60%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, "Saving...")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: open1,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Do you want to stop creating Invoice ? ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate(-1),
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
    open: showModal,
    onClose: handleCloseRowId,
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
    onClick: handleCloseRowId,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_53__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Please select the row to assign the total to: ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, "Item Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "itemNameRow",
    value: targetRowId,
    onChange: e => setTargetRowId(e.target.value),
    name: "itemNameRow",
    label: "Item Name<"
  }, items.map(item => item.idRow !== selectedRowId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    key: item.idRow,
    value: item.idRow
  }, item.itemName.itemName))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    style: {
      width: '100%'
    },
    onClick: deleteItem
  }, " Confirm "))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_49__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_50__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_49__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_51__["default"], {
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
    open: loadingOpenModalUpdate,
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_49__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_50__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_38__.NavLink, {
    to: "/InvoiceViewAdminAll/".concat(idInvoice),
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: openItemUpdate,
    onClose: handleCloseItemUpdate,
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
    onClick: handleCloseItemUpdate,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_55__["default"], {
    onClose: handleCloseItemUpdate,
    id: idItem
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConvertToInvoice);

/***/ },

/***/ "./src/js/component/ItemThumbnail.js"
/*!*******************************************!*\
  !*** ./src/js/component/ItemThumbnail.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_icons_material_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/ShoppingCartOutlined */ "./node_modules/@mui/icons-material/ShoppingCartOutlined.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;




var ItemThumbnail = _ref => {
  var itemId = _ref.itemId,
    initialData = _ref.initialData,
    initialType = _ref.initialType;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    src = _useState2[0],
    setSrc = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchImage = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(function* () {
        // 1. Check for initialData (passed from search/shop)
        if (initialData && initialType && initialData !== "undefined" && initialType !== "undefined" && initialData !== "null") {
          if (typeof initialData === 'string' && initialData.length > 50) {
            // Check if it's already a data URL
            if (initialData.startsWith('data:')) {
              setSrc(initialData);
            } else {
              setSrc("data:".concat(initialType, ";base64,").concat(initialData));
            }
            return;
          } else if (initialData.data) {
            // Handle buffer object if it's not converted to string yet
            var buffer = new Uint8Array(initialData.data);
            var blob = new Blob([buffer], {
              type: initialType
            });
            var reader = new FileReader();
            reader.onloadend = () => setSrc(reader.result);
            reader.readAsDataURL(blob);
            return;
          }
        }

        // 2. Fallback to fetch if no initial data or if it was invalid
        if (!itemId || itemId === "undefined" || itemId === "null") {
          setSrc(null);
          return;
        }
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_3__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_4__.ENDPOINT_URL, "/get-item/").concat(itemId));
          if (res.data.data && res.data.data.data) {
            var _buffer = new Uint8Array(res.data.data.data.data);
            var _blob = new Blob([_buffer], {
              type: res.data.data.contentType
            });
            var _reader = new FileReader();
            _reader.onloadend = () => setSrc(_reader.result);
            _reader.readAsDataURL(_blob);
          } else {
            setSrc(null);
          }
        } catch (err) {
          console.error("Error fetching online image:", err);
          setSrc(null);
        }
      });
      return function fetchImage() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchImage();
  }, [itemId, initialData, initialType]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "rounded",
    src: src,
    sx: {
      width: 80,
      height: 80,
      backgroundColor: '#f0f0f0',
      border: '1px solid #ddd'
    }
  }, !src && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      fontSize: 40,
      color: '#999'
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemThumbnail);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUHVyY2hhc2VzVmlld19Db252ZXJ0VG9JbnZvaWNlX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLDBCQUEwQixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjNCOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLFVBQVUsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlgsQ0FBa0Q7QUFDUztBQUNwQztBQUNFO0FBQzJCO0FBQ3NCO0FBQ3RCO0FBQzBLO0FBQzlKO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNRO0FBQ0E7QUFDYztBQUNJO0FBQ3hDO0FBQ3dCO0FBQ3lDO0FBQ2Q7QUFDbkQ7QUFDeUM7QUFDYTtBQUNoQjtBQUNKO0FBQ2xDO0FBQzRCO0FBQzBCO0FBQ007QUFDL0I7QUFDK0I7QUFDdkM7QUFDZTtBQUNWO0FBQ0o7QUFDRjtBQUNRO0FBQ0k7QUFDZjtBQUNpQztBQUN0QjtBQUNRO0FBQ0Q7QUFFN0QsSUFBTTJFLFlBQVksR0FBR3RELDBEQUFNLENBQUN1RCxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDaERoRiwwREFBQSxDQUFDeUIsOERBQU8sRUFBQXlELFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEsSUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDL0dhOztBQUViLGtCQUFrQixtQkFBTyxDQUFDLHdFQUFlO0FBQ3pDLGNBQWMsbUJBQU8sQ0FBQyxnRUFBVzs7QUFFakM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9EcmFnSW5kaWNhdG9yUm91bmRlZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0VkaXQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L1B1cmNoYXNlc1ZpZXcvQ29udmVydFRvSW52b2ljZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9JdGVtVGh1bWJuYWlsLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvY29tcG9uZW50L1NpZGViYXJEYXNoMS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL2lzRmluaXRlLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy9pc1NhZmVOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL21ha2VPcmRpbmFsLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy9tYXhTYWZlSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvdG9PcmRpbmFsLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy90b1dvcmRzLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy90b1dvcmRzT3JkaW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xMSAxOGMwIDEuMS0uOSAyLTIgMnMtMi0uOS0yLTIgLjktMiAyLTIgMiAuOSAyIDJtLTItOGMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJtMC02Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMm02IDRjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAybTAgMmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJtMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMlwiXG59KSwgJ0RyYWdJbmRpY2F0b3JSb3VuZGVkJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRhLjk5NTkuOTk1OSAwIDAgMC0xLjQxIDBsLTEuODMgMS44MyAzLjc1IDMuNzV6XCJcbn0pLCAnRWRpdCcpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTaWRlYmFyRGFzaDEgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoMSc7XHJcbmltcG9ydCAnLi4vLi4vdmlldy5jc3MnXHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcydcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IEJhY2tkcm9wLCBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgUGFwZXIsIFRhYmxlQ29udGFpbmVyLCBUZXh0RmllbGQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIFR5cG9ncmFwaHksIEF1dG9jb21wbGV0ZSwgTW9kYWwsIEJveCwgc3R5bGVkLCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgRGl2aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IEFkZCwgRHJhZ0luZGljYXRvclJvdW5kZWQsIEVkaXQsIFJlbW92ZUNpcmNsZU91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcywgTmF2aWdhdGUsIE5hdkxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuaW1wb3J0IHsgRGVtb0NvbnRhaW5lciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvaW50ZXJuYWxzL2RlbW8nO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvTG9jYWxpemF0aW9uUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBBZGFwdGVyRGF5anMgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0FkYXB0ZXJEYXlqcyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0RhdGVQaWNrZXInO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgQXJyb3dCYWNrIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcclxuaW1wb3J0IFNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Nob3BwaW5nQ2FydE91dGxpbmVkJztcclxuaW1wb3J0IEFkZFNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FkZFNob3BwaW5nQ2FydE91dGxpbmVkJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCBJdGVtRm9ybVZpZXcyIGZyb20gJy4uL0l0ZW1WaWV3L0l0ZW1Gb3JtVmlldzInO1xyXG5pbXBvcnQgSXRlbVVwZGF0ZVZpZXcyIGZyb20gJy4uL0l0ZW1WaWV3L0l0ZW1VcGRhdGVWaWV3Mic7XHJcbmltcG9ydCBudW1iZXJUb1dvcmRzIGZyb20gJ251bWJlci10by13b3JkcydcclxuaW1wb3J0IHsgRHJhZ0Ryb3BDb250ZXh0LCBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4uLy4uL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi4vLi4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5pbXBvcnQgSXRlbVRodW1ibmFpbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvSXRlbVRodW1ibmFpbCc7XHJcblxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IERvd25Ub29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IHN0eWxlMiA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDgwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIENvbnZlcnRUb0ludm9pY2UoKSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKClcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIC8vIEhhbmRsZSB0aGUgcmVzcG9uc2UgZGF0YSBoZXJlXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JzXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vIGlkJyk7XHJcbiAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICB9XHJcbiAgfSwgW2Rpc3BhdGNoXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcblxyXG4gIGNvbnN0IGFwaVVybCA9IGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLWludm9pY2VgO1xyXG4gIGNvbnN0IGludm9pY2VEYXRlID0gZGF5anMoRGF0ZS5ub3coKSk7XHJcbiAgY29uc3QgW2ludm9pY2VEdWVEYXRlLCBzZXRJbnZvaWNlRHVlRGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW52b2ljZVN1YmplY3QsIHNldEludm9pY2VTdWJqZWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9qZWN0SWQsIHNldFByb2plY3RJRF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2ludm9pY2VEZWZlY3QsIHNldEludm9pY2VEZWZlY3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpbnZvaWNlTnVtYmVyLCBzZXRJbnZvaWNlTnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpdGVtcywgU2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwdXJjaGFzZU5hbWUsIHNldFB1cmNoYXNlTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3ViVG90YWwsIHNldFN1YlRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NoaXBwaW5nLCBzZXRTaGlwcGluZ10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYWRqdXN0bWVudCwgc2V0QWRqdXN0bWVudF0gPSB1c2VTdGF0ZSgnQWRqdXN0bWVudCcpXHJcbiAgY29uc3QgW2FkanVzdG1lbnROdW1iZXIsIHNldEFkanVzdG1lbnROdW1iZXJdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbdG90YWxJbnZvaWNlLCBzZXRUb3RhbEludm9pY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2JhbGFuY2VEdWUsIHNldEJhbGFuY2VEdWVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3RvdGFsVywgc2V0VG90YWxXXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtJdGVtSW5mb3JtYXRpb24sIHNldEl0ZW1JbmZvcm1hdGlvbl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25vdGUsIHNldE5vdGVdID0gdXNlU3RhdGUoXCJUaGFua3MgRm9yIHlvdXIgQnVzaW5lc3MuXCIpO1xyXG4gIGNvbnN0IFt0ZXJtcywgc2V0VGVybXNdID0gdXNlU3RhdGUoXCJFU1RJTUFURVMgQVJFIEZPUiBMQUJPUiBBTkQgQURESVRJT05BTCBNQVRFUklBTCBPTkxZLCBNQVRFUklBTFMgU09MRCBBUkUgTkVJVEhFUiBUQUtFTiBCQUNLIE9SIEVYQ0hBTkdFRCBXRSBXSUxMIE5PVCBCRSBSRVNQT05TSUJMRSBGT1IgTE9TUyBPUiBEQU1BR0UgQ0FVU0VEIEJZIEZJUkUsIFRIRUZULCBURVNUSU5HLCBERUZFQ1RFRCBQQVJFIFBBUlRTLCBPUiBBTlkgT1RIRVIgQ0FVU0UgQkVZT05EIE9VUiBDT05UUk9MLiBcIik7XHJcbiAgY29uc3QgZGF0ZUNvbW1lbnQgPSBkYXlqcyhEYXRlLm5vdygpKS5mb3JtYXQoJ0REL01NL1lZWVknKVxyXG4gIGNvbnN0IENyZWF0ZSA9IHtcclxuICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBDUkVBVEVEICcsXHJcbiAgICBkYXRlQ29tbWVudFxyXG4gIH1cclxuICBjb25zdCBbZXhwZW5zZXNJbmZvLCBzZXRFeHBlbnNlc0luZm9dID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtub3RlSW5mbywgc2V0Tm90ZUluZm9dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgaW52b2ljZU5hbWUgPSBgSU5WLSR7U3RyaW5nKGludm9pY2VOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9YFxyXG4gIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjdXN0b21lck5hbWUsIHNldEN1c3RvbWVyTmFtZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2V4cGVuc2VzLCBzZXRFeHBlbnNlc10gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW3BsYW5pbmdJbmZvLCBzZXRQbGFuaW5nSW5mb10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2plY3RBZHZhbmNlc1N1bSwgc2V0UHJvamVjdEFkdmFuY2VzU3VtXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtjdXJyZW50Q3JlZGl0LCBzZXRDdXJyZW50Q3JlZGl0XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQYXltZW50c0FuZENyZWRpdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHByb2plY3RJZCAmJiBjdXN0b21lcj8uX2lkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IFtyZXNQYXltZW50cywgcmVzQ3VzdG9tZXJdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wYXltZW50YCksXHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1jdXN0b21lci8ke2N1c3RvbWVyLl9pZH1gKVxyXG4gICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICAgY29uc3QgcHJvamVjdFBheW1lbnRzID0gcmVzUGF5bWVudHMuZGF0YT8uZGF0YT8uZmlsdGVyKHBheSA9PlxyXG4gICAgICAgICAgICBwYXkuVG90YWxBbW91bnQ/LnNvbWUoaXRlbSA9PiBpdGVtLmlkID09PSBwcm9qZWN0SWQpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3Qgc3VtID0gcHJvamVjdFBheW1lbnRzLnJlZHVjZSgoYWNjLCBwYXkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdEFtb3VudCA9IHBheS5Ub3RhbEFtb3VudC5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcHJvamVjdElkKT8uYW1vdW50IHx8IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2MgKyBOdW1iZXIocHJvamVjdEFtb3VudCk7XHJcbiAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgICBzZXRQcm9qZWN0QWR2YW5jZXNTdW0oc3VtKTtcclxuICAgICAgICAgIHNldEN1cnJlbnRDcmVkaXQocmVzQ3VzdG9tZXIuZGF0YS5kYXRhLmNyZWRpdCB8fCAwKTtcclxuICAgICAgICAgIHNldFRvdGFsKHN1bSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcm9qZWN0IHBheW1lbnRzL2NyZWRpdDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoUGF5bWVudHNBbmRDcmVkaXQoKTtcclxuICB9LCBbcHJvamVjdElkLCBjdXN0b21lcj8uX2lkXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZUNyZWRpdCA9IGFzeW5jIChvdmVyYWdlKSA9PiB7XHJcbiAgICBpZiAob3ZlcmFnZSA8PSAwKSByZXR1cm47XHJcbiAgICBjb25zdCBuZXdDcmVkaXQgPSBwYXJzZUZsb2F0KGN1cnJlbnRDcmVkaXQpICsgcGFyc2VGbG9hdChvdmVyYWdlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1jdXN0b21lci8ke2N1c3RvbWVyLl9pZH1gLCB7IGNyZWRpdDogbmV3Q3JlZGl0IH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGN1c3RvbWVyIGNyZWRpdDpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtcHVyY2hhc2UvJHtpZH1gKVxyXG4gICAgICAgIHNldEN1c3RvbWVyKHJlcy5kYXRhLmRhdGEuY3VzdG9tZXJOYW1lKTtcclxuICAgICAgICBzZXRQcm9qZWN0SUQocmVzLmRhdGEuZGF0YS5wcm9qZWN0TmFtZS5faWQpO1xyXG4gICAgICAgIGNvbnN0IHB1cmNoYXNlSXRlbXMgPSByZXMuZGF0YS5kYXRhLml0ZW1zIHx8IFtdO1xyXG4gICAgICAgIFNldEl0ZW1zKHByZXYgPT4ge1xyXG4gICAgICAgICAgLy8gSWYgd2UgYWxyZWFkeSBoYXZlIGl0ZW1zIChlLmcuIGZyb20gZXhwZW5zZXMgbG9vcCksIG1lcmdlIHRoZW0gY2FyZWZ1bGx5LlxyXG4gICAgICAgICAgLy8gRm9yIG5vdywgZmV0Y2hEYXRhIGlzIHRoZSBwcmltYXJ5IHNvdXJjZSwgc28gd2UganVzdCBzZXQgaXQgYnV0IHByZXNlcnZlIGFueSBleGlzdGluZyBub24tcHVyY2hhc2UgaXRlbXMgaWYgdGhleSB3ZXJlIGFkZGVkICh1bmxpa2VseSB0aGlzIGVhcmx5IGJ1dCBzYWZlKS5cclxuICAgICAgICAgIHJldHVybiBwdXJjaGFzZUl0ZW1zO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldFB1cmNoYXNlTmFtZShyZXMuZGF0YS5kYXRhLl9pZCk7XHJcbiAgICAgICAgc2V0Tm90ZUluZm8ocmVzLmRhdGEuZGF0YS5ub3RlSW5mbyk7XHJcbiAgICAgICAgc2V0SW52b2ljZVN1YmplY3QocmVzLmRhdGEuZGF0YS5wcm9qZWN0TmFtZS5wcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgc2V0SW52b2ljZURlZmVjdChyZXMuZGF0YS5kYXRhLmVzdGltYXRlRGVmZWN0KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hDdXN0b21lciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKGN1c3RvbWVyKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1jdXN0b21lci8ke2N1c3RvbWVyLl9pZH1gKVxyXG4gICAgICAgICAgc2V0Q3VzdG9tZXJOYW1lKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgX2lkOiByZXMuZGF0YS5kYXRhLl9pZCxcclxuICAgICAgICAgICAgICBjdXN0b21lck5hbWU6IHJlcy5kYXRhLmRhdGEuQ3VzdG9tZXIsXHJcbiAgICAgICAgICAgICAgYmlsbGluZ0FkZHJlc3M6IHJlcy5kYXRhLmRhdGEuYmlsbGluZ0FkZHJlc3MsXHJcbiAgICAgICAgICAgICAgYmlsbGluZ0NpdHk6IHJlcy5kYXRhLmRhdGEuYmlsbGluZ0NpdHlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEucGF5bWVudFRlcm1zID09PSBcIk5ldCAzXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIDMpO1xyXG4gICAgICAgICAgICBzZXRJbnZvaWNlRHVlRGF0ZShjdXJyZW50RGF0ZSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEuZGF0YS5wYXltZW50VGVybXMgPT09IFwiTmV0IDEwXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIDEwKTtcclxuICAgICAgICAgICAgc2V0SW52b2ljZUR1ZURhdGUoY3VycmVudERhdGUpXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5kYXRhLmRhdGEucGF5bWVudFRlcm1zID09PSBcIk5ldCAxNVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgY3VycmVudERhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAxNSk7XHJcbiAgICAgICAgICAgIHNldEludm9pY2VEdWVEYXRlKGN1cnJlbnREYXRlKVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXMuZGF0YS5kYXRhLnBheW1lbnRUZXJtcyA9PT0gXCJOZXQgMjBcIikge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnREYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgMjApO1xyXG4gICAgICAgICAgICBzZXRJbnZvaWNlRHVlRGF0ZShjdXJyZW50RGF0ZSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEuZGF0YS5wYXltZW50VGVybXMgPT09IFwiTmV0IDI1XCIpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIDI1KTtcclxuICAgICAgICAgICAgc2V0SW52b2ljZUR1ZURhdGUoY3VycmVudERhdGUpXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5kYXRhLmRhdGEucGF5bWVudFRlcm1zID09PSBcIkR1ZSBlbmQgb2YgdGhlIG1vbnRoXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxKTtcclxuICAgICAgICAgICAgY3VycmVudERhdGUuc2V0RGF0ZSgwKTtcclxuICAgICAgICAgICAgc2V0SW52b2ljZUR1ZURhdGUoY3VycmVudERhdGUpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXMuZGF0YS5kYXRhLnBheW1lbnRUZXJtcyA9PT0gXCJEdWUgb24gUmVjZWlwdFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgc2V0SW52b2ljZUR1ZURhdGUoY3VycmVudERhdGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hDdXN0b21lcigpXHJcbiAgfSwgW2N1c3RvbWVyXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNobGFzdE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbGFzdC1zYXZlZC1pbnZvaWNlYClcclxuICAgICAgICBjb25zdCBudW0gPSByZXMuZGF0YSAmJiByZXMuZGF0YS5pbnZvaWNlTnVtYmVyID8gKHBhcnNlSW50KHJlcy5kYXRhPy5kYXRhPy5pbnZvaWNlTnVtYmVyIHx8IHJlcy5kYXRhPy5pbnZvaWNlTnVtYmVyIHx8IDApKSA6IDA7XHJcbiAgICAgICAgc2V0SW52b2ljZU51bWJlcihudW0gKyAxKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaGxhc3ROdW1iZXIoKVxyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEl0ZW0gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbWApXHJcbiAgICAgICAgc2V0SXRlbUluZm9ybWF0aW9uKHJlcy5kYXRhLmRhdGEucmV2ZXJzZSgpKVxyXG4gICAgICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByZWxhdGVkID0gcmVzLmRhdGE/LmRhdGE/LmZpbmQoKHJvdzIpID0+IHJvdy5pdGVtTmFtZSAhPT0gdW5kZWZpbmVkICYmIHJvdzIuX2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZClcclxuICAgICAgICAgIGlmIChyZWxhdGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4ucm93LCBpdGVtUmF0ZTogcmVsYXRlZC5pdGVtU2VsbGluZ1ByaWNlLCB0b3RhbEFtb3VudDogcm93Lml0ZW1RdHkgKiByZWxhdGVkLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICAgICAgZGlzY291bnQ6IChyb3cuaXRlbVF0eSAqIHJlbGF0ZWQuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50LFxyXG4gICAgICAgICAgICAgIHBlcmNlbnRhZ2U6ICgocm93Lml0ZW1RdHkgKiByZWxhdGVkLml0ZW1TZWxsaW5nUHJpY2UpICogcm93Lml0ZW1EaXNjb3VudCkgLyAxMDAsXHJcbiAgICAgICAgICAgICAgaXRlbUFtb3VudDogKHJvdy5pdGVtUXR5ICogcmVsYXRlZC5pdGVtU2VsbGluZ1ByaWNlKSAtICgoKHJvdy5pdGVtUXR5ICogcmVsYXRlZC5pdGVtU2VsbGluZ1ByaWNlKSAqIHJvdy5pdGVtRGlzY291bnQpIC8gMTAwKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHJvd1xyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIGNvbnN0IHJlc0NhdGVnb3J5ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZXhwZW5zZXNDYXRlZ29yeWApXHJcbiAgICAgICAgc2V0Q2F0ZWdvcmllcyhyZXNDYXRlZ29yeS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIGNvbnN0IHJlc0V4cGVuc2VzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZXhwZW5zZT9zdW1tYXJ5PXRydWVgKVxyXG4gICAgICAgIGNvbnN0IHJlc1BsYW5pbmcgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wbGFuaW5nYClcclxuICAgICAgICBpZiAocHJvamVjdElkKSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNFeHBlbnNlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LmFjY291bnROYW1lSW5mbyAhPT0gdW5kZWZpbmVkICYmIHJvdy5hY2NvdW50TmFtZUluZm8uX2lkID09PSBwcm9qZWN0SWQpXHJcbiAgICAgICAgICBzZXRFeHBlbnNlc0luZm8ocmVzdWx0KVxyXG4gICAgICAgICAgY29uc3QgcmVzdWx0UGxhbmluZyA9IHJlc1BsYW5pbmcuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5wcm9qZWN0TmFtZSAhPT0gdW5kZWZpbmVkICYmIHJvdy5wcm9qZWN0TmFtZS5faWQgPT09IHByb2plY3RJZClcclxuICAgICAgICAgICAgLm1hcCgocm93KSA9PiAoe1xyXG4gICAgICAgICAgICAgIC4uLnJvdyxcclxuICAgICAgICAgICAgICB0b3RhbFdvcmtEYXk6IHBhcnNlRmxvYXQocm93LmRheVBheVVTZCAqIHJvdy53b3JrTnVtYmVyKS50b0ZpeGVkKDIpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgc2V0UGxhbmluZ0luZm8ocmVzdWx0UGxhbmluZylcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoSXRlbSgpXHJcbiAgfSwgW3Byb2plY3RJZF0pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNhdGVnb3J5VG90YWwgPSBleHBlbnNlc0luZm8/LnJlZHVjZSgoYWNjLCBjdXJyKSA9PiB7XHJcbiAgICAgIGlmICghYWNjW2N1cnIuZXhwZW5zZUNhdGVnb3J5LmV4cGVuc2VzQ2F0ZWdvcnldKSB7XHJcbiAgICAgICAgYWNjW2N1cnIuZXhwZW5zZUNhdGVnb3J5LmV4cGVuc2VzQ2F0ZWdvcnldID0gMFxyXG4gICAgICB9XHJcbiAgICAgIGFjY1tjdXJyLmV4cGVuc2VDYXRlZ29yeS5leHBlbnNlc0NhdGVnb3J5XSArPSBwYXJzZUZsb2F0KGN1cnIudG90YWwpXHJcbiAgICAgIHJldHVybiBhY2NcclxuICAgIH0sIHt9KVxyXG4gICAgbGV0IG5ld1JvdyA9IFtdXHJcbiAgICBsZXQgbmV3Um93MSA9IFtdXHJcbiAgICBPYmplY3Qua2V5cyhjYXRlZ29yeVRvdGFsKT8uZm9yRWFjaCgoSXRlbSwgaSkgPT4ge1xyXG4gICAgICBuZXdSb3cucHVzaCh7XHJcbiAgICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICAgIGl0ZW1OYW1lOiAnZW1wdHknXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpdGVtRGVzY3JpcHRpb246IEl0ZW0udG9VcHBlckNhc2UoKSxcclxuICAgICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgICAgZGlzY291bnQ6ICgxICogY2F0ZWdvcnlUb3RhbFtJdGVtXSkgKiAwLFxyXG4gICAgICAgIHBlcmNlbnRhZ2U6ICgoMSAqIGNhdGVnb3J5VG90YWxbSXRlbV0pICogMCkgLyAxMDAsXHJcbiAgICAgICAgaXRlbVJhdGU6IGNhdGVnb3J5VG90YWxbSXRlbV0sXHJcbiAgICAgICAgdG90YWxBbW91bnQ6IDEgKiBjYXRlZ29yeVRvdGFsW0l0ZW1dLFxyXG4gICAgICAgIGl0ZW1BbW91bnQ6ICgxICogY2F0ZWdvcnlUb3RhbFtJdGVtXSkgLSAoKCgxICogY2F0ZWdvcnlUb3RhbFtJdGVtXSkgKiAwKSAvIDEwMCksXHJcbiAgICAgICAgaXRlbVF0eTogMSxcclxuICAgICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgY29uc3QgcGxhbmluZ09iamVjdCA9IHBsYW5pbmdJbmZvPy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBpZCA9IGl0ZW0uZW1wbG95ZWVJRDtcclxuICAgICAgY29uc3QgbmFtZSA9IGl0ZW0uZW1wbG95ZWVOYW1lO1xyXG4gICAgICBjb25zdCBkYXlQYXkgPSBpdGVtLmRheVBheVVTZDtcclxuICAgICAgaWYgKCFhY2NbaWRdKSB7XHJcbiAgICAgICAgYWNjW2lkXSA9IHsgaWQsIG5hbWUsIGRheVBheSwgd29ya0Q6IDAsIHRvdGFsOiAwIH1cclxuICAgICAgfVxyXG4gICAgICBhY2NbaWRdLnRvdGFsICs9IHBhcnNlRmxvYXQoaXRlbS50b3RhbFdvcmtEYXkpXHJcbiAgICAgIGFjY1tpZF0ud29ya0QgKz0gcGFyc2VGbG9hdChpdGVtLndvcmtOdW1iZXIpXHJcbiAgICAgIHJldHVybiBhY2NcclxuICAgIH0sIHt9KVxyXG5cclxuICAgIGNvbnN0IHRvdGFsQW1vdW50MiA9IE9iamVjdC5rZXlzKHBsYW5pbmdPYmplY3QpLm1hcCgocm93KSA9PiBwbGFuaW5nT2JqZWN0W3Jvd10pXHJcbiAgICBjb25zdCB0b3RhbFBheVJvbGwgPSB0b3RhbEFtb3VudDI/LnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHJvdy50b3RhbCwgMCk7XHJcblxyXG4gICAgbmV3Um93MS5wdXNoKHtcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgaXRlbU5hbWU6ICdlbXB0eSdcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIkVNUExPWUVFXCIsXHJcbiAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgZGlzY291bnQ6ICgxICogdG90YWxQYXlSb2xsKSAqIDAsXHJcbiAgICAgIHBlcmNlbnRhZ2U6ICgoMSAqIHRvdGFsUGF5Um9sbCkgKiAwKSAvIDEwMCxcclxuICAgICAgaXRlbVJhdGU6IHRvdGFsUGF5Um9sbCxcclxuICAgICAgdG90YWxBbW91bnQ6IDEgKiB0b3RhbFBheVJvbGwsXHJcbiAgICAgIGl0ZW1BbW91bnQ6ICgxICogdG90YWxQYXlSb2xsKSAtICgoKDEgKiB0b3RhbFBheVJvbGwpICogMCkgLyAxMDApLFxyXG4gICAgICBpdGVtUXR5OiAxLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIGl0ZW1Db3N0OiAwLFxyXG4gICAgfSlcclxuICAgIFNldEl0ZW1zKHByZXZJdGVtcyA9PiB7XHJcbiAgICAgIC8vIEZpbHRlciBvdXQgZXhpc3Rpbmcgc3BlY2lhbGl6ZWQgcm93cyB0byBhdm9pZCBkdXBsaWNhdGVzIG9yIG92ZXJ3cml0aW5nIG1haW4gaXRlbXNcclxuICAgICAgY29uc3QgZmlsdGVyZWQgPSBwcmV2SXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzRW1wbG95ZWUgPSBpdGVtLml0ZW1EZXNjcmlwdGlvbiA9PT0gXCJFTVBMT1lFRVwiO1xyXG4gICAgICAgIGNvbnN0IGlzRXhwZW5zZSA9IGNhdGVnb3JpZXMuc29tZShjYXQgPT4gY2F0LmV4cGVuc2VzQ2F0ZWdvcnkudG9VcHBlckNhc2UoKSA9PT0gaXRlbS5pdGVtRGVzY3JpcHRpb24pO1xyXG4gICAgICAgIHJldHVybiAhaXNFbXBsb3llZSAmJiAhaXNFeHBlbnNlO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIFsuLi5maWx0ZXJlZCwgLi4ubmV3Um93LCAuLi5uZXdSb3cxXTtcclxuICAgIH0pO1xyXG4gIH0sIFtleHBlbnNlc0luZm8sIHBsYW5pbmdJbmZvLCBjYXRlZ29yaWVzXSlcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSwgaWRSb3cpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5pdGVtc107XHJcbiAgICBjb25zdCBpID0gaXRlbXMuZmluZEluZGV4KEl0ZW0gPT4gSXRlbS5pZFJvdyA9PT0gaWRSb3cpXHJcbiAgICBsaXN0W2ldW25hbWVdID0gdmFsdWU7XHJcbiAgICBsaXN0W2ldWyd0b3RhbEFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddICogbGlzdFtpXVsnaXRlbVJhdGUnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxDb3N0J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtQ29zdCddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWydkaXNjb3VudCddID0gbGlzdFtpXVsndG90YWxBbW91bnQnXSAqIGxpc3RbaV1bJ2l0ZW1EaXNjb3VudCddO1xyXG4gICAgbGlzdFtpXVsncGVyY2VudGFnZSddID0gbGlzdFtpXVsnZGlzY291bnQnXSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2l0ZW1BbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gLSBsaXN0W2ldWydwZXJjZW50YWdlJ10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsR2VuZXJhbGUnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1Db3N0J10gKiBsaXN0W2ldWydpdGVtQnV5J10pICogMTAwKSAvIDEwMDtcclxuICAgIFNldEl0ZW1zKGxpc3QpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDRU8gPSAoZSwgaWRSb3cpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5pdGVtc107XHJcbiAgICBjb25zdCBpID0gaXRlbXMuZmluZEluZGV4KEl0ZW0gPT4gSXRlbS5pZFJvdyA9PT0gaWRSb3cpXHJcbiAgICBsaXN0W2ldW25hbWVdID0gdmFsdWU7XHJcbiAgICBsaXN0W2ldWyd0b3RhbEFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddICogbGlzdFtpXVsnaXRlbVJhdGUnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxDb3N0J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtQ29zdCddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWydkaXNjb3VudCddID0gbGlzdFtpXVsndG90YWxBbW91bnQnXSAqIGxpc3RbaV1bJ2l0ZW1EaXNjb3VudCddO1xyXG4gICAgbGlzdFtpXVsncGVyY2VudGFnZSddID0gbGlzdFtpXVsnZGlzY291bnQnXSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2l0ZW1BbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gLSBsaXN0W2ldWydwZXJjZW50YWdlJ10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsR2VuZXJhbGUnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1Db3N0J10gKiBsaXN0W2ldWydpdGVtQnV5J10pICogMTAwKSAvIDEwMDtcclxuICAgIFNldEl0ZW1zKGxpc3QpO1xyXG4gIH1cclxuICAvL2FkZEl0ZW1cclxuICBjb25zdCBhZGRJdGVtID0gKCkgPT4ge1xyXG4gICAgU2V0SXRlbXMoWy4uLml0ZW1zLCB7XHJcbiAgICAgIGlkUm93OiB2NCgpLFxyXG4gICAgICBpdGVtTmFtZToge30sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH1dKTtcclxuICB9XHJcbiAgY29uc3QgYWRkSXRlbVdoaXRlID0gKCkgPT4ge1xyXG4gICAgU2V0SXRlbXMoWy4uLml0ZW1zLCB7XHJcbiAgICAgIG5ld0Rlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IFwiXCIsXHJcbiAgICAgICAgaXRlbU5hbWU6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQW1vdW50OiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgfV0pO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24gPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgaXRlbU5hbWU6ICdlbXB0eSdcclxuICAgICAgfSxcclxuICAgIH0gOiByb3cpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3SXRlbXMgPSBbLi4uaXRlbXNdO1xyXG4gICAgY29uc3QgW3JlbW92ZWRdID0gbmV3SXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpO1xyXG4gICAgbmV3SXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVtb3ZlZCk7XHJcbiAgICBTZXRJdGVtcyhuZXdJdGVtcylcclxuICB9O1xyXG4gIGNvbnN0IGZpbHRlckl0ZW1JbmZvcm1hdGlvbiA9IEl0ZW1JbmZvcm1hdGlvbi5maWx0ZXIob3B0aW9uID0+ICFpdGVtcy5maW5kKChyb3cpID0+IG9wdGlvbi5faWQgPT09IHJvdy5pdGVtTmFtZT8uX2lkICYmIG9wdGlvbi50eXBlSXRlbSA9PT0gXCJHb29kc1wiKSlcclxuICB7LyoqIE1vZGFsIEl0ZW0gU2hvdyAqLyB9XHJcbiAgY29uc3QgW3NlbGVjdGVkUm93SWQsIHNldFNlbGVjdGVkUm93SWRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3RhcmdldFJvd0lkLCBzZXRUYXJnZXRSb3dJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGlkUm93KSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFJvd0lkKGlkUm93KTtcclxuICAgIHNldFNob3dNb2RhbCh0cnVlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VSb3dJZCA9ICgpID0+IHtcclxuICAgIHNldFNob3dNb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaWRSb3cpID0+IHtcclxuICAgIC8vIElmIGlkUm93IGlzIHBhc3NlZCBkaXJlY3RseSAoZS5nLiBmcm9tIHdoaXRlIHJvdyBkZWxldGUgYnV0dG9uKSwgdXNlIGl0LlxyXG4gICAgLy8gT3RoZXJ3aXNlIHVzZSBzZWxlY3RlZFJvd0lkIChmcm9tIG1vZGFsIENvbmZpcm0gYnV0dG9uKS5cclxuICAgIGNvbnN0IHJvd1RvRGVsZXRlID0gKHR5cGVvZiBpZFJvdyA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGlkUm93ID09PSAnbnVtYmVyJykgPyBpZFJvdyA6IHNlbGVjdGVkUm93SWQ7XHJcbiAgICBcclxuICAgIGlmICghcm93VG9EZWxldGUpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBuZXdSb3dJZCA9IHRhcmdldFJvd0lkO1xyXG4gICAgaWYgKG5ld1Jvd0lkKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdFJvdyA9IGl0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmlkUm93ID09PSByb3dUb0RlbGV0ZSk7XHJcbiAgICAgIGNvbnN0IHRhcmdldFJvdyA9IGl0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtLmlkUm93ID09PSBuZXdSb3dJZCk7XHJcbiAgICAgIGlmIChzZWxlY3RSb3cgJiYgdGFyZ2V0Um93KSB7XHJcbiAgICAgICAgY29uc3QgbmV3VG90YWwgPSBNYXRoLnJvdW5kKCh0YXJnZXRSb3cudG90YWxBbW91bnQgKz0gc2VsZWN0Um93LnRvdGFsQW1vdW50KSAqIDEwMCkgLyAxMDBcclxuICAgICAgICBjb25zdCBuZXdSYXRlID0gTWF0aC5yb3VuZCgobmV3VG90YWwgLyB0YXJnZXRSb3cuaXRlbVF0eSkgKiAxMDApIC8gMTAwXHJcbiAgICAgICAgY29uc3QgbmV3VG90YWxBbW91bnQgPSBNYXRoLnJvdW5kKCh0YXJnZXRSb3cuaXRlbVF0eSAqIG5ld1JhdGUpICogMTAwKSAvIDEwMFxyXG4gICAgICAgIGNvbnN0IGRpc2NvdW50VGFyZ2V0ID0gTWF0aC5yb3VuZCgodGFyZ2V0Um93Lml0ZW1EaXNjb3VudCAqIG5ld1RvdGFsQW1vdW50KSAqIDEwMCkgLyAxMDBcclxuICAgICAgICBjb25zdCBuZXdQZXJjZW50YWdlID0gTWF0aC5yb3VuZCgoZGlzY291bnRUYXJnZXQgLyAxMDApICogMTAwKSAvIDEwMFxyXG4gICAgICAgIGNvbnN0IG5ld1RvdGFsRyA9IE1hdGgucm91bmQoKG5ld1RvdGFsQW1vdW50IC0gbmV3UGVyY2VudGFnZSkgKiAxMDApIC8gMTAwXHJcbiAgICAgICAgLy91cGRhdGUgcmF0ZVxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZVJhdGUgPSBpdGVtcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5pZFJvdyA9PT0gdGFyZ2V0Um93LmlkUm93KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICBpdGVtUmF0ZTogbmV3UmF0ZSxcclxuICAgICAgICAgICAgICB0b3RhbEFtb3VudDogbmV3VG90YWxBbW91bnQsXHJcbiAgICAgICAgICAgICAgZGlzY291bnQ6IGRpc2NvdW50VGFyZ2V0LFxyXG4gICAgICAgICAgICAgIHBlcmNlbnRhZ2U6IG5ld1BlcmNlbnRhZ2UsXHJcbiAgICAgICAgICAgICAgaXRlbUFtb3VudDogbmV3VG90YWxHXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBpdGVtXHJcbiAgICAgICAgfSlcclxuICAgICAgICBTZXRJdGVtcyh1cGRhdGVSYXRlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5maWx0ZXIoKEl0ZW0pID0+IEl0ZW0uaWRSb3cgIT09IHJvd1RvRGVsZXRlKSk7XHJcbiAgICBzZXRTZWxlY3RlZFJvd0lkKCcnKTsgXHJcbiAgICBzZXRTaG93TW9kYWwoZmFsc2UpOyBcclxuICAgIHNldFRhcmdldFJvd0lkKCcnKTtcclxuICB9O1xyXG4gIHsvKiogTW9kYWwgSXRlbSBTaG93IEVuZCAqLyB9XHJcblxyXG4gIGNvbnN0IFtvcGVuMSwgc2V0T3BlbjFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuQmFjayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW4xKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VCYWNrID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbjEoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHsvKiogSXRlbSBJbkZPICovIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJdGVtID0gKGlkUm93LCBuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gbmV3VmFsdWVcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgICBpdGVtTmFtZTogc2VsZWN0ZWRPcHRpb25zPy5pdGVtTmFtZSxcclxuICAgICAgfSxcclxuICAgICAgaXRlbUNvc3Q6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbUNvc3RQcmljZSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgaXRlbVJhdGU6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbVNlbGxpbmdQcmljZSxcclxuICAgICAgc3RvY2s6IHNlbGVjdGVkT3B0aW9ucz8uaXRlbVF1YW50aXR5LFxyXG4gICAgfSA6IHJvdykpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVNob3dBdXRvY29tcGxldGUgPSAoaWRSb3cpID0+IHtcclxuICAgIFNldEl0ZW1zKGl0ZW1zID0+IGl0ZW1zLm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkUm93ID8ge1xyXG4gICAgICAuLi5yb3csXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBudWxsLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBudWxsXHJcbiAgICAgIH0sXHJcbiAgICB9IDogcm93KSlcclxuICB9XHJcbiAgY29uc3QgW29wZW5JdGVtVXBkYXRlLCBzZXRPcGVuSXRlbVVwZGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lkSXRlbSwgc2V0SWRJdGVtXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5JdGVtVXBkYXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBzZXRPcGVuSXRlbVVwZGF0ZSh0cnVlKTtcclxuICAgIHNldElkSXRlbShpZCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUl0ZW1VcGRhdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRPcGVuSXRlbVVwZGF0ZShmYWxzZSk7XHJcbiAgICBpZiAoaWRJdGVtKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWl0ZW0vJHtpZEl0ZW19YClcclxuICAgICAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93Lml0ZW1OYW1lPy5faWQgPT09IHJlcy5kYXRhLmRhdGEuX2lkID8ge1xyXG4gICAgICAgICAgLi4ucm93LFxyXG4gICAgICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICAgICAgX2lkOiByZXMuZGF0YS5kYXRhLl9pZCxcclxuICAgICAgICAgICAgaXRlbU5hbWU6IHJlcy5kYXRhLmRhdGEuaXRlbU5hbWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBpdGVtRGVzY3JpcHRpb246IHJlcy5kYXRhLmRhdGEuaXRlbURlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgaXRlbUNvc3Q6IHJlcy5kYXRhLmRhdGEuaXRlbUNvc3RQcmljZSxcclxuICAgICAgICAgIGl0ZW1SYXRlOiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICBzdG9jazogcmVzLmRhdGEuZGF0YS5pdGVtUXVhbnRpdHksXHJcbiAgICAgICAgICB0b3RhbEFtb3VudDogcm93Lml0ZW1RdHkgKiByZXMuZGF0YS5kYXRhLml0ZW1TZWxsaW5nUHJpY2UsXHJcbiAgICAgICAgICBkaXNjb3VudDogKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAqIHJvdy5pdGVtRGlzY291bnQsXHJcbiAgICAgICAgICBwZXJjZW50YWdlOiAoKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAqIHJvdy5pdGVtRGlzY291bnQpIC8gMTAwLFxyXG4gICAgICAgICAgaXRlbUFtb3VudDogKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAtICgoKHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlKSAqIHJvdy5pdGVtRGlzY291bnQpIC8gMTAwKVxyXG4gICAgICAgIH0gOiByb3cpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgW29wZW5BdXRvY29tcGxldGUyLCBzZXRPcGVuQXV0b2NvbXBsZXRlMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDcmVhdGVJdGVtID0gKG5ld0l0ZW0pID0+IHtcclxuICAgIHNldEl0ZW1JbmZvcm1hdGlvbihbLi4uSXRlbUluZm9ybWF0aW9uLCBuZXdJdGVtXSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdDEgPSBpdGVtcy5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyByb3cuaXRlbUFtb3VudCwgMClcclxuICAgIHNldFN1YlRvdGFsKHJlc3VsdDEudG9GaXhlZCgyKSlcclxuICAgIGxldCBuZXdUb3RhbCA9IE51bWJlcihzdWJUb3RhbCkgKyBOdW1iZXIoc2hpcHBpbmcpICsgTnVtYmVyKGFkanVzdG1lbnROdW1iZXIpXHJcbiAgICBzZXRUb3RhbEludm9pY2UobmV3VG90YWwpXHJcbiAgICBsZXQgbmV3QmFsYW5jZSA9IHRvdGFsSW52b2ljZSAtIHRvdGFsXHJcbiAgICBzZXRCYWxhbmNlRHVlKG5ld0JhbGFuY2UpXHJcbiAgfSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRvdGFsSW52b2ljZSkge1xyXG4gICAgICBjb25zdCB3aG9sZVBhcnQgPSBNYXRoLmZsb29yKHRvdGFsSW52b2ljZSlcclxuICAgICAgY29uc3QgZnJhY3Rpb25hbFBhcnQgPSAodG90YWxJbnZvaWNlICUgMSkudG9GaXhlZCgyKS5zcGxpdCgnLicpWzFdO1xyXG4gICAgICBjb25zdCB3aG9sZVdvcmRzID0gbnVtYmVyVG9Xb3Jkcy50b1dvcmRzKHdob2xlUGFydClcclxuICAgICAgY29uc3QgZnJhY3Rpb25hbFdvcmRzID0gbnVtYmVyVG9Xb3Jkcy50b1dvcmRzKGZyYWN0aW9uYWxQYXJ0KVxyXG4gICAgICBzZXRUb3RhbFcoYCR7d2hvbGVXb3Jkc30gYW5kICR7ZnJhY3Rpb25hbFdvcmRzfSBjZW50c2ApXHJcbiAgICB9XHJcbiAgfSwgW3RvdGFsSW52b2ljZV0pXHJcbiAgey8qKiBJdGVtIEluRk8gRW5kICovIH1cclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbFVwZGF0ZSwgc2V0TG9hZGluZ09wZW5Nb2RhbFVwZGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0T3BlbjEoZmFsc2UpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWxVcGRhdGUodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0T3BlbjEoZmFsc2UpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbFVwZGF0ZShmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlY2lzaW9uID0gKG5hdmlnYXRlKSA9PiB7XHJcbiAgICAvL05hdmlnYXRlIEJhc2VkIG9uIHRoIERlY2lzaW9uXHJcbiAgICBpZiAobmF2aWdhdGUgPT09ICdwcmV2aW91cycpIHtcclxuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0ZSA9PT0gJ3N0YXknKSB7XHJcbiAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHN0YXR1c1B1cmNoYXNlID0gJ0ludm9pY2VkJ1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdFN0YXR1c1VwZGF0ZSA9IGFzeW5jIChSZWZlcmVuY2VJbmZvKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBzdGF0dXM6IHN0YXR1c1B1cmNoYXNlLFxyXG4gICAgICBSZWZlcmVuY2VOYW1lMjogUmVmZXJlbmNlSW5mbyxcclxuICAgICAgc3RhdHVzSW5mbzogJ0NvbXBsZXRlZCdcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtcHVyY2hhc2UvJHtpZH1gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0U3RhdHVzUHJvamVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHN0YXR1czogJ0NvbXBsZXRlZCdcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtcHJvamVjdHMvJHtwcm9qZWN0SWR9YCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtpZEludm9pY2UsIHNldElkSW52b2ljZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uID0gYXN5bmMgKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9OdW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogUmVmZXJlbmNlSW5mbyxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIENyZWF0ZWQgJyxcclxuICAgICAgcmVhc29uOiBgSU5WLSR7U3RyaW5nKFJlZmVyZW5jZUluZm9OdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9IEZvciAke2N1c3RvbWVyTmFtZS5jdXN0b21lck5hbWV9YCxcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogbmV3IERhdGUoKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2F2aW5nKCd0cnVlJylcclxuICAgIGxldCBzdGF0dXMgPSAnJ1xyXG4gICAgaWYgKHRvdGFsID4gMCAmJiB0b3RhbCA8IHRvdGFsSW52b2ljZSkge1xyXG4gICAgICBzdGF0dXMgPSAnUGFydGlhbGx5LVBhaWQnXHJcbiAgICB9IGVsc2UgaWYgKHBhcnNlRmxvYXQodG90YWwpID09PSBwYXJzZUZsb2F0KHRvdGFsSW52b2ljZSkgJiYgcGFyc2VGbG9hdCh0b3RhbCkgIT09IDApIHtcclxuICAgICAgc3RhdHVzID0gJ1BhaWQnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0dXMgPSAnUGVuZGluZydcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG92ZXJhZ2UgPSBNYXRoLm1heCgwLCBwYXJzZUZsb2F0KHRvdGFsKSAtIHBhcnNlRmxvYXQodG90YWxJbnZvaWNlKSk7XHJcbiAgICAgIGNvbnN0IGZpbmFsUGFpZEFtb3VudCA9IE1hdGgubWluKHBhcnNlRmxvYXQodG90YWwpLCBwYXJzZUZsb2F0KHRvdGFsSW52b2ljZSkpO1xyXG4gICAgICBjb25zdCBmaW5hbEJhbGFuY2VEdWUgPSBNYXRoLm1heCgwLCBwYXJzZUZsb2F0KHRvdGFsSW52b2ljZSkgLSBmaW5hbFBhaWRBbW91bnQpO1xyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChhcGlVcmwsIHtcclxuICAgICAgICBjdXN0b21lck5hbWUsXHJcbiAgICAgICAgaW52b2ljZU51bWJlcixcclxuICAgICAgICBpbnZvaWNlRGF0ZSxcclxuICAgICAgICBpbnZvaWNlRHVlRGF0ZSxcclxuICAgICAgICBpbnZvaWNlU3ViamVjdCxcclxuICAgICAgICBpbnZvaWNlRGVmZWN0LFxyXG4gICAgICAgIHN0YXR1czogZmluYWxCYWxhbmNlRHVlID09PSAwID8gJ1BhaWQnIDogKGZpbmFsUGFpZEFtb3VudCA+IDAgPyAnUGFydGlhbGx5LVBhaWQnIDogJ1NlbnQnKSxcclxuICAgICAgICBpdGVtcyxcclxuICAgICAgICBzdWJUb3RhbCwgbm90ZUluZm8sXHJcbiAgICAgICAgaW52b2ljZU5hbWUsXHJcbiAgICAgICAgaW52b2ljZVB1cmNoYXNlOiAnUHVyY2hhc2VkJyxcclxuICAgICAgICBQb3NpdGlvbjogJ0xhc3QnLFxyXG4gICAgICAgIFJlZmVyZW5jZU5hbWUyOiBpZCxcclxuICAgICAgICB0b3RhbDogZmluYWxQYWlkQW1vdW50LFxyXG4gICAgICAgIGJhbGFuY2VEdWU6IGZpbmFsQmFsYW5jZUR1ZSxcclxuICAgICAgICB0b3RhbFcsXHJcbiAgICAgICAgbm90ZSwgQ3JlYXRlLCBzaGlwcGluZywgYWRqdXN0bWVudCwgYWRqdXN0bWVudE51bWJlciwgdG90YWxJbnZvaWNlLCB0ZXJtc1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGlmIChvdmVyYWdlID4gMCkge1xyXG4gICAgICAgICAgYXdhaXQgaGFuZGxlVXBkYXRlQ3JlZGl0KG92ZXJhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBPcGVuIExvYWRpbmcgVmlld1xyXG4gICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm8gPSByZXMuZGF0YS5kYXRhLl9pZFxyXG4gICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm9OdW1iZXIgPSByZXMuZGF0YS5kYXRhLmludm9pY2VOdW1iZXJcclxuICAgICAgICBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oUmVmZXJlbmNlSW5mbywgUmVmZXJlbmNlSW5mb051bWJlcilcclxuICAgICAgICBoYW5kbGVTdWJtaXRTdGF0dXNVcGRhdGUoUmVmZXJlbmNlSW5mbyk7XHJcbiAgICAgICAgaGFuZGxlU3VibWl0U3RhdHVzUHJvamVjdCgpO1xyXG4gICAgICAgIHNldElkSW52b2ljZShyZXMuZGF0YS5kYXRhLl9pZClcclxuICAgICAgICAvL3N1Ym1pdCBJdGVtXHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBzZXRTYXZpbmcoJycpXHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIGNvbnN0IFtzZWFyY2gyLCBzZXRTZWFyY2gyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2gyID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcclxuICAgIHNldFNlYXJjaDIodmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IG5ld0FycmF5MiA9IHNlYXJjaDIgIT09ICcnID8gaXRlbXMuZmlsdGVyKChJdGVtKSA9PlxyXG4gICAgSXRlbS5pdGVtTmFtZSAmJiBJdGVtLml0ZW1OYW1lLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoMi50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgSXRlbS5pdGVtRGVzY3JpcHRpb24gJiYgSXRlbS5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gyLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICYmIEl0ZW0ubmV3RGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gyLnRvTG93ZXJDYXNlKCkpXHJcbiAgKSA6IGl0ZW1zXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENvbnZlcnQgdG8gSW52b2ljZVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW5CYWNrfT5cclxuICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlQWRtaW5WaWV3IG5hbWU9e3VzZXIuZGF0YS51c2VyTmFtZX0gcm9sZT17dXNlci5kYXRhLnJvbGV9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT57dXNlci5kYXRhLnVzZXJOYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNpZGVCYXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2lkZUJhcihmYWxzZSl9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaDEgLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDQgfX0gPlxyXG4gICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9IGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdjdXN0b21lck5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdjdXN0b21lck5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQ3VzdG9tZXIgTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21lciA/IGN1c3RvbWVyLmN1c3RvbWVyTmFtZSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cImludm9pY2VOdW1iZXJcIj5JbnZvaWNlIE51bWJlcjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2ludm9pY2VOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2ludm9pY2VOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdJbnZvaWNlIE51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ludm9pY2VOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW52b2ljZU51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPklOVi08L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpbnZvaWNlRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoaW52b2ljZURhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2ludm9pY2VEdWVEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEdWUgRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoaW52b2ljZUR1ZURhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0SW52b2ljZUR1ZURhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2ludm9pY2VTdWJqZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0naW52b2ljZVN1YmplY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU3ViamVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnZvaWNlU3ViamVjdCAhPT0gdW5kZWZpbmVkID8gaW52b2ljZVN1YmplY3QgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW52b2ljZVN1YmplY3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0naW52b2ljZURlZmVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2ludm9pY2VEZWZlY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGVmZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ludm9pY2VEZWZlY3QgIT09IHVuZGVmaW5lZCA/IGludm9pY2VEZWZlY3QgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW52b2ljZURlZmVjdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdub3RlSW5mbydcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25vdGVJbmZvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vdGVJbmZvICE9PSB1bmRlZmluZWQgPyBub3RlSW5mbyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J05vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5vdGVJbmZvKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JywgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nU2VhcmNoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD0nc2VhcmNoMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaDJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2gyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJywgcG9zaXRpb246ICdmaXhlZCcsIHpJbmRleDogMSwgZmxvYXQ6ICdyaWdodCcsIHJpZ2h0OiAnLTVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkFkZFwiIHBsYWNlbWVudD1cInRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2FkZEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnIHN0eWxlPXt7IGZvbnRTaXplOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXthZGRJdGVtV2hpdGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2dyYXknLCBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlci5kYXRhLnJvbGUgPT09ICdDRU8nID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17aGFuZGxlRHJhZ0VuZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZUluZm8xMCcgc3R5bGU9e3sgbWFyZ2luTGVmdDogJy0yMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGlzY291bnQgJTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRyb3BwYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcm9wcGFibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25ld0FycmF5Mi5tYXAoKEl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17SXRlbS5pZFJvd30gZHJhZ2dhYmxlSWQ9e2Bkcm9wcGFibGUke0l0ZW0uaWRSb3d9YH0gaW5kZXg9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhwcm92aWRlZCwgc25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLm5ld0Rlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID48RHJhZ0luZGljYXRvclJvdW5kZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs2fT48VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmV3RGVzY3JpcHRpb24nIGlkPSduZXdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLm5ld0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oSXRlbS5pZFJvdyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGhlaWdodDogJzEwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLCBnYXA6ICcxNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW1UaHVtYm5haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtSWQ9e0l0ZW0uaXRlbU5hbWU/Ll9pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsRGF0YT17SXRlbS5kYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxUeXBlPXtJdGVtLmNvbnRlbnRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGhpZGRlbj17SXRlbS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPT09ICdlbXB0eScgOiAnJ30gc3g9e3sgZm9udFNpemU6ICcyMHB4JywgZm9udFdlaWdodDogJ2JvbGQnIH19PntJdGVtLml0ZW1OYW1lPy5pdGVtTmFtZT8udG9VcHBlckNhc2UoKSB8fCAnJ308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURlc2NyaXB0aW9uJyBpZD0naXRlbURlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNDQwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGUoSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0uaXRlbU5hbWU/Ll9pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJFZGl0XCIgcGxhY2VtZW50PSdib3R0b20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5JdGVtVXBkYXRlKEl0ZW0uaXRlbU5hbWU/Ll9pZCl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0IHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtmaWx0ZXJJdGVtSW5mb3JtYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uaXRlbU5hbWUgKyAnLycgKyBvcHRpb24uaXRlbUJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9PntvcHRpb24uaXRlbU5hbWUgKyAnLycgKyBvcHRpb24uaXRlbUJyYW5kfTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fSB7Li4ucGFyYW1zfSByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucywgeyBpbnB1dFZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbU5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtQnJhbmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBoYW5kbGVDaGFuZ2VJdGVtKEl0ZW0uaWRSb3csIG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFwZXJDb21wb25lbnQ9eyh7IGNoaWxkcmVuLCAuLi5vdGhlciB9KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQUREIE5FVyBJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNDcwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J3RvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbihJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1RdHknIGlkPSdpdGVtUXR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1RdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUmF0ZScgaWQ9J2l0ZW1SYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUmF0ZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURpc2NvdW50JyBpZD0naXRlbURpc2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzEgdG8gNSAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPSdhbW91bnRUb3RhbEludm9pY2UnPntOdW1iZXIoSXRlbS5pdGVtQW1vdW50IHx8IDApLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICctMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+SXRlbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RvY2stQTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRpc2NvdW50ICU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPVwiZHJvcHBhYmxlXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkcm9wcGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuZXdBcnJheTIubWFwKChJdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZSBrZXk9e0l0ZW0uaWRSb3d9IGRyYWdnYWJsZUlkPXtgZHJvcHBhYmxlJHtJdGVtLmlkUm93fWB9IGluZGV4PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB7Li4ucHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfSA+PERyYWdJbmRpY2F0b3JSb3VuZGVkIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Nn0+PFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25ld0Rlc2NyaXB0aW9uJyBpZD0nbmV3RGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5uZXdEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID48RHJhZ0luZGljYXRvclJvdW5kZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBoZWlnaHQ6ICcxMDBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0uaXRlbU5hbWU/Lml0ZW1OYW1lID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaGlkZGVuPXtJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA9PT0gJ2VtcHR5JyA6ICcnfSBzeD17eyBmb250U2l6ZTogJzIzcHgnIH19PntJdGVtLml0ZW1OYW1lPy5pdGVtTmFtZT8udG9VcHBlckNhc2UoKSB8fCAnJ308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURlc2NyaXB0aW9uJyBpZD0naXRlbURlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZShJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZT8uX2lkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkVkaXRcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3Blbkl0ZW1VcGRhdGUoSXRlbS5pdGVtTmFtZT8uX2lkKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2ZpbHRlckl0ZW1JbmZvcm1hdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+ICg8Qm94IHsuLi5wcm9wc30+e29wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9IHsuLi5wYXJhbXN9IHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWUobmV3SW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbnM9eyhvcHRpb25zLCB7IGlucHV0VmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1CcmFuZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZUl0ZW0oSXRlbS5pZFJvdywgbmV3VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXBlckNvbXBvbmVudD17KHsgY2hpbGRyZW4sIC4uLm90aGVyIH0pID0+IChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB7Li4ub3RoZXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgbGVmdDogJzAnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMihlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNycgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NzBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZURlc2NyaXB0aW9uKEl0ZW0uaWRSb3cpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RvY2snIGlkPSdzdG9jaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uc3RvY2t9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBJdGVtLmlkUm93KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVF0eScgaWQ9J2l0ZW1RdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIEl0ZW0uaWRSb3cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbVF0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1SYXRlJyBpZD0naXRlbVJhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1SYXRlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtRGlzY291bnQnIGlkPSdpdGVtRGlzY291bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EaXNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSwgSXRlbS5pZFJvdyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nMSB0byA1ICUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9J2Ftb3VudFRvdGFsSW52b2ljZSc+e051bWJlcihJdGVtLml0ZW1BbW91bnQgfHwgMCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcyMHB4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J25vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0ludm9pY2UgTm90ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc1MCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiZmlyc3RUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+U3ViLVRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3N1YlRvdGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N1YlRvdGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N1YlRvdGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+U2hpcHBpbmcgRmVlczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3NoaXBwaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3NoaXBwaW5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NoaXBwaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTaGlwcGluZyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2FkanVzdG1lbnQnIGlkPSdhZGp1c3RtZW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWRqdXN0bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZGp1c3RtZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcyNTBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBibGFjaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdhZGp1c3RtZW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2FkanVzdG1lbnROdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YWRqdXN0bWVudE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWRqdXN0bWVudE51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ndG90YWxJbnZvaWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3RvdGFsSW52b2ljZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbEludm9pY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5CYWxhbmNlIER1ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2JhbGFuY2VEdWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYmFsYW5jZUR1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYWxhbmNlRHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlRvdGFsIEluIFdvcmRzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRvdGFsV1wiIGlkPVwidG90YWxXXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWxXfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0ndGVybXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0ZXJtcydcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXJtc31cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdJbnZvaWNlIFRlcm1zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXJtcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzYwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNhdmluZyAhPT0gJ3RydWUnID8gPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj4gOiA8cCBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5TYXZpbmcuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbjF9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VCYWNrfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkRvIHlvdSB3YW50IHRvIHN0b3AgY3JlYXRpbmcgSW52b2ljZSA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKC0xKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19Pk5vPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17c2hvd01vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlUm93SWR9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VSb3dJZH0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlBsZWFzZSBzZWxlY3QgdGhlIHJvdyB0byBhc3NpZ24gdGhlIHRvdGFsIHRvOiA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsPkl0ZW0gTmFtZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJpdGVtTmFtZVJvd1wiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YXJnZXRSb3dJZH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUYXJnZXRSb3dJZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJpdGVtTmFtZVJvd1wiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSXRlbSBOYW1lPFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlkUm93ICE9PSBzZWxlY3RlZFJvd0lkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17aXRlbS5pZFJvd30gdmFsdWU9e2l0ZW0uaWRSb3d9PntpdGVtLml0ZW1OYW1lLml0ZW1OYW1lfTwvTWVudUl0ZW0+KVxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fSBvbkNsaWNrPXtkZWxldGVJdGVtfT4gQ29uZmlybSA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3N0YXknKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIEFkZCBOZXdcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNpc2lvbigncHJldmlvdXMnKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e0Vycm9yT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRXJyb3J9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENhbmNlbEljb24gc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlNhdmluZyBGYWlsZWQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsVXBkYXRlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvSW52b2ljZVZpZXdBZG1pbkFsbC8ke2lkSW52b2ljZX1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICc2MDBweCcsIHBhZGRpbmc6ICcyMHB4Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBvdmVyZmxvd1k6ICdzY3JvbGwnIH19PlxyXG4gICAgICAgICAgICA8SXRlbUZvcm1WaWV3MiBvbkNyZWF0ZU9wdGlvbj17aGFuZGxlQ3JlYXRlSXRlbX0gb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuSXRlbVVwZGF0ZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUl0ZW1VcGRhdGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlSXRlbVVwZGF0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzYwMHB4JywgcGFkZGluZzogJzIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgIDxJdGVtVXBkYXRlVmlldzIgb25DbG9zZT17aGFuZGxlQ2xvc2VJdGVtVXBkYXRlfSBpZD17aWRJdGVtfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnZlcnRUb0ludm9pY2VcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBdmF0YXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCBTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TaG9wcGluZ0NhcnRPdXRsaW5lZCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vYXBpQ29uZmlnJztcblxuY29uc3QgSXRlbVRodW1ibmFpbCA9ICh7IGl0ZW1JZCwgaW5pdGlhbERhdGEsIGluaXRpYWxUeXBlIH0pID0+IHtcbiAgY29uc3QgW3NyYywgc2V0U3JjXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hJbWFnZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIC8vIDEuIENoZWNrIGZvciBpbml0aWFsRGF0YSAocGFzc2VkIGZyb20gc2VhcmNoL3Nob3ApXG4gICAgICBpZiAoaW5pdGlhbERhdGEgJiYgaW5pdGlhbFR5cGUgJiYgaW5pdGlhbERhdGEgIT09IFwidW5kZWZpbmVkXCIgJiYgaW5pdGlhbFR5cGUgIT09IFwidW5kZWZpbmVkXCIgJiYgaW5pdGlhbERhdGEgIT09IFwibnVsbFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaW5pdGlhbERhdGEgPT09ICdzdHJpbmcnICYmIGluaXRpYWxEYXRhLmxlbmd0aCA+IDUwKSB7XG4gICAgICAgICAgIC8vIENoZWNrIGlmIGl0J3MgYWxyZWFkeSBhIGRhdGEgVVJMXG4gICAgICAgICAgIGlmIChpbml0aWFsRGF0YS5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICAgIHNldFNyYyhpbml0aWFsRGF0YSk7XG4gICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNldFNyYyhgZGF0YToke2luaXRpYWxUeXBlfTtiYXNlNjQsJHtpbml0aWFsRGF0YX1gKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbERhdGEuZGF0YSkge1xuICAgICAgICAgICAvLyBIYW5kbGUgYnVmZmVyIG9iamVjdCBpZiBpdCdzIG5vdCBjb252ZXJ0ZWQgdG8gc3RyaW5nIHlldFxuICAgICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgVWludDhBcnJheShpbml0aWFsRGF0YS5kYXRhKTtcbiAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7IHR5cGU6IGluaXRpYWxUeXBlIH0pO1xuICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gc2V0U3JjKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChibG9iKTtcbiAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIDIuIEZhbGxiYWNrIHRvIGZldGNoIGlmIG5vIGluaXRpYWwgZGF0YSBvciBpZiBpdCB3YXMgaW52YWxpZFxuICAgICAgaWYgKCFpdGVtSWQgfHwgaXRlbUlkID09PSBcInVuZGVmaW5lZFwiIHx8IGl0ZW1JZCA9PT0gXCJudWxsXCIpIHtcbiAgICAgICAgc2V0U3JjKG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pdGVtLyR7aXRlbUlkfWApO1xuICAgICAgICBpZiAocmVzLmRhdGEuZGF0YSAmJiByZXMuZGF0YS5kYXRhLmRhdGEpIHtcbiAgICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgVWludDhBcnJheShyZXMuZGF0YS5kYXRhLmRhdGEuZGF0YSk7XG4gICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7IHR5cGU6IHJlcy5kYXRhLmRhdGEuY29udGVudFR5cGUgfSk7XG4gICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gc2V0U3JjKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBvbmxpbmUgaW1hZ2U6XCIsIGVycik7XG4gICAgICAgIHNldFNyYyhudWxsKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoSW1hZ2UoKTtcbiAgfSwgW2l0ZW1JZCwgaW5pdGlhbERhdGEsIGluaXRpYWxUeXBlXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxBdmF0YXJcbiAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgIHNyYz17c3JjfVxuICAgICAgc3g9e3sgd2lkdGg6IDgwLCBoZWlnaHQ6IDgwLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZjBmMGYwJywgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnIH19XG4gICAgPlxuICAgICAgeyFzcmMgJiYgPFNob3BwaW5nQ2FydE91dGxpbmVkSWNvbiBzeD17eyBmb250U2l6ZTogNDAsIGNvbG9yOiAnIzk5OScgfX0gLz59XG4gICAgPC9BdmF0YXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtVGh1bWJuYWlsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL2Nzcy9TaWRlYmFyTmV3LnNjc3MnXHJcbmltcG9ydCB7IE91dGxldCwgTmF2TGluaywgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBQZXJtSWRlbnRpdHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGVybUlkZW50aXR5JztcclxuaW1wb3J0IExpc3RBbHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTGlzdEFsdCc7XHJcbmltcG9ydCBEZXNjcmlwdGlvbkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZXNjcmlwdGlvbic7XHJcbmltcG9ydCBSZWNlaXB0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1JlY2VpcHQnO1xyXG5pbXBvcnQgTW92aW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vdmluZyc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5ncyc7XHJcbmltcG9ydCBJbnNlcnREcml2ZUZpbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSW5zZXJ0RHJpdmVGaWxlJztcclxuaW1wb3J0IFJlc3RvcmVQYWdlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jlc3RvcmVQYWdlJztcclxuaW1wb3J0IFJlcXVlc3RRdW90ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZXF1ZXN0UXVvdGUnO1xyXG5pbXBvcnQgTW9uZXRpemF0aW9uT25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9uZXRpemF0aW9uT24nO1xyXG5pbXBvcnQgRW5naW5lZXJpbmdJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRW5naW5lZXJpbmcnO1xyXG5pbXBvcnQgeyBFeHBsaWNpdCwgU2hvcHBpbmdCYWdPdXRsaW5lZCB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUm9vbVByZWZlcmVuY2VzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jvb21QcmVmZXJlbmNlcyc7XHJcbmltcG9ydCB7IExpc3RJdGVtQnV0dG9uLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUGF5bWVudEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QYXltZW50JztcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0JztcclxuZnVuY3Rpb24gU2lkZWJhckRhc2gxKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxEYXNoYm9hcmRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGFzaGJvYXJkXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxQZXJtSWRlbnRpdHlJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ3VzdG9tZXJcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSAgPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TGlzdEFsdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJTdG9yZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UmVxdWVzdFF1b3RlSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlF1b3RhdGlvblwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPERlc2NyaXB0aW9uSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkludm9pY2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxNb25ldGl6YXRpb25Pbkljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQYXltZW50XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8U2hvcHBpbmdCYWdPdXRsaW5lZCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhaWx5IEV4cGVuc2VzXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJvb21QcmVmZXJlbmNlc0ljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQcm9qZWN0XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UmVjZWlwdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQdXJjaGFzZXMgUmVxdWVzdFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8RW5naW5lZXJpbmdJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTWFpbnRlbmFuY2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJNb3JlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckRhc2gxIiwiJ3VzZSBzdHJpY3QnOyBcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdG9PcmRpbmFsOiByZXF1aXJlKCcuL3RvT3JkaW5hbCcpLFxuICAgIHRvV29yZHM6IHJlcXVpcmUoJy4vdG9Xb3JkcycpLFxuICAgIHRvV29yZHNPcmRpbmFsOiByZXF1aXJlKCcuL3RvV29yZHNPcmRpbmFsJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFNpbXBsaWZpZWQgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbWFybHVuNzgvODg1ZWIwMDIxZTk4MGM2Y2UwZmJcbmZ1bmN0aW9uIGlzRmluaXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuICEodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyB8fCB2YWx1ZSAhPT0gdmFsdWUgfHwgdmFsdWUgPT09IEluZmluaXR5IHx8IHZhbHVlID09PSAtSW5maW5pdHkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRmluaXRlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IHJlcXVpcmUoJy4vbWF4U2FmZUludGVnZXInKTtcblxuZnVuY3Rpb24gaXNTYWZlTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTWF0aC5hYnModmFsdWUpIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTYWZlTnVtYmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRU5EU19XSVRIX0RPVUJMRV9aRVJPX1BBVFRFUk4gPSAvKGh1bmRyZWR8dGhvdXNhbmR8KG18Ynx0cnxxdWFkcilpbGxpb24pJC87XG52YXIgRU5EU19XSVRIX1RFRU5fUEFUVEVSTiA9IC90ZWVuJC87XG52YXIgRU5EU19XSVRIX1lfUEFUVEVSTiA9IC95JC87XG52YXIgRU5EU19XSVRIX1pFUk9fVEhST1VHSF9UV0VMVkVfUEFUVEVSTiA9IC8oemVyb3xvbmV8dHdvfHRocmVlfGZvdXJ8Zml2ZXxzaXh8c2V2ZW58ZWlnaHR8bmluZXx0ZW58ZWxldmVufHR3ZWx2ZSkkLztcbnZhciBvcmRpbmFsTGVzc1RoYW5UaGlydGVlbiA9IHtcbiAgICB6ZXJvOiAnemVyb3RoJyxcbiAgICBvbmU6ICdmaXJzdCcsXG4gICAgdHdvOiAnc2Vjb25kJyxcbiAgICB0aHJlZTogJ3RoaXJkJyxcbiAgICBmb3VyOiAnZm91cnRoJyxcbiAgICBmaXZlOiAnZmlmdGgnLFxuICAgIHNpeDogJ3NpeHRoJyxcbiAgICBzZXZlbjogJ3NldmVudGgnLFxuICAgIGVpZ2h0OiAnZWlnaHRoJyxcbiAgICBuaW5lOiAnbmludGgnLFxuICAgIHRlbjogJ3RlbnRoJyxcbiAgICBlbGV2ZW46ICdlbGV2ZW50aCcsXG4gICAgdHdlbHZlOiAndHdlbGZ0aCdcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBudW1iZXItd29yZCBpbnRvIGFuIG9yZGluYWwgbnVtYmVyLXdvcmQuXG4gKiBAZXhhbXBsZSBtYWtlT3JkaW5hbCgnb25lJykgPT4gJ2ZpcnN0J1xuICogQHBhcmFtIHtzdHJpbmd9IHdvcmRzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBtYWtlT3JkaW5hbCh3b3Jkcykge1xuICAgIC8vIEVuZHMgd2l0aCAqMDAgKDEwMCwgMTAwMCwgZXRjLikgb3IgKnRlZW4gKDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5KVxuICAgIGlmIChFTkRTX1dJVEhfRE9VQkxFX1pFUk9fUEFUVEVSTi50ZXN0KHdvcmRzKSB8fCBFTkRTX1dJVEhfVEVFTl9QQVRURVJOLnRlc3Qod29yZHMpKSB7XG4gICAgICAgIHJldHVybiB3b3JkcyArICd0aCc7XG4gICAgfVxuICAgIC8vIEVuZHMgd2l0aCAqeSAoMjAsIDMwLCA0MCwgNTAsIDYwLCA3MCwgODAsIDkwKVxuICAgIGVsc2UgaWYgKEVORFNfV0lUSF9ZX1BBVFRFUk4udGVzdCh3b3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHdvcmRzLnJlcGxhY2UoRU5EU19XSVRIX1lfUEFUVEVSTiwgJ2lldGgnKTtcbiAgICB9XG4gICAgLy8gRW5kcyB3aXRoIG9uZSB0aHJvdWdoIHR3ZWx2ZVxuICAgIGVsc2UgaWYgKEVORFNfV0lUSF9aRVJPX1RIUk9VR0hfVFdFTFZFX1BBVFRFUk4udGVzdCh3b3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHdvcmRzLnJlcGxhY2UoRU5EU19XSVRIX1pFUk9fVEhST1VHSF9UV0VMVkVfUEFUVEVSTiwgcmVwbGFjZVdpdGhPcmRpbmFsVmFyaWFudCk7XG4gICAgfVxuICAgIHJldHVybiB3b3Jkcztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVdpdGhPcmRpbmFsVmFyaWFudChtYXRjaCwgbnVtYmVyV29yZCkge1xuICAgIHJldHVybiBvcmRpbmFsTGVzc1RoYW5UaGlydGVlbltudW1iZXJXb3JkXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYWtlT3JkaW5hbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1BWF9TQUZFX0lOVEVHRVI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaXNGaW5pdGUnKTtcbnZhciBpc1NhZmVOdW1iZXIgPSByZXF1aXJlKCcuL2lzU2FmZU51bWJlcicpO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGludGVnZXIgaW50byBhIHN0cmluZyB3aXRoIGFuIG9yZGluYWwgcG9zdGZpeC5cbiAqIElmIG51bWJlciBpcyBkZWNpbWFsLCB0aGUgZGVjaW1hbHMgd2lsbCBiZSByZW1vdmVkLlxuICogQGV4YW1wbGUgdG9PcmRpbmFsKDEyKSA9PiAnMTJ0aCdcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b09yZGluYWwobnVtYmVyKSB7XG4gICAgdmFyIG51bSA9IHBhcnNlSW50KG51bWJlciwgMTApO1xuXG4gICAgaWYgKCFpc0Zpbml0ZShudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnTm90IGEgZmluaXRlIG51bWJlcjogJyArIG51bWJlciArICcgKCcgKyB0eXBlb2YgbnVtYmVyICsgJyknXG4gICAgICAgICk7XG4gICAgfVxuICAgIGlmICghaXNTYWZlTnVtYmVyKG51bSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgICAnSW5wdXQgaXMgbm90IGEgc2FmZSBudW1iZXIsIGl04oCZcyBlaXRoZXIgdG9vIGxhcmdlIG9yIHRvbyBzbWFsbC4nXG4gICAgICAgICk7XG4gICAgfVxuICAgIHZhciBzdHIgPSBTdHJpbmcobnVtKTtcbiAgICB2YXIgbGFzdFR3b0RpZ2l0cyA9IE1hdGguYWJzKG51bSAlIDEwMCk7XG4gICAgdmFyIGJldHdlZW5FbGV2ZW5BbmRUaGlydGVlbiA9IGxhc3RUd29EaWdpdHMgPj0gMTEgJiYgbGFzdFR3b0RpZ2l0cyA8PSAxMztcbiAgICB2YXIgbGFzdENoYXIgPSBzdHIuY2hhckF0KHN0ci5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gc3RyICsgKGJldHdlZW5FbGV2ZW5BbmRUaGlydGVlbiA/ICd0aCdcbiAgICAgICAgICAgIDogbGFzdENoYXIgPT09ICcxJyA/ICdzdCdcbiAgICAgICAgICAgIDogbGFzdENoYXIgPT09ICcyJyA/ICduZCdcbiAgICAgICAgICAgIDogbGFzdENoYXIgPT09ICczJyA/ICdyZCdcbiAgICAgICAgICAgIDogJ3RoJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9PcmRpbmFsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWFrZU9yZGluYWwgPSByZXF1aXJlKCcuL21ha2VPcmRpbmFsJyk7XG52YXIgaXNGaW5pdGUgPSByZXF1aXJlKCcuL2lzRmluaXRlJyk7XG52YXIgaXNTYWZlTnVtYmVyID0gcmVxdWlyZSgnLi9pc1NhZmVOdW1iZXInKTtcblxudmFyIFRFTiA9IDEwO1xudmFyIE9ORV9IVU5EUkVEID0gMTAwO1xudmFyIE9ORV9USE9VU0FORCA9IDEwMDA7XG52YXIgT05FX01JTExJT04gPSAxMDAwMDAwO1xudmFyIE9ORV9CSUxMSU9OID0gMTAwMDAwMDAwMDsgICAgICAgICAgIC8vICAgICAgICAgMS4wMDAuMDAwLjAwMCAoOSlcbnZhciBPTkVfVFJJTExJT04gPSAxMDAwMDAwMDAwMDAwOyAgICAgICAvLyAgICAgMS4wMDAuMDAwLjAwMC4wMDAgKDEyKVxudmFyIE9ORV9RVUFEUklMTElPTiA9IDEwMDAwMDAwMDAwMDAwMDA7IC8vIDEuMDAwLjAwMC4wMDAuMDAwLjAwMCAoMTUpXG52YXIgTUFYID0gOTAwNzE5OTI1NDc0MDk5MjsgICAgICAgICAgICAgLy8gOS4wMDcuMTk5LjI1NC43NDAuOTkyICgxNSlcblxudmFyIExFU1NfVEhBTl9UV0VOVFkgPSBbXG4gICAgJ3plcm8nLCAnb25lJywgJ3R3bycsICd0aHJlZScsICdmb3VyJywgJ2ZpdmUnLCAnc2l4JywgJ3NldmVuJywgJ2VpZ2h0JywgJ25pbmUnLCAndGVuJyxcbiAgICAnZWxldmVuJywgJ3R3ZWx2ZScsICd0aGlydGVlbicsICdmb3VydGVlbicsICdmaWZ0ZWVuJywgJ3NpeHRlZW4nLCAnc2V2ZW50ZWVuJywgJ2VpZ2h0ZWVuJywgJ25pbmV0ZWVuJ1xuXTtcblxudmFyIFRFTlRIU19MRVNTX1RIQU5fSFVORFJFRCA9IFtcbiAgICAnemVybycsICd0ZW4nLCAndHdlbnR5JywgJ3RoaXJ0eScsICdmb3J0eScsICdmaWZ0eScsICdzaXh0eScsICdzZXZlbnR5JywgJ2VpZ2h0eScsICduaW5ldHknXG5dO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGludGVnZXIgaW50byB3b3Jkcy5cbiAqIElmIG51bWJlciBpcyBkZWNpbWFsLCB0aGUgZGVjaW1hbHMgd2lsbCBiZSByZW1vdmVkLlxuICogQGV4YW1wbGUgdG9Xb3JkcygxMikgPT4gJ3R3ZWx2ZSdcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFthc09yZGluYWxdIC0gRGVwcmVjYXRlZCwgdXNlIHRvV29yZHNPcmRpbmFsKCkgaW5zdGVhZCFcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRvV29yZHMobnVtYmVyLCBhc09yZGluYWwpIHtcbiAgICB2YXIgd29yZHM7XG4gICAgdmFyIG51bSA9IHBhcnNlSW50KG51bWJlciwgMTApO1xuXG4gICAgaWYgKCFpc0Zpbml0ZShudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnTm90IGEgZmluaXRlIG51bWJlcjogJyArIG51bWJlciArICcgKCcgKyB0eXBlb2YgbnVtYmVyICsgJyknXG4gICAgICAgICk7XG4gICAgfVxuICAgIGlmICghaXNTYWZlTnVtYmVyKG51bSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgICAnSW5wdXQgaXMgbm90IGEgc2FmZSBudW1iZXIsIGl04oCZcyBlaXRoZXIgdG9vIGxhcmdlIG9yIHRvbyBzbWFsbC4nXG4gICAgICAgICk7XG4gICAgfVxuICAgIHdvcmRzID0gZ2VuZXJhdGVXb3JkcyhudW0pO1xuICAgIHJldHVybiBhc09yZGluYWwgPyBtYWtlT3JkaW5hbCh3b3JkcykgOiB3b3Jkcztcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVXb3JkcyhudW1iZXIpIHtcbiAgICB2YXIgcmVtYWluZGVyLCB3b3JkLFxuICAgICAgICB3b3JkcyA9IGFyZ3VtZW50c1sxXTtcblxuICAgIC8vIFdl4oCZcmUgZG9uZVxuICAgIGlmIChudW1iZXIgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICF3b3JkcyA/ICd6ZXJvJyA6IHdvcmRzLmpvaW4oJyAnKS5yZXBsYWNlKC8sJC8sICcnKTtcbiAgICB9XG4gICAgLy8gRmlyc3QgcnVuXG4gICAgaWYgKCF3b3Jkcykge1xuICAgICAgICB3b3JkcyA9IFtdO1xuICAgIH1cbiAgICAvLyBJZiBuZWdhdGl2ZSwgcHJlcGVuZCDigJxtaW51c+KAnVxuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIHdvcmRzLnB1c2goJ21pbnVzJyk7XG4gICAgICAgIG51bWJlciA9IE1hdGguYWJzKG51bWJlcik7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlciA8IDIwKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IDA7XG4gICAgICAgIHdvcmQgPSBMRVNTX1RIQU5fVFdFTlRZW251bWJlcl07XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9IVU5EUkVEKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIFRFTjtcbiAgICAgICAgd29yZCA9IFRFTlRIU19MRVNTX1RIQU5fSFVORFJFRFtNYXRoLmZsb29yKG51bWJlciAvIFRFTildO1xuICAgICAgICAvLyBJbiBjYXNlIG9mIHJlbWFpbmRlciwgd2UgbmVlZCB0byBoYW5kbGUgaXQgaGVyZSB0byBiZSBhYmxlIHRvIGFkZCB0aGUg4oCcLeKAnVxuICAgICAgICBpZiAocmVtYWluZGVyKSB7XG4gICAgICAgICAgICB3b3JkICs9ICctJyArIExFU1NfVEhBTl9UV0VOVFlbcmVtYWluZGVyXTtcbiAgICAgICAgICAgIHJlbWFpbmRlciA9IDA7XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX1RIT1VTQU5EKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9IVU5EUkVEO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9IVU5EUkVEKSkgKyAnIGh1bmRyZWQnO1xuXG4gICAgfSBlbHNlIGlmIChudW1iZXIgPCBPTkVfTUlMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfVEhPVVNBTkQ7XG4gICAgICAgIHdvcmQgPSBnZW5lcmF0ZVdvcmRzKE1hdGguZmxvb3IobnVtYmVyIC8gT05FX1RIT1VTQU5EKSkgKyAnIHRob3VzYW5kLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9CSUxMSU9OKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9NSUxMSU9OO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9NSUxMSU9OKSkgKyAnIG1pbGxpb24sJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX1RSSUxMSU9OKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9CSUxMSU9OO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9CSUxMSU9OKSkgKyAnIGJpbGxpb24sJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX1FVQURSSUxMSU9OKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9UUklMTElPTjtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfVFJJTExJT04pKSArICcgdHJpbGxpb24sJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDw9IE1BWCkge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfUVVBRFJJTExJT047XG4gICAgICAgIHdvcmQgPSBnZW5lcmF0ZVdvcmRzKE1hdGguZmxvb3IobnVtYmVyIC8gT05FX1FVQURSSUxMSU9OKSkgK1xuICAgICAgICAnIHF1YWRyaWxsaW9uLCc7XG4gICAgfVxuXG4gICAgd29yZHMucHVzaCh3b3JkKTtcbiAgICByZXR1cm4gZ2VuZXJhdGVXb3JkcyhyZW1haW5kZXIsIHdvcmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1dvcmRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWFrZU9yZGluYWwgPSByZXF1aXJlKCcuL21ha2VPcmRpbmFsJyk7XG52YXIgdG9Xb3JkcyA9IHJlcXVpcmUoJy4vdG9Xb3JkcycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyIGludG8gb3JkaW5hbCB3b3Jkcy5cbiAqIEBleGFtcGxlIHRvV29yZHNPcmRpbmFsKDEyKSA9PiAndHdlbGZ0aCdcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b1dvcmRzT3JkaW5hbChudW1iZXIpIHtcbiAgICB2YXIgd29yZHMgPSB0b1dvcmRzKG51bWJlcik7XG4gICAgcmV0dXJuIG1ha2VPcmRpbmFsKHdvcmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1dvcmRzT3JkaW5hbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhckRhc2gxIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkRlbGV0ZUljb24iLCJCYWNrZHJvcCIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJQYXBlciIsIlRhYmxlQ29udGFpbmVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsIkF1dG9jb21wbGV0ZSIsIk1vZGFsIiwiQm94Iiwic3R5bGVkIiwiT3V0bGluZWRJbnB1dCIsIklucHV0QWRvcm5tZW50IiwiRGl2aWRlciIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkNvbnRhaW5lciIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIkFkZCIsIkRyYWdJbmRpY2F0b3JSb3VuZGVkIiwiRWRpdCIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsIk5hdmlnYXRlIiwiTmF2TGluayIsInY0IiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsImRheWpzIiwiQXJyb3dCYWNrIiwiU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIiwiQWRkU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvYWRlciIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2dvdXQiLCJDbG9zZSIsIkl0ZW1Gb3JtVmlldzIiLCJJdGVtVXBkYXRlVmlldzIiLCJudW1iZXJUb1dvcmRzIiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJhZ2dhYmxlIiwiRHJvcHBhYmxlIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiSXRlbVRodW1ibmFpbCIsIkxpZ2h0VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiQmxhY2tUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJEb3duVG9vbHRpcCIsIl9yZWY1IiwiX2V4Y2x1ZGVkMyIsIl9yZWY2Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJzdHlsZTIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY3Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWY4Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiQ29udmVydFRvSW52b2ljZSIsIl91c2VQYXJhbXMiLCJpZCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldCIsInRoZW4iLCJyZXMiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJhcGlVcmwiLCJpbnZvaWNlRGF0ZSIsIkRhdGUiLCJub3ciLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJpbnZvaWNlRHVlRGF0ZSIsInNldEludm9pY2VEdWVEYXRlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJpbnZvaWNlU3ViamVjdCIsInNldEludm9pY2VTdWJqZWN0IiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJwcm9qZWN0SWQiLCJzZXRQcm9qZWN0SUQiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImludm9pY2VEZWZlY3QiLCJzZXRJbnZvaWNlRGVmZWN0IiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJpbnZvaWNlTnVtYmVyIiwic2V0SW52b2ljZU51bWJlciIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsIml0ZW1zIiwiU2V0SXRlbXMiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwicHVyY2hhc2VOYW1lIiwic2V0UHVyY2hhc2VOYW1lIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsInN1YlRvdGFsIiwic2V0U3ViVG90YWwiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwidG90YWwiLCJzZXRUb3RhbCIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJzaGlwcGluZyIsInNldFNoaXBwaW5nIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsImFkanVzdG1lbnQiLCJzZXRBZGp1c3RtZW50IiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsImFkanVzdG1lbnROdW1iZXIiLCJzZXRBZGp1c3RtZW50TnVtYmVyIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsInRvdGFsSW52b2ljZSIsInNldFRvdGFsSW52b2ljZSIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJiYWxhbmNlRHVlIiwic2V0QmFsYW5jZUR1ZSIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJ0b3RhbFciLCJzZXRUb3RhbFciLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwiSXRlbUluZm9ybWF0aW9uIiwic2V0SXRlbUluZm9ybWF0aW9uIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsIm5vdGUiLCJzZXROb3RlIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsInRlcm1zIiwic2V0VGVybXMiLCJkYXRlQ29tbWVudCIsImZvcm1hdCIsIkNyZWF0ZSIsInBlcnNvbiIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJleHBlbnNlc0luZm8iLCJzZXRFeHBlbnNlc0luZm8iLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwibm90ZUluZm8iLCJzZXROb3RlSW5mbyIsImludm9pY2VOYW1lIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJfdXNlU3RhdGU0MSIsIl91c2VTdGF0ZTQyIiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsIl91c2VTdGF0ZTQzIiwiX3VzZVN0YXRlNDQiLCJjdXN0b21lck5hbWUiLCJzZXRDdXN0b21lck5hbWUiLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2IiwiZXhwZW5zZXMiLCJzZXRFeHBlbnNlcyIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJwbGFuaW5nSW5mbyIsInNldFBsYW5pbmdJbmZvIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsInByb2plY3RBZHZhbmNlc1N1bSIsInNldFByb2plY3RBZHZhbmNlc1N1bSIsIl91c2VTdGF0ZTUxIiwiX3VzZVN0YXRlNTIiLCJjdXJyZW50Q3JlZGl0Iiwic2V0Q3VycmVudENyZWRpdCIsImZldGNoUGF5bWVudHNBbmRDcmVkaXQiLCJfcmVmOSIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX2lkIiwiX3Jlc1BheW1lbnRzJGRhdGEiLCJfeWllbGQkUHJvbWlzZSRhbGwiLCJQcm9taXNlIiwiYWxsIiwiX3lpZWxkJFByb21pc2UkYWxsMiIsInJlc1BheW1lbnRzIiwicmVzQ3VzdG9tZXIiLCJwcm9qZWN0UGF5bWVudHMiLCJmaWx0ZXIiLCJwYXkiLCJfcGF5JFRvdGFsQW1vdW50IiwiVG90YWxBbW91bnQiLCJzb21lIiwiaXRlbSIsInN1bSIsInJlZHVjZSIsImFjYyIsIl9wYXkkVG90YWxBbW91bnQkZmluZCIsInByb2plY3RBbW91bnQiLCJmaW5kIiwiYW1vdW50IiwiTnVtYmVyIiwiY3JlZGl0IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYW5kbGVVcGRhdGVDcmVkaXQiLCJfcmVmMCIsIm92ZXJhZ2UiLCJuZXdDcmVkaXQiLCJwYXJzZUZsb2F0IiwicHV0IiwiX3giLCJmZXRjaERhdGEiLCJfcmVmMSIsInByb2plY3ROYW1lIiwicHVyY2hhc2VJdGVtcyIsInByZXYiLCJlc3RpbWF0ZURlZmVjdCIsImZldGNoQ3VzdG9tZXIiLCJfcmVmMTAiLCJDdXN0b21lciIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0NpdHkiLCJwYXltZW50VGVybXMiLCJjdXJyZW50RGF0ZSIsInNldERhdGUiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJmZXRjaGxhc3ROdW1iZXIiLCJfcmVmMTEiLCJfcmVzJGRhdGEiLCJfcmVzJGRhdGEyIiwibnVtIiwicGFyc2VJbnQiLCJmZXRjaEl0ZW0iLCJfcmVmMTIiLCJyZXZlcnNlIiwibWFwIiwicm93IiwiX3JlcyRkYXRhMyIsInJlbGF0ZWQiLCJyb3cyIiwiX3JvdyRpdGVtTmFtZSIsIml0ZW1OYW1lIiwidW5kZWZpbmVkIiwiaXRlbVJhdGUiLCJpdGVtU2VsbGluZ1ByaWNlIiwidG90YWxBbW91bnQiLCJpdGVtUXR5IiwiZGlzY291bnQiLCJpdGVtRGlzY291bnQiLCJwZXJjZW50YWdlIiwiaXRlbUFtb3VudCIsInJlc0NhdGVnb3J5IiwicmVzRXhwZW5zZXMiLCJyZXNQbGFuaW5nIiwiX3Jlc0V4cGVuc2VzJGRhdGEiLCJfcmVzUGxhbmluZyRkYXRhIiwicmVzdWx0IiwiYWNjb3VudE5hbWVJbmZvIiwicmVzdWx0UGxhbmluZyIsInRvdGFsV29ya0RheSIsImRheVBheVVTZCIsIndvcmtOdW1iZXIiLCJ0b0ZpeGVkIiwiX09iamVjdCRrZXlzIiwiY2F0ZWdvcnlUb3RhbCIsImN1cnIiLCJleHBlbnNlQ2F0ZWdvcnkiLCJleHBlbnNlc0NhdGVnb3J5IiwibmV3Um93IiwibmV3Um93MSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiSXRlbSIsImkiLCJwdXNoIiwiaWRSb3ciLCJpdGVtRGVzY3JpcHRpb24iLCJ0b1VwcGVyQ2FzZSIsInRvdGFsQ29zdCIsIml0ZW1Db3N0IiwicGxhbmluZ09iamVjdCIsImVtcGxveWVlSUQiLCJuYW1lIiwiZGF5UGF5Iiwid29ya0QiLCJ0b3RhbEFtb3VudDIiLCJ0b3RhbFBheVJvbGwiLCJwcmV2SXRlbXMiLCJmaWx0ZXJlZCIsImlzRW1wbG95ZWUiLCJpc0V4cGVuc2UiLCJjYXQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiX2UkdGFyZ2V0IiwidGFyZ2V0IiwidmFsdWUiLCJsaXN0IiwiZmluZEluZGV4IiwiTWF0aCIsInJvdW5kIiwiaGFuZGxlQ2hhbmdlQ0VPIiwiX2UkdGFyZ2V0MiIsImFkZEl0ZW0iLCJpdGVtQnV5IiwiaXRlbVdlaWdodCIsInRvdGFsR2VuZXJhbGUiLCJzdG9jayIsIml0ZW1PdXQiLCJuZXdJdGVtT3V0IiwiYWRkSXRlbVdoaXRlIiwibmV3RGVzY3JpcHRpb24iLCJoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24iLCJoYW5kbGVEcmFnRW5kIiwiZGVzdGluYXRpb24iLCJuZXdJdGVtcyIsIl9uZXdJdGVtcyRzcGxpY2UiLCJzcGxpY2UiLCJzb3VyY2UiLCJpbmRleCIsIl9uZXdJdGVtcyRzcGxpY2UyIiwicmVtb3ZlZCIsImZpbHRlckl0ZW1JbmZvcm1hdGlvbiIsIm9wdGlvbiIsIl9yb3ckaXRlbU5hbWUyIiwidHlwZUl0ZW0iLCJfdXNlU3RhdGU1MyIsIl91c2VTdGF0ZTU0Iiwic2VsZWN0ZWRSb3dJZCIsInNldFNlbGVjdGVkUm93SWQiLCJfdXNlU3RhdGU1NSIsIl91c2VTdGF0ZTU2Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiX3VzZVN0YXRlNTciLCJfdXNlU3RhdGU1OCIsInRhcmdldFJvd0lkIiwic2V0VGFyZ2V0Um93SWQiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVDbG9zZVJvd0lkIiwiZGVsZXRlSXRlbSIsInJvd1RvRGVsZXRlIiwibmV3Um93SWQiLCJzZWxlY3RSb3ciLCJ0YXJnZXRSb3ciLCJuZXdUb3RhbCIsIm5ld1JhdGUiLCJuZXdUb3RhbEFtb3VudCIsImRpc2NvdW50VGFyZ2V0IiwibmV3UGVyY2VudGFnZSIsIm5ld1RvdGFsRyIsInVwZGF0ZVJhdGUiLCJfdXNlU3RhdGU1OSIsIl91c2VTdGF0ZTYwIiwib3BlbjEiLCJzZXRPcGVuMSIsImhhbmRsZU9wZW5CYWNrIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZUJhY2siLCJoYW5kbGVDaGFuZ2VJdGVtIiwibmV3VmFsdWUiLCJzZWxlY3RlZE9wdGlvbnMiLCJpdGVtQ29zdFByaWNlIiwiaXRlbVF1YW50aXR5IiwiaGFuZGxlU2hvd0F1dG9jb21wbGV0ZSIsIl91c2VTdGF0ZTYxIiwiX3VzZVN0YXRlNjIiLCJvcGVuSXRlbVVwZGF0ZSIsInNldE9wZW5JdGVtVXBkYXRlIiwiX3VzZVN0YXRlNjMiLCJfdXNlU3RhdGU2NCIsImlkSXRlbSIsInNldElkSXRlbSIsImhhbmRsZU9wZW5JdGVtVXBkYXRlIiwiX3JlZjEzIiwiX3gyIiwiaGFuZGxlQ2xvc2VJdGVtVXBkYXRlIiwiX3JlZjE0IiwiX3JvdyRpdGVtTmFtZTMiLCJfdXNlU3RhdGU2NSIsIl91c2VTdGF0ZTY2Iiwib3BlbkF1dG9jb21wbGV0ZTIiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMiIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVDcmVhdGVJdGVtIiwibmV3SXRlbSIsInJlc3VsdDEiLCJuZXdCYWxhbmNlIiwid2hvbGVQYXJ0IiwiZmxvb3IiLCJmcmFjdGlvbmFsUGFydCIsInNwbGl0Iiwid2hvbGVXb3JkcyIsInRvV29yZHMiLCJmcmFjdGlvbmFsV29yZHMiLCJfdXNlU3RhdGU2NyIsIl91c2VTdGF0ZTY4IiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGU2OSIsIl91c2VTdGF0ZTcwIiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGU3MSIsIl91c2VTdGF0ZTcyIiwibG9hZGluZ09wZW5Nb2RhbFVwZGF0ZSIsInNldExvYWRpbmdPcGVuTW9kYWxVcGRhdGUiLCJfdXNlU3RhdGU3MyIsIl91c2VTdGF0ZTc0IiwiRXJyb3JPcGVuTW9kYWwiLCJzZXRFcnJvck9wZW5Nb2RhbCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlT3BlblVwZGF0ZSIsImhhbmRsZUVycm9yIiwiaGFuZGxlQ2xvc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZUNsb3NlVXBkYXRlIiwiaGFuZGxlQ2xvc2VFcnJvciIsImhhbmRsZURlY2lzaW9uIiwiaGlzdG9yeSIsImJhY2siLCJzdGF0dXNQdXJjaGFzZSIsImhhbmRsZVN1Ym1pdFN0YXR1c1VwZGF0ZSIsIl9yZWYxNSIsIlJlZmVyZW5jZUluZm8iLCJzdGF0dXMiLCJSZWZlcmVuY2VOYW1lMiIsInN0YXR1c0luZm8iLCJfeDMiLCJoYW5kbGVTdWJtaXRTdGF0dXNQcm9qZWN0IiwiX3JlZjE2IiwiX3VzZVN0YXRlNzUiLCJfdXNlU3RhdGU3NiIsImlkSW52b2ljZSIsInNldElkSW52b2ljZSIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWYxNyIsIlJlZmVyZW5jZUluZm9OdW1iZXIiLCJpZEluZm8iLCJyZWFzb24iLCJkYXRlTm90aWZpY2F0aW9uIiwicG9zdCIsIl94NCIsIl94NSIsIl91c2VTdGF0ZTc3IiwiX3VzZVN0YXRlNzgiLCJzYXZpbmciLCJzZXRTYXZpbmciLCJoYW5kbGVTdWJtaXQiLCJfcmVmMTgiLCJtYXgiLCJmaW5hbFBhaWRBbW91bnQiLCJtaW4iLCJmaW5hbEJhbGFuY2VEdWUiLCJpbnZvaWNlUHVyY2hhc2UiLCJQb3NpdGlvbiIsIl94NiIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJfUmVhY3QkdXNlU3RhdGU0Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJfdXNlU3RhdGU3OSIsIl91c2VTdGF0ZTgwIiwic2VhcmNoMiIsInNldFNlYXJjaDIiLCJoYW5kbGVTZWFyY2gyIiwibmV3QXJyYXkyIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInN4IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm9uQ2xpY2siLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwicGFkZGluZyIsInhzIiwiZGlzYWJsZWQiLCJsYWJlbCIsImh0bWxGb3IiLCJ0eXBlIiwib25DaGFuZ2UiLCJzdGFydEFkb3JubWVudCIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsInJlcXVpcmVkIiwiZGF0ZSIsIm11bHRpbGluZSIsInJvd3MiLCJmbG9hdCIsInJpZ2h0IiwidGl0bGUiLCJwbGFjZW1lbnQiLCJvbkRyYWdFbmQiLCJkcm9wcGFibGVJZCIsInByb3ZpZGVkIiwic25hcHNob3QiLCJkcm9wcGFibGVQcm9wcyIsInJlZiIsImlubmVyUmVmIiwia2V5IiwiZHJhZ2dhYmxlSWQiLCJfSXRlbSRpdGVtTmFtZSIsIl9JdGVtJGl0ZW1OYW1lMiIsIl9JdGVtJGl0ZW1OYW1lMyIsImRyYWdnYWJsZVByb3BzIiwiRnJhZ21lbnQiLCJkcmFnSGFuZGxlUHJvcHMiLCJjb2xTcGFuIiwic2l6ZSIsImN1cnNvciIsImdhcCIsIml0ZW1JZCIsImluaXRpYWxEYXRhIiwiaW5pdGlhbFR5cGUiLCJjb250ZW50VHlwZSIsImZsZXhEaXJlY3Rpb24iLCJoaWRkZW4iLCJmb250V2VpZ2h0IiwiX0l0ZW0kaXRlbU5hbWU0IiwiZGlzYWJsZUNsZWFyYWJsZSIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIml0ZW1CcmFuZCIsInJlbmRlck9wdGlvbiIsInJlbmRlcklucHV0IiwicGFyYW1zIiwib25JbnB1dENoYW5nZSIsImV2ZW50IiwibmV3SW5wdXRWYWx1ZSIsImZpbHRlck9wdGlvbnMiLCJfcmVmMTkiLCJQYXBlckNvbXBvbmVudCIsIl9yZWYyMCIsImNoaWxkcmVuIiwib3RoZXIiLCJfZXhjbHVkZWQ0IiwibWFyZ2luVG9wIiwib25Nb3VzZURvd24iLCJwbGFjZWhvbGRlciIsInJlcGxhY2UiLCJfSXRlbSRpdGVtTmFtZTUiLCJfSXRlbSRpdGVtTmFtZTYiLCJfSXRlbSRpdGVtTmFtZTciLCJfSXRlbSRpdGVtTmFtZTgiLCJfcmVmMjEiLCJfcmVmMjIiLCJfZXhjbHVkZWQ1IiwiYm9yZGVyQm90dG9tIiwidGV4dEFsaWduIiwiYWxpZ24iLCJtYXhSb3dzIiwib25DbG9zZSIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsInRvIiwib3ZlcmZsb3dZIiwib25DcmVhdGVPcHRpb24iLCJBdmF0YXIiLCJzcmMiLCJzZXRTcmMiLCJmZXRjaEltYWdlIiwibGVuZ3RoIiwic3RhcnRzV2l0aCIsImJ1ZmZlciIsIlVpbnQ4QXJyYXkiLCJibG9iIiwiQmxvYiIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZWFkQXNEYXRhVVJMIiwiZXJyIiwiYm9yZGVyIiwiT3V0bGV0IiwiTGluayIsInVzZUxvY2F0aW9uIiwiRGFzaGJvYXJkSWNvbiIsIlBlcm1JZGVudGl0eUljb24iLCJMaXN0QWx0SWNvbiIsIkRlc2NyaXB0aW9uSWNvbiIsIlJlY2VpcHRJY29uIiwiTW92aW5nSWNvbiIsIlNldHRpbmdzSWNvbiIsIkluc2VydERyaXZlRmlsZUljb24iLCJSZXN0b3JlUGFnZUljb24iLCJSZXF1ZXN0UXVvdGVJY29uIiwiTW9uZXRpemF0aW9uT25JY29uIiwiRW5naW5lZXJpbmdJY29uIiwiRXhwbGljaXQiLCJTaG9wcGluZ0JhZ091dGxpbmVkIiwiUm9vbVByZWZlcmVuY2VzSWNvbiIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwibWFrZVN0eWxlcyIsIlBheW1lbnRJY29uIiwiTW9yZVZlcnRJY29uIiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=