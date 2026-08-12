exports.id = "src_js_AdminView1_PageView_EmployeeView_EmployeePlaningForm_js";
exports.ids = ["src_js_AdminView1_PageView_EmployeeView_EmployeePlaningForm_js"];
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

/***/ "./node_modules/@mui/icons-material/esm/Add.js"
/*!*****************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Add.js ***!
  \*****************************************************/
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
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
}), 'Add'));

/***/ },

/***/ "./src/js/AdminView1/PageView/EmployeeView/EmployeePlaningForm.js"
/*!************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/EmployeeView/EmployeePlaningForm.js ***!
  \************************************************************************/
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
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var style__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! style */ "./node_modules/style/style.js");
/* harmony import */ var style__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(style__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
function EmployeePlaningForm() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_34__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_44__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_44__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
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
        return _ref7.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_45__.logOut)());
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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    planingDate = _useState4[0],
    setPlaningDate = _useState4[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    inputValueProject = _React$useState4[0],
    setInputValueProject = _React$useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    reason = _useState6[0],
    setReason = _useState6[1];
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
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    projectName = _useState12[0],
    setProjectName = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    rate = _useState14[0],
    setRate = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    employeeArray = _useState16[0],
    setEmployeeArray = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    planing = _useState18[0],
    setPlaning = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    maintenance = _useState20[0],
    setMaintenance = _useState20[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    inputValue2 = _React$useState6[0],
    setInputValue2 = _React$useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchEmployee = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var _resProject$data, _resMaintenance$data, _resPlaning$data, _resPRate$data, _res$data;
          var resProject = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/projects"));
          var resPlaning = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/planing"));
          setProject((_resProject$data = resProject.data) === null || _resProject$data === void 0 || (_resProject$data = _resProject$data.data) === null || _resProject$data === void 0 ? void 0 : _resProject$data.filter(row => row.status === 'On-Going').reverse());
          var resMaintenance = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/maintenance?summary=true"));
          setMaintenance((_resMaintenance$data = resMaintenance.data) === null || _resMaintenance$data === void 0 || (_resMaintenance$data = _resMaintenance$data.data) === null || _resMaintenance$data === void 0 ? void 0 : _resMaintenance$data.filter(row => row.status === "Open"));
          setPlaning((_resPlaning$data = resPlaning.data) === null || _resPlaning$data === void 0 || (_resPlaning$data = _resPlaning$data.data) === null || _resPlaning$data === void 0 ? void 0 : _resPlaning$data.filter(row => dayjs__WEBPACK_IMPORTED_MODULE_39___default()(row.planingDate).format('DD/MM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_39___default()(planingDate).format('DD/MM/YYYY')));
          var resPRate = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/paymentRate"));
          (((_resPRate$data = resPRate.data) === null || _resPRate$data === void 0 ? void 0 : _resPRate$data.data) || []).map(row => setRate(row.paymentRate));
          var res = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/employeeattendance"));
          setEmployeeAttendance((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.filter(row => (row.observation === 'P' || row.observation === 'H') && dayjs__WEBPACK_IMPORTED_MODULE_39___default()(row.timeIn).format('DD/MM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_39___default()(planingDate).format('DD/MM/YYYY')).map(row2 => ({
            ID: row2.id,
            Name: row2.name
          })));
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchEmployee() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchEmployee();
  }, [planingDate]);
  var handleChange = (idRow, key, value) => {
    var list = [...employeeArray];
    var i = employeeArray.findIndex(Item => Item.idRow === idRow);
    list[i][key] = value;
    if (list[i]['status'] === 'Full-Day') {
      list[i]['workNumber'] = 1;
    } else if (list[i]['status'] === 'Half-Day') {
      list[i]['workNumber'] = 0.5;
    } else {
      list[i]['workNumber'] = list[i]['status'] / 10;
    }
    setEmployeeArray(list);
  };
  var addItem = () => {
    setEmployeeArray([...employeeArray, {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_33__["default"])(),
      projectName: {
        _id: "",
        name: ""
      },
      employeeName: "",
      planingDate: "",
      employeeID: "",
      planingDescription: "",
      planingTask: "",
      status: "",
      dayPayUSd: 0,
      workNumber: 0
    }]);
  };
  var deleteItem = idRow => {
    setEmployeeArray(employeeArray => employeeArray.filter(Item => Item.idRow !== idRow));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        try {
          var _employeeResponse$dat;
          var employeeResponse = yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/employee"));
          setEmployee((_employeeResponse$dat = employeeResponse.data) === null || _employeeResponse$dat === void 0 || (_employeeResponse$dat = _employeeResponse$dat.data) === null || _employeeResponse$dat === void 0 ? void 0 : _employeeResponse$dat.filter(row => {
            var _row$department;
            return ((_row$department = row.department) === null || _row$department === void 0 ? void 0 : _row$department.toUpperCase()) !== 'FACTORY' && (employeeAttendance === null || employeeAttendance === void 0 ? void 0 : employeeAttendance.find(row2 => row2.ID === row._id));
          }));
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchData() {
        return _ref9.apply(this, arguments);
      };
    }();
    fetchData();
  }, [employeeAttendance]);
  var handleChangeEmployee = (idInfo, newValue) => {
    addItem();
    var selectedOptions = employee.find(option => option === newValue);
    setEmployeeArray(employeeArray => employeeArray.map(row => row.idRow === idInfo ? _objectSpread(_objectSpread({}, row), {}, {
      employeeID: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      employeeName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.employeeName,
      dayPayUSd: parseFloat(((selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.salary) + (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.basicTransport) + (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.foodBasic) + (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.bounceAllowances) + (selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.other)) / 26 / rate).toFixed(2)
    }) : row));
  };
  var planingFilterInfo = planing.filter(row => row.employeeID !== "66c0a932e3b788527f2e8a68" && row.employeeID !== "66c0a828e3b788527f2e89df");
  var filterP = employee.filter(option => !planingFilterInfo.find(row => row.employeeID === option._id && row.status === "Full-Day"));
  var filterItemInformation = filterP.filter(option => !employeeArray.filter(row => row.employeeID !== "66c0a932e3b788527f2e8a68" && row.employeeID !== "66c0a828e3b788527f2e89df").find(row => option._id === row.employeeID));
  var handlePlanningDateChange = date => {
    setPlaningDate(date);
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
  var arrayNew = employeeArray.map(row => _objectSpread(_objectSpread({}, row), {}, {
    planingDate: planingDate,
    projectName: projectName,
    reason: reason
  }));
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    loading = _useState22[0],
    setLoading = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    loadingOpenModal = _useState24[0],
    setLoadingOpenModal = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    ErrorOpenModal = _useState26[0],
    setErrorOpenModal = _useState26[1];
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
    var _ref0 = _asyncToGenerator(function* (ReferenceInfo) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created Assignment',
        reason: 'For ' + (projectName === null || projectName === void 0 ? void 0 : projectName.name) + ' on ' + dayjs__WEBPACK_IMPORTED_MODULE_39___default()(planingDate).format('DD/MM/YYYY'),
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_30__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x) {
      return _ref0.apply(this, arguments);
    };
  }();
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState28 = _slicedToArray(_useState27, 2),
    saving = _useState28[0],
    setSaving = _useState28[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var saveAttendance = arrayNew.map(row => {
        return axios__WEBPACK_IMPORTED_MODULE_30__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_31__.ENDPOINT_URL, "/create-planing"), row);
      });
      try {
        var res = yield Promise.all(saveAttendance);
        if (res) {
          handleOpen();
          handleCreateNotification();
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x2) {
      return _ref1.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, "Today's Planing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_40__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_50__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_49__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_46__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDashE3__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_36__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_37__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_35__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_38__.DatePicker, {
    required: true,
    name: "expireDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_39___default()(planingDate),
    onChange: date => handlePlanningDateChange(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "reason"
  }, "Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    required: true,
    id: "reason",
    value: reason,
    onChange: e => setReason(e.target.value),
    name: "reason",
    label: "Reason"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "Project"
  }, "Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "Maintenance"
  }, "Maintenance")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 6
  }, reason === "Project" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    options: projects,
    getOptionLabel: option => option.projectName,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], props, " ", option.customerName.customerName, " | ", option.projectName, " | ", option.description),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({}, params, {
      label: "Project Name"
    })),
    onChange: (e, newValue) => handleChangeProject(newValue ? newValue : 0),
    inputValue: inputValueProject,
    onInputChange: (event, newInputValue) => {
      setInputValueProject(newInputValue);
    },
    filterOptions: (options, _ref10) => {
      var inputValue = _ref10.inputValue;
      return options.filter(option => option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) || option.projectName.toLowerCase().includes(inputValue.toLowerCase()) || option.description.toLowerCase().includes(inputValue.toLowerCase()));
    },
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), reason === "Maintenance" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    options: maintenance,
    getOptionLabel: option => option.serviceName,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], props, " ", option.customerName.customerName, " | ", option.serviceName),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({}, params, {
      label: "Maintenance Number"
    })),
    onChange: (e, newValue) => handleChangeService(newValue ? newValue : ''),
    inputValue: inputValue2,
    onInputChange: (event, newInputValue) => {
      setInputValue2(newInputValue);
    },
    filterOptions: (options, _ref11) => {
      var inputValue = _ref11.inputValue;
      return options.filter(option => option.customerName.customerName.toLowerCase().includes(inputValue.toLowerCase()) || option.serviceName.toLowerCase().includes(inputValue.toLowerCase()));
    },
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Employee Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Task"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, employeeArray === null || employeeArray === void 0 ? void 0 : employeeArray.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: row.idRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, "    ", row.employeeName !== "" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '80px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    multiline: true,
    label: "Employee Name",
    value: row.employeeName,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    disableClearable: true,
    options: filterItemInformation,
    getOptionLabel: option => option.employeeName,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
      sx: {
        backgroundColor: '#f2f2f2'
      }
    }), option.employeeName),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({}, params, {
      required: true
    })),
    onChange: (e, newValue) => handleChangeEmployee(row.idRow, newValue),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "unit"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    required: true,
    id: "status",
    value: row.status,
    onChange: e => handleChange(row.idRow, 'status', e.target.value),
    name: "status",
    label: "Status"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "1"
  }, "1H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "2"
  }, "2H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "3"
  }, "3H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "4"
  }, "4H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "Half-Day"
  }, "Half-Day"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "6"
  }, "6H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "7"
  }, "7H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "8"
  }, "8H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "9"
  }, "9H"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: "Full-Day"
  }, "Full-Day")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "planingTask",
    name: "planingTask",
    multiline: true,
    rows: 2,
    value: row.planingTask,
    label: "Task",
    onChange: e => handleChange(row.idRow, 'planingTask', e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "planingDescription",
    name: "planingDescription",
    multiline: true,
    rows: 2,
    value: row.planingDescription,
    label: "Description",
    onChange: e => handleChange(row.idRow, 'planingDescription', e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
    title: "Delete",
    sx: {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: () => deleteItem(row.idRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
  }, "Saving..."))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_47__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, "Do you want to stop creating Attendance ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
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
    onClick: () => handleDecision('stay'),
    className: "btnCustomer"
  }, "Add New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => handleDecision('previous'),
    className: "btnCustomer"
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmployeePlaningForm);

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


