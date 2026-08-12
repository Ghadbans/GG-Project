"use strict";
exports.id = "src_js_AdminView1_PageView_DailyExpenses_DailyExpenseAdminView_js";
exports.ids = ["src_js_AdminView1_PageView_DailyExpenses_DailyExpenseAdminView_js"];
exports.modules = {

/***/ "./src/js/AdminView1/PageView/DailyExpenses/DailyExpenseAdminView.js"
/*!***************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/DailyExpenses/DailyExpenseAdminView.js ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _utils_apiCache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/apiCache */ "./src/js/utils/apiCache.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableContainer/TableContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _DailyExpensesMonthlyChartView__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./DailyExpensesMonthlyChartView */ "./src/js/AdminView1/PageView/DailyExpenses/DailyExpensesMonthlyChartView.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DragIndicatorRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/LocalPrintshop.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowUp */ "./node_modules/@mui/icons-material/KeyboardArrowUp.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-node/v4.js");
/* harmony import */ var style__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! style */ "./node_modules/style/style.js");
/* harmony import */ var style__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(style__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabContext/TabContext.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabList/TabList.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabPanel/TabPanel.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"];
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















































var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__["default"].tooltip)]: {
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
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var PrintTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__["default"].tooltip)]: {
      backgroundColor: 'white',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var LightTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref7 => {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded4);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_27__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref8 => {
  var theme = _ref8.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_28__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var drawerWidth = 240;
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_29__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref9 => {
  var theme = _ref9.theme,
    open = _ref9.open;
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_32__["default"], {
  shouldForwardProp: prop => prop !== 'open'
})(_ref0 => {
  var theme = _ref0.theme,
    open = _ref0.open;
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
function DailyExpenseAdminView() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_26__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_41__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_41__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__.setUser)({
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
        return _ref1.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    expenses = _useState2[0],
    setExpenses = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    filteredData = _useState4[0],
    setFilteredData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    cash = _useState6[0],
    setCash = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    rate = _useState8[0],
    setRate = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    itemPurchaseInfo = _useState0[0],
    setItemPurchase = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    purchaseOrder = _useState10[0],
    setPurchaseOrder = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    payRoll = _useState12[0],
    setPayRoll = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    payment = _useState14[0],
    setPayment = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState16 = _slicedToArray(_useState15, 2),
    posInfo = _useState16[0],
    setPos = _useState16[1];
  // startDate declared HERE (before any useEffect that uses it) and initialized
  // directly from localStorage so that the very first API fetch targets the correct
  // date — eliminating the race condition where an early fetch for "today" could
  // overwrite the later fetch for the stored past date.
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      try {
        var stored = localStorage.getItem('dateInfo');
        if (stored) return new Date(JSON.parse(stored));
      } catch (e) {}
      return dayjs__WEBPACK_IMPORTED_MODULE_37___default()().toDate();
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    startDate = _useState18[0],
    setStartDate = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    cashDate = _useState20[0],
    setCashDate = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    returnFC = _useState22[0],
    setReturnFC = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    returnUSD = _useState24[0],
    setReturnUSD = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState26 = _slicedToArray(_useState25, 2),
    totalCashInfo = _useState26[0],
    setTotalCashInfo = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState28 = _slicedToArray(_useState27, 2),
    amount = _useState28[0],
    setAmount = _useState28[1];
  var fetchCashData = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* () {
      try {
        var cashResponse = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_4__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/cash"));
        setCash(cashResponse.data.data);
      } catch (error) {
        console.error('Error fetching cash data:', error);
      }
    });
    return function fetchCashData() {
      return _ref10.apply(this, arguments);
    };
  }();

  // Fetch static data once on mount (expenses, payroll, POS, rates, etc.)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchStaticData = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        try {
          var _resPO$data, _resPayRoll$data;
          var resPO = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_4__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/purchaseOrder"));
          setPurchaseOrder((_resPO$data = resPO.data) === null || _resPO$data === void 0 || (_resPO$data = _resPO$data.data) === null || _resPO$data === void 0 ? void 0 : _resPO$data.filter(row => row.status && row.status === 'Purchase'));
          var expenseResponse = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_4__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/expense"));
          setExpenses(expenseResponse.data.data);
          yield fetchCashData();
          var rateResponse = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_4__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/rate"));
          rateResponse.data.data.map(row => setRate(row.rate));
          var resPayRoll = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_4__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/payRoll"));
          setPayRoll((_resPayRoll$data = resPayRoll.data) === null || _resPayRoll$data === void 0 || (_resPayRoll$data = _resPayRoll$data.data) === null || _resPayRoll$data === void 0 ? void 0 : _resPayRoll$data.filter(row => row.status !== undefined ? row.status === 'Paid' : null));
          var resPos = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_4__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/pos"));
          setPos(resPos.data.data.map(row => _objectSpread(_objectSpread({}, row), {}, {
            amountTotalFc: row.totalFC - row.creditFC,
            amountTotalUsd: row.totalUSD - row.creditUsd
          })));
        } catch (error) {
          console.error('Error fetching static data:', error);
        }
      });
      return function fetchStaticData() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchStaticData();
  }, []);

  // Fetch payment separately — re-fetch on window focus so that
  // payments created in another view appear immediately when returning here.
  var fetchPaymentData = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(/*#__PURE__*/_asyncToGenerator(function* () {
    try {
      var _resPayment$data;
      var resPayment = yield (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_4__.cachedGet)("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/payment"));
      setPayment((_resPayment$data = resPayment.data) === null || _resPayment$data === void 0 || (_resPayment$data = _resPayment$data.data) === null || _resPayment$data === void 0 ? void 0 : _resPayment$data.filter(row => row.modes !== 'Credit-Account'));
    } catch (error) {
      console.error('Error fetching payment data:', error);
    }
  }), []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchPaymentData();
    window.addEventListener('focus', fetchPaymentData);
    return () => window.removeEventListener('focus', fetchPaymentData);
  }, [fetchPaymentData]);

  // Fetch item purchases for selected date — re-fetches whenever the selected date changes.
  // Uses ?targetDate= so the API returns only the records that had payments on that day.
  // startDate is always initialized (never null), so this fires on mount with today's date.
  var fetchItemPurchaseForDate = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(/*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (date) {
      try {
        var _res$data;
        var targetDateParam = dayjs__WEBPACK_IMPORTED_MODULE_37___default()(date).format('YYYY-MM-DD');
        var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/itemPurchase?targetDate=").concat(targetDateParam));
        setItemPurchase(((_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data) || []);
      } catch (error) {
        console.error('Error fetching item purchase data:', error);
        setItemPurchase([]);
      }
    });
    return function (_x) {
      return _ref13.apply(this, arguments);
    };
  }(), []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchItemPurchaseForDate(startDate);
  }, [startDate, fetchItemPurchaseForDate]); // startDate is always defined (initialized at top)

  var itemPurchase = [];
  itemPurchaseInfo.forEach(row => {
    itemPurchase.push({
      _id: row._id,
      itemPurchaseNumber: 'IP-' + String(row.itemPurchaseNumber).padStart(5, '0'),
      itemPurchaseDate: row.itemPurchaseDate,
      projectName: row.projectName,
      manufacturer: row.manufacturer,
      manufacturerNumber: row.manufacturerNumber,
      description: row.description,
      totalFC: row.totalFC,
      total: row.total,
      amount: row.totalUSD !== undefined ? row.totalUSD : row.totalUSD || row.total / (row.rate || 1) || 0
    });
  });

  // startDate and related state moved to top of component — see declaration above.

  var handleChangeDate = date => {
    setStartDate(date);
    localStorage.setItem('dateInfo', JSON.stringify(date));
  };
  var endDate = startDate;
  {/** Cash start */}
  var addItem = () => {
    setAmount([...amount, {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_59__["default"])(),
      amountFC: 0,
      amountUsd: 0,
      rate: 0,
      total: 0,
      note: ''
    }]);
  };
  var deleteItem = idRow => {
    setAmount(amount => amount.filter(Item => Item.idRow !== idRow));
  };
  var handleChangeAmount = (e, i) => {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    var list = [...amount];
    list[i][name] = value;
    list[i]['rate'] = rate;
    list[i]['total'] = Math.round((parseInt(list[i]['amountFC']) / list[i]['rate'] + list[i]['amountUsd']) * 100) / 100;
    setAmount(list);
  };
  {/** Cash end */}
  ;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var headers = [];
    var currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      headers.push(currentDate.toDateString());
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setFilteredData(headers);
  }, [startDate, endDate]);
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState30 = _slicedToArray(_useState29, 2),
    expensesFiltered = _useState30[0],
    setExpensesFiltered = _useState30[1];
  // itemPurchaseFiltered computed via useMemo (synchronous) so it always
  // reflects the current startDate + itemPurchaseInfo without async timing gaps.
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState32 = _slicedToArray(_useState31, 2),
    payRollFiltered = _useState32[0],
    setPayRollFiltered = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState34 = _slicedToArray(_useState33, 2),
    posFiltered = _useState34[0],
    setPosFiltered = _useState34[1];
  // Expenses Filter
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var totalExpenses = expenses.filter(row => {
      var ExpensesDate = dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row.expenseDate).format('DD/MM/YYYY');
      return ExpensesDate >= dayjs__WEBPACK_IMPORTED_MODULE_37___default()(startDate).format('DD/MM/YYYY') && ExpensesDate <= dayjs__WEBPACK_IMPORTED_MODULE_37___default()(endDate).format('DD/MM/YYYY');
    });
    setExpensesFiltered(totalExpenses);
  }, [startDate, endDate, expenses]);
  var itemPurchaseFiltered = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => {
    if (!startDate || itemPurchaseInfo.length === 0) return [];
    var tgtStr = dayjs__WEBPACK_IMPORTED_MODULE_37___default()(startDate).format('YYYY-MM-DD');
    var results = [];
    itemPurchaseInfo.forEach(item => {
      var paymentUSD = 0;
      var paymentFC = 0;
      if (item.payments && Array.isArray(item.payments) && item.payments.length > 0) {
        // Sum only the payments whose date matches the selected date (string comparison, timezone-safe)
        item.payments.forEach(pmt => {
          if (dayjs__WEBPACK_IMPORTED_MODULE_37___default()(pmt.date).format('YYYY-MM-DD') === tgtStr) {
            var _pmt$amount, _pmt$amountFC;
            paymentUSD += parseFloat((_pmt$amount = pmt.amount) !== null && _pmt$amount !== void 0 ? _pmt$amount : 0);
            paymentFC += parseFloat((_pmt$amountFC = pmt.amountFC) !== null && _pmt$amountFC !== void 0 ? _pmt$amountFC : 0);
          }
        });
      } else {
        // Fallback: item has no payments array — use item totals if created on target date
        if (dayjs__WEBPACK_IMPORTED_MODULE_37___default()(item.itemPurchaseDate).format('YYYY-MM-DD') === tgtStr) {
          var _ref14, _item$totalUSD, _item$totalFC;
          paymentUSD = parseFloat((_ref14 = (_item$totalUSD = item.totalUSD) !== null && _item$totalUSD !== void 0 ? _item$totalUSD : item.total) !== null && _ref14 !== void 0 ? _ref14 : 0);
          paymentFC = parseFloat((_item$totalFC = item.totalFC) !== null && _item$totalFC !== void 0 ? _item$totalFC : 0);
        }
      }
      if (paymentUSD > 0 || paymentFC > 0) {
        results.push(_objectSpread(_objectSpread({}, item), {}, {
          paymentId: item._id,
          paymentUSD,
          paymentFC,
          paymentDate: item.itemPurchaseDate
        }));
      }
    });
    return results;
  }, [startDate, itemPurchaseInfo]);
  // Pay Roll Filter
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var totalExpenses = payRoll.filter(row => {
      var ExpensesDate = dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row.payDate).format('DD/MM/YYYY');
      return ExpensesDate >= dayjs__WEBPACK_IMPORTED_MODULE_37___default()(startDate).format('DD/MM/YYYY') && ExpensesDate <= dayjs__WEBPACK_IMPORTED_MODULE_37___default()(endDate).format('DD/MM/YYYY');
    });
    setPayRollFiltered(totalExpenses);
  }, [startDate, endDate, payRoll]);

  // POS Filter
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var totalExpenses = posInfo.filter(row => {
      var ExpensesDate = dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row.invoiceDate).format('DD/MM/YYYY');
      return ExpensesDate >= dayjs__WEBPACK_IMPORTED_MODULE_37___default()(startDate).format('DD/MM/YYYY') && ExpensesDate <= dayjs__WEBPACK_IMPORTED_MODULE_37___default()(endDate).format('DD/MM/YYYY');
    });
    setPosFiltered(totalExpenses);
  }, [startDate, endDate, posInfo]);
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    open = _useState36[0],
    setOpen = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    openStatus = _useState38[0],
    setOpenStatus = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    openOption = _useState40[0],
    setOpenOption = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    openNextDay = _useState42[0],
    setOpenNextDay = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState44 = _slicedToArray(_useState43, 2),
    viewId = _useState44[0],
    setViewId = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState46 = _slicedToArray(_useState45, 2),
    viewIdStatus = _useState46[0],
    setViewIdStatus = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState48 = _slicedToArray(_useState47, 2),
    loading = _useState48[0],
    setLoading = _useState48[1];
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    loadingOpenModal = _useState50[0],
    setLoadingOpenModal = _useState50[1];
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState52 = _slicedToArray(_useState51, 2),
    ErrorOpenModal = _useState52[0],
    setErrorOpenModal = _useState52[1];
  var handleOpenView = id => {
    setOpen(true);
    setViewId(id);
  };
  var handleCloseView = () => {
    setOpen(false);
  };
  var handleOpenViewOption = id => {
    setOpenOption(true);
    setViewIdStatus(id);
  };
  var handleCloseViewOption = () => {
    setOpenOption(false);
  };
  var handleOpenViewStatus = id => {
    setOpenStatus(true);
    setViewIdStatus(id);
  };
  var handleCloseViewStatus = () => {
    setOpenStatus(false);
  };
  var handleOpenViewNextDay = () => {
    setOpenNextDay(true);
    setOpenOption(false);
  };
  var handleCloseViewNextDay = () => {
    setOpenNextDay(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchId = /*#__PURE__*/function () {
      var _ref15 = _asyncToGenerator(function* () {
        if (viewId !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/get-cash/").concat(viewId));
            setCashDate(res.data.data.cashDate);
            setAmount(res.data.data.amount);
          } catch (error) {
            console.log(error);
          }
        }
      });
      return function fetchId() {
        return _ref15.apply(this, arguments);
      };
    }();
    fetchId();
  }, [viewId]);
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState54 = _slicedToArray(_useState53, 2),
    statusInfo = _useState54[0],
    setStatusInfo = _useState54[1];
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState56 = _slicedToArray(_useState55, 2),
    restInfoFC = _useState56[0],
    setRestInfoFc = _useState56[1];
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState58 = _slicedToArray(_useState57, 2),
    restInfoUSD = _useState58[0],
    setRestInfoUSD = _useState58[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState60 = _slicedToArray(_useState59, 2),
    indexId = _useState60[0],
    setIndexId = _useState60[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchId = /*#__PURE__*/function () {
      var _ref16 = _asyncToGenerator(function* () {
        if (viewIdStatus !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/get-cash/").concat(viewIdStatus));
            setCashDate(res.data.data.cashDate);
            setStatusInfo(res.data.data.status !== undefined ? res.data.data.status : '');
            setRestInfoFc(res.data.data.returnAmountFC !== undefined ? res.data.data.returnAmountFC : 0);
            setRestInfoUSD(res.data.data.returnAmountUSD !== undefined ? res.data.data.returnAmountUSD : 0);
          } catch (error) {
            console.log(error);
          }
        }
      });
      return function fetchId() {
        return _ref16.apply(this, arguments);
      };
    }();
    fetchId();
  }, [viewIdStatus]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var sum = 0;
    amount.forEach(row => {
      sum += parseFloat(row.total) || 0;
    });
    setTotalCashInfo(Math.round(sum * 100) / 100);
  }, [amount]);
  //open loading modal when submit is true
  var handleOpen = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  //open loading modal when error
  var handleError = () => {
    setErrorOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  //close loading modal
  var handleClose = () => {
    setLoadingOpenModal(false);
    window.location.reload();
    setOpen(false);
    setOpenOption(false);
    setOpenStatus(false);
    setOpenNextDay(false);
    fetchCashData(); // Refresh data explicitly
  };
  var handleCloseError = () => {
    setErrorOpenModal(false);
  };
  //Decision When loading finish
  var handleSubmitUpdate = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        cashDate,
        totalCash: totalCashInfo,
        amount,
        updateS: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/update-cash/").concat(viewId), data);
        if (res) {
          (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_4__.invalidateCache)('/cash');
          yield fetchCashData();
          handleOpen();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmitUpdate(_x2) {
      return _ref17.apply(this, arguments);
    };
  }();
  var _useState61 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState62 = _slicedToArray(_useState61, 2),
    filterTotal2 = _useState62[0],
    setFilterTotal2 = _useState62[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var totalExpenses = cash.filter(row => {
      var ExpensesDate = dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row.cashDate).format('DD/MM/YYYY');
      return ExpensesDate >= dayjs__WEBPACK_IMPORTED_MODULE_37___default()(startDate).format('DD/MM/YYYY') && ExpensesDate <= dayjs__WEBPACK_IMPORTED_MODULE_37___default()(endDate).format('DD/MM/YYYY');
    });
    setFilterTotal2(totalExpenses);
  }, [startDate, endDate, cash]);
  var _useState63 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState64 = _slicedToArray(_useState63, 2),
    filterTotalPayment = _useState64[0],
    setFilterTotalPayment = _useState64[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var totalExpenses = payment.filter(row => {
      var ExpensesDate = dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row.paymentDate).format('DD/MM/YYYY');
      return ExpensesDate >= dayjs__WEBPACK_IMPORTED_MODULE_37___default()(startDate).format('DD/MM/YYYY') && ExpensesDate <= dayjs__WEBPACK_IMPORTED_MODULE_37___default()(endDate).format('DD/MM/YYYY');
    });
    setFilterTotalPayment(totalExpenses);
  }, [startDate, endDate, payment]);
  var totalDay = expensesFiltered.length > 0 ? expensesFiltered.filter(row => parseFloat(row.amount) === 0).reduce((sum, row) => Math.round((sum + parseFloat(row.total)) * 100) / 100, 0) : 0;
  var totalDayFC = expensesFiltered.length > 0 ? expensesFiltered.filter(row => parseFloat(row.amount) !== 0).reduce((sum, row) => Math.round((sum + parseFloat(row.amount)) * 100) / 100, 0) : 0;
  var totalPaymentFC1 = filterTotalPayment.length > 0 ? filterTotalPayment.reduce((acc, row) => acc + (row.reason === 'Project' || row.reason === 'Customer Credit' || parseFloat(row.remaining) === parseFloat(row.amount) ? 0 : parseFloat(row.PaymentReceivedFC || 0)), 0) : 0;
  var totalPaymentUSD0 = filterTotalPayment.length > 0 ? filterTotalPayment.filter(row => row.modes === 'Cash' && row.remaining > 0 || row.modes === 'Bank Transfer' && row.remaining > 0).reduce((acc, row) => acc + parseFloat(row.remaining), 0) : 0;
  var totalPaymentUSD15 = filterTotalPayment.length > 0 ? filterTotalPayment.reduce((acc, row) => acc + (row.reason === 'Project' || row.reason === 'Customer Credit' || parseFloat(row.remaining) === parseFloat(row.amount) ? 0 : parseFloat(row.PaymentReceivedUSD || 0)), 0) : 0;
  var totalPaymentUSD1 = totalPaymentUSD0 + totalPaymentUSD15;
  var totalPaymentUSDTotal = filterTotalPayment.length > 0 ? filterTotalPayment.reduce((acc, row) => acc + parseFloat(row.amount), 0) : 0;
  var totalPosFC = posFiltered.length > 0 ? posFiltered.reduce((acc, row) => acc + parseFloat(row.amountTotalFc), 0) : 0;
  var totalPosUSD = posFiltered.length > 0 ? posFiltered.reduce((acc, row) => acc + parseFloat(row.amountTotalUsd), 0) : 0;
  var totalPaymentFC = totalPaymentFC1 + totalPosFC;
  var totalPaymentUSD = totalPaymentUSD1 + totalPosUSD;
  var totalCashUSD = filterTotal2.length > 0 ? filterTotal2.reduce((acc, row) => {
    return acc + row.amount.filter(item => parseFloat(item.amountFC) === 0).reduce((sum, item) => Math.round((sum + parseFloat(item.total)) * 100) / 100, 0);
  }, 0) : 0;
  var totalCashFC = filterTotal2.length > 0 ? filterTotal2.reduce((acc, row) => {
    return acc + row.amount.filter(item => parseFloat(item.amountFC) !== 0).reduce((sum, item) => Math.round((sum + parseFloat(item.amountFC)) * 100) / 100, 0);
  }, 0) : 0;
  var totalItemPurchase = itemPurchaseFiltered.length > 0 ? itemPurchaseFiltered.reduce((sum, row) => sum + (parseFloat(row.paymentUSD) || 0), 0) : 0;
  var totalItemPurchaseFC = itemPurchaseFiltered.length > 0 ? itemPurchaseFiltered.reduce((sum, row) => sum + (parseFloat(row.paymentFC) || 0), 0) : 0;
  var totalPayRollDaily = payRollFiltered.length > 0 ? payRollFiltered.reduce((sum, row) => Math.round((sum + parseFloat(row.amountPayUSD)) * 100) / 100, 0) : 0;
  var totalPayRollDailyFC = payRollFiltered.length > 0 ? payRollFiltered.reduce((sum, row) => Math.round((sum + parseFloat(row.amountPayFC)) * 100) / 100, 0) : 0;
  var totalExpensesFC = Number(totalDayFC) + Number(totalItemPurchaseFC) + Number(totalPayRollDailyFC);
  var totalEnterFc = isNaN(totalPaymentFC) ? 0 : totalPaymentFC;
  var RemainingFC = isNaN(Number(totalCashFC) + Number(totalEnterFc) - totalExpensesFC) ? 0 : parseFloat(Number(totalCashFC) + Number(totalEnterFc) - totalExpensesFC);
  var totalExpensesD = Number(totalDay) + Number(totalItemPurchase) + Number(totalPayRollDaily);
  var totalEnter = isNaN(totalPaymentUSD) ? totalPaymentUSDTotal : totalPaymentUSD;
  var RemainingUSD = isNaN(Number(totalEnter) + Number(totalCashUSD) - totalExpensesD) ? 0 : parseFloat(Number(totalEnter) + Number(totalCashUSD) - totalExpensesD);
  var returnAmountFC = Number(returnFC) + Number(restInfoFC);
  var returnAmountUSD = Number(returnUSD) + Number(restInfoUSD);
  var restFC = RemainingFC - returnAmountFC;
  var restUSD = RemainingUSD - returnAmountUSD;
  var _useState65 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState66 = _slicedToArray(_useState65, 2),
    amount1 = _useState66[0],
    setAmount1 = _useState66[1];
  var addItem1 = () => {
    setAmount1([...amount1, {
      idRow: (0,uuid__WEBPACK_IMPORTED_MODULE_59__["default"])(),
      amountFC: 0,
      amountUsd: 0,
      rate: 0,
      total: 0,
      note: ''
    }]);
  };
  var deleteItem1 = idRow => {
    setAmount1(amount => amount.filter(Item => Item.idRow !== idRow));
  };
  var handleChangeAmount1 = (e, i) => {
    var _e$target2 = e.target,
      name = _e$target2.name,
      value = _e$target2.value;
    var list = [...amount1];
    list[i][name] = value;
    list[i]['rate'] = rate;
    list[i]['total'] = Math.round((parseFloat(list[i]['amountFC']) / list[i]['rate'] + parseFloat(list[i]['amountUsd'])) * 100) / 100;
    setAmount1(list);
  };
  var handleSubmitUpdateReturn = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var status = '';
      if (restFC === 0 && restUSD === 0) {
        status = 'Close';
      } else {
        status = 'Pending';
      }
      var data = {
        status,
        returnAmountFC,
        returnAmountUSD,
        RemainingAmountUSD: restUSD,
        RemainingAmountFC: restFC,
        totalCashFC,
        totalCashUSD,
        totalPaymentFC: totalEnterFc,
        totalPaymentUSD: totalEnter,
        totalPayRollDailyFC,
        totalExpensesFC: totalDayFC,
        totalExpensesUSD: totalDay,
        totalItemPurchaseUSD: totalItemPurchase,
        totalPayrollUSD: totalPayRollDaily,
        updateS: false
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_24__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_25__.ENDPOINT_URL, "/update-cash/").concat(viewIdStatus), data);
        if (res) {
          (0,_utils_apiCache__WEBPACK_IMPORTED_MODULE_4__.invalidateCache)('/cash');
          yield fetchCashData();
          handleOpen();
        }
      } catch (error) {
        if (error) {
          handleError();
        }
      }
    });
    return function handleSubmitUpdateReturn(_x3) {
      return _ref18.apply(this, arguments);
    };
  }();
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState('1'),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    value3 = _React$useState4[0],
    setValue3 = _React$useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result = localStorage.getItem('TabViewExpensesMonthlyInfo');
    if (result) {
      setValue3(result);
    }
  }, []);
  var handleChange3 = (event, newValue) => {
    var changeValue = newValue;
    setValue3(changeValue);
    localStorage.setItem('TabViewExpensesMonthlyInfo', changeValue);
  };
  var _useState67 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState68 = _slicedToArray(_useState67, 2),
    search = _useState68[0],
    setSearch = _useState68[1];
  var _useState69 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState70 = _slicedToArray(_useState69, 2),
    debouncedSearch = _useState70[0],
    setDebouncedSearch = _useState70[1];
  var _useState71 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState72 = _slicedToArray(_useState71, 2),
    search2 = _useState72[0],
    setSearch2 = _useState72[1];
  var _useState73 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState74 = _slicedToArray(_useState73, 2),
    debouncedSearch2 = _useState74[0],
    setDebouncedSearch2 = _useState74[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handler = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(handler);
  }, [search]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handler = setTimeout(() => setDebouncedSearch2(search2), 300);
    return () => clearTimeout(handler);
  }, [search2]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var result = localStorage.getItem('QuickFilterDailyExpensesAdminView');
    if (result) {
      setSearch(result);
    }
  }, []);
  var handleSearch = e => {
    var value = e.target.value;
    setSearch(value);
    localStorage.setItem('QuickFilterDailyExpensesAdminView', value);
  };
  var newArrayCash = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => debouncedSearch2 !== '' ? cash.filter(row => row.amount.some(Item => Item.note && Item.note.toLowerCase().includes(debouncedSearch2.toLowerCase())) || dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row.cashDate).format('DD/MM/YYYY').includes(debouncedSearch2)) : cash, [cash, debouncedSearch2]);
  var newArray = debouncedSearch !== '' ? expensesFiltered.filter(row => row.expenseNumber.toString().includes(debouncedSearch) || row.accountName.toLowerCase().includes(debouncedSearch.toLowerCase()) || row.expenseCategory.expensesCategory.toLowerCase().includes(debouncedSearch.toLowerCase()) || row.accountNameInfo.name.toLowerCase().includes(debouncedSearch.toLowerCase()) || row.employeeName.some(Item => Item.employee.toLowerCase().includes(debouncedSearch.toLowerCase()))) : expensesFiltered;
  var componentRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var handlePrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_56__.useReactToPrint)({
    content: () => componentRef.current
  });
  var RowCash = props => {
    var _row$amount;
    var row = props.row;
    var _useState75 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState76 = _slicedToArray(_useState75, 2),
      open = _useState76[0],
      setOpen = _useState76[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        '& > *': {
          borderBottom: 'unset'
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        padding: '1px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      "aria-label": "expand row",
      size: "small",
      onClick: () => setOpen(!open)
    }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_55__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_54__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        padding: '1px'
      },
      component: "th",
      scope: "row"
    }, dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row.cashDate).format('DD/MM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, row.Create.person), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, row.totalCash.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        paddingBottom: 0,
        paddingTop: 0
      },
      colSpan: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      in: open,
      timeout: "auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      sx: {
        margin: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'left',
        fontSize: '13px',
        border: '1px solid black'
      }
    }, "Amount Fc"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'left',
        fontSize: '13px',
        border: '1px solid black'
      }
    }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'left',
        fontSize: '13px',
        border: '1px solid black'
      }
    }, "Amount Usd"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        textAlign: 'left',
        fontSize: '13px',
        border: '1px solid black'
      }
    }, "Note"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, (_row$amount = row.amount) === null || _row$amount === void 0 ? void 0 : _row$amount.map((row1, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: row1.idRow
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '13px',
        border: '1px solid black'
      }
    }, " FC ", row1.amountFC), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '13px',
        border: '1px solid black'
      }
    }, row1.rate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '13px',
        border: '1px solid black'
      }
    }, "$ ", row1.total), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '13px',
        border: '1px solid black'
      }
    }, " ", row1.note))))))))));
  };
  var Row = props => {
    var row = props.row;
    var _useState77 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState78 = _slicedToArray(_useState77, 2),
      open = _useState78[0],
      setOpen = _useState78[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        '& > *': {
          borderBottom: 'unset'
        }
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        padding: '1px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
      "aria-label": "expand row",
      size: "small",
      onClick: () => setOpen(!open)
    }, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowUp__WEBPACK_IMPORTED_MODULE_55__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_54__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        padding: '1px'
      },
      component: "th",
      scope: "row"
    }, dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row).format('DD/MM/YYYY'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        paddingBottom: 0,
        paddingTop: 0
      },
      colSpan: 6
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
      in: open,
      timeout: "auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      sx: {
        margin: 1
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      ref: componentRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      style: {
        width: '100%',
        borderCollapse: 'collapse',
        color: 'gray'
      },
      size: "small",
      "aria-label": "purchases"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray',
        textAlign: 'center',
        backgroundColor: '#0276aa',
        color: 'white'
      },
      colSpan: 7
    }, "Cash")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      },
      colSpan: 4
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Total FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Total $"))), filterTotal2.map(row2 => {
      var _row2$amount;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
        key: row2._id
      }, dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row2.cashDate).format('DD/MM') === dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row).format('DD/MM') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (_row2$amount = row2.amount) === null || _row2$amount === void 0 ? void 0 : _row2$amount.map((Item, i) => {
        var _Item$amountFC, _Item$total;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
          key: Item.idRow
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
          style: {
            border: '1px solid gray',
            width: '100px'
          }
        }, i + 1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
          style: {
            border: '1px solid gray',
            width: '100px'
          },
          colSpan: 4
        }, Item.note !== undefined ? Item.note : ''), parseFloat(Item.amountFC) !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
          style: {
            border: '1px solid gray',
            width: '100px'
          }
        }, "FC ", (_Item$amountFC = Item.amountFC) === null || _Item$amountFC === void 0 ? void 0 : _Item$amountFC.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
          style: {
            border: '1px solid gray',
            width: '100px'
          }
        }, "$ 0")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
          style: {
            border: '1px solid gray',
            width: '100px'
          }
        }, "FC 0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
          style: {
            border: '1px solid gray',
            width: '100px'
          }
        }, "$ ", (_Item$total = Item.total) === null || _Item$total === void 0 ? void 0 : _Item$total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','))));
      })) : null);
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray',
        width: '100px'
      },
      colSpan: 4
    }, " Daily Cash Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray',
        width: '120px'
      },
      colSpan: 2
    }, "FC ", totalCashFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray',
        width: '120px'
      }
    }, "$ ", totalCashUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray',
        backgroundColor: '#ff5722',
        color: 'white',
        textAlign: 'center'
      },
      colSpan: 7
    }, "Expenses")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Account Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Total FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Total $"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, newArray.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: item._id
    }, dayjs__WEBPACK_IMPORTED_MODULE_37___default()(item.expenseDate).format('DD/MM') === dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row).format('DD/MM') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, "D-", String(item.expenseNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, item.expenseCategory.expensesCategory), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, item.accountName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, item.accountName === 'Project' && item.accountNameInfo.name, item.accountName === 'Employee' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, item.employeeName.map(Item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      key: Item.idRow
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.employee, " "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " $ ", Item.total))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, item.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), item.amount !== 0 ? item.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), item.amount === 0 ? item.total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      },
      colSpan: 4
    }, "Daily Expenses Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray',
        width: '100px'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, totalDayFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray',
        width: '100px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, totalDay.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray',
        backgroundColor: '#6573c3',
        color: 'white',
        textAlign: 'center'
      },
      colSpan: 7
    }, "Item Purchase")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      },
      colSpan: 3
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Total FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Total $"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, itemPurchaseFiltered.map(item => {
      var _item$projectName;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        key: item.paymentId
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, "IP-", String(item.itemPurchaseNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        },
        colSpan: 3
      }, item.projectName !== undefined ? (_item$projectName = item.projectName) === null || _item$projectName === void 0 ? void 0 : _item$projectName.name : item.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, item.manufacturer + ' / ' + item.manufacturerNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), " ", item.paymentFC !== undefined ? parseFloat(item.paymentFC).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), item.paymentUSD !== undefined ? parseFloat(item.paymentUSD).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      },
      colSpan: 4
    }, "Daily Item Purchase Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray',
        width: '100px',
        textAlign: 'center'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), totalItemPurchaseFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray',
        width: '100px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, totalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray',
        backgroundColor: '#ab003c',
        color: 'white',
        textAlign: 'center'
      },
      colSpan: 7
    }, "PayRoll")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      },
      colSpan: 3
    }, "EmployeeName"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Total FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Total $"))), user.data.role === 'CEO' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, payRollFiltered.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: item._id
    }, dayjs__WEBPACK_IMPORTED_MODULE_37___default()(item.payDate).format('DD/MM') === dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row).format('DD/MM') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, "P-", String(item.payNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      },
      colSpan: 3
    }, item.employeeName !== undefined ? item.employeeName.name : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, dayjs__WEBPACK_IMPORTED_MODULE_37___default()(item.month).format('MMMM/YYYY')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), item.amountPayFC !== undefined ? item.amountPayFC.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), item.amountPayUSD !== undefined ? item.amountPayUSD.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      },
      colSpan: 4
    }, "Daily PayRoll Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray',
        width: '100px',
        textAlign: 'center'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, totalPayRollDailyFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray',
        width: '100px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, totalPayRollDaily.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center'
      },
      colSpan: 7
    }, "POS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      },
      colSpan: 4
    }, "Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Total FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Total $"))), user.data.role === 'CEO' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, posFiltered.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: item._id
    }, dayjs__WEBPACK_IMPORTED_MODULE_37___default()(item.invoiceDate).format('DD/MM') === dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row).format('DD/MM') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, "S-", String(item.factureNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      },
      colSpan: 4
    }, item.customerName !== undefined ? item.customerName.customerName : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), item.amountTotalFc !== undefined ? item.amountTotalFc.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), item.amountTotalUsd !== undefined ? item.amountTotalUsd.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : item.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      },
      colSpan: 4
    }, "POS Received Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray',
        width: '100px',
        textAlign: 'center'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, isNaN(totalPosFC) ? 0 : totalPosFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray',
        width: '100px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, isNaN(totalPosUSD) ? 0 : totalPosUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray',
        backgroundColor: '#202a5a',
        color: 'white',
        textAlign: 'center'
      },
      colSpan: 7
    }, "Payment Received")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Reference"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Total FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Total $"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid gray'
      }
    }, "Credit"))), user.data.role === 'CEO' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, filterTotalPayment.map(item => {
      var _item$TotalAmount;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
        key: item._id
      }, dayjs__WEBPACK_IMPORTED_MODULE_37___default()(item.paymentDate).format('DD/MM') === dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row).format('DD/MM') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, "PAY-", String(item.paymentNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, item.customerName !== undefined ? item.customerName.customerName : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, item.modes !== undefined ? item.modes.toUpperCase() : '', "  ", ' | ' + item.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, (_item$TotalAmount = item.TotalAmount) === null || _item$TotalAmount === void 0 ? void 0 : _item$TotalAmount.map((Item, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        key: i
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, Item.prefix || (item.reason === "Project" ? "P-" : "INV-"), String(Item.Ref).padStart(6, '0'), ":  $", Item.total !== undefined ? Item.total : 0)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), item.reason === 'Project' || item.reason === 'Customer Credit' || parseFloat(item.remaining) === parseFloat(item.amount) ? 0 .toFixed(2) : item.PaymentReceivedFC !== undefined ? item.PaymentReceivedFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), item.reason === 'Project' || item.reason === 'Customer Credit' || parseFloat(item.remaining) === parseFloat(item.amount) ? 0 .toFixed(2) : item.PaymentReceivedUSD !== undefined ? item.PaymentReceivedUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : item.amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        style: {
          border: '1px solid gray'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), item.remaining.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))) : null);
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray'
      },
      colSpan: 4
    }, "Daily Payment Received Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray',
        width: '100px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, isNaN(totalPaymentFC1) ? 0 : totalPaymentFC1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        border: '1px solid gray',
        width: '100px'
      },
      colSpan: 2
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, isNaN(totalPaymentUSD1) ? totalPaymentUSDTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : totalPaymentUSD1.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))))), user.data.role === 'CEO' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
      style: {
        position: 'relative',
        float: 'right',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sx: {
        width: '600px',
        color: 'gray',
        marginBottom: '5px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      sx: {
        justifyContent: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
      style: {
        marginBottom: '5px',
        borderCollapse: 'collapse',
        width: '100%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      colSpan: 3,
      style: {
        textAlign: 'center',
        fontSize: '20px'
      }
    }, "Summary")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid black'
      }
    }, "Total (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      style: {
        border: '1px solid black'
      }
    }, "Total ($)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, "Cash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, totalCashFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, totalCashUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, "Total Expense"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), totalDayFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), totalDay.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, "Total Item Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), totalItemPurchaseFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), totalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, "Total PayRoll"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), totalPayRollDailyFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), totalPayRollDaily.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, "Total Payment Received"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), totalEnterFc.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), totalEnter.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), filterTotal2.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
      key: row._id
    }, row.status !== undefined || row.status === 'Closed' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, "Amount Return"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), row.returnAmountFC !== undefined ? row.returnAmountFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), row.returnAmountUSD !== undefined ? row.returnAmountUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)) : null)), filterTotal2.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", {
      key: row._id
    }, row.status !== undefined || row.status === 'Closed' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, "Remaining"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), row.RemainingAmountFC !== undefined ? row.RemainingAmountFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), row.RemainingAmountUSD !== undefined ? row.RemainingAmountUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, "Remaining"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), RemainingFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      style: {
        textAlign: 'left',
        fontSize: '20px',
        border: '1px solid black'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), RemainingUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, filterTotal2.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: row._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      colSpan: 3
    }, row.status !== undefined ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, row.status !== 'Close' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => handleOpenViewStatus(row._id),
      className: "btnCustomer",
      style: {
        width: '100%'
      }
    }, "Edit") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      style: {
        width: '100%',
        textAlign: 'center'
      }
    }, "Closed")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: () => handleOpenViewStatus(row._id),
      className: "btnCustomer",
      style: {
        width: '100%'
      }
    }, "Cash Out"))))))))))))))));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_31__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_30__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_35__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Expenses Daily Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => navigate('/DailyExpenses')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_57__["default"], {
    style: {
      color: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_65__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_64__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], {
    sx: {
      marginLeft: '10px',
      marginRight: '10px'
    }
  }, user.data.userName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_43__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_30__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_36__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_33__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_1__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_30__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_34__["default"], {
    maxWidth: "none",
    sx: {
      mt: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_61__["default"], {
    value: value3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      borderColor: 'divider'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_62__["default"], {
    onChange: handleChange3,
    "aria-label": "lab API tabs example",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: "Overview",
    value: "1",
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: 'gray',
        borderRadius: '10px'
      },
      '&:hover': {
        color: 'gray',
        bgcolor: '#f2f2f2',
        border: '1px solid gray',
        borderRadius: '10px'
      }
    }
  }), user.data.role === 'CEO' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: "Cash In",
    value: "2",
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: 'gray',
        borderRadius: '10px'
      },
      '&:hover': {
        color: 'gray',
        bgcolor: '#f2f2f2',
        border: '1px solid gray',
        borderRadius: '10px'
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: "View Per Day",
    value: "3",
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: 'gray',
        borderRadius: '10px'
      },
      '&:hover': {
        color: 'gray',
        bgcolor: '#f2f2f2',
        border: '1px solid gray',
        borderRadius: '10px'
      }
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_63__["default"], {
    value: "1",
    sx: {
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%',
      marginTop: '50px',
      marginBottom: '50px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DailyExpensesMonthlyChartView__WEBPACK_IMPORTED_MODULE_48__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_63__["default"], {
    value: "2",
    sx: {
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      padding: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    label: "search",
    id: "search",
    value: search2,
    variant: "standard",
    onChange: e => setSearch2(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: '100%',
      marginTop: '10px',
      height: '520px',
      overflow: 'hidden',
      overflowY: "scroll"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    "aria-label": "collapsible table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      padding: '1px'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      padding: '1px'
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      padding: '1px'
    }
  }, "Created By"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      padding: '1px'
    }
  }, "Total"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, newArrayCash.map((row, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RowCash, {
    key: i,
    row: row
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_63__["default"], {
    value: "3",
    sx: {
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginBottom: '5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '0px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_44__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_46__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_47__.DemoContainer, {
    components: ['DatePicker', 'DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_45__.DatePicker, {
    required: true,
    name: "startDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_37___default()(startDate),
    onChange: date => handleChangeDate(date),
    format: "DD/MM/YYYY"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PrintTooltip, {
    title: "Print"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handlePrint
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_52__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '5px'
    }
  }, filteredData.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: row
  }, filterTotal2.map(row2 => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: row2._id
  }, dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row2.cashDate).format('DD/MM') === dayjs__WEBPACK_IMPORTED_MODULE_37___default()(row).format('DD/MM') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'gray',
      fontSize: '20px'
    }
  }, "Today's cash ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
    title: "Edit",
    placement: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'gray',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => handleOpenView(row2._id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_58__["default"], null))))) : '')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: {
      height: '540px',
      width: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      maxHeight: '540px'
    }
  }, filteredData.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    "aria-label": "collapsible table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      padding: '1px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      padding: '1px'
    }
  }, "Date"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], null, filteredData.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Row, {
    key: row,
    row: row
  })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      textAlign: 'center'
    }
  }, "Select a Start Date And End Date To View Expenses"))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: loadingOpenModal,
    onClose: handleClose,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_40__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_38__["default"], {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: ErrorOpenModal,
    onClose: handleCloseError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_40__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_39__["default"], {
    style: {
      color: 'red',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data Failed to Saved"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseError
  }, "Try Again")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: open,
    onClose: handleCloseView,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 1000
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleCloseView,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_50__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Today's Cash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitUpdate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_44__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_46__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_47__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_45__.DatePicker, {
    name: "cashDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_37___default()(cashDate),
    onChange: date => setCashDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      height: 200,
      width: '100%',
      padding: '10px',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total $"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, amount ? amount.map((row, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: row.idRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_51__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, row.amountFC !== 0 && row.total !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: row.amountFC === 0 && row.total === 0,
    name: "amountFC",
    id: "amountFC",
    onChange: e => handleChangeAmount(e, i),
    value: row.amountFC,
    size: "small",
    sx: {
      width: '130px',
      backgroundColor: 'white'
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: true,
    name: "amountFC",
    id: "amountFC",
    onChange: e => handleChangeAmount(e, i),
    size: "small",
    sx: {
      width: '130px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    disabled: true,
    name: "rate",
    id: "rate",
    value: row.rate,
    onChange: e => handleChangeAmount(e, i),
    size: "small",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: true,
    name: "amountUsd",
    id: "amountUsd",
    value: row.amountUsd,
    onChange: e => handleChangeAmount(e, i),
    size: "small",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    hidden: true,
    id: "amountTotalInvoice"
  }, row.total), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    name: "note",
    id: "note",
    value: row.note !== undefined ? row.note : '',
    onChange: e => handleChangeAmount(e, i),
    size: "small",
    sx: {
      width: '300px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
    title: "Delete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => deleteItem(row.idRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_53__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  })))))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, totalCashInfo)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: addItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_49__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: openOption,
    onClose: handleCloseViewOption,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleCloseViewOption,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_50__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    container: true,
    sx: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 12,
    sx: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], null, "Do you want to take back the cash or send it to the next day ? "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note :"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2"
  }), "select cash to take back or select next to make a new cash for the next day")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: handleOpenViewStatus,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Cash")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    onClick: handleOpenViewNextDay,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Next"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: openStatus,
    onClose: handleCloseViewStatus,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 1000
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleCloseViewStatus,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_50__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Close the day"), statusInfo === 'Pending' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitUpdateReturn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_44__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_46__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_47__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_45__.DatePicker, {
    name: "cashDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_37___default()(cashDate),
    onChange: date => setCashDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total ($)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, "Cash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, totalCashFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, totalCashUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, "Total Expense"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), totalDayFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), totalDay.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, "Total Item Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'center',
      fontSize: '20px'
    }
  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), totalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, "Total PayRoll"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'center',
      fontSize: '20px'
    }
  }, "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), totalPayRollDaily.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, "Amount To Return"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), RemainingFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), RemainingUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, "Amount Received"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), restInfoFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), restInfoUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, "Return Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: true,
    name: "returnFC",
    id: "returnFC",
    onChange: e => setReturnFC(e.target.value),
    size: "small",
    sx: {
      width: '150px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: true,
    name: "returnUSD",
    id: "returnUSD",
    onChange: e => setReturnUSD(e.target.value),
    size: "small",
    sx: {
      width: '150px',
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, "Different"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), restFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), restUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitUpdateReturn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_44__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_46__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_47__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_45__.DatePicker, {
    name: "cashDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_37___default()(cashDate),
    onChange: date => setCashDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total (FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total ($)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, "Cash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, totalCashFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, totalCashUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, "Total Expense"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), totalDayFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), totalDay.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, "Total Item Purchase"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), totalItemPurchaseFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), totalItemPurchase.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, "Total PayRoll"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), totalPayRollDailyFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), totalPayRollDaily.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, "Total Payment Received"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), isNaN(totalPaymentFC) ? 0 : totalPaymentFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), isNaN(totalPaymentUSD) ? totalPaymentUSDTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : totalPaymentUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, "Amount To Return"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), RemainingFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), RemainingUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, "Return Amount"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: true,
    name: "returnFC",
    id: "returnFC",
    onChange: e => setReturnFC(e.target.value),
    size: "small",
    sx: {
      width: '150px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: true,
    name: "returnUSD",
    id: "returnUSD",
    onChange: e => setReturnUSD(e.target.value),
    size: "small",
    sx: {
      width: '150px',
      backgroundColor: 'white'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, "Different"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), restFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    style: {
      textAlign: 'left',
      fontSize: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), restUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: openNextDay,
    onClose: handleCloseViewNextDay,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 1000
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: handleCloseViewNextDay,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_50__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Today's Cash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_44__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_46__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_47__.DemoContainer, {
    components: ['DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_45__.DatePicker, {
    name: "cashDate",
    label: "Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_37___default()(cashDate),
    onChange: date => setCashDate(date),
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    format: "DD/MM/YYYY"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 11
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    sx: {
      height: 200,
      width: '100%',
      padding: '10px',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "tableInfo10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Amount FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Total $"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Note"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", null, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, amount1 ? amount1.map((row, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: row.idRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_51__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: true,
    name: "amountFC",
    id: "amountFC",
    value: row.amountFC,
    onChange: e => handleChangeAmount1(e, i),
    size: "small",
    sx: {
      width: '130px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    disabled: true,
    name: "rate",
    id: "rate",
    value: row.rate,
    onChange: e => handleChangeAmount1(e, i),
    size: "small",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: true,
    name: "amountUsd",
    id: "amountUsd",
    value: row.amountUsd,
    onChange: e => handleChangeAmount1(e, i),
    size: "small",
    sx: {
      width: '100px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    hidden: true,
    id: "amountTotalInvoice"
  }, row.total), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    name: "note",
    id: "note",
    value: row.note,
    onChange: e => handleChangeAmount1(e, i),
    size: "small",
    sx: {
      width: '300px',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LightTooltip, {
    title: "Delete"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: () => deleteItem1(row.idRow)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_53__["default"], {
    style: {
      cursor: 'pointer',
      color: 'red'
    }
  })))))) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
    colSpan: 3
  }, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Add",
    placement: "bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onClick: addItem1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_49__["default"], {
    className: "btn1",
    style: {
      fontSize: '40px'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Save")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DailyExpenseAdminView);

/***/ },

/***/ "./src/js/AdminView1/PageView/DailyExpenses/DailyExpensesMonthlyChartView.js"
/*!***********************************************************************************!*\
  !*** ./src/js/AdminView1/PageView/DailyExpenses/DailyExpensesMonthlyChartView.js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_x_charts_LineChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/x-charts/LineChart */ "./node_modules/@mui/x-charts/LineChart/LineChart.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;








function DailyExpensesMonthlyChartView() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    monthExpensesTotal = _useState2[0],
    setMonthExpensesTotal = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date1 = new Date();
      return date1;
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    yearExpensesTotal = _useState4[0],
    setYearExpensesTotal = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    categories = _useState6[0],
    setCategories = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* () {
        try {
          var _expenseResponse$data;
          var _yield$Promise$all = yield Promise.all([axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_2__.ENDPOINT_URL, "/expense?summary=true")), axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_2__.ENDPOINT_URL, "/expensesCategory"))]),
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2),
            expenseResponse = _yield$Promise$all2[0],
            categoryResponse = _yield$Promise$all2[1];
          setMonthExpensesTotal((_expenseResponse$data = expenseResponse.data) === null || _expenseResponse$data === void 0 || (_expenseResponse$data = _expenseResponse$data.data) === null || _expenseResponse$data === void 0 ? void 0 : _expenseResponse$data.filter(row => dayjs__WEBPACK_IMPORTED_MODULE_8___default()(row.expenseDate).format('YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_8___default()(yearExpensesTotal).format('YYYY')));
          setCategories(categoryResponse.data.data);
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();
    fetchData();
  }, [yearExpensesTotal]);
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState8 = _slicedToArray(_useState7, 2),
    totalExpenses = _useState8[0],
    setTotalExpenses = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var ExT = monthExpensesTotal.reduce((sum, row) => sum + row.total, 0);
    setTotalExpenses(ExT);
  }, [monthExpensesTotal]);
  var TotalMonth = monthExpensesTotal ? monthExpensesTotal.reduce((acc, item) => {
    var month = dayjs__WEBPACK_IMPORTED_MODULE_8___default()(item.expenseDate).format('MMMM');
    var year = dayjs__WEBPACK_IMPORTED_MODULE_8___default()(item.expenseDate).format('YYYY');
    if (!acc[month]) {
      acc[month] = {
        year,
        month,
        total: 0
      };
    }
    acc[month].total += parseFloat(item.total);
    return acc;
  }, {}) : '';
  var newMonthArray = Object.entries(TotalMonth).map(_ref2 => {
    var _ref3 = _slicedToArray(_ref2, 2),
      month = _ref3[0],
      total = _ref3[1];
    return {
      month: total.month,
      total: parseFloat(total.total.toFixed(2)),
      year: total.year
    };
  });
  var sortArrayByMonth = newMonthArray.sort((a, b) => {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'November', 'December'];
    return months.indexOf(a.month) - months.indexOf(b.month);
  }).filter(row => {
    var rowDate = dayjs__WEBPACK_IMPORTED_MODULE_8___default()(row.year).format('YYYY');
    return rowDate === dayjs__WEBPACK_IMPORTED_MODULE_8___default()(yearExpensesTotal).format('YYYY');
  });
  var categoryTotalChart = categories.map(row => ({
    id: row._id,
    name: row.expensesCategory,
    total: monthExpensesTotal.reduce((acc, expense) => {
      if (expense.expenseCategory._id === row._id) {
        return acc + parseFloat(expense.total);
      }
      return acc;
    }, 0)
  }));
  var categoryTotalChart1 = categoryTotalChart.map(row => ({
    id: row._id,
    name: row.name,
    total: row.total.toFixed(2)
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_4__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_7__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_6__.DemoContainer, {
    components: ['DatePicker', 'DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_5__.DatePicker, {
    format: "YYYY",
    label: '"year"',
    views: ['year'],
    name: "yearExpensesTotal",
    value: dayjs__WEBPACK_IMPORTED_MODULE_8___default()(yearExpensesTotal),
    onChange: date => setYearExpensesTotal(date)
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    style: {
      alignItems: 'center'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    sx: {
      minWidth: 1000,
      height: 400
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      position: 'relative',
      float: 'right',
      color: '#8884d8',
      fontSize: '20px'
    }
  }, "Total Expenses: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'gray'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), " ", totalExpenses ? totalExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      color: '#8884d8'
    }
  }, "Total Expenses per Month"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_charts_LineChart__WEBPACK_IMPORTED_MODULE_3__.LineChart, {
    dataset: sortArrayByMonth,
    xAxis: [{
      scaleType: 'point',
      data: sortArrayByMonth.map(row => row.month)
    }],
    series: [{
      dataKey: 'total',
      area: true
    }],
    sx: {
      width: '100%'
    },
    height: 350
  }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DailyExpensesMonthlyChartView);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfRGFpbHlFeHBlbnNlc19EYWlseUV4cGVuc2VBZG1pblZpZXdfanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQW1FO0FBQ1Y7QUFDbEM7QUFDRTtBQUMyQjtBQUNzQjtBQUNMO0FBQ2lNO0FBQ3BOO0FBQ3hCO0FBQ3dCO0FBQ0o7QUFDa0I7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ1E7QUFDQTtBQUNjO0FBQ0k7QUFDeEM7QUFDb0M7QUFDVjtBQUNMO0FBQ1E7QUFDK0I7QUFDdEM7QUFDdUI7QUFDUDtBQUNHO0FBQ1M7QUFDa0Q7QUFDbEY7QUFDUTtBQUNzQjtBQUNKO0FBQ1A7QUFDVDtBQUNWO0FBQ2xCO0FBQ0k7QUFDa0I7QUFDUztBQUNIO0FBQ1E7QUFHOUQsSUFBTXNGLFdBQVcsR0FBR3pFLDBEQUFNLENBQUMwRSxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDL0MzRiwwREFBQSxDQUFDcUMsOERBQU8sRUFBQXdELFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxLQUFBLENBQUxDLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBTzVELDhEQUFjLENBQUM2RCxPQUFPLElBQUs7TUFDaENDLGVBQWUsRUFBRSxTQUFTO01BQzFCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxTQUFTLEVBQUVMLEtBQUss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QUssQ0FDRSxDQUFDLGVBQ1ZBLDBEQUFBLENBQUNpQyxzREFBVTtJQUFDcWdCLEVBQUUsRUFBRTtNQUFFamMsS0FBSyxFQUFFO0lBQVU7RUFBRSxHQUFDLDBCQUFvQyxDQUFDLGVBQzNFckcsMERBQUEsQ0FBQzJuQiw4REFBUztJQUNSa0MsT0FBTyxFQUFFWixnQkFBaUI7SUFDMUJhLEtBQUssRUFBRSxDQUFDO01BQUVDLFNBQVMsRUFBRSxPQUFPO01BQUV6ZixJQUFJLEVBQUUyZSxnQkFBZ0IsQ0FBQ2paLEdBQUcsQ0FBRUosR0FBRyxJQUFLQSxHQUFHLENBQUMwVSxLQUFLO0lBQUUsQ0FBQyxDQUFFO0lBQ2hGMEYsTUFBTSxFQUFFLENBQUM7TUFBRUMsT0FBTyxFQUFFLE9BQU87TUFBRUMsSUFBSSxFQUFFO0lBQUssQ0FBQyxDQUFFO0lBQzNDNUgsRUFBRSxFQUFFO01BQUV4YixLQUFLLEVBQUU7SUFBTyxDQUFFO0lBQ3RCOGUsTUFBTSxFQUFFO0VBQUksQ0FDYixDQUNVLENBQ1QsQ0FDRixDQUNGLENBQ0gsQ0FBQztBQUVWO0FBRUEsaUVBQWU3aEIsNkJBQTZCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvRGFpbHlFeHBlbnNlcy9EYWlseUV4cGVuc2VBZG1pblZpZXcuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL1BhZ2VWaWV3L0RhaWx5RXhwZW5zZXMvRGFpbHlFeHBlbnNlc01vbnRobHlDaGFydFZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgU2lkZWJhckRhc2ggZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L1NpZGViYXJEYXNoJztcclxuaW1wb3J0ICcuLi8uLi92aWV3LmNzcydcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJ1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1NlYXJjaCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zTm9uZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zTm9uZSc7XHJcbmltcG9ydCB7IGNhY2hlZEdldCwgaW52YWxpZGF0ZUNhY2hlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXBpQ2FjaGUnO1xyXG5pbXBvcnQgeyBDb2xsYXBzZSwgR3JpZCwgSWNvbkJ1dHRvbiwgc3R5bGVkLCBUYWJsZSwgVGFibGVIZWFkLCBUYWJsZVJvdywgVGFibGVDZWxsLCBUYWJsZUJvZHksIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBPdXRsaW5lZElucHV0LCBJbnB1dEFkb3JubWVudCwgTW9kYWwsIEJhY2tkcm9wLCBCb3gsIFRleHRGaWVsZCwgUGFwZXIsIFRhYmxlQ29udGFpbmVyLCBDYXJkLCBDYXJkQ29udGVudCwgRGl2aWRlciwgVGFiIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uLy4uLy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFkZ2UnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgQ2FuY2VsSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NhbmNlbCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIsIExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycyc7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IHsgRGVtb0NvbnRhaW5lciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvaW50ZXJuYWxzL2RlbW8nO1xyXG5pbXBvcnQgRGFpbHlFeHBlbnNlc01vbnRobHlDaGFydFZpZXcgZnJvbSAnLi9EYWlseUV4cGVuc2VzTW9udGhseUNoYXJ0Vmlldyc7XHJcbmltcG9ydCB7IEFkZCwgQ2xvc2UsIERpdmVyc2l0eTFSb3VuZGVkLCBEcmFnSW5kaWNhdG9yUm91bmRlZCwgTG9jYWxQcmludHNob3AsIFZpc2liaWxpdHlPdXRsaW5lZCB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBEYXRhR3JpZCB9IGZyb20gJ0BtdWkveC1kYXRhLWdyaWQnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCBLZXlib2FyZEFycm93RG93bkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93RG93bic7XHJcbmltcG9ydCBLZXlib2FyZEFycm93VXBJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd1VwJztcclxuaW1wb3J0IFJlYWN0VG9QcmludCwgeyB1c2VSZWFjdFRvUHJpbnQgfSBmcm9tICdyZWFjdC10by1wcmludCc7XHJcbmltcG9ydCBBcnJvd0JhY2sgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQgRWRpdCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgeyB2NCB9IGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgeyBlcnJvciB9IGZyb20gJ3N0eWxlJztcclxuaW1wb3J0IERlbGV0ZSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IFRhYkNvbnRleHQsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSAnQG11aS9sYWInO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuXHJcblxyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBFZGl0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IFByaW50VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBMaWdodFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5mdW5jdGlvbiBEYWlseUV4cGVuc2VBZG1pblZpZXcoKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFtleHBlbnNlcywgc2V0RXhwZW5zZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtmaWx0ZXJlZERhdGEsIHNldEZpbHRlcmVkRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Nhc2gsIHNldENhc2hdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyYXRlLCBzZXRSYXRlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpdGVtUHVyY2hhc2VJbmZvLCBzZXRJdGVtUHVyY2hhc2VdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwdXJjaGFzZU9yZGVyLCBzZXRQdXJjaGFzZU9yZGVyXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGF5Um9sbCwgc2V0UGF5Um9sbF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3BheW1lbnQsIHNldFBheW1lbnRdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwb3NJbmZvLCBzZXRQb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIHN0YXJ0RGF0ZSBkZWNsYXJlZCBIRVJFIChiZWZvcmUgYW55IHVzZUVmZmVjdCB0aGF0IHVzZXMgaXQpIGFuZCBpbml0aWFsaXplZFxyXG4gIC8vIGRpcmVjdGx5IGZyb20gbG9jYWxTdG9yYWdlIHNvIHRoYXQgdGhlIHZlcnkgZmlyc3QgQVBJIGZldGNoIHRhcmdldHMgdGhlIGNvcnJlY3RcclxuICAvLyBkYXRlIOKAlCBlbGltaW5hdGluZyB0aGUgcmFjZSBjb25kaXRpb24gd2hlcmUgYW4gZWFybHkgZmV0Y2ggZm9yIFwidG9kYXlcIiBjb3VsZFxyXG4gIC8vIG92ZXJ3cml0ZSB0aGUgbGF0ZXIgZmV0Y2ggZm9yIHRoZSBzdG9yZWQgcGFzdCBkYXRlLlxyXG4gIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzdG9yZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0ZUluZm8nKTtcclxuICAgICAgaWYgKHN0b3JlZCkgcmV0dXJuIG5ldyBEYXRlKEpTT04ucGFyc2Uoc3RvcmVkKSk7XHJcbiAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgcmV0dXJuIGRheWpzKCkudG9EYXRlKCk7XHJcbiAgfSk7XHJcbiAgY29uc3QgW2Nhc2hEYXRlLCBzZXRDYXNoRGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmV0dXJuRkMsIHNldFJldHVybkZDXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyZXR1cm5VU0QsIHNldFJldHVyblVTRF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdG90YWxDYXNoSW5mbywgc2V0VG90YWxDYXNoSW5mb10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBmZXRjaENhc2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY2FzaFJlc3BvbnNlID0gYXdhaXQgY2FjaGVkR2V0KGAke0VORFBPSU5UX1VSTH0vY2FzaGApXHJcbiAgICAgIHNldENhc2goY2FzaFJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjYXNoIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRmV0Y2ggc3RhdGljIGRhdGEgb25jZSBvbiBtb3VudCAoZXhwZW5zZXMsIHBheXJvbGwsIFBPUywgcmF0ZXMsIGV0Yy4pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoU3RhdGljRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNQTyA9IGF3YWl0IGNhY2hlZEdldChgJHtFTkRQT0lOVF9VUkx9L3B1cmNoYXNlT3JkZXJgKVxyXG4gICAgICAgIHNldFB1cmNoYXNlT3JkZXIocmVzUE8uZGF0YT8uZGF0YT8uZmlsdGVyKChyb3cpID0+IHJvdy5zdGF0dXMgJiYgcm93LnN0YXR1cyA9PT0gJ1B1cmNoYXNlJykpO1xyXG4gICAgICAgIGNvbnN0IGV4cGVuc2VSZXNwb25zZSA9IGF3YWl0IGNhY2hlZEdldChgJHtFTkRQT0lOVF9VUkx9L2V4cGVuc2VgKVxyXG4gICAgICAgIHNldEV4cGVuc2VzKGV4cGVuc2VSZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIGF3YWl0IGZldGNoQ2FzaERhdGEoKTtcclxuICAgICAgICBjb25zdCByYXRlUmVzcG9uc2UgPSBhd2FpdCBjYWNoZWRHZXQoYCR7RU5EUE9JTlRfVVJMfS9yYXRlYClcclxuICAgICAgICByYXRlUmVzcG9uc2UuZGF0YS5kYXRhLm1hcCgocm93KSA9PiBzZXRSYXRlKHJvdy5yYXRlKSlcclxuICAgICAgICBjb25zdCByZXNQYXlSb2xsID0gYXdhaXQgY2FjaGVkR2V0KGAke0VORFBPSU5UX1VSTH0vcGF5Um9sbGApXHJcbiAgICAgICAgc2V0UGF5Um9sbChyZXNQYXlSb2xsLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cuc3RhdHVzICE9PSB1bmRlZmluZWQgPyByb3cuc3RhdHVzID09PSAnUGFpZCcgOiBudWxsKSlcclxuICAgICAgICBjb25zdCByZXNQb3MgPSBhd2FpdCBjYWNoZWRHZXQoYCR7RU5EUE9JTlRfVVJMfS9wb3NgKVxyXG4gICAgICAgIHNldFBvcyhyZXNQb3MuZGF0YS5kYXRhLm1hcCgocm93KSA9PiAoeyAuLi5yb3csIGFtb3VudFRvdGFsRmM6IHJvdy50b3RhbEZDIC0gcm93LmNyZWRpdEZDLCBhbW91bnRUb3RhbFVzZDogcm93LnRvdGFsVVNEIC0gcm93LmNyZWRpdFVzZCB9KSkpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc3RhdGljIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFN0YXRpY0RhdGEoKVxyXG4gIH0sIFtdKVxyXG5cclxuICAvLyBGZXRjaCBwYXltZW50IHNlcGFyYXRlbHkg4oCUIHJlLWZldGNoIG9uIHdpbmRvdyBmb2N1cyBzbyB0aGF0XHJcbiAgLy8gcGF5bWVudHMgY3JlYXRlZCBpbiBhbm90aGVyIHZpZXcgYXBwZWFyIGltbWVkaWF0ZWx5IHdoZW4gcmV0dXJuaW5nIGhlcmUuXHJcbiAgY29uc3QgZmV0Y2hQYXltZW50RGF0YSA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc1BheW1lbnQgPSBhd2FpdCBjYWNoZWRHZXQoYCR7RU5EUE9JTlRfVVJMfS9wYXltZW50YClcclxuICAgICAgc2V0UGF5bWVudChyZXNQYXltZW50LmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cubW9kZXMgIT09ICdDcmVkaXQtQWNjb3VudCcpKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcGF5bWVudCBkYXRhOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUGF5bWVudERhdGEoKVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZmV0Y2hQYXltZW50RGF0YSlcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmZXRjaFBheW1lbnREYXRhKVxyXG4gIH0sIFtmZXRjaFBheW1lbnREYXRhXSlcclxuXHJcbiAgLy8gRmV0Y2ggaXRlbSBwdXJjaGFzZXMgZm9yIHNlbGVjdGVkIGRhdGUg4oCUIHJlLWZldGNoZXMgd2hlbmV2ZXIgdGhlIHNlbGVjdGVkIGRhdGUgY2hhbmdlcy5cclxuICAvLyBVc2VzID90YXJnZXREYXRlPSBzbyB0aGUgQVBJIHJldHVybnMgb25seSB0aGUgcmVjb3JkcyB0aGF0IGhhZCBwYXltZW50cyBvbiB0aGF0IGRheS5cclxuICAvLyBzdGFydERhdGUgaXMgYWx3YXlzIGluaXRpYWxpemVkIChuZXZlciBudWxsKSwgc28gdGhpcyBmaXJlcyBvbiBtb3VudCB3aXRoIHRvZGF5J3MgZGF0ZS5cclxuICBjb25zdCBmZXRjaEl0ZW1QdXJjaGFzZUZvckRhdGUgPSBSZWFjdC51c2VDYWxsYmFjayhhc3luYyAoZGF0ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdGFyZ2V0RGF0ZVBhcmFtID0gZGF5anMoZGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2l0ZW1QdXJjaGFzZT90YXJnZXREYXRlPSR7dGFyZ2V0RGF0ZVBhcmFtfWApO1xyXG4gICAgICBzZXRJdGVtUHVyY2hhc2UocmVzLmRhdGE/LmRhdGEgfHwgW10pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgaXRlbSBwdXJjaGFzZSBkYXRhOicsIGVycm9yKTtcclxuICAgICAgc2V0SXRlbVB1cmNoYXNlKFtdKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaEl0ZW1QdXJjaGFzZUZvckRhdGUoc3RhcnREYXRlKTtcclxuICB9LCBbc3RhcnREYXRlLCBmZXRjaEl0ZW1QdXJjaGFzZUZvckRhdGVdKTsgLy8gc3RhcnREYXRlIGlzIGFsd2F5cyBkZWZpbmVkIChpbml0aWFsaXplZCBhdCB0b3ApXHJcblxyXG4gIGNvbnN0IGl0ZW1QdXJjaGFzZSA9IFtdO1xyXG5cclxuICBpdGVtUHVyY2hhc2VJbmZvLmZvckVhY2gocm93ID0+IHtcclxuICAgIGl0ZW1QdXJjaGFzZS5wdXNoKHtcclxuICAgICAgX2lkOiByb3cuX2lkLFxyXG4gICAgICBpdGVtUHVyY2hhc2VOdW1iZXI6ICdJUC0nICsgU3RyaW5nKHJvdy5pdGVtUHVyY2hhc2VOdW1iZXIpLnBhZFN0YXJ0KDUsICcwJyksXHJcbiAgICAgIGl0ZW1QdXJjaGFzZURhdGU6IHJvdy5pdGVtUHVyY2hhc2VEYXRlLFxyXG4gICAgICBwcm9qZWN0TmFtZTogcm93LnByb2plY3ROYW1lLFxyXG4gICAgICBtYW51ZmFjdHVyZXI6IHJvdy5tYW51ZmFjdHVyZXIsXHJcbiAgICAgIG1hbnVmYWN0dXJlck51bWJlcjogcm93Lm1hbnVmYWN0dXJlck51bWJlcixcclxuICAgICAgZGVzY3JpcHRpb246IHJvdy5kZXNjcmlwdGlvbixcclxuICAgICAgdG90YWxGQzogcm93LnRvdGFsRkMsXHJcbiAgICAgIHRvdGFsOiByb3cudG90YWwsXHJcbiAgICAgIGFtb3VudDogcm93LnRvdGFsVVNEICE9PSB1bmRlZmluZWQgPyByb3cudG90YWxVU0QgOiAocm93LnRvdGFsVVNEIHx8IChyb3cudG90YWwgLyAocm93LnJhdGUgfHwgMSkpIHx8IDApXHJcbiAgICB9KVxyXG4gIH0pXHJcblxyXG5cclxuICAvLyBzdGFydERhdGUgYW5kIHJlbGF0ZWQgc3RhdGUgbW92ZWQgdG8gdG9wIG9mIGNvbXBvbmVudCDigJQgc2VlIGRlY2xhcmF0aW9uIGFib3ZlLlxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VEYXRlID0gKGRhdGUpID0+IHtcclxuICAgIHNldFN0YXJ0RGF0ZShkYXRlKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGVJbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0ZSkpXHJcbiAgfVxyXG4gIGNvbnN0IGVuZERhdGUgPSBzdGFydERhdGU7XHJcbiAgey8qKiBDYXNoIHN0YXJ0ICovIH1cclxuICBjb25zdCBhZGRJdGVtID0gKCkgPT4ge1xyXG4gICAgc2V0QW1vdW50KFsuLi5hbW91bnQsIHtcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGFtb3VudEZDOiAwLFxyXG4gICAgICBhbW91bnRVc2Q6IDAsXHJcbiAgICAgIHJhdGU6IDAsXHJcbiAgICAgIHRvdGFsOiAwLFxyXG4gICAgICBub3RlOiAnJ1xyXG4gICAgfV0pO1xyXG4gIH1cclxuICBjb25zdCBkZWxldGVJdGVtID0gaWRSb3cgPT4ge1xyXG4gICAgc2V0QW1vdW50KGFtb3VudCA9PiBhbW91bnQuZmlsdGVyKChJdGVtKSA9PiBJdGVtLmlkUm93ICE9PSBpZFJvdykpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlQW1vdW50ID0gKGUsIGkpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5hbW91bnRdO1xyXG4gICAgbGlzdFtpXVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgbGlzdFtpXVsncmF0ZSddID0gcmF0ZVxyXG4gICAgbGlzdFtpXVsndG90YWwnXSA9IE1hdGgucm91bmQoKChwYXJzZUludChsaXN0W2ldWydhbW91bnRGQyddKSAvIGxpc3RbaV1bJ3JhdGUnXSkgKyBsaXN0W2ldWydhbW91bnRVc2QnXSkgKiAxMDApIC8gMTAwXHJcbiAgICBzZXRBbW91bnQobGlzdClcclxuICB9XHJcbiAgey8qKiBDYXNoIGVuZCAqLyB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gW107XHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSk7XHJcbiAgICB3aGlsZSAoY3VycmVudERhdGUgPD0gZW5kRGF0ZSkge1xyXG4gICAgICBoZWFkZXJzLnB1c2goY3VycmVudERhdGUudG9EYXRlU3RyaW5nKCkpO1xyXG4gICAgICBjdXJyZW50RGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIDEpO1xyXG4gICAgfVxyXG4gICAgc2V0RmlsdGVyZWREYXRhKGhlYWRlcnMpXHJcbiAgfSwgW3N0YXJ0RGF0ZSwgZW5kRGF0ZV0pXHJcblxyXG4gIGNvbnN0IFtleHBlbnNlc0ZpbHRlcmVkLCBzZXRFeHBlbnNlc0ZpbHRlcmVkXSA9IHVzZVN0YXRlKFtdKVxyXG4gIC8vIGl0ZW1QdXJjaGFzZUZpbHRlcmVkIGNvbXB1dGVkIHZpYSB1c2VNZW1vIChzeW5jaHJvbm91cykgc28gaXQgYWx3YXlzXHJcbiAgLy8gcmVmbGVjdHMgdGhlIGN1cnJlbnQgc3RhcnREYXRlICsgaXRlbVB1cmNoYXNlSW5mbyB3aXRob3V0IGFzeW5jIHRpbWluZyBnYXBzLlxyXG4gIGNvbnN0IFtwYXlSb2xsRmlsdGVyZWQsIHNldFBheVJvbGxGaWx0ZXJlZF0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbcG9zRmlsdGVyZWQsIHNldFBvc0ZpbHRlcmVkXSA9IHVzZVN0YXRlKFtdKVxyXG4gIC8vIEV4cGVuc2VzIEZpbHRlclxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b3RhbEV4cGVuc2VzID0gZXhwZW5zZXMuZmlsdGVyKChyb3cpID0+IHtcclxuICAgICAgY29uc3QgRXhwZW5zZXNEYXRlID0gZGF5anMocm93LmV4cGVuc2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKVxyXG4gICAgICByZXR1cm4gRXhwZW5zZXNEYXRlID49IGRheWpzKHN0YXJ0RGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJykgJiYgRXhwZW5zZXNEYXRlIDw9IGRheWpzKGVuZERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpXHJcbiAgICB9KVxyXG4gICAgc2V0RXhwZW5zZXNGaWx0ZXJlZCh0b3RhbEV4cGVuc2VzKVxyXG4gIH0sIFtzdGFydERhdGUsIGVuZERhdGUsIGV4cGVuc2VzXSlcclxuICBjb25zdCBpdGVtUHVyY2hhc2VGaWx0ZXJlZCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKCFzdGFydERhdGUgfHwgaXRlbVB1cmNoYXNlSW5mby5sZW5ndGggPT09IDApIHJldHVybiBbXTtcclxuICAgIGNvbnN0IHRndFN0ciA9IGRheWpzKHN0YXJ0RGF0ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICBjb25zdCByZXN1bHRzID0gW107XHJcbiAgICBpdGVtUHVyY2hhc2VJbmZvLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgbGV0IHBheW1lbnRVU0QgPSAwO1xyXG4gICAgICBsZXQgcGF5bWVudEZDID0gMDtcclxuICAgICAgaWYgKGl0ZW0ucGF5bWVudHMgJiYgQXJyYXkuaXNBcnJheShpdGVtLnBheW1lbnRzKSAmJiBpdGVtLnBheW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyBTdW0gb25seSB0aGUgcGF5bWVudHMgd2hvc2UgZGF0ZSBtYXRjaGVzIHRoZSBzZWxlY3RlZCBkYXRlIChzdHJpbmcgY29tcGFyaXNvbiwgdGltZXpvbmUtc2FmZSlcclxuICAgICAgICBpdGVtLnBheW1lbnRzLmZvckVhY2goKHBtdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGRheWpzKHBtdC5kYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKSA9PT0gdGd0U3RyKSB7XHJcbiAgICAgICAgICAgIHBheW1lbnRVU0QgKz0gcGFyc2VGbG9hdChwbXQuYW1vdW50ID8/IDApO1xyXG4gICAgICAgICAgICBwYXltZW50RkMgICs9IHBhcnNlRmxvYXQocG10LmFtb3VudEZDID8/IDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEZhbGxiYWNrOiBpdGVtIGhhcyBubyBwYXltZW50cyBhcnJheSDigJQgdXNlIGl0ZW0gdG90YWxzIGlmIGNyZWF0ZWQgb24gdGFyZ2V0IGRhdGVcclxuICAgICAgICBpZiAoZGF5anMoaXRlbS5pdGVtUHVyY2hhc2VEYXRlKS5mb3JtYXQoJ1lZWVktTU0tREQnKSA9PT0gdGd0U3RyKSB7XHJcbiAgICAgICAgICBwYXltZW50VVNEID0gcGFyc2VGbG9hdChpdGVtLnRvdGFsVVNEID8/IGl0ZW0udG90YWwgPz8gMCk7XHJcbiAgICAgICAgICBwYXltZW50RkMgID0gcGFyc2VGbG9hdChpdGVtLnRvdGFsRkMgPz8gMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChwYXltZW50VVNEID4gMCB8fCBwYXltZW50RkMgPiAwKSB7XHJcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgLi4uaXRlbSwgcGF5bWVudElkOiBpdGVtLl9pZCwgcGF5bWVudFVTRCwgcGF5bWVudEZDLCBwYXltZW50RGF0ZTogaXRlbS5pdGVtUHVyY2hhc2VEYXRlIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHRzO1xyXG4gIH0sIFtzdGFydERhdGUsIGl0ZW1QdXJjaGFzZUluZm9dKTtcclxuICAvLyBQYXkgUm9sbCBGaWx0ZXJcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdG90YWxFeHBlbnNlcyA9IHBheVJvbGwuZmlsdGVyKChyb3cpID0+IHtcclxuICAgICAgY29uc3QgRXhwZW5zZXNEYXRlID0gZGF5anMocm93LnBheURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpXHJcbiAgICAgIHJldHVybiBFeHBlbnNlc0RhdGUgPj0gZGF5anMoc3RhcnREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSAmJiBFeHBlbnNlc0RhdGUgPD0gZGF5anMoZW5kRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJylcclxuICAgIH0pXHJcbiAgICBzZXRQYXlSb2xsRmlsdGVyZWQodG90YWxFeHBlbnNlcylcclxuICB9LCBbc3RhcnREYXRlLCBlbmREYXRlLCBwYXlSb2xsXSlcclxuXHJcbiAgLy8gUE9TIEZpbHRlclxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b3RhbEV4cGVuc2VzID0gcG9zSW5mby5maWx0ZXIoKHJvdykgPT4ge1xyXG4gICAgICBjb25zdCBFeHBlbnNlc0RhdGUgPSBkYXlqcyhyb3cuaW52b2ljZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpXHJcbiAgICAgIHJldHVybiBFeHBlbnNlc0RhdGUgPj0gZGF5anMoc3RhcnREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSAmJiBFeHBlbnNlc0RhdGUgPD0gZGF5anMoZW5kRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJylcclxuICAgIH0pXHJcbiAgICBzZXRQb3NGaWx0ZXJlZCh0b3RhbEV4cGVuc2VzKVxyXG4gIH0sIFtzdGFydERhdGUsIGVuZERhdGUsIHBvc0luZm9dKVxyXG5cclxuXHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuU3RhdHVzLCBzZXRPcGVuU3RhdHVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3Blbk9wdGlvbiwgc2V0T3Blbk9wdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW5OZXh0RGF5LCBzZXRPcGVuTmV4dERheV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3ZpZXdJZCwgc2V0Vmlld0lkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt2aWV3SWRTdGF0dXMsIHNldFZpZXdJZFN0YXR1c10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtFcnJvck9wZW5Nb2RhbCwgc2V0RXJyb3JPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuVmlldyA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICAgIHNldFZpZXdJZChpZClcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlVmlldyA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlT3BlblZpZXdPcHRpb24gPSAoaWQpID0+IHtcclxuICAgIHNldE9wZW5PcHRpb24odHJ1ZSk7XHJcbiAgICBzZXRWaWV3SWRTdGF0dXMoaWQpXHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVZpZXdPcHRpb24gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuT3B0aW9uKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5WaWV3U3RhdHVzID0gKGlkKSA9PiB7XHJcbiAgICBzZXRPcGVuU3RhdHVzKHRydWUpO1xyXG4gICAgc2V0Vmlld0lkU3RhdHVzKGlkKVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VWaWV3U3RhdHVzID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlblN0YXR1cyhmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVPcGVuVmlld05leHREYXkgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuTmV4dERheSh0cnVlKTtcclxuICAgIHNldE9wZW5PcHRpb24oZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VWaWV3TmV4dERheSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5OZXh0RGF5KGZhbHNlKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaElkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAodmlld0lkICE9PSBudWxsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1jYXNoLyR7dmlld0lkfWApXHJcbiAgICAgICAgICBzZXRDYXNoRGF0ZShyZXMuZGF0YS5kYXRhLmNhc2hEYXRlKVxyXG4gICAgICAgICAgc2V0QW1vdW50KHJlcy5kYXRhLmRhdGEuYW1vdW50KVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoSWQoKVxyXG4gIH0sIFt2aWV3SWRdKVxyXG4gIGNvbnN0IFtzdGF0dXNJbmZvLCBzZXRTdGF0dXNJbmZvXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcmVzdEluZm9GQywgc2V0UmVzdEluZm9GY10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVzdEluZm9VU0QsIHNldFJlc3RJbmZvVVNEXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpbmRleElkLCBzZXRJbmRleElkXSA9IHVzZVN0YXRlKDApO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaElkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAodmlld0lkU3RhdHVzICE9PSBudWxsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1jYXNoLyR7dmlld0lkU3RhdHVzfWApXHJcbiAgICAgICAgICBzZXRDYXNoRGF0ZShyZXMuZGF0YS5kYXRhLmNhc2hEYXRlKVxyXG4gICAgICAgICAgc2V0U3RhdHVzSW5mbyhyZXMuZGF0YS5kYXRhLnN0YXR1cyAhPT0gdW5kZWZpbmVkID8gcmVzLmRhdGEuZGF0YS5zdGF0dXMgOiAnJylcclxuICAgICAgICAgIHNldFJlc3RJbmZvRmMocmVzLmRhdGEuZGF0YS5yZXR1cm5BbW91bnRGQyAhPT0gdW5kZWZpbmVkID8gcmVzLmRhdGEuZGF0YS5yZXR1cm5BbW91bnRGQyA6IDApXHJcbiAgICAgICAgICBzZXRSZXN0SW5mb1VTRChyZXMuZGF0YS5kYXRhLnJldHVybkFtb3VudFVTRCAhPT0gdW5kZWZpbmVkID8gcmVzLmRhdGEuZGF0YS5yZXR1cm5BbW91bnRVU0QgOiAwKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoSWQoKVxyXG4gIH0sIFt2aWV3SWRTdGF0dXNdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgc3VtID0gMDtcclxuICAgIGFtb3VudC5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgc3VtICs9IChwYXJzZUZsb2F0KHJvdy50b3RhbCkgfHwgMCk7XHJcbiAgICB9KTtcclxuICAgIHNldFRvdGFsQ2FzaEluZm8oTWF0aC5yb3VuZChzdW0gKiAxMDApIC8gMTAwKTtcclxuICB9LCBbYW1vdW50XSk7XHJcbi8vb3BlbiBsb2FkaW5nIG1vZGFsIHdoZW4gc3VibWl0IGlzIHRydWVcclxuICBjb25zdCBoYW5kbGVPcGVuID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIC8vb3BlbiBsb2FkaW5nIG1vZGFsIHdoZW4gZXJyb3JcclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgLy9jbG9zZSBsb2FkaW5nIG1vZGFsXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0T3Blbk9wdGlvbihmYWxzZSk7XHJcbiAgICBzZXRPcGVuU3RhdHVzKGZhbHNlKTtcclxuICAgIHNldE9wZW5OZXh0RGF5KGZhbHNlKTtcclxuICAgIGZldGNoQ2FzaERhdGEoKTsgLy8gUmVmcmVzaCBkYXRhIGV4cGxpY2l0bHlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKTtcclxuICB9XHJcbiAgLy9EZWNpc2lvbiBXaGVuIGxvYWRpbmcgZmluaXNoXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0VXBkYXRlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGNhc2hEYXRlLCB0b3RhbENhc2g6IHRvdGFsQ2FzaEluZm8sIGFtb3VudCwgdXBkYXRlUzogZmFsc2VcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1jYXNoLyR7dmlld0lkfWAsIGRhdGEpO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaW52YWxpZGF0ZUNhY2hlKCcvY2FzaCcpO1xyXG4gICAgICAgIGF3YWl0IGZldGNoQ2FzaERhdGEoKTtcclxuICAgICAgICBoYW5kbGVPcGVuKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIGhhbmRsZUVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgW2ZpbHRlclRvdGFsMiwgc2V0RmlsdGVyVG90YWwyXSA9IHVzZVN0YXRlKFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b3RhbEV4cGVuc2VzID0gY2FzaC5maWx0ZXIoKHJvdykgPT4ge1xyXG4gICAgICBjb25zdCBFeHBlbnNlc0RhdGUgPSBkYXlqcyhyb3cuY2FzaERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpXHJcbiAgICAgIHJldHVybiBFeHBlbnNlc0RhdGUgPj0gZGF5anMoc3RhcnREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSAmJiBFeHBlbnNlc0RhdGUgPD0gZGF5anMoZW5kRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJylcclxuICAgIH0pXHJcbiAgICBzZXRGaWx0ZXJUb3RhbDIodG90YWxFeHBlbnNlcylcclxuICB9LCBbc3RhcnREYXRlLCBlbmREYXRlLCBjYXNoXSlcclxuXHJcbiAgY29uc3QgW2ZpbHRlclRvdGFsUGF5bWVudCwgc2V0RmlsdGVyVG90YWxQYXltZW50XSA9IHVzZVN0YXRlKFtdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b3RhbEV4cGVuc2VzID0gcGF5bWVudC5maWx0ZXIoKHJvdykgPT4ge1xyXG4gICAgICBjb25zdCBFeHBlbnNlc0RhdGUgPSBkYXlqcyhyb3cucGF5bWVudERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpXHJcbiAgICAgIHJldHVybiBFeHBlbnNlc0RhdGUgPj0gZGF5anMoc3RhcnREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSAmJiBFeHBlbnNlc0RhdGUgPD0gZGF5anMoZW5kRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJylcclxuICAgIH0pXHJcbiAgICBzZXRGaWx0ZXJUb3RhbFBheW1lbnQodG90YWxFeHBlbnNlcylcclxuICB9LCBbc3RhcnREYXRlLCBlbmREYXRlLCBwYXltZW50XSlcclxuXHJcbiAgY29uc3QgdG90YWxEYXkgPSBleHBlbnNlc0ZpbHRlcmVkLmxlbmd0aCA+IDAgPyBleHBlbnNlc0ZpbHRlcmVkLmZpbHRlcihyb3cgPT4gcGFyc2VGbG9hdChyb3cuYW1vdW50KSA9PT0gMCkucmVkdWNlKChzdW0sIHJvdykgPT4gTWF0aC5yb3VuZCgoc3VtICsgcGFyc2VGbG9hdChyb3cudG90YWwpKSAqIDEwMCkgLyAxMDAsIDApIDogMFxyXG4gIGNvbnN0IHRvdGFsRGF5RkMgPSBleHBlbnNlc0ZpbHRlcmVkLmxlbmd0aCA+IDAgPyBleHBlbnNlc0ZpbHRlcmVkLmZpbHRlcihyb3cgPT4gcGFyc2VGbG9hdChyb3cuYW1vdW50KSAhPT0gMCkucmVkdWNlKChzdW0sIHJvdykgPT4gTWF0aC5yb3VuZCgoc3VtICsgcGFyc2VGbG9hdChyb3cuYW1vdW50KSkgKiAxMDApIC8gMTAwLCAwKSA6IDBcclxuXHJcbiAgY29uc3QgdG90YWxQYXltZW50RkMxID0gZmlsdGVyVG90YWxQYXltZW50Lmxlbmd0aCA+IDAgPyBmaWx0ZXJUb3RhbFBheW1lbnQucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgKHJvdy5yZWFzb24gPT09ICdQcm9qZWN0JyB8fCByb3cucmVhc29uID09PSAnQ3VzdG9tZXIgQ3JlZGl0JyB8fCBwYXJzZUZsb2F0KHJvdy5yZW1haW5pbmcpID09PSBwYXJzZUZsb2F0KHJvdy5hbW91bnQpID8gMCA6IHBhcnNlRmxvYXQocm93LlBheW1lbnRSZWNlaXZlZEZDIHx8IDApKSwgMCkgOiAwXHJcbiAgY29uc3QgdG90YWxQYXltZW50VVNEMCA9IGZpbHRlclRvdGFsUGF5bWVudC5sZW5ndGggPiAwID8gZmlsdGVyVG90YWxQYXltZW50LmZpbHRlcigocm93KSA9PiAocm93Lm1vZGVzID09PSAnQ2FzaCcgJiYgcm93LnJlbWFpbmluZyA+IDApIHx8IChyb3cubW9kZXMgPT09ICdCYW5rIFRyYW5zZmVyJyAmJiByb3cucmVtYWluaW5nID4gMCkpLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93LnJlbWFpbmluZyksIDApIDogMFxyXG4gIGNvbnN0IHRvdGFsUGF5bWVudFVTRDE1ID0gZmlsdGVyVG90YWxQYXltZW50Lmxlbmd0aCA+IDAgPyBmaWx0ZXJUb3RhbFBheW1lbnQucmVkdWNlKChhY2MsIHJvdykgPT4gYWNjICsgKHJvdy5yZWFzb24gPT09ICdQcm9qZWN0JyB8fCByb3cucmVhc29uID09PSAnQ3VzdG9tZXIgQ3JlZGl0JyB8fCBwYXJzZUZsb2F0KHJvdy5yZW1haW5pbmcpID09PSBwYXJzZUZsb2F0KHJvdy5hbW91bnQpID8gMCA6IHBhcnNlRmxvYXQocm93LlBheW1lbnRSZWNlaXZlZFVTRCB8fCAwKSksIDApIDogMFxyXG4gIGNvbnN0IHRvdGFsUGF5bWVudFVTRDEgPSB0b3RhbFBheW1lbnRVU0QwICsgdG90YWxQYXltZW50VVNEMTVcclxuICBjb25zdCB0b3RhbFBheW1lbnRVU0RUb3RhbCA9IGZpbHRlclRvdGFsUGF5bWVudC5sZW5ndGggPiAwID8gZmlsdGVyVG90YWxQYXltZW50LnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93LmFtb3VudCksIDApIDogMFxyXG5cclxuICBjb25zdCB0b3RhbFBvc0ZDID0gcG9zRmlsdGVyZWQubGVuZ3RoID4gMCA/IHBvc0ZpbHRlcmVkLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93LmFtb3VudFRvdGFsRmMpLCAwKSA6IDBcclxuICBjb25zdCB0b3RhbFBvc1VTRCA9IHBvc0ZpbHRlcmVkLmxlbmd0aCA+IDAgPyBwb3NGaWx0ZXJlZC5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvdy5hbW91bnRUb3RhbFVzZCksIDApIDogMFxyXG5cclxuICBjb25zdCB0b3RhbFBheW1lbnRGQyA9IHRvdGFsUGF5bWVudEZDMSArIHRvdGFsUG9zRkNcclxuICBjb25zdCB0b3RhbFBheW1lbnRVU0QgPSB0b3RhbFBheW1lbnRVU0QxICsgdG90YWxQb3NVU0RcclxuXHJcblxyXG5cclxuICBjb25zdCB0b3RhbENhc2hVU0QgPSBmaWx0ZXJUb3RhbDIubGVuZ3RoID4gMCA/IGZpbHRlclRvdGFsMi5yZWR1Y2UoKGFjYywgcm93KSA9PiB7XHJcbiAgICByZXR1cm4gYWNjICsgcm93LmFtb3VudC5maWx0ZXIoaXRlbSA9PiBwYXJzZUZsb2F0KGl0ZW0uYW1vdW50RkMpID09PSAwKS5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gTWF0aC5yb3VuZCgoc3VtICsgcGFyc2VGbG9hdChpdGVtLnRvdGFsKSkgKiAxMDApIC8gMTAwLCAwKVxyXG4gIH0sIDApIDogMFxyXG4gIGNvbnN0IHRvdGFsQ2FzaEZDID0gZmlsdGVyVG90YWwyLmxlbmd0aCA+IDAgPyBmaWx0ZXJUb3RhbDIucmVkdWNlKChhY2MsIHJvdykgPT4ge1xyXG4gICAgcmV0dXJuIGFjYyArIHJvdy5hbW91bnQuZmlsdGVyKGl0ZW0gPT4gcGFyc2VGbG9hdChpdGVtLmFtb3VudEZDKSAhPT0gMCkucmVkdWNlKChzdW0sIGl0ZW0pID0+IE1hdGgucm91bmQoKHN1bSArIHBhcnNlRmxvYXQoaXRlbS5hbW91bnRGQykpICogMTAwKSAvIDEwMCwgMClcclxuICB9LCAwKSA6IDBcclxuICBjb25zdCB0b3RhbEl0ZW1QdXJjaGFzZSA9IGl0ZW1QdXJjaGFzZUZpbHRlcmVkLmxlbmd0aCA+IDAgPyBpdGVtUHVyY2hhc2VGaWx0ZXJlZC5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyAocGFyc2VGbG9hdChyb3cucGF5bWVudFVTRCkgfHwgMCksIDApIDogMFxyXG4gIGNvbnN0IHRvdGFsSXRlbVB1cmNoYXNlRkMgPSBpdGVtUHVyY2hhc2VGaWx0ZXJlZC5sZW5ndGggPiAwID8gaXRlbVB1cmNoYXNlRmlsdGVyZWQucmVkdWNlKChzdW0sIHJvdykgPT4gc3VtICsgKHBhcnNlRmxvYXQocm93LnBheW1lbnRGQykgfHwgMCksIDApIDogMFxyXG4gIGNvbnN0IHRvdGFsUGF5Um9sbERhaWx5ID0gcGF5Um9sbEZpbHRlcmVkLmxlbmd0aCA+IDAgPyBwYXlSb2xsRmlsdGVyZWQucmVkdWNlKChzdW0sIHJvdykgPT4gTWF0aC5yb3VuZCgoc3VtICsgcGFyc2VGbG9hdChyb3cuYW1vdW50UGF5VVNEKSkgKiAxMDApIC8gMTAwLCAwKSA6IDBcclxuICBjb25zdCB0b3RhbFBheVJvbGxEYWlseUZDID0gcGF5Um9sbEZpbHRlcmVkLmxlbmd0aCA+IDAgPyBwYXlSb2xsRmlsdGVyZWQucmVkdWNlKChzdW0sIHJvdykgPT4gTWF0aC5yb3VuZCgoc3VtICsgcGFyc2VGbG9hdChyb3cuYW1vdW50UGF5RkMpKSAqIDEwMCkgLyAxMDAsIDApIDogMFxyXG4gIGNvbnN0IHRvdGFsRXhwZW5zZXNGQyA9IE51bWJlcih0b3RhbERheUZDKSArIE51bWJlcih0b3RhbEl0ZW1QdXJjaGFzZUZDKSArIE51bWJlcih0b3RhbFBheVJvbGxEYWlseUZDKVxyXG5cclxuICBjb25zdCB0b3RhbEVudGVyRmMgPSBpc05hTih0b3RhbFBheW1lbnRGQykgPyAwIDogdG90YWxQYXltZW50RkNcclxuXHJcbiAgY29uc3QgUmVtYWluaW5nRkMgPSBpc05hTigoTnVtYmVyKHRvdGFsQ2FzaEZDKSArIE51bWJlcih0b3RhbEVudGVyRmMpKSAtIHRvdGFsRXhwZW5zZXNGQykgPyAwIDogcGFyc2VGbG9hdCgoKE51bWJlcih0b3RhbENhc2hGQykgKyBOdW1iZXIodG90YWxFbnRlckZjKSkgLSB0b3RhbEV4cGVuc2VzRkMpKVxyXG4gIGNvbnN0IHRvdGFsRXhwZW5zZXNEID0gTnVtYmVyKHRvdGFsRGF5KSArIE51bWJlcih0b3RhbEl0ZW1QdXJjaGFzZSkgKyBOdW1iZXIodG90YWxQYXlSb2xsRGFpbHkpXHJcblxyXG4gIGNvbnN0IHRvdGFsRW50ZXIgPSBpc05hTih0b3RhbFBheW1lbnRVU0QpID8gdG90YWxQYXltZW50VVNEVG90YWwgOiB0b3RhbFBheW1lbnRVU0RcclxuXHJcbiAgY29uc3QgUmVtYWluaW5nVVNEID0gaXNOYU4oKE51bWJlcih0b3RhbEVudGVyKSArIE51bWJlcih0b3RhbENhc2hVU0QpKSAtIHRvdGFsRXhwZW5zZXNEKSA/IDAgOiBwYXJzZUZsb2F0KCgoTnVtYmVyKHRvdGFsRW50ZXIpICsgTnVtYmVyKHRvdGFsQ2FzaFVTRCkpIC0gdG90YWxFeHBlbnNlc0QpKVxyXG4gIGNvbnN0IHJldHVybkFtb3VudEZDID0gTnVtYmVyKHJldHVybkZDKSArIE51bWJlcihyZXN0SW5mb0ZDKVxyXG4gIGNvbnN0IHJldHVybkFtb3VudFVTRCA9IE51bWJlcihyZXR1cm5VU0QpICsgTnVtYmVyKHJlc3RJbmZvVVNEKVxyXG4gIGNvbnN0IHJlc3RGQyA9IFJlbWFpbmluZ0ZDIC0gcmV0dXJuQW1vdW50RkNcclxuICBjb25zdCByZXN0VVNEID0gUmVtYWluaW5nVVNEIC0gcmV0dXJuQW1vdW50VVNEXHJcblxyXG4gIGNvbnN0IFthbW91bnQxLCBzZXRBbW91bnQxXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBhZGRJdGVtMSA9ICgpID0+IHtcclxuICAgIHNldEFtb3VudDEoWy4uLmFtb3VudDEsIHtcclxuICAgICAgaWRSb3c6IHY0KCksXHJcbiAgICAgIGFtb3VudEZDOiAwLFxyXG4gICAgICBhbW91bnRVc2Q6IDAsXHJcbiAgICAgIHJhdGU6IDAsXHJcbiAgICAgIHRvdGFsOiAwLFxyXG4gICAgICBub3RlOiAnJ1xyXG4gICAgfV0pO1xyXG4gIH1cclxuICBjb25zdCBkZWxldGVJdGVtMSA9IGlkUm93ID0+IHtcclxuICAgIHNldEFtb3VudDEoYW1vdW50ID0+IGFtb3VudC5maWx0ZXIoKEl0ZW0pID0+IEl0ZW0uaWRSb3cgIT09IGlkUm93KSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2VBbW91bnQxID0gKGUsIGkpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgbGlzdCA9IFsuLi5hbW91bnQxXTtcclxuICAgIGxpc3RbaV1bbmFtZV0gPSB2YWx1ZTtcclxuICAgIGxpc3RbaV1bJ3JhdGUnXSA9IHJhdGVcclxuICAgIGxpc3RbaV1bJ3RvdGFsJ10gPSBNYXRoLnJvdW5kKCgocGFyc2VGbG9hdChsaXN0W2ldWydhbW91bnRGQyddKSAvIGxpc3RbaV1bJ3JhdGUnXSkgKyBwYXJzZUZsb2F0KGxpc3RbaV1bJ2Ftb3VudFVzZCddKSkgKiAxMDApIC8gMTAwXHJcbiAgICBzZXRBbW91bnQxKGxpc3QpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXRVcGRhdGVSZXR1cm4gPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHN0YXR1cyA9ICcnXHJcbiAgICBpZiAocmVzdEZDID09PSAwICYmIHJlc3RVU0QgPT09IDApIHtcclxuICAgICAgc3RhdHVzID0gJ0Nsb3NlJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RhdHVzID0gJ1BlbmRpbmcnXHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBzdGF0dXMsXHJcbiAgICAgIHJldHVybkFtb3VudEZDLFxyXG4gICAgICByZXR1cm5BbW91bnRVU0QsXHJcbiAgICAgIFJlbWFpbmluZ0Ftb3VudFVTRDogcmVzdFVTRCxcclxuICAgICAgUmVtYWluaW5nQW1vdW50RkM6IHJlc3RGQyxcclxuICAgICAgdG90YWxDYXNoRkMsXHJcbiAgICAgIHRvdGFsQ2FzaFVTRCxcclxuICAgICAgdG90YWxQYXltZW50RkM6IHRvdGFsRW50ZXJGYyxcclxuICAgICAgdG90YWxQYXltZW50VVNEOiB0b3RhbEVudGVyLFxyXG4gICAgICB0b3RhbFBheVJvbGxEYWlseUZDLFxyXG4gICAgICB0b3RhbEV4cGVuc2VzRkM6IHRvdGFsRGF5RkMsXHJcbiAgICAgIHRvdGFsRXhwZW5zZXNVU0Q6IHRvdGFsRGF5LFxyXG4gICAgICB0b3RhbEl0ZW1QdXJjaGFzZVVTRDogdG90YWxJdGVtUHVyY2hhc2UsXHJcbiAgICAgIHRvdGFsUGF5cm9sbFVTRDogdG90YWxQYXlSb2xsRGFpbHksIHVwZGF0ZVM6IGZhbHNlXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtY2FzaC8ke3ZpZXdJZFN0YXR1c31gLCBkYXRhKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGludmFsaWRhdGVDYWNoZSgnL2Nhc2gnKTtcclxuICAgICAgICBhd2FpdCBmZXRjaENhc2hEYXRhKCk7XHJcbiAgICAgICAgaGFuZGxlT3BlbigpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcbiAgY29uc3QgW3ZhbHVlMywgc2V0VmFsdWUzXSA9IFJlYWN0LnVzZVN0YXRlKCcxJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVGFiVmlld0V4cGVuc2VzTW9udGhseUluZm8nKVxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBzZXRWYWx1ZTMocmVzdWx0KVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZTMgPSAoZXZlbnQsIG5ld1ZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBjaGFuZ2VWYWx1ZSA9IG5ld1ZhbHVlXHJcbiAgICBzZXRWYWx1ZTMoY2hhbmdlVmFsdWUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RhYlZpZXdFeHBlbnNlc01vbnRobHlJbmZvJywgY2hhbmdlVmFsdWUpXHJcbiAgfTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtkZWJvdW5jZWRTZWFyY2gsIHNldERlYm91bmNlZFNlYXJjaF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3NlYXJjaDIsIHNldFNlYXJjaDJdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbZGVib3VuY2VkU2VhcmNoMiwgc2V0RGVib3VuY2VkU2VhcmNoMl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiBzZXREZWJvdW5jZWRTZWFyY2goc2VhcmNoKSwgMzAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaGFuZGxlcik7XHJcbiAgfSwgW3NlYXJjaF0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHNldFRpbWVvdXQoKCkgPT4gc2V0RGVib3VuY2VkU2VhcmNoMihzZWFyY2gyKSwgMzAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaGFuZGxlcik7XHJcbiAgfSwgW3NlYXJjaDJdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdRdWlja0ZpbHRlckRhaWx5RXhwZW5zZXNBZG1pblZpZXcnKVxyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBzZXRTZWFyY2gocmVzdWx0KVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRTZWFyY2godmFsdWUpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUXVpY2tGaWx0ZXJEYWlseUV4cGVuc2VzQWRtaW5WaWV3JywgdmFsdWUpXHJcbiAgfVxyXG5cclxuICBjb25zdCBuZXdBcnJheUNhc2ggPSB1c2VNZW1vKCgpID0+IGRlYm91bmNlZFNlYXJjaDIgIT09ICcnID8gY2FzaC5maWx0ZXIoKHJvdykgPT5cclxuICAgIHJvdy5hbW91bnQuc29tZSgoSXRlbSkgPT4gSXRlbS5ub3RlICYmIEl0ZW0ubm90ZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGRlYm91bmNlZFNlYXJjaDIudG9Mb3dlckNhc2UoKSkpIHx8XHJcbiAgICBkYXlqcyhyb3cuY2FzaERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpLmluY2x1ZGVzKGRlYm91bmNlZFNlYXJjaDIpXHJcbiAgKSA6IGNhc2gsIFtjYXNoLCBkZWJvdW5jZWRTZWFyY2gyXSlcclxuXHJcbiAgY29uc3QgbmV3QXJyYXkgPSBkZWJvdW5jZWRTZWFyY2ggIT09ICcnID8gZXhwZW5zZXNGaWx0ZXJlZC5maWx0ZXIoKHJvdykgPT5cclxuICAgIHJvdy5leHBlbnNlTnVtYmVyLnRvU3RyaW5nKCkuaW5jbHVkZXMoZGVib3VuY2VkU2VhcmNoKSB8fFxyXG4gICAgcm93LmFjY291bnROYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZGVib3VuY2VkU2VhcmNoLnRvTG93ZXJDYXNlKCkpIHx8XHJcbiAgICByb3cuZXhwZW5zZUNhdGVnb3J5LmV4cGVuc2VzQ2F0ZWdvcnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhkZWJvdW5jZWRTZWFyY2gudG9Mb3dlckNhc2UoKSkgfHxcclxuICAgIHJvdy5hY2NvdW50TmFtZUluZm8ubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGRlYm91bmNlZFNlYXJjaC50b0xvd2VyQ2FzZSgpKSB8fFxyXG4gICAgcm93LmVtcGxveWVlTmFtZS5zb21lKChJdGVtKSA9PiBJdGVtLmVtcGxveWVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZGVib3VuY2VkU2VhcmNoLnRvTG93ZXJDYXNlKCkpKVxyXG4gICkgOiBleHBlbnNlc0ZpbHRlcmVkXHJcblxyXG4gIGNvbnN0IGNvbXBvbmVudFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGhhbmRsZVByaW50ID0gdXNlUmVhY3RUb1ByaW50KHtcclxuICAgIGNvbnRlbnQ6ICgpID0+IGNvbXBvbmVudFJlZi5jdXJyZW50XHJcbiAgfSlcclxuICBjb25zdCBSb3dDYXNoID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IHJvdyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFRhYmxlUm93IHN4PXt7ICcmID4gKic6IHsgYm9yZGVyQm90dG9tOiAndW5zZXQnIH0gfX0+XHJcbiAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IHBhZGRpbmc6ICcxcHgnIH19PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJleHBhbmQgcm93XCJcclxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW4oIW9wZW4pfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge29wZW4gPyA8S2V5Ym9hcmRBcnJvd1VwSWNvbiAvPiA6IDxLZXlib2FyZEFycm93RG93bkljb24gLz59XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBwYWRkaW5nOiAnMXB4JyB9fSBjb21wb25lbnQ9XCJ0aFwiIHNjb3BlPVwicm93XCI+XHJcbiAgICAgICAgICAgIHtkYXlqcyhyb3cuY2FzaERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpfVxyXG4gICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICB7cm93LkNyZWF0ZS5wZXJzb259XHJcbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgIHtyb3cudG90YWxDYXNoLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1cclxuICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAwLCBwYWRkaW5nVG9wOiAwIH19IGNvbFNwYW49ezZ9PlxyXG4gICAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59IHRpbWVvdXQ9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgPEJveCBzeD17eyBtYXJnaW46IDEgfX0+XHJcbiAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMTNweCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+QW1vdW50IEZjPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcxM3B4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5SYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcxM3B4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5BbW91bnQgVXNkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcxM3B4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5Ob3RlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcm93LmFtb3VudD8ubWFwKChyb3cxLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3JvdzEuaWRSb3d9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcxM3B4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT4gRkMge3JvdzEuYW1vdW50RkN9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMTNweCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+e3JvdzEucmF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcxM3B4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT4kIHtyb3cxLnRvdGFsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzEzcHgnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PiB7cm93MS5ub3RlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbiAgY29uc3QgUm93ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB7IHJvdyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxUYWJsZVJvdyBzeD17eyAnJiA+IConOiB7IGJvcmRlckJvdHRvbTogJ3Vuc2V0JyB9IH19PlxyXG4gICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBwYWRkaW5nOiAnMXB4JyB9fT5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZXhwYW5kIHJvd1wiXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtvcGVuID8gPEtleWJvYXJkQXJyb3dVcEljb24gLz4gOiA8S2V5Ym9hcmRBcnJvd0Rvd25JY29uIC8+fVxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgIDxUYWJsZUNlbGwgc3g9e3sgcGFkZGluZzogJzFweCcgfX0gY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxyXG4gICAgICAgICAgICB7ZGF5anMocm93KS5mb3JtYXQoJ0REL01NL1lZWVknKX1cclxuICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAwLCBwYWRkaW5nVG9wOiAwIH19IGNvbFNwYW49ezZ9PlxyXG4gICAgICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59IHRpbWVvdXQ9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgPEJveCBzeD17eyBtYXJnaW46IDEgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e2NvbXBvbmVudFJlZn0+XHJcbiAgICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBib3JkZXJDb2xsYXBzZTogJ2NvbGxhcHNlJywgY29sb3I6ICdncmF5JyB9fSBzaXplPVwic21hbGxcIiBhcmlhLWxhYmVsPVwicHVyY2hhc2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCB0ZXh0QWxpZ246ICdjZW50ZXInLCBiYWNrZ3JvdW5kQ29sb3I6ICcjMDI3NmFhJywgY29sb3I6ICd3aGl0ZScgfX0gY29sU3Bhbj17N30+Q2FzaDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19IGNvbFNwYW49ezR9PkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5Ub3RhbCBGQzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+VG90YWwgJDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZmlsdGVyVG90YWwyLm1hcCgocm93MikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkga2V5PXtyb3cyLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5anMocm93Mi5jYXNoRGF0ZSkuZm9ybWF0KCdERC9NTScpID09PSBkYXlqcyhyb3cpLmZvcm1hdCgnREQvTU0nKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Mi5hbW91bnQ/Lm1hcCgoSXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtJdGVtLmlkUm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCB3aWR0aDogJzEwMHB4JyB9fT57aSArIDF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCB3aWR0aDogJzEwMHB4JyB9fSBjb2xTcGFuPXs0fT57SXRlbS5ub3RlICE9PSB1bmRlZmluZWQgPyBJdGVtLm5vdGUgOiAnJ308L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoSXRlbS5hbW91bnRGQykgIT09IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScsIHdpZHRoOiAnMTAwcHgnIH19PkZDIHtJdGVtLmFtb3VudEZDPy50b1N0cmluZygpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCB3aWR0aDogJzEwMHB4JyB9fT4kIDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScsIHdpZHRoOiAnMTAwcHgnIH19PkZDIDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScsIHdpZHRoOiAnMTAwcHgnIH19PiQge0l0ZW0udG90YWw/LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT4pKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScsIHdpZHRoOiAnMTAwcHgnIH19IGNvbFNwYW49ezR9PiBEYWlseSBDYXNoIFRvdGFsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5Jywgd2lkdGg6ICcxMjBweCcgfX0gY29sU3Bhbj17Mn0+RkMge3RvdGFsQ2FzaEZDLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCB3aWR0aDogJzEyMHB4JyB9fT4kIHt0b3RhbENhc2hVU0QudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZmY1NzIyJywgY29sb3I6ICd3aGl0ZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gY29sU3Bhbj17N30+RXhwZW5zZXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5DYXRlZ29yeTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+QWNjb3VudDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+QWNjb3VudCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5EZXNjcmlwdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+VG90YWwgRkM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PlRvdGFsICQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyYXkubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5anMoaXRlbS5leHBlbnNlRGF0ZSkuZm9ybWF0KCdERC9NTScpID09PSBkYXlqcyhyb3cpLmZvcm1hdCgnREQvTU0nKSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRC17U3RyaW5nKGl0ZW0uZXhwZW5zZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5leHBlbnNlQ2F0ZWdvcnkuZXhwZW5zZXNDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5hY2NvdW50TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hY2NvdW50TmFtZSA9PT0gJ1Byb2plY3QnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWNjb3VudE5hbWVJbmZvLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYWNjb3VudE5hbWUgPT09ICdFbXBsb3llZScgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmVtcGxveWVlTmFtZS5tYXAoKEl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17SXRlbS5pZFJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntJdGVtLmVtcGxveWVlfSA8L3NwYW4+IDxzcGFuPiAkIHtJdGVtLnRvdGFsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkZDIDwvc3Bhbj57aXRlbS5hbW91bnQgIT09IDAgPyBpdGVtLmFtb3VudC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiQgPC9zcGFuPntpdGVtLmFtb3VudCA9PT0gMCA/IGl0ZW0udG90YWwudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0gY29sU3Bhbj17NH0+RGFpbHkgRXhwZW5zZXMgVG90YWw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCB3aWR0aDogJzEwMHB4JyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5GQyA8L3NwYW4+PHNwYW4gPnt0b3RhbERheUZDLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5Jywgd2lkdGg6ICcxMDBweCcgfX0+PHNwYW4+JCA8L3NwYW4+PHNwYW4gPnt0b3RhbERheS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCBiYWNrZ3JvdW5kQ29sb3I6ICcjNjU3M2MzJywgY29sb3I6ICd3aGl0ZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gY29sU3Bhbj17N30+SXRlbSBQdXJjaGFzZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19IGNvbFNwYW49ezN9PkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5SZWZlcmVuY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PlRvdGFsIEZDPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5Ub3RhbCAkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1QdXJjaGFzZUZpbHRlcmVkLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpdGVtLnBheW1lbnRJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSVAte1N0cmluZyhpdGVtLml0ZW1QdXJjaGFzZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19IGNvbFNwYW49ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcm9qZWN0TmFtZSAhPT0gdW5kZWZpbmVkID8gaXRlbS5wcm9qZWN0TmFtZT8ubmFtZSA6IGl0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubWFudWZhY3R1cmVyICsgJyAvICcgKyBpdGVtLm1hbnVmYWN0dXJlck51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5GQyA8L3NwYW4+IHtpdGVtLnBheW1lbnRGQyAhPT0gdW5kZWZpbmVkID8gcGFyc2VGbG9hdChpdGVtLnBheW1lbnRGQykudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kIDwvc3Bhbj57aXRlbS5wYXltZW50VVNEICE9PSB1bmRlZmluZWQgPyBwYXJzZUZsb2F0KGl0ZW0ucGF5bWVudFVTRCkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19IGNvbFNwYW49ezR9PkRhaWx5IEl0ZW0gUHVyY2hhc2UgVG90YWw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCB3aWR0aDogJzEwMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5GQyA8L3NwYW4+e3RvdGFsSXRlbVB1cmNoYXNlRkMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScsIHdpZHRoOiAnMTAwcHgnIH19PjxzcGFuPiQgPC9zcGFuPjxzcGFuID57dG90YWxJdGVtUHVyY2hhc2UudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JywgYmFja2dyb3VuZENvbG9yOiAnI2FiMDAzYycsIGNvbG9yOiAnd2hpdGUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19IGNvbFNwYW49ezd9PlBheVJvbGw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fSBjb2xTcGFuPXszfT5FbXBsb3llZU5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19Pk1vbnRoPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5Ub3RhbCBGQzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+VG90YWwgJDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlci5kYXRhLnJvbGUgPT09ICdDRU8nICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheVJvbGxGaWx0ZXJlZC5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlqcyhpdGVtLnBheURhdGUpLmZvcm1hdCgnREQvTU0nKSA9PT0gZGF5anMocm93KS5mb3JtYXQoJ0REL01NJykgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFAte1N0cmluZyhpdGVtLnBheU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0gY29sU3Bhbj17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5lbXBsb3llZU5hbWUgIT09IHVuZGVmaW5lZCA/IGl0ZW0uZW1wbG95ZWVOYW1lLm5hbWUgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF5anMoaXRlbS5tb250aCkuZm9ybWF0KCdNTU1NL1lZWVknKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5GQyA8L3NwYW4+e2l0ZW0uYW1vdW50UGF5RkMgIT09IHVuZGVmaW5lZCA/IGl0ZW0uYW1vdW50UGF5RkMudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kIDwvc3Bhbj57aXRlbS5hbW91bnRQYXlVU0QgIT09IHVuZGVmaW5lZCA/IGl0ZW0uYW1vdW50UGF5VVNELnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fSBjb2xTcGFuPXs0fT5EYWlseSBQYXlSb2xsIFRvdGFsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScsIHdpZHRoOiAnMTAwcHgnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19IGNvbFNwYW49ezJ9PjxzcGFuPkZDIDwvc3Bhbj48c3BhbiA+e3RvdGFsUGF5Um9sbERhaWx5RkMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5Jywgd2lkdGg6ICcxMDBweCcgfX0+PHNwYW4+JCA8L3NwYW4+PHNwYW4gPnt0b3RhbFBheVJvbGxEYWlseS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JywgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLCBjb2xvcjogJ3doaXRlJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBjb2xTcGFuPXs3fT5QT1M8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT4jPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fSBjb2xTcGFuPXs0fT5DdXN0b21lcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+VG90YWwgRkM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PlRvdGFsICQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NGaWx0ZXJlZC5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlqcyhpdGVtLmludm9pY2VEYXRlKS5mb3JtYXQoJ0REL01NJykgPT09IGRheWpzKHJvdykuZm9ybWF0KCdERC9NTScpID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTLXtTdHJpbmcoaXRlbS5mYWN0dXJlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fSBjb2xTcGFuPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmN1c3RvbWVyTmFtZSAhPT0gdW5kZWZpbmVkID8gaXRlbS5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RkMgPC9zcGFuPntpdGVtLmFtb3VudFRvdGFsRmMgIT09IHVuZGVmaW5lZCA/IGl0ZW0uYW1vdW50VG90YWxGYy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiQgPC9zcGFuPntpdGVtLmFtb3VudFRvdGFsVXNkICE9PSB1bmRlZmluZWQgPyBpdGVtLmFtb3VudFRvdGFsVXNkLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IGl0ZW0uYW1vdW50LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19IGNvbFNwYW49ezR9PlBPUyBSZWNlaXZlZCBUb3RhbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCB3aWR0aDogJzEwMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBjb2xTcGFuPXsyfT48c3Bhbj5GQyA8L3NwYW4+PHNwYW4gPntpc05hTih0b3RhbFBvc0ZDKSA/IDAgOiB0b3RhbFBvc0ZDLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScsIHdpZHRoOiAnMTAwcHgnIH19PjxzcGFuPiQgPC9zcGFuPjxzcGFuID57aXNOYU4odG90YWxQb3NVU0QpID8gMCA6IHRvdGFsUG9zVVNELnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScsIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLCBjb2xvcjogJ3doaXRlJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fSBjb2xTcGFuPXs3fT5QYXltZW50IFJlY2VpdmVkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+Q3VzdG9tZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5SZWZlcmVuY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PlRvdGFsIEZDPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5Ub3RhbCAkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5DcmVkaXQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJUb3RhbFBheW1lbnQubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpdGVtLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5anMoaXRlbS5wYXltZW50RGF0ZSkuZm9ybWF0KCdERC9NTScpID09PSBkYXlqcyhyb3cpLmZvcm1hdCgnREQvTU0nKSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUEFZLXtTdHJpbmcoaXRlbS5wYXltZW50TnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmN1c3RvbWVyTmFtZSAhPT0gdW5kZWZpbmVkID8gaXRlbS5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubW9kZXMgIT09IHVuZGVmaW5lZCA/IGl0ZW0ubW9kZXMudG9VcHBlckNhc2UoKSA6ICcnfSAgeycgfCAnICsgaXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5Ub3RhbEFtb3VudD8ubWFwKChJdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e0l0ZW0ucHJlZml4IHx8IChpdGVtLnJlYXNvbiA9PT0gXCJQcm9qZWN0XCIgPyBcIlAtXCIgOiBcIklOVi1cIil9e1N0cmluZyhJdGVtLlJlZikucGFkU3RhcnQoNiwgJzAnKX06ICAke0l0ZW0udG90YWwgIT09IHVuZGVmaW5lZCA/IEl0ZW0udG90YWwgOiAwfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RkMgPC9zcGFuPntpdGVtLnJlYXNvbiA9PT0gJ1Byb2plY3QnIHx8IGl0ZW0ucmVhc29uID09PSAnQ3VzdG9tZXIgQ3JlZGl0JyB8fCBwYXJzZUZsb2F0KGl0ZW0ucmVtYWluaW5nKSA9PT0gcGFyc2VGbG9hdChpdGVtLmFtb3VudCkgPyAoMCkudG9GaXhlZCgyKSA6IChpdGVtLlBheW1lbnRSZWNlaXZlZEZDICE9PSB1bmRlZmluZWQgPyBpdGVtLlBheW1lbnRSZWNlaXZlZEZDLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiQgPC9zcGFuPntpdGVtLnJlYXNvbiA9PT0gJ1Byb2plY3QnIHx8IGl0ZW0ucmVhc29uID09PSAnQ3VzdG9tZXIgQ3JlZGl0JyB8fCBwYXJzZUZsb2F0KGl0ZW0ucmVtYWluaW5nKSA9PT0gcGFyc2VGbG9hdChpdGVtLmFtb3VudCkgPyAoMCkudG9GaXhlZCgyKSA6IChpdGVtLlBheW1lbnRSZWNlaXZlZFVTRCAhPT0gdW5kZWZpbmVkID8gaXRlbS5QYXltZW50UmVjZWl2ZWRVU0QudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogaXRlbS5hbW91bnQudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kIDwvc3Bhbj57aXRlbS5yZW1haW5pbmcudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0gY29sU3Bhbj17NH0+RGFpbHkgUGF5bWVudCBSZWNlaXZlZCBUb3RhbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCB3aWR0aDogJzEwMHB4JywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT48c3Bhbj5GQyA8L3NwYW4+PHNwYW4gPntpc05hTih0b3RhbFBheW1lbnRGQzEpID8gMCA6IHRvdGFsUGF5bWVudEZDMS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCB3aWR0aDogJzEwMHB4JyB9fSBjb2xTcGFuPXsyfT48c3Bhbj4kIDwvc3Bhbj48c3BhbiA+e2lzTmFOKHRvdGFsUGF5bWVudFVTRDEpID8gdG90YWxQYXltZW50VVNEVG90YWwudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogdG90YWxQYXltZW50VVNEMS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTycgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCBtYXJnaW5Cb3R0b206ICc1cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyB3aWR0aDogJzYwMHB4JywgY29sb3I6ICdncmF5JywgbWFyZ2luQm90dG9tOiAnNXB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgc3g9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzVweCcsIGJvcmRlckNvbGxhcHNlOiAnY29sbGFwc2UnLCB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbFNwYW49ezN9IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIGZvbnRTaXplOiAnMjBweCcgfX0+U3VtbWFyeTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PlRvdGFsIChGQyk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+VG90YWwgKCQpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PkNhc2g8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PjxzcGFuPkZDIDwvc3Bhbj48c3Bhbj57dG90YWxDYXNoRkMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PjxzcGFuPiQgPC9zcGFuPjxzcGFuPnt0b3RhbENhc2hVU0QudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PlRvdGFsIEV4cGVuc2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PjxzcGFuPkZDIDwvc3Bhbj57dG90YWxEYXlGQy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT48c3Bhbj4kIDwvc3Bhbj57dG90YWxEYXkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+VG90YWwgSXRlbSBQdXJjaGFzZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+PHNwYW4+RkMgPC9zcGFuPnt0b3RhbEl0ZW1QdXJjaGFzZUZDLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PjxzcGFuPiQgPC9zcGFuPnt0b3RhbEl0ZW1QdXJjaGFzZS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5Ub3RhbCBQYXlSb2xsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT48c3Bhbj5GQyA8L3NwYW4+e3RvdGFsUGF5Um9sbERhaWx5RkMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+PHNwYW4+JCA8L3NwYW4+e3RvdGFsUGF5Um9sbERhaWx5LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PlRvdGFsIFBheW1lbnQgUmVjZWl2ZWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PjxzcGFuPkZDIDwvc3Bhbj57dG90YWxFbnRlckZjLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PjxzcGFuPiQgPC9zcGFuPnt0b3RhbEVudGVyLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJUb3RhbDIubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keSBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LnN0YXR1cyAhPT0gdW5kZWZpbmVkIHx8IHJvdy5zdGF0dXMgPT09ICdDbG9zZWQnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PkFtb3VudCBSZXR1cm48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+PHNwYW4+RkMgPC9zcGFuPntyb3cucmV0dXJuQW1vdW50RkMgIT09IHVuZGVmaW5lZCA/IHJvdy5yZXR1cm5BbW91bnRGQy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT48c3Bhbj4kIDwvc3Bhbj57cm93LnJldHVybkFtb3VudFVTRCAhPT0gdW5kZWZpbmVkID8gcm93LnJldHVybkFtb3VudFVTRC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyVG90YWwyLm1hcCgocm93KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkga2V5PXtyb3cuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zdGF0dXMgIT09IHVuZGVmaW5lZCB8fCByb3cuc3RhdHVzID09PSAnQ2xvc2VkJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT5SZW1haW5pbmc8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+PHNwYW4+RkMgPC9zcGFuPntyb3cuUmVtYWluaW5nQW1vdW50RkMgIT09IHVuZGVmaW5lZCA/IHJvdy5SZW1haW5pbmdBbW91bnRGQy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT48c3Bhbj4kIDwvc3Bhbj57cm93LlJlbWFpbmluZ0Ftb3VudFVTRCAhPT0gdW5kZWZpbmVkID8gcm93LlJlbWFpbmluZ0Ftb3VudFVTRC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcsIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycgfX0+UmVtYWluaW5nPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnLCBib3JkZXI6ICcxcHggc29saWQgYmxhY2snIH19PjxzcGFuPkZDIDwvc3Bhbj57UmVtYWluaW5nRkMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JywgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyB9fT48c3Bhbj4kIDwvc3Bhbj57UmVtYWluaW5nVVNELnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJUb3RhbDIubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cm93Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuc3RhdHVzICE9PSB1bmRlZmluZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5zdGF0dXMgIT09ICdDbG9zZScgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3BlblZpZXdTdGF0dXMocm93Ll9pZCl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PkNsb3NlZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3BlblZpZXdTdGF0dXMocm93Ll9pZCl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+Q2FzaCBPdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBFeHBlbnNlcyBEYWlseSBJbmZvcm1hdGlvblxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCcvRGFpbHlFeHBlbnNlcycpfT5cclxuICAgICAgICAgICAgICA8QXJyb3dCYWNrIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlQWRtaW5WaWV3IG5hbWU9e3VzZXIuZGF0YS51c2VyTmFtZX0gcm9sZT17dXNlci5kYXRhLnJvbGV9IC8+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fT57dXNlci5kYXRhLnVzZXJOYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNpZGVCYXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2lkZUJhcihmYWxzZSl9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaCAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogMCB9fSA+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3sgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICA8VGFiQ29udGV4dFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlM31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IGJvcmRlckNvbG9yOiAnZGl2aWRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZTN9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxhYiBBUEkgdGFicyBleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgJyYgLk11aVRhYnMtaW5kaWNhdG9yJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzBweCdcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPdmVydmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sICcmOmhvdmVyJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJyNmMmYyZjInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXNlci5kYXRhLnJvbGUgPT09ICdDRU8nICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2FzaCBJblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYuTXVpLXNlbGVjdGVkJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmdjb2xvcjogJyNmMmYyZjInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJWaWV3IFBlciBEYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICcjZjJmMmYyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjFcIiBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgbWFyZ2luVG9wOiAnNTBweCcsIG1hcmdpbkJvdHRvbTogJzUwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYWlseUV4cGVuc2VzTW9udGhseUNoYXJ0VmlldyAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWwgPlxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsIHZhbHVlPVwiMlwiIHN4PXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCBwYWRkaW5nOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J3NlYXJjaCdcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPSdzZWFyY2gnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoMn1cclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaDIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5Ub3A6ICcxMHB4JywgaGVpZ2h0OiAnNTIwcHgnLCBvdmVyZmxvdzogJ2hpZGRlbicsIG92ZXJmbG93WTogXCJzY3JvbGxcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFibGUgYXJpYS1sYWJlbD1cImNvbGxhcHNpYmxlIHRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBwYWRkaW5nOiAnMXB4JyB9fT4jPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBwYWRkaW5nOiAnMXB4JyB9fT5EYXRlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBwYWRkaW5nOiAnMXB4JyB9fT5DcmVhdGVkIEJ5PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBwYWRkaW5nOiAnMXB4JyB9fT5Ub3RhbDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bmV3QXJyYXlDYXNoLm1hcCgocm93LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvd0Nhc2gga2V5PXtpfSByb3c9e3Jvd30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZWwgdmFsdWU9XCIzXCIgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzVweCcsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzBweCcgfX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEZW1vQ29udGFpbmVyIGNvbXBvbmVudHM9e1snRGF0ZVBpY2tlcicsICdEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nc3RhcnREYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhzdGFydERhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gaGFuZGxlQ2hhbmdlRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8UHJpbnRUb29sdGlwIHRpdGxlPVwiUHJpbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVByaW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsUHJpbnRzaG9wIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QcmludFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzVweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkRGF0YS5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Jvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJUb3RhbDIubWFwKChyb3cyKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17cm93Mi5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5anMocm93Mi5jYXNoRGF0ZSkuZm9ybWF0KCdERC9NTScpID09PSBkYXlqcyhyb3cpLmZvcm1hdCgnREQvTU0nKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT48c3BhbiBzdHlsZT17eyBjb2xvcjogJ2dyYXknLCBmb250U2l6ZTogJzIwcHgnIH19PlRvZGF5J3MgY2FzaCA8L3NwYW4+PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdFRvb2x0aXAgdGl0bGU9XCJFZGl0XCIgcGxhY2VtZW50PSdyaWdodCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdncmF5JywgZm9udFNpemU6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5WaWV3KHJvdzIuX2lkKX0gID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRWRpdFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiAnNTQwcHgnLCB3aWR0aDogJzEwMCUnLCBvdmVyZmxvdzogJ2hpZGRlbicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIHN4PXt7IG1heEhlaWdodDogJzU0MHB4JyB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkRGF0YS5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBhcmlhLWxhYmVsPVwiY29sbGFwc2libGUgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN4PXt7IHBhZGRpbmc6ICcxcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzeD17eyBwYWRkaW5nOiAnMXB4JyB9fT5EYXRlPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZERhdGEubWFwKChyb3cpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93IGtleT17cm93fSByb3c9e3Jvd30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPikgOiA8aDIgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5TZWxlY3QgYSBTdGFydCBEYXRlIEFuZCBFbmQgRGF0ZSBUbyBWaWV3IEV4cGVuc2VzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgPC9UYWJDb250ZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17RXJyb3JPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VFcnJvcn1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2FuY2VsSWNvbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBGYWlsZWQgdG8gU2F2ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICBUcnkgQWdhaW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVmlld31cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiAxMDAwIH19PlxyXG4gICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVZpZXd9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIFRvZGF5J3MgQ2FzaFxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFVwZGF0ZX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxMb2NhbGl6YXRpb25Qcm92aWRlciBkYXRlQWRhcHRlcj17QWRhcHRlckRheWpzfT5cclxuICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdjYXNoRGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKGNhc2hEYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0Q2FzaERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMX0+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXIgc3g9e3sgaGVpZ2h0OiAyMDAsIHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcxMHB4Jywgb3ZlcmZsb3dYOiAnaGlkZGVuJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+QW1vdW50IEZDPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+VG90YWwgJDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ob3RlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudC5tYXAoKHJvdywgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cm93LmlkUm93fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxEcmFnSW5kaWNhdG9yUm91bmRlZCAvPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYW1vdW50RkMgIT09IDAgJiYgcm93LnRvdGFsICE9PSAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXtyb3cuYW1vdW50RkMgPT09IDAgJiYgcm93LnRvdGFsID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYW1vdW50RkMnIGlkPSdhbW91bnRGQydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQW1vdW50KGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvdy5hbW91bnRGQ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEzMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYW1vdW50RkMnIGlkPSdhbW91bnRGQydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQW1vdW50KGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTMwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3JhdGUnIGlkPSdyYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvdy5yYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VBbW91bnQoZSwgaSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYW1vdW50VXNkJyBpZD0nYW1vdW50VXNkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvdy5hbW91bnRVc2R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZUFtb3VudChlLCBpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGhpZGRlbiBpZD0nYW1vdW50VG90YWxJbnZvaWNlJz57cm93LnRvdGFsfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdub3RlJyBpZD0nbm90ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb3cubm90ZSAhPT0gdW5kZWZpbmVkID8gcm93Lm5vdGUgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlQW1vdW50KGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMzAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbShyb3cuaWRSb3cpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGUgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlnaHRUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbFNwYW49ezN9PlRvdGFsPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt0b3RhbENhc2hJbmZvfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0+XHJcbiAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJBZGRcIiBwbGFjZW1lbnQ9XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17YWRkSXRlbX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyNicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5PcHRpb259XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VWaWV3T3B0aW9ufVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VWaWV3T3B0aW9ufSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzeD17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5EbyB5b3Ugd2FudCB0byB0YWtlIGJhY2sgdGhlIGNhc2ggb3Igc2VuZCBpdCB0byB0aGUgbmV4dCBkYXkgPyA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlIDo8L3NwYW4+IDxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIj48L3NwYW4+c2VsZWN0IGNhc2ggdG8gdGFrZSBiYWNrIG9yIHNlbGVjdCBuZXh0IHRvIG1ha2UgYSBuZXcgY2FzaCBmb3IgdGhlIG5leHQgZGF5PC9wPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17aGFuZGxlT3BlblZpZXdTdGF0dXN9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+Q2FzaDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBvbkNsaWNrPXtoYW5kbGVPcGVuVmlld05leHREYXl9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+TmV4dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5TdGF0dXN9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VWaWV3U3RhdHVzfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDEwMDAgfX0+XHJcbiAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVmlld1N0YXR1c30gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgQ2xvc2UgdGhlIGRheVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzdGF0dXNJbmZvID09PSAnUGVuZGluZycgP1xyXG4gICAgICAgICAgICAgICg8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0VXBkYXRlUmV0dXJufT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Nhc2hEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhjYXNoRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRDYXNoRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIChGQyk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCAoJCk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JyB9fT5DYXNoPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+PHNwYW4+RkMgPC9zcGFuPjxzcGFuPnt0b3RhbENhc2hGQy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PjxzcGFuPiQgPC9zcGFuPjxzcGFuPnt0b3RhbENhc2hVU0QudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PlRvdGFsIEV4cGVuc2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JyB9fT48c3Bhbj5GQyA8L3NwYW4+e3RvdGFsRGF5RkMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PjxzcGFuPiQgPC9zcGFuPnt0b3RhbERheS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JyB9fT5Ub3RhbCBJdGVtIFB1cmNoYXNlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgZm9udFNpemU6ICcyMHB4JyB9fT4tPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+PHNwYW4+JCA8L3NwYW4+e3RvdGFsSXRlbVB1cmNoYXNlLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PlRvdGFsIFBheVJvbGw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250U2l6ZTogJzIwcHgnIH19Pi08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JyB9fT48c3Bhbj4kIDwvc3Bhbj57dG90YWxQYXlSb2xsRGFpbHkudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+QW1vdW50IFRvIFJldHVybjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PjxzcGFuPkZDIDwvc3Bhbj57UmVtYWluaW5nRkMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PjxzcGFuPiQgPC9zcGFuPntSZW1haW5pbmdVU0QudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+QW1vdW50IFJlY2VpdmVkPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+PHNwYW4+RkMgPC9zcGFuPntyZXN0SW5mb0ZDLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JyB9fT48c3Bhbj4kIDwvc3Bhbj57cmVzdEluZm9VU0QudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+UmV0dXJuIEFtb3VudDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdyZXR1cm5GQycgaWQ9J3JldHVybkZDJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJldHVybkZDKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxNTBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3JldHVyblVTRCcgaWQ9J3JldHVyblVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXR1cm5VU0QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzE1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+RGlmZmVyZW50PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+PHNwYW4+RkMgPC9zcGFuPntyZXN0RkMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PjxzcGFuPiQgPC9zcGFuPntyZXN0VVNELnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPikgOlxyXG4gICAgICAgICAgICAgICg8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0VXBkYXRlUmV0dXJufT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Nhc2hEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhjYXNoRGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRDYXNoRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9J0REL01NL1lZWVknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT0ndGFibGVJbmZvMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlRvdGFsIChGQyk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCAoJCk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JyB9fT5DYXNoPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+PHNwYW4+RkMgPC9zcGFuPjxzcGFuPnt0b3RhbENhc2hGQy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PjxzcGFuPiQgPC9zcGFuPjxzcGFuPnt0b3RhbENhc2hVU0QudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PlRvdGFsIEV4cGVuc2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JyB9fT48c3Bhbj5GQyA8L3NwYW4+e3RvdGFsRGF5RkMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PjxzcGFuPiQgPC9zcGFuPnt0b3RhbERheS50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JyB9fT5Ub3RhbCBJdGVtIFB1cmNoYXNlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+PHNwYW4+RkMgPC9zcGFuPnt0b3RhbEl0ZW1QdXJjaGFzZUZDLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JyB9fT48c3Bhbj4kIDwvc3Bhbj57dG90YWxJdGVtUHVyY2hhc2UudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+VG90YWwgUGF5Um9sbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PjxzcGFuPkZDIDwvc3Bhbj57dG90YWxQYXlSb2xsRGFpbHlGQy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+PHNwYW4+JCA8L3NwYW4+e3RvdGFsUGF5Um9sbERhaWx5LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PlRvdGFsIFBheW1lbnQgUmVjZWl2ZWQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JyB9fT48c3Bhbj5GQyA8L3NwYW4+e2lzTmFOKHRvdGFsUGF5bWVudEZDKSA/IDAgOiB0b3RhbFBheW1lbnRGQy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+PHNwYW4+JCA8L3NwYW4+e2lzTmFOKHRvdGFsUGF5bWVudFVTRCkgPyB0b3RhbFBheW1lbnRVU0RUb3RhbC50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiB0b3RhbFBheW1lbnRVU0QudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+QW1vdW50IFRvIFJldHVybjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PjxzcGFuPkZDIDwvc3Bhbj57UmVtYWluaW5nRkMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PjxzcGFuPiQgPC9zcGFuPntSZW1haW5pbmdVU0QudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+UmV0dXJuIEFtb3VudDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdyZXR1cm5GQycgaWQ9J3JldHVybkZDJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJldHVybkZDKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxNTBweCcsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17eyB0ZXh0QWxpZ246ICdsZWZ0JywgZm9udFNpemU6ICcyMHB4JyB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3JldHVyblVTRCcgaWQ9J3JldHVyblVTRCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZXR1cm5VU0QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzE1MHB4JywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+RGlmZmVyZW50PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3sgdGV4dEFsaWduOiAnbGVmdCcsIGZvbnRTaXplOiAnMjBweCcgfX0+PHNwYW4+RkMgPC9zcGFuPntyZXN0RkMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IHRleHRBbGlnbjogJ2xlZnQnLCBmb250U2l6ZTogJzIwcHgnIH19PjxzcGFuPiQgPC9zcGFuPntyZXN0VVNELnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPilcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5OZXh0RGF5fVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVmlld05leHREYXl9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogMTAwMCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VWaWV3TmV4dERheX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgVG9kYXkncyBDYXNoXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Nhc2hEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0RhdGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGF5anMoY2FzaERhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlKSA9PiBzZXRDYXNoRGF0ZShkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdERC9NTS9ZWVlZJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezExfT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBzeD17eyBoZWlnaHQ6IDIwMCwgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzEwcHgnLCBvdmVyZmxvd1g6ICdoaWRkZW4nIH19PlxyXG4gICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSd0YWJsZUluZm8xMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+IzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BbW91bnQgRkM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+UmF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbCAkPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5vdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDEgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudDEubWFwKChyb3csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Jvdy5pZFJvd30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48RHJhZ0luZGljYXRvclJvdW5kZWQgLz48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Ftb3VudEZDJyBpZD0nYW1vdW50RkMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cm93LmFtb3VudEZDfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VBbW91bnQxKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTMwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3JhdGUnIGlkPSdyYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvdy5yYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VBbW91bnQxKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2Ftb3VudFVzZCcgaWQ9J2Ftb3VudFVzZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyb3cuYW1vdW50VXNkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VBbW91bnQxKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgaGlkZGVuIGlkPSdhbW91bnRUb3RhbEludm9pY2UnPntyb3cudG90YWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J25vdGUnIGlkPSdub3RlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Jvdy5ub3RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2VBbW91bnQxKGUsIGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMzAwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpZ2h0VG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlSXRlbTEocm93LmlkUm93KX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaWdodFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sU3Bhbj17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVG90YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuPiQ8L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkFkZFwiIHBsYWNlbWVudD1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXthZGRJdGVtMX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBZGQgY2xhc3NOYW1lPSdidG4xJyBzdHlsZT17eyBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYWlseUV4cGVuc2VBZG1pblZpZXdcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vLi4vLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgTGluZUNoYXJ0IH0gZnJvbSAnQG11aS94LWNoYXJ0cy9MaW5lQ2hhcnQnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyLCBMb2NhbGl6YXRpb25Qcm92aWRlciB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMnO1xyXG5pbXBvcnQgeyBEZW1vQ29udGFpbmVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9pbnRlcm5hbHMvZGVtbyc7XHJcbmltcG9ydCB7IEFkYXB0ZXJEYXlqcyB9IGZyb20gJ0BtdWkveC1kYXRlLXBpY2tlcnMvQWRhcHRlckRheWpzJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIEdyaWQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gRGFpbHlFeHBlbnNlc01vbnRobHlDaGFydFZpZXcoKSB7XHJcbiAgY29uc3QgW21vbnRoRXhwZW5zZXNUb3RhbCwgc2V0TW9udGhFeHBlbnNlc1RvdGFsXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbeWVhckV4cGVuc2VzVG90YWwsIHNldFllYXJFeHBlbnNlc1RvdGFsXSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IGRhdGUxID0gbmV3IERhdGUoKVxyXG4gICAgcmV0dXJuIGRhdGUxXHJcbiAgfSk7XHJcbiAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgW2V4cGVuc2VSZXNwb25zZSwgY2F0ZWdvcnlSZXNwb25zZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9leHBlbnNlP3N1bW1hcnk9dHJ1ZWApLFxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZXhwZW5zZXNDYXRlZ29yeWApXHJcbiAgICAgICAgXSlcclxuICAgICAgICBzZXRNb250aEV4cGVuc2VzVG90YWwoZXhwZW5zZVJlc3BvbnNlLmRhdGE/LmRhdGE/LmZpbHRlcihyb3cgPT4gZGF5anMocm93LmV4cGVuc2VEYXRlKS5mb3JtYXQoJ1lZWVknKSA9PT0gZGF5anMoeWVhckV4cGVuc2VzVG90YWwpLmZvcm1hdCgnWVlZWScpKSk7XHJcbiAgICAgICAgc2V0Q2F0ZWdvcmllcyhjYXRlZ29yeVJlc3BvbnNlLmRhdGEuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpXHJcblxyXG4gIH0sIFt5ZWFyRXhwZW5zZXNUb3RhbF0pXHJcblxyXG4gIGNvbnN0IFt0b3RhbEV4cGVuc2VzLCBzZXRUb3RhbEV4cGVuc2VzXSA9IHVzZVN0YXRlKDApXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IEV4VCA9IG1vbnRoRXhwZW5zZXNUb3RhbC5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyByb3cudG90YWwsIDApO1xyXG4gICAgc2V0VG90YWxFeHBlbnNlcyhFeFQpXHJcbiAgfSwgW21vbnRoRXhwZW5zZXNUb3RhbF0pXHJcblxyXG4gIGNvbnN0IFRvdGFsTW9udGggPSBtb250aEV4cGVuc2VzVG90YWwgPyBtb250aEV4cGVuc2VzVG90YWwucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IG1vbnRoID0gZGF5anMoaXRlbS5leHBlbnNlRGF0ZSkuZm9ybWF0KCdNTU1NJyk7XHJcbiAgICBjb25zdCB5ZWFyID0gZGF5anMoaXRlbS5leHBlbnNlRGF0ZSkuZm9ybWF0KCdZWVlZJyk7XHJcbiAgICBpZiAoIWFjY1ttb250aF0pIHtcclxuICAgICAgYWNjW21vbnRoXSA9IHsgeWVhciwgbW9udGgsIHRvdGFsOiAwIH1cclxuICAgIH1cclxuICAgIGFjY1ttb250aF0udG90YWwgKz0gcGFyc2VGbG9hdChpdGVtLnRvdGFsKVxyXG4gICAgcmV0dXJuIGFjY1xyXG4gIH0sIHt9KSA6ICcnXHJcblxyXG5cclxuICBjb25zdCBuZXdNb250aEFycmF5ID0gKE9iamVjdC5lbnRyaWVzKFRvdGFsTW9udGgpLm1hcCgoW21vbnRoLCB0b3RhbF0pID0+ICh7XHJcbiAgICBtb250aDogdG90YWwubW9udGgsIHRvdGFsOiBwYXJzZUZsb2F0KHRvdGFsLnRvdGFsLnRvRml4ZWQoMikpLCB5ZWFyOiB0b3RhbC55ZWFyXHJcbiAgfSkpKVxyXG4gIGNvbnN0IHNvcnRBcnJheUJ5TW9udGggPSBuZXdNb250aEFycmF5LnNvcnQoKGEsIGIpID0+IHtcclxuICAgIGNvbnN0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxyXG4gICAgcmV0dXJuIG1vbnRocy5pbmRleE9mKGEubW9udGgpIC0gbW9udGhzLmluZGV4T2YoYi5tb250aClcclxuICB9KS5maWx0ZXIocm93ID0+IHtcclxuICAgIGNvbnN0IHJvd0RhdGUgPSBkYXlqcyhyb3cueWVhcikuZm9ybWF0KCdZWVlZJyk7XHJcbiAgICByZXR1cm4gcm93RGF0ZSA9PT0gZGF5anMoeWVhckV4cGVuc2VzVG90YWwpLmZvcm1hdCgnWVlZWScpXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgY2F0ZWdvcnlUb3RhbENoYXJ0ID0gY2F0ZWdvcmllcy5tYXAoKHJvdykgPT4gKHtcclxuICAgIGlkOiByb3cuX2lkLFxyXG4gICAgbmFtZTogcm93LmV4cGVuc2VzQ2F0ZWdvcnksXHJcbiAgICB0b3RhbDogbW9udGhFeHBlbnNlc1RvdGFsLnJlZHVjZSgoYWNjLCBleHBlbnNlKSA9PiB7XHJcbiAgICAgIGlmIChleHBlbnNlLmV4cGVuc2VDYXRlZ29yeS5faWQgPT09IHJvdy5faWQpIHtcclxuICAgICAgICByZXR1cm4gYWNjICsgcGFyc2VGbG9hdChleHBlbnNlLnRvdGFsKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhY2NcclxuICAgIH0sIDApXHJcbiAgfSkpXHJcbiAgY29uc3QgY2F0ZWdvcnlUb3RhbENoYXJ0MSA9IGNhdGVnb3J5VG90YWxDaGFydC5tYXAoKHJvdykgPT4gKHtcclxuICAgIGlkOiByb3cuX2lkLFxyXG4gICAgbmFtZTogcm93Lm5hbWUsXHJcbiAgICB0b3RhbDogcm93LnRvdGFsLnRvRml4ZWQoMilcclxuICB9KSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcgfX0+XHJcbiAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJywgJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgZm9ybWF0PSdZWVlZJ1xyXG4gICAgICAgICAgICAgIGxhYmVsPXsnXCJ5ZWFyXCInfSB2aWV3cz17Wyd5ZWFyJ119XHJcbiAgICAgICAgICAgICAgbmFtZT0neWVhckV4cGVuc2VzVG90YWwnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2RheWpzKHllYXJFeHBlbnNlc1RvdGFsKX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldFllYXJFeHBlbnNlc1RvdGFsKGRhdGUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9EZW1vQ29udGFpbmVyPlxyXG4gICAgICAgIDwvTG9jYWxpemF0aW9uUHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPENhcmQgc3g9e3sgbWluV2lkdGg6IDEwMDAsIGhlaWdodDogNDAwIH19PlxyXG4gICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcsIGNvbG9yOiAnIzg4ODRkOCcsIGZvbnRTaXplOiAnMjBweCcgfX0+VG90YWwgRXhwZW5zZXM6IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0+PHNwYW4+JDwvc3Bhbj4ge3RvdGFsRXhwZW5zZXMgPyB0b3RhbEV4cGVuc2VzLnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9PC9zcGFuPjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzeD17eyBjb2xvcjogJyM4ODg0ZDgnIH19PlRvdGFsIEV4cGVuc2VzIHBlciBNb250aDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8TGluZUNoYXJ0XHJcbiAgICAgICAgICAgICAgICBkYXRhc2V0PXtzb3J0QXJyYXlCeU1vbnRofVxyXG4gICAgICAgICAgICAgICAgeEF4aXM9e1t7IHNjYWxlVHlwZTogJ3BvaW50JywgZGF0YTogc29ydEFycmF5QnlNb250aC5tYXAoKHJvdykgPT4gcm93Lm1vbnRoKSB9XX1cclxuICAgICAgICAgICAgICAgIHNlcmllcz17W3sgZGF0YUtleTogJ3RvdGFsJywgYXJlYTogdHJ1ZSB9XX1cclxuICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MzUwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhaWx5RXhwZW5zZXNNb250aGx5Q2hhcnRWaWV3XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlTWVtbyIsIlNpZGViYXJEYXNoIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsImNhY2hlZEdldCIsImludmFsaWRhdGVDYWNoZSIsIkNvbGxhcHNlIiwiR3JpZCIsIkljb25CdXR0b24iLCJzdHlsZWQiLCJUYWJsZSIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiVGFibGVDZWxsIiwiVGFibGVCb2R5IiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiT3V0bGluZWRJbnB1dCIsIklucHV0QWRvcm5tZW50IiwiTW9kYWwiLCJCYWNrZHJvcCIsIkJveCIsIlRleHRGaWVsZCIsIlBhcGVyIiwiVGFibGVDb250YWluZXIiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJEaXZpZGVyIiwiVGFiIiwiVHlwb2dyYXBoeSIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwidXNlTmF2aWdhdGUiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJDb250YWluZXIiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiZGF5anMiLCJDaGVja0NpcmNsZUljb24iLCJDYW5jZWxJY29uIiwiTG9hZGVyIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvZ291dCIsIkRhdGVQaWNrZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkFkYXB0ZXJEYXlqcyIsIkRlbW9Db250YWluZXIiLCJEYWlseUV4cGVuc2VzTW9udGhseUNoYXJ0VmlldyIsIkFkZCIsIkNsb3NlIiwiRGl2ZXJzaXR5MVJvdW5kZWQiLCJEcmFnSW5kaWNhdG9yUm91bmRlZCIsIkxvY2FsUHJpbnRzaG9wIiwiVmlzaWJpbGl0eU91dGxpbmVkIiwiRGF0YUdyaWQiLCJEZWxldGVJY29uIiwiS2V5Ym9hcmRBcnJvd0Rvd25JY29uIiwiS2V5Ym9hcmRBcnJvd1VwSWNvbiIsIlJlYWN0VG9QcmludCIsInVzZVJlYWN0VG9QcmludCIsIkFycm93QmFjayIsIkVkaXQiLCJ2NCIsImVycm9yIiwiRGVsZXRlIiwiVGFiQ29udGV4dCIsIlRhYkxpc3QiLCJUYWJQYW5lbCIsIk1lc3NhZ2VBZG1pblZpZXciLCJOb3RpZmljYXRpb25WSWV3SW5mbyIsIlZpZXdUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsIkVkaXRUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJQcmludFRvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsIkxpZ2h0VG9vbHRpcCIsIl9yZWY3IiwiX2V4Y2x1ZGVkNCIsIl9yZWY4IiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmOSIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmMCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkRhaWx5RXhwZW5zZUFkbWluVmlldyIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWYxIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZXhwZW5zZXMiLCJzZXRFeHBlbnNlcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZmlsdGVyZWREYXRhIiwic2V0RmlsdGVyZWREYXRhIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJjYXNoIiwic2V0Q2FzaCIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwicmF0ZSIsInNldFJhdGUiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsIml0ZW1QdXJjaGFzZUluZm8iLCJzZXRJdGVtUHVyY2hhc2UiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJwdXJjaGFzZU9yZGVyIiwic2V0UHVyY2hhc2VPcmRlciIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJwYXlSb2xsIiwic2V0UGF5Um9sbCIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJwYXltZW50Iiwic2V0UGF5bWVudCIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJwb3NJbmZvIiwic2V0UG9zIiwiX3VzZVN0YXRlMTciLCJzdG9yZWQiLCJEYXRlIiwiSlNPTiIsInBhcnNlIiwiZSIsInRvRGF0ZSIsIl91c2VTdGF0ZTE4Iiwic3RhcnREYXRlIiwic2V0U3RhcnREYXRlIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsImNhc2hEYXRlIiwic2V0Q2FzaERhdGUiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwicmV0dXJuRkMiLCJzZXRSZXR1cm5GQyIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJyZXR1cm5VU0QiLCJzZXRSZXR1cm5VU0QiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwidG90YWxDYXNoSW5mbyIsInNldFRvdGFsQ2FzaEluZm8iLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4IiwiYW1vdW50Iiwic2V0QW1vdW50IiwiZmV0Y2hDYXNoRGF0YSIsIl9yZWYxMCIsImNhc2hSZXNwb25zZSIsImZldGNoU3RhdGljRGF0YSIsIl9yZWYxMSIsIl9yZXNQTyRkYXRhIiwiX3Jlc1BheVJvbGwkZGF0YSIsInJlc1BPIiwiZmlsdGVyIiwicm93Iiwic3RhdHVzIiwiZXhwZW5zZVJlc3BvbnNlIiwicmF0ZVJlc3BvbnNlIiwibWFwIiwicmVzUGF5Um9sbCIsInVuZGVmaW5lZCIsInJlc1BvcyIsImFtb3VudFRvdGFsRmMiLCJ0b3RhbEZDIiwiY3JlZGl0RkMiLCJhbW91bnRUb3RhbFVzZCIsInRvdGFsVVNEIiwiY3JlZGl0VXNkIiwiZmV0Y2hQYXltZW50RGF0YSIsInVzZUNhbGxiYWNrIiwiX3Jlc1BheW1lbnQkZGF0YSIsInJlc1BheW1lbnQiLCJtb2RlcyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmV0Y2hJdGVtUHVyY2hhc2VGb3JEYXRlIiwiX3JlZjEzIiwiZGF0ZSIsIl9yZXMkZGF0YSIsInRhcmdldERhdGVQYXJhbSIsImZvcm1hdCIsIl94IiwiaXRlbVB1cmNoYXNlIiwiZm9yRWFjaCIsInB1c2giLCJfaWQiLCJpdGVtUHVyY2hhc2VOdW1iZXIiLCJTdHJpbmciLCJwYWRTdGFydCIsIml0ZW1QdXJjaGFzZURhdGUiLCJwcm9qZWN0TmFtZSIsIm1hbnVmYWN0dXJlciIsIm1hbnVmYWN0dXJlck51bWJlciIsImRlc2NyaXB0aW9uIiwidG90YWwiLCJoYW5kbGVDaGFuZ2VEYXRlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImVuZERhdGUiLCJhZGRJdGVtIiwiaWRSb3ciLCJhbW91bnRGQyIsImFtb3VudFVzZCIsIm5vdGUiLCJkZWxldGVJdGVtIiwiSXRlbSIsImhhbmRsZUNoYW5nZUFtb3VudCIsImkiLCJfZSR0YXJnZXQiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJsaXN0IiwiTWF0aCIsInJvdW5kIiwicGFyc2VJbnQiLCJoZWFkZXJzIiwiY3VycmVudERhdGUiLCJ0b0RhdGVTdHJpbmciLCJzZXREYXRlIiwiZ2V0RGF0ZSIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJleHBlbnNlc0ZpbHRlcmVkIiwic2V0RXhwZW5zZXNGaWx0ZXJlZCIsIl91c2VTdGF0ZTMxIiwiX3VzZVN0YXRlMzIiLCJwYXlSb2xsRmlsdGVyZWQiLCJzZXRQYXlSb2xsRmlsdGVyZWQiLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0IiwicG9zRmlsdGVyZWQiLCJzZXRQb3NGaWx0ZXJlZCIsInRvdGFsRXhwZW5zZXMiLCJFeHBlbnNlc0RhdGUiLCJleHBlbnNlRGF0ZSIsIml0ZW1QdXJjaGFzZUZpbHRlcmVkIiwibGVuZ3RoIiwidGd0U3RyIiwicmVzdWx0cyIsIml0ZW0iLCJwYXltZW50VVNEIiwicGF5bWVudEZDIiwicGF5bWVudHMiLCJBcnJheSIsImlzQXJyYXkiLCJwbXQiLCJfcG10JGFtb3VudCIsIl9wbXQkYW1vdW50RkMiLCJwYXJzZUZsb2F0IiwiX3JlZjE0IiwiX2l0ZW0kdG90YWxVU0QiLCJfaXRlbSR0b3RhbEZDIiwicGF5bWVudElkIiwicGF5bWVudERhdGUiLCJwYXlEYXRlIiwiaW52b2ljZURhdGUiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2Iiwic2V0T3BlbiIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJvcGVuU3RhdHVzIiwic2V0T3BlblN0YXR1cyIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJvcGVuT3B0aW9uIiwic2V0T3Blbk9wdGlvbiIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJvcGVuTmV4dERheSIsInNldE9wZW5OZXh0RGF5IiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsInZpZXdJZCIsInNldFZpZXdJZCIsIl91c2VTdGF0ZTQ1IiwiX3VzZVN0YXRlNDYiLCJ2aWV3SWRTdGF0dXMiLCJzZXRWaWV3SWRTdGF0dXMiLCJfdXNlU3RhdGU0NyIsIl91c2VTdGF0ZTQ4IiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGU1MSIsIl91c2VTdGF0ZTUyIiwiRXJyb3JPcGVuTW9kYWwiLCJzZXRFcnJvck9wZW5Nb2RhbCIsImhhbmRsZU9wZW5WaWV3IiwiaWQiLCJoYW5kbGVDbG9zZVZpZXciLCJoYW5kbGVPcGVuVmlld09wdGlvbiIsImhhbmRsZUNsb3NlVmlld09wdGlvbiIsImhhbmRsZU9wZW5WaWV3U3RhdHVzIiwiaGFuZGxlQ2xvc2VWaWV3U3RhdHVzIiwiaGFuZGxlT3BlblZpZXdOZXh0RGF5IiwiaGFuZGxlQ2xvc2VWaWV3TmV4dERheSIsImZldGNoSWQiLCJfcmVmMTUiLCJsb2ciLCJfdXNlU3RhdGU1MyIsIl91c2VTdGF0ZTU0Iiwic3RhdHVzSW5mbyIsInNldFN0YXR1c0luZm8iLCJfdXNlU3RhdGU1NSIsIl91c2VTdGF0ZTU2IiwicmVzdEluZm9GQyIsInNldFJlc3RJbmZvRmMiLCJfdXNlU3RhdGU1NyIsIl91c2VTdGF0ZTU4IiwicmVzdEluZm9VU0QiLCJzZXRSZXN0SW5mb1VTRCIsIl91c2VTdGF0ZTU5IiwiX3VzZVN0YXRlNjAiLCJpbmRleElkIiwic2V0SW5kZXhJZCIsIl9yZWYxNiIsInJldHVybkFtb3VudEZDIiwicmV0dXJuQW1vdW50VVNEIiwic3VtIiwiaGFuZGxlT3BlbiIsInNldFRpbWVvdXQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNsb3NlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVDbG9zZUVycm9yIiwiaGFuZGxlU3VibWl0VXBkYXRlIiwiX3JlZjE3IiwicHJldmVudERlZmF1bHQiLCJ0b3RhbENhc2giLCJ1cGRhdGVTIiwicHV0IiwiX3gyIiwiX3VzZVN0YXRlNjEiLCJfdXNlU3RhdGU2MiIsImZpbHRlclRvdGFsMiIsInNldEZpbHRlclRvdGFsMiIsIl91c2VTdGF0ZTYzIiwiX3VzZVN0YXRlNjQiLCJmaWx0ZXJUb3RhbFBheW1lbnQiLCJzZXRGaWx0ZXJUb3RhbFBheW1lbnQiLCJ0b3RhbERheSIsInJlZHVjZSIsInRvdGFsRGF5RkMiLCJ0b3RhbFBheW1lbnRGQzEiLCJhY2MiLCJyZWFzb24iLCJyZW1haW5pbmciLCJQYXltZW50UmVjZWl2ZWRGQyIsInRvdGFsUGF5bWVudFVTRDAiLCJ0b3RhbFBheW1lbnRVU0QxNSIsIlBheW1lbnRSZWNlaXZlZFVTRCIsInRvdGFsUGF5bWVudFVTRDEiLCJ0b3RhbFBheW1lbnRVU0RUb3RhbCIsInRvdGFsUG9zRkMiLCJ0b3RhbFBvc1VTRCIsInRvdGFsUGF5bWVudEZDIiwidG90YWxQYXltZW50VVNEIiwidG90YWxDYXNoVVNEIiwidG90YWxDYXNoRkMiLCJ0b3RhbEl0ZW1QdXJjaGFzZSIsInRvdGFsSXRlbVB1cmNoYXNlRkMiLCJ0b3RhbFBheVJvbGxEYWlseSIsImFtb3VudFBheVVTRCIsInRvdGFsUGF5Um9sbERhaWx5RkMiLCJhbW91bnRQYXlGQyIsInRvdGFsRXhwZW5zZXNGQyIsIk51bWJlciIsInRvdGFsRW50ZXJGYyIsImlzTmFOIiwiUmVtYWluaW5nRkMiLCJ0b3RhbEV4cGVuc2VzRCIsInRvdGFsRW50ZXIiLCJSZW1haW5pbmdVU0QiLCJyZXN0RkMiLCJyZXN0VVNEIiwiX3VzZVN0YXRlNjUiLCJfdXNlU3RhdGU2NiIsImFtb3VudDEiLCJzZXRBbW91bnQxIiwiYWRkSXRlbTEiLCJkZWxldGVJdGVtMSIsImhhbmRsZUNoYW5nZUFtb3VudDEiLCJfZSR0YXJnZXQyIiwiaGFuZGxlU3VibWl0VXBkYXRlUmV0dXJuIiwiX3JlZjE4IiwiUmVtYWluaW5nQW1vdW50VVNEIiwiUmVtYWluaW5nQW1vdW50RkMiLCJ0b3RhbEV4cGVuc2VzVVNEIiwidG90YWxJdGVtUHVyY2hhc2VVU0QiLCJ0b3RhbFBheXJvbGxVU0QiLCJfeDMiLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsInZhbHVlMyIsInNldFZhbHVlMyIsInJlc3VsdCIsImhhbmRsZUNoYW5nZTMiLCJldmVudCIsIm5ld1ZhbHVlIiwiY2hhbmdlVmFsdWUiLCJfdXNlU3RhdGU2NyIsIl91c2VTdGF0ZTY4Iiwic2VhcmNoIiwic2V0U2VhcmNoIiwiX3VzZVN0YXRlNjkiLCJfdXNlU3RhdGU3MCIsImRlYm91bmNlZFNlYXJjaCIsInNldERlYm91bmNlZFNlYXJjaCIsIl91c2VTdGF0ZTcxIiwiX3VzZVN0YXRlNzIiLCJzZWFyY2gyIiwic2V0U2VhcmNoMiIsIl91c2VTdGF0ZTczIiwiX3VzZVN0YXRlNzQiLCJkZWJvdW5jZWRTZWFyY2gyIiwic2V0RGVib3VuY2VkU2VhcmNoMiIsImhhbmRsZXIiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVTZWFyY2giLCJuZXdBcnJheUNhc2giLCJzb21lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsIm5ld0FycmF5IiwiZXhwZW5zZU51bWJlciIsInRvU3RyaW5nIiwiYWNjb3VudE5hbWUiLCJleHBlbnNlQ2F0ZWdvcnkiLCJleHBlbnNlc0NhdGVnb3J5IiwiYWNjb3VudE5hbWVJbmZvIiwiZW1wbG95ZWUiLCJjb21wb25lbnRSZWYiLCJoYW5kbGVQcmludCIsImNvbnRlbnQiLCJjdXJyZW50IiwiUm93Q2FzaCIsIl9yb3ckYW1vdW50IiwiX3VzZVN0YXRlNzUiLCJfdXNlU3RhdGU3NiIsIkZyYWdtZW50Iiwic3giLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nIiwic2l6ZSIsIm9uQ2xpY2siLCJjb21wb25lbnQiLCJzY29wZSIsIkNyZWF0ZSIsInBlcnNvbiIsInRvRml4ZWQiLCJyZXBsYWNlIiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdUb3AiLCJjb2xTcGFuIiwiaW4iLCJ0aW1lb3V0IiwibWFyZ2luIiwidGV4dEFsaWduIiwiYm9yZGVyIiwicm93MSIsImtleSIsIlJvdyIsIl91c2VTdGF0ZTc3IiwiX3VzZVN0YXRlNzgiLCJyZWYiLCJib3JkZXJDb2xsYXBzZSIsInJvdzIiLCJfcm93MiRhbW91bnQiLCJfSXRlbSRhbW91bnRGQyIsIl9JdGVtJHRvdGFsIiwiX2l0ZW0kcHJvamVjdE5hbWUiLCJwYXlOdW1iZXIiLCJtb250aCIsImZhY3R1cmVOdW1iZXIiLCJjdXN0b21lck5hbWUiLCJfaXRlbSRUb3RhbEFtb3VudCIsInBheW1lbnROdW1iZXIiLCJ0b1VwcGVyQ2FzZSIsIlRvdGFsQW1vdW50IiwicHJlZml4IiwiUmVmIiwiZmxvYXQiLCJtYXJnaW5Cb3R0b20iLCJqdXN0aWZ5Q29udGVudCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJtYXJnaW5SaWdodCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJib3JkZXJDb2xvciIsIm9uQ2hhbmdlIiwibGFiZWwiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Ub3AiLCJvdmVyZmxvd1kiLCJkYXRlQWRhcHRlciIsImNvbXBvbmVudHMiLCJyZXF1aXJlZCIsInRpdGxlIiwicGxhY2VtZW50IiwibWF4SGVpZ2h0Iiwib25DbG9zZSIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwiZ2FwIiwib25TdWJtaXQiLCJjb250YWluZXIiLCJ4cyIsImRpc2FibGVkIiwiaGlkZGVuIiwiY3Vyc29yIiwidHlwZSIsIkxpbmVDaGFydCIsIm1vbnRoRXhwZW5zZXNUb3RhbCIsInNldE1vbnRoRXhwZW5zZXNUb3RhbCIsImRhdGUxIiwieWVhckV4cGVuc2VzVG90YWwiLCJzZXRZZWFyRXhwZW5zZXNUb3RhbCIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiZmV0Y2hEYXRhIiwiX2V4cGVuc2VSZXNwb25zZSRkYXRhIiwiX3lpZWxkJFByb21pc2UkYWxsIiwiUHJvbWlzZSIsImFsbCIsIl95aWVsZCRQcm9taXNlJGFsbDIiLCJjYXRlZ29yeVJlc3BvbnNlIiwic2V0VG90YWxFeHBlbnNlcyIsIkV4VCIsIlRvdGFsTW9udGgiLCJ5ZWFyIiwibmV3TW9udGhBcnJheSIsIk9iamVjdCIsImVudHJpZXMiLCJzb3J0QXJyYXlCeU1vbnRoIiwic29ydCIsImEiLCJiIiwibW9udGhzIiwiaW5kZXhPZiIsInJvd0RhdGUiLCJjYXRlZ29yeVRvdGFsQ2hhcnQiLCJleHBlbnNlIiwiY2F0ZWdvcnlUb3RhbENoYXJ0MSIsInZpZXdzIiwibWluV2lkdGgiLCJkYXRhc2V0IiwieEF4aXMiLCJzY2FsZVR5cGUiLCJzZXJpZXMiLCJkYXRhS2V5IiwiYXJlYSJdLCJzb3VyY2VSb290IjoiIn0=