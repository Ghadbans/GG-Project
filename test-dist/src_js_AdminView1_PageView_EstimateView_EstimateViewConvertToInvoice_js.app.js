"use strict";
exports.id = "src_js_AdminView1_PageView_EstimateView_EstimateViewConvertToInvoice_js";
exports.ids = ["src_js_AdminView1_PageView_EstimateView_EstimateViewConvertToInvoice_js"];
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

/***/ "./src/js/AdminView1/PageView/EstimateView/EstimateViewConvertToInvoice.js"
/*!*********************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EstimateView/EstimateViewConvertToInvoice.js ***!
  \*********************************************************************************/
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Edit.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! react-beautiful-dnd */ "./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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












































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var DownTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
function EstimateViewConvertToInvoice() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_45__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_45__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_46__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_46__.setUser)({
              userName: Name,
              role: Role
            }));
          } catch (error) {
            console.error('Error fetching data:', error);
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_46__.logOut)());
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    customerName = _useState2[0],
    setCustomerName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    customerName1 = _useState4[0],
    setCustomerName1 = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    estimateName = _useState6[0],
    setEstimateName = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    estimateSubject = _useState8[0],
    setEstimateSubject = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState0 = _slicedToArray(_useState9, 2),
    Ref = _useState0[0],
    setRef = _useState0[1];
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    inputValue = _React$useState2[0],
    setInputValue = _React$useState2[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    estimateDefect = _useState10[0],
    setEstimateDefect = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    items = _useState12[0],
    SetItems = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    subTotal = _useState14[0],
    setSubTotal = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    total = _useState16[0],
    setTotal = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Adjustment'),
    _useState18 = _slicedToArray(_useState17, 2),
    adjustment = _useState18[0],
    setAdjustment = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    adjustmentNumber = _useState20[0],
    setAdjustmentNumber = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    totalInvoice = _useState22[0],
    setTotalInvoice = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    shipping = _useState24[0],
    setShipping = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    balanceDue = _useState26[0],
    setBalanceDue = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState28 = _slicedToArray(_useState27, 2),
    totalW = _useState28[0],
    setTotalW = _useState28[1];
  var invoiceDate = dayjs__WEBPACK_IMPORTED_MODULE_43___default()(Date());
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState30 = _slicedToArray(_useState29, 2),
    invoiceDueDate = _useState30[0],
    setDueDate = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState32 = _slicedToArray(_useState31, 2),
    invoiceNumber = _useState32[0],
    setInvoiceNumber = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState34 = _slicedToArray(_useState33, 2),
    noteInfo = _useState34[0],
    setNoteInfo = _useState34[1];
  var invoiceName = "INV-" + String(invoiceNumber).padStart(6, '0');
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Thanks For your Business."),
    _useState36 = _slicedToArray(_useState35, 2),
    note = _useState36[0],
    setNote = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("QUOTE VALID FOR 30 DAYS (SUBJECT TO STOCK/MARKET CHANGES). PAYMENT: 40% DEPOSIT / 50% MID-PROJECT / 10% UPON COMPLETION. ALL MATERIAL SALES ARE FINAL. WE ARE NOT RESPONSIBLE FOR LOSS, THEFT, OR DAMAGE CAUSED BY DEFECTIVE PARTS OR EXTERNAL FACTORS."),
    _useState38 = _slicedToArray(_useState37, 2),
    terms = _useState38[0],
    setTerms = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState40 = _slicedToArray(_useState39, 2),
    ItemInformation = _useState40[0],
    setItemInformation = _useState40[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/get-last-saved-invoice"));
          setInvoiceNumber(parseInt(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.invoiceNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.invoiceNumber) || 0) + 1);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchlastNumber() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchlastNumber();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var _res$data3, _res$data4;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/get-estimation/").concat(id));
          setCustomerName(res.data.data.customerName);
          setEstimateDefect(res.data.data.estimateDefect);
          setCustomerName1(res.data.data.customerName.customerName);
          setEstimateSubject(res.data.data.estimateSubject);
          SetItems(res.data.data.items.map(item => {
            // Back-calculate the exact rate from the stored amount, quantity, and discount
            // This ensures the invoice always uses the rate that was actually typed in the quotation
            var discount = Number(item.itemDiscount) || 0;
            var qty = Number(item.itemQty) || 0;
            var amount = Number(item.itemAmount) || 0;
            var discountFactor = discount > 0 ? 1 - discount / 100 : 1;
            var totalBeforeDiscount = discountFactor > 0 && amount > 0 ? amount / discountFactor : amount;
            var calculatedRate = qty > 0 && amount > 0 ? Math.round(totalBeforeDiscount / qty * 100) / 100 : item.itemRate || 0;
            return _objectSpread(_objectSpread({}, item), {}, {
              itemRate: calculatedRate
            });
          }));
          setSubTotal(res.data.data.subTotal);
          setTotal(res.data.data.total);
          setRef(res.data.data.Ref);
          setEstimateDefect(res.data.data.estimateDefect);
          setShipping(res.data.data.shipping);
          setAdjustment(res.data.data.adjustment);
          setAdjustmentNumber(Number(((_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.adjustmentNumber) || ((_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.adjustmentNumber) || 0));
          setEstimateName(res.data.data.estimateName);
          setNoteInfo(res.data.data.noteInfo);
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
  var dateComment = new Date();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchItem = /*#__PURE__*/function () {
      var _ref10 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/item"));
          setItemInformation(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchItem() {
        return _ref10.apply(this, arguments);
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
    if (list[i]['itemDiscount'] > 5) {
      list[i]['itemDiscount'] = 5;
    }
    list[i]['totalAmount'] = Math.round(list[i]['itemQty'] * list[i]['itemRate'] * 100) / 100;
    list[i]['totalCost'] = Math.round(list[i]['itemQty'] * list[i]['itemCost'] * 100) / 100;
    list[i]['discount'] = list[i]['totalAmount'] * list[i]['itemDiscount'];
    list[i]['percentage'] = list[i]['discount'] / 100;
    list[i]['itemAmount'] = Math.round((list[i]['totalAmount'] - list[i]['percentage']) * 100) / 100;
    list[i]['totalGenerale'] = Math.round(list[i]['itemCost'] * list[i]['itemBuy'] * 100) / 100;
    SetItems(list);
  };
  var handleChangeCEO = (e, i) => {
    var _e$target2 = e.target,
      name = _e$target2.name,
      value = _e$target2.value;
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
    SetItems([...items, {
      typeItem: '',
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
  var handleShowAutocomplete = idRow => {
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
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
    }) : row));
  };
  var handleShowAutocompleteDescription = idRow => {
    SetItems(items => items.map(row => row.idRow === idRow ? _objectSpread(_objectSpread({}, row), {}, {
      itemName: {
        itemName: 'empty'
      }
    }) : row));
  };
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    openItemUpdate = _useState42[0],
    setOpenItemUpdate = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState44 = _slicedToArray(_useState43, 2),
    idItem = _useState44[0],
    setIdItem = _useState44[1];
  var handleOpenItemUpdate = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (id) {
      setOpenItemUpdate(true);
      setIdItem(id);
    });
    return function handleOpenItemUpdate(_x) {
      return _ref11.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCustomer = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        if (customerName && customerName._id) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/get-customer/").concat(customerName._id));
            if (res.data.data.paymentTerms === "Net 3") {
              var currentDate = new Date();
              currentDate.setDate(currentDate.getDate() + 3);
              setDueDate(currentDate);
            } else if (res.data.data.paymentTerms === "Net 10") {
              var _currentDate = new Date();
              _currentDate.setDate(_currentDate.getDate() + 10);
              setDueDate(_currentDate);
            } else if (res.data.data.paymentTerms === "Net 15") {
              var _currentDate2 = new Date();
              _currentDate2.setDate(_currentDate2.getDate() + 15);
              setDueDate(_currentDate2);
            } else if (res.data.data.paymentTerms === "Net 20") {
              var _currentDate3 = new Date();
              _currentDate3.setDate(_currentDate3.getDate() + 20);
              setDueDate(_currentDate3);
            } else if (res.data.data.paymentTerms === "Net 25") {
              var _currentDate4 = new Date();
              _currentDate4.setDate(_currentDate4.getDate() + 25);
              setDueDate(_currentDate4);
            } else if (res.data.data.paymentTerms === "Due end of the month") {
              var _currentDate5 = new Date();
              _currentDate5.setDate(_currentDate5.getMonth() + 1);
              _currentDate5.setDate(0);
              setDueDate(_currentDate5);
            } else if (res.data.data.paymentTerms === "Due on Receipt") {
              var _currentDate6 = new Date();
              setDueDate(_currentDate6);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      });
      return function fetchCustomer() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchCustomer();
  }, [customerName]);
  var handleCloseItemUpdate = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* () {
      setOpenItemUpdate(false);
      if (idItem) {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/get-item/").concat(idItem));
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
      return _ref13.apply(this, arguments);
    };
  }();
  {/** Item InFO End */}
  var status = 'Converted';
  var handleSubmitUpdateStatus = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* (ReferenceInfo2) {
      var data = {
        status,
        ReferenceName: ReferenceInfo2
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/update-estimation/").concat(id), data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
    return function handleSubmitUpdateStatus(_x2) {
      return _ref14.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result1 = items.reduce((sum, row) => sum + row.itemAmount, 0);
    setSubTotal(result1.toFixed(2));
    var newTotal = Math.round((Number(subTotal) + Number(shipping) + Number(adjustmentNumber)) * 100) / 100;
    setTotalInvoice(newTotal);
    var newBalance = Math.round((totalInvoice - total) * 100) / 100;
    setBalanceDue(newBalance);
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (totalInvoice) {
      var wholePart = Math.floor(totalInvoice);
      var fractionalPart = (totalInvoice % 1).toFixed(2).split('.')[1];
      var wholeWords = number_to_words__WEBPACK_IMPORTED_MODULE_54___default().toWords(wholePart);
      var fractionalWords = number_to_words__WEBPACK_IMPORTED_MODULE_54___default().toWords(fractionalPart);
      setTotalW("".concat(wholeWords, " and ").concat(fractionalWords, " cents"));
    }
  }, [totalInvoice]);
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    openBack = _useState46[0],
    setOpenBack = _useState46[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState48 = _slicedToArray(_useState47, 2),
    loading = _useState48[0],
    setLoading = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    loadingOpenModal = _useState50[0],
    setLoadingOpenModal = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState52 = _slicedToArray(_useState51, 2),
    ErrorOpenModal = _useState52[0],
    setErrorOpenModal = _useState52[1];
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  };
  var handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  };
  var handleClose = () => {
    navigate(-1);
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* (ReferenceInfo2, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo2,
        person: user.data.userName + ' Created ',
        reason: 'INV-' + String(ReferenceInfoNumber).padStart(6, '0') + ' For ' + customerName.customerName,
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x3, _x4) {
      return _ref15.apply(this, arguments);
    };
  }();
  var invoicePurchase = '';
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState54 = _slicedToArray(_useState53, 2),
    idInvoice = _useState54[0],
    setIdInvoice = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState56 = _slicedToArray(_useState55, 2),
    saving = _useState56[0],
    setSaving = _useState56[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var status = '';
      if (total > 0 && total < subTotal) {
        status = 'Partially-Paid';
      } else if (balanceDue === 0) {
        status = 'Paid';
      } else if (total === 0) {
        status = 'Pending';
      }
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/create-invoice"), {
          customerName,
          invoiceNumber,
          invoiceDate,
          invoiceName,
          invoiceDueDate,
          invoiceSubject: estimateSubject,
          invoiceDefect: estimateDefect,
          status,
          Position: 'Second',
          invoicePurchase,
          noteInfo,
          ReferenceName: id,
          items,
          subTotal,
          total,
          balanceDue,
          totalW,
          Ref,
          note,
          shipping,
          adjustment,
          adjustmentNumber,
          totalInvoice,
          terms
        });
        if (res) {
          var ReferenceInfo2 = res.data.data._id;
          handleSubmitUpdateStatus(ReferenceInfo2);
          handleOpen();
          var ReferenceInfoNumber = res.data.data.invoiceNumber;
          handleCreateNotification(ReferenceInfo2, ReferenceInfoNumber);
          setIdInvoice(res.data.data._id);
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x5) {
      return _ref16.apply(this, arguments);
    };
  }();
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_46__.logOut)());
    navigate('/');
  };
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState58 = _slicedToArray(_useState57, 2),
    openAutocomplete2 = _useState58[0],
    setOpenAutocomplete2 = _useState58[1];
  var handleOpenOpenAutocomplete2 = e => {
    e.preventDefault();
    setOpenAutocomplete2(true);
  };
  var handleCloseAutocomplete2 = () => {
    setOpenAutocomplete2(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_24__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_28__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Convert to Invoice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_44__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_57__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_56__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_50__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_23__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_29__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_26__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_23__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
    value: customerName1,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    htmlFor: "invoiceNumber"
  }, "Invoice Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    disabled: user.data.role !== 'CEO',
    type: "number",
    id: "invoiceNumber",
    name: "invoiceNumber",
    label: "Invoice Number",
    value: invoiceNumber,
    onChange: e => setInvoiceNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      position: "start"
    }, "INV-")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_40__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_41__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_39__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_42__.DatePicker, {
    required: true,
    name: "invoiceDate",
    label: "Date",
    value: invoiceDate,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_40__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_41__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_39__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_42__.DatePicker, {
    name: "invoiceDueDate",
    label: "Due Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_43___default()(invoiceDueDate),
    onChange: date => setDueDate(date),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, params, {
      required: true
    })),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "estimateSubject",
    name: "estimateSubject",
    label: "Subject",
    value: estimateSubject,
    onChange: e => setEstimateSubject(e.target.value),
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
    value: estimateDefect,
    onChange: e => setEstimateDefect(e.target.value),
    label: "Defect",
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
    value: noteInfo,
    label: "Note",
    onChange: e => setNoteInfo(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: addItemWhite
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__["default"], {
    className: "btn1",
    style: {
      backgroundColor: 'gray',
      fontSize: '40px'
    }
  }))))), user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_55__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_55__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), items.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_55__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
    ref: provided.innerRef
  }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    name: "newDescription",
    id: "newDescription",
    value: Item.newDescription,
    onChange: e => handleChangeCEO(e, i),
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
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
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
  }, Item.itemName ? Item.itemName.itemName.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "itemDescription",
    id: "itemDescription",
    value: Item.itemDescription,
    multiline: true,
    rows: 3,
    onChange: e => handleChangeCEO(e, i),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
    filterOptions: (options, _ref17) => {
      var inputValue = _ref17.inputValue;
      return options.filter(option => option.itemName.toLowerCase().includes(inputValue.toLowerCase()) || option.itemBrand.toLowerCase().includes(inputValue.toLowerCase()) || option.itemDescription.toLowerCase().includes(inputValue.toLowerCase()));
    },
    onChange: (e, newValue) => handleChangeItem(Item.idRow, newValue),
    size: "small",
    PaperComponent: _ref18 => {
      var children = _ref18.children,
        other = _objectWithoutProperties(_ref18, _excluded4);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: true,
    name: "stock",
    id: "stock",
    value: Item.stock,
    onChange: e => handleChangeCEO(e, i),
    size: "small",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "itemQty",
    id: "itemQty",
    onChange: e => handleChangeCEO(e, i),
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
    onChange: e => handleChangeCEO(e, i),
    size: "small",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "itemDiscount",
    id: "itemDiscount",
    value: Item.itemDiscount,
    onChange: e => handleChangeCEO(e, i),
    size: "small",
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
  })))))))), provided.placeholder))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_55__.DragDropContext, {
    onDragEnd: handleDragEnd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10",
    style: {
      marginLeft: '-20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Item"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Stock-A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Discount %"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_55__.Droppable, {
    droppableId: "droppable"
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", _extends({
    id: "droppable"
  }, provided.droppableProps, {
    ref: provided.innerRef
  }), items.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_55__.Draggable, {
    key: Item.idRow,
    draggableId: "droppable".concat(Item.idRow),
    index: i
  }, (provided, snapshot) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", _extends({
    ref: provided.innerRef
  }, provided.draggableProps), Item.newDescription !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    name: "newDescription",
    id: "newDescription",
    value: Item.newDescription,
    onChange: e => handleChange(e, i),
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
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", provided.dragHandleProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
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
  }, Item.itemName ? Item.itemName.itemName.toUpperCase() : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    name: "itemDescription",
    id: "itemDescription",
    value: Item.itemDescription,
    multiline: true,
    rows: 3,
    onChange: e => handleChange(e, i),
    size: "small",
    disabled: true,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
        other = _objectWithoutProperties(_ref20, _excluded5);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
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
    disabled: true,
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
  })))))))), provided.placeholder))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
    onChange: e => setNote(e.target.value.toUpperCase()),
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
  }, "Saving...")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_51__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Do you want to stop Converting Quotation to Invoice ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
    onClick: () => navigate('/EstimateViewAdmin'),
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
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: loadingOpenModal,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_17__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_47__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_36__.NavLink, {
    to: "/InvoiceViewAdminAll/".concat(idInvoice),
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_17__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_47__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, "Saving Failed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt1",
    style: {
      color: 'red'
    }
  }, "Note:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, "Select a Due Date")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: openAutocomplete2,
    onClose: handleCloseAutocomplete2,
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
    onClick: handleCloseAutocomplete2,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_51__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_52__["default"], {
    onClose: handleCloseAutocomplete2
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_51__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_53__["default"], {
    onClose: handleCloseItemUpdate,
    id: idItem
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EstimateViewConvertToInvoice);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRXN0aW1hdGVWaWV3X0VzdGltYXRlVmlld0NvbnZlcnRUb0ludm9pY2VfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMsMEJBQTBCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOM0I7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMsVUFBVSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOWCxDQUFrRDtBQUNTO0FBQ3BDO0FBQ0U7QUFDMkI7QUFDc0I7QUFDdEI7QUFDMEs7QUFDOUo7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ1E7QUFDQTtBQUNjO0FBQ0k7QUFDeEM7QUFDd0I7QUFDeUM7QUFDZDtBQUNuRDtBQUN5QztBQUNhO0FBQ2hCO0FBQ0o7QUFDbEM7QUFDNEI7QUFDMEI7QUFDTTtBQUMvQjtBQUMrQjtBQUN2QztBQUNlO0FBQ1Y7QUFDSjtBQUNGO0FBQ1E7QUFDSTtBQUNmO0FBQ2lDO0FBQ3RCO0FBQ1E7QUFFOUQsSUFBTTBFLFlBQVksR0FBR3JELDBEQUFNLENBQUNzRCxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDaEQvRSwwREFBQSxDQUFDeUIsOERBQU8sRUFBQXdELFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEs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Q0Esd0NBQXdDO0FBQ3hDLHdDQUF3QztBQUN4Qyx3Q0FBd0M7QUFDeEMsd0NBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsV0FBVyxTQUFTO0FBQ3BCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTs7QUFFQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQy9HYTs7QUFFYixrQkFBa0IsbUJBQU8sQ0FBQyx3RUFBZTtBQUN6QyxjQUFjLG1CQUFPLENBQUMsZ0VBQVc7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vRHJhZ0luZGljYXRvclJvdW5kZWQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9FZGl0LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9Fc3RpbWF0ZVZpZXcvRXN0aW1hdGVWaWV3Q29udmVydFRvSW52b2ljZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9TaWRlYmFyRGFzaDEuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy9pc0Zpbml0ZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvaXNTYWZlTnVtYmVyLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvbnVtYmVyLXRvLXdvcmRzL3NyYy9tYWtlT3JkaW5hbC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvbWF4U2FmZUludGVnZXIuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9udW1iZXItdG8td29yZHMvc3JjL3RvT3JkaW5hbC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvdG9Xb3Jkcy5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL251bWJlci10by13b3Jkcy9zcmMvdG9Xb3Jkc09yZGluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTEgMThjMCAxLjEtLjkgMi0yIDJzLTItLjktMi0yIC45LTIgMi0yIDIgLjkgMiAybS0yLThjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0ybTAtNmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJtNiA0YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMm0wIDJjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0ybTAgNmMtMS4xIDAtMiAuOS0yIDJzLjkgMiAyIDIgMi0uOSAyLTItLjktMi0yLTJcIlxufSksICdEcmFnSW5kaWNhdG9yUm91bmRlZCcpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzV6TTIwLjcxIDcuMDRjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0YS45OTU5Ljk5NTkgMCAwIDAtMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1elwiXG59KSwgJ0VkaXQnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2lkZWJhckRhc2gxIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaDEnO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJ1xyXG5pbXBvcnQgJy4uL0NoYXJ0dmlldy5jc3MnXHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBCYWNrZHJvcCwgTWVudUl0ZW0sIEdyaWQsIEljb25CdXR0b24sIFBhcGVyLCBUYWJsZUNvbnRhaW5lciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBBdXRvY29tcGxldGUsIE1vZGFsLCBCb3gsIHN0eWxlZCwgT3V0bGluZWRJbnB1dCwgSW5wdXRBZG9ybm1lbnQsIERpdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFkZ2UnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBBZGQsIERyYWdJbmRpY2F0b3JSb3VuZGVkLCBFZGl0LCBSZW1vdmVDaXJjbGVPdXRsaW5lIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMsIE5hdmlnYXRlLCBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IERlbW9Db250YWluZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL2ludGVybmFscy9kZW1vJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0xvY2FsaXphdGlvblByb3ZpZGVyJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9EYXRlUGlja2VyJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCBTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TaG9wcGluZ0NhcnRPdXRsaW5lZCc7XHJcbmltcG9ydCBBZGRTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BZGRTaG9wcGluZ0NhcnRPdXRsaW5lZCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgSXRlbUZvcm1WaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtRm9ybVZpZXcyJztcclxuaW1wb3J0IEl0ZW1VcGRhdGVWaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtVXBkYXRlVmlldzInO1xyXG5pbXBvcnQgbnVtYmVyVG9Xb3JkcyBmcm9tICdudW1iZXItdG8td29yZHMnXHJcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuXHJcbmNvbnN0IExpZ2h0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgQmxhY2tUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgRG93blRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3Qgc3R5bGUyID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogODAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gRXN0aW1hdGVWaWV3Q29udmVydFRvSW52b2ljZSgpIHtcclxuICBsZXQgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKVxyXG5cclxuICBjb25zdCBbY3VzdG9tZXJOYW1lLCBzZXRDdXN0b21lck5hbWVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtjdXN0b21lck5hbWUxLCBzZXRDdXN0b21lck5hbWUxXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZXN0aW1hdGVOYW1lLCBzZXRFc3RpbWF0ZU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VzdGltYXRlU3ViamVjdCwgc2V0RXN0aW1hdGVTdWJqZWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtSZWYsIHNldFJlZl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlc3RpbWF0ZURlZmVjdCwgc2V0RXN0aW1hdGVEZWZlY3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2l0ZW1zLCBTZXRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3N1YlRvdGFsLCBzZXRTdWJUb3RhbF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthZGp1c3RtZW50LCBzZXRBZGp1c3RtZW50XSA9IHVzZVN0YXRlKCdBZGp1c3RtZW50JylcclxuICBjb25zdCBbYWRqdXN0bWVudE51bWJlciwgc2V0QWRqdXN0bWVudE51bWJlcl0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFt0b3RhbEludm9pY2UsIHNldFRvdGFsSW52b2ljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc2hpcHBpbmcsIHNldFNoaXBwaW5nXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtiYWxhbmNlRHVlLCBzZXRCYWxhbmNlRHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0b3RhbFcsIHNldFRvdGFsV10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBpbnZvaWNlRGF0ZSA9IGRheWpzKERhdGUoKSk7XHJcbiAgY29uc3QgW2ludm9pY2VEdWVEYXRlLCBzZXREdWVEYXRlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaW52b2ljZU51bWJlciwgc2V0SW52b2ljZU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbbm90ZUluZm8sIHNldE5vdGVJbmZvXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGludm9pY2VOYW1lID0gXCJJTlYtXCIgKyBTdHJpbmcoaW52b2ljZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKVxyXG4gIGNvbnN0IFtub3RlLCBzZXROb3RlXSA9IHVzZVN0YXRlKFwiVGhhbmtzIEZvciB5b3VyIEJ1c2luZXNzLlwiKTtcclxuICBjb25zdCBbdGVybXMsIHNldFRlcm1zXSA9IHVzZVN0YXRlKFwiUVVPVEUgVkFMSUQgRk9SIDMwIERBWVMgKFNVQkpFQ1QgVE8gU1RPQ0svTUFSS0VUIENIQU5HRVMpLiBQQVlNRU5UOiA0MCUgREVQT1NJVCAvIDUwJSBNSUQtUFJPSkVDVCAvIDEwJSBVUE9OIENPTVBMRVRJT04uIEFMTCBNQVRFUklBTCBTQUxFUyBBUkUgRklOQUwuIFdFIEFSRSBOT1QgUkVTUE9OU0lCTEUgRk9SIExPU1MsIFRIRUZULCBPUiBEQU1BR0UgQ0FVU0VEIEJZIERFRkVDVElWRSBQQVJUUyBPUiBFWFRFUk5BTCBGQUNUT1JTLlwiKTtcclxuICBjb25zdCBbSXRlbUluZm9ybWF0aW9uLCBzZXRJdGVtSW5mb3JtYXRpb25dID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaGxhc3ROdW1iZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWxhc3Qtc2F2ZWQtaW52b2ljZWApXHJcbiAgICAgICAgc2V0SW52b2ljZU51bWJlcigocGFyc2VJbnQocmVzLmRhdGE/LmRhdGE/Lmludm9pY2VOdW1iZXIgfHwgcmVzLmRhdGE/Lmludm9pY2VOdW1iZXIgfHwgMCkpICsgMSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hsYXN0TnVtYmVyKClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lc3RpbWF0aW9uLyR7aWR9YClcclxuICAgICAgICBzZXRDdXN0b21lck5hbWUocmVzLmRhdGEuZGF0YS5jdXN0b21lck5hbWUpO1xyXG4gICAgICAgIHNldEVzdGltYXRlRGVmZWN0KHJlcy5kYXRhLmRhdGEuZXN0aW1hdGVEZWZlY3QpO1xyXG4gICAgICAgIHNldEN1c3RvbWVyTmFtZTEocmVzLmRhdGEuZGF0YS5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lKTtcclxuICAgICAgICBzZXRFc3RpbWF0ZVN1YmplY3QocmVzLmRhdGEuZGF0YS5lc3RpbWF0ZVN1YmplY3QpO1xyXG4gICAgICAgIFNldEl0ZW1zKHJlcy5kYXRhLmRhdGEuaXRlbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgLy8gQmFjay1jYWxjdWxhdGUgdGhlIGV4YWN0IHJhdGUgZnJvbSB0aGUgc3RvcmVkIGFtb3VudCwgcXVhbnRpdHksIGFuZCBkaXNjb3VudFxyXG4gICAgICAgICAgLy8gVGhpcyBlbnN1cmVzIHRoZSBpbnZvaWNlIGFsd2F5cyB1c2VzIHRoZSByYXRlIHRoYXQgd2FzIGFjdHVhbGx5IHR5cGVkIGluIHRoZSBxdW90YXRpb25cclxuICAgICAgICAgIGNvbnN0IGRpc2NvdW50ID0gTnVtYmVyKGl0ZW0uaXRlbURpc2NvdW50KSB8fCAwO1xyXG4gICAgICAgICAgY29uc3QgcXR5ID0gTnVtYmVyKGl0ZW0uaXRlbVF0eSkgfHwgMDtcclxuICAgICAgICAgIGNvbnN0IGFtb3VudCA9IE51bWJlcihpdGVtLml0ZW1BbW91bnQpIHx8IDA7XHJcbiAgICAgICAgICBjb25zdCBkaXNjb3VudEZhY3RvciA9IGRpc2NvdW50ID4gMCA/ICgxIC0gZGlzY291bnQgLyAxMDApIDogMTtcclxuICAgICAgICAgIGNvbnN0IHRvdGFsQmVmb3JlRGlzY291bnQgPSBkaXNjb3VudEZhY3RvciA+IDAgJiYgYW1vdW50ID4gMCA/IGFtb3VudCAvIGRpc2NvdW50RmFjdG9yIDogYW1vdW50O1xyXG4gICAgICAgICAgY29uc3QgY2FsY3VsYXRlZFJhdGUgPSBxdHkgPiAwICYmIGFtb3VudCA+IDBcclxuICAgICAgICAgICAgPyBNYXRoLnJvdW5kKCh0b3RhbEJlZm9yZURpc2NvdW50IC8gcXR5KSAqIDEwMCkgLyAxMDBcclxuICAgICAgICAgICAgOiAoaXRlbS5pdGVtUmF0ZSB8fCAwKTtcclxuICAgICAgICAgIHJldHVybiB7IC4uLml0ZW0sIGl0ZW1SYXRlOiBjYWxjdWxhdGVkUmF0ZSB9O1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBzZXRTdWJUb3RhbChyZXMuZGF0YS5kYXRhLnN1YlRvdGFsKTtcclxuICAgICAgICBzZXRUb3RhbChyZXMuZGF0YS5kYXRhLnRvdGFsKTtcclxuICAgICAgICBzZXRSZWYocmVzLmRhdGEuZGF0YS5SZWYpO1xyXG4gICAgICAgIHNldEVzdGltYXRlRGVmZWN0KHJlcy5kYXRhLmRhdGEuZXN0aW1hdGVEZWZlY3QpO1xyXG4gICAgICAgIHNldFNoaXBwaW5nKHJlcy5kYXRhLmRhdGEuc2hpcHBpbmcpO1xyXG4gICAgICAgIHNldEFkanVzdG1lbnQocmVzLmRhdGEuZGF0YS5hZGp1c3RtZW50KTtcclxuICAgICAgICBzZXRBZGp1c3RtZW50TnVtYmVyKE51bWJlcihyZXMuZGF0YT8uZGF0YT8uYWRqdXN0bWVudE51bWJlciB8fCByZXMuZGF0YT8uYWRqdXN0bWVudE51bWJlciB8fCAwKSk7XHJcbiAgICAgICAgc2V0RXN0aW1hdGVOYW1lKHJlcy5kYXRhLmRhdGEuZXN0aW1hdGVOYW1lKTtcclxuICAgICAgICBzZXROb3RlSW5mbyhyZXMuZGF0YS5kYXRhLm5vdGVJbmZvKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgZGF0ZUNvbW1lbnQgPSBuZXcgRGF0ZSgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEl0ZW0gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaXRlbWApXHJcbiAgICAgICAgc2V0SXRlbUluZm9ybWF0aW9uKHJlcy5kYXRhLmRhdGEucmV2ZXJzZSgpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaEl0ZW0oKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUl0ZW0gPSAoaWRSb3csIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBuZXdWYWx1ZVxyXG4gICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKChyb3cpID0+IHJvdy5pZFJvdyA9PT0gaWRSb3cgPyB7XHJcbiAgICAgIC4uLnJvdyxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IHNlbGVjdGVkT3B0aW9ucz8uX2lkLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBzZWxlY3RlZE9wdGlvbnM/Lml0ZW1OYW1lLFxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtQ29zdDogc2VsZWN0ZWRPcHRpb25zPy5pdGVtQ29zdFByaWNlLFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IHNlbGVjdGVkT3B0aW9ucz8uaXRlbURlc2NyaXB0aW9uLFxyXG4gICAgICBpdGVtUmF0ZTogc2VsZWN0ZWRPcHRpb25zPy5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICBzdG9jazogc2VsZWN0ZWRPcHRpb25zPy5pdGVtUXVhbnRpdHksXHJcbiAgICB9IDogcm93KSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUsIGkpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5pdGVtc107XHJcbiAgICBsaXN0W2ldW25hbWVdID0gdmFsdWU7XHJcbiAgICBpZiAobGlzdFtpXVsnaXRlbURpc2NvdW50J10gPiA1KSB7XHJcbiAgICAgIGxpc3RbaV1bJ2l0ZW1EaXNjb3VudCddID0gNVxyXG4gICAgfVxyXG4gICAgbGlzdFtpXVsndG90YWxBbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1RdHknXSAqIGxpc3RbaV1bJ2l0ZW1SYXRlJ10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQ29zdCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddICogbGlzdFtpXVsnaXRlbUNvc3QnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsnZGlzY291bnQnXSA9IGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gKiBsaXN0W2ldWydpdGVtRGlzY291bnQnXTtcclxuICAgIGxpc3RbaV1bJ3BlcmNlbnRhZ2UnXSA9IGxpc3RbaV1bJ2Rpc2NvdW50J10gLyAxMDA7XHJcbiAgICBsaXN0W2ldWydpdGVtQW1vdW50J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWyd0b3RhbEFtb3VudCddIC0gbGlzdFtpXVsncGVyY2VudGFnZSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWyd0b3RhbEdlbmVyYWxlJ10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtQ29zdCddICogbGlzdFtpXVsnaXRlbUJ1eSddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBTZXRJdGVtcyhsaXN0KTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlQ0VPID0gKGUsIGkpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5pdGVtc107XHJcbiAgICBsaXN0W2ldW25hbWVdID0gdmFsdWU7XHJcbiAgICBsaXN0W2ldWyd0b3RhbEFtb3VudCddID0gTWF0aC5yb3VuZCgobGlzdFtpXVsnaXRlbVF0eSddICogbGlzdFtpXVsnaXRlbVJhdGUnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWxDb3N0J10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydpdGVtUXR5J10gKiBsaXN0W2ldWydpdGVtQ29zdCddKSAqIDEwMCkgLyAxMDA7XHJcbiAgICBsaXN0W2ldWydkaXNjb3VudCddID0gbGlzdFtpXVsndG90YWxBbW91bnQnXSAqIGxpc3RbaV1bJ2l0ZW1EaXNjb3VudCddO1xyXG4gICAgbGlzdFtpXVsncGVyY2VudGFnZSddID0gbGlzdFtpXVsnZGlzY291bnQnXSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ2l0ZW1BbW91bnQnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ3RvdGFsQW1vdW50J10gLSBsaXN0W2ldWydwZXJjZW50YWdlJ10pICogMTAwKSAvIDEwMDtcclxuICAgIGxpc3RbaV1bJ3RvdGFsR2VuZXJhbGUnXSA9IE1hdGgucm91bmQoKGxpc3RbaV1bJ2l0ZW1Db3N0J10gKiBsaXN0W2ldWydpdGVtQnV5J10pICogMTAwKSAvIDEwMDtcclxuICAgIFNldEl0ZW1zKGxpc3QpO1xyXG4gIH1cclxuICAvL2FkZEl0ZW1cclxuICBjb25zdCBhZGRJdGVtID0gKCkgPT4ge1xyXG4gICAgU2V0SXRlbXMoWy4uLml0ZW1zLCB7XHJcbiAgICAgIHR5cGVJdGVtOiAnJyxcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIGl0ZW1OYW1lOiBcIlwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGl0ZW1EZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgaXRlbURpc2NvdW50OiAwLFxyXG4gICAgICBpdGVtUXR5OiAwLFxyXG4gICAgICBpdGVtUmF0ZTogMCxcclxuICAgICAgaXRlbUFtb3VudDogMCxcclxuICAgICAgaXRlbUNvc3Q6IDAsXHJcbiAgICAgIHRvdGFsQW1vdW50OiAwLFxyXG4gICAgICBkaXNjb3VudDogMCxcclxuICAgICAgcGVyY2VudGFnZTogMCxcclxuICAgICAgaXRlbUJ1eTogMCxcclxuICAgICAgaXRlbVdlaWdodDogXCJcIixcclxuICAgICAgdG90YWxHZW5lcmFsZTogMCxcclxuICAgICAgdG90YWxDb3N0OiAwLFxyXG4gICAgICBzdG9jazogMCxcclxuICAgICAgaXRlbU91dDogMCxcclxuICAgICAgbmV3SXRlbU91dDogMCxcclxuICAgIH1dKTtcclxuICB9XHJcbiAgY29uc3QgYWRkSXRlbVdoaXRlID0gKCkgPT4ge1xyXG4gICAgU2V0SXRlbXMoWy4uLml0ZW1zLCB7XHJcbiAgICAgIG5ld0Rlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpZFJvdzogdjQoKSxcclxuICAgICAgaXRlbU5hbWU6IHtcclxuICAgICAgICBfaWQ6IFwiXCIsXHJcbiAgICAgICAgaXRlbU5hbWU6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAgaXRlbURlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBpdGVtRGlzY291bnQ6IDAsXHJcbiAgICAgIGl0ZW1RdHk6IDAsXHJcbiAgICAgIGl0ZW1SYXRlOiAwLFxyXG4gICAgICBpdGVtQW1vdW50OiAwLFxyXG4gICAgICBpdGVtQ29zdDogMCxcclxuICAgICAgdG90YWxBbW91bnQ6IDAsXHJcbiAgICAgIGRpc2NvdW50OiAwLFxyXG4gICAgICBwZXJjZW50YWdlOiAwLFxyXG4gICAgICBpdGVtQnV5OiAwLFxyXG4gICAgICBpdGVtV2VpZ2h0OiBcIlwiLFxyXG4gICAgICB0b3RhbEdlbmVyYWxlOiAwLFxyXG4gICAgICB0b3RhbENvc3Q6IDAsXHJcbiAgICAgIHN0b2NrOiAwLFxyXG4gICAgICBpdGVtT3V0OiAwLFxyXG4gICAgICBuZXdJdGVtT3V0OiAwLFxyXG4gICAgfV0pO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEcmFnRW5kID0gKHJlc3VsdCkgPT4ge1xyXG4gICAgaWYgKCFyZXN1bHQuZGVzdGluYXRpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3SXRlbXMgPSBbLi4uaXRlbXNdO1xyXG4gICAgY29uc3QgW3JlbW92ZWRdID0gbmV3SXRlbXMuc3BsaWNlKHJlc3VsdC5zb3VyY2UuaW5kZXgsIDEpO1xyXG4gICAgbmV3SXRlbXMuc3BsaWNlKHJlc3VsdC5kZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVtb3ZlZCk7XHJcbiAgICBTZXRJdGVtcyhuZXdJdGVtcylcclxuICB9O1xyXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSBpZFJvdyA9PiB7XHJcbiAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5maWx0ZXIoKEl0ZW0pID0+IEl0ZW0uaWRSb3cgIT09IGlkUm93KSk7XHJcbiAgfTtcclxuICBjb25zdCBmaWx0ZXJJdGVtSW5mb3JtYXRpb24gPSBJdGVtSW5mb3JtYXRpb24uZmlsdGVyKG9wdGlvbiA9PiAhaXRlbXMuZmluZCgocm93KSA9PiBvcHRpb24uX2lkID09PSByb3cuaXRlbU5hbWU/Ll9pZCAmJiBvcHRpb24udHlwZUl0ZW0gPT09IFwiR29vZHNcIikpXHJcbiAgey8qKiBJdGVtIEluRk8gKi8gfVxyXG5cclxuICBjb25zdCBoYW5kbGVTaG93QXV0b2NvbXBsZXRlID0gKGlkUm93KSA9PiB7XHJcbiAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93LmlkUm93ID09PSBpZFJvdyA/IHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIF9pZDogXCJcIixcclxuICAgICAgICBpdGVtTmFtZTogXCJcIlxyXG4gICAgICB9LFxyXG4gICAgICBpdGVtRGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICAgIGl0ZW1EaXNjb3VudDogMCxcclxuICAgICAgaXRlbVF0eTogMCxcclxuICAgICAgaXRlbVJhdGU6IDAsXHJcbiAgICAgIGl0ZW1BbW91bnQ6IDAsXHJcbiAgICAgIGl0ZW1Db3N0OiAwLFxyXG4gICAgICB0b3RhbEFtb3VudDogMCxcclxuICAgICAgZGlzY291bnQ6IDAsXHJcbiAgICAgIHBlcmNlbnRhZ2U6IDAsXHJcbiAgICAgIGl0ZW1CdXk6IDAsXHJcbiAgICAgIGl0ZW1XZWlnaHQ6IFwiXCIsXHJcbiAgICAgIHRvdGFsR2VuZXJhbGU6IDAsXHJcbiAgICAgIHRvdGFsQ29zdDogMCxcclxuICAgICAgc3RvY2s6IDAsXHJcbiAgICAgIGl0ZW1PdXQ6IDAsXHJcbiAgICAgIG5ld0l0ZW1PdXQ6IDAsXHJcbiAgICB9IDogcm93KSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU2hvd0F1dG9jb21wbGV0ZURlc2NyaXB0aW9uID0gKGlkUm93KSA9PiB7XHJcbiAgICBTZXRJdGVtcyhpdGVtcyA9PiBpdGVtcy5tYXAoKHJvdykgPT4gcm93LmlkUm93ID09PSBpZFJvdyA/IHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBpdGVtTmFtZToge1xyXG4gICAgICAgIGl0ZW1OYW1lOiAnZW1wdHknXHJcbiAgICAgIH0sXHJcbiAgICB9IDogcm93KSlcclxuICB9XHJcbiAgY29uc3QgW29wZW5JdGVtVXBkYXRlLCBzZXRPcGVuSXRlbVVwZGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lkSXRlbSwgc2V0SWRJdGVtXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5JdGVtVXBkYXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICBzZXRPcGVuSXRlbVVwZGF0ZSh0cnVlKTtcclxuICAgIHNldElkSXRlbShpZCk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hDdXN0b21lciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKGN1c3RvbWVyTmFtZSAmJiBjdXN0b21lck5hbWUuX2lkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1jdXN0b21lci8ke2N1c3RvbWVyTmFtZS5faWR9YClcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLnBheW1lbnRUZXJtcyA9PT0gXCJOZXQgM1wiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgY3VycmVudERhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyAzKTtcclxuICAgICAgICAgICAgc2V0RHVlRGF0ZShjdXJyZW50RGF0ZSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEuZGF0YS5wYXltZW50VGVybXMgPT09IFwiTmV0IDEwXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIDEwKTtcclxuICAgICAgICAgICAgc2V0RHVlRGF0ZShjdXJyZW50RGF0ZSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEuZGF0YS5wYXltZW50VGVybXMgPT09IFwiTmV0IDE1XCIpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIDE1KTtcclxuICAgICAgICAgICAgc2V0RHVlRGF0ZShjdXJyZW50RGF0ZSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEuZGF0YS5wYXltZW50VGVybXMgPT09IFwiTmV0IDIwXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIDIwKTtcclxuICAgICAgICAgICAgc2V0RHVlRGF0ZShjdXJyZW50RGF0ZSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEuZGF0YS5wYXltZW50VGVybXMgPT09IFwiTmV0IDI1XCIpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIDI1KTtcclxuICAgICAgICAgICAgc2V0RHVlRGF0ZShjdXJyZW50RGF0ZSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEuZGF0YS5wYXltZW50VGVybXMgPT09IFwiRHVlIGVuZCBvZiB0aGUgbW9udGhcIikge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnREYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0TW9udGgoKSArIDEpO1xyXG4gICAgICAgICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKDApO1xyXG4gICAgICAgICAgICBzZXREdWVEYXRlKGN1cnJlbnREYXRlKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEuZGF0YS5wYXltZW50VGVybXMgPT09IFwiRHVlIG9uIFJlY2VpcHRcIikge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHNldER1ZURhdGUoY3VycmVudERhdGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hDdXN0b21lcigpXHJcbiAgfSwgW2N1c3RvbWVyTmFtZV0pXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VJdGVtVXBkYXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0T3Blbkl0ZW1VcGRhdGUoZmFsc2UpO1xyXG4gICAgaWYgKGlkSXRlbSkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1pdGVtLyR7aWRJdGVtfWApXHJcbiAgICAgICAgU2V0SXRlbXMoaXRlbXMgPT4gaXRlbXMubWFwKChyb3cpID0+IHJvdy5pdGVtTmFtZT8uX2lkID09PSByZXMuZGF0YS5kYXRhLl9pZCA/IHtcclxuICAgICAgICAgIC4uLnJvdyxcclxuICAgICAgICAgIGl0ZW1OYW1lOiB7XHJcbiAgICAgICAgICAgIF9pZDogcmVzLmRhdGEuZGF0YS5faWQsXHJcbiAgICAgICAgICAgIGl0ZW1OYW1lOiByZXMuZGF0YS5kYXRhLml0ZW1OYW1lXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaXRlbURlc2NyaXB0aW9uOiByZXMuZGF0YS5kYXRhLml0ZW1EZXNjcmlwdGlvbixcclxuICAgICAgICAgIGl0ZW1Db3N0OiByZXMuZGF0YS5kYXRhLml0ZW1Db3N0UHJpY2UsXHJcbiAgICAgICAgICBpdGVtUmF0ZTogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgc3RvY2s6IHJlcy5kYXRhLmRhdGEuaXRlbVF1YW50aXR5LFxyXG4gICAgICAgICAgdG90YWxBbW91bnQ6IHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtU2VsbGluZ1ByaWNlLFxyXG4gICAgICAgICAgZGlzY291bnQ6IChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50LFxyXG4gICAgICAgICAgcGVyY2VudGFnZTogKChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50KSAvIDEwMCxcclxuICAgICAgICAgIGl0ZW1BbW91bnQ6IChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgLSAoKChyb3cuaXRlbVF0eSAqIHJlcy5kYXRhLmRhdGEuaXRlbVNlbGxpbmdQcmljZSkgKiByb3cuaXRlbURpc2NvdW50KSAvIDEwMCksXHJcbiAgICAgICAgICB0b3RhbENvc3Q6IHJvdy5pdGVtUXR5ICogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlLFxyXG4gICAgICAgICAgdG90YWxHZW5lcmFsZTogcmVzLmRhdGEuZGF0YS5pdGVtQ29zdFByaWNlICogcm93Lml0ZW1CdXlcclxuICAgICAgICB9IDogcm93KSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHsvKiogSXRlbSBJbkZPIEVuZCAqLyB9XHJcblxyXG4gIGNvbnN0IHN0YXR1cyA9ICdDb252ZXJ0ZWQnO1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdFVwZGF0ZVN0YXR1cyA9IGFzeW5jIChSZWZlcmVuY2VJbmZvMikgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgc3RhdHVzLFxyXG4gICAgICBSZWZlcmVuY2VOYW1lOiBSZWZlcmVuY2VJbmZvMlxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1lc3RpbWF0aW9uLyR7aWR9YCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0MSA9IGl0ZW1zLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHJvdy5pdGVtQW1vdW50LCAwKVxyXG4gICAgc2V0U3ViVG90YWwocmVzdWx0MS50b0ZpeGVkKDIpKVxyXG4gICAgbGV0IG5ld1RvdGFsID0gTWF0aC5yb3VuZCgoTnVtYmVyKHN1YlRvdGFsKSArIE51bWJlcihzaGlwcGluZykgKyBOdW1iZXIoYWRqdXN0bWVudE51bWJlcikpICogMTAwKSAvIDEwMFxyXG4gICAgc2V0VG90YWxJbnZvaWNlKG5ld1RvdGFsKVxyXG4gICAgbGV0IG5ld0JhbGFuY2UgPSBNYXRoLnJvdW5kKCh0b3RhbEludm9pY2UgLSB0b3RhbCkgKiAxMDApIC8gMTAwXHJcbiAgICBzZXRCYWxhbmNlRHVlKG5ld0JhbGFuY2UpXHJcbiAgfSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRvdGFsSW52b2ljZSkge1xyXG4gICAgICBjb25zdCB3aG9sZVBhcnQgPSBNYXRoLmZsb29yKHRvdGFsSW52b2ljZSlcclxuICAgICAgY29uc3QgZnJhY3Rpb25hbFBhcnQgPSAodG90YWxJbnZvaWNlICUgMSkudG9GaXhlZCgyKS5zcGxpdCgnLicpWzFdO1xyXG4gICAgICBjb25zdCB3aG9sZVdvcmRzID0gbnVtYmVyVG9Xb3Jkcy50b1dvcmRzKHdob2xlUGFydClcclxuICAgICAgY29uc3QgZnJhY3Rpb25hbFdvcmRzID0gbnVtYmVyVG9Xb3Jkcy50b1dvcmRzKGZyYWN0aW9uYWxQYXJ0KVxyXG4gICAgICBzZXRUb3RhbFcoYCR7d2hvbGVXb3Jkc30gYW5kICR7ZnJhY3Rpb25hbFdvcmRzfSBjZW50c2ApXHJcbiAgICB9XHJcbiAgfSwgW3RvdGFsSW52b2ljZV0pXHJcbiAgY29uc3QgW29wZW5CYWNrLCBzZXRPcGVuQmFja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5CYWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbkJhY2sodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQmFjayhmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCAyMDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgMjAwKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBuYXZpZ2F0ZSgtMSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jIChSZWZlcmVuY2VJbmZvMiwgUmVmZXJlbmNlSW5mb051bWJlcikgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiBSZWZlcmVuY2VJbmZvMixcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIENyZWF0ZWQgJyxcclxuICAgICAgcmVhc29uOiAnSU5WLScgKyBTdHJpbmcoUmVmZXJlbmNlSW5mb051bWJlcikucGFkU3RhcnQoNiwgJzAnKSArICcgRm9yICcgKyBjdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBkYXRlQ29tbWVudFxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGludm9pY2VQdXJjaGFzZSA9ICcnO1xyXG4gIGNvbnN0IFtpZEludm9pY2UsIHNldElkSW52b2ljZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRTYXZpbmcoJ3RydWUnKVxyXG4gICAgbGV0IHN0YXR1cyA9ICcnXHJcbiAgICBpZiAodG90YWwgPiAwICYmIHRvdGFsIDwgc3ViVG90YWwpIHtcclxuICAgICAgc3RhdHVzID0gJ1BhcnRpYWxseS1QYWlkJ1xyXG4gICAgfSBlbHNlIGlmIChiYWxhbmNlRHVlID09PSAwKSB7XHJcbiAgICAgIHN0YXR1cyA9ICdQYWlkJ1xyXG4gICAgfSBlbHNlIGlmICh0b3RhbCA9PT0gMCkge1xyXG4gICAgICBzdGF0dXMgPSAnUGVuZGluZydcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtaW52b2ljZWAsIHtcclxuICAgICAgICBjdXN0b21lck5hbWUsXHJcbiAgICAgICAgaW52b2ljZU51bWJlcixcclxuICAgICAgICBpbnZvaWNlRGF0ZSxcclxuICAgICAgICBpbnZvaWNlTmFtZSxcclxuICAgICAgICBpbnZvaWNlRHVlRGF0ZSxcclxuICAgICAgICBpbnZvaWNlU3ViamVjdDogZXN0aW1hdGVTdWJqZWN0LFxyXG4gICAgICAgIGludm9pY2VEZWZlY3Q6IGVzdGltYXRlRGVmZWN0LFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBQb3NpdGlvbjogJ1NlY29uZCcsXHJcbiAgICAgICAgaW52b2ljZVB1cmNoYXNlLCBub3RlSW5mbyxcclxuICAgICAgICBSZWZlcmVuY2VOYW1lOiBpZFxyXG4gICAgICAgICwgaXRlbXMsIHN1YlRvdGFsLCB0b3RhbCwgYmFsYW5jZUR1ZSxcclxuICAgICAgICB0b3RhbFcsIFJlZiwgbm90ZSwgc2hpcHBpbmcsIGFkanVzdG1lbnQsIGFkanVzdG1lbnROdW1iZXIsIHRvdGFsSW52b2ljZSwgdGVybXNcclxuICAgICAgfSlcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm8yID0gcmVzLmRhdGEuZGF0YS5faWRcclxuICAgICAgICBoYW5kbGVTdWJtaXRVcGRhdGVTdGF0dXMoUmVmZXJlbmNlSW5mbzIpXHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm9OdW1iZXIgPSByZXMuZGF0YS5kYXRhLmludm9pY2VOdW1iZXJcclxuICAgICAgICBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oUmVmZXJlbmNlSW5mbzIsIFJlZmVyZW5jZUluZm9OdW1iZXIpXHJcbiAgICAgICAgc2V0SWRJbnZvaWNlKHJlcy5kYXRhLmRhdGEuX2lkKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBzZXRTYXZpbmcoJycpXHJcbiAgICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICBjb25zdCBbb3BlbkF1dG9jb21wbGV0ZTIsIHNldE9wZW5BdXRvY29tcGxldGUyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMih0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQXV0b2NvbXBsZXRlMiA9ICgpID0+IHtcclxuICAgIHNldE9wZW5BdXRvY29tcGxldGUyKGZhbHNlKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDb252ZXJ0IHRvIEludm9pY2VcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuQmFja30+XHJcbiAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoMSAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogNCB9fSA+XHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0gY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2N1c3RvbWVyTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2N1c3RvbWVyTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDdXN0b21lciBOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyTmFtZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJpbnZvaWNlTnVtYmVyXCI+SW52b2ljZSBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2ludm9pY2VOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naW52b2ljZU51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSW52b2ljZSBOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2ludm9pY2VOdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnZvaWNlTnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5JTlYtPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2ludm9pY2VEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnZvaWNlRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naW52b2ljZUR1ZURhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0R1ZSBEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhpbnZvaWNlRHVlRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXREdWVEYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2VzdGltYXRlU3ViamVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VzdGltYXRlU3ViamVjdCdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTdWJqZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VzdGltYXRlU3ViamVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RXN0aW1hdGVTdWJqZWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2ludm9pY2VEZWZlY3QnXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpbnZvaWNlRGVmZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VzdGltYXRlRGVmZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFc3RpbWF0ZURlZmVjdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGVmZWN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nbm90ZUluZm8nXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdub3RlSW5mbydcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub3RlSW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdOb3RlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlSW5mbyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBwb3NpdGlvbjogJ2ZpeGVkJywgekluZGV4OiAxLCBmbG9hdDogJ3JpZ2h0JywgcmlnaHQ6ICctNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkFkZFwiIHBsYWNlbWVudD1cInRvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkFkZFwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbVdoaXRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ2dyYXknLCBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTycgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICg8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e2hhbmRsZURyYWdFbmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZUluZm8xMCcgc3R5bGU9e3sgbWFyZ2luTGVmdDogJy0yMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkl0ZW08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RvY2stQTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5SYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRpc2NvdW50ICU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QW1vdW50PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD1cImRyb3BwYWJsZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZHJvcHBhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoKEl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUga2V5PXtJdGVtLmlkUm93fSBkcmFnZ2FibGVJZD17YGRyb3BwYWJsZSR7SXRlbS5pZFJvd31gfSBpbmRleD17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsocHJvdmlkZWQsIHNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3Byb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5uZXdEZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17Nn0+PFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSduZXdEZXNjcmlwdGlvbicgaWQ9J25ld0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5uZXdEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAxMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiIHN4PXt7fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShJdGVtLmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgey4uLnByb3ZpZGVkLmRyYWdIYW5kbGVQcm9wc30gPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgaGVpZ2h0OiAnMTAwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaGlkZGVuPXtJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZSA9PT0gJ2VtcHR5JyA6ICcnfSBzeD17eyBmb250U2l6ZTogJzIzcHgnIH19PntJdGVtLml0ZW1OYW1lID8gSXRlbS5pdGVtTmFtZS5pdGVtTmFtZS50b1VwcGVyQ2FzZSgpIDogJyd9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtRGVzY3JpcHRpb24nIGlkPSdpdGVtRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzQ0MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ndG9wJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZShJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0uaXRlbU5hbWUuX2lkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiRWRpdFwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5JdGVtVXBkYXRlKEl0ZW0uaXRlbU5hbWUuX2lkKX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdCBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZmlsdGVySXRlbUluZm9ybWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uaXRlbU5hbWUgKyAnLycgKyBvcHRpb24uaXRlbUJyYW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlck9wdGlvbj17KHByb3BzLCBvcHRpb24pID0+ICg8Qm94IHsuLi5wcm9wc30gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI2YyZjJmMicgfX0+e29wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9PC9Cb3g+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezR9IHsuLi5wYXJhbXN9IHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZShuZXdJbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck9wdGlvbnM9eyhvcHRpb25zLCB7IGlucHV0VmFsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uaXRlbUJyYW5kLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtRGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBoYW5kbGVDaGFuZ2VJdGVtKEl0ZW0uaWRSb3csIG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIEl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNDcwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSd0b3AnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGVEZXNjcmlwdGlvbihJdGVtLmlkUm93KX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzdG9jaycgaWQ9J3N0b2NrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLnN0b2NrfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUXR5JyBpZD0naXRlbVF0eSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbVJhdGUnIGlkPSdpdGVtUmF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtUmF0ZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1EaXNjb3VudCcgaWQ9J2l0ZW1EaXNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9JzEgdG8gNSAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9J2Ftb3VudFRvdGFsSW52b2ljZSc+e0l0ZW0uaXRlbUFtb3VudC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oSXRlbS5pZFJvdyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvdmlkZWQucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcHBhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAoPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnRHJvcENvbnRleHQgb25EcmFnRW5kPXtoYW5kbGVEcmFnRW5kfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICctMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5JdGVtPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlN0b2NrLUE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UXVhbnRpdHk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EaXNjb3VudCAlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFtb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9XCJkcm9wcGFibGVcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRyb3BwYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cHJvdmlkZWQuaW5uZXJSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKChJdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIGtleT17SXRlbS5pZFJvd30gZHJhZ2dhYmxlSWQ9e2Bkcm9wcGFibGUke0l0ZW0uaWRSb3d9YH0gaW5kZXg9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KHByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtwcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm92aWRlZC5kcmFnZ2FibGVQcm9wc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0ubmV3RGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID48RHJhZ0luZGljYXRvclJvdW5kZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezZ9PjxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbmV3RGVzY3JpcHRpb24nIGlkPSduZXdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0ubmV3RGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgPT09ICdVc2VyJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogMTIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaWdodFRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIiBzeD17e319PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUl0ZW0oSXRlbS5pZFJvdyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHsuLi5wcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9ID48RHJhZ0luZGljYXRvclJvdW5kZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGhlaWdodDogJzEwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGhpZGRlbj17SXRlbS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUgPT09ICdlbXB0eScgOiAnJ30gc3g9e3sgZm9udFNpemU6ICcyM3B4JyB9fT57SXRlbS5pdGVtTmFtZSA/IEl0ZW0uaXRlbU5hbWUuaXRlbU5hbWUudG9VcHBlckNhc2UoKSA6ICcnfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0naXRlbURlc2NyaXB0aW9uJyBpZD0naXRlbURlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17SXRlbS5pdGVtRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXszfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgZm9udFNpemU6IDEyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J3RvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNob3dBdXRvY29tcGxldGUoSXRlbS5pZFJvdyl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtLml0ZW1OYW1lLl9pZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkVkaXRcIiBwbGFjZW1lbnQ9J2JvdHRvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcGVuSXRlbVVwZGF0ZShJdGVtLml0ZW1OYW1lLl9pZCl9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtmaWx0ZXJJdGVtSW5mb3JtYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5pdGVtTmFtZSArICcvJyArIG9wdGlvbi5pdGVtQnJhbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsIG9wdGlvbikgPT4gKDxCb3ggey4uLnByb3BzfT57b3B0aW9uLml0ZW1OYW1lICsgJy8nICsgb3B0aW9uLml0ZW1CcmFuZH08L0JveD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH0gey4uLnBhcmFtc30gcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25JbnB1dENoYW5nZT17KGV2ZW50LCBuZXdJbnB1dFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KG9wdGlvbnMsIHsgaW5wdXRWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1OYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5pdGVtQnJhbmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLml0ZW1EZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZUl0ZW0oSXRlbS5pZFJvdywgbmV3VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFwZXJDb21wb25lbnQ9eyh7IGNoaWxkcmVuLCAuLi5vdGhlciB9KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCB7Li4ub3RoZXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgbGVmdDogJzAnLCBtYXJnaW5Ub3A6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMihlKX0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlID09PSAnVXNlcid9IG9uTW91c2VEb3duPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNycgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFERCBORVcgSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc0NzBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xlYXJcIiBwbGFjZW1lbnQ9J3RvcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlU2hvd0F1dG9jb21wbGV0ZURlc2NyaXB0aW9uKEl0ZW0uaWRSb3cpfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N0b2NrJyBpZD0nc3RvY2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uc3RvY2t9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2l0ZW1RdHknIGlkPSdpdGVtUXR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1RdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtUmF0ZScgaWQ9J2l0ZW1SYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtJdGVtLml0ZW1SYXRlfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdpdGVtRGlzY291bnQnIGlkPSdpdGVtRGlzY291bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0l0ZW0uaXRlbURpc2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPScxIHRvIDUgJSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGlkPSdhbW91bnRUb3RhbEludm9pY2UnPntJdGVtLml0ZW1BbW91bnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKEl0ZW0uaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpZ2h0VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3BwYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcyMHB4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J25vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25vdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm90ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0ludm9pY2UgTm90ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROb3RlKGUudGFyZ2V0LnZhbHVlLnRvVXBwZXJDYXNlKCkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzUwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJmaXJzdFRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5TdWItVG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nc3ViVG90YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3ViVG90YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3ViVG90YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5TaGlwcGluZyBGZWVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nc2hpcHBpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc2hpcHBpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2hpcHBpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNoaXBwaW5nKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYWRqdXN0bWVudCcgaWQ9J2FkanVzdG1lbnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGp1c3RtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFkanVzdG1lbnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzI1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2FkanVzdG1lbnROdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYWRqdXN0bWVudE51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthZGp1c3RtZW50TnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBZGp1c3RtZW50TnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlRvdGFsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd0b3RhbEludm9pY2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndG90YWxJbnZvaWNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvdGFsSW52b2ljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17eyBib3JkZXJCb3R0b206ICcxcHggc29saWQgYmxhY2snIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PkJhbGFuY2UgRHVlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nYmFsYW5jZUR1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdiYWxhbmNlRHVlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JhbGFuY2VEdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+VG90YWwgSW4gV29yZHM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidG90YWxXXCIgaWQ9XCJ0b3RhbFdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbFd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4Um93cz17M31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSd0ZXJtcydcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Rlcm1zJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Rlcm1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0ludm9pY2UgVGVybXMnXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRlcm1zKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnNjAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2F2aW5nICE9PSAndHJ1ZScgPyA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPiA6IDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlNhdmluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkJhY2t9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VCYWNrfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkRvIHlvdSB3YW50IHRvIHN0b3AgQ29udmVydGluZyBRdW90YXRpb24gdG8gSW52b2ljZSA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGUgOjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiPiBJZiB5b3Ugc3RvcCB1cGRhdGluZyB3aXRob3V0IHNhdmluZywgYWxsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3Q8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9Fc3RpbWF0ZVZpZXdBZG1pbicpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlllczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+Tm88L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvSW52b2ljZVZpZXdBZG1pbkFsbC8ke2lkSW52b2ljZX1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e0Vycm9yT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRXJyb3J9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENhbmNlbEljb24gc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PlNhdmluZyBGYWlsZWQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT0ndHh0MScgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGU6PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj5TZWxlY3QgYSBEdWUgRGF0ZTwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlQXV0b2NvbXBsZXRlMn1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUyLCB3aWR0aDogODAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VBdXRvY29tcGxldGUyfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnLCBwYWRkaW5nOiAnMjBweCcsIG92ZXJmbG93OiAnaGlkZGVuJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJyB9fT5cclxuICAgICAgICAgICAgPEl0ZW1Gb3JtVmlldzIgb25DbG9zZT17aGFuZGxlQ2xvc2VBdXRvY29tcGxldGUyfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuSXRlbVVwZGF0ZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUl0ZW1VcGRhdGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlMiwgd2lkdGg6IDgwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlSXRlbVVwZGF0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzYwMHB4JywgcGFkZGluZzogJzIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgIDxJdGVtVXBkYXRlVmlldzIgb25DbG9zZT17aGFuZGxlQ2xvc2VJdGVtVXBkYXRlfSBpZD17aWRJdGVtfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVzdGltYXRlVmlld0NvbnZlcnRUb0ludm9pY2VcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL2Nzcy9TaWRlYmFyTmV3LnNjc3MnXHJcbmltcG9ydCB7IE91dGxldCwgTmF2TGluaywgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBQZXJtSWRlbnRpdHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGVybUlkZW50aXR5JztcclxuaW1wb3J0IExpc3RBbHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTGlzdEFsdCc7XHJcbmltcG9ydCBEZXNjcmlwdGlvbkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZXNjcmlwdGlvbic7XHJcbmltcG9ydCBSZWNlaXB0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1JlY2VpcHQnO1xyXG5pbXBvcnQgTW92aW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vdmluZyc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5ncyc7XHJcbmltcG9ydCBJbnNlcnREcml2ZUZpbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSW5zZXJ0RHJpdmVGaWxlJztcclxuaW1wb3J0IFJlc3RvcmVQYWdlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jlc3RvcmVQYWdlJztcclxuaW1wb3J0IFJlcXVlc3RRdW90ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZXF1ZXN0UXVvdGUnO1xyXG5pbXBvcnQgTW9uZXRpemF0aW9uT25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9uZXRpemF0aW9uT24nO1xyXG5pbXBvcnQgRW5naW5lZXJpbmdJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRW5naW5lZXJpbmcnO1xyXG5pbXBvcnQgeyBFeHBsaWNpdCwgU2hvcHBpbmdCYWdPdXRsaW5lZCB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUm9vbVByZWZlcmVuY2VzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jvb21QcmVmZXJlbmNlcyc7XHJcbmltcG9ydCB7IExpc3RJdGVtQnV0dG9uLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUGF5bWVudEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QYXltZW50JztcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0JztcclxuZnVuY3Rpb24gU2lkZWJhckRhc2gxKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxEYXNoYm9hcmRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGFzaGJvYXJkXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxQZXJtSWRlbnRpdHlJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ3VzdG9tZXJcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSAgPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TGlzdEFsdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJTdG9yZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UmVxdWVzdFF1b3RlSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlF1b3RhdGlvblwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPERlc2NyaXB0aW9uSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkludm9pY2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxNb25ldGl6YXRpb25Pbkljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQYXltZW50XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8U2hvcHBpbmdCYWdPdXRsaW5lZCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhaWx5IEV4cGVuc2VzXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJvb21QcmVmZXJlbmNlc0ljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQcm9qZWN0XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UmVjZWlwdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQdXJjaGFzZXMgUmVxdWVzdFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8RW5naW5lZXJpbmdJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTWFpbnRlbmFuY2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJNb3JlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckRhc2gxIiwiJ3VzZSBzdHJpY3QnOyBcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdG9PcmRpbmFsOiByZXF1aXJlKCcuL3RvT3JkaW5hbCcpLFxuICAgIHRvV29yZHM6IHJlcXVpcmUoJy4vdG9Xb3JkcycpLFxuICAgIHRvV29yZHNPcmRpbmFsOiByZXF1aXJlKCcuL3RvV29yZHNPcmRpbmFsJylcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8vIFNpbXBsaWZpZWQgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vbWFybHVuNzgvODg1ZWIwMDIxZTk4MGM2Y2UwZmJcbmZ1bmN0aW9uIGlzRmluaXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuICEodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJyB8fCB2YWx1ZSAhPT0gdmFsdWUgfHwgdmFsdWUgPT09IEluZmluaXR5IHx8IHZhbHVlID09PSAtSW5maW5pdHkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRmluaXRlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IHJlcXVpcmUoJy4vbWF4U2FmZUludGVnZXInKTtcblxuZnVuY3Rpb24gaXNTYWZlTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTWF0aC5hYnModmFsdWUpIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTYWZlTnVtYmVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRU5EU19XSVRIX0RPVUJMRV9aRVJPX1BBVFRFUk4gPSAvKGh1bmRyZWR8dGhvdXNhbmR8KG18Ynx0cnxxdWFkcilpbGxpb24pJC87XG52YXIgRU5EU19XSVRIX1RFRU5fUEFUVEVSTiA9IC90ZWVuJC87XG52YXIgRU5EU19XSVRIX1lfUEFUVEVSTiA9IC95JC87XG52YXIgRU5EU19XSVRIX1pFUk9fVEhST1VHSF9UV0VMVkVfUEFUVEVSTiA9IC8oemVyb3xvbmV8dHdvfHRocmVlfGZvdXJ8Zml2ZXxzaXh8c2V2ZW58ZWlnaHR8bmluZXx0ZW58ZWxldmVufHR3ZWx2ZSkkLztcbnZhciBvcmRpbmFsTGVzc1RoYW5UaGlydGVlbiA9IHtcbiAgICB6ZXJvOiAnemVyb3RoJyxcbiAgICBvbmU6ICdmaXJzdCcsXG4gICAgdHdvOiAnc2Vjb25kJyxcbiAgICB0aHJlZTogJ3RoaXJkJyxcbiAgICBmb3VyOiAnZm91cnRoJyxcbiAgICBmaXZlOiAnZmlmdGgnLFxuICAgIHNpeDogJ3NpeHRoJyxcbiAgICBzZXZlbjogJ3NldmVudGgnLFxuICAgIGVpZ2h0OiAnZWlnaHRoJyxcbiAgICBuaW5lOiAnbmludGgnLFxuICAgIHRlbjogJ3RlbnRoJyxcbiAgICBlbGV2ZW46ICdlbGV2ZW50aCcsXG4gICAgdHdlbHZlOiAndHdlbGZ0aCdcbn07XG5cbi8qKlxuICogQ29udmVydHMgYSBudW1iZXItd29yZCBpbnRvIGFuIG9yZGluYWwgbnVtYmVyLXdvcmQuXG4gKiBAZXhhbXBsZSBtYWtlT3JkaW5hbCgnb25lJykgPT4gJ2ZpcnN0J1xuICogQHBhcmFtIHtzdHJpbmd9IHdvcmRzXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBtYWtlT3JkaW5hbCh3b3Jkcykge1xuICAgIC8vIEVuZHMgd2l0aCAqMDAgKDEwMCwgMTAwMCwgZXRjLikgb3IgKnRlZW4gKDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5KVxuICAgIGlmIChFTkRTX1dJVEhfRE9VQkxFX1pFUk9fUEFUVEVSTi50ZXN0KHdvcmRzKSB8fCBFTkRTX1dJVEhfVEVFTl9QQVRURVJOLnRlc3Qod29yZHMpKSB7XG4gICAgICAgIHJldHVybiB3b3JkcyArICd0aCc7XG4gICAgfVxuICAgIC8vIEVuZHMgd2l0aCAqeSAoMjAsIDMwLCA0MCwgNTAsIDYwLCA3MCwgODAsIDkwKVxuICAgIGVsc2UgaWYgKEVORFNfV0lUSF9ZX1BBVFRFUk4udGVzdCh3b3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHdvcmRzLnJlcGxhY2UoRU5EU19XSVRIX1lfUEFUVEVSTiwgJ2lldGgnKTtcbiAgICB9XG4gICAgLy8gRW5kcyB3aXRoIG9uZSB0aHJvdWdoIHR3ZWx2ZVxuICAgIGVsc2UgaWYgKEVORFNfV0lUSF9aRVJPX1RIUk9VR0hfVFdFTFZFX1BBVFRFUk4udGVzdCh3b3JkcykpIHtcbiAgICAgICAgcmV0dXJuIHdvcmRzLnJlcGxhY2UoRU5EU19XSVRIX1pFUk9fVEhST1VHSF9UV0VMVkVfUEFUVEVSTiwgcmVwbGFjZVdpdGhPcmRpbmFsVmFyaWFudCk7XG4gICAgfVxuICAgIHJldHVybiB3b3Jkcztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZVdpdGhPcmRpbmFsVmFyaWFudChtYXRjaCwgbnVtYmVyV29yZCkge1xuICAgIHJldHVybiBvcmRpbmFsTGVzc1RoYW5UaGlydGVlbltudW1iZXJXb3JkXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYWtlT3JkaW5hbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1BWF9TQUZFX0lOVEVHRVI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpc0Zpbml0ZSA9IHJlcXVpcmUoJy4vaXNGaW5pdGUnKTtcbnZhciBpc1NhZmVOdW1iZXIgPSByZXF1aXJlKCcuL2lzU2FmZU51bWJlcicpO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGludGVnZXIgaW50byBhIHN0cmluZyB3aXRoIGFuIG9yZGluYWwgcG9zdGZpeC5cbiAqIElmIG51bWJlciBpcyBkZWNpbWFsLCB0aGUgZGVjaW1hbHMgd2lsbCBiZSByZW1vdmVkLlxuICogQGV4YW1wbGUgdG9PcmRpbmFsKDEyKSA9PiAnMTJ0aCdcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b09yZGluYWwobnVtYmVyKSB7XG4gICAgdmFyIG51bSA9IHBhcnNlSW50KG51bWJlciwgMTApO1xuXG4gICAgaWYgKCFpc0Zpbml0ZShudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnTm90IGEgZmluaXRlIG51bWJlcjogJyArIG51bWJlciArICcgKCcgKyB0eXBlb2YgbnVtYmVyICsgJyknXG4gICAgICAgICk7XG4gICAgfVxuICAgIGlmICghaXNTYWZlTnVtYmVyKG51bSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgICAnSW5wdXQgaXMgbm90IGEgc2FmZSBudW1iZXIsIGl04oCZcyBlaXRoZXIgdG9vIGxhcmdlIG9yIHRvbyBzbWFsbC4nXG4gICAgICAgICk7XG4gICAgfVxuICAgIHZhciBzdHIgPSBTdHJpbmcobnVtKTtcbiAgICB2YXIgbGFzdFR3b0RpZ2l0cyA9IE1hdGguYWJzKG51bSAlIDEwMCk7XG4gICAgdmFyIGJldHdlZW5FbGV2ZW5BbmRUaGlydGVlbiA9IGxhc3RUd29EaWdpdHMgPj0gMTEgJiYgbGFzdFR3b0RpZ2l0cyA8PSAxMztcbiAgICB2YXIgbGFzdENoYXIgPSBzdHIuY2hhckF0KHN0ci5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4gc3RyICsgKGJldHdlZW5FbGV2ZW5BbmRUaGlydGVlbiA/ICd0aCdcbiAgICAgICAgICAgIDogbGFzdENoYXIgPT09ICcxJyA/ICdzdCdcbiAgICAgICAgICAgIDogbGFzdENoYXIgPT09ICcyJyA/ICduZCdcbiAgICAgICAgICAgIDogbGFzdENoYXIgPT09ICczJyA/ICdyZCdcbiAgICAgICAgICAgIDogJ3RoJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9PcmRpbmFsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWFrZU9yZGluYWwgPSByZXF1aXJlKCcuL21ha2VPcmRpbmFsJyk7XG52YXIgaXNGaW5pdGUgPSByZXF1aXJlKCcuL2lzRmluaXRlJyk7XG52YXIgaXNTYWZlTnVtYmVyID0gcmVxdWlyZSgnLi9pc1NhZmVOdW1iZXInKTtcblxudmFyIFRFTiA9IDEwO1xudmFyIE9ORV9IVU5EUkVEID0gMTAwO1xudmFyIE9ORV9USE9VU0FORCA9IDEwMDA7XG52YXIgT05FX01JTExJT04gPSAxMDAwMDAwO1xudmFyIE9ORV9CSUxMSU9OID0gMTAwMDAwMDAwMDsgICAgICAgICAgIC8vICAgICAgICAgMS4wMDAuMDAwLjAwMCAoOSlcbnZhciBPTkVfVFJJTExJT04gPSAxMDAwMDAwMDAwMDAwOyAgICAgICAvLyAgICAgMS4wMDAuMDAwLjAwMC4wMDAgKDEyKVxudmFyIE9ORV9RVUFEUklMTElPTiA9IDEwMDAwMDAwMDAwMDAwMDA7IC8vIDEuMDAwLjAwMC4wMDAuMDAwLjAwMCAoMTUpXG52YXIgTUFYID0gOTAwNzE5OTI1NDc0MDk5MjsgICAgICAgICAgICAgLy8gOS4wMDcuMTk5LjI1NC43NDAuOTkyICgxNSlcblxudmFyIExFU1NfVEhBTl9UV0VOVFkgPSBbXG4gICAgJ3plcm8nLCAnb25lJywgJ3R3bycsICd0aHJlZScsICdmb3VyJywgJ2ZpdmUnLCAnc2l4JywgJ3NldmVuJywgJ2VpZ2h0JywgJ25pbmUnLCAndGVuJyxcbiAgICAnZWxldmVuJywgJ3R3ZWx2ZScsICd0aGlydGVlbicsICdmb3VydGVlbicsICdmaWZ0ZWVuJywgJ3NpeHRlZW4nLCAnc2V2ZW50ZWVuJywgJ2VpZ2h0ZWVuJywgJ25pbmV0ZWVuJ1xuXTtcblxudmFyIFRFTlRIU19MRVNTX1RIQU5fSFVORFJFRCA9IFtcbiAgICAnemVybycsICd0ZW4nLCAndHdlbnR5JywgJ3RoaXJ0eScsICdmb3J0eScsICdmaWZ0eScsICdzaXh0eScsICdzZXZlbnR5JywgJ2VpZ2h0eScsICduaW5ldHknXG5dO1xuXG4vKipcbiAqIENvbnZlcnRzIGFuIGludGVnZXIgaW50byB3b3Jkcy5cbiAqIElmIG51bWJlciBpcyBkZWNpbWFsLCB0aGUgZGVjaW1hbHMgd2lsbCBiZSByZW1vdmVkLlxuICogQGV4YW1wbGUgdG9Xb3JkcygxMikgPT4gJ3R3ZWx2ZSdcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFthc09yZGluYWxdIC0gRGVwcmVjYXRlZCwgdXNlIHRvV29yZHNPcmRpbmFsKCkgaW5zdGVhZCFcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRvV29yZHMobnVtYmVyLCBhc09yZGluYWwpIHtcbiAgICB2YXIgd29yZHM7XG4gICAgdmFyIG51bSA9IHBhcnNlSW50KG51bWJlciwgMTApO1xuXG4gICAgaWYgKCFpc0Zpbml0ZShudW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgICAnTm90IGEgZmluaXRlIG51bWJlcjogJyArIG51bWJlciArICcgKCcgKyB0eXBlb2YgbnVtYmVyICsgJyknXG4gICAgICAgICk7XG4gICAgfVxuICAgIGlmICghaXNTYWZlTnVtYmVyKG51bSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXG4gICAgICAgICAgICAnSW5wdXQgaXMgbm90IGEgc2FmZSBudW1iZXIsIGl04oCZcyBlaXRoZXIgdG9vIGxhcmdlIG9yIHRvbyBzbWFsbC4nXG4gICAgICAgICk7XG4gICAgfVxuICAgIHdvcmRzID0gZ2VuZXJhdGVXb3JkcyhudW0pO1xuICAgIHJldHVybiBhc09yZGluYWwgPyBtYWtlT3JkaW5hbCh3b3JkcykgOiB3b3Jkcztcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVXb3JkcyhudW1iZXIpIHtcbiAgICB2YXIgcmVtYWluZGVyLCB3b3JkLFxuICAgICAgICB3b3JkcyA9IGFyZ3VtZW50c1sxXTtcblxuICAgIC8vIFdl4oCZcmUgZG9uZVxuICAgIGlmIChudW1iZXIgPT09IDApIHtcbiAgICAgICAgcmV0dXJuICF3b3JkcyA/ICd6ZXJvJyA6IHdvcmRzLmpvaW4oJyAnKS5yZXBsYWNlKC8sJC8sICcnKTtcbiAgICB9XG4gICAgLy8gRmlyc3QgcnVuXG4gICAgaWYgKCF3b3Jkcykge1xuICAgICAgICB3b3JkcyA9IFtdO1xuICAgIH1cbiAgICAvLyBJZiBuZWdhdGl2ZSwgcHJlcGVuZCDigJxtaW51c+KAnVxuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICAgIHdvcmRzLnB1c2goJ21pbnVzJyk7XG4gICAgICAgIG51bWJlciA9IE1hdGguYWJzKG51bWJlcik7XG4gICAgfVxuXG4gICAgaWYgKG51bWJlciA8IDIwKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IDA7XG4gICAgICAgIHdvcmQgPSBMRVNTX1RIQU5fVFdFTlRZW251bWJlcl07XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9IVU5EUkVEKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIFRFTjtcbiAgICAgICAgd29yZCA9IFRFTlRIU19MRVNTX1RIQU5fSFVORFJFRFtNYXRoLmZsb29yKG51bWJlciAvIFRFTildO1xuICAgICAgICAvLyBJbiBjYXNlIG9mIHJlbWFpbmRlciwgd2UgbmVlZCB0byBoYW5kbGUgaXQgaGVyZSB0byBiZSBhYmxlIHRvIGFkZCB0aGUg4oCcLeKAnVxuICAgICAgICBpZiAocmVtYWluZGVyKSB7XG4gICAgICAgICAgICB3b3JkICs9ICctJyArIExFU1NfVEhBTl9UV0VOVFlbcmVtYWluZGVyXTtcbiAgICAgICAgICAgIHJlbWFpbmRlciA9IDA7XG4gICAgICAgIH1cblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX1RIT1VTQU5EKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9IVU5EUkVEO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9IVU5EUkVEKSkgKyAnIGh1bmRyZWQnO1xuXG4gICAgfSBlbHNlIGlmIChudW1iZXIgPCBPTkVfTUlMTElPTikge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfVEhPVVNBTkQ7XG4gICAgICAgIHdvcmQgPSBnZW5lcmF0ZVdvcmRzKE1hdGguZmxvb3IobnVtYmVyIC8gT05FX1RIT1VTQU5EKSkgKyAnIHRob3VzYW5kLCc7XG5cbiAgICB9IGVsc2UgaWYgKG51bWJlciA8IE9ORV9CSUxMSU9OKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9NSUxMSU9OO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9NSUxMSU9OKSkgKyAnIG1pbGxpb24sJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX1RSSUxMSU9OKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9CSUxMSU9OO1xuICAgICAgICB3b3JkID0gZ2VuZXJhdGVXb3JkcyhNYXRoLmZsb29yKG51bWJlciAvIE9ORV9CSUxMSU9OKSkgKyAnIGJpbGxpb24sJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgT05FX1FVQURSSUxMSU9OKSB7XG4gICAgICAgIHJlbWFpbmRlciA9IG51bWJlciAlIE9ORV9UUklMTElPTjtcbiAgICAgICAgd29yZCA9IGdlbmVyYXRlV29yZHMoTWF0aC5mbG9vcihudW1iZXIgLyBPTkVfVFJJTExJT04pKSArICcgdHJpbGxpb24sJztcblxuICAgIH0gZWxzZSBpZiAobnVtYmVyIDw9IE1BWCkge1xuICAgICAgICByZW1haW5kZXIgPSBudW1iZXIgJSBPTkVfUVVBRFJJTExJT047XG4gICAgICAgIHdvcmQgPSBnZW5lcmF0ZVdvcmRzKE1hdGguZmxvb3IobnVtYmVyIC8gT05FX1FVQURSSUxMSU9OKSkgK1xuICAgICAgICAnIHF1YWRyaWxsaW9uLCc7XG4gICAgfVxuXG4gICAgd29yZHMucHVzaCh3b3JkKTtcbiAgICByZXR1cm4gZ2VuZXJhdGVXb3JkcyhyZW1haW5kZXIsIHdvcmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1dvcmRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbWFrZU9yZGluYWwgPSByZXF1aXJlKCcuL21ha2VPcmRpbmFsJyk7XG52YXIgdG9Xb3JkcyA9IHJlcXVpcmUoJy4vdG9Xb3JkcycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyIGludG8gb3JkaW5hbCB3b3Jkcy5cbiAqIEBleGFtcGxlIHRvV29yZHNPcmRpbmFsKDEyKSA9PiAndHdlbGZ0aCdcbiAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b1dvcmRzT3JkaW5hbChudW1iZXIpIHtcbiAgICB2YXIgd29yZHMgPSB0b1dvcmRzKG51bWJlcik7XG4gICAgcmV0dXJuIG1ha2VPcmRpbmFsKHdvcmRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1dvcmRzT3JkaW5hbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhckRhc2gxIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkRlbGV0ZUljb24iLCJCYWNrZHJvcCIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJQYXBlciIsIlRhYmxlQ29udGFpbmVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsIkF1dG9jb21wbGV0ZSIsIk1vZGFsIiwiQm94Iiwic3R5bGVkIiwiT3V0bGluZWRJbnB1dCIsIklucHV0QWRvcm5tZW50IiwiRGl2aWRlciIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkNvbnRhaW5lciIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIkFkZCIsIkRyYWdJbmRpY2F0b3JSb3VuZGVkIiwiRWRpdCIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJ1c2VOYXZpZ2F0ZSIsInVzZVBhcmFtcyIsIk5hdmlnYXRlIiwiTmF2TGluayIsInY0IiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsImRheWpzIiwiQXJyb3dCYWNrIiwiU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIiwiQWRkU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvYWRlciIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2dvdXQiLCJDbG9zZSIsIkl0ZW1Gb3JtVmlldzIiLCJJdGVtVXBkYXRlVmlldzIiLCJudW1iZXJUb1dvcmRzIiwiRHJhZ0Ryb3BDb250ZXh0IiwiRHJhZ2dhYmxlIiwiRHJvcHBhYmxlIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiTGlnaHRUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJCbGFja1Rvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsIkRvd25Ub29sdGlwIiwiX3JlZjUiLCJfZXhjbHVkZWQzIiwiX3JlZjYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsInN0eWxlMiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjciLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjgiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJFc3RpbWF0ZVZpZXdDb252ZXJ0VG9JbnZvaWNlIiwiX3VzZVBhcmFtcyIsImlkIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjkiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiY3VzdG9tZXJOYW1lIiwic2V0Q3VzdG9tZXJOYW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJjdXN0b21lck5hbWUxIiwic2V0Q3VzdG9tZXJOYW1lMSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiZXN0aW1hdGVOYW1lIiwic2V0RXN0aW1hdGVOYW1lIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJlc3RpbWF0ZVN1YmplY3QiLCJzZXRFc3RpbWF0ZVN1YmplY3QiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsIlJlZiIsInNldFJlZiIsIl9SZWFjdCR1c2VTdGF0ZSIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImVzdGltYXRlRGVmZWN0Iiwic2V0RXN0aW1hdGVEZWZlY3QiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwiaXRlbXMiLCJTZXRJdGVtcyIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJzdWJUb3RhbCIsInNldFN1YlRvdGFsIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsInRvdGFsIiwic2V0VG90YWwiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwiYWRqdXN0bWVudCIsInNldEFkanVzdG1lbnQiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiYWRqdXN0bWVudE51bWJlciIsInNldEFkanVzdG1lbnROdW1iZXIiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwidG90YWxJbnZvaWNlIiwic2V0VG90YWxJbnZvaWNlIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsInNoaXBwaW5nIiwic2V0U2hpcHBpbmciLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwiYmFsYW5jZUR1ZSIsInNldEJhbGFuY2VEdWUiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4IiwidG90YWxXIiwic2V0VG90YWxXIiwiaW52b2ljZURhdGUiLCJEYXRlIiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsImludm9pY2VEdWVEYXRlIiwic2V0RHVlRGF0ZSIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJpbnZvaWNlTnVtYmVyIiwic2V0SW52b2ljZU51bWJlciIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJub3RlSW5mbyIsInNldE5vdGVJbmZvIiwiaW52b2ljZU5hbWUiLCJTdHJpbmciLCJwYWRTdGFydCIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJub3RlIiwic2V0Tm90ZSIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJ0ZXJtcyIsInNldFRlcm1zIiwiX3VzZVN0YXRlMzkiLCJfdXNlU3RhdGU0MCIsIkl0ZW1JbmZvcm1hdGlvbiIsInNldEl0ZW1JbmZvcm1hdGlvbiIsImZldGNobGFzdE51bWJlciIsIl9yZWYwIiwiX3JlcyRkYXRhIiwiX3JlcyRkYXRhMiIsInBhcnNlSW50IiwiZmV0Y2hEYXRhIiwiX3JlZjEiLCJfcmVzJGRhdGEzIiwiX3JlcyRkYXRhNCIsIm1hcCIsIml0ZW0iLCJkaXNjb3VudCIsIk51bWJlciIsIml0ZW1EaXNjb3VudCIsInF0eSIsIml0ZW1RdHkiLCJhbW91bnQiLCJpdGVtQW1vdW50IiwiZGlzY291bnRGYWN0b3IiLCJ0b3RhbEJlZm9yZURpc2NvdW50IiwiY2FsY3VsYXRlZFJhdGUiLCJNYXRoIiwicm91bmQiLCJpdGVtUmF0ZSIsImRhdGVDb21tZW50IiwiZmV0Y2hJdGVtIiwiX3JlZjEwIiwicmV2ZXJzZSIsImhhbmRsZUNoYW5nZUl0ZW0iLCJpZFJvdyIsIm5ld1ZhbHVlIiwic2VsZWN0ZWRPcHRpb25zIiwicm93IiwiaXRlbU5hbWUiLCJfaWQiLCJpdGVtQ29zdCIsIml0ZW1Db3N0UHJpY2UiLCJpdGVtRGVzY3JpcHRpb24iLCJpdGVtU2VsbGluZ1ByaWNlIiwic3RvY2siLCJpdGVtUXVhbnRpdHkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiaSIsIl9lJHRhcmdldCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImxpc3QiLCJoYW5kbGVDaGFuZ2VDRU8iLCJfZSR0YXJnZXQyIiwiYWRkSXRlbSIsInR5cGVJdGVtIiwidG90YWxBbW91bnQiLCJwZXJjZW50YWdlIiwiaXRlbUJ1eSIsIml0ZW1XZWlnaHQiLCJ0b3RhbEdlbmVyYWxlIiwidG90YWxDb3N0IiwiaXRlbU91dCIsIm5ld0l0ZW1PdXQiLCJhZGRJdGVtV2hpdGUiLCJuZXdEZXNjcmlwdGlvbiIsImhhbmRsZURyYWdFbmQiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsIm5ld0l0ZW1zIiwiX25ld0l0ZW1zJHNwbGljZSIsInNwbGljZSIsInNvdXJjZSIsImluZGV4IiwiX25ld0l0ZW1zJHNwbGljZTIiLCJyZW1vdmVkIiwiZGVsZXRlSXRlbSIsImZpbHRlciIsIkl0ZW0iLCJmaWx0ZXJJdGVtSW5mb3JtYXRpb24iLCJvcHRpb24iLCJmaW5kIiwiX3JvdyRpdGVtTmFtZSIsImhhbmRsZVNob3dBdXRvY29tcGxldGUiLCJoYW5kbGVTaG93QXV0b2NvbXBsZXRlRGVzY3JpcHRpb24iLCJfdXNlU3RhdGU0MSIsIl91c2VTdGF0ZTQyIiwib3Blbkl0ZW1VcGRhdGUiLCJzZXRPcGVuSXRlbVVwZGF0ZSIsIl91c2VTdGF0ZTQzIiwiX3VzZVN0YXRlNDQiLCJpZEl0ZW0iLCJzZXRJZEl0ZW0iLCJoYW5kbGVPcGVuSXRlbVVwZGF0ZSIsIl9yZWYxMSIsIl94IiwiZmV0Y2hDdXN0b21lciIsIl9yZWYxMiIsInBheW1lbnRUZXJtcyIsImN1cnJlbnREYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImhhbmRsZUNsb3NlSXRlbVVwZGF0ZSIsIl9yZWYxMyIsIl9yb3ckaXRlbU5hbWUyIiwic3RhdHVzIiwiaGFuZGxlU3VibWl0VXBkYXRlU3RhdHVzIiwiX3JlZjE0IiwiUmVmZXJlbmNlSW5mbzIiLCJSZWZlcmVuY2VOYW1lIiwicHV0IiwiX3gyIiwicmVzdWx0MSIsInJlZHVjZSIsInN1bSIsInRvRml4ZWQiLCJuZXdUb3RhbCIsIm5ld0JhbGFuY2UiLCJ3aG9sZVBhcnQiLCJmbG9vciIsImZyYWN0aW9uYWxQYXJ0Iiwic3BsaXQiLCJ3aG9sZVdvcmRzIiwidG9Xb3JkcyIsImZyYWN0aW9uYWxXb3JkcyIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJvcGVuQmFjayIsInNldE9wZW5CYWNrIiwiaGFuZGxlT3BlbkJhY2siLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsb3NlQmFjayIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTUxIiwiX3VzZVN0YXRlNTIiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3BlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2xvc2VFcnJvciIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWYxNSIsIlJlZmVyZW5jZUluZm9OdW1iZXIiLCJpZEluZm8iLCJwZXJzb24iLCJyZWFzb24iLCJkYXRlTm90aWZpY2F0aW9uIiwicG9zdCIsImxvZyIsIl94MyIsIl94NCIsImludm9pY2VQdXJjaGFzZSIsIl91c2VTdGF0ZTUzIiwiX3VzZVN0YXRlNTQiLCJpZEludm9pY2UiLCJzZXRJZEludm9pY2UiLCJfdXNlU3RhdGU1NSIsIl91c2VTdGF0ZTU2Iiwic2F2aW5nIiwic2V0U2F2aW5nIiwiaGFuZGxlU3VibWl0IiwiX3JlZjE2IiwiaW52b2ljZVN1YmplY3QiLCJpbnZvaWNlRGVmZWN0IiwiUG9zaXRpb24iLCJfeDUiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX1JlYWN0JHVzZVN0YXRlMyIsIl9SZWFjdCR1c2VTdGF0ZTQiLCJzaWRlQmFyIiwic2V0U2lkZUJhciIsInRvZ2dsZURyYXdlciIsIl91c2VTdGF0ZTU3IiwiX3VzZVN0YXRlNTgiLCJvcGVuQXV0b2NvbXBsZXRlMiIsInNldE9wZW5BdXRvY29tcGxldGUyIiwiaGFuZGxlT3Blbk9wZW5BdXRvY29tcGxldGUyIiwiaGFuZGxlQ2xvc2VBdXRvY29tcGxldGUyIiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwib25DbGljayIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10Iiwib25TdWJtaXQiLCJjb250YWluZXIiLCJwYWRkaW5nIiwieHMiLCJkaXNhYmxlZCIsImxhYmVsIiwiZ2FwIiwiaHRtbEZvciIsInR5cGUiLCJvbkNoYW5nZSIsInN0YXJ0QWRvcm5tZW50IiwiZGF0ZUFkYXB0ZXIiLCJjb21wb25lbnRzIiwicmVxdWlyZWQiLCJmb3JtYXQiLCJkYXRlIiwicmVuZGVySW5wdXQiLCJwYXJhbXMiLCJtdWx0aWxpbmUiLCJyb3dzIiwiZmxvYXQiLCJyaWdodCIsInRpdGxlIiwicGxhY2VtZW50Iiwib25EcmFnRW5kIiwiZHJvcHBhYmxlSWQiLCJwcm92aWRlZCIsInNuYXBzaG90IiwiZHJvcHBhYmxlUHJvcHMiLCJyZWYiLCJpbm5lclJlZiIsImtleSIsImRyYWdnYWJsZUlkIiwiZHJhZ2dhYmxlUHJvcHMiLCJ1bmRlZmluZWQiLCJGcmFnbWVudCIsImRyYWdIYW5kbGVQcm9wcyIsImNvbFNwYW4iLCJzaXplIiwiY3Vyc29yIiwiaGlkZGVuIiwidG9VcHBlckNhc2UiLCJkaXNhYmxlQ2xlYXJhYmxlIiwib3B0aW9ucyIsImdldE9wdGlvbkxhYmVsIiwiaXRlbUJyYW5kIiwicmVuZGVyT3B0aW9uIiwib25JbnB1dENoYW5nZSIsImV2ZW50IiwibmV3SW5wdXRWYWx1ZSIsImZpbHRlck9wdGlvbnMiLCJfcmVmMTciLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiUGFwZXJDb21wb25lbnQiLCJfcmVmMTgiLCJjaGlsZHJlbiIsIm90aGVyIiwiX2V4Y2x1ZGVkNCIsIm1hcmdpblRvcCIsIm9uTW91c2VEb3duIiwicGxhY2Vob2xkZXIiLCJyZXBsYWNlIiwiX3JlZjE5IiwiX3JlZjIwIiwiX2V4Y2x1ZGVkNSIsImJvcmRlckJvdHRvbSIsInRleHRBbGlnbiIsImFsaWduIiwibWF4Um93cyIsIm9uQ2xvc2UiLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJ0byIsIm92ZXJmbG93WSIsIk91dGxldCIsIkxpbmsiLCJ1c2VMb2NhdGlvbiIsIkRhc2hib2FyZEljb24iLCJQZXJtSWRlbnRpdHlJY29uIiwiTGlzdEFsdEljb24iLCJEZXNjcmlwdGlvbkljb24iLCJSZWNlaXB0SWNvbiIsIk1vdmluZ0ljb24iLCJTZXR0aW5nc0ljb24iLCJJbnNlcnREcml2ZUZpbGVJY29uIiwiUmVzdG9yZVBhZ2VJY29uIiwiUmVxdWVzdFF1b3RlSWNvbiIsIk1vbmV0aXphdGlvbk9uSWNvbiIsIkVuZ2luZWVyaW5nSWNvbiIsIkV4cGxpY2l0IiwiU2hvcHBpbmdCYWdPdXRsaW5lZCIsIlJvb21QcmVmZXJlbmNlc0ljb24iLCJMaXN0SXRlbUJ1dHRvbiIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIm1ha2VTdHlsZXMiLCJQYXltZW50SWNvbiIsIk1vcmVWZXJ0SWNvbiIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9