/***/ },

/***/ "./node_modules/uuid/dist/esm-node/native.js"
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/native.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRW1wbG95ZWVWaWV3X0VtcGxveWVlUGxhbmluZ0Zvcm1fanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLGdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1pEOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLFNBQVMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTlYsQ0FBbUQ7QUFDVTtBQUNyQztBQUNFO0FBQzBCO0FBQ3NCO0FBQ1I7QUFDZDtBQUMyUTtBQUMvUDtBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDUTtBQUNBO0FBQ2M7QUFDSTtBQUN4QztBQUN3QjtBQUNrQztBQUMxRDtBQUNxQjtBQUNvQjtBQUNhO0FBQ2hCO0FBQ0o7QUFDbEM7QUFDNEI7QUFDUTtBQUNWO0FBQ0w7QUFDUTtBQUMrQjtBQUN0QztBQUNGO0FBQ2hCO0FBQ3dCO0FBQ1E7QUFDYTtBQUczRSxJQUFNNEUsWUFBWSxHQUFHckQsMERBQU0sQ0FBQ3NELElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNoRGpGLDBEQUFBLENBQUNtQyw4REFBTyxFQUFBZ0QsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLG1GQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTyxRQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pLNEI7QUFDNUIsaUVBQWU7QUFDZixjQUFjLDBEQUFpQjtBQUMvQixDQUFDLEU7Ozs7Ozs7Ozs7Ozs7OztBQ0hELGlFQUFlLGNBQWMsRUFBRSxVQUFVLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFVBQVUsR0FBRyx5Q0FBeUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeEc7QUFDNUIsdUNBQXVDOztBQUV2QztBQUNlO0FBQ2Y7QUFDQSxJQUFJLDREQUFxQjtBQUN6QjtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sd0RBQVE7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ1M7QUFDTjtBQUNzQjs7QUFFakQ7QUFDQSxNQUFNLGtEQUFNO0FBQ1osV0FBVyxrREFBTTtBQUNqQjs7QUFFQTtBQUNBLGlEQUFpRCwrQ0FBRyxLQUFLOztBQUV6RDtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUyw4REFBZTtBQUN4Qjs7QUFFQSxpRUFBZSxFQUFFLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QmM7O0FBRS9CO0FBQ0EscUNBQXFDLGlEQUFLO0FBQzFDOztBQUVBLGlFQUFlLFFBQVEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2suanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BZGQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0VtcGxveWVlVmlldy9FbXBsb3llZVBsYW5pbmdGb3JtLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvY29tcG9uZW50L1NpZGViYXJEYXNoRTMuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS9lcnJvci5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlL3N0eWxlLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS9yZWdleC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS9ybmcuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLW5vZGUvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL3Y0LmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL3ZhbGlkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwelwiXG59KSwgJ0Fycm93QmFjaycpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ6XCJcbn0pLCAnQWRkJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTaWRlYmFyRGFzaEUzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaEUzJztcclxuaW1wb3J0ICcuLi8uLi92aWV3LmNzcyc7XHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjb3VudENpcmNsZSc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IHsgTWVudUl0ZW0sIEdyaWQsIEljb25CdXR0b24sIFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVIZWFkLCBQYXBlciwgVGFibGVDb250YWluZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgQXV0b2NvbXBsZXRlLCBzdHlsZWQsIEJveCwgRm9ybUxhYmVsLCBSYWRpb0dyb3VwLCBGb3JtQ29udHJvbExhYmVsLCBSYWRpbywgT3V0bGluZWRJbnB1dCwgSW5wdXRBZG9ybm1lbnQsIE1vZGFsLCBCYWNrZHJvcCwgRGl2aWRlciwgVGFibGVSb3cgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IEFkZCwgQXJyb3dVcHdhcmRPdXRsaW5lZCwgUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBDbG9zZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuaW1wb3J0IHsgZXJyb3IgfSBmcm9tICdzdHlsZSc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4uLy4uL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi4vLi4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5pbXBvcnQgeyBEYXRlVGltZUZpZWxkLCBUaW1lRmllbGQsIFRpbWVQaWNrZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzJztcclxuXHJcblxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBCbGFja1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIEVtcGxveWVlUGxhbmluZ0Zvcm0oKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICBjb25zdCBbb3BlbkJhY2ssIHNldE9wZW5CYWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVPcGVuQmFjayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW5CYWNrKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VCYWNrID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkJhY2soZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtwbGFuaW5nRGF0ZSwgc2V0UGxhbmluZ0RhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSk7XHJcbiAgY29uc3QgW2lucHV0VmFsdWVQcm9qZWN0LCBzZXRJbnB1dFZhbHVlUHJvamVjdF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbXBsb3llZUF0dGVuZGFuY2UsIHNldEVtcGxveWVlQXR0ZW5kYW5jZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2VtcGxveWVlLCBzZXRFbXBsb3llZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcHJvamVjdE5hbWUsIHNldFByb2plY3ROYW1lXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZW1wbG95ZWVBcnJheSwgc2V0RW1wbG95ZWVBcnJheV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbcGxhbmluZywgc2V0UGxhbmluZ10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW21haW50ZW5hbmNlLCBzZXRNYWludGVuYW5jZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2lucHV0VmFsdWUyLCBzZXRJbnB1dFZhbHVlMl0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRW1wbG95ZWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzUHJvamVjdCA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3Byb2plY3RzYClcclxuICAgICAgICBjb25zdCByZXNQbGFuaW5nID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcGxhbmluZ2ApXHJcbiAgICAgICAgc2V0UHJvamVjdChyZXNQcm9qZWN0LmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuc3RhdHVzID09PSAnT24tR29pbmcnKS5yZXZlcnNlKCkpO1xyXG4gICAgICAgIGNvbnN0IHJlc01haW50ZW5hbmNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vbWFpbnRlbmFuY2U/c3VtbWFyeT10cnVlYClcclxuICAgICAgICBzZXRNYWludGVuYW5jZShyZXNNYWludGVuYW5jZS5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnN0YXR1cyA9PT0gXCJPcGVuXCIpKTtcclxuICAgICAgICBzZXRQbGFuaW5nKHJlc1BsYW5pbmcuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IGRheWpzKHJvdy5wbGFuaW5nRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJykgPT09IGRheWpzKHBsYW5pbmdEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSkpXHJcbiAgICAgICAgY29uc3QgcmVzUFJhdGUgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wYXltZW50UmF0ZWApO1xyXG4gICAgICAgIChyZXNQUmF0ZS5kYXRhPy5kYXRhIHx8IFtdKS5tYXAoKHJvdykgPT4gc2V0UmF0ZShyb3cucGF5bWVudFJhdGUpKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9lbXBsb3llZWF0dGVuZGFuY2VgKVxyXG4gICAgICAgIHNldEVtcGxveWVlQXR0ZW5kYW5jZShyZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IChyb3cub2JzZXJ2YXRpb24gPT09ICdQJyB8fCByb3cub2JzZXJ2YXRpb24gPT09ICdIJykgJiYgZGF5anMocm93LnRpbWVJbikuZm9ybWF0KCdERC9NTS9ZWVlZJykgPT09IGRheWpzKHBsYW5pbmdEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSkubWFwKChyb3cyKSA9PiAoe1xyXG4gICAgICAgICAgSUQ6IHJvdzIuaWQsXHJcbiAgICAgICAgICBOYW1lOiByb3cyLm5hbWUsXHJcbiAgICAgICAgfSkpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaEVtcGxveWVlKClcclxuICB9LCBbcGxhbmluZ0RhdGVdKVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpZFJvdywga2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5lbXBsb3llZUFycmF5XVxyXG4gICAgY29uc3QgaSA9IGVtcGxveWVlQXJyYXkuZmluZEluZGV4KEl0ZW0gPT4gSXRlbS5pZFJvdyA9PT0gaWRSb3cpXHJcbiAgICBsaXN0W2ldW2tleV0gPSB2YWx1ZTtcclxuICAgIGlmIChsaXN0W2ldWydzdGF0dXMnXSA9PT0gJ0Z1bGwtRGF5Jykge1xyXG4gICAgICBsaXN0W2ldWyd3b3JrTnVtYmVyJ10gPSAxXHJcbiAgICB9IGVsc2UgaWYgKGxpc3RbaV1bJ3N0YXR1cyddID09PSAnSGFsZi1EYXknKSB7XHJcbiAgICAgIGxpc3RbaV1bJ3dvcmtOdW1iZXInXSA9IDAuNVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGlzdFtpXVsnd29ya051bWJlciddID0gbGlzdFtpXVsnc3RhdHVzJ10gLyAxMFxyXG4gICAgfVxyXG4gICAgc2V0RW1wbG95ZWVBcnJheShsaXN0KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWRkSXRlbSA9ICgpID0+IHtcclxuICAgIHNldEVtcGxveWVlQXJyYXkoWy4uLmVtcGxveWVlQXJyYXksIHtcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIHByb2plY3ROYW1lOiB7XHJcbiAgICAgICAgX2lkOiBcIlwiLFxyXG4gICAgICAgIG5hbWU6IFwiXCJcclxuICAgICAgfSxcclxuICAgICAgZW1wbG95ZWVOYW1lOiBcIlwiLFxyXG4gICAgICBwbGFuaW5nRGF0ZTogXCJcIixcclxuICAgICAgZW1wbG95ZWVJRDogXCJcIixcclxuICAgICAgcGxhbmluZ0Rlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICBwbGFuaW5nVGFzazogXCJcIixcclxuICAgICAgc3RhdHVzOiBcIlwiLFxyXG4gICAgICBkYXlQYXlVU2Q6IDAsXHJcbiAgICAgIHdvcmtOdW1iZXI6IDAsXHJcbiAgICB9XSk7XHJcbiAgfVxyXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSAoaWRSb3cpID0+IHtcclxuICAgIHNldEVtcGxveWVlQXJyYXkoZW1wbG95ZWVBcnJheSA9PiBlbXBsb3llZUFycmF5LmZpbHRlcigoSXRlbSkgPT4gSXRlbS5pZFJvdyAhPT0gaWRSb3cpKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGVtcGxveWVlUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9lbXBsb3llZWApXHJcbiAgICAgICAgICBzZXRFbXBsb3llZShlbXBsb3llZVJlc3BvbnNlLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuZGVwYXJ0bWVudD8udG9VcHBlckNhc2UoKSAhPT0gJ0ZBQ1RPUlknICYmIGVtcGxveWVlQXR0ZW5kYW5jZT8uZmluZCgocm93MikgPT4gcm93Mi5JRCA9PT0gcm93Ll9pZCkpKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKVxyXG4gIH0sIFtlbXBsb3llZUF0dGVuZGFuY2VdKVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VFbXBsb3llZSA9IChpZEluZm8sIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBhZGRJdGVtKClcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IGVtcGxveWVlLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uID09PSBuZXdWYWx1ZSlcclxuICAgIHNldEVtcGxveWVlQXJyYXkoZW1wbG95ZWVBcnJheSA9PiBlbXBsb3llZUFycmF5Lm1hcCgocm93KSA9PiByb3cuaWRSb3cgPT09IGlkSW5mbyA/IHtcclxuICAgICAgLi4ucm93LFxyXG4gICAgICBlbXBsb3llZUlEOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgZW1wbG95ZWVOYW1lOiBzZWxlY3RlZE9wdGlvbnM/LmVtcGxveWVlTmFtZSxcclxuICAgICAgZGF5UGF5VVNkOiBwYXJzZUZsb2F0KCgoc2VsZWN0ZWRPcHRpb25zPy5zYWxhcnkgKyBzZWxlY3RlZE9wdGlvbnM/LmJhc2ljVHJhbnNwb3J0ICsgc2VsZWN0ZWRPcHRpb25zPy5mb29kQmFzaWMgKyBzZWxlY3RlZE9wdGlvbnM/LmJvdW5jZUFsbG93YW5jZXMgKyBzZWxlY3RlZE9wdGlvbnM/Lm90aGVyKSAvIDI2KSAvIHJhdGUpLnRvRml4ZWQoMilcclxuICAgIH0gOiByb3cpKTtcclxuICB9XHJcbiAgY29uc3QgcGxhbmluZ0ZpbHRlckluZm8gPSBwbGFuaW5nLmZpbHRlcigocm93KSA9PiByb3cuZW1wbG95ZWVJRCAhPT0gXCI2NmMwYTkzMmUzYjc4ODUyN2YyZThhNjhcIiAmJiByb3cuZW1wbG95ZWVJRCAhPT0gXCI2NmMwYTgyOGUzYjc4ODUyN2YyZTg5ZGZcIilcclxuXHJcblxyXG4gIGNvbnN0IGZpbHRlclAgPSBlbXBsb3llZS5maWx0ZXIoKG9wdGlvbikgPT4gIXBsYW5pbmdGaWx0ZXJJbmZvLmZpbmQoKHJvdykgPT4gcm93LmVtcGxveWVlSUQgPT09IG9wdGlvbi5faWQgJiYgcm93LnN0YXR1cyA9PT0gXCJGdWxsLURheVwiKSlcclxuXHJcbiAgY29uc3QgZmlsdGVySXRlbUluZm9ybWF0aW9uID0gZmlsdGVyUC5maWx0ZXIob3B0aW9uID0+ICFlbXBsb3llZUFycmF5LmZpbHRlcigocm93KSA9PiByb3cuZW1wbG95ZWVJRCAhPT0gXCI2NmMwYTkzMmUzYjc4ODUyN2YyZThhNjhcIiAmJiByb3cuZW1wbG95ZWVJRCAhPT0gXCI2NmMwYTgyOGUzYjc4ODUyN2YyZTg5ZGZcIikuZmluZCgocm93KSA9PiBvcHRpb24uX2lkID09PSByb3cuZW1wbG95ZWVJRCkpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVBsYW5uaW5nRGF0ZUNoYW5nZSA9IChkYXRlKSA9PiB7XHJcbiAgICBzZXRQbGFuaW5nRGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVByb2plY3QgPSAobmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHByb2plY3RzLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uID09PSBuZXdWYWx1ZSlcclxuICAgIHNldFByb2plY3ROYW1lKHtcclxuICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgbmFtZTogc2VsZWN0ZWRPcHRpb25zPy5wcm9qZWN0TmFtZVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVNlcnZpY2UgPSAobmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IG1haW50ZW5hbmNlLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uID09PSBuZXdWYWx1ZSlcclxuICAgIHNldFByb2plY3ROYW1lKHtcclxuICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgbmFtZTogc2VsZWN0ZWRPcHRpb25zPy5zZXJ2aWNlTmFtZSArICcgLyAnICsgc2VsZWN0ZWRPcHRpb25zPy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFycmF5TmV3ID0gZW1wbG95ZWVBcnJheS5tYXAoKHJvdykgPT4gKHtcclxuICAgIC4uLnJvdyxcclxuICAgIHBsYW5pbmdEYXRlOiBwbGFuaW5nRGF0ZSxcclxuICAgIHByb2plY3ROYW1lOiBwcm9qZWN0TmFtZSxcclxuICAgIHJlYXNvbjogcmVhc29uXHJcbiAgfSkpXHJcblxyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwoZmFsc2UpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwoZmFsc2UpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVEZWNpc2lvbiA9IChuYXZpZ2F0ZSkgPT4ge1xyXG4gICAgLy9OYXZpZ2F0ZSBCYXNlZCBvbiB0aCBEZWNpc2lvblxyXG4gICAgaWYgKG5hdmlnYXRlID09PSAncHJldmlvdXMnKSB7XHJcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICAgIH0gZWxzZSBpZiAobmF2aWdhdGUgPT09ICdzdGF5Jykge1xyXG4gICAgICBoYW5kbGVDbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24gPSBhc3luYyAoUmVmZXJlbmNlSW5mbykgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiBSZWZlcmVuY2VJbmZvLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgQ3JlYXRlZCBBc3NpZ25tZW50JyxcclxuICAgICAgcmVhc29uOiAnRm9yICcgKyBwcm9qZWN0TmFtZT8ubmFtZSArICcgb24gJyArIGRheWpzKHBsYW5pbmdEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSxcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogbmV3IERhdGUoKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2F2aW5nKCd0cnVlJylcclxuICAgIGNvbnN0IHNhdmVBdHRlbmRhbmNlID0gYXJyYXlOZXcubWFwKChyb3cpID0+IHtcclxuICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtcGxhbmluZ2AsIHJvdylcclxuICAgIH0pXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbChzYXZlQXR0ZW5kYW5jZSk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICAgICAgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHNldFNhdmluZygnJylcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBUb2RheSdzIFBsYW5pbmdcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuQmFja30+XHJcbiAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoRTMgLz5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBjb21wb25lbnQ9XCJtYWluXCJcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogKHRoZW1lKSA9PlxyXG4gICAgICAgICAgICAgIHRoZW1lLnBhbGV0dGUubW9kZSA9PT0gJ2xpZ2h0J1xyXG4gICAgICAgICAgICAgICAgPyB0aGVtZS5wYWxldHRlLmdyZXlbMTAwXVxyXG4gICAgICAgICAgICAgICAgOiB0aGVtZS5wYWxldHRlLmdyZXlbOTAwXSxcclxuICAgICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRvb2xiYXIgLz5cclxuICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJub25lXCIgc3g9e3sgbXQ6IDQgfX0gPlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2V4cGlyZURhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMocGxhbmluZ0RhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IGhhbmRsZVBsYW5uaW5nRGF0ZUNoYW5nZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwicmVhc29uXCI+UmVhc29uPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInJlYXNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlYXNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlYXNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUHJvamVjdFwiPlByb2plY3Q8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiTWFpbnRlbmFuY2VcIj5NYWludGVuYW5jZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlYXNvbiA9PT0gXCJQcm9qZWN0XCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtwcm9qZWN0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5wcm9qZWN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyT3B0aW9uPXsocHJvcHMsIG9wdGlvbikgPT4gKDxCb3ggey4uLnByb3BzfT4ge29wdGlvbi5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lfSB8IHtvcHRpb24ucHJvamVjdE5hbWV9IHwge29wdGlvbi5kZXNjcmlwdGlvbn08L0JveD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIlByb2plY3QgTmFtZVwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBoYW5kbGVDaGFuZ2VQcm9qZWN0KG5ld1ZhbHVlID8gbmV3VmFsdWUgOiAwKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZT17aW5wdXRWYWx1ZVByb2plY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyhldmVudCwgbmV3SW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldElucHV0VmFsdWVQcm9qZWN0KG5ld0lucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJPcHRpb25zPXsob3B0aW9ucywgeyBpbnB1dFZhbHVlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9ucy5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnByb2plY3ROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoaW5wdXRWYWx1ZS50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZWFzb24gPT09IFwiTWFpbnRlbmFuY2VcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e21haW50ZW5hbmNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLnNlcnZpY2VOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9PiB7b3B0aW9uLmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWV9IHwge29wdGlvbi5zZXJ2aWNlTmFtZX08L0JveD4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIk1haW50ZW5hbmNlIE51bWJlclwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBoYW5kbGVDaGFuZ2VTZXJ2aWNlKG5ld1ZhbHVlID8gbmV3VmFsdWUgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWU9e2lucHV0VmFsdWUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZXZlbnQsIG5ld0lucHV0VmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlMihuZXdJbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyT3B0aW9ucz17KG9wdGlvbnMsIHsgaW5wdXRWYWx1ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXJ2aWNlTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnYmxvY2snLCBwb3NpdGlvbjogJ2ZpeGVkJywgekluZGV4OiAxLCBmbG9hdDogJ3JpZ2h0JywgcmlnaHQ6ICctNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bjEnIHN0eWxlPXt7IGZvbnRTaXplOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkVtcGxveWVlIE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRhc2s8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGVzY3JpcHRpb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcGxveWVlQXJyYXk/Lm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cm93LmlkUm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4gICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuZW1wbG95ZWVOYW1lICE9PSBcIlwiID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnODBweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0VtcGxveWVlIE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvdy5lbXBsb3llZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsZWFyYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtmaWx0ZXJJdGVtSW5mb3JtYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uZW1wbG95ZWVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyNmMmYyZjInIH19PntvcHRpb24uZW1wbG95ZWVOYW1lfTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgey4uLnBhcmFtc30gcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlRW1wbG95ZWUocm93LmlkUm93LCBuZXdWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJ1bml0XCI+U3RhdHVzPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm93LnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKHJvdy5pZFJvdywgJ3N0YXR1cycsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIjFcIj4xSDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCIyXCI+Mkg8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiM1wiPjNIPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIjRcIj40SDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJIYWxmLURheVwiPkhhbGYtRGF5PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIjZcIj42SDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCI3XCI+N0g8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiOFwiPjhIPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIjlcIj45SDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJGdWxsLURheVwiPkZ1bGwtRGF5PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ncGxhbmluZ1Rhc2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGxhbmluZ1Rhc2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm93LnBsYW5pbmdUYXNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdUYXNrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKHJvdy5pZFJvdywgJ3BsYW5pbmdUYXNrJywgZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdwbGFuaW5nRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGxhbmluZ0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9ezJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvdy5wbGFuaW5nRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKHJvdy5pZFJvdywgJ3BsYW5pbmdEZXNjcmlwdGlvbicsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlnaHRUb29sdGlwIHRpdGxlPVwiRGVsZXRlXCIgc3g9e3t9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVJdGVtKHJvdy5pZFJvdyl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2aW5nICE9PSAndHJ1ZScgPyA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPiA6IDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlNhdmluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQmFja31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUJhY2t9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RG8geW91IHdhbnQgdG8gc3RvcCBjcmVhdGluZyBBdHRlbmRhbmNlID8gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZSA6PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCI+IElmIHlvdSBzdG9wIGNyZWF0aW5nIHdpdGhvdXQgc2F2aW5nLCBhbGwgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdDwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL1Rld21WaWV3QWRtaW4nKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19Pk5vPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3N0YXknKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIEFkZCBOZXdcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNpc2lvbigncHJldmlvdXMnKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e0Vycm9yT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRXJyb3J9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENhbmNlbEljb24gc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgRmFpbGVkIHRvIFNhdmVkPC9oMj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlRXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgVHJ5IEFnYWluXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1wbG95ZWVQbGFuaW5nRm9ybVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi4vY3NzL1NpZGViYXJOZXcuc2NzcydcclxuaW1wb3J0IHsgT3V0bGV0LCBOYXZMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IEFjY291bnRCb3gsIEFsbEluY2x1c2l2ZSwgSG9tZSwgQXNzaWdubWVudEluZCwgU3VwZXJ2aXNlZFVzZXJDaXJjbGUsIEN1cnJlbmN5RXhjaGFuZ2UgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NldHRpbmdzJztcclxuaW1wb3J0IEdyb3Vwc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Hcm91cHMnO1xyXG5pbXBvcnQgUGF5bWVudEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QYXltZW50JztcclxuaW1wb3J0IERhc2hib2FyZEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EYXNoYm9hcmQnO1xyXG5pbXBvcnQgQ29udGFjdHNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ29udGFjdHMnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbUJ1dHRvbiwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQsIG1ha2VTdHlsZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuZnVuY3Rpb24gU2lkZWJhckRhc2hFMygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgPEN1cnJlbmN5RXhjaGFuZ2UgLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJSYXRlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuXHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8R3JvdXBzSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkVtcGxveWVlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UGF5bWVudEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQYXlSb2xsXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgPEFjY291bnRCb3ggLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJVc2VyIEFjY291bnRcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgICAgPEFzc2lnbm1lbnRJbmQgLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJHcmFudCBBY2Nlc3NcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxDb250YWN0c0ljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQcm9maWxlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgey8qIDxsaSBjbGFzc05hbWU9J0xpc3Ryb3dkYXNoJyA+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9Sb2xlUGVybWlzc2lvblwiICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjonbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIHdpZHRoOiAnMTAwJSd9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnNDVweCcsIGZsZXhXcmFwOiAnbm93cmFwJywgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgZmxleDogJ3dyYXAnLGNvbG9yOiAnd2hpdGUnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBtYXJnaW5MZWZ0OicyMHB4JywgZ2FwOicyMHB4J319PlxyXG4gICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSdpY29uMSc+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxTdXBlcnZpc2VkVXNlckNpcmNsZS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0ndGl0bGVsaXN0Jz4gUm9sZVBlcm1pc3Npb248L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgPC9saT4qL31cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckRhc2hFMyIsInZhciBzdHlsZSA9IHJlcXVpcmUoJy4vJyk7XG5cbmV4cG9ydHMucHJpbnRFcnJvciA9IHByaW50RXJyb3JcbmZ1bmN0aW9uIHByaW50RXJyb3IoZXJyb3Ipe1xuICBjb2xvdXJFcnJvcihlcnJvcixmYWxzZSlcbn1cblxuZXhwb3J0cy5wYXJzZVN0YWNrTGluZSA9IHBhcnNlU3RhY2tMaW5lXG5mdW5jdGlvbiBwYXJzZVN0YWNrTGluZSAocm93KXtcbiAgdmFyIHJlZ2V4ID0gL15cXHMqP2F0XFxzKyhbXFx3XFwuXFwtXFxfXFw8XFw+XSopP1xccypcXCg/KFtcXFtcXCBcXF1cXC9cXC1cXF9cXHdcXC5dKykvZyAvL1xuICAgICAgbGluZXMgPSAvLio/XFw6KFxcZCspXFw6KFxcZCspL1xuICAgICwgbSA9IHJlZ2V4LmV4ZWMocm93KVxuICAgICwgbG4gPSBsaW5lcy5leGVjKHJvdylcbiAgICAsIGxpbmUgPSB7fVxuICBpZiAobSl7XG4gICBsaW5lID0geyBmdW5jdGlvbjogbVsxXVxuICAgICwgZmlsZTogbVsyXVxuICAgICwgbGluZTogKGxuID8gMSAqIGxuWzFdIDogdW5kZWZpbmVkKVxuICAgICwgY29sdW1uOiAgKGxuID8gMSAqIGxuWzJdIDogdW5kZWZpbmVkKSB9IH0gXG4gICAgXG4gIGxpbmUudW5tYXRjaGVkID0gcm93XG4gIHJldHVybiBsaW5lICAgIFxufVxuXG5leHBvcnRzLnBhcnNlRXJyb3IgPSBwYXJzZUVycm9yXG5mdW5jdGlvbiBwYXJzZUVycm9yKGVycm9yKXtcbiAgdmFyIG9ialxuXG4vKiAgaWYoIWVycm9yKVxuICAgIHJldHVybiBzdHlsZSgnJyArIGVycm9yKS5yZWRcbiovXG4gIG9iaiA9IFxuICAgIHsgbmFtZTogKCdvYmplY3QnID09IHR5cGVvZiBlcnJvciAmJiBlcnJvciAhPSBudWxsKSA/IChlcnJvci5uYW1lIHx8IGVycm9yLmNvbnN0cnVjdG9yLm5hbWUpIDogJ3Rocm93bidcbiAgICB9XG4gICAgaWYoZXJyb3IgJiYgZXJyb3Iuc3RhY2spe1xuICAgICAgdmFyIHN0YWNrID0gc3RhY2tTdHIgPSBlcnJvci5zdGFjay5zcGxpdChcIlxcblwiKVxuICAgICAgb2JqLnN0YWNrID0gc3RhY2subWFwKHBhcnNlU3RhY2tMaW5lKVxuICAgIH0gZWxzZSB7XG4gICAgICBvYmoubWVzc2FnZSA9IChlcnJvciAmJiBlcnJvci5tZXNzYWdlKSB8fCAnJyArIGVycm9yIFxuICAgICAgb2JqLnN0YWNrID0gW3t1bm1hdGNoZWQ6ICdbbm8gc3RhY2sgdHJhY2VdJ31dIC8vIHNhbWUgZm9ybWF0IGFzIGEgcHJvcHBlciBlcnJvciwgc28gcHJpbnRpbmcgaXMgZWFzeVxuICAgIH1cbiAgcmV0dXJuIG9ialxufVxuXG5leHBvcnRzLnN0eWxlRXJyb3IgPSBjb2xvdXJFcnJvclxuZnVuY3Rpb24gY29sb3VyRXJyb3IoZXJyb3IsZW5hYmxlKXtcbiAgXG4gIHN0eWxlID0gc3R5bGUuZW5hYmxlKGVuYWJsZSA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWUpXG4gIHZhciBzID0gcGFyc2VkID0gcGFyc2VFcnJvcihlcnJvcilcbiAgXG4gIHMgPSBzdHlsZShwYXJzZWQubmFtZSkucmVkLmJvbGQgKyBcIjogXCIgKyAocGFyc2VkLm1lc3NhZ2UgPyBzdHlsZShwYXJzZWQubWVzc2FnZSkueWVsbG93LmJvbGQgOiBcIlwiKVxuICBzICs9IFwiXFxuXCJcbiAgcyArPSBwYXJzZWQuc3RhY2subWFwKGZ1bmN0aW9uIChyb3cpe1xuICAgIGlmKHJvdy5maWxlKXtcbiAgICAgIHZhciBmaWxlID0gcm93LmZpbGUucmVwbGFjZShwcm9jZXNzLmVudi5OT0RFX1BBVEgsJyQnKVxuXG4gICAgICByZXR1cm4gc3R5bGUoc3R5bGUoXCIgXCIgKyByb3cuZnVuY3Rpb24pLnllbGxvdy5ycGFkKDMwLHN0eWxlKCcuJykuZ3JleSlcbiAgICAgICAgICArIFwiIFwiXG4gICAgICAgICAgKyBzdHlsZShmaWxlKS53aGl0ZS5ib2xkKS5ycGFkKDcwLHN0eWxlKCcuJykuZ3JleSlcbiAgICAgICAgKyBzdHlsZShyb3cubGluZSB8fCAnPycpLmxwYWQoMyxzdHlsZSgnLicpLmdyZXkpLmN5YW5cbiAgICAgICAgKyBcIjpcIlxuICAgICAgICArIHN0eWxlKHJvdy5jb2x1bW4gfHwgJz8nKS5scGFkKDMsc3R5bGUoJy4nKS5ncmV5KS5tYWdlbnRhXG4gICAgfVxuICAgIHJldHVybiAocm93LnVubWF0Y2hlZClcbiAgfSkuam9pbihcIlxcblwiKSArIFwiXFxuXCIgLy8rIGVuZFxuICBcbiAgLy9jb25zb2xlLmxvZyhzKVxuICByZXR1cm4gc1xufVxuIiwiLypcbnN0eWxlLmpzIFxuXG5Db3B5cmlnaHQgKGMpIDIwMTAgQWxleGlzIFNlbGxpZXIgKGNsb3VkaGVhZCkgLCBNYXJhayBTcXVpcmVzLCBEb21pbmljIFRhcnJcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG50aGlzIGlzIGJhc2VkIG9uIGNvbG9ycy5qcyBieSBBbGV4aXMgU2VsbGllciAoY2xvdWRoZWFkKSAmIE1hcmFrIFNxdWlyZXNcblxuKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc3R5bGVcbmV4cG9ydHMuZXJyb3IgPSByZXF1aXJlKCcuL2Vycm9yJylcblxuZnVuY3Rpb24gc3R5bGUoc3RyaW5nKXtcbiAgcmV0dXJuIG5ldyBTdHlsZWQoc3RyaW5nKVxufVxuZnVuY3Rpb24gdW5zdHlsZWQoc3RyaW5nKXtcbiAgdmFyIHN0eWxlZCA9IG5ldyBTdHlsZWQoc3RyaW5nKVxuICBzdHlsZWQuZW5hYmxlID0gZmFsc2VcbiAgcmV0dXJuIHN0eWxlZCBcbn1cbnVuc3R5bGVkLmVuYWJsZSA9IHN0eWxlLmVuYWJsZSA9IGZ1bmN0aW9uIChvbil7XG4gIHJldHVybiBvbiA/IHN0eWxlIDogdW5zdHlsZWRcbn1cblxuZXhwb3J0cy5zdHlsaXplID0gc3R5bGl6ZVxuZnVuY3Rpb24gc3R5bGl6ZShzdHIsIHN0eWxlKSB7XG4gIGlmKHN0eWxlID09ICdyYWluYm93Jyl7XG4gICAgdmFyIHJhaW5ib3djb2xvcnMgPSBbJ3JlZCcsJ3llbGxvdycsJ2dyZWVuJywnYmx1ZScsJ21hZ2VudGEnXTsgLy9Sb1kgRyBCaVZcbiAgICB2YXIgZXhwbG9kZWQgPSBzdHIuc3BsaXQoXCJcIik7XG4gICAgdmFyIGk9MDtcbiAgICBleHBsb2RlZCA9IGV4cGxvZGVkLm1hcChmdW5jdGlvbihsZXR0ZXIpIHtcbiAgICAgIGlmIChsZXR0ZXI9PVwiIFwiKSB7XG4gICAgICAgIHJldHVybiBsZXR0ZXI7XG4gICAgICB9IFxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzdHlsaXplKGxldHRlcixyYWluYm93Y29sb3JzW2krKyAlIHJhaW5ib3djb2xvcnMubGVuZ3RoXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGV4cGxvZGVkLmpvaW4oXCJcIik7XG5cbiAgfVxuXG4gIHJldHVybiAnXFwwMzNbJyArIHN0eWxlc1tzdHlsZV1bMF0gKyAnbScgKyBzdHIgK1xuICAgICAgICAgJ1xcMDMzWycgKyBzdHlsZXNbc3R5bGVdWzFdICsgJ20nO1xufTtcblxuZnVuY3Rpb24gU3R5bGVkIChfc3RyaW5nKXtcbiAgdmFyIHN0cmluZyA9IF9zdHJpbmdcbiAgICAsIF9scGFkID0gMFxuICAgICwgX3JwYWQgPSAwXG4gICAgLCBfcmMgPSAnICdcbiAgICAsIF9sYyA9ICcgJ1xuICB0aGlzLnN0eWxlcyA9IFtdXG4gIHRoaXMuZW5hYmxlID0gdHJ1ZVxuICB0aGlzLl9fZGVmaW5lR2V0dGVyX18oJ2xlbmd0aCcsZnVuY3Rpb24gKCl7XG4gICAgcmV0dXJuIF9scGFkICsgKGRlc3R5bGUoXCJcIiArIHN0cmluZykubGVuZ3RoKSArIF9ycGFkXG4gIH0pXG4gIHRoaXMuX19kZWZpbmVTZXR0ZXJfXygnX3N0cmluZycsZnVuY3Rpb24gKHMpe1xuICAgIHJldHVybiBzdHJpbmcgPSBzXG4gIH0pXG4gIHRoaXMuX19kZWZpbmVHZXR0ZXJfXygnX3N0cmluZycsZnVuY3Rpb24gKHMpe1xuICAgIHJldHVybiBzdHJpbmdcbiAgfSlcbiAgdGhpcy5fX2RlZmluZUdldHRlcl9fKCd0b19zJyxmdW5jdGlvbiAoKXtcbiAgICByZXR1cm4gdGhpcy50b1N0cmluZygpXG4gIH0pXG4gIHRoaXMuX19kZWZpbmVHZXR0ZXJfXygnc3R5bGVyJyxmdW5jdGlvbiAoKXtcbiAgICB2YXIgc2VsZiA9IHRoaXNcbiAgICByZXR1cm4gZnVuY3Rpb24gKHgsb2ZmKXtcbiAgICAgIHZhciBfc3RyaW5nID0gc3RyaW5nXG4gICAgICAgICwgX2VuYWJsZSA9IHNlbGYuZW5hYmxlXG4gICAgICAgIHNlbGYuZW5hYmxlID0gIW9mZlxuICAgICAgc3RyaW5nID0geFxuICAgICAgdmFyIHRvUmV0dXJuID0gc2VsZi50b1N0cmluZygpXG4gICAgICBzdHJpbmcgPSBfc3RyaW5nXG4gICAgICB0aGlzLmVuYWJsZSA9IF9lbmFibGVcbiAgICAgIHJldHVybiB0b1JldHVyblxuICAgIH1cbiAgfSlcbiAgdGhpcy50b1N0cmluZyA9IHRvU3RyaW5nXG4gIGZ1bmN0aW9uIHBhZChsLGMpe1xuICAgIHZhciBwYWQgPSAnJ1xuICAgICAgLCBfYyA9IGNcbiAgICBpZihfYyBpbnN0YW5jZW9mIFN0eWxlZCkgLy8gbWFrZSBwYWQgYXdhcmUgb2Ygc3R5bGUsIGFuZCBub3QgZHVwbGljYXRlIHRoZSBjaGFyYWN0ZXJzIHRvbyBtdWNoIVxuICAgICAgYyA9IF9jLl9zdHJpbmdcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgaSArKykgeyBwYWQgKz0gYyB9XG4gICAgaWYoX2MgaW5zdGFuY2VvZiBTdHlsZWQpe1xuICAgICAgX2MuX3N0cmluZyA9IHBhZFxuICAgICAgcmV0dXJuIF9jXG4gICAgICB9XG4gICAgXG4gICAgcmV0dXJuIHBhZFxuICB9XG4gIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgdmFyIG5ld1N0cmluZyA9IHN0cmluZ1xuICBcbiAgICBpZih0aGlzLmVuYWJsZSlcbiAgICB0aGlzLnN0eWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChzdHlsZSl7XG4gICAgICBuZXdTdHJpbmcgPSBzdHlsaXplKG5ld1N0cmluZyxzdHlsZSlcbiAgICB9KVxuICBcbiAgICByZXR1cm4gcGFkKF9scGFkLF9sYykgKyBuZXdTdHJpbmcgKyBwYWQoX3JwYWQsX3JjKVxuICB9XG4gIHRoaXMubHBhZCA9IGxwYWRcbiAgdGhpcy5ycGFkID0gcnBhZFxuICBcbiAgZnVuY3Rpb24gbHBhZCAocGFkLGMpe1xuICAgIF9scGFkID0gdGhpcy5sZW5ndGggPCBwYWQgPyBfbHBhZCA9IHBhZCAtIHRoaXMubGVuZ3RoIDogMFxuICAgIF9sYyA9IGMgfHwgX2xjXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuICBmdW5jdGlvbiBycGFkIChwYWQsYyl7XG4gICAgX3JwYWQgPSB0aGlzLmxlbmd0aCA8IHBhZCA/IF9ycGFkID0gcGFkIC0gdGhpcy5sZW5ndGggOiAwXG4gICAgX3JjID0gYyB8fCBfcmMgXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufVxuXG52YXIgc3R5bGVzID0ge1xuICAvL3N0eWxlc1xuICAnYm9sZCcgICAgICA6IFsxLCAgMjJdLFxuICAnaXRhbGljJyAgICA6IFszLCAgMjNdLFxuICAndW5kZXJsaW5lJyA6IFs0LCAgMjRdLFxuICAnaW52ZXJzZScgICA6IFs3LCAgMjddLFxuICAvL2dyYXlzY2FsZVxuICAnd2hpdGUnICAgICA6IFszNywgMzldLFxuICAnZ3JleScgICAgICA6IFs5MCwgMzldLFxuICAnYmxhY2snICAgICA6IFs5MCwgMzldLFxuICAvL2NvbG9yc1xuICAnYmx1ZScgICAgICA6IFszNCwgMzldLFxuICAnY3lhbicgICAgICA6IFszNiwgMzldLFxuICAnZ3JlZW4nICAgICA6IFszMiwgMzldLFxuICAnbWFnZW50YScgICA6IFszNSwgMzldLFxuICAncmVkJyAgICAgICA6IFszMSwgMzldLFxuICAneWVsbG93JyAgICA6IFszMywgMzldLFxuICB9O1xuXG5leHBvcnRzLnN0eWxlcyA9IE9iamVjdC5rZXlzKHN0eWxlcykuY29uY2F0KFsncmFpbmJvdyddKVxuZXhwb3J0cy5zdHlsZXMuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGUpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFN0eWxlZC5wcm90b3R5cGUsIHN0eWxlLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zdHlsZXMucHVzaChzdHlsZSlcbiAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBjb2RlID0gL1xcdTAwMWJcXFtcXGQrbS9nXG5cbmV4cG9ydHMuZGVzdHlsZSA9IGRlc3R5bGUgXG5mdW5jdGlvbiBkZXN0eWxlIChzKXtcbiAgcmV0dXJuIChcIlwiICsgcykucmVwbGFjZShjb2RlLCcnKVxufVxuIiwiaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEOiBjcnlwdG8ucmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuY29uc3Qgcm5kczhQb29sID0gbmV3IFVpbnQ4QXJyYXkoMjU2KTsgLy8gIyBvZiByYW5kb20gdmFsdWVzIHRvIHByZS1hbGxvY2F0ZVxuXG5sZXQgcG9vbFB0ciA9IHJuZHM4UG9vbC5sZW5ndGg7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIGlmIChwb29sUHRyID4gcm5kczhQb29sLmxlbmd0aCAtIDE2KSB7XG4gICAgY3J5cHRvLnJhbmRvbUZpbGxTeW5jKHJuZHM4UG9vbCk7XG4gICAgcG9vbFB0ciA9IDA7XG4gIH1cblxuICByZXR1cm4gcm5kczhQb29sLnNsaWNlKHBvb2xQdHIsIHBvb2xQdHIgKz0gMTYpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhckRhc2hFMyIsIlNlYXJjaEljb24iLCJOb3RpZmljYXRpb25zTm9uZUljb24iLCJBY2NvdW50Q2lyY2xlSWNvbiIsIkRlbGV0ZUljb24iLCJNZW51SXRlbSIsIkdyaWQiLCJJY29uQnV0dG9uIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJQYXBlciIsIlRhYmxlQ29udGFpbmVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsIkF1dG9jb21wbGV0ZSIsInN0eWxlZCIsIkJveCIsIkZvcm1MYWJlbCIsIlJhZGlvR3JvdXAiLCJGb3JtQ29udHJvbExhYmVsIiwiUmFkaW8iLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJNb2RhbCIsIkJhY2tkcm9wIiwiRGl2aWRlciIsIlRhYmxlUm93IiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwiQWRkIiwiQXJyb3dVcHdhcmRPdXRsaW5lZCIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJ2NCIsInVzZU5hdmlnYXRlIiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsImRheWpzIiwiQXJyb3dCYWNrIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkxvYWRlciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJDbG9zZSIsImVycm9yIiwiTWVzc2FnZUFkbWluVmlldyIsIk5vdGlmaWNhdGlvblZJZXdJbmZvIiwiRGF0ZVRpbWVGaWVsZCIsIlRpbWVGaWVsZCIsIlRpbWVQaWNrZXIiLCJMaWdodFRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIkJsYWNrVG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY1Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWY2Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiRW1wbG95ZWVQbGFuaW5nRm9ybSIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY3IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwib3BlbkJhY2siLCJzZXRPcGVuQmFjayIsImhhbmRsZU9wZW5CYWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VCYWNrIiwiX3VzZVN0YXRlMyIsImRhdGUiLCJEYXRlIiwiX3VzZVN0YXRlNCIsInBsYW5pbmdEYXRlIiwic2V0UGxhbmluZ0RhdGUiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsImlucHV0VmFsdWVQcm9qZWN0Iiwic2V0SW5wdXRWYWx1ZVByb2plY3QiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInJlYXNvbiIsInNldFJlYXNvbiIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiZW1wbG95ZWVBdHRlbmRhbmNlIiwic2V0RW1wbG95ZWVBdHRlbmRhbmNlIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJlbXBsb3llZSIsInNldEVtcGxveWVlIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0IiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInByb2plY3ROYW1lIiwic2V0UHJvamVjdE5hbWUiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwicmF0ZSIsInNldFJhdGUiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiZW1wbG95ZWVBcnJheSIsInNldEVtcGxveWVlQXJyYXkiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwicGxhbmluZyIsInNldFBsYW5pbmciLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwibWFpbnRlbmFuY2UiLCJzZXRNYWludGVuYW5jZSIsIl9SZWFjdCR1c2VTdGF0ZTUiLCJfUmVhY3QkdXNlU3RhdGU2IiwiaW5wdXRWYWx1ZTIiLCJzZXRJbnB1dFZhbHVlMiIsImZldGNoRW1wbG95ZWUiLCJfcmVmOCIsIl9yZXNQcm9qZWN0JGRhdGEiLCJfcmVzTWFpbnRlbmFuY2UkZGF0YSIsIl9yZXNQbGFuaW5nJGRhdGEiLCJfcmVzUFJhdGUkZGF0YSIsIl9yZXMkZGF0YSIsInJlc1Byb2plY3QiLCJyZXNQbGFuaW5nIiwiZmlsdGVyIiwicm93Iiwic3RhdHVzIiwicmV2ZXJzZSIsInJlc01haW50ZW5hbmNlIiwiZm9ybWF0IiwicmVzUFJhdGUiLCJtYXAiLCJwYXltZW50UmF0ZSIsIm9ic2VydmF0aW9uIiwidGltZUluIiwicm93MiIsIklEIiwiaWQiLCJuYW1lIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiaWRSb3ciLCJrZXkiLCJ2YWx1ZSIsImxpc3QiLCJpIiwiZmluZEluZGV4IiwiSXRlbSIsImFkZEl0ZW0iLCJfaWQiLCJlbXBsb3llZUlEIiwicGxhbmluZ0Rlc2NyaXB0aW9uIiwicGxhbmluZ1Rhc2siLCJkYXlQYXlVU2QiLCJ3b3JrTnVtYmVyIiwiZGVsZXRlSXRlbSIsImZldGNoRGF0YSIsIl9yZWY5IiwiX2VtcGxveWVlUmVzcG9uc2UkZGF0IiwiZW1wbG95ZWVSZXNwb25zZSIsIl9yb3ckZGVwYXJ0bWVudCIsImRlcGFydG1lbnQiLCJ0b1VwcGVyQ2FzZSIsImZpbmQiLCJoYW5kbGVDaGFuZ2VFbXBsb3llZSIsImlkSW5mbyIsIm5ld1ZhbHVlIiwic2VsZWN0ZWRPcHRpb25zIiwib3B0aW9uIiwicGFyc2VGbG9hdCIsInNhbGFyeSIsImJhc2ljVHJhbnNwb3J0IiwiZm9vZEJhc2ljIiwiYm91bmNlQWxsb3dhbmNlcyIsIm90aGVyIiwidG9GaXhlZCIsInBsYW5pbmdGaWx0ZXJJbmZvIiwiZmlsdGVyUCIsImZpbHRlckl0ZW1JbmZvcm1hdGlvbiIsImhhbmRsZVBsYW5uaW5nRGF0ZUNoYW5nZSIsImhhbmRsZUNoYW5nZVByb2plY3QiLCJoYW5kbGVDaGFuZ2VTZXJ2aWNlIiwic2VydmljZU5hbWUiLCJjdXN0b21lck5hbWUiLCJhcnJheU5ldyIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJsb2FkaW5nT3Blbk1vZGFsIiwic2V0TG9hZGluZ09wZW5Nb2RhbCIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiaGFuZGxlT3BlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVDbG9zZUVycm9yIiwiaGFuZGxlRGVjaXNpb24iLCJoaXN0b3J5IiwiYmFjayIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWYwIiwiUmVmZXJlbmNlSW5mbyIsInBlcnNvbiIsImRhdGVOb3RpZmljYXRpb24iLCJwb3N0IiwiX3giLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4Iiwic2F2aW5nIiwic2V0U2F2aW5nIiwiaGFuZGxlU3VibWl0IiwiX3JlZjEiLCJzYXZlQXR0ZW5kYW5jZSIsIlByb21pc2UiLCJhbGwiLCJfeDIiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJvblN1Ym1pdCIsImNvbnRhaW5lciIsInBhZGRpbmciLCJpdGVtIiwieHMiLCJkYXRlQWRhcHRlciIsImNvbXBvbmVudHMiLCJyZXF1aXJlZCIsImxhYmVsIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvcHRpb25zIiwiZ2V0T3B0aW9uTGFiZWwiLCJyZW5kZXJPcHRpb24iLCJkZXNjcmlwdGlvbiIsInJlbmRlcklucHV0IiwicGFyYW1zIiwiaW5wdXRWYWx1ZSIsIm9uSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5ld0lucHV0VmFsdWUiLCJmaWx0ZXJPcHRpb25zIiwiX3JlZjEwIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIl9yZWYxMSIsImZsb2F0IiwicmlnaHQiLCJ0aXRsZSIsInBsYWNlbWVudCIsImdhcCIsIm11bHRpbGluZSIsImRpc2FibGVDbGVhcmFibGUiLCJyb3dzIiwiY3Vyc29yIiwidHlwZSIsInRleHRBbGlnbiIsIm9uQ2xvc2UiLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJPdXRsZXQiLCJOYXZMaW5rIiwidXNlTG9jYXRpb24iLCJBY2NvdW50Qm94IiwiQWxsSW5jbHVzaXZlIiwiSG9tZSIsIkFzc2lnbm1lbnRJbmQiLCJTdXBlcnZpc2VkVXNlckNpcmNsZSIsIkN1cnJlbmN5RXhjaGFuZ2UiLCJTZXR0aW5nc0ljb24iLCJHcm91cHNJY29uIiwiUGF5bWVudEljb24iLCJEYXNoYm9hcmRJY29uIiwiQ29udGFjdHNJY29uIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbUljb24iLCJMaXN0SXRlbVRleHQiLCJtYWtlU3R5bGVzIiwiRnJhZ21lbnQiLCJwcmltYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==