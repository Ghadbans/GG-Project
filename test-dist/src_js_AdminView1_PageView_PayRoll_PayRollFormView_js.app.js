"use strict";
exports.id = "src_js_AdminView1_PageView_PayRoll_PayRollFormView_js";
exports.ids = ["src_js_AdminView1_PageView_PayRoll_PayRollFormView_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/PayRoll/PayRollFormView.js"
/*!***************************************************************!*\
  !*** ./src/js/AdminView1/PageView/PayRoll/PayRollFormView.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! dayjs/plugin/isBetween */ "./node_modules/dayjs/plugin/isBetween.js");
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! dayjs/plugin/customParseFormat */ "./node_modules/dayjs/plugin/customParseFormat.js");
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../CustomerVIew/CustomerFormView2 */ "./src/js/AdminView1/PageView/CustomerVIew/CustomerFormView2.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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


































dayjs__WEBPACK_IMPORTED_MODULE_35___default().extend((dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_36___default()));
dayjs__WEBPACK_IMPORTED_MODULE_35___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_37___default()));

// Global helper to parse dates robustly across formats
var parseDate = d => {
  if (!d) return dayjs__WEBPACK_IMPORTED_MODULE_35___default()(null);
  if (typeof d === 'string') {
    var formats = ['YYYY-MM-DD', 'DD/MM/YYYY', 'D/M/YYYY', 'DD-MM-YYYY', 'DD/MM/YY', 'D/M/YY', 'YYYY-MM-DDTHH:mm:ss.SSSZ'];
    var parsed = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(d, formats, true);
    if (!parsed.isValid()) parsed = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(d); // Fallback to native
    return parsed;
  }
  return dayjs__WEBPACK_IMPORTED_MODULE_35___default()(d);
};
var uniqueById = arr => {
  var seen = new Set();
  return arr.filter(it => {
    if (!it) return false;
    var id = it._id || it.id || (it.payNumber ? "PAY_".concat(it.payNumber) : null) || (it.expenseNumber ? "EXP_".concat(it.expenseNumber) : null) || (it.idInfo ? "INF_".concat(it.idInfo) : null) || (it.projectNumber ? "PRJ_".concat(it.projectNumber) : null) || (it.invoiceNumber ? "INV_".concat(it.invoiceNumber) : null) || (it.factureNumber ? "FAC_".concat(it.factureNumber) : null) || (it.paymentNumber ? "PMT_".concat(it.paymentNumber) : null) || (it.employeeId ? "EMP_".concat(it.employeeId) : null) || "".concat(it.date, "_").concat(it.machineNo, "_").concat(it.blockType, "_").concat(it.workerName || it.operatorName || '');
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
};














var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_16__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var BlackTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_15__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_16__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
function PayRollFormView() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_42__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_42__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
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
    open1 = _useState2[0],
    setOpen1 = _useState2[1];
  var handleOpenBack = e => {
    e.preventDefault();
    setOpen1(true);
  };
  var handleCloseBack = () => {
    setOpen1(false);
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    payNumber = _useState4[0],
    setPayNumber = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    payDate = _useState6[0],
    setPayDate = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    month = _useState8[0],
    setMonth = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState0 = _slicedToArray(_useState9, 2),
    employeeId = _useState0[0],
    setEmployeeId = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState1, 2),
    daysW = _useState10[0],
    setDaysW = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    daysOpen = _useState12[0],
    setDaysOpen = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState14 = _slicedToArray(_useState13, 2),
    Lops = _useState14[0],
    setLops = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    employee = _useState16[0],
    setEmployee = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    employeeName = _useState18[0],
    setEmployeeName = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    employeeRole = _useState20[0],
    setEmployeeRole = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    bankName = _useState22[0],
    setBankName = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    bankNo = _useState24[0],
    setBankNo = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    basicSalary = _useState26[0],
    setBasicSalary = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState28 = _slicedToArray(_useState27, 2),
    earningSalary = _useState28[0],
    setEarningSalary = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState30 = _slicedToArray(_useState29, 2),
    advancedSalary = _useState30[0],
    setAdvancedSalary = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState32 = _slicedToArray(_useState31, 2),
    basicTransport = _useState32[0],
    setBasicTransport = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState34 = _slicedToArray(_useState33, 2),
    transportEarning = _useState34[0],
    setTransportEarning = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState36 = _slicedToArray(_useState35, 2),
    transportDeduction = _useState36[0],
    setTransportDeduction = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState38 = _slicedToArray(_useState37, 2),
    foodBasic = _useState38[0],
    setFoodBasic = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState40 = _slicedToArray(_useState39, 2),
    foodEarning = _useState40[0],
    setFoodEarning = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState42 = _slicedToArray(_useState41, 2),
    itemLost = _useState42[0],
    setItemLost = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState44 = _slicedToArray(_useState43, 2),
    foodDeduction = _useState44[0],
    setFoodDeduction = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState46 = _slicedToArray(_useState45, 2),
    bounceAllowances = _useState46[0],
    setBounceAllowances = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState48 = _slicedToArray(_useState47, 2),
    bounceAllowancesEarning = _useState48[0],
    setBounceAllowancesEarning = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState50 = _slicedToArray(_useState49, 2),
    other = _useState50[0],
    setOther = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState52 = _slicedToArray(_useState51, 2),
    otherEarning = _useState52[0],
    setOtherEarning = _useState52[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState54 = _slicedToArray(_useState53, 2),
    loan = _useState54[0],
    setLoan = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState56 = _slicedToArray(_useState55, 2),
    bonus = _useState56[0],
    setBonus = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState58 = _slicedToArray(_useState57, 2),
    rate = _useState58[0],
    setRate = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState60 = _slicedToArray(_useState59, 2),
    amountPayUSD = _useState60[0],
    setAmountPayUSD = _useState60[1];
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState62 = _slicedToArray(_useState61, 2),
    amountPayFC = _useState62[0],
    setAmountPayFC = _useState62[1];
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState64 = _slicedToArray(_useState63, 2),
    employeeDepartment = _useState64[0],
    setEmployeeDepartment = _useState64[1];
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState66 = _slicedToArray(_useState65, 2),
    employeePhone = _useState66[0],
    setEmployeePhone = _useState66[1];
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState68 = _slicedToArray(_useState67, 2),
    words = _useState68[0],
    setTotalW = _useState68[1];
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState70 = _slicedToArray(_useState69, 2),
    factoryEarned = _useState70[0],
    setFactoryEarned = _useState70[1];
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState72 = _slicedToArray(_useState71, 2),
    factoryDamage = _useState72[0],
    setFactoryDamage = _useState72[1];
  var _useState73 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState74 = _slicedToArray(_useState73, 2),
    weekFrom = _useState74[0],
    setWeekFrom = _useState74[1];
  var _useState75 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState76 = _slicedToArray(_useState75, 2),
    weekTo = _useState76[0],
    setWeekTo = _useState76[1];
  var _useState77 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState78 = _slicedToArray(_useState77, 2),
    serverErrorMsg = _useState78[0],
    setServerErrorMsg = _useState78[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchlastNumber = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/get-last-saved-payRoll"));
          var num = res.data && res.data.payNumber ? parseInt(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.payNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.payNumber) || 0) : 0;
          setPayNumber(num + 1);
          setPayDate(res.data.payDate);
          setMonth(res.data.month);
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
  // Add Other And Bonus.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetch = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        try {
          var _resEmployee$data, _resPRate$data;
          var resEmployee = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/employee"));
          setEmployee((_resEmployee$data = resEmployee.data) === null || _resEmployee$data === void 0 || (_resEmployee$data = _resEmployee$data.data) === null || _resEmployee$data === void 0 ? void 0 : _resEmployee$data.filter(row => row.status === 'Employed' || row.status === 'Resign'));
          var resPRate = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/paymentRate"));
          (((_resPRate$data = resPRate.data) === null || _resPRate$data === void 0 ? void 0 : _resPRate$data.data) || []).map(row => setRate(row.paymentRate));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function handleFetch() {
        return _ref9.apply(this, arguments);
      };
    }();
    handleFetch();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchExpense = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        if (!employeeName.id) return;
        try {
          var _resExpense$data, _resAttendance$data;
          setLoading(true);
          // Step 1: Fetch Shared Data (Expenses and Attendance) once per change
          var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/expense?summary=true")), axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/employeeattendance"))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2),
            resExpense = _yield$Promise$all2[0],
            resAttendance = _yield$Promise$all2[1];
          var allExpenses = ((_resExpense$data = resExpense.data) === null || _resExpense$data === void 0 ? void 0 : _resExpense$data.data) || [];
          var allAttendance = ((_resAttendance$data = resAttendance.data) === null || _resAttendance$data === void 0 ? void 0 : _resAttendance$data.data) || [];
          var isFactory = employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY');
          var fromD = weekFrom ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).startOf('day') : null;
          var toD = weekTo ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo).endOf('day') : null;
          var inRange = dateStr => {
            var d = parseDate(dateStr);
            if (!d.isValid()) return false;

            // Prioritize range if both dates are selected
            if (fromD && toD) {
              return (d.isSame(fromD, 'day') || d.isAfter(fromD)) && (d.isSame(toD, 'day') || d.isBefore(toD));
            }

            // Fallback to monthly filter
            return d.format('MM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_35___default()(month).format('MM/YYYY');
          };

          // Standard Filter Helper - Robust Matching for Deductions
          var getSum = categories => {
            var searchTerms = Array.isArray(categories) ? categories.map(c => c.toUpperCase()) : [categories.toUpperCase()];
            return allExpenses.filter(row => {
              var _row$expenseCategory;
              var cat = ((_row$expenseCategory = row.expenseCategory) === null || _row$expenseCategory === void 0 || (_row$expenseCategory = _row$expenseCategory.expensesCategory) === null || _row$expenseCategory === void 0 ? void 0 : _row$expenseCategory.toUpperCase()) || "";
              var matchCat = searchTerms.some(term => cat.includes(term));
              return row.accountName === 'Employee' && matchCat && inRange(row.expenseDate);
            }).map(row => ({
              emp: row.employeeName.filter(item => item.idRow === employeeName.id)
            })).filter(item => item.emp.length > 0).reduce((acc, row) => acc + row.emp.reduce((s, it) => s + parseFloat(it.amount || 0), 0), 0);
          };

          // Apply Deductions (Respects Range & Variations)
          setTransportDeduction(getSum(['TRANSPORT']));
          setFoodDeduction(getSum(['FOOD']));
          setAdvancedSalary(getSum(['ADVANCED', 'ACCOMPTE', 'AVANCE']));
          setLoan(getSum(['LOAN', 'PRET']));
          setItemLost(getSum(['ITEM LOST', 'PERDU', 'DEDUCTION']));
          setBonus(getSum(['BONUS']));

          // Attendance Filtering
          var attArray = allAttendance.filter(row => row.id === employeeName.id && inRange(row.timeIn));
          var nbreOfDay = attArray.filter(item => item.observation === 'P' || item.observation === 'H').reduce((sum, item) => sum + (item.daysWN || 0), 0);
          setDaysW(nbreOfDay);

          // Determine calculation mode: Prioritize range if both dates are chosen
          var isRangeMode = fromD && toD && fromD.isBefore(toD.add(1, 'day'));

          // FACTORY/RANGE SPECIFIC COMPUTATIONS (Earnings & Damages)
          if (isRangeMode) {
            var _resRuns$data, _resDamages$data, _resConfig$data, _resMixer$data;
            var _yield$Promise$all3 = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/block-production")), axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/block-damage")), axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/block-config"))]),
              _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 3),
              resRuns = _yield$Promise$all4[0],
              resDamages = _yield$Promise$all4[1],
              resConfig = _yield$Promise$all4[2];
            var allRuns = ((_resRuns$data = resRuns.data) === null || _resRuns$data === void 0 ? void 0 : _resRuns$data.data) || [];
            var allDamages = ((_resDamages$data = resDamages.data) === null || _resDamages$data === void 0 ? void 0 : _resDamages$data.data) || [];
            var config = (_resConfig$data = resConfig.data) === null || _resConfig$data === void 0 || (_resConfig$data = _resConfig$data.data) === null || _resConfig$data === void 0 ? void 0 : _resConfig$data[0];
            var rates = (config === null || config === void 0 ? void 0 : config.laborRates) || {
              rate50_33: {
                perSack: 10000
              },
              rate20: {
                t1_sacks: 6,
                t1_rate: 9000,
                t2_sacks: 7,
                t2_rate: 16500,
                t3_sacks: 8,
                t3_rate: 19000,
                t4_sacks: 12,
                t4_rate: 21500,
                t5_rate: 24500
              },
              rate15: {
                t1_sacks: 5,
                t1_rate: 9000,
                t2_sacks: 6,
                t2_rate: 16500,
                t3_sacks: 7,
                t3_rate: 19000,
                t4_sacks: 10,
                t4_rate: 21500,
                t5_rate: 24500
              },
              rate10_14_12: {
                t1_sacks: 6,
                t1_rate: 9000,
                t2_sacks: 7,
                t2_rate: 17000,
                t3_sacks: 8,
                t3_rate: 19500,
                t4_sacks: 9,
                t4_rate: 22000,
                t5_rate: 24500
              }
            };
            var runs = uniqueById(allRuns).filter(r => inRange(r.date));
            var damages = uniqueById(allDamages).filter(d => inRange(d.productionDate || d.date));
            var normalize = n => {
              if (!n) return "";
              var s = n.toString().trim().toUpperCase();
              if (s.endsWith(" FC")) s = s.substring(0, s.length - 3).trim();
              return s.replace(/\s+/g, " ");
            };
            var targetName = normalize(employeeName.name);
            var calculateWorkerShare = (typeStr, s, e, half) => {
              if (typeStr.includes("50") || typeStr.includes("33")) {
                var r50 = rates.rate50_33 || {
                  perSack: 10000
                };
                return half ? s * r50.perSack / 2 : s * r50.perSack / e;
              }
              var r = null;
              if (typeStr.includes("20")) r = rates.rate20;else if (typeStr.includes("15")) r = rates.rate15;else r = rates.rate10_14_12 || rates.rate14 || rates.rate12 || rates.rate10;
              if (!r) return 0;
              var sacks = parseInt(s) || 0;
              var rate = 0;
              if (half) {
                var effectiveSacks = Math.min(sacks, r.t2_sacks || 0);
                if (effectiveSacks <= (r.t1_sacks || 0)) rate = (r.t1_rate || 0) * sacks / 2;else rate = (r.t2_rate || 0) / 2;
              } else {
                if (sacks <= (r.t1_sacks || 0)) rate = (r.t1_rate || 0) * sacks;else if (sacks <= (r.t2_sacks || 0)) rate = r.t2_rate || 0;else if (sacks === (r.t3_sacks || 0)) rate = r.t3_rate || 0;else if (sacks <= (r.t4_sacks || 0)) rate = r.t4_rate || 0;else rate = r.t5_rate || 0;
              }
              return rate;
            };
            var resMixer = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/block-mixer"));
            var mixerRecords = ((_resMixer$data = resMixer.data) === null || _resMixer$data === void 0 ? void 0 : _resMixer$data.data) || [];
            var standardSpots = 3;
            var myEarned = 0;

            // Calculate direct machine earnings and populate mixer pool
            runs.forEach(run => {
              var workersList = [{
                name: run.operatorName,
                half: run.halfDayOperator || false
              }, {
                name: run.helper1,
                half: run.halfDayHelper1 || false
              }, {
                name: run.helper2,
                half: run.halfDayHelper2 || false
              }, {
                name: run.helper3,
                half: run.halfDayHelper3 || false
              }].filter(w => w.name);
              var calculatedUnit = calculateWorkerShare(run.blockType, run.sacksUsed, standardSpots, false);
              var unitShare = calculatedUnit;
              if (run.laborPot) {
                var weightedCrewCount = workersList.reduce((sum, w) => sum + (w.half ? 0.5 : 1), 0);
                var oldSchemaDiff = Math.abs(run.laborPot - (weightedCrewCount + 1) * calculatedUnit);
                var newSchemaDiff = Math.abs(run.laborPot - weightedCrewCount * calculatedUnit);
                if (newSchemaDiff < oldSchemaDiff) {
                  unitShare = run.laborPot / Math.max(weightedCrewCount, 0.5);
                } else {
                  unitShare = run.laborPot / (weightedCrewCount + 1);
                }
              }

              // Direct machine work
              var myMatch = workersList.find(w => normalize(w.name) === targetName);
              if (myMatch) {
                myEarned += myMatch.half ? unitShare / 2 : unitShare;
              }
            });

            // Calculate and Distribute Mixer Shares
            var mixerDays = [...new Set(mixerRecords.filter(m => inRange(m.date)).map(m => m.date))];
            var mixerRate = (config === null || config === void 0 ? void 0 : config.mixerRatePerSack) !== undefined ? config.mixerRatePerSack : 300;
            mixerDays.forEach(dateStr => {
              var dateFormatted = parseDate(dateStr).format('YYYY-MM-DD');
              var runsOnDate = allRuns.filter(r => parseDate(r.date).format('YYYY-MM-DD') === dateFormatted);
              var totalSacksOnDate = runsOnDate.reduce((sum, r) => sum + (parseInt(r.sacksUsed) || 0), 0);
              var mixersOnDate = mixerRecords.filter(m => m.date === dateStr);
              if (mixersOnDate.length === 0) return;
              mixersOnDate.forEach(w => {
                if (w.workerName && normalize(w.workerName) === targetName) {
                  var basePayout = totalSacksOnDate * mixerRate;
                  var share = w.halfDay ? basePayout * 0.5 : basePayout;
                  myEarned += share;
                }
              });
            });
            var myDamageDeduction = 0;
            damages.forEach(d => {
              var matchRun = allRuns.find(r => r.machineNo.toString().trim() === d.machineNo.toString().trim() && r.blockType.toString().trim().toUpperCase() === d.blockType.toString().trim().toUpperCase() && parseDate(r.date).isSame(parseDate(d.productionDate || d.date), 'day'));
              if (matchRun) {
                var workers = [matchRun.operatorName, matchRun.helper1, matchRun.helper2, matchRun.helper3].filter(n => n);
                if (workers.map(n => normalize(n)).includes(targetName)) {
                  myDamageDeduction += d.damagedBlocks * (d.damageRate || 3000) / workers.length;
                }
              }
            });
            setFactoryEarned(myEarned);
            setFactoryDamage(myDamageDeduction);
          } else {
            setFactoryEarned(0);
            setFactoryDamage(0);
          }
        } catch (error) {
          react_toastify__WEBPACK_IMPORTED_MODULE_29__.toast.error('Error fetching expenses or factory data.');
        } finally {
          setLoading(false);
        }
      });
      return function fetchExpense() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchExpense();
  }, [month, employeeName, weekFrom, weekTo, employeeDepartment]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (totalNet) {
      var wholePart = Math.floor(totalNet);
      var fractionalPart = (totalNet % 1).toFixed(2).split('.')[1];
      var wholeWords = number_to_words__WEBPACK_IMPORTED_MODULE_49___default().toWords(wholePart);
      var fractionalWords = number_to_words__WEBPACK_IMPORTED_MODULE_49___default().toWords(fractionalPart);
      setTotalW("".concat(wholeWords, " and ").concat(fractionalWords, " cents"));
    }
  }, [totalNet]);
  var handleChange = newValue => {
    var selectedOptions = employee.find(option => option === newValue);
    setEmployeeName({
      id: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions._id,
      name: selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.employeeName
    });
    setEmployeeId(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.employeeId);
    setEmployeeRole(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.employeeRole);
    setEmployeeDepartment(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.department);
    setEmployeePhone(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.employeePhone);
    setBasicSalary(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.salary);
    setBasicTransport(selectedOptions.basicTransport !== undefined ? selectedOptions.basicTransport : 0);
    setFoodBasic(selectedOptions.foodBasic !== undefined ? selectedOptions.foodBasic : 0);
    setBounceAllowances(selectedOptions.bounceAllowances !== undefined ? selectedOptions.bounceAllowances : 0);
    setOther(selectedOptions.other !== undefined ? selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.other : 0);
    setBankName(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.bankName);
    setBankNo(selectedOptions === null || selectedOptions === void 0 ? void 0 : selectedOptions.bankAccountNumber);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var DayO = 26;
    var LO = 4;
    setDaysOpen(DayO);
    setLops(LO);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var hasRange = weekFrom && weekTo;
    if (hasRange || employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY')) {
      setEarningSalary(0); // Ignore basic wage for anyone with a period range or factory dept
    } else {
      var dividedSalary = basicSalary / daysOpen;
      var totalEarningSalary = isNaN(daysW * dividedSalary) ? 0 : parseFloat(daysW * dividedSalary);
      setEarningSalary(totalEarningSalary);
    }
    var dividedTransport = basicTransport / daysOpen;
    var totalEarningTransport = isNaN(daysW * dividedTransport) ? 0 : parseFloat(daysW * dividedTransport);
    setTransportEarning(totalEarningTransport);
    var dividedFood = foodBasic / daysOpen;
    var totalEarningFood = isNaN(daysW * dividedFood) ? 0 : parseFloat(daysW * dividedFood);
    setFoodEarning(totalEarningFood);
    var dividedBounce = bounceAllowances / daysOpen;
    var totalEarningBOunce = isNaN(daysW * dividedBounce) ? 0 : parseFloat(daysW * dividedBounce);
    setBounceAllowancesEarning(totalEarningBOunce);
    var dividedOther = other / daysOpen;
    var totalEarningOther = isNaN(daysW * dividedOther) ? 0 : parseFloat(daysW * dividedOther);
    setOtherEarning(totalEarningOther);
  }, [basicSalary, daysW, basicTransport, foodBasic, bounceAllowances, other, daysOpen, employeeDepartment]);
  var totalActualSalary = parseFloat(basicSalary) + parseFloat(basicTransport) + parseFloat(foodBasic) + parseFloat(bounceAllowances) + parseFloat(other) + parseFloat(factoryEarned);
  var totalActualEarning = parseFloat(earningSalary) + parseFloat(transportEarning) + parseFloat(foodEarning) + parseFloat(bounceAllowancesEarning) + parseFloat(otherEarning) + parseFloat(factoryEarned);
  var totalActualDeduction = parseFloat(advancedSalary) + parseFloat(transportDeduction) + parseFloat(foodDeduction) + parseFloat(loan) + parseFloat(itemLost) + parseFloat(factoryDamage);
  var totalNet = totalActualEarning !== 0 ? totalActualEarning - totalActualDeduction : 0;
  var totalPaid = totalNet + bonus + totalActualDeduction;
  var totalPaidDollars = rate !== 0 ? Math.min(totalNet / rate * 100) / 100 : 0;
  var dividedAmountPaidFc = parseFloat(amountPayFC / rate).toFixed(2);
  var totalPaidUsd = parseFloat(Number(amountPayUSD) + Number(dividedAmountPaidFc)).toFixed(2);
  var CreditUSD = Math.round((totalPaidDollars - totalPaidUsd) * 100) / 100;
  var CreditFC = rate !== 0 ? Math.round(CreditUSD * rate * 100) / 100 : 0;
  var basicSalaryDollar = isNaN(basicSalary / rate) ? 0 : parseFloat(basicSalary / rate);
  var basicEarningDollar = isNaN(earningSalary / rate) ? 0 : parseFloat(earningSalary / rate);
  var basicAdvancedDollar = isNaN(advancedSalary / rate) ? 0 : parseFloat(advancedSalary / rate);
  var basicTransportDollar = isNaN(basicTransport / rate) ? 0 : parseFloat(basicTransport / rate);
  var basicTransportEarningDollar = isNaN(transportEarning / rate) ? 0 : parseFloat(transportEarning / rate);
  var basicTransportDeductionDollar = isNaN(transportDeduction / rate) ? 0 : parseFloat(transportDeduction / rate);
  var basicFoodDollar = isNaN(foodBasic / rate) ? 0 : parseFloat(foodBasic / rate);
  var basicFoodEarningDollar = isNaN(foodEarning / rate) ? 0 : parseFloat(foodEarning / rate);
  var basicFoodDeductionDollar = isNaN(foodDeduction / rate) ? 0 : parseFloat(foodDeduction / rate);
  var basicBounceDollar = isNaN(bounceAllowances / rate) ? 0 : parseFloat(bounceAllowances / rate);
  var basicBounceEarningDollar = isNaN(bounceAllowancesEarning / rate) ? 0 : parseFloat(bounceAllowancesEarning / rate);
  var basicLoanDeductionDollar = isNaN(loan / rate) ? 0 : parseFloat(loan / rate);
  var basicOtherDollar = isNaN(other / rate) ? 0 : parseFloat(other / rate);
  var basicOtherEarningDollar = isNaN(otherEarning / rate) ? 0 : parseFloat(otherEarning / rate);
  var basicItemDeductionDollar = isNaN(itemLost / rate) ? 0 : parseFloat(itemLost / rate);
  var TotalBasicDollar = isNaN(totalActualSalary / rate) ? 0 : parseFloat(totalActualSalary / rate);
  var TotalEarningDollar = isNaN(totalActualEarning / rate) ? 0 : parseFloat(totalActualEarning / rate);
  var TotalDEductionDollar = isNaN(totalActualDeduction / rate) ? 0 : parseFloat(totalActualDeduction / rate);
  var TotalBonusDollar = isNaN(bonus / rate) ? 0 : parseFloat(bonus / rate);
  var TotalPAidDollar = isNaN(totalPaid / rate) ? 0 : parseFloat(totalPaid / rate);
  {/** loading Start */}
  var _useState79 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState80 = _slicedToArray(_useState79, 2),
    loading = _useState80[0],
    setLoading = _useState80[1];
  var _useState81 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState82 = _slicedToArray(_useState81, 2),
    loadingOpenModal = _useState82[0],
    setLoadingOpenModal = _useState82[1];
  var _useState83 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState84 = _slicedToArray(_useState83, 2),
    loadingOpenModalUpdate = _useState84[0],
    setLoadingOpenModalUpdate = _useState84[1];
  var _useState85 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState86 = _slicedToArray(_useState85, 2),
    ErrorOpenModal = _useState86[0],
    setErrorOpenModal = _useState86[1];
  var handleOpen = () => {
    setLoadingOpenModal(true);
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
  var handleError = msg => {
    setServerErrorMsg(msg || "");
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    setLoadingOpenModal(false);
    window.location.reload();
    setPayNumber(prev => (prev || 0) + 1); // Increment pay number for next
    setPayDate(new Date());
    setEmployeeId('');
    setDaysW(0);
    // setDaysOpen(0); // Keep daysOpen as it usually stays the same for the month
    // setLops(0); // Keep Lops as it usually stays the same for the month
    setEmployeeName({
      id: '',
      name: ''
    });
    setEmployeeRole('');
    setEmployeeDepartment('');
    setEmployeePhone('');
    setBankName('');
    setBankNo('');
    setBasicSalary(0);
    setEarningSalary(0);
    setAdvancedSalary(0);
    setBasicTransport(0);
    setTransportEarning(0);
    setTransportDeduction(0);
    setFoodBasic(0);
    setFoodEarning(0);
    setItemLost(0);
    setFoodDeduction(0);
    setBounceAllowances(0);
    setBounceAllowancesEarning(0);
    setOther(0);
    setOtherEarning(0);
    setLoan(0);
    setBonus(0);
    setFactoryEarned(0);
    setFactoryDamage(0);
    setSaving('');
    // fetchData(); // fetchData doesn't seem to exist in this scope, removed
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
  {/** loading End */}
  var relatedMonth = employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY') && weekFrom && weekTo ? "".concat(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).format('DD/MM/YY'), " to ").concat(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo).format('DD/MM/YY')) : dayjs__WEBPACK_IMPORTED_MODULE_35___default()(month).format('MMMM/YYYY');
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created PAYROLL ',
        reason: relatedMonth + ' PaySlip For ' + employeeName.name + ' / PR-' + String(ReferenceInfoNumber).padStart(6, '0'),
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        react_toastify__WEBPACK_IMPORTED_MODULE_29__.toast.error('Error creating notification.');
      }
    });
    return function handleCreateNotification(_x, _x2) {
      return _ref1.apply(this, arguments);
    };
  }();
  var _useState87 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState88 = _slicedToArray(_useState87, 2),
    saving = _useState88[0],
    setSaving = _useState88[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setSaving('true');
      if (employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY')) {
        if (!weekFrom || !weekTo) {
          alert("Please select the Work Period (From/To) for this Factory employee.");
          setSaving('');
          return;
        }

        // Check for overlapping periods
        try {
          var _resPayrolls$data;
          var resPayrolls = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/payRoll"));
          var existingPayrolls = (_resPayrolls$data = resPayrolls.data) === null || _resPayrolls$data === void 0 || (_resPayrolls$data = _resPayrolls$data.data) === null || _resPayrolls$data === void 0 ? void 0 : _resPayrolls$data.filter(p => p.employeeName.id === employeeName.id);
          var newFrom = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom);
          var newTo = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo);
          var overlap = existingPayrolls.find(p => {
            if (!p.weekFrom || !p.weekTo) return false;
            var exFrom = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(p.weekFrom);
            var exTo = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(p.weekTo);

            // Overlap logic: (StartA <= EndB) and (EndA >= StartB)
            return (newFrom.isSame(exTo) || newFrom.isBefore(exTo)) && (newTo.isSame(exFrom) || newTo.isAfter(exFrom));
          });
          if (overlap) {
            alert("This employee has already been paid for the period: ".concat(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(overlap.weekFrom).format('DD/MM/YYYY'), " to ").concat(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(overlap.weekTo).format('DD/MM/YYYY'), ". Please choose a different range."));
            setSaving('');
            return;
          }
        } catch (err) {
          react_toastify__WEBPACK_IMPORTED_MODULE_29__.toast.error('Error checking for overlapping payroll periods.');
        }
      }
      var status = '';
      if (parseInt(amountPayUSD) === 0 && parseInt(amountPayFC) === 0) {
        status = 'UnPaid';
      } else if (parseInt(CreditFC) === 0 && parseInt(CreditUSD) === 0) {
        status = 'Paid';
      } else {
        status = 'Partially-Paid';
      }
      var data = {
        _id: (0,uuid__WEBPACK_IMPORTED_MODULE_27__["default"])(),
        payNumber,
        payDate,
        month,
        daysW,
        status,
        daysOpen,
        Lops,
        basicSalary,
        earningSalary,
        advancedSalary,
        basicTransport,
        transportEarning,
        transportDeduction,
        foodBasic,
        foodEarning,
        itemLost,
        foodDeduction,
        bounceAllowances,
        bounceAllowancesEarning,
        other,
        otherEarning,
        loan,
        bonus,
        totalActualSalary,
        totalActualEarning,
        totalActualDeduction,
        totalNet,
        totalPaid,
        rate,
        totalPaidDollars,
        words,
        employeeName,
        amountPayUSD,
        amountPayFC,
        CreditFC,
        CreditUSD,
        synced: false,
        // Metadata
        factoryEarned,
        factoryDamage,
        weekFrom: weekFrom && dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).isValid() ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).format('YYYY-MM-DD') : null,
        weekTo: weekTo && dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo).isValid() ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo).format('YYYY-MM-DD') : null
      };
      try {
        var finalMonth = employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY') && weekFrom ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).toISOString() : month;
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/create-payRoll"), {
          payNumber,
          payDate,
          month: finalMonth,
          daysW,
          status,
          daysOpen,
          Lops,
          basicSalary,
          earningSalary,
          advancedSalary,
          basicTransport,
          transportEarning,
          transportDeduction,
          foodBasic,
          foodEarning,
          itemLost,
          foodDeduction,
          bounceAllowances,
          bounceAllowancesEarning,
          other,
          otherEarning,
          loan,
          bonus,
          totalActualSalary,
          totalActualEarning,
          totalActualDeduction,
          totalNet,
          totalPaid,
          rate,
          totalPaidDollars,
          words,
          employeeName,
          amountPayUSD,
          amountPayFC,
          CreditFC,
          CreditUSD,
          employeeDepartment,
          // Explicitly send department for server logic
          // FACTORY METADATA
          factoryEarned,
          factoryDamage,
          weekFrom: weekFrom && dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).isValid() ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).format('YYYY-MM-DD') : null,
          weekTo: weekTo && dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo).isValid() ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo).format('YYYY-MM-DD') : null
        });
        if (res) {
          // Open Loading View
          var ReferenceInfo = res.data.data._id;
          var ReferenceInfoNumber = res.data.data.payNumber;
          handleCreateNotification(ReferenceInfo, ReferenceInfoNumber);
          handleOpen();
        }
      } catch (error) {
        if (error) {
          setSaving('');
          var msg = error.response && error.response.data && error.response.data.message ? error.response.data.message : error.message;
          handleError(msg);
        }
      }
    });
    return function handleSubmit(_x3) {
      return _ref10.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_19__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_23__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Make new Payment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleOpenBack
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_38__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_44__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_24__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_18__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_32__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_33__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_31__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_34__.DatePicker, {
    required: true,
    name: "payDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_35___default()(payDate),
    onChange: date => setPayDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_32__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_33__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_31__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_34__.DatePicker, {
    required: true,
    name: "month",
    label: "Month of Payment",
    value: dayjs__WEBPACK_IMPORTED_MODULE_35___default()(month),
    views: ['month', 'year'],
    onChange: date => setMonth(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    disableClearable: true,
    options: employee,
    getOptionLabel: option => option.employeeName || "",
    value: employee.find(e => e._id === employeeName.id) || null,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], props, option.employeeName),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], _extends({}, params, {
      label: "Employee Name",
      required: true
    })),
    onChange: (e, newValue) => handleChange(newValue ? newValue : ''),
    size: "small",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_32__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_33__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_34__.DatePicker, {
    label: "Pay Period \u2014 From",
    value: weekFrom ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom) : null,
    onChange: newValue => setWeekFrom(newValue && newValue.isValid() ? newValue.format('YYYY-MM-DD') : null),
    format: "DD/MM/YYYY",
    slotProps: {
      textField: {
        fullWidth: true,
        helperText: "Start date of this factory pay week"
      }
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_32__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_33__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_34__.DatePicker, {
    label: "Pay Period \u2014 To",
    value: weekTo ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo) : null,
    onChange: newValue => setWeekTo(newValue && newValue.isValid() ? newValue.format('YYYY-MM-DD') : null),
    format: "DD/MM/YYYY",
    slotProps: {
      textField: {
        fullWidth: true,
        helperText: "End date of this factory pay week"
      }
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "secondTable",
    style: {
      fontSize: '20px',
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
  }, "Global Gate")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    colSpan: 5
  }, weekFrom && weekTo ? "Salary Slip for Period: ".concat(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).format('DD/MM/YYYY'), " to ").concat(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo).format('DD/MM/YYYY')) : "Salary Slip for the month Of: ".concat(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(month).format('MMMM-YYYY'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Employee Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, employeeName.name ? employeeName.name : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Total Days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    size: "small",
    id: "daysOpen",
    name: "daysOpen",
    value: daysOpen,
    onChange: e => setDaysOpen(e.target.value),
    style: {
      width: '100px',
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Employee Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, employeePhone ? employeePhone : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "LOPs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    size: "small",
    id: "Lops",
    name: "Lops",
    value: Lops,
    onChange: e => setLops(e.target.value),
    style: {
      width: '100px',
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Employee Id"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, employeeId ? employeeId : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Paid Days"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    size: "small",
    required: true,
    id: "daysW",
    name: "daysW",
    value: daysW !== 0 ? daysW : '',
    onChange: e => setDaysW(e.target.value),
    style: {
      width: '100px',
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Grade"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, employeeRole ? employeeRole : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Bank Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, bankName !== undefined ? bankName : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, dayjs__WEBPACK_IMPORTED_MODULE_35___default()(payDate).format('DD-MMMM-YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, "A/C No."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    }
  }, bankNo !== undefined ? bankNo : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '400px',
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, "Department"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '400px',
      border: '1px solid #DDD'
    },
    colSpan: 3
  }, employeeDepartment ? employeeDepartment : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Earning (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Actual Salary (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    }
  }, "Earnings (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      backgroundColor: '#e8f7fe'
    },
    colSpan: 2
  }, "Deductions (FC)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, "Basic wage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", basicSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", basicSalaryDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", earningSalary ? earningSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", basicEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, "In advanced allowances "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", advancedSalary !== undefined ? advancedSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", basicAdvancedDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, "Transport allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", basicTransport.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", basicTransportDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", transportEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", basicTransportEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, "Transport"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", transportDeduction !== undefined ? transportDeduction.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", basicTransportDeductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, "Food allowances"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", foodBasic.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", basicFoodDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", foodEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", basicFoodEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, "Food"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", foodDeduction !== undefined ? foodDeduction.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", basicFoodDeductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, "Bounce allowances 3%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", bounceAllowances.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", basicBounceDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", bounceAllowancesEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", basicBounceEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, "Loan recovery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", loan !== undefined ? loan.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", basicLoanDeductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, "Other"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", other.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", basicOtherDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", otherEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", basicOtherEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '1.2'
    }
  }, "Item lost recovery / Deduction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", itemLost !== undefined ? itemLost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", basicItemDeductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, "Factory Pot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", factoryEarned.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", (isNaN(factoryEarned / rate) ? 0 : parseFloat(factoryEarned / rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", factoryEarned.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", (isNaN(factoryEarned / rate) ? 0 : parseFloat(factoryEarned / rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, "Damage Penalty"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "FC ", factoryDamage !== undefined ? factoryDamage.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "$ ", (isNaN(factoryDamage / rate) ? 0 : parseFloat(factoryDamage / rate)).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "secondTable",
    style: {
      fontSize: '20px',
      marginBottom: '5px',
      border: '1px solid #DDD'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    },
    colSpan: 6
  }, "Total(FC)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      borderBottom: 'none'
    },
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Basic:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Fc ", totalActualSalary.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      borderBottom: 'none'
    },
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Earning:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Fc ", totalActualEarning.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      borderBottom: 'none'
    },
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Deduction:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " Fc ", totalActualDeduction.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      borderTop: 'none'
    },
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Basic:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " $ ", TotalBasicDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      borderTop: 'none'
    },
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Earning:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " $ ", TotalEarningDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      borderTop: 'none'
    },
    colSpan: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "Total Deduction:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " $ ", TotalDEductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, "Net payable"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD',
      lineHeight: '5px'
    },
    colSpan: 4
  }, "FC ", totalNet.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", totalPaidDollars.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, "Total Deduction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 4
  }, "FC ", totalActualDeduction.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", TotalDEductionDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, "Overtime & Bonus"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 4
  }, "FC ", bonus.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", TotalBonusDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    colSpan: 2
  }, "Total Paid"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 4
  }, "FC ", totalPaid.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), " ($ ", TotalPAidDollar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','), ")")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    },
    colSpan: 6
  }, "Total net")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "Net payable(FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 0
  }, "FC ", totalNet.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    size: "small",
    id: "rate",
    value: rate !== 0 ? rate : '',
    placeholder: "Rate",
    onChange: e => setRate(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "Net payable($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "$ ", totalPaidDollars.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "Amount Paid(FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    size: "small",
    placeholder: "Paying Amount FC",
    name: "amountPayFC",
    onChange: e => setAmountPayFC(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    size: "small",
    id: "rate",
    value: rate !== 0 ? rate : '',
    placeholder: "Rate",
    onChange: e => setRate(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "Amount Paid($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    size: "small",
    name: "amountPayUSD",
    placeholder: "Paying Amount USD",
    onChange: e => setAmountPayUSD(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "Credit(FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 0
  }, "FC ", CreditFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    size: "small",
    id: "rate",
    value: rate !== 0 ? rate : '',
    placeholder: "Rate",
    onChange: e => setRate(e.target.value),
    style: {
      width: '200px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "Credit($)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      padding: '5px',
      border: '1px solid #DDD',
      textAlign: 'center'
    }
  }, "$ ", CreditUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      border: '1px solid #DDD'
    },
    colSpan: 1
  }, "Net Words"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      width: '200px',
      border: '1px solid #DDD'
    },
    colSpan: 4
  }, words, " Franc Congolais."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, "Saving...")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    open: open1,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, "Do you want to stop creating Invoice ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }, " If you stop creating without saving, all your changes will be lost")), "  "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: () => navigate('/PayRollViewAdmin'),
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
  }, "No"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_12__["default"],
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
  }, "Go Back"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_12__["default"],
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      color: 'red'
    }
  }, "Saving Failed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      color: '#666',
      marginBottom: '20px'
    }
  }, serverErrorMsg || "Something went wrong. Please check your connection and try again."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PayRollFormView);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUGF5Um9sbF9QYXlSb2xsRm9ybVZpZXdfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQW1EO0FBQ1U7QUFDckM7QUFDRTtBQUMwQjtBQUNzQjtBQUNSO0FBQ2Q7QUFDeUs7QUFDN0o7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ1E7QUFDQTtBQUNjO0FBQ0k7QUFDekM7QUFDdUY7QUFDOUQ7QUFDeEI7QUFDcUI7QUFDUjtBQUNRO0FBRW9CO0FBQ2E7QUFDaEI7QUFDSjtBQUNsQztBQUNxQjtBQUNnQjtBQUNUO0FBRXREb0Qsb0RBQVksQ0FBQ0MsZ0VBQVMsQ0FBQztBQUN2QkQsb0RBQVksQ0FBQ0Usd0VBQWlCLENBQUM7O0FBRS9CO0FBQ0EsSUFBTUcsU0FBUyxHQUFJQyxDQUFDLElBQUs7RUFDdkIsSUFBSSxDQUFDQSxDQUFDLEVBQUUsT0FBT04sNkNBQUssQ0FBQyxJQUFJLENBQUM7RUFDMUIsSUFBSSxPQUFPTSxDQUFDLEtBQUssUUFBUSxFQUFFO0lBQ3pCLElBQU1DLE9BQU8sR0FBRyxDQUNkLFlBQVksRUFDWixZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsUUFBUSxFQUNSLDBCQUEwQixDQUMzQjtJQUNELElBQUlDLE1BQU0sR0FBR1IsNkNBQUssQ0FBQ00sQ0FBQyxFQUFFQyxPQUFPLEVBQUUsSUFBSSxDQUFDO0lBQ3BDLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUMsQ0FBQyxFQUFFRCxNQUFNLEdBQUdSLDZDQUFLLENBQUNNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsT0FBT0UsTUFBTTtFQUNmO0VBQ0EsT0FBT1IsNkNBQUssQ0FBQ00sQ0FBQyxDQUFDO0FBQ2pCLENBQUM7QUFF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O0FBRVA7QUFFQSxpRUFBZXp0QixhQUFhLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvUGF5Um9sbC9QYXlSb2xsRm9ybVZpZXcuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvU2lkZWJhckRhc2hFMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXJEYXNoRTMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoRTMnO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgUGFwZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgc3R5bGVkLCBCb3gsIEF1dG9jb21wbGV0ZSwgTW9kYWwsIEJhY2tkcm9wLCBUYWJsZUNvbnRhaW5lciwgT3V0bGluZWRJbnB1dCwgSW5wdXRBZG9ybm1lbnQsIERpdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgQWRkLCBBcnJvd1Vwd2FyZE91dGxpbmVkLCBEcmFnSW5kaWNhdG9yUm91bmRlZCwgRWRpdCwgUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuXHJcbmltcG9ydCB7IERlbW9Db250YWluZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL2ludGVybmFscy9kZW1vJztcclxuaW1wb3J0IHsgTG9jYWxpemF0aW9uUHJvdmlkZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0xvY2FsaXphdGlvblByb3ZpZGVyJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9EYXRlUGlja2VyJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IGlzQmV0d2VlbiBmcm9tICdkYXlqcy9wbHVnaW4vaXNCZXR3ZWVuJztcclxuaW1wb3J0IGN1c3RvbVBhcnNlRm9ybWF0IGZyb20gJ2RheWpzL3BsdWdpbi9jdXN0b21QYXJzZUZvcm1hdCc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5cclxuZGF5anMuZXh0ZW5kKGlzQmV0d2Vlbik7XHJcbmRheWpzLmV4dGVuZChjdXN0b21QYXJzZUZvcm1hdCk7XHJcblxyXG4vLyBHbG9iYWwgaGVscGVyIHRvIHBhcnNlIGRhdGVzIHJvYnVzdGx5IGFjcm9zcyBmb3JtYXRzXHJcbmNvbnN0IHBhcnNlRGF0ZSA9IChkKSA9PiB7XHJcbiAgaWYgKCFkKSByZXR1cm4gZGF5anMobnVsbCk7XHJcbiAgaWYgKHR5cGVvZiBkID09PSAnc3RyaW5nJykge1xyXG4gICAgY29uc3QgZm9ybWF0cyA9IFtcclxuICAgICAgJ1lZWVktTU0tREQnLFxyXG4gICAgICAnREQvTU0vWVlZWScsXHJcbiAgICAgICdEL00vWVlZWScsXHJcbiAgICAgICdERC1NTS1ZWVlZJyxcclxuICAgICAgJ0REL01NL1lZJyxcclxuICAgICAgJ0QvTS9ZWScsXHJcbiAgICAgICdZWVlZLU1NLUREVEhIOm1tOnNzLlNTU1onXHJcbiAgICBdO1xyXG4gICAgbGV0IHBhcnNlZCA9IGRheWpzKGQsIGZvcm1hdHMsIHRydWUpO1xyXG4gICAgaWYgKCFwYXJzZWQuaXNWYWxpZCgpKSBwYXJzZWQgPSBkYXlqcyhkKTsgLy8gRmFsbGJhY2sgdG8gbmF0aXZlXHJcbiAgICByZXR1cm4gcGFyc2VkO1xyXG4gIH1cclxuICByZXR1cm4gZGF5anMoZCk7XHJcbn07XHJcblxyXG5jb25zdCB1bmlxdWVCeUlkID0gKGFycikgPT4ge1xyXG4gICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQoKTtcclxuICAgIHJldHVybiBhcnIuZmlsdGVyKGl0ID0+IHtcclxuICAgICAgICBpZiAoIWl0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgaWQgPSBpdC5faWQgfHwgaXQuaWQgfHwgXHJcbiAgICAgICAgICAgICAgICAgIChpdC5wYXlOdW1iZXIgPyBgUEFZXyR7aXQucGF5TnVtYmVyfWAgOiBudWxsKSB8fCBcclxuICAgICAgICAgICAgICAgICAgKGl0LmV4cGVuc2VOdW1iZXIgPyBgRVhQXyR7aXQuZXhwZW5zZU51bWJlcn1gIDogbnVsbCkgfHwgXHJcbiAgICAgICAgICAgICAgICAgIChpdC5pZEluZm8gPyBgSU5GXyR7aXQuaWRJbmZvfWAgOiBudWxsKSB8fCBcclxuICAgICAgICAgICAgICAgICAgKGl0LnByb2plY3ROdW1iZXIgPyBgUFJKXyR7aXQucHJvamVjdE51bWJlcn1gIDogbnVsbCkgfHxcclxuICAgICAgICAgICAgICAgICAgKGl0Lmludm9pY2VOdW1iZXIgPyBgSU5WXyR7aXQuaW52b2ljZU51bWJlcn1gIDogbnVsbCkgfHxcclxuICAgICAgICAgICAgICAgICAgKGl0LmZhY3R1cmVOdW1iZXIgPyBgRkFDXyR7aXQuZmFjdHVyZU51bWJlcn1gIDogbnVsbCkgfHxcclxuICAgICAgICAgICAgICAgICAgKGl0LnBheW1lbnROdW1iZXIgPyBgUE1UXyR7aXQucGF5bWVudE51bWJlcn1gIDogbnVsbCkgfHxcclxuICAgICAgICAgICAgICAgICAgKGl0LmVtcGxveWVlSWQgPyBgRU1QXyR7aXQuZW1wbG95ZWVJZH1gIDogbnVsbCkgfHxcclxuICAgICAgICAgICAgICAgICAgKGAke2l0LmRhdGV9XyR7aXQubWFjaGluZU5vfV8ke2l0LmJsb2NrVHlwZX1fJHtpdC53b3JrZXJOYW1lIHx8IGl0Lm9wZXJhdG9yTmFtZSB8fCAnJ31gKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoc2Vlbi5oYXMoaWQpKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgc2Vlbi5hZGQoaWQpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5cclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgQ3VzdG9tZXJGb3JtVmlldzIgZnJvbSAnLi4vQ3VzdG9tZXJWSWV3L0N1c3RvbWVyRm9ybVZpZXcyJztcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgSXRlbUZvcm1WaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtRm9ybVZpZXcyJztcclxuaW1wb3J0IEl0ZW1VcGRhdGVWaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtVXBkYXRlVmlldzInO1xyXG5pbXBvcnQgbnVtYmVyVG9Xb3JkcyBmcm9tICdudW1iZXItdG8td29yZHMnXHJcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuXHJcblxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBCbGFja1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IHN0eWxlMiA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDgwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIFBheVJvbGxGb3JtVmlldygpIHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUgfSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2aWdhdGUoJy8nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VyKClcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICBjb25zdCBbb3BlbjEsIHNldE9wZW4xXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbkJhY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRPcGVuMSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQmFjayA9ICgpID0+IHtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IFtwYXlOdW1iZXIsIHNldFBheU51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcGF5RGF0ZSwgc2V0UGF5RGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxyXG4gICAgcmV0dXJuIGRhdGVcclxuICB9KTtcclxuICBjb25zdCBbbW9udGgsIHNldE1vbnRoXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICByZXR1cm4gZGF0ZVxyXG4gIH0pO1xyXG4gIGNvbnN0IFtlbXBsb3llZUlkLCBzZXRFbXBsb3llZUlkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF5c1csIHNldERheXNXXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtkYXlzT3Blbiwgc2V0RGF5c09wZW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW0xvcHMsIHNldExvcHNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2VtcGxveWVlLCBzZXRFbXBsb3llZV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbZW1wbG95ZWVOYW1lLCBzZXRFbXBsb3llZU5hbWVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtlbXBsb3llZVJvbGUsIHNldEVtcGxveWVlUm9sZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYmFua05hbWUsIHNldEJhbmtOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtiYW5rTm8sIHNldEJhbmtOb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYmFzaWNTYWxhcnksIHNldEJhc2ljU2FsYXJ5XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtlYXJuaW5nU2FsYXJ5LCBzZXRFYXJuaW5nU2FsYXJ5XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthZHZhbmNlZFNhbGFyeSwgc2V0QWR2YW5jZWRTYWxhcnldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2Jhc2ljVHJhbnNwb3J0LCBzZXRCYXNpY1RyYW5zcG9ydF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdHJhbnNwb3J0RWFybmluZywgc2V0VHJhbnNwb3J0RWFybmluZ10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdHJhbnNwb3J0RGVkdWN0aW9uLCBzZXRUcmFuc3BvcnREZWR1Y3Rpb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2Zvb2RCYXNpYywgc2V0Rm9vZEJhc2ljXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtmb29kRWFybmluZywgc2V0Rm9vZEVhcm5pbmddID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2l0ZW1Mb3N0LCBzZXRJdGVtTG9zdF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZm9vZERlZHVjdGlvbiwgc2V0Rm9vZERlZHVjdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYm91bmNlQWxsb3dhbmNlcywgc2V0Qm91bmNlQWxsb3dhbmNlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYm91bmNlQWxsb3dhbmNlc0Vhcm5pbmcsIHNldEJvdW5jZUFsbG93YW5jZXNFYXJuaW5nXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtvdGhlciwgc2V0T3RoZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW290aGVyRWFybmluZywgc2V0T3RoZXJFYXJuaW5nXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtsb2FuLCBzZXRMb2FuXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtib251cywgc2V0Qm9udXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2Ftb3VudFBheVVTRCwgc2V0QW1vdW50UGF5VVNEXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthbW91bnRQYXlGQywgc2V0QW1vdW50UGF5RkNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2VtcGxveWVlRGVwYXJ0bWVudCwgc2V0RW1wbG95ZWVEZXBhcnRtZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbXBsb3llZVBob25lLCBzZXRFbXBsb3llZVBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt3b3Jkcywgc2V0VG90YWxXXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmYWN0b3J5RWFybmVkLCBzZXRGYWN0b3J5RWFybmVkXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtmYWN0b3J5RGFtYWdlLCBzZXRGYWN0b3J5RGFtYWdlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFt3ZWVrRnJvbSwgc2V0V2Vla0Zyb21dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3dlZWtUbywgc2V0V2Vla1RvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzZXJ2ZXJFcnJvck1zZywgc2V0U2VydmVyRXJyb3JNc2ddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNobGFzdE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbGFzdC1zYXZlZC1wYXlSb2xsYCk7XHJcbiAgICAgICAgY29uc3QgbnVtID0gcmVzLmRhdGEgJiYgcmVzLmRhdGEucGF5TnVtYmVyID8gKHBhcnNlSW50KHJlcy5kYXRhPy5kYXRhPy5wYXlOdW1iZXIgfHwgcmVzLmRhdGE/LnBheU51bWJlciB8fCAwKSkgOiAwO1xyXG4gICAgICAgIHNldFBheU51bWJlcihudW0gKyAxKTtcclxuICAgICAgICBzZXRQYXlEYXRlKHJlcy5kYXRhLnBheURhdGUpO1xyXG4gICAgICAgIHNldE1vbnRoKHJlcy5kYXRhLm1vbnRoKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hsYXN0TnVtYmVyKClcclxuICB9LCBbXSlcclxuICAvLyBBZGQgT3RoZXIgQW5kIEJvbnVzLlxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVGZXRjaCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNFbXBsb3llZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2VtcGxveWVlYClcclxuICAgICAgICBzZXRFbXBsb3llZShyZXNFbXBsb3llZS5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnN0YXR1cyA9PT0gJ0VtcGxveWVkJyB8fCByb3cuc3RhdHVzID09PSAnUmVzaWduJykpO1xyXG4gICAgICAgIGNvbnN0IHJlc1BSYXRlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcGF5bWVudFJhdGVgKTtcclxuICAgICAgICAocmVzUFJhdGUuZGF0YT8uZGF0YSB8fCBbXSkubWFwKChyb3cpID0+IHNldFJhdGUocm93LnBheW1lbnRSYXRlKSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGhhbmRsZUZldGNoKClcclxuICB9LCBbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hFeHBlbnNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoIWVtcGxveWVlTmFtZS5pZCkgcmV0dXJuO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgLy8gU3RlcCAxOiBGZXRjaCBTaGFyZWQgRGF0YSAoRXhwZW5zZXMgYW5kIEF0dGVuZGFuY2UpIG9uY2UgcGVyIGNoYW5nZVxyXG4gICAgICAgIGNvbnN0IFtyZXNFeHBlbnNlLCByZXNBdHRlbmRhbmNlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2V4cGVuc2U/c3VtbWFyeT10cnVlYCksXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9lbXBsb3llZWF0dGVuZGFuY2VgKVxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICBjb25zdCBhbGxFeHBlbnNlcyA9IHJlc0V4cGVuc2UuZGF0YT8uZGF0YSB8fCBbXTtcclxuICAgICAgICBjb25zdCBhbGxBdHRlbmRhbmNlID0gcmVzQXR0ZW5kYW5jZS5kYXRhPy5kYXRhIHx8IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBpc0ZhY3RvcnkgPSBlbXBsb3llZURlcGFydG1lbnQgJiYgZW1wbG95ZWVEZXBhcnRtZW50LnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoJ0ZBQ1RPUlknKTtcclxuICAgICAgICBjb25zdCBmcm9tRCA9IHdlZWtGcm9tID8gZGF5anMod2Vla0Zyb20pLnN0YXJ0T2YoJ2RheScpIDogbnVsbDtcclxuICAgICAgICBjb25zdCB0b0QgPSB3ZWVrVG8gPyBkYXlqcyh3ZWVrVG8pLmVuZE9mKCdkYXknKSA6IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IGluUmFuZ2UgPSAoZGF0ZVN0cikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgZCA9IHBhcnNlRGF0ZShkYXRlU3RyKTtcclxuICAgICAgICAgIGlmICghZC5pc1ZhbGlkKCkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAvLyBQcmlvcml0aXplIHJhbmdlIGlmIGJvdGggZGF0ZXMgYXJlIHNlbGVjdGVkXHJcbiAgICAgICAgICBpZiAoZnJvbUQgJiYgdG9EKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoZC5pc1NhbWUoZnJvbUQsICdkYXknKSB8fCBkLmlzQWZ0ZXIoZnJvbUQpKSAmJiAoZC5pc1NhbWUodG9ELCAnZGF5JykgfHwgZC5pc0JlZm9yZSh0b0QpKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBGYWxsYmFjayB0byBtb250aGx5IGZpbHRlclxyXG4gICAgICAgICAgcmV0dXJuIGQuZm9ybWF0KCdNTS9ZWVlZJykgPT09IGRheWpzKG1vbnRoKS5mb3JtYXQoJ01NL1lZWVknKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBTdGFuZGFyZCBGaWx0ZXIgSGVscGVyIC0gUm9idXN0IE1hdGNoaW5nIGZvciBEZWR1Y3Rpb25zXHJcbiAgICAgICAgY29uc3QgZ2V0U3VtID0gKGNhdGVnb3JpZXMpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHNlYXJjaFRlcm1zID0gQXJyYXkuaXNBcnJheShjYXRlZ29yaWVzKSA/IGNhdGVnb3JpZXMubWFwKGMgPT4gYy50b1VwcGVyQ2FzZSgpKSA6IFtjYXRlZ29yaWVzLnRvVXBwZXJDYXNlKCldO1xyXG4gICAgICAgICAgcmV0dXJuIGFsbEV4cGVuc2VzXHJcbiAgICAgICAgICAgIC5maWx0ZXIocm93ID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBjYXQgPSByb3cuZXhwZW5zZUNhdGVnb3J5Py5leHBlbnNlc0NhdGVnb3J5Py50b1VwcGVyQ2FzZSgpIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgY29uc3QgbWF0Y2hDYXQgPSBzZWFyY2hUZXJtcy5zb21lKHRlcm0gPT4gY2F0LmluY2x1ZGVzKHRlcm0pKTtcclxuICAgICAgICAgICAgICByZXR1cm4gcm93LmFjY291bnROYW1lID09PSAnRW1wbG95ZWUnICYmIG1hdGNoQ2F0ICYmIGluUmFuZ2Uocm93LmV4cGVuc2VEYXRlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcChyb3cgPT4gKHsgZW1wOiByb3cuZW1wbG95ZWVOYW1lLmZpbHRlcihpdGVtID0+IGl0ZW0uaWRSb3cgPT09IGVtcGxveWVlTmFtZS5pZCkgfSkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmVtcC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcm93LmVtcC5yZWR1Y2UoKHMsIGl0KSA9PiBzICsgcGFyc2VGbG9hdChpdC5hbW91bnQgfHwgMCksIDApLCAwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBBcHBseSBEZWR1Y3Rpb25zIChSZXNwZWN0cyBSYW5nZSAmIFZhcmlhdGlvbnMpXHJcbiAgICAgICAgc2V0VHJhbnNwb3J0RGVkdWN0aW9uKGdldFN1bShbJ1RSQU5TUE9SVCddKSk7XHJcbiAgICAgICAgc2V0Rm9vZERlZHVjdGlvbihnZXRTdW0oWydGT09EJ10pKTtcclxuICAgICAgICBzZXRBZHZhbmNlZFNhbGFyeShnZXRTdW0oWydBRFZBTkNFRCcsICdBQ0NPTVBURScsICdBVkFOQ0UnXSkpO1xyXG4gICAgICAgIHNldExvYW4oZ2V0U3VtKFsnTE9BTicsICdQUkVUJ10pKTtcclxuICAgICAgICBzZXRJdGVtTG9zdChnZXRTdW0oWydJVEVNIExPU1QnLCAnUEVSRFUnLCAnREVEVUNUSU9OJ10pKTtcclxuICAgICAgICBzZXRCb251cyhnZXRTdW0oWydCT05VUyddKSk7XHJcblxyXG4gICAgICAgIC8vIEF0dGVuZGFuY2UgRmlsdGVyaW5nXHJcbiAgICAgICAgY29uc3QgYXR0QXJyYXkgPSBhbGxBdHRlbmRhbmNlLmZpbHRlcihyb3cgPT4gcm93LmlkID09PSBlbXBsb3llZU5hbWUuaWQgJiYgaW5SYW5nZShyb3cudGltZUluKSk7XHJcbiAgICAgICAgY29uc3QgbmJyZU9mRGF5ID0gYXR0QXJyYXkuZmlsdGVyKGl0ZW0gPT4gaXRlbS5vYnNlcnZhdGlvbiA9PT0gJ1AnIHx8IGl0ZW0ub2JzZXJ2YXRpb24gPT09ICdIJykucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIChpdGVtLmRheXNXTiB8fCAwKSwgMCk7XHJcbiAgICAgICAgc2V0RGF5c1cobmJyZU9mRGF5KTtcclxuXHJcbiAgICAgICAgLy8gRGV0ZXJtaW5lIGNhbGN1bGF0aW9uIG1vZGU6IFByaW9yaXRpemUgcmFuZ2UgaWYgYm90aCBkYXRlcyBhcmUgY2hvc2VuXHJcbiAgICAgICAgY29uc3QgaXNSYW5nZU1vZGUgPSBmcm9tRCAmJiB0b0QgJiYgZnJvbUQuaXNCZWZvcmUodG9ELmFkZCgxLCAnZGF5JykpO1xyXG5cclxuICAgICAgICAvLyBGQUNUT1JZL1JBTkdFIFNQRUNJRklDIENPTVBVVEFUSU9OUyAoRWFybmluZ3MgJiBEYW1hZ2VzKVxyXG4gICAgICAgIGlmIChpc1JhbmdlTW9kZSkge1xyXG4gICAgICAgICAgY29uc3QgW3Jlc1J1bnMsIHJlc0RhbWFnZXMsIHJlc0NvbmZpZ10gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2Jsb2NrLXByb2R1Y3Rpb25gKSxcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vYmxvY2stZGFtYWdlYCksXHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2Jsb2NrLWNvbmZpZ2ApXHJcbiAgICAgICAgICBdKTtcclxuICAgICAgICAgIGNvbnN0IGFsbFJ1bnMgPSByZXNSdW5zLmRhdGE/LmRhdGEgfHwgW107XHJcbiAgICAgICAgICBjb25zdCBhbGxEYW1hZ2VzID0gcmVzRGFtYWdlcy5kYXRhPy5kYXRhIHx8IFtdO1xyXG4gICAgICAgICAgY29uc3QgY29uZmlnID0gcmVzQ29uZmlnLmRhdGE/LmRhdGE/LlswXTtcclxuICAgICAgICAgIGNvbnN0IHJhdGVzID0gY29uZmlnPy5sYWJvclJhdGVzIHx8IHtcclxuICAgICAgICAgICAgcmF0ZTUwXzMzOiB7IHBlclNhY2s6IDEwMDAwIH0sXHJcbiAgICAgICAgICAgIHJhdGUyMDogeyB0MV9zYWNrczogNiwgdDFfcmF0ZTogOTAwMCwgdDJfc2Fja3M6IDcsIHQyX3JhdGU6IDE2NTAwLCB0M19zYWNrczogOCwgdDNfcmF0ZTogMTkwMDAsIHQ0X3NhY2tzOiAxMiwgdDRfcmF0ZTogMjE1MDAsIHQ1X3JhdGU6IDI0NTAwIH0sXHJcbiAgICAgICAgICAgIHJhdGUxNTogeyB0MV9zYWNrczogNSwgdDFfcmF0ZTogOTAwMCwgdDJfc2Fja3M6IDYsIHQyX3JhdGU6IDE2NTAwLCB0M19zYWNrczogNywgdDNfcmF0ZTogMTkwMDAsIHQ0X3NhY2tzOiAxMCwgdDRfcmF0ZTogMjE1MDAsIHQ1X3JhdGU6IDI0NTAwIH0sXHJcbiAgICAgICAgICAgIHJhdGUxMF8xNF8xMjogeyB0MV9zYWNrczogNiwgdDFfcmF0ZTogOTAwMCwgdDJfc2Fja3M6IDcsIHQyX3JhdGU6IDE3MDAwLCB0M19zYWNrczogOCwgdDNfcmF0ZTogMTk1MDAsIHQ0X3NhY2tzOiA5LCB0NF9yYXRlOiAyMjAwMCwgdDVfcmF0ZTogMjQ1MDAgfVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBjb25zdCBydW5zID0gdW5pcXVlQnlJZChhbGxSdW5zKS5maWx0ZXIociA9PiBpblJhbmdlKHIuZGF0ZSkpO1xyXG4gICAgICAgICAgY29uc3QgZGFtYWdlcyA9IHVuaXF1ZUJ5SWQoYWxsRGFtYWdlcykuZmlsdGVyKGQgPT4gaW5SYW5nZShkLnByb2R1Y3Rpb25EYXRlIHx8IGQuZGF0ZSkpO1xyXG5cclxuICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZSA9IChuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghbikgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBzID0gbi50b1N0cmluZygpLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICBpZiAocy5lbmRzV2l0aChcIiBGQ1wiKSkgcyA9IHMuc3Vic3RyaW5nKDAsIHMubGVuZ3RoIC0gMykudHJpbSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gcy5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXROYW1lID0gbm9ybWFsaXplKGVtcGxveWVlTmFtZS5uYW1lKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBjYWxjdWxhdGVXb3JrZXJTaGFyZSA9ICh0eXBlU3RyLCBzLCBlLCBoYWxmKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlU3RyLmluY2x1ZGVzKFwiNTBcIikgfHwgdHlwZVN0ci5pbmNsdWRlcyhcIjMzXCIpKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcjUwID0gcmF0ZXMucmF0ZTUwXzMzIHx8IHsgcGVyU2FjazogMTAwMDAgfTtcclxuICAgICAgICAgICAgICByZXR1cm4gaGFsZiA/IChzICogcjUwLnBlclNhY2spIC8gMiA6IChzICogcjUwLnBlclNhY2spIC8gZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgciA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0eXBlU3RyLmluY2x1ZGVzKFwiMjBcIikpIHIgPSByYXRlcy5yYXRlMjA7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVTdHIuaW5jbHVkZXMoXCIxNVwiKSkgciA9IHJhdGVzLnJhdGUxNTtcclxuICAgICAgICAgICAgZWxzZSByID0gcmF0ZXMucmF0ZTEwXzE0XzEyIHx8IHJhdGVzLnJhdGUxNCB8fCByYXRlcy5yYXRlMTIgfHwgcmF0ZXMucmF0ZTEwO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgY29uc3Qgc2Fja3MgPSBwYXJzZUludChzKSB8fCAwO1xyXG4gICAgICAgICAgICBsZXQgcmF0ZSA9IDA7XHJcbiAgICAgICAgICAgIGlmIChoYWxmKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZWZmZWN0aXZlU2Fja3MgPSBNYXRoLm1pbihzYWNrcywgci50Ml9zYWNrcyB8fCAwKTtcclxuICAgICAgICAgICAgICBpZiAoZWZmZWN0aXZlU2Fja3MgPD0gKHIudDFfc2Fja3MgfHwgMCkpIHJhdGUgPSAoKHIudDFfcmF0ZSB8fCAwKSAqIHNhY2tzKSAvIDI7XHJcbiAgICAgICAgICAgICAgZWxzZSByYXRlID0gKHIudDJfcmF0ZSB8fCAwKSAvIDI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHNhY2tzIDw9IChyLnQxX3NhY2tzIHx8IDApKSByYXRlID0gKHIudDFfcmF0ZSB8fCAwKSAqIHNhY2tzO1xyXG4gICAgICAgICAgICAgIGVsc2UgaWYgKHNhY2tzIDw9IChyLnQyX3NhY2tzIHx8IDApKSByYXRlID0gci50Ml9yYXRlIHx8IDA7XHJcbiAgICAgICAgICAgICAgZWxzZSBpZiAoc2Fja3MgPT09IChyLnQzX3NhY2tzIHx8IDApKSByYXRlID0gci50M19yYXRlIHx8IDA7XHJcbiAgICAgICAgICAgICAgZWxzZSBpZiAoc2Fja3MgPD0gKHIudDRfc2Fja3MgfHwgMCkpIHJhdGUgPSByLnQ0X3JhdGUgfHwgMDtcclxuICAgICAgICAgICAgICBlbHNlIHJhdGUgPSByLnQ1X3JhdGUgfHwgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmF0ZTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29uc3QgcmVzTWl4ZXIgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ibG9jay1taXhlcmApO1xyXG5cclxuICAgICAgICAgIGNvbnN0IG1peGVyUmVjb3JkcyA9IHJlc01peGVyLmRhdGE/LmRhdGEgfHwgW107XHJcblxyXG4gICAgICAgICAgY29uc3Qgc3RhbmRhcmRTcG90cyA9IDM7XHJcbiAgICAgICAgICBsZXQgbXlFYXJuZWQgPSAwO1xyXG5cclxuICAgICAgICAgIC8vIENhbGN1bGF0ZSBkaXJlY3QgbWFjaGluZSBlYXJuaW5ncyBhbmQgcG9wdWxhdGUgbWl4ZXIgcG9vbFxyXG4gICAgICAgICAgcnVucy5mb3JFYWNoKHJ1biA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmtlcnNMaXN0ID0gW1xyXG4gICAgICAgICAgICAgIHsgbmFtZTogcnVuLm9wZXJhdG9yTmFtZSwgaGFsZjogcnVuLmhhbGZEYXlPcGVyYXRvciB8fCBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgIHsgbmFtZTogcnVuLmhlbHBlcjEsIGhhbGY6IHJ1bi5oYWxmRGF5SGVscGVyMSB8fCBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgIHsgbmFtZTogcnVuLmhlbHBlcjIsIGhhbGY6IHJ1bi5oYWxmRGF5SGVscGVyMiB8fCBmYWxzZSB9LFxyXG4gICAgICAgICAgICAgIHsgbmFtZTogcnVuLmhlbHBlcjMsIGhhbGY6IHJ1bi5oYWxmRGF5SGVscGVyMyB8fCBmYWxzZSB9LFxyXG4gICAgICAgICAgICBdLmZpbHRlcih3ID0+IHcubmFtZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYWxjdWxhdGVkVW5pdCA9IGNhbGN1bGF0ZVdvcmtlclNoYXJlKHJ1bi5ibG9ja1R5cGUsIHJ1bi5zYWNrc1VzZWQsIHN0YW5kYXJkU3BvdHMsIGZhbHNlKTtcclxuICAgICAgICAgICAgbGV0IHVuaXRTaGFyZSA9IGNhbGN1bGF0ZWRVbml0O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHJ1bi5sYWJvclBvdCkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHdlaWdodGVkQ3Jld0NvdW50ID0gd29ya2Vyc0xpc3QucmVkdWNlKChzdW0sIHcpID0+IHN1bSArICh3LmhhbGYgPyAwLjUgOiAxKSwgMCk7XHJcbiAgICAgICAgICAgICAgY29uc3Qgb2xkU2NoZW1hRGlmZiA9IE1hdGguYWJzKHJ1bi5sYWJvclBvdCAtICh3ZWlnaHRlZENyZXdDb3VudCArIDEpICogY2FsY3VsYXRlZFVuaXQpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld1NjaGVtYURpZmYgPSBNYXRoLmFicyhydW4ubGFib3JQb3QgLSB3ZWlnaHRlZENyZXdDb3VudCAqIGNhbGN1bGF0ZWRVbml0KTtcclxuICAgICAgICAgICAgICBpZiAobmV3U2NoZW1hRGlmZiA8IG9sZFNjaGVtYURpZmYpIHtcclxuICAgICAgICAgICAgICAgICAgdW5pdFNoYXJlID0gcnVuLmxhYm9yUG90IC8gTWF0aC5tYXgod2VpZ2h0ZWRDcmV3Q291bnQsIDAuNSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdW5pdFNoYXJlID0gcnVuLmxhYm9yUG90IC8gKHdlaWdodGVkQ3Jld0NvdW50ICsgMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBEaXJlY3QgbWFjaGluZSB3b3JrXHJcbiAgICAgICAgICAgIGNvbnN0IG15TWF0Y2ggPSB3b3JrZXJzTGlzdC5maW5kKHcgPT4gbm9ybWFsaXplKHcubmFtZSkgPT09IHRhcmdldE5hbWUpO1xyXG4gICAgICAgICAgICBpZiAobXlNYXRjaCkge1xyXG4gICAgICAgICAgICAgIG15RWFybmVkICs9IG15TWF0Y2guaGFsZiA/IHVuaXRTaGFyZSAvIDIgOiB1bml0U2hhcmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIGFuZCBEaXN0cmlidXRlIE1peGVyIFNoYXJlc1xyXG4gICAgICAgICAgICBjb25zdCBtaXhlckRheXMgPSBbLi4ubmV3IFNldChtaXhlclJlY29yZHMuZmlsdGVyKG0gPT4gaW5SYW5nZShtLmRhdGUpKS5tYXAobSA9PiBtLmRhdGUpKV07XHJcbiAgICAgICAgICAgIGNvbnN0IG1peGVyUmF0ZSA9IGNvbmZpZz8ubWl4ZXJSYXRlUGVyU2FjayAhPT0gdW5kZWZpbmVkID8gY29uZmlnLm1peGVyUmF0ZVBlclNhY2sgOiAzMDA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtaXhlckRheXMuZm9yRWFjaChkYXRlU3RyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVGb3JtYXR0ZWQgPSBwYXJzZURhdGUoZGF0ZVN0cikuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBydW5zT25EYXRlID0gYWxsUnVucy5maWx0ZXIociA9PiBwYXJzZURhdGUoci5kYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKSA9PT0gZGF0ZUZvcm1hdHRlZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbFNhY2tzT25EYXRlID0gcnVuc09uRGF0ZS5yZWR1Y2UoKHN1bSwgcikgPT4gc3VtICsgKHBhcnNlSW50KHIuc2Fja3NVc2VkKSB8fCAwKSwgMCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1peGVyc09uRGF0ZSA9IG1peGVyUmVjb3Jkcy5maWx0ZXIobSA9PiBtLmRhdGUgPT09IGRhdGVTdHIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1peGVyc09uRGF0ZS5sZW5ndGggPT09IDApIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgbWl4ZXJzT25EYXRlLmZvckVhY2godyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHcud29ya2VyTmFtZSAmJiBub3JtYWxpemUody53b3JrZXJOYW1lKSA9PT0gdGFyZ2V0TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlUGF5b3V0ID0gdG90YWxTYWNrc09uRGF0ZSAqIG1peGVyUmF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hhcmUgPSB3LmhhbGZEYXkgPyBiYXNlUGF5b3V0ICogMC41IDogYmFzZVBheW91dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlFYXJuZWQgKz0gc2hhcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGxldCBteURhbWFnZURlZHVjdGlvbiA9IDA7XHJcbiAgICAgICAgICBkYW1hZ2VzLmZvckVhY2goZCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoUnVuID0gYWxsUnVucy5maW5kKHIgPT5cclxuICAgICAgICAgICAgICByLm1hY2hpbmVOby50b1N0cmluZygpLnRyaW0oKSA9PT0gZC5tYWNoaW5lTm8udG9TdHJpbmcoKS50cmltKCkgJiZcclxuICAgICAgICAgICAgICByLmJsb2NrVHlwZS50b1N0cmluZygpLnRyaW0oKS50b1VwcGVyQ2FzZSgpID09PSBkLmJsb2NrVHlwZS50b1N0cmluZygpLnRyaW0oKS50b1VwcGVyQ2FzZSgpICYmXHJcbiAgICAgICAgICAgICAgcGFyc2VEYXRlKHIuZGF0ZSkuaXNTYW1lKHBhcnNlRGF0ZShkLnByb2R1Y3Rpb25EYXRlIHx8IGQuZGF0ZSksICdkYXknKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hSdW4pIHtcclxuICAgICAgICAgICAgICBjb25zdCB3b3JrZXJzID0gW21hdGNoUnVuLm9wZXJhdG9yTmFtZSwgbWF0Y2hSdW4uaGVscGVyMSwgbWF0Y2hSdW4uaGVscGVyMiwgbWF0Y2hSdW4uaGVscGVyM10uZmlsdGVyKG4gPT4gbik7XHJcbiAgICAgICAgICAgICAgaWYgKHdvcmtlcnMubWFwKG4gPT4gbm9ybWFsaXplKG4pKS5pbmNsdWRlcyh0YXJnZXROYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgbXlEYW1hZ2VEZWR1Y3Rpb24gKz0gKChkLmRhbWFnZWRCbG9ja3MgKiAoZC5kYW1hZ2VSYXRlIHx8IDMwMDApKSAvIHdvcmtlcnMubGVuZ3RoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNldEZhY3RvcnlFYXJuZWQobXlFYXJuZWQpO1xyXG4gICAgICAgICAgc2V0RmFjdG9yeURhbWFnZShteURhbWFnZURlZHVjdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldEZhY3RvcnlFYXJuZWQoMCk7XHJcbiAgICAgICAgICBzZXRGYWN0b3J5RGFtYWdlKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0b2FzdC5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZXhwZW5zZXMgb3IgZmFjdG9yeSBkYXRhLicpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hFeHBlbnNlKCk7XHJcbiAgfSwgW21vbnRoLCBlbXBsb3llZU5hbWUsIHdlZWtGcm9tLCB3ZWVrVG8sIGVtcGxveWVlRGVwYXJ0bWVudF0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodG90YWxOZXQpIHtcclxuICAgICAgY29uc3Qgd2hvbGVQYXJ0ID0gTWF0aC5mbG9vcih0b3RhbE5ldClcclxuICAgICAgY29uc3QgZnJhY3Rpb25hbFBhcnQgPSAodG90YWxOZXQgJSAxKS50b0ZpeGVkKDIpLnNwbGl0KCcuJylbMV07XHJcbiAgICAgIGNvbnN0IHdob2xlV29yZHMgPSBudW1iZXJUb1dvcmRzLnRvV29yZHMod2hvbGVQYXJ0KVxyXG4gICAgICBjb25zdCBmcmFjdGlvbmFsV29yZHMgPSBudW1iZXJUb1dvcmRzLnRvV29yZHMoZnJhY3Rpb25hbFBhcnQpXHJcbiAgICAgIHNldFRvdGFsVyhgJHt3aG9sZVdvcmRzfSBhbmQgJHtmcmFjdGlvbmFsV29yZHN9IGNlbnRzYClcclxuICAgIH1cclxuICB9LCBbdG90YWxOZXRdKVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChuZXdWYWx1ZSkgPT4ge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb25zID0gZW1wbG95ZWUuZmluZCgob3B0aW9uKSA9PiBvcHRpb24gPT09IG5ld1ZhbHVlKVxyXG4gICAgc2V0RW1wbG95ZWVOYW1lKHtcclxuICAgICAgaWQ6IHNlbGVjdGVkT3B0aW9ucz8uX2lkLFxyXG4gICAgICBuYW1lOiBzZWxlY3RlZE9wdGlvbnM/LmVtcGxveWVlTmFtZVxyXG4gICAgfSk7XHJcbiAgICBzZXRFbXBsb3llZUlkKHNlbGVjdGVkT3B0aW9ucz8uZW1wbG95ZWVJZClcclxuICAgIHNldEVtcGxveWVlUm9sZShzZWxlY3RlZE9wdGlvbnM/LmVtcGxveWVlUm9sZSlcclxuICAgIHNldEVtcGxveWVlRGVwYXJ0bWVudChzZWxlY3RlZE9wdGlvbnM/LmRlcGFydG1lbnQpXHJcbiAgICBzZXRFbXBsb3llZVBob25lKHNlbGVjdGVkT3B0aW9ucz8uZW1wbG95ZWVQaG9uZSlcclxuICAgIHNldEJhc2ljU2FsYXJ5KHNlbGVjdGVkT3B0aW9ucz8uc2FsYXJ5KVxyXG4gICAgc2V0QmFzaWNUcmFuc3BvcnQoc2VsZWN0ZWRPcHRpb25zLmJhc2ljVHJhbnNwb3J0ICE9PSB1bmRlZmluZWQgPyBzZWxlY3RlZE9wdGlvbnMuYmFzaWNUcmFuc3BvcnQgOiAwKVxyXG4gICAgc2V0Rm9vZEJhc2ljKHNlbGVjdGVkT3B0aW9ucy5mb29kQmFzaWMgIT09IHVuZGVmaW5lZCA/IHNlbGVjdGVkT3B0aW9ucy5mb29kQmFzaWMgOiAwKVxyXG4gICAgc2V0Qm91bmNlQWxsb3dhbmNlcyhzZWxlY3RlZE9wdGlvbnMuYm91bmNlQWxsb3dhbmNlcyAhPT0gdW5kZWZpbmVkID8gc2VsZWN0ZWRPcHRpb25zLmJvdW5jZUFsbG93YW5jZXMgOiAwKVxyXG4gICAgc2V0T3RoZXIoc2VsZWN0ZWRPcHRpb25zLm90aGVyICE9PSB1bmRlZmluZWQgPyBzZWxlY3RlZE9wdGlvbnM/Lm90aGVyIDogMClcclxuICAgIHNldEJhbmtOYW1lKHNlbGVjdGVkT3B0aW9ucz8uYmFua05hbWUpXHJcbiAgICBzZXRCYW5rTm8oc2VsZWN0ZWRPcHRpb25zPy5iYW5rQWNjb3VudE51bWJlcilcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IERheU8gPSAyNjtcclxuICAgIGNvbnN0IExPID0gNDtcclxuICAgIHNldERheXNPcGVuKERheU8pO1xyXG4gICAgc2V0TG9wcyhMTyk7XHJcbiAgfSwgW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhc1JhbmdlID0gd2Vla0Zyb20gJiYgd2Vla1RvO1xyXG4gICAgaWYgKGhhc1JhbmdlIHx8IChlbXBsb3llZURlcGFydG1lbnQgJiYgZW1wbG95ZWVEZXBhcnRtZW50LnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoJ0ZBQ1RPUlknKSkpIHtcclxuICAgICAgc2V0RWFybmluZ1NhbGFyeSgwKTsgLy8gSWdub3JlIGJhc2ljIHdhZ2UgZm9yIGFueW9uZSB3aXRoIGEgcGVyaW9kIHJhbmdlIG9yIGZhY3RvcnkgZGVwdFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZGl2aWRlZFNhbGFyeSA9IGJhc2ljU2FsYXJ5IC8gZGF5c09wZW47XHJcbiAgICAgIGNvbnN0IHRvdGFsRWFybmluZ1NhbGFyeSA9IGlzTmFOKGRheXNXICogZGl2aWRlZFNhbGFyeSkgPyAwIDogcGFyc2VGbG9hdChkYXlzVyAqIGRpdmlkZWRTYWxhcnkpO1xyXG4gICAgICBzZXRFYXJuaW5nU2FsYXJ5KHRvdGFsRWFybmluZ1NhbGFyeSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaXZpZGVkVHJhbnNwb3J0ID0gYmFzaWNUcmFuc3BvcnQgLyBkYXlzT3BlblxyXG4gICAgY29uc3QgdG90YWxFYXJuaW5nVHJhbnNwb3J0ID0gaXNOYU4oZGF5c1cgKiBkaXZpZGVkVHJhbnNwb3J0KSA/IDAgOiBwYXJzZUZsb2F0KGRheXNXICogZGl2aWRlZFRyYW5zcG9ydClcclxuICAgIHNldFRyYW5zcG9ydEVhcm5pbmcodG90YWxFYXJuaW5nVHJhbnNwb3J0KVxyXG4gICAgY29uc3QgZGl2aWRlZEZvb2QgPSBmb29kQmFzaWMgLyBkYXlzT3BlblxyXG4gICAgY29uc3QgdG90YWxFYXJuaW5nRm9vZCA9IGlzTmFOKGRheXNXICogZGl2aWRlZEZvb2QpID8gMCA6IHBhcnNlRmxvYXQoZGF5c1cgKiBkaXZpZGVkRm9vZClcclxuICAgIHNldEZvb2RFYXJuaW5nKHRvdGFsRWFybmluZ0Zvb2QpXHJcbiAgICBjb25zdCBkaXZpZGVkQm91bmNlID0gYm91bmNlQWxsb3dhbmNlcyAvIGRheXNPcGVuXHJcbiAgICBjb25zdCB0b3RhbEVhcm5pbmdCT3VuY2UgPSBpc05hTihkYXlzVyAqIGRpdmlkZWRCb3VuY2UpID8gMCA6IHBhcnNlRmxvYXQoZGF5c1cgKiBkaXZpZGVkQm91bmNlKVxyXG4gICAgc2V0Qm91bmNlQWxsb3dhbmNlc0Vhcm5pbmcodG90YWxFYXJuaW5nQk91bmNlKVxyXG4gICAgY29uc3QgZGl2aWRlZE90aGVyID0gb3RoZXIgLyBkYXlzT3BlblxyXG4gICAgY29uc3QgdG90YWxFYXJuaW5nT3RoZXIgPSBpc05hTihkYXlzVyAqIGRpdmlkZWRPdGhlcikgPyAwIDogcGFyc2VGbG9hdChkYXlzVyAqIGRpdmlkZWRPdGhlcilcclxuICAgIHNldE90aGVyRWFybmluZyh0b3RhbEVhcm5pbmdPdGhlcilcclxuICB9LCBbYmFzaWNTYWxhcnksIGRheXNXLCBiYXNpY1RyYW5zcG9ydCwgZm9vZEJhc2ljLCBib3VuY2VBbGxvd2FuY2VzLCBvdGhlciwgZGF5c09wZW4sIGVtcGxveWVlRGVwYXJ0bWVudF0pXHJcblxyXG4gIGNvbnN0IHRvdGFsQWN0dWFsU2FsYXJ5ID0gcGFyc2VGbG9hdChiYXNpY1NhbGFyeSkgKyBwYXJzZUZsb2F0KGJhc2ljVHJhbnNwb3J0KSArIHBhcnNlRmxvYXQoZm9vZEJhc2ljKSArIHBhcnNlRmxvYXQoYm91bmNlQWxsb3dhbmNlcykgKyBwYXJzZUZsb2F0KG90aGVyKSArIHBhcnNlRmxvYXQoZmFjdG9yeUVhcm5lZCk7XHJcbiAgY29uc3QgdG90YWxBY3R1YWxFYXJuaW5nID0gcGFyc2VGbG9hdChlYXJuaW5nU2FsYXJ5KSArIHBhcnNlRmxvYXQodHJhbnNwb3J0RWFybmluZykgKyBwYXJzZUZsb2F0KGZvb2RFYXJuaW5nKSArIHBhcnNlRmxvYXQoYm91bmNlQWxsb3dhbmNlc0Vhcm5pbmcpICsgcGFyc2VGbG9hdChvdGhlckVhcm5pbmcpICsgcGFyc2VGbG9hdChmYWN0b3J5RWFybmVkKTtcclxuICBjb25zdCB0b3RhbEFjdHVhbERlZHVjdGlvbiA9IHBhcnNlRmxvYXQoYWR2YW5jZWRTYWxhcnkpICsgcGFyc2VGbG9hdCh0cmFuc3BvcnREZWR1Y3Rpb24pICsgcGFyc2VGbG9hdChmb29kRGVkdWN0aW9uKSArIHBhcnNlRmxvYXQobG9hbikgKyBwYXJzZUZsb2F0KGl0ZW1Mb3N0KSArIHBhcnNlRmxvYXQoZmFjdG9yeURhbWFnZSk7XHJcbiAgY29uc3QgdG90YWxOZXQgPSB0b3RhbEFjdHVhbEVhcm5pbmcgIT09IDAgPyB0b3RhbEFjdHVhbEVhcm5pbmcgLSB0b3RhbEFjdHVhbERlZHVjdGlvbiA6IDBcclxuICBjb25zdCB0b3RhbFBhaWQgPSB0b3RhbE5ldCArIGJvbnVzICsgdG90YWxBY3R1YWxEZWR1Y3Rpb25cclxuICBjb25zdCB0b3RhbFBhaWREb2xsYXJzID0gcmF0ZSAhPT0gMCA/IE1hdGgubWluKCh0b3RhbE5ldCAvIHJhdGUpICogMTAwKSAvIDEwMCA6IDBcclxuICBsZXQgZGl2aWRlZEFtb3VudFBhaWRGYyA9IHBhcnNlRmxvYXQoYW1vdW50UGF5RkMgLyByYXRlKS50b0ZpeGVkKDIpXHJcbiAgbGV0IHRvdGFsUGFpZFVzZCA9IHBhcnNlRmxvYXQoTnVtYmVyKGFtb3VudFBheVVTRCkgKyBOdW1iZXIoZGl2aWRlZEFtb3VudFBhaWRGYykpLnRvRml4ZWQoMilcclxuICBjb25zdCBDcmVkaXRVU0QgPSBNYXRoLnJvdW5kKCh0b3RhbFBhaWREb2xsYXJzIC0gdG90YWxQYWlkVXNkKSAqIDEwMCkgLyAxMDBcclxuICBjb25zdCBDcmVkaXRGQyA9IHJhdGUgIT09IDAgPyBNYXRoLnJvdW5kKChDcmVkaXRVU0QgKiByYXRlKSAqIDEwMCkgLyAxMDAgOiAwXHJcblxyXG4gIGNvbnN0IGJhc2ljU2FsYXJ5RG9sbGFyID0gaXNOYU4oYmFzaWNTYWxhcnkgLyByYXRlKSA/IDAgOiBwYXJzZUZsb2F0KGJhc2ljU2FsYXJ5IC8gcmF0ZSk7XHJcbiAgY29uc3QgYmFzaWNFYXJuaW5nRG9sbGFyID0gaXNOYU4oZWFybmluZ1NhbGFyeSAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQoZWFybmluZ1NhbGFyeSAvIHJhdGUpO1xyXG4gIGNvbnN0IGJhc2ljQWR2YW5jZWREb2xsYXIgPSBpc05hTihhZHZhbmNlZFNhbGFyeSAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQoYWR2YW5jZWRTYWxhcnkgLyByYXRlKTtcclxuICBjb25zdCBiYXNpY1RyYW5zcG9ydERvbGxhciA9IGlzTmFOKGJhc2ljVHJhbnNwb3J0IC8gcmF0ZSkgPyAwIDogcGFyc2VGbG9hdChiYXNpY1RyYW5zcG9ydCAvIHJhdGUpO1xyXG4gIGNvbnN0IGJhc2ljVHJhbnNwb3J0RWFybmluZ0RvbGxhciA9IGlzTmFOKHRyYW5zcG9ydEVhcm5pbmcgLyByYXRlKSA/IDAgOiBwYXJzZUZsb2F0KHRyYW5zcG9ydEVhcm5pbmcgLyByYXRlKTtcclxuICBjb25zdCBiYXNpY1RyYW5zcG9ydERlZHVjdGlvbkRvbGxhciA9IGlzTmFOKHRyYW5zcG9ydERlZHVjdGlvbiAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQodHJhbnNwb3J0RGVkdWN0aW9uIC8gcmF0ZSk7XHJcbiAgY29uc3QgYmFzaWNGb29kRG9sbGFyID0gaXNOYU4oZm9vZEJhc2ljIC8gcmF0ZSkgPyAwIDogcGFyc2VGbG9hdChmb29kQmFzaWMgLyByYXRlKTtcclxuICBjb25zdCBiYXNpY0Zvb2RFYXJuaW5nRG9sbGFyID0gaXNOYU4oZm9vZEVhcm5pbmcgLyByYXRlKSA/IDAgOiBwYXJzZUZsb2F0KGZvb2RFYXJuaW5nIC8gcmF0ZSk7XHJcbiAgY29uc3QgYmFzaWNGb29kRGVkdWN0aW9uRG9sbGFyID0gaXNOYU4oZm9vZERlZHVjdGlvbiAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQoZm9vZERlZHVjdGlvbiAvIHJhdGUpO1xyXG4gIGNvbnN0IGJhc2ljQm91bmNlRG9sbGFyID0gaXNOYU4oYm91bmNlQWxsb3dhbmNlcyAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQoYm91bmNlQWxsb3dhbmNlcyAvIHJhdGUpO1xyXG4gIGNvbnN0IGJhc2ljQm91bmNlRWFybmluZ0RvbGxhciA9IGlzTmFOKGJvdW5jZUFsbG93YW5jZXNFYXJuaW5nIC8gcmF0ZSkgPyAwIDogcGFyc2VGbG9hdChib3VuY2VBbGxvd2FuY2VzRWFybmluZyAvIHJhdGUpO1xyXG4gIGNvbnN0IGJhc2ljTG9hbkRlZHVjdGlvbkRvbGxhciA9IGlzTmFOKGxvYW4gLyByYXRlKSA/IDAgOiBwYXJzZUZsb2F0KGxvYW4gLyByYXRlKTtcclxuICBjb25zdCBiYXNpY090aGVyRG9sbGFyID0gaXNOYU4ob3RoZXIgLyByYXRlKSA/IDAgOiBwYXJzZUZsb2F0KG90aGVyIC8gcmF0ZSk7XHJcbiAgY29uc3QgYmFzaWNPdGhlckVhcm5pbmdEb2xsYXIgPSBpc05hTihvdGhlckVhcm5pbmcgLyByYXRlKSA/IDAgOiBwYXJzZUZsb2F0KG90aGVyRWFybmluZyAvIHJhdGUpO1xyXG4gIGNvbnN0IGJhc2ljSXRlbURlZHVjdGlvbkRvbGxhciA9IGlzTmFOKGl0ZW1Mb3N0IC8gcmF0ZSkgPyAwIDogcGFyc2VGbG9hdChpdGVtTG9zdCAvIHJhdGUpO1xyXG4gIGNvbnN0IFRvdGFsQmFzaWNEb2xsYXIgPSBpc05hTih0b3RhbEFjdHVhbFNhbGFyeSAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQodG90YWxBY3R1YWxTYWxhcnkgLyByYXRlKTtcclxuICBjb25zdCBUb3RhbEVhcm5pbmdEb2xsYXIgPSBpc05hTih0b3RhbEFjdHVhbEVhcm5pbmcgLyByYXRlKSA/IDAgOiBwYXJzZUZsb2F0KHRvdGFsQWN0dWFsRWFybmluZyAvIHJhdGUpO1xyXG4gIGNvbnN0IFRvdGFsREVkdWN0aW9uRG9sbGFyID0gaXNOYU4odG90YWxBY3R1YWxEZWR1Y3Rpb24gLyByYXRlKSA/IDAgOiBwYXJzZUZsb2F0KHRvdGFsQWN0dWFsRGVkdWN0aW9uIC8gcmF0ZSk7XHJcbiAgY29uc3QgVG90YWxCb251c0RvbGxhciA9IGlzTmFOKGJvbnVzIC8gcmF0ZSkgPyAwIDogcGFyc2VGbG9hdChib251cyAvIHJhdGUpO1xyXG4gIGNvbnN0IFRvdGFsUEFpZERvbGxhciA9IGlzTmFOKHRvdGFsUGFpZCAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQodG90YWxQYWlkIC8gcmF0ZSk7XHJcblxyXG4gIHsvKiogbG9hZGluZyBTdGFydCAqLyB9XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbFVwZGF0ZSwgc2V0TG9hZGluZ09wZW5Nb2RhbFVwZGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWxVcGRhdGUodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9IChtc2cpID0+IHtcclxuICAgIHNldFNlcnZlckVycm9yTXNnKG1zZyB8fCBcIlwiKTtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICBzZXRQYXlOdW1iZXIocHJldiA9PiAocHJldiB8fCAwKSArIDEpOyAvLyBJbmNyZW1lbnQgcGF5IG51bWJlciBmb3IgbmV4dFxyXG4gICAgc2V0UGF5RGF0ZShuZXcgRGF0ZSgpKTtcclxuICAgIHNldEVtcGxveWVlSWQoJycpO1xyXG4gICAgc2V0RGF5c1coMCk7XHJcbiAgICAvLyBzZXREYXlzT3BlbigwKTsgLy8gS2VlcCBkYXlzT3BlbiBhcyBpdCB1c3VhbGx5IHN0YXlzIHRoZSBzYW1lIGZvciB0aGUgbW9udGhcclxuICAgIC8vIHNldExvcHMoMCk7IC8vIEtlZXAgTG9wcyBhcyBpdCB1c3VhbGx5IHN0YXlzIHRoZSBzYW1lIGZvciB0aGUgbW9udGhcclxuICAgIHNldEVtcGxveWVlTmFtZSh7IGlkOiAnJywgbmFtZTogJycgfSk7XHJcbiAgICBzZXRFbXBsb3llZVJvbGUoJycpO1xyXG4gICAgc2V0RW1wbG95ZWVEZXBhcnRtZW50KCcnKTtcclxuICAgIHNldEVtcGxveWVlUGhvbmUoJycpO1xyXG4gICAgc2V0QmFua05hbWUoJycpO1xyXG4gICAgc2V0QmFua05vKCcnKTtcclxuICAgIHNldEJhc2ljU2FsYXJ5KDApO1xyXG4gICAgc2V0RWFybmluZ1NhbGFyeSgwKTtcclxuICAgIHNldEFkdmFuY2VkU2FsYXJ5KDApO1xyXG4gICAgc2V0QmFzaWNUcmFuc3BvcnQoMCk7XHJcbiAgICBzZXRUcmFuc3BvcnRFYXJuaW5nKDApO1xyXG4gICAgc2V0VHJhbnNwb3J0RGVkdWN0aW9uKDApO1xyXG4gICAgc2V0Rm9vZEJhc2ljKDApO1xyXG4gICAgc2V0Rm9vZEVhcm5pbmcoMCk7XHJcbiAgICBzZXRJdGVtTG9zdCgwKTtcclxuICAgIHNldEZvb2REZWR1Y3Rpb24oMCk7XHJcbiAgICBzZXRCb3VuY2VBbGxvd2FuY2VzKDApO1xyXG4gICAgc2V0Qm91bmNlQWxsb3dhbmNlc0Vhcm5pbmcoMCk7XHJcbiAgICBzZXRPdGhlcigwKTtcclxuICAgIHNldE90aGVyRWFybmluZygwKTtcclxuICAgIHNldExvYW4oMCk7XHJcbiAgICBzZXRCb251cygwKTtcclxuICAgIHNldEZhY3RvcnlFYXJuZWQoMCk7XHJcbiAgICBzZXRGYWN0b3J5RGFtYWdlKDApO1xyXG4gICAgc2V0U2F2aW5nKCcnKTtcclxuICAgIC8vIGZldGNoRGF0YSgpOyAvLyBmZXRjaERhdGEgZG9lc24ndCBzZWVtIHRvIGV4aXN0IGluIHRoaXMgc2NvcGUsIHJlbW92ZWRcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsVXBkYXRlKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVjaXNpb24gPSAobmF2aWdhdGUpID0+IHtcclxuICAgIC8vTmF2aWdhdGUgQmFzZWQgb24gdGggRGVjaXNpb25cclxuICAgIGlmIChuYXZpZ2F0ZSA9PT0gJ3ByZXZpb3VzJykge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XHJcbiAgICB9IGVsc2UgaWYgKG5hdmlnYXRlID09PSAnc3RheScpIHtcclxuICAgICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbiAgey8qKiBsb2FkaW5nIEVuZCAqLyB9XHJcbiAgY29uc3QgcmVsYXRlZE1vbnRoID0gKGVtcGxveWVlRGVwYXJ0bWVudCAmJiBlbXBsb3llZURlcGFydG1lbnQudG9VcHBlckNhc2UoKS5pbmNsdWRlcygnRkFDVE9SWScpICYmIHdlZWtGcm9tICYmIHdlZWtUbylcclxuICAgID8gYCR7ZGF5anMod2Vla0Zyb20pLmZvcm1hdCgnREQvTU0vWVknKX0gdG8gJHtkYXlqcyh3ZWVrVG8pLmZvcm1hdCgnREQvTU0vWVknKX1gXHJcbiAgICA6IGRheWpzKG1vbnRoKS5mb3JtYXQoJ01NTU0vWVlZWScpO1xyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jIChSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86IFJlZmVyZW5jZUluZm8sXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBDcmVhdGVkIFBBWVJPTEwgJyxcclxuICAgICAgcmVhc29uOiByZWxhdGVkTW9udGggKyAnIFBheVNsaXAgRm9yICcgKyBlbXBsb3llZU5hbWUubmFtZSArICcgLyBQUi0nICsgU3RyaW5nKFJlZmVyZW5jZUluZm9OdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyksXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRvYXN0LmVycm9yKCdFcnJvciBjcmVhdGluZyBub3RpZmljYXRpb24uJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzYXZpbmcsIHNldFNhdmluZ10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0U2F2aW5nKCd0cnVlJylcclxuICAgIGlmIChlbXBsb3llZURlcGFydG1lbnQgJiYgZW1wbG95ZWVEZXBhcnRtZW50LnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoJ0ZBQ1RPUlknKSkge1xyXG4gICAgICBpZiAoIXdlZWtGcm9tIHx8ICF3ZWVrVG8pIHtcclxuICAgICAgICBhbGVydChcIlBsZWFzZSBzZWxlY3QgdGhlIFdvcmsgUGVyaW9kIChGcm9tL1RvKSBmb3IgdGhpcyBGYWN0b3J5IGVtcGxveWVlLlwiKTtcclxuICAgICAgICBzZXRTYXZpbmcoJycpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2hlY2sgZm9yIG92ZXJsYXBwaW5nIHBlcmlvZHNcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNQYXlyb2xscyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3BheVJvbGxgKTtcclxuICAgICAgICBjb25zdCBleGlzdGluZ1BheXJvbGxzID0gcmVzUGF5cm9sbHMuZGF0YT8uZGF0YT8uZmlsdGVyKHAgPT4gcC5lbXBsb3llZU5hbWUuaWQgPT09IGVtcGxveWVlTmFtZS5pZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0Zyb20gPSBkYXlqcyh3ZWVrRnJvbSk7XHJcbiAgICAgICAgY29uc3QgbmV3VG8gPSBkYXlqcyh3ZWVrVG8pO1xyXG5cclxuICAgICAgICBjb25zdCBvdmVybGFwID0gZXhpc3RpbmdQYXlyb2xscy5maW5kKHAgPT4ge1xyXG4gICAgICAgICAgaWYgKCFwLndlZWtGcm9tIHx8ICFwLndlZWtUbykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgY29uc3QgZXhGcm9tID0gZGF5anMocC53ZWVrRnJvbSk7XHJcbiAgICAgICAgICBjb25zdCBleFRvID0gZGF5anMocC53ZWVrVG8pO1xyXG5cclxuICAgICAgICAgIC8vIE92ZXJsYXAgbG9naWM6IChTdGFydEEgPD0gRW5kQikgYW5kIChFbmRBID49IFN0YXJ0QilcclxuICAgICAgICAgIHJldHVybiAobmV3RnJvbS5pc1NhbWUoZXhUbykgfHwgbmV3RnJvbS5pc0JlZm9yZShleFRvKSkgJiYgXHJcbiAgICAgICAgICAgICAgICAgKG5ld1RvLmlzU2FtZShleEZyb20pIHx8IG5ld1RvLmlzQWZ0ZXIoZXhGcm9tKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChvdmVybGFwKSB7XHJcbiAgICAgICAgICBhbGVydChgVGhpcyBlbXBsb3llZSBoYXMgYWxyZWFkeSBiZWVuIHBhaWQgZm9yIHRoZSBwZXJpb2Q6ICR7ZGF5anMob3ZlcmxhcC53ZWVrRnJvbSkuZm9ybWF0KCdERC9NTS9ZWVlZJyl9IHRvICR7ZGF5anMob3ZlcmxhcC53ZWVrVG8pLmZvcm1hdCgnREQvTU0vWVlZWScpfS4gUGxlYXNlIGNob29zZSBhIGRpZmZlcmVudCByYW5nZS5gKTtcclxuICAgICAgICAgIHNldFNhdmluZygnJyk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB0b2FzdC5lcnJvcignRXJyb3IgY2hlY2tpbmcgZm9yIG92ZXJsYXBwaW5nIHBheXJvbGwgcGVyaW9kcy4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHN0YXR1cyA9ICcnXHJcbiAgICBpZiAocGFyc2VJbnQoYW1vdW50UGF5VVNEKSA9PT0gMCAmJiBwYXJzZUludChhbW91bnRQYXlGQykgPT09IDApIHtcclxuICAgICAgc3RhdHVzID0gJ1VuUGFpZCdcclxuICAgIH0gZWxzZSBpZiAocGFyc2VJbnQoQ3JlZGl0RkMpID09PSAwICYmIHBhcnNlSW50KENyZWRpdFVTRCkgPT09IDApIHtcclxuICAgICAgc3RhdHVzID0gJ1BhaWQnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGF0dXMgPSAnUGFydGlhbGx5LVBhaWQnXHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBfaWQ6IHY0KCksXHJcbiAgICAgIHBheU51bWJlciwgcGF5RGF0ZSwgbW9udGgsIGRheXNXLCBzdGF0dXMsIGRheXNPcGVuLCBMb3BzLCBiYXNpY1NhbGFyeSwgZWFybmluZ1NhbGFyeSwgYWR2YW5jZWRTYWxhcnksIGJhc2ljVHJhbnNwb3J0LCB0cmFuc3BvcnRFYXJuaW5nLCB0cmFuc3BvcnREZWR1Y3Rpb24sIGZvb2RCYXNpYyxcclxuICAgICAgZm9vZEVhcm5pbmcsIGl0ZW1Mb3N0LCBmb29kRGVkdWN0aW9uLCBib3VuY2VBbGxvd2FuY2VzLCBib3VuY2VBbGxvd2FuY2VzRWFybmluZywgb3RoZXIsIG90aGVyRWFybmluZywgbG9hbixcclxuICAgICAgYm9udXMsIHRvdGFsQWN0dWFsU2FsYXJ5LCB0b3RhbEFjdHVhbEVhcm5pbmcsIHRvdGFsQWN0dWFsRGVkdWN0aW9uLCB0b3RhbE5ldCwgdG90YWxQYWlkLCByYXRlLCB0b3RhbFBhaWREb2xsYXJzLCB3b3JkcyxcclxuICAgICAgZW1wbG95ZWVOYW1lLCBhbW91bnRQYXlVU0QsIGFtb3VudFBheUZDLCBDcmVkaXRGQywgQ3JlZGl0VVNELCBzeW5jZWQ6IGZhbHNlLFxyXG4gICAgICAvLyBNZXRhZGF0YVxyXG4gICAgICBmYWN0b3J5RWFybmVkLCBmYWN0b3J5RGFtYWdlLFxyXG4gICAgICB3ZWVrRnJvbTogd2Vla0Zyb20gJiYgZGF5anMod2Vla0Zyb20pLmlzVmFsaWQoKSA/IGRheWpzKHdlZWtGcm9tKS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6IG51bGwsXHJcbiAgICAgIHdlZWtUbzogd2Vla1RvICYmIGRheWpzKHdlZWtUbykuaXNWYWxpZCgpID8gZGF5anMod2Vla1RvKS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6IG51bGxcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZpbmFsTW9udGggPSBlbXBsb3llZURlcGFydG1lbnQgJiYgZW1wbG95ZWVEZXBhcnRtZW50LnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoJ0ZBQ1RPUlknKSAmJiB3ZWVrRnJvbSBcclxuICAgICAgICA/IGRheWpzKHdlZWtGcm9tKS50b0lTT1N0cmluZygpIFxyXG4gICAgICAgIDogbW9udGg7XHJcbiAgICAgICAgXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtcGF5Um9sbGAsIHtcclxuICAgICAgICBwYXlOdW1iZXIsIHBheURhdGUsIG1vbnRoOiBmaW5hbE1vbnRoLCBkYXlzVywgc3RhdHVzLCBkYXlzT3BlbiwgTG9wcywgYmFzaWNTYWxhcnksIGVhcm5pbmdTYWxhcnksIGFkdmFuY2VkU2FsYXJ5LCBiYXNpY1RyYW5zcG9ydCwgdHJhbnNwb3J0RWFybmluZywgdHJhbnNwb3J0RGVkdWN0aW9uLCBmb29kQmFzaWMsXHJcbiAgICAgICAgZm9vZEVhcm5pbmcsIGl0ZW1Mb3N0LCBmb29kRGVkdWN0aW9uLCBib3VuY2VBbGxvd2FuY2VzLCBib3VuY2VBbGxvd2FuY2VzRWFybmluZywgb3RoZXIsIG90aGVyRWFybmluZywgbG9hbixcclxuICAgICAgICBib251cywgdG90YWxBY3R1YWxTYWxhcnksIHRvdGFsQWN0dWFsRWFybmluZywgdG90YWxBY3R1YWxEZWR1Y3Rpb24sIHRvdGFsTmV0LCB0b3RhbFBhaWQsIHJhdGUsIHRvdGFsUGFpZERvbGxhcnMsIHdvcmRzLFxyXG4gICAgICAgIGVtcGxveWVlTmFtZSwgYW1vdW50UGF5VVNELCBhbW91bnRQYXlGQywgQ3JlZGl0RkMsIENyZWRpdFVTRCxcclxuICAgICAgICBlbXBsb3llZURlcGFydG1lbnQsIC8vIEV4cGxpY2l0bHkgc2VuZCBkZXBhcnRtZW50IGZvciBzZXJ2ZXIgbG9naWNcclxuICAgICAgICAvLyBGQUNUT1JZIE1FVEFEQVRBXHJcbiAgICAgICAgZmFjdG9yeUVhcm5lZCwgZmFjdG9yeURhbWFnZSxcclxuICAgICAgICB3ZWVrRnJvbTogd2Vla0Zyb20gJiYgZGF5anMod2Vla0Zyb20pLmlzVmFsaWQoKSA/IGRheWpzKHdlZWtGcm9tKS5mb3JtYXQoJ1lZWVktTU0tREQnKSA6IG51bGwsXHJcbiAgICAgICAgd2Vla1RvOiB3ZWVrVG8gJiYgZGF5anMod2Vla1RvKS5pc1ZhbGlkKCkgPyBkYXlqcyh3ZWVrVG8pLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogbnVsbFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIC8vIE9wZW4gTG9hZGluZyBWaWV3XHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mbyA9IHJlcy5kYXRhLmRhdGEuX2lkXHJcbiAgICAgICAgY29uc3QgUmVmZXJlbmNlSW5mb051bWJlciA9IHJlcy5kYXRhLmRhdGEucGF5TnVtYmVyXHJcbiAgICAgICAgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9OdW1iZXIpXHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBzZXRTYXZpbmcoJycpO1xyXG4gICAgICAgIGNvbnN0IG1zZyA9IGVycm9yLnJlc3BvbnNlICYmIGVycm9yLnJlc3BvbnNlLmRhdGEgJiYgZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlIFxyXG4gICAgICAgICAgPyBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UgXHJcbiAgICAgICAgICA6IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgaGFuZGxlRXJyb3IobXNnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTWFrZSBuZXcgUGF5bWVudFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW5CYWNrfT5cclxuICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlQWRtaW5WaWV3IG5hbWU9e3VzZXIuZGF0YS51c2VyTmFtZX0gcm9sZT17dXNlci5kYXRhLnJvbGV9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT57dXNlci5kYXRhLnVzZXJOYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNpZGVCYXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2lkZUJhcihmYWxzZSl9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaEUzIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiA0IH19ID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9IGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdwYXlEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhwYXlEYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldFBheURhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbW9udGgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J01vbnRoIG9mIFBheW1lbnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKG1vbnRoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3cz17Wydtb250aCcsICd5ZWFyJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRNb250aChkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtlbXBsb3llZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24uZW1wbG95ZWVOYW1lIHx8IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZWUuZmluZChlID0+IGUuX2lkID09PSBlbXBsb3llZU5hbWUuaWQpIHx8IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9PntvcHRpb24uZW1wbG95ZWVOYW1lfTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSBsYWJlbD1cIkVtcGxveWVlIE5hbWVcIiByZXF1aXJlZCAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3VmFsdWUpID0+IGhhbmRsZUNoYW5nZShuZXdWYWx1ZSA/IG5ld1ZhbHVlIDogJycpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiAtLS0gRkFDVE9SWSBXRUVLTFkgREFURSBSQU5HRSAtLS0gKi99XHJcbiAgICAgICAgICAgICAgICAgIHtlbXBsb3llZURlcGFydG1lbnQgJiYgZW1wbG95ZWVEZXBhcnRtZW50LnRvVXBwZXJDYXNlKCkuaW5jbHVkZXMoJ0ZBQ1RPUlknKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGF5IFBlcmlvZCDigJQgRnJvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d2Vla0Zyb20gPyBkYXlqcyh3ZWVrRnJvbSkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXdWYWx1ZSkgPT4gc2V0V2Vla0Zyb20obmV3VmFsdWUgJiYgbmV3VmFsdWUuaXNWYWxpZCgpID8gbmV3VmFsdWUuZm9ybWF0KCdZWVlZLU1NLUREJykgOiBudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cIkREL01NL1lZWVlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWVsZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0OiBcIlN0YXJ0IGRhdGUgb2YgdGhpcyBmYWN0b3J5IHBheSB3ZWVrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXkgUGVyaW9kIOKAlCBUb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d2Vla1RvID8gZGF5anMod2Vla1RvKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KG5ld1ZhbHVlKSA9PiBzZXRXZWVrVG8obmV3VmFsdWUgJiYgbmV3VmFsdWUuaXNWYWxpZCgpID8gbmV3VmFsdWUuZm9ybWF0KCdZWVlZLU1NLUREJykgOiBudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cIkREL01NL1lZWVlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRGaWVsZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0OiBcIkVuZCBkYXRlIG9mIHRoaXMgZmFjdG9yeSBwYXkgd2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzZWNvbmRUYWJsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMjBweCcsIG1hcmdpbkJvdHRvbTogJzBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPXs1fSBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMzE2RkY2JywgY29sb3I6ICd3aGl0ZScgfX0+R2xvYmFsIEdhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGNvbFNwYW49ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3dlZWtGcm9tICYmIHdlZWtUb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGBTYWxhcnkgU2xpcCBmb3IgUGVyaW9kOiAke2RheWpzKHdlZWtGcm9tKS5mb3JtYXQoJ0REL01NL1lZWVknKX0gdG8gJHtkYXlqcyh3ZWVrVG8pLmZvcm1hdCgnREQvTU0vWVlZWScpfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgU2FsYXJ5IFNsaXAgZm9yIHRoZSBtb250aCBPZjogJHtkYXlqcyhtb250aCkuZm9ybWF0KCdNTU1NLVlZWVknKX1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5FbXBsb3llZSBOYW1lPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT57ZW1wbG95ZWVOYW1lLm5hbWUgPyBlbXBsb3llZU5hbWUubmFtZSA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+VG90YWwgRGF5czwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nZGF5c09wZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2RheXNPcGVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5c09wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGF5c09wZW4oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5FbXBsb3llZSBEZXRhaWxzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT57ZW1wbG95ZWVQaG9uZSA/IGVtcGxveWVlUGhvbmUgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PkxPUHM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J0xvcHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J0xvcHMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtMb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldExvcHMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5FbXBsb3llZSBJZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+e2VtcGxveWVlSWQgPyBlbXBsb3llZUlkIDogJyd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5QYWlkIERheXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J2RheXNXJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkYXlzVydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheXNXICE9PSAwID8gZGF5c1cgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREYXlzVyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PkdyYWRlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT57ZW1wbG95ZWVSb2xlID8gZW1wbG95ZWVSb2xlIDogJyd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5CYW5rIE5hbWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PntiYW5rTmFtZSAhPT0gdW5kZWZpbmVkID8gYmFua05hbWUgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+RGF0ZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+e2RheWpzKHBheURhdGUpLmZvcm1hdCgnREQtTU1NTS1ZWVlZJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5BL0MgTm8uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT57YmFua05vICE9PSB1bmRlZmluZWQgPyBiYW5rTm8gOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnNDAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+RGVwYXJ0bWVudDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnNDAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17M30+e2VtcGxveWVlRGVwYXJ0bWVudCA/IGVtcGxveWVlRGVwYXJ0bWVudCA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PkVhcm5pbmcgKEZDKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PkFjdHVhbCBTYWxhcnkgKEZDKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19PkVhcm5pbmdzIChGQyk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmN2ZlJyB9fSBjb2xTcGFuPXsyfT5EZWR1Y3Rpb25zIChGQyk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5CYXNpYyB3YWdlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GQyB7YmFzaWNTYWxhcnkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiQge2Jhc2ljU2FsYXJ5RG9sbGFyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GQyB7ZWFybmluZ1NhbGFyeSA/IGVhcm5pbmdTYWxhcnkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4kIHtiYXNpY0Vhcm5pbmdEb2xsYXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5JbiBhZHZhbmNlZCBhbGxvd2FuY2VzIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RkMge2FkdmFuY2VkU2FsYXJ5ICE9PSB1bmRlZmluZWQgPyBhZHZhbmNlZFNhbGFyeS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiQge2Jhc2ljQWR2YW5jZWREb2xsYXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19PlRyYW5zcG9ydCBhbGxvd2FuY2VzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GQyB7YmFzaWNUcmFuc3BvcnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiQge2Jhc2ljVHJhbnNwb3J0RG9sbGFyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GQyB7dHJhbnNwb3J0RWFybmluZy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JCB7YmFzaWNUcmFuc3BvcnRFYXJuaW5nRG9sbGFyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+VHJhbnNwb3J0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GQyB7dHJhbnNwb3J0RGVkdWN0aW9uICE9PSB1bmRlZmluZWQgPyB0cmFuc3BvcnREZWR1Y3Rpb24udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4kIHtiYXNpY1RyYW5zcG9ydERlZHVjdGlvbkRvbGxhci50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+Rm9vZCBhbGxvd2FuY2VzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GQyB7Zm9vZEJhc2ljLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4kIHtiYXNpY0Zvb2REb2xsYXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZDIHtmb29kRWFybmluZy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JCB7YmFzaWNGb29kRWFybmluZ0RvbGxhci50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19PkZvb2Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZDIHtmb29kRGVkdWN0aW9uICE9PSB1bmRlZmluZWQgPyBmb29kRGVkdWN0aW9uLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JCB7YmFzaWNGb29kRGVkdWN0aW9uRG9sbGFyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5Cb3VuY2UgYWxsb3dhbmNlcyAzJTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RkMge2JvdW5jZUFsbG93YW5jZXMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiQge2Jhc2ljQm91bmNlRG9sbGFyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GQyB7Ym91bmNlQWxsb3dhbmNlc0Vhcm5pbmcudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiQge2Jhc2ljQm91bmNlRWFybmluZ0RvbGxhci50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19PkxvYW4gcmVjb3Zlcnk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZDIHtsb2FuICE9PSB1bmRlZmluZWQgPyBsb2FuLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JCB7YmFzaWNMb2FuRGVkdWN0aW9uRG9sbGFyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5PdGhlcjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RkMge290aGVyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4kIHtiYXNpY090aGVyRG9sbGFyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GQyB7b3RoZXJFYXJuaW5nLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4kIHtiYXNpY090aGVyRWFybmluZ0RvbGxhci50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICcxLjInIH19Pkl0ZW0gbG9zdCByZWNvdmVyeSAvIERlZHVjdGlvbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RkMge2l0ZW1Mb3N0ICE9PSB1bmRlZmluZWQgPyBpdGVtTG9zdC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiQge2Jhc2ljSXRlbURlZHVjdGlvbkRvbGxhci50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+RmFjdG9yeSBQb3Q8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZDIHtmYWN0b3J5RWFybmVkLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4kIHsoaXNOYU4oZmFjdG9yeUVhcm5lZCAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQoZmFjdG9yeUVhcm5lZCAvIHJhdGUpKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RkMge2ZhY3RvcnlFYXJuZWQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiQgeyhpc05hTihmYWN0b3J5RWFybmVkIC8gcmF0ZSkgPyAwIDogcGFyc2VGbG9hdChmYWN0b3J5RWFybmVkIC8gcmF0ZSkpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+RGFtYWdlIFBlbmFsdHk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZDIHtmYWN0b3J5RGFtYWdlICE9PSB1bmRlZmluZWQgPyBmYWN0b3J5RGFtYWdlLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JCB7KGlzTmFOKGZhY3RvcnlEYW1hZ2UgLyByYXRlKSA/IDAgOiBwYXJzZUZsb2F0KGZhY3RvcnlEYW1hZ2UgLyByYXRlKSkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJzZWNvbmRUYWJsZVwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMjBweCcsIG1hcmdpbkJvdHRvbTogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19IGNvbFNwYW49ezZ9PlRvdGFsKEZDKTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYm9yZGVyQm90dG9tOiAnbm9uZScgfX0gY29sU3Bhbj17Mn0+PHNwYW4+VG90YWwgQmFzaWM6PC9zcGFuPiA8c3Bhbj4gRmMge3RvdGFsQWN0dWFsU2FsYXJ5LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYm9yZGVyQm90dG9tOiAnbm9uZScgfX0gY29sU3Bhbj17Mn0+PHNwYW4+VG90YWwgRWFybmluZzo8L3NwYW4+IDxzcGFuPiBGYyB7dG90YWxBY3R1YWxFYXJuaW5nLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJvcmRlckJvdHRvbTogJ25vbmUnIH19IGNvbFNwYW49ezJ9PjxzcGFuPlRvdGFsIERlZHVjdGlvbjo8L3NwYW4+IDxzcGFuPiBGYyB7dG90YWxBY3R1YWxEZWR1Y3Rpb24udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4gPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBib3JkZXJUb3A6ICdub25lJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5Ub3RhbCBCYXNpYzo8L3NwYW4+IDxzcGFuPiAkIHtUb3RhbEJhc2ljRG9sbGFyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYm9yZGVyVG9wOiAnbm9uZScgfX0gY29sU3Bhbj17Mn0+PHNwYW4+VG90YWwgRWFybmluZzo8L3NwYW4+IDxzcGFuPiAkIHtUb3RhbEVhcm5pbmdEb2xsYXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4gPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYm9yZGVyVG9wOiAnbm9uZScgfX0gY29sU3Bhbj17Mn0+PHNwYW4+VG90YWwgRGVkdWN0aW9uOjwvc3Bhbj4gPHNwYW4+ICQge1RvdGFsREVkdWN0aW9uRG9sbGFyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+IDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9Pk5ldCBwYXlhYmxlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0gY29sU3Bhbj17NH0+RkMge3RvdGFsTmV0LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0gKCQge3RvdGFsUGFpZERvbGxhcnMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT5Ub3RhbCBEZWR1Y3Rpb248L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezR9PkZDIHt0b3RhbEFjdHVhbERlZHVjdGlvbi50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9ICgkIHtUb3RhbERFZHVjdGlvbkRvbGxhci50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9KTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9Pk92ZXJ0aW1lICYgQm9udXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezR9PkZDIHtib251cy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9ICgkIHtUb3RhbEJvbnVzRG9sbGFyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0pPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+VG90YWwgUGFpZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17NH0+RkMge3RvdGFsUGFpZC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9ICgkIHtUb3RhbFBBaWREb2xsYXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gY29sU3Bhbj17Nn0+VG90YWwgbmV0PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19Pk5ldCBwYXlhYmxlKEZDKTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17MH0+RkMge3RvdGFsTmV0LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PjxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdyYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JhdGUgIT09IDAgPyByYXRlIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUmF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19Pk5ldCBwYXlhYmxlKCQpPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT4kIHt0b3RhbFBhaWREb2xsYXJzLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+QW1vdW50IFBhaWQoRkMpPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXswfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXlpbmcgQW1vdW50IEZDJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnRQYXlGQydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbW91bnRQYXlGQyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ncmF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyYXRlICE9PSAwID8gcmF0ZSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1JhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJhdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5BbW91bnQgUGFpZCgkKTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdhbW91bnRQYXlVU0QnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXlpbmcgQW1vdW50IFVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbW91bnRQYXlVU0QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5DcmVkaXQoRkMpPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXswfT5GQyB7Q3JlZGl0RkMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+PFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3JhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cmF0ZSAhPT0gMCA/IHJhdGUgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdSYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+Q3JlZGl0KCQpPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT4kIHtDcmVkaXRVU0QudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezF9Pk5ldCBXb3JkczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17NH0+e3dvcmRzfSBGcmFuYyBDb25nb2xhaXMuPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2F2aW5nICE9PSAndHJ1ZScgPyA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPiA6IDxwIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXI2JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlNhdmluZy4uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuMX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUJhY2t9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VCYWNrfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3g9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHN4PXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+RG8geW91IHdhbnQgdG8gc3RvcCBjcmVhdGluZyBJbnZvaWNlID8gPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZSA6PC9zcGFuPiA8c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCI+IElmIHlvdSBzdG9wIGNyZWF0aW5nIHdpdGhvdXQgc2F2aW5nLCBhbGwgeW91ciBjaGFuZ2VzIHdpbGwgYmUgbG9zdDwvc3Bhbj48L3A+ICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17KCkgPT4gbmF2aWdhdGUoJy9QYXlSb2xsVmlld0FkbWluJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+WWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5ObzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWNpc2lvbignc3RheScpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQWRkIE5ld1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlY2lzaW9uKCdwcmV2aW91cycpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgR28gQmFja1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17RXJyb3JPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VFcnJvcn1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2FuY2VsSWNvbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+U2F2aW5nIEZhaWxlZDwvaDI+XHJcbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjNjY2JywgbWFyZ2luQm90dG9tOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICB7c2VydmVyRXJyb3JNc2cgfHwgXCJTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIGNoZWNrIHlvdXIgY29ubmVjdGlvbiBhbmQgdHJ5IGFnYWluLlwifVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlRXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgVHJ5IEFnYWluXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQYXlSb2xsRm9ybVZpZXdcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJy4uL2Nzcy9TaWRlYmFyTmV3LnNjc3MnXHJcbmltcG9ydCB7IE91dGxldCwgTmF2TGluaywgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgeyBBY2NvdW50Qm94LCBBbGxJbmNsdXNpdmUsIEhvbWUsIEFzc2lnbm1lbnRJbmQsIFN1cGVydmlzZWRVc2VyQ2lyY2xlLCBDdXJyZW5jeUV4Y2hhbmdlIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBTZXR0aW5nc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5ncyc7XHJcbmltcG9ydCBHcm91cHNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvR3JvdXBzJztcclxuaW1wb3J0IFBheW1lbnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvUGF5bWVudCc7XHJcbmltcG9ydCBEYXNoYm9hcmRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGFzaGJvYXJkJztcclxuaW1wb3J0IENvbnRhY3RzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NvbnRhY3RzJztcclxuaW1wb3J0IHsgTGlzdEl0ZW1CdXR0b24sIExpc3RJdGVtSWNvbiwgTGlzdEl0ZW1UZXh0LCBtYWtlU3R5bGVzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmZ1bmN0aW9uIFNpZGViYXJEYXNoRTMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgIDxDdXJyZW5jeUV4Y2hhbmdlIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUmF0ZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcblxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPEdyb3Vwc0ljb24gLz5cclxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJFbXBsb3llZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPFBheW1lbnRJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUGF5Um9sbFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19PlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgIDxBY2NvdW50Qm94IC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiVXNlciBBY2NvdW50XCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICAgIDxBc3NpZ25tZW50SW5kIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiR3JhbnQgQWNjZXNzXCIgLz5cclxuICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgIDxMaXN0SXRlbUljb24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgICA8Q29udGFjdHNJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHJvZmlsZVwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIHsvKiA8bGkgY2xhc3NOYW1lPSdMaXN0cm93ZGFzaCcgPlxyXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvUm9sZVBlcm1pc3Npb25cIiAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246J25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCB3aWR0aDogJzEwMCUnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzQ1cHgnLCBmbGV4V3JhcDogJ25vd3JhcCcsIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgIGZsZXg6ICd3cmFwJyxjb2xvcjogJ3doaXRlJywgYWxpZ25JdGVtczonY2VudGVyJywgbWFyZ2luTGVmdDonMjBweCcsIGdhcDonMjBweCd9fT5cclxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD0naWNvbjEnPlxyXG4gICAgICAgICAgICAgICAgICAgICA8U3VwZXJ2aXNlZFVzZXJDaXJjbGUvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J3RpdGxlbGlzdCc+IFJvbGVQZXJtaXNzaW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gIDwvbGk+Ki99XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJEYXNoRTMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXJEYXNoRTMiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiQWNjb3VudENpcmNsZUljb24iLCJEZWxldGVJY29uIiwiTWVudUl0ZW0iLCJHcmlkIiwiSWNvbkJ1dHRvbiIsIlBhcGVyIiwiVGV4dEZpZWxkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiVHlwb2dyYXBoeSIsInN0eWxlZCIsIkJveCIsIkF1dG9jb21wbGV0ZSIsIk1vZGFsIiwiQmFja2Ryb3AiLCJUYWJsZUNvbnRhaW5lciIsIk91dGxpbmVkSW5wdXQiLCJJbnB1dEFkb3JubWVudCIsIkRpdmlkZXIiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJDb250YWluZXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJBZGQiLCJBcnJvd1Vwd2FyZE91dGxpbmVkIiwiRHJhZ0luZGljYXRvclJvdW5kZWQiLCJFZGl0IiwiUmVtb3ZlQ2lyY2xlT3V0bGluZSIsIkVORFBPSU5UX1VSTCIsInY0IiwidXNlTmF2aWdhdGUiLCJ0b2FzdCIsIkRlbW9Db250YWluZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXlqcyIsIkRhdGVQaWNrZXIiLCJkYXlqcyIsImlzQmV0d2VlbiIsImN1c3RvbVBhcnNlRm9ybWF0IiwiQXJyb3dCYWNrIiwiZXh0ZW5kIiwicGFyc2VEYXRlIiwiZCIsImZvcm1hdHMiLCJwYXJzZWQiLCJpc1ZhbGlkIiwidW5pcXVlQnlJZCIsImFyciIsInNlZW4iLCJTZXQiLCJmaWx0ZXIiLCJpdCIsImlkIiwiX2lkIiwicGF5TnVtYmVyIiwiY29uY2F0IiwiZXhwZW5zZU51bWJlciIsImlkSW5mbyIsInByb2plY3ROdW1iZXIiLCJpbnZvaWNlTnVtYmVyIiwiZmFjdHVyZU51bWJlciIsInBheW1lbnROdW1iZXIiLCJlbXBsb3llZUlkIiwiZGF0ZSIsIm1hY2hpbmVObyIsImJsb2NrVHlwZSIsIndvcmtlck5hbWUiLCJvcGVyYXRvck5hbWUiLCJoYXMiLCJhZGQiLCJDaGVja0NpcmNsZUljb24iLCJDYW5jZWxJY29uIiwiTG9hZGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvZ291dCIsIkN1c3RvbWVyRm9ybVZpZXcyIiwiQ2xvc2UiLCJJdGVtRm9ybVZpZXcyIiwiSXRlbVVwZGF0ZVZpZXcyIiwibnVtYmVyVG9Xb3JkcyIsIkRyYWdEcm9wQ29udGV4dCIsIkRyYWdnYWJsZSIsIkRyb3BwYWJsZSIsIk1lc3NhZ2VBZG1pblZpZXciLCJOb3RpZmljYXRpb25WSWV3SW5mbyIsIkxpZ2h0VG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiQmxhY2tUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsInN0eWxlMiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjUiLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjYiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJQYXlSb2xsRm9ybVZpZXciLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmNyIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwib3BlbjEiLCJzZXRPcGVuMSIsImhhbmRsZU9wZW5CYWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VCYWNrIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJzZXRQYXlOdW1iZXIiLCJfdXNlU3RhdGU1IiwiRGF0ZSIsIl91c2VTdGF0ZTYiLCJwYXlEYXRlIiwic2V0UGF5RGF0ZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibW9udGgiLCJzZXRNb250aCIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwic2V0RW1wbG95ZWVJZCIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImRheXNXIiwic2V0RGF5c1ciLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwiZGF5c09wZW4iLCJzZXREYXlzT3BlbiIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJMb3BzIiwic2V0TG9wcyIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJlbXBsb3llZSIsInNldEVtcGxveWVlIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsInNldEVtcGxveWVlTmFtZSIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJlbXBsb3llZVJvbGUiLCJzZXRFbXBsb3llZVJvbGUiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwiYmFua05hbWUiLCJzZXRCYW5rTmFtZSIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJiYW5rTm8iLCJzZXRCYW5rTm8iLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwiYmFzaWNTYWxhcnkiLCJzZXRCYXNpY1NhbGFyeSIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJlYXJuaW5nU2FsYXJ5Iiwic2V0RWFybmluZ1NhbGFyeSIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJhZHZhbmNlZFNhbGFyeSIsInNldEFkdmFuY2VkU2FsYXJ5IiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsImJhc2ljVHJhbnNwb3J0Iiwic2V0QmFzaWNUcmFuc3BvcnQiLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwidHJhbnNwb3J0RWFybmluZyIsInNldFRyYW5zcG9ydEVhcm5pbmciLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2IiwidHJhbnNwb3J0RGVkdWN0aW9uIiwic2V0VHJhbnNwb3J0RGVkdWN0aW9uIiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsImZvb2RCYXNpYyIsInNldEZvb2RCYXNpYyIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJmb29kRWFybmluZyIsInNldEZvb2RFYXJuaW5nIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsIml0ZW1Mb3N0Iiwic2V0SXRlbUxvc3QiLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0IiwiZm9vZERlZHVjdGlvbiIsInNldEZvb2REZWR1Y3Rpb24iLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2IiwiYm91bmNlQWxsb3dhbmNlcyIsInNldEJvdW5jZUFsbG93YW5jZXMiLCJfdXNlU3RhdGU0NyIsIl91c2VTdGF0ZTQ4IiwiYm91bmNlQWxsb3dhbmNlc0Vhcm5pbmciLCJzZXRCb3VuY2VBbGxvd2FuY2VzRWFybmluZyIsIl91c2VTdGF0ZTQ5IiwiX3VzZVN0YXRlNTAiLCJvdGhlciIsInNldE90aGVyIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsIm90aGVyRWFybmluZyIsInNldE90aGVyRWFybmluZyIsIl91c2VTdGF0ZTUzIiwiX3VzZVN0YXRlNTQiLCJsb2FuIiwic2V0TG9hbiIsIl91c2VTdGF0ZTU1IiwiX3VzZVN0YXRlNTYiLCJib251cyIsInNldEJvbnVzIiwiX3VzZVN0YXRlNTciLCJfdXNlU3RhdGU1OCIsInJhdGUiLCJzZXRSYXRlIiwiX3VzZVN0YXRlNTkiLCJfdXNlU3RhdGU2MCIsImFtb3VudFBheVVTRCIsInNldEFtb3VudFBheVVTRCIsIl91c2VTdGF0ZTYxIiwiX3VzZVN0YXRlNjIiLCJhbW91bnRQYXlGQyIsInNldEFtb3VudFBheUZDIiwiX3VzZVN0YXRlNjMiLCJfdXNlU3RhdGU2NCIsImVtcGxveWVlRGVwYXJ0bWVudCIsInNldEVtcGxveWVlRGVwYXJ0bWVudCIsIl91c2VTdGF0ZTY1IiwiX3VzZVN0YXRlNjYiLCJlbXBsb3llZVBob25lIiwic2V0RW1wbG95ZWVQaG9uZSIsIl91c2VTdGF0ZTY3IiwiX3VzZVN0YXRlNjgiLCJ3b3JkcyIsInNldFRvdGFsVyIsIl91c2VTdGF0ZTY5IiwiX3VzZVN0YXRlNzAiLCJmYWN0b3J5RWFybmVkIiwic2V0RmFjdG9yeUVhcm5lZCIsIl91c2VTdGF0ZTcxIiwiX3VzZVN0YXRlNzIiLCJmYWN0b3J5RGFtYWdlIiwic2V0RmFjdG9yeURhbWFnZSIsIl91c2VTdGF0ZTczIiwiX3VzZVN0YXRlNzQiLCJ3ZWVrRnJvbSIsInNldFdlZWtGcm9tIiwiX3VzZVN0YXRlNzUiLCJfdXNlU3RhdGU3NiIsIndlZWtUbyIsInNldFdlZWtUbyIsIl91c2VTdGF0ZTc3IiwiX3VzZVN0YXRlNzgiLCJzZXJ2ZXJFcnJvck1zZyIsInNldFNlcnZlckVycm9yTXNnIiwiZmV0Y2hsYXN0TnVtYmVyIiwiX3JlZjgiLCJfcmVzJGRhdGEiLCJfcmVzJGRhdGEyIiwibnVtIiwicGFyc2VJbnQiLCJoYW5kbGVGZXRjaCIsIl9yZWY5IiwiX3Jlc0VtcGxveWVlJGRhdGEiLCJfcmVzUFJhdGUkZGF0YSIsInJlc0VtcGxveWVlIiwicm93Iiwic3RhdHVzIiwicmVzUFJhdGUiLCJtYXAiLCJwYXltZW50UmF0ZSIsImZldGNoRXhwZW5zZSIsIl9yZWYwIiwiX3Jlc0V4cGVuc2UkZGF0YSIsIl9yZXNBdHRlbmRhbmNlJGRhdGEiLCJzZXRMb2FkaW5nIiwiX3lpZWxkJFByb21pc2UkYWxsIiwiUHJvbWlzZSIsImFsbCIsIl95aWVsZCRQcm9taXNlJGFsbDIiLCJyZXNFeHBlbnNlIiwicmVzQXR0ZW5kYW5jZSIsImFsbEV4cGVuc2VzIiwiYWxsQXR0ZW5kYW5jZSIsImlzRmFjdG9yeSIsInRvVXBwZXJDYXNlIiwiaW5jbHVkZXMiLCJmcm9tRCIsInN0YXJ0T2YiLCJ0b0QiLCJlbmRPZiIsImluUmFuZ2UiLCJkYXRlU3RyIiwiaXNTYW1lIiwiaXNBZnRlciIsImlzQmVmb3JlIiwiZm9ybWF0IiwiZ2V0U3VtIiwiY2F0ZWdvcmllcyIsInNlYXJjaFRlcm1zIiwiQXJyYXkiLCJpc0FycmF5IiwiYyIsIl9yb3ckZXhwZW5zZUNhdGVnb3J5IiwiY2F0IiwiZXhwZW5zZUNhdGVnb3J5IiwiZXhwZW5zZXNDYXRlZ29yeSIsIm1hdGNoQ2F0Iiwic29tZSIsInRlcm0iLCJhY2NvdW50TmFtZSIsImV4cGVuc2VEYXRlIiwiZW1wIiwiaXRlbSIsImlkUm93IiwibGVuZ3RoIiwicmVkdWNlIiwiYWNjIiwicyIsInBhcnNlRmxvYXQiLCJhbW91bnQiLCJhdHRBcnJheSIsInRpbWVJbiIsIm5icmVPZkRheSIsIm9ic2VydmF0aW9uIiwic3VtIiwiZGF5c1dOIiwiaXNSYW5nZU1vZGUiLCJfcmVzUnVucyRkYXRhIiwiX3Jlc0RhbWFnZXMkZGF0YSIsIl9yZXNDb25maWckZGF0YSIsIl9yZXNNaXhlciRkYXRhIiwiX3lpZWxkJFByb21pc2UkYWxsMyIsIl95aWVsZCRQcm9taXNlJGFsbDQiLCJyZXNSdW5zIiwicmVzRGFtYWdlcyIsInJlc0NvbmZpZyIsImFsbFJ1bnMiLCJhbGxEYW1hZ2VzIiwiY29uZmlnIiwicmF0ZXMiLCJsYWJvclJhdGVzIiwicmF0ZTUwXzMzIiwicGVyU2FjayIsInJhdGUyMCIsInQxX3NhY2tzIiwidDFfcmF0ZSIsInQyX3NhY2tzIiwidDJfcmF0ZSIsInQzX3NhY2tzIiwidDNfcmF0ZSIsInQ0X3NhY2tzIiwidDRfcmF0ZSIsInQ1X3JhdGUiLCJyYXRlMTUiLCJyYXRlMTBfMTRfMTIiLCJydW5zIiwiciIsImRhbWFnZXMiLCJwcm9kdWN0aW9uRGF0ZSIsIm5vcm1hbGl6ZSIsIm4iLCJ0b1N0cmluZyIsInRyaW0iLCJlbmRzV2l0aCIsInN1YnN0cmluZyIsInJlcGxhY2UiLCJ0YXJnZXROYW1lIiwibmFtZSIsImNhbGN1bGF0ZVdvcmtlclNoYXJlIiwidHlwZVN0ciIsImhhbGYiLCJyNTAiLCJyYXRlMTQiLCJyYXRlMTIiLCJyYXRlMTAiLCJzYWNrcyIsImVmZmVjdGl2ZVNhY2tzIiwiTWF0aCIsIm1pbiIsInJlc01peGVyIiwibWl4ZXJSZWNvcmRzIiwic3RhbmRhcmRTcG90cyIsIm15RWFybmVkIiwiZm9yRWFjaCIsInJ1biIsIndvcmtlcnNMaXN0IiwiaGFsZkRheU9wZXJhdG9yIiwiaGVscGVyMSIsImhhbGZEYXlIZWxwZXIxIiwiaGVscGVyMiIsImhhbGZEYXlIZWxwZXIyIiwiaGVscGVyMyIsImhhbGZEYXlIZWxwZXIzIiwidyIsImNhbGN1bGF0ZWRVbml0Iiwic2Fja3NVc2VkIiwidW5pdFNoYXJlIiwibGFib3JQb3QiLCJ3ZWlnaHRlZENyZXdDb3VudCIsIm9sZFNjaGVtYURpZmYiLCJhYnMiLCJuZXdTY2hlbWFEaWZmIiwibWF4IiwibXlNYXRjaCIsImZpbmQiLCJtaXhlckRheXMiLCJtIiwibWl4ZXJSYXRlIiwibWl4ZXJSYXRlUGVyU2FjayIsInVuZGVmaW5lZCIsImRhdGVGb3JtYXR0ZWQiLCJydW5zT25EYXRlIiwidG90YWxTYWNrc09uRGF0ZSIsIm1peGVyc09uRGF0ZSIsImJhc2VQYXlvdXQiLCJzaGFyZSIsImhhbGZEYXkiLCJteURhbWFnZURlZHVjdGlvbiIsIm1hdGNoUnVuIiwid29ya2VycyIsImRhbWFnZWRCbG9ja3MiLCJkYW1hZ2VSYXRlIiwidG90YWxOZXQiLCJ3aG9sZVBhcnQiLCJmbG9vciIsImZyYWN0aW9uYWxQYXJ0IiwidG9GaXhlZCIsInNwbGl0Iiwid2hvbGVXb3JkcyIsInRvV29yZHMiLCJmcmFjdGlvbmFsV29yZHMiLCJoYW5kbGVDaGFuZ2UiLCJuZXdWYWx1ZSIsInNlbGVjdGVkT3B0aW9ucyIsIm9wdGlvbiIsImRlcGFydG1lbnQiLCJzYWxhcnkiLCJiYW5rQWNjb3VudE51bWJlciIsIkRheU8iLCJMTyIsImhhc1JhbmdlIiwiZGl2aWRlZFNhbGFyeSIsInRvdGFsRWFybmluZ1NhbGFyeSIsImlzTmFOIiwiZGl2aWRlZFRyYW5zcG9ydCIsInRvdGFsRWFybmluZ1RyYW5zcG9ydCIsImRpdmlkZWRGb29kIiwidG90YWxFYXJuaW5nRm9vZCIsImRpdmlkZWRCb3VuY2UiLCJ0b3RhbEVhcm5pbmdCT3VuY2UiLCJkaXZpZGVkT3RoZXIiLCJ0b3RhbEVhcm5pbmdPdGhlciIsInRvdGFsQWN0dWFsU2FsYXJ5IiwidG90YWxBY3R1YWxFYXJuaW5nIiwidG90YWxBY3R1YWxEZWR1Y3Rpb24iLCJ0b3RhbFBhaWQiLCJ0b3RhbFBhaWREb2xsYXJzIiwiZGl2aWRlZEFtb3VudFBhaWRGYyIsInRvdGFsUGFpZFVzZCIsIk51bWJlciIsIkNyZWRpdFVTRCIsInJvdW5kIiwiQ3JlZGl0RkMiLCJiYXNpY1NhbGFyeURvbGxhciIsImJhc2ljRWFybmluZ0RvbGxhciIsImJhc2ljQWR2YW5jZWREb2xsYXIiLCJiYXNpY1RyYW5zcG9ydERvbGxhciIsImJhc2ljVHJhbnNwb3J0RWFybmluZ0RvbGxhciIsImJhc2ljVHJhbnNwb3J0RGVkdWN0aW9uRG9sbGFyIiwiYmFzaWNGb29kRG9sbGFyIiwiYmFzaWNGb29kRWFybmluZ0RvbGxhciIsImJhc2ljRm9vZERlZHVjdGlvbkRvbGxhciIsImJhc2ljQm91bmNlRG9sbGFyIiwiYmFzaWNCb3VuY2VFYXJuaW5nRG9sbGFyIiwiYmFzaWNMb2FuRGVkdWN0aW9uRG9sbGFyIiwiYmFzaWNPdGhlckRvbGxhciIsImJhc2ljT3RoZXJFYXJuaW5nRG9sbGFyIiwiYmFzaWNJdGVtRGVkdWN0aW9uRG9sbGFyIiwiVG90YWxCYXNpY0RvbGxhciIsIlRvdGFsRWFybmluZ0RvbGxhciIsIlRvdGFsREVkdWN0aW9uRG9sbGFyIiwiVG90YWxCb251c0RvbGxhciIsIlRvdGFsUEFpZERvbGxhciIsIl91c2VTdGF0ZTc5IiwiX3VzZVN0YXRlODAiLCJsb2FkaW5nIiwiX3VzZVN0YXRlODEiLCJfdXNlU3RhdGU4MiIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlODMiLCJfdXNlU3RhdGU4NCIsImxvYWRpbmdPcGVuTW9kYWxVcGRhdGUiLCJzZXRMb2FkaW5nT3Blbk1vZGFsVXBkYXRlIiwiX3VzZVN0YXRlODUiLCJfdXNlU3RhdGU4NiIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZU9wZW5VcGRhdGUiLCJoYW5kbGVFcnJvciIsIm1zZyIsImhhbmRsZUNsb3NlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJwcmV2Iiwic2V0U2F2aW5nIiwiaGFuZGxlQ2xvc2VVcGRhdGUiLCJoYW5kbGVDbG9zZUVycm9yIiwiaGFuZGxlRGVjaXNpb24iLCJoaXN0b3J5IiwiYmFjayIsInJlbGF0ZWRNb250aCIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWYxIiwiUmVmZXJlbmNlSW5mbyIsIlJlZmVyZW5jZUluZm9OdW1iZXIiLCJwZXJzb24iLCJyZWFzb24iLCJTdHJpbmciLCJwYWRTdGFydCIsImRhdGVOb3RpZmljYXRpb24iLCJwb3N0IiwiX3giLCJfeDIiLCJfdXNlU3RhdGU4NyIsIl91c2VTdGF0ZTg4Iiwic2F2aW5nIiwiaGFuZGxlU3VibWl0IiwiX3JlZjEwIiwiYWxlcnQiLCJfcmVzUGF5cm9sbHMkZGF0YSIsInJlc1BheXJvbGxzIiwiZXhpc3RpbmdQYXlyb2xscyIsInAiLCJuZXdGcm9tIiwibmV3VG8iLCJvdmVybGFwIiwiZXhGcm9tIiwiZXhUbyIsImVyciIsInN5bmNlZCIsImZpbmFsTW9udGgiLCJ0b0lTT1N0cmluZyIsInJlc3BvbnNlIiwibWVzc2FnZSIsIl94MyIsInN4IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm9uQ2xpY2siLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwicGFkZGluZyIsInhzIiwiZGF0ZUFkYXB0ZXIiLCJjb21wb25lbnRzIiwicmVxdWlyZWQiLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJ2aWV3cyIsImRpc2FibGVDbGVhcmFibGUiLCJvcHRpb25zIiwiZ2V0T3B0aW9uTGFiZWwiLCJyZW5kZXJPcHRpb24iLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsInNpemUiLCJGcmFnbWVudCIsInNsb3RQcm9wcyIsInRleHRGaWVsZCIsImZ1bGxXaWR0aCIsImhlbHBlclRleHQiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXIiLCJjb2xTcGFuIiwidGFyZ2V0IiwibGluZUhlaWdodCIsInRleHRBbGlnbiIsImJvcmRlckJvdHRvbSIsImJvcmRlclRvcCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2xvc2UiLCJ0aXRsZSIsInBsYWNlbWVudCIsImZsb2F0IiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0IiwiZ2FwIiwiT3V0bGV0IiwiTmF2TGluayIsInVzZUxvY2F0aW9uIiwiQWNjb3VudEJveCIsIkFsbEluY2x1c2l2ZSIsIkhvbWUiLCJBc3NpZ25tZW50SW5kIiwiU3VwZXJ2aXNlZFVzZXJDaXJjbGUiLCJDdXJyZW5jeUV4Y2hhbmdlIiwiU2V0dGluZ3NJY29uIiwiR3JvdXBzSWNvbiIsIlBheW1lbnRJY29uIiwiRGFzaGJvYXJkSWNvbiIsIkNvbnRhY3RzSWNvbiIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwibWFrZVN0eWxlcyIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9