exports.id = "src_js_AdminView1_PageView_EmployeeView_EmployeePlaningFormUpdate_js";
exports.ids = ["src_js_AdminView1_PageView_EmployeeView_EmployeePlaningFormUpdate_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/ArrowBack.js"
/*!*******************************************************!*\
  !*** ./node_modules/@mui/icons-material/ArrowBack.js ***!
  \*******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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

"use strict";
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

/***/ "./src/js/AdminView1/PageView/EmployeeView/EmployeePlaningFormUpdate.js"
/*!******************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EmployeeView/EmployeePlaningFormUpdate.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_SidebarDashE3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/SidebarDashE3 */ "./src/js/component/SidebarDashE3.js");
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var style__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! style */ "./node_modules/style/style.js");
/* harmony import */ var style__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(style__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
var _excluded = ["className"],
  _excluded2 = ["className"];
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









































var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_19__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_20__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_24__["default"], {
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
function EmployeePlaningFormUpdate() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_32__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_32__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_42__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_42__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__.setUser)({
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__.logOut)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    planing = _useState4[0],
    setPlaning = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    planingDate = _useState6[0],
    setPlaningDate = _useState6[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    inputValueProject = _React$useState4[0],
    setInputValueProject = _React$useState4[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    employeeAttendance = _useState8[0],
    setEmployeeAttendance = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    employee = _useState0[0],
    setEmployee = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    projects = _useState10[0],
    setProject = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    employeeName = _useState12[0],
    setEmployeeName = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState14 = _slicedToArray(_useState13, 2),
    projectName = _useState14[0],
    setProjectName = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    dayPayUSd = _useState16[0],
    setDayPayUSd = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    rate = _useState18[0],
    setRate = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    workNumber = _useState20[0],
    setWorkNumber = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    status = _useState22[0],
    setStatus = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    planingDescription = _useState24[0],
    setPlaningDescription = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState26 = _slicedToArray(_useState25, 2),
    planingTask = _useState26[0],
    setPlaningTask = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState28 = _slicedToArray(_useState27, 2),
    employeeID = _useState28[0],
    setEmployeeID = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState30 = _slicedToArray(_useState29, 2),
    reason = _useState30[0],
    setReason = _useState30[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    inputValue2 = _React$useState6[0],
    setInputValue2 = _React$useState6[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState32 = _slicedToArray(_useState31, 2),
    maintenance = _useState32[0],
    setMaintenance = _useState32[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/get-planing/").concat(id));
          setPlaningDate(res.data.data.planingDate);
          setEmployeeName(res.data.data.employeeName);
          setProjectName(res.data.data.projectName);
          setStatus(res.data.data.status);
          setPlaningDescription(res.data.data.planingDescription);
          setPlaningTask(res.data.data.planingTask);
          setReason(res.data.data.reason);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchData();
  }, [id]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchEmployee = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        try {
          var _resProject$data, _resMaintenance$data, _resPRate$data, _res$data;
          var resProject = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/projects"));
          setProject((_resProject$data = resProject.data) === null || _resProject$data === void 0 || (_resProject$data = _resProject$data.data) === null || _resProject$data === void 0 ? void 0 : _resProject$data.filter(row => row.status === 'On-Going').reverse());
          var resMaintenance = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/maintenance?summary=true"));
          setMaintenance((_resMaintenance$data = resMaintenance.data) === null || _resMaintenance$data === void 0 || (_resMaintenance$data = _resMaintenance$data.data) === null || _resMaintenance$data === void 0 ? void 0 : _resMaintenance$data.filter(row => row.status === "Open"));
          var resPRate = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/paymentRate"));
          (((_resPRate$data = resPRate.data) === null || _resPRate$data === void 0 ? void 0 : _resPRate$data.data) || []).map(row => setRate(row.paymentRate));
          var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/employeeattendance"));
          setEmployeeAttendance((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.filter(row => row.observation === 'P' && dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row.timeIn).format('DD/MM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_37___default()(planingDate).format('DD/MM/YYYY')).map(row2 => ({
            ID: row2.id,
            Name: row2.name
          })));
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchEmployee() {
        return _ref9.apply(this, arguments);
      };
    }();
    fetchEmployee();
  }, [planingDate]);
  var handleClear = () => {
    setEmployeeName("");
  };
  var handleClearProject = () => {
    setProjectName(null);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _employeeResponse$dat;
          var employeeResponse = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/employee"));
          setEmployee((_employeeResponse$dat = employeeResponse.data) === null || _employeeResponse$dat === void 0 || (_employeeResponse$dat = _employeeResponse$dat.data) === null || _employeeResponse$dat === void 0 ? void 0 : _employeeResponse$dat.filter(row => {
            var _row$department;
            return ((_row$department = row.department) === null || _row$department === void 0 ? void 0 : _row$department.toUpperCase()) !== 'FACTORY' && (employeeAttendance === null || employeeAttendance === void 0 ? void 0 : employeeAttendance.find(row2 => row2.ID === row._id));
          }));
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchData() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchData();
  }, [employeeAttendance]);
  var handleChangeEmployee = newValue => {
    var selectedOptions = employee.find(option => option === newValue);
    setEmployeeName(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.employeeName);
    setEmployeeID(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id);
    var dayPay = parseFloat(((selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.salary) + (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.basicTransport) + (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.foodBasic) + (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.bounceAllowances) + (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.other)) / 26).toFixed(2);
    setDayPayUSd(parseFloat(dayPay / rate).toFixed(2));
  };
  var handlePlanningDateChange = date => {
    setPlaningDate(date);
    setEmployeeName('');
    setEmployeeID('');
  };
  var handleChangeProject = newValue => {
    var selectedOptions = projects.find(option => option === newValue);
    setProjectName({
      _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      name: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.projectName
    });
  };
  var handleChangeService = newValue => {
    var selectedOptions = maintenance.find(option => option === newValue);
    setProjectName({
      _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      name: (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.serviceName) + ' / ' + (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.customerName.customerName)
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (status === "Full-Day") {
      setWorkNumber(1);
    } else if (status === "Half-Day") {
      setWorkNumber(0.5);
    } else {
      var numberHour = status / 10;
      setWorkNumber(numberHour);
    }
  }, [status, employeeID, planingDate]);
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    loading = _useState34[0],
    setLoading = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    loadingOpenModal = _useState36[0],
    setLoadingOpenModal = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    ErrorOpenModal = _useState38[0],
    setErrorOpenModal = _useState38[1];
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
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* () {
      var data = {
        idInfo: id,
        person: user.data.userName + ' Update Assignment',
        reason: 'For ' + employeeName + ' on ' + dayjs__WEBPACK_IMPORTED_MODULE_37___default()(planingDate).format('DD/MM/YYYY'),
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref1.apply(this, arguments);
    };
  }();
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState40 = _slicedToArray(_useState39, 2),
    saving = _useState40[0],
    setSaving = _useState40[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var data = {
        projectName,
        workNumber,
        status,
        planingDescription,
        planingTask,
        reason
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_29__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/update-planing/").concat(id), data);
        if (res) {
          handleCreateNotification();
          handleOpen();
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x) {
      return _ref10.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_23__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_27__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Today's Planing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_38__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_48__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_47__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_44__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_22__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_28__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_25__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDashE3__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_22__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_26__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmit
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
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_34__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_35__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_33__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_36__.DatePicker, {
    required: true,
    name: "expireDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_37___default()(planingDate),
    onChange: date => handlePlanningDateChange(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, employeeName !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '80px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    multiline: true,
    label: "Employee Name",
    value: employeeName,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disabled: true,
    onClick: handleClear
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disableClearable: true,
    options: employee,
    getOptionLabel: option => option.employeeName,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
      sx: {
        backgroundColor: '#f2f2f2'
      }
    }), option.employeeName),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, params, {
      required: true
    })),
    onChange: (e, newValue) => handleChangeEmployee(newValue),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "reason"
  }, "Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: true,
    id: "reason",
    value: reason !== undefined ? reason : '',
    onChange: e => setReason(e.target.value),
    name: "reason",
    label: "Reason"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Project"
  }, "Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Maintenance"
  }, "Maintenance")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 8
  }, reason === 'Project' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, projectName !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '80px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "Project Name",
    value: projectName.name !== undefined ? projectName.name : '',
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleClearProject
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    options: projects,
    getOptionLabel: option => option.projectName,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], props, " ", option.customerName.customerName, " | ", option.projectName, " | ", option.description),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, params, {
      label: "Project Name"
    })),
    onChange: (e, newValue) => handleChangeProject(newValue ? newValue : 0),
    inputValue: inputValueProject,
    onInputChange: (event, newInputValue) => {
      setInputValueProject(newInputValue);
    },
    filterOptions: (options, _ref11) => {
      var inputValue = _ref11.inputValue;
      return options.filter(option => option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) || option.projectName.toLowerCase().includes(inputValue.toLowerCase()) || option.description.toLowerCase().includes(inputValue.toLowerCase()));
    },
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), reason === 'Maintenance' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, projectName !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '80px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "Project Name",
    value: projectName.name !== undefined ? projectName.name : '',
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleClearProject
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    options: maintenance,
    getOptionLabel: option => option.serviceName,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], props, " ", option.customerName.customerName, " | ", option.serviceName),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, params, {
      label: "Maintenance Number"
    })),
    onChange: (e, newValue) => handleChangeService(newValue ? newValue : ''),
    inputValue: inputValue2,
    onInputChange: (event, newInputValue) => {
      setInputValue2(newInputValue);
    },
    filterOptions: (options, _ref12) => {
      var inputValue = _ref12.inputValue;
      return options.filter(option => option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) || option.serviceName.toLowerCase().includes(inputValue.toLowerCase()));
    },
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "unit"
  }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: true,
    id: "status",
    value: status,
    onChange: e => setStatus(e.target.value),
    name: "status",
    label: "Status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "1"
  }, "1H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "2"
  }, "2H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "3"
  }, "3H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "4"
  }, "4H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Half-Day"
  }, "Half-Day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "6"
  }, "6H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "7"
  }, "7H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "8"
  }, "8H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "9"
  }, "9H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Full-Day"
  }, "Full-Day")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "planingTask",
    name: "planingTask",
    multiline: true,
    rows: 4,
    value: planingTask,
    label: "Task",
    onChange: e => setPlaningTask(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "planingDescription",
    name: "planingDescription",
    multiline: true,
    rows: 4,
    value: planingDescription,
    label: "Description",
    onChange: e => setPlaningDescription(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, "Saving..."))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_45__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Do you want to stop creating Attendance ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop creating without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate('/TewmViewAdmin'),
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
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_16__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_41__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_39__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Updated successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_16__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_41__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_40__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeePlaningFormUpdate);

