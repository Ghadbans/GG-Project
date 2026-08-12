"use strict";
exports.id = "src_js_AdminView1_PageView_Payment_PaymentInformationForm_js";
exports.ids = ["src_js_AdminView1_PageView_Payment_PaymentInformationForm_js"];
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

/***/ "./src/js/AdminView1/PageView/Payment/PaymentInformationForm.js"
/*!**********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/Payment/PaymentInformationForm.js ***!
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/OutlinedInput/OutlinedInput.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
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
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../utils/apiCache */ "./src/js/utils/apiCache.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
var _excluded = ["className"];
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







































var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref => {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_24__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref3 => {
  var theme = _ref3.theme,
    open = _ref3.open;
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
})(_ref4 => {
  var theme = _ref4.theme,
    open = _ref4.open;
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
function PaymentInformationForm() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_35__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_46__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_46__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__.setUser)({
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
        return _ref5.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_47__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    amount = _useState2[0],
    setAmount = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    customer = _useState4[0],
    setCustomer = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCustomer = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/customer"));
          setCustomer(res.data.data.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchCustomer() {
        return _ref6.apply(this, arguments);
      };
    }();
    fetchCustomer();
  }, []);
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      _id: null,
      customerName: null,
      billingAddress: null,
      billingCity: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    customerName = _useState6[0],
    setCustomerName = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    bankCharge = _useState8[0],
    setBankCharge = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    modes = _useState0[0],
    setModes = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState1, 2),
    reason = _useState10[0],
    setReason = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    paymentDate = _useState12[0],
    setPaymentDate = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    description = _useState14[0],
    setDescription = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    paymentNumber = _useState16[0],
    setPaymentNumber = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    rate = _useState18[0],
    setRate = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Payment'),
    _useState20 = _slicedToArray(_useState19, 2),
    transactionType = _useState20[0],
    setTransactionType = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Cleared'),
    _useState22 = _slicedToArray(_useState21, 2),
    status = _useState22[0],
    setStatus = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Payment'),
    _useState24 = _slicedToArray(_useState23, 2),
    paymentType = _useState24[0],
    setPaymentType = _useState24[1]; // Detailed type

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-last-saved-payment"));
          var num = res.data && res.data.paymentNumber ? parseInt(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.paymentNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.paymentNumber) || 0) : 0;
          setPaymentNumber(num + 1);
          var resRate = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/rate"));
          resRate.data.data.map(row => setRate(row.rate));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchlastNumber() {
        return _ref7.apply(this, arguments);
      };
    }();
    fetchlastNumber();
  }, []);
  // get Invoice 
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    invoice = _useState26[0],
    setInvoice = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    project = _useState28[0],
    setProject = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState30 = _slicedToArray(_useState29, 2),
    oldInvoice = _useState30[0],
    setOldInvoice = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState32 = _slicedToArray(_useState31, 2),
    customerId = _useState32[0],
    setCustomerId = _useState32[1];
  var handleChangeCustomer = newValue => {
    var selectedOptions = customer.find(option => option === newValue);
    setCustomerName({
      _id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      customerName: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.Customer,
      billingAddress: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingAddress,
      billingCity: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.billingCity
    });
    setCustomerId(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id);
  };
  var handleClear = () => {
    setCustomerName({
      _id: null,
      customerName: null,
      billingAddress: null,
      billingCity: null
    });
    setInvoice([]);
    setCustomerId(null);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/invoice?summary=true"));
          var resProject = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/projects"));
          var resPurchase = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/purchase?summary=true"));
          if (customerId !== null) {
            if (reason === "Invoice") {
              var _res$data3;
              var filterData = (_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.filter(row => row.customerName._id === customerId);
              setOldInvoice(filterData);
              setInvoice(filterData.filter(row => row.status === 'Sent' || row.status === 'Partially-Paid').map(row => ({
                id: row._id,
                customerName: row.customerName,
                total: 0,
                amountPaidFC: 0,
                amountPaidUSD: 0,
                rateChange: rate,
                totalConverted: 0,
                Ref: row.invoiceNumber,
                prefix: row.ReferenceName2 || row.invoicePurchase === 'Purchased' ? "P-" : "INV-",
                balanceDue: row.balanceDue,
                invoiceAmount: row.totalInvoice,
                status: row.status,
                invoiceDate: row.invoiceDate
              })));
            } else if (reason === "Project") {
              var _resProject$data;
              var filterData2 = (_resProject$data = resProject.data) === null || _resProject$data === void 0 || (_resProject$data = _resProject$data.data) === null || _resProject$data === void 0 ? void 0 : _resProject$data.filter(row => {
                var _row$customerName;
                return ((_row$customerName = row.customerName) === null || _row$customerName === void 0 ? void 0 : _row$customerName._id) === customerId && row.status === "On-Going";
              });
              setProject(filterData2);
              setInvoice(filterData2.map(row => ({
                id: row._id,
                customerName: row.customerName,
                total: 0,
                amountPaidFC: 0,
                amountPaidUSD: 0,
                rateChange: rate,
                totalConverted: 0,
                Ref: row.projectNumber,
                prefix: "P-",
                balanceDue: row.budget !== undefined ? row.budget : 0,
                invoiceAmount: row.budget !== undefined ? row.budget : 0,
                status: "",
                invoiceDate: row.startDate
              })));
            } else if (reason === "Customer Credit") {
              setInvoice([{
                id: customerId,
                customerName: customerName,
                total: 0,
                amountPaidFC: 0,
                amountPaidUSD: 0,
                rateChange: rate,
                totalConverted: 0,
                Ref: 'Credit',
                balanceDue: oldCredit || 0,
                invoiceAmount: oldCredit || 0,
                status: "",
                invoiceDate: new Date()
              }]);
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchData();
  }, [customerId, reason]);
  var handleChangeCEO = (e, idRow) => {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var list = [...invoice];
    var i = invoice.findIndex(Item => Item.id === idRow);
    list[i][name] = value;
    list[i]['totalConverted'] = Math.round(list[i]['amountPaidFC'] / list[i]['rateChange'] * 100) / 100;
    list[i]['total'] = Math.round((parseFloat(list[i]['totalConverted']) + parseFloat(list[i]['amountPaidUSD'])) * 100) / 100;
    if (list[i]['total'] > list[i]['balanceDue'] && reason === "Invoice") {
      list[i]['amountPaidFC'] = 0;
      list[i]['amountPaidUSD'] = 0;
      list[i]['total'] = 0;
    }
    setInvoice(list);
  };
  var handlePayment = e => {
    e.preventDefault();
    var remaining = amount;
    var totalInvoiceExp = invoice.map(row => {
      var total = Math.min(remaining, row.balanceDue).toFixed(2);
      remaining -= total;
      return _objectSpread(_objectSpread({}, row), {}, {
        total
      });
    });
    setInvoice(totalInvoiceExp);
  };
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    PaymentReceivedFC = _useState34[0],
    setPaymentReceivedFC = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    PaymentReceivedUSD = _useState36[0],
    setPaymentReceivedUSD = _useState36[1];
  var balanceDueInfo = invoice.length > 0 ? invoice.reduce((sum, row) => sum + parseFloat(row.balanceDue), 0) : 0;
  var PaymentInfo = invoice.length > 0 ? invoice.reduce((sum, row) => sum + parseFloat(row.total), 0) : 0;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (modes !== "Credit") {
      var PaymentReceivedFC2 = invoice.length > 0 ? invoice.reduce((sum, row) => sum + parseFloat(row.amountPaidFC), 0) : 0;
      setPaymentReceivedFC(PaymentReceivedFC2);
      var PaymentReceivedUSD2 = invoice.length > 0 ? invoice.reduce((sum, row) => sum + parseFloat(row.amountPaidUSD), 0) : 0;
      setPaymentReceivedUSD(PaymentReceivedUSD2);
    }
  }, [invoice, modes]);
  var handleChangeModes = e => {
    setModes(e.target.value);
  };
  var totalConvertedFc = Math.round(PaymentReceivedFC / rate * 100) / 100;
  var totalUSdInfo = Math.round((parseFloat(totalConvertedFc) + parseFloat(PaymentReceivedUSD)) * 100) / 100;
  var remainingInvoice = transactionType === 'Payment' ? balanceDueInfo - PaymentInfo : balanceDueInfo + PaymentInfo;
  var remainingValue = reason === "Project" || reason === "Customer Credit" ? parseFloat(amount) : parseFloat(amount) - PaymentInfo;
  var remaining = transactionType === 'Payment' ? Math.round(remainingValue * 100) / 100 : -Math.round(remainingValue * 100) / 100;
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState38 = _slicedToArray(_useState37, 2),
    oldCredit = _useState38[0],
    setOldCredit = _useState38[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCustomer = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (customerId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-customer/").concat(customerId));
            setOldCredit(res.data.data.credit);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      });
      return function fetchCustomer() {
        return _ref9.apply(this, arguments);
      };
    }();
    fetchCustomer();
  }, [customerId]);
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState40 = _slicedToArray(_useState39, 2),
    credit = _useState40[0],
    setCredit = _useState40[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var totalR = isNaN(remaining + oldCredit) ? 0 : parseFloat(Number(remaining) + Number(oldCredit));
    setCredit(totalR);
  }, [oldCredit, remaining]);
  var TotalAmount = invoice.length > 0 ? invoice.filter(row => parseFloat(row.total) !== 0) : null;
  var handleUpdateInvoice = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* () {
      if (reason === "Invoice") {
        var invoiceUpdate = invoice.length > 0 ? invoice.map(row => {
          var correspondingId = oldInvoice.find(row2 => row2._id === row.id);
          if (!correspondingId) return null;
          var total = 0;
          if (transactionType === 'Payment') {
            total = parseFloat(correspondingId.total) + parseFloat(row.total);
          } else {
            total = Math.max(0, parseFloat(correspondingId.total) - parseFloat(row.total));
          }
          var difference = Math.round((correspondingId.totalInvoice - total) * 100) / 100;
          if (difference <= 0) {
            row.status = 'Paid';
          } else if (total > 0 && total < correspondingId.totalInvoice) {
            row.status = 'Partially-Paid';
          } else {
            row.status = 'Sent';
          }
          return {
            id: row.id,
            number: correspondingId.invoiceNumber,
            data: {
              total,
              balanceDue: difference,
              status: row.status
            }
          };
        }).filter(Boolean) : null;
        var updateRequest = invoiceUpdate !== null ? invoiceUpdate.filter(row => row.data.total !== 0).map(_ref1 => {
          var id = _ref1.id,
            data = _ref1.data;
          return axios__WEBPACK_IMPORTED_MODULE_32__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/update-invoice/").concat(id), data);
        }) : null;
        if (updateRequest !== null) {
          try {
            yield Promise.all(updateRequest);
          } catch (error) {
            console.log('An error as occur');
          }
        }
      }
    });
    return function handleUpdateInvoice() {
      return _ref0.apply(this, arguments);
    };
  }();
  var handleUpdateCredit = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* () {
      var data = {
        credit
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/update-customer/").concat(customerId), data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
    return function handleUpdateCredit() {
      return _ref10.apply(this, arguments);
    };
  }();
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    openBack = _useState42[0],
    setOpenBack = _useState42[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    loading = _useState44[0],
    setLoading = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    loadingOpenModal = _useState46[0],
    setLoadingOpenModal = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState48 = _slicedToArray(_useState47, 2),
    ErrorOpenModal = _useState48[0],
    setErrorOpenModal = _useState48[1];
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
    var _ref11 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created PAYMENT ',
        reason: "PAY-".concat(String(ReferenceInfoNumber).padStart(6, '0'), " For ").concat(customerName.customerName),
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x, _x2) {
      return _ref11.apply(this, arguments);
    };
  }();
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState50 = _slicedToArray(_useState49, 2),
    saving = _useState50[0],
    setSaving = _useState50[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      // Calculate tax paid based on the proportion of the invoice being paid
      var totalTaxPaid = 0;
      if (reason === "Invoice") {
        invoice.forEach(row => {
          var correspondingId = oldInvoice.find(r => r._id === row.id);
          if (correspondingId && correspondingId.tax && correspondingId.tax > 0 && row.total > 0) {
            // tax paid = (amount paid / total invoice amount) * total invoice tax
            var proportion = row.total / correspondingId.totalInvoice;
            totalTaxPaid += correspondingId.tax * proportion;
          }
        });
      }
      var data = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_52__["default"])(),
        customerName,
        amount,
        bankCharge,
        modes,
        paymentDate,
        TotalAmount,
        paymentNumber,
        description,
        PaymentReceivedFC,
        reason,
        PaymentReceivedUSD,
        remaining,
        transactionType,
        status,
        tax: Math.round(totalTaxPaid * 100) / 100,
        synced: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/create-payment"), data);
        if (res) {
          (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_40__.invalidateCache)('/payment');
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.paymentNumber;
          handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
          // handleOpen();
          handleUpdateInvoice();
          handleUpdateCredit();
          handleOpen();
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x3) {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_30__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Add new Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_42__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_51__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_50__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_48__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_31__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_29__["default"], {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
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
    xs: 12
  }, customerName.customerName !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '80px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    multiline: true,
    label: "Customer Name",
    value: customerName.customerName,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleClear
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disableClearable: true,
    options: customer,
    getOptionLabel: option => option.Customer,
    onChange: (e, newValue) => handleChangeCustomer(newValue),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, params, {
      label: "Customer Name",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "reason"
  }, "Payment Reason"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: true,
    id: "reason",
    name: "reason",
    value: reason,
    label: "Payment Reason",
    onChange: e => {
      setReason(e.target.value);
      if (e.target.value === "Project" && modes === "Credit") {
        setModes("");
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Project"
  }, "Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Invoice"
  }, "Invoice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Customer Credit"
  }, "Customer Credit")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "transactionType"
  }, "Transaction Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: true,
    id: "transactionType",
    name: "transactionType",
    value: transactionType,
    label: "Transaction Type",
    onChange: e => setTransactionType(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Payment"
  }, "Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Refund"
  }, "Refund")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "status"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: true,
    id: "status",
    name: "status",
    value: status,
    label: "Status",
    onChange: e => setStatus(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Cleared"
  }, "Cleared"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Pending"
  }, "Pending"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Voided"
  }, "Voided")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "modes"
  }, "Payment Modes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: true,
    id: "modes",
    name: "modes",
    value: modes,
    label: "Payment Modes",
    onChange: e => handleChangeModes(e)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Cash"
  }, "Cash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Bank Transfer"
  }, "Bank Transfer"), reason !== "Project" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Credit"
  }, "Credit")))), customerId && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body2",
    color: "textSecondary"
  }, "Customer Available Credit: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "$", oldCredit === null || oldCredit === void 0 ? void 0 : oldCredit.toFixed(2)))), modes === "" || reason === "" ? "" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: modes === 'Bank Transfer' ? 7 : 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    htmlFor: "amount"
  }, "Amount Received"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    required: true,
    id: "amount",
    onChange: e => setAmount(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "USD"),
    label: "Amount Received"
  })))), modes === 'Bank Transfer' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    htmlFor: "bankCharge"
  }, "Bank Charge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    type: "number",
    id: "bankCharge",
    onChange: e => setBankCharge(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "USD"),
    label: "Bank Charge",
    placeholder: "Bank Charge If Any: Optional"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_37__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_38__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_36__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_39__.DatePicker, {
    required: true,
    name: "paymentDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_41___default()(paymentDate),
    onChange: date => setPaymentDate(date),
    sx: {
      m: 1,
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    htmlFor: "paymentNumber"
  }, "Payment Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    type: "number",
    id: "paymentNumber",
    name: "paymentNumber",
    label: "Payment Number",
    value: paymentNumber,
    onChange: e => setPaymentNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "PAY-")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "description",
    name: "description",
    multiline: true,
    rows: 4,
    value: description,
    label: "Description",
    onChange: e => setDescription(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), modes === 'Credit' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    sx: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    htmlFor: "amountPaidFC"
  }, "Amount Paid FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      width: '200px',
      backgroundColor: 'white'
    },
    id: "PaymentReceivedFC",
    name: "PaymentReceivedFC",
    type: "number",
    value: PaymentReceivedFC,
    onChange: e => setPaymentReceivedFC(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "FC"),
    label: "Amount Paid FC"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    htmlFor: "rate"
  }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      width: '150px',
      backgroundColor: 'white'
    },
    id: "rate",
    name: "rate",
    value: rate,
    onChange: e => setRate(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "$"),
    label: "Rate"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    htmlFor: "amountPaidFC"
  }, "Amount Paid USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      width: '200px',
      backgroundColor: 'white'
    },
    id: "PaymentReceivedUSD",
    name: "PaymentReceivedUSD",
    type: "number",
    value: PaymentReceivedUSD,
    onChange: e => setPaymentReceivedUSD(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "$"),
    label: "Amount Paid USD"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    htmlFor: "amountPaidFC"
  }, "Total Paid USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      width: '200px',
      backgroundColor: 'white'
    },
    id: "totalUSdInfo",
    name: "totalUSdInfo",
    type: "number",
    value: totalUSdInfo,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "$"),
    label: "Total Paid USD"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, invoice === null || invoice === void 0 ? void 0 : invoice.map((row, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: row.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, dayjs__WEBPACK_IMPORTED_MODULE_41___default()(row.invoiceDate).format('DD/MM')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, row.prefix === "P-" || row.prefix === "P" || reason === "Project" && !row.prefix ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      sx: {
        width: '150px',
        backgroundColor: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      htmlFor: "projectNumber"
    }, "Project Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      disabled: true,
      type: "text",
      id: "Ref",
      name: "Ref",
      label: "Project Number",
      value: String(row.Ref).padStart(6, '0'),
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
        position: "start"
      }, row.prefix || "P-")
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      sx: {
        width: '150px',
        backgroundColor: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      htmlFor: "invoiceNumber"
    }, "Invoice Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      disabled: true,
      type: "text",
      id: "Ref",
      name: "Ref",
      label: "Invoice Number",
      value: String(row.Ref).padStart(6, '0'),
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
        position: "start"
      }, row.prefix || "INV-")
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "InvoiceAmount"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      htmlFor: "subtotal"
    }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      sx: {
        width: '250px',
        backgroundColor: 'white'
      },
      type: "number",
      id: "subtotal",
      value: row.balanceDue,
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
        position: "start"
      }, "USD"),
      label: "subtotal"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      htmlFor: "amountPaidFC"
    }, "Amount Paid FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      sx: {
        width: '200px',
        backgroundColor: 'white'
      },
      id: "amountPaidFC",
      name: "amountPaidFC",
      value: row.amountPaidFC,
      onChange: e => handleChangeCEO(e, row.id),
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
        position: "start"
      }, "FC"),
      label: "Amount Paid FC"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      htmlFor: "rateChange"
    }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      sx: {
        width: '90px',
        backgroundColor: 'white'
      },
      id: "rateChange",
      name: "rateChange",
      value: row.rateChange,
      onChange: e => handleChangeCEO(e, row.id),
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
        position: "start"
      }, "$"),
      label: "Rate"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      htmlFor: "amountPaidUSD"
    }, "Amount Paid USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      sx: {
        width: '200px',
        backgroundColor: 'white'
      },
      id: "amountPaidUSD",
      name: "amountPaidUSD",
      value: row.amountPaidUSD,
      onChange: e => handleChangeCEO(e, row.id),
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
        position: "start"
      }, "USD"),
      label: "Amount Paid USD"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      htmlFor: "total"
    }, "Total Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      disabled: true,
      sx: {
        width: '200px',
        backgroundColor: 'white'
      },
      id: "total",
      name: "total",
      value: row.total,
      onChange: e => handleChangeCEO(e, row.id),
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
        position: "start"
      }, "USD"),
      label: "Total Paid"
    }))));
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: ' 100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '40px',
      width: '50%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, " Invoices Total Amount ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " $ "), balanceDueInfo.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, " Amount Received ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " $ "), amount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, " Amount Paid FC ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " FC "), PaymentReceivedFC.toString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, " Amount Paid USD ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " $ "), PaymentReceivedUSD.toString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, " Total Paid USD ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " $ "), modes === 'Credit' ? totalUSdInfo.toFixed(2) : PaymentInfo.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, " Balance Due ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " $ "), remainingInvoice.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, " Credit ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " $ "), remaining))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Do you want to stop making payment ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop making payment without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate('/PaymentView'),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_43__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_45__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_44__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentInformationForm);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUGF5bWVudF9QYXltZW50SW5mb3JtYXRpb25Gb3JtX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyxnQjs7Ozs7Ozs7Ozs7Ozs7OztBQ1pEOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLHlCQUF5QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04xQixDQUFtRDtBQUNRO0FBQ25DO0FBQ0U7QUFDMEI7QUFDc0I7QUFDUjtBQUMySjtBQUM3SjtBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDUTtBQUNBO0FBQ2M7QUFDSTtBQUN6QztBQUNzRDtBQUM3QjtBQUNIO0FBQ29CO0FBQ2E7QUFDaEI7QUFDSjtBQUNGO0FBQ2hDO0FBQzRCO0FBQ1E7QUFDVjtBQUNMO0FBQ1E7QUFDK0I7QUFDdEM7QUFDRjtBQUNRO0FBQ1E7QUFFcEM7QUFFMUIsSUFBTThELFlBQVksR0FBRzlDLDBEQUFNLENBQUMrQyxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDaERuRSwwREFBQSxDQUFDeUIsOERBQU8sRUFBQTRDLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxF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QUFRO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxTQUFTLDhEQUFlO0FBQ3hCOztBQUVBLGlFQUFlLEVBQUUsRTs7Ozs7Ozs7Ozs7Ozs7O0FDNUJjOztBQUUvQjtBQUNBLHFDQUFxQyxpREFBSztBQUMxQzs7QUFFQSxpRUFBZSxRQUFRLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vUmVtb3ZlQ2lyY2xlT3V0bGluZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvUGF5bWVudC9QYXltZW50SW5mb3JtYXRpb25Gb3JtLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvY29tcG9uZW50L1NpZGViYXJEYXNoMS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS9uYXRpdmUuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLW5vZGUvcmVnZXguanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLW5vZGUvcm5nLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1ub2RlL3N0cmluZ2lmeS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS92NC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tbm9kZS92YWxpZGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNMjAgMTFINy44M2w1LjU5LTUuNTlMMTIgNGwtOCA4IDggOCAxLjQxLTEuNDFMNy44MyAxM0gyMHpcIlxufSksICdBcnJvd0JhY2snKTsiLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk03IDExdjJoMTB2LTJ6bTUtOUM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMm0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOFwiXG59KSwgJ1JlbW92ZUNpcmNsZU91dGxpbmUnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXJEYXNoMSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZWJhckRhc2gxJztcclxuaW1wb3J0ICcuLi8uLi92aWV3LmNzcyc7XHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjb3VudENpcmNsZSc7XHJcbmltcG9ydCB7IE1lbnVJdGVtLCBHcmlkLCBJY29uQnV0dG9uLCBQYXBlciwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBzdHlsZWQsIEJveCwgQXV0b2NvbXBsZXRlLCBUYWJsZUNvbnRhaW5lciwgT3V0bGluZWRJbnB1dCwgSW5wdXRBZG9ybm1lbnQsIE1vZGFsLCBCYWNrZHJvcCwgRGl2aWRlciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBBcnJvd1Vwd2FyZE91dGxpbmVkLCBSZW1vdmVDaXJjbGVPdXRsaW5lIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IERlbW9Db250YWluZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL2ludGVybmFscy9kZW1vJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0xvY2FsaXphdGlvblByb3ZpZGVyJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9EYXRlUGlja2VyJztcclxuaW1wb3J0IHsgaW52YWxpZGF0ZUNhY2hlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXBpQ2FjaGUnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgQXJyb3dCYWNrIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgQ2xvc2UgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4uLy4uL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi4vLi4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5cclxuaW1wb3J0IHsgdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmNvbnN0IEJsYWNrVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gUGF5bWVudEluZm9ybWF0aW9uRm9ybSgpIHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcblxyXG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuXHJcbiAgY29uc3QgW2N1c3RvbWVyLCBzZXRDdXN0b21lcl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEN1c3RvbWVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2N1c3RvbWVyYClcclxuICAgICAgICBzZXRDdXN0b21lcihyZXMuZGF0YS5kYXRhLnJldmVyc2UoKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoQ3VzdG9tZXIoKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IFtjdXN0b21lck5hbWUsIHNldEN1c3RvbWVyTmFtZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBfaWQ6IG51bGwsXHJcbiAgICBjdXN0b21lck5hbWU6IG51bGwsXHJcbiAgICBiaWxsaW5nQWRkcmVzczogbnVsbCxcclxuICAgIGJpbGxpbmdDaXR5OiBudWxsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2JhbmtDaGFyZ2UsIHNldEJhbmtDaGFyZ2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW21vZGVzLCBzZXRNb2Rlc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGF5bWVudERhdGUsIHNldFBheW1lbnREYXRlXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICByZXR1cm4gZGF0ZVxyXG4gIH0pO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXltZW50TnVtYmVyLCBzZXRQYXltZW50TnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt0cmFuc2FjdGlvblR5cGUsIHNldFRyYW5zYWN0aW9uVHlwZV0gPSB1c2VTdGF0ZSgnUGF5bWVudCcpO1xyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnQ2xlYXJlZCcpO1xyXG4gIGNvbnN0IFtwYXltZW50VHlwZSwgc2V0UGF5bWVudFR5cGVdID0gdXNlU3RhdGUoJ1BheW1lbnQnKTsgLy8gRGV0YWlsZWQgdHlwZVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hsYXN0TnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1sYXN0LXNhdmVkLXBheW1lbnRgKVxyXG4gICAgICAgIGNvbnN0IG51bSA9IHJlcy5kYXRhICYmIHJlcy5kYXRhLnBheW1lbnROdW1iZXIgPyAocGFyc2VJbnQocmVzLmRhdGE/LmRhdGE/LnBheW1lbnROdW1iZXIgfHwgcmVzLmRhdGE/LnBheW1lbnROdW1iZXIgfHwgMCkpIDogMDtcclxuICAgICAgICBzZXRQYXltZW50TnVtYmVyKG51bSArIDEpXHJcbiAgICAgICAgY29uc3QgcmVzUmF0ZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3JhdGVgKVxyXG4gICAgICAgIHJlc1JhdGUuZGF0YS5kYXRhLm1hcCgocm93KSA9PiBzZXRSYXRlKHJvdy5yYXRlKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hsYXN0TnVtYmVyKClcclxuICB9LCBbXSlcclxuICAvLyBnZXQgSW52b2ljZSBcclxuICBjb25zdCBbaW52b2ljZSwgc2V0SW52b2ljZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Byb2plY3QsIHNldFByb2plY3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtvbGRJbnZvaWNlLCBzZXRPbGRJbnZvaWNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY3VzdG9tZXJJZCwgc2V0Q3VzdG9tZXJJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUN1c3RvbWVyID0gKG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSBjdXN0b21lci5maW5kKChvcHRpb24pID0+IG9wdGlvbiA9PT0gbmV3VmFsdWUpXHJcbiAgICBzZXRDdXN0b21lck5hbWUoe1xyXG4gICAgICBfaWQ6IHNlbGVjdGVkT3B0aW9ucz8uX2lkLFxyXG4gICAgICBjdXN0b21lck5hbWU6IHNlbGVjdGVkT3B0aW9ucz8uQ3VzdG9tZXIsXHJcbiAgICAgIGJpbGxpbmdBZGRyZXNzOiBzZWxlY3RlZE9wdGlvbnM/LmJpbGxpbmdBZGRyZXNzLFxyXG4gICAgICBiaWxsaW5nQ2l0eTogc2VsZWN0ZWRPcHRpb25zPy5iaWxsaW5nQ2l0eVxyXG4gICAgfSk7XHJcbiAgICBzZXRDdXN0b21lcklkKHNlbGVjdGVkT3B0aW9ucz8uX2lkKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbGVhciA9ICgpID0+IHtcclxuICAgIHNldEN1c3RvbWVyTmFtZSh7XHJcbiAgICAgIF9pZDogbnVsbCxcclxuICAgICAgY3VzdG9tZXJOYW1lOiBudWxsLFxyXG4gICAgICBiaWxsaW5nQWRkcmVzczogbnVsbCxcclxuICAgICAgYmlsbGluZ0NpdHk6IG51bGxcclxuICAgIH0pXHJcbiAgICBzZXRJbnZvaWNlKFtdKVxyXG4gICAgc2V0Q3VzdG9tZXJJZChudWxsKVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2ludm9pY2U/c3VtbWFyeT10cnVlYClcclxuICAgICAgICBjb25zdCByZXNQcm9qZWN0ID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcHJvamVjdHNgKVxyXG4gICAgICAgIGNvbnN0IHJlc1B1cmNoYXNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcHVyY2hhc2U/c3VtbWFyeT10cnVlYClcclxuICAgICAgICBpZiAoY3VzdG9tZXJJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgaWYgKHJlYXNvbiA9PT0gXCJJbnZvaWNlXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyRGF0YSA9IHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LmN1c3RvbWVyTmFtZS5faWQgPT09IGN1c3RvbWVySWQpO1xyXG4gICAgICAgICAgICBzZXRPbGRJbnZvaWNlKGZpbHRlckRhdGEpXHJcbiAgICAgICAgICAgIHNldEludm9pY2UoXHJcbiAgICAgICAgICAgICAgZmlsdGVyRGF0YS5maWx0ZXIoKHJvdykgPT4gcm93LnN0YXR1cyA9PT0gJ1NlbnQnIHx8IHJvdy5zdGF0dXMgPT09ICdQYXJ0aWFsbHktUGFpZCcpXHJcbiAgICAgICAgICAgICAgICAubWFwKChyb3cpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgIGlkOiByb3cuX2lkLFxyXG4gICAgICAgICAgICAgICAgICBjdXN0b21lck5hbWU6IHJvdy5jdXN0b21lck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICAgICAgICBhbW91bnRQYWlkRkM6IDAsXHJcbiAgICAgICAgICAgICAgICAgIGFtb3VudFBhaWRVU0Q6IDAsXHJcbiAgICAgICAgICAgICAgICAgIHJhdGVDaGFuZ2U6IHJhdGUsXHJcbiAgICAgICAgICAgICAgICAgIHRvdGFsQ29udmVydGVkOiAwLFxyXG4gICAgICAgICAgICAgICAgICBSZWY6IHJvdy5pbnZvaWNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICBwcmVmaXg6IChyb3cuUmVmZXJlbmNlTmFtZTIgfHwgcm93Lmludm9pY2VQdXJjaGFzZSA9PT0gJ1B1cmNoYXNlZCcpID8gXCJQLVwiIDogXCJJTlYtXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhbGFuY2VEdWU6IHJvdy5iYWxhbmNlRHVlLFxyXG4gICAgICAgICAgICAgICAgICBpbnZvaWNlQW1vdW50OiByb3cudG90YWxJbnZvaWNlLFxyXG4gICAgICAgICAgICAgICAgICBzdGF0dXM6IHJvdy5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgIGludm9pY2VEYXRlOiByb3cuaW52b2ljZURhdGVcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlYXNvbiA9PT0gXCJQcm9qZWN0XCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyRGF0YTIgPSByZXNQcm9qZWN0LmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuY3VzdG9tZXJOYW1lPy5faWQgPT09IGN1c3RvbWVySWQgJiYgcm93LnN0YXR1cyA9PT0gXCJPbi1Hb2luZ1wiKTtcclxuICAgICAgICAgICAgc2V0UHJvamVjdChmaWx0ZXJEYXRhMilcclxuICAgICAgICAgICAgc2V0SW52b2ljZShmaWx0ZXJEYXRhMi5tYXAoKHJvdykgPT4gKHtcclxuICAgICAgICAgICAgICBpZDogcm93Ll9pZCxcclxuICAgICAgICAgICAgICBjdXN0b21lck5hbWU6IHJvdy5jdXN0b21lck5hbWUsXHJcbiAgICAgICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgICAgICAgYW1vdW50UGFpZEZDOiAwLFxyXG4gICAgICAgICAgICAgIGFtb3VudFBhaWRVU0Q6IDAsXHJcbiAgICAgICAgICAgICAgcmF0ZUNoYW5nZTogcmF0ZSxcclxuICAgICAgICAgICAgICB0b3RhbENvbnZlcnRlZDogMCxcclxuICAgICAgICAgICAgICBSZWY6IHJvdy5wcm9qZWN0TnVtYmVyLFxyXG4gICAgICAgICAgICAgIHByZWZpeDogXCJQLVwiLFxyXG4gICAgICAgICAgICAgIGJhbGFuY2VEdWU6IHJvdy5idWRnZXQgIT09IHVuZGVmaW5lZCA/IHJvdy5idWRnZXQgOiAwLFxyXG4gICAgICAgICAgICAgIGludm9pY2VBbW91bnQ6IHJvdy5idWRnZXQgIT09IHVuZGVmaW5lZCA/IHJvdy5idWRnZXQgOiAwLFxyXG4gICAgICAgICAgICAgIHN0YXR1czogXCJcIixcclxuICAgICAgICAgICAgICBpbnZvaWNlRGF0ZTogcm93LnN0YXJ0RGF0ZVxyXG4gICAgICAgICAgICB9KSkpXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlYXNvbiA9PT0gXCJDdXN0b21lciBDcmVkaXRcIikge1xyXG4gICAgICAgICAgICBzZXRJbnZvaWNlKFt7XHJcbiAgICAgICAgICAgICAgaWQ6IGN1c3RvbWVySWQsXHJcbiAgICAgICAgICAgICAgY3VzdG9tZXJOYW1lOiBjdXN0b21lck5hbWUsXHJcbiAgICAgICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgICAgICAgYW1vdW50UGFpZEZDOiAwLFxyXG4gICAgICAgICAgICAgIGFtb3VudFBhaWRVU0Q6IDAsXHJcbiAgICAgICAgICAgICAgcmF0ZUNoYW5nZTogcmF0ZSxcclxuICAgICAgICAgICAgICB0b3RhbENvbnZlcnRlZDogMCxcclxuICAgICAgICAgICAgICBSZWY6ICdDcmVkaXQnLFxyXG4gICAgICAgICAgICAgIGJhbGFuY2VEdWU6IG9sZENyZWRpdCB8fCAwLFxyXG4gICAgICAgICAgICAgIGludm9pY2VBbW91bnQ6IG9sZENyZWRpdCB8fCAwLFxyXG4gICAgICAgICAgICAgIHN0YXR1czogXCJcIixcclxuICAgICAgICAgICAgICBpbnZvaWNlRGF0ZTogbmV3IERhdGUoKVxyXG4gICAgICAgICAgICB9XSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW2N1c3RvbWVySWQsIHJlYXNvbl0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUNFTyA9IChlLCBpZFJvdykgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBsaXN0ID0gWy4uLmludm9pY2VdXHJcbiAgICBjb25zdCBpID0gaW52b2ljZS5maW5kSW5kZXgoSXRlbSA9PiBJdGVtLmlkID09PSBpZFJvdylcclxuICAgIGxpc3RbaV1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQ29udmVydGVkJ10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydhbW91bnRQYWlkRkMnXSAvIGxpc3RbaV1bJ3JhdGVDaGFuZ2UnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWwnXSA9IE1hdGgucm91bmQoKHBhcnNlRmxvYXQobGlzdFtpXVsndG90YWxDb252ZXJ0ZWQnXSkgKyBwYXJzZUZsb2F0KGxpc3RbaV1bJ2Ftb3VudFBhaWRVU0QnXSkpICogMTAwKSAvIDEwMDtcclxuICAgIGlmIChsaXN0W2ldWyd0b3RhbCddID4gbGlzdFtpXVsnYmFsYW5jZUR1ZSddICYmIHJlYXNvbiA9PT0gXCJJbnZvaWNlXCIpIHtcclxuICAgICAgbGlzdFtpXVsnYW1vdW50UGFpZEZDJ10gPSAwXHJcbiAgICAgIGxpc3RbaV1bJ2Ftb3VudFBhaWRVU0QnXSA9IDBcclxuICAgICAgbGlzdFtpXVsndG90YWwnXSA9IDBcclxuICAgIH1cclxuICAgIHNldEludm9pY2UobGlzdClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlUGF5bWVudCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgcmVtYWluaW5nID0gYW1vdW50O1xyXG4gICAgY29uc3QgdG90YWxJbnZvaWNlRXhwID0gaW52b2ljZS5tYXAoKHJvdykgPT4ge1xyXG4gICAgICBjb25zdCB0b3RhbCA9IE1hdGgubWluKHJlbWFpbmluZywgcm93LmJhbGFuY2VEdWUpLnRvRml4ZWQoMik7XHJcbiAgICAgIHJlbWFpbmluZyAtPSB0b3RhbFxyXG4gICAgICByZXR1cm4geyAuLi5yb3csIHRvdGFsIH1cclxuICAgIH0pXHJcbiAgICBzZXRJbnZvaWNlKHRvdGFsSW52b2ljZUV4cClcclxuICB9XHJcbiAgY29uc3QgW1BheW1lbnRSZWNlaXZlZEZDLCBzZXRQYXltZW50UmVjZWl2ZWRGQ10gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtQYXltZW50UmVjZWl2ZWRVU0QsIHNldFBheW1lbnRSZWNlaXZlZFVTRF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IGJhbGFuY2VEdWVJbmZvID0gaW52b2ljZS5sZW5ndGggPiAwID8gaW52b2ljZS5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyBwYXJzZUZsb2F0KHJvdy5iYWxhbmNlRHVlKSwgMCkgOiAwXHJcbiAgY29uc3QgUGF5bWVudEluZm8gPSBpbnZvaWNlLmxlbmd0aCA+IDAgPyBpbnZvaWNlLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHBhcnNlRmxvYXQocm93LnRvdGFsKSwgMCkgOiAwXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChtb2RlcyAhPT0gXCJDcmVkaXRcIikge1xyXG4gICAgICBjb25zdCBQYXltZW50UmVjZWl2ZWRGQzIgPSBpbnZvaWNlLmxlbmd0aCA+IDAgPyBpbnZvaWNlLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHBhcnNlRmxvYXQocm93LmFtb3VudFBhaWRGQyksIDApIDogMFxyXG4gICAgICBzZXRQYXltZW50UmVjZWl2ZWRGQyhQYXltZW50UmVjZWl2ZWRGQzIpXHJcbiAgICAgIGNvbnN0IFBheW1lbnRSZWNlaXZlZFVTRDIgPSBpbnZvaWNlLmxlbmd0aCA+IDAgPyBpbnZvaWNlLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHBhcnNlRmxvYXQocm93LmFtb3VudFBhaWRVU0QpLCAwKSA6IDBcclxuICAgICAgc2V0UGF5bWVudFJlY2VpdmVkVVNEKFBheW1lbnRSZWNlaXZlZFVTRDIpXHJcbiAgICB9XHJcbiAgfSwgW2ludm9pY2UsIG1vZGVzXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlTW9kZXMgPSAoZSkgPT4ge1xyXG4gICAgc2V0TW9kZXMoZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCB0b3RhbENvbnZlcnRlZEZjID0gTWF0aC5yb3VuZCgoUGF5bWVudFJlY2VpdmVkRkMgLyByYXRlKSAqIDEwMCkgLyAxMDA7XHJcbiAgY29uc3QgdG90YWxVU2RJbmZvID0gTWF0aC5yb3VuZCgocGFyc2VGbG9hdCh0b3RhbENvbnZlcnRlZEZjKSArIHBhcnNlRmxvYXQoUGF5bWVudFJlY2VpdmVkVVNEKSkgKiAxMDApIC8gMTAwO1xyXG5cclxuICBjb25zdCByZW1haW5pbmdJbnZvaWNlID0gdHJhbnNhY3Rpb25UeXBlID09PSAnUGF5bWVudCcgPyBiYWxhbmNlRHVlSW5mbyAtIFBheW1lbnRJbmZvIDogYmFsYW5jZUR1ZUluZm8gKyBQYXltZW50SW5mb1xyXG4gIGNvbnN0IHJlbWFpbmluZ1ZhbHVlID0gKHJlYXNvbiA9PT0gXCJQcm9qZWN0XCIgfHwgcmVhc29uID09PSBcIkN1c3RvbWVyIENyZWRpdFwiKSA/IHBhcnNlRmxvYXQoYW1vdW50KSA6IChwYXJzZUZsb2F0KGFtb3VudCkgLSBQYXltZW50SW5mbyk7XHJcbiAgY29uc3QgcmVtYWluaW5nID0gdHJhbnNhY3Rpb25UeXBlID09PSAnUGF5bWVudCdcclxuICAgID8gTWF0aC5yb3VuZChyZW1haW5pbmdWYWx1ZSAqIDEwMCkgLyAxMDBcclxuICAgIDogLU1hdGgucm91bmQocmVtYWluaW5nVmFsdWUgKiAxMDApIC8gMTAwXHJcblxyXG4gIGNvbnN0IFtvbGRDcmVkaXQsIHNldE9sZENyZWRpdF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEN1c3RvbWVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoY3VzdG9tZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtY3VzdG9tZXIvJHtjdXN0b21lcklkfWApXHJcbiAgICAgICAgICBzZXRPbGRDcmVkaXQocmVzLmRhdGEuZGF0YS5jcmVkaXQpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hDdXN0b21lcigpXHJcbiAgfSwgW2N1c3RvbWVySWRdKVxyXG5cclxuICBjb25zdCBbY3JlZGl0LCBzZXRDcmVkaXRdID0gdXNlU3RhdGUoMClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdG90YWxSID0gaXNOYU4ocmVtYWluaW5nICsgb2xkQ3JlZGl0KSA/IDAgOiBwYXJzZUZsb2F0KE51bWJlcihyZW1haW5pbmcpICsgTnVtYmVyKG9sZENyZWRpdCkpXHJcbiAgICBzZXRDcmVkaXQodG90YWxSKVxyXG4gIH0sIFtvbGRDcmVkaXQsIHJlbWFpbmluZ10pXHJcblxyXG4gIGNvbnN0IFRvdGFsQW1vdW50ID0gaW52b2ljZS5sZW5ndGggPiAwID8gaW52b2ljZS5maWx0ZXIoKHJvdykgPT4gcGFyc2VGbG9hdChyb3cudG90YWwpICE9PSAwKSA6IG51bGxcclxuXHJcbiAgY29uc3QgaGFuZGxlVXBkYXRlSW52b2ljZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChyZWFzb24gPT09IFwiSW52b2ljZVwiKSB7XHJcbiAgICAgIGNvbnN0IGludm9pY2VVcGRhdGUgPSBpbnZvaWNlLmxlbmd0aCA+IDAgPyBpbnZvaWNlLm1hcCgocm93KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29ycmVzcG9uZGluZ0lkID0gb2xkSW52b2ljZS5maW5kKChyb3cyKSA9PiByb3cyLl9pZCA9PT0gcm93LmlkKVxyXG4gICAgICAgIGlmICghY29ycmVzcG9uZGluZ0lkKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIGlmICh0cmFuc2FjdGlvblR5cGUgPT09ICdQYXltZW50Jykge1xyXG4gICAgICAgICAgdG90YWwgPSBwYXJzZUZsb2F0KGNvcnJlc3BvbmRpbmdJZC50b3RhbCkgKyBwYXJzZUZsb2F0KHJvdy50b3RhbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRvdGFsID0gTWF0aC5tYXgoMCwgcGFyc2VGbG9hdChjb3JyZXNwb25kaW5nSWQudG90YWwpIC0gcGFyc2VGbG9hdChyb3cudG90YWwpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGlmZmVyZW5jZSA9IE1hdGgucm91bmQoKGNvcnJlc3BvbmRpbmdJZC50b3RhbEludm9pY2UgLSB0b3RhbCkgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgIGlmIChkaWZmZXJlbmNlIDw9IDApIHtcclxuICAgICAgICAgIHJvdy5zdGF0dXMgPSAnUGFpZCdcclxuICAgICAgICB9IGVsc2UgaWYgKHRvdGFsID4gMCAmJiB0b3RhbCA8IGNvcnJlc3BvbmRpbmdJZC50b3RhbEludm9pY2UpIHtcclxuICAgICAgICAgIHJvdy5zdGF0dXMgPSAnUGFydGlhbGx5LVBhaWQnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJvdy5zdGF0dXMgPSAnU2VudCdcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiByb3cuaWQsXHJcbiAgICAgICAgICBudW1iZXI6IGNvcnJlc3BvbmRpbmdJZC5pbnZvaWNlTnVtYmVyLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0b3RhbCxcclxuICAgICAgICAgICAgYmFsYW5jZUR1ZTogZGlmZmVyZW5jZSxcclxuICAgICAgICAgICAgc3RhdHVzOiByb3cuc3RhdHVzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KS5maWx0ZXIoQm9vbGVhbikgOiBudWxsXHJcblxyXG4gICAgICBjb25zdCB1cGRhdGVSZXF1ZXN0ID0gaW52b2ljZVVwZGF0ZSAhPT0gbnVsbCA/XHJcbiAgICAgICAgaW52b2ljZVVwZGF0ZS5maWx0ZXIoKHJvdykgPT4gcm93LmRhdGEudG90YWwgIT09IDApLm1hcCgoeyBpZCwgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLWludm9pY2UvJHtpZH1gLCBkYXRhKVxyXG4gICAgICAgIH0pIDogbnVsbFxyXG4gICAgICBpZiAodXBkYXRlUmVxdWVzdCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh1cGRhdGVSZXF1ZXN0KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0FuIGVycm9yIGFzIG9jY3VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZUNyZWRpdCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGNyZWRpdFxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLWN1c3RvbWVyLyR7Y3VzdG9tZXJJZH1gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtvcGVuQmFjaywgc2V0T3BlbkJhY2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuQmFjayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW5CYWNrKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VCYWNrID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkJhY2soZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRXJyb3JPcGVuTW9kYWwsIHNldEVycm9yT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9ICgpID0+IHtcclxuXHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcblxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlY2lzaW9uID0gKG5hdmlnYXRlKSA9PiB7XHJcbiAgICAvL05hdmlnYXRlIEJhc2VkIG9uIHRoIERlY2lzaW9uXHJcbiAgICBpZiAobmF2aWdhdGUgPT09ICdwcmV2aW91cycpIHtcclxuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0ZSA9PT0gJ3N0YXknKSB7XHJcbiAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jIChSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86IFJlZmVyZW5jZUluZm8sXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBDcmVhdGVkIFBBWU1FTlQgJyxcclxuICAgICAgcmVhc29uOiBgUEFZLSR7U3RyaW5nKFJlZmVyZW5jZUluZm9OdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyl9IEZvciAke2N1c3RvbWVyTmFtZS5jdXN0b21lck5hbWV9YCxcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogbmV3IERhdGUoKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2F2aW5nKCd0cnVlJylcclxuICAgIC8vIENhbGN1bGF0ZSB0YXggcGFpZCBiYXNlZCBvbiB0aGUgcHJvcG9ydGlvbiBvZiB0aGUgaW52b2ljZSBiZWluZyBwYWlkXHJcbiAgICBsZXQgdG90YWxUYXhQYWlkID0gMDtcclxuICAgIGlmIChyZWFzb24gPT09IFwiSW52b2ljZVwiKSB7XHJcbiAgICAgIGludm9pY2UuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvcnJlc3BvbmRpbmdJZCA9IG9sZEludm9pY2UuZmluZChyID0+IHIuX2lkID09PSByb3cuaWQpO1xyXG4gICAgICAgIGlmIChjb3JyZXNwb25kaW5nSWQgJiYgY29ycmVzcG9uZGluZ0lkLnRheCAmJiBjb3JyZXNwb25kaW5nSWQudGF4ID4gMCAmJiByb3cudG90YWwgPiAwKSB7XHJcbiAgICAgICAgICAvLyB0YXggcGFpZCA9IChhbW91bnQgcGFpZCAvIHRvdGFsIGludm9pY2UgYW1vdW50KSAqIHRvdGFsIGludm9pY2UgdGF4XHJcbiAgICAgICAgICBjb25zdCBwcm9wb3J0aW9uID0gcm93LnRvdGFsIC8gY29ycmVzcG9uZGluZ0lkLnRvdGFsSW52b2ljZTtcclxuICAgICAgICAgIHRvdGFsVGF4UGFpZCArPSBjb3JyZXNwb25kaW5nSWQudGF4ICogcHJvcG9ydGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIF9pZDogdjQoKSxcclxuICAgICAgY3VzdG9tZXJOYW1lLFxyXG4gICAgICBhbW91bnQsXHJcbiAgICAgIGJhbmtDaGFyZ2UsXHJcbiAgICAgIG1vZGVzLFxyXG4gICAgICBwYXltZW50RGF0ZSxcclxuICAgICAgVG90YWxBbW91bnQsXHJcbiAgICAgIHBheW1lbnROdW1iZXIsXHJcbiAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICBQYXltZW50UmVjZWl2ZWRGQyxcclxuICAgICAgcmVhc29uLFxyXG4gICAgICBQYXltZW50UmVjZWl2ZWRVU0QsXHJcbiAgICAgIHJlbWFpbmluZyxcclxuICAgICAgdHJhbnNhY3Rpb25UeXBlLFxyXG4gICAgICBzdGF0dXMsXHJcbiAgICAgIHRheDogTWF0aC5yb3VuZCh0b3RhbFRheFBhaWQgKiAxMDApIC8gMTAwLFxyXG4gICAgICBzeW5jZWQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLXBheW1lbnRgLCBkYXRhKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGludmFsaWRhdGVDYWNoZSgnL3BheW1lbnQnKTtcclxuICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvID0gcmVzLmRhdGEuZGF0YS5faWRcclxuICAgICAgICBjb25zdCBSZWZlcmVuY2VJbmZvTnVtYmVyID0gcmVzLmRhdGEuZGF0YS5wYXltZW50TnVtYmVyXHJcbiAgICAgICAgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9OdW1iZXIpXHJcbiAgICAgICAgLy8gaGFuZGxlT3BlbigpO1xyXG4gICAgICAgIGhhbmRsZVVwZGF0ZUludm9pY2UoKTtcclxuICAgICAgICBoYW5kbGVVcGRhdGVDcmVkaXQoKTtcclxuICAgICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHNldFNhdmluZygnJylcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBZGQgbmV3IFBheW1lbnRcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuQmFja30+XHJcbiAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaWRlQmFyKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNpZGVCYXIoZmFsc2UpfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZWJhckRhc2gxIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiA0IH19ID5cclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzgwcHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDdXN0b21lciBOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2N1c3RvbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5DdXN0b21lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZUN1c3RvbWVyKG5ld1ZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiQ3VzdG9tZXIgTmFtZVwiIHJlcXVpcmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwicmVhc29uXCI+UGF5bWVudCBSZWFzb248L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVhc29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlYXNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWFzb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGF5bWVudCBSZWFzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWFzb24oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gXCJQcm9qZWN0XCIgJiYgbW9kZXMgPT09IFwiQ3JlZGl0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vZGVzKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUHJvamVjdFwiPlByb2plY3Q8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJJbnZvaWNlXCI+SW52b2ljZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkN1c3RvbWVyIENyZWRpdFwiPkN1c3RvbWVyIENyZWRpdDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInRyYW5zYWN0aW9uVHlwZVwiPlRyYW5zYWN0aW9uIFR5cGU8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidHJhbnNhY3Rpb25UeXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRyYW5zYWN0aW9uVHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cmFuc2FjdGlvblR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHJhbnNhY3Rpb24gVHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VHJhbnNhY3Rpb25UeXBlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUGF5bWVudFwiPlBheW1lbnQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJSZWZ1bmRcIj5SZWZ1bmQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJzdGF0dXNcIj5TdGF0dXM8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJDbGVhcmVkXCI+Q2xlYXJlZDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlBlbmRpbmdcIj5QZW5kaW5nPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiVm9pZGVkXCI+Vm9pZGVkPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwibW9kZXNcIj5QYXltZW50IE1vZGVzPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1vZGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vZGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21vZGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBheW1lbnQgTW9kZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZU1vZGVzKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJDYXNoXCI+Q2FzaDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkJhbmsgVHJhbnNmZXJcIj5CYW5rIFRyYW5zZmVyPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlYXNvbiAhPT0gXCJQcm9qZWN0XCIgJiYgPE1lbnVJdGVtIHZhbHVlPVwiQ3JlZGl0XCI+Q3JlZGl0PC9NZW51SXRlbT59XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHtjdXN0b21lcklkICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDdXN0b21lciBBdmFpbGFibGUgQ3JlZGl0OiA8c3Ryb25nPiR7b2xkQ3JlZGl0Py50b0ZpeGVkKDIpfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVzID09PSBcIlwiIHx8IHJlYXNvbiA9PT0gXCJcIiA/IFwiXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXttb2RlcyA9PT0gJ0JhbmsgVHJhbnNmZXInID8gNyA6IDEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9J2Ftb3VudCc+QW1vdW50IFJlY2VpdmVkPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2Ftb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlVTRDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbW91bnQgUmVjZWl2ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge21vZGVzID09PSAnQmFuayBUcmFuc2ZlcicgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdiYW5rQ2hhcmdlJz5CYW5rIENoYXJnZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2JhbmtDaGFyZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJhbmtDaGFyZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+VVNEPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJhbmsgQ2hhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdCYW5rIENoYXJnZSBJZiBBbnk6IE9wdGlvbmFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3BheW1lbnREYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0RhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMocGF5bWVudERhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRQYXltZW50RGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IG06IDEsIHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJwYXltZW50TnVtYmVyXCI+UGF5bWVudCBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdwYXltZW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3BheW1lbnROdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1BheW1lbnQgTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXltZW50TnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGF5bWVudE51bWJlcihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+UEFZLTwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Rlc2NyaXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVzID09PSAnQ3JlZGl0JyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0nYW1vdW50UGFpZEZDJz5BbW91bnQgUGFpZCBGQzwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMjAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J1BheW1lbnRSZWNlaXZlZEZDJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdQYXltZW50UmVjZWl2ZWRGQydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17UGF5bWVudFJlY2VpdmVkRkN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGF5bWVudFJlY2VpdmVkRkMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5GQzwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFtb3VudCBQYWlkIEZDXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdyYXRlJz5SYXRlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxNTBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ncmF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncmF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdhbW91bnRQYWlkRkMnPkFtb3VudCBQYWlkIFVTRDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMjAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J1BheW1lbnRSZWNlaXZlZFVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUGF5bWVudFJlY2VpdmVkVVNEJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtQYXltZW50UmVjZWl2ZWRVU0R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGF5bWVudFJlY2VpdmVkVVNEKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFtb3VudCBQYWlkIFVTRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0nYW1vdW50UGFpZEZDJz5Ub3RhbCBQYWlkIFVTRDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMjAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3RvdGFsVVNkSW5mbydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndG90YWxVU2RJbmZvJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0b3RhbFVTZEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPiQ8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUb3RhbCBQYWlkIFVTRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnMCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW52b2ljZT8ubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Jvdy5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlqcyhyb3cuaW52b2ljZURhdGUpLmZvcm1hdCgnREQvTU0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocm93LnByZWZpeCA9PT0gXCJQLVwiIHx8IHJvdy5wcmVmaXggPT09IFwiUFwiIHx8IChyZWFzb24gPT09IFwiUHJvamVjdFwiICYmICFyb3cucHJlZml4KSkgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzE1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj1cInByb2plY3ROdW1iZXJcIj5Qcm9qZWN0IE51bWJlcjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdSZWYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1JlZidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1Byb2plY3QgTnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17U3RyaW5nKHJvdy5SZWYpLnBhZFN0YXJ0KDYsICcwJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPntyb3cucHJlZml4IHx8IFwiUC1cIn08L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwiaW52b2ljZU51bWJlclwiPkludm9pY2UgTnVtYmVyPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J1JlZidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUmVmJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSW52b2ljZSBOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtTdHJpbmcocm93LlJlZikucGFkU3RhcnQoNiwgJzAnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+e3Jvdy5wcmVmaXggfHwgXCJJTlYtXCJ9PC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaWQ9J0ludm9pY2VBbW91bnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdzdWJ0b3RhbCc+QW1vdW50PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMjUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3N1YnRvdGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb3cuYmFsYW5jZUR1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5VU0Q8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInN1YnRvdGFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9J2Ftb3VudFBhaWRGQyc+QW1vdW50IFBhaWQgRkM8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdhbW91bnRQYWlkRkMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYW1vdW50UGFpZEZDJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb3cuYW1vdW50UGFpZEZDfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsIHJvdy5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+RkM8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFtb3VudCBQYWlkIEZDXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9J3JhdGVDaGFuZ2UnPlJhdGU8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICc5MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3JhdGVDaGFuZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncmF0ZUNoYW5nZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm93LnJhdGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgcm93LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9J2Ftb3VudFBhaWRVU0QnPkFtb3VudCBQYWlkIFVTRDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzIwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2Ftb3VudFBhaWRVU0QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYW1vdW50UGFpZFVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm93LmFtb3VudFBhaWRVU0R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgcm93LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5VU0Q8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFtb3VudCBQYWlkIFVTRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSd0b3RhbCc+VG90YWwgUGFpZDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMjAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ndG90YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndG90YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvdy50b3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCByb3cuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlVTRDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVG90YWwgUGFpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcgMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCBwYWRkaW5nOiAnNDBweCcsIHdpZHRoOiAnNTAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48VHlwb2dyYXBoeT4gSW52b2ljZXMgVG90YWwgQW1vdW50IDwvVHlwb2dyYXBoeT48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuPiAkIDwvc3Bhbj57YmFsYW5jZUR1ZUluZm8udG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PjxUeXBvZ3JhcGh5PiBBbW91bnQgUmVjZWl2ZWQgPC9UeXBvZ3JhcGh5PjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4+ICQgPC9zcGFuPnthbW91bnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48VHlwb2dyYXBoeT4gQW1vdW50IFBhaWQgRkMgPC9UeXBvZ3JhcGh5PjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4+IEZDIDwvc3Bhbj57UGF5bWVudFJlY2VpdmVkRkMudG9TdHJpbmcoKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PjxUeXBvZ3JhcGh5PiBBbW91bnQgUGFpZCBVU0QgPC9UeXBvZ3JhcGh5PjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4+ICQgPC9zcGFuPntQYXltZW50UmVjZWl2ZWRVU0QudG9TdHJpbmcoKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PjxUeXBvZ3JhcGh5PiBUb3RhbCBQYWlkIFVTRCA8L1R5cG9ncmFwaHk+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3Bhbj4gJCA8L3NwYW4+e21vZGVzID09PSAnQ3JlZGl0JyA/IHRvdGFsVVNkSW5mby50b0ZpeGVkKDIpIDogUGF5bWVudEluZm8udG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PjxUeXBvZ3JhcGh5PiBCYWxhbmNlIER1ZSA8L1R5cG9ncmFwaHk+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3Bhbj4gJCA8L3NwYW4+e3JlbWFpbmluZ0ludm9pY2UudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PjxUeXBvZ3JhcGh5PiBDcmVkaXQgPC9UeXBvZ3JhcGh5PjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4+ICQgPC9zcGFuPntyZW1haW5pbmd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzYXZpbmcgIT09ICd0cnVlJyA/IDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+IDogPHAgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+U2F2aW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5CYWNrfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlQmFja31cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8QmxhY2tUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzeD17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5EbyB5b3Ugd2FudCB0byBzdG9wIG1ha2luZyBwYXltZW50ID8gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZSA6PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCI+IElmIHlvdSBzdG9wIG1ha2luZyBwYXltZW50IHdpdGhvdXQgc2F2aW5nLCBhbGwgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdDwvc3Bhbj48L3A+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnL1BheW1lbnRWaWV3Jyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+WWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ObzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2lzaW9uKCdzdGF5Jyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBBZGQgTmV3XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3ByZXZpb3VzJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIEZhaWxlZCB0byBTYXZlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUVycm9yfT5cclxuICAgICAgICAgICAgICAgIFRyeSBBZ2FpblxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBheW1lbnRJbmZvcm1hdGlvbkZvcm1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL2Nzcy9TaWRlYmFyTmV3LnNjc3MnXHJcbmltcG9ydCB7IE91dGxldCwgTmF2TGluaywgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBQZXJtSWRlbnRpdHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGVybUlkZW50aXR5JztcclxuaW1wb3J0IExpc3RBbHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTGlzdEFsdCc7XHJcbmltcG9ydCBEZXNjcmlwdGlvbkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZXNjcmlwdGlvbic7XHJcbmltcG9ydCBSZWNlaXB0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1JlY2VpcHQnO1xyXG5pbXBvcnQgTW92aW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vdmluZyc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5ncyc7XHJcbmltcG9ydCBJbnNlcnREcml2ZUZpbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSW5zZXJ0RHJpdmVGaWxlJztcclxuaW1wb3J0IFJlc3RvcmVQYWdlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jlc3RvcmVQYWdlJztcclxuaW1wb3J0IFJlcXVlc3RRdW90ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZXF1ZXN0UXVvdGUnO1xyXG5pbXBvcnQgTW9uZXRpemF0aW9uT25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9uZXRpemF0aW9uT24nO1xyXG5pbXBvcnQgRW5naW5lZXJpbmdJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRW5naW5lZXJpbmcnO1xyXG5pbXBvcnQgeyBFeHBsaWNpdCwgU2hvcHBpbmdCYWdPdXRsaW5lZCB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUm9vbVByZWZlcmVuY2VzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jvb21QcmVmZXJlbmNlcyc7XHJcbmltcG9ydCB7IExpc3RJdGVtQnV0dG9uLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUGF5bWVudEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QYXltZW50JztcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0JztcclxuZnVuY3Rpb24gU2lkZWJhckRhc2gxKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxEYXNoYm9hcmRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGFzaGJvYXJkXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxQZXJtSWRlbnRpdHlJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ3VzdG9tZXJcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSAgPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TGlzdEFsdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJTdG9yZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UmVxdWVzdFF1b3RlSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlF1b3RhdGlvblwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPERlc2NyaXB0aW9uSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkludm9pY2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxNb25ldGl6YXRpb25Pbkljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQYXltZW50XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8U2hvcHBpbmdCYWdPdXRsaW5lZCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhaWx5IEV4cGVuc2VzXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJvb21QcmVmZXJlbmNlc0ljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQcm9qZWN0XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UmVjZWlwdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQdXJjaGFzZXMgUmVxdWVzdFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8RW5naW5lZXJpbmdJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTWFpbnRlbmFuY2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJNb3JlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckRhc2gxIiwiaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEOiBjcnlwdG8ucmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuY29uc3Qgcm5kczhQb29sID0gbmV3IFVpbnQ4QXJyYXkoMjU2KTsgLy8gIyBvZiByYW5kb20gdmFsdWVzIHRvIHByZS1hbGxvY2F0ZVxuXG5sZXQgcG9vbFB0ciA9IHJuZHM4UG9vbC5sZW5ndGg7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIGlmIChwb29sUHRyID4gcm5kczhQb29sLmxlbmd0aCAtIDE2KSB7XG4gICAgY3J5cHRvLnJhbmRvbUZpbGxTeW5jKHJuZHM4UG9vbCk7XG4gICAgcG9vbFB0ciA9IDA7XG4gIH1cblxuICByZXR1cm4gcm5kczhQb29sLnNsaWNlKHBvb2xQdHIsIHBvb2xQdHIgKz0gMTYpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhckRhc2gxIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiTWVudUl0ZW0iLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIlBhcGVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsInN0eWxlZCIsIkJveCIsIkF1dG9jb21wbGV0ZSIsIlRhYmxlQ29udGFpbmVyIiwiT3V0bGluZWRJbnB1dCIsIklucHV0QWRvcm5tZW50IiwiTW9kYWwiLCJCYWNrZHJvcCIsIkRpdmlkZXIiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJDb250YWluZXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJBcnJvd1Vwd2FyZE91dGxpbmVkIiwiUmVtb3ZlQ2lyY2xlT3V0bGluZSIsIkVORFBPSU5UX1VSTCIsInVzZU5hdmlnYXRlIiwiRGVtb0NvbnRhaW5lciIsIkxvY2FsaXphdGlvblByb3ZpZGVyIiwiQWRhcHRlckRheWpzIiwiRGF0ZVBpY2tlciIsImludmFsaWRhdGVDYWNoZSIsImRheWpzIiwiQXJyb3dCYWNrIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkxvYWRlciIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJDbG9zZSIsIk1lc3NhZ2VBZG1pblZpZXciLCJOb3RpZmljYXRpb25WSWV3SW5mbyIsInY0IiwiQmxhY2tUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjMiLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjQiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJQYXltZW50SW5mb3JtYXRpb25Gb3JtIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjUiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFtb3VudCIsInNldEFtb3VudCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiY3VzdG9tZXIiLCJzZXRDdXN0b21lciIsImZldGNoQ3VzdG9tZXIiLCJfcmVmNiIsInJldmVyc2UiLCJfdXNlU3RhdGU1IiwiX2lkIiwiY3VzdG9tZXJOYW1lIiwiYmlsbGluZ0FkZHJlc3MiLCJiaWxsaW5nQ2l0eSIsIl91c2VTdGF0ZTYiLCJzZXRDdXN0b21lck5hbWUiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImJhbmtDaGFyZ2UiLCJzZXRCYW5rQ2hhcmdlIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJtb2RlcyIsInNldE1vZGVzIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwicmVhc29uIiwic2V0UmVhc29uIiwiX3VzZVN0YXRlMTEiLCJkYXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTEyIiwicGF5bWVudERhdGUiLCJzZXRQYXltZW50RGF0ZSIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsInBheW1lbnROdW1iZXIiLCJzZXRQYXltZW50TnVtYmVyIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInJhdGUiLCJzZXRSYXRlIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsInRyYW5zYWN0aW9uVHlwZSIsInNldFRyYW5zYWN0aW9uVHlwZSIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJfdXNlU3RhdGUyMyIsIl91c2VTdGF0ZTI0IiwicGF5bWVudFR5cGUiLCJzZXRQYXltZW50VHlwZSIsImZldGNobGFzdE51bWJlciIsIl9yZWY3IiwiX3JlcyRkYXRhIiwiX3JlcyRkYXRhMiIsIm51bSIsInBhcnNlSW50IiwicmVzUmF0ZSIsIm1hcCIsInJvdyIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJpbnZvaWNlIiwic2V0SW52b2ljZSIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJwcm9qZWN0Iiwic2V0UHJvamVjdCIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJvbGRJbnZvaWNlIiwic2V0T2xkSW52b2ljZSIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJjdXN0b21lcklkIiwic2V0Q3VzdG9tZXJJZCIsImhhbmRsZUNoYW5nZUN1c3RvbWVyIiwibmV3VmFsdWUiLCJzZWxlY3RlZE9wdGlvbnMiLCJmaW5kIiwib3B0aW9uIiwiQ3VzdG9tZXIiLCJoYW5kbGVDbGVhciIsImZldGNoRGF0YSIsIl9yZWY4IiwicmVzUHJvamVjdCIsInJlc1B1cmNoYXNlIiwiX3JlcyRkYXRhMyIsImZpbHRlckRhdGEiLCJmaWx0ZXIiLCJpZCIsInRvdGFsIiwiYW1vdW50UGFpZEZDIiwiYW1vdW50UGFpZFVTRCIsInJhdGVDaGFuZ2UiLCJ0b3RhbENvbnZlcnRlZCIsIlJlZiIsImludm9pY2VOdW1iZXIiLCJwcmVmaXgiLCJSZWZlcmVuY2VOYW1lMiIsImludm9pY2VQdXJjaGFzZSIsImJhbGFuY2VEdWUiLCJpbnZvaWNlQW1vdW50IiwidG90YWxJbnZvaWNlIiwiaW52b2ljZURhdGUiLCJfcmVzUHJvamVjdCRkYXRhIiwiZmlsdGVyRGF0YTIiLCJfcm93JGN1c3RvbWVyTmFtZSIsInByb2plY3ROdW1iZXIiLCJidWRnZXQiLCJ1bmRlZmluZWQiLCJzdGFydERhdGUiLCJvbGRDcmVkaXQiLCJoYW5kbGVDaGFuZ2VDRU8iLCJlIiwiaWRSb3ciLCJfZSR0YXJnZXQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJsaXN0IiwiaSIsImZpbmRJbmRleCIsIkl0ZW0iLCJNYXRoIiwicm91bmQiLCJwYXJzZUZsb2F0IiwiaGFuZGxlUGF5bWVudCIsInByZXZlbnREZWZhdWx0IiwicmVtYWluaW5nIiwidG90YWxJbnZvaWNlRXhwIiwibWluIiwidG9GaXhlZCIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJQYXltZW50UmVjZWl2ZWRGQyIsInNldFBheW1lbnRSZWNlaXZlZEZDIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsIlBheW1lbnRSZWNlaXZlZFVTRCIsInNldFBheW1lbnRSZWNlaXZlZFVTRCIsImJhbGFuY2VEdWVJbmZvIiwibGVuZ3RoIiwicmVkdWNlIiwic3VtIiwiUGF5bWVudEluZm8iLCJQYXltZW50UmVjZWl2ZWRGQzIiLCJQYXltZW50UmVjZWl2ZWRVU0QyIiwiaGFuZGxlQ2hhbmdlTW9kZXMiLCJ0b3RhbENvbnZlcnRlZEZjIiwidG90YWxVU2RJbmZvIiwicmVtYWluaW5nSW52b2ljZSIsInJlbWFpbmluZ1ZhbHVlIiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsInNldE9sZENyZWRpdCIsIl9yZWY5IiwiY3JlZGl0IiwiX3VzZVN0YXRlMzkiLCJfdXNlU3RhdGU0MCIsInNldENyZWRpdCIsInRvdGFsUiIsImlzTmFOIiwiTnVtYmVyIiwiVG90YWxBbW91bnQiLCJoYW5kbGVVcGRhdGVJbnZvaWNlIiwiX3JlZjAiLCJpbnZvaWNlVXBkYXRlIiwiY29ycmVzcG9uZGluZ0lkIiwicm93MiIsIm1heCIsImRpZmZlcmVuY2UiLCJudW1iZXIiLCJCb29sZWFuIiwidXBkYXRlUmVxdWVzdCIsIl9yZWYxIiwicHV0IiwiUHJvbWlzZSIsImFsbCIsImxvZyIsImhhbmRsZVVwZGF0ZUNyZWRpdCIsIl9yZWYxMCIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJvcGVuQmFjayIsInNldE9wZW5CYWNrIiwiaGFuZGxlT3BlbkJhY2siLCJoYW5kbGVDbG9zZUJhY2siLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2IiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGU0NyIsIl91c2VTdGF0ZTQ4IiwiRXJyb3JPcGVuTW9kYWwiLCJzZXRFcnJvck9wZW5Nb2RhbCIsImhhbmRsZU9wZW4iLCJzZXRUaW1lb3V0IiwiaGFuZGxlRXJyb3IiLCJoYW5kbGVDbG9zZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlQ2xvc2VFcnJvciIsImhhbmRsZURlY2lzaW9uIiwiaGlzdG9yeSIsImJhY2siLCJoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24iLCJfcmVmMTEiLCJSZWZlcmVuY2VJbmZvIiwiUmVmZXJlbmNlSW5mb051bWJlciIsImlkSW5mbyIsInBlcnNvbiIsIlN0cmluZyIsInBhZFN0YXJ0IiwiZGF0ZU5vdGlmaWNhdGlvbiIsInBvc3QiLCJfeCIsIl94MiIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJzYXZpbmciLCJzZXRTYXZpbmciLCJoYW5kbGVTdWJtaXQiLCJfcmVmMTIiLCJ0b3RhbFRheFBhaWQiLCJmb3JFYWNoIiwiciIsInRheCIsInByb3BvcnRpb24iLCJzeW5jZWQiLCJfeDMiLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJvblN1Ym1pdCIsImNvbnRhaW5lciIsInBhZGRpbmciLCJpdGVtIiwieHMiLCJnYXAiLCJtdWx0aWxpbmUiLCJsYWJlbCIsInRpdGxlIiwicGxhY2VtZW50IiwiZGlzYWJsZUNsZWFyYWJsZSIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsIm9uQ2hhbmdlIiwicmVuZGVySW5wdXQiLCJwYXJhbXMiLCJyZXF1aXJlZCIsImh0bWxGb3IiLCJzdGFydEFkb3JubWVudCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsIm0iLCJmb3JtYXQiLCJyb3dzIiwiRnJhZ21lbnQiLCJrZXkiLCJkaXNhYmxlZCIsImZsb2F0IiwidGV4dEFsaWduIiwidG9TdHJpbmciLCJvbkNsb3NlIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0IiwiT3V0bGV0IiwiTmF2TGluayIsIkxpbmsiLCJ1c2VMb2NhdGlvbiIsIkRhc2hib2FyZEljb24iLCJQZXJtSWRlbnRpdHlJY29uIiwiTGlzdEFsdEljb24iLCJEZXNjcmlwdGlvbkljb24iLCJSZWNlaXB0SWNvbiIsIk1vdmluZ0ljb24iLCJTZXR0aW5nc0ljb24iLCJJbnNlcnREcml2ZUZpbGVJY29uIiwiUmVzdG9yZVBhZ2VJY29uIiwiUmVxdWVzdFF1b3RlSWNvbiIsIk1vbmV0aXphdGlvbk9uSWNvbiIsIkVuZ2luZWVyaW5nSWNvbiIsIkV4cGxpY2l0IiwiU2hvcHBpbmdCYWdPdXRsaW5lZCIsIlJvb21QcmVmZXJlbmNlc0ljb24iLCJMaXN0SXRlbUJ1dHRvbiIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIm1ha2VTdHlsZXMiLCJQYXltZW50SWNvbiIsIk1vcmVWZXJ0SWNvbiIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9