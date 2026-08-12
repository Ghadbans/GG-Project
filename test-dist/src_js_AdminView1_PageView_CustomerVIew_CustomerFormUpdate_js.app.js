"use strict";
exports.id = "src_js_AdminView1_PageView_CustomerVIew_CustomerFormUpdate_js";
exports.ids = ["src_js_AdminView1_PageView_CustomerVIew_CustomerFormUpdate_js"];
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

/***/ "./src/js/AdminView1/PageView/CustomerVIew/CustomerFormUpdate.js"
/*!***********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/CustomerVIew/CustomerFormUpdate.js ***!
  \***********************************************************************/
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormLabel/FormLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/RadioGroup/RadioGroup.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Radio/Radio.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref3 => {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
function CustomerFormUpdate() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_34__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_34__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_36__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_36__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_37__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_37__.setUser)({
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    customerType = _useState2[0],
    setCustomerType = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    designation = _useState4[0],
    setDesignation = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    customerFirstName = _useState6[0],
    setCustomerFirstName = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    customerLastName = _useState8[0],
    setCustomerLastName = _useState8[1];
  var customerFullName = customerFirstName !== '' ? designation + '. ' + customerFirstName + " " + customerLastName : '';
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState0 = _slicedToArray(_useState9, 2),
    companyName = _useState0[0],
    setCompanyName = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    customerEmail = _useState10[0],
    setCustomerEmail = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    customerCompanyPhone = _useState12[0],
    setCustomerCompanyPhone = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    customerPhone = _useState14[0],
    setCustomerPhone = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    currency = _useState16[0],
    setCurrency = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    paymentTerms = _useState18[0],
    setPaymentTerms = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    billingAddress = _useState20[0],
    setBillingAddress = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    billingCity = _useState22[0],
    setBillingCity = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    indexId = _useState24[0],
    setIndexID = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState26 = _slicedToArray(_useState25, 2),
    Customer = _useState26[0],
    setCustomer = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState28 = _slicedToArray(_useState27, 2),
    shippingAddress = _useState28[0],
    setShippingAddress = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState30 = _slicedToArray(_useState29, 2),
    shippingCity = _useState30[0],
    setShippingCity = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState32 = _slicedToArray(_useState31, 2),
    credit = _useState32[0],
    setCredit = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState34 = _slicedToArray(_useState33, 2),
    customerDescription = _useState34[0],
    setCustomerDescription = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState36 = _slicedToArray(_useState35, 2),
    reason = _useState36[0],
    setReason = _useState36[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-customer/").concat(id));
          setCustomerType(res.data.data.customerType);
          setDesignation(res.data.data.designation);
          setDesignation(res.data.data.designation);
          setCustomerFirstName(res.data.data.customerFirstName);
          setCustomerLastName(res.data.data.customerLastName);
          setCompanyName(res.data.data.companyName);
          setCustomer(res.data.data.Customer);
          setCustomerEmail(res.data.data.customerEmail);
          setCustomerCompanyPhone(res.data.data.customerCompanyPhone);
          setCurrency(res.data.data.currency);
          setCredit(res.data.data.credit);
          setPaymentTerms(res.data.data.paymentTerms);
          setBillingAddress(res.data.data.billingAddress);
          setBillingCity(res.data.data.billingCity);
          setShippingAddress(res.data.data.shippingAddress);
          setShippingCity(res.data.data.shippingCity);
          setCustomerDescription(res.data.data.customerDescription);
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
  var dateComment = new Date();
  var handleRadioChange = e => {
    setCustomerType(e.target.value);
    setDesignation('');
    setCustomerFirstName('');
    setCustomerLastName('');
    setCompanyName('');
    setCustomerCompanyPhone('');
    setCustomerPhone('');
  };
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    open1 = _useState38[0],
    setOpen1 = _useState38[1];
  var handleOpenUpdate = e => {
    e.preventDefault();
    setOpen1(true);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
  };
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    openBack = _useState40[0],
    setOpenBack = _useState40[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpenBack(true);
  };
  var handleCloseBack = () => {
    setOpenBack(false);
  };
  {/** Loading Start */}
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    loading = _useState42[0],
    setLoading = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    loadingOpenModal = _useState44[0],
    setLoadingOpenModal = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    ErrorOpenModal = _useState46[0],
    setErrorOpenModal = _useState46[1];
  var handleOpen = () => {
    setOpen1(false);
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleError = () => {
    setOpen1(false);
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
  {/** Loading End */}
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState48 = _slicedToArray(_useState47, 2),
    hideBack = _useState48[0],
    setHideBack = _useState48[1];
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(function* () {
      var data = {
        idInfo: id,
        person: user.data.userName + ' Modify CUSTOMER ' + Customer,
        reason,
        dateNotification: dateComment
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/create-notification/"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateComment() {
      return _ref9.apply(this, arguments);
    };
  }();
  var handleSubmitEdit = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        _id: id,
        customerType,
        designation,
        customerFirstName,
        customerLastName,
        customerFullName,
        companyName,
        customerEmail,
        customerCompanyPhone,
        customerPhone,
        currency,
        paymentTerms,
        billingAddress,
        billingCity,
        shippingAddress,
        shippingCity,
        Customer,
        customerDescription,
        updateS: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/update-customer/").concat(id), data);
        if (res) {
          handleCreateComment();
          handleOpen();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmitEdit(_x) {
      return _ref0.apply(this, arguments);
    };
  }();
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_37__.logOut)());
    navigate('/');
  };
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
  }, "update customer"), hideBack === 'true' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: 'white'
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_45__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_44__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_41__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar
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
    onSubmit: handleOpenUpdate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '20px'
    },
    spacing: 2,
    component: _mui_material__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, "Type"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    row: true,
    required: true,
    name: "customerType",
    value: customerType,
    onChange: handleRadioChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: "Individual",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null),
    label: "Individual"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: "Business",
    control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], null),
    label: "Business"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " ", customerType, " "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "designation"
  }, "Designation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    required: customerType === 'Individual',
    id: "designation",
    value: designation,
    onChange: e => setDesignation(e.target.value),
    name: "designation",
    label: "Designation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: "Mr"
  }, "Mr"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: "Ms"
  }, "Ms")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    required: customerType === 'Individual',
    id: "customerFirstName",
    name: "customerFirstName",
    value: customerFirstName,
    label: "First Name",
    onChange: e => setCustomerFirstName(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    required: customerType === 'Individual',
    id: "customerLastName",
    name: "customerLastName",
    value: customerLastName,
    label: "Last Name",
    onChange: e => setCustomerLastName(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    required: customerType === 'Individual',
    id: "customerFullName",
    name: "customerFullName",
    value: customerFullName,
    label: "Full Name",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    required: customerType === 'Business',
    id: "companyName",
    name: "companyName",
    value: companyName,
    label: "Company Name",
    onChange: e => setCompanyName(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      minWidth: "97%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "Customer"
  }, "Select Name for Billing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    required: true,
    id: "Customer",
    value: Customer,
    onChange: e => setCustomer(e.target.value),
    name: "Customer",
    label: "Select Name for Billing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: companyName
  }, companyName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: designation + '. ' + customerFirstName + ' ' + customerLastName
  }, designation + '. ' + customerFirstName + ' ' + customerLastName)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    required: true,
    id: "customerEmail",
    name: "customerEmail",
    value: customerEmail,
    placeholder: "Example: example@gmail.com",
    label: "Email",
    onChange: e => setCustomerEmail(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "customerCompanyPhone",
    name: "customerCompanyPhone",
    label: "Phone Number 1",
    type: "number",
    value: customerCompanyPhone,
    onChange: e => setCustomerCompanyPhone(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "customerPhone",
    name: "customerPhone",
    label: "Phone Number 2",
    value: customerPhone,
    type: "number",
    onChange: e => setCustomerPhone(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      minWidth: "97%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "currency"
  }, "Currency"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    required: true,
    id: "currency",
    value: currency,
    onChange: e => setCurrency(e.target.value),
    name: "currency",
    label: "currency"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: "USD Dollar"
  }, "USD Dollar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: "FC Congolais"
  }, "FC Congolais")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      minWidth: "97%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    id: "paymentTerms"
  }, "Payment Terms"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    required: true,
    id: "paymentTerms",
    value: paymentTerms,
    onChange: e => setPaymentTerms(e.target.value),
    name: "paymentTerms",
    label: "Payment Terms"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: "Net 3"
  }, "Net 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: "Net 10"
  }, "Net 10"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: "Net 15"
  }, "Net 15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: "Net 20"
  }, "Net 20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: "Net 25"
  }, "Net 25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: "Due end of the month"
  }, "Due end of the month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    value: "Due on Receipt"
  }, "Due on Receipt")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    required: true,
    id: "billingAddress",
    name: "billingAddress",
    value: billingAddress,
    label: "Billing Address",
    onChange: e => setBillingAddress(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    required: true,
    id: "billingCity",
    name: "billingCity",
    value: billingCity,
    label: "Billing City",
    onChange: e => setBillingCity(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    required: true,
    id: "shippingAddress",
    name: "shippingAddress",
    value: shippingAddress,
    label: "Shipping Address",
    onChange: e => setShippingAddress(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    required: true,
    id: "shippingCity",
    name: "shippingCity",
    value: shippingCity,
    label: "Shipping City",
    onChange: e => setShippingCity(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "customerDescription",
    name: "customerDescription",
    value: customerDescription,
    label: "Description",
    multiline: true,
    rows: 4,
    onChange: e => setCustomerDescription(e.target.value),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_42__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Do you want to stop updating customer ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
    onClick: () => navigate('/CustomerViewAdmin'),
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_38__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Saved successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClose,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_38__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: open1,
    onClose: handleCloseUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_42__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Reason Of Updating"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitEdit
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    required: true,
    id: "comments",
    name: "comments",
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
  }, "Save")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerFormUpdate);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfQ3VzdG9tZXJWSWV3X0N1c3RvbWVyRm9ybVVwZGF0ZV9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiOztBQUVBLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4QztBQUNuRiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUF1QjtBQUMzRSxrQkFBa0IsbUJBQU8sQ0FBQyw4REFBbUI7QUFDN0MsZUFBZSxrQkFBZTtBQUM5QjtBQUNBLENBQUMsZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQsQ0FBbUQ7QUFDUTtBQUNuQztBQUNFO0FBQzBCO0FBQ3NCO0FBQ3NJO0FBQ2hKO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNRO0FBQ0E7QUFDYztBQUNJO0FBQ3hDO0FBQ3dCO0FBQ1E7QUFDSjtBQUNDO0FBQytCO0FBQ3ZDO0FBQ2U7QUFDVjtBQUNKO0FBQ0o7QUFDbEI7QUFDNEI7QUFDUTtBQUc5RCxJQUFNc0QsWUFBWSxHQUFHdEMsMERBQU0sQ0FBQ3VDLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNoRDNELDBEQUFBLENBQUN3Qiw4REFBTyxFQUFBcUMsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxLQUFLLEdBQUFELEtBQUEsQ0FBTEMsS0FBSztFQUFBLE9BQVE7SUFDakIsT0FBQUMsTUFBQSxDQUFPekMsOERBQWMsQ0FBQzBD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QUU7SUFBTztFQUFFLGdCQUNsQ3JFLDBEQUFBLENBQUMwVixxRUFBWSxNQUFFLENBQ0gsQ0FBQyxlQUNmMVYsMERBQUEsQ0FBQ3VWLHNEQUFZO0lBQUNLLE9BQU8sRUFBQztFQUFNLENBQUUsQ0FDaEIsQ0FDaEIsQ0FBQztBQUVQO0FBRUEsaUVBQWV6VixZQUFZLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9QYWdlVmlldy9DdXN0b21lclZJZXcvQ3VzdG9tZXJGb3JtVXBkYXRlLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvY29tcG9uZW50L1NpZGViYXJEYXNoMS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNMjAgMTFINy44M2w1LjU5LTUuNTlMMTIgNGwtOCA4IDggOCAxLjQxLTEuNDFMNy44MyAxM0gyMHpcIlxufSksICdBcnJvd0JhY2snKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXJEYXNoMSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZWJhckRhc2gxJztcclxuaW1wb3J0ICcuLi8uLi92aWV3LmNzcyc7XHJcbmltcG9ydCAnLi4vQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IHsgTWVudUl0ZW0sIEdyaWQsIEljb25CdXR0b24sIFBhcGVyLCBCYWNrZHJvcCwgVGV4dEZpZWxkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBUeXBvZ3JhcGh5LCBzdHlsZWQsIEZvcm1MYWJlbCwgUmFkaW9Hcm91cCwgRm9ybUNvbnRyb2xMYWJlbCwgUmFkaW8sIE1vZGFsLCBCb3gsIERpdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlLCB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IEFycm93QmFjayBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IHsgQ2xvc2UgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi4vLi4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuLi8uLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5cclxuY29uc3QgQmxhY2tUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgVmlld1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIEN1c3RvbWVyRm9ybVVwZGF0ZSgpIHtcclxuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKTtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgY29uc3QgW2N1c3RvbWVyVHlwZSwgc2V0Q3VzdG9tZXJUeXBlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZXNpZ25hdGlvbiwgc2V0RGVzaWduYXRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2N1c3RvbWVyRmlyc3ROYW1lLCBzZXRDdXN0b21lckZpcnN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3VzdG9tZXJMYXN0TmFtZSwgc2V0Q3VzdG9tZXJMYXN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBjdXN0b21lckZ1bGxOYW1lID0gY3VzdG9tZXJGaXJzdE5hbWUgIT09ICcnID8gZGVzaWduYXRpb24gKyAnLiAnICsgY3VzdG9tZXJGaXJzdE5hbWUgKyAoXCIgXCIpICsgY3VzdG9tZXJMYXN0TmFtZSA6ICcnO1xyXG4gIGNvbnN0IFtjb21wYW55TmFtZSwgc2V0Q29tcGFueU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2N1c3RvbWVyRW1haWwsIHNldEN1c3RvbWVyRW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2N1c3RvbWVyQ29tcGFueVBob25lLCBzZXRDdXN0b21lckNvbXBhbnlQaG9uZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3VzdG9tZXJQaG9uZSwgc2V0Q3VzdG9tZXJQaG9uZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXltZW50VGVybXMsIHNldFBheW1lbnRUZXJtc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYmlsbGluZ0FkZHJlc3MsIHNldEJpbGxpbmdBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtiaWxsaW5nQ2l0eSwgc2V0QmlsbGluZ0NpdHldID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2luZGV4SWQsIHNldEluZGV4SURdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW0N1c3RvbWVyLCBzZXRDdXN0b21lcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2hpcHBpbmdBZGRyZXNzLCBzZXRTaGlwcGluZ0FkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3NoaXBwaW5nQ2l0eSwgc2V0U2hpcHBpbmdDaXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtjcmVkaXQsIHNldENyZWRpdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbY3VzdG9tZXJEZXNjcmlwdGlvbiwgc2V0Q3VzdG9tZXJEZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWN1c3RvbWVyLyR7aWR9YClcclxuICAgICAgICBzZXRDdXN0b21lclR5cGUocmVzLmRhdGEuZGF0YS5jdXN0b21lclR5cGUpO1xyXG4gICAgICAgIHNldERlc2lnbmF0aW9uKHJlcy5kYXRhLmRhdGEuZGVzaWduYXRpb24pO1xyXG4gICAgICAgIHNldERlc2lnbmF0aW9uKHJlcy5kYXRhLmRhdGEuZGVzaWduYXRpb24pO1xyXG4gICAgICAgIHNldEN1c3RvbWVyRmlyc3ROYW1lKHJlcy5kYXRhLmRhdGEuY3VzdG9tZXJGaXJzdE5hbWUpO1xyXG4gICAgICAgIHNldEN1c3RvbWVyTGFzdE5hbWUocmVzLmRhdGEuZGF0YS5jdXN0b21lckxhc3ROYW1lKTtcclxuICAgICAgICBzZXRDb21wYW55TmFtZShyZXMuZGF0YS5kYXRhLmNvbXBhbnlOYW1lKTtcclxuICAgICAgICBzZXRDdXN0b21lcihyZXMuZGF0YS5kYXRhLkN1c3RvbWVyKTtcclxuICAgICAgICBzZXRDdXN0b21lckVtYWlsKHJlcy5kYXRhLmRhdGEuY3VzdG9tZXJFbWFpbCk7XHJcbiAgICAgICAgc2V0Q3VzdG9tZXJDb21wYW55UGhvbmUocmVzLmRhdGEuZGF0YS5jdXN0b21lckNvbXBhbnlQaG9uZSk7XHJcbiAgICAgICAgc2V0Q3VycmVuY3kocmVzLmRhdGEuZGF0YS5jdXJyZW5jeSk7XHJcbiAgICAgICAgc2V0Q3JlZGl0KHJlcy5kYXRhLmRhdGEuY3JlZGl0KTtcclxuICAgICAgICBzZXRQYXltZW50VGVybXMocmVzLmRhdGEuZGF0YS5wYXltZW50VGVybXMpO1xyXG4gICAgICAgIHNldEJpbGxpbmdBZGRyZXNzKHJlcy5kYXRhLmRhdGEuYmlsbGluZ0FkZHJlc3MpO1xyXG4gICAgICAgIHNldEJpbGxpbmdDaXR5KHJlcy5kYXRhLmRhdGEuYmlsbGluZ0NpdHkpO1xyXG4gICAgICAgIHNldFNoaXBwaW5nQWRkcmVzcyhyZXMuZGF0YS5kYXRhLnNoaXBwaW5nQWRkcmVzcyk7XHJcbiAgICAgICAgc2V0U2hpcHBpbmdDaXR5KHJlcy5kYXRhLmRhdGEuc2hpcHBpbmdDaXR5KTtcclxuICAgICAgICBzZXRDdXN0b21lckRlc2NyaXB0aW9uKHJlcy5kYXRhLmRhdGEuY3VzdG9tZXJEZXNjcmlwdGlvbik7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW2lkXSlcclxuXHJcbiAgY29uc3QgZGF0ZUNvbW1lbnQgPSBuZXcgRGF0ZSgpXHJcbiAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0Q3VzdG9tZXJUeXBlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldERlc2lnbmF0aW9uKCcnKTtcclxuICAgIHNldEN1c3RvbWVyRmlyc3ROYW1lKCcnKTtcclxuICAgIHNldEN1c3RvbWVyTGFzdE5hbWUoJycpO1xyXG4gICAgc2V0Q29tcGFueU5hbWUoJycpO1xyXG4gICAgc2V0Q3VzdG9tZXJDb21wYW55UGhvbmUoJycpO1xyXG4gICAgc2V0Q3VzdG9tZXJQaG9uZSgnJyk7XHJcbiAgfVxyXG4gIGNvbnN0IFtvcGVuMSwgc2V0T3BlbjFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuVXBkYXRlID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbjEodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbb3BlbkJhY2ssIHNldE9wZW5CYWNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbkJhY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRPcGVuQmFjayh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQmFjayA9ICgpID0+IHtcclxuICAgIHNldE9wZW5CYWNrKGZhbHNlKTtcclxuICB9O1xyXG4gIHsvKiogTG9hZGluZyBTdGFydCAqLyB9XHJcblxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcblxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBuYXZpZ2F0ZSgtMSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIHsvKiogTG9hZGluZyBFbmQgKi8gfVxyXG5cclxuICBjb25zdCBbaGlkZUJhY2ssIHNldEhpZGVCYWNrXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBoYW5kbGVDcmVhdGVDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiBpZCxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIE1vZGlmeSBDVVNUT01FUiAnICsgQ3VzdG9tZXIsXHJcbiAgICAgIHJlYXNvbixcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogZGF0ZUNvbW1lbnRcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbi9gLCBkYXRhKVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTdWJtaXRFZGl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIF9pZDogaWQsXHJcbiAgICAgIGN1c3RvbWVyVHlwZSwgZGVzaWduYXRpb24sIGN1c3RvbWVyRmlyc3ROYW1lLFxyXG4gICAgICBjdXN0b21lckxhc3ROYW1lLCBjdXN0b21lckZ1bGxOYW1lLCBjb21wYW55TmFtZSxcclxuICAgICAgY3VzdG9tZXJFbWFpbCwgY3VzdG9tZXJDb21wYW55UGhvbmUsIGN1c3RvbWVyUGhvbmUsXHJcbiAgICAgIGN1cnJlbmN5LCBwYXltZW50VGVybXMsIGJpbGxpbmdBZGRyZXNzLFxyXG4gICAgICBiaWxsaW5nQ2l0eSwgc2hpcHBpbmdBZGRyZXNzLCBzaGlwcGluZ0NpdHksIEN1c3RvbWVyLCBjdXN0b21lckRlc2NyaXB0aW9uLCB1cGRhdGVTOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1jdXN0b21lci8ke2lkfWAsIGRhdGEpXHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBoYW5kbGVDcmVhdGVDb21tZW50KCk7XHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcicpO1xyXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpO1xyXG4gICAgbmF2aWdhdGUoJy8nKVxyXG4gIH1cclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB1cGRhdGUgY3VzdG9tZXJcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgaGlkZUJhY2sgPT09ICd0cnVlJyA/XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEFycm93QmFjayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlT3BlbkJhY2t9PlxyXG4gICAgICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlQWRtaW5WaWV3IG5hbWU9e3VzZXIuZGF0YS51c2VyTmFtZX0gcm9sZT17dXNlci5kYXRhLnJvbGV9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT57dXNlci5kYXRhLnVzZXJOYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZWJhckRhc2gxIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiA0IH19ID5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPcGVuVXBkYXRlfT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzIwcHgnIH19IHNwYWNpbmc9ezJ9IGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+VHlwZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFJhZGlvR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdXN0b21lclR5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXJUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUmFkaW9DaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT0nSW5kaXZpZHVhbCcgY29udHJvbD17PFJhZGlvIC8+fSBsYWJlbD1cIkluZGl2aWR1YWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT0nQnVzaW5lc3MnIGNvbnRyb2w9ezxSYWRpbyAvPn0gbGFiZWw9XCJCdXNpbmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1JhZGlvR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgyPiB7Y3VzdG9tZXJUeXBlfSA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZXNpZ25hdGlvblwiPkRlc2lnbmF0aW9uPC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17Y3VzdG9tZXJUeXBlID09PSAnSW5kaXZpZHVhbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzaWduYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzaWduYXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzaWduYXRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzaWduYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2lnbmF0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiTXJcIj5NcjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIk1zXCI+TXM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17Y3VzdG9tZXJUeXBlID09PSAnSW5kaXZpZHVhbCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nY3VzdG9tZXJGaXJzdE5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdjdXN0b21lckZpcnN0TmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21lckZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdGaXJzdCBOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXN0b21lckZpcnN0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtjdXN0b21lclR5cGUgPT09ICdJbmRpdmlkdWFsJ31cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdjdXN0b21lckxhc3ROYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tZXJMYXN0TmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21lckxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0xhc3QgTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VzdG9tZXJMYXN0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtjdXN0b21lclR5cGUgPT09ICdJbmRpdmlkdWFsJ31cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdjdXN0b21lckZ1bGxOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nY3VzdG9tZXJGdWxsTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21lckZ1bGxOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0Z1bGwgTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e2N1c3RvbWVyVHlwZSA9PT0gJ0J1c2luZXNzJ31cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdjb21wYW55TmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2NvbXBhbnlOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbXBhbnlOYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0NvbXBhbnkgTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tcGFueU5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgc3g9e3sgbWluV2lkdGg6IFwiOTclXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cIkN1c3RvbWVyXCI+U2VsZWN0IE5hbWUgZm9yIEJpbGxpbmc8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQ3VzdG9tZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Q3VzdG9tZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VzdG9tZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQ3VzdG9tZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNlbGVjdCBOYW1lIGZvciBCaWxsaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXtjb21wYW55TmFtZX0+e2NvbXBhbnlOYW1lfTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17ZGVzaWduYXRpb24gKyAnLiAnICsgY3VzdG9tZXJGaXJzdE5hbWUgKyAnICcgKyBjdXN0b21lckxhc3ROYW1lfT57ZGVzaWduYXRpb24gKyAnLiAnICsgY3VzdG9tZXJGaXJzdE5hbWUgKyAnICcgKyBjdXN0b21lckxhc3ROYW1lfTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2N1c3RvbWVyRW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdjdXN0b21lckVtYWlsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2N1c3RvbWVyRW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRXhhbXBsZTogZXhhbXBsZUBnbWFpbC5jb20nXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRW1haWwnXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEN1c3RvbWVyRW1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nY3VzdG9tZXJDb21wYW55UGhvbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdjdXN0b21lckNvbXBhbnlQaG9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdQaG9uZSBOdW1iZXIgMSdcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXN0b21lckNvbXBhbnlQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VzdG9tZXJDb21wYW55UGhvbmUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nY3VzdG9tZXJQaG9uZSdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2N1c3RvbWVyUGhvbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nUGhvbmUgTnVtYmVyIDInXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXJQaG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J251bWJlcidcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VzdG9tZXJQaG9uZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyBtaW5XaWR0aDogXCI5NyVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiY3VycmVuY3lcIj5DdXJyZW5jeTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjdXJyZW5jeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjdXJyZW5jeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDdXJyZW5jeShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdXJyZW5jeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiY3VycmVuY3lcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJVU0QgRG9sbGFyXCI+VVNEIERvbGxhcjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkZDIENvbmdvbGFpc1wiPkZDIENvbmdvbGFpczwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyBtaW5XaWR0aDogXCI5NyVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwicGF5bWVudFRlcm1zXCI+UGF5bWVudCBUZXJtczwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXltZW50VGVybXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGF5bWVudFRlcm1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFBheW1lbnRUZXJtcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXltZW50VGVybXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBheW1lbnQgVGVybXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJOZXQgM1wiPk5ldCAzPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiTmV0IDEwXCI+TmV0IDEwPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiTmV0IDE1XCI+TmV0IDE1PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiTmV0IDIwXCI+TmV0IDIwPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiTmV0IDI1XCI+TmV0IDI1PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRHVlIGVuZCBvZiB0aGUgbW9udGhcIj5EdWUgZW5kIG9mIHRoZSBtb250aDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkR1ZSBvbiBSZWNlaXB0XCI+RHVlIG9uIFJlY2VpcHQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9J2JpbGxpbmdBZGRyZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYmlsbGluZ0FkZHJlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17YmlsbGluZ0FkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nQmlsbGluZyBBZGRyZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCaWxsaW5nQWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nYmlsbGluZ0NpdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdiaWxsaW5nQ2l0eSdcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtiaWxsaW5nQ2l0eX1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdCaWxsaW5nIENpdHknXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJpbGxpbmdDaXR5KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdzaGlwcGluZ0FkZHJlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdzaGlwcGluZ0FkZHJlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2hpcHBpbmdBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1NoaXBwaW5nIEFkZHJlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNoaXBwaW5nQWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nc2hpcHBpbmdDaXR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc2hpcHBpbmdDaXR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NoaXBwaW5nQ2l0eX1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdTaGlwcGluZyBDaXR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTaGlwcGluZ0NpdHkoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICB7LyoqXHJcbiAgICAgKiA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgIDxUZXh0RmllbGQgXHJcbiAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgaWQ9J2NyZWRpdCdcclxuICAgICAgICAgICAgICAgICAgbmFtZT0nY3JlZGl0JyBcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NyZWRpdH1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J0NyZWRpdCdcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKT0+c2V0Q3JlZGl0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOid3aGl0ZScgfX0gICAgICAgXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgIDwvR3JpZD5cclxuICAgICAqL31cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nY3VzdG9tZXJEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2N1c3RvbWVyRGVzY3JpcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3VzdG9tZXJEZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEZXNjcmlwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q3VzdG9tZXJEZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkJhY2t9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VCYWNrfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkRvIHlvdSB3YW50IHRvIHN0b3AgdXBkYXRpbmcgY3VzdG9tZXIgPyA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlIDo8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj4gSWYgeW91IHN0b3AgdXBkYXRpbmcgd2l0aG91dCBzYXZpbmcsIGFsbCB5b3VyIGNoYW5nZXMgd2lsbCBiZSBsb3N0PC9zcGFuPjwvcD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvQ3VzdG9tZXJWaWV3QWRtaW4nKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ZZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19Pk5vPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e0Vycm9yT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlRXJyb3J9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENhbmNlbEljb24gc3R5bGU9e3sgY29sb3I6ICdyZWQnLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgRmFpbGVkIHRvIFNhdmVkPC9oMj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlRXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgVHJ5IEFnYWluXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbjF9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VVcGRhdGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVVwZGF0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgUmVhc29uIE9mIFVwZGF0aW5nXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0RWRpdH0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgaWQ9J2NvbW1lbnRzJ1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdjb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWFzb259XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVhc29uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J0NvbW1lbnRzJ1xyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyRm9ybVVwZGF0ZVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi4vY3NzL1NpZGViYXJOZXcuc2NzcydcclxuaW1wb3J0IHsgT3V0bGV0LCBOYXZMaW5rLCBMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCBEYXNoYm9hcmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGFzaGJvYXJkJztcclxuaW1wb3J0IFBlcm1JZGVudGl0eUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QZXJtSWRlbnRpdHknO1xyXG5pbXBvcnQgTGlzdEFsdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9MaXN0QWx0JztcclxuaW1wb3J0IERlc2NyaXB0aW9uSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Rlc2NyaXB0aW9uJztcclxuaW1wb3J0IFJlY2VpcHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUmVjZWlwdCc7XHJcbmltcG9ydCBNb3ZpbmdJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW92aW5nJztcclxuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NldHRpbmdzJztcclxuaW1wb3J0IEluc2VydERyaXZlRmlsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9JbnNlcnREcml2ZUZpbGUnO1xyXG5pbXBvcnQgUmVzdG9yZVBhZ2VJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUmVzdG9yZVBhZ2UnO1xyXG5pbXBvcnQgUmVxdWVzdFF1b3RlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1JlcXVlc3RRdW90ZSc7XHJcbmltcG9ydCBNb25ldGl6YXRpb25Pbkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb25ldGl6YXRpb25Pbic7XHJcbmltcG9ydCBFbmdpbmVlcmluZ0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FbmdpbmVlcmluZyc7XHJcbmltcG9ydCB7IEV4cGxpY2l0LCBTaG9wcGluZ0JhZ091dGxpbmVkIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBSb29tUHJlZmVyZW5jZXNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUm9vbVByZWZlcmVuY2VzJztcclxuaW1wb3J0IHsgTGlzdEl0ZW1CdXR0b24sIExpc3RJdGVtSWNvbiwgTGlzdEl0ZW1UZXh0LCBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBQYXltZW50SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1BheW1lbnQnO1xyXG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9yZVZlcnQnO1xyXG5mdW5jdGlvbiBTaWRlYmFyRGFzaDEoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPERhc2hib2FyZEljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEYXNoYm9hcmRcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFBlcm1JZGVudGl0eUljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDdXN0b21lclwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ICA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxMaXN0QWx0SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlN0b3JlXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxSZXF1ZXN0UXVvdGVJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUXVvdGF0aW9uXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8RGVzY3JpcHRpb25JY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSW52b2ljZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPE1vbmV0aXphdGlvbk9uSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlBheW1lbnRcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxTaG9wcGluZ0JhZ091dGxpbmVkIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGFpbHkgRXhwZW5zZXNcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSAgPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8Um9vbVByZWZlcmVuY2VzSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlByb2plY3RcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxSZWNlaXB0SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlB1cmNoYXNlcyBSZXF1ZXN0XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgIDxFbmdpbmVlcmluZ0ljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJNYWludGVuYW5jZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPE1vcmVWZXJ0SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk1vcmVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyRGFzaDEiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXJEYXNoMSIsIlNlYXJjaEljb24iLCJOb3RpZmljYXRpb25zTm9uZUljb24iLCJNZW51SXRlbSIsIkdyaWQiLCJJY29uQnV0dG9uIiwiUGFwZXIiLCJCYWNrZHJvcCIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIlR5cG9ncmFwaHkiLCJzdHlsZWQiLCJGb3JtTGFiZWwiLCJSYWRpb0dyb3VwIiwiRm9ybUNvbnRyb2xMYWJlbCIsIlJhZGlvIiwiTW9kYWwiLCJCb3giLCJEaXZpZGVyIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwidXNlTmF2aWdhdGUiLCJ1c2VQYXJhbXMiLCJBcnJvd0JhY2siLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9hZGVyIiwiQ2hlY2tDaXJjbGVJY29uIiwiQ2FuY2VsSWNvbiIsIkxvZ291dCIsIkNsb3NlIiwiZGF5anMiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJCbGFja1Rvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIlZpZXdUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjUiLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjYiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJDdXN0b21lckZvcm1VcGRhdGUiLCJfdXNlUGFyYW1zIiwiaWQiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmNyIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJjdXN0b21lclR5cGUiLCJzZXRDdXN0b21lclR5cGUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImRlc2lnbmF0aW9uIiwic2V0RGVzaWduYXRpb24iLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImN1c3RvbWVyRmlyc3ROYW1lIiwic2V0Q3VzdG9tZXJGaXJzdE5hbWUiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsImN1c3RvbWVyTGFzdE5hbWUiLCJzZXRDdXN0b21lckxhc3ROYW1lIiwiY3VzdG9tZXJGdWxsTmFtZSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwiY29tcGFueU5hbWUiLCJzZXRDb21wYW55TmFtZSIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImN1c3RvbWVyRW1haWwiLCJzZXRDdXN0b21lckVtYWlsIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImN1c3RvbWVyQ29tcGFueVBob25lIiwic2V0Q3VzdG9tZXJDb21wYW55UGhvbmUiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwiY3VzdG9tZXJQaG9uZSIsInNldEN1c3RvbWVyUGhvbmUiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiY3VycmVuY3kiLCJzZXRDdXJyZW5jeSIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJwYXltZW50VGVybXMiLCJzZXRQYXltZW50VGVybXMiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiYmlsbGluZ0FkZHJlc3MiLCJzZXRCaWxsaW5nQWRkcmVzcyIsIl91c2VTdGF0ZTIxIiwiX3VzZVN0YXRlMjIiLCJiaWxsaW5nQ2l0eSIsInNldEJpbGxpbmdDaXR5IiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsImluZGV4SWQiLCJzZXRJbmRleElEIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsIkN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4Iiwic2hpcHBpbmdBZGRyZXNzIiwic2V0U2hpcHBpbmdBZGRyZXNzIiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsInNoaXBwaW5nQ2l0eSIsInNldFNoaXBwaW5nQ2l0eSIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJjcmVkaXQiLCJzZXRDcmVkaXQiLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwiY3VzdG9tZXJEZXNjcmlwdGlvbiIsInNldEN1c3RvbWVyRGVzY3JpcHRpb24iLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2IiwicmVhc29uIiwic2V0UmVhc29uIiwiZmV0Y2hEYXRhIiwiX3JlZjgiLCJkYXRlQ29tbWVudCIsIkRhdGUiLCJoYW5kbGVSYWRpb0NoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJvcGVuMSIsInNldE9wZW4xIiwiaGFuZGxlT3BlblVwZGF0ZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VVcGRhdGUiLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwib3BlbkJhY2siLCJzZXRPcGVuQmFjayIsImhhbmRsZU9wZW5CYWNrIiwiaGFuZGxlQ2xvc2VCYWNrIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlNDUiLCJfdXNlU3RhdGU0NiIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZUVycm9yIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbG9zZUVycm9yIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsImhpZGVCYWNrIiwic2V0SGlkZUJhY2siLCJoYW5kbGVDcmVhdGVDb21tZW50IiwiX3JlZjkiLCJpZEluZm8iLCJwZXJzb24iLCJkYXRlTm90aWZpY2F0aW9uIiwicG9zdCIsImxvZyIsImhhbmRsZVN1Ym1pdEVkaXQiLCJfcmVmMCIsIl9pZCIsInVwZGF0ZVMiLCJwdXQiLCJfeCIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJuYW1lIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10Iiwib25TdWJtaXQiLCJjb250YWluZXIiLCJwYWRkaW5nIiwiaXRlbSIsInhzIiwicm93IiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsImNvbnRyb2wiLCJsYWJlbCIsIm1pbldpZHRoIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwibXVsdGlsaW5lIiwicm93cyIsIm9uQ2xvc2UiLCJ0aXRsZSIsInBsYWNlbWVudCIsImZsb2F0IiwidGV4dEFsaWduIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0IiwiZ2FwIiwiT3V0bGV0IiwiTmF2TGluayIsIkxpbmsiLCJ1c2VMb2NhdGlvbiIsIkRhc2hib2FyZEljb24iLCJQZXJtSWRlbnRpdHlJY29uIiwiTGlzdEFsdEljb24iLCJEZXNjcmlwdGlvbkljb24iLCJSZWNlaXB0SWNvbiIsIk1vdmluZ0ljb24iLCJTZXR0aW5nc0ljb24iLCJJbnNlcnREcml2ZUZpbGVJY29uIiwiUmVzdG9yZVBhZ2VJY29uIiwiUmVxdWVzdFF1b3RlSWNvbiIsIk1vbmV0aXphdGlvbk9uSWNvbiIsIkVuZ2luZWVyaW5nSWNvbiIsIkV4cGxpY2l0IiwiU2hvcHBpbmdCYWdPdXRsaW5lZCIsIlJvb21QcmVmZXJlbmNlc0ljb24iLCJMaXN0SXRlbUJ1dHRvbiIsIkxpc3RJdGVtSWNvbiIsIkxpc3RJdGVtVGV4dCIsIm1ha2VTdHlsZXMiLCJQYXltZW50SWNvbiIsIk1vcmVWZXJ0SWNvbiIsIkZyYWdtZW50IiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=