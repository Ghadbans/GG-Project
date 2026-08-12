"use strict";
exports.id = "src_js_AdminView1_PageView_Payment_PaymentInformationUpdate_js";
exports.ids = ["src_js_AdminView1_PageView_Payment_PaymentInformationUpdate_js"];
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

/***/ "./src/js/AdminView1/PageView/Payment/PaymentInformationUpdate.js"
/*!************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/Payment/PaymentInformationUpdate.js ***!
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
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/Badge */ "./node_modules/@mui/material/Badge/Badge.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material/Notifications */ "./node_modules/@mui/icons-material/Notifications.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
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
function PaymentInformationUpdate() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_47__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_47__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__.setUser)({
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__.logOut)());
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/customer"));
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
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    paymentDate = _useState10[0],
    setPaymentDate = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    description = _useState12[0],
    setDescription = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    paymentNumber = _useState14[0],
    setPaymentNumber = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    rate = _useState16[0],
    setRate = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    creditOld = _useState18[0],
    setCreditOld = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    customerId = _useState20[0],
    setCustomerId = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    invoice = _useState22[0],
    setInvoice = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState24 = _slicedToArray(_useState23, 2),
    invoice1 = _useState24[0],
    setInvoice1 = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    PaymentReceivedFC = _useState26[0],
    setPaymentReceivedFC = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    PaymentReceivedUSD = _useState28[0],
    setPaymentReceivedUSD = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState30 = _slicedToArray(_useState29, 2),
    reason = _useState30[0],
    setReason = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Payment'),
    _useState32 = _slicedToArray(_useState31, 2),
    transactionType = _useState32[0],
    setTransactionType = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Cleared'),
    _useState34 = _slicedToArray(_useState33, 2),
    status = _useState34[0],
    setStatus = _useState34[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-payment/").concat(id));
          setCreditOld(res.data.data.remaining);
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-payment/").concat(id));
          setCustomerName(res.data.data.customerName);
          setCustomerId(res.data.data.customerName._id);
          setAmount(res.data.data.amount);
          setBankCharge(res.data.data.bankCharge);
          setModes(res.data.data.modes);
          setPaymentDate(res.data.data.paymentDate);
          setDescription(res.data.data.description);
          setPaymentNumber(Number(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.paymentNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.paymentNumber) || 0));
          setCreditOld(res.data.data.remaining);
          setPaymentReceivedFC(res.data.data.PaymentReceivedFC);
          setPaymentReceivedUSD(res.data.data.PaymentReceivedUSD);
          setReason(res.data.data.reason || 'Invoice');
          setTransactionType(res.data.data.transactionType || 'Payment');
          setStatus(res.data.data.status || 'Cleared');
          setInvoice1(res.data.data.TotalAmount ? res.data.data.TotalAmount.filter(row => parseFloat(row.total) !== 0 || parseFloat(row.total) !== 0.00) : []);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchlastNumber() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchlastNumber();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        try {
          var resRate = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/rate"));
          resRate.data.data.map(row => setRate(row.rate));
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
  // get Invoice 
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState36 = _slicedToArray(_useState35, 2),
    oldInvoice = _useState36[0],
    setOldInvoice = _useState36[1];
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
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/invoice?summary=true"));
          var resProject = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/projects"));
          if (customerId !== null) {
            if (reason === "Invoice") {
              var _res$data3;
              var filterData = (_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.filter(row => row.customerName._id === customerId);
              setOldInvoice(filterData);
              var exInvoice = filterData === null || filterData === void 0 ? void 0 : filterData.filter(row => row.status === 'Sent' || row.status === 'Partially-Paid' && !invoice1.some(row1 => row1.id === row._id)).map(row => ({
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
              }));
              setInvoice([...invoice1, ...exInvoice]);
            } else if (reason === "Project") {
              var _resProject$data;
              var filterData2 = (_resProject$data = resProject.data) === null || _resProject$data === void 0 || (_resProject$data = _resProject$data.data) === null || _resProject$data === void 0 ? void 0 : _resProject$data.filter(row => {
                var _row$customerName;
                return ((_row$customerName = row.customerName) === null || _row$customerName === void 0 ? void 0 : _row$customerName._id) === customerId && row.status === "On-Going";
              });
              var exProject = filterData2.filter(row => !invoice1.some(row1 => row1.id === row._id)).map(row => ({
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
              }));
              setInvoice([...invoice1, ...exProject]);
            }
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchData();
  }, [customerId, invoice1, reason]);
  var handleChangeCEO = (e, idRow) => {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var list = [...invoice];
    var i = invoice.findIndex(Item => Item.id === idRow);
    list[i][name] = value;
    list[i]['totalConverted'] = Math.round(list[i]['amountPaidFC'] / list[i]['rateChange'] * 100) / 100;
    list[i]['total'] = Math.round((parseFloat(list[i]['totalConverted']) + parseFloat(list[i]['amountPaidUSD'])) * 100) / 100;
    if (list[i]['total'] > list[i]['balanceDue']) {
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
  var remainingInvoice = balanceDueInfo - PaymentInfo;
  var remainingValue = reason === "Project" || reason === "Customer Credit" ? parseFloat(amount) : parseFloat(amount) - PaymentInfo;
  var remaining = Math.round(remainingValue * 100) / 100;
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState38 = _slicedToArray(_useState37, 2),
    oldCredit = _useState38[0],
    setOldCredit = _useState38[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCustomer = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (customerId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/get-customer/").concat(customerId));
            setOldCredit(res.data.data.credit);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      });
      return function fetchCustomer() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchCustomer();
  }, [customerId]);
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState40 = _slicedToArray(_useState39, 2),
    credit = _useState40[0],
    setCredit = _useState40[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (parseFloat(creditOld) === parseFloat(remaining)) {
      setCredit(oldCredit);
    } else if (parseFloat(creditOld) > parseFloat(remaining)) {
      var totalR = creditOld - remaining;
      var totalR1 = isNaN(oldCredit - totalR) ? 0 : parseFloat(Number(oldCredit) - totalR);
      setCredit(totalR1);
    } else if (parseFloat(creditOld) < parseFloat(remaining)) {
      var _totalR = remaining - creditOld;
      var _totalR2 = isNaN(Number(oldCredit) + Number(_totalR)) ? 0 : parseFloat(Number(oldCredit) + Number(_totalR));
      setCredit(_totalR2);
    }
  }, [oldCredit, remaining, creditOld]);
  var TotalAmount = invoice === null || invoice === void 0 ? void 0 : invoice.filter(row => parseFloat(row.total) !== 0);
  var invoiceUpdate = reason === "Invoice" && invoice ? invoice.map(row => {
    var correspondingId = oldInvoice === null || oldInvoice === void 0 ? void 0 : oldInvoice.find(row2 => row2._id === row.id);
    if (!correspondingId) return null; // Safety check

    var difference = 0;
    var total = 0;
    var difference1 = Math.round((parseFloat(row.balanceDue) - parseFloat(row.total)) * 100) / 100;
    difference = difference1;
    total = Math.round((parseFloat(correspondingId.totalInvoice) - parseFloat(difference1)) * 100) / 100;
    if (difference <= 0 && parseFloat(total) !== 0) {
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
        total: Number(total),
        balanceDue: difference,
        status: row.status
      }
    };
  }).filter(Boolean) : [];
  var handleUpdateInvoice = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* () {
      var updateRequest = invoiceUpdate !== null ? invoiceUpdate.map(_ref11 => {
        var id = _ref11.id,
          data = _ref11.data;
        return axios__WEBPACK_IMPORTED_MODULE_34__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/update-invoice/").concat(id), data);
      }) : null;
      if (updateRequest !== null) {
        try {
          yield Promise.all(updateRequest);
        } catch (error) {
          console.log('An error as occur');
        }
      }
    });
    return function handleUpdateInvoice() {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleUpdateCredit = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* () {
      var data = {
        credit
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/update-customer/").concat(customerId), data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
    return function handleUpdateCredit() {
      return _ref12.apply(this, arguments);
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
    var _ref13 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Modify PAYMENT ',
        reason: 'PAY-' + String(ReferenceInfoNumber).padStart(6, '0') + ' For ' + customerName.customerName,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x, _x2) {
      return _ref13.apply(this, arguments);
    };
  }();
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState50 = _slicedToArray(_useState49, 2),
    saving = _useState50[0],
    setSaving = _useState50[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var data = {
        amount,
        bankCharge,
        modes,
        paymentDate,
        TotalAmount,
        paymentNumber,
        description,
        PaymentReceivedFC,
        PaymentReceivedUSD,
        remaining,
        reason,
        transactionType,
        status
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__.ENDPOINT_URL, "/update-payment/").concat(id), data);
        if (res) {
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.paymentNumber;
          handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
          handleOpen();
          handleUpdateInvoice();
          handleUpdateCredit();
        }
      } catch (error) {
        if (error) {
          setSaving('');
          handleError();
        }
      }
    });
    return function handleSubmit(_x3) {
      return _ref14.apply(this, arguments);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Update Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_43__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "inherit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_29__["default"], {
    badgeContent: 4,
    color: "secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_33__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_49__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_32__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_30__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    disabled: true,
    onClick: handleClear
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: '#202a5a'
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disableClearable: true,
    options: customer,
    getOptionLabel: option => option.customerFullName ? option.customerFullName : option.companyName,
    onChange: (e, newValue) => handleChangeCustomer(newValue),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, params, {
      label: "Customer Name",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body2",
    color: "textSecondary"
  }, "Customer Current Credit: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "$", oldCredit === null || oldCredit === void 0 ? void 0 : oldCredit.toFixed(2)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 7
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
    value: amount,
    onChange: e => setAmount(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "USD"),
    label: "Amount Received"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    htmlFor: "bankCharge"
  }, "Bank Charge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    type: "number",
    id: "bankCharge",
    value: bankCharge,
    onChange: e => setBankCharge(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      position: "start"
    }, "USD"),
    label: "Bank Charge",
    placeholder: "Bank Charge If Any: Optional"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_39__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_40__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_38__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_41__.DatePicker, {
    required: true,
    name: "paymentDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_42___default()(paymentDate),
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
  }, "Bank Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    value: "Credit"
  }, "Credit")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    }, "PAY-0")
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
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.invoiceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, row.prefix === "P-" || row.prefix === "P" || reason === "Project" && !row.prefix ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
      }, "P-")
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
      }, "INV-")
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      id: "InvoiceAmount"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
      htmlFor: "subtotal"
    }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
      sx: {
        width: '150px',
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
        width: '150px',
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
        width: '150px',
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
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " $ "), remaining))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_46__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_44__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_46__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_45__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentInformationUpdate);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUGF5bWVudF9QYXltZW50SW5mb3JtYXRpb25VcGRhdGVfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDLGdCOzs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMseUJBQXlCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04xQixDQUFtRDtBQUNRO0FBQ25DO0FBQ0U7QUFDMEI7QUFDc0I7QUFDUjtBQUMySjtBQUM3SjtBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDUTtBQUNBO0FBQ2M7QUFDSTtBQUN6QztBQUNzRDtBQUM3QjtBQUNRO0FBQ1M7QUFDYTtBQUNoQjtBQUNKO0FBQ2xDO0FBQzRCO0FBQ1E7QUFDVjtBQUNMO0FBQ1E7QUFDK0I7QUFDdEM7QUFDRjtBQUVqQjtBQUU3QixJQUFNNEQsWUFBWSxHQUFHNUMsMERBQU0sQ0FBQzZDLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNoRGpFLDBEQUFBLENBQUN5Qiw4REFBTyxFQUFBMEMsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxF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QUFFLEVBQUU7TUFBRTFULEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3BDM0UsMERBQUEsQ0FBQ3FkLHNEQUFZO0lBQUNoRixFQUFFLEVBQUU7TUFBRTFULEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDM0UsMERBQUEsQ0FBQ3ljLG1FQUFXLE1BQUUsQ0FDRixDQUFDLGVBQ2Z6YywwREFBQSxDQUFDc2Qsc0RBQVk7SUFBQ0ssT0FBTyxFQUFDO0VBQW1CLENBQUUsQ0FDN0IsQ0FBQyxlQUNqQjNkLDBEQUFBLENBQUNvZCxzREFBYztJQUFDL0UsRUFBRSxFQUFFO01BQUUxVCxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQzNFLDBEQUFBLENBQUNxZCxzREFBWTtJQUFDaEYsRUFBRSxFQUFFO01BQUUxVCxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQzNFLDBEQUFBLENBQUNnZCx1RUFBZSxNQUFFLENBQ04sQ0FBQyxlQUNmaGQsMERBQUEsQ0FBQ3NkLHNEQUFZO0lBQUNLLE9BQU8sRUFBQztFQUFhLENBQUUsQ0FDdkIsQ0FBQyxlQUNqQjNkLDBEQUFBLENBQUNvZCxzREFBYztJQUFDL0UsRUFBRSxFQUFFO01BQUUxVCxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQzNFLDBEQUFBLENBQUNxZCxzREFBWTtJQUFDaEYsRUFBRSxFQUFFO01BQUUxVCxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNsQzNFLDBEQUFBLENBQUN5ZCxxRUFBWSxNQUFFLENBQ0gsQ0FBQyxlQUNmemQsMERBQUEsQ0FBQ3NkLHNEQUFZO0lBQUNLLE9BQU8sRUFBQztFQUFNLENBQUUsQ0FDaEIsQ0FDaEIsQ0FBQztBQUVQO0FBRUEsaUVBQWV4ZCxZQUFZLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vUmVtb3ZlQ2lyY2xlT3V0bGluZS5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvUGF5bWVudC9QYXltZW50SW5mb3JtYXRpb25VcGRhdGUuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvU2lkZWJhckRhc2gxLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0yMCAxMUg3LjgzbDUuNTktNS41OUwxMiA0bC04IDggOCA4IDEuNDEtMS40MUw3LjgzIDEzSDIwelwiXG59KSwgJ0Fycm93QmFjaycpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTcgMTF2MmgxMHYtMnptNS05QzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAybTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4XCJcbn0pLCAnUmVtb3ZlQ2lyY2xlT3V0bGluZScpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2lkZWJhckRhc2gxIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaDEnO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IHsgTWVudUl0ZW0sIEdyaWQsIEljb25CdXR0b24sIFBhcGVyLCBUZXh0RmllbGQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIFR5cG9ncmFwaHksIHN0eWxlZCwgQm94LCBBdXRvY29tcGxldGUsIFRhYmxlQ29udGFpbmVyLCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgTW9kYWwsIEJhY2tkcm9wLCBEaXZpZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFkZ2UnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IEFycm93VXB3YXJkT3V0bGluZWQsIFJlbW92ZUNpcmNsZU91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGUsIHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9Mb2NhbGl6YXRpb25Qcm92aWRlcic7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvRGF0ZVBpY2tlcic7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBDbG9zZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcclxuXHJcbmltcG9ydCB7IHBhcnNlIH0gZnJvbSAndXVpZCc7XHJcblxyXG5jb25zdCBCbGFja1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIFBheW1lbnRJbmZvcm1hdGlvblVwZGF0ZSgpIHtcclxuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcblxyXG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuXHJcbiAgY29uc3QgW2N1c3RvbWVyLCBzZXRDdXN0b21lcl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEN1c3RvbWVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2N1c3RvbWVyYClcclxuICAgICAgICBzZXRDdXN0b21lcihyZXMuZGF0YS5kYXRhLnJldmVyc2UoKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoQ3VzdG9tZXIoKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IFtjdXN0b21lck5hbWUsIHNldEN1c3RvbWVyTmFtZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBfaWQ6IG51bGwsXHJcbiAgICBjdXN0b21lck5hbWU6IG51bGwsXHJcbiAgICBiaWxsaW5nQWRkcmVzczogbnVsbCxcclxuICAgIGJpbGxpbmdDaXR5OiBudWxsXHJcbiAgfSk7XHJcbiAgY29uc3QgW2JhbmtDaGFyZ2UsIHNldEJhbmtDaGFyZ2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW21vZGVzLCBzZXRNb2Rlc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3BheW1lbnREYXRlLCBzZXRQYXltZW50RGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgcmV0dXJuIGRhdGVcclxuICB9KTtcclxuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGF5bWVudE51bWJlciwgc2V0UGF5bWVudE51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmF0ZSwgc2V0UmF0ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbY3JlZGl0T2xkLCBzZXRDcmVkaXRPbGRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2N1c3RvbWVySWQsIHNldEN1c3RvbWVySWRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaW52b2ljZSwgc2V0SW52b2ljZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ludm9pY2UxLCBzZXRJbnZvaWNlMV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW1BheW1lbnRSZWNlaXZlZEZDLCBzZXRQYXltZW50UmVjZWl2ZWRGQ10gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtQYXltZW50UmVjZWl2ZWRVU0QsIHNldFBheW1lbnRSZWNlaXZlZFVTRF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtyZWFzb24sIHNldFJlYXNvbl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbdHJhbnNhY3Rpb25UeXBlLCBzZXRUcmFuc2FjdGlvblR5cGVdID0gdXNlU3RhdGUoJ1BheW1lbnQnKVxyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnQ2xlYXJlZCcpXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNobGFzdE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtcGF5bWVudC8ke2lkfWApXHJcbiAgICAgICAgc2V0Q3JlZGl0T2xkKHJlcy5kYXRhLmRhdGEucmVtYWluaW5nKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hsYXN0TnVtYmVyKClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hsYXN0TnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1wYXltZW50LyR7aWR9YClcclxuICAgICAgICBzZXRDdXN0b21lck5hbWUocmVzLmRhdGEuZGF0YS5jdXN0b21lck5hbWUpO1xyXG4gICAgICAgIHNldEN1c3RvbWVySWQocmVzLmRhdGEuZGF0YS5jdXN0b21lck5hbWUuX2lkKTtcclxuICAgICAgICBzZXRBbW91bnQocmVzLmRhdGEuZGF0YS5hbW91bnQpO1xyXG4gICAgICAgIHNldEJhbmtDaGFyZ2UocmVzLmRhdGEuZGF0YS5iYW5rQ2hhcmdlKTtcclxuICAgICAgICBzZXRNb2RlcyhyZXMuZGF0YS5kYXRhLm1vZGVzKTtcclxuICAgICAgICBzZXRQYXltZW50RGF0ZShyZXMuZGF0YS5kYXRhLnBheW1lbnREYXRlKTtcclxuICAgICAgICBzZXREZXNjcmlwdGlvbihyZXMuZGF0YS5kYXRhLmRlc2NyaXB0aW9uKTtcclxuICAgICAgICBzZXRQYXltZW50TnVtYmVyKE51bWJlcihyZXMuZGF0YT8uZGF0YT8ucGF5bWVudE51bWJlciB8fCByZXMuZGF0YT8ucGF5bWVudE51bWJlciB8fCAwKSk7XHJcbiAgICAgICAgc2V0Q3JlZGl0T2xkKHJlcy5kYXRhLmRhdGEucmVtYWluaW5nKTtcclxuICAgICAgICBzZXRQYXltZW50UmVjZWl2ZWRGQyhyZXMuZGF0YS5kYXRhLlBheW1lbnRSZWNlaXZlZEZDKTtcclxuICAgICAgICBzZXRQYXltZW50UmVjZWl2ZWRVU0QocmVzLmRhdGEuZGF0YS5QYXltZW50UmVjZWl2ZWRVU0QpO1xyXG4gICAgICAgIHNldFJlYXNvbihyZXMuZGF0YS5kYXRhLnJlYXNvbiB8fCAnSW52b2ljZScpO1xyXG4gICAgICAgIHNldFRyYW5zYWN0aW9uVHlwZShyZXMuZGF0YS5kYXRhLnRyYW5zYWN0aW9uVHlwZSB8fCAnUGF5bWVudCcpO1xyXG4gICAgICAgIHNldFN0YXR1cyhyZXMuZGF0YS5kYXRhLnN0YXR1cyB8fCAnQ2xlYXJlZCcpO1xyXG4gICAgICAgIHNldEludm9pY2UxKHJlcy5kYXRhLmRhdGEuVG90YWxBbW91bnQgPyByZXMuZGF0YS5kYXRhLlRvdGFsQW1vdW50LmZpbHRlcigocm93KSA9PiBwYXJzZUZsb2F0KHJvdy50b3RhbCkgIT09IDAgfHwgcGFyc2VGbG9hdChyb3cudG90YWwpICE9PSAwLjAwKSA6IFtdKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hsYXN0TnVtYmVyKClcclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNobGFzdE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNSYXRlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcmF0ZWApXHJcbiAgICAgICAgcmVzUmF0ZS5kYXRhLmRhdGEubWFwKChyb3cpID0+IHNldFJhdGUocm93LnJhdGUpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaGxhc3ROdW1iZXIoKVxyXG4gIH0sIFtdKVxyXG4gIC8vIGdldCBJbnZvaWNlIFxyXG4gIGNvbnN0IFtvbGRJbnZvaWNlLCBzZXRPbGRJbnZvaWNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VDdXN0b21lciA9IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gY3VzdG9tZXIuZmluZCgob3B0aW9uKSA9PiBvcHRpb24gPT09IG5ld1ZhbHVlKVxyXG4gICAgc2V0Q3VzdG9tZXJOYW1lKHtcclxuICAgICAgX2lkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgY3VzdG9tZXJOYW1lOiBzZWxlY3RlZE9wdGlvbnM/LkN1c3RvbWVyLFxyXG4gICAgICBiaWxsaW5nQWRkcmVzczogc2VsZWN0ZWRPcHRpb25zPy5iaWxsaW5nQWRkcmVzcyxcclxuICAgICAgYmlsbGluZ0NpdHk6IHNlbGVjdGVkT3B0aW9ucz8uYmlsbGluZ0NpdHlcclxuICAgIH0pO1xyXG4gICAgc2V0Q3VzdG9tZXJJZChzZWxlY3RlZE9wdGlvbnM/Ll9pZClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xlYXIgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXN0b21lck5hbWUoe1xyXG4gICAgICBfaWQ6IG51bGwsXHJcbiAgICAgIGN1c3RvbWVyTmFtZTogbnVsbCxcclxuICAgICAgYmlsbGluZ0FkZHJlc3M6IG51bGwsXHJcbiAgICAgIGJpbGxpbmdDaXR5OiBudWxsXHJcbiAgICB9KVxyXG4gICAgc2V0SW52b2ljZShbXSlcclxuICAgIHNldEN1c3RvbWVySWQobnVsbClcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9pbnZvaWNlP3N1bW1hcnk9dHJ1ZWApXHJcbiAgICAgICAgY29uc3QgcmVzUHJvamVjdCA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3Byb2plY3RzYClcclxuICAgICAgICBpZiAoY3VzdG9tZXJJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgaWYgKHJlYXNvbiA9PT0gXCJJbnZvaWNlXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyRGF0YSA9IHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LmN1c3RvbWVyTmFtZS5faWQgPT09IGN1c3RvbWVySWQpO1xyXG4gICAgICAgICAgICBzZXRPbGRJbnZvaWNlKGZpbHRlckRhdGEpXHJcbiAgICAgICAgICAgIGNvbnN0IGV4SW52b2ljZSA9IGZpbHRlckRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuc3RhdHVzID09PSAnU2VudCcgfHwgcm93LnN0YXR1cyA9PT0gJ1BhcnRpYWxseS1QYWlkJyAmJiAhaW52b2ljZTEuc29tZSgocm93MSkgPT4gcm93MS5pZCA9PT0gcm93Ll9pZCkpXHJcbiAgICAgICAgICAgICAgLm1hcCgocm93KSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHJvdy5faWQsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21lck5hbWU6IHJvdy5jdXN0b21lck5hbWUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogMCxcclxuICAgICAgICAgICAgICAgIGFtb3VudFBhaWRGQzogMCxcclxuICAgICAgICAgICAgICAgIGFtb3VudFBhaWRVU0Q6IDAsXHJcbiAgICAgICAgICAgICAgICByYXRlQ2hhbmdlOiByYXRlLFxyXG4gICAgICAgICAgICAgICAgdG90YWxDb252ZXJ0ZWQ6IDAsXHJcbiAgICAgICAgICAgICAgICBSZWY6IHJvdy5pbnZvaWNlTnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgcHJlZml4OiAocm93LlJlZmVyZW5jZU5hbWUyIHx8IHJvdy5pbnZvaWNlUHVyY2hhc2UgPT09ICdQdXJjaGFzZWQnKSA/IFwiUC1cIiA6IFwiSU5WLVwiLFxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZUR1ZTogcm93LmJhbGFuY2VEdWUsXHJcbiAgICAgICAgICAgICAgICBpbnZvaWNlQW1vdW50OiByb3cudG90YWxJbnZvaWNlLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiByb3cuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgaW52b2ljZURhdGU6IHJvdy5pbnZvaWNlRGF0ZVxyXG4gICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICBzZXRJbnZvaWNlKFsuLi5pbnZvaWNlMSwgLi4uZXhJbnZvaWNlXSlcclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVhc29uID09PSBcIlByb2plY3RcIikge1xyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJEYXRhMiA9IHJlc1Byb2plY3QuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5jdXN0b21lck5hbWU/Ll9pZCA9PT0gY3VzdG9tZXJJZCAmJiByb3cuc3RhdHVzID09PSBcIk9uLUdvaW5nXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBleFByb2plY3QgPSBmaWx0ZXJEYXRhMi5maWx0ZXIoKHJvdykgPT4gIWludm9pY2UxLnNvbWUoKHJvdzEpID0+IHJvdzEuaWQgPT09IHJvdy5faWQpKVxyXG4gICAgICAgICAgICAgIC5tYXAoKHJvdykgPT4gKHtcclxuICAgICAgICAgICAgICAgIGlkOiByb3cuX2lkLFxyXG4gICAgICAgICAgICAgICAgY3VzdG9tZXJOYW1lOiByb3cuY3VzdG9tZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgICAgICAgICBhbW91bnRQYWlkRkM6IDAsXHJcbiAgICAgICAgICAgICAgICBhbW91bnRQYWlkVVNEOiAwLFxyXG4gICAgICAgICAgICAgICAgcmF0ZUNoYW5nZTogcmF0ZSxcclxuICAgICAgICAgICAgICAgIHRvdGFsQ29udmVydGVkOiAwLFxyXG4gICAgICAgICAgICAgICAgUmVmOiByb3cucHJvamVjdE51bWJlcixcclxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJQLVwiLFxyXG4gICAgICAgICAgICAgICAgYmFsYW5jZUR1ZTogcm93LmJ1ZGdldCAhPT0gdW5kZWZpbmVkID8gcm93LmJ1ZGdldCA6IDAsXHJcbiAgICAgICAgICAgICAgICBpbnZvaWNlQW1vdW50OiByb3cuYnVkZ2V0ICE9PSB1bmRlZmluZWQgPyByb3cuYnVkZ2V0IDogMCxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogXCJcIixcclxuICAgICAgICAgICAgICAgIGludm9pY2VEYXRlOiByb3cuc3RhcnREYXRlXHJcbiAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIHNldEludm9pY2UoWy4uLmludm9pY2UxLCAuLi5leFByb2plY3RdKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbY3VzdG9tZXJJZCwgaW52b2ljZTEsIHJlYXNvbl0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUNFTyA9IChlLCBpZFJvdykgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBjb25zdCBsaXN0ID0gWy4uLmludm9pY2VdXHJcbiAgICBjb25zdCBpID0gaW52b2ljZS5maW5kSW5kZXgoSXRlbSA9PiBJdGVtLmlkID09PSBpZFJvdylcclxuICAgIGxpc3RbaV1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIGxpc3RbaV1bJ3RvdGFsQ29udmVydGVkJ10gPSBNYXRoLnJvdW5kKChsaXN0W2ldWydhbW91bnRQYWlkRkMnXSAvIGxpc3RbaV1bJ3JhdGVDaGFuZ2UnXSkgKiAxMDApIC8gMTAwO1xyXG4gICAgbGlzdFtpXVsndG90YWwnXSA9IE1hdGgucm91bmQoKHBhcnNlRmxvYXQobGlzdFtpXVsndG90YWxDb252ZXJ0ZWQnXSkgKyBwYXJzZUZsb2F0KGxpc3RbaV1bJ2Ftb3VudFBhaWRVU0QnXSkpICogMTAwKSAvIDEwMDtcclxuICAgIGlmIChsaXN0W2ldWyd0b3RhbCddID4gbGlzdFtpXVsnYmFsYW5jZUR1ZSddKSB7XHJcbiAgICAgIGxpc3RbaV1bJ2Ftb3VudFBhaWRGQyddID0gMFxyXG4gICAgICBsaXN0W2ldWydhbW91bnRQYWlkVVNEJ10gPSAwXHJcbiAgICAgIGxpc3RbaV1bJ3RvdGFsJ10gPSAwXHJcbiAgICB9XHJcbiAgICBzZXRJbnZvaWNlKGxpc3QpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVBheW1lbnQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHJlbWFpbmluZyA9IGFtb3VudDtcclxuICAgIGNvbnN0IHRvdGFsSW52b2ljZUV4cCA9IGludm9pY2UubWFwKChyb3cpID0+IHtcclxuICAgICAgY29uc3QgdG90YWwgPSBNYXRoLm1pbihyZW1haW5pbmcsIHJvdy5iYWxhbmNlRHVlKS50b0ZpeGVkKDIpO1xyXG4gICAgICByZW1haW5pbmcgLT0gdG90YWxcclxuICAgICAgcmV0dXJuIHsgLi4ucm93LCB0b3RhbCB9XHJcbiAgICB9KVxyXG4gICAgc2V0SW52b2ljZSh0b3RhbEludm9pY2VFeHApXHJcbiAgfVxyXG5cclxuICBjb25zdCBiYWxhbmNlRHVlSW5mbyA9IGludm9pY2UubGVuZ3RoID4gMCA/IGludm9pY2UucmVkdWNlKChzdW0sIHJvdykgPT4gc3VtICsgcGFyc2VGbG9hdChyb3cuYmFsYW5jZUR1ZSksIDApIDogMFxyXG4gIGNvbnN0IFBheW1lbnRJbmZvID0gaW52b2ljZS5sZW5ndGggPiAwID8gaW52b2ljZS5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyBwYXJzZUZsb2F0KHJvdy50b3RhbCksIDApIDogMFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobW9kZXMgIT09IFwiQ3JlZGl0XCIpIHtcclxuICAgICAgY29uc3QgUGF5bWVudFJlY2VpdmVkRkMyID0gaW52b2ljZS5sZW5ndGggPiAwID8gaW52b2ljZS5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyBwYXJzZUZsb2F0KHJvdy5hbW91bnRQYWlkRkMpLCAwKSA6IDBcclxuICAgICAgc2V0UGF5bWVudFJlY2VpdmVkRkMoUGF5bWVudFJlY2VpdmVkRkMyKVxyXG4gICAgICBjb25zdCBQYXltZW50UmVjZWl2ZWRVU0QyID0gaW52b2ljZS5sZW5ndGggPiAwID8gaW52b2ljZS5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyBwYXJzZUZsb2F0KHJvdy5hbW91bnRQYWlkVVNEKSwgMCkgOiAwXHJcbiAgICAgIHNldFBheW1lbnRSZWNlaXZlZFVTRChQYXltZW50UmVjZWl2ZWRVU0QyKVxyXG4gICAgfVxyXG4gIH0sIFtpbnZvaWNlLCBtb2Rlc10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZU1vZGVzID0gKGUpID0+IHtcclxuICAgIHNldE1vZGVzKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdG90YWxDb252ZXJ0ZWRGYyA9IE1hdGgucm91bmQoKFBheW1lbnRSZWNlaXZlZEZDIC8gcmF0ZSkgKiAxMDApIC8gMTAwO1xyXG4gIGNvbnN0IHRvdGFsVVNkSW5mbyA9IE1hdGgucm91bmQoKHBhcnNlRmxvYXQodG90YWxDb252ZXJ0ZWRGYykgKyBwYXJzZUZsb2F0KFBheW1lbnRSZWNlaXZlZFVTRCkpICogMTAwKSAvIDEwMDtcclxuXHJcbiAgY29uc3QgcmVtYWluaW5nSW52b2ljZSA9IGJhbGFuY2VEdWVJbmZvIC0gUGF5bWVudEluZm9cclxuICBjb25zdCByZW1haW5pbmdWYWx1ZSA9IChyZWFzb24gPT09IFwiUHJvamVjdFwiIHx8IHJlYXNvbiA9PT0gXCJDdXN0b21lciBDcmVkaXRcIikgPyBwYXJzZUZsb2F0KGFtb3VudCkgOiAocGFyc2VGbG9hdChhbW91bnQpIC0gUGF5bWVudEluZm8pO1xyXG4gIGNvbnN0IHJlbWFpbmluZyA9IE1hdGgucm91bmQocmVtYWluaW5nVmFsdWUgKiAxMDApIC8gMTAwXHJcblxyXG4gIGNvbnN0IFtvbGRDcmVkaXQsIHNldE9sZENyZWRpdF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEN1c3RvbWVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoY3VzdG9tZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtY3VzdG9tZXIvJHtjdXN0b21lcklkfWApXHJcbiAgICAgICAgICBzZXRPbGRDcmVkaXQocmVzLmRhdGEuZGF0YS5jcmVkaXQpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hDdXN0b21lcigpXHJcbiAgfSwgW2N1c3RvbWVySWRdKVxyXG5cclxuICBjb25zdCBbY3JlZGl0LCBzZXRDcmVkaXRdID0gdXNlU3RhdGUoMClcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHBhcnNlRmxvYXQoY3JlZGl0T2xkKSA9PT0gcGFyc2VGbG9hdChyZW1haW5pbmcpKSB7XHJcbiAgICAgIHNldENyZWRpdChvbGRDcmVkaXQpXHJcbiAgICB9IGVsc2UgaWYgKHBhcnNlRmxvYXQoY3JlZGl0T2xkKSA+IHBhcnNlRmxvYXQocmVtYWluaW5nKSkge1xyXG4gICAgICBsZXQgdG90YWxSID0gY3JlZGl0T2xkIC0gcmVtYWluaW5nXHJcbiAgICAgIGNvbnN0IHRvdGFsUjEgPSBpc05hTihvbGRDcmVkaXQgLSB0b3RhbFIpID8gMCA6IHBhcnNlRmxvYXQoTnVtYmVyKG9sZENyZWRpdCkgLSB0b3RhbFIpXHJcbiAgICAgIHNldENyZWRpdCh0b3RhbFIxKVxyXG4gICAgfSBlbHNlIGlmIChwYXJzZUZsb2F0KGNyZWRpdE9sZCkgPCBwYXJzZUZsb2F0KHJlbWFpbmluZykpIHtcclxuICAgICAgbGV0IHRvdGFsUiA9IHJlbWFpbmluZyAtIGNyZWRpdE9sZFxyXG4gICAgICBjb25zdCB0b3RhbFIxID0gaXNOYU4oTnVtYmVyKG9sZENyZWRpdCkgKyBOdW1iZXIodG90YWxSKSkgPyAwIDogcGFyc2VGbG9hdChOdW1iZXIob2xkQ3JlZGl0KSArIE51bWJlcih0b3RhbFIpKVxyXG4gICAgICBzZXRDcmVkaXQodG90YWxSMSlcclxuICAgIH1cclxuICB9LCBbb2xkQ3JlZGl0LCByZW1haW5pbmcsIGNyZWRpdE9sZF0pXHJcblxyXG5cclxuXHJcbiAgY29uc3QgVG90YWxBbW91bnQgPSBpbnZvaWNlPy5maWx0ZXIoKHJvdykgPT4gcGFyc2VGbG9hdChyb3cudG90YWwpICE9PSAwKVxyXG4gIGNvbnN0IGludm9pY2VVcGRhdGUgPSAocmVhc29uID09PSBcIkludm9pY2VcIiAmJiBpbnZvaWNlKSA/IGludm9pY2UubWFwKChyb3cpID0+IHtcclxuICAgIGNvbnN0IGNvcnJlc3BvbmRpbmdJZCA9IG9sZEludm9pY2U/LmZpbmQoKHJvdzIpID0+IHJvdzIuX2lkID09PSByb3cuaWQpXHJcbiAgICBpZiAoIWNvcnJlc3BvbmRpbmdJZCkgcmV0dXJuIG51bGw7IC8vIFNhZmV0eSBjaGVja1xyXG5cclxuICAgIGxldCBkaWZmZXJlbmNlID0gMFxyXG4gICAgbGV0IHRvdGFsID0gMFxyXG4gICAgY29uc3QgZGlmZmVyZW5jZTEgPSBNYXRoLnJvdW5kKChwYXJzZUZsb2F0KHJvdy5iYWxhbmNlRHVlKSAtIHBhcnNlRmxvYXQocm93LnRvdGFsKSkgKiAxMDApIC8gMTAwO1xyXG4gICAgZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2UxXHJcbiAgICB0b3RhbCA9IE1hdGgucm91bmQoKHBhcnNlRmxvYXQoY29ycmVzcG9uZGluZ0lkLnRvdGFsSW52b2ljZSkgLSBwYXJzZUZsb2F0KGRpZmZlcmVuY2UxKSkgKiAxMDApIC8gMTAwO1xyXG5cclxuICAgIGlmIChkaWZmZXJlbmNlIDw9IDAgJiYgcGFyc2VGbG9hdCh0b3RhbCkgIT09IDApIHtcclxuICAgICAgcm93LnN0YXR1cyA9ICdQYWlkJ1xyXG4gICAgfSBlbHNlIGlmICh0b3RhbCA+IDAgJiYgdG90YWwgPCBjb3JyZXNwb25kaW5nSWQudG90YWxJbnZvaWNlKSB7XHJcbiAgICAgIHJvdy5zdGF0dXMgPSAnUGFydGlhbGx5LVBhaWQnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3cuc3RhdHVzID0gJ1NlbnQnXHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZDogcm93LmlkLFxyXG4gICAgICBudW1iZXI6IGNvcnJlc3BvbmRpbmdJZC5pbnZvaWNlTnVtYmVyLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdG90YWw6IE51bWJlcih0b3RhbCksXHJcbiAgICAgICAgYmFsYW5jZUR1ZTogZGlmZmVyZW5jZSxcclxuICAgICAgICBzdGF0dXM6IHJvdy5zdGF0dXNcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pLmZpbHRlcihCb29sZWFuKSA6IFtdXHJcbiAgY29uc3QgaGFuZGxlVXBkYXRlSW52b2ljZSA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVSZXF1ZXN0ID0gaW52b2ljZVVwZGF0ZSAhPT0gbnVsbCA/XHJcbiAgICAgIGludm9pY2VVcGRhdGUubWFwKCh7IGlkLCBkYXRhIH0pID0+IHtcclxuICAgICAgICByZXR1cm4gYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLWludm9pY2UvJHtpZH1gLCBkYXRhKVxyXG4gICAgICB9KSA6IG51bGxcclxuICAgIGlmICh1cGRhdGVSZXF1ZXN0ICE9PSBudWxsKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodXBkYXRlUmVxdWVzdCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FuIGVycm9yIGFzIG9jY3VyJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlVXBkYXRlQ3JlZGl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgY3JlZGl0XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtY3VzdG9tZXIvJHtjdXN0b21lcklkfWAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgW29wZW5CYWNrLCBzZXRPcGVuQmFja10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5CYWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbkJhY2sodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQmFjayhmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG5cclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVjaXNpb24gPSAobmF2aWdhdGUpID0+IHtcclxuICAgIC8vTmF2aWdhdGUgQmFzZWQgb24gdGggRGVjaXNpb25cclxuICAgIGlmIChuYXZpZ2F0ZSA9PT0gJ3ByZXZpb3VzJykge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRlID09PSAnc3RheScpIHtcclxuICAgICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uID0gYXN5bmMgKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9OdW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogUmVmZXJlbmNlSW5mbyxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIE1vZGlmeSBQQVlNRU5UICcsXHJcbiAgICAgIHJlYXNvbjogJ1BBWS0nICsgU3RyaW5nKFJlZmVyZW5jZUluZm9OdW1iZXIpLnBhZFN0YXJ0KDYsICcwJykgKyAnIEZvciAnICsgY3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZSxcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogbmV3IERhdGUoKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2F2aW5nKCd0cnVlJylcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGFtb3VudCxcclxuICAgICAgYmFua0NoYXJnZSxcclxuICAgICAgbW9kZXMsXHJcbiAgICAgIHBheW1lbnREYXRlLFxyXG4gICAgICBUb3RhbEFtb3VudCxcclxuICAgICAgcGF5bWVudE51bWJlcixcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIFBheW1lbnRSZWNlaXZlZEZDLFxyXG4gICAgICBQYXltZW50UmVjZWl2ZWRVU0QsXHJcbiAgICAgIHJlbWFpbmluZyxcclxuICAgICAgcmVhc29uLFxyXG4gICAgICB0cmFuc2FjdGlvblR5cGUsXHJcbiAgICAgIHN0YXR1c1xyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLXBheW1lbnQvJHtpZH1gLCBkYXRhKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm8gPSByZXMuZGF0YS5kYXRhLl9pZFxyXG4gICAgICAgIGNvbnN0IFJlZmVyZW5jZUluZm9OdW1iZXIgPSByZXMuZGF0YS5kYXRhLnBheW1lbnROdW1iZXJcclxuICAgICAgICBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oUmVmZXJlbmNlSW5mbywgUmVmZXJlbmNlSW5mb051bWJlcilcclxuICAgICAgICBoYW5kbGVPcGVuKCk7XHJcblxyXG4gICAgICAgIGhhbmRsZVVwZGF0ZUludm9pY2UoKTtcclxuICAgICAgICBoYW5kbGVVcGRhdGVDcmVkaXQoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgc2V0U2F2aW5nKCcnKVxyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFVwZGF0ZSBQYXltZW50XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlbkJhY2t9PlxyXG4gICAgICAgICAgICAgIDxBcnJvd0JhY2sgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXs0fSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnNJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBtYXJnaW5MZWZ0OiAnMTBweCcsIG1hcmdpblJpZ2h0OiAnMTBweCcgfX0+e3VzZXIuZGF0YS51c2VyTmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaWRlQmFyKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNpZGVCYXIoZmFsc2UpfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZWJhckRhc2gxIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiA0IH19ID5cclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUgIT09IG51bGwgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzgwcHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdDdXN0b21lciBOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXJOYW1lLmN1c3RvbWVyTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsZWFyXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQgb25DbGljaz17aGFuZGxlQ2xlYXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2N1c3RvbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5jdXN0b21lckZ1bGxOYW1lID8gb3B0aW9uLmN1c3RvbWVyRnVsbE5hbWUgOiBvcHRpb24uY29tcGFueU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1ZhbHVlKSA9PiBoYW5kbGVDaGFuZ2VDdXN0b21lcihuZXdWYWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIkN1c3RvbWVyIE5hbWVcIiByZXF1aXJlZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInRyYW5zYWN0aW9uVHlwZVwiPlRyYW5zYWN0aW9uIFR5cGU8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwidHJhbnNhY3Rpb25UeXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRyYW5zYWN0aW9uVHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0cmFuc2FjdGlvblR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVHJhbnNhY3Rpb24gVHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VHJhbnNhY3Rpb25UeXBlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUGF5bWVudFwiPlBheW1lbnQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJSZWZ1bmRcIj5SZWZ1bmQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJzdGF0dXNcIj5TdGF0dXM8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJDbGVhcmVkXCI+Q2xlYXJlZDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlBlbmRpbmdcIj5QZW5kaW5nPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiVm9pZGVkXCI+Vm9pZGVkPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDdXN0b21lciBDdXJyZW50IENyZWRpdDogPHN0cm9uZz4ke29sZENyZWRpdD8udG9GaXhlZCgyKX08L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdhbW91bnQnPkFtb3VudCBSZWNlaXZlZDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdhbW91bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFtb3VudChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+VVNEPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJBbW91bnQgUmVjZWl2ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdiYW5rQ2hhcmdlJz5CYW5rIENoYXJnZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2JhbmtDaGFyZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiYW5rQ2hhcmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJhbmtDaGFyZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5VU0Q8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCYW5rIENoYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdCYW5rIENoYXJnZSBJZiBBbnk6IE9wdGlvbmFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXltZW50RGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMocGF5bWVudERhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0UGF5bWVudERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgbTogMSwgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwibW9kZXNcIj5QYXltZW50IE1vZGVzPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1vZGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vZGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21vZGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBheW1lbnQgTW9kZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZU1vZGVzKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJDYXNoXCI+Q2FzaDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkJhbmsgVHJhbnNmZXJcIj5CYW5rIFRyYW5zZmVyPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiQ3JlZGl0XCI+Q3JlZGl0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJwYXltZW50TnVtYmVyXCI+UGF5bWVudCBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdwYXltZW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXltZW50TnVtYmVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nUGF5bWVudCBOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXltZW50TnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBheW1lbnROdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5QQVktMDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZXMgPT09ICdDcmVkaXQnID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdhbW91bnRQYWlkRkMnPkFtb3VudCBQYWlkIEZDPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzIwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nUGF5bWVudFJlY2VpdmVkRkMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdQYXltZW50UmVjZWl2ZWRGQydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtQYXltZW50UmVjZWl2ZWRGQ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGF5bWVudFJlY2VpdmVkRkMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+RkM8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQW1vdW50IFBhaWQgRkNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdyYXRlJz5SYXRlPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzE1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ncmF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3JhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdhbW91bnRQYWlkRkMnPkFtb3VudCBQYWlkIFVTRDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J1BheW1lbnRSZWNlaXZlZFVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1BheW1lbnRSZWNlaXZlZFVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtQYXltZW50UmVjZWl2ZWRVU0R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBheW1lbnRSZWNlaXZlZFVTRChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFtb3VudCBQYWlkIFVTRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9J2Ftb3VudFBhaWRGQyc+VG90YWwgUGFpZCBVU0Q8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMjAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd0b3RhbFVTZEluZm8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0b3RhbFVTZEluZm8nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG90YWxVU2RJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+JDwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUb3RhbCBQYWlkIFVTRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICApIDpcclxuICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnMCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW52b2ljZT8ubWFwKChyb3csIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtyb3cuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5anMocm93Lmludm9pY2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJvdy5wcmVmaXggPT09IFwiUC1cIiB8fCByb3cucHJlZml4ID09PSBcIlBcIiB8fCAocmVhc29uID09PSBcIlByb2plY3RcIiAmJiAhcm93LnByZWZpeCkpID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzE1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPVwicHJvamVjdE51bWJlclwiPlByb2plY3QgTnVtYmVyPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nUmVmJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J1JlZidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nUHJvamVjdCBOdW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1N0cmluZyhyb3cuUmVmKS5wYWRTdGFydCg2LCAnMCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPlAtPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHN4PXt7IHdpZHRoOiAnMTUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9XCJpbnZvaWNlTnVtYmVyXCI+SW52b2ljZSBOdW1iZXI8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdSZWYnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nUmVmJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdJbnZvaWNlIE51bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17U3RyaW5nKHJvdy5SZWYpLnBhZFN0YXJ0KDYsICcwJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+SU5WLTwvSW5wdXRBZG9ybm1lbnQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBpZD0nSW52b2ljZUFtb3VudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSdzdWJ0b3RhbCc+QW1vdW50PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzE1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdudW1iZXInXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nc3VidG90YWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm93LmJhbGFuY2VEdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5VU0Q8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic3VidG90YWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0nYW1vdW50UGFpZEZDJz5BbW91bnQgUGFpZCBGQzwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2Ftb3VudFBhaWRGQydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Ftb3VudFBhaWRGQydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb3cuYW1vdW50UGFpZEZDfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VDRU8oZSwgcm93LmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QWRvcm5tZW50PXs8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJzdGFydFwiPkZDPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFtb3VudCBQYWlkIEZDXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGh0bWxGb3I9J3JhdGVDaGFuZ2UnPlJhdGU8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE91dGxpbmVkSW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdyYXRlQ2hhbmdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncmF0ZUNoYW5nZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb3cucmF0ZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsIHJvdy5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj4kPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaHRtbEZvcj0nYW1vdW50UGFpZFVTRCc+QW1vdW50IFBhaWQgVVNEPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPdXRsaW5lZElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzIwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nYW1vdW50UGFpZFVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Ftb3VudFBhaWRVU0QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm93LmFtb3VudFBhaWRVU0R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUNFTyhlLCByb3cuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBZG9ybm1lbnQ9ezxJbnB1dEFkb3JubWVudCBwb3NpdGlvbj1cInN0YXJ0XCI+VVNEPC9JbnB1dEFkb3JubWVudD59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFtb3VudCBQYWlkIFVTRFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBodG1sRm9yPSd0b3RhbCc+VG90YWwgUGFpZDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0bGluZWRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTUwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSd0b3RhbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3RvdGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvdy50b3RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQ0VPKGUsIHJvdy5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEFkb3JubWVudD17PElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwic3RhcnRcIj5VU0Q8L0lucHV0QWRvcm5tZW50Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVG90YWwgUGFpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJyAxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCBwYWRkaW5nOiAnNDBweCcsIHdpZHRoOiAnNTAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48VHlwb2dyYXBoeT4gSW52b2ljZXMgVG90YWwgQW1vdW50IDwvVHlwb2dyYXBoeT48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3Bhbj4gJCA8L3NwYW4+e2JhbGFuY2VEdWVJbmZvLnRvRml4ZWQoMil9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48VHlwb2dyYXBoeT4gQW1vdW50IFJlY2VpdmVkIDwvVHlwb2dyYXBoeT48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3Bhbj4gJCA8L3NwYW4+e2Ftb3VudH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PjxUeXBvZ3JhcGh5PiBBbW91bnQgUGFpZCBGQyA8L1R5cG9ncmFwaHk+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+PHNwYW4+IEZDIDwvc3Bhbj57UGF5bWVudFJlY2VpdmVkRkMudG9TdHJpbmcoKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PjxUeXBvZ3JhcGh5PiBBbW91bnQgUGFpZCBVU0QgPC9UeXBvZ3JhcGh5PjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuPiAkIDwvc3Bhbj57UGF5bWVudFJlY2VpdmVkVVNELnRvU3RyaW5nKCl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48VHlwb2dyYXBoeT4gVG90YWwgUGFpZCBVU0QgPC9UeXBvZ3JhcGh5PjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuPiAkIDwvc3Bhbj57bW9kZXMgPT09ICdDcmVkaXQnID8gdG90YWxVU2RJbmZvLnRvRml4ZWQoMikgOiBQYXltZW50SW5mby50b0ZpeGVkKDIpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcgfX0+PFR5cG9ncmFwaHk+IEJhbGFuY2UgRHVlIDwvVHlwb2dyYXBoeT48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JyB9fT48c3Bhbj4gJCA8L3NwYW4+e3JlbWFpbmluZ0ludm9pY2UudG9GaXhlZCgyKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PjxUeXBvZ3JhcGh5PiBDcmVkaXQgPC9UeXBvZ3JhcGh5PjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PjxzcGFuPiAkIDwvc3Bhbj57cmVtYWluaW5nfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2F2aW5nICE9PSAndHJ1ZScgPyA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPiA6IDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlNhdmluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuQmFja31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUJhY2t9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RG8geW91IHdhbnQgdG8gc3RvcCBtYWtpbmcgcGF5bWVudCA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGUgOjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiPiBJZiB5b3Ugc3RvcCBtYWtpbmcgcGF5bWVudCB3aXRob3V0IHNhdmluZywgYWxsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3Q8L3NwYW4+PC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9QYXltZW50VmlldycpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlllczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+Tm88L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNpc2lvbignc3RheScpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQWRkIE5ld1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2lzaW9uKCdwcmV2aW91cycpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgR28gQmFja1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17RXJyb3JPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VFcnJvcn1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2FuY2VsSWNvbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBGYWlsZWQgdG8gU2F2ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50SW5mb3JtYXRpb25VcGRhdGVcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL2Nzcy9TaWRlYmFyTmV3LnNjc3MnXHJcbmltcG9ydCB7IE91dGxldCwgTmF2TGluaywgTGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBQZXJtSWRlbnRpdHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGVybUlkZW50aXR5JztcclxuaW1wb3J0IExpc3RBbHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTGlzdEFsdCc7XHJcbmltcG9ydCBEZXNjcmlwdGlvbkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZXNjcmlwdGlvbic7XHJcbmltcG9ydCBSZWNlaXB0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1JlY2VpcHQnO1xyXG5pbXBvcnQgTW92aW5nSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vdmluZyc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5ncyc7XHJcbmltcG9ydCBJbnNlcnREcml2ZUZpbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvSW5zZXJ0RHJpdmVGaWxlJztcclxuaW1wb3J0IFJlc3RvcmVQYWdlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jlc3RvcmVQYWdlJztcclxuaW1wb3J0IFJlcXVlc3RRdW90ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9SZXF1ZXN0UXVvdGUnO1xyXG5pbXBvcnQgTW9uZXRpemF0aW9uT25JY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9uZXRpemF0aW9uT24nO1xyXG5pbXBvcnQgRW5naW5lZXJpbmdJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRW5naW5lZXJpbmcnO1xyXG5pbXBvcnQgeyBFeHBsaWNpdCwgU2hvcHBpbmdCYWdPdXRsaW5lZCB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUm9vbVByZWZlcmVuY2VzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Jvb21QcmVmZXJlbmNlcyc7XHJcbmltcG9ydCB7IExpc3RJdGVtQnV0dG9uLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgUGF5bWVudEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QYXltZW50JztcclxuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0JztcclxuZnVuY3Rpb24gU2lkZWJhckRhc2gxKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxEYXNoYm9hcmRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGFzaGJvYXJkXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxQZXJtSWRlbnRpdHlJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ3VzdG9tZXJcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSAgPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8TGlzdEFsdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJTdG9yZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UmVxdWVzdFF1b3RlSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlF1b3RhdGlvblwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPERlc2NyaXB0aW9uSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkludm9pY2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxNb25ldGl6YXRpb25Pbkljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQYXltZW50XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8U2hvcHBpbmdCYWdPdXRsaW5lZCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRhaWx5IEV4cGVuc2VzXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFJvb21QcmVmZXJlbmNlc0ljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQcm9qZWN0XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8UmVjZWlwdEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQdXJjaGFzZXMgUmVxdWVzdFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8RW5naW5lZXJpbmdJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTWFpbnRlbmFuY2VcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJNb3JlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckRhc2gxIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlYmFyRGFzaDEiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiQWNjb3VudENpcmNsZUljb24iLCJNZW51SXRlbSIsIkdyaWQiLCJJY29uQnV0dG9uIiwiUGFwZXIiLCJUZXh0RmllbGQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJUeXBvZ3JhcGh5Iiwic3R5bGVkIiwiQm94IiwiQXV0b2NvbXBsZXRlIiwiVGFibGVDb250YWluZXIiLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJNb2RhbCIsIkJhY2tkcm9wIiwiRGl2aWRlciIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkNvbnRhaW5lciIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkFycm93VXB3YXJkT3V0bGluZWQiLCJSZW1vdmVDaXJjbGVPdXRsaW5lIiwiRU5EUE9JTlRfVVJMIiwidXNlTmF2aWdhdGUiLCJ1c2VQYXJhbXMiLCJEZW1vQ29udGFpbmVyIiwiTG9jYWxpemF0aW9uUHJvdmlkZXIiLCJBZGFwdGVyRGF5anMiLCJEYXRlUGlja2VyIiwiZGF5anMiLCJBcnJvd0JhY2siLCJDaGVja0NpcmNsZUljb24iLCJDYW5jZWxJY29uIiwiTG9hZGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvZ291dCIsIkNsb3NlIiwicGFyc2UiLCJCbGFja1Rvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmMyIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmNCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIlBheW1lbnRJbmZvcm1hdGlvblVwZGF0ZSIsIl91c2VQYXJhbXMiLCJpZCIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY1IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJmZXRjaEN1c3RvbWVyIiwiX3JlZjYiLCJyZXZlcnNlIiwiX3VzZVN0YXRlNSIsIl9pZCIsImN1c3RvbWVyTmFtZSIsImJpbGxpbmdBZGRyZXNzIiwiYmlsbGluZ0NpdHkiLCJfdXNlU3RhdGU2Iiwic2V0Q3VzdG9tZXJOYW1lIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJiYW5rQ2hhcmdlIiwic2V0QmFua0NoYXJnZSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwibW9kZXMiLCJzZXRNb2RlcyIsIl91c2VTdGF0ZTEiLCJkYXRlIiwiRGF0ZSIsIl91c2VTdGF0ZTEwIiwicGF5bWVudERhdGUiLCJzZXRQYXltZW50RGF0ZSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsInBheW1lbnROdW1iZXIiLCJzZXRQYXltZW50TnVtYmVyIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsInJhdGUiLCJzZXRSYXRlIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsImNyZWRpdE9sZCIsInNldENyZWRpdE9sZCIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJjdXN0b21lcklkIiwic2V0Q3VzdG9tZXJJZCIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJpbnZvaWNlIiwic2V0SW52b2ljZSIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJpbnZvaWNlMSIsInNldEludm9pY2UxIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsIlBheW1lbnRSZWNlaXZlZEZDIiwic2V0UGF5bWVudFJlY2VpdmVkRkMiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4IiwiUGF5bWVudFJlY2VpdmVkVVNEIiwic2V0UGF5bWVudFJlY2VpdmVkVVNEIiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsInJlYXNvbiIsInNldFJlYXNvbiIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJ0cmFuc2FjdGlvblR5cGUiLCJzZXRUcmFuc2FjdGlvblR5cGUiLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0Iiwic3RhdHVzIiwic2V0U3RhdHVzIiwiZmV0Y2hsYXN0TnVtYmVyIiwiX3JlZjciLCJyZW1haW5pbmciLCJfcmVmOCIsIl9yZXMkZGF0YSIsIl9yZXMkZGF0YTIiLCJOdW1iZXIiLCJUb3RhbEFtb3VudCIsImZpbHRlciIsInJvdyIsInBhcnNlRmxvYXQiLCJ0b3RhbCIsIl9yZWY5IiwicmVzUmF0ZSIsIm1hcCIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJvbGRJbnZvaWNlIiwic2V0T2xkSW52b2ljZSIsImhhbmRsZUNoYW5nZUN1c3RvbWVyIiwibmV3VmFsdWUiLCJzZWxlY3RlZE9wdGlvbnMiLCJmaW5kIiwib3B0aW9uIiwiQ3VzdG9tZXIiLCJoYW5kbGVDbGVhciIsImZldGNoRGF0YSIsIl9yZWYwIiwicmVzUHJvamVjdCIsIl9yZXMkZGF0YTMiLCJmaWx0ZXJEYXRhIiwiZXhJbnZvaWNlIiwic29tZSIsInJvdzEiLCJhbW91bnRQYWlkRkMiLCJhbW91bnRQYWlkVVNEIiwicmF0ZUNoYW5nZSIsInRvdGFsQ29udmVydGVkIiwiUmVmIiwiaW52b2ljZU51bWJlciIsInByZWZpeCIsIlJlZmVyZW5jZU5hbWUyIiwiaW52b2ljZVB1cmNoYXNlIiwiYmFsYW5jZUR1ZSIsImludm9pY2VBbW91bnQiLCJ0b3RhbEludm9pY2UiLCJpbnZvaWNlRGF0ZSIsIl9yZXNQcm9qZWN0JGRhdGEiLCJmaWx0ZXJEYXRhMiIsIl9yb3ckY3VzdG9tZXJOYW1lIiwiZXhQcm9qZWN0IiwicHJvamVjdE51bWJlciIsImJ1ZGdldCIsInVuZGVmaW5lZCIsInN0YXJ0RGF0ZSIsImhhbmRsZUNoYW5nZUNFTyIsImUiLCJpZFJvdyIsIl9lJHRhcmdldCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImxpc3QiLCJpIiwiZmluZEluZGV4IiwiSXRlbSIsIk1hdGgiLCJyb3VuZCIsImhhbmRsZVBheW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRvdGFsSW52b2ljZUV4cCIsIm1pbiIsInRvRml4ZWQiLCJiYWxhbmNlRHVlSW5mbyIsImxlbmd0aCIsInJlZHVjZSIsInN1bSIsIlBheW1lbnRJbmZvIiwiUGF5bWVudFJlY2VpdmVkRkMyIiwiUGF5bWVudFJlY2VpdmVkVVNEMiIsImhhbmRsZUNoYW5nZU1vZGVzIiwidG90YWxDb252ZXJ0ZWRGYyIsInRvdGFsVVNkSW5mbyIsInJlbWFpbmluZ0ludm9pY2UiLCJyZW1haW5pbmdWYWx1ZSIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJvbGRDcmVkaXQiLCJzZXRPbGRDcmVkaXQiLCJfcmVmMSIsImNyZWRpdCIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJzZXRDcmVkaXQiLCJ0b3RhbFIiLCJ0b3RhbFIxIiwiaXNOYU4iLCJpbnZvaWNlVXBkYXRlIiwiY29ycmVzcG9uZGluZ0lkIiwicm93MiIsImRpZmZlcmVuY2UiLCJkaWZmZXJlbmNlMSIsIm51bWJlciIsIkJvb2xlYW4iLCJoYW5kbGVVcGRhdGVJbnZvaWNlIiwiX3JlZjEwIiwidXBkYXRlUmVxdWVzdCIsIl9yZWYxMSIsInB1dCIsIlByb21pc2UiLCJhbGwiLCJsb2ciLCJoYW5kbGVVcGRhdGVDcmVkaXQiLCJfcmVmMTIiLCJfdXNlU3RhdGU0MSIsIl91c2VTdGF0ZTQyIiwib3BlbkJhY2siLCJzZXRPcGVuQmFjayIsImhhbmRsZU9wZW5CYWNrIiwiaGFuZGxlQ2xvc2VCYWNrIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlNDUiLCJfdXNlU3RhdGU0NiIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZUVycm9yIiwiaGFuZGxlQ2xvc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZUNsb3NlRXJyb3IiLCJoYW5kbGVEZWNpc2lvbiIsImhpc3RvcnkiLCJiYWNrIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjEzIiwiUmVmZXJlbmNlSW5mbyIsIlJlZmVyZW5jZUluZm9OdW1iZXIiLCJpZEluZm8iLCJwZXJzb24iLCJTdHJpbmciLCJwYWRTdGFydCIsImRhdGVOb3RpZmljYXRpb24iLCJwb3N0IiwiX3giLCJfeDIiLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwic2F2aW5nIiwic2V0U2F2aW5nIiwiaGFuZGxlU3VibWl0IiwiX3JlZjE0IiwiX3gzIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwib25DbGljayIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93IiwiYmFkZ2VDb250ZW50Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10Iiwib25TdWJtaXQiLCJjb250YWluZXIiLCJwYWRkaW5nIiwiaXRlbSIsInhzIiwiZ2FwIiwibXVsdGlsaW5lIiwibGFiZWwiLCJ0aXRsZSIsInBsYWNlbWVudCIsImRpc2FibGVkIiwiZGlzYWJsZUNsZWFyYWJsZSIsIm9wdGlvbnMiLCJnZXRPcHRpb25MYWJlbCIsImN1c3RvbWVyRnVsbE5hbWUiLCJjb21wYW55TmFtZSIsIm9uQ2hhbmdlIiwicmVuZGVySW5wdXQiLCJwYXJhbXMiLCJyZXF1aXJlZCIsImh0bWxGb3IiLCJzdGFydEFkb3JubWVudCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsIm0iLCJmb3JtYXQiLCJyb3dzIiwia2V5IiwiZmxvYXQiLCJ0ZXh0QWxpZ24iLCJ0b1N0cmluZyIsIm9uQ2xvc2UiLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJPdXRsZXQiLCJOYXZMaW5rIiwiTGluayIsInVzZUxvY2F0aW9uIiwiRGFzaGJvYXJkSWNvbiIsIlBlcm1JZGVudGl0eUljb24iLCJMaXN0QWx0SWNvbiIsIkRlc2NyaXB0aW9uSWNvbiIsIlJlY2VpcHRJY29uIiwiTW92aW5nSWNvbiIsIlNldHRpbmdzSWNvbiIsIkluc2VydERyaXZlRmlsZUljb24iLCJSZXN0b3JlUGFnZUljb24iLCJSZXF1ZXN0UXVvdGVJY29uIiwiTW9uZXRpemF0aW9uT25JY29uIiwiRW5naW5lZXJpbmdJY29uIiwiRXhwbGljaXQiLCJTaG9wcGluZ0JhZ091dGxpbmVkIiwiUm9vbVByZWZlcmVuY2VzSWNvbiIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwibWFrZVN0eWxlcyIsIlBheW1lbnRJY29uIiwiTW9yZVZlcnRJY29uIiwiRnJhZ21lbnQiLCJwcmltYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==