"use strict";
exports.id = "src_js_AdminView1_PageView_PayRoll_PayRollUpdateFormView_js";
exports.ids = ["src_js_AdminView1_PageView_PayRoll_PayRollUpdateFormView_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/PayRoll/PayRollUpdateFormView.js"
/*!*********************************************************************!*\
  !*** ./src/js/AdminView1/PageView/PayRoll/PayRollUpdateFormView.js ***!
  \*********************************************************************/
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
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
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RemoveCircleOutline.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/x-date-pickers/LocalizationProvider */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/x-date-pickers/DatePicker */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _CustomerVIew_CustomerFormView2__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../CustomerVIew/CustomerFormView2 */ "./src/js/AdminView1/PageView/CustomerVIew/CustomerFormView2.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _ItemView_ItemFormView2__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../ItemView/ItemFormView2 */ "./src/js/AdminView1/PageView/ItemView/ItemFormView2.js");
/* harmony import */ var _ItemView_ItemUpdateView2__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../ItemView/ItemUpdateView2 */ "./src/js/AdminView1/PageView/ItemView/ItemUpdateView2.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! number-to-words */ "./node_modules/number-to-words/src/index.js");
/* harmony import */ var number_to_words__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(number_to_words__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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
function PayRollUpdateFormView() {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_27__.useParams)(),
    id = _useParams.id;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_27__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_40__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_40__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_41__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_41__.setUser)({
              userName: Name,
              role: Role
            }));
          } catch (error) {
            react_toastify__WEBPACK_IMPORTED_MODULE_28__.toast.error('Error fetching user data.');
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_41__.logOut)());
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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    payDate = _useState6[0],
    setPayDate = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
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
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState70 = _slicedToArray(_useState69, 2),
    reason = _useState70[0],
    setReason = _useState70[1];
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState72 = _slicedToArray(_useState71, 2),
    factoryEarned = _useState72[0],
    setFactoryEarned = _useState72[1];
  var _useState73 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState74 = _slicedToArray(_useState73, 2),
    factoryDamage = _useState74[0],
    setFactoryDamage = _useState74[1];
  var _useState75 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState76 = _slicedToArray(_useState75, 2),
    weekFrom = _useState76[0],
    setWeekFrom = _useState76[1];
  var _useState77 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState78 = _slicedToArray(_useState77, 2),
    weekTo = _useState78[0],
    setWeekTo = _useState78[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var _res$data, _res$data2;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/get-payRoll/").concat(id));
          setPayNumber(Number(((_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 ? void 0 : _res$data.payNumber) || ((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.payNumber) || 0));
          setPayDate(res.data.data.payDate);
          setMonth(res.data.data.month);
          setDaysW(res.data.data.daysW);
          setDaysOpen(res.data.data.daysOpen);
          setLops(res.data.data.Lops);
          setEmployeeName(res.data.data.employeeName);
          setBasicSalary(res.data.data.basicSalary !== undefined ? res.data.data.basicSalary : 0);
          setEarningSalary(res.data.data.earningSalary);
          setAdvancedSalary(res.data.data.advancedSalary);
          setBasicTransport(res.data.data.basicTransport !== undefined ? res.data.data.basicTransport : 0);
          setTransportEarning(res.data.data.transportEarning);
          setTransportDeduction(res.data.data.transportDeduction);
          setFoodBasic(res.data.data.foodBasic !== undefined ? res.data.data.foodBasic : 0);
          setFoodEarning(res.data.data.foodEarning);
          setItemLost(res.data.data.itemLost);
          setFoodDeduction(res.data.data.foodDeduction);
          setBounceAllowances(res.data.data.bounceAllowances !== undefined ? res.data.data.bounceAllowances : 0);
          setBounceAllowancesEarning(res.data.data.bounceAllowancesEarning);
          setOther(res.data.data.other);
          setOtherEarning(res.data.data.otherEarning);
          setLoan(res.data.data.loan);
          setBonus(res.data.data.bonus);
          setRate(res.data.data.rate);
          setAmountPayFC(res.data.data.amountPayFC);
          setAmountPayUSD(res.data.data.amountPayUSD);
          // Load Factory Data
          if (res.data.data.factoryEarned !== undefined) setFactoryEarned(res.data.data.factoryEarned);
          if (res.data.data.factoryDamage !== undefined) setFactoryDamage(res.data.data.factoryDamage);
          if (res.data.data.weekFrom) setWeekFrom(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(res.data.data.weekFrom).format('YYYY-MM-DD'));
          if (res.data.data.weekTo) setWeekTo(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(res.data.data.weekTo).format('YYYY-MM-DD'));
        } catch (error) {
          react_toastify__WEBPACK_IMPORTED_MODULE_28__.toast.error('Error fetching payroll data.');
        }
      });
      return function fetchData() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  // Add Other And Bonus.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handleFetch = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        try {
          var _res$data3, _resPRate$data, _res$data4, _res$data5, _res$data6, _res$data7;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/employee"));
          setEmployee((_res$data3 = res.data) === null || _res$data3 === void 0 || (_res$data3 = _res$data3.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.filter(row => row.status === 'Employed' || row.status === 'Resign'));
          var resPRate = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/paymentRate"));
          (((_resPRate$data = resPRate.data) === null || _resPRate$data === void 0 ? void 0 : _resPRate$data.data) || []).map(row => setRate(row.paymentRate));
          (_res$data4 = res.data) === null || _res$data4 === void 0 || (_res$data4 = _res$data4.data) === null || _res$data4 === void 0 || _res$data4.filter(row => row._id === employeeName.id).map(row => setEmployeeId(row.employeeId));
          (_res$data5 = res.data) === null || _res$data5 === void 0 || (_res$data5 = _res$data5.data) === null || _res$data5 === void 0 || _res$data5.filter(row => row._id === employeeName.id).map(row => setEmployeeRole(row.employeeRole));
          (_res$data6 = res.data) === null || _res$data6 === void 0 || (_res$data6 = _res$data6.data) === null || _res$data6 === void 0 || _res$data6.filter(row => row._id === employeeName.id).map(row => setEmployeeDepartment(row.department));
          (_res$data7 = res.data) === null || _res$data7 === void 0 || (_res$data7 = _res$data7.data) === null || _res$data7 === void 0 || _res$data7.filter(row => row._id === employeeName.id).map(row => setEmployeePhone(row.employeePhone));
        } catch (error) {
          react_toastify__WEBPACK_IMPORTED_MODULE_28__.toast.error('Error fetching employee or rate data.');
        }
      });
      return function handleFetch() {
        return _ref9.apply(this, arguments);
      };
    }();
    handleFetch();
  }, [employeeName]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchExpense = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        setLoading(true);
        try {
          var inRange = dStr => {
            if (!dStr) return false;
            var d = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(dStr);
            if (weekFrom && weekTo) {
              return (d.isSame(weekFrom, 'day') || d.isAfter(weekFrom)) && (d.isSame(weekTo, 'day') || d.isBefore(weekTo));
            }
            return d.format('MM/YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_35___default()(month).format('MM/YYYY');
          };
          var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/expense?summary=true"));
          var allExpenses = res.data.data || [];
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
          setTransportDeduction(getSum(['TRANSPORT']));
          setFoodDeduction(getSum(['FOOD']));
          setAdvancedSalary(getSum(['ADVANCED', 'ACCOMPTE', 'AVANCE']));
          setLoan(getSum(['LOAN', 'PRET']));
          setItemLost(getSum(['ITEM LOST', 'PERDU', 'DEDUCTION']));
          setBonus(getSum(['BONUS']));

          // FACTORY CALCULATIONS
          var isRangeMode = weekFrom && weekTo && weekFrom.isBefore(weekTo.add(1, 'day'));
          if (isRangeMode && employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY')) {
            var _configRes$data, _prodRes$data, _damRes$data, _resMixer$data;
            // Only recalculate if explicitly asked or if data is missing, 
            // but for consistency with FormView, we recalculate here.
            var configRes = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/block-config"));
            var config = (_configRes$data = configRes.data) === null || _configRes$data === void 0 || (_configRes$data = _configRes$data.data) === null || _configRes$data === void 0 ? void 0 : _configRes$data[0];
            var rates = (config === null || config === void 0 ? void 0 : config.laborRates) || {
              rate50_33: {
                perSack: 10000
              },
              rate20: {
                t1_sacks: 6,
                t1_rate: 9000,
                t2_sacks: 7,
                t2_rate: 16500,
                t3_rate: 19000
              },
              rate15: {
                t1_sacks: 5,
                t1_rate: 9000,
                t2_sacks: 6,
                t2_rate: 16500,
                t3_rate: 19000
              },
              rate10_14_12: {
                t1_sacks: 6,
                t1_rate: 9000,
                t2_sacks: 7,
                t2_rate: 17000,
                t3_rate: 19500
              }
            };
            var prodRes = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/block-production"));
            var damRes = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/block-damage"));
            var allRuns = ((_prodRes$data = prodRes.data) === null || _prodRes$data === void 0 ? void 0 : _prodRes$data.data) || [];
            var runs = uniqueById(allRuns).filter(r => inRange(r.date));
            var damages = ((_damRes$data = damRes.data) === null || _damRes$data === void 0 || (_damRes$data = _damRes$data.data) === null || _damRes$data === void 0 ? void 0 : _damRes$data.filter(d => inRange(d.productionDate || d.date))) || [];
            var normalize = n => (n === null || n === void 0 ? void 0 : n.toString().trim().toUpperCase().replace(/\s+/g, ' ')) || '';
            var targetName = normalize(employeeName.name);
            var calculateWorkerShare = (typeStr, s, e, half) => {
              if (typeStr.includes("50") || typeStr.includes("33")) return half ? s * 10000 / 2 : s * 10000 / e;
              var r = typeStr.includes("20") ? rates.rate20 : typeStr.includes("15") ? rates.rate15 : rates.rate10_14_12;
              if (!r) return 0;
              var sacks = parseInt(s) || 0;
              var rate = 0;
              if (half) rate = sacks <= r.t1_sacks ? r.t1_rate * sacks / 2 : r.t2_rate / 2;else {
                if (sacks <= r.t1_sacks) rate = r.t1_rate * sacks;else if (sacks <= r.t2_sacks) rate = r.t2_rate;else rate = r.t3_rate || r.t5_rate || 24500;
              }
              return rate;
            };
            var resMixer = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/block-mixer"));
            var mixerRecords = ((_resMixer$data = resMixer.data) === null || _resMixer$data === void 0 ? void 0 : _resMixer$data.data) || [];
            var standardSpots = 3;
            var earned = 0;

            // Calculate direct machine earnings and populate mixer pool
            runs.forEach(run => {
              var workers = [{
                n: run.operatorName,
                h: run.halfDayOperator
              }, {
                n: run.helper1,
                h: run.halfDayHelper1
              }, {
                n: run.helper2,
                h: run.halfDayHelper2
              }, {
                n: run.helper3,
                h: run.halfDayHelper3
              }].filter(w => w.n);
              var calculatedUnit = calculateWorkerShare(run.blockType, run.sacksUsed, standardSpots, false);
              var unitShare = calculatedUnit;
              if (run.laborPot) {
                var weightedCrewCount = workers.reduce((sum, w) => sum + (w.h ? 0.5 : 1), 0);
                var oldSchemaDiff = Math.abs(run.laborPot - (weightedCrewCount + 1) * calculatedUnit);
                var newSchemaDiff = Math.abs(run.laborPot - weightedCrewCount * calculatedUnit);
                if (newSchemaDiff < oldSchemaDiff) {
                  unitShare = run.laborPot / Math.max(weightedCrewCount, 0.5);
                } else {
                  unitShare = run.laborPot / (weightedCrewCount + 1);
                }
              }
              var me = workers.find(w => normalize(w.n) === targetName);
              if (me) {
                earned += me.h ? unitShare / 2 : unitShare;
              }
            });

            // Calculate and Distribute Mixer Shares
            var mixerDays = [...new Set(mixerRecords.filter(m => inRange(m.date)).map(m => m.date))];
            var mixerRate = (config === null || config === void 0 ? void 0 : config.mixerRatePerSack) !== undefined ? config.mixerRatePerSack : 300;
            mixerDays.forEach(dateStr => {
              var dateFormatted = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(dateStr).format('YYYY-MM-DD');
              var runsOnDate = allRuns.filter(r => dayjs__WEBPACK_IMPORTED_MODULE_35___default()(r.date).format('YYYY-MM-DD') === dateFormatted);
              var totalSacksOnDate = runsOnDate.reduce((sum, r) => sum + (parseInt(r.sacksUsed) || 0), 0);
              var mixersOnDate = mixerRecords.filter(m => m.date === dateStr);
              if (mixersOnDate.length === 0) return;
              mixersOnDate.forEach(w => {
                if (w.workerName && normalize(w.workerName) === targetName) {
                  var basePayout = totalSacksOnDate * mixerRate;
                  var share = w.halfDay ? basePayout * 0.5 : basePayout;
                  earned += share;
                }
              });
            });
            var damage = 0;
            damages.forEach(d => {
              var match = allRuns.find(r => r.machineNo === d.machineNo && r.blockType === d.blockType && dayjs__WEBPACK_IMPORTED_MODULE_35___default()(r.date).isSame(dayjs__WEBPACK_IMPORTED_MODULE_35___default()(d.productionDate || d.date), 'day'));
              if (match) {
                var workers = [match.operatorName, match.helper1, match.helper2, match.helper3].filter(n => n);
                if (workers.map(n => normalize(n)).includes(targetName)) {
                  damage += d.damagedBlocks * (d.damageRate || 3000) / workers.length;
                }
              }
            });
            setFactoryEarned(earned);
            setFactoryDamage(damage);
          }
        } catch (error) {
          react_toastify__WEBPACK_IMPORTED_MODULE_28__.toast.error('Error fetching expense or factory data.');
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
      var wholeWords = number_to_words__WEBPACK_IMPORTED_MODULE_47___default().toWords(wholePart);
      var fractionalWords = number_to_words__WEBPACK_IMPORTED_MODULE_47___default().toWords(fractionalPart);
      setTotalW("".concat(wholeWords, " and ").concat(fractionalWords, " cents"));
    }
  }, [totalNet]);
  var handleClearEmployee = () => {
    setEmployeeName({
      id: "",
      name: ""
    });
  };
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
    var dividedSalary = basicSalary / daysOpen;
    var totalEarningSalary = isNaN(daysW * dividedSalary) ? 0 : parseFloat(daysW * dividedSalary);
    setEarningSalary(totalEarningSalary);
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
  }, [basicSalary, daysW, basicTransport, foodBasic, bounceAllowances, other, daysOpen]);
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
    open2 = _useState80[0],
    setOpen2 = _useState80[1];
  var handleOpenUpdateReason = e => {
    e.preventDefault();
    setOpen2(true);
  };
  var handleCloseUpdateReason = () => {
    setOpen2(false);
  };
  var _useState81 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState82 = _slicedToArray(_useState81, 2),
    loading = _useState82[0],
    setLoading = _useState82[1];
  var _useState83 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState84 = _slicedToArray(_useState83, 2),
    loadingOpenModal = _useState84[0],
    setLoadingOpenModal = _useState84[1];
  var _useState85 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState86 = _slicedToArray(_useState85, 2),
    loadingOpenModalUpdate = _useState86[0],
    setLoadingOpenModalUpdate = _useState86[1];
  var _useState87 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState88 = _slicedToArray(_useState87, 2),
    ErrorOpenModal = _useState88[0],
    setErrorOpenModal = _useState88[1];
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
    navigate(-1);
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
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* () {
      var data = {
        idInfo: id,
        person: user.data.userName + ' Modify PAYROLL ' + ' PR-' + String(payNumber).padStart(6, '0'),
        reason,
        dateNotification: new Date()
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/create-notification/"), data);
        if (res) {
          setReason("");
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleCreateComment() {
      return _ref1.apply(this, arguments);
    };
  }();
  var status = '';
  if (parseInt(amountPayUSD) === 0 && parseInt(amountPayFC) === 0) {
    status = 'UnPaid';
  } else if (parseInt(CreditFC) === 0 && parseInt(CreditUSD) === 0) {
    status = 'Paid';
  } else {
    status = 'Partially-Paid';
  }
  var handleSubmit = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      if (employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY')) {
        if (!weekFrom || !weekTo) {
          alert("Please select the Work Period (From/To) for this Factory employee.");
          return;
        }
      }
      var data = {
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
        updateS: false,
        employeeDepartment,
        // Explicitly send department
        // Metadata
        factoryEarned,
        factoryDamage,
        weekFrom: weekFrom && dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).isValid() ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom).format('YYYY-MM-DD') : null,
        weekTo: weekTo && dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo).isValid() ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo).format('YYYY-MM-DD') : null
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_30__.ENDPOINT_URL, "/update-payRoll/").concat(id), data);
        if (res) {
          // Open Loading View
          handleCreateComment();
          handleOpen();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmit(_x) {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_36__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_49__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_48__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_42__["default"], {
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
    }
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
  })))), employeeDepartment && employeeDepartment.toUpperCase().includes('FACTORY') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_LocalizationProvider__WEBPACK_IMPORTED_MODULE_32__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_33__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_31__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_DatePicker__WEBPACK_IMPORTED_MODULE_34__.DatePicker, {
    label: "Pay Period - FROM",
    value: weekFrom ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekFrom) : null,
    onChange: val => setWeekFrom(val && val.isValid() ? val.format('YYYY-MM-DD') : null),
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
    label: "Pay Period - TO",
    value: weekTo ? dayjs__WEBPACK_IMPORTED_MODULE_35___default()(weekTo) : null,
    onChange: val => setWeekTo(val && val.isValid() ? val.format('YYYY-MM-DD') : null),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 10
  }, employeeName.name !== '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    disabled: true,
    id: "employeeName",
    name: "employeeName",
    label: "Employee Name",
    value: employeeName.name ? employeeName.name : '',
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlackTooltip, {
    title: "Clear",
    placement: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: handleClearEmployee,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    style: {
      color: '#202a5a'
    }
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disableClearable: true,
    options: employee,
    getOptionLabel: option => option.employeeName,
    renderOption: (props, option) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], props, option.employeeName),
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, params, {
      label: "Employee Name",
      required: true
    })),
    onChange: (e, newValue) => handleChange(newValue ? newValue : ''),
    size: "small",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "employeeId",
    name: "employeeId",
    label: "Id",
    value: employeeId !== undefined ? employeeId : '',
    onChange: e => setEmployeeId(e.target.value),
    size: "small",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      border: '1px solid #DDD'
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    size: "small",
    placeholder: "Paying Amount FC",
    name: "amountPayFC",
    value: amountPayFC !== undefined ? amountPayFC : 0,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    size: "small",
    name: "amountPayUSD",
    value: amountPayUSD !== undefined ? amountPayUSD : 0,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_44__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_39__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_37__["default"], {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_39__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_38__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      color: 'red'
    }
  }, "Saving Failed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_44__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PayRollUpdateFormView);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfUGF5Um9sbF9QYXlSb2xsVXBkYXRlRm9ybVZpZXdfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBbUQ7QUFDVTtBQUNyQztBQUNFO0FBQzBCO0FBQ3NCO0FBQ1I7QUFDZDtBQUN5SztBQUM3SjtBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDUTtBQUNBO0FBQ2M7QUFDSTtBQUN6QztBQUN1RjtBQUN0RjtBQUNnQztBQUNuQjtBQUNRO0FBQ0c7QUFFaUI7QUFDYTtBQUNoQjtBQUNKO0FBQ2xDO0FBQzRCO0FBQ1E7QUFDVjtBQUNMO0FBQ1E7QUFDK0I7QUFDdEM7QUFDa0I7QUFDcEI7QUFDUTtBQUNJO0FBQ2Y7QUFDaUM7QUFDdEI7QUFDUTtBQUU5RCxJQUFNMEUsVUFBVSxHQUFJQyxHQUFHLElBQUs7RUFDeEIsSUFBTUMsSUFBSSxHQUFHLElBQUlDLEdBQUcsQ0FBQyxDQUFDO0VBQ3RCLE9BQU9GLEdBQUcsQ0FBQ0csTUFBTSxDQUFDQyxFQUFFLElBQUk7SUFDcEIsSUFBSSxDQUFDQSxFQUFFLEVBQUUsT0FBTyxLQUFLO0lBQ3JCLElBQU1DLEVBQUUsR0FBR0QsRUFBRSxDQUFDRSxHQUFHLElBQUlGLEVBQUUsQ0FBQ0MsRUFBRSxLQUNmRCxFQUFFLENBQUNHLFNBQVMsVUFBQUMsTUFBQSxDQUFVSixFQUFFLENBQUNHLFNBQVMsSUFBSyxJQUFJLENBQUMsS0FDNUNILEVBQUUsQ0FBQ0ssYUFBYSxVQUFBRCxNQUFBLENBQVVKLEVBQUUsQ0FBQ0ssYUFBYSxJQUFLLElBQUksQ0FBQyxLQUNwREwsRUFBRSxDQUFDTSxNQUFNLFVBQUFGLE1BQUEsQ0FBVUosRUFBRSxDQUFDTSxNQUFNLElBQUssSUFBSSxDQUFDLEtBQ3RDTixFQUFFLENBQUNPLGFBQWEsVUFBQUgsTUFBQSxDQUFVSixFQUFFLENBQUNPLGFBQWEsSUFBSyxJQUFJLENBQUMsS0FDcERQLEVBQUUsQ0FBQ1EsYUFBYSxVQUFBSixNQUFBLENBQVVKLEVBQUUsQ0FBQ1EsYUFBYSxJQUFLLElBQUksQ0FBQyxLQUNwRFIsRUFBRSxDQUFDUyxhQUFhLFVBQUFMLE1BQUEsQ0FBVUosRUFBRSxDQUFDUyxhQUFhLElBQUssSUFBSSxDQUFDLEtBQ3BEVCxFQUFFLENBQUNVLGFBQWEsVUFBQU4sTUFBQSxDQUFVSixFQUFFLENBQUNVLGFBQWEsSUFBSyxJQUFJLENBQUMsS0FDcERWLEVBQUUsQ0FBQ1csVUFBVSxVQUFBUCxNQUFBLENBQVVKLEVBQUUsQ0FBQ1csVUFBVSxJQUFLLElBQUksQ0FBQyxPQUFBUCxNQUFBLENBQzNDSixFQUFFLENBQUNZLElBQUksT0FBQVIsTUFBQSxDQUFJSixFQUFFLENBQUNhLFNBQVMsT0FBQVQsTUFBQSxDQUFJSixFQUFFLENBQUNjLFNBQVMsT0FBQVYsTUFBQSxDQUFJSixFQUFFLENBQUNlLFVBQVUsSUFBSWYsRUFBRSxDQUFDZ0IsWUFBWSxJQUFJLEVBQUUsQ0FBRztJQUVsRyxJQUFJbkIsSUFBSSxDQUFDb0IsR0FBRyxDQUFDaEIsRUFBRSxDQUFDLEVBQUUsT0FBTyxLQUFLO0lBQzlCSixJQUFJLENBQUNxQixHQUFHLENBQUNqQixFQUFFLENBQUM7SUFDWixPQUFPLElBQUk7RUFDZixDQUFDLENBQUM7QUFDTixDQUFDO0FBR0QsSUFBTWtCLFlBQVksR0FBR2pGLDBEQUFNLENBQUNrRixJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDaER2RywwREFBQSxDQUFDMEIsOERBQU8sRUFBQStFLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxLQUFBLENBQUxDLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUExQixNQUFBLENBQU94RCw4REFBYyxDQUFDbUYsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsS0FBSztNQUN0QkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFSixLQUFLLENBQUNLLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDM0JDLFFBQVEsRUFBRTtJQUNaO0VBQ0YsQ0FBQztBQUFBLENBQUMsQ0FBQztBQUVILElBQU1DLFlBQVksR0FBR25HLDBEQUFNLENBQUNvRyxLQUFBO0VBQUEsSUFBR2pCLFNBQVMsR0FBQWlCLEtBQUEsQ0FBVGpCLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBZSxLQUFBLEVBQUFDLFVBQUE7RUFBQSxvQkFDaER0SCwwREFBQSxDQUFDMEIsOERBQU8sRUFBQStFLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDbUIsS0FBQTtFQUFBLElBQUdWLEtBQUssR0FBQVUsS0FBQSxDQUFMVixLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBMUIsTUFBQSxDQUFPeEQsOERBQWMsQ0FBQ21GLE9BQU8sSUFBSztNQUNoQ0MsZUFBZSxFQUFFLFNBQVM7TUFDMUJDLEtBQUssRUFBRSxPQUFPO01BQ2RDLFNBQVMsRUFBRUosS0FBSyxDQUFDSyxPQUFPLENBQUMsQ0FBQyxDQUFDO01BQzNCQyxRQUFRLEVBQUU7SUFDWjtFQUNGLENBQUM7QUFBQSxDQUFDLENBQUM7QUFFSCxJQUFNSyxLQUFLLEdBQUc7RUFDWkMsUUFBUSxFQUFFLFVBQVU7RUFDcEJDLEdBQUcsRUFBRSxLQUFLO0VBQ1ZDLElBQUksRUFBRSxLQUFLO0VBQ1hDLFNBQVMsRUFBRSx1QkFBdUI7RUFDbENDLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLE9BQU8sRUFBRSxrQkFBa0I7RUFDM0JiLFNBQVMsRUFBRSxFQUFFO0VBQ2JjLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEVBQUUsRUFBRTtBQUNOLENBQUM7QUFDRCxJQUFNQyxNQUFNLEdBQUc7RUFDYlQsUUFBUSxFQUFFLFVBQVU7RUFDcEJDLEdBQUcsRUFBRSxLQUFLO0VBQ1ZDLElBQUksRUFBRSxLQUFLO0VBQ1hDLFNBQVMsRUFBRSx1QkFBdUI7RUFDbENDLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLE9BQU8sRUFBRSxrQkFBa0I7RUFDM0JiLFNBQVMsRUFBRSxFQUFFO0VBQ2JjLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEVBQUUsRUFBRSxDQUFDO0VBQ0xDLEVBQUUsRUFBRTtBQUNOLENBQUM7QUFDRCxJQUFNRSxXQUFXLEdBQUcsR0FBRztBQUN2QixJQUFNQyxNQUFNLEdBQUduSCwwREFBTSxDQUFDVyw2REFBUyxFQUFFO0VBQy9CeUcsaUJBQWlCLEVBQUdDLElBQUksSUFBS0EsSUFBSSxLQUFLO0FBQ3hDLENBQUMsQ0FBQyxDQUFDQyxLQUFBO0VBQUEsSUFBRzFCLEtBQUssR0FBQTBCLEtBQUEsQ0FBTDFCLEtBQUs7SUFBRTJCLElBQUksR0FBQUQsS0FBQSxDQUFKQyxJQUFJO0VBQUEsT0FBQUMsYUFBQTtJQUNmQyxNQUFNLEVBQUU3QixLQUFLLENBQUM2QixNQUFNLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQy9CQyxVQUFVLEVBQUUvQixLQUFLLENBQUNnQyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBRTtNQUN4REMsTUFBTSxFQUFFbEMsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7TUFDdENDLFFBQVEsRUFBRXBDLEtBQUssQ0FBQ2dDLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDQztJQUN2QyxDQUFDO0VBQUMsR0FDRVYsSUFBSSxJQUFJO0lBQ1ZXLFVBQVUsRUFBRWhCLFdBQVc7SUFDdkJOLEtBQUssaUJBQUExQyxNQUFBLENBQWlCZ0QsV0FBVyxRQUFLO0lBQ3RDUyxVQUFVLEVBQUUvQixLQUFLLENBQUNnQyxXQUFXLENBQUNDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBRTtNQUN4REMsTUFBTSxFQUFFbEMsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7TUFDdENDLFFBQVEsRUFBRXBDLEtBQUssQ0FBQ2dDLFdBQVcsQ0FBQ0ksUUFBUSxDQUFDRztJQUN2QyxDQUFDO0VBQ0gsQ0FBQztBQUFBLENBQ0QsQ0FBQztBQUNILElBQU1DLE1BQU0sR0FBR3BJLDBEQUFNLENBQUNjLDZEQUFTLEVBQUU7RUFBRXNHLGlCQUFpQixFQUFHQyxJQUFJLElBQUtBLElBQUksS0FBSztBQUFPLENBQUMsQ0FBQyxDQUNoRmdCLEtBQUE7RUFBQSxJQUFHekMsS0FBSyxHQUFBeUMsS0FBQSxDQUFMekMsS0FBSztJQUFFMkIsSUFBSSxHQUFBYyxLQUFBLENBQUpkLElBQUk7RUFBQSxPQUFRO0lBQ3BCLG9CQUFvQixFQUFBQyxhQUFBO01BQ2xCaEIsUUFBUSxFQUFFLFVBQVU7TUFDcEI4QixVQUFVLEVBQUUsUUFBUTtNQUNwQjFCLEtBQUssRUFBRU0sV0FBVztNQUNsQlMsVUFBVSxFQUFFL0IsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDQyxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQzVDQyxNQUFNLEVBQUVsQyxLQUFLLENBQUNnQyxXQUFXLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztRQUN0Q0MsUUFBUSxFQUFFcEMsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDSSxRQUFRLENBQUNHO01BQ3ZDLENBQUMsQ0FBQztNQUNGSSxTQUFTLEVBQUU7SUFBWSxHQUNuQixDQUFDaEIsSUFBSSxJQUFJO01BQ1hpQixTQUFTLEVBQUUsUUFBUTtNQUNuQmIsVUFBVSxFQUFFL0IsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDQyxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQzVDQyxNQUFNLEVBQUVsQyxLQUFLLENBQUNnQyxXQUFXLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztRQUN0Q0MsUUFBUSxFQUFFcEMsS0FBSyxDQUFDZ0MsV0FBVyxDQUFDSSxRQUFRLENBQUNDO01BQ3ZDLENBQUMsQ0FBQztNQUNGckIsS0FBSyxFQUFFaEIsS0FBSyxDQUFDNkMsT0FBTyxDQUFDLENBQUMsQ0FBQztNQUN2QixDQUFDN0MsS0FBSyxDQUFDOEMsV0FBVyxDQUFDQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUc7UUFDNUIvQixLQUFLLEVBQUVoQixLQUFLLENBQUM2QyxPQUFPLENBQUMsQ0FBQztNQUN4QjtJQUNGLENBQUM7RUFFTCxDQUFDO0FBQUEsQ0FDSCxDQUFDO0FBQ0QsU0FBU0cscUJBQXFCQSxDQUFBLEVBQUc7RUFDL0IsSUFBQUMsVUFBQSxHQUFlaEgsNERBQVMsQ0FBQyxDQUFDO0lBQWxCa0MsRUFBRSxHQUFBOEUsVUFBQSxDQUFGOUUsRUFBRTtFQUNWLElBQU0rRSxRQUFRLEdBQUdsSCw4REFBVyxDQUFDLENBQUM7RUFDOUIsSUFBTW1ILFFBQVEsR0FBR3RHLHlEQUFXLENBQUMsQ0FBQztFQUM5QixJQUFNdUcsSUFBSSxHQUFHdEcseURBQVcsQ0FBQ0Usd0VBQWlCLENBQUM7RUFFM0M1RCxnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFNaUssWUFBWSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDakQsSUFBTUMsU0FBUztNQUFBLElBQUFDLEtBQUEsR0FBQUMsaUJBQUEsQ0FBRyxhQUFZO1FBQzVCLElBQUlMLFlBQVksRUFBRTtVQUNoQixJQUFJO1lBQ0YsSUFBTU0sR0FBRyxTQUFTbEksOENBQUssQ0FBQ21JLEdBQUcsSUFBQXRGLE1BQUEsQ0FBSW5DLHFEQUFZLHdCQUFBbUMsTUFBQSxDQUFxQitFLFlBQVksQ0FBRSxDQUFDO1lBQy9FLElBQU1RLElBQUksR0FBR0YsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsWUFBWTtZQUN2QyxJQUFNQyxJQUFJLEdBQUdMLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNHLElBQUk7WUFDL0JkLFFBQVEsQ0FBQ2xHLGtFQUFPLENBQUM7Y0FBRWlILFFBQVEsRUFBRUwsSUFBSTtjQUFFSSxJQUFJLEVBQUVEO1lBQUssQ0FBQyxDQUFDLENBQUM7VUFDbkQsQ0FBQyxDQUFDLE9BQU9HLEtBQUssRUFBRTtZQUNkakksa0RBQUssQ0FBQ2lJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztVQUMxQztRQUNGLENBQUMsTUFBTTtVQUNMakIsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNmO01BQ0YsQ0FBQztNQUFBLGdCQWJLTSxTQUFTQSxDQUFBO1FBQUEsT0FBQUMsS0FBQSxDQUFBVyxLQUFBLE9BQUFDLFNBQUE7TUFBQTtJQUFBLEdBYWQ7SUFDRGIsU0FBUyxDQUFDLENBQUM7RUFDYixDQUFDLEVBQUUsQ0FBQ0wsUUFBUSxDQUFDLENBQUM7RUFFZCxJQUFNbUIsWUFBWSxHQUFHQSxDQUFBLEtBQU07SUFDekJoQixZQUFZLENBQUNpQixVQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CcEIsUUFBUSxDQUFDcEcsaUVBQU0sQ0FBQyxDQUFDLENBQUM7SUFDbEJtRyxRQUFRLENBQUMsR0FBRyxDQUFDO0VBQ2YsQ0FBQztFQUNELElBQUFzQixlQUFBLEdBQThCckwscURBQWMsQ0FBQyxJQUFJLENBQUM7SUFBQXNMLGdCQUFBLEdBQUFDLGNBQUEsQ0FBQUYsZUFBQTtJQUEzQ0csT0FBTyxHQUFBRixnQkFBQTtJQUFFRyxVQUFVLEdBQUFILGdCQUFBO0VBQzFCLElBQU1JLFlBQVksR0FBR0EsQ0FBQSxLQUFNO0lBQ3pCRCxVQUFVLENBQUMsQ0FBQ0QsT0FBTyxDQUFDO0VBQ3RCLENBQUM7RUFDRCxJQUFBRyxTQUFBLEdBQTBCekwsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTBMLFVBQUEsR0FBQUwsY0FBQSxDQUFBSSxTQUFBO0lBQWxDRSxLQUFLLEdBQUFELFVBQUE7SUFBRUUsUUFBUSxHQUFBRixVQUFBO0VBRXRCLElBQU1HLGNBQWMsR0FBSUMsQ0FBQyxJQUFLO0lBQzVCQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ2xCSCxRQUFRLENBQUMsSUFBSSxDQUFDO0VBQ2hCLENBQUM7RUFDRCxJQUFNSSxlQUFlLEdBQUdBLENBQUEsS0FBTTtJQUM1QkosUUFBUSxDQUFDLEtBQUssQ0FBQztFQUNqQixDQUFDO0VBQ0QsSUFBQUssVUFBQSxHQUFrQ2pNLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFrTSxVQUFBLEdBQUFiLGNBQUEsQ0FBQVksVUFBQTtJQUF0Q2pILFNBQVMsR0FBQWtILFVBQUE7SUFBRUMsWUFBWSxHQUFBRCxVQUFBO0VBQzlCLElBQUFFLFVBQUEsR0FBOEJwTSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBcU0sVUFBQSxHQUFBaEIsY0FBQSxDQUFBZSxVQUFBO0lBQW5DRSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBQzFCLElBQUFHLFVBQUEsR0FBMEJ4TSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBeU0sVUFBQSxHQUFBcEIsY0FBQSxDQUFBbUIsVUFBQTtJQUEvQkUsS0FBSyxHQUFBRCxVQUFBO0lBQUVFLFFBQVEsR0FBQUYsVUFBQTtFQUN0QixJQUFBRyxVQUFBLEdBQW9DNU0sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTZNLFVBQUEsR0FBQXhCLGNBQUEsQ0FBQXVCLFVBQUE7SUFBekNwSCxVQUFVLEdBQUFxSCxVQUFBO0lBQUVDLGFBQWEsR0FBQUQsVUFBQTtFQUNoQyxJQUFBRSxVQUFBLEdBQTBCL00sK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQWdOLFdBQUEsR0FBQTNCLGNBQUEsQ0FBQTBCLFVBQUE7SUFBOUJFLEtBQUssR0FBQUQsV0FBQTtJQUFFRSxRQUFRLEdBQUFGLFdBQUE7RUFDdEIsSUFBQUcsV0FBQSxHQUFnQ25OLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFvTixXQUFBLEdBQUEvQixjQUFBLENBQUE4QixXQUFBO0lBQXBDRSxRQUFRLEdBQUFELFdBQUE7SUFBRUUsV0FBVyxHQUFBRixXQUFBO0VBQzVCLElBQUFHLFdBQUEsR0FBd0J2TiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBd04sV0FBQSxHQUFBbkMsY0FBQSxDQUFBa0MsV0FBQTtJQUE1QkUsSUFBSSxHQUFBRCxXQUFBO0lBQUVFLE9BQU8sR0FBQUYsV0FBQTtFQUNwQixJQUFBRyxXQUFBLEdBQWdDM04sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQTROLFdBQUEsR0FBQXZDLGNBQUEsQ0FBQXNDLFdBQUE7SUFBckNFLFFBQVEsR0FBQUQsV0FBQTtJQUFFRSxXQUFXLEdBQUFGLFdBQUE7RUFDNUIsSUFBQUcsV0FBQSxHQUF3Qy9OLCtDQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQWdPLFdBQUEsR0FBQTNDLGNBQUEsQ0FBQTBDLFdBQUE7SUFBN0NyRCxZQUFZLEdBQUFzRCxXQUFBO0lBQUVDLGVBQWUsR0FBQUQsV0FBQTtFQUNwQyxJQUFBRSxXQUFBLEdBQXdDbE8sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQW1PLFdBQUEsR0FBQTlDLGNBQUEsQ0FBQTZDLFdBQUE7SUFBN0NFLFlBQVksR0FBQUQsV0FBQTtJQUFFRSxlQUFlLEdBQUFGLFdBQUE7RUFDcEMsSUFBQUcsV0FBQSxHQUFnQ3RPLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUF1TyxXQUFBLEdBQUFsRCxjQUFBLENBQUFpRCxXQUFBO0lBQXJDRSxRQUFRLEdBQUFELFdBQUE7SUFBRUUsV0FBVyxHQUFBRixXQUFBO0VBQzVCLElBQUFHLFdBQUEsR0FBNEIxTywrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBMk8sV0FBQSxHQUFBdEQsY0FBQSxDQUFBcUQsV0FBQTtJQUFqQ0UsTUFBTSxHQUFBRCxXQUFBO0lBQUVFLFNBQVMsR0FBQUYsV0FBQTtFQUN4QixJQUFBRyxXQUFBLEdBQXNDOU8sK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQStPLFdBQUEsR0FBQTFELGNBQUEsQ0FBQXlELFdBQUE7SUFBMUNFLFdBQVcsR0FBQUQsV0FBQTtJQUFFRSxjQUFjLEdBQUFGLFdBQUE7RUFDbEMsSUFBQUcsV0FBQSxHQUEwQ2xQLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFtUCxXQUFBLEdBQUE5RCxjQUFBLENBQUE2RCxXQUFBO0lBQTlDRSxhQUFhLEdBQUFELFdBQUE7SUFBRUUsZ0JBQWdCLEdBQUFGLFdBQUE7RUFDdEMsSUFBQUcsV0FBQSxHQUE0Q3RQLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUF1UCxXQUFBLEdBQUFsRSxjQUFBLENBQUFpRSxXQUFBO0lBQWhERSxjQUFjLEdBQUFELFdBQUE7SUFBRUUsaUJBQWlCLEdBQUFGLFdBQUE7RUFDeEMsSUFBQUcsV0FBQSxHQUE0QzFQLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUEyUCxXQUFBLEdBQUF0RSxjQUFBLENBQUFxRSxXQUFBO0lBQWhERSxjQUFjLEdBQUFELFdBQUE7SUFBRUUsaUJBQWlCLEdBQUFGLFdBQUE7RUFDeEMsSUFBQUcsV0FBQSxHQUFnRDlQLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUErUCxXQUFBLEdBQUExRSxjQUFBLENBQUF5RSxXQUFBO0lBQXBERSxnQkFBZ0IsR0FBQUQsV0FBQTtJQUFFRSxtQkFBbUIsR0FBQUYsV0FBQTtFQUM1QyxJQUFBRyxXQUFBLEdBQW9EbFEsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQW1RLFdBQUEsR0FBQTlFLGNBQUEsQ0FBQTZFLFdBQUE7SUFBeERFLGtCQUFrQixHQUFBRCxXQUFBO0lBQUVFLHFCQUFxQixHQUFBRixXQUFBO0VBQ2hELElBQUFHLFdBQUEsR0FBa0N0USwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBdVEsV0FBQSxHQUFBbEYsY0FBQSxDQUFBaUYsV0FBQTtJQUF0Q0UsU0FBUyxHQUFBRCxXQUFBO0lBQUVFLFlBQVksR0FBQUYsV0FBQTtFQUM5QixJQUFBRyxXQUFBLEdBQXNDMVEsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQTJRLFdBQUEsR0FBQXRGLGNBQUEsQ0FBQXFGLFdBQUE7SUFBMUNFLFdBQVcsR0FBQUQsV0FBQTtJQUFFRSxjQUFjLEdBQUFGLFdBQUE7RUFDbEMsSUFBQUcsV0FBQSxHQUFnQzlRLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUErUSxXQUFBLEdBQUExRixjQUFBLENBQUF5RixXQUFBO0lBQXBDRSxRQUFRLEdBQUFELFdBQUE7SUFBRUUsV0FBVyxHQUFBRixXQUFBO0VBQzVCLElBQUFHLFdBQUEsR0FBMENsUiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBbVIsV0FBQSxHQUFBOUYsY0FBQSxDQUFBNkYsV0FBQTtJQUE5Q0UsYUFBYSxHQUFBRCxXQUFBO0lBQUVFLGdCQUFnQixHQUFBRixXQUFBO0VBQ3RDLElBQUFHLFdBQUEsR0FBZ0R0UiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBdVIsV0FBQSxHQUFBbEcsY0FBQSxDQUFBaUcsV0FBQTtJQUFwREUsZ0JBQWdCLEdBQUFELFdBQUE7SUFBRUUsbUJBQW1CLEdBQUFGLFdBQUE7RUFDNUMsSUFBQUcsV0FBQSxHQUE4RDFSLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUEyUixXQUFBLEdBQUF0RyxjQUFBLENBQUFxRyxXQUFBO0lBQWxFRSx1QkFBdUIsR0FBQUQsV0FBQTtJQUFFRSwwQkFBMEIsR0FBQUYsV0FBQTtFQUMxRCxJQUFBRyxXQUFBLEdBQTBCOVIsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQStSLFdBQUEsR0FBQTFHLGNBQUEsQ0FBQXlHLFdBQUE7SUFBOUJFLEtBQUssR0FBQUQsV0FBQTtJQUFFRSxRQUFRLEdBQUFGLFdBQUE7RUFDdEIsSUFBQUcsV0FBQSxHQUF3Q2xTLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFtUyxXQUFBLEdBQUE5RyxjQUFBLENBQUE2RyxXQUFBO0lBQTVDRSxZQUFZLEdBQUFELFdBQUE7SUFBRUUsZUFBZSxHQUFBRixXQUFBO0VBQ3BDLElBQUFHLFdBQUEsR0FBd0J0UywrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBdVMsV0FBQSxHQUFBbEgsY0FBQSxDQUFBaUgsV0FBQTtJQUE1QkUsSUFBSSxHQUFBRCxXQUFBO0lBQUVFLE9BQU8sR0FBQUYsV0FBQTtFQUNwQixJQUFBRyxXQUFBLEdBQTBCMVMsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQTJTLFdBQUEsR0FBQXRILGNBQUEsQ0FBQXFILFdBQUE7SUFBOUJFLEtBQUssR0FBQUQsV0FBQTtJQUFFRSxRQUFRLEdBQUFGLFdBQUE7RUFDdEIsSUFBQUcsV0FBQSxHQUF3QjlTLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUErUyxXQUFBLEdBQUExSCxjQUFBLENBQUF5SCxXQUFBO0lBQTVCRSxJQUFJLEdBQUFELFdBQUE7SUFBRUUsT0FBTyxHQUFBRixXQUFBO0VBQ3BCLElBQUFHLFdBQUEsR0FBd0NsVCwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBbVQsV0FBQSxHQUFBOUgsY0FBQSxDQUFBNkgsV0FBQTtJQUE1Q0UsWUFBWSxHQUFBRCxXQUFBO0lBQUVFLGVBQWUsR0FBQUYsV0FBQTtFQUNwQyxJQUFBRyxXQUFBLEdBQXNDdFQsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFBQXVULFdBQUEsR0FBQWxJLGNBQUEsQ0FBQWlJLFdBQUE7SUFBMUNFLFdBQVcsR0FBQUQsV0FBQTtJQUFFRSxjQUFjLEdBQUFGLFdBQUE7RUFDbEMsSUFBQUcsV0FBQSxHQUFvRDFULCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUEyVCxXQUFBLEdBQUF0SSxjQUFBLENBQUFxSSxXQUFBO0lBQXpERSxrQkFBa0IsR0FBQUQsV0FBQTtJQUFFRSxxQkFBcUIsR0FBQUYsV0FBQTtFQUNoRCxJQUFBRyxXQUFBLEdBQTBDOVQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQStULFdBQUEsR0FBQTFJLGNBQUEsQ0FBQXlJLFdBQUE7SUFBL0NFLGFBQWEsR0FBQUQsV0FBQTtJQUFFRSxnQkFBZ0IsR0FBQUYsV0FBQTtFQUN0QyxJQUFBRyxXQUFBLEdBQTJCbFUsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFBQW1VLFdBQUEsR0FBQTlJLGNBQUEsQ0FBQTZJLFdBQUE7SUFBaENFLEtBQUssR0FBQUQsV0FBQTtJQUFFRSxTQUFTLEdBQUFGLFdBQUE7RUFDdkIsSUFBQUcsV0FBQSxHQUE0QnRVLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQUF1VSxXQUFBLEdBQUFsSixjQUFBLENBQUFpSixXQUFBO0lBQWpDRSxNQUFNLEdBQUFELFdBQUE7SUFBRUUsU0FBUyxHQUFBRixXQUFBO0VBRXhCLElBQUFHLFdBQUEsR0FBMEMxVSwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBMlUsV0FBQSxHQUFBdEosY0FBQSxDQUFBcUosV0FBQTtJQUE5Q0UsYUFBYSxHQUFBRCxXQUFBO0lBQUVFLGdCQUFnQixHQUFBRixXQUFBO0VBQ3RDLElBQUFHLFdBQUEsR0FBMEM5VSwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBK1UsV0FBQSxHQUFBMUosY0FBQSxDQUFBeUosV0FBQTtJQUE5Q0UsYUFBYSxHQUFBRCxXQUFBO0lBQUVFLGdCQUFnQixHQUFBRixXQUFBO0VBQ3RDLElBQUFHLFdBQUEsR0FBZ0NsViwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBbVYsV0FBQSxHQUFBOUosY0FBQSxDQUFBNkosV0FBQTtJQUF2Q0UsUUFBUSxHQUFBRCxXQUFBO0lBQUVFLFdBQVcsR0FBQUYsV0FBQTtFQUM1QixJQUFBRyxXQUFBLEdBQTRCdFYsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQXVWLFdBQUEsR0FBQWxLLGNBQUEsQ0FBQWlLLFdBQUE7SUFBbkNFLE1BQU0sR0FBQUQsV0FBQTtJQUFFRSxTQUFTLEdBQUFGLFdBQUE7RUFDeEJ4VixnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFNMlYsU0FBUztNQUFBLElBQUFDLEtBQUEsR0FBQXRMLGlCQUFBLENBQUcsYUFBWTtRQUM1QixJQUFJO1VBQUEsSUFBQXVMLFNBQUEsRUFBQUMsVUFBQTtVQUNGLElBQU12TCxHQUFHLFNBQVNsSSw4Q0FBSyxDQUFDbUksR0FBRyxJQUFBdEYsTUFBQSxDQUFJbkMscURBQVksbUJBQUFtQyxNQUFBLENBQWdCSCxFQUFFLENBQUUsQ0FBQztVQUNoRXFILFlBQVksQ0FBQzJKLE1BQU0sQ0FBQyxFQUFBRixTQUFBLEdBQUF0TCxHQUFHLENBQUNHLElBQUksY0FBQW1MLFNBQUEsZ0JBQUFBLFNBQUEsR0FBUkEsU0FBQSxDQUFVbkwsSUFBSSxjQUFBbUwsU0FBQSx1QkFBZEEsU0FBQSxDQUFnQjVRLFNBQVMsT0FBQTZRLFVBQUEsR0FBSXZMLEdBQUcsQ0FBQ0csSUFBSSxjQUFBb0wsVUFBQSx1QkFBUkEsVUFBQSxDQUFVN1EsU0FBUyxLQUFJLENBQUMsQ0FBQyxDQUFDO1VBQzNFdUgsVUFBVSxDQUFDakMsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQzZCLE9BQU8sQ0FBQztVQUNqQ0ssUUFBUSxDQUFDckMsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ2lDLEtBQUssQ0FBQztVQUM3QlEsUUFBUSxDQUFDNUMsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ3dDLEtBQUssQ0FBQztVQUM3QkssV0FBVyxDQUFDaEQsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQzRDLFFBQVEsQ0FBQztVQUNuQ0ssT0FBTyxDQUFDcEQsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ2dELElBQUksQ0FBQztVQUMzQlEsZUFBZSxDQUFDM0QsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ0MsWUFBWSxDQUFDO1VBQzNDdUUsY0FBYyxDQUFDM0UsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ3VFLFdBQVcsS0FBSytHLFNBQVMsR0FBR3pMLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUN1RSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1VBQ3ZGSyxnQkFBZ0IsQ0FBQy9FLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUMyRSxhQUFhLENBQUM7VUFDN0NLLGlCQUFpQixDQUFDbkYsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQytFLGNBQWMsQ0FBQztVQUMvQ0ssaUJBQWlCLENBQUN2RixHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDbUYsY0FBYyxLQUFLbUcsU0FBUyxHQUFHekwsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ21GLGNBQWMsR0FBRyxDQUFDLENBQUM7VUFDaEdLLG1CQUFtQixDQUFDM0YsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ3VGLGdCQUFnQixDQUFDO1VBQ25ESyxxQkFBcUIsQ0FBQy9GLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUMyRixrQkFBa0IsQ0FBQztVQUN2REssWUFBWSxDQUFDbkcsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQytGLFNBQVMsS0FBS3VGLFNBQVMsR0FBR3pMLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUMrRixTQUFTLEdBQUcsQ0FBQyxDQUFDO1VBQ2pGSyxjQUFjLENBQUN2RyxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDbUcsV0FBVyxDQUFDO1VBQ3pDSyxXQUFXLENBQUMzRyxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDdUcsUUFBUSxDQUFDO1VBQ25DSyxnQkFBZ0IsQ0FBQy9HLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUMyRyxhQUFhLENBQUM7VUFDN0NLLG1CQUFtQixDQUFDbkgsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQytHLGdCQUFnQixLQUFLdUUsU0FBUyxHQUFHekwsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQytHLGdCQUFnQixHQUFHLENBQUMsQ0FBQztVQUN0R0ssMEJBQTBCLENBQUN2SCxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDbUgsdUJBQXVCLENBQUM7VUFDakVLLFFBQVEsQ0FBQzNILEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUN1SCxLQUFLLENBQUM7VUFDN0JLLGVBQWUsQ0FBQy9ILEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUMySCxZQUFZLENBQUM7VUFDM0NLLE9BQU8sQ0FBQ25JLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUMrSCxJQUFJLENBQUM7VUFDM0JLLFFBQVEsQ0FBQ3ZJLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUNtSSxLQUFLLENBQUM7VUFDN0JLLE9BQU8sQ0FBQzNJLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUN1SSxJQUFJLENBQUM7VUFDM0JTLGNBQWMsQ0FBQ25KLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUMrSSxXQUFXLENBQUM7VUFDekNILGVBQWUsQ0FBQy9JLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUMySSxZQUFZLENBQUM7VUFDM0M7VUFDQSxJQUFJOUksR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ21LLGFBQWEsS0FBS21CLFNBQVMsRUFBRWxCLGdCQUFnQixDQUFDdkssR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ21LLGFBQWEsQ0FBQztVQUM1RixJQUFJdEssR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQ3VLLGFBQWEsS0FBS2UsU0FBUyxFQUFFZCxnQkFBZ0IsQ0FBQzNLLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUN1SyxhQUFhLENBQUM7VUFDNUYsSUFBSTFLLEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUMySyxRQUFRLEVBQUVDLFdBQVcsQ0FBQ2xTLDZDQUFLLENBQUNtSCxHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxDQUFDMkssUUFBUSxDQUFDLENBQUNZLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztVQUMzRixJQUFJMUwsR0FBRyxDQUFDRyxJQUFJLENBQUNBLElBQUksQ0FBQytLLE1BQU0sRUFBRUMsU0FBUyxDQUFDdFMsNkNBQUssQ0FBQ21ILEdBQUcsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJLENBQUMrSyxNQUFNLENBQUMsQ0FBQ1EsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZGLENBQUMsQ0FBQyxPQUFPbEwsS0FBSyxFQUFFO1VBQ2RqSSxrREFBSyxDQUFDaUksS0FBSyxDQUFDLDhCQUE4QixDQUFDO1FBQzdDO01BQ0YsQ0FBQztNQUFBLGdCQXJDSzRLLFNBQVNBLENBQUE7UUFBQSxPQUFBQyxLQUFBLENBQUE1SyxLQUFBLE9BQUFDLFNBQUE7TUFBQTtJQUFBLEdBcUNkO0lBQ0QwSyxTQUFTLENBQUMsQ0FBQztFQUNiLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTjtFQUNBM1YsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBTWtXLFdBQVc7TUFBQSxJQUFBQyxLQUFBLEdBQUE3TCxpQkFBQSxDQUFHLGFBQVk7UUFDOUIsSUFBSTtVQUFBLElBQUE4TCxVQUFBLEVBQUFDLGNBQUEsRUFBQUMsVUFBQSxFQUFBQyxVQUFBLEVBQUFDLFVBQUEsRUFBQUMsVUFBQTtVQUNGLElBQU1sTSxHQUFHLFNBQVNsSSw4Q0FBSyxDQUFDbUksR0FBRyxJQUFBdEYsTUFBQSxDQUFJbkMscURBQVksY0FBVyxDQUFDO1VBQ3ZEZ0wsV0FBVyxFQUFBcUksVUFBQSxHQUFDN0wsR0FBRyxDQUFDRyxJQUFJLGNBQUEwTCxVQUFBLGdCQUFBQSxVQUFBLEdBQVJBLFVBQUEsQ0FBVTFMLElBQUksY0FBQTBMLFVBQUEsdUJBQWRBLFVBQUEsQ0FBZ0J2UixNQUFNLENBQUU2UixHQUFHLElBQUtBLEdBQUcsQ0FBQ0MsTUFBTSxLQUFLLFVBQVUsSUFBSUQsR0FBRyxDQUFDQyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUM7VUFDbEcsSUFBTUMsUUFBUSxTQUFTdlUsOENBQUssQ0FBQ21JLEdBQUcsSUFBQXRGLE1BQUEsQ0FBSW5DLHFEQUFZLGlCQUFjLENBQUM7VUFDL0QsQ0FBQyxFQUFBc1QsY0FBQSxHQUFBTyxRQUFRLENBQUNsTSxJQUFJLGNBQUEyTCxjQUFBLHVCQUFiQSxjQUFBLENBQWUzTCxJQUFJLEtBQUksRUFBRSxFQUFFbU0sR0FBRyxDQUFFSCxHQUFHLElBQUt4RCxPQUFPLENBQUN3RCxHQUFHLENBQUNJLFdBQVcsQ0FBQyxDQUFDO1VBQ2xFLENBQUFSLFVBQUEsR0FBQS9MLEdBQUcsQ0FBQ0csSUFBSSxjQUFBNEwsVUFBQSxnQkFBQUEsVUFBQSxHQUFSQSxVQUFBLENBQVU1TCxJQUFJLGNBQUE0TCxVQUFBLGVBQWRBLFVBQUEsQ0FBZ0J6UixNQUFNLENBQUU2UixHQUFHLElBQUtBLEdBQUcsQ0FBQzFSLEdBQUcsS0FBSzJGLFlBQVksQ0FBQzVGLEVBQUUsQ0FBQyxDQUFDOFIsR0FBRyxDQUFFSCxHQUFHLElBQUszSixhQUFhLENBQUMySixHQUFHLENBQUNqUixVQUFVLENBQUMsQ0FBQztVQUN4RyxDQUFBOFEsVUFBQSxHQUFBaE0sR0FBRyxDQUFDRyxJQUFJLGNBQUE2TCxVQUFBLGdCQUFBQSxVQUFBLEdBQVJBLFVBQUEsQ0FBVTdMLElBQUksY0FBQTZMLFVBQUEsZUFBZEEsVUFBQSxDQUFnQjFSLE1BQU0sQ0FBRTZSLEdBQUcsSUFBS0EsR0FBRyxDQUFDMVIsR0FBRyxLQUFLMkYsWUFBWSxDQUFDNUYsRUFBRSxDQUFDLENBQUM4UixHQUFHLENBQUVILEdBQUcsSUFBS3BJLGVBQWUsQ0FBQ29JLEdBQUcsQ0FBQ3JJLFlBQVksQ0FBQyxDQUFDO1VBQzVHLENBQUFtSSxVQUFBLEdBQUFqTSxHQUFHLENBQUNHLElBQUksY0FBQThMLFVBQUEsZ0JBQUFBLFVBQUEsR0FBUkEsVUFBQSxDQUFVOUwsSUFBSSxjQUFBOEwsVUFBQSxlQUFkQSxVQUFBLENBQWdCM1IsTUFBTSxDQUFFNlIsR0FBRyxJQUFLQSxHQUFHLENBQUMxUixHQUFHLEtBQUsyRixZQUFZLENBQUM1RixFQUFFLENBQUMsQ0FBQzhSLEdBQUcsQ0FBRUgsR0FBRyxJQUFLNUMscUJBQXFCLENBQUM0QyxHQUFHLENBQUNLLFVBQVUsQ0FBQyxDQUFDO1VBQ2hILENBQUFOLFVBQUEsR0FBQWxNLEdBQUcsQ0FBQ0csSUFBSSxjQUFBK0wsVUFBQSxnQkFBQUEsVUFBQSxHQUFSQSxVQUFBLENBQVUvTCxJQUFJLGNBQUErTCxVQUFBLGVBQWRBLFVBQUEsQ0FBZ0I1UixNQUFNLENBQUU2UixHQUFHLElBQUtBLEdBQUcsQ0FBQzFSLEdBQUcsS0FBSzJGLFlBQVksQ0FBQzVGLEVBQUUsQ0FBQyxDQUFDOFIsR0FBRyxDQUFFSCxHQUFHLElBQUt4QyxnQkFBZ0IsQ0FBQ3dDLEdBQUcsQ0FBQ3pDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hILENBQUMsQ0FBQyxPQUFPbEosS0FBSyxFQUFFO1VBQ2RqSSxrREFBSyxDQUFDaUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDO1FBQ3REO01BQ0YsQ0FBQztNQUFBLGdCQWJLbUwsV0FBV0EsQ0FBQTtRQUFBLE9BQUFDLEtBQUEsQ0FBQW5MLEtBQUEsT0FBQUMsU0FBQTtNQUFBO0lBQUEsR0FhaEI7SUFDRGlMLFdBQVcsQ0FBQyxDQUFDO0VBQ2YsQ0FBQyxFQUFFLENBQUN2TCxZQUFZLENBQUMsQ0FBQztFQUNsQjNLLGdEQUFTLENBQUMsTUFBTTtJQUNkLElBQU1nWCxZQUFZO01BQUEsSUFBQUMsS0FBQSxHQUFBM00saUJBQUEsQ0FBRyxhQUFZO1FBQy9CNE0sVUFBVSxDQUFDLElBQUksQ0FBQztRQUNoQixJQUFJO1VBQ0YsSUFBTUMsT0FBTyxHQUFJQyxJQUFJLElBQUs7WUFDeEIsSUFBSSxDQUFDQSxJQUFJLEVBQUUsT0FBTyxLQUFLO1lBQ3ZCLElBQU1DLENBQUMsR0FBR2pVLDZDQUFLLENBQUNnVSxJQUFJLENBQUM7WUFDckIsSUFBSS9CLFFBQVEsSUFBSUksTUFBTSxFQUFFO2NBQ3RCLE9BQU8sQ0FBQzRCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDakMsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJZ0MsQ0FBQyxDQUFDRSxPQUFPLENBQUNsQyxRQUFRLENBQUMsTUFBTWdDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDN0IsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJNEIsQ0FBQyxDQUFDRyxRQUFRLENBQUMvQixNQUFNLENBQUMsQ0FBQztZQUM5RztZQUNBLE9BQU80QixDQUFDLENBQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUs3Uyw2Q0FBSyxDQUFDdUosS0FBSyxDQUFDLENBQUNzSixNQUFNLENBQUMsU0FBUyxDQUFDO1VBQy9ELENBQUM7VUFFRCxJQUFNMUwsR0FBRyxTQUFTbEksOENBQUssQ0FBQ21JLEdBQUcsSUFBQXRGLE1BQUEsQ0FBSW5DLHFEQUFZLDBCQUF1QixDQUFDO1VBQ25FLElBQU0wVSxXQUFXLEdBQUdsTixHQUFHLENBQUNHLElBQUksQ0FBQ0EsSUFBSSxJQUFJLEVBQUU7VUFFdkMsSUFBTWdOLE1BQU0sR0FBSUMsVUFBVSxJQUFLO1lBQzdCLElBQU1DLFdBQVcsR0FBR0MsS0FBSyxDQUFDQyxPQUFPLENBQUNILFVBQVUsQ0FBQyxHQUFHQSxVQUFVLENBQUNkLEdBQUcsQ0FBQ2tCLENBQUMsSUFBSUEsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQ0wsVUFBVSxDQUFDSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2pILE9BQU9QLFdBQVcsQ0FDZjVTLE1BQU0sQ0FBQzZSLEdBQUcsSUFBSTtjQUFBLElBQUF1QixvQkFBQTtjQUNiLElBQU1DLEdBQUcsR0FBRyxFQUFBRCxvQkFBQSxHQUFBdkIsR0FBRyxDQUFDeUIsZUFBZSxjQUFBRixvQkFBQSxnQkFBQUEsb0JBQUEsR0FBbkJBLG9CQUFBLENBQXFCRyxnQkFBZ0IsY0FBQUgsb0JBQUEsdUJBQXJDQSxvQkFBQSxDQUF1Q0QsV0FBVyxDQUFDLENBQUMsS0FBSSxFQUFFO2NBQ3RFLElBQU1LLFFBQVEsR0FBR1QsV0FBVyxDQUFDVSxJQUFJLENBQUNDLElBQUksSUFBSUwsR0FBRyxDQUFDTSxRQUFRLENBQUNELElBQUksQ0FBQyxDQUFDO2NBQzdELE9BQU83QixHQUFHLENBQUMrQixXQUFXLEtBQUssVUFBVSxJQUFJSixRQUFRLElBQUlsQixPQUFPLENBQUNULEdBQUcsQ0FBQ2dDLFdBQVcsQ0FBQztZQUMvRSxDQUFDLENBQUMsQ0FDRDdCLEdBQUcsQ0FBQ0gsR0FBRyxLQUFLO2NBQUVpQyxHQUFHLEVBQUVqQyxHQUFHLENBQUMvTCxZQUFZLENBQUM5RixNQUFNLENBQUMrVCxJQUFJLElBQUlBLElBQUksQ0FBQ0MsS0FBSyxLQUFLbE8sWUFBWSxDQUFDNUYsRUFBRTtZQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3RGRixNQUFNLENBQUMrVCxJQUFJLElBQUlBLElBQUksQ0FBQ0QsR0FBRyxDQUFDRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQ25DQyxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFdEMsR0FBRyxLQUFLc0MsR0FBRyxHQUFHdEMsR0FBRyxDQUFDaUMsR0FBRyxDQUFDSSxNQUFNLENBQUMsQ0FBQ0UsQ0FBQyxFQUFFblUsRUFBRSxLQUFLbVUsQ0FBQyxHQUFHQyxVQUFVLENBQUNwVSxFQUFFLENBQUNxVSxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1VBQ2hHLENBQUM7VUFFRDdJLHFCQUFxQixDQUFDb0gsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztVQUM1Q3BHLGdCQUFnQixDQUFDb0csTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztVQUNsQ2hJLGlCQUFpQixDQUFDZ0ksTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1VBQzdEaEYsT0FBTyxDQUFDZ0YsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7VUFDakN4RyxXQUFXLENBQUN3RyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7VUFDeEQ1RSxRQUFRLENBQUM0RSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOztVQUUzQjtVQUNBLElBQU0wQixXQUFXLEdBQUcvRCxRQUFRLElBQUlJLE1BQU0sSUFBSUosUUFBUSxDQUFDbUMsUUFBUSxDQUFDL0IsTUFBTSxDQUFDelAsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztVQUNqRixJQUFJb1QsV0FBVyxJQUFJdkYsa0JBQWtCLElBQUlBLGtCQUFrQixDQUFDbUUsV0FBVyxDQUFDLENBQUMsQ0FBQ1EsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQUEsSUFBQWEsZUFBQSxFQUFBQyxhQUFBLEVBQUFDLFlBQUEsRUFBQUMsY0FBQTtZQUM3RjtZQUNBO1lBQ0EsSUFBTUMsU0FBUyxTQUFTcFgsOENBQUssQ0FBQ21JLEdBQUcsSUFBQXRGLE1BQUEsQ0FBSW5DLHFEQUFZLGtCQUFlLENBQUM7WUFDakUsSUFBTTJXLE1BQU0sSUFBQUwsZUFBQSxHQUFHSSxTQUFTLENBQUMvTyxJQUFJLGNBQUEyTyxlQUFBLGdCQUFBQSxlQUFBLEdBQWRBLGVBQUEsQ0FBZ0IzTyxJQUFJLGNBQUEyTyxlQUFBLHVCQUFwQkEsZUFBQSxDQUF1QixDQUFDLENBQUM7WUFDeEMsSUFBTU0sS0FBSyxHQUFHLENBQUFELE1BQU0sYUFBTkEsTUFBTSx1QkFBTkEsTUFBTSxDQUFFRSxVQUFVLEtBQUk7Y0FDbENDLFNBQVMsRUFBRTtnQkFBRUMsT0FBTyxFQUFFO2NBQU0sQ0FBQztjQUM3QkMsTUFBTSxFQUFFO2dCQUFFQyxRQUFRLEVBQUUsQ0FBQztnQkFBRUMsT0FBTyxFQUFFLElBQUk7Z0JBQUVDLFFBQVEsRUFBRSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsS0FBSztnQkFBRUMsT0FBTyxFQUFFO2NBQU0sQ0FBQztjQUNuRkMsTUFBTSxFQUFFO2dCQUFFTCxRQUFRLEVBQUUsQ0FBQztnQkFBRUMsT0FBTyxFQUFFLElBQUk7Z0JBQUVDLFFBQVEsRUFBRSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsS0FBSztnQkFBRUMsT0FBTyxFQUFFO2NBQU0sQ0FBQztjQUNuRkUsWUFBWSxFQUFFO2dCQUFFTixRQUFRLEVBQUUsQ0FBQztnQkFBRUMsT0FBTyxFQUFFLElBQUk7Z0JBQUVDLFFBQVEsRUFBRSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsS0FBSztnQkFBRUMsT0FBTyxFQUFFO2NBQU07WUFDMUYsQ0FBQztZQUVELElBQU1HLE9BQU8sU0FBU2xZLDhDQUFLLENBQUNtSSxHQUFHLElBQUF0RixNQUFBLENBQUluQyxxREFBWSxzQkFBbUIsQ0FBQztZQUNuRSxJQUFNeVgsTUFBTSxTQUFTblksOENBQUssQ0FBQ21JLEdBQUcsSUFBQXRGLE1BQUEsQ0FBSW5DLHFEQUFZLGtCQUFlLENBQUM7WUFDOUQsSUFBTTBYLE9BQU8sR0FBRyxFQUFBbkIsYUFBQSxHQUFBaUIsT0FBTyxDQUFDN1AsSUFBSSxjQUFBNE8sYUFBQSx1QkFBWkEsYUFBQSxDQUFjNU8sSUFBSSxLQUFJLEVBQUU7WUFDeEMsSUFBTWdRLElBQUksR0FBR2pXLFVBQVUsQ0FBQ2dXLE9BQU8sQ0FBQyxDQUFDNVYsTUFBTSxDQUFDOFYsQ0FBQyxJQUFJeEQsT0FBTyxDQUFDd0QsQ0FBQyxDQUFDalYsSUFBSSxDQUFDLENBQUM7WUFDN0QsSUFBTWtWLE9BQU8sR0FBRyxFQUFBckIsWUFBQSxHQUFBaUIsTUFBTSxDQUFDOVAsSUFBSSxjQUFBNk8sWUFBQSxnQkFBQUEsWUFBQSxHQUFYQSxZQUFBLENBQWE3TyxJQUFJLGNBQUE2TyxZQUFBLHVCQUFqQkEsWUFBQSxDQUFtQjFVLE1BQU0sQ0FBQ3dTLENBQUMsSUFBSUYsT0FBTyxDQUFDRSxDQUFDLENBQUN3RCxjQUFjLElBQUl4RCxDQUFDLENBQUMzUixJQUFJLENBQUMsQ0FBQyxLQUFJLEVBQUU7WUFFekYsSUFBTW9WLFNBQVMsR0FBSUMsQ0FBQyxJQUFLLENBQUFBLENBQUMsYUFBREEsQ0FBQyx1QkFBREEsQ0FBQyxDQUFFQyxRQUFRLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDakQsV0FBVyxDQUFDLENBQUMsQ0FBQ2tELE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUksRUFBRTtZQUN0RixJQUFNQyxVQUFVLEdBQUdMLFNBQVMsQ0FBQ25RLFlBQVksQ0FBQ3lRLElBQUksQ0FBQztZQUUvQyxJQUFNQyxvQkFBb0IsR0FBR0EsQ0FBQ0MsT0FBTyxFQUFFckMsQ0FBQyxFQUFFbE4sQ0FBQyxFQUFFd1AsSUFBSSxLQUFLO2NBQ3BELElBQUlELE9BQU8sQ0FBQzlDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSThDLE9BQU8sQ0FBQzlDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPK0MsSUFBSSxHQUFJdEMsQ0FBQyxHQUFHLEtBQUssR0FBSSxDQUFDLEdBQUlBLENBQUMsR0FBRyxLQUFLLEdBQUlsTixDQUFDO2NBQ3JHLElBQUk0TyxDQUFDLEdBQUdXLE9BQU8sQ0FBQzlDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBR21CLEtBQUssQ0FBQ0ksTUFBTSxHQUFJdUIsT0FBTyxDQUFDOUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHbUIsS0FBSyxDQUFDVSxNQUFNLEdBQUdWLEtBQUssQ0FBQ1csWUFBYTtjQUM1RyxJQUFJLENBQUNLLENBQUMsRUFBRSxPQUFPLENBQUM7Y0FDaEIsSUFBTWEsS0FBSyxHQUFHQyxRQUFRLENBQUN4QyxDQUFDLENBQUMsSUFBSSxDQUFDO2NBQzlCLElBQUloRyxJQUFJLEdBQUcsQ0FBQztjQUNaLElBQUlzSSxJQUFJLEVBQUV0SSxJQUFJLEdBQUd1SSxLQUFLLElBQUliLENBQUMsQ0FBQ1gsUUFBUSxHQUFJVyxDQUFDLENBQUNWLE9BQU8sR0FBR3VCLEtBQUssR0FBSSxDQUFDLEdBQUdiLENBQUMsQ0FBQ1IsT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUMxRTtnQkFDSCxJQUFJcUIsS0FBSyxJQUFJYixDQUFDLENBQUNYLFFBQVEsRUFBRS9HLElBQUksR0FBRzBILENBQUMsQ0FBQ1YsT0FBTyxHQUFHdUIsS0FBSyxDQUFDLEtBQzdDLElBQUlBLEtBQUssSUFBSWIsQ0FBQyxDQUFDVCxRQUFRLEVBQUVqSCxJQUFJLEdBQUcwSCxDQUFDLENBQUNSLE9BQU8sQ0FBQyxLQUMxQ2xILElBQUksR0FBRzBILENBQUMsQ0FBQ1AsT0FBTyxJQUFJTyxDQUFDLENBQUNlLE9BQU8sSUFBSSxLQUFLO2NBQzdDO2NBQ0EsT0FBT3pJLElBQUk7WUFDYixDQUFDO1lBRUQsSUFBTTBJLFFBQVEsU0FBU3RaLDhDQUFLLENBQUNtSSxHQUFHLElBQUF0RixNQUFBLENBQUluQyxxREFBWSxpQkFBYyxDQUFDO1lBQy9ELElBQU02WSxZQUFZLEdBQUcsRUFBQXBDLGNBQUEsR0FBQW1DLFFBQVEsQ0FBQ2pSLElBQUksY0FBQThPLGNBQUEsdUJBQWJBLGNBQUEsQ0FBZTlPLElBQUksS0FBSSxFQUFFO1lBQzlDLElBQU1tUixhQUFhLEdBQUcsQ0FBQztZQUN2QixJQUFJQyxNQUFNLEdBQUcsQ0FBQzs7WUFFZDtZQUNBcEIsSUFBSSxDQUFDcUIsT0FBTyxDQUFDQyxHQUFHLElBQUk7Y0FDbEIsSUFBTUMsT0FBTyxHQUFHLENBQ2Q7Z0JBQUVsQixDQUFDLEVBQUVpQixHQUFHLENBQUNsVyxZQUFZO2dCQUFFb1csQ0FBQyxFQUFFRixHQUFHLENBQUNHO2NBQWdCLENBQUMsRUFDL0M7Z0JBQUVwQixDQUFDLEVBQUVpQixHQUFHLENBQUNJLE9BQU87Z0JBQUVGLENBQUMsRUFBRUYsR0FBRyxDQUFDSztjQUFlLENBQUMsRUFDekM7Z0JBQUV0QixDQUFDLEVBQUVpQixHQUFHLENBQUNNLE9BQU87Z0JBQUVKLENBQUMsRUFBRUYsR0FBRyxDQUFDTztjQUFlLENBQUMsRUFDekM7Z0JBQUV4QixDQUFDLEVBQUVpQixHQUFHLENBQUNRLE9BQU87Z0JBQUVOLENBQUMsRUFBRUYsR0FBRyxDQUFDUztjQUFlLENBQUMsQ0FDMUMsQ0FBQzVYLE1BQU0sQ0FBQzZYLENBQUMsSUFBSUEsQ0FBQyxDQUFDM0IsQ0FBQyxDQUFDO2NBRWxCLElBQU00QixjQUFjLEdBQUd0QixvQkFBb0IsQ0FBQ1csR0FBRyxDQUFDcFcsU0FBUyxFQUFFb1csR0FBRyxDQUFDWSxTQUFTLEVBQUVmLGFBQWEsRUFBRSxLQUFLLENBQUM7Y0FDL0YsSUFBSWdCLFNBQVMsR0FBR0YsY0FBYztjQUU5QixJQUFJWCxHQUFHLENBQUNjLFFBQVEsRUFBRTtnQkFDaEIsSUFBTUMsaUJBQWlCLEdBQUdkLE9BQU8sQ0FBQ2xELE1BQU0sQ0FBQyxDQUFDaUUsR0FBRyxFQUFFTixDQUFDLEtBQUtNLEdBQUcsSUFBSU4sQ0FBQyxDQUFDUixDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDOUUsSUFBTWUsYUFBYSxHQUFHQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ25CLEdBQUcsQ0FBQ2MsUUFBUSxHQUFHLENBQUNDLGlCQUFpQixHQUFHLENBQUMsSUFBSUosY0FBYyxDQUFDO2dCQUN2RixJQUFNUyxhQUFhLEdBQUdGLElBQUksQ0FBQ0MsR0FBRyxDQUFDbkIsR0FBRyxDQUFDYyxRQUFRLEdBQUdDLGlCQUFpQixHQUFHSixjQUFjLENBQUM7Z0JBQ2pGLElBQUlTLGFBQWEsR0FBR0gsYUFBYSxFQUFFO2tCQUMvQkosU0FBUyxHQUFHYixHQUFHLENBQUNjLFFBQVEsR0FBR0ksSUFBSSxDQUFDRyxHQUFHLENBQUNOLGlCQUFpQixFQUFFLEdBQUcsQ0FBQztnQkFDL0QsQ0FBQyxNQUFNO2tCQUNIRixTQUFTLEdBQUdiLEdBQUcsQ0FBQ2MsUUFBUSxJQUFJQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7Z0JBQ3REO2NBQ0Y7Y0FFQSxJQUFNTyxFQUFFLEdBQUdyQixPQUFPLENBQUNzQixJQUFJLENBQUNiLENBQUMsSUFBSTVCLFNBQVMsQ0FBQzRCLENBQUMsQ0FBQzNCLENBQUMsQ0FBQyxLQUFLSSxVQUFVLENBQUM7Y0FDM0QsSUFBSW1DLEVBQUUsRUFBRTtnQkFDTnhCLE1BQU0sSUFBSXdCLEVBQUUsQ0FBQ3BCLENBQUMsR0FBR1csU0FBUyxHQUFHLENBQUMsR0FBR0EsU0FBUztjQUM1QztZQUNGLENBQUMsQ0FBQzs7WUFFQTtZQUNBLElBQU1XLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSTVZLEdBQUcsQ0FBQ2dYLFlBQVksQ0FBQy9XLE1BQU0sQ0FBQzRZLENBQUMsSUFBSXRHLE9BQU8sQ0FBQ3NHLENBQUMsQ0FBQy9YLElBQUksQ0FBQyxDQUFDLENBQUNtUixHQUFHLENBQUM0RyxDQUFDLElBQUlBLENBQUMsQ0FBQy9YLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDMUYsSUFBTWdZLFNBQVMsR0FBRyxDQUFBaEUsTUFBTSxhQUFOQSxNQUFNLHVCQUFOQSxNQUFNLENBQUVpRSxnQkFBZ0IsTUFBSzNILFNBQVMsR0FBRzBELE1BQU0sQ0FBQ2lFLGdCQUFnQixHQUFHLEdBQUc7WUFFeEZILFNBQVMsQ0FBQ3pCLE9BQU8sQ0FBQzZCLE9BQU8sSUFBSTtjQUN6QixJQUFNQyxhQUFhLEdBQUd6YSw2Q0FBSyxDQUFDd2EsT0FBTyxDQUFDLENBQUMzSCxNQUFNLENBQUMsWUFBWSxDQUFDO2NBQ3pELElBQU02SCxVQUFVLEdBQUdyRCxPQUFPLENBQUM1VixNQUFNLENBQUM4VixDQUFDLElBQUl2WCw2Q0FBSyxDQUFDdVgsQ0FBQyxDQUFDalYsSUFBSSxDQUFDLENBQUN1USxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUs0SCxhQUFhLENBQUM7Y0FDNUYsSUFBTUUsZ0JBQWdCLEdBQUdELFVBQVUsQ0FBQy9FLE1BQU0sQ0FBQyxDQUFDaUUsR0FBRyxFQUFFckMsQ0FBQyxLQUFLcUMsR0FBRyxJQUFJdkIsUUFBUSxDQUFDZCxDQUFDLENBQUNpQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Y0FFN0YsSUFBTW9CLFlBQVksR0FBR3BDLFlBQVksQ0FBQy9XLE1BQU0sQ0FBQzRZLENBQUMsSUFBSUEsQ0FBQyxDQUFDL1gsSUFBSSxLQUFLa1ksT0FBTyxDQUFDO2NBQ2pFLElBQUlJLFlBQVksQ0FBQ2xGLE1BQU0sS0FBSyxDQUFDLEVBQUU7Y0FFL0JrRixZQUFZLENBQUNqQyxPQUFPLENBQUNXLENBQUMsSUFBSTtnQkFDdEIsSUFBSUEsQ0FBQyxDQUFDN1csVUFBVSxJQUFJaVYsU0FBUyxDQUFDNEIsQ0FBQyxDQUFDN1csVUFBVSxDQUFDLEtBQUtzVixVQUFVLEVBQUU7a0JBQ3hELElBQU04QyxVQUFVLEdBQUdGLGdCQUFnQixHQUFHTCxTQUFTO2tCQUMvQyxJQUFNUSxLQUFLLEdBQUd4QixDQUFDLENBQUN5QixPQUFPLEdBQUdGLFVBQVUsR0FBRyxHQUFHLEdBQUdBLFVBQVU7a0JBQ3ZEbkMsTUFBTSxJQUFJb0MsS0FBSztnQkFDbkI7Y0FDSixDQUFDLENBQUM7WUFDTixDQUFDLENBQUM7WUFFSixJQUFJRSxNQUFNLEdBQUcsQ0FBQztZQUNkeEQsT0FBTyxDQUFDbUIsT0FBTyxDQUFDMUUsQ0FBQyxJQUFJO2NBQ25CLElBQU1nSCxLQUFLLEdBQUc1RCxPQUFPLENBQUM4QyxJQUFJLENBQUM1QyxDQUFDLElBQUlBLENBQUMsQ0FBQ2hWLFNBQVMsS0FBSzBSLENBQUMsQ0FBQzFSLFNBQVMsSUFBSWdWLENBQUMsQ0FBQy9VLFNBQVMsS0FBS3lSLENBQUMsQ0FBQ3pSLFNBQVMsSUFBSXhDLDZDQUFLLENBQUN1WCxDQUFDLENBQUNqVixJQUFJLENBQUMsQ0FBQzRSLE1BQU0sQ0FBQ2xVLDZDQUFLLENBQUNpVSxDQUFDLENBQUN3RCxjQUFjLElBQUl4RCxDQUFDLENBQUMzUixJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztjQUM3SixJQUFJMlksS0FBSyxFQUFFO2dCQUNULElBQU1wQyxPQUFPLEdBQUcsQ0FBQ29DLEtBQUssQ0FBQ3ZZLFlBQVksRUFBRXVZLEtBQUssQ0FBQ2pDLE9BQU8sRUFBRWlDLEtBQUssQ0FBQy9CLE9BQU8sRUFBRStCLEtBQUssQ0FBQzdCLE9BQU8sQ0FBQyxDQUFDM1gsTUFBTSxDQUFDa1csQ0FBQyxJQUFJQSxDQUFDLENBQUM7Z0JBQ2hHLElBQUlrQixPQUFPLENBQUNwRixHQUFHLENBQUNrRSxDQUFDLElBQUlELFNBQVMsQ0FBQ0MsQ0FBQyxDQUFDLENBQUMsQ0FBQ3ZDLFFBQVEsQ0FBQzJDLFVBQVUsQ0FBQyxFQUFFO2tCQUN2RGlELE1BQU0sSUFBTS9HLENBQUMsQ0FBQ2lILGFBQWEsSUFBSWpILENBQUMsQ0FBQ2tILFVBQVUsSUFBSSxJQUFJLENBQUMsR0FBSXRDLE9BQU8sQ0FBQ25ELE1BQU87Z0JBQ3pFO2NBQ0Y7WUFDRixDQUFDLENBQUM7WUFFRmhFLGdCQUFnQixDQUFDZ0gsTUFBTSxDQUFDO1lBQ3hCNUcsZ0JBQWdCLENBQUNrSixNQUFNLENBQUM7VUFDMUI7UUFDRixDQUFDLENBQUMsT0FBT3JULEtBQUssRUFBRTtVQUNkakksa0RBQUssQ0FBQ2lJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQztRQUN4RCxDQUFDLFNBQVM7VUFDUm1NLFVBQVUsQ0FBQyxLQUFLLENBQUM7UUFDbkI7TUFDRixDQUFDO01BQUEsZ0JBbkpLRixZQUFZQSxDQUFBO1FBQUEsT0FBQUMsS0FBQSxDQUFBak0sS0FBQSxPQUFBQyxTQUFBO01BQUE7SUFBQSxHQW1KakI7SUFDRCtMLFlBQVksQ0FBQyxDQUFDO0VBQ2hCLENBQUMsRUFBRSxDQUFDckssS0FBSyxFQUFFaEMsWUFBWSxFQUFFMEssUUFBUSxFQUFFSSxNQUFNLEVBQUU1QixrQkFBa0IsQ0FBQyxDQUFDO0VBQy9EN1QsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBSXdlLFFBQVEsRUFBRTtNQUNaLElBQU1DLFNBQVMsR0FBR3ZCLElBQUksQ0FBQ3dCLEtBQUssQ0FBQ0YsUUFBUSxDQUFDO01BQ3RDLElBQU1HLGNBQWMsR0FBRyxDQUFDSCxRQUFRLEdBQUcsQ0FBQyxFQUFFSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDOUQsSUFBTUMsVUFBVSxHQUFHM2EsK0RBQXFCLENBQUNzYSxTQUFTLENBQUM7TUFDbkQsSUFBTU8sZUFBZSxHQUFHN2EsK0RBQXFCLENBQUN3YSxjQUFjLENBQUM7TUFDN0RySyxTQUFTLElBQUFwUCxNQUFBLENBQUk0WixVQUFVLFdBQUE1WixNQUFBLENBQVE4WixlQUFlLFdBQVEsQ0FBQztJQUN6RDtFQUNGLENBQUMsRUFBRSxDQUFDUixRQUFRLENBQUMsQ0FBQztFQUNkLElBQU1TLG1CQUFtQixHQUFHQSxDQUFBLEtBQU07SUFDaEMvUSxlQUFlLENBQUM7TUFDZG5KLEVBQUUsRUFBRSxFQUFFO01BQ05xVyxJQUFJLEVBQUU7SUFDUixDQUFDLENBQUM7RUFDSixDQUFDO0VBQ0QsSUFBTThELFlBQVksR0FBSUMsUUFBUSxJQUFLO0lBQ2pDLElBQU1DLGVBQWUsR0FBR3RSLFFBQVEsQ0FBQ3lQLElBQUksQ0FBRThCLE1BQU0sSUFBS0EsTUFBTSxLQUFLRixRQUFRLENBQUM7SUFDdEVqUixlQUFlLENBQUM7TUFDZG5KLEVBQUUsRUFBRXFhLGVBQWUsYUFBZkEsZUFBZSx1QkFBZkEsZUFBZSxDQUFFcGEsR0FBRztNQUN4Qm9XLElBQUksRUFBRWdFLGVBQWUsYUFBZkEsZUFBZSx1QkFBZkEsZUFBZSxDQUFFelU7SUFDekIsQ0FBQyxDQUFDO0lBQ0ZvQyxhQUFhLENBQUNxUyxlQUFlLGFBQWZBLGVBQWUsdUJBQWZBLGVBQWUsQ0FBRTNaLFVBQVUsQ0FBQztJQUMxQzZJLGVBQWUsQ0FBQzhRLGVBQWUsYUFBZkEsZUFBZSx1QkFBZkEsZUFBZSxDQUFFL1EsWUFBWSxDQUFDO0lBQzlDeUYscUJBQXFCLENBQUNzTCxlQUFlLGFBQWZBLGVBQWUsdUJBQWZBLGVBQWUsQ0FBRXJJLFVBQVUsQ0FBQztJQUNsRDdDLGdCQUFnQixDQUFDa0wsZUFBZSxhQUFmQSxlQUFlLHVCQUFmQSxlQUFlLENBQUVuTCxhQUFhLENBQUM7SUFDaEQvRSxjQUFjLENBQUNrUSxlQUFlLGFBQWZBLGVBQWUsdUJBQWZBLGVBQWUsQ0FBRUUsTUFBTSxDQUFDO0lBQ3ZDeFAsaUJBQWlCLENBQUNzUCxlQUFlLENBQUN2UCxjQUFjLEtBQUttRyxTQUFTLEdBQUdvSixlQUFlLENBQUN2UCxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3BHYSxZQUFZLENBQUMwTyxlQUFlLENBQUMzTyxTQUFTLEtBQUt1RixTQUFTLEdBQUdvSixlQUFlLENBQUMzTyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3JGaUIsbUJBQW1CLENBQUMwTixlQUFlLENBQUMzTixnQkFBZ0IsS0FBS3VFLFNBQVMsR0FBR29KLGVBQWUsQ0FBQzNOLGdCQUFnQixHQUFHLENBQUMsQ0FBQztJQUMxR1MsUUFBUSxDQUFDa04sZUFBZSxDQUFDbk4sS0FBSyxLQUFLK0QsU0FBUyxHQUFHb0osZUFBZSxhQUFmQSxlQUFlLHVCQUFmQSxlQUFlLENBQUVuTixLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQzFFdkQsV0FBVyxDQUFDMFEsZUFBZSxhQUFmQSxlQUFlLHVCQUFmQSxlQUFlLENBQUUzUSxRQUFRLENBQUM7SUFDdENLLFNBQVMsQ0FBQ3NRLGVBQWUsYUFBZkEsZUFBZSx1QkFBZkEsZUFBZSxDQUFFRyxpQkFBaUIsQ0FBQztFQUMvQyxDQUFDO0VBQ0R2ZixnREFBUyxDQUFDLE1BQU07SUFDZCxJQUFNd2YsSUFBSSxHQUFHLEVBQUU7SUFDZixJQUFNQyxFQUFFLEdBQUcsQ0FBQztJQUNabFMsV0FBVyxDQUFDaVMsSUFBSSxDQUFDO0lBQ2pCN1IsT0FBTyxDQUFDOFIsRUFBRSxDQUFDO0VBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOemYsZ0RBQVMsQ0FBQyxNQUFNO0lBQ2QsSUFBTTBmLGFBQWEsR0FBR3pRLFdBQVcsR0FBRzNCLFFBQVE7SUFDNUMsSUFBTXFTLGtCQUFrQixHQUFHQyxLQUFLLENBQUMxUyxLQUFLLEdBQUd3UyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUd4RyxVQUFVLENBQUNoTSxLQUFLLEdBQUd3UyxhQUFhLENBQUM7SUFDL0ZwUSxnQkFBZ0IsQ0FBQ3FRLGtCQUFrQixDQUFDO0lBQ3BDLElBQU1FLGdCQUFnQixHQUFHaFEsY0FBYyxHQUFHdkMsUUFBUTtJQUNsRCxJQUFNd1MscUJBQXFCLEdBQUdGLEtBQUssQ0FBQzFTLEtBQUssR0FBRzJTLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFHM0csVUFBVSxDQUFDaE0sS0FBSyxHQUFHMlMsZ0JBQWdCLENBQUM7SUFDeEczUCxtQkFBbUIsQ0FBQzRQLHFCQUFxQixDQUFDO0lBQzFDLElBQU1DLFdBQVcsR0FBR3RQLFNBQVMsR0FBR25ELFFBQVE7SUFDeEMsSUFBTTBTLGdCQUFnQixHQUFHSixLQUFLLENBQUMxUyxLQUFLLEdBQUc2UyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUc3RyxVQUFVLENBQUNoTSxLQUFLLEdBQUc2UyxXQUFXLENBQUM7SUFDekZqUCxjQUFjLENBQUNrUCxnQkFBZ0IsQ0FBQztJQUNoQyxJQUFNQyxhQUFhLEdBQUd4TyxnQkFBZ0IsR0FBR25FLFFBQVE7SUFDakQsSUFBTTRTLGtCQUFrQixHQUFHTixLQUFLLENBQUMxUyxLQUFLLEdBQUcrUyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcvRyxVQUFVLENBQUNoTSxLQUFLLEdBQUcrUyxhQUFhLENBQUM7SUFDL0ZuTywwQkFBMEIsQ0FBQ29PLGtCQUFrQixDQUFDO0lBQzlDLElBQU1DLFlBQVksR0FBR2xPLEtBQUssR0FBRzNFLFFBQVE7SUFDckMsSUFBTThTLGlCQUFpQixHQUFHUixLQUFLLENBQUMxUyxLQUFLLEdBQUdpVCxZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUdqSCxVQUFVLENBQUNoTSxLQUFLLEdBQUdpVCxZQUFZLENBQUM7SUFDNUY3TixlQUFlLENBQUM4TixpQkFBaUIsQ0FBQztFQUNwQyxDQUFDLEVBQUUsQ0FBQ25SLFdBQVcsRUFBRS9CLEtBQUssRUFBRTJDLGNBQWMsRUFBRVksU0FBUyxFQUFFZ0IsZ0JBQWdCLEVBQUVRLEtBQUssRUFBRTNFLFFBQVEsQ0FBQyxDQUFDO0VBRXRGLElBQU0rUyxpQkFBaUIsR0FBR25ILFVBQVUsQ0FBQ2pLLFdBQVcsQ0FBQyxHQUFHaUssVUFBVSxDQUFDckosY0FBYyxDQUFDLEdBQUdxSixVQUFVLENBQUN6SSxTQUFTLENBQUMsR0FBR3lJLFVBQVUsQ0FBQ3pILGdCQUFnQixDQUFDLEdBQUd5SCxVQUFVLENBQUNqSCxLQUFLLENBQUMsR0FBR2lILFVBQVUsQ0FBQ3JFLGFBQWEsQ0FBQztFQUNyTCxJQUFNeUwsa0JBQWtCLEdBQUdwSCxVQUFVLENBQUM3SixhQUFhLENBQUMsR0FBRzZKLFVBQVUsQ0FBQ2pKLGdCQUFnQixDQUFDLEdBQUdpSixVQUFVLENBQUNySSxXQUFXLENBQUMsR0FBR3FJLFVBQVUsQ0FBQ3JILHVCQUF1QixDQUFDLEdBQUdxSCxVQUFVLENBQUM3RyxZQUFZLENBQUMsR0FBRzZHLFVBQVUsQ0FBQ3JFLGFBQWEsQ0FBQztFQUMxTSxJQUFNMEwsb0JBQW9CLEdBQUdySCxVQUFVLENBQUN6SixjQUFjLENBQUMsR0FBR3lKLFVBQVUsQ0FBQzdJLGtCQUFrQixDQUFDLEdBQUc2SSxVQUFVLENBQUM3SCxhQUFhLENBQUMsR0FBRzZILFVBQVUsQ0FBQ3pHLElBQUksQ0FBQyxHQUFHeUcsVUFBVSxDQUFDakksUUFBUSxDQUFDLEdBQUdpSSxVQUFVLENBQUNqRSxhQUFhLENBQUM7RUFDMUwsSUFBTXVKLFFBQVEsR0FBRzhCLGtCQUFrQixLQUFLLENBQUMsR0FBR0Esa0JBQWtCLEdBQUdDLG9CQUFvQixHQUFHLENBQUM7RUFDekYsSUFBTUMsU0FBUyxHQUFHaEMsUUFBUSxHQUFHM0wsS0FBSyxHQUFHME4sb0JBQW9CO0VBQ3pELElBQU1FLGdCQUFnQixHQUFHeE4sSUFBSSxLQUFLLENBQUMsR0FBR2lLLElBQUksQ0FBQ3dELEdBQUcsQ0FBRWxDLFFBQVEsR0FBR3ZMLElBQUksR0FBSSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztFQUNqRixJQUFJME4sbUJBQW1CLEdBQUd6SCxVQUFVLENBQUN6RixXQUFXLEdBQUdSLElBQUksQ0FBQyxDQUFDMkwsT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNuRSxJQUFJZ0MsWUFBWSxHQUFHMUgsVUFBVSxDQUFDbkQsTUFBTSxDQUFDMUMsWUFBWSxDQUFDLEdBQUcwQyxNQUFNLENBQUM0SyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMvQixPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQzVGLElBQU1pQyxTQUFTLEdBQUczRCxJQUFJLENBQUM0RCxLQUFLLENBQUMsQ0FBQ0wsZ0JBQWdCLEdBQUdHLFlBQVksSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHO0VBQzNFLElBQU1HLFFBQVEsR0FBRzlOLElBQUksS0FBSyxDQUFDLEdBQUdpSyxJQUFJLENBQUM0RCxLQUFLLENBQUVELFNBQVMsR0FBRzVOLElBQUksR0FBSSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztFQUU1RSxJQUFNK04saUJBQWlCLEdBQUdwQixLQUFLLENBQUMzUSxXQUFXLEdBQUdnRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdpRyxVQUFVLENBQUNqSyxXQUFXLEdBQUdnRSxJQUFJLENBQUM7RUFDeEYsSUFBTWdPLGtCQUFrQixHQUFHckIsS0FBSyxDQUFDdlEsYUFBYSxHQUFHNEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHaUcsVUFBVSxDQUFDN0osYUFBYSxHQUFHNEQsSUFBSSxDQUFDO0VBQzdGLElBQU1pTyxtQkFBbUIsR0FBR3RCLEtBQUssQ0FBQ25RLGNBQWMsR0FBR3dELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBR2lHLFVBQVUsQ0FBQ3pKLGNBQWMsR0FBR3dELElBQUksQ0FBQztFQUNoRyxJQUFNa08sb0JBQW9CLEdBQUd2QixLQUFLLENBQUMvUCxjQUFjLEdBQUdvRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdpRyxVQUFVLENBQUNySixjQUFjLEdBQUdvRCxJQUFJLENBQUM7RUFDakcsSUFBTW1PLDJCQUEyQixHQUFHeEIsS0FBSyxDQUFDM1AsZ0JBQWdCLEdBQUdnRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdpRyxVQUFVLENBQUNqSixnQkFBZ0IsR0FBR2dELElBQUksQ0FBQztFQUM1RyxJQUFNb08sNkJBQTZCLEdBQUd6QixLQUFLLENBQUN2UCxrQkFBa0IsR0FBRzRDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBR2lHLFVBQVUsQ0FBQzdJLGtCQUFrQixHQUFHNEMsSUFBSSxDQUFDO0VBQ2xILElBQU1xTyxlQUFlLEdBQUcxQixLQUFLLENBQUNuUCxTQUFTLEdBQUd3QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdpRyxVQUFVLENBQUN6SSxTQUFTLEdBQUd3QyxJQUFJLENBQUM7RUFDbEYsSUFBTXNPLHNCQUFzQixHQUFHM0IsS0FBSyxDQUFDL08sV0FBVyxHQUFHb0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHaUcsVUFBVSxDQUFDckksV0FBVyxHQUFHb0MsSUFBSSxDQUFDO0VBQzdGLElBQU11Tyx3QkFBd0IsR0FBRzVCLEtBQUssQ0FBQ3ZPLGFBQWEsR0FBRzRCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBR2lHLFVBQVUsQ0FBQzdILGFBQWEsR0FBRzRCLElBQUksQ0FBQztFQUNuRyxJQUFNd08saUJBQWlCLEdBQUc3QixLQUFLLENBQUNuTyxnQkFBZ0IsR0FBR3dCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBR2lHLFVBQVUsQ0FBQ3pILGdCQUFnQixHQUFHd0IsSUFBSSxDQUFDO0VBQ2xHLElBQU15Tyx3QkFBd0IsR0FBRzlCLEtBQUssQ0FBQy9OLHVCQUF1QixHQUFHb0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHaUcsVUFBVSxDQUFDckgsdUJBQXVCLEdBQUdvQixJQUFJLENBQUM7RUFDdkgsSUFBTTBPLHdCQUF3QixHQUFHL0IsS0FBSyxDQUFDbk4sSUFBSSxHQUFHUSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdpRyxVQUFVLENBQUN6RyxJQUFJLEdBQUdRLElBQUksQ0FBQztFQUNqRixJQUFNMk8sZ0JBQWdCLEdBQUdoQyxLQUFLLENBQUMzTixLQUFLLEdBQUdnQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdpRyxVQUFVLENBQUNqSCxLQUFLLEdBQUdnQixJQUFJLENBQUM7RUFDM0UsSUFBTTRPLHVCQUF1QixHQUFHakMsS0FBSyxDQUFDdk4sWUFBWSxHQUFHWSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdpRyxVQUFVLENBQUM3RyxZQUFZLEdBQUdZLElBQUksQ0FBQztFQUNoRyxJQUFNNk8sd0JBQXdCLEdBQUdsQyxLQUFLLENBQUMzTyxRQUFRLEdBQUdnQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdpRyxVQUFVLENBQUNqSSxRQUFRLEdBQUdnQyxJQUFJLENBQUM7RUFDekYsSUFBTThPLGdCQUFnQixHQUFHbkMsS0FBSyxDQUFDUyxpQkFBaUIsR0FBR3BOLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBR2lHLFVBQVUsQ0FBQ21ILGlCQUFpQixHQUFHcE4sSUFBSSxDQUFDO0VBQ25HLElBQU0rTyxrQkFBa0IsR0FBR3BDLEtBQUssQ0FBQ1Usa0JBQWtCLEdBQUdyTixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdpRyxVQUFVLENBQUNvSCxrQkFBa0IsR0FBR3JOLElBQUksQ0FBQztFQUN2RyxJQUFNZ1Asb0JBQW9CLEdBQUdyQyxLQUFLLENBQUNXLG9CQUFvQixHQUFHdE4sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHaUcsVUFBVSxDQUFDcUgsb0JBQW9CLEdBQUd0TixJQUFJLENBQUM7RUFDN0csSUFBTWlQLGdCQUFnQixHQUFHdEMsS0FBSyxDQUFDL00sS0FBSyxHQUFHSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdpRyxVQUFVLENBQUNyRyxLQUFLLEdBQUdJLElBQUksQ0FBQztFQUMzRSxJQUFNa1AsZUFBZSxHQUFHdkMsS0FBSyxDQUFDWSxTQUFTLEdBQUd2TixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdpRyxVQUFVLENBQUNzSCxTQUFTLEdBQUd2TixJQUFJLENBQUM7RUFFbEYsQ0FBQztFQUNELElBQUFtUCxXQUFBLEdBQTBCbmlCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFvaUIsV0FBQSxHQUFBL1csY0FBQSxDQUFBOFcsV0FBQTtJQUFsQ0UsS0FBSyxHQUFBRCxXQUFBO0lBQUVFLFFBQVEsR0FBQUYsV0FBQTtFQUV0QixJQUFNRyxzQkFBc0IsR0FBSXpXLENBQUMsSUFBSztJQUNwQ0EsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNsQnVXLFFBQVEsQ0FBQyxJQUFJLENBQUM7RUFDaEIsQ0FBQztFQUNELElBQU1FLHVCQUF1QixHQUFHQSxDQUFBLEtBQU07SUFDcENGLFFBQVEsQ0FBQyxLQUFLLENBQUM7RUFDakIsQ0FBQztFQUVELElBQUFHLFdBQUEsR0FBOEJ6aUIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTBpQixXQUFBLEdBQUFyWCxjQUFBLENBQUFvWCxXQUFBO0lBQXRDRSxPQUFPLEdBQUFELFdBQUE7SUFBRXpMLFVBQVUsR0FBQXlMLFdBQUE7RUFDMUIsSUFBQUUsV0FBQSxHQUFnRDVpQiwrQ0FBUSxDQUFDLEtBQUssQ0FBQztJQUFBNmlCLFdBQUEsR0FBQXhYLGNBQUEsQ0FBQXVYLFdBQUE7SUFBeERFLGdCQUFnQixHQUFBRCxXQUFBO0lBQUVFLG1CQUFtQixHQUFBRixXQUFBO0VBQzVDLElBQUFHLFdBQUEsR0FBNERoakIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQWlqQixXQUFBLEdBQUE1WCxjQUFBLENBQUEyWCxXQUFBO0lBQXBFRSxzQkFBc0IsR0FBQUQsV0FBQTtJQUFFRSx5QkFBeUIsR0FBQUYsV0FBQTtFQUN4RCxJQUFBRyxXQUFBLEdBQTRDcGpCLCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFxakIsV0FBQSxHQUFBaFksY0FBQSxDQUFBK1gsV0FBQTtJQUFwREUsY0FBYyxHQUFBRCxXQUFBO0lBQUVFLGlCQUFpQixHQUFBRixXQUFBO0VBRXhDLElBQU1HLFVBQVUsR0FBR0EsQ0FBQSxLQUFNO0lBQ3ZCVCxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7SUFDekI5TCxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2hCd00sVUFBVSxDQUFDLE1BQU07TUFDZnhNLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNULENBQUM7RUFDRCxJQUFNeU0sZ0JBQWdCLEdBQUdBLENBQUEsS0FBTTtJQUM3QlAseUJBQXlCLENBQUMsSUFBSSxDQUFDO0lBQy9CbE0sVUFBVSxDQUFDLElBQUksQ0FBQztJQUNoQndNLFVBQVUsQ0FBQyxNQUFNO01BQ2Z4TSxVQUFVLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUMsRUFBRSxHQUFHLENBQUM7RUFDVCxDQUFDO0VBQ0QsSUFBTTBNLFdBQVcsR0FBR0EsQ0FBQSxLQUFNO0lBQ3hCSixpQkFBaUIsQ0FBQyxJQUFJLENBQUM7SUFDdkJ0TSxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQ2hCd00sVUFBVSxDQUFDLE1BQU07TUFDZnhNLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNULENBQUM7RUFFRCxJQUFNMk0sV0FBVyxHQUFHQSxDQUFBLEtBQU07SUFDeEJiLG1CQUFtQixDQUFDLEtBQUssQ0FBQztJQUMxQmMsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCbGEsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ2QsQ0FBQztFQUNELElBQU1tYSxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNO0lBQzlCYix5QkFBeUIsQ0FBQyxLQUFLLENBQUM7RUFDbEMsQ0FBQztFQUNELElBQU1jLGdCQUFnQixHQUFHQSxDQUFBLEtBQU07SUFDN0JWLGlCQUFpQixDQUFDLEtBQUssQ0FBQztFQUMxQixDQUFDO0VBQ0QsSUFBTVcsY0FBYyxHQUFJcmEsUUFBUSxJQUFLO0lBQ25DO0lBQ0EsSUFBSUEsUUFBUSxLQUFLLFVBQVUsRUFBRTtNQUMzQmdhLE1BQU0sQ0FBQ00sT0FBTyxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUN2QixDQUFDLE1BQU0sSUFBSXZhLFFBQVEsS0FBSyxNQUFNLEVBQUU7TUFDOUIrWixXQUFXLENBQUMsQ0FBQztJQUNmO0VBQ0YsQ0FBQztFQUNELENBQUM7RUFDRCxJQUFNUyxtQkFBbUI7SUFBQSxJQUFBQyxLQUFBLEdBQUFqYSxpQkFBQSxDQUFHLGFBQVk7TUFDdEMsSUFBTUksSUFBSSxHQUFHO1FBQ1h0RixNQUFNLEVBQUVMLEVBQUU7UUFDVnlmLE1BQU0sRUFBRXhhLElBQUksQ0FBQ1UsSUFBSSxDQUFDSSxRQUFRLEdBQUcsa0JBQWtCLEdBQUcsTUFBTSxHQUFHMlosTUFBTSxDQUFDeGYsU0FBUyxDQUFDLENBQUN5ZixRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUM3RmpRLE1BQU07UUFDTmtRLGdCQUFnQixFQUFFLElBQUlDLElBQUksQ0FBQztNQUM3QixDQUFDO01BQ0QsSUFBSTtRQUNGLElBQU1yYSxHQUFHLFNBQVNsSSw4Q0FBSyxDQUFDd2lCLElBQUksSUFBQTNmLE1BQUEsQ0FBSW5DLHFEQUFZLDRCQUF5QjJILElBQUksQ0FBQztRQUMxRSxJQUFJSCxHQUFHLEVBQUU7VUFDUG1LLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDZjtNQUNGLENBQUMsQ0FBQyxPQUFPM0osS0FBSyxFQUFFO1FBQ2QsSUFBSUEsS0FBSyxFQUFFO1VBQ1Q2WSxXQUFXLENBQUMsQ0FBQztRQUNmO01BQ0Y7SUFDRixDQUFDO0lBQUEsZ0JBakJLVSxtQkFBbUJBLENBQUE7TUFBQSxPQUFBQyxLQUFBLENBQUF2WixLQUFBLE9BQUFDLFNBQUE7SUFBQTtFQUFBLEdBaUJ4QjtFQUNELElBQUkwTCxNQUFNLEdBQUcsRUFBRTtFQUNmLElBQUk4RSxRQUFRLENBQUNwSSxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUlvSSxRQUFRLENBQUNoSSxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7SUFDL0RrRCxNQUFNLEdBQUcsUUFBUTtFQUNuQixDQUFDLE1BQU0sSUFBSThFLFFBQVEsQ0FBQ3NGLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSXRGLFFBQVEsQ0FBQ29GLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtJQUNoRWxLLE1BQU0sR0FBRyxNQUFNO0VBQ2pCLENBQUMsTUFBTTtJQUNMQSxNQUFNLEdBQUcsZ0JBQWdCO0VBQzNCO0VBQ0EsSUFBTW1PLFlBQVk7SUFBQSxJQUFBQyxNQUFBLEdBQUF6YSxpQkFBQSxDQUFHLFdBQU95QixDQUFDLEVBQUs7TUFDaENBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7TUFDbEIsSUFBSTZILGtCQUFrQixJQUFJQSxrQkFBa0IsQ0FBQ21FLFdBQVcsQ0FBQyxDQUFDLENBQUNRLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUM5RSxJQUFJLENBQUNuRCxRQUFRLElBQUksQ0FBQ0ksTUFBTSxFQUFFO1VBQ3hCdVAsS0FBSyxDQUFDLG9FQUFvRSxDQUFDO1VBQzNFO1FBQ0Y7TUFDRjtNQUNBLElBQU10YSxJQUFJLEdBQUc7UUFDWDZCLE9BQU87UUFDUEksS0FBSztRQUNMTyxLQUFLO1FBQUV5SixNQUFNO1FBQ2JySixRQUFRO1FBQUVJLElBQUk7UUFBRXVCLFdBQVc7UUFBRUksYUFBYTtRQUFFSSxjQUFjO1FBQUVJLGNBQWM7UUFBRUksZ0JBQWdCO1FBQUVJLGtCQUFrQjtRQUFFSSxTQUFTO1FBQzNISSxXQUFXO1FBQUVJLFFBQVE7UUFBRUksYUFBYTtRQUFFSSxnQkFBZ0I7UUFBRUksdUJBQXVCO1FBQUVJLEtBQUs7UUFBRUksWUFBWTtRQUFFSSxJQUFJO1FBQzFHSSxLQUFLO1FBQUV3TixpQkFBaUI7UUFBRUMsa0JBQWtCO1FBQUVDLG9CQUFvQjtRQUFFL0IsUUFBUTtRQUFFZ0MsU0FBUztRQUFFdk4sSUFBSTtRQUFFd04sZ0JBQWdCO1FBQUVwTSxLQUFLO1FBQ3RIMUosWUFBWTtRQUFFMEksWUFBWTtRQUFFSSxXQUFXO1FBQUVzTixRQUFRO1FBQUVGLFNBQVM7UUFBRW9FLE9BQU8sRUFBRSxLQUFLO1FBQzVFcFIsa0JBQWtCO1FBQUU7UUFDcEI7UUFDQWdCLGFBQWE7UUFBRUksYUFBYTtRQUM1QkksUUFBUSxFQUFFQSxRQUFRLElBQUlqUyw2Q0FBSyxDQUFDaVMsUUFBUSxDQUFDLENBQUM2UCxPQUFPLENBQUMsQ0FBQyxHQUFHOWhCLDZDQUFLLENBQUNpUyxRQUFRLENBQUMsQ0FBQ1ksTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUk7UUFDN0ZSLE1BQU0sRUFBRUEsTUFBTSxJQUFJclMsNkNBQUssQ0FBQ3FTLE1BQU0sQ0FBQyxDQUFDeVAsT0FBTyxDQUFDLENBQUMsR0FBRzloQiw2Q0FBSyxDQUFDcVMsTUFBTSxDQUFDLENBQUNRLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRztNQUNuRixDQUFDO01BQ0QsSUFBSTtRQUNGLElBQU0xTCxHQUFHLFNBQVNsSSw4Q0FBSyxDQUFDOGlCLEdBQUcsSUFBQWpnQixNQUFBLENBQUluQyxxREFBWSxzQkFBQW1DLE1BQUEsQ0FBbUJILEVBQUUsR0FBSTJGLElBQUksQ0FBQztRQUN6RSxJQUFJSCxHQUFHLEVBQUU7VUFDUDtVQUNBK1osbUJBQW1CLENBQUMsQ0FBQztVQUNyQmIsVUFBVSxDQUFDLENBQUM7UUFDZDtNQUNGLENBQUMsQ0FBQyxPQUFPMVksS0FBSyxFQUFFO1FBQ2QsSUFBSUEsS0FBSyxFQUFFO1VBQ1Q2WSxXQUFXLENBQUMsQ0FBQztRQUNmO01BQ0Y7SUFDRixDQUFDO0lBQUEsZ0JBbENLa0IsWUFBWUEsQ0FBQU0sRUFBQTtNQUFBLE9BQUFMLE1BQUEsQ0FBQS9aLEtBQUEsT0FBQUMsU0FBQTtJQUFBO0VBQUEsR0FrQ2pCO0VBRUQsb0JBQ0VsTCwwREFBQTtJQUFLb0csU0FBUyxFQUFDO0VBQWMsZ0JBQzNCcEcsMERBQUEsQ0FBQ2tCLHFEQUFHO0lBQUNva0IsRUFBRSxFQUFFO01BQUVDLE9BQU8sRUFBRTtJQUFPO0VBQUUsZ0JBQzNCdmxCLDBEQUFBLENBQUM4QixrRUFBVyxNQUFFLENBQUMsZUFDZjlCLDBEQUFBLENBQUNvSSxNQUFNO0lBQUNYLFFBQVEsRUFBQyxVQUFVO0lBQUNlLElBQUksRUFBRWdELE9BQVE7SUFBQzhaLEVBQUUsRUFBRTtNQUFFdmUsZUFBZSxFQUFFO0lBQVU7RUFBRSxnQkFDNUUvRywwREFBQSxDQUFDNkIsOERBQU87SUFDTnlqQixFQUFFLEVBQUU7TUFDRkUsRUFBRSxFQUFFLE1BQU0sQ0FBRTtJQUNkO0VBQUUsZ0JBRUZ4bEIsMERBQUEsQ0FBQ1UscURBQVU7SUFDVCtrQixJQUFJLEVBQUMsT0FBTztJQUNaemUsS0FBSyxFQUFDLFNBQVM7SUFDZixjQUFXLGFBQWE7SUFDeEIwZSxPQUFPLEVBQUVoYSxZQUFhO0lBQ3RCNFosRUFBRSxFQUFBN2MsYUFBQTtNQUNBa2QsV0FBVyxFQUFFO0lBQU0sR0FDZm5hLE9BQU8sSUFBSTtNQUFFK1osT0FBTyxFQUFFO0lBQU8sQ0FBQztFQUNsQyxnQkFFRnZsQiwwREFBQSxDQUFDbUMsaUVBQVEsTUFBRSxDQUNELENBQUMsZUFDYm5DLDBEQUFBLENBQUNnQixxREFBVTtJQUNUNGtCLFNBQVMsRUFBQyxJQUFJO0lBQ2RDLE9BQU8sRUFBQyxJQUFJO0lBQ1o3ZSxLQUFLLEVBQUMsU0FBUztJQUNmOGUsTUFBTTtJQUNOUixFQUFFLEVBQUU7TUFBRVMsUUFBUSxFQUFFO0lBQUU7RUFBRSxHQUNyQixrQkFFVyxDQUFDLGVBQ2IvbEIsMERBQUEsQ0FBQ1UscURBQVU7SUFBQ2dsQixPQUFPLEVBQUUzWjtFQUFlLGdCQUNsQy9MLDBEQUFBLENBQUNzRCxzRUFBUztJQUFDa0UsS0FBSyxFQUFFO01BQUVSLEtBQUssRUFBRTtJQUFRO0VBQUUsQ0FBRSxDQUM3QixDQUFDLGVBQ2JoSCwwREFBQSxDQUFDeUUsOERBQW9CLE1BQUUsQ0FBQyxlQUN4QnpFLDBEQUFBLENBQUN3RSwwREFBZ0I7SUFBQzZXLElBQUksRUFBRXBSLElBQUksQ0FBQ1UsSUFBSSxDQUFDSSxRQUFTO0lBQUNELElBQUksRUFBRWIsSUFBSSxDQUFDVSxJQUFJLENBQUNHO0VBQUssQ0FBRSxDQUFDLGVBQ3BFOUssMERBQUEsQ0FBQ2dCLHFEQUFVO0lBQUNza0IsRUFBRSxFQUFFO01BQUVuYyxVQUFVLEVBQUUsTUFBTTtNQUFFd2MsV0FBVyxFQUFFO0lBQU87RUFBRSxHQUFFMWIsSUFBSSxDQUFDVSxJQUFJLENBQUNJLFFBQXFCLENBQUMsZUFDOUYvSywwREFBQSxDQUFDVSxxREFBVTtJQUFDc0csS0FBSyxFQUFDLFNBQVM7SUFBQzBlLE9BQU8sRUFBRXZhO0VBQWEsZ0JBQ2hEbkwsMERBQUEsQ0FBQytELG1FQUFNO0lBQUN5RCxLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFO0lBQVE7RUFBRSxDQUFFLENBQzFCLENBQ0wsQ0FDSCxDQUFDLGVBQ1RoSCwwREFBQSxDQUFDcUosTUFBTTtJQUFDd2MsT0FBTyxFQUFDLFdBQVc7SUFBQ3JkLElBQUksRUFBRWdELE9BQVE7SUFBQ3dhLFlBQVksRUFBRUEsQ0FBQSxLQUFNdmEsVUFBVSxDQUFDLElBQUksQ0FBRTtJQUFDd2EsWUFBWSxFQUFFQSxDQUFBLEtBQU14YSxVQUFVLENBQUMsS0FBSztFQUFFLGdCQUNySHpMLDBEQUFBLENBQUM2Qiw4REFBTztJQUNOeWpCLEVBQUUsRUFBRTtNQUNGQyxPQUFPLEVBQUUsTUFBTTtNQUNmVyxVQUFVLEVBQUUsUUFBUTtNQUNwQkMsY0FBYyxFQUFFLFVBQVU7TUFDMUJuZSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1I7RUFBRSxnQkFFRmhJLDBEQUFBLENBQUNVLHFEQUFVO0lBQUNnbEIsT0FBTyxFQUFFaGE7RUFBYSxnQkFDaEMxTCwwREFBQSxDQUFDb0Msd0VBQWUsTUFBRSxDQUNSLENBQ0wsQ0FBQyxlQUNWcEMsMERBQUEsQ0FBQ3lCLHFEQUFPLE1BQUUsQ0FBQyxlQUNYekIsMERBQUEsQ0FBQ2dDLDJEQUFJO0lBQUNzakIsRUFBRSxFQUFFO01BQUVjLE1BQU0sRUFBRTtJQUFRO0VBQUUsZ0JBQzVCcG1CLDBEQUFBLENBQUNHLGdFQUFhLE1BQUUsQ0FDWixDQUNBLENBQUMsZUFDVEgsMERBQUEsQ0FBQ2tCLHFEQUFHO0lBQ0Ywa0IsU0FBUyxFQUFDLE1BQU07SUFDaEJOLEVBQUUsRUFBRTtNQUNGdmUsZUFBZSxFQUFHRixLQUFLLElBQ3JCQSxLQUFLLENBQUN3ZixPQUFPLENBQUNDLElBQUksS0FBSyxPQUFPLEdBQzFCemYsS0FBSyxDQUFDd2YsT0FBTyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQ3ZCMWYsS0FBSyxDQUFDd2YsT0FBTyxDQUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDO01BQzdCUixRQUFRLEVBQUUsQ0FBQztNQUNYbGUsS0FBSyxFQUFFLE1BQU07TUFDYnVlLE1BQU0sRUFBRSxPQUFPO01BQ2ZJLFFBQVEsRUFBRTtJQUNaO0VBQUUsZ0JBRUZ4bUIsMERBQUEsQ0FBQzZCLDhEQUFPLE1BQUUsQ0FBQyxlQUNYN0IsMERBQUEsQ0FBQ2tDLGdFQUFTO0lBQUN1a0IsUUFBUSxFQUFDLE1BQU07SUFBQ25CLEVBQUUsRUFBRTtNQUFFb0IsRUFBRSxFQUFFO0lBQUU7RUFBRSxnQkFDdkMxbUIsMERBQUEsMkJBQ0VBLDBEQUFBO0lBQU0ybUIsUUFBUSxFQUFFbEU7RUFBdUIsZ0JBQ3JDemlCLDBEQUFBLENBQUNTLHFEQUFJO0lBQUNtbUIsU0FBUztJQUFDcGYsS0FBSyxFQUFFO01BQUUwZSxVQUFVLEVBQUUsUUFBUTtNQUFFVyxPQUFPLEVBQUU7SUFBTyxDQUFFO0lBQUNuZCxPQUFPLEVBQUUsQ0FBRTtJQUFDa2MsU0FBUyxFQUFFamxCLHFEQUFLQTtFQUFDLGdCQUM3RlgsMERBQUEsQ0FBQ1MscURBQUk7SUFBQ29ZLElBQUk7SUFBQ2lPLEVBQUUsRUFBRTtFQUFFLGdCQUNmOW1CLDBEQUFBLENBQUNrRCwyRkFBb0I7SUFBQzZqQixXQUFXLEVBQUU1akIsMkVBQVlBO0VBQUMsZ0JBQzlDbkQsMERBQUEsQ0FBQ2lELDhFQUFhO0lBQUMrakIsVUFBVSxFQUFFLENBQUMsWUFBWTtFQUFFLGdCQUN4Q2huQiwwREFBQSxDQUFDb0QsdUVBQVU7SUFDVDZqQixRQUFRO0lBQ1I1TCxJQUFJLEVBQUMsU0FBUztJQUNkNkwsS0FBSyxFQUFDLE1BQU07SUFDWkMsS0FBSyxFQUFFOWpCLDZDQUFLLENBQUNtSixPQUFPLENBQUU7SUFDdEI0YSxRQUFRLEVBQUd6aEIsSUFBSSxJQUFLOEcsVUFBVSxDQUFDOUcsSUFBSSxDQUFFO0lBQ3JDMmYsRUFBRSxFQUFFO01BQUV6ZCxLQUFLLEVBQUUsTUFBTTtNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2pELENBQ1ksQ0FDSyxDQUNsQixDQUFDLGVBQ1AvRywwREFBQSxDQUFDUyxxREFBSTtJQUFDb1ksSUFBSTtJQUFDaU8sRUFBRSxFQUFFO0VBQUUsZ0JBQ2Y5bUIsMERBQUEsQ0FBQ2tELDJGQUFvQjtJQUFDNmpCLFdBQVcsRUFBRTVqQiwyRUFBWUE7RUFBQyxnQkFDOUNuRCwwREFBQSxDQUFDaUQsOEVBQWE7SUFBQytqQixVQUFVLEVBQUUsQ0FBQyxZQUFZO0VBQUUsZ0JBQ3hDaG5CLDBEQUFBLENBQUNvRCx1RUFBVTtJQUNUNmpCLFFBQVE7SUFDUjVMLElBQUksRUFBQyxPQUFPO0lBQ1o2TCxLQUFLLEVBQUMsa0JBQWtCO0lBQ3hCQyxLQUFLLEVBQUU5akIsNkNBQUssQ0FBQ3VKLEtBQUssQ0FBRTtJQUNwQnlhLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUU7SUFDekJELFFBQVEsRUFBR3poQixJQUFJLElBQUtrSCxRQUFRLENBQUNsSCxJQUFJLENBQUU7SUFDbkMyZixFQUFFLEVBQUU7TUFBRXpkLEtBQUssRUFBRSxNQUFNO01BQUVkLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDakQsQ0FDWSxDQUNLLENBQ2xCLENBQUMsRUFFTitNLGtCQUFrQixJQUFJQSxrQkFBa0IsQ0FBQ21FLFdBQVcsQ0FBQyxDQUFDLENBQUNRLFFBQVEsQ0FBQyxTQUFTLENBQUMsaUJBQ3pFelksMERBQUEsQ0FBQUEsdURBQUEscUJBQ0VBLDBEQUFBLENBQUNTLHFEQUFJO0lBQUNvWSxJQUFJO0lBQUNpTyxFQUFFLEVBQUU7RUFBRSxnQkFDZjltQiwwREFBQSxDQUFDa0QsMkZBQW9CO0lBQUM2akIsV0FBVyxFQUFFNWpCLDJFQUFZQTtFQUFDLGdCQUM5Q25ELDBEQUFBLENBQUNpRCw4RUFBYTtJQUFDK2pCLFVBQVUsRUFBRSxDQUFDLFlBQVk7RUFBRSxnQkFDeENobkIsMERBQUEsQ0FBQ29ELHVFQUFVO0lBQ1Q4akIsS0FBSyxFQUFDLG1CQUFtQjtJQUN6QkMsS0FBSyxFQUFFN1IsUUFBUSxHQUFHalMsNkNBQUssQ0FBQ2lTLFFBQVEsQ0FBQyxHQUFHLElBQUs7SUFDekM4UixRQUFRLEVBQUdHLEdBQUcsSUFBS2hTLFdBQVcsQ0FBQ2dTLEdBQUcsSUFBSUEsR0FBRyxDQUFDcEMsT0FBTyxDQUFDLENBQUMsR0FBR29DLEdBQUcsQ0FBQ3JSLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUU7SUFDdkZvUCxFQUFFLEVBQUU7TUFBRXpkLEtBQUssRUFBRSxNQUFNO01BQUVkLGVBQWUsRUFBRTtJQUFRLENBQUU7SUFDaERtUCxNQUFNLEVBQUM7RUFBWSxDQUNwQixDQUNZLENBQ0ssQ0FDbEIsQ0FBQyxlQUNQbFcsMERBQUEsQ0FBQ1MscURBQUk7SUFBQ29ZLElBQUk7SUFBQ2lPLEVBQUUsRUFBRTtFQUFFLGdCQUNmOW1CLDBEQUFBLENBQUNrRCwyRkFBb0I7SUFBQzZqQixXQUFXLEVBQUU1akIsMkVBQVlBO0VBQUMsZ0JBQzlDbkQsMERBQUEsQ0FBQ2lELDhFQUFhO0lBQUMrakIsVUFBVSxFQUFFLENBQUMsWUFBWTtFQUFFLGdCQUN4Q2huQiwwREFBQSxDQUFDb0QsdUVBQVU7SUFDVDhqQixLQUFLLEVBQUMsaUJBQWlCO0lBQ3ZCQyxLQUFLLEVBQUV6UixNQUFNLEdBQUdyUyw2Q0FBSyxDQUFDcVMsTUFBTSxDQUFDLEdBQUcsSUFBSztJQUNyQzBSLFFBQVEsRUFBR0csR0FBRyxJQUFLNVIsU0FBUyxDQUFDNFIsR0FBRyxJQUFJQSxHQUFHLENBQUNwQyxPQUFPLENBQUMsQ0FBQyxHQUFHb0MsR0FBRyxDQUFDclIsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBRTtJQUNyRm9QLEVBQUUsRUFBRTtNQUFFemQsS0FBSyxFQUFFLE1BQU07TUFBRWQsZUFBZSxFQUFFO0lBQVEsQ0FBRTtJQUNoRG1QLE1BQU0sRUFBQztFQUFZLENBQ3BCLENBQ1ksQ0FDSyxDQUNsQixDQUNOLENBQ0gsZUFDRGxXLDBEQUFBLENBQUNTLHFEQUFJO0lBQUNvWSxJQUFJO0lBQUNpTyxFQUFFLEVBQUU7RUFBRyxHQUVkbGMsWUFBWSxDQUFDeVEsSUFBSSxLQUFLLEVBQUUsZ0JBQ3RCcmIsMERBQUE7SUFBS3dILEtBQUssRUFBRTtNQUFFK2QsT0FBTyxFQUFFLE1BQU07TUFBRWlDLEdBQUcsRUFBRTtJQUFPO0VBQUUsZ0JBQzNDeG5CLDBEQUFBLENBQUNZLHNEQUFTO0lBQ1I2bUIsUUFBUTtJQUNSemlCLEVBQUUsRUFBQyxjQUFjO0lBQ2pCcVcsSUFBSSxFQUFDLGNBQWM7SUFDbkI2TCxLQUFLLEVBQUMsZUFBZTtJQUNyQkMsS0FBSyxFQUFFdmMsWUFBWSxDQUFDeVEsSUFBSSxHQUFHelEsWUFBWSxDQUFDeVEsSUFBSSxHQUFHLEVBQUc7SUFDbERpSyxFQUFFLEVBQUU7TUFBRXpkLEtBQUssRUFBRSxNQUFNO01BQUVkLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDakQsQ0FBQyxlQUNGL0csMERBQUEsQ0FBQ29ILFlBQVk7SUFBQ3NnQixLQUFLLEVBQUMsT0FBTztJQUFDQyxTQUFTLEVBQUM7RUFBTyxnQkFDM0MzbkIsMERBQUEsQ0FBQ1UscURBQVU7SUFBQ2dsQixPQUFPLEVBQUV4RyxtQkFBb0I7SUFBQzFYLEtBQUssRUFBRTtNQUFFQyxRQUFRLEVBQUUsVUFBVTtNQUFFbWdCLEtBQUssRUFBRTtJQUFRO0VBQUUsZ0JBQ3hGNW5CLDBEQUFBLENBQUMyQyw0REFBbUI7SUFBQzZFLEtBQUssRUFBRTtNQUFFUixLQUFLLEVBQUU7SUFBVTtFQUFFLENBQUUsQ0FDekMsQ0FDQSxDQUNYLENBQUMsZ0JBRU5oSCwwREFBQSxDQUFDbUIsc0RBQVk7SUFDWDBtQixnQkFBZ0I7SUFDaEJDLE9BQU8sRUFBRS9aLFFBQVM7SUFDbEJnYSxjQUFjLEVBQUd6SSxNQUFNLElBQUtBLE1BQU0sQ0FBQzFVLFlBQWE7SUFDaERvZCxZQUFZLEVBQUVBLENBQUMzaEIsS0FBSyxFQUFFaVosTUFBTSxrQkFBTXRmLDBEQUFBLENBQUNrQixxREFBRyxFQUFLbUYsS0FBSyxFQUFHaVosTUFBTSxDQUFDMVUsWUFBa0IsQ0FBRztJQUMvRXFkLFdBQVcsRUFBR0MsTUFBTSxpQkFBS2xvQiwwREFBQSxDQUFDWSxzREFBUyxFQUFBNkYsUUFBQSxLQUFLeWhCLE1BQU07TUFBRWhCLEtBQUssRUFBQyxlQUFlO01BQUNELFFBQVE7SUFBQSxFQUFFLENBQUU7SUFDbEZHLFFBQVEsRUFBRUEsQ0FBQ3BiLENBQUMsRUFBRW9ULFFBQVEsS0FBS0QsWUFBWSxDQUFDQyxRQUFRLEdBQUdBLFFBQVEsR0FBRyxFQUFFLENBQUU7SUFDbEUrSSxJQUFJLEVBQUMsT0FBTztJQUNaN0MsRUFBRSxFQUFFO01BQUV6ZCxLQUFLLEVBQUUsTUFBTTtNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2pELENBSUQsQ0FBQyxlQUNQL0csMERBQUEsQ0FBQ1MscURBQUk7SUFBQ29ZLElBQUk7SUFBQ2lPLEVBQUUsRUFBRTtFQUFFLGdCQUNmOW1CLDBEQUFBLENBQUNZLHNEQUFTO0lBQ1JvRSxFQUFFLEVBQUMsWUFBWTtJQUNmcVcsSUFBSSxFQUFDLFlBQVk7SUFDakI2TCxLQUFLLEVBQUMsSUFBSTtJQUNWQyxLQUFLLEVBQUV6aEIsVUFBVSxLQUFLdVEsU0FBUyxHQUFHdlEsVUFBVSxHQUFHLEVBQUc7SUFDbEQwaEIsUUFBUSxFQUFHcGIsQ0FBQyxJQUFLZ0IsYUFBYSxDQUFDaEIsQ0FBQyxDQUFDb2MsTUFBTSxDQUFDakIsS0FBSyxDQUFFO0lBQy9DZ0IsSUFBSSxFQUFDLE9BQU87SUFDWjdDLEVBQUUsRUFBRTtNQUFFemQsS0FBSyxFQUFFLE1BQU07TUFBRWQsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNqRCxDQUNHLENBQUMsZUFDUC9HLDBEQUFBLENBQUNTLHFEQUFJO0lBQUNvWSxJQUFJO0lBQUNpTyxFQUFFLEVBQUU7RUFBRyxnQkFDaEI5bUIsMERBQUE7SUFBT29HLFNBQVMsRUFBQyxhQUFhO0lBQUNvQixLQUFLLEVBQUU7TUFBRUwsUUFBUSxFQUFFLE1BQU07TUFBRWtoQixZQUFZLEVBQUUsS0FBSztNQUFFQyxNQUFNLEVBQUU7SUFBaUI7RUFBRSxnQkFDeEd0b0IsMERBQUEsNkJBQ0VBLDBEQUFBLDBCQUNFQSwwREFBQTtJQUFJdW9CLE9BQU8sRUFBRSxDQUFFO0lBQUMvZ0IsS0FBSyxFQUFFO01BQUVxZixPQUFPLEVBQUUsS0FBSztNQUFFeUIsTUFBTSxFQUFFLGdCQUFnQjtNQUFFdmhCLGVBQWUsRUFBRSxTQUFTO01BQUVDLEtBQUssRUFBRTtJQUFRO0VBQUUsR0FBQyxhQUFlLENBQzlILENBQUMsZUFDTGhILDBEQUFBLDBCQUNFQSwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVxZixPQUFPLEVBQUUsS0FBSztNQUFFeUIsTUFBTSxFQUFFLGdCQUFnQjtNQUFFdmhCLGVBQWUsRUFBRTtJQUFVLENBQUU7SUFBQ3doQixPQUFPLEVBQUU7RUFBRSxHQUM3RmpULFFBQVEsSUFBSUksTUFBTSw4QkFBQXZRLE1BQUEsQ0FDWTlCLDZDQUFLLENBQUNpUyxRQUFRLENBQUMsQ0FBQ1ksTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFBL1EsTUFBQSxDQUFPOUIsNkNBQUssQ0FBQ3FTLE1BQU0sQ0FBQyxDQUFDUSxNQUFNLENBQUMsWUFBWSxDQUFDLHFDQUFBL1EsTUFBQSxDQUN2RTlCLDZDQUFLLENBQUN1SixLQUFLLENBQUMsQ0FBQ3NKLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FFbkUsQ0FDRixDQUNDLENBQUMsZUFDUmxXLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRTtJQUFpQjtFQUFFLEdBQUMsZUFBaUIsQ0FBQyxlQUMzRXRvQiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFO0lBQWlCLENBQUU7SUFBQ0MsT0FBTyxFQUFFO0VBQUUsR0FBRTNkLFlBQVksQ0FBQ3lRLElBQUksR0FBR3pRLFlBQVksQ0FBQ3lRLElBQUksR0FBRyxFQUFPLENBQUMsZUFDdEhyYiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFO0lBQWlCO0VBQUUsR0FBQyxZQUFjLENBQUMsZUFDeEV0b0IsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRTtJQUFpQjtFQUFFLGdCQUN0RHRvQiwwREFBQSxDQUFDWSxzREFBUztJQUNSdW5CLElBQUksRUFBQyxPQUFPO0lBQ1puakIsRUFBRSxFQUFDLFVBQVU7SUFDYnFXLElBQUksRUFBQyxVQUFVO0lBQ2Y4TCxLQUFLLEVBQUU1WixRQUFTO0lBQ2hCNlosUUFBUSxFQUFHcGIsQ0FBQyxJQUFLd0IsV0FBVyxDQUFDeEIsQ0FBQyxDQUFDb2MsTUFBTSxDQUFDakIsS0FBSyxDQUFFO0lBQzdDM2YsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUVkLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDckQsQ0FBSyxDQUNOLENBQUMsZUFDTC9HLDBEQUFBLDBCQUNFQSwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFO0lBQWlCO0VBQUUsR0FBQyxrQkFBb0IsQ0FBQyxlQUM5RXRvQiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFO0lBQWlCLENBQUU7SUFBQ0MsT0FBTyxFQUFFO0VBQUUsR0FBRXJVLGFBQWEsR0FBR0EsYUFBYSxHQUFHLEVBQU8sQ0FBQyxlQUM5R2xVLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRXlnQixNQUFNLEVBQUU7SUFBaUI7RUFBRSxHQUFDLE1BQVEsQ0FBQyxlQUNsRXRvQiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFO0lBQWlCO0VBQUUsZ0JBQ3REdG9CLDBEQUFBLENBQUNZLHNEQUFTO0lBQ1J1bkIsSUFBSSxFQUFDLE9BQU87SUFDWm5qQixFQUFFLEVBQUMsTUFBTTtJQUNUcVcsSUFBSSxFQUFDLE1BQU07SUFDWDhMLEtBQUssRUFBRXhaLElBQUs7SUFDWnlaLFFBQVEsRUFBR3BiLENBQUMsSUFBSzRCLE9BQU8sQ0FBQzVCLENBQUMsQ0FBQ29jLE1BQU0sQ0FBQ2pCLEtBQUssQ0FBRTtJQUN6QzNmLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ3JELENBQUssQ0FDTixDQUFDLGVBQ0wvRywwREFBQSwwQkFDRUEsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRTtJQUFpQjtFQUFFLEdBQUMsYUFBZSxDQUFDLGVBQ3pFdG9CLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRXlnQixNQUFNLEVBQUU7SUFBaUIsQ0FBRTtJQUFDQyxPQUFPLEVBQUU7RUFBRSxHQUFFN2lCLFVBQVUsR0FBR0EsVUFBVSxHQUFHLEVBQU8sQ0FBQyxlQUN4RzFGLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRXlnQixNQUFNLEVBQUU7SUFBaUI7RUFBRSxHQUFDLFdBQWEsQ0FBQyxlQUN2RXRvQiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFO0lBQWlCO0VBQUUsZ0JBQ3REdG9CLDBEQUFBLENBQUNZLHNEQUFTO0lBQ1J1bkIsSUFBSSxFQUFDLE9BQU87SUFDWmxCLFFBQVE7SUFDUmppQixFQUFFLEVBQUMsT0FBTztJQUNWcVcsSUFBSSxFQUFDLE9BQU87SUFDWjhMLEtBQUssRUFBRWhhLEtBQUssS0FBSyxDQUFDLEdBQUdBLEtBQUssR0FBRyxFQUFHO0lBQ2hDaWEsUUFBUSxFQUFHcGIsQ0FBQyxJQUFLb0IsUUFBUSxDQUFDcEIsQ0FBQyxDQUFDb2MsTUFBTSxDQUFDakIsS0FBSyxDQUFFO0lBQzFDM2YsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUVkLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDckQsQ0FBSyxDQUNOLENBQUMsZUFDTC9HLDBEQUFBLDBCQUNFQSwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFO0lBQWlCO0VBQUUsR0FBQyxPQUFTLENBQUMsZUFDbkV0b0IsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRTtJQUFpQixDQUFFO0lBQUNDLE9BQU8sRUFBRTtFQUFFLEdBQUVqYSxZQUFZLEdBQUdBLFlBQVksR0FBRyxFQUFPLENBQUMsZUFDNUd0TywwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFO0lBQWlCO0VBQUUsR0FBQyxXQUFhLENBQUMsZUFDdkV0b0IsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRTtJQUFpQjtFQUFFLEdBQUU1WixRQUFRLEtBQUt1SCxTQUFTLEdBQUd2SCxRQUFRLEdBQUcsRUFBTyxDQUNuRyxDQUFDLGVBQ0wxTywwREFBQSwwQkFDRUEsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRTtJQUFpQjtFQUFFLEdBQUMsTUFBUSxDQUFDLGVBQ2xFdG9CLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRXlnQixNQUFNLEVBQUU7SUFBaUIsQ0FBRTtJQUFDQyxPQUFPLEVBQUU7RUFBRSxHQUFFbGxCLDZDQUFLLENBQUNtSixPQUFPLENBQUMsQ0FBQzBKLE1BQU0sQ0FBQyxjQUFjLENBQU0sQ0FBQyxlQUNqSGxXLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRXlnQixNQUFNLEVBQUU7SUFBaUI7RUFBRSxHQUFDLFNBQVcsQ0FBQyxlQUNyRXRvQiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFO0lBQWlCO0VBQUUsR0FBRXhaLE1BQU0sS0FBS21ILFNBQVMsR0FBR25ILE1BQU0sR0FBRyxFQUFPLENBQy9GLENBQUMsZUFDTDlPLDBEQUFBLDBCQUNFQSwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFO0lBQWlCLENBQUU7SUFBQ0MsT0FBTyxFQUFFO0VBQUUsR0FBQyxZQUFjLENBQUMsZUFDcEZ2b0IsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRTtJQUFpQixDQUFFO0lBQUNDLE9BQU8sRUFBRTtFQUFFLEdBQUV6VSxrQkFBa0IsR0FBR0Esa0JBQWtCLEdBQUcsRUFBTyxDQUNySCxDQUNDLENBQUMsZUFDUjlULDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFcWYsT0FBTyxFQUFFLEtBQUs7TUFBRXlCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRXZoQixlQUFlLEVBQUU7SUFBVTtFQUFFLEdBQUMsY0FBZ0IsQ0FBQyxlQUN0Ry9HLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRXFmLE9BQU8sRUFBRSxLQUFLO01BQUV5QixNQUFNLEVBQUUsZ0JBQWdCO01BQUV2aEIsZUFBZSxFQUFFO0lBQVU7RUFBRSxHQUFDLG9CQUFzQixDQUFDLGVBQzVHL0csMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFcWYsT0FBTyxFQUFFLEtBQUs7TUFBRXlCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRXZoQixlQUFlLEVBQUU7SUFBVTtFQUFFLEdBQUMsZUFBaUIsQ0FBQyxlQUN2Ry9HLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRXFmLE9BQU8sRUFBRSxLQUFLO01BQUV5QixNQUFNLEVBQUUsZ0JBQWdCO01BQUV2aEIsZUFBZSxFQUFFO0lBQVUsQ0FBRTtJQUFDd2hCLE9BQU8sRUFBRTtFQUFFLEdBQUMsaUJBQW1CLENBQ2xILENBQ0MsQ0FBQyxlQUNSdm9CLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUUsVUFBVSxFQUFFO0lBQU07RUFBRSxHQUFDLFlBQWMsQ0FBQyxlQUMzRnhvQiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFLGdCQUFnQjtNQUFFRSxVQUFVLEVBQUU7SUFBTTtFQUFFLGdCQUN6RXhvQiwwREFBQSxZQUFHLEtBQUcsRUFBQ2tQLFdBQVcsQ0FBQzJQLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzFELE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUssQ0FBQyxlQUN4RW5iLDBEQUFBLFlBQUcsSUFBRSxFQUFDaWhCLGlCQUFpQixDQUFDcEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBSyxDQUMxRSxDQUFDLGVBQ0xuYiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFLGdCQUFnQjtNQUFFRSxVQUFVLEVBQUU7SUFBTTtFQUFFLGdCQUN6RXhvQiwwREFBQSxZQUFHLEtBQUcsRUFBQ3NQLGFBQWEsR0FBR0EsYUFBYSxDQUFDdVAsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUssQ0FBQyxlQUM5Rm5iLDBEQUFBLFlBQUcsSUFBRSxFQUFDa2hCLGtCQUFrQixDQUFDckMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBSyxDQUMzRSxDQUFDLGVBQ0xuYiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFLGdCQUFnQjtNQUFFRSxVQUFVLEVBQUU7SUFBTTtFQUFFLEdBQUMseUJBQTJCLENBQUMsZUFDeEd4b0IsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUUsVUFBVSxFQUFFO0lBQU07RUFBRSxnQkFDekV4b0IsMERBQUEsWUFBRyxLQUFHLEVBQUMwUCxjQUFjLEtBQUt1RyxTQUFTLEdBQUd2RyxjQUFjLENBQUNtUCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBSyxDQUFDLGVBQzlHbmIsMERBQUEsWUFBRyxJQUFFLEVBQUNtaEIsbUJBQW1CLENBQUN0QyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFLLENBQzVFLENBQ0YsQ0FBQyxlQUNMbmIsMERBQUEsMEJBQ0VBLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRXlnQixNQUFNLEVBQUUsZ0JBQWdCO01BQUVFLFVBQVUsRUFBRTtJQUFNO0VBQUUsR0FBQyxzQkFBd0IsQ0FBQyxlQUNyR3hvQiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFLGdCQUFnQjtNQUFFRSxVQUFVLEVBQUU7SUFBTTtFQUFFLGdCQUN6RXhvQiwwREFBQSxZQUFHLEtBQUcsRUFBQzhQLGNBQWMsQ0FBQytPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzFELE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUssQ0FBQyxlQUMzRW5iLDBEQUFBLFlBQUcsSUFBRSxFQUFDb2hCLG9CQUFvQixDQUFDdkMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBSyxDQUM3RSxDQUFDLGVBQ0xuYiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFLGdCQUFnQjtNQUFFRSxVQUFVLEVBQUU7SUFBTTtFQUFFLGdCQUN6RXhvQiwwREFBQSxZQUFHLEtBQUcsRUFBQ2tRLGdCQUFnQixDQUFDMk8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBSyxDQUFDLGVBQzdFbmIsMERBQUEsWUFBRyxJQUFFLEVBQUNxaEIsMkJBQTJCLENBQUN4QyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFLLENBQ3BGLENBQUMsZUFDTG5iLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRXlnQixNQUFNLEVBQUUsZ0JBQWdCO01BQUVFLFVBQVUsRUFBRTtJQUFNO0VBQUUsR0FBQyxXQUFhLENBQUMsZUFDMUZ4b0IsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUUsVUFBVSxFQUFFO0lBQU07RUFBRSxnQkFDekV4b0IsMERBQUEsWUFBRyxLQUFHLEVBQUNzUSxrQkFBa0IsS0FBSzJGLFNBQVMsR0FBRzNGLGtCQUFrQixDQUFDdU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUssQ0FBQyxlQUN0SG5iLDBEQUFBLFlBQUcsSUFBRSxFQUFDc2hCLDZCQUE2QixDQUFDekMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBSyxDQUN0RixDQUNGLENBQUMsZUFDTG5iLDBEQUFBLDBCQUNFQSwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFLGdCQUFnQjtNQUFFRSxVQUFVLEVBQUU7SUFBTTtFQUFFLEdBQUMsaUJBQW1CLENBQUMsZUFDaEd4b0IsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUUsVUFBVSxFQUFFO0lBQU07RUFBRSxnQkFDekV4b0IsMERBQUEsWUFBRyxLQUFHLEVBQUMwUSxTQUFTLENBQUNtTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFLLENBQUMsZUFDdEVuYiwwREFBQSxZQUFHLElBQUUsRUFBQ3VoQixlQUFlLENBQUMxQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFLLENBQ3hFLENBQUMsZUFDTG5iLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRXlnQixNQUFNLEVBQUUsZ0JBQWdCO01BQUVFLFVBQVUsRUFBRTtJQUFNO0VBQUUsZ0JBQ3pFeG9CLDBEQUFBLFlBQUcsS0FBRyxFQUFDOFEsV0FBVyxDQUFDK04sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBSyxDQUFDLGVBQ3hFbmIsMERBQUEsWUFBRyxJQUFFLEVBQUN3aEIsc0JBQXNCLENBQUMzQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFLLENBQy9FLENBQUMsZUFDTG5iLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRXlnQixNQUFNLEVBQUUsZ0JBQWdCO01BQUVFLFVBQVUsRUFBRTtJQUFNO0VBQUUsR0FBQyxNQUFRLENBQUMsZUFDckZ4b0IsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUUsVUFBVSxFQUFFO0lBQU07RUFBRSxnQkFDekV4b0IsMERBQUEsWUFBRyxLQUFHLEVBQUNzUixhQUFhLEtBQUsyRSxTQUFTLEdBQUczRSxhQUFhLENBQUN1TixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBSyxDQUFDLGVBQzVHbmIsMERBQUEsWUFBRyxJQUFFLEVBQUN5aEIsd0JBQXdCLENBQUM1QyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFLLENBQ2pGLENBQ0YsQ0FBQyxlQUNMbmIsMERBQUEsMEJBQ0VBLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRXlnQixNQUFNLEVBQUUsZ0JBQWdCO01BQUVFLFVBQVUsRUFBRTtJQUFNO0VBQUUsR0FBQyxzQkFBd0IsQ0FBQyxlQUNyR3hvQiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFLGdCQUFnQjtNQUFFRSxVQUFVLEVBQUU7SUFBTTtFQUFFLGdCQUN6RXhvQiwwREFBQSxZQUFHLEtBQUcsRUFBQzBSLGdCQUFnQixDQUFDbU4sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBSyxDQUFDLGVBQzdFbmIsMERBQUEsWUFBRyxJQUFFLEVBQUMwaEIsaUJBQWlCLENBQUM3QyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFLLENBQzFFLENBQUMsZUFDTG5iLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRXlnQixNQUFNLEVBQUUsZ0JBQWdCO01BQUVFLFVBQVUsRUFBRTtJQUFNO0VBQUUsZ0JBQ3pFeG9CLDBEQUFBLFlBQUcsS0FBRyxFQUFDOFIsdUJBQXVCLENBQUMrTSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFLLENBQUMsZUFDcEZuYiwwREFBQSxZQUFHLElBQUUsRUFBQzJoQix3QkFBd0IsQ0FBQzlDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzFELE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUssQ0FDakYsQ0FBQyxlQUNMbmIsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUUsVUFBVSxFQUFFO0lBQU07RUFBRSxHQUFDLGVBQWlCLENBQUMsZUFDOUZ4b0IsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUUsVUFBVSxFQUFFO0lBQU07RUFBRSxnQkFDekV4b0IsMERBQUEsWUFBRyxLQUFHLEVBQUMwUyxJQUFJLEtBQUt1RCxTQUFTLEdBQUd2RCxJQUFJLENBQUNtTSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBSyxDQUFDLGVBQzFGbmIsMERBQUEsWUFBRyxJQUFFLEVBQUM0aEIsd0JBQXdCLENBQUMvQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFLLENBQ2pGLENBQ0YsQ0FBQyxlQUNMbmIsMERBQUEsMEJBQ0VBLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRXlnQixNQUFNLEVBQUUsZ0JBQWdCO01BQUVFLFVBQVUsRUFBRTtJQUFNO0VBQUUsR0FBQyxPQUFTLENBQUMsZUFDdEZ4b0IsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUUsVUFBVSxFQUFFO0lBQU07RUFBRSxnQkFDekV4b0IsMERBQUEsWUFBRyxLQUFHLEVBQUNrUyxLQUFLLENBQUMyTSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFLLENBQUMsZUFDbEVuYiwwREFBQSxZQUFHLElBQUUsRUFBQzZoQixnQkFBZ0IsQ0FBQ2hELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzFELE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUssQ0FDekUsQ0FBQyxlQUNMbmIsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUUsVUFBVSxFQUFFO0lBQU07RUFBRSxnQkFDekV4b0IsMERBQUEsWUFBRyxLQUFHLEVBQUNzUyxZQUFZLENBQUN1TSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFLLENBQUMsZUFDekVuYiwwREFBQSxZQUFHLElBQUUsRUFBQzhoQix1QkFBdUIsQ0FBQ2pELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzFELE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUssQ0FDaEYsQ0FBQyxlQUNMbmIsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUUsVUFBVSxFQUFFO0lBQU07RUFBRSxHQUFDLGdDQUFrQyxDQUFDLGVBQy9HeG9CLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRXlnQixNQUFNLEVBQUUsZ0JBQWdCO01BQUVFLFVBQVUsRUFBRTtJQUFNO0VBQUUsZ0JBQ3pFeG9CLDBEQUFBLFlBQUcsS0FBRyxFQUFDa1IsUUFBUSxLQUFLK0UsU0FBUyxHQUFHL0UsUUFBUSxDQUFDMk4sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUssQ0FBQyxlQUNsR25iLDBEQUFBLFlBQUcsSUFBRSxFQUFDK2hCLHdCQUF3QixDQUFDbEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBSyxDQUNqRixDQUNGLENBQUMsZUFDTG5iLDBEQUFBLDBCQUNFQSwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFLGdCQUFnQjtNQUFFRSxVQUFVLEVBQUU7SUFBTTtFQUFFLEdBQUMsYUFBZSxDQUFDLGVBQzVGeG9CLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRXlnQixNQUFNLEVBQUUsZ0JBQWdCO01BQUVFLFVBQVUsRUFBRTtJQUFNO0VBQUUsZ0JBQ3pFeG9CLDBEQUFBLFlBQUcsS0FBRyxFQUFDOFUsYUFBYSxDQUFDK0osT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBSyxDQUFDLGVBQzFFbmIsMERBQUEsWUFBRyxJQUFFLEVBQUMsQ0FBQzZmLEtBQUssQ0FBQy9LLGFBQWEsR0FBRzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBR2lHLFVBQVUsQ0FBQ3JFLGFBQWEsR0FBRzVCLElBQUksQ0FBQyxFQUFFMkwsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBSyxDQUM3SCxDQUFDLGVBQ0xuYiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFLGdCQUFnQjtNQUFFRSxVQUFVLEVBQUU7SUFBTTtFQUFFLGdCQUN6RXhvQiwwREFBQSxZQUFHLEtBQUcsRUFBQzhVLGFBQWEsQ0FBQytKLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzFELE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUssQ0FBQyxlQUMxRW5iLDBEQUFBLFlBQUcsSUFBRSxFQUFDLENBQUM2ZixLQUFLLENBQUMvSyxhQUFhLEdBQUc1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdpRyxVQUFVLENBQUNyRSxhQUFhLEdBQUc1QixJQUFJLENBQUMsRUFBRTJMLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzFELE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUssQ0FDN0gsQ0FBQyxlQUNMbmIsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUUsVUFBVSxFQUFFO0lBQU07RUFBRSxHQUFDLGdCQUFrQixDQUFDLGVBQy9GeG9CLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRXlnQixNQUFNLEVBQUUsZ0JBQWdCO01BQUVFLFVBQVUsRUFBRTtJQUFNO0VBQUUsZ0JBQ3pFeG9CLDBEQUFBLFlBQUcsS0FBRyxFQUFDa1YsYUFBYSxLQUFLZSxTQUFTLEdBQUdmLGFBQWEsQ0FBQzJKLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzFELE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFLLENBQUMsZUFDNUduYiwwREFBQSxZQUFHLElBQUUsRUFBQyxDQUFDNmYsS0FBSyxDQUFDM0ssYUFBYSxHQUFHaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHaUcsVUFBVSxDQUFDakUsYUFBYSxHQUFHaEMsSUFBSSxDQUFDLEVBQUUyTCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFLLENBQzdILENBQ0YsQ0FDQyxDQUNGLENBQUMsZUFDUm5iLDBEQUFBO0lBQU9vRyxTQUFTLEVBQUMsYUFBYTtJQUFDb0IsS0FBSyxFQUFFO01BQUVMLFFBQVEsRUFBRSxNQUFNO01BQUVraEIsWUFBWSxFQUFFLEtBQUs7TUFBRUMsTUFBTSxFQUFFO0lBQWlCO0VBQUUsZ0JBQ3hHdG9CLDBEQUFBLDZCQUNFQSwwREFBQSwwQkFDRUEsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFcWYsT0FBTyxFQUFFLEtBQUs7TUFBRXlCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUcsU0FBUyxFQUFFO0lBQVMsQ0FBRTtJQUFDRixPQUFPLEVBQUU7RUFBRSxHQUFDLFdBQWEsQ0FDckcsQ0FBQyxlQUNMdm9CLDBEQUFBLDBCQUNFQSwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFLGdCQUFnQjtNQUFFSSxZQUFZLEVBQUU7SUFBTyxDQUFFO0lBQUNILE9BQU8sRUFBRTtFQUFFLGdCQUFDdm9CLDBEQUFBLGVBQU0sY0FBa0IsQ0FBQyxLQUFDLGVBQUFBLDBEQUFBLGVBQU0sTUFBSSxFQUFDc2dCLGlCQUFpQixDQUFDekIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUNyTSxDQUFDLGVBQ0xuYiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFLGdCQUFnQjtNQUFFSSxZQUFZLEVBQUU7SUFBTyxDQUFFO0lBQUNILE9BQU8sRUFBRTtFQUFFLGdCQUFDdm9CLDBEQUFBLGVBQU0sZ0JBQW9CLENBQUMsS0FBQyxlQUFBQSwwREFBQSxlQUFNLE1BQUksRUFBQ3VnQixrQkFBa0IsQ0FBQzFCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzFELE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFLLENBQUMsZUFDbk5uYiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFLGdCQUFnQjtNQUFFSSxZQUFZLEVBQUU7SUFBTyxDQUFFO0lBQUNILE9BQU8sRUFBRTtFQUFFLGdCQUFDdm9CLDBEQUFBLGVBQU0sa0JBQXNCLENBQUMsS0FBQyxlQUFBQSwwREFBQSxlQUFNLE1BQUksRUFBQ3dnQixvQkFBb0IsQ0FBQzNCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzFELE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFLLENBQ3BOLENBQUMsZUFDTG5iLDBEQUFBLDBCQUNFQSwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFLGdCQUFnQjtNQUFFSyxTQUFTLEVBQUU7SUFBTyxDQUFFO0lBQUNKLE9BQU8sRUFBRTtFQUFFLGdCQUFDdm9CLDBEQUFBLGVBQU0sY0FBa0IsQ0FBQyxLQUFDLGVBQUFBLDBEQUFBLGVBQU0sS0FBRyxFQUFDZ2lCLGdCQUFnQixDQUFDbkQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBUSxDQUNoTSxDQUFDLGVBQ0xuYiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFLGdCQUFnQjtNQUFFSyxTQUFTLEVBQUU7SUFBTyxDQUFFO0lBQUNKLE9BQU8sRUFBRTtFQUFFLGdCQUFDdm9CLDBEQUFBLGVBQU0sZ0JBQW9CLENBQUMsS0FBQyxlQUFBQSwwREFBQSxlQUFNLEtBQUcsRUFBQ2lpQixrQkFBa0IsQ0FBQ3BELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzFELE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFLLENBQUMsZUFDL01uYiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFLGdCQUFnQjtNQUFFSyxTQUFTLEVBQUU7SUFBTyxDQUFFO0lBQUNKLE9BQU8sRUFBRTtFQUFFLGdCQUFDdm9CLDBEQUFBLGVBQU0sa0JBQXNCLENBQUMsS0FBQyxlQUFBQSwwREFBQSxlQUFNLEtBQUcsRUFBQ2tpQixvQkFBb0IsQ0FBQ3JELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzFELE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQVEsQ0FBQyxLQUFLLENBQ2hOLENBQUMsZUFDTG5iLDBEQUFBLDBCQUNFQSwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUU4Z0IsTUFBTSxFQUFFO0lBQWlCLENBQUU7SUFBQ0MsT0FBTyxFQUFFO0VBQUUsR0FBQyxhQUFlLENBQUMsZUFDckV2b0IsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRTtJQUFpQixDQUFFO0lBQUNDLE9BQU8sRUFBRTtFQUFFLEdBQUMsS0FBRyxFQUFDOUosUUFBUSxDQUFDSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEVBQUMsTUFBSSxFQUFDdUYsZ0JBQWdCLENBQUM3QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEVBQUMsR0FBSyxDQUM3TSxDQUFDLGVBQ0xuYiwwREFBQSwwQkFDRUEsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFOGdCLE1BQU0sRUFBRTtJQUFpQixDQUFFO0lBQUNDLE9BQU8sRUFBRTtFQUFFLEdBQUMsaUJBQW1CLENBQUMsZUFDekV2b0IsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRTtJQUFpQixDQUFFO0lBQUNDLE9BQU8sRUFBRTtFQUFFLEdBQUMsS0FBRyxFQUFDL0gsb0JBQW9CLENBQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEVBQUMsTUFBSSxFQUFDK0csb0JBQW9CLENBQUNyRCxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEVBQUMsR0FBSyxDQUM3TixDQUFDLGVBQ0xuYiwwREFBQSwwQkFDRUEsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFOGdCLE1BQU0sRUFBRTtJQUFpQixDQUFFO0lBQUNDLE9BQU8sRUFBRTtFQUFFLEdBQUMsa0JBQW9CLENBQUMsZUFDMUV2b0IsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRTtJQUFpQixDQUFFO0lBQUNDLE9BQU8sRUFBRTtFQUFFLEdBQUMsS0FBRyxFQUFDelYsS0FBSyxDQUFDK0wsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxFQUFDLE1BQUksRUFBQ2dILGdCQUFnQixDQUFDdEQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxFQUFDLEdBQUssQ0FDMU0sQ0FBQyxlQUNMbmIsMERBQUEsMEJBQ0VBLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRThnQixNQUFNLEVBQUU7SUFBaUIsQ0FBRTtJQUFDQyxPQUFPLEVBQUU7RUFBRSxHQUFDLFlBQWMsQ0FBQyxlQUNwRXZvQiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFO0lBQWlCLENBQUU7SUFBQ0MsT0FBTyxFQUFFO0VBQUUsR0FBQyxLQUFHLEVBQUM5SCxTQUFTLENBQUM1QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEVBQUMsTUFBSSxFQUFDaUgsZUFBZSxDQUFDdkQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxFQUFDLEdBQUssQ0FDN00sQ0FBQyxlQUNMbmIsMERBQUEsMEJBQ0VBLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRXFmLE9BQU8sRUFBRSxLQUFLO01BQUV5QixNQUFNLEVBQUUsZ0JBQWdCO01BQUVHLFNBQVMsRUFBRTtJQUFTLENBQUU7SUFBQ0YsT0FBTyxFQUFFO0VBQUUsR0FBQyxXQUFhLENBQ3JHLENBQUMsZUFDTHZvQiwwREFBQSwwQkFDRUEsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFcWYsT0FBTyxFQUFFLEtBQUs7TUFBRXlCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUcsU0FBUyxFQUFFO0lBQVM7RUFBRSxHQUFDLGlCQUFtQixDQUFDLGVBQ2xHem9CLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRXlnQixNQUFNLEVBQUU7SUFBaUIsQ0FBRTtJQUFDQyxPQUFPLEVBQUU7RUFBRSxHQUFDLEtBQUcsRUFBQzlKLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDMUQsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBTSxDQUFDLGVBQ3hJbmIsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFcWYsT0FBTyxFQUFFLEtBQUs7TUFBRXlCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUcsU0FBUyxFQUFFO0lBQVM7RUFBRSxnQkFBQ3pvQiwwREFBQSxDQUFDWSxzREFBUztJQUN0RnFtQixRQUFRO0lBQ1JrQixJQUFJLEVBQUMsT0FBTztJQUNabmpCLEVBQUUsRUFBQyxNQUFNO0lBQ1RtaUIsS0FBSyxFQUFFalUsSUFBSSxLQUFLLENBQUMsR0FBR0EsSUFBSSxHQUFHLEVBQUc7SUFDOUIwVixXQUFXLEVBQUMsTUFBTTtJQUNsQnhCLFFBQVEsRUFBR3BiLENBQUMsSUFBS21ILE9BQU8sQ0FBQ25ILENBQUMsQ0FBQ29jLE1BQU0sQ0FBQ2pCLEtBQUssQ0FBRTtJQUN6QzNmLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ3JELENBQUssQ0FBQyxlQUNQL0csMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFcWYsT0FBTyxFQUFFLEtBQUs7TUFBRXlCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUcsU0FBUyxFQUFFO0lBQVM7RUFBRSxHQUFDLGdCQUFrQixDQUFDLGVBQ2pHem9CLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRXFmLE9BQU8sRUFBRSxLQUFLO01BQUV5QixNQUFNLEVBQUUsZ0JBQWdCO01BQUVHLFNBQVMsRUFBRTtJQUFTO0VBQUUsR0FBQyxJQUFFLEVBQUMvSCxnQkFBZ0IsQ0FBQzdCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzFELE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQU0sQ0FDckosQ0FBQyxlQUNMbmIsMERBQUEsMEJBQ0VBLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRXFmLE9BQU8sRUFBRSxLQUFLO01BQUV5QixNQUFNLEVBQUUsZ0JBQWdCO01BQUVHLFNBQVMsRUFBRTtJQUFTO0VBQUUsR0FBQyxpQkFBbUIsQ0FBQyxlQUNsR3pvQiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFO0lBQWlCLENBQUU7SUFBQ0MsT0FBTyxFQUFFO0VBQUUsZ0JBQ2xFdm9CLDBEQUFBLENBQUNZLHNEQUFTO0lBQ1J1bkIsSUFBSSxFQUFDLE9BQU87SUFDWlMsV0FBVyxFQUFDLGtCQUFrQjtJQUM5QnZOLElBQUksRUFBQyxhQUFhO0lBQ2xCOEwsS0FBSyxFQUFFelQsV0FBVyxLQUFLdUMsU0FBUyxHQUFHdkMsV0FBVyxHQUFHLENBQUU7SUFDbkQwVCxRQUFRLEVBQUdwYixDQUFDLElBQUsySCxjQUFjLENBQUMzSCxDQUFDLENBQUNvYyxNQUFNLENBQUNqQixLQUFLLENBQUU7SUFDaEQzZixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRWQsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNyRCxDQUNDLENBQUMsZUFDTC9HLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRXFmLE9BQU8sRUFBRSxLQUFLO01BQUV5QixNQUFNLEVBQUUsZ0JBQWdCO01BQUVHLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQUN6b0IsMERBQUEsQ0FBQ1ksc0RBQVM7SUFDdEZxbUIsUUFBUTtJQUNSa0IsSUFBSSxFQUFDLE9BQU87SUFDWm5qQixFQUFFLEVBQUMsTUFBTTtJQUNUbWlCLEtBQUssRUFBRWpVLElBQUksS0FBSyxDQUFDLEdBQUdBLElBQUksR0FBRyxFQUFHO0lBQzlCMFYsV0FBVyxFQUFDLE1BQU07SUFDbEJ4QixRQUFRLEVBQUdwYixDQUFDLElBQUttSCxPQUFPLENBQUNuSCxDQUFDLENBQUNvYyxNQUFNLENBQUNqQixLQUFLLENBQUU7SUFDekMzZixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFLE9BQU87TUFBRWQsZUFBZSxFQUFFO0lBQVE7RUFBRSxDQUNyRCxDQUFLLENBQUMsZUFDUC9HLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRXFmLE9BQU8sRUFBRSxLQUFLO01BQUV5QixNQUFNLEVBQUUsZ0JBQWdCO01BQUVHLFNBQVMsRUFBRTtJQUFTO0VBQUUsR0FBQyxnQkFBa0IsQ0FBQyxlQUNqR3pvQiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVxZixPQUFPLEVBQUUsS0FBSztNQUFFeUIsTUFBTSxFQUFFLGdCQUFnQjtNQUFFRyxTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUMzRXpvQiwwREFBQSxDQUFDWSxzREFBUztJQUNSdW5CLElBQUksRUFBQyxPQUFPO0lBQ1o5TSxJQUFJLEVBQUMsY0FBYztJQUNuQjhMLEtBQUssRUFBRTdULFlBQVksS0FBSzJDLFNBQVMsR0FBRzNDLFlBQVksR0FBRyxDQUFFO0lBQ3JEc1YsV0FBVyxFQUFDLG1CQUFtQjtJQUMvQnhCLFFBQVEsRUFBR3BiLENBQUMsSUFBS3VILGVBQWUsQ0FBQ3ZILENBQUMsQ0FBQ29jLE1BQU0sQ0FBQ2pCLEtBQUssQ0FBRTtJQUNqRDNmLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ3JELENBQ0MsQ0FDRixDQUFDLGVBQ0wvRywwREFBQSwwQkFDRUEsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFcWYsT0FBTyxFQUFFLEtBQUs7TUFBRXlCLE1BQU0sRUFBRSxnQkFBZ0I7TUFBRUcsU0FBUyxFQUFFO0lBQVM7RUFBRSxHQUFDLFlBQWMsQ0FBQyxlQUM3RnpvQiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUV5Z0IsTUFBTSxFQUFFO0lBQWlCLENBQUU7SUFBQ0MsT0FBTyxFQUFFO0VBQUUsR0FBQyxLQUFHLEVBQUN2SCxRQUFRLENBQUNuQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFNLENBQUMsZUFDeEluYiwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVxZixPQUFPLEVBQUUsS0FBSztNQUFFeUIsTUFBTSxFQUFFLGdCQUFnQjtNQUFFRyxTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUFDem9CLDBEQUFBLENBQUNZLHNEQUFTO0lBQ3RGcW1CLFFBQVE7SUFDUmtCLElBQUksRUFBQyxPQUFPO0lBQ1puakIsRUFBRSxFQUFDLE1BQU07SUFDVG1pQixLQUFLLEVBQUVqVSxJQUFJLEtBQUssQ0FBQyxHQUFHQSxJQUFJLEdBQUcsRUFBRztJQUM5QjBWLFdBQVcsRUFBQyxNQUFNO0lBQ2xCeEIsUUFBUSxFQUFHcGIsQ0FBQyxJQUFLbUgsT0FBTyxDQUFDbkgsQ0FBQyxDQUFDb2MsTUFBTSxDQUFDakIsS0FBSyxDQUFFO0lBQ3pDM2YsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRSxPQUFPO01BQUVkLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDckQsQ0FBSyxDQUFDLGVBQ1AvRywwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUVxZixPQUFPLEVBQUUsS0FBSztNQUFFeUIsTUFBTSxFQUFFLGdCQUFnQjtNQUFFRyxTQUFTLEVBQUU7SUFBUztFQUFFLEdBQUMsV0FBYSxDQUFDLGVBQzVGem9CLDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRXFmLE9BQU8sRUFBRSxLQUFLO01BQUV5QixNQUFNLEVBQUUsZ0JBQWdCO01BQUVHLFNBQVMsRUFBRTtJQUFTO0VBQUUsR0FBQyxJQUFFLEVBQUMzSCxTQUFTLENBQUNqQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMxRCxPQUFPLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFNLENBQzlJLENBQUMsZUFDTG5iLDBEQUFBLDBCQUNFQSwwREFBQTtJQUFJd0gsS0FBSyxFQUFFO01BQUU4Z0IsTUFBTSxFQUFFO0lBQWlCLENBQUU7SUFBQ0MsT0FBTyxFQUFFO0VBQUUsR0FBQyxXQUFhLENBQUMsZUFDbkV2b0IsMERBQUE7SUFBSXdILEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUUsT0FBTztNQUFFeWdCLE1BQU0sRUFBRTtJQUFpQixDQUFFO0lBQUNDLE9BQU8sRUFBRTtFQUFFLEdBQUVqVSxLQUFLLEVBQUMsbUJBQXFCLENBQy9GLENBQ0MsQ0FDRixDQUNILENBQUMsZUFDUHRVLDBEQUFBLENBQUNTLHFEQUFJO0lBQUNvWSxJQUFJO0lBQUNpTyxFQUFFLEVBQUU7RUFBRyxnQkFDaEI5bUIsMERBQUE7SUFBUTZvQixJQUFJLEVBQUMsUUFBUTtJQUFDemlCLFNBQVMsRUFBQyxjQUFjO0lBQUNvQixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFO0lBQU87RUFBRSxHQUFDLE1BQVksQ0FDakYsQ0FDRixDQUNGLENBQ0gsQ0FDSSxDQUNSLENBQ0YsQ0FBQyxlQUNON0gsMERBQUEsQ0FBQ29CLHNEQUFLO0lBQ0pvSCxJQUFJLEVBQUVxRCxLQUFNO0lBQ1ppZCxPQUFPLEVBQUU1YyxlQUFnQjtJQUN6QixtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUNsTSwwREFBQSxDQUFDa0IscURBQUc7SUFBQ29rQixFQUFFLEVBQUE3YyxhQUFBLENBQUFBLGFBQUEsS0FBT2pCLEtBQUs7TUFBRUssS0FBSyxFQUFFO0lBQUc7RUFBRyxnQkFDaEM3SCwwREFBQSxDQUFDb0gsWUFBWTtJQUFDc2dCLEtBQUssRUFBQyxPQUFPO0lBQUNDLFNBQVMsRUFBQztFQUFNLGdCQUMxQzNuQiwwREFBQSxDQUFDVSxxREFBVTtJQUFDZ2xCLE9BQU8sRUFBRXhaLGVBQWdCO0lBQUMxRSxLQUFLLEVBQUU7TUFBRUMsUUFBUSxFQUFFLFVBQVU7TUFBRW1nQixLQUFLLEVBQUU7SUFBUTtFQUFFLGdCQUNwRjVuQiwwREFBQSxDQUFDaUUsa0VBQUs7SUFBQ3VELEtBQUssRUFBRTtNQUFFUixLQUFLLEVBQUU7SUFBVTtFQUFFLENBQUUsQ0FDM0IsQ0FDQSxDQUFDLGVBQ2ZoSCwwREFBQSxDQUFDUyxxREFBSTtJQUFDbW1CLFNBQVM7SUFBQ3RCLEVBQUUsRUFBRTtNQUFFWSxVQUFVLEVBQUUsUUFBUTtNQUFFVyxPQUFPLEVBQUU7SUFBTyxDQUFFO0lBQUNuZCxPQUFPLEVBQUU7RUFBRSxnQkFDeEUxSiwwREFBQSxDQUFDUyxxREFBSTtJQUFDb1ksSUFBSTtJQUFDaU8sRUFBRSxFQUFFLEVBQUc7SUFBQ3hCLEVBQUUsRUFBRTtNQUFFbUQsU0FBUyxFQUFFO0lBQVM7RUFBRSxnQkFDN0N6b0IsMERBQUEsQ0FBQ2dCLHFEQUFVLFFBQUMseUNBQW1ELENBQUMsZUFDaEVoQiwwREFBQSx5QkFBR0EsMERBQUE7SUFBTW9HLFNBQVMsRUFBQyxNQUFNO0lBQUNvQixLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFO0lBQU07RUFBRSxHQUFDLFFBQVksQ0FBQyxLQUFDLGVBQUFoSCwwREFBQTtJQUFNb0csU0FBUyxFQUFDO0VBQU0sR0FBQyxxRUFBeUUsQ0FBSSxDQUFDLE1BQVEsQ0FBQyxlQUNqTHBHLDBEQUFBLFdBQUssQ0FBQyxlQUNOQSwwREFBQSxDQUFDUyxxREFBSTtJQUFDb1ksSUFBSTtJQUFDaU8sRUFBRSxFQUFFO0VBQUUsZ0JBQ2Y5bUIsMERBQUE7SUFBUTZvQixJQUFJLEVBQUMsUUFBUTtJQUFDbkQsT0FBTyxFQUFFQSxDQUFBLEtBQU0zYixRQUFRLENBQUMsbUJBQW1CLENBQUU7SUFBQzNELFNBQVMsRUFBQyxhQUFhO0lBQUNvQixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFO0lBQU87RUFBRSxHQUFDLEtBQVcsQ0FDN0gsQ0FBQyxlQUNQN0gsMERBQUEsQ0FBQ1MscURBQUk7SUFBQ29ZLElBQUk7SUFBQ2lPLEVBQUUsRUFBRTtFQUFFLGdCQUNmOW1CLDBEQUFBO0lBQVE2b0IsSUFBSSxFQUFDLFFBQVE7SUFBQ25ELE9BQU8sRUFBRXhaLGVBQWdCO0lBQUM5RixTQUFTLEVBQUMsYUFBYTtJQUFDb0IsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRTtJQUFPO0VBQUUsR0FBQyxJQUFVLENBQ3hHLENBQ0YsQ0FDSCxDQUNBLENBQUMsZUFFUjdILDBEQUFBLENBQUNvQixzREFBSztJQUNKb0gsSUFBSSxFQUFFd2EsZ0JBQWlCO0lBQ3ZCOEYsT0FBTyxFQUFFaEYsV0FBWTtJQUNyQmlGLG9CQUFvQjtJQUNwQkMsaUJBQWlCLEVBQUUzbkIsc0RBQVM7SUFDNUI0bkIsYUFBYSxFQUFFO01BQ2JDLE9BQU8sRUFBRTtJQUNYLENBQUU7SUFDRixtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUNscEIsMERBQUEsQ0FBQ2tCLHFEQUFHO0lBQUNva0IsRUFBRSxFQUFBN2MsYUFBQSxDQUFBQSxhQUFBLEtBQU9qQixLQUFLO01BQUVLLEtBQUssRUFBRTtJQUFHO0VBQUcsR0FFL0JnYixPQUFPLGdCQUFJN2lCLDBEQUFBLENBQUN5RCwwREFBTSxNQUFFLENBQUMsZ0JBRXBCekQsMERBQUE7SUFBS3dILEtBQUssRUFBRTtNQUFFMmUsY0FBYyxFQUFFLFFBQVE7TUFBRXNDLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQzVEem9CLDBEQUFBLHlCQUFHQSwwREFBQSxDQUFDdUQsd0VBQWU7SUFBQ2lFLEtBQUssRUFBRTtNQUFFUixLQUFLLEVBQUUsT0FBTztNQUFFb2YsTUFBTSxFQUFFLE1BQU07TUFBRXZlLEtBQUssRUFBRTtJQUFPO0VBQUUsQ0FBRSxDQUFJLENBQUMsZUFDcEY3SCwwREFBQSxhQUFJLDBCQUE0QixDQUFDLGVBQ2pDQSwwREFBQTtJQUFLd0gsS0FBSyxFQUFFO01BQUUrZCxPQUFPLEVBQUUsTUFBTTtNQUFFaUMsR0FBRyxFQUFFLE1BQU07TUFBRXJCLGNBQWMsRUFBRTtJQUFTO0VBQUUsZ0JBQ3JFbm1CLDBEQUFBO0lBQVEwbEIsT0FBTyxFQUFFQSxDQUFBLEtBQU10QixjQUFjLENBQUMsVUFBVSxDQUFFO0lBQUNoZSxTQUFTLEVBQUM7RUFBYSxHQUFDLFNBRW5FLENBQ0wsQ0FDRixDQUVKLENBQ0EsQ0FBQyxlQUNScEcsMERBQUEsQ0FBQ29CLHNEQUFLO0lBQ0pvSCxJQUFJLEVBQUVnYixjQUFlO0lBQ3JCc0YsT0FBTyxFQUFFM0UsZ0JBQWlCO0lBQzFCNEUsb0JBQW9CO0lBQ3BCQyxpQkFBaUIsRUFBRTNuQixzREFBUztJQUM1QjRuQixhQUFhLEVBQUU7TUFDYkMsT0FBTyxFQUFFO0lBQ1gsQ0FBRTtJQUNGLG1CQUFnQixtQkFBbUI7SUFDbkMsb0JBQWlCO0VBQXlCLGdCQUUxQ2xwQiwwREFBQSxDQUFDa0IscURBQUc7SUFBQ29rQixFQUFFLEVBQUE3YyxhQUFBLENBQUFBLGFBQUEsS0FBT2pCLEtBQUs7TUFBRUssS0FBSyxFQUFFO0lBQUc7RUFBRyxHQUUvQmdiLE9BQU8sZ0JBQUk3aUIsMERBQUEsQ0FBQ3lELDBEQUFNLE1BQUUsQ0FBQyxnQkFFcEJ6RCwwREFBQTtJQUFLd0gsS0FBSyxFQUFFO01BQUUyZSxjQUFjLEVBQUUsUUFBUTtNQUFFc0MsU0FBUyxFQUFFO0lBQVM7RUFBRSxnQkFDNUR6b0IsMERBQUEseUJBQUdBLDBEQUFBLENBQUN3RCxtRUFBVTtJQUFDZ0UsS0FBSyxFQUFFO01BQUVSLEtBQUssRUFBRSxLQUFLO01BQUVvZixNQUFNLEVBQUUsTUFBTTtNQUFFdmUsS0FBSyxFQUFFO0lBQU87RUFBRSxDQUFFLENBQUksQ0FBQyxlQUM3RTdILDBEQUFBO0lBQUl3SCxLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFO0lBQU07RUFBRSxHQUFDLGVBQWlCLENBQUMsZUFDL0NoSCwwREFBQTtJQUFRb0csU0FBUyxFQUFDLGFBQWE7SUFBQ3NmLE9BQU8sRUFBRXZCO0VBQWlCLEdBQUMsV0FFbkQsQ0FDTCxDQUVKLENBQ0EsQ0FBQyxlQUNSbmtCLDBEQUFBLENBQUNvQixzREFBSztJQUNKb0gsSUFBSSxFQUFFK1osS0FBTTtJQUNadUcsT0FBTyxFQUFFcEcsdUJBQXdCO0lBQ2pDLG1CQUFnQixtQkFBbUI7SUFDbkMsb0JBQWlCO0VBQXlCLGdCQUUxQzFpQiwwREFBQSxDQUFDa0IscURBQUc7SUFBQ29rQixFQUFFLEVBQUE3YyxhQUFBLENBQUFBLGFBQUEsS0FBT2pCLEtBQUs7TUFBRUssS0FBSyxFQUFFO0lBQUc7RUFBRyxnQkFDaEM3SCwwREFBQSxDQUFDb0gsWUFBWTtJQUFDc2dCLEtBQUssRUFBQyxPQUFPO0lBQUNDLFNBQVMsRUFBQztFQUFNLGdCQUMxQzNuQiwwREFBQSxDQUFDVSxxREFBVTtJQUFDZ2xCLE9BQU8sRUFBRWhELHVCQUF3QjtJQUFDbGIsS0FBSyxFQUFFO01BQUVDLFFBQVEsRUFBRSxVQUFVO01BQUVtZ0IsS0FBSyxFQUFFO0lBQVE7RUFBRSxnQkFDNUY1bkIsMERBQUEsQ0FBQ2lFLGtFQUFLO0lBQUN1RCxLQUFLLEVBQUU7TUFBRVIsS0FBSyxFQUFFO0lBQVU7RUFBRSxDQUFFLENBQzNCLENBQ0EsQ0FBQyxlQUNmaEgsMERBQUEsQ0FBQ2dCLHFEQUFVO0lBQUNnRSxFQUFFLEVBQUMsbUJBQW1CO0lBQUM2Z0IsT0FBTyxFQUFDLElBQUk7SUFBQ0QsU0FBUyxFQUFDO0VBQUksR0FBQyxvQkFFbkQsQ0FBQyxlQUNiNWxCLDBEQUFBO0lBQU0ybUIsUUFBUSxFQUFFNUI7RUFBYSxnQkFDM0Iva0IsMERBQUEsQ0FBQ1MscURBQUk7SUFBQ21tQixTQUFTO0lBQUNwZixLQUFLLEVBQUU7TUFBRTBlLFVBQVUsRUFBRSxRQUFRO01BQUVXLE9BQU8sRUFBRTtJQUFPLENBQUU7SUFBQ25kLE9BQU8sRUFBRTtFQUFFLGdCQUMzRTFKLDBEQUFBLENBQUNTLHFEQUFJO0lBQUNvWSxJQUFJO0lBQUNpTyxFQUFFLEVBQUU7RUFBRyxnQkFDaEI5bUIsMERBQUEsQ0FBQ1ksc0RBQVM7SUFDUnFtQixRQUFRO0lBQ1JqaUIsRUFBRSxFQUFDLFVBQVU7SUFDYnFXLElBQUksRUFBQyxVQUFVO0lBQ2Y4TixTQUFTO0lBQ1RDLElBQUksRUFBRSxDQUFFO0lBQ1JqQyxLQUFLLEVBQUV6UyxNQUFPO0lBQ2QwUyxRQUFRLEVBQUdwYixDQUFDLElBQUsySSxTQUFTLENBQUMzSSxDQUFDLENBQUNvYyxNQUFNLENBQUNqQixLQUFLLENBQUU7SUFDM0NELEtBQUssRUFBQyxVQUFVO0lBQ2hCNUIsRUFBRSxFQUFFO01BQUV6ZCxLQUFLLEVBQUUsTUFBTTtNQUFFZCxlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2pELENBQ0csQ0FBQyxlQUNQL0csMERBQUEsQ0FBQ1MscURBQUk7SUFBQ29ZLElBQUk7SUFBQ2lPLEVBQUUsRUFBRTtFQUFHLGdCQUNoQjltQiwwREFBQTtJQUFRNm9CLElBQUksRUFBQyxRQUFRO0lBQUN6aUIsU0FBUyxFQUFDLGFBQWE7SUFBQ29CLEtBQUssRUFBRTtNQUFFSyxLQUFLLEVBQUU7SUFBTztFQUFFLEdBQUMsTUFBWSxDQUNoRixDQUNGLENBQ0YsQ0FFSCxDQUNBLENBQ0gsQ0FBQztBQUVYO0FBRUEsaUVBQWVnQyxxQkFBcUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvdUNYO0FBQ007QUFDZ0M7QUFDNkQ7QUFDcEU7QUFDSjtBQUNFO0FBQ0k7QUFDRjtBQUMrQjtBQUN2RixTQUFTMUosYUFBYUEsQ0FBQSxFQUFHO0VBQ3ZCLG9CQUNFSCwwREFBQSxDQUFBQSx1REFBQSxxQkFDRUEsMERBQUEsQ0FBQ21xQixxREFBYztJQUFDN0UsRUFBRSxFQUFFO01BQUV0ZSxLQUFLLEVBQUU7SUFBTztFQUFFLGdCQUNwQ2hILDBEQUFBLENBQUNvcUIscURBQVk7SUFBQzlFLEVBQUUsRUFBRTtNQUFFdGUsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDbENoSCwwREFBQSxDQUFDNnBCLDJEQUFnQixNQUFFLENBQ1AsQ0FBQyxlQUNmN3BCLDBEQUFBLENBQUNxcUIsc0RBQVk7SUFBQ0UsT0FBTyxFQUFDO0VBQU0sQ0FBRSxDQUNoQixDQUFDLGVBRWpCdnFCLDBEQUFBLENBQUNtcUIscURBQWM7SUFBQzdFLEVBQUUsRUFBRTtNQUFFdGUsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcENoSCwwREFBQSxDQUFDb3FCLHFEQUFZO0lBQUM5RSxFQUFFLEVBQUU7TUFBRXRlLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDaEgsMERBQUEsQ0FBQytwQixrRUFBVSxNQUFFLENBQ0QsQ0FBQyxlQUNmL3BCLDBEQUFBLENBQUNxcUIsc0RBQVk7SUFBQ0UsT0FBTyxFQUFDO0VBQVUsQ0FBRSxDQUNwQixDQUFDLGVBQ2pCdnFCLDBEQUFBLENBQUNtcUIscURBQWM7SUFBQzdFLEVBQUUsRUFBRTtNQUFFdGUsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcENoSCwwREFBQSxDQUFDb3FCLHFEQUFZO0lBQUM5RSxFQUFFLEVBQUU7TUFBRXRlLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDaEgsMERBQUEsQ0FBQ2dxQixtRUFBVyxNQUFFLENBQ0YsQ0FBQyxlQUNmaHFCLDBEQUFBLENBQUNxcUIsc0RBQVk7SUFBQ0UsT0FBTyxFQUFDO0VBQVMsQ0FBRSxDQUNuQixDQUFDLGVBQ2pCdnFCLDBEQUFBLENBQUNtcUIscURBQWM7SUFBQzdFLEVBQUUsRUFBRTtNQUFFdGUsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcENoSCwwREFBQSxDQUFDb3FCLHFEQUFZO0lBQUM5RSxFQUFFLEVBQUU7TUFBRXRlLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDaEgsMERBQUEsQ0FBQ3dwQiwyREFBVSxNQUFFLENBQ0QsQ0FBQyxlQUNmeHBCLDBEQUFBLENBQUNxcUIsc0RBQVk7SUFBQ0UsT0FBTyxFQUFDO0VBQWMsQ0FBRSxDQUN4QixDQUFDLGVBQ2pCdnFCLDBEQUFBLENBQUNtcUIscURBQWM7SUFBQzdFLEVBQUUsRUFBRTtNQUFFdGUsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcENoSCwwREFBQSxDQUFDb3FCLHFEQUFZO0lBQUM5RSxFQUFFLEVBQUU7TUFBRXRlLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDaEgsMERBQUEsQ0FBQzJwQiwyREFBYSxNQUFFLENBQ0osQ0FBQyxlQUNmM3BCLDBEQUFBLENBQUNxcUIsc0RBQVk7SUFBQ0UsT0FBTyxFQUFDO0VBQWMsQ0FBRSxDQUN4QixDQUFDLGVBQ2pCdnFCLDBEQUFBLENBQUNtcUIscURBQWM7SUFBQzdFLEVBQUUsRUFBRTtNQUFFdGUsS0FBSyxFQUFFO0lBQU87RUFBRSxnQkFDcENoSCwwREFBQSxDQUFDb3FCLHFEQUFZO0lBQUM5RSxFQUFFLEVBQUU7TUFBRXRlLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ2xDaEgsMERBQUEsQ0FBQ2txQixvRUFBWSxNQUFFLENBQ0gsQ0FBQyxlQUNmbHFCLDBEQUFBLENBQUNxcUIsc0RBQVk7SUFBQ0UsT0FBTyxFQUFDO0VBQVMsQ0FBRSxDQUNuQixDQWFoQixDQUFDO0FBRVA7QUFFQSxpRUFBZXBxQixhQUFhLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvUGF5Um9sbC9QYXlSb2xsVXBkYXRlRm9ybVZpZXcuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9jb21wb25lbnQvU2lkZWJhckRhc2hFMy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNpZGViYXJEYXNoRTMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoRTMnO1xyXG5pbXBvcnQgJy4uLy4uL3ZpZXcuY3NzJztcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJztcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgeyBNZW51SXRlbSwgR3JpZCwgSWNvbkJ1dHRvbiwgUGFwZXIsIFRleHRGaWVsZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgVHlwb2dyYXBoeSwgc3R5bGVkLCBCb3gsIEF1dG9jb21wbGV0ZSwgTW9kYWwsIEJhY2tkcm9wLCBUYWJsZUNvbnRhaW5lciwgT3V0bGluZWRJbnB1dCwgSW5wdXRBZG9ybm1lbnQsIERpdmlkZXIgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgVG9vbHRpcCwgeyB0b29sdGlwQ2xhc3NlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbHRpcCc7XHJcbmltcG9ydCBNdWlBcHBCYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9BcHBCYXInO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCBNdWlEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgQWRkLCBBcnJvd1Vwd2FyZE91dGxpbmVkLCBEcmFnSW5kaWNhdG9yUm91bmRlZCwgRWRpdCwgUmVtb3ZlQ2lyY2xlT3V0bGluZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgJ3JlYWN0LXRvYXN0aWZ5L2Rpc3QvUmVhY3RUb2FzdGlmeS5jc3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5cclxuaW1wb3J0IHsgRGVtb0NvbnRhaW5lciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvaW50ZXJuYWxzL2RlbW8nO1xyXG5pbXBvcnQgeyBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvTG9jYWxpemF0aW9uUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBBZGFwdGVyRGF5anMgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0FkYXB0ZXJEYXlqcyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL0RhdGVQaWNrZXInO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgQXJyb3dCYWNrIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQXJyb3dCYWNrJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgQ3VzdG9tZXJGb3JtVmlldzIgZnJvbSAnLi4vQ3VzdG9tZXJWSWV3L0N1c3RvbWVyRm9ybVZpZXcyJztcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgSXRlbUZvcm1WaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtRm9ybVZpZXcyJztcclxuaW1wb3J0IEl0ZW1VcGRhdGVWaWV3MiBmcm9tICcuLi9JdGVtVmlldy9JdGVtVXBkYXRlVmlldzInO1xyXG5pbXBvcnQgbnVtYmVyVG9Xb3JkcyBmcm9tICdudW1iZXItdG8td29yZHMnXHJcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJhZ2dhYmxlLCBEcm9wcGFibGUgfSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuXHJcbmNvbnN0IHVuaXF1ZUJ5SWQgPSAoYXJyKSA9PiB7XHJcbiAgICBjb25zdCBzZWVuID0gbmV3IFNldCgpO1xyXG4gICAgcmV0dXJuIGFyci5maWx0ZXIoaXQgPT4ge1xyXG4gICAgICAgIGlmICghaXQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBjb25zdCBpZCA9IGl0Ll9pZCB8fCBpdC5pZCB8fCBcclxuICAgICAgICAgICAgICAgICAgKGl0LnBheU51bWJlciA/IGBQQVlfJHtpdC5wYXlOdW1iZXJ9YCA6IG51bGwpIHx8IFxyXG4gICAgICAgICAgICAgICAgICAoaXQuZXhwZW5zZU51bWJlciA/IGBFWFBfJHtpdC5leHBlbnNlTnVtYmVyfWAgOiBudWxsKSB8fCBcclxuICAgICAgICAgICAgICAgICAgKGl0LmlkSW5mbyA/IGBJTkZfJHtpdC5pZEluZm99YCA6IG51bGwpIHx8IFxyXG4gICAgICAgICAgICAgICAgICAoaXQucHJvamVjdE51bWJlciA/IGBQUkpfJHtpdC5wcm9qZWN0TnVtYmVyfWAgOiBudWxsKSB8fFxyXG4gICAgICAgICAgICAgICAgICAoaXQuaW52b2ljZU51bWJlciA/IGBJTlZfJHtpdC5pbnZvaWNlTnVtYmVyfWAgOiBudWxsKSB8fFxyXG4gICAgICAgICAgICAgICAgICAoaXQuZmFjdHVyZU51bWJlciA/IGBGQUNfJHtpdC5mYWN0dXJlTnVtYmVyfWAgOiBudWxsKSB8fFxyXG4gICAgICAgICAgICAgICAgICAoaXQucGF5bWVudE51bWJlciA/IGBQTVRfJHtpdC5wYXltZW50TnVtYmVyfWAgOiBudWxsKSB8fFxyXG4gICAgICAgICAgICAgICAgICAoaXQuZW1wbG95ZWVJZCA/IGBFTVBfJHtpdC5lbXBsb3llZUlkfWAgOiBudWxsKSB8fFxyXG4gICAgICAgICAgICAgICAgICAoYCR7aXQuZGF0ZX1fJHtpdC5tYWNoaW5lTm99XyR7aXQuYmxvY2tUeXBlfV8ke2l0Lndvcmtlck5hbWUgfHwgaXQub3BlcmF0b3JOYW1lIHx8ICcnfWApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChzZWVuLmhhcyhpZCkpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBzZWVuLmFkZChpZCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblxyXG5jb25zdCBMaWdodFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBCbGFja1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IHN0eWxlMiA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDgwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIFBheVJvbGxVcGRhdGVGb3JtVmlldygpIHtcclxuICBjb25zdCB7IGlkIH0gPSB1c2VQYXJhbXMoKVxyXG4gIGNvbnN0IG5hdmlnYXRlID0gdXNlTmF2aWdhdGUoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdEN1cnJlbnRVc2VyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIGRhdGEuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcbiAgY29uc3QgW29wZW4xLCBzZXRPcGVuMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5CYWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgc2V0T3BlbjEodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbcGF5TnVtYmVyLCBzZXRQYXlOdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3BheURhdGUsIHNldFBheURhdGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttb250aCwgc2V0TW9udGhdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlbXBsb3llZUlkLCBzZXRFbXBsb3llZUlkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZGF5c1csIHNldERheXNXXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtkYXlzT3Blbiwgc2V0RGF5c09wZW5dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW0xvcHMsIHNldExvcHNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2VtcGxveWVlLCBzZXRFbXBsb3llZV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbZW1wbG95ZWVOYW1lLCBzZXRFbXBsb3llZU5hbWVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtlbXBsb3llZVJvbGUsIHNldEVtcGxveWVlUm9sZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYmFua05hbWUsIHNldEJhbmtOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtiYW5rTm8sIHNldEJhbmtOb10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYmFzaWNTYWxhcnksIHNldEJhc2ljU2FsYXJ5XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtlYXJuaW5nU2FsYXJ5LCBzZXRFYXJuaW5nU2FsYXJ5XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthZHZhbmNlZFNhbGFyeSwgc2V0QWR2YW5jZWRTYWxhcnldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2Jhc2ljVHJhbnNwb3J0LCBzZXRCYXNpY1RyYW5zcG9ydF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdHJhbnNwb3J0RWFybmluZywgc2V0VHJhbnNwb3J0RWFybmluZ10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdHJhbnNwb3J0RGVkdWN0aW9uLCBzZXRUcmFuc3BvcnREZWR1Y3Rpb25dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2Zvb2RCYXNpYywgc2V0Rm9vZEJhc2ljXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtmb29kRWFybmluZywgc2V0Rm9vZEVhcm5pbmddID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2l0ZW1Mb3N0LCBzZXRJdGVtTG9zdF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZm9vZERlZHVjdGlvbiwgc2V0Rm9vZERlZHVjdGlvbl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYm91bmNlQWxsb3dhbmNlcywgc2V0Qm91bmNlQWxsb3dhbmNlc10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYm91bmNlQWxsb3dhbmNlc0Vhcm5pbmcsIHNldEJvdW5jZUFsbG93YW5jZXNFYXJuaW5nXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtvdGhlciwgc2V0T3RoZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW290aGVyRWFybmluZywgc2V0T3RoZXJFYXJuaW5nXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtsb2FuLCBzZXRMb2FuXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtib251cywgc2V0Qm9udXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2Ftb3VudFBheVVTRCwgc2V0QW1vdW50UGF5VVNEXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFthbW91bnRQYXlGQywgc2V0QW1vdW50UGF5RkNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2VtcGxveWVlRGVwYXJ0bWVudCwgc2V0RW1wbG95ZWVEZXBhcnRtZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtlbXBsb3llZVBob25lLCBzZXRFbXBsb3llZVBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt3b3Jkcywgc2V0VG90YWxXXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtyZWFzb24sIHNldFJlYXNvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW2ZhY3RvcnlFYXJuZWQsIHNldEZhY3RvcnlFYXJuZWRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2ZhY3RvcnlEYW1hZ2UsIHNldEZhY3RvcnlEYW1hZ2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3dlZWtGcm9tLCBzZXRXZWVrRnJvbV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbd2Vla1RvLCBzZXRXZWVrVG9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtcGF5Um9sbC8ke2lkfWApXHJcbiAgICAgICAgc2V0UGF5TnVtYmVyKE51bWJlcihyZXMuZGF0YT8uZGF0YT8ucGF5TnVtYmVyIHx8IHJlcy5kYXRhPy5wYXlOdW1iZXIgfHwgMCkpO1xyXG4gICAgICAgIHNldFBheURhdGUocmVzLmRhdGEuZGF0YS5wYXlEYXRlKTtcclxuICAgICAgICBzZXRNb250aChyZXMuZGF0YS5kYXRhLm1vbnRoKTtcclxuICAgICAgICBzZXREYXlzVyhyZXMuZGF0YS5kYXRhLmRheXNXKTtcclxuICAgICAgICBzZXREYXlzT3BlbihyZXMuZGF0YS5kYXRhLmRheXNPcGVuKTtcclxuICAgICAgICBzZXRMb3BzKHJlcy5kYXRhLmRhdGEuTG9wcyk7XHJcbiAgICAgICAgc2V0RW1wbG95ZWVOYW1lKHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lKTtcclxuICAgICAgICBzZXRCYXNpY1NhbGFyeShyZXMuZGF0YS5kYXRhLmJhc2ljU2FsYXJ5ICE9PSB1bmRlZmluZWQgPyByZXMuZGF0YS5kYXRhLmJhc2ljU2FsYXJ5IDogMCk7XHJcbiAgICAgICAgc2V0RWFybmluZ1NhbGFyeShyZXMuZGF0YS5kYXRhLmVhcm5pbmdTYWxhcnkpO1xyXG4gICAgICAgIHNldEFkdmFuY2VkU2FsYXJ5KHJlcy5kYXRhLmRhdGEuYWR2YW5jZWRTYWxhcnkpO1xyXG4gICAgICAgIHNldEJhc2ljVHJhbnNwb3J0KHJlcy5kYXRhLmRhdGEuYmFzaWNUcmFuc3BvcnQgIT09IHVuZGVmaW5lZCA/IHJlcy5kYXRhLmRhdGEuYmFzaWNUcmFuc3BvcnQgOiAwKTtcclxuICAgICAgICBzZXRUcmFuc3BvcnRFYXJuaW5nKHJlcy5kYXRhLmRhdGEudHJhbnNwb3J0RWFybmluZyk7XHJcbiAgICAgICAgc2V0VHJhbnNwb3J0RGVkdWN0aW9uKHJlcy5kYXRhLmRhdGEudHJhbnNwb3J0RGVkdWN0aW9uKTtcclxuICAgICAgICBzZXRGb29kQmFzaWMocmVzLmRhdGEuZGF0YS5mb29kQmFzaWMgIT09IHVuZGVmaW5lZCA/IHJlcy5kYXRhLmRhdGEuZm9vZEJhc2ljIDogMCk7XHJcbiAgICAgICAgc2V0Rm9vZEVhcm5pbmcocmVzLmRhdGEuZGF0YS5mb29kRWFybmluZyk7XHJcbiAgICAgICAgc2V0SXRlbUxvc3QocmVzLmRhdGEuZGF0YS5pdGVtTG9zdCk7XHJcbiAgICAgICAgc2V0Rm9vZERlZHVjdGlvbihyZXMuZGF0YS5kYXRhLmZvb2REZWR1Y3Rpb24pO1xyXG4gICAgICAgIHNldEJvdW5jZUFsbG93YW5jZXMocmVzLmRhdGEuZGF0YS5ib3VuY2VBbGxvd2FuY2VzICE9PSB1bmRlZmluZWQgPyByZXMuZGF0YS5kYXRhLmJvdW5jZUFsbG93YW5jZXMgOiAwKTtcclxuICAgICAgICBzZXRCb3VuY2VBbGxvd2FuY2VzRWFybmluZyhyZXMuZGF0YS5kYXRhLmJvdW5jZUFsbG93YW5jZXNFYXJuaW5nKTtcclxuICAgICAgICBzZXRPdGhlcihyZXMuZGF0YS5kYXRhLm90aGVyKTtcclxuICAgICAgICBzZXRPdGhlckVhcm5pbmcocmVzLmRhdGEuZGF0YS5vdGhlckVhcm5pbmcpO1xyXG4gICAgICAgIHNldExvYW4ocmVzLmRhdGEuZGF0YS5sb2FuKTtcclxuICAgICAgICBzZXRCb251cyhyZXMuZGF0YS5kYXRhLmJvbnVzKTtcclxuICAgICAgICBzZXRSYXRlKHJlcy5kYXRhLmRhdGEucmF0ZSk7XHJcbiAgICAgICAgc2V0QW1vdW50UGF5RkMocmVzLmRhdGEuZGF0YS5hbW91bnRQYXlGQyk7XHJcbiAgICAgICAgc2V0QW1vdW50UGF5VVNEKHJlcy5kYXRhLmRhdGEuYW1vdW50UGF5VVNEKTtcclxuICAgICAgICAvLyBMb2FkIEZhY3RvcnkgRGF0YVxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmZhY3RvcnlFYXJuZWQgIT09IHVuZGVmaW5lZCkgc2V0RmFjdG9yeUVhcm5lZChyZXMuZGF0YS5kYXRhLmZhY3RvcnlFYXJuZWQpO1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmZhY3RvcnlEYW1hZ2UgIT09IHVuZGVmaW5lZCkgc2V0RmFjdG9yeURhbWFnZShyZXMuZGF0YS5kYXRhLmZhY3RvcnlEYW1hZ2UpO1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLndlZWtGcm9tKSBzZXRXZWVrRnJvbShkYXlqcyhyZXMuZGF0YS5kYXRhLndlZWtGcm9tKS5mb3JtYXQoJ1lZWVktTU0tREQnKSk7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEud2Vla1RvKSBzZXRXZWVrVG8oZGF5anMocmVzLmRhdGEuZGF0YS53ZWVrVG8pLmZvcm1hdCgnWVlZWS1NTS1ERCcpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0b2FzdC5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcGF5cm9sbCBkYXRhLicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKVxyXG4gIH0sIFtdKVxyXG4gIC8vIEFkZCBPdGhlciBBbmQgQm9udXMuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUZldGNoID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2VtcGxveWVlYClcclxuICAgICAgICBzZXRFbXBsb3llZShyZXMuZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5zdGF0dXMgPT09ICdFbXBsb3llZCcgfHwgcm93LnN0YXR1cyA9PT0gJ1Jlc2lnbicpKTtcclxuICAgICAgICBjb25zdCByZXNQUmF0ZSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3BheW1lbnRSYXRlYCk7XHJcbiAgICAgICAgKHJlc1BSYXRlLmRhdGE/LmRhdGEgfHwgW10pLm1hcCgocm93KSA9PiBzZXRSYXRlKHJvdy5wYXltZW50UmF0ZSkpO1xyXG4gICAgICAgIHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93Ll9pZCA9PT0gZW1wbG95ZWVOYW1lLmlkKS5tYXAoKHJvdykgPT4gc2V0RW1wbG95ZWVJZChyb3cuZW1wbG95ZWVJZCkpXHJcbiAgICAgICAgcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuX2lkID09PSBlbXBsb3llZU5hbWUuaWQpLm1hcCgocm93KSA9PiBzZXRFbXBsb3llZVJvbGUocm93LmVtcGxveWVlUm9sZSkpXHJcbiAgICAgICAgcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuX2lkID09PSBlbXBsb3llZU5hbWUuaWQpLm1hcCgocm93KSA9PiBzZXRFbXBsb3llZURlcGFydG1lbnQocm93LmRlcGFydG1lbnQpKVxyXG4gICAgICAgIHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93Ll9pZCA9PT0gZW1wbG95ZWVOYW1lLmlkKS5tYXAoKHJvdykgPT4gc2V0RW1wbG95ZWVQaG9uZShyb3cuZW1wbG95ZWVQaG9uZSkpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGVtcGxveWVlIG9yIHJhdGUgZGF0YS4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaGFuZGxlRmV0Y2goKVxyXG4gIH0sIFtlbXBsb3llZU5hbWVdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEV4cGVuc2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaW5SYW5nZSA9IChkU3RyKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWRTdHIpIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIGNvbnN0IGQgPSBkYXlqcyhkU3RyKTtcclxuICAgICAgICAgIGlmICh3ZWVrRnJvbSAmJiB3ZWVrVG8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIChkLmlzU2FtZSh3ZWVrRnJvbSwgJ2RheScpIHx8IGQuaXNBZnRlcih3ZWVrRnJvbSkpICYmIChkLmlzU2FtZSh3ZWVrVG8sICdkYXknKSB8fCBkLmlzQmVmb3JlKHdlZWtUbykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGQuZm9ybWF0KCdNTS9ZWVlZJykgPT09IGRheWpzKG1vbnRoKS5mb3JtYXQoJ01NL1lZWVknKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9leHBlbnNlP3N1bW1hcnk9dHJ1ZWApO1xyXG4gICAgICAgIGNvbnN0IGFsbEV4cGVuc2VzID0gcmVzLmRhdGEuZGF0YSB8fCBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0U3VtID0gKGNhdGVnb3JpZXMpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHNlYXJjaFRlcm1zID0gQXJyYXkuaXNBcnJheShjYXRlZ29yaWVzKSA/IGNhdGVnb3JpZXMubWFwKGMgPT4gYy50b1VwcGVyQ2FzZSgpKSA6IFtjYXRlZ29yaWVzLnRvVXBwZXJDYXNlKCldO1xyXG4gICAgICAgICAgcmV0dXJuIGFsbEV4cGVuc2VzXHJcbiAgICAgICAgICAgIC5maWx0ZXIocm93ID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCBjYXQgPSByb3cuZXhwZW5zZUNhdGVnb3J5Py5leHBlbnNlc0NhdGVnb3J5Py50b1VwcGVyQ2FzZSgpIHx8IFwiXCI7XHJcbiAgICAgICAgICAgICAgY29uc3QgbWF0Y2hDYXQgPSBzZWFyY2hUZXJtcy5zb21lKHRlcm0gPT4gY2F0LmluY2x1ZGVzKHRlcm0pKTtcclxuICAgICAgICAgICAgICByZXR1cm4gcm93LmFjY291bnROYW1lID09PSAnRW1wbG95ZWUnICYmIG1hdGNoQ2F0ICYmIGluUmFuZ2Uocm93LmV4cGVuc2VEYXRlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm1hcChyb3cgPT4gKHsgZW1wOiByb3cuZW1wbG95ZWVOYW1lLmZpbHRlcihpdGVtID0+IGl0ZW0uaWRSb3cgPT09IGVtcGxveWVlTmFtZS5pZCkgfSkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmVtcC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgcm93LmVtcC5yZWR1Y2UoKHMsIGl0KSA9PiBzICsgcGFyc2VGbG9hdChpdC5hbW91bnQgfHwgMCksIDApLCAwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZXRUcmFuc3BvcnREZWR1Y3Rpb24oZ2V0U3VtKFsnVFJBTlNQT1JUJ10pKTtcclxuICAgICAgICBzZXRGb29kRGVkdWN0aW9uKGdldFN1bShbJ0ZPT0QnXSkpO1xyXG4gICAgICAgIHNldEFkdmFuY2VkU2FsYXJ5KGdldFN1bShbJ0FEVkFOQ0VEJywgJ0FDQ09NUFRFJywgJ0FWQU5DRSddKSk7XHJcbiAgICAgICAgc2V0TG9hbihnZXRTdW0oWydMT0FOJywgJ1BSRVQnXSkpO1xyXG4gICAgICAgIHNldEl0ZW1Mb3N0KGdldFN1bShbJ0lURU0gTE9TVCcsICdQRVJEVScsICdERURVQ1RJT04nXSkpO1xyXG4gICAgICAgIHNldEJvbnVzKGdldFN1bShbJ0JPTlVTJ10pKTtcclxuXHJcbiAgICAgICAgLy8gRkFDVE9SWSBDQUxDVUxBVElPTlNcclxuICAgICAgICBjb25zdCBpc1JhbmdlTW9kZSA9IHdlZWtGcm9tICYmIHdlZWtUbyAmJiB3ZWVrRnJvbS5pc0JlZm9yZSh3ZWVrVG8uYWRkKDEsICdkYXknKSk7XHJcbiAgICAgICAgaWYgKGlzUmFuZ2VNb2RlICYmIGVtcGxveWVlRGVwYXJ0bWVudCAmJiBlbXBsb3llZURlcGFydG1lbnQudG9VcHBlckNhc2UoKS5pbmNsdWRlcygnRkFDVE9SWScpKSB7XHJcbiAgICAgICAgICAvLyBPbmx5IHJlY2FsY3VsYXRlIGlmIGV4cGxpY2l0bHkgYXNrZWQgb3IgaWYgZGF0YSBpcyBtaXNzaW5nLCBcclxuICAgICAgICAgIC8vIGJ1dCBmb3IgY29uc2lzdGVuY3kgd2l0aCBGb3JtVmlldywgd2UgcmVjYWxjdWxhdGUgaGVyZS5cclxuICAgICAgICAgIGNvbnN0IGNvbmZpZ1JlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2Jsb2NrLWNvbmZpZ2ApO1xyXG4gICAgICAgICAgY29uc3QgY29uZmlnID0gY29uZmlnUmVzLmRhdGE/LmRhdGE/LlswXTtcclxuICAgICAgICAgIGNvbnN0IHJhdGVzID0gY29uZmlnPy5sYWJvclJhdGVzIHx8IHtcclxuICAgICAgICAgICAgcmF0ZTUwXzMzOiB7IHBlclNhY2s6IDEwMDAwIH0sXHJcbiAgICAgICAgICAgIHJhdGUyMDogeyB0MV9zYWNrczogNiwgdDFfcmF0ZTogOTAwMCwgdDJfc2Fja3M6IDcsIHQyX3JhdGU6IDE2NTAwLCB0M19yYXRlOiAxOTAwMCB9LFxyXG4gICAgICAgICAgICByYXRlMTU6IHsgdDFfc2Fja3M6IDUsIHQxX3JhdGU6IDkwMDAsIHQyX3NhY2tzOiA2LCB0Ml9yYXRlOiAxNjUwMCwgdDNfcmF0ZTogMTkwMDAgfSxcclxuICAgICAgICAgICAgcmF0ZTEwXzE0XzEyOiB7IHQxX3NhY2tzOiA2LCB0MV9yYXRlOiA5MDAwLCB0Ml9zYWNrczogNywgdDJfcmF0ZTogMTcwMDAsIHQzX3JhdGU6IDE5NTAwIH1cclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgY29uc3QgcHJvZFJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2Jsb2NrLXByb2R1Y3Rpb25gKTtcclxuICAgICAgICAgIGNvbnN0IGRhbVJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2Jsb2NrLWRhbWFnZWApO1xyXG4gICAgICAgICAgY29uc3QgYWxsUnVucyA9IHByb2RSZXMuZGF0YT8uZGF0YSB8fCBbXTtcclxuICAgICAgICAgIGNvbnN0IHJ1bnMgPSB1bmlxdWVCeUlkKGFsbFJ1bnMpLmZpbHRlcihyID0+IGluUmFuZ2Uoci5kYXRlKSk7XHJcbiAgICAgICAgICBjb25zdCBkYW1hZ2VzID0gZGFtUmVzLmRhdGE/LmRhdGE/LmZpbHRlcihkID0+IGluUmFuZ2UoZC5wcm9kdWN0aW9uRGF0ZSB8fCBkLmRhdGUpKSB8fCBbXTtcclxuXHJcbiAgICAgICAgICBjb25zdCBub3JtYWxpemUgPSAobikgPT4gbj8udG9TdHJpbmcoKS50cmltKCkudG9VcHBlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICcgJykgfHwgJyc7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXROYW1lID0gbm9ybWFsaXplKGVtcGxveWVlTmFtZS5uYW1lKTtcclxuXHJcbiAgICAgICAgICBjb25zdCBjYWxjdWxhdGVXb3JrZXJTaGFyZSA9ICh0eXBlU3RyLCBzLCBlLCBoYWxmKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlU3RyLmluY2x1ZGVzKFwiNTBcIikgfHwgdHlwZVN0ci5pbmNsdWRlcyhcIjMzXCIpKSByZXR1cm4gaGFsZiA/IChzICogMTAwMDApIC8gMiA6IChzICogMTAwMDApIC8gZTtcclxuICAgICAgICAgICAgbGV0IHIgPSB0eXBlU3RyLmluY2x1ZGVzKFwiMjBcIikgPyByYXRlcy5yYXRlMjAgOiAodHlwZVN0ci5pbmNsdWRlcyhcIjE1XCIpID8gcmF0ZXMucmF0ZTE1IDogcmF0ZXMucmF0ZTEwXzE0XzEyKTtcclxuICAgICAgICAgICAgaWYgKCFyKSByZXR1cm4gMDtcclxuICAgICAgICAgICAgY29uc3Qgc2Fja3MgPSBwYXJzZUludChzKSB8fCAwO1xyXG4gICAgICAgICAgICBsZXQgcmF0ZSA9IDA7XHJcbiAgICAgICAgICAgIGlmIChoYWxmKSByYXRlID0gc2Fja3MgPD0gci50MV9zYWNrcyA/IChyLnQxX3JhdGUgKiBzYWNrcykgLyAyIDogci50Ml9yYXRlIC8gMjtcclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHNhY2tzIDw9IHIudDFfc2Fja3MpIHJhdGUgPSByLnQxX3JhdGUgKiBzYWNrcztcclxuICAgICAgICAgICAgICBlbHNlIGlmIChzYWNrcyA8PSByLnQyX3NhY2tzKSByYXRlID0gci50Ml9yYXRlO1xyXG4gICAgICAgICAgICAgIGVsc2UgcmF0ZSA9IHIudDNfcmF0ZSB8fCByLnQ1X3JhdGUgfHwgMjQ1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJhdGU7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGNvbnN0IHJlc01peGVyID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vYmxvY2stbWl4ZXJgKTtcclxuICAgICAgICAgIGNvbnN0IG1peGVyUmVjb3JkcyA9IHJlc01peGVyLmRhdGE/LmRhdGEgfHwgW107XHJcbiAgICAgICAgICBjb25zdCBzdGFuZGFyZFNwb3RzID0gMztcclxuICAgICAgICAgIGxldCBlYXJuZWQgPSAwO1xyXG5cclxuICAgICAgICAgIC8vIENhbGN1bGF0ZSBkaXJlY3QgbWFjaGluZSBlYXJuaW5ncyBhbmQgcG9wdWxhdGUgbWl4ZXIgcG9vbFxyXG4gICAgICAgICAgcnVucy5mb3JFYWNoKHJ1biA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmtlcnMgPSBbXHJcbiAgICAgICAgICAgICAgeyBuOiBydW4ub3BlcmF0b3JOYW1lLCBoOiBydW4uaGFsZkRheU9wZXJhdG9yIH0sXHJcbiAgICAgICAgICAgICAgeyBuOiBydW4uaGVscGVyMSwgaDogcnVuLmhhbGZEYXlIZWxwZXIxIH0sXHJcbiAgICAgICAgICAgICAgeyBuOiBydW4uaGVscGVyMiwgaDogcnVuLmhhbGZEYXlIZWxwZXIyIH0sXHJcbiAgICAgICAgICAgICAgeyBuOiBydW4uaGVscGVyMywgaDogcnVuLmhhbGZEYXlIZWxwZXIzIH1cclxuICAgICAgICAgICAgXS5maWx0ZXIodyA9PiB3Lm4pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FsY3VsYXRlZFVuaXQgPSBjYWxjdWxhdGVXb3JrZXJTaGFyZShydW4uYmxvY2tUeXBlLCBydW4uc2Fja3NVc2VkLCBzdGFuZGFyZFNwb3RzLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGxldCB1bml0U2hhcmUgPSBjYWxjdWxhdGVkVW5pdDtcclxuXHJcbiAgICAgICAgICAgIGlmIChydW4ubGFib3JQb3QpIHtcclxuICAgICAgICAgICAgICBjb25zdCB3ZWlnaHRlZENyZXdDb3VudCA9IHdvcmtlcnMucmVkdWNlKChzdW0sIHcpID0+IHN1bSArICh3LmggPyAwLjUgOiAxKSwgMCk7XHJcbiAgICAgICAgICAgICAgY29uc3Qgb2xkU2NoZW1hRGlmZiA9IE1hdGguYWJzKHJ1bi5sYWJvclBvdCAtICh3ZWlnaHRlZENyZXdDb3VudCArIDEpICogY2FsY3VsYXRlZFVuaXQpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG5ld1NjaGVtYURpZmYgPSBNYXRoLmFicyhydW4ubGFib3JQb3QgLSB3ZWlnaHRlZENyZXdDb3VudCAqIGNhbGN1bGF0ZWRVbml0KTtcclxuICAgICAgICAgICAgICBpZiAobmV3U2NoZW1hRGlmZiA8IG9sZFNjaGVtYURpZmYpIHtcclxuICAgICAgICAgICAgICAgICAgdW5pdFNoYXJlID0gcnVuLmxhYm9yUG90IC8gTWF0aC5tYXgod2VpZ2h0ZWRDcmV3Q291bnQsIDAuNSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdW5pdFNoYXJlID0gcnVuLmxhYm9yUG90IC8gKHdlaWdodGVkQ3Jld0NvdW50ICsgMSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtZSA9IHdvcmtlcnMuZmluZCh3ID0+IG5vcm1hbGl6ZSh3Lm4pID09PSB0YXJnZXROYW1lKTtcclxuICAgICAgICAgICAgaWYgKG1lKSB7XHJcbiAgICAgICAgICAgICAgZWFybmVkICs9IG1lLmggPyB1bml0U2hhcmUgLyAyIDogdW5pdFNoYXJlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBhbmQgRGlzdHJpYnV0ZSBNaXhlciBTaGFyZXNcclxuICAgICAgICAgICAgY29uc3QgbWl4ZXJEYXlzID0gWy4uLm5ldyBTZXQobWl4ZXJSZWNvcmRzLmZpbHRlcihtID0+IGluUmFuZ2UobS5kYXRlKSkubWFwKG0gPT4gbS5kYXRlKSldO1xyXG4gICAgICAgICAgICBjb25zdCBtaXhlclJhdGUgPSBjb25maWc/Lm1peGVyUmF0ZVBlclNhY2sgIT09IHVuZGVmaW5lZCA/IGNvbmZpZy5taXhlclJhdGVQZXJTYWNrIDogMzAwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWl4ZXJEYXlzLmZvckVhY2goZGF0ZVN0ciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlRm9ybWF0dGVkID0gZGF5anMoZGF0ZVN0cikuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBydW5zT25EYXRlID0gYWxsUnVucy5maWx0ZXIociA9PiBkYXlqcyhyLmRhdGUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpID09PSBkYXRlRm9ybWF0dGVkKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsU2Fja3NPbkRhdGUgPSBydW5zT25EYXRlLnJlZHVjZSgoc3VtLCByKSA9PiBzdW0gKyAocGFyc2VJbnQoci5zYWNrc1VzZWQpIHx8IDApLCAwKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgbWl4ZXJzT25EYXRlID0gbWl4ZXJSZWNvcmRzLmZpbHRlcihtID0+IG0uZGF0ZSA9PT0gZGF0ZVN0cik7XHJcbiAgICAgICAgICAgICAgICBpZiAobWl4ZXJzT25EYXRlLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBtaXhlcnNPbkRhdGUuZm9yRWFjaCh3ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAody53b3JrZXJOYW1lICYmIG5vcm1hbGl6ZSh3Lndvcmtlck5hbWUpID09PSB0YXJnZXROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VQYXlvdXQgPSB0b3RhbFNhY2tzT25EYXRlICogbWl4ZXJSYXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGFyZSA9IHcuaGFsZkRheSA/IGJhc2VQYXlvdXQgKiAwLjUgOiBiYXNlUGF5b3V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXJuZWQgKz0gc2hhcmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGxldCBkYW1hZ2UgPSAwO1xyXG4gICAgICAgICAgZGFtYWdlcy5mb3JFYWNoKGQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IGFsbFJ1bnMuZmluZChyID0+IHIubWFjaGluZU5vID09PSBkLm1hY2hpbmVObyAmJiByLmJsb2NrVHlwZSA9PT0gZC5ibG9ja1R5cGUgJiYgZGF5anMoci5kYXRlKS5pc1NhbWUoZGF5anMoZC5wcm9kdWN0aW9uRGF0ZSB8fCBkLmRhdGUpLCAnZGF5JykpO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICBjb25zdCB3b3JrZXJzID0gW21hdGNoLm9wZXJhdG9yTmFtZSwgbWF0Y2guaGVscGVyMSwgbWF0Y2guaGVscGVyMiwgbWF0Y2guaGVscGVyM10uZmlsdGVyKG4gPT4gbik7XHJcbiAgICAgICAgICAgICAgaWYgKHdvcmtlcnMubWFwKG4gPT4gbm9ybWFsaXplKG4pKS5pbmNsdWRlcyh0YXJnZXROYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgZGFtYWdlICs9ICgoZC5kYW1hZ2VkQmxvY2tzICogKGQuZGFtYWdlUmF0ZSB8fCAzMDAwKSkgLyB3b3JrZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZXRGYWN0b3J5RWFybmVkKGVhcm5lZCk7XHJcbiAgICAgICAgICBzZXRGYWN0b3J5RGFtYWdlKGRhbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHRvYXN0LmVycm9yKCdFcnJvciBmZXRjaGluZyBleHBlbnNlIG9yIGZhY3RvcnkgZGF0YS4nKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRXhwZW5zZSgpO1xyXG4gIH0sIFttb250aCwgZW1wbG95ZWVOYW1lLCB3ZWVrRnJvbSwgd2Vla1RvLCBlbXBsb3llZURlcGFydG1lbnRdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRvdGFsTmV0KSB7XHJcbiAgICAgIGNvbnN0IHdob2xlUGFydCA9IE1hdGguZmxvb3IodG90YWxOZXQpXHJcbiAgICAgIGNvbnN0IGZyYWN0aW9uYWxQYXJ0ID0gKHRvdGFsTmV0ICUgMSkudG9GaXhlZCgyKS5zcGxpdCgnLicpWzFdO1xyXG4gICAgICBjb25zdCB3aG9sZVdvcmRzID0gbnVtYmVyVG9Xb3Jkcy50b1dvcmRzKHdob2xlUGFydClcclxuICAgICAgY29uc3QgZnJhY3Rpb25hbFdvcmRzID0gbnVtYmVyVG9Xb3Jkcy50b1dvcmRzKGZyYWN0aW9uYWxQYXJ0KVxyXG4gICAgICBzZXRUb3RhbFcoYCR7d2hvbGVXb3Jkc30gYW5kICR7ZnJhY3Rpb25hbFdvcmRzfSBjZW50c2ApXHJcbiAgICB9XHJcbiAgfSwgW3RvdGFsTmV0XSlcclxuICBjb25zdCBoYW5kbGVDbGVhckVtcGxveWVlID0gKCkgPT4ge1xyXG4gICAgc2V0RW1wbG95ZWVOYW1lKHtcclxuICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgIG5hbWU6IFwiXCJcclxuICAgIH0pO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAobmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IGVtcGxveWVlLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uID09PSBuZXdWYWx1ZSlcclxuICAgIHNldEVtcGxveWVlTmFtZSh7XHJcbiAgICAgIGlkOiBzZWxlY3RlZE9wdGlvbnM/Ll9pZCxcclxuICAgICAgbmFtZTogc2VsZWN0ZWRPcHRpb25zPy5lbXBsb3llZU5hbWVcclxuICAgIH0pO1xyXG4gICAgc2V0RW1wbG95ZWVJZChzZWxlY3RlZE9wdGlvbnM/LmVtcGxveWVlSWQpXHJcbiAgICBzZXRFbXBsb3llZVJvbGUoc2VsZWN0ZWRPcHRpb25zPy5lbXBsb3llZVJvbGUpXHJcbiAgICBzZXRFbXBsb3llZURlcGFydG1lbnQoc2VsZWN0ZWRPcHRpb25zPy5kZXBhcnRtZW50KVxyXG4gICAgc2V0RW1wbG95ZWVQaG9uZShzZWxlY3RlZE9wdGlvbnM/LmVtcGxveWVlUGhvbmUpXHJcbiAgICBzZXRCYXNpY1NhbGFyeShzZWxlY3RlZE9wdGlvbnM/LnNhbGFyeSlcclxuICAgIHNldEJhc2ljVHJhbnNwb3J0KHNlbGVjdGVkT3B0aW9ucy5iYXNpY1RyYW5zcG9ydCAhPT0gdW5kZWZpbmVkID8gc2VsZWN0ZWRPcHRpb25zLmJhc2ljVHJhbnNwb3J0IDogMClcclxuICAgIHNldEZvb2RCYXNpYyhzZWxlY3RlZE9wdGlvbnMuZm9vZEJhc2ljICE9PSB1bmRlZmluZWQgPyBzZWxlY3RlZE9wdGlvbnMuZm9vZEJhc2ljIDogMClcclxuICAgIHNldEJvdW5jZUFsbG93YW5jZXMoc2VsZWN0ZWRPcHRpb25zLmJvdW5jZUFsbG93YW5jZXMgIT09IHVuZGVmaW5lZCA/IHNlbGVjdGVkT3B0aW9ucy5ib3VuY2VBbGxvd2FuY2VzIDogMClcclxuICAgIHNldE90aGVyKHNlbGVjdGVkT3B0aW9ucy5vdGhlciAhPT0gdW5kZWZpbmVkID8gc2VsZWN0ZWRPcHRpb25zPy5vdGhlciA6IDApXHJcbiAgICBzZXRCYW5rTmFtZShzZWxlY3RlZE9wdGlvbnM/LmJhbmtOYW1lKVxyXG4gICAgc2V0QmFua05vKHNlbGVjdGVkT3B0aW9ucz8uYmFua0FjY291bnROdW1iZXIpXHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBEYXlPID0gMjY7XHJcbiAgICBjb25zdCBMTyA9IDQ7XHJcbiAgICBzZXREYXlzT3BlbihEYXlPKTtcclxuICAgIHNldExvcHMoTE8pO1xyXG4gIH0sIFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBkaXZpZGVkU2FsYXJ5ID0gYmFzaWNTYWxhcnkgLyBkYXlzT3BlblxyXG4gICAgY29uc3QgdG90YWxFYXJuaW5nU2FsYXJ5ID0gaXNOYU4oZGF5c1cgKiBkaXZpZGVkU2FsYXJ5KSA/IDAgOiBwYXJzZUZsb2F0KGRheXNXICogZGl2aWRlZFNhbGFyeSlcclxuICAgIHNldEVhcm5pbmdTYWxhcnkodG90YWxFYXJuaW5nU2FsYXJ5KVxyXG4gICAgY29uc3QgZGl2aWRlZFRyYW5zcG9ydCA9IGJhc2ljVHJhbnNwb3J0IC8gZGF5c09wZW5cclxuICAgIGNvbnN0IHRvdGFsRWFybmluZ1RyYW5zcG9ydCA9IGlzTmFOKGRheXNXICogZGl2aWRlZFRyYW5zcG9ydCkgPyAwIDogcGFyc2VGbG9hdChkYXlzVyAqIGRpdmlkZWRUcmFuc3BvcnQpXHJcbiAgICBzZXRUcmFuc3BvcnRFYXJuaW5nKHRvdGFsRWFybmluZ1RyYW5zcG9ydClcclxuICAgIGNvbnN0IGRpdmlkZWRGb29kID0gZm9vZEJhc2ljIC8gZGF5c09wZW5cclxuICAgIGNvbnN0IHRvdGFsRWFybmluZ0Zvb2QgPSBpc05hTihkYXlzVyAqIGRpdmlkZWRGb29kKSA/IDAgOiBwYXJzZUZsb2F0KGRheXNXICogZGl2aWRlZEZvb2QpXHJcbiAgICBzZXRGb29kRWFybmluZyh0b3RhbEVhcm5pbmdGb29kKVxyXG4gICAgY29uc3QgZGl2aWRlZEJvdW5jZSA9IGJvdW5jZUFsbG93YW5jZXMgLyBkYXlzT3BlblxyXG4gICAgY29uc3QgdG90YWxFYXJuaW5nQk91bmNlID0gaXNOYU4oZGF5c1cgKiBkaXZpZGVkQm91bmNlKSA/IDAgOiBwYXJzZUZsb2F0KGRheXNXICogZGl2aWRlZEJvdW5jZSlcclxuICAgIHNldEJvdW5jZUFsbG93YW5jZXNFYXJuaW5nKHRvdGFsRWFybmluZ0JPdW5jZSlcclxuICAgIGNvbnN0IGRpdmlkZWRPdGhlciA9IG90aGVyIC8gZGF5c09wZW5cclxuICAgIGNvbnN0IHRvdGFsRWFybmluZ090aGVyID0gaXNOYU4oZGF5c1cgKiBkaXZpZGVkT3RoZXIpID8gMCA6IHBhcnNlRmxvYXQoZGF5c1cgKiBkaXZpZGVkT3RoZXIpXHJcbiAgICBzZXRPdGhlckVhcm5pbmcodG90YWxFYXJuaW5nT3RoZXIpXHJcbiAgfSwgW2Jhc2ljU2FsYXJ5LCBkYXlzVywgYmFzaWNUcmFuc3BvcnQsIGZvb2RCYXNpYywgYm91bmNlQWxsb3dhbmNlcywgb3RoZXIsIGRheXNPcGVuXSlcclxuXHJcbiAgY29uc3QgdG90YWxBY3R1YWxTYWxhcnkgPSBwYXJzZUZsb2F0KGJhc2ljU2FsYXJ5KSArIHBhcnNlRmxvYXQoYmFzaWNUcmFuc3BvcnQpICsgcGFyc2VGbG9hdChmb29kQmFzaWMpICsgcGFyc2VGbG9hdChib3VuY2VBbGxvd2FuY2VzKSArIHBhcnNlRmxvYXQob3RoZXIpICsgcGFyc2VGbG9hdChmYWN0b3J5RWFybmVkKTtcclxuICBjb25zdCB0b3RhbEFjdHVhbEVhcm5pbmcgPSBwYXJzZUZsb2F0KGVhcm5pbmdTYWxhcnkpICsgcGFyc2VGbG9hdCh0cmFuc3BvcnRFYXJuaW5nKSArIHBhcnNlRmxvYXQoZm9vZEVhcm5pbmcpICsgcGFyc2VGbG9hdChib3VuY2VBbGxvd2FuY2VzRWFybmluZykgKyBwYXJzZUZsb2F0KG90aGVyRWFybmluZykgKyBwYXJzZUZsb2F0KGZhY3RvcnlFYXJuZWQpO1xyXG4gIGNvbnN0IHRvdGFsQWN0dWFsRGVkdWN0aW9uID0gcGFyc2VGbG9hdChhZHZhbmNlZFNhbGFyeSkgKyBwYXJzZUZsb2F0KHRyYW5zcG9ydERlZHVjdGlvbikgKyBwYXJzZUZsb2F0KGZvb2REZWR1Y3Rpb24pICsgcGFyc2VGbG9hdChsb2FuKSArIHBhcnNlRmxvYXQoaXRlbUxvc3QpICsgcGFyc2VGbG9hdChmYWN0b3J5RGFtYWdlKTtcclxuICBjb25zdCB0b3RhbE5ldCA9IHRvdGFsQWN0dWFsRWFybmluZyAhPT0gMCA/IHRvdGFsQWN0dWFsRWFybmluZyAtIHRvdGFsQWN0dWFsRGVkdWN0aW9uIDogMFxyXG4gIGNvbnN0IHRvdGFsUGFpZCA9IHRvdGFsTmV0ICsgYm9udXMgKyB0b3RhbEFjdHVhbERlZHVjdGlvblxyXG4gIGNvbnN0IHRvdGFsUGFpZERvbGxhcnMgPSByYXRlICE9PSAwID8gTWF0aC5taW4oKHRvdGFsTmV0IC8gcmF0ZSkgKiAxMDApIC8gMTAwIDogMFxyXG4gIGxldCBkaXZpZGVkQW1vdW50UGFpZEZjID0gcGFyc2VGbG9hdChhbW91bnRQYXlGQyAvIHJhdGUpLnRvRml4ZWQoMilcclxuICBsZXQgdG90YWxQYWlkVXNkID0gcGFyc2VGbG9hdChOdW1iZXIoYW1vdW50UGF5VVNEKSArIE51bWJlcihkaXZpZGVkQW1vdW50UGFpZEZjKSkudG9GaXhlZCgyKVxyXG4gIGNvbnN0IENyZWRpdFVTRCA9IE1hdGgucm91bmQoKHRvdGFsUGFpZERvbGxhcnMgLSB0b3RhbFBhaWRVc2QpICogMTAwKSAvIDEwMFxyXG4gIGNvbnN0IENyZWRpdEZDID0gcmF0ZSAhPT0gMCA/IE1hdGgucm91bmQoKENyZWRpdFVTRCAqIHJhdGUpICogMTAwKSAvIDEwMCA6IDBcclxuXHJcbiAgY29uc3QgYmFzaWNTYWxhcnlEb2xsYXIgPSBpc05hTihiYXNpY1NhbGFyeSAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQoYmFzaWNTYWxhcnkgLyByYXRlKTtcclxuICBjb25zdCBiYXNpY0Vhcm5pbmdEb2xsYXIgPSBpc05hTihlYXJuaW5nU2FsYXJ5IC8gcmF0ZSkgPyAwIDogcGFyc2VGbG9hdChlYXJuaW5nU2FsYXJ5IC8gcmF0ZSk7XHJcbiAgY29uc3QgYmFzaWNBZHZhbmNlZERvbGxhciA9IGlzTmFOKGFkdmFuY2VkU2FsYXJ5IC8gcmF0ZSkgPyAwIDogcGFyc2VGbG9hdChhZHZhbmNlZFNhbGFyeSAvIHJhdGUpO1xyXG4gIGNvbnN0IGJhc2ljVHJhbnNwb3J0RG9sbGFyID0gaXNOYU4oYmFzaWNUcmFuc3BvcnQgLyByYXRlKSA/IDAgOiBwYXJzZUZsb2F0KGJhc2ljVHJhbnNwb3J0IC8gcmF0ZSk7XHJcbiAgY29uc3QgYmFzaWNUcmFuc3BvcnRFYXJuaW5nRG9sbGFyID0gaXNOYU4odHJhbnNwb3J0RWFybmluZyAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQodHJhbnNwb3J0RWFybmluZyAvIHJhdGUpO1xyXG4gIGNvbnN0IGJhc2ljVHJhbnNwb3J0RGVkdWN0aW9uRG9sbGFyID0gaXNOYU4odHJhbnNwb3J0RGVkdWN0aW9uIC8gcmF0ZSkgPyAwIDogcGFyc2VGbG9hdCh0cmFuc3BvcnREZWR1Y3Rpb24gLyByYXRlKTtcclxuICBjb25zdCBiYXNpY0Zvb2REb2xsYXIgPSBpc05hTihmb29kQmFzaWMgLyByYXRlKSA/IDAgOiBwYXJzZUZsb2F0KGZvb2RCYXNpYyAvIHJhdGUpO1xyXG4gIGNvbnN0IGJhc2ljRm9vZEVhcm5pbmdEb2xsYXIgPSBpc05hTihmb29kRWFybmluZyAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQoZm9vZEVhcm5pbmcgLyByYXRlKTtcclxuICBjb25zdCBiYXNpY0Zvb2REZWR1Y3Rpb25Eb2xsYXIgPSBpc05hTihmb29kRGVkdWN0aW9uIC8gcmF0ZSkgPyAwIDogcGFyc2VGbG9hdChmb29kRGVkdWN0aW9uIC8gcmF0ZSk7XHJcbiAgY29uc3QgYmFzaWNCb3VuY2VEb2xsYXIgPSBpc05hTihib3VuY2VBbGxvd2FuY2VzIC8gcmF0ZSkgPyAwIDogcGFyc2VGbG9hdChib3VuY2VBbGxvd2FuY2VzIC8gcmF0ZSk7XHJcbiAgY29uc3QgYmFzaWNCb3VuY2VFYXJuaW5nRG9sbGFyID0gaXNOYU4oYm91bmNlQWxsb3dhbmNlc0Vhcm5pbmcgLyByYXRlKSA/IDAgOiBwYXJzZUZsb2F0KGJvdW5jZUFsbG93YW5jZXNFYXJuaW5nIC8gcmF0ZSk7XHJcbiAgY29uc3QgYmFzaWNMb2FuRGVkdWN0aW9uRG9sbGFyID0gaXNOYU4obG9hbiAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQobG9hbiAvIHJhdGUpO1xyXG4gIGNvbnN0IGJhc2ljT3RoZXJEb2xsYXIgPSBpc05hTihvdGhlciAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQob3RoZXIgLyByYXRlKTtcclxuICBjb25zdCBiYXNpY090aGVyRWFybmluZ0RvbGxhciA9IGlzTmFOKG90aGVyRWFybmluZyAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQob3RoZXJFYXJuaW5nIC8gcmF0ZSk7XHJcbiAgY29uc3QgYmFzaWNJdGVtRGVkdWN0aW9uRG9sbGFyID0gaXNOYU4oaXRlbUxvc3QgLyByYXRlKSA/IDAgOiBwYXJzZUZsb2F0KGl0ZW1Mb3N0IC8gcmF0ZSk7XHJcbiAgY29uc3QgVG90YWxCYXNpY0RvbGxhciA9IGlzTmFOKHRvdGFsQWN0dWFsU2FsYXJ5IC8gcmF0ZSkgPyAwIDogcGFyc2VGbG9hdCh0b3RhbEFjdHVhbFNhbGFyeSAvIHJhdGUpO1xyXG4gIGNvbnN0IFRvdGFsRWFybmluZ0RvbGxhciA9IGlzTmFOKHRvdGFsQWN0dWFsRWFybmluZyAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQodG90YWxBY3R1YWxFYXJuaW5nIC8gcmF0ZSk7XHJcbiAgY29uc3QgVG90YWxERWR1Y3Rpb25Eb2xsYXIgPSBpc05hTih0b3RhbEFjdHVhbERlZHVjdGlvbiAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQodG90YWxBY3R1YWxEZWR1Y3Rpb24gLyByYXRlKTtcclxuICBjb25zdCBUb3RhbEJvbnVzRG9sbGFyID0gaXNOYU4oYm9udXMgLyByYXRlKSA/IDAgOiBwYXJzZUZsb2F0KGJvbnVzIC8gcmF0ZSk7XHJcbiAgY29uc3QgVG90YWxQQWlkRG9sbGFyID0gaXNOYU4odG90YWxQYWlkIC8gcmF0ZSkgPyAwIDogcGFyc2VGbG9hdCh0b3RhbFBhaWQgLyByYXRlKTtcclxuXHJcbiAgey8qKiBsb2FkaW5nIFN0YXJ0ICovIH1cclxuICBjb25zdCBbb3BlbjIsIHNldE9wZW4yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZVJlYXNvbiA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW4yKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVcGRhdGVSZWFzb24gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nT3Blbk1vZGFsLCBzZXRMb2FkaW5nT3Blbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbFVwZGF0ZSwgc2V0TG9hZGluZ09wZW5Nb2RhbFVwZGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWxVcGRhdGUodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbChmYWxzZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICBuYXZpZ2F0ZSgtMSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbFVwZGF0ZShmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbChmYWxzZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlY2lzaW9uID0gKG5hdmlnYXRlKSA9PiB7XHJcbiAgICAvL05hdmlnYXRlIEJhc2VkIG9uIHRoIERlY2lzaW9uXHJcbiAgICBpZiAobmF2aWdhdGUgPT09ICdwcmV2aW91cycpIHtcclxuICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xyXG4gICAgfSBlbHNlIGlmIChuYXZpZ2F0ZSA9PT0gJ3N0YXknKSB7XHJcbiAgICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHsvKiogbG9hZGluZyBFbmQgKi8gfVxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZUNvbW1lbnQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86IGlkLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgTW9kaWZ5IFBBWVJPTEwgJyArICcgUFItJyArIFN0cmluZyhwYXlOdW1iZXIpLnBhZFN0YXJ0KDYsICcwJyksXHJcbiAgICAgIHJlYXNvbixcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogbmV3IERhdGUoKVxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uL2AsIGRhdGEpXHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBzZXRSZWFzb24oXCJcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHN0YXR1cyA9ICcnXHJcbiAgaWYgKHBhcnNlSW50KGFtb3VudFBheVVTRCkgPT09IDAgJiYgcGFyc2VJbnQoYW1vdW50UGF5RkMpID09PSAwKSB7XHJcbiAgICBzdGF0dXMgPSAnVW5QYWlkJ1xyXG4gIH0gZWxzZSBpZiAocGFyc2VJbnQoQ3JlZGl0RkMpID09PSAwICYmIHBhcnNlSW50KENyZWRpdFVTRCkgPT09IDApIHtcclxuICAgIHN0YXR1cyA9ICdQYWlkJ1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzdGF0dXMgPSAnUGFydGlhbGx5LVBhaWQnXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZW1wbG95ZWVEZXBhcnRtZW50ICYmIGVtcGxveWVlRGVwYXJ0bWVudC50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKCdGQUNUT1JZJykpIHtcclxuICAgICAgaWYgKCF3ZWVrRnJvbSB8fCAhd2Vla1RvKSB7XHJcbiAgICAgICAgYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IHRoZSBXb3JrIFBlcmlvZCAoRnJvbS9UbykgZm9yIHRoaXMgRmFjdG9yeSBlbXBsb3llZS5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBwYXlEYXRlLFxyXG4gICAgICBtb250aCxcclxuICAgICAgZGF5c1csIHN0YXR1cyxcclxuICAgICAgZGF5c09wZW4sIExvcHMsIGJhc2ljU2FsYXJ5LCBlYXJuaW5nU2FsYXJ5LCBhZHZhbmNlZFNhbGFyeSwgYmFzaWNUcmFuc3BvcnQsIHRyYW5zcG9ydEVhcm5pbmcsIHRyYW5zcG9ydERlZHVjdGlvbiwgZm9vZEJhc2ljLFxyXG4gICAgICBmb29kRWFybmluZywgaXRlbUxvc3QsIGZvb2REZWR1Y3Rpb24sIGJvdW5jZUFsbG93YW5jZXMsIGJvdW5jZUFsbG93YW5jZXNFYXJuaW5nLCBvdGhlciwgb3RoZXJFYXJuaW5nLCBsb2FuLFxyXG4gICAgICBib251cywgdG90YWxBY3R1YWxTYWxhcnksIHRvdGFsQWN0dWFsRWFybmluZywgdG90YWxBY3R1YWxEZWR1Y3Rpb24sIHRvdGFsTmV0LCB0b3RhbFBhaWQsIHJhdGUsIHRvdGFsUGFpZERvbGxhcnMsIHdvcmRzLFxyXG4gICAgICBlbXBsb3llZU5hbWUsIGFtb3VudFBheVVTRCwgYW1vdW50UGF5RkMsIENyZWRpdEZDLCBDcmVkaXRVU0QsIHVwZGF0ZVM6IGZhbHNlLFxyXG4gICAgICBlbXBsb3llZURlcGFydG1lbnQsIC8vIEV4cGxpY2l0bHkgc2VuZCBkZXBhcnRtZW50XHJcbiAgICAgIC8vIE1ldGFkYXRhXHJcbiAgICAgIGZhY3RvcnlFYXJuZWQsIGZhY3RvcnlEYW1hZ2UsXHJcbiAgICAgIHdlZWtGcm9tOiB3ZWVrRnJvbSAmJiBkYXlqcyh3ZWVrRnJvbSkuaXNWYWxpZCgpID8gZGF5anMod2Vla0Zyb20pLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogbnVsbCxcclxuICAgICAgd2Vla1RvOiB3ZWVrVG8gJiYgZGF5anMod2Vla1RvKS5pc1ZhbGlkKCkgPyBkYXlqcyh3ZWVrVG8pLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogbnVsbFxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLXBheVJvbGwvJHtpZH1gLCBkYXRhKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIC8vIE9wZW4gTG9hZGluZyBWaWV3XHJcbiAgICAgICAgaGFuZGxlQ3JlYXRlQ29tbWVudCgpXHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTWFrZSBuZXcgUGF5bWVudFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU9wZW5CYWNrfT5cclxuICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlQWRtaW5WaWV3IG5hbWU9e3VzZXIuZGF0YS51c2VyTmFtZX0gcm9sZT17dXNlci5kYXRhLnJvbGV9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT57dXNlci5kYXRhLnVzZXJOYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNpZGVCYXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2lkZUJhcihmYWxzZSl9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaEUzIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiA0IH19ID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlT3BlblVwZGF0ZVJlYXNvbn0+XHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfSBjb21wb25lbnQ9e1BhcGVyfT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncGF5RGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMocGF5RGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRQYXlEYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbW9udGgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J01vbnRoIG9mIFBheW1lbnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKG1vbnRoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3cz17Wydtb250aCcsICd5ZWFyJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRNb250aChkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICB7ZW1wbG95ZWVEZXBhcnRtZW50ICYmIGVtcGxveWVlRGVwYXJ0bWVudC50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKCdGQUNUT1JZJykgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGF5IFBlcmlvZCAtIEZST01cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17d2Vla0Zyb20gPyBkYXlqcyh3ZWVrRnJvbSkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0V2Vla0Zyb20odmFsICYmIHZhbC5pc1ZhbGlkKCkgPyB2YWwuZm9ybWF0KCdZWVlZLU1NLUREJykgOiBudWxsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cIkREL01NL1lZWVlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGF5IFBlcmlvZCAtIFRPXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3dlZWtUbyA/IGRheWpzKHdlZWtUbykgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbCkgPT4gc2V0V2Vla1RvKHZhbCAmJiB2YWwuaXNWYWxpZCgpID8gdmFsLmZvcm1hdCgnWVlZWS1NTS1ERCcpIDogbnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJERC9NTS9ZWVlZXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOYW1lLm5hbWUgIT09ICcnID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdlbXBsb3llZU5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbXBsb3llZU5hbWUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRW1wbG95ZWUgTmFtZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbXBsb3llZU5hbWUubmFtZSA/IGVtcGxveWVlTmFtZS5uYW1lIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbGVhclwiIHBsYWNlbWVudD0ncmlnaHQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xlYXJFbXBsb3llZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CbGFja1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDbGVhcmFibGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtlbXBsb3llZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLmVtcGxveWVlTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJPcHRpb249eyhwcm9wcywgb3B0aW9uKSA9PiAoPEJveCB7Li4ucHJvcHN9PntvcHRpb24uZW1wbG95ZWVOYW1lfTwvQm94Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IDxUZXh0RmllbGQgey4uLnBhcmFtc30gbGFiZWw9XCJFbXBsb3llZSBOYW1lXCIgcmVxdWlyZWQgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdWYWx1ZSkgPT4gaGFuZGxlQ2hhbmdlKG5ld1ZhbHVlID8gbmV3VmFsdWUgOiAnJyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD0nZW1wbG95ZWVJZCdcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtcGxveWVlSWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nSWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZWVJZCAhPT0gdW5kZWZpbmVkID8gZW1wbG95ZWVJZCA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbXBsb3llZUlkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlY29uZFRhYmxlXCIgc3R5bGU9e3sgZm9udFNpemU6ICcyMHB4JywgbWFyZ2luQm90dG9tOiAnMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49ezV9IHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyMzMTZGRjYnLCBjb2xvcjogJ3doaXRlJyB9fT5HbG9iYWwgR2F0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0gY29sU3Bhbj17NX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2Vla0Zyb20gJiYgd2Vla1RvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYFNhbGFyeSBTbGlwIGZvciBQZXJpb2Q6ICR7ZGF5anMod2Vla0Zyb20pLmZvcm1hdCgnREQvTU0vWVlZWScpfSB0byAke2RheWpzKHdlZWtUbykuZm9ybWF0KCdERC9NTS9ZWVlZJyl9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGBTYWxhcnkgU2xpcCBmb3IgdGhlIG1vbnRoIE9mOiAke2RheWpzKG1vbnRoKS5mb3JtYXQoJ01NTU0tWVlZWScpfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PkVtcGxveWVlIE5hbWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PntlbXBsb3llZU5hbWUubmFtZSA/IGVtcGxveWVlTmFtZS5uYW1lIDogJyd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5Ub3RhbCBEYXlzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdkYXlzT3BlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZGF5c09wZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlzT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREYXlzT3BlbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PkVtcGxveWVlIERldGFpbHM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PntlbXBsb3llZVBob25lID8gZW1wbG95ZWVQaG9uZSA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+TE9QczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nTG9wcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nTG9wcydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e0xvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TG9wcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PkVtcGxveWVlIElkPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT57ZW1wbG95ZWVJZCA/IGVtcGxveWVlSWQgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlBhaWQgRGF5czwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0nZGF5c1cnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2RheXNXJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5c1cgIT09IDAgPyBkYXlzVyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERheXNXKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+R3JhZGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PntlbXBsb3llZVJvbGUgPyBlbXBsb3llZVJvbGUgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PkJhbmsgTmFtZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0+e2JhbmtOYW1lICE9PSB1bmRlZmluZWQgPyBiYW5rTmFtZSA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fT5EYXRlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT57ZGF5anMocGF5RGF0ZSkuZm9ybWF0KCdERC1NTU1NLVlZWVknKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PkEvQyBOby48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PntiYW5rTm8gIT09IHVuZGVmaW5lZCA/IGJhbmtObyA6ICcnfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICc0MDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT5EZXBhcnRtZW50PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICc0MDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXszfT57ZW1wbG95ZWVEZXBhcnRtZW50ID8gZW1wbG95ZWVEZXBhcnRtZW50IDogJyd9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+RWFybmluZyAoRkMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+QWN0dWFsIFNhbGFyeSAoRkMpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYmFja2dyb3VuZENvbG9yOiAnI2U4ZjdmZScgfX0+RWFybmluZ3MgKEZDKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJhY2tncm91bmRDb2xvcjogJyNlOGY3ZmUnIH19IGNvbFNwYW49ezJ9PkRlZHVjdGlvbnMgKEZDKTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19PkJhc2ljIHdhZ2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZDIHtiYXNpY1NhbGFyeS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JCB7YmFzaWNTYWxhcnlEb2xsYXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZDIHtlYXJuaW5nU2FsYXJ5ID8gZWFybmluZ1NhbGFyeS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiQge2Jhc2ljRWFybmluZ0RvbGxhci50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19PkluIGFkdmFuY2VkIGFsbG93YW5jZXMgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GQyB7YWR2YW5jZWRTYWxhcnkgIT09IHVuZGVmaW5lZCA/IGFkdmFuY2VkU2FsYXJ5LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JCB7YmFzaWNBZHZhbmNlZERvbGxhci50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+VHJhbnNwb3J0IGFsbG93YW5jZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZDIHtiYXNpY1RyYW5zcG9ydC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JCB7YmFzaWNUcmFuc3BvcnREb2xsYXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZDIHt0cmFuc3BvcnRFYXJuaW5nLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4kIHtiYXNpY1RyYW5zcG9ydEVhcm5pbmdEb2xsYXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5UcmFuc3BvcnQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZDIHt0cmFuc3BvcnREZWR1Y3Rpb24gIT09IHVuZGVmaW5lZCA/IHRyYW5zcG9ydERlZHVjdGlvbi50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiQge2Jhc2ljVHJhbnNwb3J0RGVkdWN0aW9uRG9sbGFyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5Gb29kIGFsbG93YW5jZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZDIHtmb29kQmFzaWMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiQge2Jhc2ljRm9vZERvbGxhci50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RkMge2Zvb2RFYXJuaW5nLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4kIHtiYXNpY0Zvb2RFYXJuaW5nRG9sbGFyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+Rm9vZDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RkMge2Zvb2REZWR1Y3Rpb24gIT09IHVuZGVmaW5lZCA/IGZvb2REZWR1Y3Rpb24udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4kIHtiYXNpY0Zvb2REZWR1Y3Rpb25Eb2xsYXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19PkJvdW5jZSBhbGxvd2FuY2VzIDMlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GQyB7Ym91bmNlQWxsb3dhbmNlcy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JCB7YmFzaWNCb3VuY2VEb2xsYXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZDIHtib3VuY2VBbGxvd2FuY2VzRWFybmluZy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JCB7YmFzaWNCb3VuY2VFYXJuaW5nRG9sbGFyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+TG9hbiByZWNvdmVyeTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RkMge2xvYW4gIT09IHVuZGVmaW5lZCA/IGxvYW4udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4kIHtiYXNpY0xvYW5EZWR1Y3Rpb25Eb2xsYXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19Pk90aGVyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GQyB7b3RoZXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiQge2Jhc2ljT3RoZXJEb2xsYXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZDIHtvdGhlckVhcm5pbmcudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiQge2Jhc2ljT3RoZXJFYXJuaW5nRG9sbGFyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzEuMicgfX0+SXRlbSBsb3N0IHJlY292ZXJ5IC8gRGVkdWN0aW9uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GQyB7aXRlbUxvc3QgIT09IHVuZGVmaW5lZCA/IGl0ZW1Mb3N0LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JCB7YmFzaWNJdGVtRGVkdWN0aW9uRG9sbGFyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5GYWN0b3J5IFBvdDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RkMge2ZhY3RvcnlFYXJuZWQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiQgeyhpc05hTihmYWN0b3J5RWFybmVkIC8gcmF0ZSkgPyAwIDogcGFyc2VGbG9hdChmYWN0b3J5RWFybmVkIC8gcmF0ZSkpLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgbGluZUhlaWdodDogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GQyB7ZmFjdG9yeUVhcm5lZC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JCB7KGlzTmFOKGZhY3RvcnlFYXJuZWQgLyByYXRlKSA/IDAgOiBwYXJzZUZsb2F0KGZhY3RvcnlFYXJuZWQgLyByYXRlKSkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBsaW5lSGVpZ2h0OiAnNXB4JyB9fT5EYW1hZ2UgUGVuYWx0eTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGxpbmVIZWlnaHQ6ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RkMge2ZhY3RvcnlEYW1hZ2UgIT09IHVuZGVmaW5lZCA/IGZhY3RvcnlEYW1hZ2UudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4kIHsoaXNOYU4oZmFjdG9yeURhbWFnZSAvIHJhdGUpID8gMCA6IHBhcnNlRmxvYXQoZmFjdG9yeURhbWFnZSAvIHJhdGUpKS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInNlY29uZFRhYmxlXCIgc3R5bGU9e3sgZm9udFNpemU6ICcyMHB4JywgbWFyZ2luQm90dG9tOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gY29sU3Bhbj17Nn0+VG90YWwoRkMpPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBib3JkZXJCb3R0b206ICdub25lJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5Ub3RhbCBCYXNpYzo8L3NwYW4+IDxzcGFuPiBGYyB7dG90YWxBY3R1YWxTYWxhcnkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBib3JkZXJCb3R0b206ICdub25lJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5Ub3RhbCBFYXJuaW5nOjwvc3Bhbj4gPHNwYW4+IEZjIHt0b3RhbEFjdHVhbEVhcm5pbmcudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4gPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgYm9yZGVyQm90dG9tOiAnbm9uZScgfX0gY29sU3Bhbj17Mn0+PHNwYW4+VG90YWwgRGVkdWN0aW9uOjwvc3Bhbj4gPHNwYW4+IEZjIHt0b3RhbEFjdHVhbERlZHVjdGlvbi50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPiA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIGJvcmRlclRvcDogJ25vbmUnIH19IGNvbFNwYW49ezJ9PjxzcGFuPlRvdGFsIEJhc2ljOjwvc3Bhbj4gPHNwYW4+ICQge1RvdGFsQmFzaWNEb2xsYXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBib3JkZXJUb3A6ICdub25lJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5Ub3RhbCBFYXJuaW5nOjwvc3Bhbj4gPHNwYW4+ICQge1RvdGFsRWFybmluZ0RvbGxhci50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPiA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCBib3JkZXJUb3A6ICdub25lJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5Ub3RhbCBEZWR1Y3Rpb246PC9zcGFuPiA8c3Bhbj4gJCB7VG90YWxERWR1Y3Rpb25Eb2xsYXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj4gPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+TmV0IHBheWFibGU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezR9PkZDIHt0b3RhbE5ldC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9ICgkIHt0b3RhbFBhaWREb2xsYXJzLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0pPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17Mn0+VG90YWwgRGVkdWN0aW9uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXs0fT5GQyB7dG90YWxBY3R1YWxEZWR1Y3Rpb24udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSAoJCB7VG90YWxERWR1Y3Rpb25Eb2xsYXIudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXsyfT5PdmVydGltZSAmIEJvbnVzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXs0fT5GQyB7Ym9udXMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSAoJCB7VG90YWxCb251c0RvbGxhci50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9KTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezJ9PlRvdGFsIFBhaWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezR9PkZDIHt0b3RhbFBhaWQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfSAoJCB7VG90YWxQQWlkRG9sbGFyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX0pPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19IGNvbFNwYW49ezZ9PlRvdGFsIG5ldDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5OZXQgcGF5YWJsZShGQyk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezB9PkZDIHt0b3RhbE5ldC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ncmF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyYXRlICE9PSAwID8gcmF0ZSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1JhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJhdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5OZXQgcGF5YWJsZSgkKTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+JCB7dG90YWxQYWlkRG9sbGFycy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkFtb3VudCBQYWlkKEZDKTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17MH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3NtYWxsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGF5aW5nIEFtb3VudCBGQydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYW1vdW50UGF5RkMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbW91bnRQYXlGQyAhPT0gdW5kZWZpbmVkID8gYW1vdW50UGF5RkMgOiAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFtb3VudFBheUZDKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PjxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPSdyYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JhdGUgIT09IDAgPyByYXRlIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUmF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmF0ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkFtb3VudCBQYWlkKCQpPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Ftb3VudFBheVVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Ftb3VudFBheVVTRCAhPT0gdW5kZWZpbmVkID8gYW1vdW50UGF5VVNEIDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1BheWluZyBBbW91bnQgVVNEJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFtb3VudFBheVVTRChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkNyZWRpdChGQyk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB3aWR0aDogJzIwMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnIH19IGNvbFNwYW49ezB9PkZDIHtDcmVkaXRGQy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD0ncmF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyYXRlICE9PSAwID8gcmF0ZSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1JhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJhdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgcGFkZGluZzogJzVweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5DcmVkaXQoJCk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBwYWRkaW5nOiAnNXB4JywgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PiQge0NyZWRpdFVTRC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgI0RERCcgfX0gY29sU3Bhbj17MX0+TmV0IFdvcmRzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgd2lkdGg6ICcyMDBweCcsIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyB9fSBjb2xTcGFuPXs0fT57d29yZHN9IEZyYW5jIENvbmdvbGFpcy48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbjF9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VCYWNrfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxCbGFja1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQmFja30gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvQmxhY2tUb29sdGlwPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN4PXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzeD17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PkRvIHlvdSB3YW50IHRvIHN0b3AgY3JlYXRpbmcgSW52b2ljZSA/IDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGUgOjwvc3Bhbj4gPHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiPiBJZiB5b3Ugc3RvcCBjcmVhdGluZyB3aXRob3V0IHNhdmluZywgYWxsIHlvdXIgY2hhbmdlcyB3aWxsIGJlIGxvc3Q8L3NwYW4+PC9wPiAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvUGF5Um9sbFZpZXdBZG1pbicpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlllczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXtoYW5kbGVDbG9zZUJhY2t9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+Tm88L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVjaXNpb24oJ3ByZXZpb3VzJyl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtFcnJvck9wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUVycm9yfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDYW5jZWxJY29uIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5TYXZpbmcgRmFpbGVkPC9oMj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlRXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgVHJ5IEFnYWluXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbjJ9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VVcGRhdGVSZWFzb259XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEJsYWNrVG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VVcGRhdGVSZWFzb259IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L0JsYWNrVG9vbHRpcD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICBSZWFzb24gT2YgVXBkYXRpbmdcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdjb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgbmFtZT0nY29tbWVudHMnXHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlYXNvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdDb21tZW50cydcclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXYgPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5Um9sbFVwZGF0ZUZvcm1WaWV3XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9jc3MvU2lkZWJhck5ldy5zY3NzJ1xyXG5pbXBvcnQgeyBPdXRsZXQsIE5hdkxpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgQWNjb3VudEJveCwgQWxsSW5jbHVzaXZlLCBIb21lLCBBc3NpZ25tZW50SW5kLCBTdXBlcnZpc2VkVXNlckNpcmNsZSwgQ3VycmVuY3lFeGNoYW5nZSB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgU2V0dGluZ3NJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2V0dGluZ3MnO1xyXG5pbXBvcnQgR3JvdXBzSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0dyb3Vwcyc7XHJcbmltcG9ydCBQYXltZW50SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1BheW1lbnQnO1xyXG5pbXBvcnQgRGFzaGJvYXJkSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Rhc2hib2FyZCc7XHJcbmltcG9ydCBDb250YWN0c0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Db250YWN0cyc7XHJcbmltcG9ydCB7IExpc3RJdGVtQnV0dG9uLCBMaXN0SXRlbUljb24sIExpc3RJdGVtVGV4dCwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5mdW5jdGlvbiBTaWRlYmFyRGFzaEUzKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8Q3VycmVuY3lFeGNoYW5nZSAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlJhdGVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG5cclxuICAgICAgPExpc3RJdGVtQnV0dG9uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxHcm91cHNJY29uIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRW1wbG95ZWVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fSA+XHJcbiAgICAgICAgPExpc3RJdGVtSWNvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICAgIDxQYXltZW50SWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlBheVJvbGxcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICA8TGlzdEl0ZW1CdXR0b24gc3g9e3sgY29sb3I6ICdncmF5JyB9fT5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8QWNjb3VudEJveCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlVzZXIgQWNjb3VudFwiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0+XHJcbiAgICAgICAgICA8QXNzaWdubWVudEluZCAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkdyYW50IEFjY2Vzc1wiIC8+XHJcbiAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XHJcbiAgICAgIDxMaXN0SXRlbUJ1dHRvbiBzeD17eyBjb2xvcjogJ2dyYXknIH19ID5cclxuICAgICAgICA8TGlzdEl0ZW1JY29uIHN4PXt7IGNvbG9yOiAnZ3JheScgfX0gPlxyXG4gICAgICAgICAgPENvbnRhY3RzSWNvbiAvPlxyXG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlByb2ZpbGVcIiAvPlxyXG4gICAgICA8L0xpc3RJdGVtQnV0dG9uPlxyXG4gICAgICB7LyogPGxpIGNsYXNzTmFtZT0nTGlzdHJvd2Rhc2gnID5cclxuICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPVwiL1JvbGVQZXJtaXNzaW9uXCIgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOidub25lJyxcclxuICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4Jywgd2lkdGg6ICcxMDAlJ319PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6ICc0NXB4JywgZmxleFdyYXA6ICdub3dyYXAnLCBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICBmbGV4OiAnd3JhcCcsY29sb3I6ICd3aGl0ZScsIGFsaWduSXRlbXM6J2NlbnRlcicsIG1hcmdpbkxlZnQ6JzIwcHgnLCBnYXA6JzIwcHgnfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9J2ljb24xJz5cclxuICAgICAgICAgICAgICAgICAgICAgPFN1cGVydmlzZWRVc2VyQ2lyY2xlLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSd0aXRsZWxpc3QnPiBSb2xlUGVybWlzc2lvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICA8L2xpPiovfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyRGFzaEUzIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaWRlYmFyRGFzaEUzIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiRGVsZXRlSWNvbiIsIk1lbnVJdGVtIiwiR3JpZCIsIkljb25CdXR0b24iLCJQYXBlciIsIlRleHRGaWVsZCIsIkZvcm1Db250cm9sIiwiSW5wdXRMYWJlbCIsIlNlbGVjdCIsIlR5cG9ncmFwaHkiLCJzdHlsZWQiLCJCb3giLCJBdXRvY29tcGxldGUiLCJNb2RhbCIsIkJhY2tkcm9wIiwiVGFibGVDb250YWluZXIiLCJPdXRsaW5lZElucHV0IiwiSW5wdXRBZG9ybm1lbnQiLCJEaXZpZGVyIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiQ29udGFpbmVyIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsImF4aW9zIiwiQWRkIiwiQXJyb3dVcHdhcmRPdXRsaW5lZCIsIkRyYWdJbmRpY2F0b3JSb3VuZGVkIiwiRWRpdCIsIlJlbW92ZUNpcmNsZU91dGxpbmUiLCJ2NCIsInVzZU5hdmlnYXRlIiwidXNlUGFyYW1zIiwidG9hc3QiLCJFTkRQT0lOVF9VUkwiLCJEZW1vQ29udGFpbmVyIiwiTG9jYWxpemF0aW9uUHJvdmlkZXIiLCJBZGFwdGVyRGF5anMiLCJEYXRlUGlja2VyIiwiZGF5anMiLCJBcnJvd0JhY2siLCJDaGVja0NpcmNsZUljb24iLCJDYW5jZWxJY29uIiwiTG9hZGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvZ291dCIsIkN1c3RvbWVyRm9ybVZpZXcyIiwiQ2xvc2UiLCJJdGVtRm9ybVZpZXcyIiwiSXRlbVVwZGF0ZVZpZXcyIiwibnVtYmVyVG9Xb3JkcyIsIkRyYWdEcm9wQ29udGV4dCIsIkRyYWdnYWJsZSIsIkRyb3BwYWJsZSIsIk1lc3NhZ2VBZG1pblZpZXciLCJOb3RpZmljYXRpb25WSWV3SW5mbyIsInVuaXF1ZUJ5SWQiLCJhcnIiLCJzZWVuIiwiU2V0IiwiZmlsdGVyIiwiaXQiLCJpZCIsIl9pZCIsInBheU51bWJlciIsImNvbmNhdCIsImV4cGVuc2VOdW1iZXIiLCJpZEluZm8iLCJwcm9qZWN0TnVtYmVyIiwiaW52b2ljZU51bWJlciIsImZhY3R1cmVOdW1iZXIiLCJwYXltZW50TnVtYmVyIiwiZW1wbG95ZWVJZCIsImRhdGUiLCJtYWNoaW5lTm8iLCJibG9ja1R5cGUiLCJ3b3JrZXJOYW1lIiwib3BlcmF0b3JOYW1lIiwiaGFzIiwiYWRkIiwiTGlnaHRUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJCbGFja1Rvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwic3R5bGUyIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNSIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmNiIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIlBheVJvbGxVcGRhdGVGb3JtVmlldyIsIl91c2VQYXJhbXMiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmNyIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiZXJyb3IiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzaWRlQmFyIiwic2V0U2lkZUJhciIsInRvZ2dsZURyYXdlciIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJvcGVuMSIsInNldE9wZW4xIiwiaGFuZGxlT3BlbkJhY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZUJhY2siLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsInNldFBheU51bWJlciIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwicGF5RGF0ZSIsInNldFBheURhdGUiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIm1vbnRoIiwic2V0TW9udGgiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsInNldEVtcGxveWVlSWQiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJkYXlzVyIsInNldERheXNXIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImRheXNPcGVuIiwic2V0RGF5c09wZW4iLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwiTG9wcyIsInNldExvcHMiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiZW1wbG95ZWUiLCJzZXRFbXBsb3llZSIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJzZXRFbXBsb3llZU5hbWUiLCJfdXNlU3RhdGUxOSIsIl91c2VTdGF0ZTIwIiwiZW1wbG95ZWVSb2xlIiwic2V0RW1wbG95ZWVSb2xlIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsImJhbmtOYW1lIiwic2V0QmFua05hbWUiLCJfdXNlU3RhdGUyMyIsIl91c2VTdGF0ZTI0IiwiYmFua05vIiwic2V0QmFua05vIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsImJhc2ljU2FsYXJ5Iiwic2V0QmFzaWNTYWxhcnkiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4IiwiZWFybmluZ1NhbGFyeSIsInNldEVhcm5pbmdTYWxhcnkiLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwiYWR2YW5jZWRTYWxhcnkiLCJzZXRBZHZhbmNlZFNhbGFyeSIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJiYXNpY1RyYW5zcG9ydCIsInNldEJhc2ljVHJhbnNwb3J0IiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsInRyYW5zcG9ydEVhcm5pbmciLCJzZXRUcmFuc3BvcnRFYXJuaW5nIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsInRyYW5zcG9ydERlZHVjdGlvbiIsInNldFRyYW5zcG9ydERlZHVjdGlvbiIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJmb29kQmFzaWMiLCJzZXRGb29kQmFzaWMiLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwiZm9vZEVhcm5pbmciLCJzZXRGb29kRWFybmluZyIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJpdGVtTG9zdCIsInNldEl0ZW1Mb3N0IiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsImZvb2REZWR1Y3Rpb24iLCJzZXRGb29kRGVkdWN0aW9uIiwiX3VzZVN0YXRlNDUiLCJfdXNlU3RhdGU0NiIsImJvdW5jZUFsbG93YW5jZXMiLCJzZXRCb3VuY2VBbGxvd2FuY2VzIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsImJvdW5jZUFsbG93YW5jZXNFYXJuaW5nIiwic2V0Qm91bmNlQWxsb3dhbmNlc0Vhcm5pbmciLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwib3RoZXIiLCJzZXRPdGhlciIsIl91c2VTdGF0ZTUxIiwiX3VzZVN0YXRlNTIiLCJvdGhlckVhcm5pbmciLCJzZXRPdGhlckVhcm5pbmciLCJfdXNlU3RhdGU1MyIsIl91c2VTdGF0ZTU0IiwibG9hbiIsInNldExvYW4iLCJfdXNlU3RhdGU1NSIsIl91c2VTdGF0ZTU2IiwiYm9udXMiLCJzZXRCb251cyIsIl91c2VTdGF0ZTU3IiwiX3VzZVN0YXRlNTgiLCJyYXRlIiwic2V0UmF0ZSIsIl91c2VTdGF0ZTU5IiwiX3VzZVN0YXRlNjAiLCJhbW91bnRQYXlVU0QiLCJzZXRBbW91bnRQYXlVU0QiLCJfdXNlU3RhdGU2MSIsIl91c2VTdGF0ZTYyIiwiYW1vdW50UGF5RkMiLCJzZXRBbW91bnRQYXlGQyIsIl91c2VTdGF0ZTYzIiwiX3VzZVN0YXRlNjQiLCJlbXBsb3llZURlcGFydG1lbnQiLCJzZXRFbXBsb3llZURlcGFydG1lbnQiLCJfdXNlU3RhdGU2NSIsIl91c2VTdGF0ZTY2IiwiZW1wbG95ZWVQaG9uZSIsInNldEVtcGxveWVlUGhvbmUiLCJfdXNlU3RhdGU2NyIsIl91c2VTdGF0ZTY4Iiwid29yZHMiLCJzZXRUb3RhbFciLCJfdXNlU3RhdGU2OSIsIl91c2VTdGF0ZTcwIiwicmVhc29uIiwic2V0UmVhc29uIiwiX3VzZVN0YXRlNzEiLCJfdXNlU3RhdGU3MiIsImZhY3RvcnlFYXJuZWQiLCJzZXRGYWN0b3J5RWFybmVkIiwiX3VzZVN0YXRlNzMiLCJfdXNlU3RhdGU3NCIsImZhY3RvcnlEYW1hZ2UiLCJzZXRGYWN0b3J5RGFtYWdlIiwiX3VzZVN0YXRlNzUiLCJfdXNlU3RhdGU3NiIsIndlZWtGcm9tIiwic2V0V2Vla0Zyb20iLCJfdXNlU3RhdGU3NyIsIl91c2VTdGF0ZTc4Iiwid2Vla1RvIiwic2V0V2Vla1RvIiwiZmV0Y2hEYXRhIiwiX3JlZjgiLCJfcmVzJGRhdGEiLCJfcmVzJGRhdGEyIiwiTnVtYmVyIiwidW5kZWZpbmVkIiwiZm9ybWF0IiwiaGFuZGxlRmV0Y2giLCJfcmVmOSIsIl9yZXMkZGF0YTMiLCJfcmVzUFJhdGUkZGF0YSIsIl9yZXMkZGF0YTQiLCJfcmVzJGRhdGE1IiwiX3JlcyRkYXRhNiIsIl9yZXMkZGF0YTciLCJyb3ciLCJzdGF0dXMiLCJyZXNQUmF0ZSIsIm1hcCIsInBheW1lbnRSYXRlIiwiZGVwYXJ0bWVudCIsImZldGNoRXhwZW5zZSIsIl9yZWYwIiwic2V0TG9hZGluZyIsImluUmFuZ2UiLCJkU3RyIiwiZCIsImlzU2FtZSIsImlzQWZ0ZXIiLCJpc0JlZm9yZSIsImFsbEV4cGVuc2VzIiwiZ2V0U3VtIiwiY2F0ZWdvcmllcyIsInNlYXJjaFRlcm1zIiwiQXJyYXkiLCJpc0FycmF5IiwiYyIsInRvVXBwZXJDYXNlIiwiX3JvdyRleHBlbnNlQ2F0ZWdvcnkiLCJjYXQiLCJleHBlbnNlQ2F0ZWdvcnkiLCJleHBlbnNlc0NhdGVnb3J5IiwibWF0Y2hDYXQiLCJzb21lIiwidGVybSIsImluY2x1ZGVzIiwiYWNjb3VudE5hbWUiLCJleHBlbnNlRGF0ZSIsImVtcCIsIml0ZW0iLCJpZFJvdyIsImxlbmd0aCIsInJlZHVjZSIsImFjYyIsInMiLCJwYXJzZUZsb2F0IiwiYW1vdW50IiwiaXNSYW5nZU1vZGUiLCJfY29uZmlnUmVzJGRhdGEiLCJfcHJvZFJlcyRkYXRhIiwiX2RhbVJlcyRkYXRhIiwiX3Jlc01peGVyJGRhdGEiLCJjb25maWdSZXMiLCJjb25maWciLCJyYXRlcyIsImxhYm9yUmF0ZXMiLCJyYXRlNTBfMzMiLCJwZXJTYWNrIiwicmF0ZTIwIiwidDFfc2Fja3MiLCJ0MV9yYXRlIiwidDJfc2Fja3MiLCJ0Ml9yYXRlIiwidDNfcmF0ZSIsInJhdGUxNSIsInJhdGUxMF8xNF8xMiIsInByb2RSZXMiLCJkYW1SZXMiLCJhbGxSdW5zIiwicnVucyIsInIiLCJkYW1hZ2VzIiwicHJvZHVjdGlvbkRhdGUiLCJub3JtYWxpemUiLCJuIiwidG9TdHJpbmciLCJ0cmltIiwicmVwbGFjZSIsInRhcmdldE5hbWUiLCJuYW1lIiwiY2FsY3VsYXRlV29ya2VyU2hhcmUiLCJ0eXBlU3RyIiwiaGFsZiIsInNhY2tzIiwicGFyc2VJbnQiLCJ0NV9yYXRlIiwicmVzTWl4ZXIiLCJtaXhlclJlY29yZHMiLCJzdGFuZGFyZFNwb3RzIiwiZWFybmVkIiwiZm9yRWFjaCIsInJ1biIsIndvcmtlcnMiLCJoIiwiaGFsZkRheU9wZXJhdG9yIiwiaGVscGVyMSIsImhhbGZEYXlIZWxwZXIxIiwiaGVscGVyMiIsImhhbGZEYXlIZWxwZXIyIiwiaGVscGVyMyIsImhhbGZEYXlIZWxwZXIzIiwidyIsImNhbGN1bGF0ZWRVbml0Iiwic2Fja3NVc2VkIiwidW5pdFNoYXJlIiwibGFib3JQb3QiLCJ3ZWlnaHRlZENyZXdDb3VudCIsInN1bSIsIm9sZFNjaGVtYURpZmYiLCJNYXRoIiwiYWJzIiwibmV3U2NoZW1hRGlmZiIsIm1heCIsIm1lIiwiZmluZCIsIm1peGVyRGF5cyIsIm0iLCJtaXhlclJhdGUiLCJtaXhlclJhdGVQZXJTYWNrIiwiZGF0ZVN0ciIsImRhdGVGb3JtYXR0ZWQiLCJydW5zT25EYXRlIiwidG90YWxTYWNrc09uRGF0ZSIsIm1peGVyc09uRGF0ZSIsImJhc2VQYXlvdXQiLCJzaGFyZSIsImhhbGZEYXkiLCJkYW1hZ2UiLCJtYXRjaCIsImRhbWFnZWRCbG9ja3MiLCJkYW1hZ2VSYXRlIiwidG90YWxOZXQiLCJ3aG9sZVBhcnQiLCJmbG9vciIsImZyYWN0aW9uYWxQYXJ0IiwidG9GaXhlZCIsInNwbGl0Iiwid2hvbGVXb3JkcyIsInRvV29yZHMiLCJmcmFjdGlvbmFsV29yZHMiLCJoYW5kbGVDbGVhckVtcGxveWVlIiwiaGFuZGxlQ2hhbmdlIiwibmV3VmFsdWUiLCJzZWxlY3RlZE9wdGlvbnMiLCJvcHRpb24iLCJzYWxhcnkiLCJiYW5rQWNjb3VudE51bWJlciIsIkRheU8iLCJMTyIsImRpdmlkZWRTYWxhcnkiLCJ0b3RhbEVhcm5pbmdTYWxhcnkiLCJpc05hTiIsImRpdmlkZWRUcmFuc3BvcnQiLCJ0b3RhbEVhcm5pbmdUcmFuc3BvcnQiLCJkaXZpZGVkRm9vZCIsInRvdGFsRWFybmluZ0Zvb2QiLCJkaXZpZGVkQm91bmNlIiwidG90YWxFYXJuaW5nQk91bmNlIiwiZGl2aWRlZE90aGVyIiwidG90YWxFYXJuaW5nT3RoZXIiLCJ0b3RhbEFjdHVhbFNhbGFyeSIsInRvdGFsQWN0dWFsRWFybmluZyIsInRvdGFsQWN0dWFsRGVkdWN0aW9uIiwidG90YWxQYWlkIiwidG90YWxQYWlkRG9sbGFycyIsIm1pbiIsImRpdmlkZWRBbW91bnRQYWlkRmMiLCJ0b3RhbFBhaWRVc2QiLCJDcmVkaXRVU0QiLCJyb3VuZCIsIkNyZWRpdEZDIiwiYmFzaWNTYWxhcnlEb2xsYXIiLCJiYXNpY0Vhcm5pbmdEb2xsYXIiLCJiYXNpY0FkdmFuY2VkRG9sbGFyIiwiYmFzaWNUcmFuc3BvcnREb2xsYXIiLCJiYXNpY1RyYW5zcG9ydEVhcm5pbmdEb2xsYXIiLCJiYXNpY1RyYW5zcG9ydERlZHVjdGlvbkRvbGxhciIsImJhc2ljRm9vZERvbGxhciIsImJhc2ljRm9vZEVhcm5pbmdEb2xsYXIiLCJiYXNpY0Zvb2REZWR1Y3Rpb25Eb2xsYXIiLCJiYXNpY0JvdW5jZURvbGxhciIsImJhc2ljQm91bmNlRWFybmluZ0RvbGxhciIsImJhc2ljTG9hbkRlZHVjdGlvbkRvbGxhciIsImJhc2ljT3RoZXJEb2xsYXIiLCJiYXNpY090aGVyRWFybmluZ0RvbGxhciIsImJhc2ljSXRlbURlZHVjdGlvbkRvbGxhciIsIlRvdGFsQmFzaWNEb2xsYXIiLCJUb3RhbEVhcm5pbmdEb2xsYXIiLCJUb3RhbERFZHVjdGlvbkRvbGxhciIsIlRvdGFsQm9udXNEb2xsYXIiLCJUb3RhbFBBaWREb2xsYXIiLCJfdXNlU3RhdGU3OSIsIl91c2VTdGF0ZTgwIiwib3BlbjIiLCJzZXRPcGVuMiIsImhhbmRsZU9wZW5VcGRhdGVSZWFzb24iLCJoYW5kbGVDbG9zZVVwZGF0ZVJlYXNvbiIsIl91c2VTdGF0ZTgxIiwiX3VzZVN0YXRlODIiLCJsb2FkaW5nIiwiX3VzZVN0YXRlODMiLCJfdXNlU3RhdGU4NCIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlODUiLCJfdXNlU3RhdGU4NiIsImxvYWRpbmdPcGVuTW9kYWxVcGRhdGUiLCJzZXRMb2FkaW5nT3Blbk1vZGFsVXBkYXRlIiwiX3VzZVN0YXRlODciLCJfdXNlU3RhdGU4OCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuIiwic2V0VGltZW91dCIsImhhbmRsZU9wZW5VcGRhdGUiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVDbG9zZVVwZGF0ZSIsImhhbmRsZUNsb3NlRXJyb3IiLCJoYW5kbGVEZWNpc2lvbiIsImhpc3RvcnkiLCJiYWNrIiwiaGFuZGxlQ3JlYXRlQ29tbWVudCIsIl9yZWYxIiwicGVyc29uIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJkYXRlTm90aWZpY2F0aW9uIiwiRGF0ZSIsInBvc3QiLCJoYW5kbGVTdWJtaXQiLCJfcmVmMTAiLCJhbGVydCIsInVwZGF0ZVMiLCJpc1ZhbGlkIiwicHV0IiwiX3giLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJvbkNsaWNrIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJvblN1Ym1pdCIsImNvbnRhaW5lciIsInBhZGRpbmciLCJ4cyIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsInJlcXVpcmVkIiwibGFiZWwiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidmlld3MiLCJGcmFnbWVudCIsInZhbCIsImdhcCIsImRpc2FibGVkIiwidGl0bGUiLCJwbGFjZW1lbnQiLCJmbG9hdCIsImRpc2FibGVDbGVhcmFibGUiLCJvcHRpb25zIiwiZ2V0T3B0aW9uTGFiZWwiLCJyZW5kZXJPcHRpb24iLCJyZW5kZXJJbnB1dCIsInBhcmFtcyIsInNpemUiLCJ0YXJnZXQiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXIiLCJjb2xTcGFuIiwibGluZUhlaWdodCIsInRleHRBbGlnbiIsImJvcmRlckJvdHRvbSIsImJvcmRlclRvcCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2xvc2UiLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJtdWx0aWxpbmUiLCJyb3dzIiwiT3V0bGV0IiwiTmF2TGluayIsInVzZUxvY2F0aW9uIiwiQWNjb3VudEJveCIsIkFsbEluY2x1c2l2ZSIsIkhvbWUiLCJBc3NpZ25tZW50SW5kIiwiU3VwZXJ2aXNlZFVzZXJDaXJjbGUiLCJDdXJyZW5jeUV4Y2hhbmdlIiwiU2V0dGluZ3NJY29uIiwiR3JvdXBzSWNvbiIsIlBheW1lbnRJY29uIiwiRGFzaGJvYXJkSWNvbiIsIkNvbnRhY3RzSWNvbiIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwiTGlzdEl0ZW1UZXh0IiwibWFrZVN0eWxlcyIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9