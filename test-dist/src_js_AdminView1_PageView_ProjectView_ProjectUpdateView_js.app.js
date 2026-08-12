"use strict";
exports.id = "src_js_AdminView1_PageView_ProjectView_ProjectUpdateView_js";
exports.ids = ["src_js_AdminView1_PageView_ProjectView_ProjectUpdateView_js"];
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

/***/ "./src/js/AdminView1/PageView/ProjectView/ProjectUpdateView.js"
/*!*********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/ProjectView/ProjectUpdateView.js ***!
  \*********************************************************************/
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../CustomerVIew/CustomerFormView2 */ "./src/js/AdminView1/PageView/CustomerVIew/CustomerFormView2.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["children"];
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








































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_21__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_26__["default"], {
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
function ProjectUpdateView() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_35__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_35__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_44__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_44__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__.setUser)({
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    customerName = _useState2[0],
    setCustomerName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    customer = _useState4[0],
    setCustomer = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    projectName = _useState6[0],
    setProjectName = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    status = _useState8[0],
    setStatus = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    phase = _useState0[0],
    setPhase = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    description = _useState10[0],
    setDescription = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    startDate = _useState12[0],
    setStartDate = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    visitDate = _useState14[0],
    setVisitDate = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    projectNumber = _useState16[0],
    setProjectNumber = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState18 = _slicedToArray(_useState17, 2),
    isLoadingData = _useState18[0],
    setIsLoadingData = _useState18[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-projects/").concat(id));
          setCustomerName(res.data.data.customerName);
          setProjectName(res.data.data.projectName);
          setStatus(res.data.data.status);
          setPhase(res.data.data.phase);
          setDescription(res.data.data.description);
          setStartDate(res.data.data.startDate);
          setProjectNumber(Number(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.projectNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.projectNumber) || 0));
          setVisitDate(res.data.data.visitDate);
          setIsLoadingData(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchData();
  }, [id]);
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    purchase = _useState20[0],
    setPurchase = _useState20[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetch = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var _res$data3;
          var resCustomer = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/customer"));
          setCustomer(resCustomer.data.data.reverse());
          var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/purchase?summary=true"));
          (_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 || _res$data3.filter(row => row.projectName !== undefined && row.projectName._id === id).map(row => setPurchase(row._id));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function handleFetch() {
        return _ref1.apply(this, arguments);
      };
    }();
    handleFetch();
  }, [id]);
  {/** Customer Start */}
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    openAutocomplete1 = _useState22[0],
    setOpenAutocomplete1 = _useState22[1];
  var handleOpenOpenAutocomplete1 = e => {
    e.stopPropagation();
    setOpenAutocomplete1(true);
  };
  var handleCloseOpenAutocomplete1 = () => {
    setOpenAutocomplete1(false);
  };
  var handleCreateCustomer = newCustomer => {
    setCustomer([newCustomer, ...customer]);
  };
  var handleChangeCustomer = newValue => {
    var selectedOptions = customer.find(option => option === newValue);
    setCustomerName({
      _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      customerName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.Customer
    });
  };
  var handleClearCUstomer = () => {
    setCustomerName({
      _id: "",
      customerName: ""
    });
  };
  {/** Customer End */}
  var handleAdd = () => {
    var abc = [...phase, []];
    setPhase(abc);
  };
  var handleChange = (onChangeValue, i) => {
    var inputData = [...phase];
    inputData[i] = onChangeValue.target.value;
    setPhase(inputData);
  };
  var handleDelete = i => {
    var deletePhase = [...phase];
    deletePhase.splice(i, 1);
    setPhase(deletePhase);
  };
  {/** Reason Modal start */}
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    open2 = _useState24[0],
    setOpen2 = _useState24[1];
  var handleOpenUpdateReason = e => {
    e.preventDefault();
    setOpen2(true);
  };
  var handleCloseUpdateReason = () => {
    setOpen2(false);
  };
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState26 = _slicedToArray(_useState25, 2),
    reason = _useState26[0],
    setReason = _useState26[1];
  var CommentInfo = {
    idInfo: id,
    person: user.data.userName + ' Modified',
    reason
  };
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_50___default()(Date.now());
  {/** Reason Modal end */}
  {/** Loading Start */}
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    openBack = _useState28[0],
    setOpenBack = _useState28[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    loading = _useState30[0],
    setLoading = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    loadingOpenModal = _useState32[0],
    setLoadingOpenModal = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    ErrorOpenModal = _useState34[0],
    setErrorOpenModal = _useState34[1];
  var handleOpen = () => {
    setOpen2(false);
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleError = () => {
    setOpen2(false);
    setErrorOpenModal(true);
    setLoading(true);
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
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState36 = _slicedToArray(_useState35, 2),
    hideBack = _useState36[0],
    setHideBack = _useState36[1];
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* () {
      var data = {
        idInfo: id,
        person: "".concat(user.data.userName, " Modify P-").concat(String(projectNumber).padStart(6, '0')),
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/create-notification/"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateComment() {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleSubmit = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        customerName,
        projectName,
        projectNumber,
        status,
        phase,
        description,
        startDate,
        visitDate,
        updateS: false
      };
      try {
        // Fetch fresh state from server
        var currentRes = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-projects/").concat(id));
        var currentProject = currentRes.data.data;

        // Merge local changes with server state
        var updatedData = _objectSpread(_objectSpread(_objectSpread({}, currentProject), data), {}, {
          updateS: false
        });
        var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/update-projects/").concat(id), updatedData);
        if (res) {
          handleCreateComment();
          handleOpen();
        }
      } catch (error) {
        console.error("Error updating project:", error);
        handleError();
      }
    });
    return function handleSubmit(_x) {
      return _ref11.apply(this, arguments);
    };
  }();
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_25__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_29__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "update project"), hideBack === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_40__["default"], {
    style: {
      color: 'white'
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_40__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_52__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_51__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_46__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_30__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_27__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash1__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_24__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_28__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, isLoadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleOpenUpdateReason
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, customerName.customerName !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    disabled: true,
    id: "customerName",
    name: "customerName",
    label: "Customer Name",
    value: customerName.customerName ? customerName.customerName : '',
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleClearCUstomer,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disableClearable: true,
    options: customer,
    getOptionLabel: option => option.Customer,
    onChange: (e, newValue) => {
      handleChangeCustomer(newValue);
    },
    PaperComponent: _ref12 => {
      var children = _ref12.children,
        other = _objectWithoutProperties(_ref12, _excluded4);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, other, {
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
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, params, {
      label: "Customer Name",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_37__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_38__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_36__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_39__.DatePicker, {
    required: true,
    name: "visitDate",
    value: dayjs__WEBPACK_IMPORTED_MODULE_50___default()(visitDate),
    label: "Visit Date",
    onChange: date => setVisitDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_37__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_38__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_36__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_39__.DatePicker, {
    required: true,
    name: "startDate",
    label: "Start Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_50___default()(startDate),
    onChange: newDate => setStartDate(newDate),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "ProjectName",
    name: "ProjectName",
    label: "Project Name",
    value: projectName,
    onChange: e => setProjectName(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    htmlFor: "projectNumber"
  }, "Project Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    disabled: user.data.role !== 'CEO',
    type: "number",
    id: "projectNumber",
    name: "projectNumber",
    label: "Project Number",
    value: projectNumber,
    onChange: e => setProjectNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
      position: "start"
    }, "P-")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Phase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__["default"], {
    className: "btnCustomer",
    onClick: handleAdd
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, phase.map((data, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "phase",
    id: "phase",
    label: "Phase",
    value: data,
    onChange: e => handleChange(e, i),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_47__["default"], {
    className: "btnCustomer",
    onClick: () => handleDelete(i)
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "status"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    required: true,
    id: "status",
    value: status,
    onChange: e => setStatus(e.target.value),
    name: "status",
    label: "status",
    defaultValue: "Pending"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: "Pending"
  }, "Pending"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: "On-Going"
  }, "On-Going"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: "Stopped"
  }, "Stopped"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: "Completed"
  }, "Completed")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "description",
    name: "description",
    value: description,
    label: "Description",
    multiline: true,
    rows: 4,
    onChange: e => setDescription(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    open: openBack,
    onClose: handleCloseBack,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleCloseBack,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_49__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Do you want to stop updating project ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop updating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate('/ProjectViewAdmin'),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: handleCloseBack,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_18__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__["default"], {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_18__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_43__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_42__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    open: open2,
    onClose: handleCloseUpdateReason,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleCloseUpdateReason,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_49__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Reason Of Updating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    open: openAutocomplete1,
    onClose: handleCloseOpenAutocomplete1,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style2), {}, {
      width: 800
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleCloseOpenAutocomplete1,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_49__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_48__["default"], {
    onCreateOption: handleCreateCustomer,
    onClose: handleCloseOpenAutocomplete1
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectUpdateView);

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

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUHJvamVjdFZpZXdfUHJvamVjdFVwZGF0ZVZpZXdfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLGdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMsU0FBUyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTlY7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMseUJBQXlCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjFCLENBQW1EO0FBQ1E7QUFDbkM7QUFDRTtBQUMwQjtBQUNzQjtBQUN0QjtBQUN5SztBQUM3SjtBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDUTtBQUNBO0FBQ2M7QUFDSTtBQUN6QztBQUMyRDtBQUNsQztBQUN4QjtBQUNnQztBQUNTO0FBQ2E7QUFDaEI7QUFDSjtBQUNOO0FBQ1E7QUFDVjtBQUNMO0FBQ1E7QUFDK0I7QUFDdEM7QUFDQTtBQUNrQjtBQUNwQjtBQUNwQjtBQUM0QjtBQUNRO0FBRzlELElBQU1pRSxZQUFZLEdBQUdqRCwwREFBTSxDQUFDa0QsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2hEdEUsMERBQUEsQ0FBQ3lCLDhEQUFPLEVBQUErQyxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU9uRCw4REFBYyxDQUFDb0QsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsS0FBSztNQUN0QkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDM0JDLFFBQVEsRUFBRTtJQUNaO0VBQ0YsQ0FBQztBQUFBLENBQUMsQ0FBQztBQUVILElBQU1DLFlBQVksR0FBR3BFLDBEQUFNLENBQUNxRSxLQUFBO0VBQUEsSUFBR2xCLFNBQVMsR0FBQWtCLEtBQUEsQ0FBVGxCLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBZ0IsS0FBQSxFQUFBQyxVQUFBO0VBQUEsb0JBQ2hEdEYsMERBQUEsQ0FBQ3lCLDhEQUFPLEVBQUErQyxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ29CLEtBQUE7RUFBQSxJQUFHWCxLQUFLLEdBQUFXLEtBQUEsQ0FBTFgsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPbkQsOERBQWMsQ0FBQ29ELE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLFNBQVM7TUFDMUJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUwsS0FBSyxDQUFDTSxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQzNCQyxRQUFRLEVBQUU7SUFDWjtFQUNGLENBQUM7QUFBQSxDQUFDLENBQUM7QUFFSCxJQUFNSyxXQUFXLEdBQUd4RSwwREFBTSxDQUFDeUUsS0FBQTtFQUFBLElBQUd0QixTQUFTLEdBQUFzQixLQUFBLENBQVR0QixTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQW9CLEtBQUEsRUFBQUMsVUFBQTtFQUFBLG9CQUMvQzFGLDBEQUFBLENBQUN5Qiw4REFBTyxFQUFBK0MsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUN3QixLQUFBO0VBQUEsSUFBR2YsS0FBSyxHQUFBZSxLQUFBLENBQUxmLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBT25ELDhEQUFjLENBQUNvRCxPQUFPLElBQUs7TUFDaENDLGVBQWUsRUFBRSxTQUFTO01BQzFCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxTQUFTLEVBQUVMLEtBQUssQ0FBQ00sT0FBTyxDQUFDLENBQUMsQ0FBQztNQUMzQkMsUUFBUSxFQUFFO0lBQ1o7RUFDRixDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBTVMsS0FBSyxHQUFHO0VBQ1pDLFFBQVEsRUFBRSxVQUFVO0VBQ3BCQyxHQUFHLEVBQUUsS0FBSztFQUNWQyxJQUFJLEVBQUUsS0FBSztFQUNYQyxTQUFTLEVBQUUsdUJBQXVCO0VBQ2xDQyxLQUFLLEVBQUUsR0FBRztFQUNWQyxPQUFPLEVBQUUsa0JBQWtCO0VBQzNCakIsU0FBUyxFQUFFLEVBQUU7RUFDYmtCLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEVBQUUsRUFBRTtBQUNOLENBQUM7QUFDRCxJQUFNQyxNQUFNLEdBQUc7RUFDYlQsUUFBUSxFQUFFLFVBQVU7RUFDcEJDLEdBQUcsRUFBRSxLQUFLO0VBQ1ZDLElBQUksRUFBRSxLQUFLO0VBQ1hDLFNBQVMsRUFBRSx1QkFBdUI7RUFDbENDLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLE9BQU8sRUFBRSxrQkFBa0I7RUFDM0JqQixTQUFTLEVBQUUsRUFBRTtFQUNia0IsRUFBRSxFQUFFLENBQUM7RUFDTEMsRUFBRSxFQUFFLENBQUM7RUFDTEMsRUFBRSxFQUFFO0FBQ04sQ0FBQztBQUVELElBQU1FLFdBQVcsR0FBRyxHQUFHO0FBQ3ZCLElBQU1DLE1BQU0sR0FBR3hGLDBEQUFNLENBQUNXLDZEQUFTLEVBQUU7RUFDL0I4RSxpQkFBaUIsRUFBR0MsSUFBSSxJQUFLQSxJQUFJLEtBQUs7QUFDeEMsQ0FBQyxDQUFDLENBQUNDLEtBQUE7RUFBQSxJQUFHL0IsS0FBSyxHQUFBK0IsS0FBQSxDQUFML0IsS0FBSztJQUFFZ0MsSUFBSSxHQUFBRCxLQUFBLENBQUpDLElBQUk7RUFBQSxPQUFBQyxhQUFBO0lBQ2ZDLE1BQU0sRUFBRWxDLEtBQUssQ0FBQ2tDLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHLENBQUM7SUFDL0JDLFVBQVUsRUFBRXBDLEtBQUssQ0FBQ3FDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFO01BQ3hEQyxNQUFNLEVBQUV2QyxLQUFLLENBQUNxQyxXQUFXLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztNQUN0Q0MsUUFBUSxFQUFFekMsS0FBSyxDQUFDcUMsV0FBVyxDQUFDSSxRQUFRLENBQUNDO0lBQ3ZDLENBQUM7RUFBQyxHQUNFVixJQUFJLElBQUk7SUFDVlcsVUFBVSxFQUFFaEIsV0FBVztJQUN2Qk4sS0FBSyxpQkFBQXBCLE1BQUEsQ0FBaUIwQixXQUFXLFFBQUs7SUFDdENTLFVBQVUsRUFBRXBDLEtBQUssQ0FBQ3FDLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFO01BQ3hEQyxNQUFNLEVBQUV2QyxLQUFLLENBQUNxQyxXQUFXLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztNQUN0Q0MsUUFBUSxFQUFFekMsS0FBSyxDQUFDcUMsV0FBVyxDQUFDSSxRQUFRLENBQUNHO0lBQ3ZDLENBQUM7RUFDSCxDQUFDO0FBQUEsQ0FDRCxDQUFDO0FBQ0gsSUFBTUMsTUFBTSxHQUFHekcsMERBQU0sQ0FBQ2MsNkRBQVMsRUFBRTtFQUFFMkUsaUJBQWlCLEVBQUdDLElBQUksSUFBS0EsSUFBSSxLQUFLO0FBQU8sQ0FBQyxDQUFDLENBQ2hGZ0IsS0FBQTtFQUFBLElBQUc5QyxLQUFLLEdBQUE4QyxLQUFBLENBQUw5QyxLQUFLO0lBQUVnQyxJQUFJLEdBQUFjLEtBQUEsQ0FBSmQsSUFBSTtFQUFBLE9BQVE7SUFDcEIsb0JBQW9CLEVBQUFDLGFBQUE7TUFDbEJoQixRQUFRLEVBQUUsVUFBVTtNQUNwQjhCLFVBQVUsRUFBRSxRQUFRO01BQ3BCMUIsS0FBSyxFQUFFTSxXQUFXO01BQ2xCUyxVQUFVLEVBQUVwQyxLQUFLLENBQUNxQyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDNUNDLE1BQU0sRUFBRXZDLEtBQUssQ0FBQ3FDLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1FBQ3RDQyxRQUFRLEVBQUV6QyxLQUFLLENBQUNxQyxXQUFXLENBQUNJLFFBQVEsQ0FBQ0c7TUFDdkMsQ0FBQyxDQUFDO01BQ0ZJLFNBQVMsRUFBRTtJQUFZLEdBQ25CLENBQUNoQixJQUFJLElBQUk7TUFDWGlCLFNBQVMsRUFBRSxRQUFRO01BQ25CYixVQUFVLEVBQUVwQyxLQUFLLENBQUNxQyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDNUNDLE1BQU0sRUFBRXZDLEtBQUssQ0FBQ3FDLFdBQVcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO1FBQ3RDQyxRQUFRLEVBQUV6QyxLQUFLLENBQUNxQyxXQUFXLENBQUNJLFFBQVEsQ0FBQ0M7TUFDdkMsQ0FBQyxDQUFDO01BQ0ZyQixLQUFLLEVBQUVyQixLQUFLLENBQUNrRCxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQ3ZCLENBQUNsRCxLQUFLLENBQUNtRCxXQUFXLENBQUNDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRztRQUM1Qi9CLEtBQUssRUFBRXJCLEtBQUssQ0FBQ2tELE9BQU8sQ0FBQyxDQUFDO01BQ3hCO0lBQ0YsQ0FBQztFQUVMLENBQUM7QUFBQSxDQUNILENBQUM7QUFDRCxTQUFTRyxpQkFBaUJBLENBQUEsRUFBRztFQUMzQixJQUFBQyxVQUFBLEdBQWV0Riw0REFBUyxDQUFDLENBQUM7SUFBbEJ1RixFQUFFLEdBQUFELFVBQUEsQ0FBRkMsRUFBRTtFQUNWLElBQU1DLFFBQVEsR0FBR3pGLDhEQUFXLENBQUMsQ0FBQztFQUM5QixJQUFNMEYsUUFBUSxHQUFHaEYseURBQVcsQ0FBQyxDQUFDO0VBQzlCLElBQU1pRixJQUFJLEdBQUdoRix5REFBVyxDQUFDRSx3RUFBaUIsQ0FBQztFQUUzQ3ZELGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQU1zSSxZQUFZLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUNqRCxJQUFNQyxTQUFTO01BQUEsSUFBQUMsS0FBQSxHQUFBQyxpQkFBQSxDQUFHLGFBQVk7UUFDNUIsSUFBSUwsWUFBWSxFQUFFO1VBQ2hCLElBQUk7WUFDRixJQUFNTSxHQUFHLFNBQVN4Ryw4Q0FBSyxDQUFDeUcsR0FBRyxJQUFBakUsTUFBQSxDQUFJcEMscURBQVksd0JBQUFvQyxNQUFBLENBQXFCMEQsWUFBWSxDQUFFLENBQUM7WUFDL0UsSUFBTVEsSUFBSSxHQUFHRixHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDQyxZQUFZO1lBQ3ZDLElBQU1DLElBQUksR0FBR0wsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ0csSUFBSTtZQUMvQmQsUUFBUSxDQUFDNUUsa0VBQU8sQ0FBQztjQUFFMkYsUUFBUSxFQUFFTCxJQUFJO2NBQUVJLElBQUksRUFBRUQ7WUFBSyxDQUFDLENBQUMsQ0FBQztVQUNuRCxDQUFDLENBQUMsT0FBT0csS0FBSyxFQUFFO1lBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7VUFDOUM7UUFDRixDQUFDLE1BQU07VUFDTGpCLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDZjtNQUNGLENBQUM7TUFBQSxnQkFiS00sU0FBU0EsQ0FBQTtRQUFBLE9BQUFDLEtBQUEsQ0FBQVksS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQWFkO0lBQ0RkLFNBQVMsQ0FBQyxDQUFDO0VBQ2IsQ0FBQyxFQUFFLENBQUNMLFFBQVEsQ0FBQyxDQUFDO0VBRWQsSUFBTW9CLFlBQVksR0FBR0EsQ0FBQSxLQUFNO0lBQ3pCakIsWUFBWSxDQUFDa0IsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQnJCLFFBQVEsQ0FBQzlFLGlFQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xCNkUsUUFBUSxDQUFDLEdBQUcsQ0FBQztFQUNmLENBQUM7RUFFRCxJQUFBdUIsU0FBQSxHQUF3Q3pKLCtDQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQTBKLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTdDRyxZQUFZLEdBQUFGLFVBQUE7SUFBRUcsZUFBZSxHQUFBSCxVQUFBO0VBQ3BDLElBQUFJLFVBQUEsR0FBZ0M5SiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBK0osVUFBQSxHQUFBSixjQUFBLENBQUFHLFVBQUE7SUFBckNFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7RUFDNUIsSUFBQUcsVUFBQSxHQUFzQ2xLLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFtSyxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUEzQ0UsV0FBVyxHQUFBRCxVQUFBO0lBQUVFLGNBQWMsR0FBQUYsVUFBQTtFQUNsQyxJQUFBRyxVQUFBLEdBQTRCdEssK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQXVLLFVBQUEsR0FBQVosY0FBQSxDQUFBVyxVQUFBO0lBQWpDRSxNQUFNLEdBQUFELFVBQUE7SUFBRUUsU0FBUyxHQUFBRixVQUFBO0VBQ3hCLElBQUFHLFVBQUEsR0FBMEIxSywrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBMkssVUFBQSxHQUFBaEIsY0FBQSxDQUFBZSxVQUFBO0lBQS9CRSxLQUFLLEdBQUFELFVBQUE7SUFBRUUsUUFBUSxHQUFBRixVQUFBO0VBQ3RCLElBQUFHLFVBQUEsR0FBc0M5SywrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBK0ssV0FBQSxHQUFBcEIsY0FBQSxDQUFBbUIsVUFBQTtJQUEzQ0UsV0FBVyxHQUFBRCxXQUFBO0lBQUVFLGNBQWMsR0FBQUYsV0FBQTtFQUNsQyxJQUFBRyxXQUFBLEdBQWtDbEwsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQW1MLFdBQUEsR0FBQXhCLGNBQUEsQ0FBQXVCLFdBQUE7SUFBekNFLFNBQVMsR0FBQUQsV0FBQTtJQUFFRSxZQUFZLEdBQUFGLFdBQUE7RUFDOUIsSUFBQUcsV0FBQSxHQUFrQ3RMLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUF1TCxXQUFBLEdBQUE1QixjQUFBLENBQUEyQixXQUFBO0lBQXpDRSxTQUFTLEdBQUFELFdBQUE7SUFBRUUsWUFBWSxHQUFBRixXQUFBO0VBQzlCLElBQUFHLFdBQUEsR0FBMEMxTCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBMkwsV0FBQSxHQUFBaEMsY0FBQSxDQUFBK0IsV0FBQTtJQUE5Q0UsYUFBYSxHQUFBRCxXQUFBO0lBQUVFLGdCQUFnQixHQUFBRixXQUFBO0VBQ3RDLElBQUFHLFdBQUEsR0FBMEM5TCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBK0wsV0FBQSxHQUFBcEMsY0FBQSxDQUFBbUMsV0FBQTtJQUFqREUsYUFBYSxHQUFBRCxXQUFBO0lBQUVFLGdCQUFnQixHQUFBRixXQUFBO0VBRXRDaE0sZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBTW1NLFNBQVM7TUFBQSxJQUFBQyxLQUFBLEdBQUF6RCxpQkFBQSxDQUFHLGFBQVk7UUFDNUIsSUFBSTtVQUFBLElBQUEwRCxTQUFBLEVBQUFDLFVBQUE7VUFDRixJQUFNMUQsR0FBRyxTQUFTeEcsOENBQUssQ0FBQ3lHLEdBQUcsSUFBQWpFLE1BQUEsQ0FBSXBDLHFEQUFZLG9CQUFBb0MsTUFBQSxDQUFpQnNELEVBQUUsQ0FBRSxDQUFDO1VBQ2pFNEIsZUFBZSxDQUFDbEIsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ2MsWUFBWSxDQUFDO1VBQzNDUyxjQUFjLENBQUMxQixHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDc0IsV0FBVyxDQUFDO1VBQ3pDSyxTQUFTLENBQUM5QixHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDMEIsTUFBTSxDQUFDO1VBQy9CSyxRQUFRLENBQUNsQyxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDOEIsS0FBSyxDQUFDO1VBQzdCSyxjQUFjLENBQUN0QyxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDa0MsV0FBVyxDQUFDO1VBQ3pDSyxZQUFZLENBQUMxQyxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDc0MsU0FBUyxDQUFDO1VBQ3JDUyxnQkFBZ0IsQ0FBQ1MsTUFBTSxDQUFDLEVBQUFGLFNBQUEsR0FBQXpELEdBQUcsQ0FBQ0csSUFBSSxjQUFBc0QsU0FBQSxnQkFBQUEsU0FBQSxHQUFSQSxTQUFBLENBQVV0RCxJQUFJLGNBQUFzRCxTQUFBLHVCQUFkQSxTQUFBLENBQWdCUixhQUFhLE9BQUFTLFVBQUEsR0FBSTFELEdBQUcsQ0FBQ0csSUFBSSxjQUFBdUQsVUFBQSx1QkFBUkEsVUFBQSxDQUFVVCxhQUFhLEtBQUksQ0FBQyxDQUFDLENBQUM7VUFDdkZILFlBQVksQ0FBQzlDLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUMwQyxTQUFTLENBQUM7VUFDckNTLGdCQUFnQixDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsT0FBTzlDLEtBQUssRUFBRTtVQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO1FBQzlDO01BQ0YsQ0FBQztNQUFBLGdCQWZLK0MsU0FBU0EsQ0FBQTtRQUFBLE9BQUFDLEtBQUEsQ0FBQTlDLEtBQUEsT0FBQUMsU0FBQTtNQUFBO0lBQUEsR0FlZDtJQUNENEMsU0FBUyxDQUFDLENBQUM7RUFDYixDQUFDLEVBQUUsQ0FBQ2pFLEVBQUUsQ0FBQyxDQUFDO0VBQ1IsSUFBQXNFLFdBQUEsR0FBZ0N2TSwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBd00sV0FBQSxHQUFBN0MsY0FBQSxDQUFBNEMsV0FBQTtJQUF2Q0UsUUFBUSxHQUFBRCxXQUFBO0lBQUVFLFdBQVcsR0FBQUYsV0FBQTtFQUM1QnpNLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQU00TSxXQUFXO01BQUEsSUFBQUMsS0FBQSxHQUFBbEUsaUJBQUEsQ0FBRyxhQUFZO1FBQzlCLElBQUk7VUFBQSxJQUFBbUUsVUFBQTtVQUNGLElBQU1DLFdBQVcsU0FBUzNLLDhDQUFLLENBQUN5RyxHQUFHLElBQUFqRSxNQUFBLENBQUlwQyxxREFBWSxjQUFXLENBQUM7VUFDL0QwSCxXQUFXLENBQUM2QyxXQUFXLENBQUNoRSxJQUFJLENBQUNBLElBQUksQ0FBQ2lFLE9BQU8sQ0FBQyxDQUFDLENBQUM7VUFDNUMsSUFBTXBFLEdBQUcsU0FBU3hHLDhDQUFLLENBQUN5RyxHQUFHLElBQUFqRSxNQUFBLENBQUlwQyxxREFBWSwyQkFBd0IsQ0FBQztVQUNwRSxDQUFBc0ssVUFBQSxHQUFBbEUsR0FBRyxDQUFDRyxJQUFJLGNBQUErRCxVQUFBLGdCQUFBQSxVQUFBLEdBQVJBLFVBQUEsQ0FBVS9ELElBQUksY0FBQStELFVBQUEsZUFBZEEsVUFBQSxDQUFnQkcsTUFBTSxDQUFFQyxHQUFHLElBQUtBLEdBQUcsQ0FBQzdDLFdBQVcsS0FBSzhDLFNBQVMsSUFBSUQsR0FBRyxDQUFDN0MsV0FBVyxDQUFDK0MsR0FBRyxLQUFLbEYsRUFBRSxDQUFDLENBQ3pGbUYsR0FBRyxDQUFFSCxHQUFHLElBQUtQLFdBQVcsQ0FBQ08sR0FBRyxDQUFDRSxHQUFHLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsT0FBT2hFLEtBQUssRUFBRTtVQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyxzQkFBc0IsRUFBRUEsS0FBSyxDQUFDO1FBQzlDO01BQ0YsQ0FBQztNQUFBLGdCQVZLd0QsV0FBV0EsQ0FBQTtRQUFBLE9BQUFDLEtBQUEsQ0FBQXZELEtBQUEsT0FBQUMsU0FBQTtNQUFBO0lBQUEsR0FVaEI7SUFDRHFELFdBQVcsQ0FBQyxDQUFDO0VBQ2YsQ0FBQyxFQUFFLENBQUMxRSxFQUFFLENBQUMsQ0FBQztFQUNSLENBQUM7RUFDRCxJQUFBb0YsV0FBQSxHQUFrRHJOLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFzTixXQUFBLEdBQUEzRCxjQUFBLENBQUEwRCxXQUFBO0lBQTFERSxpQkFBaUIsR0FBQUQsV0FBQTtJQUFFRSxvQkFBb0IsR0FBQUYsV0FBQTtFQUU5QyxJQUFNRywyQkFBMkIsR0FBSUMsQ0FBQyxJQUFLO0lBQ3pDQSxDQUFDLENBQUNDLGVBQWUsQ0FBQyxDQUFDO0lBQ25CSCxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7RUFDNUIsQ0FBQztFQUNELElBQU1JLDRCQUE0QixHQUFHQSxDQUFBLEtBQU07SUFDekNKLG9CQUFvQixDQUFDLEtBQUssQ0FBQztFQUM3QixDQUFDO0VBQ0QsSUFBTUssb0JBQW9CLEdBQUlDLFdBQVcsSUFBSztJQUM1QzdELFdBQVcsQ0FBQyxDQUFDNkQsV0FBVyxFQUFFLEdBQUc5RCxRQUFRLENBQUMsQ0FBQztFQUN6QyxDQUFDO0VBQ0QsSUFBTStELG9CQUFvQixHQUFJQyxRQUFRLElBQUs7SUFDekMsSUFBTUMsZUFBZSxHQUFHakUsUUFBUSxDQUFDa0UsSUFBSSxDQUFFQyxNQUFNLElBQUtBLE1BQU0sS0FBS0gsUUFBUSxDQUFDO0lBQ3RFbkUsZUFBZSxDQUFDO01BQ2RzRCxHQUFHLEVBQUVjLGVBQWUsYUFBZkEsZUFBZSx1QkFBZkEsZUFBZSxDQUFFZCxHQUFHO01BQ3pCdkQsWUFBWSxFQUFFcUUsZUFBZSxhQUFmQSxlQUFlLHVCQUFmQSxlQUFlLENBQUVHO0lBQ2pDLENBQUMsQ0FBQztFQUNKLENBQUM7RUFDRCxJQUFNQyxtQkFBbUIsR0FBR0EsQ0FBQSxLQUFNO0lBQ2hDeEUsZUFBZSxDQUFDO01BQ2RzRCxHQUFHLEVBQUUsRUFBRTtNQUNQdkQsWUFBWSxFQUFFO0lBQ2hCLENBQUMsQ0FBQztFQUNKLENBQUM7RUFDRCxDQUFDO0VBQ0QsSUFBTTBFLFNBQVMsR0FBR0EsQ0FBQSxLQUFNO0lBQ3RCLElBQU1DLEdBQUcsR0FBRyxDQUFDLEdBQUczRCxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBQzFCQyxRQUFRLENBQUMwRCxHQUFHLENBQUM7RUFDZixDQUFDO0VBQ0QsSUFBTUMsWUFBWSxHQUFHQSxDQUFDQyxhQUFhLEVBQUVDLENBQUMsS0FBSztJQUN6QyxJQUFNQyxTQUFTLEdBQUcsQ0FBQyxHQUFHL0QsS0FBSyxDQUFDO0lBQzVCK0QsU0FBUyxDQUFDRCxDQUFDLENBQUMsR0FBR0QsYUFBYSxDQUFDRyxNQUFNLENBQUNDLEtBQUs7SUFDekNoRSxRQUFRLENBQUM4RCxTQUFTLENBQUM7RUFDckIsQ0FBQztFQUNELElBQU1HLFlBQVksR0FBSUosQ0FBQyxJQUFLO0lBQzFCLElBQU1LLFdBQVcsR0FBRyxDQUFDLEdBQUduRSxLQUFLLENBQUM7SUFDOUJtRSxXQUFXLENBQUNDLE1BQU0sQ0FBQ04sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QjdELFFBQVEsQ0FBQ2tFLFdBQVcsQ0FBQztFQUN2QixDQUFDO0VBQ0QsQ0FBQztFQUVELElBQUFFLFdBQUEsR0FBMEJqUCwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBa1AsV0FBQSxHQUFBdkYsY0FBQSxDQUFBc0YsV0FBQTtJQUFsQ0UsS0FBSyxHQUFBRCxXQUFBO0lBQUVFLFFBQVEsR0FBQUYsV0FBQTtFQUV0QixJQUFNRyxzQkFBc0IsR0FBSTNCLENBQUMsSUFBSztJQUNwQ0EsQ0FBQyxDQUFDNEIsY0FBYyxDQUFDLENBQUM7SUFDbEJGLFFBQVEsQ0FBQyxJQUFJLENBQUM7RUFDaEIsQ0FBQztFQUNELElBQU1HLHVCQUF1QixHQUFHQSxDQUFBLEtBQU07SUFDcENILFFBQVEsQ0FBQyxLQUFLLENBQUM7RUFDakIsQ0FBQztFQUNELElBQUFJLFdBQUEsR0FBNEJ4UCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBeVAsV0FBQSxHQUFBOUYsY0FBQSxDQUFBNkYsV0FBQTtJQUFqQ0UsTUFBTSxHQUFBRCxXQUFBO0lBQUVFLFNBQVMsR0FBQUYsV0FBQTtFQUV4QixJQUFNRyxXQUFXLEdBQ2pCO0lBQ0VDLE1BQU0sRUFBRTVILEVBQUU7SUFDVjZILE1BQU0sRUFBRTFILElBQUksQ0FBQ1UsSUFBSSxDQUFDSSxRQUFRLEdBQUcsV0FBVztJQUN4Q3dHO0VBQ0YsQ0FBQztFQUNELElBQU1LLFdBQVcsR0FBR25NLDZDQUFLLENBQUNvTSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFFckMsQ0FBQztFQUNELENBQUM7RUFDRCxJQUFBQyxXQUFBLEdBQWdDbFEsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQW1RLFdBQUEsR0FBQXhHLGNBQUEsQ0FBQXVHLFdBQUE7SUFBeENFLFFBQVEsR0FBQUQsV0FBQTtJQUFFRSxXQUFXLEdBQUFGLFdBQUE7RUFFNUIsSUFBTUcsY0FBYyxHQUFJNUMsQ0FBQyxJQUFLO0lBQzVCQSxDQUFDLENBQUM0QixjQUFjLENBQUMsQ0FBQztJQUNsQmUsV0FBVyxDQUFDLElBQUksQ0FBQztFQUNuQixDQUFDO0VBQ0QsSUFBTUUsZUFBZSxHQUFHQSxDQUFBLEtBQU07SUFDNUJGLFdBQVcsQ0FBQyxLQUFLLENBQUM7RUFDcEIsQ0FBQztFQUNELElBQUFHLFdBQUEsR0FBOEJ4USwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBeVEsV0FBQSxHQUFBOUcsY0FBQSxDQUFBNkcsV0FBQTtJQUF0Q0UsT0FBTyxHQUFBRCxXQUFBO0lBQUVFLFVBQVUsR0FBQUYsV0FBQTtFQUMxQixJQUFBRyxXQUFBLEdBQWdENVEsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTZRLFdBQUEsR0FBQWxILGNBQUEsQ0FBQWlILFdBQUE7SUFBeERFLGdCQUFnQixHQUFBRCxXQUFBO0lBQUVFLG1CQUFtQixHQUFBRixXQUFBO0VBQzVDLElBQUFHLFdBQUEsR0FBNENoUiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBaVIsV0FBQSxHQUFBdEgsY0FBQSxDQUFBcUgsV0FBQTtJQUFwREUsY0FBYyxHQUFBRCxXQUFBO0lBQUVFLGlCQUFpQixHQUFBRixXQUFBO0VBRXhDLElBQU1HLFVBQVUsR0FBR0EsQ0FBQSxLQUFNO0lBRXZCaEMsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUNmMkIsbUJBQW1CLENBQUMsSUFBSSxDQUFDO0lBQ3pCSixVQUFVLENBQUMsSUFBSSxDQUFDO0lBRWhCVSxVQUFVLENBQUMsTUFBTTtNQUNmVixVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUMsRUFBRSxHQUFHLENBQUM7RUFFVCxDQUFDO0VBQ0QsSUFBTVcsV0FBVyxHQUFHQSxDQUFBLEtBQU07SUFFeEJsQyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQ2YrQixpQkFBaUIsQ0FBQyxJQUFJLENBQUM7SUFDdkJSLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDaEJVLFVBQVUsQ0FBQyxNQUFNO01BQ2ZWLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNULENBQUM7RUFDRCxJQUFNWSxXQUFXLEdBQUdBLENBQUEsS0FBTTtJQUN4QnJKLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNkLENBQUM7RUFDRCxJQUFNc0osZ0JBQWdCLEdBQUdBLENBQUEsS0FBTTtJQUM3QkwsaUJBQWlCLENBQUMsS0FBSyxDQUFDO0VBQzFCLENBQUM7RUFHRCxJQUFBTSxXQUFBLEdBQWdDelIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTBSLFdBQUEsR0FBQS9ILGNBQUEsQ0FBQThILFdBQUE7SUFBckNFLFFBQVEsR0FBQUQsV0FBQTtJQUFFRSxXQUFXLEdBQUFGLFdBQUE7RUFDNUIsSUFBTUcsbUJBQW1CO0lBQUEsSUFBQUMsTUFBQSxHQUFBcEosaUJBQUEsQ0FBRyxhQUFZO01BQ3RDLElBQU1JLElBQUksR0FBRztRQUNYK0csTUFBTSxFQUFFNUgsRUFBRTtRQUNWNkgsTUFBTSxLQUFBbkwsTUFBQSxDQUFLeUQsSUFBSSxDQUFDVSxJQUFJLENBQUNJLFFBQVEsZ0JBQUF2RSxNQUFBLENBQWFvTixNQUFNLENBQUNuRyxhQUFhLENBQUMsQ0FBQ29HLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUU7UUFDbEZ0QyxNQUFNO1FBQ051QyxnQkFBZ0IsRUFBRSxJQUFJakMsSUFBSSxDQUFDO01BQzdCLENBQUM7TUFDRCxJQUFJO1FBQ0YsTUFBTTdOLDhDQUFLLENBQUMrUCxJQUFJLElBQUF2TixNQUFBLENBQUlwQyxxREFBWSw0QkFBeUJ1RyxJQUFJLENBQUM7TUFDaEUsQ0FBQyxDQUFDLE9BQU9LLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUMrSSxHQUFHLENBQUNoSixLQUFLLENBQUM7TUFDcEI7SUFDRixDQUFDO0lBQUEsZ0JBWkswSSxtQkFBbUJBLENBQUE7TUFBQSxPQUFBQyxNQUFBLENBQUF6SSxLQUFBLE9BQUFDLFNBQUE7SUFBQTtFQUFBLEdBWXhCO0VBQ0QsSUFBTThJLFlBQVk7SUFBQSxJQUFBQyxNQUFBLEdBQUEzSixpQkFBQSxDQUFHLFdBQU9nRixDQUFDLEVBQUs7TUFDaENBLENBQUMsQ0FBQzRCLGNBQWMsQ0FBQyxDQUFDO01BQ2xCLElBQU14RyxJQUFJLEdBQUc7UUFDWGMsWUFBWTtRQUNaUSxXQUFXO1FBQ1h3QixhQUFhO1FBQ2JwQixNQUFNO1FBQ05JLEtBQUs7UUFDTEksV0FBVztRQUNYSSxTQUFTO1FBQ1RJLFNBQVM7UUFDVDhHLE9BQU8sRUFBRTtNQUNYLENBQUM7TUFFRCxJQUFJO1FBQ0Y7UUFDQSxJQUFNQyxVQUFVLFNBQVNwUSw4Q0FBSyxDQUFDeUcsR0FBRyxJQUFBakUsTUFBQSxDQUFJcEMscURBQVksb0JBQUFvQyxNQUFBLENBQWlCc0QsRUFBRSxDQUFFLENBQUM7UUFDeEUsSUFBTXVLLGNBQWMsR0FBR0QsVUFBVSxDQUFDekosSUFBSSxDQUFDQSxJQUFJOztRQUUzQztRQUNBLElBQU0ySixXQUFXLEdBQUE5TCxhQUFBLENBQUFBLGFBQUEsQ0FBQUEsYUFBQSxLQUNaNkwsY0FBYyxHQUNkMUosSUFBSTtVQUNQd0osT0FBTyxFQUFFO1FBQUssRUFDZjtRQUVELElBQU0zSixHQUFHLFNBQVN4Ryw4Q0FBSyxDQUFDdVEsR0FBRyxJQUFBL04sTUFBQSxDQUFJcEMscURBQVksdUJBQUFvQyxNQUFBLENBQW9Cc0QsRUFBRSxHQUFJd0ssV0FBVyxDQUFDO1FBQ2pGLElBQUk5SixHQUFHLEVBQUU7VUFDUGtKLG1CQUFtQixDQUFDLENBQUM7VUFDckJULFVBQVUsQ0FBQyxDQUFDO1FBQ2Q7TUFDRixDQUFDLENBQUMsT0FBT2pJLEtBQUssRUFBRTtRQUNkQyxPQUFPLENBQUNELEtBQUssQ0FBQyx5QkFBeUIsRUFBRUEsS0FBSyxDQUFDO1FBQy9DbUksV0FBVyxDQUFDLENBQUM7TUFDZjtJQUNGLENBQUM7SUFBQSxnQkFuQ0tjLFlBQVlBLENBQUFPLEVBQUE7TUFBQSxPQUFBTixNQUFBLENBQUFoSixLQUFBLE9BQUFDLFNBQUE7SUFBQTtFQUFBLEdBbUNqQjtFQUNELElBQUFzSixlQUFBLEdBQThCOVMscURBQWMsQ0FBQyxJQUFJLENBQUM7SUFBQStTLGdCQUFBLEdBQUFsSixjQUFBLENBQUFpSixlQUFBO0lBQTNDRSxPQUFPLEdBQUFELGdCQUFBO0lBQUVFLFVBQVUsR0FBQUYsZ0JBQUE7RUFDMUIsSUFBTUcsWUFBWSxHQUFHQSxDQUFBLEtBQU07SUFDekJELFVBQVUsQ0FBQyxDQUFDRCxPQUFPLENBQUM7RUFDdEIsQ0FBQztFQUNELG9CQUNFaFQsMERBQUE7SUFBS21FLFNBQVMsRUFBQztFQUFjLGdCQUMzQm5FLDBEQUFBLENBQUNpQixxREFBRztJQUFDa1MsRUFBRSxFQUFFO01BQUVDLE9BQU8sRUFBRTtJQUFPO0VBQUUsZ0JBQzNCcFQsMERBQUEsQ0FBQzZCLGtFQUFXLE1BQUUsQ0FBQyxlQUNmN0IsMERBQUEsQ0FBQ3dHLE1BQU07SUFBQ1gsUUFBUSxFQUFDLFVBQVU7SUFBQ2UsSUFBSSxFQUFFb00sT0FBUTtJQUFDRyxFQUFFLEVBQUU7TUFBRXBPLGVBQWUsRUFBRTtJQUFVO0VBQUUsZ0JBQzVFL0UsMERBQUEsQ0FBQzRCLDhEQUFPO0lBQ051UixFQUFFLEVBQUU7TUFDRkUsRUFBRSxFQUFFLE1BQU0sQ0FBRTtJQUNkO0VBQUUsZ0JBRUZyVCwwREFBQSxDQUFDUyxxREFBVTtJQUNUNlMsSUFBSSxFQUFDLE9BQU87SUFDWnRPLEtBQUssRUFBQyxTQUFTO0lBQ2YsY0FBVyxhQUFhO0lBQ3hCdU8sT0FBTyxFQUFFTCxZQUFhO0lBQ3RCQyxFQUFFLEVBQUF0TSxhQUFBO01BQ0EyTSxXQUFXLEVBQUU7SUFBTSxHQUNmUixPQUFPLElBQUk7TUFBRUksT0FBTyxFQUFFO0lBQU8sQ0FBQztFQUNsQyxnQkFFRnBULDBEQUFBLENBQUNrQyxpRUFBUSxNQUFFLENBQ0QsQ0FBQyxlQUNibEMsMERBQUEsQ0FBQ2UscURBQVU7SUFDVDBTLFNBQVMsRUFBQyxJQUFJO0lBQ2RDLE9BQU8sRUFBQyxJQUFJO0lBQ1oxTyxLQUFLLEVBQUMsU0FBUztJQUNmMk8sTUFBTTtJQUNOUixFQUFFLEVBQUU7TUFBRVMsUUFBUSxFQUFFO0lBQUU7RUFBRSxHQUNyQixnQkFFVyxDQUFDLEVBRVgvQixRQUFRLEtBQUssTUFBTSxnQkFDakI3UiwwREFBQSxDQUFDUyxxREFBVSxxQkFDVFQsMERBQUEsQ0FBQ2lELHNFQUFTO0lBQUMyQyxLQUFLLEVBQUU7TUFBRVosS0FBSyxFQUFFO0lBQVE7RUFBRSxDQUFFLENBQzdCLENBQUMsZ0JBQ2JoRiwwREFBQSxDQUFDUyxxREFBVTtJQUFDOFMsT0FBTyxFQUFFL0M7RUFBZSxnQkFDbEN4USwwREFBQSxDQUFDaUQsc0VBQVM7SUFBQzJDLEtBQUssRUFBRTtNQUFFWixLQUFLLEVBQUU7SUFBUTtFQUFFLENBQUUsQ0FDN0IsQ0FBQyxlQUNqQmhGLDBEQUFBLENBQUNnRSw4REFBb0IsTUFBRSxDQUFDLGVBQ3hCaEUsMERBQUEsQ0FBQytELDBEQUFnQjtJQUFDOFAsSUFBSSxFQUFFdkwsSUFBSSxDQUFDVSxJQUFJLENBQUNJLFFBQVM7SUFBQ0QsSUFBSSxFQUFFYixJQUFJLENBQUNVLElBQUksQ0FBQ0c7RUFBSyxDQUFFLENBQUMsZUFDcEVuSiwwREFBQSxDQUFDZSxxREFBVTtJQUFDb1MsRUFBRSxFQUFFO01BQUU1TCxVQUFVLEVBQUUsTUFBTTtNQUFFaU0sV0FBVyxFQUFFO0lBQU87RUFBRSxHQUFFbEwsSUFBSSxDQUFDVSxJQUFJLENBQUNJLFFBQXFCLENBQUMsZUFDOUZwSiwwREFBQSxDQUFDUyxxREFBVTtJQUFDdUUsS0FBSyxFQUFDLFNBQVM7SUFBQ3VPLE9BQU8sRUFBRTlKO0VBQWEsZ0JBQ2hEekosMERBQUEsQ0FBQzBELG1FQUFNO0lBQUNrQyxLQUFLLEVBQUU7TUFBRVosS0FBSyxFQUFFO0lBQVE7RUFBRSxDQUFFLENBQzFCLENBQ0wsQ0FDSCxDQUFDLGVBQ1RoRiwwREFBQSxDQUFDeUgsTUFBTTtJQUFDaU0sT0FBTyxFQUFDLFdBQVc7SUFBQzlNLElBQUksRUFBRW9NLE9BQVE7SUFBQ2MsWUFBWSxFQUFFQSxDQUFBLEtBQU1iLFVBQVUsQ0FBQyxJQUFJLENBQUU7SUFBQ2MsWUFBWSxFQUFFQSxDQUFBLEtBQU1kLFVBQVUsQ0FBQyxLQUFLO0VBQUUsZ0JBQ3JIalQsMERBQUEsQ0FBQzRCLDhEQUFPO0lBQ051UixFQUFFLEVBQUU7TUFDRkMsT0FBTyxFQUFFLE1BQU07TUFDZlksVUFBVSxFQUFFLFFBQVE7TUFDcEJDLGNBQWMsRUFBRSxVQUFVO01BQzFCN04sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNSO0VBQUUsZ0JBRUZwRywwREFBQSxDQUFDUyxxREFBVTtJQUFDOFMsT0FBTyxFQUFFTDtFQUFhLGdCQUNoQ2xULDBEQUFBLENBQUNtQyx3RUFBZSxNQUFFLENBQ1IsQ0FDTCxDQUFDLGVBQ1ZuQywwREFBQSxDQUFDd0IscURBQU8sTUFBRSxDQUFDLGVBQ1h4QiwwREFBQSxDQUFDK0IsMkRBQUk7SUFBQ29SLEVBQUUsRUFBRTtNQUFFZSxNQUFNLEVBQUU7SUFBUTtFQUFFLGdCQUM1QmxVLDBEQUFBLENBQUNHLCtEQUFZLE1BQUUsQ0FDWCxDQUNBLENBQUMsZUFDVEgsMERBQUEsQ0FBQ2lCLHFEQUFHO0lBQ0Z3UyxTQUFTLEVBQUMsTUFBTTtJQUNoQk4sRUFBRSxFQUFFO01BQ0ZwTyxlQUFlLEVBQUdILEtBQUssSUFDckJBLEtBQUssQ0FBQ3VQLE9BQU8sQ0FBQ0MsSUFBSSxLQUFLLE9BQU8sR0FDMUJ4UCxLQUFLLENBQUN1UCxPQUFPLENBQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FDdkJ6UCxLQUFLLENBQUN1UCxPQUFPLENBQUNFLElBQUksQ0FBQyxHQUFHLENBQUM7TUFDN0JULFFBQVEsRUFBRSxDQUFDO01BQ1gzTixLQUFLLEVBQUUsTUFBTTtNQUNiaU8sTUFBTSxFQUFFLE9BQU87TUFDZkksUUFBUSxFQUFFO0lBQ1o7RUFBRSxnQkFFRnRVLDBEQUFBLENBQUM0Qiw4REFBTyxNQUFFLENBQUMsZUFDWDVCLDBEQUFBLENBQUNpQyxnRUFBUztJQUFDc1MsUUFBUSxFQUFDLE1BQU07SUFBQ3BCLEVBQUUsRUFBRTtNQUFFcUIsRUFBRSxFQUFFO0lBQUU7RUFBRSxHQUNyQ3RJLGFBQWEsZ0JBQUdsTSwwREFBQSxDQUFDb0QsMERBQU0sTUFBRSxDQUFDLGdCQUM1QnBELDBEQUFBLDJCQUNFQSwwREFBQTtJQUFNeVUsUUFBUSxFQUFFbEY7RUFBdUIsZ0JBQ3JDdlAsMERBQUEsQ0FBQ1EscURBQUk7SUFBQ2tVLFNBQVM7SUFBQzlPLEtBQUssRUFBRTtNQUFFb08sVUFBVSxFQUFFLFFBQVE7TUFBRVcsT0FBTyxFQUFFO0lBQU8sQ0FBRTtJQUFDN00sT0FBTyxFQUFFLENBQUU7SUFBQzJMLFNBQVMsRUFBRS9TLHFEQUFLQTtFQUFDLGdCQUM3RlYsMERBQUEsQ0FBQ1EscURBQUk7SUFBQ29VLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUcsR0FFZC9LLFlBQVksQ0FBQ0EsWUFBWSxLQUFLLEVBQUUsZ0JBQzlCOUosMERBQUE7SUFBSzRGLEtBQUssRUFBRTtNQUFFd04sT0FBTyxFQUFFLE1BQU07TUFBRTBCLEdBQUcsRUFBRTtJQUFPO0VBQUUsZ0JBQzNDOVUsMERBQUEsQ0FBQ1csc0RBQVM7SUFDUm9VLFFBQVE7SUFDUjVNLEVBQUUsRUFBQyxjQUFjO0lBQ2pCMEwsSUFBSSxFQUFDLGNBQWM7SUFDbkJtQixLQUFLLEVBQUMsZUFBZTtJQUNyQmpHLEtBQUssRUFBRWpGLFlBQVksQ0FBQ0EsWUFBWSxHQUFHQSxZQUFZLENBQUNBLFlBQVksR0FBRyxFQUFHO0lBQ2xFcUosRUFBRSxFQUFFO01BQUVsTixLQUFLLEVBQUUsTUFBTTtNQUFFbEIsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNqRCxDQUFDLGVBQ0YvRSwwREFBQSxDQUFDb0YsWUFBWTtJQUFDNlAsS0FBSyxFQUFDLE9BQU87SUFBQ0MsU0FBUyxFQUFDO0VBQU8sZ0JBQzNDbFYsMERBQUEsQ0FBQ1MscURBQVU7SUFBQzhTLE9BQU8sRUFBRWhGLG1CQUFvQjtJQUFDM0ksS0FBSyxFQUFFO01BQUVDLFFBQVEsRUFBRSxVQUFVO01BQUVzUCxLQUFLLEVBQUU7SUFBUTtFQUFFLGdCQUN4Rm5WLDBEQUFBLENBQUN3Qyw0REFBbUI7SUFBQ29ELEtBQUssRUFBRTtNQUFFWixLQUFLLEVBQUU7SUFBVTtFQUFFLENBQUUsQ0FDekMsQ0FDQSxDQUNYLENBQUMsZ0JBRU5oRiwwREFBQSxDQUFDa0Isc0RBQVk7SUFDWGtVLGdCQUFnQjtJQUNoQkMsT0FBTyxFQUFFbkwsUUFBUztJQUNsQm9MLGNBQWMsRUFBR2pILE1BQU0sSUFBS0EsTUFBTSxDQUFDQyxRQUFTO0lBQzVDaUgsUUFBUSxFQUFFQSxDQUFDM0gsQ0FBQyxFQUFFTSxRQUFRLEtBQUs7TUFDekJELG9CQUFvQixDQUFDQyxRQUFRLENBQUM7SUFDaEMsQ0FBRTtJQUNGc0gsY0FBYyxFQUFFQyxNQUFBO01BQUEsSUFBR0MsUUFBUSxHQUFBRCxNQUFBLENBQVJDLFFBQVE7UUFBS0MsS0FBSyxHQUFBdFIsd0JBQUEsQ0FBQW9SLE1BQUEsRUFBQUcsVUFBQTtNQUFBLG9CQUVuQzVWLDBEQUFBLENBQUNpQixxREFBRyxFQUFBdUQsUUFBQSxLQUFLbVIsS0FBSztRQUFFeEMsRUFBRSxFQUFFO1VBQUVwTyxlQUFlLEVBQUUsT0FBTztVQUFFZ0IsSUFBSSxFQUFFLEdBQUc7VUFBRThQLFNBQVMsRUFBRTtRQUFPO01BQUUsSUFDNUVILFFBQVEsZUFDVDFWLDBEQUFBLDJCQUNFQSwwREFBQTtRQUFRdVQsT0FBTyxFQUFHM0YsQ0FBQyxJQUFLRCwyQkFBMkIsQ0FBQ0MsQ0FBQyxDQUFFO1FBQUNtSCxRQUFRLEVBQUV6TSxJQUFJLENBQUNVLElBQUksQ0FBQ0csSUFBSSxLQUFLLE1BQU87UUFBQzJNLFdBQVcsRUFBR2xJLENBQUMsSUFBS0EsQ0FBQyxDQUFDNEIsY0FBYyxDQUFDLENBQUU7UUFBQ3JMLFNBQVMsRUFBQyxjQUFjO1FBQUN5QixLQUFLLEVBQUU7VUFBRUssS0FBSyxFQUFFO1FBQU87TUFBRSxHQUFDLGtCQUVoTCxDQUNMLENBQ0YsQ0FBQztJQUFBLENBQ047SUFDRjhQLFdBQVcsRUFBR0MsTUFBTSxpQkFBS2hXLDBEQUFBLENBQUNXLHNEQUFTLEVBQUE2RCxRQUFBLEtBQUt3UixNQUFNO01BQUVoQixLQUFLLEVBQUMsZUFBZTtNQUFDaUIsUUFBUTtJQUFBLEVBQUU7RUFBRSxDQUNuRixDQUlELENBQUMsZUFDUGpXLDBEQUFBLENBQUNRLHFEQUFJO0lBQUNvVSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUNmN1UsMERBQUEsQ0FBQzhDLDJGQUFvQjtJQUFDb1QsV0FBVyxFQUFFblQsMkVBQVlBO0VBQUMsZ0JBQzlDL0MsMERBQUEsQ0FBQzZDLDhFQUFhO0lBQUNzVCxVQUFVLEVBQUUsQ0FBQyxZQUFZO0VBQUUsZ0JBQ3hDblcsMERBQUEsQ0FBQ2dELHVFQUFVO0lBQ1RpVCxRQUFRO0lBQ1JwQyxJQUFJLEVBQUMsV0FBVztJQUNoQjlFLEtBQUssRUFBRWpMLDZDQUFLLENBQUM0SCxTQUFTLENBQUU7SUFDeEJzSixLQUFLLEVBQUMsWUFBWTtJQUFDTyxRQUFRLEVBQUdhLElBQUksSUFBS3pLLFlBQVksQ0FBQ3lLLElBQUksQ0FBRTtJQUMxRGpELEVBQUUsRUFBRTtNQUFFbE4sS0FBSyxFQUFFLE1BQU07TUFBRWxCLGVBQWUsRUFBRTtJQUFRLENBQUU7SUFDaERzUixNQUFNLEVBQUM7RUFBWSxDQUNwQixDQUNZLENBQ0ssQ0FDbEIsQ0FBQyxlQUNQclcsMERBQUEsQ0FBQ1EscURBQUk7SUFBQ29VLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUUsZ0JBQ2Y3VSwwREFBQSxDQUFDOEMsMkZBQW9CO0lBQUNvVCxXQUFXLEVBQUVuVCwyRUFBWUE7RUFBQyxnQkFDOUMvQywwREFBQSxDQUFDNkMsOEVBQWE7SUFBQ3NULFVBQVUsRUFBRSxDQUFDLFlBQVk7RUFBRSxnQkFDeENuVywwREFBQSxDQUFDZ0QsdUVBQVU7SUFDVGlULFFBQVE7SUFDUnBDLElBQUksRUFBQyxXQUFXO0lBQ2hCbUIsS0FBSyxFQUFDLFlBQVk7SUFDbEJqRyxLQUFLLEVBQUVqTCw2Q0FBSyxDQUFDd0gsU0FBUyxDQUFFO0lBQ3hCaUssUUFBUSxFQUFHZSxPQUFPLElBQUsvSyxZQUFZLENBQUMrSyxPQUFPLENBQUU7SUFDN0NuRCxFQUFFLEVBQUU7TUFBRWxOLEtBQUssRUFBRSxNQUFNO01BQUVsQixlQUFlLEVBQUU7SUFBUSxDQUFFO0lBQ2hEc1IsTUFBTSxFQUFDO0VBQVksQ0FDcEIsQ0FDWSxDQUNLLENBQ2xCLENBQUMsZUFDUHJXLDBEQUFBLENBQUNRLHFEQUFJO0lBQUNvVSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUNmN1UsMERBQUEsQ0FBQ1csc0RBQVM7SUFDUndILEVBQUUsRUFBQyxhQUFhO0lBQ2hCMEwsSUFBSSxFQUFDLGFBQWE7SUFDbEJtQixLQUFLLEVBQUMsY0FBYztJQUNwQmpHLEtBQUssRUFBRXpFLFdBQVk7SUFDbkJpTCxRQUFRLEVBQUczSCxDQUFDLElBQUtyRCxjQUFjLENBQUNxRCxDQUFDLENBQUNrQixNQUFNLENBQUNDLEtBQUssQ0FBRTtJQUNoRG9FLEVBQUUsRUFBRTtNQUFFbE4sS0FBSyxFQUFFLE1BQU07TUFBRWxCLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDakQsQ0FDRyxDQUFDLGVBQ1AvRSwwREFBQSxDQUFDUSxxREFBSTtJQUFDb1UsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZjdVLDBEQUFBLENBQUNZLHNEQUFXO0lBQUN1UyxFQUFFLEVBQUU7TUFBRWxOLEtBQUssRUFBRSxNQUFNO01BQUVsQixlQUFlLEVBQUU7SUFBUTtFQUFFLGdCQUMzRC9FLDBEQUFBLENBQUNhLHNEQUFVO0lBQUMwVixPQUFPLEVBQUM7RUFBZSxHQUFDLGdCQUEwQixDQUFDLGVBQy9EdlcsMERBQUEsQ0FBQ3NCLHNEQUFhO0lBQ1p5VCxRQUFRLEVBQUV6TSxJQUFJLENBQUNVLElBQUksQ0FBQ0csSUFBSSxLQUFLLEtBQU07SUFDbkNxTixJQUFJLEVBQUMsUUFBUTtJQUNick8sRUFBRSxFQUFDLGVBQWU7SUFDbEIwTCxJQUFJLEVBQUMsZUFBZTtJQUNwQm1CLEtBQUssRUFBQyxnQkFBZ0I7SUFDdEJqRyxLQUFLLEVBQUVqRCxhQUFjO0lBQ3JCeUosUUFBUSxFQUFHM0gsQ0FBQyxJQUFLN0IsZ0JBQWdCLENBQUM2QixDQUFDLENBQUNrQixNQUFNLENBQUNDLEtBQUssQ0FBRTtJQUNsRDBILGNBQWMsZUFBRXpXLDBEQUFBLENBQUN1QixzREFBYztNQUFDc0UsUUFBUSxFQUFDO0lBQU8sR0FBQyxJQUFrQjtFQUFFLENBQ3RFLENBQ1UsQ0FDVCxDQUFDLGVBQ1A3RiwwREFBQSxDQUFDUSxxREFBSTtJQUFDb1UsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRyxnQkFDaEI3VSwwREFBQTtJQUFLNEYsS0FBSyxFQUFFO01BQUV3TixPQUFPLEVBQUUsTUFBTTtNQUFFYSxjQUFjLEVBQUUsZUFBZTtNQUFFRCxVQUFVLEVBQUU7SUFBUztFQUFFLGdCQUNyRmhVLDBEQUFBLGFBQUksT0FBUyxDQUFDLGVBQ2RBLDBEQUFBLENBQUNzQyw0REFBRztJQUFDNkIsU0FBUyxFQUFDLGFBQWE7SUFBQ29QLE9BQU8sRUFBRS9FO0VBQVUsQ0FBRSxDQUMvQyxDQUNELENBQUMsZUFDUHhPLDBEQUFBLENBQUNRLHFEQUFJO0lBQUNvVSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLEdBRWQvSixLQUFLLENBQUN3QyxHQUFHLENBQUMsQ0FBQ3RFLElBQUksRUFBRTRGLENBQUMsa0JBQ2hCNU8sMERBQUE7SUFBSzBXLEdBQUcsRUFBRTlILENBQUU7SUFBQ2hKLEtBQUssRUFBRTtNQUFFd04sT0FBTyxFQUFFLE1BQU07TUFBRVksVUFBVSxFQUFFLFFBQVE7TUFBRVcsT0FBTyxFQUFFO0lBQU87RUFBRSxnQkFDN0UzVSwwREFBQSxDQUFDUSxxREFBSTtJQUFDa1UsU0FBUztJQUFDOU8sS0FBSyxFQUFFO01BQUVvTyxVQUFVLEVBQUU7SUFBUyxDQUFFO0lBQUNsTSxPQUFPLEVBQUU7RUFBRSxnQkFDMUQ5SCwwREFBQSxDQUFDUSxxREFBSTtJQUFDb1UsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZjdVLDBEQUFBLENBQUNXLHNEQUFTO0lBQ1JrVCxJQUFJLEVBQUMsT0FBTztJQUFDMUwsRUFBRSxFQUFDLE9BQU87SUFDdkI2TSxLQUFLLEVBQUMsT0FBTztJQUNiakcsS0FBSyxFQUFFL0YsSUFBSztJQUFDdU0sUUFBUSxFQUFHM0gsQ0FBQyxJQUFLYyxZQUFZLENBQUNkLENBQUMsRUFBRWdCLENBQUMsQ0FBRTtJQUNqRHVFLEVBQUUsRUFBRTtNQUFFbE4sS0FBSyxFQUFFLE1BQU07TUFBRWxCLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDakQsQ0FDRyxDQUFDLGVBQ1AvRSwwREFBQSxDQUFDUSxxREFBSTtJQUFDb1UsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZjdVLDBEQUFBLENBQUMyRCxtRUFBTTtJQUFDUSxTQUFTLEVBQUMsYUFBYTtJQUFDb1AsT0FBTyxFQUFFQSxDQUFBLEtBQU12RSxZQUFZLENBQUNKLENBQUM7RUFBRSxDQUFFLENBQzdELENBQ0YsQ0FDSCxDQUNQLENBRUUsQ0FBQyxlQUNQNU8sMERBQUEsQ0FBQ1EscURBQUk7SUFBQ29VLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCN1UsMERBQUEsQ0FBQ1ksc0RBQVc7SUFBQ3VTLEVBQUUsRUFBRTtNQUFFbE4sS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDakNqRywwREFBQSxDQUFDYSxzREFBVTtJQUFDc0gsRUFBRSxFQUFDO0VBQVEsR0FBQyxRQUFrQixDQUFDLGVBQzNDbkksMERBQUEsQ0FBQ2Msc0RBQU07SUFDTG1WLFFBQVE7SUFDUjlOLEVBQUUsRUFBQyxRQUFRO0lBQ1g0RyxLQUFLLEVBQUVyRSxNQUFPO0lBQ2Q2SyxRQUFRLEVBQUczSCxDQUFDLElBQUtqRCxTQUFTLENBQUNpRCxDQUFDLENBQUNrQixNQUFNLENBQUNDLEtBQUssQ0FBRTtJQUMzQzhFLElBQUksRUFBQyxRQUFRO0lBQ2JtQixLQUFLLEVBQUMsUUFBUTtJQUNkMkIsWUFBWSxFQUFDO0VBQVMsZ0JBRXRCM1csMERBQUEsQ0FBQ08sc0RBQVE7SUFBQ3dPLEtBQUssRUFBQztFQUFTLEdBQUMsU0FBaUIsQ0FBQyxlQUM1Qy9PLDBEQUFBLENBQUNPLHNEQUFRO0lBQUN3TyxLQUFLLEVBQUM7RUFBVSxHQUFDLFVBQWtCLENBQUMsZUFDOUMvTywwREFBQSxDQUFDTyxzREFBUTtJQUFDd08sS0FBSyxFQUFDO0VBQVMsR0FBQyxTQUFpQixDQUFDLGVBQzVDL08sMERBQUEsQ0FBQ08sc0RBQVE7SUFBQ3dPLEtBQUssRUFBQztFQUFXLEdBQUMsV0FBbUIsQ0FDekMsQ0FDRyxDQUNULENBQUMsZUFDUC9PLDBEQUFBLENBQUNRLHFEQUFJO0lBQUNvVSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNoQjdVLDBEQUFBLENBQUNXLHNEQUFTO0lBQ1J3SCxFQUFFLEVBQUMsYUFBYTtJQUNoQjBMLElBQUksRUFBQyxhQUFhO0lBQ2xCOUUsS0FBSyxFQUFFN0QsV0FBWTtJQUNuQjhKLEtBQUssRUFBQyxhQUFhO0lBQ25CNEIsU0FBUztJQUNUQyxJQUFJLEVBQUUsQ0FBRTtJQUNSdEIsUUFBUSxFQUFHM0gsQ0FBQyxJQUFLekMsY0FBYyxDQUFDeUMsQ0FBQyxDQUFDa0IsTUFBTSxDQUFDQyxLQUFLLENBQUU7SUFDaERvRSxFQUFFLEVBQUU7TUFBRWxOLEtBQUssRUFBRSxNQUFNO01BQUVsQixlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2pELENBQ0csQ0FBQyxlQUNQL0UsMERBQUEsQ0FBQ1EscURBQUk7SUFBQ29VLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCN1UsMERBQUE7SUFBUW1FLFNBQVMsRUFBQyxjQUFjO0lBQUN5QixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFO0lBQU87RUFBRSxHQUFDLE1BQVksQ0FDbkUsQ0FDRixDQUNGLENBQ0gsQ0FFSSxDQUNSLENBQ0YsQ0FBQyxlQUNOakcsMERBQUEsQ0FBQ21CLHNEQUFLO0lBQ0p5RixJQUFJLEVBQUUwSixRQUFTO0lBQ2Z3RyxPQUFPLEVBQUVyRyxlQUFnQjtJQUN6QixtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUN6USwwREFBQSxDQUFDaUIscURBQUc7SUFBQ2tTLEVBQUUsRUFBQXRNLGFBQUEsQ0FBQUEsYUFBQSxLQUFPakIsS0FBSztNQUFFSyxLQUFLLEVBQUU7SUFBRztFQUFHLGdCQUNoQ2pHLDBEQUFBLENBQUNvRixZQUFZO0lBQUM2UCxLQUFLLEVBQUMsT0FBTztJQUFDQyxTQUFTLEVBQUM7RUFBTSxnQkFDMUNsViwwREFBQSxDQUFDUyxxREFBVTtJQUFDOFMsT0FBTyxFQUFFOUMsZUFBZ0I7SUFBQzdLLEtBQUssRUFBRTtNQUFFQyxRQUFRLEVBQUUsVUFBVTtNQUFFc1AsS0FBSyxFQUFFO0lBQVE7RUFBRSxnQkFDcEZuViwwREFBQSxDQUFDNkQsa0VBQUs7SUFBQytCLEtBQUssRUFBRTtNQUFFWixLQUFLLEVBQUU7SUFBVTtFQUFFLENBQUUsQ0FDM0IsQ0FDQSxDQUFDLGVBQ2ZoRiwwREFBQSxDQUFDUSxxREFBSTtJQUFDa1UsU0FBUztJQUFDdkIsRUFBRSxFQUFFO01BQUVhLFVBQVUsRUFBRSxRQUFRO01BQUVXLE9BQU8sRUFBRTtJQUFPLENBQUU7SUFBQzdNLE9BQU8sRUFBRTtFQUFFLGdCQUN4RTlILDBEQUFBLENBQUNRLHFEQUFJO0lBQUNvVSxJQUFJO0lBQUNDLEVBQUUsRUFBRSxFQUFHO0lBQUMxQixFQUFFLEVBQUU7TUFBRTRELFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQzdDL1csMERBQUEsQ0FBQ2UscURBQVUsUUFBQyx5Q0FBbUQsQ0FBQyxlQUNoRWYsMERBQUEseUJBQUdBLDBEQUFBO0lBQU1tRSxTQUFTLEVBQUMsTUFBTTtJQUFDeUIsS0FBSyxFQUFFO01BQUVaLEtBQUssRUFBRTtJQUFNO0VBQUUsR0FBQyxRQUFZLENBQUMsS0FBQyxlQUFBaEYsMERBQUE7SUFBTW1FLFNBQVMsRUFBQztFQUFNLEdBQUMscUVBQXlFLENBQUksQ0FDakssQ0FBQyxlQUNQbkUsMERBQUEsV0FBSyxDQUFDLGVBQ05BLDBEQUFBLENBQUNRLHFEQUFJO0lBQUNvVSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFFLGdCQUNmN1UsMERBQUE7SUFBUXdXLElBQUksRUFBQyxRQUFRO0lBQUNqRCxPQUFPLEVBQUVBLENBQUEsS0FBTW5MLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBRTtJQUFDakUsU0FBUyxFQUFDLGFBQWE7SUFBQ3lCLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUU7SUFBTztFQUFFLEdBQUMsS0FBVyxDQUM3SCxDQUFDLGVBQ1BqRywwREFBQSxDQUFDUSxxREFBSTtJQUFDb1UsSUFBSTtJQUFDQyxFQUFFLEVBQUU7RUFBRSxnQkFDZjdVLDBEQUFBO0lBQVF3VyxJQUFJLEVBQUMsUUFBUTtJQUFDakQsT0FBTyxFQUFFOUMsZUFBZ0I7SUFBQ3RNLFNBQVMsRUFBQyxhQUFhO0lBQUN5QixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFO0lBQU87RUFBRSxHQUFDLElBQVUsQ0FDeEcsQ0FDRixDQUNILENBQ0EsQ0FBQyxlQUNSakcsMERBQUEsQ0FBQ21CLHNEQUFLO0lBQ0p5RixJQUFJLEVBQUVvSyxnQkFBaUI7SUFDdkI4RixPQUFPLEVBQUVyRixXQUFZO0lBQ3JCdUYsb0JBQW9CO0lBQ3BCQyxpQkFBaUIsRUFBRTdWLHNEQUFTO0lBQzVCOFYsYUFBYSxFQUFFO01BQ2JDLE9BQU8sRUFBRTtJQUNYLENBQUU7SUFDRixtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUNuWCwwREFBQSxDQUFDaUIscURBQUc7SUFBQ2tTLEVBQUUsRUFBQXRNLGFBQUEsQ0FBQUEsYUFBQSxLQUFPakIsS0FBSztNQUFFSyxLQUFLLEVBQUU7SUFBRztFQUFHLEdBRS9CMkssT0FBTyxnQkFBSTVRLDBEQUFBLENBQUNvRCwwREFBTSxNQUFFLENBQUMsZ0JBRXBCcEQsMERBQUE7SUFBSzRGLEtBQUssRUFBRTtNQUFFcU8sY0FBYyxFQUFFLFFBQVE7TUFBRThDLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQzVEL1csMERBQUEseUJBQUdBLDBEQUFBLENBQUNrRCx3RUFBZTtJQUFDMEMsS0FBSyxFQUFFO01BQUVaLEtBQUssRUFBRSxPQUFPO01BQUVrUCxNQUFNLEVBQUUsTUFBTTtNQUFFak8sS0FBSyxFQUFFO0lBQU87RUFBRSxDQUFFLENBQUksQ0FBQyxlQUNwRmpHLDBEQUFBLGFBQUksMEJBQTRCLENBQUMsZUFDakNBLDBEQUFBO0lBQUs0RixLQUFLLEVBQUU7TUFBRXdOLE9BQU8sRUFBRSxNQUFNO01BQUUwQixHQUFHLEVBQUUsTUFBTTtNQUFFYixjQUFjLEVBQUU7SUFBUztFQUFFLGdCQUNyRWpVLDBEQUFBO0lBQVF1VCxPQUFPLEVBQUU5QixXQUFZO0lBQUN0TixTQUFTLEVBQUM7RUFBYSxHQUFDLE9BRTlDLENBQ0wsQ0FDRixDQUVKLENBQ0EsQ0FBQyxlQUNSbkUsMERBQUEsQ0FBQ21CLHNEQUFLO0lBQ0p5RixJQUFJLEVBQUV3SyxjQUFlO0lBQ3JCMEYsT0FBTyxFQUFFcEYsZ0JBQWlCO0lBQzFCc0Ysb0JBQW9CO0lBQ3BCQyxpQkFBaUIsRUFBRTdWLHNEQUFTO0lBQzVCOFYsYUFBYSxFQUFFO01BQ2JDLE9BQU8sRUFBRTtJQUNYLENBQUU7SUFDRixtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUNuWCwwREFBQSxDQUFDaUIscURBQUc7SUFBQ2tTLEVBQUUsRUFBQXRNLGFBQUEsQ0FBQUEsYUFBQSxLQUFPakIsS0FBSztNQUFFSyxLQUFLLEVBQUU7SUFBRztFQUFHLEdBRS9CMkssT0FBTyxnQkFBSTVRLDBEQUFBLENBQUNvRCwwREFBTSxNQUFFLENBQUMsZ0JBRXBCcEQsMERBQUE7SUFBSzRGLEtBQUssRUFBRTtNQUFFcU8sY0FBYyxFQUFFLFFBQVE7TUFBRThDLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQzVEL1csMERBQUEseUJBQUdBLDBEQUFBLENBQUNtRCxtRUFBVTtJQUFDeUMsS0FBSyxFQUFFO01BQUVaLEtBQUssRUFBRSxLQUFLO01BQUVrUCxNQUFNLEVBQUUsTUFBTTtNQUFFak8sS0FBSyxFQUFFO0lBQU87RUFBRSxDQUFFLENBQUksQ0FBQyxlQUM3RWpHLDBEQUFBLGFBQUksdUJBQXlCLENBQUMsZUFDOUJBLDBEQUFBO0lBQVFtRSxTQUFTLEVBQUMsYUFBYTtJQUFDb1AsT0FBTyxFQUFFN0I7RUFBaUIsR0FBQyxXQUVuRCxDQUNMLENBRUosQ0FDQSxDQUFDLGVBQ1IxUiwwREFBQSxDQUFDbUIsc0RBQUs7SUFDSnlGLElBQUksRUFBRXlJLEtBQU07SUFDWnlILE9BQU8sRUFBRXJILHVCQUF3QjtJQUNqQyxtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUN6UCwwREFBQSxDQUFDaUIscURBQUc7SUFBQ2tTLEVBQUUsRUFBQXRNLGFBQUEsQ0FBQUEsYUFBQSxLQUFPakIsS0FBSztNQUFFSyxLQUFLLEVBQUU7SUFBRztFQUFHLGdCQUNoQ2pHLDBEQUFBLENBQUNvRixZQUFZO0lBQUM2UCxLQUFLLEVBQUMsT0FBTztJQUFDQyxTQUFTLEVBQUM7RUFBTSxnQkFDMUNsViwwREFBQSxDQUFDUyxxREFBVTtJQUFDOFMsT0FBTyxFQUFFOUQsdUJBQXdCO0lBQUM3SixLQUFLLEVBQUU7TUFBRUMsUUFBUSxFQUFFLFVBQVU7TUFBRXNQLEtBQUssRUFBRTtJQUFRO0VBQUUsZ0JBQzVGblYsMERBQUEsQ0FBQzZELGtFQUFLO0lBQUMrQixLQUFLLEVBQUU7TUFBRVosS0FBSyxFQUFFO0lBQVU7RUFBRSxDQUFFLENBQzNCLENBQ0EsQ0FBQyxlQUNmaEYsMERBQUEsQ0FBQ2UscURBQVU7SUFBQ29ILEVBQUUsRUFBQyxtQkFBbUI7SUFBQ3VMLE9BQU8sRUFBQyxJQUFJO0lBQUNELFNBQVMsRUFBQztFQUFJLEdBQUMsb0JBRW5ELENBQUMsZUFDYnpULDBEQUFBO0lBQU15VSxRQUFRLEVBQUVuQztFQUFhLGdCQUMzQnRTLDBEQUFBLENBQUNRLHFEQUFJO0lBQUNrVSxTQUFTO0lBQUM5TyxLQUFLLEVBQUU7TUFBRW9PLFVBQVUsRUFBRSxRQUFRO01BQUVXLE9BQU8sRUFBRTtJQUFPLENBQUU7SUFBQzdNLE9BQU8sRUFBRTtFQUFFLGdCQUMzRTlILDBEQUFBLENBQUNRLHFEQUFJO0lBQUNvVSxJQUFJO0lBQUNDLEVBQUUsRUFBRTtFQUFHLGdCQUNoQjdVLDBEQUFBLENBQUNXLHNEQUFTO0lBQ1JzVixRQUFRO0lBQ1I5TixFQUFFLEVBQUMsUUFBUTtJQUNYMEwsSUFBSSxFQUFDLFFBQVE7SUFDYitDLFNBQVM7SUFDVEMsSUFBSSxFQUFFLENBQUU7SUFDUjlILEtBQUssRUFBRWEsTUFBTztJQUNkMkYsUUFBUSxFQUFHM0gsQ0FBQyxJQUFLaUMsU0FBUyxDQUFDakMsQ0FBQyxDQUFDa0IsTUFBTSxDQUFDQyxLQUFLLENBQUU7SUFDM0NpRyxLQUFLLEVBQUMsVUFBVTtJQUNoQjdCLEVBQUUsRUFBRTtNQUFFbE4sS0FBSyxFQUFFLE1BQU07TUFBRWxCLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDakQsQ0FDRyxDQUFDLGVBQ1AvRSwwREFBQSxXQUFLLENBQUMsZUFDTkEsMERBQUEsQ0FBQ1EscURBQUk7SUFBQ29VLElBQUk7SUFBQ0MsRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCN1UsMERBQUE7SUFBUXdXLElBQUksRUFBQyxRQUFRO0lBQUNyUyxTQUFTLEVBQUMsYUFBYTtJQUFDeUIsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRTtJQUFPO0VBQUUsR0FBQyxNQUFZLENBQ2hGLENBQ0YsQ0FDRixDQUVILENBQ0EsQ0FBQyxlQUNSakcsMERBQUEsQ0FBQ21CLHNEQUFLO0lBQ0p5RixJQUFJLEVBQUU2RyxpQkFBa0I7SUFDeEJxSixPQUFPLEVBQUVoSiw0QkFBNkI7SUFDdEMsbUJBQWdCLG1CQUFtQjtJQUNuQyxvQkFBaUI7RUFBeUIsZ0JBRTFDOU4sMERBQUEsQ0FBQ2lCLHFEQUFHO0lBQUNrUyxFQUFFLEVBQUF0TSxhQUFBLENBQUFBLGFBQUEsS0FBT1AsTUFBTTtNQUFFTCxLQUFLLEVBQUU7SUFBRztFQUFHLGdCQUNqQ2pHLDBEQUFBLENBQUNvRixZQUFZO0lBQUM2UCxLQUFLLEVBQUMsT0FBTztJQUFDQyxTQUFTLEVBQUM7RUFBTSxnQkFDMUNsViwwREFBQSxDQUFDUyxxREFBVTtJQUFDOFMsT0FBTyxFQUFFekYsNEJBQTZCO0lBQUNsSSxLQUFLLEVBQUU7TUFBRUMsUUFBUSxFQUFFLFVBQVU7TUFBRXNQLEtBQUssRUFBRTtJQUFRO0VBQUUsZ0JBQ2pHblYsMERBQUEsQ0FBQzZELGtFQUFLO0lBQUMrQixLQUFLLEVBQUU7TUFBRVosS0FBSyxFQUFFO0lBQVU7RUFBRSxDQUFFLENBQzNCLENBQ0EsQ0FBQyxlQUNmaEYsMERBQUEsV0FBSyxDQUFDLGVBQ05BLDBEQUFBO0lBQUs0RixLQUFLLEVBQUU7TUFBRXNPLE1BQU0sRUFBRSxPQUFPO01BQUVTLE9BQU8sRUFBRSxNQUFNO01BQUVMLFFBQVEsRUFBRSxRQUFRO01BQUU4QyxTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUN4RnBYLDBEQUFBLENBQUM0RCx3RUFBaUI7SUFBQ3lULGNBQWMsRUFBRXRKLG9CQUFxQjtJQUFDK0ksT0FBTyxFQUFFaEo7RUFBNkIsQ0FBRSxDQUM5RixDQUNGLENBQ0EsQ0FDSixDQUFDO0FBRVY7QUFFQSxpRUFBZTdGLGlCQUFpQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaHdCUDtBQUNNO0FBQ3NDO0FBQ1g7QUFDTTtBQUNWO0FBQ1E7QUFDUjtBQUNGO0FBQ0k7QUFDYztBQUNSO0FBQ0U7QUFDSTtBQUNOO0FBQ007QUFDRTtBQUNpQjtBQUNqQztBQUNFO0FBQ3hELFNBQVM5SCxZQUFZQSxDQUFBLEVBQUc7RUFDdEIsb0JBQ0VILDBEQUFBLENBQUFBLHVEQUFBLHFCQUNFQSwwREFBQSxDQUFDeVksc0RBQWM7SUFBQ3RGLEVBQUUsRUFBRTtNQUFFbk8sS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcENoRiwwREFBQSxDQUFDMFksc0RBQVk7SUFBQ3ZGLEVBQUUsRUFBRTtNQUFFbk8sS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbENoRiwwREFBQSxDQUFDMFgscUVBQWEsTUFBRSxDQUNKLENBQUMsZUFDZjFYLDBEQUFBLENBQUMyWSxzREFBWTtJQUFDSyxPQUFPLEVBQUM7RUFBVyxDQUFFLENBQ3JCLENBQUMsZUFDakJoWiwwREFBQSxDQUFDeVksc0RBQWM7SUFBQ3RGLEVBQUUsRUFBRTtNQUFFbk8sS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcENoRiwwREFBQSxDQUFDMFksc0RBQVk7SUFBQ3ZGLEVBQUUsRUFBRTtNQUFFbk8sS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbENoRiwwREFBQSxDQUFDMlgsd0VBQWdCLE1BQUUsQ0FDUCxDQUFDLGVBQ2YzWCwwREFBQSxDQUFDMlksc0RBQVk7SUFBQ0ssT0FBTyxFQUFDO0VBQVUsQ0FBRSxDQUNwQixDQUFDLGVBQ2pCaFosMERBQUEsQ0FBQ3lZLHNEQUFjO0lBQUN0RixFQUFFLEVBQUU7TUFBRW5PLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3BDaEYsMERBQUEsQ0FBQzBZLHNEQUFZO0lBQUN2RixFQUFFLEVBQUU7TUFBRW5PLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDaEYsMERBQUEsQ0FBQzRYLG1FQUFXLE1BQUUsQ0FDRixDQUFDLGVBQ2Y1WCwwREFBQSxDQUFDMlksc0RBQVk7SUFBQ0ssT0FBTyxFQUFDO0VBQU8sQ0FBRSxDQUNqQixDQUFDLGVBQ2pCaFosMERBQUEsQ0FBQ3lZLHNEQUFjO0lBQUN0RixFQUFFLEVBQUU7TUFBRW5PLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3BDaEYsMERBQUEsQ0FBQzBZLHNEQUFZO0lBQUN2RixFQUFFLEVBQUU7TUFBRW5PLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDaEYsMERBQUEsQ0FBQ21ZLHdFQUFnQixNQUFFLENBQ1AsQ0FBQyxlQUNmblksMERBQUEsQ0FBQzJZLHNEQUFZO0lBQUNLLE9BQU8sRUFBQztFQUFXLENBQUUsQ0FDckIsQ0FBQyxlQUNqQmhaLDBEQUFBLENBQUN5WSxzREFBYztJQUFDdEYsRUFBRSxFQUFFO01BQUVuTyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQ2hGLDBEQUFBLENBQUMwWSxzREFBWTtJQUFDdkYsRUFBRSxFQUFFO01BQUVuTyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQ2hGLDBEQUFBLENBQUM2WCx1RUFBZSxNQUFFLENBQ04sQ0FBQyxlQUNmN1gsMERBQUEsQ0FBQzJZLHNEQUFZO0lBQUNLLE9BQU8sRUFBQztFQUFTLENBQUUsQ0FDbkIsQ0FBQyxlQUNqQmhaLDBEQUFBLENBQUN5WSxzREFBYztJQUFDdEYsRUFBRSxFQUFFO01BQUVuTyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQ2hGLDBEQUFBLENBQUMwWSxzREFBWTtJQUFDdkYsRUFBRSxFQUFFO01BQUVuTyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQ2hGLDBEQUFBLENBQUNvWSwwRUFBa0IsTUFBRSxDQUNULENBQUMsZUFDZnBZLDBEQUFBLENBQUMyWSxzREFBWTtJQUFDSyxPQUFPLEVBQUM7RUFBUyxDQUFFLENBQ25CLENBQUMsZUFDakJoWiwwREFBQSxDQUFDeVksc0RBQWM7SUFBQ3RGLEVBQUUsRUFBRTtNQUFFbk8sS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcENoRiwwREFBQSxDQUFDMFksc0RBQVk7SUFBQ3ZGLEVBQUUsRUFBRTtNQUFFbk8sS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbENoRiwwREFBQSxDQUFDdVksNERBQW1CLE1BQUUsQ0FDVixDQUFDLGVBQ2Z2WSwwREFBQSxDQUFDMlksc0RBQVk7SUFBQ0ssT0FBTyxFQUFDO0VBQWdCLENBQUUsQ0FDMUIsQ0FBQyxlQUNqQmhaLDBEQUFBLENBQUN5WSxzREFBYztJQUFDdEYsRUFBRSxFQUFFO01BQUVuTyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQ2hGLDBEQUFBLENBQUMwWSxzREFBWTtJQUFDdkYsRUFBRSxFQUFFO01BQUVuTyxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQ2hGLDBEQUFBLENBQUN3WSw0RUFBbUIsTUFBRSxDQUNWLENBQUMsZUFDZnhZLDBEQUFBLENBQUMyWSxzREFBWTtJQUFDSyxPQUFPLEVBQUM7RUFBUyxDQUFFLENBQ25CLENBQUMsZUFDakJoWiwwREFBQSxDQUFDeVksc0RBQWM7SUFBQ3RGLEVBQUUsRUFBRTtNQUFFbk8sS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcENoRiwwREFBQSxDQUFDMFksc0RBQVk7SUFBQ3ZGLEVBQUUsRUFBRTtNQUFFbk8sS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbENoRiwwREFBQSxDQUFDOFgsbUVBQVcsTUFBRSxDQUNGLENBQUMsZUFDZjlYLDBEQUFBLENBQUMyWSxzREFBWTtJQUFDSyxPQUFPLEVBQUM7RUFBbUIsQ0FBRSxDQUM3QixDQUFDLGVBQ2pCaFosMERBQUEsQ0FBQ3lZLHNEQUFjO0lBQUN0RixFQUFFLEVBQUU7TUFBRW5PLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3BDaEYsMERBQUEsQ0FBQzBZLHNEQUFZO0lBQUN2RixFQUFFLEVBQUU7TUFBRW5PLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDaEYsMERBQUEsQ0FBQ3FZLHVFQUFlLE1BQUUsQ0FDTixDQUFDLGVBQ2ZyWSwwREFBQSxDQUFDMlksc0RBQVk7SUFBQ0ssT0FBTyxFQUFDO0VBQWEsQ0FBRSxDQUN2QixDQUFDLGVBQ2pCaFosMERBQUEsQ0FBQ3lZLHNEQUFjO0lBQUN0RixFQUFFLEVBQUU7TUFBRW5PLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3BDaEYsMERBQUEsQ0FBQzBZLHNEQUFZO0lBQUN2RixFQUFFLEVBQUU7TUFBRW5PLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDaEYsMERBQUEsQ0FBQzhZLHFFQUFZLE1BQUUsQ0FDSCxDQUFDLGVBQ2Y5WSwwREFBQSxDQUFDMlksc0RBQVk7SUFBQ0ssT0FBTyxFQUFDO0VBQU0sQ0FBRSxDQUNoQixDQUNoQixDQUFDO0FBRVA7QUFFQSxpRUFBZTdZLFlBQVksRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2suanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BZGQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9SZW1vdmVDaXJjbGVPdXRsaW5lLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9Qcm9qZWN0Vmlldy9Qcm9qZWN0VXBkYXRlVmlldy5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9TaWRlYmFyRGFzaDEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cInVzZSBjbGllbnRcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcbnZhciBfanN4UnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XG4gIGQ6IFwiTTIwIDExSDcuODNsNS41OS01LjU5TDEyIDRsLTggOCA4IDggMS40MS0xLjQxTDcuODMgMTNIMjB6XCJcbn0pLCAnQXJyb3dCYWNrJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnpcIlxufSksICdBZGQnKTsiLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk03IDExdjJoMTB2LTJ6bTUtOUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMm0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOFwiXG59KSwgJ1JlbW92ZUNpcmNsZU91dGxpbmUnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXJEYXNoMSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZWJhckRhc2gxJztcclxuaW1wb3J0ICcuLi8uLi92aWV3LmNzcyc7XHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgUGFwZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgc3R5bGVkLCBCb3gsIEF1dG9jb21wbGV0ZSwgTW9kYWwsIEJhY2tkcm9wLCBUYWJsZUNvbnRhaW5lciwgT3V0bGluZWRJbnB1dCwgSW5wdXRBZG9ybm1lbnQsIERpdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgQWRkLCBBcnJvd1Vwd2FyZE91dGxpbmVkLCBSZW1vdmVDaXJjbGVPdXRsaW5lIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgRGVtb0NvbnRhaW5lciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvaW50ZXJuYWxzL2RlbW8nO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvTG9jYWxpemF0aW9uUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBBZGFwdGVyRGF5anMgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0FkYXB0ZXJEYXlqcyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0RhdGVQaWNrZXInO1xyXG5pbXBvcnQgQXJyb3dCYWNrIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgRGVsZXRlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IEN1c3RvbWVyRm9ybVZpZXcyIGZyb20gJy4uL0N1c3RvbWVyVklldy9DdXN0b21lckZvcm1WaWV3Mic7XHJcbmltcG9ydCBDbG9zZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5cclxuY29uc3QgTGlnaHRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQmxhY2tUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBzdHlsZTIgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA4MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gUHJvamVjdFVwZGF0ZVZpZXcoKSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbY3VzdG9tZXJOYW1lLCBzZXRDdXN0b21lck5hbWVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtjdXN0b21lciwgc2V0Q3VzdG9tZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwaGFzZSwgc2V0UGhhc2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0YXJ0RGF0ZSwgc2V0U3RhcnREYXRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt2aXNpdERhdGUsIHNldFZpc2l0RGF0ZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbcHJvamVjdE51bWJlciwgc2V0UHJvamVjdE51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNMb2FkaW5nRGF0YSwgc2V0SXNMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtcHJvamVjdHMvJHtpZH1gKVxyXG4gICAgICAgIHNldEN1c3RvbWVyTmFtZShyZXMuZGF0YS5kYXRhLmN1c3RvbWVyTmFtZSk7XHJcbiAgICAgICAgc2V0UHJvamVjdE5hbWUocmVzLmRhdGEuZGF0YS5wcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgc2V0U3RhdHVzKHJlcy5kYXRhLmRhdGEuc3RhdHVzKTtcclxuICAgICAgICBzZXRQaGFzZShyZXMuZGF0YS5kYXRhLnBoYXNlKTtcclxuICAgICAgICBzZXREZXNjcmlwdGlvbihyZXMuZGF0YS5kYXRhLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICBzZXRTdGFydERhdGUocmVzLmRhdGEuZGF0YS5zdGFydERhdGUpO1xyXG4gICAgICAgIHNldFByb2plY3ROdW1iZXIoTnVtYmVyKHJlcy5kYXRhPy5kYXRhPy5wcm9qZWN0TnVtYmVyIHx8IHJlcy5kYXRhPy5wcm9qZWN0TnVtYmVyIHx8IDApKTtcclxuICAgICAgICBzZXRWaXNpdERhdGUocmVzLmRhdGEuZGF0YS52aXNpdERhdGUpO1xyXG4gICAgICAgIHNldElzTG9hZGluZ0RhdGEoZmFsc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKVxyXG4gIH0sIFtpZF0pXHJcbiAgY29uc3QgW3B1cmNoYXNlLCBzZXRQdXJjaGFzZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlRmV0Y2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzQ3VzdG9tZXIgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9jdXN0b21lcmApXHJcbiAgICAgICAgc2V0Q3VzdG9tZXIocmVzQ3VzdG9tZXIuZGF0YS5kYXRhLnJldmVyc2UoKSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcHVyY2hhc2U/c3VtbWFyeT10cnVlYClcclxuICAgICAgICByZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5wcm9qZWN0TmFtZSAhPT0gdW5kZWZpbmVkICYmIHJvdy5wcm9qZWN0TmFtZS5faWQgPT09IGlkKVxyXG4gICAgICAgICAgLm1hcCgocm93KSA9PiBzZXRQdXJjaGFzZShyb3cuX2lkKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlRmV0Y2goKVxyXG4gIH0sIFtpZF0pXHJcbiAgey8qKiBDdXN0b21lciBTdGFydCAqLyB9XHJcbiAgY29uc3QgW29wZW5BdXRvY29tcGxldGUxLCBzZXRPcGVuQXV0b2NvbXBsZXRlMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMSA9IChlKSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTEgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQXV0b2NvbXBsZXRlMShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDcmVhdGVDdXN0b21lciA9IChuZXdDdXN0b21lcikgPT4ge1xyXG4gICAgc2V0Q3VzdG9tZXIoW25ld0N1c3RvbWVyLCAuLi5jdXN0b21lcl0pXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUN1c3RvbWVyID0gKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBjdXN0b21lci5maW5kKChvcHRpb24pID0+IG9wdGlvbiA9PT0gbmV3VmFsdWUpXHJcbiAgICBzZXRDdXN0b21lck5hbWUoe1xyXG4gICAgICBfaWQ6IHNlbGVjdGVkT3B0aW9ucz8uX2lkLFxyXG4gICAgICBjdXN0b21lck5hbWU6IHNlbGVjdGVkT3B0aW9ucz8uQ3VzdG9tZXIsXHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xlYXJDVXN0b21lciA9ICgpID0+IHtcclxuICAgIHNldEN1c3RvbWVyTmFtZSh7XHJcbiAgICAgIF9pZDogXCJcIixcclxuICAgICAgY3VzdG9tZXJOYW1lOiBcIlwiXHJcbiAgICB9KTtcclxuICB9XHJcbiAgey8qKiBDdXN0b21lciBFbmQgKi8gfVxyXG4gIGNvbnN0IGhhbmRsZUFkZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGFiYyA9IFsuLi5waGFzZSwgW11dXHJcbiAgICBzZXRQaGFzZShhYmMpXHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAob25DaGFuZ2VWYWx1ZSwgaSkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXREYXRhID0gWy4uLnBoYXNlXVxyXG4gICAgaW5wdXREYXRhW2ldID0gb25DaGFuZ2VWYWx1ZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRQaGFzZShpbnB1dERhdGEpXHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaSkgPT4ge1xyXG4gICAgY29uc3QgZGVsZXRlUGhhc2UgPSBbLi4ucGhhc2VdXHJcbiAgICBkZWxldGVQaGFzZS5zcGxpY2UoaSwgMSlcclxuICAgIHNldFBoYXNlKGRlbGV0ZVBoYXNlKVxyXG4gIH07XHJcbiAgey8qKiBSZWFzb24gTW9kYWwgc3RhcnQgKi8gfVxyXG5cclxuICBjb25zdCBbb3BlbjIsIHNldE9wZW4yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZVJlYXNvbiA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW4yKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVcGRhdGVSZWFzb24gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IENvbW1lbnRJbmZvID1cclxuICB7XHJcbiAgICBpZEluZm86IGlkLFxyXG4gICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIE1vZGlmaWVkJyxcclxuICAgIHJlYXNvblxyXG4gIH1cclxuICBjb25zdCBkYXRlQ29tbWVudCA9IGRheWpzKERhdGUubm93KCkpO1xyXG5cclxuICB7LyoqIFJlYXNvbiBNb2RhbCBlbmQgKi8gfVxyXG4gIHsvKiogTG9hZGluZyBTdGFydCAqLyB9XHJcbiAgY29uc3QgW29wZW5CYWNrLCBzZXRPcGVuQmFja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5CYWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbkJhY2sodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQmFjayhmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG5cclxuICAgIHNldE9wZW4yKGZhbHNlKTtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG5cclxuICAgIHNldE9wZW4yKGZhbHNlKTtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBuYXZpZ2F0ZSgtMSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgY29uc3QgW2hpZGVCYWNrLCBzZXRIaWRlQmFja10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQ29tbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogaWQsXHJcbiAgICAgIHBlcnNvbjogYCR7dXNlci5kYXRhLnVzZXJOYW1lfSBNb2RpZnkgUC0ke1N0cmluZyhwcm9qZWN0TnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfWAsXHJcbiAgICAgIHJlYXNvbixcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogbmV3IERhdGUoKVxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uL2AsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGN1c3RvbWVyTmFtZSxcclxuICAgICAgcHJvamVjdE5hbWUsXHJcbiAgICAgIHByb2plY3ROdW1iZXIsXHJcbiAgICAgIHN0YXR1cyxcclxuICAgICAgcGhhc2UsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBzdGFydERhdGUsXHJcbiAgICAgIHZpc2l0RGF0ZSxcclxuICAgICAgdXBkYXRlUzogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gRmV0Y2ggZnJlc2ggc3RhdGUgZnJvbSBzZXJ2ZXJcclxuICAgICAgY29uc3QgY3VycmVudFJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1wcm9qZWN0cy8ke2lkfWApO1xyXG4gICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGN1cnJlbnRSZXMuZGF0YS5kYXRhO1xyXG5cclxuICAgICAgLy8gTWVyZ2UgbG9jYWwgY2hhbmdlcyB3aXRoIHNlcnZlciBzdGF0ZVxyXG4gICAgICBjb25zdCB1cGRhdGVkRGF0YSA9IHtcclxuICAgICAgICAuLi5jdXJyZW50UHJvamVjdCxcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIHVwZGF0ZVM6IGZhbHNlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtcHJvamVjdHMvJHtpZH1gLCB1cGRhdGVkRGF0YSk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBoYW5kbGVDcmVhdGVDb21tZW50KCk7XHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgcHJvamVjdDpcIiwgZXJyb3IpO1xyXG4gICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB1cGRhdGUgcHJvamVjdFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBoaWRlQmFjayA9PT0gJ3RydWUnID9cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+IDpcclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW5CYWNrfT5cclxuICAgICAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPn1cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlQWRtaW5WaWV3IG5hbWU9e3VzZXIuZGF0YS51c2VyTmFtZX0gcm9sZT17dXNlci5kYXRhLnJvbGV9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT57dXNlci5kYXRhLnVzZXJOYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNpZGVCYXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2lkZUJhcihmYWxzZSl9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaDEgLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDQgfX0gPlxyXG4gICAgICAgICAgICB7IGlzTG9hZGluZ0RhdGEgPyA8TG9hZGVyIC8+IDogKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPcGVuVXBkYXRlUmVhc29ufT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9IGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZSAhPT0gJycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2N1c3RvbWVyTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2N1c3RvbWVyTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDdXN0b21lciBOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUgPyBjdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJDVXN0b21lcn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtjdXN0b21lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLkN1c3RvbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZUN1c3RvbWVyKG5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFBhcGVyQ29tcG9uZW50PXsoeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSkgPT4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTEoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBREQgTkVXIENVU1RPTUVSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIkN1c3RvbWVyIE5hbWVcIiByZXF1aXJlZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Zpc2l0RGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anModmlzaXREYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVmlzaXQgRGF0ZScgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRWaXNpdERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RhcnREYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTdGFydCBEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhzdGFydERhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV3RGF0ZSkgPT4gc2V0U3RhcnREYXRlKG5ld0RhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdQcm9qZWN0TmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1Byb2plY3ROYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1Byb2plY3QgTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvamVjdE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInByb2plY3ROdW1iZXJcIj5Qcm9qZWN0IE51bWJlcjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3Byb2plY3ROdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Byb2plY3ROdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdQcm9qZWN0IE51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3ROdW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvamVjdE51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlAtPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz5QaGFzZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QWRkIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUFkZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGhhc2UubWFwKChkYXRhLCBpKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBoYXNlXCIgaWQ9XCJwaGFzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1BoYXNlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRhfSBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShpKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInN0YXR1c1wiPlN0YXR1czwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXR1cyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlBlbmRpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJQZW5kaW5nXCI+UGVuZGluZzwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIk9uLUdvaW5nXCI+T24tR29pbmc8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJTdG9wcGVkXCI+U3RvcHBlZDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkNvbXBsZXRlZFwiPkNvbXBsZXRlZDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQmFja31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUJhY2t9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RG8geW91IHdhbnQgdG8gc3RvcCB1cGRhdGluZyBwcm9qZWN0ID8gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZSA6PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCI+IElmIHlvdSBzdG9wIHVwZGF0aW5nIHdpdGhvdXQgc2F2aW5nLCBhbGwgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdDwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL1Byb2plY3RWaWV3QWRtaW4nKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19Pk5vPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17RXJyb3JPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VFcnJvcn1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2FuY2VsSWNvbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBGYWlsZWQgdG8gU2F2ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuMn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVVwZGF0ZVJlYXNvbn1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVVwZGF0ZVJlYXNvbn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIFJlYXNvbiBPZiBVcGRhdGluZ1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgaWQ9J3JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgbmFtZT0ncmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nQ29tbWVudHMnXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkF1dG9jb21wbGV0ZTF9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUyLCB3aWR0aDogODAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzYwMHB4JywgcGFkZGluZzogJzIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogJ3Njcm9sbCcgfX0+XHJcbiAgICAgICAgICAgIDxDdXN0b21lckZvcm1WaWV3MiBvbkNyZWF0ZU9wdGlvbj17aGFuZGxlQ3JlYXRlQ3VzdG9tZXJ9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTF9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFVwZGF0ZVZpZXdcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL2Nzcy9TaWRlYmFyTmV3LnNjc3MnXHJcbmltcG9ydCB7IE91dGxldCwgTmF2TGluaywgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBQZXJtSWRlbnRpdHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGVybUlkZW50aXR5JztcclxuaW1wb3J0IExpc3RBbHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTGlzdEFsdCc7XHJcbmltcG9ydCBEZXNjcmlwdGlvbkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZXNjcmlwdGlvbic7XHJcbmltcG9ydCBSZWNlaXB0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1JlY2VpcHQnO1xyXG5pbXBvcnQgTW92aW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vdmluZyc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5ncyc7XHJcbmltcG9ydCBJbnNlcnREcml2ZUZpbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSW5zZXJ0RHJpdmVGaWxlJztcclxuaW1wb3J0IFJlc3RvcmVQYWdlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jlc3RvcmVQYWdlJztcclxuaW1wb3J0IFJlcXVlc3RRdW90ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZXF1ZXN0UXVvdGUnO1xyXG5pbXBvcnQgTW9uZXRpemF0aW9uT25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9uZXRpemF0aW9uT24nO1xyXG5pbXBvcnQgRW5naW5lZXJpbmdJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRW5naW5lZXJpbmcnO1xyXG5pbXBvcnQgeyBFeHBsaWNpdCwgU2hvcHBpbmdCYWdPdXRsaW5lZCB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUm9vbVByZWZlcmVuY2VzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jvb21QcmVmZXJlbmNlcyc7XHJcbmltcG9ydCB7IExpc3RJdGVtQnV0dG9uLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUGF5bWVudEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QYXltZW50JztcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0JztcclxuZnVuY3Rpb24gU2lkZWJhckRhc2gxKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxEYXNoYm9hcmRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGFzaGJvYXJkXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxQZXJtSWRlbnRpdHlJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ3VzdG9tZXJcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSAgPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TGlzdEFsdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJTdG9yZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UmVxdWVzdFF1b3RlSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlF1b3RhdGlvblwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPERlc2NyaXB0aW9uSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkludm9pY2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxNb25ldGl6YXRpb25Pbkljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQYXltZW50XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8U2hvcHBpbmdCYWdPdXRsaW5lZCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhaWx5IEV4cGVuc2VzXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJvb21QcmVmZXJlbmNlc0ljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQcm9qZWN0XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UmVjZWlwdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQdXJjaGFzZXMgUmVxdWVzdFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8RW5naW5lZXJpbmdJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTWFpbnRlbmFuY2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJNb3JlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckRhc2gxIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlYmFyRGFzaDEiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiRGVsZXRlSWNvbiIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJQYXBlciIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIlR5cG9ncmFwaHkiLCJzdHlsZWQiLCJCb3giLCJBdXRvY29tcGxldGUiLCJNb2RhbCIsIkJhY2tkcm9wIiwiVGFibGVDb250YWluZXIiLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJEaXZpZGVyIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsImF4aW9zIiwiQWRkIiwiQXJyb3dVcHdhcmRPdXRsaW5lZCIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJFTkRQT0lOVF9VUkwiLCJ2NCIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsIkFycm93QmFjayIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2FkZXIiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiRGVsZXRlIiwiQ3VzdG9tZXJGb3JtVmlldzIiLCJDbG9zZSIsImRheWpzIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiTGlnaHRUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJCbGFja1Rvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsIlZpZXdUb29sdGlwIiwiX3JlZjUiLCJfZXhjbHVkZWQzIiwiX3JlZjYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsInN0eWxlMiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjciLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjgiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJQcm9qZWN0VXBkYXRlVmlldyIsIl91c2VQYXJhbXMiLCJpZCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY5IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjdXN0b21lck5hbWUiLCJzZXRDdXN0b21lck5hbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInByb2plY3ROYW1lIiwic2V0UHJvamVjdE5hbWUiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInN0YXR1cyIsInNldFN0YXR1cyIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwicGhhc2UiLCJzZXRQaGFzZSIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsInZpc2l0RGF0ZSIsInNldFZpc2l0RGF0ZSIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJwcm9qZWN0TnVtYmVyIiwic2V0UHJvamVjdE51bWJlciIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJpc0xvYWRpbmdEYXRhIiwic2V0SXNMb2FkaW5nRGF0YSIsImZldGNoRGF0YSIsIl9yZWYwIiwiX3JlcyRkYXRhIiwiX3JlcyRkYXRhMiIsIk51bWJlciIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJwdXJjaGFzZSIsInNldFB1cmNoYXNlIiwiaGFuZGxlRmV0Y2giLCJfcmVmMSIsIl9yZXMkZGF0YTMiLCJyZXNDdXN0b21lciIsInJldmVyc2UiLCJmaWx0ZXIiLCJyb3ciLCJ1bmRlZmluZWQiLCJfaWQiLCJtYXAiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwib3BlbkF1dG9jb21wbGV0ZTEiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMSIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUxIiwiaGFuZGxlQ3JlYXRlQ3VzdG9tZXIiLCJuZXdDdXN0b21lciIsImhhbmRsZUNoYW5nZUN1c3RvbWVyIiwibmV3VmFsdWUiLCJzZWxlY3RlZE9wdGlvbnMiLCJmaW5kIiwib3B0aW9uIiwiQ3VzdG9tZXIiLCJoYW5kbGVDbGVhckNVc3RvbWVyIiwiaGFuZGxlQWRkIiwiYWJjIiwiaGFuZGxlQ2hhbmdlIiwib25DaGFuZ2VWYWx1ZSIsImkiLCJpbnB1dERhdGEiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZURlbGV0ZSIsImRlbGV0ZVBoYXNlIiwic3BsaWNlIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsIm9wZW4yIiwic2V0T3BlbjIiLCJoYW5kbGVPcGVuVXBkYXRlUmVhc29uIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZVVwZGF0ZVJlYXNvbiIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJyZWFzb24iLCJzZXRSZWFzb24iLCJDb21tZW50SW5mbyIsImlkSW5mbyIsInBlcnNvbiIsImRhdGVDb21tZW50IiwiRGF0ZSIsIm5vdyIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJvcGVuQmFjayIsInNldE9wZW5CYWNrIiwiaGFuZGxlT3BlbkJhY2siLCJoYW5kbGVDbG9zZUJhY2siLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwiRXJyb3JPcGVuTW9kYWwiLCJzZXRFcnJvck9wZW5Nb2RhbCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNsb3NlRXJyb3IiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2IiwiaGlkZUJhY2siLCJzZXRIaWRlQmFjayIsImhhbmRsZUNyZWF0ZUNvbW1lbnQiLCJfcmVmMTAiLCJTdHJpbmciLCJwYWRTdGFydCIsImRhdGVOb3RpZmljYXRpb24iLCJwb3N0IiwibG9nIiwiaGFuZGxlU3VibWl0IiwiX3JlZjExIiwidXBkYXRlUyIsImN1cnJlbnRSZXMiLCJjdXJyZW50UHJvamVjdCIsInVwZGF0ZWREYXRhIiwicHV0IiwiX3giLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJuYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10Iiwib25TdWJtaXQiLCJjb250YWluZXIiLCJwYWRkaW5nIiwiaXRlbSIsInhzIiwiZ2FwIiwiZGlzYWJsZWQiLCJsYWJlbCIsInRpdGxlIiwicGxhY2VtZW50IiwiZmxvYXQiLCJkaXNhYmxlQ2xlYXJhYmxlIiwib3B0aW9ucyIsImdldE9wdGlvbkxhYmVsIiwib25DaGFuZ2UiLCJQYXBlckNvbXBvbmVudCIsIl9yZWYxMiIsImNoaWxkcmVuIiwib3RoZXIiLCJfZXhjbHVkZWQ0IiwibWFyZ2luVG9wIiwib25Nb3VzZURvd24iLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsInJlcXVpcmVkIiwiZGF0ZUFkYXB0ZXIiLCJjb21wb25lbnRzIiwiZGF0ZSIsImZvcm1hdCIsIm5ld0RhdGUiLCJodG1sRm9yIiwidHlwZSIsInN0YXJ0QWRvcm5tZW50Iiwia2V5IiwiZGVmYXVsdFZhbHVlIiwibXVsdGlsaW5lIiwicm93cyIsIm9uQ2xvc2UiLCJ0ZXh0QWxpZ24iLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJvdmVyZmxvd1kiLCJvbkNyZWF0ZU9wdGlvbiIsIk91dGxldCIsIk5hdkxpbmsiLCJMaW5rIiwidXNlTG9jYXRpb24iLCJEYXNoYm9hcmRJY29uIiwiUGVybUlkZW50aXR5SWNvbiIsIkxpc3RBbHRJY29uIiwiRGVzY3JpcHRpb25JY29uIiwiUmVjZWlwdEljb24iLCJNb3ZpbmdJY29uIiwiU2V0dGluZ3NJY29uIiwiSW5zZXJ0RHJpdmVGaWxlSWNvbiIsIlJlc3RvcmVQYWdlSWNvbiIsIlJlcXVlc3RRdW90ZUljb24iLCJNb25ldGl6YXRpb25Pbkljb24iLCJFbmdpbmVlcmluZ0ljb24iLCJFeHBsaWNpdCIsIlNob3BwaW5nQmFnT3V0bGluZWQiLCJSb29tUHJlZmVyZW5jZXNJY29uIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJtYWtlU3R5bGVzIiwiUGF5bWVudEljb24iLCJNb3JlVmVydEljb24iLCJGcmFnbWVudCIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9