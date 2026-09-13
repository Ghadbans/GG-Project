"use strict";
(this["webpackChunkgg_management"] = this["webpackChunkgg_management"] || []).push([[3697],{

/***/ 92659
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

"use client";

var _interopRequireDefault = __webpack_require__(24994);
__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(42032));
var _jsxRuntime = __webpack_require__(74848);
var _default = exports.A = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"
}), 'ArrowBack');

/***/ },

/***/ 29719
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20561);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M7 11v2h10v-2zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"
}), 'RemoveCircleOutline'));
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 83697
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _component_SidebarDash1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49377);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68525);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55746);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69067);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71543);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60538);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(844);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86531);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50779);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(29571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2071);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(73896);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8641);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(25239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(33198);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(47419);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(35406);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(56655);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(58331);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(89828);
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(8532);
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(14519);
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(88248);
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(49799);
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(11154);
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(97834);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(62274);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(8451);
/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(33341);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(99380);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(29719);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(71510);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(47767);
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(61087);
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(75737);
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(601);
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(48484);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(92659);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(20889);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(82299);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(65821);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(13561);
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(32005);
/* harmony import */ var _component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(40301);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(39781);
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




































var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay)(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A.tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay)(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Ay, {
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
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__/* .useParams */ .g)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_37__/* .useNavigate */ .Zp)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_47__/* .useDispatch */ .wA)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_47__/* .useSelector */ .d4)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__/* .selectCurrentUser */ .xu);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__/* .setUser */ .gV)({
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_48__/* .logOut */ .je)());
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/customer"));
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
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Credit'),
    _useState36 = _slicedToArray(_useState35, 2),
    excessAction = _useState36[0],
    setExcessAction = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState38 = _slicedToArray(_useState37, 2),
    returnUSD = _useState38[0],
    setReturnUSD = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState40 = _slicedToArray(_useState39, 2),
    returnFC = _useState40[0],
    setReturnFC = _useState40[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/get-payment/").concat(id));
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/get-payment/").concat(id));
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
          setExcessAction(res.data.data.excessAction || (res.data.data.returnUSD > 0 || res.data.data.returnFC > 0 ? 'Return' : 'Credit'));
          setReturnUSD(res.data.data.returnUSD || 0);
          setReturnFC(res.data.data.returnFC || 0);
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
          var resRate = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/rate"));
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
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    oldInvoice = _useState42[0],
    setOldInvoice = _useState42[1];
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/invoice?summary=true"));
          var resProject = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/projects"));
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
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState44 = _slicedToArray(_useState43, 2),
    oldCredit = _useState44[0],
    setOldCredit = _useState44[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchCustomer = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (customerId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/get-customer/").concat(customerId));
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
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState46 = _slicedToArray(_useState45, 2),
    credit = _useState46[0],
    setCredit = _useState46[1];
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
        return axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/update-invoice/").concat(id), data);
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
        yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/update-customer/").concat(customerId), data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
    return function handleUpdateCredit() {
      return _ref12.apply(this, arguments);
    };
  }();
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState48 = _slicedToArray(_useState47, 2),
    openBack = _useState48[0],
    setOpenBack = _useState48[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    loading = _useState50[0],
    setLoading = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState52 = _slicedToArray(_useState51, 2),
    loadingOpenModal = _useState52[0],
    setLoadingOpenModal = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState54 = _slicedToArray(_useState53, 2),
    ErrorOpenModal = _useState54[0],
    setErrorOpenModal = _useState54[1];
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
  var handleDecision = decision => {
    //Navigate Based on th Decision
    if (decision === 'previous') {
      window.history.back();
    } else if (decision === 'stay') {
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
        yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification(_x, _x2) {
      return _ref13.apply(this, arguments);
    };
  }();
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState56 = _slicedToArray(_useState55, 2),
    saving = _useState56[0],
    setSaving = _useState56[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      var totalReturnUSDVal = (parseFloat(returnUSD) || 0) + (parseFloat(returnFC) || 0) / (parseFloat(rate) || 1);
      var effectiveRemaining = excessAction === 'Return' ? Math.max(0, remaining - totalReturnUSDVal) : remaining;
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
        remaining: effectiveRemaining,
        excessAction: excessAction || 'Credit',
        returnUSD: excessAction === 'Return' ? Number(returnUSD || 0) : 0,
        returnFC: excessAction === 'Return' ? Number(returnFC || 0) : 0,
        reason,
        transactionType,
        status
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__/* ["default"] */ .A.put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_36__/* .ENDPOINT_URL */ .m, "/update-payment/").concat(id), data);
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
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Ay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Update Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_43__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    color: "inherit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .A, {
    badgeContent: 4,
    color: "secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_33__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_NetworkLogoutIcon__WEBPACK_IMPORTED_MODULE_49__/* ["default"] */ .A, {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .A, {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_SidebarDash1__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .A, {
    maxWidth: "none",
    sx: {
      mt: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, customerName.customerName !== null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      gap: '80px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    multiline: true,
    label: "Customer Name",
    value: customerName.customerName,
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlackTooltip, {
    title: "Clear",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    disabled: true,
    onClick: handleClear
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
    disableClearable: true,
    options: customer,
    getOptionLabel: option => option.customerFullName ? option.customerFullName : option.companyName,
    onChange: (e, newValue) => handleChangeCustomer(newValue),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, _extends({}, params, {
      label: "Customer Name",
      required: true
    }))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    id: "transactionType"
  }, "Transaction Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    required: true,
    id: "transactionType",
    name: "transactionType",
    value: transactionType,
    label: "Transaction Type",
    onChange: e => setTransactionType(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "Payment"
  }, "Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "Refund"
  }, "Refund")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    id: "status"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    required: true,
    id: "status",
    name: "status",
    value: status,
    label: "Status",
    onChange: e => setStatus(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "Cleared"
  }, "Cleared"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "Pending"
  }, "Pending"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "Voided"
  }, "Voided")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "body2",
    color: "textSecondary"
  }, "Customer Current Credit: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "$", oldCredit === null || oldCredit === void 0 ? void 0 : oldCredit.toFixed(2)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    htmlFor: "amount"
  }, "Amount Received"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    required: true,
    id: "amount",
    value: amount,
    onChange: e => setAmount(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
      position: "start"
    }, "USD"),
    label: "Amount Received"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 5
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    htmlFor: "bankCharge"
  }, "Bank Charge"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    type: "number",
    id: "bankCharge",
    value: bankCharge,
    onChange: e => setBankCharge(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
      position: "start"
    }, "USD"),
    label: "Bank Charge",
    placeholder: "Bank Charge If Any: Optional"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_39__/* .LocalizationProvider */ .$, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_40__/* .AdapterDayjs */ .R
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_38__/* .DemoContainer */ .j, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_41__/* .DatePicker */ .l, {
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    id: "modes"
  }, "Payment Modes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    required: true,
    id: "modes",
    name: "modes",
    value: modes,
    label: "Payment Modes",
    onChange: e => handleChangeModes(e)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "Cash"
  }, "Cash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "Bank Transfer"
  }, "Bank Transfer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "Credit"
  }, "Credit")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    htmlFor: "paymentNumber"
  }, "Payment Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    type: "number",
    id: "paymentNumber",
    name: "paymentNumber",
    label: "Payment Number",
    value: paymentNumber,
    onChange: e => setPaymentNumber(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
      position: "start"
    }, "PAY-0")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
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
  })), modes === 'Credit' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sx: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    htmlFor: "amountPaidFC"
  }, "Amount Paid FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    sx: {
      width: '200px',
      backgroundColor: 'white'
    },
    id: "PaymentReceivedFC",
    name: "PaymentReceivedFC",
    type: "number",
    value: PaymentReceivedFC,
    onChange: e => setPaymentReceivedFC(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
      position: "start"
    }, "FC"),
    label: "Amount Paid FC"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    htmlFor: "rate"
  }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    sx: {
      width: '150px',
      backgroundColor: 'white'
    },
    id: "rate",
    name: "rate",
    value: rate,
    onChange: e => setRate(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
      position: "start"
    }, "$"),
    label: "Rate"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    htmlFor: "amountPaidFC"
  }, "Amount Paid USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    sx: {
      width: '200px',
      backgroundColor: 'white'
    },
    id: "PaymentReceivedUSD",
    name: "PaymentReceivedUSD",
    type: "number",
    value: PaymentReceivedUSD,
    onChange: e => setPaymentReceivedUSD(e.target.value),
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
      position: "start"
    }, "$"),
    label: "Amount Paid USD"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    htmlFor: "amountPaidFC"
  }, "Total Paid USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
    sx: {
      width: '200px',
      backgroundColor: 'white'
    },
    id: "totalUSdInfo",
    name: "totalUSdInfo",
    type: "number",
    value: totalUSdInfo,
    startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
      position: "start"
    }, "$"),
    label: "Total Paid USD"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, invoice === null || invoice === void 0 ? void 0 : invoice.map((row, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: row.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, dayjs__WEBPACK_IMPORTED_MODULE_42___default()(row.invoiceDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, row.prefix === "P-" || row.prefix === "P" || reason === "Project" && !row.prefix ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
      sx: {
        width: '150px',
        backgroundColor: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
      htmlFor: "projectNumber"
    }, "Project Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      disabled: true,
      type: "text",
      id: "Ref",
      name: "Ref",
      label: "Project Number",
      value: String(row.Ref).padStart(6, '0'),
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
        position: "start"
      }, "P-")
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
      sx: {
        width: '150px',
        backgroundColor: 'white'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
      htmlFor: "invoiceNumber"
    }, "Invoice Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      disabled: true,
      type: "text",
      id: "Ref",
      name: "Ref",
      label: "Invoice Number",
      value: String(row.Ref).padStart(6, '0'),
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
        position: "start"
      }, "INV-")
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      id: "InvoiceAmount"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
      htmlFor: "subtotal"
    }, "Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      sx: {
        width: '150px',
        backgroundColor: 'white'
      },
      type: "number",
      id: "subtotal",
      value: row.balanceDue,
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
        position: "start"
      }, "USD"),
      label: "subtotal"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
      htmlFor: "amountPaidFC"
    }, "Amount Paid FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      sx: {
        width: '200px',
        backgroundColor: 'white'
      },
      id: "amountPaidFC",
      name: "amountPaidFC",
      value: row.amountPaidFC,
      onChange: e => handleChangeCEO(e, row.id),
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
        position: "start"
      }, "FC"),
      label: "Amount Paid FC"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
      htmlFor: "rateChange"
    }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      sx: {
        width: '150px',
        backgroundColor: 'white'
      },
      id: "rateChange",
      name: "rateChange",
      value: row.rateChange,
      onChange: e => handleChangeCEO(e, row.id),
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
        position: "start"
      }, "$"),
      label: "Rate"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
      htmlFor: "amountPaidUSD"
    }, "Amount Paid USD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      sx: {
        width: '200px',
        backgroundColor: 'white'
      },
      id: "amountPaidUSD",
      name: "amountPaidUSD",
      value: row.amountPaidUSD,
      onChange: e => handleChangeCEO(e, row.id),
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
        position: "start"
      }, "USD"),
      label: "Amount Paid USD"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
      htmlFor: "total"
    }, "Total Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      disabled: true,
      sx: {
        width: '150px',
        backgroundColor: 'white'
      },
      id: "total",
      name: "total",
      value: row.total,
      onChange: e => handleChangeCEO(e, row.id),
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
        position: "start"
      }, "USD"),
      label: "Total Paid"
    }))));
  })))))), remaining > 0 && modes !== 'Credit-Account' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      mt: 2,
      mb: 2,
      p: 2,
      border: '1px solid #30368a',
      borderRadius: '8px',
      backgroundColor: '#f0f4ff',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "subtitle1",
    sx: {
      fontWeight: 'bold',
      color: '#30368a',
      mb: 1.5
    }
  }, "Rest / Surplus Amount Action (Overpayment: $", remaining.toFixed(2), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    container: true,
    spacing: 2,
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    id: "excess-action-label-update"
  }, "Surplus Option"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    labelId: "excess-action-label-update",
    value: excessAction,
    label: "Surplus Option",
    onChange: e => {
      var val = e.target.value;
      setExcessAction(val);
      if (val === 'Return') {
        setReturnUSD(remaining);
        setReturnFC(0);
      } else {
        setReturnUSD(0);
        setReturnFC(0);
      }
    },
    sx: {
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "Credit"
  }, "Keep in Customer Credit ($", remaining.toFixed(2), ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    value: "Return"
  }, "Cash Return to Customer (Change)")))), excessAction === 'Return' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      gap: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btnCustomer",
    style: {
      padding: '6px 10px',
      fontSize: '11px',
      flex: 1
    },
    onClick: () => {
      setReturnUSD(remaining);
      setReturnFC(0);
    }
  }, "Return All in USD ($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btnCustomer",
    style: {
      padding: '6px 10px',
      fontSize: '11px',
      flex: 1
    },
    onClick: () => {
      setReturnFC(Math.round(remaining * (parseFloat(rate) || 1)));
      setReturnUSD(0);
    }
  }, "Return All in FC (Rate: ", rate, ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small",
    label: "Return USD ($)",
    type: "number",
    value: returnUSD,
    onChange: e => setReturnUSD(e.target.value),
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
        position: "start"
      }, "$")
    },
    sx: {
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    fullWidth: true,
    size: "small",
    label: "Return FC (Today's Rate: ".concat(rate, ")"),
    type: "number",
    value: returnFC,
    onChange: e => setReturnFC(e.target.value),
    InputProps: {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
        position: "start"
      }, "FC")
    },
    sx: {
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    variant: "body2",
    sx: {
      color: '#2e7d32',
      fontWeight: 500
    }
  }, "Returned Equivalent: $", ((parseFloat(returnUSD) || 0) + (parseFloat(returnFC) || 0) / (parseFloat(rate) || 1)).toFixed(2), " / Required Rest: $", remaining.toFixed(2)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      width: ' 100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '40px',
      width: '50%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, " Invoices Total Amount ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " $ "), balanceDueInfo.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, " Amount Received ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " $ "), amount)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, " Amount Paid FC ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " FC "), PaymentReceivedFC.toString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, " Amount Paid USD ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " $ "), PaymentReceivedUSD.toString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, " Total Paid USD ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " $ "), modes === 'Credit' ? totalUSdInfo.toFixed(2) : PaymentInfo.toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, " Balance Due ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " $ "), remainingInvoice.toFixed(2))), excessAction === 'Return' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, " Cash Return USD ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " $ "), parseFloat(returnUSD || 0).toFixed(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, " Cash Return FC ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " FC "), parseFloat(returnFC || 0).toLocaleString())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, " Credit Added ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " $ "), "0.00"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, " Credit ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, " $ "), remaining))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12
  }, saving !== 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "btnCustomer6",
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, "Saving...")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    open: openBack,
    onClose: handleCloseBack,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlackTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
    onClick: handleCloseBack,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_50__/* ["default"] */ .A, {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null, "Do you want to stop making payment ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "txt2"
  }, " If you stop making payment without saving, all your changes will be lost"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    onClick: () => navigate('/PaymentView'),
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Ay, {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    onClick: handleCloseBack,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_44__/* ["default"] */ .A, {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: () => handleDecision('stay'),
    className: "btnCustomer"
  }, "Add New"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: () => handleDecision('previous'),
    className: "btnCustomer"
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A,
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_46__/* ["default"] */ .A, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_45__/* ["default"] */ .A, {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentInformationUpdate);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 49377
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _css_SidebarNew_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15419);
/* harmony import */ var _mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15985);
/* harmony import */ var _mui_icons_material_PermIdentity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63941);
/* harmony import */ var _mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60450);
/* harmony import */ var _mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58071);
/* harmony import */ var _mui_icons_material_Receipt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5609);
/* harmony import */ var _mui_icons_material_RequestQuote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82574);
/* harmony import */ var _mui_icons_material_MonetizationOn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56841);
/* harmony import */ var _mui_icons_material_Engineering__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72350);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24457);
/* harmony import */ var _mui_icons_material_RoomPreferences__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75430);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37211);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57873);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82241);
/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1795);




















function SidebarDash1() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Dashboard__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    primary: "Dashboard"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_PermIdentity__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    primary: "Customer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_ListAlt__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    primary: "Store"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_RequestQuote__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    primary: "Quotation"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    primary: "Invoice"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_MonetizationOn__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    primary: "Payment"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    primary: "Daily Expenses"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_RoomPreferences__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    primary: "Project"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Receipt__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    primary: "Purchases Request"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Engineering__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    primary: "Maintenance"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    sx: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    primary: "More"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarDash1);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);