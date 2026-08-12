"use strict";
exports.id = "src_js_AdminView1_PageView_EmployeeView_EmployeeUpdateView_js";
exports.ids = ["src_js_AdminView1_PageView_EmployeeView_EmployeeUpdateView_js"];
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

/***/ "./src/js/AdminView1/PageView/EmployeeView/EmployeeUpdateView.js"
/*!***********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EmployeeView/EmployeeUpdateView.js ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _component_SidebarDashE3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/SidebarDashE3 */ "./src/js/component/SidebarDashE3.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormLabel/FormLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/RadioGroup/RadioGroup.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Radio/Radio.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
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
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_ref3 => {
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
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_29__["default"], {
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
function EmployeeUpdateView() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_43__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_43__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__.setUser)({
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_44__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    joinDate = _useState2[0],
    setJoinDate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    employeeName = _useState4[0],
    setEmployeeName = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    employeeAddress = _useState6[0],
    setEmployeeAddress = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    employeeEmail = _useState8[0],
    setEmployeeEmail = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    employeePhone = _useState0[0],
    setEmployeePhone = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState1, 2),
    employeeRole = _useState10[0],
    setEmployeeRole = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    department = _useState12[0],
    setDepartment = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    dateOfBirth = _useState14[0],
    setDateOfBirth = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    Gender = _useState16[0],
    setGender = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    statusMarital = _useState18[0],
    setStatusMarital = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState20 = _slicedToArray(_useState19, 2),
    identifier = _useState20[0],
    setIdentifier = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    identifierNumber = _useState22[0],
    setIdentifierNumber = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState24 = _slicedToArray(_useState23, 2),
    expireDate = _useState24[0],
    setExpireDate = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState26 = _slicedToArray(_useState25, 2),
    salary = _useState26[0],
    setSalary = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState28 = _slicedToArray(_useState27, 2),
    description = _useState28[0],
    setDescription = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState30 = _slicedToArray(_useState29, 2),
    bankName = _useState30[0],
    setBankName = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState32 = _slicedToArray(_useState31, 2),
    bankAccountNumber = _useState32[0],
    setBankAccountNumber = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    other = _useState34[0],
    setOther = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    bounceAllowances = _useState36[0],
    setBounceAllowances = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState38 = _slicedToArray(_useState37, 2),
    foodBasic = _useState38[0],
    setFoodBasic = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState40 = _slicedToArray(_useState39, 2),
    basicTransport = _useState40[0],
    setBasicTransport = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState42 = _slicedToArray(_useState41, 2),
    employeeId = _useState42[0],
    setEmployeeId = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState44 = _slicedToArray(_useState43, 2),
    status = _useState44[0],
    setStatus = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState46 = _slicedToArray(_useState45, 2),
    reason1 = _useState46[0],
    setReason1 = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState48 = _slicedToArray(_useState47, 2),
    reason = _useState48[0],
    setReason = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState50 = _slicedToArray(_useState49, 2),
    unitInfo = _useState50[0],
    setUnitInfo = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState52 = _slicedToArray(_useState51, 2),
    departmentInfo = _useState52[0],
    setDepartmentInfo = _useState52[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetch = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _resItemUnit$data;
          var resItemUnit = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/department"));
          var currentBranch = localStorage.getItem('selectedBranch') || 'HQ';
          var filteredUnits = (((_resItemUnit$data = resItemUnit.data) === null || _resItemUnit$data === void 0 ? void 0 : _resItemUnit$data.data) || []).filter(d => !d.branchId || d.branchId === currentBranch);
          setUnitInfo(filteredUnits);
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
          var _res$data, _res$data2, _res$data3, _res$data4;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/get-employee/").concat(id));
          setJoinDate(res.data.data.joinDate);
          setEmployeeName(res.data.data.employeeName);
          setEmployeeId(res.data.data.employeeId);
          setEmployeeAddress(res.data.data.employeeAddress);
          setEmployeeEmail(res.data.data.employeeEmail);
          setEmployeePhone(res.data.data.employeePhone);
          setEmployeeRole(res.data.data.employeeRole);
          setDepartment(res.data.data.department);
          setDateOfBirth(res.data.data.dateOfBirth);
          setGender(res.data.data.Gender);
          setStatusMarital(res.data.data.statusMarital);
          setIdentifier(res.data.data.identifier);
          setIdentifierNumber(Number(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.identifierNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.identifierNumber) || 0));
          setExpireDate(res.data.data.expireDate);
          setSalary(res.data.data.salary);
          setDescription(res.data.data.description);
          setBankName(res.data.data.bankName);
          setBankAccountNumber(Number(((_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.bankAccountNumber) || ((_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.bankAccountNumber) || 0));
          setOther(res.data.data.other);
          setBounceAllowances(res.data.data.bounceAllowances);
          setFoodBasic(res.data.data.foodBasic);
          setBasicTransport(res.data.data.basicTransport);
          setStatus(res.data.data.status);
          setReason1(res.data.data.reason1);
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
  var handleClearUnits = e => {
    e.preventDefault();
    setDepartment('');
  };
  {/** Reason Modal start */}
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState54 = _slicedToArray(_useState53, 2),
    open2 = _useState54[0],
    setOpen2 = _useState54[1];
  var handleOpenUpdateReason = e => {
    e.preventDefault();
    setOpen2(true);
  };
  var handleCloseUpdateReason = () => {
    setOpen2(false);
  };
  var dateComment = dayjs__WEBPACK_IMPORTED_MODULE_41___default()(Date.now());
  {/** Reason Modal end */}
  {/** Loading Start */}
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
    ErrorOpenModal = _useState62[0],
    setErrorOpenModal = _useState62[1];
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState64 = _slicedToArray(_useState63, 2),
    openAutocomplete2 = _useState64[0],
    setOpenAutocomplete2 = _useState64[1];
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState66 = _slicedToArray(_useState65, 2),
    modalOpenLoading = _useState66[0],
    setModalOpenLoading = _useState66[1];
  var handleOpenOpenAutocomplete2 = e => {
    e.stopPropagation();
    setOpenAutocomplete2(true);
  };
  var handleCloseOpenAutocomplete2 = () => {
    setOpenAutocomplete2(false);
    setModalOpenLoading(false);
  };
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
  var handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleSubmitCategory = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        department: departmentInfo,
        branchId: localStorage.getItem('selectedBranch') || 'HQ'
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/create-department"), data);
        if (res) {
          handleOpenModal();
          setUnitInfo([...unitInfo, res.data.data]);
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
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* () {
      var data = {
        idInfo: id,
        person: user.data.userName + ' Modify EMPLOYEE EMP-' + String(employeeId).padStart(6, '0'),
        reason,
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/create-notification/"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateComment() {
      return _ref11.apply(this, arguments);
    };
  }();
  {/** Loading End */}
  var handleSubmit = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        joinDate,
        employeeName,
        employeeAddress,
        employeeEmail,
        employeePhone,
        employeeRole,
        department,
        dateOfBirth,
        Gender,
        statusMarital,
        identifier,
        identifierNumber,
        expireDate,
        status,
        reason1,
        salary,
        description,
        bankAccountNumber,
        bankName,
        employeeId,
        other,
        bounceAllowances,
        foodBasic,
        basicTransport,
        updateS: false,
        branchId: localStorage.getItem('selectedBranch') || 'HQ'
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/update-employee/").concat(id), data);
        if (res) {
          handleOpen();
          handleCreateComment();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmit(_x2) {
      return _ref12.apply(this, arguments);
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
  }, "update Employee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_42__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_51__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_50__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_48__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDashE3__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h6"
  }, "Employee Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_38__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_39__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_37__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_40__.DatePicker, {
    required: true,
    name: "joinDate",
    label: "Join Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_41___default()(joinDate),
    onChange: date => setJoinDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    id: "employeeId",
    label: "Employee Id",
    value: employeeId !== undefined ? employeeId : '',
    onChange: e => setEmployeeId(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "Gender"
  }, "Gender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "Gender",
    row: true,
    value: Gender,
    onChange: e => setGender(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Female",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null),
    label: "Female"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Male",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null),
    label: "Male"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "employeeName",
    label: "Employee Name",
    value: employeeName,
    onChange: e => setEmployeeName(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_38__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_39__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_37__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_40__.DatePicker, {
    required: true,
    name: "dateOfBirth",
    label: "Birth Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_41___default()(dateOfBirth),
    onChange: date => setDateOfBirth(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "employeeAddress",
    label: "Employee Address",
    value: employeeAddress,
    onChange: e => setEmployeeAddress(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "employeeEmail",
    label: "Email",
    value: employeeEmail,
    onChange: e => setEmployeeEmail(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "employeePhone",
    label: "Phone Number",
    value: employeePhone,
    onChange: e => setEmployeePhone(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    id: "employeeRole",
    label: "Grade",
    value: employeeRole,
    onChange: e => setEmployeeRole(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, department !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: "Department",
    value: department,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Clear",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleClearUnits
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "department",
    options: unitInfo,
    getOptionLabel: Option => Option.department.toUpperCase(),
    onChange: (e, newValue) => setDepartment(newValue.department),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    PaperComponent: _ref13 => {
      var children = _ref13.children,
        other = _objectWithoutProperties(_ref13, _excluded4);
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
      }, "Add New Department")));
    },
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, params, {
      label: "Department",
      required: true
    }))
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    htmlFor: "status"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    required: true,
    id: "status",
    value: status !== undefined ? status : 'undefined',
    onChange: e => setStatus(e.target.value),
    label: "Status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "Employed"
  }, "Employed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "Suspended"
  }, "Suspended"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "Fired"
  }, "Fired"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "Resign"
  }, "Resign")))), status !== undefined && status !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: status === 'Suspended' || status === 'Fired' || status === 'Resign',
    id: "reason1",
    name: "reason1",
    value: reason1 !== undefined ? reason1 : '',
    label: "Reason",
    multiline: true,
    rows: 2,
    onChange: e => setReason1(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "secondTable",
    style: {
      fontSize: '15px',
      marginBottom: '0px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    colSpan: 5,
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      backgroundColor: '#316FF6',
      color: 'white'
    }
  }, " Salary Information")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Basic wage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Transport allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Food allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Bounce allowances 3%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Other"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    size: "small",
    id: "salary",
    value: salary !== undefined ? salary : '',
    onChange: e => setSalary(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    size: "small",
    id: "basicTransport",
    value: basicTransport !== undefined ? basicTransport : '',
    onChange: e => setBasicTransport(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    size: "small",
    id: "foodBasic",
    value: foodBasic !== undefined ? foodBasic : '',
    onChange: e => setFoodBasic(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    size: "small",
    id: "bounceAllowances",
    value: bounceAllowances !== undefined ? bounceAllowances : '',
    onChange: e => setBounceAllowances(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    size: "small",
    id: "other",
    value: other !== undefined ? other : '',
    onChange: e => setOther(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "bankName",
    label: "Bank Name",
    value: bankName ? bankName : '',
    onChange: e => setBankName(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "bankAccountNumber",
    label: "Bank Account Number",
    value: bankAccountNumber ? bankAccountNumber : '',
    onChange: e => setBankAccountNumber(e.target.value),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    htmlFor: "identifier"
  }, "Identifier"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    id: "identifier",
    value: identifier,
    onChange: e => setIdentifier(e.target.value),
    label: "Identifier"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "Passport"
  }, "Passport"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    value: "National-ID"
  }, "National-ID")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "identifierNumber",
    label: "Identifier Number",
    value: identifierNumber,
    onChange: e => setIdentifierNumber(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_38__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_39__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_37__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_40__.DatePicker, {
    required: true,
    name: "expireDate",
    label: "Identifier Expire Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_41___default()(expireDate),
    onChange: date => setExpireDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "statusMarital"
  }, "Status Marital"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    id: "statusMarital",
    row: true,
    value: statusMarital,
    onChange: e => setStatusMarital(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Single",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null),
    label: "Single"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Married",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null),
    label: "Married"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_49__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Do you want to stop updating employee ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
    onClick: () => navigate('/TewmViewAdmin'),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_49__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_49__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Create Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "department",
    name: "department",
    value: departmentInfo,
    label: "Department",
    onChange: e => setDepartmentInfo(e.target.value),
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
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data successfully Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCloseOpenAutocomplete2,
    className: "btnCustomer"
  }, "Close")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeeUpdateView);

/***/ },

