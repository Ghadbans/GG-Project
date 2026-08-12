"use strict";
exports.id = "src_js_AdminView1_PayRollViewAdmin_js";
exports.ids = ["src_js_AdminView1_PayRollViewAdmin_js"];
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

/***/ "./src/js/AdminView1/PayRollViewAdmin.js"
/*!***********************************************!*\
  !*** ./src/js/AdminView1/PayRollViewAdmin.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageView/Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/SidebarDashE2 */ "./src/js/component/SidebarDashE2.js");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../img/no-data.png */ "./src/js/img/no-data.png");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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
function PayRollViewAdmin() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_35__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__.setUser)({
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    grantAccess = _useState2[0],
    setGrantAccess = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchNumber = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var _res$data;
          var res = yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/grantAccess"));
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
  var PRollInfoC = grantAccess.filter(row => row.moduleName === "Pay-Roll" && row.access.createM === true);
  var PRollInfoV = grantAccess.filter(row => row.moduleName === "Pay-Roll" && row.access.viewM === true);
  var PRollInfoU = grantAccess.filter(row => row.moduleName === "Pay-Roll" && row.access.editM === true);
  var PRollInfoD = grantAccess.filter(row => row.moduleName === "Pay-Roll" && row.access.deleteM === true);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__.logOut)());
    navigate('/');
  };
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open1 = _React$useState2[0],
    setOpen1 = _React$useState2[1];
  var toggleDrawer = () => {
    setOpen1(!open1);
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loadingData = _useState4[0],
    setLoadingData = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    customer = _useState6[0],
    setCustomer = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    searchCustomer = _useState8[0],
    setSearchCustomer = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    selectedRows = _useState0[0],
    setSelectedRows = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    reason = _useState10[0],
    setReason = _useState10[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    var storedValue = localStorage.getItem('QuickFilterPayRoll');
    if (storedValue) {
      setSearchCustomer(storedValue);
    }
  });
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState12 = _slicedToArray(_useState11, 2),
    page = _useState12[0],
    setPage = _useState12[1];
  var limit = 100;
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    searchTerm = _useState14[0],
    setSearchTerm = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    debouncedSearchTerm = _useState16[0],
    setDebouncedSearchTerm = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    filterField = _useState18[0],
    setFilterField = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    filterValue = _useState20[0],
    setFilterValue = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState22 = _slicedToArray(_useState21, 2),
    totalPage = _useState22[0],
    SetTotalPage = _useState22[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setPage(0);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);
  var fetchItems = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (page, searchTerm, filterField, filterValue) {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/payRoll-Information?page=").concat(page + 1, "&limit=").concat(limit, "&search=").concat(encodeURIComponent(searchTerm.trim()), "&filterField=").concat(encodeURIComponent(filterField.trim()), "&filterValue=").concat(encodeURIComponent(filterValue.trim())));
        var formatDate = res.data.itemI.map(item => _objectSpread(_objectSpread({}, item), {}, {
          id: item._id
        }));
        setCustomer(formatDate);
        SetTotalPage(res.data.totalPages);
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoadingData(false);
      }
    });
    return function fetchItems(_x, _x2, _x3, _x4) {
      return _ref1.apply(this, arguments);
    };
  }();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchItems(page, debouncedSearchTerm, filterField, filterValue);
  }, [page, debouncedSearchTerm, filterField, filterValue]);
  var handlePageChange = (event, newPage) => {
    setPage(newPage - 1);
  };
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    modalOpenLoading = _useState24[0],
    setModalOpenLoading = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    loading = _useState26[0],
    setLoading = _useState26[1];
  var handleOpenOffline = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleCreateNotificationOffline = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoName, ReferenceInfoNumber) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: relatedMonth + ' PaySlip For ' + employeeName.name + ' / PR-' + ReferenceInfoNumber,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotificationOffline(_x5, _x6, _x7) {
      return _ref10.apply(this, arguments);
    };
  }();
  var syncOff = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* () {
      fetchData();
    });
    return function syncOff() {
      return _ref11.apply(this, arguments);
    };
  }();
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    openReasonDelete = _useState28[0],
    setOpenReasonDelete = _useState28[1];
  var handleOpenReasonDelete = e => {
    e.preventDefault();
    setOpenReasonDelete(true);
  };
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    open = _useState30[0],
    setOpen = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    openDeleteMultiple = _useState32[0],
    setOpenDeleteMultiple = _useState32[1];
  var handleOpenMultiple = () => {
    setOpenDeleteMultiple(true);
  };
  var handleCloseMultiple = () => {
    setOpenDeleteMultiple(false);
  };
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    openDeleteAll = _useState34[0],
    setOpenDeleteAll = _useState34[1];
  var handleOpenAll = () => {
    setOpenDeleteAll(true);
  };
  var handleCloseAll = () => {
    setOpenDeleteAll(false);
    setSelectedRows([]);
  };
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState36 = _slicedToArray(_useState35, 2),
    DeleteId = _useState36[0],
    setDeleteId = _useState36[1];
  var handleOpen = id => {
    setOpen(true);
    setDeleteId(id);
  };
  var handleOpenModal = () => {
    setModalOpenLoading(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleClose = () => {
    setOpen(false);
  };
  var handleCloseModal = () => {
    window.location.reload();
    setModalOpenLoading(false);
    setLoading(false);
    setOpen(false);
    setOpenDeleteAll(false);
    setOpenDeleteMultiple(false);
    setDeleteId(null);
    setSelectedRows([]);
    fetchItems(page, searchTerm, filterField, filterValue);
  };
  var handleDelete = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* () {
      handleClose();
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/delete-payRoll/").concat(DeleteId));
        if (res) {
          handleOpenModal();
        }
      } catch (error) {
        console.log('try again');
      }
    });
    return function handleDelete() {
      return _ref12.apply(this, arguments);
    };
  }();
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState38 = _slicedToArray(_useState37, 2),
    PayRollDeleted = _useState38[0],
    setPayRollDeleted = _useState38[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchFunction = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* () {
        var deletePromises = selectedRows.map(/*#__PURE__*/function () {
          var _ref14 = _asyncToGenerator(function* (idToDelete) {
            return axios__WEBPACK_IMPORTED_MODULE_28__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/get-payRoll/").concat(idToDelete));
          });
          return function (_x8) {
            return _ref14.apply(this, arguments);
          };
        }());
        try {
          var res = yield Promise.all(deletePromises);
          setPayRollDeleted(res.map(row => 'PAY-' + row.data.data.payNumber + ' For ' + row.data.data.employeeName.name));
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchFunction() {
        return _ref13.apply(this, arguments);
      };
    }();
    fetchFunction();
  }, [selectedRows]);
  var related = PayRollDeleted.map(row => row);
  var info = related.toString();
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(function* () {
      var data = {
        idInfo: '',
        person: user.data.userName + ' Deleted ' + info,
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref15.apply(this, arguments);
    };
  }();
  var handleDeleteMany = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      handleCloseReasonDelete();
      var deletePromises = selectedRows.map(/*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator(function* (idToDelete) {
          return axios__WEBPACK_IMPORTED_MODULE_28__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/delete-payRoll/").concat(idToDelete));
        });
        return function (_x0) {
          return _ref17.apply(this, arguments);
        };
      }());
      try {
        var res = yield Promise.all(deletePromises);
        if (res) {
          handleCreateNotification();
          handleOpenModal();
        }
      } catch (error) {
        console.log(error);
      }
    });
    return function handleDeleteMany(_x9) {
      return _ref16.apply(this, arguments);
    };
  }();
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    open2 = _useState40[0],
    setOpen2 = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState42 = _slicedToArray(_useState41, 2),
    updateId = _useState42[0],
    setUpdateId = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState44 = _slicedToArray(_useState43, 2),
    status = _useState44[0],
    setStatus = _useState44[1];
  var handleOpenUpdate = id => {
    setOpen2(true);
    setUpdateId(id);
  };
  var handleCloseUpdate = () => {
    setOpen2(false);
    setUpdateId(null);
  };
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    loadingOpenModal = _useState46[0],
    setLoadingOpenModal = _useState46[1];
  var handleOpenLoading = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    handleCloseUpdate();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleCloseLoading = () => {
    window.location.reload();
    setLoadingOpenModal(false);
    setLoading(false);
    setUpdateId(null);
    fetchItems(page, searchTerm, filterField, filterValue);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchId = /*#__PURE__*/function () {
      var _ref18 = _asyncToGenerator(function* () {
        if (updateId !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/get-payRoll/").concat(updateId));
            setStatus(res.data.data.status);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      });
      return function fetchId() {
        return _ref18.apply(this, arguments);
      };
    }();
    fetchId();
  }, [updateId]);
  var handleSubmitUpdateStatus = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        status
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/update-payRoll/").concat(updateId), data);
        if (res) {
          handleOpenLoading();
        }
      } catch (error) {
        console.error('Error making POST request:', error);
      }
    });
    return function handleSubmitUpdateStatus(_x1) {
      return _ref19.apply(this, arguments);
    };
  }();
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    filterModel = _React$useState4[0],
    setFilterModel = _React$useState4[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState48 = _slicedToArray(_useState47, 2),
    columnVisibilityModel = _useState48[0],
    setColumnVisibilityModel = _useState48[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsPayRoll', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    setFilterModel(newModel);
    localStorage.setItem('QuickFilterPayrollTst', JSON.stringify(newModel));
    if (newModel.quickFilterValues && newModel.quickFilterValues.length > 0) {
      setSearchTerm(newModel.quickFilterValues.join(' '));
    } else {
      setSearchTerm('');
    }
    if (newModel.items && newModel.items.length > 0) {
      setFilterField(newModel.items[0].field);
      setFilterValue(newModel.items[0].value || '');
    } else {
      setFilterField('');
      setFilterValue('');
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterPayrollTst'));
    if (storedQuick) {
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsPayRoll'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, [searchCustomer]);
  var columns = [{
    field: 'payNumber',
    headerName: '#',
    width: open1 ? 80 : 100
  }, {
    field: 'customer',
    headerName: 'Employee Name',
    width: open1 ? 200 : 320,
    valueGetter: params => params.row.employeeName.name.toUpperCase()
  }, {
    field: 'status',
    headerName: 'Status',
    width: 100,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      color: params.row.status === "UnPaid" ? "blue" : params.row.status === "Paid" ? "#4caf50" : "black"
    }, params.row.status !== undefined ? params.row.status : 'Undefined')
  }, {
    field: 'payDay',
    headerName: 'Pay Date',
    width: 100
  }, {
    field: 'month',
    headerName: 'Month',
    width: 100
  }, {
    field: 'daysW',
    headerName: 'Days Work',
    width: open1 ? 100 : 100
  }, {
    field: 'totalPaidDollars',
    headerName: 'Net Pay ($)',
    width: open1 ? 150 : 150,
    renderCell: params => {
      var _params$row$totalPaid;
      return "$".concat((_params$row$totalPaid = params.row.totalPaidDollars) === null || _params$row$totalPaid === void 0 ? void 0 : _params$row$totalPaid.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
  }, {
    field: 'totalNet',
    headerName: 'Net Pay (FC)',
    width: open1 ? 160 : 180,
    renderCell: params => {
      var _params$row$totalNet;
      return "FC".concat((_params$row$totalNet = params.row.totalNet) === null || _params$row$totalNet === void 0 ? void 0 : _params$row$totalNet.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
  }, {
    field: 'view',
    headerName: 'View',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      disabled: PRollInfoV.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/PayRollViewInformation/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        color: '#202a5a'
      }
    })))))
  }, {
    field: 'edit',
    headerName: 'Edit',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      disabled: PRollInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/PayRollUpdateFormView/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        color: 'gray'
      }
    })))))
  }, {
    field: 'Delete',
    headerName: 'Delete',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "                                ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      onClick: handleOpenAll,
      disabled: PRollInfoD.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_21__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: open1,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, open1 && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_26__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Pay Roll"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_42__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_41__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_37__["default"], {
    style: {
      color: 'white'
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Drawer, {
    variant: "permanent",
    open: open1,
    onMouseEnter: () => setOpen1(true),
    onMouseLeave: () => setOpen1(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_27__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_24__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_23__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_20__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_25__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "invoice"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_33__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    disabled: PRollInfoC.length === 0 && user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
    to: '/PayRollFormView',
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_30__["default"], null))))))), customer.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, customer.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'left',
      margin: '10px'
    }
  }, selectedRows.length > 1 && selectedRows.length < customer.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: user.data.role !== 'CEO',
    onClick: handleOpenAll,
    className: "btnCustomer2"
  }, "Delete multiple"), selectedRows.length === customer.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleOpenAll,
    disabled: user.data.role !== 'CEO',
    className: "btnCustomer2"
  }, "Delete all") : '') : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_39__.DataGrid, {
    paginationMode: "server",
    rowCount: totalPage * limit,
    pagination: true,
    page: page,
    pageSize: limit,
    onPageChange: handlePageChange,
    rows: customer,
    columns: columns,
    checkboxSelection: true,
    disableDensitySelector: true,
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__.GridToolbar
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    filterMode: "server",
    filterModel: filterModel,
    onFilterModelChange: newModel => handleFilter(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_no_data_png__WEBPACK_IMPORTED_MODULE_38__,
    style: {
      position: 'relative',
      marginLeft: '19%',
      padding: '25px',
      height: '40%',
      top: '40px',
      width: '55%',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)'
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Do you want to Delete ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer2",
    onClick: handleDelete
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleClose
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: openDeleteMultiple,
    onClose: handleCloseMultiple,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Do you want to Delete ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer2",
    onClick: handleDeleteMany
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseMultiple
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: openDeleteAll,
    onClose: handleCloseAll,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Do you want to Delete ?"), selectedRows.length === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " Selected rows will be deleted"), selectedRows.length > 1 && selectedRows.length < customer.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), selectedRows.length === customer.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All rows will be deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer2",
    onClick: handleOpenReasonDelete
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleCloseAll
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: modalOpenLoading,
    onClose: handleCloseModal,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_12__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_33__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_34__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Data successfully deleted"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCloseModal,
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: loadingOpenModal,
    onClose: handleCloseLoading,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_12__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_33__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_34__["default"], {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: openReasonDelete,
    onClose: handleCloseReasonDelete,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: handleCloseReasonDelete,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete: ", info, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleDeleteMany
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    required: true,
    id: "reason",
    name: "reason",
    multiline: true,
    rows: 4,
    value: reason,
    placeholder: "Reason",
    onChange: e => setReason(e.target.value),
    label: "Reason",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PayRollViewAdmin);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGF5Um9sbFZpZXdBZG1pbl9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxTQUFTLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05WLENBQWtEO0FBQy9CO0FBQ2U7QUFDb0I7QUFDRjtBQUNzQjtBQUNkO0FBQ1o7QUFDSTtBQUNJO0FBQzBMO0FBQ2xMO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNJO0FBQ0k7QUFDVjtBQUNVO0FBQ2M7QUFDSTtBQUN4QztBQUNrQjtBQUNxRDtBQUN2RTtBQUNlO0FBQ3FCO0FBQ1I7QUFDMEI7QUFDaEM7QUFDVDtBQUNrQjtBQUNQO0FBQ1E7QUFHMUQsSUFBTW1FLGFBQWEsR0FBR3RELDBEQUFNLENBQUN1RCxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDakR4RSwwREFBQSxDQUFDZ0MsOERBQU8sRUFBQTBDLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEsSUFBR0MsS0FBSyxHQUFBRCxLQUFBLENBQUxDLEtBQUs7RUFBQSxPQUFRO0lBQ2pCLE9BQUFDLE1BQUEsQ0FBTzlDLDhEQUFjLENBQUMrQyxPQUFPLElBQUs7TUFDaENDLGVBQWUsRUFBRSxLQUFLO01BQ3RCQyxLQUFLLEVBQUUsT0FBTztNQUNkQyxTQUFTLEVBQUVMLEtBQUssQ0FBQ00sT0FBTyxDQUFDLENBQUMsQ0FBQztNQUMz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QUMsUUFBUTtJQUNwQkMsUUFBUSxFQUFHcEwsQ0FBQyxJQUFLL0UsU0FBUyxDQUFDK0UsQ0FBQyxDQUFDcUwsTUFBTSxDQUFDaEYsS0FBSyxDQUFFO0lBQzNDaUYsS0FBSyxFQUFDLFFBQVE7SUFDZDNELEVBQUUsRUFBRTtNQUFFbFQsS0FBSyxFQUFFLE1BQU07TUFBRWxCLGVBQWUsRUFBRTtJQUFRO0VBQUUsQ0FDakQsQ0FDRyxDQUFDLGVBQ1BqRiwwREFBQSxXQUFLLENBQUMsZUFDTkEsMERBQUEsQ0FBQ3dCLHNEQUFJO0lBQUN1TixJQUFJO0lBQUMyTixFQUFFLEVBQUU7RUFBRyxnQkFDaEIxYywwREFBQTtJQUFRaWQsSUFBSSxFQUFDLFFBQVE7SUFBQzVZLFNBQVMsRUFBQyxhQUFhO0lBQUN5QixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFO0lBQU87RUFBRSxHQUFDLE1BQVksQ0FDaEYsQ0FDRixDQUNGLENBRUgsQ0FDQSxDQUNKLENBQUM7QUFFVjtBQUVBLGlFQUFlK0IsZ0JBQWdCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0FkZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGF5Um9sbFZpZXdBZG1pbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi91dGlscy9jcmVhdGVTdmdJY29uJztcbmltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovX2pzeChcInBhdGhcIiwge1xuICBkOiBcIk0xOSAxM2gtNnY2aC0ydi02SDV2LTJoNlY1aDJ2Nmg2elwiXG59KSwgJ0FkZCcpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnLi92aWV3LmNzcydcclxuaW1wb3J0ICcuL1BhZ2VWaWV3L0NoYXJ0dmlldy5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhckRhc2hFMiBmcm9tICcuLi9jb21wb25lbnQvU2lkZWJhckRhc2hFMidcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5JztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgVGFibGUsIEljb25CdXR0b24sIHN0eWxlZCwgVGFibGVCb2R5LCBUYWJsZUNlbGwsIFRhYmxlSGVhZCwgVGFibGVSb3csIENoZWNrYm94LCBUYWJsZUNvbnRhaW5lciwgUGFwZXIsIFR5cG9ncmFwaHksIE1vZGFsLCBCb3gsIEdyaWQsIEZvcm1Db250cm9sLCBJbnB1dExhYmVsLCBTZWxlY3QsIE1lbnVJdGVtLCBCYWNrZHJvcCwgQXV0b2NvbXBsZXRlLCBUZXh0RmllbGQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFkZ2UnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0RpdmlkZXInO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBBZGQsIENsb3NlLCBNYWlsT3V0bGluZSwgUGVyc29uMk91dGxpbmVkLCBQZXJzb25PZmZSb3VuZGVkIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vaW1nL25vLWRhdGEucG5nJztcclxuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRUb29sYmFyIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuXHJcblxyXG5jb25zdCBEZWxldGVUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgRWRpdFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIFBheVJvbGxWaWV3QWRtaW4oKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUsIGlkOiByZXMuZGF0YS5kYXRhLl9pZCB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG4gIGNvbnN0IFtncmFudEFjY2Vzcywgc2V0R3JhbnRBY2Nlc3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ncmFudEFjY2Vzc2ApO1xyXG4gICAgICAgIHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnVzZXJJRCA9PT0gdXNlci5kYXRhLmlkKVxyXG4gICAgICAgICAgLm1hcCgocm93KSA9PiBzZXRHcmFudEFjY2Vzcyhyb3cubW9kdWxlcykpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoTnVtYmVyKClcclxuICB9LCBbdXNlcl0pXHJcblxyXG4gIGNvbnN0IFBSb2xsSW5mb0MgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiUGF5LVJvbGxcIiAmJiByb3cuYWNjZXNzLmNyZWF0ZU0gPT09IHRydWUpO1xyXG4gIGNvbnN0IFBSb2xsSW5mb1YgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiUGF5LVJvbGxcIiAmJiByb3cuYWNjZXNzLnZpZXdNID09PSB0cnVlKTtcclxuICBjb25zdCBQUm9sbEluZm9VID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIlBheS1Sb2xsXCIgJiYgcm93LmFjY2Vzcy5lZGl0TSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgUFJvbGxJbmZvRCA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJQYXktUm9sbFwiICYmIHJvdy5hY2Nlc3MuZGVsZXRlTSA9PT0gdHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFtvcGVuMSwgc2V0T3BlbjFdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbjEoIW9wZW4xKTtcclxuICB9O1xyXG4gIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2N1c3RvbWVyLCBzZXRDdXN0b21lcl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3NlYXJjaEN1c3RvbWVyLCBzZXRTZWFyY2hDdXN0b21lcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VsZWN0ZWRSb3dzLCBzZXRTZWxlY3RlZFJvd3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtyZWFzb24sIHNldFJlYXNvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdRdWlja0ZpbHRlclBheVJvbGwnKVxyXG4gICAgaWYgKHN0b3JlZFZhbHVlKSB7XHJcbiAgICAgIHNldFNlYXJjaEN1c3RvbWVyKHN0b3JlZFZhbHVlKVxyXG4gICAgfVxyXG5cclxuICB9KVxyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGxpbWl0ID0gMTAwO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZWJvdW5jZWRTZWFyY2hUZXJtLCBzZXREZWJvdW5jZWRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmaWx0ZXJGaWVsZCwgc2V0RmlsdGVyRmllbGRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ZpbHRlclZhbHVlLCBzZXRGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdG90YWxQYWdlLCBTZXRUb3RhbFBhZ2VdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldERlYm91bmNlZFNlYXJjaFRlcm0oc2VhcmNoVGVybSk7XHJcbiAgICAgIHNldFBhZ2UoMCk7XHJcbiAgICB9LCAzMDApO1xyXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChoYW5kbGVyKTtcclxuICB9LCBbc2VhcmNoVGVybV0pO1xyXG4gICAgY29uc3QgZmV0Y2hJdGVtcyA9IGFzeW5jIChwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3BheVJvbGwtSW5mb3JtYXRpb24/cGFnZT0ke3BhZ2UgKyAxfSZsaW1pdD0ke2xpbWl0fSZzZWFyY2g9JHtlbmNvZGVVUklDb21wb25lbnQoc2VhcmNoVGVybS50cmltKCkpfSZmaWx0ZXJGaWVsZD0ke2VuY29kZVVSSUNvbXBvbmVudChmaWx0ZXJGaWVsZC50cmltKCkpfSZmaWx0ZXJWYWx1ZT0ke2VuY29kZVVSSUNvbXBvbmVudChmaWx0ZXJWYWx1ZS50cmltKCkpfWApO1xyXG4gICAgICBjb25zdCBmb3JtYXREYXRlID0gcmVzLmRhdGEuaXRlbUkubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgaWQ6IGl0ZW0uX2lkLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIHNldEN1c3RvbWVyKGZvcm1hdERhdGUpO1xyXG4gICAgICBTZXRUb3RhbFBhZ2UocmVzLmRhdGEudG90YWxQYWdlcyk7XHJcbiAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hJdGVtcyhwYWdlLCBkZWJvdW5jZWRTZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpO1xyXG4gIH0sIFtwYWdlLCBkZWJvdW5jZWRTZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChldmVudCwgbmV3UGFnZSkgPT4ge1xyXG4gICAgc2V0UGFnZShuZXdQYWdlIC0gMSk7XHJcbiAgfTtcclxuICBjb25zdCBbbW9kYWxPcGVuTG9hZGluZywgc2V0TW9kYWxPcGVuTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuT2ZmbGluZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb25PZmZsaW5lID0gYXN5bmMgKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9OYW1lLCBSZWZlcmVuY2VJbmZvTnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86IFJlZmVyZW5jZUluZm8sXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBDcmVhdGVkICcsXHJcbiAgICAgIHJlYXNvbjogcmVsYXRlZE1vbnRoICsgJyBQYXlTbGlwIEZvciAnICsgZW1wbG95ZWVOYW1lLm5hbWUgKyAnIC8gUFItJyArIFJlZmVyZW5jZUluZm9OdW1iZXIsXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBzeW5jT2ZmID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9XHJcbiAgXHJcblxyXG4gIGNvbnN0IFtvcGVuUmVhc29uRGVsZXRlLCBzZXRPcGVuUmVhc29uRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuRGVsZXRlTXVsdGlwbGUsIHNldE9wZW5EZWxldGVNdWx0aXBsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5NdWx0aXBsZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5EZWxldGVNdWx0aXBsZSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTXVsdGlwbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRGVsZXRlTXVsdGlwbGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgW29wZW5EZWxldGVBbGwsIHNldE9wZW5EZWxldGVBbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuQWxsID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRlbGV0ZUFsbCh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQWxsID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRlbGV0ZUFsbChmYWxzZSk7XHJcbiAgICBzZXRTZWxlY3RlZFJvd3MoW10pXHJcbiAgfTtcclxuICBjb25zdCBbRGVsZXRlSWQsIHNldERlbGV0ZUlkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICAgIHNldERlbGV0ZUlkKGlkKVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlT3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxPcGVuTG9hZGluZyh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgc2V0TW9kYWxPcGVuTG9hZGluZyhmYWxzZSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0T3BlbkRlbGV0ZUFsbChmYWxzZSk7XHJcbiAgICBzZXRPcGVuRGVsZXRlTXVsdGlwbGUoZmFsc2UpO1xyXG4gICAgc2V0RGVsZXRlSWQobnVsbCk7XHJcbiAgICBzZXRTZWxlY3RlZFJvd3MoW10pO1xyXG4gICAgZmV0Y2hJdGVtcyhwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5kZWxldGUoYCR7RU5EUE9JTlRfVVJMfS9kZWxldGUtcGF5Um9sbC8ke0RlbGV0ZUlkfWApO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaGFuZGxlT3Blbk1vZGFsKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd0cnkgYWdhaW4nKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IFtQYXlSb2xsRGVsZXRlZCwgc2V0UGF5Um9sbERlbGV0ZWRdID0gdXNlU3RhdGUoW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZVByb21pc2VzID0gc2VsZWN0ZWRSb3dzLm1hcChhc3luYyAoaWRUb0RlbGV0ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtcGF5Um9sbC8ke2lkVG9EZWxldGV9YClcclxuICAgICAgfSlcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbChkZWxldGVQcm9taXNlcyk7XHJcbiAgICAgICAgc2V0UGF5Um9sbERlbGV0ZWQocmVzLm1hcCgocm93KSA9PiAnUEFZLScgKyByb3cuZGF0YS5kYXRhLnBheU51bWJlciArICcgRm9yICcgKyByb3cuZGF0YS5kYXRhLmVtcGxveWVlTmFtZS5uYW1lKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hGdW5jdGlvbigpXHJcbiAgfSwgW3NlbGVjdGVkUm93c10pXHJcbiAgY29uc3QgcmVsYXRlZCA9IFBheVJvbGxEZWxldGVkLm1hcChyb3cgPT4gcm93KVxyXG4gIGNvbnN0IGluZm8gPSByZWxhdGVkLnRvU3RyaW5nKClcclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86ICcnLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgRGVsZXRlZCAnICsgaW5mbyxcclxuICAgICAgcmVhc29uLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbmAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlTWFueSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGhhbmRsZUNsb3NlUmVhc29uRGVsZXRlKCk7XHJcbiAgICBjb25zdCBkZWxldGVQcm9taXNlcyA9IHNlbGVjdGVkUm93cy5tYXAoYXN5bmMgKGlkVG9EZWxldGUpID0+IHtcclxuICAgICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtFTkRQT0lOVF9VUkx9L2RlbGV0ZS1wYXlSb2xsLyR7aWRUb0RlbGV0ZX1gKVxyXG4gICAgfSlcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByb21pc2UuYWxsKGRlbGV0ZVByb21pc2VzKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbigpXHJcbiAgICAgICAgaGFuZGxlT3Blbk1vZGFsKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW29wZW4yLCBzZXRPcGVuMl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwZGF0ZUlkLCBzZXRVcGRhdGVJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3BlbjIodHJ1ZSk7XHJcbiAgICBzZXRVcGRhdGVJZChpZCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4yKGZhbHNlKTtcclxuICAgIHNldFVwZGF0ZUlkKG51bGwpO1xyXG4gIH07XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZU9wZW5Mb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBoYW5kbGVDbG9zZVVwZGF0ZSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgc2V0VXBkYXRlSWQobnVsbCk7XHJcbiAgICBmZXRjaEl0ZW1zKHBhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSk7XHJcbiAgfVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaElkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAodXBkYXRlSWQgIT09IG51bGwpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LXBheVJvbGwvJHt1cGRhdGVJZH1gKVxyXG4gICAgICAgICAgc2V0U3RhdHVzKHJlcy5kYXRhLmRhdGEuc3RhdHVzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaElkKClcclxuICB9LCBbdXBkYXRlSWRdKTtcclxuICBjb25zdCBoYW5kbGVTdWJtaXRVcGRhdGVTdGF0dXMgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgc3RhdHVzXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucHV0KGAke0VORFBPSU5UX1VSTH0vdXBkYXRlLXBheVJvbGwvJHt1cGRhdGVJZH1gLCBkYXRhKVxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaGFuZGxlT3BlbkxvYWRpbmcoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWFraW5nIFBPU1QgcmVxdWVzdDonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IFtmaWx0ZXJNb2RlbCwgc2V0RmlsdGVyTW9kZWxdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgaXRlbXM6IFtdLFxyXG4gICAgcXVpY2tGaWx0ZXJFeGNsdWRlSGlkZGVuQ29sdW1uczogdHJ1ZSxcclxuICAgIHF1aWNrRmlsdGVyVmFsdWVzOiBbXSxcclxuICB9KTtcclxuICBjb25zdCBbY29sdW1uVmlzaWJpbGl0eU1vZGVsLCBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWxdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBjb25zdCBoYW5kZWxIaWRkZW5Db2x1bW4gPSAobmV3SGlkZGVuKSA9PiB7XHJcbiAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwobmV3SGlkZGVuKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0hpZGRlbkNvbHVtbnNQYXlSb2xsJywgSlNPTi5zdHJpbmdpZnkobmV3SGlkZGVuKSlcclxuICB9XHJcbiAgICBjb25zdCBoYW5kbGVGaWx0ZXIgPSAobmV3TW9kZWwpID0+IHtcclxuICAgIHNldEZpbHRlck1vZGVsKG5ld01vZGVsKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdRdWlja0ZpbHRlclBheXJvbGxUc3QnLCBKU09OLnN0cmluZ2lmeShuZXdNb2RlbCkpO1xyXG4gICAgaWYgKG5ld01vZGVsLnF1aWNrRmlsdGVyVmFsdWVzICYmIG5ld01vZGVsLnF1aWNrRmlsdGVyVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2V0U2VhcmNoVGVybShuZXdNb2RlbC5xdWlja0ZpbHRlclZhbHVlcy5qb2luKCcgJykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2VhcmNoVGVybSgnJyk7XHJcbiAgICB9XHJcbiAgICBpZiAobmV3TW9kZWwuaXRlbXMgJiYgbmV3TW9kZWwuaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZXRGaWx0ZXJGaWVsZChuZXdNb2RlbC5pdGVtc1swXS5maWVsZCk7XHJcbiAgICAgIHNldEZpbHRlclZhbHVlKG5ld01vZGVsLml0ZW1zWzBdLnZhbHVlIHx8ICcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEZpbHRlckZpZWxkKCcnKTtcclxuICAgICAgc2V0RmlsdGVyVmFsdWUoJycpO1xyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkUXVpY2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdRdWlja0ZpbHRlclBheXJvbGxUc3QnKSlcclxuICAgIGlmIChzdG9yZWRRdWljaykge1xyXG4gICAgICBzZXRGaWx0ZXJNb2RlbChzdG9yZWRRdWljaylcclxuICAgIH1cclxuICAgIGNvbnN0IHN0b3JlZENvbHVtbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdIaWRkZW5Db2x1bW5zUGF5Um9sbCcpKVxyXG4gICAgaWYgKHN0b3JlZENvbHVtbnMpIHtcclxuICAgICAgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsKHN0b3JlZENvbHVtbnMpXHJcbiAgICB9XHJcblxyXG4gIH0sIFtzZWFyY2hDdXN0b21lcl0pXHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHsgZmllbGQ6ICdwYXlOdW1iZXInLCBoZWFkZXJOYW1lOiAnIycsIHdpZHRoOiBvcGVuMSA/IDgwIDogMTAwIH0sXHJcbiAgICB7IGZpZWxkOiAnY3VzdG9tZXInLCBoZWFkZXJOYW1lOiAnRW1wbG95ZWUgTmFtZScsIHdpZHRoOiBvcGVuMSA/IDIwMCA6IDMyMCwgdmFsdWVHZXR0ZXI6IChwYXJhbXMpID0+IHBhcmFtcy5yb3cuZW1wbG95ZWVOYW1lLm5hbWUudG9VcHBlckNhc2UoKSB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ3N0YXR1cycsIGhlYWRlck5hbWU6ICdTdGF0dXMnLCB3aWR0aDogMTAwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICBjb2xvcj17XHJcbiAgICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzID09PSBcIlVuUGFpZFwiXHJcbiAgICAgICAgICAgICAgPyBcImJsdWVcIiA6XHJcbiAgICAgICAgICAgICAgcGFyYW1zLnJvdy5zdGF0dXMgPT09IFwiUGFpZFwiXHJcbiAgICAgICAgICAgICAgICA/IFwiIzRjYWY1MFwiIDogXCJibGFja1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3BhcmFtcy5yb3cuc3RhdHVzICE9PSB1bmRlZmluZWQgPyBwYXJhbXMucm93LnN0YXR1cyA6ICdVbmRlZmluZWQnfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIH0sXHJcbiAgICB7IGZpZWxkOiAncGF5RGF5JywgaGVhZGVyTmFtZTogJ1BheSBEYXRlJywgd2lkdGg6IDEwMCB9LFxyXG4gICAgeyBmaWVsZDogJ21vbnRoJywgaGVhZGVyTmFtZTogJ01vbnRoJywgd2lkdGg6IDEwMCB9LFxyXG4gICAgeyBmaWVsZDogJ2RheXNXJywgaGVhZGVyTmFtZTogJ0RheXMgV29yaycsIHdpZHRoOiBvcGVuMSA/IDEwMCA6IDEwMCB9LFxyXG4gICAgeyBmaWVsZDogJ3RvdGFsUGFpZERvbGxhcnMnLCBoZWFkZXJOYW1lOiAnTmV0IFBheSAoJCknLCB3aWR0aDogb3BlbjEgPyAxNTAgOiAxNTAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IGAkJHtwYXJhbXMucm93LnRvdGFsUGFpZERvbGxhcnM/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gIH0sXHJcbiAgICB7IGZpZWxkOiAndG90YWxOZXQnLCBoZWFkZXJOYW1lOiAnTmV0IFBheSAoRkMpJywgd2lkdGg6IG9wZW4xID8gMTYwIDogMTgwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiBgRkMke3BhcmFtcy5yb3cudG90YWxOZXQ/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAndmlldycsIGhlYWRlck5hbWU6ICdWaWV3Jywgd2lkdGg6IDUwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiVmlld1wiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGRpc2FibGVkPXtQUm9sbEluZm9WLmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL1BheVJvbGxWaWV3SW5mb3JtYXRpb24vJHtwYXJhbXMucm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5SWNvbiBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICdlZGl0JywgaGVhZGVyTmFtZTogJ0VkaXQnLCB3aWR0aDogNTAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8RWRpdFRvb2x0aXAgdGl0bGU9XCJFZGl0XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e1BSb2xsSW5mb1UubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvUGF5Um9sbFVwZGF0ZUZvcm1WaWV3LyR7cGFyYW1zLnJvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICA8RWRpdEljb24gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRWRpdFRvb2x0aXA+XHJcblxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ0RlbGV0ZScsIGhlYWRlck5hbWU6ICdEZWxldGUnLCB3aWR0aDogNTAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8RGVsZXRlVG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiPlxyXG4gICAgICAgICAgPHNwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuQWxsfSBkaXNhYmxlZD17UFJvbGxJbmZvRC5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRGVsZXRlVG9vbHRpcD5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICBdXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtvcGVuMX0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4ob3BlbjEgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUGF5IFJvbGxcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtvcGVuMX0gb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRPcGVuMSh0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRPcGVuMShmYWxzZSl9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaEUyIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiAxIH19ID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxvYWRpbmdEYXRhID8gPGRpdiBjbGFzc05hbWU9J2ludm9pY2UnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnMTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcsIG1hcmdpbjogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17UFJvbGxJbmZvQy5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXsnL1BheVJvbGxGb3JtVmlldyd9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyQWRkaW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjdXN0b21lci5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBoZWlnaHQ6IDYwMCwgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2N1c3RvbWVyLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAnbGVmdCcsIG1hcmdpbjogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MubGVuZ3RoID4gMSAmJiBzZWxlY3RlZFJvd3MubGVuZ3RoIDwgY3VzdG9tZXIubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9IG9uQ2xpY2s9e2hhbmRsZU9wZW5BbGx9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJz5EZWxldGUgbXVsdGlwbGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dzLmxlbmd0aCA9PT0gY3VzdG9tZXIubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlT3BlbkFsbH0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInPkRlbGV0ZSBhbGw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbk1vZGU9XCJzZXJ2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0NvdW50PXt0b3RhbFBhZ2UgKiBsaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17bGltaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9e2N1c3RvbWVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRGVuc2l0eVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Sb3dTZWxlY3Rpb25Nb2RlbENoYW5nZT17KG5ld1NlbGVjdGlvbikgPT4gc2V0U2VsZWN0ZWRSb3dzKG5ld1NlbGVjdGlvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdHM9e3sgdG9vbGJhcjogR3JpZFRvb2xiYXIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1F1aWNrRmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVG9vbGJhckJ1dHRvbjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTW9kZT1cInNlcnZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTW9kZWw9e2ZpbHRlck1vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmlsdGVyTW9kZWxDaGFuZ2U9eyhuZXdNb2RlbCkgPT4gaGFuZGxlRmlsdGVyKG5ld01vZGVsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WaXNpYmlsaXR5TW9kZWw9e2NvbHVtblZpc2liaWxpdHlNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZT17aGFuZGVsSGlkZGVuQ29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgcGFkZGluZzogJzEwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICApIDogPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtJbWFnZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIG1hcmdpbkxlZnQ6ICcxOSUnLCBwYWRkaW5nOiAnMjVweCcsIGhlaWdodDogJzQwJScsIHRvcDogJzQwcHgnLCB3aWR0aDogJzU1JScsIGJveFNoYWRvdzogJzAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPGgyPkRvIHlvdSB3YW50IHRvIERlbGV0ZSA/PC9oMj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMicgb25DbGljaz17aGFuZGxlRGVsZXRlfT5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5EZWxldGVNdWx0aXBsZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU11bHRpcGxlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8aDI+RG8geW91IHdhbnQgdG8gRGVsZXRlID88L2gyPlxyXG4gICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGU6PC9zcGFuPiBBbGwgc2VsZWN0ZWQgcm93cyB3aWxsIGJlIGRlbGV0ZWQ8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZU1hbnl9PlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZU11bHRpcGxlfT5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuRGVsZXRlQWxsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlQWxsfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8aDI+RG8geW91IHdhbnQgdG8gRGVsZXRlID88L2gyPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGU6PC9zcGFuPiBTZWxlY3RlZCByb3dzIHdpbGwgYmUgZGVsZXRlZDwvcD5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPiAxICYmIHNlbGVjdGVkUm93cy5sZW5ndGggPCBjdXN0b21lci5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gQWxsIHNlbGVjdGVkIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dzLmxlbmd0aCA9PT0gY3VzdG9tZXIubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZTo8L3NwYW4+IEFsbCByb3dzIHdpbGwgYmUgZGVsZXRlZDwvcD5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMicgb25DbGljaz17aGFuZGxlT3BlblJlYXNvbkRlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQWxsfT5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXttb2RhbE9wZW5Mb2FkaW5nfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9XHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+IERhdGEgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VMb2FkaW5nfVxyXG4gICAgICAgIGNsb3NlQWZ0ZXJUcmFuc2l0aW9uXHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gRGF0YSBTYXZlZCBzdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUxvYWRpbmd9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgey8qKiBNb2RhbCBmb3IgbG9hZGluZyBVcGRhdGUgU3RhdHVzIEVuZCAqL31cclxuICAgICAgey8qKiBNb2RhbCBmb3IgVXBkYXRpbmcgUGF5Um9sbCBTdGF0dXMgRW5kICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VSZWFzb25EZWxldGV9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIFdoeSBkbyB5b3Ugd2FudCB0byBkZWxldGU6IHtpbmZvfT9cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVEZWxldGVNYW55fT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBpZD0ncmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBuYW1lPSdyZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICByb3dzPXs0fVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cmVhc29ufVxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlYXNvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPSdSZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF5Um9sbFZpZXdBZG1pblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXJEYXNoRTIiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiVmlzaWJpbGl0eUljb24iLCJFZGl0SWNvbiIsIkRlbGV0ZUljb24iLCJOYXZMaW5rIiwidXNlTmF2aWdhdGUiLCJUYWJsZSIsIkljb25CdXR0b24iLCJzdHlsZWQiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIkNoZWNrYm94IiwiVGFibGVDb250YWluZXIiLCJQYXBlciIsIlR5cG9ncmFwaHkiLCJNb2RhbCIsIkJveCIsIkdyaWQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJNZW51SXRlbSIsIkJhY2tkcm9wIiwiQXV0b2NvbXBsZXRlIiwiVGV4dEZpZWxkIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiRGl2aWRlciIsIkNvbnRhaW5lciIsIkxpbmsiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiYXhpb3MiLCJFTkRQT0lOVF9VUkwiLCJBZGQiLCJDbG9zZSIsIk1haWxPdXRsaW5lIiwiUGVyc29uMk91dGxpbmVkIiwiUGVyc29uT2ZmUm91bmRlZCIsImRheWpzIiwiTG9hZGVyIiwiQ2hlY2tDaXJjbGVJY29uIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvZ291dCIsIkltYWdlIiwiRGF0YUdyaWQiLCJHcmlkVG9vbGJhciIsIk1lc3NhZ2VBZG1pblZpZXciLCJOb3RpZmljYXRpb25WSWV3SW5mbyIsIkRlbGV0ZVRvb2x0aXAiLCJfcmVmIiwiY2xhc3NOYW1lIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc2VzIiwicG9wcGVyIiwiX3JlZjIiLCJ0aGVtZSIsImNvbmNhdCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJveFNoYWRvdyIsInNoYWRvd3MiLCJmb250U2l6ZSIsIkVkaXRUb29sdGlwIiwiX3JlZjMiLCJfZXhjbHVkZWQyIiwiX3JlZjQiLCJWaWV3VG9vbHRpcCIsIl9yZWY1IiwiX2V4Y2x1ZGVkMyIsIl9yZWY2Iiwic3R5bGUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsImJnY29sb3IiLCJwdCIsInB4IiwicGIiLCJkcmF3ZXJXaWR0aCIsIkFwcEJhciIsInNob3VsZEZvcndhcmRQcm9wIiwicHJvcCIsIl9yZWY3Iiwib3BlbiIsIl9vYmplY3RTcHJlYWQiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsIm1hcmdpbkxlZnQiLCJlbnRlcmluZ1NjcmVlbiIsIkRyYXdlciIsIl9yZWY4Iiwid2hpdGVTcGFjZSIsImJveFNpemluZyIsIm92ZXJmbG93WCIsInNwYWNpbmciLCJicmVha3BvaW50cyIsInVwIiwiUGF5Um9sbFZpZXdBZG1pbiIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1c2VyIiwic3RvcmVzVXNlcklkIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZldGNoVXNlciIsIl9yZWY5IiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJyZXMiLCJnZXQiLCJOYW1lIiwiZGF0YSIsImVtcGxveWVlTmFtZSIsIlJvbGUiLCJyb2xlIiwidXNlck5hbWUiLCJpZCIsIl9pZCIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZ3JhbnRBY2Nlc3MiLCJzZXRHcmFudEFjY2VzcyIsImZldGNoTnVtYmVyIiwiX3JlZjAiLCJfcmVzJGRhdGEiLCJmaWx0ZXIiLCJyb3ciLCJ1c2VySUQiLCJtYXAiLCJtb2R1bGVzIiwiUFJvbGxJbmZvQyIsIm1vZHVsZU5hbWUiLCJhY2Nlc3MiLCJjcmVhdGVNIiwiUFJvbGxJbmZvViIsInZpZXdNIiwiUFJvbGxJbmZvVSIsImVkaXRNIiwiUFJvbGxJbmZvRCIsImRlbGV0ZU0iLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX1JlYWN0JHVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsIm9wZW4xIiwic2V0T3BlbjEiLCJ0b2dnbGVEcmF3ZXIiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImN1c3RvbWVyIiwic2V0Q3VzdG9tZXIiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInNlYXJjaEN1c3RvbWVyIiwic2V0U2VhcmNoQ3VzdG9tZXIiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsInNlbGVjdGVkUm93cyIsInNldFNlbGVjdGVkUm93cyIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsInJlYXNvbiIsInNldFJlYXNvbiIsInN0b3JlZFZhbHVlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInBhZ2UiLCJzZXRQYWdlIiwibGltaXQiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0Iiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwiZGVib3VuY2VkU2VhcmNoVGVybSIsInNldERlYm91bmNlZFNlYXJjaFRlcm0iLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwiZmlsdGVyRmllbGQiLCJzZXRGaWx0ZXJGaWVsZCIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJmaWx0ZXJWYWx1ZSIsInNldEZpbHRlclZhbHVlIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsInRvdGFsUGFnZSIsIlNldFRvdGFsUGFnZSIsImhhbmRsZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZmV0Y2hJdGVtcyIsIl9yZWYxIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidHJpbSIsImZvcm1hdERhdGUiLCJpdGVtSSIsIml0ZW0iLCJ0b3RhbFBhZ2VzIiwiX3giLCJfeDIiLCJfeDMiLCJfeDQiLCJoYW5kbGVQYWdlQ2hhbmdlIiwiZXZlbnQiLCJuZXdQYWdlIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsIm1vZGFsT3BlbkxvYWRpbmciLCJzZXRNb2RhbE9wZW5Mb2FkaW5nIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlT3Blbk9mZmxpbmUiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uT2ZmbGluZSIsIl9yZWYxMCIsIlJlZmVyZW5jZUluZm8iLCJSZWZlcmVuY2VJbmZvTmFtZSIsIlJlZmVyZW5jZUluZm9OdW1iZXIiLCJpZEluZm8iLCJwZXJzb24iLCJyZWxhdGVkTW9udGgiLCJuYW1lIiwiZGF0ZU5vdGlmaWNhdGlvbiIsIkRhdGUiLCJwb3N0IiwibG9nIiwiX3g1IiwiX3g2IiwiX3g3Iiwic3luY09mZiIsIl9yZWYxMSIsImZldGNoRGF0YSIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJvcGVuUmVhc29uRGVsZXRlIiwic2V0T3BlblJlYXNvbkRlbGV0ZSIsImhhbmRsZU9wZW5SZWFzb25EZWxldGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZSIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJzZXRPcGVuIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsIm9wZW5EZWxldGVNdWx0aXBsZSIsInNldE9wZW5EZWxldGVNdWx0aXBsZSIsImhhbmRsZU9wZW5NdWx0aXBsZSIsImhhbmRsZUNsb3NlTXVsdGlwbGUiLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0Iiwib3BlbkRlbGV0ZUFsbCIsInNldE9wZW5EZWxldGVBbGwiLCJoYW5kbGVPcGVuQWxsIiwiaGFuZGxlQ2xvc2VBbGwiLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2IiwiRGVsZXRlSWQiLCJzZXREZWxldGVJZCIsImhhbmRsZU9wZW4iLCJoYW5kbGVPcGVuTW9kYWwiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUNsb3NlTW9kYWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImhhbmRsZURlbGV0ZSIsIl9yZWYxMiIsImRlbGV0ZSIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJQYXlSb2xsRGVsZXRlZCIsInNldFBheVJvbGxEZWxldGVkIiwiZmV0Y2hGdW5jdGlvbiIsIl9yZWYxMyIsImRlbGV0ZVByb21pc2VzIiwiX3JlZjE0IiwiaWRUb0RlbGV0ZSIsIl94OCIsIlByb21pc2UiLCJhbGwiLCJwYXlOdW1iZXIiLCJyZWxhdGVkIiwiaW5mbyIsInRvU3RyaW5nIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjE1IiwiaGFuZGxlRGVsZXRlTWFueSIsIl9yZWYxNiIsIl9yZWYxNyIsIl94MCIsIl94OSIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJvcGVuMiIsInNldE9wZW4yIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsInVwZGF0ZUlkIiwic2V0VXBkYXRlSWQiLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0Iiwic3RhdHVzIiwic2V0U3RhdHVzIiwiaGFuZGxlT3BlblVwZGF0ZSIsImhhbmRsZUNsb3NlVXBkYXRlIiwiX3VzZVN0YXRlNDUiLCJfdXNlU3RhdGU0NiIsImxvYWRpbmdPcGVuTW9kYWwiLCJoYW5kbGVPcGVuTG9hZGluZyIsImhhbmRsZUNsb3NlTG9hZGluZyIsImZldGNoSWQiLCJfcmVmMTgiLCJoYW5kbGVTdWJtaXRVcGRhdGVTdGF0dXMiLCJfcmVmMTkiLCJwdXQiLCJfeDEiLCJfUmVhY3QkdXNlU3RhdGUzIiwiaXRlbXMiLCJxdWlja0ZpbHRlckV4Y2x1ZGVIaWRkZW5Db2x1bW5zIiwicXVpY2tGaWx0ZXJWYWx1ZXMiLCJfUmVhY3QkdXNlU3RhdGU0IiwiZmlsdGVyTW9kZWwiLCJzZXRGaWx0ZXJNb2RlbCIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJjb2x1bW5WaXNpYmlsaXR5TW9kZWwiLCJzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwiLCJoYW5kZWxIaWRkZW5Db2x1bW4iLCJuZXdIaWRkZW4iLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImhhbmRsZUZpbHRlciIsIm5ld01vZGVsIiwibGVuZ3RoIiwiam9pbiIsImZpZWxkIiwidmFsdWUiLCJzdG9yZWRRdWljayIsInBhcnNlIiwic3RvcmVkQ29sdW1ucyIsImNvbHVtbnMiLCJoZWFkZXJOYW1lIiwidmFsdWVHZXR0ZXIiLCJwYXJhbXMiLCJ0b1VwcGVyQ2FzZSIsInJlbmRlckNlbGwiLCJ1bmRlZmluZWQiLCJfcGFyYW1zJHJvdyR0b3RhbFBhaWQiLCJ0b3RhbFBhaWREb2xsYXJzIiwidG9GaXhlZCIsInJlcGxhY2UiLCJfcGFyYW1zJHJvdyR0b3RhbE5ldCIsInRvdGFsTmV0IiwidGl0bGUiLCJkaXNhYmxlZCIsInRvIiwib25DbGljayIsImN1cnNvciIsInN4IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93Iiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10IiwiZmxvYXQiLCJtYXJnaW4iLCJwYWdpbmF0aW9uTW9kZSIsInJvd0NvdW50IiwicGFnaW5hdGlvbiIsInBhZ2VTaXplIiwib25QYWdlQ2hhbmdlIiwicm93cyIsImNoZWNrYm94U2VsZWN0aW9uIiwiZGlzYWJsZURlbnNpdHlTZWxlY3RvciIsIm9uUm93U2VsZWN0aW9uTW9kZWxDaGFuZ2UiLCJuZXdTZWxlY3Rpb24iLCJzbG90cyIsInRvb2xiYXIiLCJzbG90UHJvcHMiLCJzaG93UXVpY2tGaWx0ZXIiLCJwcmludE9wdGlvbnMiLCJkaXNhYmxlVG9vbGJhckJ1dHRvbiIsImZpbHRlck1vZGUiLCJvbkZpbHRlck1vZGVsQ2hhbmdlIiwib25Db2x1bW5WaXNpYmlsaXR5TW9kZWxDaGFuZ2UiLCJwYWRkaW5nIiwic3JjIiwib25DbG9zZSIsInRleHRBbGlnbiIsImdhcCIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsInBsYWNlbWVudCIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwieHMiLCJyZXF1aXJlZCIsIm11bHRpbGluZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsYWJlbCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9