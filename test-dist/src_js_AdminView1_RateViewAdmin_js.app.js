"use strict";
exports.id = "src_js_AdminView1_RateViewAdmin_js";
exports.ids = ["src_js_AdminView1_RateViewAdmin_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/esm/Add.js"
/*!*****************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Add.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ "./src/js/AdminView1/RateViewAdmin.js"
/*!********************************************!*\
  !*** ./src/js/AdminView1/RateViewAdmin.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../component/SidebarDashE2 */ "./src/js/component/SidebarDashE2.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
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





































var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__["default"].tooltip)]: {
      backgroundColor: '#202a5a',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_13__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_14__["default"].tooltip)]: {
      backgroundColor: 'gray',
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_18__["default"], {
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
function RateViewAdmin() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_28__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_24__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_24__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_27__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_27__.setUser)({
              userName: Name,
              role: Role,
              id: res.data.data._id
            }));
          } catch (error) {
            console.error('Error fetching data:', error);
            react_toastify__WEBPACK_IMPORTED_MODULE_41__.toast.error('Failed to fetch user data.');
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_27__.logOut)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    rate = _useState2[0],
    setRate = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    rateReturned = _useState4[0],
    setRateReturned = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    PayRate = _useState6[0],
    setPayRate = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    category = _useState8[0],
    setCategory = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    cash = _useState0[0],
    setCash = _useState0[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/rate"));
          setRate(res.data.data);
          var resReturn = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/rateReturn"));
          setRateReturned(resReturn.data.data);
          localStorage.setItem('Rate', JSON.stringify(res.data.data));
          var resRatePayment = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/paymentRate"));
          setPayRate(resRatePayment.data.data);
          localStorage.setItem('PaymentRate', JSON.stringify(resRatePayment.data.data));

          // Save POS Category to State and LocalStorage
          var resCategory = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/expensesCategory"));
          var formatDate = resCategory.data.data.map((item, i) => _objectSpread(_objectSpread({}, item), {}, {
            id: item._id,
            number: i + 1
          }));
          localStorage.setItem('Category', JSON.stringify(resCategory.data.data));
          setCategory(formatDate);
          var resCash = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/cash"));
          var formatDate1 = resCash.data.data.map(item => _objectSpread(_objectSpread({}, item), {}, {
            id: item._id,
            dataField: dayjs__WEBPACK_IMPORTED_MODULE_38___default()(item.cashDate).format('DD/MM/YYYY')
          }));
          localStorage.setItem('Cash', JSON.stringify(resCash.data.data));
          setCash(formatDate1.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
          react_toastify__WEBPACK_IMPORTED_MODULE_41__.toast.error('Connection error.');
        }
      });
      return function fetchData() {
        return _ref8.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = _slicedToArray(_useState1, 2),
    selectedRows = _useState10[0],
    setSelectedRows = _useState10[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    filterModel = _React$useState4[0],
    setFilterModel = _React$useState4[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState12 = _slicedToArray(_useState11, 2),
    columnVisibilityModel = _useState12[0],
    setColumnVisibilityModel = _useState12[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsDailyExpensesCategory', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    setFilterModel(newModel);
    localStorage.setItem('QuickFilterDailyExpensesCategoryTst', JSON.stringify(newModel));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterDailyExpensesCategoryTst'));
    if (storedQuick) {
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsDailyExpensesCategory'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, []);
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    open1 = _useState14[0],
    setOpen1 = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState16 = _slicedToArray(_useState15, 2),
    updateId = _useState16[0],
    setUpdateId = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    open3 = _useState18[0],
    setOpen3 = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    updateId1 = _useState20[0],
    setUpdateId1 = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    open2 = _useState22[0],
    setOpen2 = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState24 = _slicedToArray(_useState23, 2),
    updateIdRate = _useState24[0],
    setUpdateIdRate = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState26 = _slicedToArray(_useState25, 2),
    updateRate = _useState26[0],
    setUpdateRate = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState28 = _slicedToArray(_useState27, 2),
    updateRateReturn = _useState28[0],
    setUpdateRateReturn = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState30 = _slicedToArray(_useState29, 2),
    updatePaymentRate = _useState30[0],
    setUpdatePaymentRate = _useState30[1];
  var handleOpenUpdate = id => {
    setOpen1(true);
    setUpdateId(id);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
    setUpdateId(null);
  };
  var handleOpenUpdateReturn = id => {
    setOpen3(true);
    setUpdateId1(id);
  };
  var handleCloseUpdateReturn = () => {
    setOpen3(false);
    setUpdateId1(null);
  };
  var handleOpenUpdatePayment = id => {
    setOpen2(true);
    setUpdateIdRate(id);
  };
  var handleCloseUpdatePayment = () => {
    setOpen2(false);
    setUpdateIdRate(null);
  };
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    loading = _useState32[0],
    setLoading = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    loadingOpenModal = _useState34[0],
    setLoadingOpenModal = _useState34[1];
  {/** Loading Update View Start */}
  var handleOpenLoading = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    handleCloseUpdate();
    handleCloseUpdatePayment();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleCloseLoading = () => {
    window.location.reload();
  };
  {/** Loading Update View End */}

  /** Start of Getting All Rate */
  ;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchRateId = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (updateId !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/get-rate/").concat(updateId));
            setUpdateRate(res.data.data.rate);
          } catch (error) {
            console.error('Error fetching data:', error);
            react_toastify__WEBPACK_IMPORTED_MODULE_41__.toast.error('Error fetching rate.');
          }
        }
      });
      return function fetchRateId() {
        return _ref9.apply(this, arguments);
      };
    }();
    fetchRateId();
  }, [updateId]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchRateId = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        if (updateId1 !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/get-rateReturn/").concat(updateId1));
            setUpdateRateReturn(res.data.data.rateR);
          } catch (error) {
            console.error('Error fetching data:', error);
            react_toastify__WEBPACK_IMPORTED_MODULE_41__.toast.error('Error fetching rate.');
          }
        }
      });
      return function fetchRateId() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchRateId();
  }, [updateId1]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchPayId = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (updateIdRate !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/get-paymentRate/").concat(updateIdRate));
            setUpdatePaymentRate(res.data.data.paymentRate);
          } catch (error) {
            console.error('Error fetching data:', error);
            react_toastify__WEBPACK_IMPORTED_MODULE_41__.toast.error('Error fetching rate.');
          }
        }
      });
      return function fetchPayId() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchPayId();
  }, [updateIdRate]);
  /** End of Getting All Rate */
  /** Start of Updating All Rate */
  var handleSubmitUpdateStatus = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        rate: updateRate
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/update-rate/").concat(updateId), data);
        if (res) {
          handleOpenLoading();
        }
      } catch (error) {
        console.error('Error making POST request:', error);
        react_toastify__WEBPACK_IMPORTED_MODULE_41__.toast.error('Update failed.');
      }
    });
    return function handleSubmitUpdateStatus(_x) {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleSubmitUpdateStatusReturn = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        rateR: updateRateReturn
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/update-rateReturn/").concat(updateId1), data);
        if (res) {
          handleOpenLoading();
        }
      } catch (error) {
        console.error('Error making POST request:', error);
        react_toastify__WEBPACK_IMPORTED_MODULE_41__.toast.error('Update failed.');
      }
    });
    return function handleSubmitUpdateStatusReturn(_x2) {
      return _ref11.apply(this, arguments);
    };
  }();
  var handleSubmitUpdateStatusRate = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        paymentRate: updatePaymentRate
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_25__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_26__.ENDPOINT_URL, "/update-paymentRate/").concat(updateIdRate), data);
        if (res) {
          handleOpenLoading();
        }
      } catch (error) {
        console.error('Error making POST request:', error);
        react_toastify__WEBPACK_IMPORTED_MODULE_41__.toast.error('Update failed.');
      }
    });
    return function handleSubmitUpdateStatusRate(_x3) {
      return _ref12.apply(this, arguments);
    };
  }();
  /** End of Updating All Rate */
  var columns = [{
    field: 'number',
    headerName: '#',
    width: 150
  }, {
    field: 'expensesCategory',
    headerName: 'Category',
    width: 250
  }];
  var columns1 = [{
    field: 'cashNumber',
    headerName: '#',
    width: 80
  }, {
    field: 'dataField',
    headerName: 'Date',
    width: 100
  }, {
    field: 'status',
    headerName: 'Daily Status',
    width: 80
  }, {
    field: 'totalExpensesFC',
    headerName: 'A-ExpensesFC',
    width: 150,
    renderCell: params => {
      var _params$row$totalExpe;
      return "FC".concat(params.row.totalExpensesFC !== undefined ? (_params$row$totalExpe = params.row.totalExpensesFC) === null || _params$row$totalExpe === void 0 ? void 0 : _params$row$totalExpe.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0);
    }
  }, {
    field: 'totalExpensesUSD',
    headerName: 'A-Expenses$',
    width: 150,
    renderCell: params => {
      var _params$row$totalExpe2;
      return "$".concat(params.row.totalExpensesUSD !== undefined ? (_params$row$totalExpe2 = params.row.totalExpensesUSD) === null || _params$row$totalExpe2 === void 0 ? void 0 : _params$row$totalExpe2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0);
    }
  }, {
    field: 'totalPayrollUSD',
    headerName: 'A-PayRoll',
    width: 150,
    renderCell: params => {
      var _params$row$totalPayr;
      return "$".concat(params.row.totalPayrollUSD !== undefined ? (_params$row$totalPayr = params.row.totalPayrollUSD) === null || _params$row$totalPayr === void 0 ? void 0 : _params$row$totalPayr.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0);
    }
  }, {
    field: 'totalItemPurchaseUSD',
    headerName: 'A-ItemPurchase',
    width: 150,
    renderCell: params => {
      var _params$row$totalItem;
      return "$".concat(params.row.totalItemPurchaseUSD !== undefined ? (_params$row$totalItem = params.row.totalItemPurchaseUSD) === null || _params$row$totalItem === void 0 ? void 0 : _params$row$totalItem.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0);
    }
  }, {
    field: 'returnAmountFC',
    headerName: 'A-ReturnFC',
    width: 150,
    renderCell: params => {
      var _params$row$returnAmo;
      return "FC".concat(params.row.returnAmountFC !== undefined ? (_params$row$returnAmo = params.row.returnAmountFC) === null || _params$row$returnAmo === void 0 ? void 0 : _params$row$returnAmo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0);
    }
  }, {
    field: 'returnAmountUSD',
    headerName: 'A-Return$',
    width: 150,
    renderCell: params => {
      var _params$row$returnAmo2;
      return "$".concat(params.row.returnAmountUSD !== undefined ? (_params$row$returnAmo2 = params.row.returnAmountUSD) === null || _params$row$returnAmo2 === void 0 ? void 0 : _params$row$returnAmo2.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0);
    }
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_17__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_22__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_40__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_39__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_29__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: sideBar,
    onMouseEnter: () => setSideBar(true),
    onMouseLeave: () => setSideBar(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_23__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_20__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_19__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_31__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_21__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    style: {
      textAlign: 'center',
      padding: '10px'
    },
    spacing: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      width: '100%',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    style: {
      width: '100%',
      fontSize: '20px',
      marginTop: '16px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    colSpan: 3,
    style: {
      textAlign: 'center'
    }
  }, "Today's Rate"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, rate.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), " 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC"), " ", row.rate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
    title: "Edit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: () => handleOpenUpdate(row._id)
  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_36__["default"], {
    style: {
      color: 'gray'
    }
  }))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      width: '100%',
      marginBottom: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    style: {
      width: '100%',
      fontSize: '20px',
      marginTop: '16px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    colSpan: 3,
    style: {
      textAlign: 'center'
    }
  }, "POS Rate"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, rateReturned === null || rateReturned === void 0 ? void 0 : rateReturned.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), " 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC"), " ", row.rateR), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
    title: "Edit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: () => handleOpenUpdateReturn(row._id)
  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_36__["default"], {
    style: {
      color: 'gray'
    }
  }))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    style: {
      width: '100%',
      fontSize: '20px',
      marginTop: '16px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    colSpan: 3,
    style: {
      textAlign: 'center'
    }
  }, "Paying Rate"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, PayRate.map(row => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
    key: row._id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "$"), " 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "FC"), " ", row.paymentRate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
    title: "Edit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: () => handleOpenUpdatePayment(row._id)
  }, "  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_36__["default"], {
    style: {
      color: 'gray'
    }
  })))))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_8__["default"],
    sx: {
      width: '100%',
      height: '100%',
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 6,
    sx: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h6"
  }, "All Category")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 6,
    sx: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__["default"], {
    className: "btnCustomer",
    style: {
      fontSize: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      height: 450,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_37__.DataGrid, {
    rows: category,
    columns: columns,
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
    hideFooter: true,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: _mui_material__WEBPACK_IMPORTED_MODULE_8__["default"],
    sx: {
      width: '100%',
      height: '330px',
      padding: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_37__.DataGrid, {
    rows: cash,
    columns: columns1,
    hideFooter: true,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: open1,
    onClose: handleCloseUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Update Today's Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitUpdateStatus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: updateRate,
    name: "updateRate",
    onChange: e => setUpdateRate(e.target.value),
    label: "Rate",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Update")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: open2,
    onClose: handleCloseUpdatePayment,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleCloseUpdatePayment,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Update Paying Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitUpdateStatusRate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: updatePaymentRate,
    name: "updatePaymentRate",
    onChange: e => setUpdatePaymentRate(e.target.value),
    label: "Rate",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Update")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: open3,
    onClose: handleCloseUpdateReturn,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleCloseUpdateReturn,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Update POS Rate"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitUpdateStatusReturn
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    value: updateRateReturn,
    name: "updateRateReturn",
    onChange: e => setUpdateRateReturn(e.target.value),
    label: "Rate",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Update")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    open: loadingOpenModal,
    onClose: handleCloseLoading,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_10__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_34__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_35__["default"], {
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
    onClick: handleCloseLoading,
    className: "btnCustomer"
  }, "Close"))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RateViewAdmin);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUmF0ZVZpZXdBZG1pbl9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxTQUFTLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOVixDQUFtRDtBQUMvQjtBQUNnQztBQUNzQjtBQUNSO0FBQ3dKO0FBQzFKO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNJO0FBQ0k7QUFDVjtBQUNrQztBQUN4QjtBQUNjO0FBQ0k7QUFDWDtBQUM3QjtBQUNrQjtBQUNvQztBQUN4QjtBQUNSO0FBQ0c7QUFDSTtBQUM2QjtBQUMzQztBQUNxQjtBQUNkO0FBQ1M7QUFDRztBQUNsQztBQUN3QjtBQUNRO0FBQ25CO0FBRXZDLElBQU1rRSxXQUFXLEdBQUd6RCwwREFBTSxDQUFDMEQsSUFBQTtFQUFBLElBQUdDLFNBQVMsR0FBQUQsSUFBQSxDQUFUQyxTQUFTO0lBQUtDLEtBQUssR0FBQUMsd0JBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBQUEsb0JBQy9DdkUsMERBQUEsQ0FBQ3lCLDhEQUFPLEVBQUFnRCxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdDLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO0VBQUEsT0FBUTtJQUNqQixPQUFBQyxNQUFBLENBQU9wRCw4REFBYyxDQUFDcUQsT0FBTyxJQUFLO01BQ2hDQyxlQUFlLEVBQUUsU0FBUztNQUMxQkMsS0FBSyxFQUFFLE9BQU87TUFDZEMsU0FBUyxFQUFFTCxLQUFLLENBQUNNLE9BQU8sQ0FBQyxDQUFDLENBQUM7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c0RBQUs7SUFDSmlHLElBQUksRUFBRWtLLGdCQUFpQjtJQUN2Qm9GLE9BQU8sRUFBRWhGLGtCQUFtQjtJQUM1QndGLG9CQUFvQjtJQUNwQkMsaUJBQWlCLEVBQUVsVixzREFBUztJQUM1Qm1WLGFBQWEsRUFBRTtNQUNiQyxPQUFPLEVBQUU7SUFDWCxDQUFFO0lBQ0YsbUJBQWdCLG1CQUFtQjtJQUNuQyxvQkFBaUI7RUFBeUIsZ0JBRTFDelcsMERBQUEsQ0FBQ2tCLHFEQUFHO0lBQUN5UyxFQUFFLEVBQUFsTixhQUFBLENBQUFBLGFBQUEsS0FBT2hCLEtBQUs7TUFBRUssS0FBSyxFQUFFO0lBQUc7RUFBRyxHQUUvQndLLE9BQU8sZ0JBQUl0USwwREFBQSxDQUFDd0QsMERBQU0sTUFBRSxDQUFDLGdCQUVwQnhELDBEQUFBO0lBQUt5RixLQUFLLEVBQUU7TUFBRWdQLGNBQWMsRUFBRSxRQUFRO01BQUVTLFNBQVMsRUFBRTtJQUFTO0VBQUUsZ0JBQzVEbFYsMERBQUEseUJBQUdBLDBEQUFBLENBQUN5RCx3RUFBZTtJQUFDZ0MsS0FBSyxFQUFFO01BQUVSLEtBQUssRUFBRSxPQUFPO01BQUV5UCxNQUFNLEVBQUUsTUFBTTtNQUFFNU8sS0FBSyxFQUFFO0lBQU87RUFBRSxDQUFFLENBQUksQ0FBQyxlQUNwRjlGLDBEQUFBLGFBQUksMEJBQTRCLENBQUMsZUFDakNBLDBEQUFBO0lBQUt5RixLQUFLLEVBQUU7TUFBRW1PLE9BQU8sRUFBRSxNQUFNO01BQUU4QyxHQUFHLEVBQUUsTUFBTTtNQUFFakMsY0FBYyxFQUFFO0lBQVM7RUFBRSxnQkFDckV6VSwwREFBQTtJQUFRK1QsT0FBTyxFQUFFakQsa0JBQW1CO0lBQUMxTSxTQUFTLEVBQUM7RUFBYSxHQUFDLE9BRXJELENBQ0wsQ0FDRixDQUVKLENBQ0EsQ0FDSixDQUFDO0FBRVY7QUFFQSxpRUFBZXlELGFBQWEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9lc20vQWRkLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9SYXRlVmlld0FkbWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ6XCJcbn0pLCAnQWRkJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi92aWV3LmNzcyc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQWNjb3VudENpcmNsZSc7XHJcbmltcG9ydCB7IFRhYmxlLCBNb2RhbCwgSWNvbkJ1dHRvbiwgc3R5bGVkLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVIZWFkLCBUYWJsZVJvdywgQ2hlY2tib3gsIFRhYmxlQ29udGFpbmVyLCBQYXBlciwgVHlwb2dyYXBoeSwgQm94LCBBdXRvY29tcGxldGUsIFRleHRGaWVsZCwgQmFja2Ryb3AsIEdyaWQsIENhcmQsIENhcmRDb250ZW50IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XHJcbmltcG9ydCBDdXJyZW5jeUV4Y2hhbmdlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0N1cnJlbmN5RXhjaGFuZ2UnO1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NZW51JztcclxuaW1wb3J0IENoZXZyb25MZWZ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZXZyb25MZWZ0JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9ucyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCB1c2VOYXZpZ2F0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IFNpZGViYXJEYXNoIGZyb20gJy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaCc7XHJcbmltcG9ydCBTaWRlYmFyRGFzaEUyIGZyb20gJy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaEUyJztcclxuaW1wb3J0IHsgQWRkLCBDbG9zZSwgRHJhZ0luZGljYXRvclJvdW5kZWQsIE1haWxPdXRsaW5lIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgeyBEYXRhR3JpZCwgR3JpZFRvb2xiYXIgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcclxuaW1wb3J0IFZpc2liaWxpdHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVmlzaWJpbGl0eSc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IEVkaXRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5cclxuZnVuY3Rpb24gUmF0ZVZpZXdBZG1pbigpIHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUsIGlkOiByZXMuZGF0YS5kYXRhLl9pZCB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB1c2VyIGRhdGEuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcbiAgY29uc3QgW3JhdGUsIHNldFJhdGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyYXRlUmV0dXJuZWQsIHNldFJhdGVSZXR1cm5lZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW1BheVJhdGUsIHNldFBheVJhdGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjYXNoLCBzZXRDYXNoXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3JhdGVgKVxyXG4gICAgICAgIHNldFJhdGUocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzUmV0dXJuID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vcmF0ZVJldHVybmApXHJcbiAgICAgICAgc2V0UmF0ZVJldHVybmVkKHJlc1JldHVybi5kYXRhLmRhdGEpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdSYXRlJywgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEuZGF0YSkpXHJcbiAgICAgICAgY29uc3QgcmVzUmF0ZVBheW1lbnQgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9wYXltZW50UmF0ZWApXHJcbiAgICAgICAgc2V0UGF5UmF0ZShyZXNSYXRlUGF5bWVudC5kYXRhLmRhdGEpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdQYXltZW50UmF0ZScsIEpTT04uc3RyaW5naWZ5KHJlc1JhdGVQYXltZW50LmRhdGEuZGF0YSkpXHJcblxyXG4gICAgICAgIC8vIFNhdmUgUE9TIENhdGVnb3J5IHRvIFN0YXRlIGFuZCBMb2NhbFN0b3JhZ2VcclxuICAgICAgICBjb25zdCByZXNDYXRlZ29yeSA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2V4cGVuc2VzQ2F0ZWdvcnlgKVxyXG4gICAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSByZXNDYXRlZ29yeS5kYXRhLmRhdGEubWFwKChpdGVtLCBpKSA9PiAoe1xyXG4gICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgIGlkOiBpdGVtLl9pZCxcclxuICAgICAgICAgIG51bWJlcjogaSArIDFcclxuICAgICAgICB9KSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnQ2F0ZWdvcnknLCBKU09OLnN0cmluZ2lmeShyZXNDYXRlZ29yeS5kYXRhLmRhdGEpKVxyXG4gICAgICAgIHNldENhdGVnb3J5KGZvcm1hdERhdGUpO1xyXG4gICAgICAgIGNvbnN0IHJlc0Nhc2ggPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9jYXNoYClcclxuICAgICAgICBjb25zdCBmb3JtYXREYXRlMSA9IHJlc0Nhc2guZGF0YS5kYXRhLm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICBpZDogaXRlbS5faWQsXHJcbiAgICAgICAgICBkYXRhRmllbGQ6IGRheWpzKGl0ZW0uY2FzaERhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0Nhc2gnLCBKU09OLnN0cmluZ2lmeShyZXNDYXNoLmRhdGEuZGF0YSkpXHJcbiAgICAgICAgc2V0Q2FzaChmb3JtYXREYXRlMS5yZXZlcnNlKCkpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoJ0Nvbm5lY3Rpb24gZXJyb3IuJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpXHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFJvd3MsIHNldFNlbGVjdGVkUm93c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2ZpbHRlck1vZGVsLCBzZXRGaWx0ZXJNb2RlbF0gPSBSZWFjdC51c2VTdGF0ZSh7XHJcbiAgICBpdGVtczogW10sXHJcbiAgICBxdWlja0ZpbHRlckV4Y2x1ZGVIaWRkZW5Db2x1bW5zOiB0cnVlLFxyXG4gICAgcXVpY2tGaWx0ZXJWYWx1ZXM6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjb2x1bW5WaXNpYmlsaXR5TW9kZWwsIHNldENvbHVtblZpc2liaWxpdHlNb2RlbF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgaGFuZGVsSGlkZGVuQ29sdW1uID0gKG5ld0hpZGRlbikgPT4ge1xyXG4gICAgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsKG5ld0hpZGRlbilcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdIaWRkZW5Db2x1bW5zRGFpbHlFeHBlbnNlc0NhdGVnb3J5JywgSlNPTi5zdHJpbmdpZnkobmV3SGlkZGVuKSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRmlsdGVyID0gKG5ld01vZGVsKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJNb2RlbChuZXdNb2RlbClcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdRdWlja0ZpbHRlckRhaWx5RXhwZW5zZXNDYXRlZ29yeVRzdCcsIEpTT04uc3RyaW5naWZ5KG5ld01vZGVsKSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFF1aWNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUXVpY2tGaWx0ZXJEYWlseUV4cGVuc2VzQ2F0ZWdvcnlUc3QnKSlcclxuICAgIGlmIChzdG9yZWRRdWljaykge1xyXG4gICAgICBzZXRGaWx0ZXJNb2RlbChzdG9yZWRRdWljaylcclxuICAgIH1cclxuICAgIGNvbnN0IHN0b3JlZENvbHVtbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdIaWRkZW5Db2x1bW5zRGFpbHlFeHBlbnNlc0NhdGVnb3J5JykpXHJcbiAgICBpZiAoc3RvcmVkQ29sdW1ucykge1xyXG4gICAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwoc3RvcmVkQ29sdW1ucylcclxuICAgIH1cclxuXHJcbiAgfSwgW10pXHJcbiAgY29uc3QgW29wZW4xLCBzZXRPcGVuMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwZGF0ZUlkLCBzZXRVcGRhdGVJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbb3BlbjMsIHNldE9wZW4zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXBkYXRlSWQxLCBzZXRVcGRhdGVJZDFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29wZW4yLCBzZXRPcGVuMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwZGF0ZUlkUmF0ZSwgc2V0VXBkYXRlSWRSYXRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt1cGRhdGVSYXRlLCBzZXRVcGRhdGVSYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1cGRhdGVSYXRlUmV0dXJuLCBzZXRVcGRhdGVSYXRlUmV0dXJuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1cGRhdGVQYXltZW50UmF0ZSwgc2V0VXBkYXRlUGF5bWVudFJhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5VcGRhdGUgPSAoaWQpID0+IHtcclxuICAgIHNldE9wZW4xKHRydWUpO1xyXG4gICAgc2V0VXBkYXRlSWQoaWQpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgICBzZXRVcGRhdGVJZChudWxsKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5VcGRhdGVSZXR1cm4gPSAoaWQpID0+IHtcclxuICAgIHNldE9wZW4zKHRydWUpO1xyXG4gICAgc2V0VXBkYXRlSWQxKGlkKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlVXBkYXRlUmV0dXJuID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbjMoZmFsc2UpO1xyXG4gICAgc2V0VXBkYXRlSWQxKG51bGwpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZVBheW1lbnQgPSAoaWQpID0+IHtcclxuICAgIHNldE9wZW4yKHRydWUpO1xyXG4gICAgc2V0VXBkYXRlSWRSYXRlKGlkKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlVXBkYXRlUGF5bWVudCA9ICgpID0+IHtcclxuICAgIHNldE9wZW4yKGZhbHNlKTtcclxuICAgIHNldFVwZGF0ZUlkUmF0ZShudWxsKTtcclxuICB9O1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgey8qKiBMb2FkaW5nIFVwZGF0ZSBWaWV3IFN0YXJ0ICovIH1cclxuICBjb25zdCBoYW5kbGVPcGVuTG9hZGluZyA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgaGFuZGxlQ2xvc2VVcGRhdGUoKTtcclxuICAgIGhhbmRsZUNsb3NlVXBkYXRlUGF5bWVudCgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG4gIHsvKiogTG9hZGluZyBVcGRhdGUgVmlldyBFbmQgKi8gfVxyXG5cclxuICAvKiogU3RhcnQgb2YgR2V0dGluZyBBbGwgUmF0ZSAqL1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFJhdGVJZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHVwZGF0ZUlkICE9PSBudWxsKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1yYXRlLyR7dXBkYXRlSWR9YClcclxuICAgICAgICAgIHNldFVwZGF0ZVJhdGUocmVzLmRhdGEuZGF0YS5yYXRlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcmF0ZS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoUmF0ZUlkKClcclxuICB9LCBbdXBkYXRlSWRdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFJhdGVJZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHVwZGF0ZUlkMSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtcmF0ZVJldHVybi8ke3VwZGF0ZUlkMX1gKVxyXG4gICAgICAgICAgc2V0VXBkYXRlUmF0ZVJldHVybihyZXMuZGF0YS5kYXRhLnJhdGVSKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcmF0ZS4nKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoUmF0ZUlkKClcclxuICB9LCBbdXBkYXRlSWQxXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQYXlJZCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHVwZGF0ZUlkUmF0ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtcGF5bWVudFJhdGUvJHt1cGRhdGVJZFJhdGV9YClcclxuICAgICAgICAgIHNldFVwZGF0ZVBheW1lbnRSYXRlKHJlcy5kYXRhLmRhdGEucGF5bWVudFJhdGUpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgIHRvYXN0LmVycm9yKCdFcnJvciBmZXRjaGluZyByYXRlLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hQYXlJZCgpXHJcbiAgfSwgW3VwZGF0ZUlkUmF0ZV0pO1xyXG4gIC8qKiBFbmQgb2YgR2V0dGluZyBBbGwgUmF0ZSAqL1xyXG4gIC8qKiBTdGFydCBvZiBVcGRhdGluZyBBbGwgUmF0ZSAqL1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdFVwZGF0ZVN0YXR1cyA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICByYXRlOiB1cGRhdGVSYXRlXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLXJhdGUvJHt1cGRhdGVJZH1gLCBkYXRhKVxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaGFuZGxlT3BlbkxvYWRpbmcoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWFraW5nIFBPU1QgcmVxdWVzdDonLCBlcnJvcik7XHJcbiAgICAgIHRvYXN0LmVycm9yKCdVcGRhdGUgZmFpbGVkLicpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTdWJtaXRVcGRhdGVTdGF0dXNSZXR1cm4gPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgcmF0ZVI6IHVwZGF0ZVJhdGVSZXR1cm5cclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtcmF0ZVJldHVybi8ke3VwZGF0ZUlkMX1gLCBkYXRhKVxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaGFuZGxlT3BlbkxvYWRpbmcoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWFraW5nIFBPU1QgcmVxdWVzdDonLCBlcnJvcik7XHJcbiAgICAgIHRvYXN0LmVycm9yKCdVcGRhdGUgZmFpbGVkLicpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVTdWJtaXRVcGRhdGVTdGF0dXNSYXRlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHBheW1lbnRSYXRlOiB1cGRhdGVQYXltZW50UmF0ZVxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1wYXltZW50UmF0ZS8ke3VwZGF0ZUlkUmF0ZX1gLCBkYXRhKVxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaGFuZGxlT3BlbkxvYWRpbmcoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWFraW5nIFBPU1QgcmVxdWVzdDonLCBlcnJvcik7XHJcbiAgICAgIHRvYXN0LmVycm9yKCdVcGRhdGUgZmFpbGVkLicpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKiogRW5kIG9mIFVwZGF0aW5nIEFsbCBSYXRlICovXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHsgZmllbGQ6ICdudW1iZXInLCBoZWFkZXJOYW1lOiAnIycsIHdpZHRoOiAxNTAgfSxcclxuICAgIHsgZmllbGQ6ICdleHBlbnNlc0NhdGVnb3J5JywgaGVhZGVyTmFtZTogJ0NhdGVnb3J5Jywgd2lkdGg6IDI1MCB9XHJcbiAgXVxyXG4gIGNvbnN0IGNvbHVtbnMxID0gW1xyXG4gICAgeyBmaWVsZDogJ2Nhc2hOdW1iZXInLCBoZWFkZXJOYW1lOiAnIycsIHdpZHRoOiA4MCB9LFxyXG4gICAgeyBmaWVsZDogJ2RhdGFGaWVsZCcsIGhlYWRlck5hbWU6ICdEYXRlJywgd2lkdGg6IDEwMCB9LFxyXG4gICAgeyBmaWVsZDogJ3N0YXR1cycsIGhlYWRlck5hbWU6ICdEYWlseSBTdGF0dXMnLCB3aWR0aDogODAgfSxcclxuICAgIHsgZmllbGQ6ICd0b3RhbEV4cGVuc2VzRkMnLCBoZWFkZXJOYW1lOiAnQS1FeHBlbnNlc0ZDJywgd2lkdGg6IDE1MCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gYEZDJHtwYXJhbXMucm93LnRvdGFsRXhwZW5zZXNGQyAhPT0gdW5kZWZpbmVkID8gcGFyYW1zLnJvdy50b3RhbEV4cGVuc2VzRkM/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9YCB9LFxyXG4gICAgeyBmaWVsZDogJ3RvdGFsRXhwZW5zZXNVU0QnLCBoZWFkZXJOYW1lOiAnQS1FeHBlbnNlcyQnLCB3aWR0aDogMTUwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiBgJCR7cGFyYW1zLnJvdy50b3RhbEV4cGVuc2VzVVNEICE9PSB1bmRlZmluZWQgPyBwYXJhbXMucm93LnRvdGFsRXhwZW5zZXNVU0Q/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKSA6IDB9YCB9LFxyXG4gICAgeyBmaWVsZDogJ3RvdGFsUGF5cm9sbFVTRCcsIGhlYWRlck5hbWU6ICdBLVBheVJvbGwnLCB3aWR0aDogMTUwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiBgJCR7cGFyYW1zLnJvdy50b3RhbFBheXJvbGxVU0QgIT09IHVuZGVmaW5lZCA/IHBhcmFtcy5yb3cudG90YWxQYXlyb2xsVVNEPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfWAgfSxcclxuICAgIHsgZmllbGQ6ICd0b3RhbEl0ZW1QdXJjaGFzZVVTRCcsIGhlYWRlck5hbWU6ICdBLUl0ZW1QdXJjaGFzZScsIHdpZHRoOiAxNTAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IGAkJHtwYXJhbXMucm93LnRvdGFsSXRlbVB1cmNoYXNlVVNEICE9PSB1bmRlZmluZWQgPyBwYXJhbXMucm93LnRvdGFsSXRlbVB1cmNoYXNlVVNEPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfWAgfSxcclxuICAgIHsgZmllbGQ6ICdyZXR1cm5BbW91bnRGQycsIGhlYWRlck5hbWU6ICdBLVJldHVybkZDJywgd2lkdGg6IDE1MCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gYEZDJHtwYXJhbXMucm93LnJldHVybkFtb3VudEZDICE9PSB1bmRlZmluZWQgPyBwYXJhbXMucm93LnJldHVybkFtb3VudEZDPy50b0ZpeGVkKDIpLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csICcsJykgOiAwfWAgfSxcclxuICAgIHsgZmllbGQ6ICdyZXR1cm5BbW91bnRVU0QnLCBoZWFkZXJOYW1lOiAnQS1SZXR1cm4kJywgd2lkdGg6IDE1MCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gYCQke3BhcmFtcy5yb3cucmV0dXJuQW1vdW50VVNEICE9PSB1bmRlZmluZWQgPyBwYXJhbXMucm93LnJldHVybkFtb3VudFVTRD8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpIDogMH1gIH0sXHJcbiAgXVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBSYXRlXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPE5vdGlmaWNhdGlvblZJZXdJbmZvIC8+XHJcbiAgICAgICAgICAgIDxNZXNzYWdlQWRtaW5WaWV3IG5hbWU9e3VzZXIuZGF0YS51c2VyTmFtZX0gcm9sZT17dXNlci5kYXRhLnJvbGV9IC8+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgPExvZ291dCBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgICAgPERyYXdlciB2YXJpYW50PVwicGVybWFuZW50XCIgb3Blbj17c2lkZUJhcn0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRTaWRlQmFyKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHNldFNpZGVCYXIoZmFsc2UpfT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgICAgIHB4OiBbMV0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn0+XHJcbiAgICAgICAgICAgICAgPENoZXZyb25MZWZ0SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgPExpc3Qgc3g9e3sgaGVpZ2h0OiAnNzAwcHgnIH19PlxyXG4gICAgICAgICAgICA8U2lkZWJhckRhc2hFMiAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogMSB9fSA+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBwYWRkaW5nOiAnMTBweCcgfX0gc3BhY2luZz17MX0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBmb250U2l6ZTogJzIwcHgnLCBtYXJnaW5Ub3A6ICcxNnB4JywgbWFyZ2luQm90dG9tOiAnMTZweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17M30gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5Ub2RheSdzIFJhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JhdGUubWFwKChyb3cpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17cm93Ll9pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4+JDwvc3Bhbj4gMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgPjxzcGFuPkZDPC9zcGFuPiB7cm93LnJhdGV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48RWRpdFRvb2x0aXAgdGl0bGU9XCJFZGl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5VcGRhdGUocm93Ll9pZCl9PiAgPEVkaXRJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRWRpdFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyB3aWR0aDogJzEwMCUnLCBtYXJnaW5Cb3R0b206ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBmb250U2l6ZTogJzIwcHgnLCBtYXJnaW5Ub3A6ICcxNnB4JywgbWFyZ2luQm90dG9tOiAnMTZweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sU3Bhbj17M30gc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5QT1MgUmF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmF0ZVJldHVybmVkPy5tYXAoKHJvdykgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtyb3cuX2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48c3Bhbj4kPC9zcGFuPiAxPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+PHNwYW4+RkM8L3NwYW4+IHtyb3cucmF0ZVJ9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48RWRpdFRvb2x0aXAgdGl0bGU9XCJFZGl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5VcGRhdGVSZXR1cm4ocm93Ll9pZCl9PiAgPEVkaXRJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRWRpdFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGZvbnRTaXplOiAnMjBweCcsIG1hcmdpblRvcDogJzE2cHgnLCBtYXJnaW5Cb3R0b206ICcxNnB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xTcGFuPXszfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlBheWluZyBSYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtQYXlSYXRlLm1hcCgocm93KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e3Jvdy5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxzcGFuPiQ8L3NwYW4+IDE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkID48c3Bhbj5GQzwvc3Bhbj4ge3Jvdy5wYXltZW50UmF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxFZGl0VG9vbHRpcCB0aXRsZT1cIkVkaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3BlblVwZGF0ZVBheW1lbnQocm93Ll9pZCl9PiAgPEVkaXRJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRWRpdFRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9e1BhcGVyfSBzeD17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgcGFkZGluZzogJzIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHN4PXt7IHRleHRBbGlnbjogJ2xlZnQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDYnPkFsbCBDYXRlZ29yeTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc3g9e3sgdGV4dEFsaWduOiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEFkZCBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyBmb250U2l6ZTogJzQwcHgnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiA0NTAsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRhR3JpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uUm93U2VsZWN0aW9uTW9kZWxDaGFuZ2U9eyhuZXdTZWxlY3Rpb24pID0+IHNldFNlbGVjdGVkUm93cyhuZXdTZWxlY3Rpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVGb290ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHBhZGRpbmc6ICcxMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEJveCBjb21wb25lbnQ9e1BhcGVyfSBzeD17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICczMzBweCcsIHBhZGRpbmc6ICcyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPERhdGFHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17Y2FzaH1cclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zMX1cclxuICAgICAgICAgICAgICAgICAgICBoaWRlRm9vdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBwYWRkaW5nOiAnMTBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuMX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVVwZGF0ZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICBVcGRhdGUgVG9kYXkncyBSYXRlXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0VXBkYXRlU3RhdHVzfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dXBkYXRlUmF0ZX1cclxuICAgICAgICAgICAgICAgICAgbmFtZT0ndXBkYXRlUmF0ZSdcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVcGRhdGVSYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J1JhdGUnXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlVwZGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuMn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVVwZGF0ZVBheW1lbnR9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVVwZGF0ZVBheW1lbnR9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIFVwZGF0ZSBQYXlpbmcgUmF0ZVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFVwZGF0ZVN0YXR1c1JhdGV9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt1cGRhdGVQYXltZW50UmF0ZX1cclxuICAgICAgICAgICAgICAgICAgbmFtZT0ndXBkYXRlUGF5bWVudFJhdGUnXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXBkYXRlUGF5bWVudFJhdGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nUmF0ZSdcclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+VXBkYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW4zfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlVXBkYXRlUmV0dXJufVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VVcGRhdGVSZXR1cm59IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIFVwZGF0ZSBQT1MgUmF0ZVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFVwZGF0ZVN0YXR1c1JldHVybn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3VwZGF0ZVJhdGVSZXR1cm59XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3VwZGF0ZVJhdGVSZXR1cm4nXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXBkYXRlUmF0ZVJldHVybihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdSYXRlJ1xyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5VcGRhdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUxvYWRpbmd9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTG9hZGluZ30gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXRlVmlld0FkbWluXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIkFjY291bnRDaXJjbGVJY29uIiwiVGFibGUiLCJNb2RhbCIsIkljb25CdXR0b24iLCJzdHlsZWQiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIkNoZWNrYm94IiwiVGFibGVDb250YWluZXIiLCJQYXBlciIsIlR5cG9ncmFwaHkiLCJCb3giLCJBdXRvY29tcGxldGUiLCJUZXh0RmllbGQiLCJCYWNrZHJvcCIsIkdyaWQiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJEaXZpZGVyIiwiQ29udGFpbmVyIiwiTGluayIsIkN1cnJlbmN5RXhjaGFuZ2VJY29uIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIk5hdkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsIkxvZ291dCIsIlNpZGViYXJEYXNoIiwiU2lkZWJhckRhc2hFMiIsIkFkZCIsIkNsb3NlIiwiRHJhZ0luZGljYXRvclJvdW5kZWQiLCJNYWlsT3V0bGluZSIsIkxvYWRlciIsIkNoZWNrQ2lyY2xlSWNvbiIsIkVkaXRJY29uIiwiRGF0YUdyaWQiLCJHcmlkVG9vbGJhciIsIlZpc2liaWxpdHlJY29uIiwiZGF5anMiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJ0b2FzdCIsIlZpZXdUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJFZGl0VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY1Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWY2Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiUmF0ZVZpZXdBZG1pbiIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY3IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJpZCIsIl9pZCIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl9SZWFjdCR1c2VTdGF0ZSIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInJhdGUiLCJzZXRSYXRlIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJyYXRlUmV0dXJuZWQiLCJzZXRSYXRlUmV0dXJuZWQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsIlBheVJhdGUiLCJzZXRQYXlSYXRlIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJjYXNoIiwic2V0Q2FzaCIsImZldGNoRGF0YSIsIl9yZWY4IiwicmVzUmV0dXJuIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNSYXRlUGF5bWVudCIsInJlc0NhdGVnb3J5IiwiZm9ybWF0RGF0ZSIsIm1hcCIsIml0ZW0iLCJpIiwibnVtYmVyIiwicmVzQ2FzaCIsImZvcm1hdERhdGUxIiwiZGF0YUZpZWxkIiwiY2FzaERhdGUiLCJmb3JtYXQiLCJyZXZlcnNlIiwiX3VzZVN0YXRlMSIsIl91c2VTdGF0ZTEwIiwic2VsZWN0ZWRSb3dzIiwic2V0U2VsZWN0ZWRSb3dzIiwiX1JlYWN0JHVzZVN0YXRlMyIsIml0ZW1zIiwicXVpY2tGaWx0ZXJFeGNsdWRlSGlkZGVuQ29sdW1ucyIsInF1aWNrRmlsdGVyVmFsdWVzIiwiX1JlYWN0JHVzZVN0YXRlNCIsImZpbHRlck1vZGVsIiwic2V0RmlsdGVyTW9kZWwiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwiY29sdW1uVmlzaWJpbGl0eU1vZGVsIiwic2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsIiwiaGFuZGVsSGlkZGVuQ29sdW1uIiwibmV3SGlkZGVuIiwiaGFuZGxlRmlsdGVyIiwibmV3TW9kZWwiLCJzdG9yZWRRdWljayIsInBhcnNlIiwic3RvcmVkQ29sdW1ucyIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJvcGVuMSIsInNldE9wZW4xIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsInVwZGF0ZUlkIiwic2V0VXBkYXRlSWQiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4Iiwib3BlbjMiLCJzZXRPcGVuMyIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJ1cGRhdGVJZDEiLCJzZXRVcGRhdGVJZDEiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwib3BlbjIiLCJzZXRPcGVuMiIsIl91c2VTdGF0ZTIzIiwiX3VzZVN0YXRlMjQiLCJ1cGRhdGVJZFJhdGUiLCJzZXRVcGRhdGVJZFJhdGUiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2IiwidXBkYXRlUmF0ZSIsInNldFVwZGF0ZVJhdGUiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4IiwidXBkYXRlUmF0ZVJldHVybiIsInNldFVwZGF0ZVJhdGVSZXR1cm4iLCJfdXNlU3RhdGUyOSIsIl91c2VTdGF0ZTMwIiwidXBkYXRlUGF5bWVudFJhdGUiLCJzZXRVcGRhdGVQYXltZW50UmF0ZSIsImhhbmRsZU9wZW5VcGRhdGUiLCJoYW5kbGVDbG9zZVVwZGF0ZSIsImhhbmRsZU9wZW5VcGRhdGVSZXR1cm4iLCJoYW5kbGVDbG9zZVVwZGF0ZVJldHVybiIsImhhbmRsZU9wZW5VcGRhdGVQYXltZW50IiwiaGFuZGxlQ2xvc2VVcGRhdGVQYXltZW50IiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiaGFuZGxlT3BlbkxvYWRpbmciLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2xvc2VMb2FkaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJmZXRjaFJhdGVJZCIsIl9yZWY5IiwiX3JlZjAiLCJyYXRlUiIsImZldGNoUGF5SWQiLCJfcmVmMSIsInBheW1lbnRSYXRlIiwiaGFuZGxlU3VibWl0VXBkYXRlU3RhdHVzIiwiX3JlZjEwIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHV0IiwiX3giLCJoYW5kbGVTdWJtaXRVcGRhdGVTdGF0dXNSZXR1cm4iLCJfcmVmMTEiLCJfeDIiLCJoYW5kbGVTdWJtaXRVcGRhdGVTdGF0dXNSYXRlIiwiX3JlZjEyIiwiX3gzIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsImNvbHVtbnMxIiwicmVuZGVyQ2VsbCIsInBhcmFtcyIsIl9wYXJhbXMkcm93JHRvdGFsRXhwZSIsInJvdyIsInRvdGFsRXhwZW5zZXNGQyIsInVuZGVmaW5lZCIsInRvRml4ZWQiLCJyZXBsYWNlIiwiX3BhcmFtcyRyb3ckdG90YWxFeHBlMiIsInRvdGFsRXhwZW5zZXNVU0QiLCJfcGFyYW1zJHJvdyR0b3RhbFBheXIiLCJ0b3RhbFBheXJvbGxVU0QiLCJfcGFyYW1zJHJvdyR0b3RhbEl0ZW0iLCJ0b3RhbEl0ZW1QdXJjaGFzZVVTRCIsIl9wYXJhbXMkcm93JHJldHVybkFtbyIsInJldHVybkFtb3VudEZDIiwiX3BhcmFtcyRyb3ckcmV0dXJuQW1vMiIsInJldHVybkFtb3VudFVTRCIsInN4IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm9uQ2xpY2siLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsIm5hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJjb250YWluZXIiLCJ0ZXh0QWxpZ24iLCJwYWRkaW5nIiwieHMiLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJjb2xTcGFuIiwia2V5IiwidGl0bGUiLCJyb3dzIiwib25Sb3dTZWxlY3Rpb25Nb2RlbENoYW5nZSIsIm5ld1NlbGVjdGlvbiIsImhpZGVGb290ZXIiLCJvbkNsb3NlIiwicGxhY2VtZW50IiwiZmxvYXQiLCJvblN1Ym1pdCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsYWJlbCIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsImdhcCJdLCJzb3VyY2VSb290IjoiIn0=