/***/ "./src/js/component/SidebarDashE3.js"
/*!*******************************************!*\
  !*** ./src/js/component/SidebarDashE3.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_SidebarNew_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/SidebarNew.scss */ "./src/js/css/SidebarNew.scss");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/AccountBox.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/AssignmentInd.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/CurrencyExchange.js");
/* harmony import */ var _mui_icons_material_Groups__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Groups */ "./node_modules/@mui/icons-material/Groups.js");
/* harmony import */ var _mui_icons_material_Payment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Payment */ "./node_modules/@mui/icons-material/Payment.js");
/* harmony import */ var _mui_icons_material_Contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Contacts */ "./node_modules/@mui/icons-material/Contacts.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");










function SidebarDashE3() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Rate"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Groups__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Employee"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Payment__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "PayRoll"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "User Account"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Grant Access"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Contacts__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    primary: "Profile"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarDashE3);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRW1wbG95ZWVWaWV3X0VtcGxveWVlVXBkYXRlVmlld19qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiOztBQUVBLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUF1QjtBQUMzRSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBbUI7QUFDN0MsZUFBZSxrQkFBZTtBQUM5QjtBQUNBLENBQUMsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaRDs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyx5QkFBeUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04xQixDQUFtRDtBQUNOO0FBQ2dCO0FBQ3JDO0FBQ0U7QUFDMEI7QUFDc0I7QUFDUjtBQUNkO0FBQ2lRO0FBQ3JQO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNRO0FBQ0E7QUFDYztBQUNJO0FBQ3hDO0FBQ3dCO0FBQ2tDO0FBQzFEO0FBQ3FCO0FBQ29CO0FBQ2E7QUFDaEI7QUFDSjtBQUNsQztBQUM0QjtBQUNDO0FBQytCO0FBQ3ZDO0FBQ2U7QUFDVjtBQUNKO0FBQ0Y7QUFDUTtBQUNRO0FBRzlELElBQU13RSxZQUFZLEdBQUdoRCwwREFBTSxDQUFDaUQsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2hEN0UsMERBQUEsQ0FBQ21DLDhEQUFPLEVBQUE0QyxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01B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aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2suanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9SZW1vdmVDaXJjbGVPdXRsaW5lLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9FbXBsb3llZVZpZXcvRW1wbG95ZWVVcGRhdGVWaWV3LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvY29tcG9uZW50L1NpZGViYXJEYXNoRTMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cInVzZSBjbGllbnRcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcbnZhciBfanN4UnVudGltZSA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtcnVudGltZVwiKTtcbnZhciBfZGVmYXVsdCA9IGV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KSggLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XG4gIGQ6IFwiTTIwIDExSDcuODNsNS41OS01LjU5TDEyIDRsLTggOCA4IDggMS40MS0xLjQxTDcuODMgMTNIMjB6XCJcbn0pLCAnQXJyb3dCYWNrJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNNyAxMXYyaDEwdi0yem01LTlDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJtMCAxOGMtNC40MSAwLTgtMy41OS04LThzMy41OS04IDgtOCA4IDMuNTkgOCA4LTMuNTkgOC04IDhcIlxufSksICdSZW1vdmVDaXJjbGVPdXRsaW5lJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgU2lkZWJhckRhc2hFMyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZWJhckRhc2hFMyc7XHJcbmltcG9ydCAnLi4vLi4vdmlldy5jc3MnO1xyXG5pbXBvcnQgJy4uL0NoYXJ0dmlldy5jc3MnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FjY291bnRDaXJjbGUnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBUYWJsZSwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlSGVhZCwgUGFwZXIsIFRhYmxlQ29udGFpbmVyLCBUZXh0RmllbGQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIFR5cG9ncmFwaHksIEF1dG9jb21wbGV0ZSwgc3R5bGVkLCBCb3gsIEZvcm1MYWJlbCwgUmFkaW9Hcm91cCwgRm9ybUNvbnRyb2xMYWJlbCwgUmFkaW8sIE91dGxpbmVkSW5wdXQsIElucHV0QWRvcm5tZW50LCBNb2RhbCwgQmFja2Ryb3AsIERpdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IEFkZCwgQXJyb3dVcHdhcmRPdXRsaW5lZCwgUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2FuY2VsJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBDbG9zZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5cclxuY29uc3QgTGlnaHRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBCbGFja1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIEVtcGxveWVlVXBkYXRlVmlldygpIHtcclxuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuICBjb25zdCBbam9pbkRhdGUsIHNldEpvaW5EYXRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtlbXBsb3llZU5hbWUsIHNldEVtcGxveWVlTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtcGxveWVlQWRkcmVzcywgc2V0RW1wbG95ZWVBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1wbG95ZWVFbWFpbCwgc2V0RW1wbG95ZWVFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtcGxveWVlUGhvbmUsIHNldEVtcGxveWVlUGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlbXBsb3llZVJvbGUsIHNldEVtcGxveWVlUm9sZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RlcGFydG1lbnQsIHNldERlcGFydG1lbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkYXRlT2ZCaXJ0aCwgc2V0RGF0ZU9mQmlydGhdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtHZW5kZXIsIHNldEdlbmRlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N0YXR1c01hcml0YWwsIHNldFN0YXR1c01hcml0YWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpZGVudGlmaWVyLCBzZXRJZGVudGlmaWVyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaWRlbnRpZmllck51bWJlciwgc2V0SWRlbnRpZmllck51bWJlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2V4cGlyZURhdGUsIHNldEV4cGlyZURhdGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtzYWxhcnksIHNldFNhbGFyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2JhbmtOYW1lLCBzZXRCYW5rTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2JhbmtBY2NvdW50TnVtYmVyLCBzZXRCYW5rQWNjb3VudE51bWJlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW290aGVyLCBzZXRPdGhlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYm91bmNlQWxsb3dhbmNlcywgc2V0Qm91bmNlQWxsb3dhbmNlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZm9vZEJhc2ljLCBzZXRGb29kQmFzaWNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2Jhc2ljVHJhbnNwb3J0LCBzZXRCYXNpY1RyYW5zcG9ydF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZW1wbG95ZWVJZCwgc2V0RW1wbG95ZWVJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtyZWFzb24xLCBzZXRSZWFzb24xXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZWFzb24sIHNldFJlYXNvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdW5pdEluZm8sIHNldFVuaXRJbmZvXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZGVwYXJ0bWVudEluZm8sIHNldERlcGFydG1lbnRJbmZvXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUZldGNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc0l0ZW1Vbml0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZGVwYXJ0bWVudGApXHJcbiAgICAgICAgY29uc3QgY3VycmVudEJyYW5jaCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWxlY3RlZEJyYW5jaCcpIHx8ICdIUSc7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRVbml0cyA9IChyZXNJdGVtVW5pdC5kYXRhPy5kYXRhIHx8IFtdKS5maWx0ZXIoZCA9PiAhZC5icmFuY2hJZCB8fCBkLmJyYW5jaElkID09PSBjdXJyZW50QnJhbmNoKTtcclxuICAgICAgICBzZXRVbml0SW5mbyhmaWx0ZXJlZFVuaXRzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlRmV0Y2goKVxyXG4gIH0sIFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZS8ke2lkfWApXHJcbiAgICAgICAgc2V0Sm9pbkRhdGUocmVzLmRhdGEuZGF0YS5qb2luRGF0ZSk7XHJcbiAgICAgICAgc2V0RW1wbG95ZWVOYW1lKHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lKTtcclxuICAgICAgICBzZXRFbXBsb3llZUlkKHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVJZCk7XHJcbiAgICAgICAgc2V0RW1wbG95ZWVBZGRyZXNzKHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVBZGRyZXNzKTtcclxuICAgICAgICBzZXRFbXBsb3llZUVtYWlsKHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVFbWFpbCk7XHJcbiAgICAgICAgc2V0RW1wbG95ZWVQaG9uZShyZXMuZGF0YS5kYXRhLmVtcGxveWVlUGhvbmUpO1xyXG4gICAgICAgIHNldEVtcGxveWVlUm9sZShyZXMuZGF0YS5kYXRhLmVtcGxveWVlUm9sZSk7XHJcbiAgICAgICAgc2V0RGVwYXJ0bWVudChyZXMuZGF0YS5kYXRhLmRlcGFydG1lbnQpO1xyXG4gICAgICAgIHNldERhdGVPZkJpcnRoKHJlcy5kYXRhLmRhdGEuZGF0ZU9mQmlydGgpO1xyXG4gICAgICAgIHNldEdlbmRlcihyZXMuZGF0YS5kYXRhLkdlbmRlcik7XHJcbiAgICAgICAgc2V0U3RhdHVzTWFyaXRhbChyZXMuZGF0YS5kYXRhLnN0YXR1c01hcml0YWwpO1xyXG4gICAgICAgIHNldElkZW50aWZpZXIocmVzLmRhdGEuZGF0YS5pZGVudGlmaWVyKTtcclxuICAgICAgICBzZXRJZGVudGlmaWVyTnVtYmVyKE51bWJlcihyZXMuZGF0YT8uZGF0YT8uaWRlbnRpZmllck51bWJlciB8fCByZXMuZGF0YT8uaWRlbnRpZmllck51bWJlciB8fCAwKSk7XHJcbiAgICAgICAgc2V0RXhwaXJlRGF0ZShyZXMuZGF0YS5kYXRhLmV4cGlyZURhdGUpO1xyXG4gICAgICAgIHNldFNhbGFyeShyZXMuZGF0YS5kYXRhLnNhbGFyeSk7XHJcbiAgICAgICAgc2V0RGVzY3JpcHRpb24ocmVzLmRhdGEuZGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgc2V0QmFua05hbWUocmVzLmRhdGEuZGF0YS5iYW5rTmFtZSk7XHJcbiAgICAgICAgc2V0QmFua0FjY291bnROdW1iZXIoTnVtYmVyKHJlcy5kYXRhPy5kYXRhPy5iYW5rQWNjb3VudE51bWJlciB8fCByZXMuZGF0YT8uYmFua0FjY291bnROdW1iZXIgfHwgMCkpO1xyXG4gICAgICAgIHNldE90aGVyKHJlcy5kYXRhLmRhdGEub3RoZXIpO1xyXG4gICAgICAgIHNldEJvdW5jZUFsbG93YW5jZXMocmVzLmRhdGEuZGF0YS5ib3VuY2VBbGxvd2FuY2VzKTtcclxuICAgICAgICBzZXRGb29kQmFzaWMocmVzLmRhdGEuZGF0YS5mb29kQmFzaWMpO1xyXG4gICAgICAgIHNldEJhc2ljVHJhbnNwb3J0KHJlcy5kYXRhLmRhdGEuYmFzaWNUcmFuc3BvcnQpO1xyXG4gICAgICAgIHNldFN0YXR1cyhyZXMuZGF0YS5kYXRhLnN0YXR1cyk7XHJcbiAgICAgICAgc2V0UmVhc29uMShyZXMuZGF0YS5kYXRhLnJlYXNvbjEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGVhclVuaXRzID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0RGVwYXJ0bWVudCgnJyk7XHJcbiAgfVxyXG5cclxuICB7LyoqIFJlYXNvbiBNb2RhbCBzdGFydCAqLyB9XHJcblxyXG4gIGNvbnN0IFtvcGVuMiwgc2V0T3BlbjJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuVXBkYXRlUmVhc29uID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbjIodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVVwZGF0ZVJlYXNvbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4yKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGRhdGVDb21tZW50ID0gZGF5anMoRGF0ZS5ub3coKSk7XHJcblxyXG5cclxuICB7LyoqIFJlYXNvbiBNb2RhbCBlbmQgKi8gfVxyXG4gIHsvKiogTG9hZGluZyBTdGFydCAqLyB9XHJcbiAgY29uc3QgW29wZW5CYWNrLCBzZXRPcGVuQmFja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5CYWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbkJhY2sodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQmFjayhmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuQXV0b2NvbXBsZXRlMiwgc2V0T3BlbkF1dG9jb21wbGV0ZTJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbE9wZW5Mb2FkaW5nLCBzZXRNb2RhbE9wZW5Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIgPSAoZSkgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTIodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkF1dG9jb21wbGV0ZTIoZmFsc2UpO1xyXG4gICAgc2V0TW9kYWxPcGVuTG9hZGluZyhmYWxzZSlcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG5cclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0T3BlbjIoZmFsc2UpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG5cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRPcGVuMihmYWxzZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgbmF2aWdhdGUoLTEpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVPcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbE9wZW5Mb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0Q2F0ZWdvcnkgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgZGVwYXJ0bWVudDogZGVwYXJ0bWVudEluZm8sXHJcbiAgICAgIGJyYW5jaElkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VsZWN0ZWRCcmFuY2gnKSB8fCAnSFEnXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLWRlcGFydG1lbnRgLCBkYXRhKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGhhbmRsZU9wZW5Nb2RhbCgpO1xyXG4gICAgICAgIHNldFVuaXRJbmZvKFsuLi51bml0SW5mbywgcmVzLmRhdGEuZGF0YV0pXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KCdBbiBlcnJvciBhcyBPY2N1cicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDcmVhdGVDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiBpZCxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIE1vZGlmeSBFTVBMT1lFRSBFTVAtJyArIFN0cmluZyhlbXBsb3llZUlkKS5wYWRTdGFydCg2LCAnMCcpLFxyXG4gICAgICByZWFzb24sXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IGRhdGVDb21tZW50XHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb24vYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICB7LyoqIExvYWRpbmcgRW5kICovIH1cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgam9pbkRhdGUsXHJcbiAgICAgIGVtcGxveWVlTmFtZSxcclxuICAgICAgZW1wbG95ZWVBZGRyZXNzLFxyXG4gICAgICBlbXBsb3llZUVtYWlsLFxyXG4gICAgICBlbXBsb3llZVBob25lLFxyXG4gICAgICBlbXBsb3llZVJvbGUsXHJcbiAgICAgIGRlcGFydG1lbnQsXHJcbiAgICAgIGRhdGVPZkJpcnRoLFxyXG4gICAgICBHZW5kZXIsXHJcbiAgICAgIHN0YXR1c01hcml0YWwsXHJcbiAgICAgIGlkZW50aWZpZXIsXHJcbiAgICAgIGlkZW50aWZpZXJOdW1iZXIsXHJcbiAgICAgIGV4cGlyZURhdGUsXHJcbiAgICAgIHN0YXR1cyxcclxuICAgICAgcmVhc29uMSxcclxuICAgICAgc2FsYXJ5LFxyXG4gICAgICBkZXNjcmlwdGlvbiwgYmFua0FjY291bnROdW1iZXIsIGJhbmtOYW1lLFxyXG4gICAgICBlbXBsb3llZUlkLCBvdGhlciwgYm91bmNlQWxsb3dhbmNlcywgZm9vZEJhc2ljLCBiYXNpY1RyYW5zcG9ydCwgdXBkYXRlUzogZmFsc2UsXHJcbiAgICAgIGJyYW5jaElkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VsZWN0ZWRCcmFuY2gnKSB8fCAnSFEnXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLWVtcGxveWVlLyR7aWR9YCwgZGF0YSlcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgICBoYW5kbGVDcmVhdGVDb21tZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHVwZGF0ZSBFbXBsb3llZVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW5CYWNrfT5cclxuICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlQWRtaW5WaWV3IG5hbWU9e3VzZXIuZGF0YS51c2VyTmFtZX0gcm9sZT17dXNlci5kYXRhLnJvbGV9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT57dXNlci5kYXRhLnVzZXJOYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZWJhckRhc2hFMyAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogNCB9fSA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZU9wZW5VcGRhdGVSZWFzb259PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0gY29tcG9uZW50PXtQYXBlcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdoNic+RW1wbG95ZWUgSW5mb3JtYXRpb248L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2pvaW5EYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdKb2luIERhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKGpvaW5EYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldEpvaW5EYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZW1wbG95ZWVJZCdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbXBsb3llZSBJZCdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbXBsb3llZUlkICE9PSB1bmRlZmluZWQgPyBlbXBsb3llZUlkIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtcGxveWVlSWQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGlkPSdHZW5kZXInPkdlbmRlcjwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J0dlbmRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtHZW5kZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0R2VuZGVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9J0ZlbWFsZScgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD0nRmVtYWxlJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT0nTWFsZScgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD0nTWFsZScgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdlbXBsb3llZU5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRW1wbG95ZWUgTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbXBsb3llZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtcGxveWVlTmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2RhdGVPZkJpcnRoJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdCaXJ0aCBEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhkYXRlT2ZCaXJ0aCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXREYXRlT2ZCaXJ0aChkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZW1wbG95ZWVBZGRyZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0VtcGxveWVlIEFkZHJlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZWVBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbXBsb3llZUFkZHJlc3MoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZW1wbG95ZWVFbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdFbWFpbCdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbXBsb3llZUVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbXBsb3llZUVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2VtcGxveWVlUGhvbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nUGhvbmUgTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtcGxveWVlUGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtcGxveWVlUGhvbmUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2VtcGxveWVlUm9sZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdHcmFkZSdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbXBsb3llZVJvbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtcGxveWVlUm9sZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGRlcGFydG1lbnQgIT09ICcnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0RlcGFydG1lbnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXBhcnRtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0nYm90dG9tJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJVbml0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXBhcnRtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dW5pdEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsoT3B0aW9uKSA9PiBPcHRpb24uZGVwYXJ0bWVudC50b1VwcGVyQ2FzZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBzZXREZXBhcnRtZW50KG5ld1ZhbHVlLmRlcGFydG1lbnQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFwZXJDb21wb25lbnQ9eyh7IGNoaWxkcmVuLCAuLi5vdGhlciB9KSA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggey4uLm90aGVyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGxlZnQ6ICcwJywgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVPcGVuT3BlbkF1dG9jb21wbGV0ZTIoZSl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfSBvbk1vdXNlRG93bj17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjcnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIE5ldyBEZXBhcnRtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiRGVwYXJ0bWVudFwiIHJlcXVpcmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdzdGF0dXMnPlN0YXR1czwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3N0YXR1cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3N0YXR1cyAhPT0gdW5kZWZpbmVkID8gc3RhdHVzIDogJ3VuZGVmaW5lZCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3RhdHVzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1N0YXR1cydcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRW1wbG95ZWRcIj5FbXBsb3llZDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlN1c3BlbmRlZFwiPlN1c3BlbmRlZDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkZpcmVkXCI+RmlyZWQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJSZXNpZ25cIj5SZXNpZ248L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzICE9PSB1bmRlZmluZWQgJiYgc3RhdHVzICE9PSAnJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtzdGF0dXMgPT09ICdTdXNwZW5kZWQnIHx8IHN0YXR1cyA9PT0gJ0ZpcmVkJyB8fCBzdGF0dXMgPT09ICdSZXNpZ24nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdyZWFzb24xJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3JlYXNvbjEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlYXNvbjEgIT09IHVuZGVmaW5lZCA/IHJlYXNvbjEgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nUmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24xKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzZWNvbmRUYWJsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMTVweCcsIG1hcmdpbkJvdHRvbTogJzBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPXs1fSBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMzE2RkY2JywgY29sb3I6ICd3aGl0ZScgfX0+IFNhbGFyeSBJbmZvcm1hdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5CYXNpYyB3YWdlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5UcmFuc3BvcnQgYWxsb3dhbmNlczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+Rm9vZCBhbGxvd2FuY2VzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5Cb3VuY2UgYWxsb3dhbmNlcyAzJTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+T3RoZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3NhbGFyeSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NhbGFyeSAhPT0gdW5kZWZpbmVkID8gc2FsYXJ5IDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2FsYXJ5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2Jhc2ljVHJhbnNwb3J0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFzaWNUcmFuc3BvcnQgIT09IHVuZGVmaW5lZCA/IGJhc2ljVHJhbnNwb3J0IDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QmFzaWNUcmFuc3BvcnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nZm9vZEJhc2ljJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9vZEJhc2ljICE9PSB1bmRlZmluZWQgPyBmb29kQmFzaWMgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb29kQmFzaWMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nYm91bmNlQWxsb3dhbmNlcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2JvdW5jZUFsbG93YW5jZXMgIT09IHVuZGVmaW5lZCA/IGJvdW5jZUFsbG93YW5jZXMgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCb3VuY2VBbGxvd2FuY2VzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J290aGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17b3RoZXIgIT09IHVuZGVmaW5lZCA/IG90aGVyIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0T3RoZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2JhbmtOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0JhbmsgTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYW5rTmFtZSA/IGJhbmtOYW1lIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJhbmtOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2JhbmtBY2NvdW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0JhbmsgQWNjb3VudCBOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmFua0FjY291bnROdW1iZXIgPyBiYW5rQWNjb3VudE51bWJlciA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCYW5rQWNjb3VudE51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0naWRlbnRpZmllcic+SWRlbnRpZmllcjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2lkZW50aWZpZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpZGVudGlmaWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElkZW50aWZpZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSWRlbnRpZmllcidcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUGFzc3BvcnRcIj5QYXNzcG9ydDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIk5hdGlvbmFsLUlEXCI+TmF0aW9uYWwtSUQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0naWRlbnRpZmllck51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdJZGVudGlmaWVyIE51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpZGVudGlmaWVyTnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJZGVudGlmaWVyTnVtYmVyKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZXhwaXJlRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSWRlbnRpZmllciBFeHBpcmUgRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoZXhwaXJlRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRFeHBpcmVEYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGlkPSdzdGF0dXNNYXJpdGFsJz5TdGF0dXMgTWFyaXRhbDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3N0YXR1c01hcml0YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdHVzTWFyaXRhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0dXNNYXJpdGFsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9J1NpbmdsZScgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD0nU2luZ2xlJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT0nTWFycmllZCcgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD0nTWFycmllZCcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvUmFkaW9Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQmFja31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUJhY2t9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RG8geW91IHdhbnQgdG8gc3RvcCB1cGRhdGluZyBlbXBsb3llZSA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGUgOjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiPiBJZiB5b3Ugc3RvcCB1cGRhdGluZyB3aXRob3V0IHNhdmluZywgYWxsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3Q8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9UZXdtVmlld0FkbWluJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+WWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ObzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW4yfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVXBkYXRlUmVhc29ufVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlUmVhc29ufSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgUmVhc29uIE9mIFVwZGF0aW5nXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBpZD0ncmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdyZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlYXNvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdDb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIEZhaWxlZCB0byBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTJ9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIENyZWF0ZSBEZXBhcnRtZW50XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0Q2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdkZXBhcnRtZW50J1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdkZXBhcnRtZW50J1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVwYXJ0bWVudEluZm99XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdEZXBhcnRtZW50J1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlcGFydG1lbnRJbmZvKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bW9kYWxPcGVuTG9hZGluZ31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU9wZW5BdXRvY29tcGxldGUyfVxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGgyPiBEYXRhIHN1Y2Nlc3NmdWxseSBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VPcGVuQXV0b2NvbXBsZXRlMn0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95ZWVVcGRhdGVWaWV3XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9jc3MvU2lkZWJhck5ldy5zY3NzJ1xyXG5pbXBvcnQgeyBPdXRsZXQsIE5hdkxpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgQWNjb3VudEJveCwgQWxsSW5jbHVzaXZlLCBIb21lLCBBc3NpZ25tZW50SW5kLCBTdXBlcnZpc2VkVXNlckNpcmNsZSwgQ3VycmVuY3lFeGNoYW5nZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3MnO1xyXG5pbXBvcnQgR3JvdXBzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0dyb3Vwcyc7XHJcbmltcG9ydCBQYXltZW50SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1BheW1lbnQnO1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBDb250YWN0c0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Db250YWN0cyc7XHJcbmltcG9ydCB7IExpc3RJdGVtQnV0dG9uLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5mdW5jdGlvbiBTaWRlYmFyRGFzaEUzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8Q3VycmVuY3lFeGNoYW5nZSAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlJhdGVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxHcm91cHNJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRW1wbG95ZWVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxQYXltZW50SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlBheVJvbGxcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8QWNjb3VudEJveCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlVzZXIgQWNjb3VudFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8QXNzaWdubWVudEluZCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkdyYW50IEFjY2Vzc1wiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPENvbnRhY3RzSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlByb2ZpbGVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICB7LyogPGxpIGNsYXNzTmFtZT0nTGlzdHJvd2Rhc2gnID5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL1JvbGVQZXJtaXNzaW9uXCIgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOidub25lJyxcclxuICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4Jywgd2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc0NXB4JywgZmxleFdyYXA6ICdub3dyYXAnLCBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICBmbGV4OiAnd3JhcCcsY29sb3I6ICd3aGl0ZScsIGFsaWduSXRlbXM6J2NlbnRlcicsIG1hcmdpbkxlZnQ6JzIwcHgnLCBnYXA6JzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2ljb24xJz5cclxuICAgICAgICAgICAgICAgICAgICAgPFN1cGVydmlzZWRVc2VyQ2lyY2xlLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSd0aXRsZWxpc3QnPiBSb2xlUGVybWlzc2lvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICA8L2xpPiovfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyRGFzaEUzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VQYXJhbXMiLCJTaWRlYmFyRGFzaEUzIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiRGVsZXRlSWNvbiIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlSGVhZCIsIlBhcGVyIiwiVGFibGVDb250YWluZXIiLCJUZXh0RmllbGQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJUeXBvZ3JhcGh5IiwiQXV0b2NvbXBsZXRlIiwic3R5bGVkIiwiQm94IiwiRm9ybUxhYmVsIiwiUmFkaW9Hcm91cCIsIkZvcm1Db250cm9sTGFiZWwiLCJSYWRpbyIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIk1vZGFsIiwiQmFja2Ryb3AiLCJEaXZpZGVyIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwiQWRkIiwiQXJyb3dVcHdhcmRPdXRsaW5lZCIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJ2NCIsInVzZU5hdmlnYXRlIiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsImRheWpzIiwiQXJyb3dCYWNrIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvYWRlciIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2dvdXQiLCJDbG9zZSIsIk1lc3NhZ2VBZG1pblZpZXciLCJOb3RpZmljYXRpb25WSWV3SW5mbyIsIkxpZ2h0VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiVmlld1Rvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsIkJsYWNrVG9vbHRpcCIsIl9yZWY1IiwiX2V4Y2x1ZGVkMyIsIl9yZWY2Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY3Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWY4Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiRW1wbG95ZWVVcGRhdGVWaWV3IiwiX3VzZVBhcmFtcyIsImlkIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjkiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImpvaW5EYXRlIiwic2V0Sm9pbkRhdGUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInNldEVtcGxveWVlTmFtZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiZW1wbG95ZWVBZGRyZXNzIiwic2V0RW1wbG95ZWVBZGRyZXNzIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJlbXBsb3llZUVtYWlsIiwic2V0RW1wbG95ZWVFbWFpbCIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwiZW1wbG95ZWVQaG9uZSIsInNldEVtcGxveWVlUGhvbmUiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJlbXBsb3llZVJvbGUiLCJzZXRFbXBsb3llZVJvbGUiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwiZGVwYXJ0bWVudCIsInNldERlcGFydG1lbnQiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwiZGF0ZU9mQmlydGgiLCJzZXREYXRlT2ZCaXJ0aCIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJHZW5kZXIiLCJzZXRHZW5kZXIiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4Iiwic3RhdHVzTWFyaXRhbCIsInNldFN0YXR1c01hcml0YWwiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiaWRlbnRpZmllciIsInNldElkZW50aWZpZXIiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwiaWRlbnRpZmllck51bWJlciIsInNldElkZW50aWZpZXJOdW1iZXIiLCJfdXNlU3RhdGUyMyIsIl91c2VTdGF0ZTI0IiwiZXhwaXJlRGF0ZSIsInNldEV4cGlyZURhdGUiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2Iiwic2FsYXJ5Iiwic2V0U2FsYXJ5IiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwiYmFua05hbWUiLCJzZXRCYW5rTmFtZSIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJiYW5rQWNjb3VudE51bWJlciIsInNldEJhbmtBY2NvdW50TnVtYmVyIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsIm90aGVyIiwic2V0T3RoZXIiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2IiwiYm91bmNlQWxsb3dhbmNlcyIsInNldEJvdW5jZUFsbG93YW5jZXMiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwiZm9vZEJhc2ljIiwic2V0Rm9vZEJhc2ljIiwiX3VzZVN0YXRlMzkiLCJfdXNlU3RhdGU0MCIsImJhc2ljVHJhbnNwb3J0Iiwic2V0QmFzaWNUcmFuc3BvcnQiLCJfdXNlU3RhdGU0MSIsIl91c2VTdGF0ZTQyIiwiZW1wbG95ZWVJZCIsInNldEVtcGxveWVlSWQiLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0Iiwic3RhdHVzIiwic2V0U3RhdHVzIiwiX3VzZVN0YXRlNDUiLCJfdXNlU3RhdGU0NiIsInJlYXNvbjEiLCJzZXRSZWFzb24xIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsInJlYXNvbiIsInNldFJlYXNvbiIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJ1bml0SW5mbyIsInNldFVuaXRJbmZvIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsImRlcGFydG1lbnRJbmZvIiwic2V0RGVwYXJ0bWVudEluZm8iLCJoYW5kbGVGZXRjaCIsIl9yZWYwIiwiX3Jlc0l0ZW1Vbml0JGRhdGEiLCJyZXNJdGVtVW5pdCIsImN1cnJlbnRCcmFuY2giLCJmaWx0ZXJlZFVuaXRzIiwiZmlsdGVyIiwiZCIsImJyYW5jaElkIiwiZmV0Y2hEYXRhIiwiX3JlZjEiLCJfcmVzJGRhdGEiLCJfcmVzJGRhdGEyIiwiX3JlcyRkYXRhMyIsIl9yZXMkZGF0YTQiLCJOdW1iZXIiLCJoYW5kbGVDbGVhclVuaXRzIiwiZSIsInByZXZlbnREZWZhdWx0IiwiX3VzZVN0YXRlNTMiLCJfdXNlU3RhdGU1NCIsIm9wZW4yIiwic2V0T3BlbjIiLCJoYW5kbGVPcGVuVXBkYXRlUmVhc29uIiwiaGFuZGxlQ2xvc2VVcGRhdGVSZWFzb24iLCJkYXRlQ29tbWVudCIsIkRhdGUiLCJub3ciLCJfdXNlU3RhdGU1NSIsIl91c2VTdGF0ZTU2Iiwib3BlbkJhY2siLCJzZXRPcGVuQmFjayIsImhhbmRsZU9wZW5CYWNrIiwiaGFuZGxlQ2xvc2VCYWNrIiwiX3VzZVN0YXRlNTciLCJfdXNlU3RhdGU1OCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlNTkiLCJfdXNlU3RhdGU2MCIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlNjEiLCJfdXNlU3RhdGU2MiIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJfdXNlU3RhdGU2MyIsIl91c2VTdGF0ZTY0Iiwib3BlbkF1dG9jb21wbGV0ZTIiLCJzZXRPcGVuQXV0b2NvbXBsZXRlMiIsIl91c2VTdGF0ZTY1IiwiX3VzZVN0YXRlNjYiLCJtb2RhbE9wZW5Mb2FkaW5nIiwic2V0TW9kYWxPcGVuTG9hZGluZyIsImhhbmRsZU9wZW5PcGVuQXV0b2NvbXBsZXRlMiIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZUNsb3NlT3BlbkF1dG9jb21wbGV0ZTIiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZUVycm9yIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbG9zZUVycm9yIiwiaGFuZGxlT3Blbk1vZGFsIiwiaGFuZGxlU3VibWl0Q2F0ZWdvcnkiLCJfcmVmMTAiLCJwb3N0IiwiYWxlcnQiLCJfeCIsImhhbmRsZUNyZWF0ZUNvbW1lbnQiLCJfcmVmMTEiLCJpZEluZm8iLCJwZXJzb24iLCJTdHJpbmciLCJwYWRTdGFydCIsImRhdGVOb3RpZmljYXRpb24iLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJfcmVmMTIiLCJ1cGRhdGVTIiwicHV0IiwiX3gyIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwib25DbGljayIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93IiwibmFtZSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwicGFkZGluZyIsIml0ZW0iLCJ4cyIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsInJlcXVpcmVkIiwibGFiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZGF0ZSIsImZvcm1hdCIsInVuZGVmaW5lZCIsInRhcmdldCIsInJvdyIsImNvbnRyb2wiLCJnYXAiLCJ0aXRsZSIsInBsYWNlbWVudCIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIk9wdGlvbiIsInRvVXBwZXJDYXNlIiwibmV3VmFsdWUiLCJQYXBlckNvbXBvbmVudCIsIl9yZWYxMyIsImNoaWxkcmVuIiwiX2V4Y2x1ZGVkNCIsIm1hcmdpblRvcCIsImRpc2FibGVkIiwib25Nb3VzZURvd24iLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsImh0bWxGb3IiLCJtdWx0aWxpbmUiLCJyb3dzIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyIiwiY29sU3BhbiIsInNpemUiLCJvbkNsb3NlIiwiZmxvYXQiLCJ0ZXh0QWxpZ24iLCJ0eXBlIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0IiwiT3V0bGV0IiwiTmF2TGluayIsInVzZUxvY2F0aW9uIiwiQWNjb3VudEJveCIsIkFsbEluY2x1c2l2ZSIsIkhvbWUiLCJBc3NpZ25tZW50SW5kIiwiU3VwZXJ2aXNlZFVzZXJDaXJjbGUiLCJDdXJyZW5jeUV4Y2hhbmdlIiwiU2V0dGluZ3NJY29uIiwiR3JvdXBzSWNvbiIsIlBheW1lbnRJY29uIiwiRGFzaGJvYXJkSWNvbiIsIkNvbnRhY3RzSWNvbiIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwibWFrZVN0eWxlcyIsIkZyYWdtZW50IiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=