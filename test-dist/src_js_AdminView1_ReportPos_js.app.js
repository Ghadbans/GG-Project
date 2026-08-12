"use strict";
exports.id = "src_js_AdminView1_ReportPos_js";
exports.ids = ["src_js_AdminView1_ReportPos_js"];
exports.modules = {

/***/ "./src/js/AdminView1/ReportPos.js"
/*!****************************************!*\
  !*** ./src/js/AdminView1/ReportPos.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageView/Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _component_SideShop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/SideShop */ "./src/js/component/SideShop.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabContext/TabContext.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabList/TabList.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TabPanel/TabPanel.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Square.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../img/no-data.png */ "./src/js/img/no-data.png");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _mui_x_charts_LineChart__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/x-charts/LineChart */ "./node_modules/@mui/x-charts/LineChart/LineChart.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js");
/* harmony import */ var _mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/x-date-pickers */ "./node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js");
/* harmony import */ var _mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/x-date-pickers/internals/demo */ "./node_modules/@mui/x-date-pickers/internals/demo/DemoContainer.js");
/* harmony import */ var _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/x-date-pickers/AdapterDayjs */ "./node_modules/@mui/x-date-pickers/AdapterDayjs/AdapterDayjs.js");
/* harmony import */ var _PageView_DashboardInfo_PosReportInvoice__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./PageView/DashboardInfo/PosReportInvoice */ "./src/js/AdminView1/PageView/DashboardInfo/PosReportInvoice.js");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"];
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











































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
function ReportPos() {
  var _ref16;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_37__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_37__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_38__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_38__.setUser)({
              userName: Name,
              role: Role,
              id: res.data.data._id
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_38__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/grantAccess"));
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchNumber() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);
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
    var result = localStorage.getItem('SelectPOSReport');
    if (result) {
      setValue3(result);
    }
  }, []);
  var handleChange3 = (event, newValue) => {
    var changeValue = newValue;
    setValue3(changeValue);
    localStorage.setItem('SelectPOSReport', changeValue);
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loadingData = _useState4[0],
    setLoadingData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    invoice = _useState6[0],
    setInvoice = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    cash = _useState8[0],
    setCash = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    posFiltered = _useState0[0],
    setPosFiltered = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    cashFiltered = _useState10[0],
    setCashFiltered = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date = new Date();
      return date;
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    startDate = _useState12[0],
    setStartDate = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
      var date1 = new Date();
      return date1;
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    date = _useState14[0],
    setDate = _useState14[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/pos?summary=true"));
          var formatDate = res.data.data.map(item => _objectSpread(_objectSpread({}, item), {}, {
            id: item._id,
            dateField: dayjs__WEBPACK_IMPORTED_MODULE_35___default()(item.invoiceDate).format('DD/MM/YYYY'),
            time: dayjs__WEBPACK_IMPORTED_MODULE_35___default()(item.time).format('HH:mm'),
            amountTotalFc: item.totalFC - item.creditFC,
            amountTotalUsd: item.totalUSD - item.creditUsd,
            infoSell: Math.round(((item.totalInvoice || item.TotalAmountPaid || 0) - (item.tax || 0)) / (item.rate || 1) * 100) / 100,
            infoSellFC: item.totalInvoice || item.TotalAmountPaid || 0,
            TaxUSd: Math.round((item.tax || 0) / (item.rate || 1) * 100) / 100,
            infoCostFC: item.items.reduce((sum, ITem) => sum + ITem.itemQty * ITem.itemCost, 0),
            infoCost: Math.round(item.items.reduce((sum, ITem) => sum + ITem.itemQty * ITem.itemCost, 0) / (item.rate || 1) * 100) / 100
          }));
          setInvoice(formatDate.reverse());
          var cashResponse = yield axios__WEBPACK_IMPORTED_MODULE_31__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_32__.ENDPOINT_URL, "/cash"));
          setCash(cashResponse.data.data);
          setLoadingData(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoadingData(false);
        }
      });
      return function fetchData() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  //POS
  // Cash Filter
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var totalExpenses = cash.filter(row => {
      var ExpensesDate = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(row.cashDate).format('DD/MM/YYYY');
      return ExpensesDate === dayjs__WEBPACK_IMPORTED_MODULE_35___default()(startDate).format('DD/MM/YYYY');
    });
    setCashFiltered(totalExpenses);
  }, [startDate, cash]);
  // POS Filter
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var totalExpenses = invoice.filter(row => {
      var ExpensesDate = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(row.invoiceDate).format('DD/MM/YYYY');
      return ExpensesDate === dayjs__WEBPACK_IMPORTED_MODULE_35___default()(startDate).format('DD/MM/YYYY');
    });
    setPosFiltered(totalExpenses);
  }, [startDate, invoice]);
  var totalPosFC = posFiltered.length > 0 ? posFiltered.reduce((acc, row) => acc + parseFloat(row.amountTotalFc), 0) : 0;
  var totalPosUSD = posFiltered.length > 0 ? posFiltered.reduce((acc, row) => acc + parseFloat(row.amountTotalUsd), 0) : 0;
  var totalCashFC = cashFiltered.length > 0 ? cashFiltered.reduce((acc, row) => {
    return acc + row.amount.filter(rows => {
      var _rows$note;
      return ((_rows$note = rows.note) === null || _rows$note === void 0 ? void 0 : _rows$note.toLowerCase()) === "pos";
    }).reduce((sum, item) => sum + parseFloat(item.amountFC), 0);
  }, 0) : 0;
  var totalCashUSD = cashFiltered.length > 0 ? cashFiltered.reduce((acc, row) => {
    return acc + row.amount.filter(rows => {
      var _rows$note2;
      return ((_rows$note2 = rows.note) === null || _rows$note2 === void 0 ? void 0 : _rows$note2.toLowerCase()) === "pos";
    }).reduce((sum, item) => sum + parseFloat(item.amountUsd), 0);
  }, 0) : 0;
  var returnFC = Number(totalCashFC) + Number(totalPosFC);
  var returnUSD = Number(totalCashUSD) + Number(totalPosUSD);
  var invoiceFilteredByYear = invoice ? invoice.filter(item => dayjs__WEBPACK_IMPORTED_MODULE_35___default()(item.invoiceDate).format('YYYY') === dayjs__WEBPACK_IMPORTED_MODULE_35___default()(date).format('YYYY')) : [];
  var TotalMonthPayment = invoiceFilteredByYear.reduce((acc, item) => {
    var month = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(item.invoiceDate).format('MMMM');
    var year = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(item.invoiceDate).format('YYYY');
    if (!acc[month]) {
      acc[month] = {
        year,
        month,
        amount: 0
      };
    }
    acc[month].amount += parseFloat(item.infoSell);
    return acc;
  }, {});
  var newMonthArrayPayment = Object.entries(TotalMonthPayment).map(_ref10 => {
    var _ref11 = _slicedToArray(_ref10, 2),
      month = _ref11[0],
      total = _ref11[1];
    return {
      month: total.month,
      total: parseFloat(total.amount.toFixed(2)),
      year: total.year
    };
  });
  var sortArrayByMonthPayment = newMonthArrayPayment.sort((a, b) => {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.indexOf(a.month) - months.indexOf(b.month);
  });
  var TotalMonthPayment1 = invoiceFilteredByYear.reduce((acc, item) => {
    var month = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(item.invoiceDate).format('MMMM');
    var year = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(item.invoiceDate).format('YYYY');
    if (!acc[month]) {
      acc[month] = {
        year,
        month,
        amount: 0
      };
    }
    acc[month].amount += parseFloat(item.infoCost);
    return acc;
  }, {});
  var newMonthArrayPayment1 = Object.entries(TotalMonthPayment1).map(_ref12 => {
    var _ref13 = _slicedToArray(_ref12, 2),
      month = _ref13[0],
      total = _ref13[1];
    return {
      month: total.month,
      total: parseFloat(total.amount.toFixed(2)),
      year: total.year
    };
  });
  var sortArrayByMonthPayment1 = newMonthArrayPayment1.sort((a, b) => {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.indexOf(a.month) - months.indexOf(b.month);
  });
  var TotalMonthDailyExpenses = invoiceFilteredByYear.reduce((acc, item) => {
    var month = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(item.invoiceDate).format('MMMM');
    var year = dayjs__WEBPACK_IMPORTED_MODULE_35___default()(item.invoiceDate).format('YYYY');
    if (!acc[month]) {
      acc[month] = {
        year,
        month,
        total: 0
      };
    }
    acc[month].total += parseFloat(item.TaxUSd);
    return acc;
  }, {});
  var newMonthArrayDailyExpenses = Object.entries(TotalMonthDailyExpenses).map(_ref14 => {
    var _ref15 = _slicedToArray(_ref14, 2),
      month = _ref15[0],
      total = _ref15[1];
    return {
      month: total.month,
      total: parseFloat(total.total.toFixed(2)),
      year: total.year
    };
  });
  var sortArrayByMonthDailyExpenses = newMonthArrayDailyExpenses.sort((a, b) => {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.indexOf(a.month) - months.indexOf(b.month);
  });
  var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var normalizeSortArrayByMonthPayment = monthsOfYear.map(moth => {
    var related = sortArrayByMonthPayment.find(row => row.month === moth);
    return {
      month: moth,
      total: related ? related.total : 0
    };
  });
  var normalizeSortArrayByMonthTotalExpensesAll = monthsOfYear.map(moth => {
    var related = sortArrayByMonthDailyExpenses.find(row => row.month === moth);
    return {
      month: moth,
      total: related ? related.total : 0
    };
  });
  var totalRevenue = sortArrayByMonthPayment.reduce((sum, row) => sum + row.total, 0);
  var totalCost = sortArrayByMonthPayment1.reduce((sum, row) => sum + row.total, 0);
  var totalDailyExpenses = sortArrayByMonthDailyExpenses.reduce((sum, row) => sum + row.total, 0);
  var palette1 = ['blue', 'red'];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState16 = _slicedToArray(_useState15, 2),
    monthAllRevenueExpenses = _useState16[0],
    setMonthAllRevenueExpenses = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState18 = _slicedToArray(_useState17, 2),
    showInfo = _useState18[0],
    setShowInfo = _useState18[1];
  var Month = "Month";
  var All = "Revenue";
  var handleClick = (e, monthI) => {
    setShowInfo(e);
    setMonthAllRevenueExpenses(monthI.axisValue);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_21__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_29__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "POS Report"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_43__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_41__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_39__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_30__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_27__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_23__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SideShop__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_28__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_36__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, showInfo !== 2 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_24__["default"], {
    value: value3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_25__["default"], {
    onChange: handleChange3,
    "aria-label": "lab API tabs example",
    sx: {
      '& .MuiTabs-indicator': {
        backgroundColor: 'white',
        height: '0px'
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "Daily Report",
    value: "1",
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: 'gray',
        borderRadius: '10px'
      },
      '&:hover': {
        color: 'gray',
        bgcolor: 'white',
        border: '1px solid gray',
        borderRadius: '10px'
      }
    }
  }), user.data.role === 'CEO' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: "Monthly",
    value: "2",
    sx: {
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: 'gray',
        borderRadius: '10px'
      },
      '&:hover': {
        color: 'gray',
        bgcolor: 'white',
        border: '1px solid gray',
        borderRadius: '10px'
      }
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_26__["default"], {
    value: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_45__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_48__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_47__.DemoContainer, {
    components: ['DatePicker', 'DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_46__.DatePicker, {
    required: true,
    name: "startDate",
    label: "From Date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_35___default()(startDate),
    onChange: date => setStartDate(date),
    format: "DD/MM/YYYY"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      float: 'left'
    }
  }, cashFiltered.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      border: '1px solid gray',
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center'
    },
    colSpan: 7
  }, "Cash In"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, row.amount.filter(rows => {
    var _rows$note3;
    return ((_rows$note3 = rows.note) === null || _rows$note3 === void 0 ? void 0 : _rows$note3.toLowerCase()) === "pos";
  }).map(rows => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    key: rows.idRow,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, " FC ", rows.amountFC), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, rows.rate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null, "$", rows.amountUsd !== undefined ? rows.amountUsd : rows.total)))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      border: '1px solid gray',
      backgroundColor: 'black',
      color: 'white',
      textAlign: 'center'
    },
    colSpan: 7
  }, "POS Daily Sell")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      border: '1px solid gray'
    }
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      border: '1px solid gray'
    }
  }, "User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      border: '1px solid gray'
    }
  }, "Customer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      border: '1px solid gray'
    }
  }, "Total FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      border: '1px solid gray'
    }
  }, "Total $"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null, posFiltered.map(item => {
    var _item$amountTotalFc, _item$amountTotalUsd;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: item._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      style: {
        border: '1px solid gray'
      }
    }, "S-", String(item.factureNumber).padStart(6, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      style: {
        border: '1px solid gray'
      }
    }, item.Create), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      style: {
        border: '1px solid gray'
      }
    }, item.customerName !== undefined ? item.customerName.customerName : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      style: {
        border: '1px solid gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), (_item$amountTotalFc = item.amountTotalFc) === null || _item$amountTotalFc === void 0 ? void 0 : _item$amountTotalFc.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
      style: {
        border: '1px solid gray'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), (_item$amountTotalUsd = item.amountTotalUsd) === null || _item$amountTotalUsd === void 0 ? void 0 : _item$amountTotalUsd.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      border: '1px solid gray'
    },
    colSpan: 3
  }, "POS Received Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      border: '1px solid gray',
      width: '200px',
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, isNaN(totalPosFC) ? 0 : totalPosFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      border: '1px solid gray',
      width: '200px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, isNaN(totalPosUSD) ? 0 : totalPosUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      border: '1px solid gray'
    },
    colSpan: 3
  }, "POS Cash Out Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      border: '1px solid gray',
      width: '200px',
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, isNaN(returnFC) ? 0 : returnFC === null || returnFC === void 0 ? void 0 : returnFC.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      border: '1px solid gray',
      width: '200px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$ "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, isNaN(returnUSD) ? 0 : returnUSD === null || returnUSD === void 0 ? void 0 : returnUSD.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_lab__WEBPACK_IMPORTED_MODULE_26__["default"], {
    value: "2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    style: {
      width: '400px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_45__.LocalizationProvider, {
    dateAdapter: _mui_x_date_pickers_AdapterDayjs__WEBPACK_IMPORTED_MODULE_48__.AdapterDayjs
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers_internals_demo__WEBPACK_IMPORTED_MODULE_47__.DemoContainer, {
    components: ['DatePicker', 'DatePicker']
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_date_pickers__WEBPACK_IMPORTED_MODULE_46__.DatePicker, {
    required: true,
    name: "date",
    value: dayjs__WEBPACK_IMPORTED_MODULE_35___default()(date),
    onChange: date => setDate(date),
    format: "YYYY",
    label: '"year"',
    views: ['year']
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      width: '100%',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    style: {
      listStyleType: 'none'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer'
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    style: {
      color: 'blue'
    }
  })), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'blue'
    }
  }, "Total Sales: $ ", totalRevenue === null || totalRevenue === void 0 ? void 0 : totalRevenue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer'
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    style: {
      color: 'Orange'
    }
  })), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'Orange'
    }
  }, "Item Cost: $ ", totalCost === null || totalCost === void 0 ? void 0 : totalCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer'
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    style: {
      color: 'green'
    }
  })), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'green'
    }
  }, "Net Profit: $ ", (_ref16 = totalRevenue - totalCost) === null || _ref16 === void 0 ? void 0 : _ref16.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer'
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], {
    style: {
      color: 'red'
    }
  })), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: 'red'
    }
  }, "Tax: $ ", totalDailyExpenses === null || totalDailyExpenses === void 0 ? void 0 : totalDailyExpenses.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    sx: {
      width: '100%',
      height: '300px',
      color: 'white',
      boxShadow: '1px 1px 2rem rgba(0, 0, 0, 0.3)'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_charts_LineChart__WEBPACK_IMPORTED_MODULE_42__.LineChart, {
    height: 300,
    series: [{
      data: normalizeSortArrayByMonthPayment.map(row => row.total),
      label: 'Income',
      id: 'uvId'
    }, {
      data: normalizeSortArrayByMonthTotalExpensesAll.map(row => row.total),
      label: 'Tax',
      id: 'pvId'
    }],
    xAxis: [{
      scaleType: 'point',
      data: monthsOfYear,
      stroke: '#fff'
    }],
    colors: palette1,
    onAxisClick: (e, monthsOfYear) => handleClick(2, monthsOfYear)
  }))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onClick: () => handleClick(1, ''),
    className: "btnCustomer",
    style: {
      fontSize: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageView_DashboardInfo_PosReportInvoice__WEBPACK_IMPORTED_MODULE_49__["default"], {
    onMonth: monthAllRevenueExpenses,
    onInvoice: invoice,
    onMonthOption: Month,
    OnAllSelection: All
  }))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReportPos);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUmVwb3J0UG9zX2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUEwRDtBQUN2QztBQUNlO0FBQ1U7QUFDUTtBQUNzQjtBQUNkO0FBQ1o7QUFDSTtBQUNJO0FBQzhOO0FBQ3ROO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDbUI7QUFDakI7QUFDSTtBQUNJO0FBQ1Y7QUFDVTtBQUNjO0FBQ0k7QUFDeEM7QUFDa0I7QUFDb0U7QUFDdEY7QUFDZTtBQUNxQjtBQUNSO0FBQzBCO0FBQ2hDO0FBQ1Q7QUFDa0I7QUFDUDtBQU1qQjtBQUN5QjtBQUVUO0FBQ3NCO0FBQ0o7QUFDSDtBQUNTO0FBQ3pFLElBQU13RixhQUFhLEdBQUcxRSwwREFBTSxDQUFDMkUsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQ2pEN0YsMERBQUEsQ0FBQ3FDLDhEQUFPLEVBQUEwRCxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU85RCw4REFBYyxDQUFDK0QsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsS0FBSztNQUN0QkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDM0JDLFFBQVEsRUFBRTtJQUNaO0VBQ0YsQ0FBQztBQUFBLENBQUMsQ0FBQztB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RUFBRXJFLFFBQVM7SUFDakJzRSxXQUFXLEVBQUVBLENBQUMxRCxDQUFDLEVBQUVyQixZQUFZLEtBQUtvQixXQUFXLENBQUMsQ0FBQyxFQUFFcEIsWUFBWTtFQUFFLENBQ2hFLENBQ1UsQ0FDVCxDQUNFLENBQ0EsQ0FBQyxnQkFDYjdULDBEQUFBLDJCQUNFQSwwREFBQTtJQUFTbUgsS0FBSyxFQUFFO01BQUVDLFFBQVEsRUFBRSxVQUFVO01BQUUrUCxLQUFLLEVBQUUsT0FBTztNQUFFMEIsTUFBTSxFQUFFO0lBQU87RUFBRSxnQkFDdkU3WSwwREFBQSxDQUFDeUQsNERBQUs7SUFBQ2dTLE9BQU8sRUFBRUEsQ0FBQSxLQUFNUixXQUFXLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBRTtJQUFDdlAsU0FBUyxFQUFDLGFBQWE7SUFBQ3lCLEtBQUssRUFBRTtNQUFFVCxRQUFRLEVBQUU7SUFBTztFQUFFLENBQUUsQ0FDekYsQ0FBQyxlQUNWMUcsMERBQUEsQ0FBQ3VGLGlGQUFnQjtJQUNmdVQsT0FBTyxFQUFFckUsdUJBQXdCO0lBQ2pDc0UsU0FBUyxFQUFFM0wsT0FBUTtJQUNuQjRMLGFBQWEsRUFBRWpFLEtBQU07SUFDckJrRSxjQUFjLEVBQUVqRTtFQUFJLENBQ3JCLENBQ0UsQ0FFTixDQUtOLENBRUksQ0FDUixDQUNGLENBQ0YsQ0FBQztBQUVWO0FBRUEsaUVBQWV6TCxTQUFTLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUmVwb3J0UG9zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuL3ZpZXcuY3NzJ1xyXG5pbXBvcnQgJy4vUGFnZVZpZXcvQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBTaWRlU2hvcCBmcm9tICcuLi9jb21wb25lbnQvU2lkZVNob3AnXHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IFZpc2liaWxpdHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVmlzaWJpbGl0eSc7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IE5hdkxpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IFRhYmxlLCBJY29uQnV0dG9uLCBzdHlsZWQsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBDaGVja2JveCwgVGFibGVDb250YWluZXIsIFBhcGVyLCBUeXBvZ3JhcGh5LCBNb2RhbCwgQm94LCBHcmlkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBNZW51SXRlbSwgQmFja2Ryb3AsIEF1dG9jb21wbGV0ZSwgVGV4dEZpZWxkLCBUYWIsIENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCB7IFRhYkNvbnRleHQsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSAnQG11aS9sYWInO1xyXG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG11aS9tYXRlcmlhbC9CYWRnZSc7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGl2aWRlcic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEVORFBPSU5UX1VSTCB9IGZyb20gJy4uL2FwaUNvbmZpZyc7XHJcbmltcG9ydCB7IEFkZCwgQ2xvc2UsIE1haWxPdXRsaW5lLCBQZXJzb24yT3V0bGluZWQsIFBlcnNvbk9mZlJvdW5kZWQsIFByaW50LCBTcXVhcmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9pbWcvbm8tZGF0YS5wbmcnO1xyXG5pbXBvcnQgeyBEYXRhR3JpZCwgR3JpZFRvb2xiYXIgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IHtcclxuICBMaW5lQ2hhcnQsIExpbmVQbG90LFxyXG4gIE1hcmtQbG90LFxyXG4gIGxpbmVFbGVtZW50Q2xhc3NlcyxcclxuICBtYXJrRWxlbWVudENsYXNzZXMsXHJcbn0gZnJvbSAnQG11aS94LWNoYXJ0cy9MaW5lQ2hhcnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5pbXBvcnQgeyB1c2VSZWFjdFRvUHJpbnQgfSBmcm9tICdyZWFjdC10by1wcmludCc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXIsIExvY2FsaXphdGlvblByb3ZpZGVyIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycyc7XHJcbmltcG9ydCB7IERlbW9Db250YWluZXIgfSBmcm9tICdAbXVpL3gtZGF0ZS1waWNrZXJzL2ludGVybmFscy9kZW1vJztcclxuaW1wb3J0IHsgQWRhcHRlckRheWpzIH0gZnJvbSAnQG11aS94LWRhdGUtcGlja2Vycy9BZGFwdGVyRGF5anMnO1xyXG5pbXBvcnQgUG9zUmVwb3J0SW52b2ljZSBmcm9tICcuL1BhZ2VWaWV3L0Rhc2hib2FyZEluZm8vUG9zUmVwb3J0SW52b2ljZSc7XHJcbmNvbnN0IERlbGV0ZVRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBFZGl0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuXHJcbmZ1bmN0aW9uIFJlcG9ydFBvcygpIHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSwgaWQ6IHJlcy5kYXRhLmRhdGEuX2lkIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW2dyYW50QWNjZXNzLCBzZXRHcmFudEFjY2Vzc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoTnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dyYW50QWNjZXNzYCk7XHJcbiAgICAgICAgcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cudXNlcklEID09PSB1c2VyLmRhdGEuaWQpXHJcbiAgICAgICAgICAubWFwKChyb3cpID0+IHNldEdyYW50QWNjZXNzKHJvdy5tb2R1bGVzKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hOdW1iZXIoKVxyXG4gIH0sIFt1c2VyXSlcclxuICBjb25zdCBbc2lkZUJhciwgc2V0U2lkZUJhcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB0b2dnbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRTaWRlQmFyKCFzaWRlQmFyKTtcclxuICB9O1xyXG4gIGNvbnN0IFt2YWx1ZTMsIHNldFZhbHVlM10gPSBSZWFjdC51c2VTdGF0ZSgnMScpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1NlbGVjdFBPU1JlcG9ydCcpXHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHNldFZhbHVlMyhyZXN1bHQpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlMyA9IChldmVudCwgbmV3VmFsdWUpID0+IHtcclxuICAgIGNvbnN0IGNoYW5nZVZhbHVlID0gbmV3VmFsdWVcclxuICAgIHNldFZhbHVlMyhjaGFuZ2VWYWx1ZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnU2VsZWN0UE9TUmVwb3J0JywgY2hhbmdlVmFsdWUpXHJcbiAgfTtcclxuICBjb25zdCBbbG9hZGluZ0RhdGEsIHNldExvYWRpbmdEYXRhXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtpbnZvaWNlLCBzZXRJbnZvaWNlXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY2FzaCwgc2V0Q2FzaF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Bvc0ZpbHRlcmVkLCBzZXRQb3NGaWx0ZXJlZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2Nhc2hGaWx0ZXJlZCwgc2V0Q2FzaEZpbHRlcmVkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3RhcnREYXRlLCBzZXRTdGFydERhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgIHJldHVybiBkYXRlXHJcbiAgfSk7XHJcbiAgY29uc3QgW2RhdGUsIHNldERhdGVdID0gdXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZTEgPSBuZXcgRGF0ZSgpXHJcbiAgICByZXR1cm4gZGF0ZTFcclxuICB9KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3Bvcz9zdW1tYXJ5PXRydWVgKVxyXG4gICAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSByZXMuZGF0YS5kYXRhLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICBpZDogaXRlbS5faWQsXHJcbiAgICAgICAgICBkYXRlRmllbGQ6IGRheWpzKGl0ZW0uaW52b2ljZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpLFxyXG4gICAgICAgICAgdGltZTogZGF5anMoaXRlbS50aW1lKS5mb3JtYXQoJ0hIOm1tJyksXHJcbiAgICAgICAgICBhbW91bnRUb3RhbEZjOiBpdGVtLnRvdGFsRkMgLSBpdGVtLmNyZWRpdEZDLFxyXG4gICAgICAgICAgYW1vdW50VG90YWxVc2Q6IGl0ZW0udG90YWxVU0QgLSBpdGVtLmNyZWRpdFVzZCxcclxuICAgICAgICAgIGluZm9TZWxsOiBNYXRoLnJvdW5kKCgoKGl0ZW0udG90YWxJbnZvaWNlIHx8IGl0ZW0uVG90YWxBbW91bnRQYWlkIHx8IDApIC0gKGl0ZW0udGF4IHx8IDApKSAvIChpdGVtLnJhdGUgfHwgMSkpICogMTAwKSAvIDEwMCxcclxuICAgICAgICAgIGluZm9TZWxsRkM6IGl0ZW0udG90YWxJbnZvaWNlIHx8IGl0ZW0uVG90YWxBbW91bnRQYWlkIHx8IDAsXHJcbiAgICAgICAgICBUYXhVU2Q6IE1hdGgucm91bmQoKChpdGVtLnRheCB8fCAwKSAvIChpdGVtLnJhdGUgfHwgMSkpICogMTAwKSAvIDEwMCxcclxuICAgICAgICAgIGluZm9Db3N0RkM6IChpdGVtLml0ZW1zLnJlZHVjZSgoc3VtLCBJVGVtKSA9PiBzdW0gKyAoSVRlbS5pdGVtUXR5ICogSVRlbS5pdGVtQ29zdCksIDApKSxcclxuICAgICAgICAgIGluZm9Db3N0OiBNYXRoLnJvdW5kKCgoaXRlbS5pdGVtcy5yZWR1Y2UoKHN1bSwgSVRlbSkgPT4gc3VtICsgKElUZW0uaXRlbVF0eSAqIElUZW0uaXRlbUNvc3QpLCAwKSkgLyAoaXRlbS5yYXRlIHx8IDEpKSAqIDEwMCkgLyAxMDBcclxuICAgICAgICB9KSlcclxuICAgICAgICBzZXRJbnZvaWNlKGZvcm1hdERhdGUucmV2ZXJzZSgpKTtcclxuICAgICAgICBjb25zdCBjYXNoUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9jYXNoYClcclxuICAgICAgICBzZXRDYXNoKGNhc2hSZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKVxyXG4gIH0sIFtdKVxyXG4gIC8vUE9TXHJcbiAgLy8gQ2FzaCBGaWx0ZXJcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdG90YWxFeHBlbnNlcyA9IGNhc2guZmlsdGVyKChyb3cpID0+IHtcclxuICAgICAgY29uc3QgRXhwZW5zZXNEYXRlID0gZGF5anMocm93LmNhc2hEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKVxyXG4gICAgICByZXR1cm4gRXhwZW5zZXNEYXRlID09PSBkYXlqcyhzdGFydERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpXHJcbiAgICB9KVxyXG4gICAgc2V0Q2FzaEZpbHRlcmVkKHRvdGFsRXhwZW5zZXMpXHJcbiAgfSwgW3N0YXJ0RGF0ZSwgY2FzaF0pXHJcbiAgLy8gUE9TIEZpbHRlclxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b3RhbEV4cGVuc2VzID0gaW52b2ljZS5maWx0ZXIoKHJvdykgPT4ge1xyXG4gICAgICBjb25zdCBFeHBlbnNlc0RhdGUgPSBkYXlqcyhyb3cuaW52b2ljZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpXHJcbiAgICAgIHJldHVybiBFeHBlbnNlc0RhdGUgPT09IGRheWpzKHN0YXJ0RGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJylcclxuICAgIH0pXHJcbiAgICBzZXRQb3NGaWx0ZXJlZCh0b3RhbEV4cGVuc2VzKVxyXG4gIH0sIFtzdGFydERhdGUsIGludm9pY2VdKVxyXG5cclxuICBjb25zdCB0b3RhbFBvc0ZDID0gcG9zRmlsdGVyZWQubGVuZ3RoID4gMCA/IHBvc0ZpbHRlcmVkLnJlZHVjZSgoYWNjLCByb3cpID0+IGFjYyArIHBhcnNlRmxvYXQocm93LmFtb3VudFRvdGFsRmMpLCAwKSA6IDBcclxuICBjb25zdCB0b3RhbFBvc1VTRCA9IHBvc0ZpbHRlcmVkLmxlbmd0aCA+IDAgPyBwb3NGaWx0ZXJlZC5yZWR1Y2UoKGFjYywgcm93KSA9PiBhY2MgKyBwYXJzZUZsb2F0KHJvdy5hbW91bnRUb3RhbFVzZCksIDApIDogMFxyXG5cclxuICBjb25zdCB0b3RhbENhc2hGQyA9IGNhc2hGaWx0ZXJlZC5sZW5ndGggPiAwID8gY2FzaEZpbHRlcmVkLnJlZHVjZSgoYWNjLCByb3cpID0+IHsgcmV0dXJuIGFjYyArIHJvdy5hbW91bnQuZmlsdGVyKChyb3dzKSA9PiByb3dzLm5vdGU/LnRvTG93ZXJDYXNlKCkgPT09IFwicG9zXCIpLnJlZHVjZSgoc3VtLCBpdGVtKSA9PiBzdW0gKyBwYXJzZUZsb2F0KGl0ZW0uYW1vdW50RkMpLCAwKSB9LCAwKSA6IDBcclxuICBjb25zdCB0b3RhbENhc2hVU0QgPSBjYXNoRmlsdGVyZWQubGVuZ3RoID4gMCA/IGNhc2hGaWx0ZXJlZC5yZWR1Y2UoKGFjYywgcm93KSA9PiB7IHJldHVybiBhY2MgKyByb3cuYW1vdW50LmZpbHRlcigocm93cykgPT4gcm93cy5ub3RlPy50b0xvd2VyQ2FzZSgpID09PSBcInBvc1wiKS5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgcGFyc2VGbG9hdChpdGVtLmFtb3VudFVzZCksIDApIH0sIDApIDogMFxyXG5cclxuICBjb25zdCByZXR1cm5GQyA9IE51bWJlcih0b3RhbENhc2hGQykgKyBOdW1iZXIodG90YWxQb3NGQylcclxuICBjb25zdCByZXR1cm5VU0QgPSBOdW1iZXIodG90YWxDYXNoVVNEKSArIE51bWJlcih0b3RhbFBvc1VTRClcclxuXHJcblxyXG4gIGNvbnN0IGludm9pY2VGaWx0ZXJlZEJ5WWVhciA9IGludm9pY2UgPyBpbnZvaWNlLmZpbHRlcihpdGVtID0+IGRheWpzKGl0ZW0uaW52b2ljZURhdGUpLmZvcm1hdCgnWVlZWScpID09PSBkYXlqcyhkYXRlKS5mb3JtYXQoJ1lZWVknKSkgOiBbXTtcclxuXHJcbiAgY29uc3QgVG90YWxNb250aFBheW1lbnQgPSBpbnZvaWNlRmlsdGVyZWRCeVllYXIucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IG1vbnRoID0gZGF5anMoaXRlbS5pbnZvaWNlRGF0ZSkuZm9ybWF0KCdNTU1NJyk7XHJcbiAgICBjb25zdCB5ZWFyID0gZGF5anMoaXRlbS5pbnZvaWNlRGF0ZSkuZm9ybWF0KCdZWVlZJyk7XHJcbiAgICBpZiAoIWFjY1ttb250aF0pIHtcclxuICAgICAgYWNjW21vbnRoXSA9IHsgeWVhciwgbW9udGgsIGFtb3VudDogMCB9XHJcbiAgICB9XHJcbiAgICBhY2NbbW9udGhdLmFtb3VudCArPSBwYXJzZUZsb2F0KGl0ZW0uaW5mb1NlbGwpXHJcbiAgICByZXR1cm4gYWNjXHJcbiAgfSwge30pXHJcbiAgY29uc3QgbmV3TW9udGhBcnJheVBheW1lbnQgPSAoT2JqZWN0LmVudHJpZXMoVG90YWxNb250aFBheW1lbnQpLm1hcCgoW21vbnRoLCB0b3RhbF0pID0+ICh7XHJcbiAgICBtb250aDogdG90YWwubW9udGgsIHRvdGFsOiBwYXJzZUZsb2F0KHRvdGFsLmFtb3VudC50b0ZpeGVkKDIpKSwgeWVhcjogdG90YWwueWVhclxyXG4gIH0pKSlcclxuXHJcbiAgY29uc3Qgc29ydEFycmF5QnlNb250aFBheW1lbnQgPSBuZXdNb250aEFycmF5UGF5bWVudC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBtb250aHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxyXG4gICAgcmV0dXJuIG1vbnRocy5pbmRleE9mKGEubW9udGgpIC0gbW9udGhzLmluZGV4T2YoYi5tb250aClcclxuICB9KVxyXG4gIGNvbnN0IFRvdGFsTW9udGhQYXltZW50MSA9IGludm9pY2VGaWx0ZXJlZEJ5WWVhci5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbW9udGggPSBkYXlqcyhpdGVtLmludm9pY2VEYXRlKS5mb3JtYXQoJ01NTU0nKTtcclxuICAgIGNvbnN0IHllYXIgPSBkYXlqcyhpdGVtLmludm9pY2VEYXRlKS5mb3JtYXQoJ1lZWVknKTtcclxuICAgIGlmICghYWNjW21vbnRoXSkge1xyXG4gICAgICBhY2NbbW9udGhdID0geyB5ZWFyLCBtb250aCwgYW1vdW50OiAwIH1cclxuICAgIH1cclxuICAgIGFjY1ttb250aF0uYW1vdW50ICs9IHBhcnNlRmxvYXQoaXRlbS5pbmZvQ29zdClcclxuICAgIHJldHVybiBhY2NcclxuICB9LCB7fSlcclxuICBjb25zdCBuZXdNb250aEFycmF5UGF5bWVudDEgPSAoT2JqZWN0LmVudHJpZXMoVG90YWxNb250aFBheW1lbnQxKS5tYXAoKFttb250aCwgdG90YWxdKSA9PiAoe1xyXG4gICAgbW9udGg6IHRvdGFsLm1vbnRoLCB0b3RhbDogcGFyc2VGbG9hdCh0b3RhbC5hbW91bnQudG9GaXhlZCgyKSksIHllYXI6IHRvdGFsLnllYXJcclxuICB9KSkpXHJcblxyXG4gIGNvbnN0IHNvcnRBcnJheUJ5TW9udGhQYXltZW50MSA9IG5ld01vbnRoQXJyYXlQYXltZW50MS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICBjb25zdCBtb250aHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxyXG4gICAgcmV0dXJuIG1vbnRocy5pbmRleE9mKGEubW9udGgpIC0gbW9udGhzLmluZGV4T2YoYi5tb250aClcclxuICB9KVxyXG5cclxuICBjb25zdCBUb3RhbE1vbnRoRGFpbHlFeHBlbnNlcyA9IGludm9pY2VGaWx0ZXJlZEJ5WWVhci5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbW9udGggPSBkYXlqcyhpdGVtLmludm9pY2VEYXRlKS5mb3JtYXQoJ01NTU0nKTtcclxuICAgIGNvbnN0IHllYXIgPSBkYXlqcyhpdGVtLmludm9pY2VEYXRlKS5mb3JtYXQoJ1lZWVknKTtcclxuICAgIGlmICghYWNjW21vbnRoXSkge1xyXG4gICAgICBhY2NbbW9udGhdID0geyB5ZWFyLCBtb250aCwgdG90YWw6IDAgfVxyXG4gICAgfVxyXG4gICAgYWNjW21vbnRoXS50b3RhbCArPSBwYXJzZUZsb2F0KGl0ZW0uVGF4VVNkKVxyXG4gICAgcmV0dXJuIGFjY1xyXG4gIH0sIHt9KVxyXG5cclxuICBjb25zdCBuZXdNb250aEFycmF5RGFpbHlFeHBlbnNlcyA9IChPYmplY3QuZW50cmllcyhUb3RhbE1vbnRoRGFpbHlFeHBlbnNlcykubWFwKChbbW9udGgsIHRvdGFsXSkgPT4gKHtcclxuICAgIG1vbnRoOiB0b3RhbC5tb250aCwgdG90YWw6IHBhcnNlRmxvYXQodG90YWwudG90YWwudG9GaXhlZCgyKSksIHllYXI6IHRvdGFsLnllYXJcclxuICB9KSkpXHJcblxyXG4gIGNvbnN0IHNvcnRBcnJheUJ5TW9udGhEYWlseUV4cGVuc2VzID0gbmV3TW9udGhBcnJheURhaWx5RXhwZW5zZXMuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgY29uc3QgbW9udGhzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cclxuICAgIHJldHVybiBtb250aHMuaW5kZXhPZihhLm1vbnRoKSAtIG1vbnRocy5pbmRleE9mKGIubW9udGgpXHJcbiAgfSlcclxuICBjb25zdCBtb250aHNPZlllYXIgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxyXG5cclxuICBjb25zdCBub3JtYWxpemVTb3J0QXJyYXlCeU1vbnRoUGF5bWVudCA9IG1vbnRoc09mWWVhci5tYXAoKG1vdGgpID0+IHtcclxuICAgIGNvbnN0IHJlbGF0ZWQgPSBzb3J0QXJyYXlCeU1vbnRoUGF5bWVudC5maW5kKChyb3cpID0+IHJvdy5tb250aCA9PT0gbW90aClcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1vbnRoOiBtb3RoLFxyXG4gICAgICB0b3RhbDogcmVsYXRlZCA/IHJlbGF0ZWQudG90YWwgOiAwXHJcbiAgICB9XHJcbiAgfSlcclxuICBjb25zdCBub3JtYWxpemVTb3J0QXJyYXlCeU1vbnRoVG90YWxFeHBlbnNlc0FsbCA9IG1vbnRoc09mWWVhci5tYXAoKG1vdGgpID0+IHtcclxuICAgIGNvbnN0IHJlbGF0ZWQgPSBzb3J0QXJyYXlCeU1vbnRoRGFpbHlFeHBlbnNlcy5maW5kKChyb3cpID0+IHJvdy5tb250aCA9PT0gbW90aClcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1vbnRoOiBtb3RoLFxyXG4gICAgICB0b3RhbDogcmVsYXRlZCA/IHJlbGF0ZWQudG90YWwgOiAwXHJcbiAgICB9XHJcbiAgfSlcclxuICBjb25zdCB0b3RhbFJldmVudWUgPSBzb3J0QXJyYXlCeU1vbnRoUGF5bWVudC5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyByb3cudG90YWwsIDApXHJcbiAgY29uc3QgdG90YWxDb3N0ID0gc29ydEFycmF5QnlNb250aFBheW1lbnQxLnJlZHVjZSgoc3VtLCByb3cpID0+IHN1bSArIHJvdy50b3RhbCwgMClcclxuICBjb25zdCB0b3RhbERhaWx5RXhwZW5zZXMgPSBzb3J0QXJyYXlCeU1vbnRoRGFpbHlFeHBlbnNlcy5yZWR1Y2UoKHN1bSwgcm93KSA9PiBzdW0gKyByb3cudG90YWwsIDApXHJcbiAgY29uc3QgcGFsZXR0ZTEgPSBbJ2JsdWUnLCAncmVkJ107XHJcbiAgY29uc3QgW21vbnRoQWxsUmV2ZW51ZUV4cGVuc2VzLCBzZXRNb250aEFsbFJldmVudWVFeHBlbnNlc10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Nob3dJbmZvLCBzZXRTaG93SW5mb10gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBNb250aCA9IFwiTW9udGhcIlxyXG4gIGNvbnN0IEFsbCA9IFwiUmV2ZW51ZVwiXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSwgbW9udGhJKSA9PiB7XHJcbiAgICBzZXRTaG93SW5mbyhlKVxyXG4gICAgc2V0TW9udGhBbGxSZXZlbnVlRXhwZW5zZXMobW9udGhJLmF4aXNWYWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUE9TIFJlcG9ydFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGVTaG9wIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiAxIH19ID5cclxuXHJcbiAgICAgICAgICAgIDxCb3g+XHJcblxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxvYWRpbmdEYXRhID8gPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogJzEyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IDogKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNob3dJbmZvICE9PSAyID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkNvbnRleHQgdmFsdWU9e3ZhbHVlM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiTGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxhYiBBUEkgdGFicyBleGFtcGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAuTXVpVGFicy1pbmRpY2F0b3InOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYWlseSBSZXBvcnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5kYXRhLnJvbGUgPT09ICdDRU8nICYmICg8VGFiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1vbnRobHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmLk11aS1zZWxlY3RlZCc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAnJjpob3Zlcic6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJnY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemF0aW9uUHJvdmlkZXIgZGF0ZUFkYXB0ZXI9e0FkYXB0ZXJEYXlqc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGVtb0NvbnRhaW5lciBjb21wb25lbnRzPXtbJ0RhdGVQaWNrZXInLCAnRGF0ZVBpY2tlciddfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3N0YXJ0RGF0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRnJvbSBEYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhzdGFydERhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZGF0ZSkgPT4gc2V0U3RhcnREYXRlKGRhdGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD0nREQvTU0vWVlZWSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRGVtb0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xvY2FsaXphdGlvblByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAnbGVmdCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2hGaWx0ZXJlZC5tYXAoKHJvdykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsIGNvbG9yOiAnd2hpdGUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19IGNvbFNwYW49ezd9PkNhc2ggSW48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hbW91bnQuZmlsdGVyKChyb3dzKSA9PiByb3dzLm5vdGU/LnRvTG93ZXJDYXNlKCkgPT09IFwicG9zXCIpLm1hcCgocm93cykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93cy5pZFJvd30gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPiBGQyB7cm93cy5hbW91bnRGQ308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57cm93cy5yYXRlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPiR7cm93cy5hbW91bnRVc2QgIT09IHVuZGVmaW5lZCA/IHJvd3MuYW1vdW50VXNkIDogcm93cy50b3RhbH08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScsIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJywgY29sb3I6ICd3aGl0ZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gY29sU3Bhbj17N30+UE9TIERhaWx5IFNlbGw8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PiM8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+VXNlcjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5DdXN0b21lcjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5Ub3RhbCBGQzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5Ub3RhbCAkPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc0ZpbHRlcmVkLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtpdGVtLl9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUy17U3RyaW5nKGl0ZW0uZmFjdHVyZU51bWJlcikucGFkU3RhcnQoNiwgJzAnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLkNyZWF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmN1c3RvbWVyTmFtZSAhPT0gdW5kZWZpbmVkID8gaXRlbS5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5GQyA8L3NwYW4+e2l0ZW0uYW1vdW50VG90YWxGYz8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JCA8L3NwYW4+e2l0ZW0uYW1vdW50VG90YWxVc2Q/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScgfX0gY29sU3Bhbj17M30+UE9TIFJlY2VpdmVkIFRvdGFsPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgYm9yZGVyOiAnMXB4IHNvbGlkIGdyYXknLCB3aWR0aDogJzIwMHB4JywgdGV4dEFsaWduOiAnbGVmdCcgfX0gPjxzcGFuPkZDIDwvc3Bhbj48c3BhbiA+e2lzTmFOKHRvdGFsUG9zRkMpID8gMCA6IHRvdGFsUG9zRkMudG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScsIHdpZHRoOiAnMjAwcHgnIH19PjxzcGFuPiQgPC9zcGFuPjxzcGFuID57aXNOYU4odG90YWxQb3NVU0QpID8gMCA6IHRvdGFsUG9zVVNELnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5JyB9fSBjb2xTcGFuPXszfT5QT1MgQ2FzaCBPdXQgVG90YWw8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBzdHlsZT17eyBib3JkZXI6ICcxcHggc29saWQgZ3JheScsIHdpZHRoOiAnMjAwcHgnLCB0ZXh0QWxpZ246ICdsZWZ0JyB9fSA+PHNwYW4+RkMgPC9zcGFuPjxzcGFuID57aXNOYU4ocmV0dXJuRkMpID8gMCA6IHJldHVybkZDPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXt7IGJvcmRlcjogJzFweCBzb2xpZCBncmF5Jywgd2lkdGg6ICcyMDBweCcgfX0+PHNwYW4+JCA8L3NwYW4+PHNwYW4gPntpc05hTihyZXR1cm5VU0QpID8gMCA6IHJldHVyblVTRD8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCB2YWx1ZT1cIjJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogJzQwMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IHN0eWxlPXt7IGRpc3BsYXk6ICdibG9jaycgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXphdGlvblByb3ZpZGVyIGRhdGVBZGFwdGVyPXtBZGFwdGVyRGF5anN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERlbW9Db250YWluZXIgY29tcG9uZW50cz17WydEYXRlUGlja2VyJywgJ0RhdGVQaWNrZXInXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdkYXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXlqcyhkYXRlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGUpID0+IHNldERhdGUoZGF0ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PSdZWVlZJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXsnXCJ5ZWFyXCInfSB2aWV3cz17Wyd5ZWFyJ119XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RlbW9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Mb2NhbGl6YXRpb25Qcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgbGlzdFN0eWxlVHlwZTogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnMTBweCcsIGN1cnNvcjogJ3BvaW50ZXInIH19PiA8c3Bhbj48U3F1YXJlIHN0eWxlPXt7IGNvbG9yOiAnYmx1ZScgfX0gLz48L3NwYW4+IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnYmx1ZScgfX0+VG90YWwgU2FsZXM6ICQge3RvdGFsUmV2ZW51ZT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiAnMTBweCcsIGN1cnNvcjogJ3BvaW50ZXInIH19PiA8c3Bhbj48U3F1YXJlIHN0eWxlPXt7IGNvbG9yOiAnT3JhbmdlJyB9fSAvPjwvc3Bhbj4gPHNwYW4gc3R5bGU9e3sgY29sb3I6ICdPcmFuZ2UnIH19Pkl0ZW0gQ29zdDogJCB7dG90YWxDb3N0Py50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxMHB4JywgY3Vyc29yOiAncG9pbnRlcicgfX0+IDxzcGFuPjxTcXVhcmUgc3R5bGU9e3sgY29sb3I6ICdncmVlbicgfX0gLz48L3NwYW4+IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nIH19Pk5ldCBQcm9maXQ6ICQgeyh0b3RhbFJldmVudWUgLSB0b3RhbENvc3QpPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJyl9PC9zcGFuPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6ICcxMHB4JywgY3Vyc29yOiAncG9pbnRlcicgfX0+IDxzcGFuPjxTcXVhcmUgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19IC8+PC9zcGFuPiA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+VGF4OiAkIHt0b3RhbERhaWx5RXhwZW5zZXM/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX08L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICczMDBweCcsIGNvbG9yOiAnd2hpdGUnLCBib3hTaGFkb3c6ICcxcHggMXB4IDJyZW0gcmdiYSgwLCAwLCAwLCAwLjMpJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluZUNoYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcmllcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRhdGE6IG5vcm1hbGl6ZVNvcnRBcnJheUJ5TW9udGhQYXltZW50Lm1hcCgocm93KSA9PiByb3cudG90YWwpLCBsYWJlbDogJ0luY29tZScsIGlkOiAndXZJZCcgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBkYXRhOiBub3JtYWxpemVTb3J0QXJyYXlCeU1vbnRoVG90YWxFeHBlbnNlc0FsbC5tYXAoKHJvdykgPT4gcm93LnRvdGFsKSwgbGFiZWw6ICdUYXgnLCBpZDogJ3B2SWQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeEF4aXM9e1t7IHNjYWxlVHlwZTogJ3BvaW50JywgZGF0YTogbW9udGhzT2ZZZWFyLCBzdHJva2U6ICcjZmZmJyB9XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9ycz17cGFsZXR0ZTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkF4aXNDbGljaz17KGUsIG1vbnRoc09mWWVhcikgPT4gaGFuZGxlQ2xpY2soMiwgbW9udGhzT2ZZZWFyKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiQ29udGV4dD4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JywgbWFyZ2luOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2Ugb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soMSwgJycpfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3NSZXBvcnRJbnZvaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vbnRoPXttb250aEFsbFJldmVudWVFeHBlbnNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW52b2ljZT17aW52b2ljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW9udGhPcHRpb249e01vbnRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT25BbGxTZWxlY3Rpb249e0FsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcG9ydFBvc1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIlNpZGVTaG9wIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIlZpc2liaWxpdHlJY29uIiwiRWRpdEljb24iLCJEZWxldGVJY29uIiwiTmF2TGluayIsInVzZU5hdmlnYXRlIiwiVGFibGUiLCJJY29uQnV0dG9uIiwic3R5bGVkIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJDaGVja2JveCIsIlRhYmxlQ29udGFpbmVyIiwiUGFwZXIiLCJUeXBvZ3JhcGh5IiwiTW9kYWwiLCJCb3giLCJHcmlkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiTWVudUl0ZW0iLCJCYWNrZHJvcCIsIkF1dG9jb21wbGV0ZSIsIlRleHRGaWVsZCIsIlRhYiIsIkNhcmQiLCJDYXJkQ29udGVudCIsIkNhcmRIZWFkZXIiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiVGFiQ29udGV4dCIsIlRhYkxpc3QiLCJUYWJQYW5lbCIsIkJhZGdlIiwiRGl2aWRlciIsIkNvbnRhaW5lciIsIkxpbmsiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJBZGQiLCJDbG9zZSIsIk1haWxPdXRsaW5lIiwiUGVyc29uMk91dGxpbmVkIiwiUGVyc29uT2ZmUm91bmRlZCIsIlByaW50IiwiU3F1YXJlIiwiZGF5anMiLCJMb2FkZXIiLCJDaGVja0NpcmNsZUljb24iLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwibG9nT3V0Iiwic2VsZWN0Q3VycmVudFVzZXIiLCJzZXRVc2VyIiwiTG9nb3V0IiwiSW1hZ2UiLCJEYXRhR3JpZCIsIkdyaWRUb29sYmFyIiwiTWVzc2FnZUFkbWluVmlldyIsIkxpbmVDaGFydCIsIkxpbmVQbG90IiwiTWFya1Bsb3QiLCJsaW5lRWxlbWVudENsYXNzZXMiLCJtYXJrRWxlbWVudENsYXNzZXMiLCJOb3RpZmljYXRpb25WSWV3SW5mbyIsInVzZVJlYWN0VG9QcmludCIsIkRhdGVQaWNrZXIiLCJMb2NhbGl6YXRpb25Qcm92aWRlciIsIkRlbW9Db250YWluZXIiLCJBZGFwdGVyRGF5anMiLCJQb3NSZXBvcnRJbnZvaWNlIiwiRGVsZXRlVG9vbHRpcCIsIl9yZWYiLCJjbGFzc05hbWUiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzZXMiLCJwb3BwZXIiLCJfcmVmMiIsInRoZW1lIiwiY29uY2F0IiwidG9vbHRpcCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImZvbnRTaXplIiwiRWRpdFRvb2x0aXAiLCJfcmVmMyIsIl9leGNsdWRlZDIiLCJfcmVmNCIsIlZpZXdUb29sdGlwIiwiX3JlZjUiLCJfZXhjbHVkZWQzIiwiX3JlZjYiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInRyYW5zZm9ybSIsIndpZHRoIiwiYmdjb2xvciIsInB0IiwicHgiLCJwYiIsImRyYXdlcldpZHRoIiwiQXBwQmFyIiwic2hvdWxkRm9yd2FyZFByb3AiLCJwcm9wIiwiX3JlZjciLCJvcGVuIiwiX29iamVjdFNwcmVhZCIsInpJbmRleCIsImRyYXdlciIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImVhc2luZyIsInNoYXJwIiwiZHVyYXRpb24iLCJsZWF2aW5nU2NyZWVuIiwibWFyZ2luTGVmdCIsImVudGVyaW5nU2NyZWVuIiwiRHJhd2VyIiwiX3JlZjgiLCJ3aGl0ZVNwYWNlIiwiYm94U2l6aW5nIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJSZXBvcnRQb3MiLCJfcmVmMTYiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmOSIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiaWQiLCJfaWQiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJncmFudEFjY2VzcyIsInNldEdyYW50QWNjZXNzIiwiZmV0Y2hOdW1iZXIiLCJfcmVmMCIsIl9yZXMkZGF0YSIsImZpbHRlciIsInJvdyIsInVzZXJJRCIsIm1hcCIsIm1vZHVsZXMiLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsInZhbHVlMyIsInNldFZhbHVlMyIsInJlc3VsdCIsImhhbmRsZUNoYW5nZTMiLCJldmVudCIsIm5ld1ZhbHVlIiwiY2hhbmdlVmFsdWUiLCJzZXRJdGVtIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJsb2FkaW5nRGF0YSIsInNldExvYWRpbmdEYXRhIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJpbnZvaWNlIiwic2V0SW52b2ljZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiY2FzaCIsInNldENhc2giLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsInBvc0ZpbHRlcmVkIiwic2V0UG9zRmlsdGVyZWQiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJjYXNoRmlsdGVyZWQiLCJzZXRDYXNoRmlsdGVyZWQiLCJfdXNlU3RhdGUxMSIsImRhdGUiLCJEYXRlIiwiX3VzZVN0YXRlMTIiLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJfdXNlU3RhdGUxMyIsImRhdGUxIiwiX3VzZVN0YXRlMTQiLCJzZXREYXRlIiwiZmV0Y2hEYXRhIiwiX3JlZjEiLCJmb3JtYXREYXRlIiwiaXRlbSIsImRhdGVGaWVsZCIsImludm9pY2VEYXRlIiwiZm9ybWF0IiwidGltZSIsImFtb3VudFRvdGFsRmMiLCJ0b3RhbEZDIiwiY3JlZGl0RkMiLCJhbW91bnRUb3RhbFVzZCIsInRvdGFsVVNEIiwiY3JlZGl0VXNkIiwiaW5mb1NlbGwiLCJNYXRoIiwicm91bmQiLCJ0b3RhbEludm9pY2UiLCJUb3RhbEFtb3VudFBhaWQiLCJ0YXgiLCJyYXRlIiwiaW5mb1NlbGxGQyIsIlRheFVTZCIsImluZm9Db3N0RkMiLCJpdGVtcyIsInJlZHVjZSIsInN1bSIsIklUZW0iLCJpdGVtUXR5IiwiaXRlbUNvc3QiLCJpbmZvQ29zdCIsInJldmVyc2UiLCJjYXNoUmVzcG9uc2UiLCJ0b3RhbEV4cGVuc2VzIiwiRXhwZW5zZXNEYXRlIiwiY2FzaERhdGUiLCJ0b3RhbFBvc0ZDIiwibGVuZ3RoIiwiYWNjIiwicGFyc2VGbG9hdCIsInRvdGFsUG9zVVNEIiwidG90YWxDYXNoRkMiLCJhbW91bnQiLCJyb3dzIiwiX3Jvd3Mkbm90ZSIsIm5vdGUiLCJ0b0xvd2VyQ2FzZSIsImFtb3VudEZDIiwidG90YWxDYXNoVVNEIiwiX3Jvd3Mkbm90ZTIiLCJhbW91bnRVc2QiLCJyZXR1cm5GQyIsIk51bWJlciIsInJldHVyblVTRCIsImludm9pY2VGaWx0ZXJlZEJ5WWVhciIsIlRvdGFsTW9udGhQYXltZW50IiwibW9udGgiLCJ5ZWFyIiwibmV3TW9udGhBcnJheVBheW1lbnQiLCJPYmplY3QiLCJlbnRyaWVzIiwiX3JlZjEwIiwiX3JlZjExIiwidG90YWwiLCJ0b0ZpeGVkIiwic29ydEFycmF5QnlNb250aFBheW1lbnQiLCJzb3J0IiwiYSIsImIiLCJtb250aHMiLCJpbmRleE9mIiwiVG90YWxNb250aFBheW1lbnQxIiwibmV3TW9udGhBcnJheVBheW1lbnQxIiwiX3JlZjEyIiwiX3JlZjEzIiwic29ydEFycmF5QnlNb250aFBheW1lbnQxIiwiVG90YWxNb250aERhaWx5RXhwZW5zZXMiLCJuZXdNb250aEFycmF5RGFpbHlFeHBlbnNlcyIsIl9yZWYxNCIsIl9yZWYxNSIsInNvcnRBcnJheUJ5TW9udGhEYWlseUV4cGVuc2VzIiwibW9udGhzT2ZZZWFyIiwibm9ybWFsaXplU29ydEFycmF5QnlNb250aFBheW1lbnQiLCJtb3RoIiwicmVsYXRlZCIsImZpbmQiLCJub3JtYWxpemVTb3J0QXJyYXlCeU1vbnRoVG90YWxFeHBlbnNlc0FsbCIsInRvdGFsUmV2ZW51ZSIsInRvdGFsQ29zdCIsInRvdGFsRGFpbHlFeHBlbnNlcyIsInBhbGV0dGUxIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsIm1vbnRoQWxsUmV2ZW51ZUV4cGVuc2VzIiwic2V0TW9udGhBbGxSZXZlbnVlRXhwZW5zZXMiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4Iiwic2hvd0luZm8iLCJzZXRTaG93SW5mbyIsIk1vbnRoIiwiQWxsIiwiaGFuZGxlQ2xpY2siLCJlIiwibW9udGhJIiwiYXhpc1ZhbHVlIiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwib25DbGljayIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93IiwibmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsInZhbHVlIiwib25DaGFuZ2UiLCJsYWJlbCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImRhdGVBZGFwdGVyIiwiY29tcG9uZW50cyIsInJlcXVpcmVkIiwiZmxvYXQiLCJrZXkiLCJ0ZXh0QWxpZ24iLCJjb2xTcGFuIiwiX3Jvd3Mkbm90ZTMiLCJpZFJvdyIsInVuZGVmaW5lZCIsIl9pdGVtJGFtb3VudFRvdGFsRmMiLCJfaXRlbSRhbW91bnRUb3RhbFVzZCIsIlN0cmluZyIsImZhY3R1cmVOdW1iZXIiLCJwYWRTdGFydCIsIkNyZWF0ZSIsImN1c3RvbWVyTmFtZSIsInJlcGxhY2UiLCJpc05hTiIsInZpZXdzIiwibGlzdFN0eWxlVHlwZSIsImdhcCIsImN1cnNvciIsInNlcmllcyIsInhBeGlzIiwic2NhbGVUeXBlIiwic3Ryb2tlIiwiY29sb3JzIiwib25BeGlzQ2xpY2siLCJtYXJnaW4iLCJvbk1vbnRoIiwib25JbnZvaWNlIiwib25Nb250aE9wdGlvbiIsIk9uQWxsU2VsZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==