/***/ },

/***/ "./src/js/component/SidebarDashE3.js"
/*!*******************************************!*\
  !*** ./src/js/component/SidebarDashE3.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ },

/***/ "./node_modules/style/error.js"
/*!*************************************!*\
  !*** ./node_modules/style/error.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {

var style = __webpack_require__(/*! ./ */ "./node_modules/style/style.js");

exports.printError = printError
function printError(error){
  colourError(error,false)
}

exports.parseStackLine = parseStackLine
function parseStackLine (row){
  var regex = /^\s*?at\s+([\w\.\-\_\<\>]*)?\s*\(?([\[\ \]\/\-\_\w\.]+)/g //
      lines = /.*?\:(\d+)\:(\d+)/
    , m = regex.exec(row)
    , ln = lines.exec(row)
    , line = {}
  if (m){
   line = { function: m[1]
    , file: m[2]
    , line: (ln ? 1 * ln[1] : undefined)
    , column:  (ln ? 1 * ln[2] : undefined) } } 
    
  line.unmatched = row
  return line    
}

exports.parseError = parseError
function parseError(error){
  var obj

/*  if(!error)
    return style('' + error).red
*/
  obj = 
    { name: ('object' == typeof error && error != null) ? (error.name || error.constructor.name) : 'thrown'
    }
    if(error && error.stack){
      var stack = stackStr = error.stack.split("\n")
      obj.stack = stack.map(parseStackLine)
    } else {
      obj.message = (error && error.message) || '' + error 
      obj.stack = [{unmatched: '[no stack trace]'}] // same format as a propper error, so printing is easy
    }
  return obj
}

exports.styleError = colourError
function colourError(error,enable){
  
  style = style.enable(enable === false ? false : true)
  var s = parsed = parseError(error)
  
  s = style(parsed.name).red.bold + ": " + (parsed.message ? style(parsed.message).yellow.bold : "")
  s += "\n"
  s += parsed.stack.map(function (row){
    if(row.file){
      var file = row.file.replace(process.env.NODE_PATH,'$')

      return style(style(" " + row.function).yellow.rpad(30,style('.').grey)
          + " "
          + style(file).white.bold).rpad(70,style('.').grey)
        + style(row.line || '?').lpad(3,style('.').grey).cyan
        + ":"
        + style(row.column || '?').lpad(3,style('.').grey).magenta
    }
    return (row.unmatched)
  }).join("\n") + "\n" //+ end
  
  //console.log(s)
  return s
}


/***/ },

/***/ "./node_modules/style/style.js"
/*!*************************************!*\
  !*** ./node_modules/style/style.js ***!
  \*************************************/
(module, exports, __webpack_require__) {

/*
style.js 

Copyright (c) 2010 Alexis Sellier (cloudhead) , Marak Squires, Dominic Tarr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

this is based on colors.js by Alexis Sellier (cloudhead) & Marak Squires

*/

exports = module.exports = style
exports.error = __webpack_require__(/*! ./error */ "./node_modules/style/error.js")

function style(string){
  return new Styled(string)
}
function unstyled(string){
  var styled = new Styled(string)
  styled.enable = false
  return styled 
}
unstyled.enable = style.enable = function (on){
  return on ? style : unstyled
}

exports.stylize = stylize
function stylize(str, style) {
  if(style == 'rainbow'){
    var rainbowcolors = ['red','yellow','green','blue','magenta']; //RoY G BiV
    var exploded = str.split("");
    var i=0;
    exploded = exploded.map(function(letter) {
      if (letter==" ") {
        return letter;
      } 
      else {
        return stylize(letter,rainbowcolors[i++ % rainbowcolors.length]);
      }
    });
    return exploded.join("");

  }

  return '\033[' + styles[style][0] + 'm' + str +
         '\033[' + styles[style][1] + 'm';
};

function Styled (_string){
  var string = _string
    , _lpad = 0
    , _rpad = 0
    , _rc = ' '
    , _lc = ' '
  this.styles = []
  this.enable = true
  this.__defineGetter__('length',function (){
    return _lpad + (destyle("" + string).length) + _rpad
  })
  this.__defineSetter__('_string',function (s){
    return string = s
  })
  this.__defineGetter__('_string',function (s){
    return string
  })
  this.__defineGetter__('to_s',function (){
    return this.toString()
  })
  this.__defineGetter__('styler',function (){
    var self = this
    return function (x,off){
      var _string = string
        , _enable = self.enable
        self.enable = !off
      string = x
      var toReturn = self.toString()
      string = _string
      this.enable = _enable
      return toReturn
    }
  })
  this.toString = toString
  function pad(l,c){
    var pad = ''
      , _c = c
    if(_c instanceof Styled) // make pad aware of style, and not duplicate the characters too much!
      c = _c._string
    for(var i = 0; i < l; i ++) { pad += c }
    if(_c instanceof Styled){
      _c._string = pad
      return _c
      }
    
    return pad
  }
  function toString(){
    var newString = string
  
    if(this.enable)
    this.styles.forEach(function (style){
      newString = stylize(newString,style)
    })
  
    return pad(_lpad,_lc) + newString + pad(_rpad,_rc)
  }
  this.lpad = lpad
  this.rpad = rpad
  
  function lpad (pad,c){
    _lpad = this.length < pad ? _lpad = pad - this.length : 0
    _lc = c || _lc
    return this
  }
  function rpad (pad,c){
    _rpad = this.length < pad ? _rpad = pad - this.length : 0
    _rc = c || _rc 
    return this
  }
}

var styles = {
  //styles
  'bold'      : [1,  22],
  'italic'    : [3,  23],
  'underline' : [4,  24],
  'inverse'   : [7,  27],
  //grayscale
  'white'     : [37, 39],
  'grey'      : [90, 39],
  'black'     : [90, 39],
  //colors
  'blue'      : [34, 39],
  'cyan'      : [36, 39],
  'green'     : [32, 39],
  'magenta'   : [35, 39],
  'red'       : [31, 39],
  'yellow'    : [33, 39],
  };

exports.styles = Object.keys(styles).concat(['rainbow'])
exports.styles.forEach(function (style) {
  Object.defineProperty(Styled.prototype, style, {
    get: function () {
    this.styles.push(style)
    return this
    }
  });
});
var code = /\u001b\[\d+m/g

exports.destyle = destyle 
function destyle (s){
  return ("" + s).replace(code,'')
}


/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRW1wbG95ZWVWaWV3X0VtcGxveWVlUGxhbmluZ0Zvcm1VcGRhdGVfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLGdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pEOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLHlCQUF5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjFCLENBQW1EO0FBQ1U7QUFDckM7QUFDRTtBQUMwQjtBQUNzQjtBQUNSO0FBQ2Q7QUFDMlE7QUFDL1A7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ1E7QUFDQTtBQUNjO0FBQ0k7QUFDeEM7QUFDd0I7QUFDa0M7QUFDMUQ7QUFDZ0M7QUFDUztBQUNhO0FBQ2hCO0FBQ0o7QUFDbEM7QUFDNEI7QUFDUTtBQUNWO0FBQ0w7QUFDUTtBQUMrQjtBQUN0QztBQUNGO0FBQ2hCO0FBQ3dCO0FBQ1E7QUFDYTtBQUczRSxJQUFNNkUsWUFBWSxHQUFHdEQsMERBQU0sQ0FBQ3VELElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNoRGxGLDBEQUFBLENBQUNtQyw4REFBTyxFQUFBaUQsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9B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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsbUZBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixPQUFPLFFBQVE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7O0FBRUEsZUFBZTtBQUNmO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2suanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9SZW1vdmVDaXJjbGVPdXRsaW5lLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9FbXBsb3llZVZpZXcvRW1wbG95ZWVQbGFuaW5nRm9ybVVwZGF0ZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL2NvbXBvbmVudC9TaWRlYmFyRGFzaEUzLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvc3R5bGUvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS9zdHlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNMjAgMTFINy44M2w1LjU5LTUuNTlMMTIgNGwtOCA4IDggOCAxLjQxLTEuNDFMNy44MyAxM0gyMHpcIlxufSksICdBcnJvd0JhY2snKTsiLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk03IDExdjJoMTB2LTJ6bTUtOUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMm0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOFwiXG59KSwgJ1JlbW92ZUNpcmNsZU91dGxpbmUnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXJEYXNoRTMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoRTMnO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgVGFibGUsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUhlYWQsIFBhcGVyLCBUYWJsZUNvbnRhaW5lciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBBdXRvY29tcGxldGUsIHN0eWxlZCwgQm94LCBGb3JtTGFiZWwsIFJhZGlvR3JvdXAsIEZvcm1Db250cm9sTGFiZWwsIFJhZGlvLCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgTW9kYWwsIEJhY2tkcm9wLCBEaXZpZGVyLCBUYWJsZVJvdyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgQWRkLCBBcnJvd1Vwd2FyZE91dGxpbmVkLCBSZW1vdmVDaXJjbGVPdXRsaW5lIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IHY0IH0gZnJvbSAndXVpZCc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgRGVtb0NvbnRhaW5lciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvaW50ZXJuYWxzL2RlbW8nO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvTG9jYWxpemF0aW9uUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBBZGFwdGVyRGF5anMgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0FkYXB0ZXJEYXlqcyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0RhdGVQaWNrZXInO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgQXJyb3dCYWNrIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCB7IGVycm9yIH0gZnJvbSAnc3R5bGUnO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuaW1wb3J0IHsgRGF0ZVRpbWVGaWVsZCwgVGltZUZpZWxkLCBUaW1lUGlja2VyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycyc7XHJcblxyXG5cclxuY29uc3QgTGlnaHRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgQmxhY2tUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEVtcGxveWVlUGxhbmluZ0Zvcm1VcGRhdGUoKSB7XHJcbiAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKCk7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICBjb25zdCBbb3BlbkJhY2ssIHNldE9wZW5CYWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVPcGVuQmFjayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW5CYWNrKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VCYWNrID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkJhY2soZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgW3BsYW5pbmcsIHNldFBsYW5pbmddID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3BsYW5pbmdEYXRlLCBzZXRQbGFuaW5nRGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgcmV0dXJuIGRhdGVcclxuICB9KTtcclxuICBjb25zdCBbaW5wdXRWYWx1ZVByb2plY3QsIHNldElucHV0VmFsdWVQcm9qZWN0XSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZW1wbG95ZWVBdHRlbmRhbmNlLCBzZXRFbXBsb3llZUF0dGVuZGFuY2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtlbXBsb3llZSwgc2V0RW1wbG95ZWVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2VtcGxveWVlTmFtZSwgc2V0RW1wbG95ZWVOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtkYXlQYXlVU2QsIHNldERheVBheVVTZF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbd29ya051bWJlciwgc2V0V29ya051bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3BsYW5pbmdEZXNjcmlwdGlvbiwgc2V0UGxhbmluZ0Rlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwbGFuaW5nVGFzaywgc2V0UGxhbmluZ1Rhc2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2VtcGxveWVlSUQsIHNldEVtcGxveWVlSURdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbnB1dFZhbHVlMiwgc2V0SW5wdXRWYWx1ZTJdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttYWludGVuYW5jZSwgc2V0TWFpbnRlbmFuY2VdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1wbGFuaW5nLyR7aWR9YClcclxuICAgICAgICBzZXRQbGFuaW5nRGF0ZShyZXMuZGF0YS5kYXRhLnBsYW5pbmdEYXRlKTtcclxuICAgICAgICBzZXRFbXBsb3llZU5hbWUocmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWUpO1xyXG4gICAgICAgIHNldFByb2plY3ROYW1lKHJlcy5kYXRhLmRhdGEucHJvamVjdE5hbWUpO1xyXG4gICAgICAgIHNldFN0YXR1cyhyZXMuZGF0YS5kYXRhLnN0YXR1cyk7XHJcbiAgICAgICAgc2V0UGxhbmluZ0Rlc2NyaXB0aW9uKHJlcy5kYXRhLmRhdGEucGxhbmluZ0Rlc2NyaXB0aW9uKTtcclxuICAgICAgICBzZXRQbGFuaW5nVGFzayhyZXMuZGF0YS5kYXRhLnBsYW5pbmdUYXNrKTtcclxuICAgICAgICBzZXRSZWFzb24ocmVzLmRhdGEuZGF0YS5yZWFzb24pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKVxyXG4gIH0sIFtpZF0pXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hFbXBsb3llZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNQcm9qZWN0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcHJvamVjdHNgKVxyXG4gICAgICAgIHNldFByb2plY3QocmVzUHJvamVjdC5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnN0YXR1cyA9PT0gJ09uLUdvaW5nJykucmV2ZXJzZSgpKTtcclxuICAgICAgICBjb25zdCByZXNNYWludGVuYW5jZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L21haW50ZW5hbmNlP3N1bW1hcnk9dHJ1ZWApXHJcbiAgICAgICAgc2V0TWFpbnRlbmFuY2UocmVzTWFpbnRlbmFuY2UuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5zdGF0dXMgPT09IFwiT3BlblwiKSk7XHJcbiAgICAgICAgY29uc3QgcmVzUFJhdGUgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wYXltZW50UmF0ZWApO1xyXG4gICAgICAgIChyZXNQUmF0ZS5kYXRhPy5kYXRhIHx8IFtdKS5tYXAoKHJvdykgPT4gc2V0UmF0ZShyb3cucGF5bWVudFJhdGUpKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9lbXBsb3llZWF0dGVuZGFuY2VgKVxyXG4gICAgICAgIHNldEVtcGxveWVlQXR0ZW5kYW5jZShyZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5vYnNlcnZhdGlvbiA9PT0gJ1AnICYmIGRheWpzKHJvdy50aW1lSW4pLmZvcm1hdCgnREQvTU0vWVlZWScpID09PSBkYXlqcyhwbGFuaW5nRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJykpLm1hcCgocm93MikgPT4gKHtcclxuICAgICAgICAgIElEOiByb3cyLmlkLFxyXG4gICAgICAgICAgTmFtZTogcm93Mi5uYW1lLFxyXG4gICAgICAgIH0pKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hFbXBsb3llZSgpXHJcbiAgfSwgW3BsYW5pbmdEYXRlXSlcclxuICBjb25zdCBoYW5kbGVDbGVhciA9ICgpID0+IHtcclxuICAgIHNldEVtcGxveWVlTmFtZShcIlwiKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xlYXJQcm9qZWN0ID0gKCkgPT4ge1xyXG4gICAgc2V0UHJvamVjdE5hbWUobnVsbCk7XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZW1wbG95ZWVSZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2VtcGxveWVlYClcclxuICAgICAgICBzZXRFbXBsb3llZShlbXBsb3llZVJlc3BvbnNlLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuZGVwYXJ0bWVudD8udG9VcHBlckNhc2UoKSAhPT0gJ0ZBQ1RPUlknICYmIGVtcGxveWVlQXR0ZW5kYW5jZT8uZmluZCgocm93MikgPT4gcm93Mi5JRCA9PT0gcm93Ll9pZCkpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbZW1wbG95ZWVBdHRlbmRhbmNlXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRW1wbG95ZWUgPSAobmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IGVtcGxveWVlLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uID09PSBuZXdWYWx1ZSlcclxuICAgIHNldEVtcGxveWVlTmFtZShzZWxlY3RlZE9wdGlvbnM/LmVtcGxveWVlTmFtZSk7XHJcbiAgICBzZXRFbXBsb3llZUlEKHNlbGVjdGVkT3B0aW9ucz8uX2lkKVxyXG4gICAgY29uc3QgZGF5UGF5ID0gcGFyc2VGbG9hdCgoc2VsZWN0ZWRPcHRpb25zPy5zYWxhcnkgKyBzZWxlY3RlZE9wdGlvbnM/LmJhc2ljVHJhbnNwb3J0ICsgc2VsZWN0ZWRPcHRpb25zPy5mb29kQmFzaWMgKyBzZWxlY3RlZE9wdGlvbnM/LmJvdW5jZUFsbG93YW5jZXMgKyBzZWxlY3RlZE9wdGlvbnM/Lm90aGVyKSAvIDI2KS50b0ZpeGVkKDIpXHJcbiAgICBzZXREYXlQYXlVU2QocGFyc2VGbG9hdChkYXlQYXkgLyByYXRlKS50b0ZpeGVkKDIpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVQbGFubmluZ0RhdGVDaGFuZ2UgPSAoZGF0ZSkgPT4ge1xyXG4gICAgc2V0UGxhbmluZ0RhdGUoZGF0ZSk7XHJcbiAgICBzZXRFbXBsb3llZU5hbWUoJycpO1xyXG4gICAgc2V0RW1wbG95ZWVJRCgnJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VQcm9qZWN0ID0gKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBwcm9qZWN0cy5maW5kKChvcHRpb24pID0+IG9wdGlvbiA9PT0gbmV3VmFsdWUpXHJcbiAgICBzZXRQcm9qZWN0TmFtZSh7XHJcbiAgICAgIF9pZDogc2VsZWN0ZWRPcHRpb25zPy5faWQsXHJcbiAgICAgIG5hbWU6IHNlbGVjdGVkT3B0aW9ucz8ucHJvamVjdE5hbWVcclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VTZXJ2aWNlID0gKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBtYWludGVuYW5jZS5maW5kKChvcHRpb24pID0+IG9wdGlvbiA9PT0gbmV3VmFsdWUpXHJcbiAgICBzZXRQcm9qZWN0TmFtZSh7XHJcbiAgICAgIF9pZDogc2VsZWN0ZWRPcHRpb25zPy5faWQsXHJcbiAgICAgIG5hbWU6IHNlbGVjdGVkT3B0aW9ucz8uc2VydmljZU5hbWUgKyAnIC8gJyArIHNlbGVjdGVkT3B0aW9ucz8uY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHN0YXR1cyA9PT0gXCJGdWxsLURheVwiKSB7XHJcbiAgICAgIHNldFdvcmtOdW1iZXIoMSlcclxuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBcIkhhbGYtRGF5XCIpIHtcclxuICAgICAgc2V0V29ya051bWJlcigwLjUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBudW1iZXJIb3VyID0gc3RhdHVzIC8gMTBcclxuICAgICAgc2V0V29ya051bWJlcihudW1iZXJIb3VyKVxyXG4gICAgfVxyXG4gIH0sIFtzdGF0dXMsIGVtcGxveWVlSUQsIHBsYW5pbmdEYXRlXSlcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRXJyb3JPcGVuTW9kYWwsIHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVjaXNpb24gPSAobmF2aWdhdGUpID0+IHtcclxuICAgIC8vTmF2aWdhdGUgQmFzZWQgb24gdGggRGVjaXNpb25cclxuICAgIGlmIChuYXZpZ2F0ZSA9PT0gJ3ByZXZpb3VzJykge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRlID09PSAnc3RheScpIHtcclxuICAgICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiBpZCxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIFVwZGF0ZSBBc3NpZ25tZW50JyxcclxuICAgICAgcmVhc29uOiAnRm9yICcgKyBlbXBsb3llZU5hbWUgKyAnIG9uICcgKyBkYXlqcyhwbGFuaW5nRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyksXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBbc2F2aW5nLCBzZXRTYXZpbmddID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFNhdmluZygndHJ1ZScpXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBwcm9qZWN0TmFtZSwgd29ya051bWJlcixcclxuICAgICAgc3RhdHVzLCBwbGFuaW5nRGVzY3JpcHRpb24sIHBsYW5pbmdUYXNrLCByZWFzb25cclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1wbGFuaW5nLyR7aWR9YCwgZGF0YSk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oKVxyXG4gICAgICAgIGhhbmRsZU9wZW4oKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgc2V0U2F2aW5nKCcnKVxyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFRvZGF5J3MgUGxhbmluZ1xyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW5CYWNrfT5cclxuICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlQWRtaW5WaWV3IG5hbWU9e3VzZXIuZGF0YS51c2VyTmFtZX0gcm9sZT17dXNlci5kYXRhLnJvbGV9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT57dXNlci5kYXRhLnVzZXJOYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZWJhckRhc2hFMyAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogNCB9fSA+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9IGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdleHBpcmVEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKHBsYW5pbmdEYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBoYW5kbGVQbGFubmluZ0RhdGVDaGFuZ2UoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtcGxveWVlTmFtZSAhPT0gXCJcIiA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc4MHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRW1wbG95ZWUgTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbXBsb3llZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQgb25DbGljaz17aGFuZGxlQ2xlYXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZW1wbG95ZWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5lbXBsb3llZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsIG9wdGlvbikgPT4gKDxCb3ggey4uLnByb3BzfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjJmMmYyJyB9fT57b3B0aW9uLmVtcGxveWVlTmFtZX08L0JveD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCB7Li4ucGFyYW1zfSByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlRW1wbG95ZWUobmV3VmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwicmVhc29uXCI+UmVhc29uPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInJlYXNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29uICE9PSB1bmRlZmluZWQgPyByZWFzb24gOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVhc29uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWFzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZWFzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlByb2plY3RcIj5Qcm9qZWN0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIk1haW50ZW5hbmNlXCI+TWFpbnRlbmFuY2U8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17OH0+XHJcbiAgICAgICAgICAgICAgICAgIHtyZWFzb24gPT09ICdQcm9qZWN0JyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWUgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnODBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJvamVjdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0TmFtZS5uYW1lICE9PSB1bmRlZmluZWQgPyBwcm9qZWN0TmFtZS5uYW1lIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJQcm9qZWN0fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cHJvamVjdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5wcm9qZWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9PiB7b3B0aW9uLmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWV9IHwge29wdGlvbi5wcm9qZWN0TmFtZX0gfCB7b3B0aW9uLmRlc2NyaXB0aW9ufTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJQcm9qZWN0IE5hbWVcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBoYW5kbGVDaGFuZ2VQcm9qZWN0KG5ld1ZhbHVlID8gbmV3VmFsdWUgOiAwKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlPXtpbnB1dFZhbHVlUHJvamVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWVQcm9qZWN0KG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KG9wdGlvbnMsIHsgaW5wdXRWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAge3JlYXNvbiA9PT0gJ01haW50ZW5hbmNlJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE5hbWUgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnODBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJvamVjdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0TmFtZS5uYW1lICE9PSB1bmRlZmluZWQgPyBwcm9qZWN0TmFtZS5uYW1lIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJQcm9qZWN0fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmUgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bWFpbnRlbmFuY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5zZXJ2aWNlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9PiB7b3B0aW9uLmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWV9IHwge29wdGlvbi5zZXJ2aWNlTmFtZX08L0JveD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiTWFpbnRlbmFuY2UgTnVtYmVyXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlU2VydmljZShuZXdWYWx1ZSA/IG5ld1ZhbHVlIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SW5wdXRWYWx1ZTIobmV3SW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucywgeyBpbnB1dFZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2VydmljZU5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJ1bml0XCI+Q2F0ZWdvcnk8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXR1cyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCIxXCI+MUg8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiMlwiPjJIPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIjNcIj4zSDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCI0XCI+NEg8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiSGFsZi1EYXlcIj5IYWxmLURheTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCI2XCI+Nkg8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiN1wiPjdIPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIjhcIj44SDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCI5XCI+OUg8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRnVsbC1EYXlcIj5GdWxsLURheTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGlkPSdwbGFuaW5nVGFzaydcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdwbGFuaW5nVGFzaydcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwbGFuaW5nVGFza31cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nVGFzaydcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBsYW5pbmdUYXNrKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9J3BsYW5pbmdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdwbGFuaW5nRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGxhbmluZ0Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBsYW5pbmdEZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzYXZpbmcgIT09ICd0cnVlJyA/IDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+IDogPHAgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+U2F2aW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5CYWNrfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlQmFja31cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzeD17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5EbyB5b3Ugd2FudCB0byBzdG9wIGNyZWF0aW5nIEF0dGVuZGFuY2UgPyA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlIDo8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj4gSWYgeW91IHN0b3AgY3JlYXRpbmcgd2l0aG91dCBzYXZpbmcsIGFsbCB5b3VyIGNoYW5nZXMgd2lsbCBiZSBsb3N0PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvVGV3bVZpZXdBZG1pbicpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlllczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+Tm88L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBVcGRhdGVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2lzaW9uKCdzdGF5Jyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBBZGQgTmV3XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3ByZXZpb3VzJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIEZhaWxlZCB0byBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVtcGxveWVlUGxhbmluZ0Zvcm1VcGRhdGVcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL2Nzcy9TaWRlYmFyTmV3LnNjc3MnXHJcbmltcG9ydCB7IE91dGxldCwgTmF2TGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyBBY2NvdW50Qm94LCBBbGxJbmNsdXNpdmUsIEhvbWUsIEFzc2lnbm1lbnRJbmQsIFN1cGVydmlzZWRVc2VyQ2lyY2xlLCBDdXJyZW5jeUV4Y2hhbmdlIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5ncyc7XHJcbmltcG9ydCBHcm91cHNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvR3JvdXBzJztcclxuaW1wb3J0IFBheW1lbnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGF5bWVudCc7XHJcbmltcG9ydCBEYXNoYm9hcmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGFzaGJvYXJkJztcclxuaW1wb3J0IENvbnRhY3RzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NvbnRhY3RzJztcclxuaW1wb3J0IHsgTGlzdEl0ZW1CdXR0b24sIExpc3RJdGVtSWNvbiwgTGlzdEl0ZW1UZXh0LCBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmZ1bmN0aW9uIFNpZGViYXJEYXNoRTMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgIDxDdXJyZW5jeUV4Y2hhbmdlIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUmF0ZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcblxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPEdyb3Vwc0ljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJFbXBsb3llZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFBheW1lbnRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUGF5Um9sbFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgIDxBY2NvdW50Qm94IC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiVXNlciBBY2NvdW50XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgIDxBc3NpZ25tZW50SW5kIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiR3JhbnQgQWNjZXNzXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8Q29udGFjdHNJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHJvZmlsZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPSdMaXN0cm93ZGFzaCcgPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvUm9sZVBlcm1pc3Npb25cIiAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246J25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCB3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzQ1cHgnLCBmbGV4V3JhcDogJ25vd3JhcCcsIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgIGZsZXg6ICd3cmFwJyxjb2xvcjogJ3doaXRlJywgYWxpZ25JdGVtczonY2VudGVyJywgbWFyZ2luTGVmdDonMjBweCcsIGdhcDonMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0naWNvbjEnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8U3VwZXJ2aXNlZFVzZXJDaXJjbGUvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3RpdGxlbGlzdCc+IFJvbGVQZXJtaXNzaW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gIDwvbGk+Ki99XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJEYXNoRTMiLCJ2YXIgc3R5bGUgPSByZXF1aXJlKCcuLycpO1xuXG5leHBvcnRzLnByaW50RXJyb3IgPSBwcmludEVycm9yXG5mdW5jdGlvbiBwcmludEVycm9yKGVycm9yKXtcbiAgY29sb3VyRXJyb3IoZXJyb3IsZmFsc2UpXG59XG5cbmV4cG9ydHMucGFyc2VTdGFja0xpbmUgPSBwYXJzZVN0YWNrTGluZVxuZnVuY3Rpb24gcGFyc2VTdGFja0xpbmUgKHJvdyl7XG4gIHZhciByZWdleCA9IC9eXFxzKj9hdFxccysoW1xcd1xcLlxcLVxcX1xcPFxcPl0qKT9cXHMqXFwoPyhbXFxbXFwgXFxdXFwvXFwtXFxfXFx3XFwuXSspL2cgLy9cbiAgICAgIGxpbmVzID0gLy4qP1xcOihcXGQrKVxcOihcXGQrKS9cbiAgICAsIG0gPSByZWdleC5leGVjKHJvdylcbiAgICAsIGxuID0gbGluZXMuZXhlYyhyb3cpXG4gICAgLCBsaW5lID0ge31cbiAgaWYgKG0pe1xuICAgbGluZSA9IHsgZnVuY3Rpb246IG1bMV1cbiAgICAsIGZpbGU6IG1bMl1cbiAgICAsIGxpbmU6IChsbiA/IDEgKiBsblsxXSA6IHVuZGVmaW5lZClcbiAgICAsIGNvbHVtbjogIChsbiA/IDEgKiBsblsyXSA6IHVuZGVmaW5lZCkgfSB9IFxuICAgIFxuICBsaW5lLnVubWF0Y2hlZCA9IHJvd1xuICByZXR1cm4gbGluZSAgICBcbn1cblxuZXhwb3J0cy5wYXJzZUVycm9yID0gcGFyc2VFcnJvclxuZnVuY3Rpb24gcGFyc2VFcnJvcihlcnJvcil7XG4gIHZhciBvYmpcblxuLyogIGlmKCFlcnJvcilcbiAgICByZXR1cm4gc3R5bGUoJycgKyBlcnJvcikucmVkXG4qL1xuICBvYmogPSBcbiAgICB7IG5hbWU6ICgnb2JqZWN0JyA9PSB0eXBlb2YgZXJyb3IgJiYgZXJyb3IgIT0gbnVsbCkgPyAoZXJyb3IubmFtZSB8fCBlcnJvci5jb25zdHJ1Y3Rvci5uYW1lKSA6ICd0aHJvd24nXG4gICAgfVxuICAgIGlmKGVycm9yICYmIGVycm9yLnN0YWNrKXtcbiAgICAgIHZhciBzdGFjayA9IHN0YWNrU3RyID0gZXJyb3Iuc3RhY2suc3BsaXQoXCJcXG5cIilcbiAgICAgIG9iai5zdGFjayA9IHN0YWNrLm1hcChwYXJzZVN0YWNrTGluZSlcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLm1lc3NhZ2UgPSAoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSkgfHwgJycgKyBlcnJvciBcbiAgICAgIG9iai5zdGFjayA9IFt7dW5tYXRjaGVkOiAnW25vIHN0YWNrIHRyYWNlXSd9XSAvLyBzYW1lIGZvcm1hdCBhcyBhIHByb3BwZXIgZXJyb3IsIHNvIHByaW50aW5nIGlzIGVhc3lcbiAgICB9XG4gIHJldHVybiBvYmpcbn1cblxuZXhwb3J0cy5zdHlsZUVycm9yID0gY29sb3VyRXJyb3JcbmZ1bmN0aW9uIGNvbG91ckVycm9yKGVycm9yLGVuYWJsZSl7XG4gIFxuICBzdHlsZSA9IHN0eWxlLmVuYWJsZShlbmFibGUgPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlKVxuICB2YXIgcyA9IHBhcnNlZCA9IHBhcnNlRXJyb3IoZXJyb3IpXG4gIFxuICBzID0gc3R5bGUocGFyc2VkLm5hbWUpLnJlZC5ib2xkICsgXCI6IFwiICsgKHBhcnNlZC5tZXNzYWdlID8gc3R5bGUocGFyc2VkLm1lc3NhZ2UpLnllbGxvdy5ib2xkIDogXCJcIilcbiAgcyArPSBcIlxcblwiXG4gIHMgKz0gcGFyc2VkLnN0YWNrLm1hcChmdW5jdGlvbiAocm93KXtcbiAgICBpZihyb3cuZmlsZSl7XG4gICAgICB2YXIgZmlsZSA9IHJvdy5maWxlLnJlcGxhY2UocHJvY2Vzcy5lbnYuTk9ERV9QQVRILCckJylcblxuICAgICAgcmV0dXJuIHN0eWxlKHN0eWxlKFwiIFwiICsgcm93LmZ1bmN0aW9uKS55ZWxsb3cucnBhZCgzMCxzdHlsZSgnLicpLmdyZXkpXG4gICAgICAgICAgKyBcIiBcIlxuICAgICAgICAgICsgc3R5bGUoZmlsZSkud2hpdGUuYm9sZCkucnBhZCg3MCxzdHlsZSgnLicpLmdyZXkpXG4gICAgICAgICsgc3R5bGUocm93LmxpbmUgfHwgJz8nKS5scGFkKDMsc3R5bGUoJy4nKS5ncmV5KS5jeWFuXG4gICAgICAgICsgXCI6XCJcbiAgICAgICAgKyBzdHlsZShyb3cuY29sdW1uIHx8ICc/JykubHBhZCgzLHN0eWxlKCcuJykuZ3JleSkubWFnZW50YVxuICAgIH1cbiAgICByZXR1cm4gKHJvdy51bm1hdGNoZWQpXG4gIH0pLmpvaW4oXCJcXG5cIikgKyBcIlxcblwiIC8vKyBlbmRcbiAgXG4gIC8vY29uc29sZS5sb2cocylcbiAgcmV0dXJuIHNcbn1cbiIsIi8qXG5zdHlsZS5qcyBcblxuQ29weXJpZ2h0IChjKSAyMDEwIEFsZXhpcyBTZWxsaWVyIChjbG91ZGhlYWQpICwgTWFyYWsgU3F1aXJlcywgRG9taW5pYyBUYXJyXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxudGhpcyBpcyBiYXNlZCBvbiBjb2xvcnMuanMgYnkgQWxleGlzIFNlbGxpZXIgKGNsb3VkaGVhZCkgJiBNYXJhayBTcXVpcmVzXG5cbiovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHN0eWxlXG5leHBvcnRzLmVycm9yID0gcmVxdWlyZSgnLi9lcnJvcicpXG5cbmZ1bmN0aW9uIHN0eWxlKHN0cmluZyl7XG4gIHJldHVybiBuZXcgU3R5bGVkKHN0cmluZylcbn1cbmZ1bmN0aW9uIHVuc3R5bGVkKHN0cmluZyl7XG4gIHZhciBzdHlsZWQgPSBuZXcgU3R5bGVkKHN0cmluZylcbiAgc3R5bGVkLmVuYWJsZSA9IGZhbHNlXG4gIHJldHVybiBzdHlsZWQgXG59XG51bnN0eWxlZC5lbmFibGUgPSBzdHlsZS5lbmFibGUgPSBmdW5jdGlvbiAob24pe1xuICByZXR1cm4gb24gPyBzdHlsZSA6IHVuc3R5bGVkXG59XG5cbmV4cG9ydHMuc3R5bGl6ZSA9IHN0eWxpemVcbmZ1bmN0aW9uIHN0eWxpemUoc3RyLCBzdHlsZSkge1xuICBpZihzdHlsZSA9PSAncmFpbmJvdycpe1xuICAgIHZhciByYWluYm93Y29sb3JzID0gWydyZWQnLCd5ZWxsb3cnLCdncmVlbicsJ2JsdWUnLCdtYWdlbnRhJ107IC8vUm9ZIEcgQmlWXG4gICAgdmFyIGV4cGxvZGVkID0gc3RyLnNwbGl0KFwiXCIpO1xuICAgIHZhciBpPTA7XG4gICAgZXhwbG9kZWQgPSBleHBsb2RlZC5tYXAoZnVuY3Rpb24obGV0dGVyKSB7XG4gICAgICBpZiAobGV0dGVyPT1cIiBcIikge1xuICAgICAgICByZXR1cm4gbGV0dGVyO1xuICAgICAgfSBcbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc3R5bGl6ZShsZXR0ZXIscmFpbmJvd2NvbG9yc1tpKysgJSByYWluYm93Y29sb3JzLmxlbmd0aF0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBleHBsb2RlZC5qb2luKFwiXCIpO1xuXG4gIH1cblxuICByZXR1cm4gJ1xcMDMzWycgKyBzdHlsZXNbc3R5bGVdWzBdICsgJ20nICsgc3RyICtcbiAgICAgICAgICdcXDAzM1snICsgc3R5bGVzW3N0eWxlXVsxXSArICdtJztcbn07XG5cbmZ1bmN0aW9uIFN0eWxlZCAoX3N0cmluZyl7XG4gIHZhciBzdHJpbmcgPSBfc3RyaW5nXG4gICAgLCBfbHBhZCA9IDBcbiAgICAsIF9ycGFkID0gMFxuICAgICwgX3JjID0gJyAnXG4gICAgLCBfbGMgPSAnICdcbiAgdGhpcy5zdHlsZXMgPSBbXVxuICB0aGlzLmVuYWJsZSA9IHRydWVcbiAgdGhpcy5fX2RlZmluZUdldHRlcl9fKCdsZW5ndGgnLGZ1bmN0aW9uICgpe1xuICAgIHJldHVybiBfbHBhZCArIChkZXN0eWxlKFwiXCIgKyBzdHJpbmcpLmxlbmd0aCkgKyBfcnBhZFxuICB9KVxuICB0aGlzLl9fZGVmaW5lU2V0dGVyX18oJ19zdHJpbmcnLGZ1bmN0aW9uIChzKXtcbiAgICByZXR1cm4gc3RyaW5nID0gc1xuICB9KVxuICB0aGlzLl9fZGVmaW5lR2V0dGVyX18oJ19zdHJpbmcnLGZ1bmN0aW9uIChzKXtcbiAgICByZXR1cm4gc3RyaW5nXG4gIH0pXG4gIHRoaXMuX19kZWZpbmVHZXR0ZXJfXygndG9fcycsZnVuY3Rpb24gKCl7XG4gICAgcmV0dXJuIHRoaXMudG9TdHJpbmcoKVxuICB9KVxuICB0aGlzLl9fZGVmaW5lR2V0dGVyX18oJ3N0eWxlcicsZnVuY3Rpb24gKCl7XG4gICAgdmFyIHNlbGYgPSB0aGlzXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh4LG9mZil7XG4gICAgICB2YXIgX3N0cmluZyA9IHN0cmluZ1xuICAgICAgICAsIF9lbmFibGUgPSBzZWxmLmVuYWJsZVxuICAgICAgICBzZWxmLmVuYWJsZSA9ICFvZmZcbiAgICAgIHN0cmluZyA9IHhcbiAgICAgIHZhciB0b1JldHVybiA9IHNlbGYudG9TdHJpbmcoKVxuICAgICAgc3RyaW5nID0gX3N0cmluZ1xuICAgICAgdGhpcy5lbmFibGUgPSBfZW5hYmxlXG4gICAgICByZXR1cm4gdG9SZXR1cm5cbiAgICB9XG4gIH0pXG4gIHRoaXMudG9TdHJpbmcgPSB0b1N0cmluZ1xuICBmdW5jdGlvbiBwYWQobCxjKXtcbiAgICB2YXIgcGFkID0gJydcbiAgICAgICwgX2MgPSBjXG4gICAgaWYoX2MgaW5zdGFuY2VvZiBTdHlsZWQpIC8vIG1ha2UgcGFkIGF3YXJlIG9mIHN0eWxlLCBhbmQgbm90IGR1cGxpY2F0ZSB0aGUgY2hhcmFjdGVycyB0b28gbXVjaCFcbiAgICAgIGMgPSBfYy5fc3RyaW5nXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGw7IGkgKyspIHsgcGFkICs9IGMgfVxuICAgIGlmKF9jIGluc3RhbmNlb2YgU3R5bGVkKXtcbiAgICAgIF9jLl9zdHJpbmcgPSBwYWRcbiAgICAgIHJldHVybiBfY1xuICAgICAgfVxuICAgIFxuICAgIHJldHVybiBwYWRcbiAgfVxuICBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHZhciBuZXdTdHJpbmcgPSBzdHJpbmdcbiAgXG4gICAgaWYodGhpcy5lbmFibGUpXG4gICAgdGhpcy5zdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpe1xuICAgICAgbmV3U3RyaW5nID0gc3R5bGl6ZShuZXdTdHJpbmcsc3R5bGUpXG4gICAgfSlcbiAgXG4gICAgcmV0dXJuIHBhZChfbHBhZCxfbGMpICsgbmV3U3RyaW5nICsgcGFkKF9ycGFkLF9yYylcbiAgfVxuICB0aGlzLmxwYWQgPSBscGFkXG4gIHRoaXMucnBhZCA9IHJwYWRcbiAgXG4gIGZ1bmN0aW9uIGxwYWQgKHBhZCxjKXtcbiAgICBfbHBhZCA9IHRoaXMubGVuZ3RoIDwgcGFkID8gX2xwYWQgPSBwYWQgLSB0aGlzLmxlbmd0aCA6IDBcbiAgICBfbGMgPSBjIHx8IF9sY1xuICAgIHJldHVybiB0aGlzXG4gIH1cbiAgZnVuY3Rpb24gcnBhZCAocGFkLGMpe1xuICAgIF9ycGFkID0gdGhpcy5sZW5ndGggPCBwYWQgPyBfcnBhZCA9IHBhZCAtIHRoaXMubGVuZ3RoIDogMFxuICAgIF9yYyA9IGMgfHwgX3JjIFxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxudmFyIHN0eWxlcyA9IHtcbiAgLy9zdHlsZXNcbiAgJ2JvbGQnICAgICAgOiBbMSwgIDIyXSxcbiAgJ2l0YWxpYycgICAgOiBbMywgIDIzXSxcbiAgJ3VuZGVybGluZScgOiBbNCwgIDI0XSxcbiAgJ2ludmVyc2UnICAgOiBbNywgIDI3XSxcbiAgLy9ncmF5c2NhbGVcbiAgJ3doaXRlJyAgICAgOiBbMzcsIDM5XSxcbiAgJ2dyZXknICAgICAgOiBbOTAsIDM5XSxcbiAgJ2JsYWNrJyAgICAgOiBbOTAsIDM5XSxcbiAgLy9jb2xvcnNcbiAgJ2JsdWUnICAgICAgOiBbMzQsIDM5XSxcbiAgJ2N5YW4nICAgICAgOiBbMzYsIDM5XSxcbiAgJ2dyZWVuJyAgICAgOiBbMzIsIDM5XSxcbiAgJ21hZ2VudGEnICAgOiBbMzUsIDM5XSxcbiAgJ3JlZCcgICAgICAgOiBbMzEsIDM5XSxcbiAgJ3llbGxvdycgICAgOiBbMzMsIDM5XSxcbiAgfTtcblxuZXhwb3J0cy5zdHlsZXMgPSBPYmplY3Qua2V5cyhzdHlsZXMpLmNvbmNhdChbJ3JhaW5ib3cnXSlcbmV4cG9ydHMuc3R5bGVzLmZvckVhY2goZnVuY3Rpb24gKHN0eWxlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHlsZWQucHJvdG90eXBlLCBzdHlsZSwge1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc3R5bGVzLnB1c2goc3R5bGUpXG4gICAgcmV0dXJuIHRoaXNcbiAgICB9XG4gIH0pO1xufSk7XG52YXIgY29kZSA9IC9cXHUwMDFiXFxbXFxkK20vZ1xuXG5leHBvcnRzLmRlc3R5bGUgPSBkZXN0eWxlIFxuZnVuY3Rpb24gZGVzdHlsZSAocyl7XG4gIHJldHVybiAoXCJcIiArIHMpLnJlcGxhY2UoY29kZSwnJylcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhckRhc2hFMyIsIlNlYXJjaEljb24iLCJOb3RpZmljYXRpb25zTm9uZUljb24iLCJBY2NvdW50Q2lyY2xlSWNvbiIsIkRlbGV0ZUljb24iLCJNZW51SXRlbSIsIkdyaWQiLCJJY29uQnV0dG9uIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJQYXBlciIsIlRhYmxlQ29udGFpbmVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsIkF1dG9jb21wbGV0ZSIsInN0eWxlZCIsIkJveCIsIkZvcm1MYWJlbCIsIlJhZGlvR3JvdXAiLCJGb3JtQ29udHJvbExhYmVsIiwiUmFkaW8iLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJNb2RhbCIsIkJhY2tkcm9wIiwiRGl2aWRlciIsIlRhYmxlUm93IiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwiQWRkIiwiQXJyb3dVcHdhcmRPdXRsaW5lZCIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJ2NCIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsImRheWpzIiwiQXJyb3dCYWNrIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkxvYWRlciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJDbG9zZSIsImVycm9yIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiRGF0ZVRpbWVGaWVsZCIsIlRpbWVGaWVsZCIsIlRpbWVQaWNrZXIiLCJMaWdodFRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIkJsYWNrVG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY1Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWY2Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiRW1wbG95ZWVQbGFuaW5nRm9ybVVwZGF0ZSIsIl91c2VQYXJhbXMiLCJpZCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY3IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwib3BlbkJhY2siLCJzZXRPcGVuQmFjayIsImhhbmRsZU9wZW5CYWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VCYWNrIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwbGFuaW5nIiwic2V0UGxhbmluZyIsIl91c2VTdGF0ZTUiLCJkYXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTYiLCJwbGFuaW5nRGF0ZSIsInNldFBsYW5pbmdEYXRlIiwiX1JlYWN0JHVzZVN0YXRlMyIsIl9SZWFjdCR1c2VTdGF0ZTQiLCJpbnB1dFZhbHVlUHJvamVjdCIsInNldElucHV0VmFsdWVQcm9qZWN0IiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJlbXBsb3llZUF0dGVuZGFuY2UiLCJzZXRFbXBsb3llZUF0dGVuZGFuY2UiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsImVtcGxveWVlIiwic2V0RW1wbG95ZWUiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJwcm9qZWN0cyIsInNldFByb2plY3QiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwic2V0RW1wbG95ZWVOYW1lIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsInByb2plY3ROYW1lIiwic2V0UHJvamVjdE5hbWUiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiZGF5UGF5VVNkIiwic2V0RGF5UGF5VVNkIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInJhdGUiLCJzZXRSYXRlIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsIndvcmtOdW1iZXIiLCJzZXRXb3JrTnVtYmVyIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsInN0YXR1cyIsInNldFN0YXR1cyIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJwbGFuaW5nRGVzY3JpcHRpb24iLCJzZXRQbGFuaW5nRGVzY3JpcHRpb24iLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwicGxhbmluZ1Rhc2siLCJzZXRQbGFuaW5nVGFzayIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJlbXBsb3llZUlEIiwic2V0RW1wbG95ZWVJRCIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJyZWFzb24iLCJzZXRSZWFzb24iLCJfUmVhY3QkdXNlU3RhdGU1IiwiX1JlYWN0JHVzZVN0YXRlNiIsImlucHV0VmFsdWUyIiwic2V0SW5wdXRWYWx1ZTIiLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwibWFpbnRlbmFuY2UiLCJzZXRNYWludGVuYW5jZSIsImZldGNoRGF0YSIsIl9yZWY4IiwiZmV0Y2hFbXBsb3llZSIsIl9yZWY5IiwiX3Jlc1Byb2plY3QkZGF0YSIsIl9yZXNNYWludGVuYW5jZSRkYXRhIiwiX3Jlc1BSYXRlJGRhdGEiLCJfcmVzJGRhdGEiLCJyZXNQcm9qZWN0IiwiZmlsdGVyIiwicm93IiwicmV2ZXJzZSIsInJlc01haW50ZW5hbmNlIiwicmVzUFJhdGUiLCJtYXAiLCJwYXltZW50UmF0ZSIsIm9ic2VydmF0aW9uIiwidGltZUluIiwiZm9ybWF0Iiwicm93MiIsIklEIiwibmFtZSIsImxvZyIsImhhbmRsZUNsZWFyIiwiaGFuZGxlQ2xlYXJQcm9qZWN0IiwiX3JlZjAiLCJfZW1wbG95ZWVSZXNwb25zZSRkYXQiLCJlbXBsb3llZVJlc3BvbnNlIiwiX3JvdyRkZXBhcnRtZW50IiwiZGVwYXJ0bWVudCIsInRvVXBwZXJDYXNlIiwiZmluZCIsIl9pZCIsImhhbmRsZUNoYW5nZUVtcGxveWVlIiwibmV3VmFsdWUiLCJzZWxlY3RlZE9wdGlvbnMiLCJvcHRpb24iLCJkYXlQYXkiLCJwYXJzZUZsb2F0Iiwic2FsYXJ5IiwiYmFzaWNUcmFuc3BvcnQiLCJmb29kQmFzaWMiLCJib3VuY2VBbGxvd2FuY2VzIiwib3RoZXIiLCJ0b0ZpeGVkIiwiaGFuZGxlUGxhbm5pbmdEYXRlQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlUHJvamVjdCIsImhhbmRsZUNoYW5nZVNlcnZpY2UiLCJzZXJ2aWNlTmFtZSIsImN1c3RvbWVyTmFtZSIsIm51bWJlckhvdXIiLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2IiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwiRXJyb3JPcGVuTW9kYWwiLCJzZXRFcnJvck9wZW5Nb2RhbCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVDbG9zZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlQ2xvc2VFcnJvciIsImhhbmRsZURlY2lzaW9uIiwiaGlzdG9yeSIsImJhY2siLCJoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24iLCJfcmVmMSIsImlkSW5mbyIsInBlcnNvbiIsImRhdGVOb3RpZmljYXRpb24iLCJwb3N0IiwiX3VzZVN0YXRlMzkiLCJfdXNlU3RhdGU0MCIsInNhdmluZyIsInNldFNhdmluZyIsImhhbmRsZVN1Ym1pdCIsIl9yZWYxMCIsInB1dCIsIl94Iiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwib25DbGljayIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10Iiwib25TdWJtaXQiLCJjb250YWluZXIiLCJwYWRkaW5nIiwiaXRlbSIsInhzIiwiZGF0ZUFkYXB0ZXIiLCJjb21wb25lbnRzIiwicmVxdWlyZWQiLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJnYXAiLCJtdWx0aWxpbmUiLCJ0aXRsZSIsInBsYWNlbWVudCIsImRpc2FibGVkIiwiZGlzYWJsZUNsZWFyYWJsZSIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsInJlbmRlck9wdGlvbiIsInJlbmRlcklucHV0IiwicGFyYW1zIiwidW5kZWZpbmVkIiwidGFyZ2V0IiwiZGVzY3JpcHRpb24iLCJpbnB1dFZhbHVlIiwib25JbnB1dENoYW5nZSIsImV2ZW50IiwibmV3SW5wdXRWYWx1ZSIsImZpbHRlck9wdGlvbnMiLCJfcmVmMTEiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiX3JlZjEyIiwicm93cyIsInR5cGUiLCJ0ZXh0QWxpZ24iLCJvbkNsb3NlIiwiZmxvYXQiLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJPdXRsZXQiLCJOYXZMaW5rIiwidXNlTG9jYXRpb24iLCJBY2NvdW50Qm94IiwiQWxsSW5jbHVzaXZlIiwiSG9tZSIsIkFzc2lnbm1lbnRJbmQiLCJTdXBlcnZpc2VkVXNlckNpcmNsZSIsIkN1cnJlbmN5RXhjaGFuZ2UiLCJTZXR0aW5nc0ljb24iLCJHcm91cHNJY29uIiwiUGF5bWVudEljb24iLCJEYXNoYm9hcmRJY29uIiwiQ29udGFjdHNJY29uIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJtYWtlU3R5bGVzIiwiRnJhZ21lbnQiLCJwcmltYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==