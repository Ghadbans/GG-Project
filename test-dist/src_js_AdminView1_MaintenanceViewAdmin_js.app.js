"use strict";
exports.id = "src_js_AdminView1_MaintenanceViewAdmin_js";
exports.ids = ["src_js_AdminView1_MaintenanceViewAdmin_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/WarningAmber.js"
/*!**********************************************************!*\
  !*** ./node_modules/@mui/icons-material/WarningAmber.js ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


"use client";

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));
var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _default = exports["default"] = (0, _createSvgIcon.default)([/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M12 5.99 19.53 19H4.47zM12 2 1 21h22z"
}, "0"), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M13 16h-2v2h2zm0-6h-2v5h2z"
}, "1")], 'WarningAmber');

/***/ },

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

/***/ "./src/js/AdminView1/MaintenanceViewAdmin.js"
/*!***************************************************!*\
  !*** ./src/js/AdminView1/MaintenanceViewAdmin.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/ConfirmDeleteModal */ "./src/js/component/ConfirmDeleteModal.js");
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageView/Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Pagination/Pagination.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../img/no-data.png */ "./src/js/img/no-data.png");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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





































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_24__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
function MaintenanceViewAdmin() {
  var _maintenance$find;
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_41__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_41__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__.setUser)({
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/grantAccess"));
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
  var MaintenanceInfoC = grantAccess.filter(row => row.moduleName === "Maintenance" && row.access.createM === true);
  var MaintenanceInfoV = grantAccess.filter(row => row.moduleName === "Maintenance" && row.access.viewM === true);
  var MaintenanceInfoU = grantAccess.filter(row => row.moduleName === "Maintenance" && row.access.editM === true);
  var MaintenanceInfoD = grantAccess.filter(row => row.moduleName === "Maintenance" && row.access.deleteM === true);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__.logOut)());
    navigate('/');
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    maintenance = _useState4[0],
    setMaintenance = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    newPurchase = _useState6[0],
    setNewPurchase = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loadingData = _useState8[0],
    setLoadingData = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    page = _useState0[0],
    setPage = _useState0[1]; // Initialize page state to 0 (0-based index)
  var limit = 100;
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState10 = _slicedToArray(_useState1, 2),
    searchTerm = _useState10[0],
    setSearchTerm = _useState10[1]; // Initialize search term state
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState12 = _slicedToArray(_useState11, 2),
    filterField = _useState12[0],
    setFilterField = _useState12[1]; // Initialize filter field state
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    filterValue = _useState14[0],
    setFilterValue = _useState14[1]; // Initialize filter value state
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    totalPage = _useState16[0],
    SetTotalPage = _useState16[1];
  var fetchItems = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (page, searchTerm, filterField, filterValue) {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/maintenance-Information?page=").concat(page + 1, "&limit=").concat(limit, "&search=").concat(encodeURIComponent(searchTerm.trim()), "&filterField=").concat(encodeURIComponent(filterField.trim()), "&filterValue=").concat(encodeURIComponent(filterValue.trim())));
        var formatDate = res.data.itemI.map(item => _objectSpread(_objectSpread({}, item), {}, {
          id: item._id,
          serviceNumber: "M-00" + item.serviceNumber,
          dateField: dayjs__WEBPACK_IMPORTED_MODULE_38___default()(item.serviceDate).format('DD/MM/YYYY'),
          visit: dayjs__WEBPACK_IMPORTED_MODULE_38___default()(item.visitDate).format('DD/MM/YYYY')
        }));
        SetTotalPage(Math.ceil(res.data.totalItem / limit)); // Ensure totalPage is correctly calculated
        setMaintenance(formatDate);
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
  var handleRefreshSearch = () => {
    fetchItems(page, searchTerm, filterField, filterValue);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchItems(page, searchTerm, filterField, filterValue);
  }, [page, searchTerm, filterField, filterValue]);
  var handlePageChange = (event, newPage) => {
    setPage(newPage - 1); // Update page state (convert to 0-based index)
  };
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    loading = _useState18[0],
    setLoading = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    ErrorOpenModal = _useState20[0],
    setErrorOpenModal = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    loadingOpenModal = _useState22[0],
    setLoadingOpenModal = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    modalDeleteOpenLoading = _useState24[0],
    setModalDeleteOpenLoading = _useState24[1];
  {/** Loading Update View Start */}
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
  };
  {/** Loading Update View End */}
  {/** Loading Delete View Start */}
  var handleDeleteOpenLoading = () => {
    setModalDeleteOpenLoading(true);
    setLoading(true);
    handleClose();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleDeleteCloseLoading = () => {
    window.location.reload();
  };
  var handleOpenOffline = () => {
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
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    open = _useState26[0],
    setOpen = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState28 = _slicedToArray(_useState27, 2),
    DeleteId = _useState28[0],
    setDeleteId = _useState28[1];
  var handleOpen = id => {
    setOpen(true);
    setDeleteId(id);
  };
  var handleClose = () => {
    setOpen(false);
  };
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    open1 = _useState30[0],
    setOpen1 = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState32 = _slicedToArray(_useState31, 2),
    updateId = _useState32[0],
    setUpdateId = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState34 = _slicedToArray(_useState33, 2),
    status = _useState34[0],
    setStatus = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState36 = _slicedToArray(_useState35, 2),
    action = _useState36[0],
    setAction = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState38 = _slicedToArray(_useState37, 2),
    reason = _useState38[0],
    setReason = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState40 = _slicedToArray(_useState39, 2),
    invoiceN = _useState40[0],
    setInvoiceN = _useState40[1];
  {/** Update Invoice Status start */}
  ;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (updateId !== null) {
      axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/get-maintenance/").concat(updateId)).then(res => {
        // get the response data here
        setStatus(res.data.data.status);
        setAction(res.data.data.action);
        setInvoiceN(res.data.data.serviceNumber);
      }).catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
    }
  }, [updateId]);
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* () {
      var data = {
        idInfo: updateId,
        person: user.data.userName,
        reason: status + ' M-' + invoiceN,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/create-notification/"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateComment() {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleSubmitUpdateStatus = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        status
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/update-maintenance/").concat(updateId), data);
        if (res) {
          handleOpenLoading();
          handleCreateComment();
        }
      } catch (error) {
        console.error('Error making POST request:', error);
      }
    });
    return function handleSubmitUpdateStatus(_x5) {
      return _ref11.apply(this, arguments);
    };
  }();
  {/** Update Invoice Status End */}
  var handleOpenUpdate = id => {
    setOpen1(true);
    setUpdateId(id);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
    setUpdateId(null);
  };
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState42 = _slicedToArray(_useState41, 2),
    selectedRows = _useState42[0],
    setSelectedRows = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState44 = _slicedToArray(_useState43, 2),
    openDeleteMultiple = _useState44[0],
    setOpenDeleteMultiple = _useState44[1];
  var handleOpenMultiple = () => {
    setOpenDeleteMultiple(true);
  };
  var handleCloseMultiple = () => {
    setOpenDeleteMultiple(false);
  };
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    openDeleteAll = _useState46[0],
    setOpenDeleteAll = _useState46[1];
  var handleOpenAll = () => {
    setOpenDeleteAll(true);
  };
  var handleCloseAll = () => {
    setOpenDeleteAll(false);
  };
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState48 = _slicedToArray(_useState47, 2),
    openReasonDelete = _useState48[0],
    setOpenReasonDelete = _useState48[1];
  var handleOpenReasonDelete = e => {
    e.preventDefault();
    setOpenReasonDelete(true);
  };
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  var handleDelete = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* () {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/delete-maintenance/").concat(DeleteId));
        if (res) {
          setOpen(false);
          handleDeleteOpenLoading();
        }
      } catch (error) {
        alert("try again");
      }
    });
    return function handleDelete() {
      return _ref12.apply(this, arguments);
    };
  }();
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState50 = _slicedToArray(_useState49, 2),
    MaintenanceDeleted = _useState50[0],
    setMaintenanceDeleted = _useState50[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchFunction = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* () {
        var deletePromises = selectedRows.map(/*#__PURE__*/function () {
          var _ref14 = _asyncToGenerator(function* (idToDelete) {
            return axios__WEBPACK_IMPORTED_MODULE_34__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/get-maintenance/").concat(idToDelete));
          });
          return function (_x6) {
            return _ref14.apply(this, arguments);
          };
        }());
        try {
          var res = yield Promise.all(deletePromises);
          setMaintenanceDeleted(res.map(row => 'M-' + row.data.data.serviceNumber));
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
  var related = MaintenanceDeleted.map(row => row);
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
        yield axios__WEBPACK_IMPORTED_MODULE_34__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/create-notification"), data);
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
      var deletePromises = selectedRows.map(/*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator(function* (idToDelete) {
          return axios__WEBPACK_IMPORTED_MODULE_34__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_35__.ENDPOINT_URL, "/delete-maintenance/").concat(idToDelete));
        });
        return function (_x8) {
          return _ref17.apply(this, arguments);
        };
      }());
      try {
        var res = yield Promise.all(deletePromises);
        if (res) {
          handleCreateNotification();
          handleDeleteOpenLoading();
        }
      } catch (error) {
        console.log(error);
      }
    });
    return function handleDeleteMany(_x7) {
      return _ref16.apply(this, arguments);
    };
  }();
  {/** search start */}
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState52 = _slicedToArray(_useState51, 2),
    searchMaintenance = _useState52[0],
    setSearchMaintenance = _useState52[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    var storedValue = localStorage.getItem('QuickFilterMaintenance');
    if (storedValue) {
      setSearchMaintenance(storedValue);
    }
  });
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    filterModel = _React$useState2[0],
    setFilterModel = _React$useState2[1];
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState54 = _slicedToArray(_useState53, 2),
    columnVisibilityModel = _useState54[0],
    setColumnVisibilityModel = _useState54[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsMaintenance', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    var _newModel$quickFilter;
    var searchTerm = ((_newModel$quickFilter = newModel.quickFilterValues) === null || _newModel$quickFilter === void 0 ? void 0 : _newModel$quickFilter.join(' ')) || '';
    setSearchTerm(searchTerm);
    setFilterModel(newModel);
    localStorage.setItem('QuickFilterMaintenanceTst', JSON.stringify(newModel));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterMaintenanceTst'));
    if (storedQuick) {
      var _storedQuick$quickFil;
      var _searchTerm = ((_storedQuick$quickFil = storedQuick.quickFilterValues) === null || _storedQuick$quickFil === void 0 ? void 0 : _storedQuick$quickFil.join(' ')) || '';
      setSearchTerm(_searchTerm);
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsMaintenance'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, [searchMaintenance]);
  {/** search end */}
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var columns = [{
    field: 'serviceNumber',
    headerName: 'Service#',
    width: 110
  }, {
    field: 'customer',
    headerName: 'Customer Name',
    width: sideBar ? 180 : 220,
    valueGetter: params => params.row.customerName.customerName
  }, {
    field: 'brand',
    headerName: 'Item Brand',
    width: sideBar ? 100 : 140
  }, {
    field: 'status',
    headerName: 'Status',
    width: 100,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, params.row.status === 'Close' && params.row.Converted === true ? "Converted" : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      color: params.row.status === "Open" ? "blue" : params.row.status === "Pending" ? "#801313" : params.row.status === "Reschedule" ? "Orange" : params.row.status === "Cancel" ? "red" : params.row.status === "Close" ? "green" : "black"
    }, params.row.status))
  }, {
    field: 'defectDescription',
    headerName: 'Defect',
    width: sideBar ? 130 : 150
  }, {
    field: 'itemDescriptionInfo',
    headerName: 'I-Description',
    width: sideBar ? 130 : 150
  }, {
    field: 'technicianAssign',
    headerName: 'Technician',
    width: 130
  }, {
    field: 'dateField',
    headerName: 'Service Date',
    width: 120
  }, {
    field: 'action',
    headerName: 'Action',
    width: 70,
    renderCell: params => {
      params.row.action !== undefined ? params.row.action : '';
    }
  }, {
    field: 'view',
    headerName: 'View',
    width: 40,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      disabled: MaintenanceInfoV.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, {
      to: "/MaintenanceViewInformation/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        color: '#202a5a'
      }
    })))))
  }, {
    field: 'edit',
    headerName: 'Edit',
    width: 40,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onClick: () => handleOpenUpdate(params.row._id),
      disabled: params.row.status === 'Converted' && MaintenanceInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        color: 'gray'
      }
    }))))
  }, {
    field: 'Delete',
    headerName: 'Delete',
    width: 40,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "                                ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onClick: handleOpenAll,
      disabled: MaintenanceInfoD.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_27__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_32__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Maintenance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_48__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_47__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_33__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_30__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_29__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_4__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_26__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_31__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_39__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, maintenance.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'left',
      margin: '10px'
    }
  }, selectedRows.length > 1 && selectedRows.length < maintenance.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: user.data.role !== 'CEO',
    onClick: handleOpenAll,
    className: "btnCustomer2"
  }, "Delete multiple"), selectedRows.length === maintenance.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleOpenAll,
    disabled: user.data.role !== 'CEO',
    className: "btnCustomer2"
  }, "Delete all") : '') : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: MaintenanceInfoC.length === 0 && user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, {
    to: '/MaintenanceFormView',
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleRefreshSearch,
    className: "btnCustomer2"
  }, "Refresh Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_45__.DataGrid, {
    paginationMode: "server",
    rowCount: totalPage * limit,
    pagination: true,
    page: page,
    pageSize: limit,
    onPageChange: handlePageChange,
    rows: maintenance,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_46__.GridToolbar
    },
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    getRowClassName: params => {
      return newPurchase.includes(params.row._id) ? 'new-Purchase' : '';
    },
    checkboxSelection: true,
    disableDensitySelector: true,
    rowSelectionModel: selectedRows,
    filterModel: filterModel,
    onFilterModelChange: newModel => handleFilter(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    count: totalPage,
    page: page + 1,
    onChange: handlePageChange,
    color: "primary",
    sx: {
      position: 'relative',
      top: '-50px'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_ConfirmDeleteModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    open: open,
    handleClose: handleClose,
    handleDelete: handleDelete,
    itemName: ((_maintenance$find = maintenance.find(m => m._id === DeleteId)) === null || _maintenance$find === void 0 ? void 0 : _maintenance$find.serviceNumber) || "this maintenance record"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: openDeleteMultiple,
    onClose: handleCloseMultiple,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: openDeleteAll,
    onClose: handleCloseAll,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
  }, "Note:"), " Selected rows will be deleted"), selectedRows.length > 1 && selectedRows.length < maintenance.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), selectedRows.length === maintenance.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: open1,
    onClose: handleCloseUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Update Estimate Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitUpdateStatus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    id: "status"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    required: true,
    id: "status",
    value: status,
    onChange: e => setStatus(e.target.value),
    name: "status",
    label: "status",
    defaultValue: "Open"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "Open"
  }, "Open"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "Reschedule"
  }, "Reschedule"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "Pending"
  }, "Pending"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    value: "Cancel"
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    disabled: action === undefined || action === 'Carry-In',
    value: "Close"
  }, "Close")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Update")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: loadingOpenModal,
    onClose: handleCloseLoading,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_39__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_40__["default"], {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: modalDeleteOpenLoading,
    onClose: handleDeleteCloseLoading,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_19__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_39__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_40__["default"], {
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
    onClick: handleDeleteCloseLoading,
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    open: openReasonDelete,
    onClose: handleCloseReasonDelete,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: handleCloseReasonDelete,
    style: {
      position: "relative",
      float: "right"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
    style: {
      color: "#202a5a"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete: ", info, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleDeleteMany
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    container: true,
    style: {
      alignItems: "center",
      padding: "15px"
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    required: true,
    id: "reason",
    name: "reason",
    multiline: true,
    rows: 2,
    value: reason,
    placeholder: "Reason",
    onChange: e => setReason(e.target.value),
    label: "Reason",
    sx: {
      width: "100%",
      backgroundColor: "white"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "body2",
    sx: {
      mb: 1,
      mt: 1
    }
  }, "Type ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: "red",
      fontWeight: "bold"
    }
  }, "DELETE"), " to confirm bulk action:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    fullWidth: true,
    size: "small",
    placeholder: "Type DELETE here",
    id: "confirmDeleteBulk",
    autoFocus: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: "100%"
    },
    onClick: e => {
      var input = document.getElementById("confirmDeleteBulk");
      if (input && input.value !== "DELETE") {
        e.preventDefault();
        alert("Please type DELETE to confirm");
      }
    }
  }, "Confirm Bulk Delete")))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaintenanceViewAdmin);

/***/ },

/***/ "./src/js/component/ConfirmDeleteModal.js"
/*!************************************************!*\
  !*** ./src/js/component/ConfirmDeleteModal.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_icons_material_WarningAmber__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/WarningAmber */ "./node_modules/@mui/icons-material/WarningAmber.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
;



var style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
  borderTop: '8px solid #d32f2f' // Red warning border
};
var ConfirmDeleteModal = _ref => {
  var open = _ref.open,
    handleClose = _ref.handleClose,
    handleDelete = _ref.handleDelete,
    itemName = _ref.itemName;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    confirmText = _useState2[0],
    setConfirmText = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isDisabled = _useState4[0],
    setIsDisabled = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (confirmText === 'DELETE') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [confirmText]);
  var onConfirm = () => {
    handleDelete();
    setConfirmText('');
    handleClose();
  };
  var onClose = () => {
    setConfirmText('');
    handleClose();
    handleClose();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: open,
    onClose: onClose,
    "aria-labelledby": "confirm-delete-title",
    "aria-describedby": "confirm-delete-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 10
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "confirm-delete-title",
    variant: "h5",
    component: "h2",
    sx: {
      display: 'flex',
      alignItems: 'center',
      color: '#d32f2f',
      fontWeight: 'bold'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_WarningAmber__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sx: {
      mr: 1
    }
  }), " Confirm Deletion")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 2,
    sx: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: onClose,
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_9__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1",
    sx: {
      mt: 2,
      mb: 1
    }
  }, "Are you sure you want to delete ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, itemName || 'this record'), "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body2",
    color: "text.secondary",
    sx: {
      mb: 3
    }
  }, "This action is irreversible and may affect linked data.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body2",
    sx: {
      mb: 1,
      fontWeight: 'medium'
    }
  }, "Please type ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      color: '#d32f2f',
      fontWeight: 'bold'
    }
  }, "DELETE"), " to confirm:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fullWidth: true,
    size: "small",
    variant: "outlined",
    placeholder: "Type DELETE here",
    value: confirmText,
    onChange: e => setConfirmText(e.target.value),
    autoFocus: true,
    error: confirmText !== '' && confirmText !== 'DELETE'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12,
    sx: {
      mt: 3,
      display: 'flex',
      gap: 2,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: onClose,
    variant: "outlined",
    sx: {
      color: 'gray',
      borderColor: 'gray',
      '&:hover': {
        borderColor: '#202a5a',
        color: '#202a5a'
      }
    }
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: onConfirm,
    variant: "contained",
    disabled: isDisabled,
    sx: {
      bgcolor: '#d32f2f',
      '&:hover': {
        bgcolor: '#b71c1c'
      },
      '&:disabled': {
        bgcolor: '#ef9a9a',
        color: 'white'
      }
    }
  }, "Delete Irreversibly")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmDeleteModal);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfTWFpbnRlbmFuY2VWaWV3QWRtaW5fanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYjs7QUFFQSw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7QUFDbkYsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZiw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7QUFDM0Usa0JBQWtCLG1CQUFPLENBQUMsOERBQW1CO0FBQzdDLGVBQWUsa0JBQWU7QUFDOUI7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDLHlCOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEQ7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMsU0FBUyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOVixDQUFrRDtBQUNlO0FBQzlDO0FBQ2U7QUFDZ0I7QUFDRTtBQUNzQjtBQUNkO0FBQ1o7QUFDSTtBQUNJO0FBQ3NNO0FBQzlMO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNJO0FBQ0k7QUFDVjtBQUNVO0FBQ2M7QUFDSTtBQUN4QztBQUNrQjtBQUNrQjtBQUNwQztBQUNlO0FBQ3FCO0FBQ1I7QUFDMEI7QUFDaEM7QUFDVDtBQUNrQjtBQUNQO0FBQ1E7QUFHMUQsSUFBTW1FLGFBQWEsR0FBR3JELDBEQUFNLENBQUNzRCxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDakR4RSwwREFBQSxDQUFDa0MsOERBQU8sRUFBQXdDLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxD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QUFFQSxPQUFPLEVBQUUsU0FBUztRQUFFbEIsS0FBSyxFQUFFO01BQVE7SUFDdkQ7RUFBRSxHQUNMLHFCQUVPLENBQ04sQ0FDSixDQUNMLENBQ0YsQ0FBQztBQUVoQixDQUFDO0FBRUQsaUVBQWUvRSxrQkFBa0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9ub2RlX21vZHVsZXMvQG11aS9pY29ucy1tYXRlcmlhbC9XYXJuaW5nQW1iZXIuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BZGQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL01haW50ZW5hbmNlVmlld0FkbWluLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvY29tcG9uZW50L0NvbmZpcm1EZWxldGVNb2RhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblwidXNlIGNsaWVudFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xudmFyIF9qc3hSdW50aW1lID0gcmVxdWlyZShcInJlYWN0L2pzeC1ydW50aW1lXCIpO1xudmFyIF9kZWZhdWx0ID0gZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKFsvKiNfX1BVUkVfXyovKDAsIF9qc3hSdW50aW1lLmpzeCkoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgNS45OSAxOS41MyAxOUg0LjQ3ek0xMiAyIDEgMjFoMjJ6XCJcbn0sIFwiMFwiKSwgLyojX19QVVJFX18qLygwLCBfanN4UnVudGltZS5qc3gpKFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEzIDE2aC0ydjJoMnptMC02aC0ydjVoMnpcIlxufSwgXCIxXCIpXSwgJ1dhcm5pbmdBbWJlcicpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ6XCJcbn0pLCAnQWRkJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENvbmZpcm1EZWxldGVNb2RhbCBmcm9tICcuLi9jb21wb25lbnQvQ29uZmlybURlbGV0ZU1vZGFsJztcclxuaW1wb3J0ICcuL3ZpZXcuY3NzJ1xyXG5pbXBvcnQgJy4vUGFnZVZpZXcvQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBTaWRlYmFyRGFzaCBmcm9tICcuLi9jb21wb25lbnQvU2lkZWJhckRhc2gnXHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IFZpc2liaWxpdHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVmlzaWJpbGl0eSc7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IE5hdkxpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IFRhYmxlLCBJY29uQnV0dG9uLCBzdHlsZWQsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBDaGVja2JveCwgVGFibGVDb250YWluZXIsIFBhcGVyLCBUeXBvZ3JhcGh5LCBNb2RhbCwgQm94LCBHcmlkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBNZW51SXRlbSwgQmFja2Ryb3AsIEF1dG9jb21wbGV0ZSwgVGV4dEZpZWxkLCBQYWdpbmF0aW9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgQWRkLCBDbG9zZSwgTWFpbE91dGxpbmUgfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnQvTG9hZGVyJztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgbG9nT3V0LCBzZWxlY3RDdXJyZW50VXNlciwgc2V0VXNlciB9IGZyb20gJy4uL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IExvZ291dCBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi9pbWcvbm8tZGF0YS5wbmcnO1xyXG5pbXBvcnQgeyBEYXRhR3JpZCwgR3JpZFRvb2xiYXIgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcclxuaW1wb3J0IE1lc3NhZ2VBZG1pblZpZXcgZnJvbSAnLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4vTm90aWZpY2F0aW9uVklld0luZm8nO1xyXG5cclxuXHJcbmNvbnN0IERlbGV0ZVRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBFZGl0VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnZ3JheScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IFZpZXdUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMjAyYTVhJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgdG9wOiAnNTAlJyxcclxuICBsZWZ0OiAnNTAlJyxcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxyXG4gIHdpZHRoOiA0MDAsXHJcbiAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxyXG4gIGJveFNoYWRvdzogMjQsXHJcbiAgcHQ6IDIsXHJcbiAgcHg6IDQsXHJcbiAgcGI6IDMsXHJcbn07XHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMjQwO1xyXG5jb25zdCBBcHBCYXIgPSBzdHlsZWQoTXVpQXBwQmFyLCB7XHJcbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicsXHJcbn0pKCh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICB9KSxcclxuICAuLi4ob3BlbiAmJiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0pLFxyXG59KSk7XHJcbmNvbnN0IERyYXdlciA9IHN0eWxlZChNdWlEcmF3ZXIsIHsgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PiBwcm9wICE9PSAnb3BlbicgfSkoXHJcbiAgKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICAgICcmIC5NdWlEcmF3ZXItcGFwZXInOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgICAgfSksXHJcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxyXG4gICAgICAuLi4oIW9wZW4gJiYge1xyXG4gICAgICAgIG92ZXJmbG93WDogJ2hpZGRlbicsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoNyksXHJcbiAgICAgICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOSksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG5mdW5jdGlvbiBNYWludGVuYW5jZVZpZXdBZG1pbigpIHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSwgaWQ6IHJlcy5kYXRhLmRhdGEuX2lkIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgY29uc3QgW2dyYW50QWNjZXNzLCBzZXRHcmFudEFjY2Vzc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoTnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dyYW50QWNjZXNzYCk7XHJcbiAgICAgICAgcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cudXNlcklEID09PSB1c2VyLmRhdGEuaWQpXHJcbiAgICAgICAgICAubWFwKChyb3cpID0+IHNldEdyYW50QWNjZXNzKHJvdy5tb2R1bGVzKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hOdW1iZXIoKVxyXG4gIH0sIFt1c2VyXSlcclxuXHJcbiAgY29uc3QgTWFpbnRlbmFuY2VJbmZvQyA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJNYWludGVuYW5jZVwiICYmIHJvdy5hY2Nlc3MuY3JlYXRlTSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgTWFpbnRlbmFuY2VJbmZvViA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJNYWludGVuYW5jZVwiICYmIHJvdy5hY2Nlc3Mudmlld00gPT09IHRydWUpO1xyXG4gIGNvbnN0IE1haW50ZW5hbmNlSW5mb1UgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiTWFpbnRlbmFuY2VcIiAmJiByb3cuYWNjZXNzLmVkaXRNID09PSB0cnVlKTtcclxuICBjb25zdCBNYWludGVuYW5jZUluZm9EID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIk1haW50ZW5hbmNlXCIgJiYgcm93LmFjY2Vzcy5kZWxldGVNID09PSB0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW21haW50ZW5hbmNlLCBzZXRNYWludGVuYW5jZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25ld1B1cmNoYXNlLCBzZXROZXdQdXJjaGFzZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKTsgLy8gSW5pdGlhbGl6ZSBwYWdlIHN0YXRlIHRvIDAgKDAtYmFzZWQgaW5kZXgpXHJcbiAgY29uc3QgbGltaXQgPSAxMDA7XHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoJycpOyAvLyBJbml0aWFsaXplIHNlYXJjaCB0ZXJtIHN0YXRlXHJcbiAgY29uc3QgW2ZpbHRlckZpZWxkLCBzZXRGaWx0ZXJGaWVsZF0gPSB1c2VTdGF0ZSgnJyk7IC8vIEluaXRpYWxpemUgZmlsdGVyIGZpZWxkIHN0YXRlXHJcbiAgY29uc3QgW2ZpbHRlclZhbHVlLCBzZXRGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7IC8vIEluaXRpYWxpemUgZmlsdGVyIHZhbHVlIHN0YXRlXHJcbiAgY29uc3QgW3RvdGFsUGFnZSwgU2V0VG90YWxQYWdlXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBmZXRjaEl0ZW1zID0gYXN5bmMgKHBhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vbWFpbnRlbmFuY2UtSW5mb3JtYXRpb24/cGFnZT0ke3BhZ2UgKyAxfSZsaW1pdD0ke2xpbWl0fSZzZWFyY2g9JHtlbmNvZGVVUklDb21wb25lbnQoc2VhcmNoVGVybS50cmltKCkpfSZmaWx0ZXJGaWVsZD0ke2VuY29kZVVSSUNvbXBvbmVudChmaWx0ZXJGaWVsZC50cmltKCkpfSZmaWx0ZXJWYWx1ZT0ke2VuY29kZVVSSUNvbXBvbmVudChmaWx0ZXJWYWx1ZS50cmltKCkpfWApO1xyXG4gICAgICBjb25zdCBmb3JtYXREYXRlID0gcmVzLmRhdGEuaXRlbUkubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgaWQ6IGl0ZW0uX2lkLFxyXG4gICAgICAgIHNlcnZpY2VOdW1iZXI6IFwiTS0wMFwiICsgaXRlbS5zZXJ2aWNlTnVtYmVyLFxyXG4gICAgICAgIGRhdGVGaWVsZDogZGF5anMoaXRlbS5zZXJ2aWNlRGF0ZSkuZm9ybWF0KCdERC9NTS9ZWVlZJyksXHJcbiAgICAgICAgdmlzaXQ6IGRheWpzKGl0ZW0udmlzaXREYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSxcclxuICAgICAgfSkpO1xyXG4gICAgICBTZXRUb3RhbFBhZ2UoTWF0aC5jZWlsKHJlcy5kYXRhLnRvdGFsSXRlbSAvIGxpbWl0KSk7IC8vIEVuc3VyZSB0b3RhbFBhZ2UgaXMgY29ycmVjdGx5IGNhbGN1bGF0ZWRcclxuICAgICAgc2V0TWFpbnRlbmFuY2UoZm9ybWF0RGF0ZSk7XHJcbiAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVSZWZyZXNoU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgZmV0Y2hJdGVtcyhwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpO1xyXG4gIH07XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hJdGVtcyhwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpO1xyXG4gIH0sIFtwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWVdKTtcclxuXHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKGV2ZW50LCBuZXdQYWdlKSA9PiB7XHJcbiAgICBzZXRQYWdlKG5ld1BhZ2UgLSAxKTsgLy8gVXBkYXRlIHBhZ2Ugc3RhdGUgKGNvbnZlcnQgdG8gMC1iYXNlZCBpbmRleClcclxuICB9O1xyXG5cclxuXHJcblxyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbERlbGV0ZU9wZW5Mb2FkaW5nLCBzZXRNb2RhbERlbGV0ZU9wZW5Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB7LyoqIExvYWRpbmcgVXBkYXRlIFZpZXcgU3RhcnQgKi8gfVxyXG4gIGNvbnN0IGhhbmRsZU9wZW5Mb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBoYW5kbGVDbG9zZVVwZGF0ZSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfVxyXG4gIHsvKiogTG9hZGluZyBVcGRhdGUgVmlldyBFbmQgKi8gfVxyXG5cclxuICB7LyoqIExvYWRpbmcgRGVsZXRlIFZpZXcgU3RhcnQgKi8gfVxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZU9wZW5Mb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxEZWxldGVPcGVuTG9hZGluZyh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBoYW5kbGVDbG9zZSgpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQ2xvc2VMb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk9mZmxpbmUgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRFcnJvck9wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbRGVsZXRlSWQsIHNldERlbGV0ZUlkXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW4gPSAoaWQpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICBzZXREZWxldGVJZChpZClcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbb3BlbjEsIHNldE9wZW4xXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXBkYXRlSWQsIHNldFVwZGF0ZUlkXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthY3Rpb24sIHNldEFjdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ludm9pY2VOLCBzZXRJbnZvaWNlTl0gPSB1c2VTdGF0ZSgwKVxyXG4gIHsvKiogVXBkYXRlIEludm9pY2UgU3RhdHVzIHN0YXJ0ICovIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVwZGF0ZUlkICE9PSBudWxsKSB7XHJcbiAgICAgIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1tYWludGVuYW5jZS8ke3VwZGF0ZUlkfWApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIC8vIGdldCB0aGUgcmVzcG9uc2UgZGF0YSBoZXJlXHJcbiAgICAgICAgICBzZXRTdGF0dXMocmVzLmRhdGEuZGF0YS5zdGF0dXMpO1xyXG4gICAgICAgICAgc2V0QWN0aW9uKHJlcy5kYXRhLmRhdGEuYWN0aW9uKTtcclxuICAgICAgICAgIHNldEludm9pY2VOKHJlcy5kYXRhLmRhdGEuc2VydmljZU51bWJlcik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgLy8gSGFuZGxlIGVycm9yc1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3VwZGF0ZUlkXSk7XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQ29tbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogdXBkYXRlSWQsXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lLFxyXG4gICAgICByZWFzb246IHN0YXR1cyArICcgTS0nICsgaW52b2ljZU4sXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbi9gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdFVwZGF0ZVN0YXR1cyA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBzdGF0dXNcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtbWFpbnRlbmFuY2UvJHt1cGRhdGVJZH1gLCBkYXRhKVxyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaGFuZGxlT3BlbkxvYWRpbmcoKTtcclxuICAgICAgICBoYW5kbGVDcmVhdGVDb21tZW50KCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG1ha2luZyBQT1NUIHJlcXVlc3Q6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICB7LyoqIFVwZGF0ZSBJbnZvaWNlIFN0YXR1cyBFbmQgKi8gfVxyXG4gIGNvbnN0IGhhbmRsZU9wZW5VcGRhdGUgPSAoaWQpID0+IHtcclxuICAgIHNldE9wZW4xKHRydWUpO1xyXG4gICAgc2V0VXBkYXRlSWQoaWQpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgICBzZXRVcGRhdGVJZChudWxsKTtcclxuICB9O1xyXG4gIGNvbnN0IFtzZWxlY3RlZFJvd3MsIHNldFNlbGVjdGVkUm93c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW29wZW5EZWxldGVNdWx0aXBsZSwgc2V0T3BlbkRlbGV0ZU11bHRpcGxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3Blbk11bHRpcGxlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRlbGV0ZU11bHRpcGxlKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNdWx0aXBsZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5EZWxldGVNdWx0aXBsZShmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBbb3BlbkRlbGV0ZUFsbCwgc2V0T3BlbkRlbGV0ZUFsbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5BbGwgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRGVsZXRlQWxsKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VBbGwgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRGVsZXRlQWxsKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IFtvcGVuUmVhc29uRGVsZXRlLCBzZXRPcGVuUmVhc29uRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtFTkRQT0lOVF9VUkx9L2RlbGV0ZS1tYWludGVuYW5jZS8ke0RlbGV0ZUlkfWApO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgICAgaGFuZGxlRGVsZXRlT3BlbkxvYWRpbmcoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoXCJ0cnkgYWdhaW5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBbTWFpbnRlbmFuY2VEZWxldGVkLCBzZXRNYWludGVuYW5jZURlbGV0ZWRdID0gdXNlU3RhdGUoW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZVByb21pc2VzID0gc2VsZWN0ZWRSb3dzLm1hcChhc3luYyAoaWRUb0RlbGV0ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtbWFpbnRlbmFuY2UvJHtpZFRvRGVsZXRlfWApXHJcbiAgICAgIH0pXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgUHJvbWlzZS5hbGwoZGVsZXRlUHJvbWlzZXMpO1xyXG4gICAgICAgIHNldE1haW50ZW5hbmNlRGVsZXRlZChyZXMubWFwKChyb3cpID0+ICdNLScgKyByb3cuZGF0YS5kYXRhLnNlcnZpY2VOdW1iZXIpKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaEZ1bmN0aW9uKClcclxuICB9LCBbc2VsZWN0ZWRSb3dzXSlcclxuICBjb25zdCByZWxhdGVkID0gTWFpbnRlbmFuY2VEZWxldGVkLm1hcChyb3cgPT4gcm93KVxyXG4gIGNvbnN0IGluZm8gPSByZWxhdGVkLnRvU3RyaW5nKClcclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86ICcnLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgRGVsZXRlZCAnICsgaW5mbyxcclxuICAgICAgcmVhc29uLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbmAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlTWFueSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IGRlbGV0ZVByb21pc2VzID0gc2VsZWN0ZWRSb3dzLm1hcChhc3luYyAoaWRUb0RlbGV0ZSkgPT4ge1xyXG4gICAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLW1haW50ZW5hbmNlLyR7aWRUb0RlbGV0ZX1gKVxyXG4gICAgfSlcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByb21pc2UuYWxsKGRlbGV0ZVByb21pc2VzKTtcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbigpXHJcbiAgICAgICAgaGFuZGxlRGVsZXRlT3BlbkxvYWRpbmcoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIHsvKiogc2VhcmNoIHN0YXJ0ICovIH1cclxuICBjb25zdCBbc2VhcmNoTWFpbnRlbmFuY2UsIHNldFNlYXJjaE1haW50ZW5hbmNlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1F1aWNrRmlsdGVyTWFpbnRlbmFuY2UnKVxyXG4gICAgaWYgKHN0b3JlZFZhbHVlKSB7XHJcbiAgICAgIHNldFNlYXJjaE1haW50ZW5hbmNlKHN0b3JlZFZhbHVlKVxyXG4gICAgfVxyXG5cclxuICB9KVxyXG4gIGNvbnN0IFtmaWx0ZXJNb2RlbCwgc2V0RmlsdGVyTW9kZWxdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgaXRlbXM6IFtdLFxyXG4gICAgcXVpY2tGaWx0ZXJFeGNsdWRlSGlkZGVuQ29sdW1uczogdHJ1ZSxcclxuICAgIHF1aWNrRmlsdGVyVmFsdWVzOiBbXSxcclxuICB9KTtcclxuICBjb25zdCBbY29sdW1uVmlzaWJpbGl0eU1vZGVsLCBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWxdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IGhhbmRlbEhpZGRlbkNvbHVtbiA9IChuZXdIaWRkZW4pID0+IHtcclxuICAgIHNldENvbHVtblZpc2liaWxpdHlNb2RlbChuZXdIaWRkZW4pXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnSGlkZGVuQ29sdW1uc01haW50ZW5hbmNlJywgSlNPTi5zdHJpbmdpZnkobmV3SGlkZGVuKSlcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRmlsdGVyID0gKG5ld01vZGVsKSA9PiB7XHJcbiAgICBjb25zdCBzZWFyY2hUZXJtID0gbmV3TW9kZWwucXVpY2tGaWx0ZXJWYWx1ZXM/LmpvaW4oJyAnKSB8fCAnJztcclxuICAgIHNldFNlYXJjaFRlcm0oc2VhcmNoVGVybSk7XHJcbiAgICBzZXRGaWx0ZXJNb2RlbChuZXdNb2RlbClcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUXVpY2tGaWx0ZXJNYWludGVuYW5jZVRzdCcsIEpTT04uc3RyaW5naWZ5KG5ld01vZGVsKSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFF1aWNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUXVpY2tGaWx0ZXJNYWludGVuYW5jZVRzdCcpKVxyXG4gICAgaWYgKHN0b3JlZFF1aWNrKSB7XHJcbiAgICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBzdG9yZWRRdWljay5xdWlja0ZpbHRlclZhbHVlcz8uam9pbignICcpIHx8ICcnO1xyXG4gICAgICBzZXRTZWFyY2hUZXJtKHNlYXJjaFRlcm0pO1xyXG4gICAgICBzZXRGaWx0ZXJNb2RlbChzdG9yZWRRdWljaylcclxuICAgIH1cclxuICAgIGNvbnN0IHN0b3JlZENvbHVtbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdIaWRkZW5Db2x1bW5zTWFpbnRlbmFuY2UnKSlcclxuICAgIGlmIChzdG9yZWRDb2x1bW5zKSB7XHJcbiAgICAgIHNldENvbHVtblZpc2liaWxpdHlNb2RlbChzdG9yZWRDb2x1bW5zKVxyXG4gICAgfVxyXG5cclxuICB9LCBbc2VhcmNoTWFpbnRlbmFuY2VdKVxyXG4gIHsvKiogc2VhcmNoIGVuZCAqLyB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgeyBmaWVsZDogJ3NlcnZpY2VOdW1iZXInLCBoZWFkZXJOYW1lOiAnU2VydmljZSMnLCB3aWR0aDogMTEwIH0sXHJcbiAgICB7IGZpZWxkOiAnY3VzdG9tZXInLCBoZWFkZXJOYW1lOiAnQ3VzdG9tZXIgTmFtZScsIHdpZHRoOiBzaWRlQmFyID8gMTgwIDogMjIwLCB2YWx1ZUdldHRlcjogKHBhcmFtcykgPT4gcGFyYW1zLnJvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lIH0sXHJcbiAgICB7IGZpZWxkOiAnYnJhbmQnLCBoZWFkZXJOYW1lOiAnSXRlbSBCcmFuZCcsIHdpZHRoOiBzaWRlQmFyID8gMTAwIDogMTQwLCB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ3N0YXR1cycsIGhlYWRlck5hbWU6ICdTdGF0dXMnLCB3aWR0aDogMTAwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcGFyYW1zLnJvdy5zdGF0dXMgPT09ICdDbG9zZScgJiYgcGFyYW1zLnJvdy5Db252ZXJ0ZWQgPT09IHRydWUgPyBcIkNvbnZlcnRlZFwiIDpcclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e1xyXG4gICAgICAgICAgICAgICAgICBwYXJhbXMucm93LnN0YXR1cyA9PT0gXCJPcGVuXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiYmx1ZVwiIDpcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMucm93LnN0YXR1cyA9PT0gXCJQZW5kaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgID8gXCIjODAxMzEzXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnJvdy5zdGF0dXMgPT09IFwiUmVzY2hlZHVsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJPcmFuZ2VcIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzID09PSBcIkNhbmNlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJlZFwiIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMucm93LnN0YXR1cyA9PT0gXCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZ3JlZW5cIiA6IFwiYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwYXJhbXMucm93LnN0YXR1c31cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAgeyBmaWVsZDogJ2RlZmVjdERlc2NyaXB0aW9uJywgaGVhZGVyTmFtZTogJ0RlZmVjdCcsIHdpZHRoOiBzaWRlQmFyID8gMTMwIDogMTUwIH0sXHJcbiAgICB7IGZpZWxkOiAnaXRlbURlc2NyaXB0aW9uSW5mbycsIGhlYWRlck5hbWU6ICdJLURlc2NyaXB0aW9uJywgd2lkdGg6IHNpZGVCYXIgPyAxMzAgOiAxNTAgfSxcclxuICAgIHsgZmllbGQ6ICd0ZWNobmljaWFuQXNzaWduJywgaGVhZGVyTmFtZTogJ1RlY2huaWNpYW4nLCB3aWR0aDogMTMwIH0sXHJcbiAgICB7IGZpZWxkOiAnZGF0ZUZpZWxkJywgaGVhZGVyTmFtZTogJ1NlcnZpY2UgRGF0ZScsIHdpZHRoOiAxMjAgfSxcclxuICAgIHsgZmllbGQ6ICdhY3Rpb24nLCBoZWFkZXJOYW1lOiAnQWN0aW9uJywgd2lkdGg6IDcwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiB7IHBhcmFtcy5yb3cuYWN0aW9uICE9PSB1bmRlZmluZWQgPyBwYXJhbXMucm93LmFjdGlvbiA6ICcnIH0gfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICd2aWV3JywgaGVhZGVyTmFtZTogJ1ZpZXcnLCB3aWR0aDogNDAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJWaWV3XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e01haW50ZW5hbmNlSW5mb1YubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgdG89e2AvTWFpbnRlbmFuY2VWaWV3SW5mb3JtYXRpb24vJHtwYXJhbXMucm93Ll9pZH1gfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5SWNvbiBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuXHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnZWRpdCcsIGhlYWRlck5hbWU6ICdFZGl0Jywgd2lkdGg6IDQwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPEVkaXRUb29sdGlwIHRpdGxlPVwiRWRpdFwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5VcGRhdGUocGFyYW1zLnJvdy5faWQpfSBkaXNhYmxlZD17cGFyYW1zLnJvdy5zdGF0dXMgPT09ICdDb252ZXJ0ZWQnICYmIE1haW50ZW5hbmNlSW5mb1UubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgPEVkaXRJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRWRpdFRvb2x0aXA+XHJcblxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ0RlbGV0ZScsIGhlYWRlck5hbWU6ICdEZWxldGUnLCB3aWR0aDogNDAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8RGVsZXRlVG9vbHRpcCB0aXRsZT1cIkRlbGV0ZVwiPlxyXG4gICAgICAgICAgPHNwYW4+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuQWxsfSBkaXNhYmxlZD17TWFpbnRlbmFuY2VJbmZvRC5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRGVsZXRlVG9vbHRpcD5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICBdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBNYWludGVuYW5jZVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiAxIH19ID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxvYWRpbmdEYXRhID8gPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICB7bWFpbnRlbmFuY2UubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdsZWZ0JywgbWFyZ2luOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPiAxICYmIHNlbGVjdGVkUm93cy5sZW5ndGggPCBtYWludGVuYW5jZS5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30gb25DbGljaz17aGFuZGxlT3BlbkFsbH0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInPkRlbGV0ZSBtdWx0aXBsZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MubGVuZ3RoID09PSBtYWludGVuYW5jZS5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuQWxsfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+RGVsZXRlIGFsbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcsIG1hcmdpbjogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17TWFpbnRlbmFuY2VJbmZvQy5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy9NYWludGVuYW5jZUZvcm1WaWV3J30gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyQWRkaW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZWZyZXNoU2VhcmNofSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+UmVmcmVzaCBTZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyBoZWlnaHQ6IDYwMCwgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uTW9kZT1cInNlcnZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q291bnQ9e3RvdGFsUGFnZSAqIGxpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtsaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXttYWludGVuYW5jZX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzbG90cz17eyB0b29sYmFyOiBHcmlkVG9vbGJhciB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Sb3dTZWxlY3Rpb25Nb2RlbENoYW5nZT17KG5ld1NlbGVjdGlvbikgPT4gc2V0U2VsZWN0ZWRSb3dzKG5ld1NlbGVjdGlvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzbG90UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dRdWlja0ZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVUb29sYmFyQnV0dG9uOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBnZXRSb3dDbGFzc05hbWU9eyhwYXJhbXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld1B1cmNoYXNlLmluY2x1ZGVzKHBhcmFtcy5yb3cuX2lkKSA/ICduZXctUHVyY2hhc2UnIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveFNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURlbnNpdHlTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uTW9kZWw9e3NlbGVjdGVkUm93c31cclxuICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck1vZGVsPXtmaWx0ZXJNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uRmlsdGVyTW9kZWxDaGFuZ2U9eyhuZXdNb2RlbCkgPT4gaGFuZGxlRmlsdGVyKG5ld01vZGVsKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZpc2liaWxpdHlNb2RlbD17Y29sdW1uVmlzaWJpbGl0eU1vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25Db2x1bW5WaXNpYmlsaXR5TW9kZWxDaGFuZ2U9e2hhbmRlbEhpZGRlbkNvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgcGFkZGluZzogJzEwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBjb3VudD17dG90YWxQYWdlfSBwYWdlPXtwYWdlICsgMX0gb25DaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9IGNvbG9yPVwicHJpbWFyeVwiIHN4PXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICctNTBweCcgfX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Q29uZmlybURlbGV0ZU1vZGFsIG9wZW49e29wZW59IGhhbmRsZUNsb3NlPXtoYW5kbGVDbG9zZX0gaGFuZGxlRGVsZXRlPXtoYW5kbGVEZWxldGV9IGl0ZW1OYW1lPXttYWludGVuYW5jZS5maW5kKG0gPT4gbS5faWQgPT09IERlbGV0ZUlkKT8uc2VydmljZU51bWJlciB8fCBcInRoaXMgbWFpbnRlbmFuY2UgcmVjb3JkXCJ9IC8+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5EZWxldGVNdWx0aXBsZX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU11bHRpcGxlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8aDI+RG8geW91IHdhbnQgdG8gRGVsZXRlID88L2gyPlxyXG4gICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGU6PC9zcGFuPiBBbGwgc2VsZWN0ZWQgcm93cyB3aWxsIGJlIGRlbGV0ZWQ8L3A+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZU1hbnl9PlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZU11bHRpcGxlfT5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuRGVsZXRlQWxsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlQWxsfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICA8aDI+RG8geW91IHdhbnQgdG8gRGVsZXRlID88L2gyPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGU6PC9zcGFuPiBTZWxlY3RlZCByb3dzIHdpbGwgYmUgZGVsZXRlZDwvcD5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPiAxICYmIHNlbGVjdGVkUm93cy5sZW5ndGggPCBtYWludGVuYW5jZS5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gQWxsIHNlbGVjdGVkIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dzLmxlbmd0aCA9PT0gbWFpbnRlbmFuY2UubGVuZ3RoICYmIChcclxuICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZTo8L3NwYW4+IEFsbCByb3dzIHdpbGwgYmUgZGVsZXRlZDwvcD5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMicgb25DbGljaz17aGFuZGxlT3BlblJlYXNvbkRlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlQWxsfT5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgey8qKiBNb2RhbCBmb3IgRGVjaWRpbmcgdG8gRGVsZXRlIEludm9pY2UgRW5kICovfVxyXG4gICAgICB7LyoqIE1vZGFsIGZvciBVcGRhdGluZyBJbnZvaWNlIFN0YXR1cyBTdGFydCAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbjF9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VVcGRhdGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVVwZGF0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgVXBkYXRlIEVzdGltYXRlIFN0YXR1c1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFVwZGF0ZVN0YXR1c30+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInN0YXR1c1wiPlN0YXR1czwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJPcGVuXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIk9wZW5cIj5PcGVuPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJSZXNjaGVkdWxlXCI+UmVzY2hlZHVsZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiUGVuZGluZ1wiPlBlbmRpbmc8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkNhbmNlbFwiPkNhbmNlbDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpc2FibGVkPXthY3Rpb24gPT09IHVuZGVmaW5lZCB8fCBhY3Rpb24gPT09ICdDYXJyeS1Jbid9IHZhbHVlPVwiQ2xvc2VcIj5DbG9zZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlVwZGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyoqIE1vZGFsIGZvciBVcGRhdGluZyBJbnZvaWNlIFN0YXR1cyBFbmQgKi99XHJcbiAgICAgIHsvKiogTW9kYWwgZm9yIGxvYWRpbmcgVXBkYXRlIFN0YXR1cyBTdGFydCAqL31cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bG9hZGluZ09wZW5Nb2RhbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUxvYWRpbmd9XHJcbiAgICAgICAgY2xvc2VBZnRlclRyYW5zaXRpb25cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgPGgyPiBEYXRhIFNhdmVkIHN1Y2Nlc3NmdWxseTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTG9hZGluZ30gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICB7LyoqIE1vZGFsIGZvciBsb2FkaW5nIFVwZGF0ZSBTdGF0dXMgRW5kICovfVxyXG4gICAgICB7LyoqIE1vZGFsIGZvciBsb2FkaW5nIERlbGV0ZSBJbnZvaWNlIFN0YXJ0ICovfVxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXttb2RhbERlbGV0ZU9wZW5Mb2FkaW5nfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZURlbGV0ZUNsb3NlTG9hZGluZ31cclxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudD17QmFja2Ryb3B9XHJcbiAgICAgICAgQmFja2Ryb3BQcm9wcz17e1xyXG4gICAgICAgICAgdGltZW91dDogNTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxoMj4gRGF0YSBzdWNjZXNzZnVsbHkgZGVsZXRlZDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlQ2xvc2VMb2FkaW5nfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PVwibGVmdFwiPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZX0gc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgZmxvYXQ6IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6IFwiIzIwMmE1YVwiIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgV2h5IGRvIHlvdSB3YW50IHRvIGRlbGV0ZToge2luZm99P1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZURlbGV0ZU1hbnl9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogXCJjZW50ZXJcIiwgcGFkZGluZzogXCIxNXB4XCIgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICBpZD1cInJlYXNvblwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWFzb25cIlxyXG4gICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgcm93cz17Mn1cclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJSZWFzb25cIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFJlYXNvbihlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVhc29uXCJcclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgc3g9e3sgbWI6IDEsIG10OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgICBUeXBlIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9fT5ERUxFVEU8L3NwYW4+IHRvIGNvbmZpcm0gYnVsayBhY3Rpb246XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGZ1bGxXaWR0aCBzaXplPVwic21hbGxcIiBwbGFjZWhvbGRlcj1cIlR5cGUgREVMRVRFIGhlcmVcIiBpZD1cImNvbmZpcm1EZWxldGVCdWxrXCIgYXV0b0ZvY3VzIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIHtpbmZvICYmIChcclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bkN1c3RvbWVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm1EZWxldGVCdWxrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0ICYmIGlucHV0LnZhbHVlICE9PSBcIkRFTEVURVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgdHlwZSBERUxFVEUgdG8gY29uZmlybVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQ29uZmlybSBCdWxrIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW50ZW5hbmNlVmlld0FkbWluXHJcblxyXG5cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCwgQm94LCBUeXBvZ3JhcGh5LCBUZXh0RmllbGQsIEJ1dHRvbiwgR3JpZCwgSWNvbkJ1dHRvbiB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IFdhcm5pbmdBbWJlckljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9XYXJuaW5nQW1iZXInO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Nsb3NlJztcblxuY29uc3Qgc3R5bGUgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgIHdpZHRoOiA0NTAsXG4gICAgYmdjb2xvcjogJ2JhY2tncm91bmQucGFwZXInLFxuICAgIGJveFNoYWRvdzogMjQsXG4gICAgcDogNCxcbiAgICBib3JkZXJSYWRpdXM6ICc4cHgnLFxuICAgIGJvcmRlclRvcDogJzhweCBzb2xpZCAjZDMyZjJmJyAvLyBSZWQgd2FybmluZyBib3JkZXJcbn07XG5cbmNvbnN0IENvbmZpcm1EZWxldGVNb2RhbCA9ICh7IG9wZW4sIGhhbmRsZUNsb3NlLCBoYW5kbGVEZWxldGUsIGl0ZW1OYW1lIH0pID0+IHtcbiAgICBjb25zdCBbY29uZmlybVRleHQsIHNldENvbmZpcm1UZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaXNEaXNhYmxlZCwgc2V0SXNEaXNhYmxlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjb25maXJtVGV4dCA9PT0gJ0RFTEVURScpIHtcbiAgICAgICAgICAgIHNldElzRGlzYWJsZWQoZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0SXNEaXNhYmxlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH0sIFtjb25maXJtVGV4dF0pO1xuXG4gICAgY29uc3Qgb25Db25maXJtID0gKCkgPT4ge1xuICAgICAgICBoYW5kbGVEZWxldGUoKTtcbiAgICAgICAgc2V0Q29uZmlybVRleHQoJycpO1xuICAgICAgICBoYW5kbGVDbG9zZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkNsb3NlID0gKCkgPT4ge1xuICAgICAgICBzZXRDb25maXJtVGV4dCgnJyk7XG4gICAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgICAgIGhhbmRsZUNsb3NlKCk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjb25maXJtLWRlbGV0ZS10aXRsZVwiXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY29uZmlybS1kZWxldGUtZGVzY3JpcHRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cImNvbmZpcm0tZGVsZXRlLXRpdGxlXCIgdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIiBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogJyNkMzJmMmYnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdhcm5pbmdBbWJlckljb24gc3g9e3sgbXI6IDEgfX0gLz4gQ29uZmlybSBEZWxldGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IHN4PXt7IHRleHRBbGlnbjogJ3JpZ2h0JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9IHNpemU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiIHN4PXt7IG10OiAyLCBtYjogMSB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIDxzdHJvbmc+e2l0ZW1OYW1lIHx8ICd0aGlzIHJlY29yZCd9PC9zdHJvbmc+P1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0LnNlY29uZGFyeVwiIHN4PXt7IG1iOiAzIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgYWN0aW9uIGlzIGlycmV2ZXJzaWJsZSBhbmQgbWF5IGFmZmVjdCBsaW5rZWQgZGF0YS5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIHN4PXt7IG1iOiAxLCBmb250V2VpZ2h0OiAnbWVkaXVtJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgdHlwZSA8c3BhbiBzdHlsZT17eyBjb2xvcjogJyNkMzJmMmYnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+REVMRVRFPC9zcGFuPiB0byBjb25maXJtOlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgREVMRVRFIGhlcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25maXJtVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldENvbmZpcm1UZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17Y29uZmlybVRleHQgIT09ICcnICYmIGNvbmZpcm1UZXh0ICE9PSAnREVMRVRFJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc3g9e3sgbXQ6IDMsIGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAyLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbG9zZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgY29sb3I6ICdncmF5JywgYm9yZGVyQ29sb3I6ICdncmF5JywgJyY6aG92ZXInOiB7IGJvcmRlckNvbG9yOiAnIzIwMmE1YScsIGNvbG9yOiAnIzIwMmE1YScgfSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ29uZmlybX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZ2NvbG9yOiAnI2QzMmYyZicsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJjpob3Zlcic6IHsgYmdjb2xvcjogJyNiNzFjMWMnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmOmRpc2FibGVkJzogeyBiZ2NvbG9yOiAnI2VmOWE5YScsIGNvbG9yOiAnd2hpdGUnIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZSBJcnJldmVyc2libHlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpcm1EZWxldGVNb2RhbDtcblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbmZpcm1EZWxldGVNb2RhbCIsIlNpZGViYXJEYXNoIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIlZpc2liaWxpdHlJY29uIiwiRWRpdEljb24iLCJEZWxldGVJY29uIiwiTmF2TGluayIsInVzZU5hdmlnYXRlIiwiVGFibGUiLCJJY29uQnV0dG9uIiwic3R5bGVkIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJDaGVja2JveCIsIlRhYmxlQ29udGFpbmVyIiwiUGFwZXIiLCJUeXBvZ3JhcGh5IiwiTW9kYWwiLCJCb3giLCJHcmlkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiTWVudUl0ZW0iLCJCYWNrZHJvcCIsIkF1dG9jb21wbGV0ZSIsIlRleHRGaWVsZCIsIlBhZ2luYXRpb24iLCJUb29sdGlwIiwidG9vbHRpcENsYXNzZXMiLCJNdWlBcHBCYXIiLCJUb29sYmFyIiwiQ3NzQmFzZWxpbmUiLCJNdWlEcmF3ZXIiLCJMaXN0IiwiQmFkZ2UiLCJEaXZpZGVyIiwiQ29udGFpbmVyIiwiTGluayIsIk1lbnVJY29uIiwiQ2hldnJvbkxlZnRJY29uIiwiTm90aWZpY2F0aW9uc0ljb24iLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIkFkZCIsIkNsb3NlIiwiTWFpbE91dGxpbmUiLCJkYXlqcyIsIkxvYWRlciIsIkNoZWNrQ2lyY2xlSWNvbiIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJJbWFnZSIsIkRhdGFHcmlkIiwiR3JpZFRvb2xiYXIiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJEZWxldGVUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJFZGl0VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiVmlld1Rvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNyIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmOCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIk1haW50ZW5hbmNlVmlld0FkbWluIiwiX21haW50ZW5hbmNlJGZpbmQiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmOSIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiaWQiLCJfaWQiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImdyYW50QWNjZXNzIiwic2V0R3JhbnRBY2Nlc3MiLCJmZXRjaE51bWJlciIsIl9yZWYwIiwiX3JlcyRkYXRhIiwiZmlsdGVyIiwicm93IiwidXNlcklEIiwibWFwIiwibW9kdWxlcyIsIk1haW50ZW5hbmNlSW5mb0MiLCJtb2R1bGVOYW1lIiwiYWNjZXNzIiwiY3JlYXRlTSIsIk1haW50ZW5hbmNlSW5mb1YiLCJ2aWV3TSIsIk1haW50ZW5hbmNlSW5mb1UiLCJlZGl0TSIsIk1haW50ZW5hbmNlSW5mb0QiLCJkZWxldGVNIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwibWFpbnRlbmFuY2UiLCJzZXRNYWludGVuYW5jZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibmV3UHVyY2hhc2UiLCJzZXROZXdQdXJjaGFzZSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUwIiwicGFnZSIsInNldFBhZ2UiLCJsaW1pdCIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImZpbHRlckZpZWxkIiwic2V0RmlsdGVyRmllbGQiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwiZmlsdGVyVmFsdWUiLCJzZXRGaWx0ZXJWYWx1ZSIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJ0b3RhbFBhZ2UiLCJTZXRUb3RhbFBhZ2UiLCJmZXRjaEl0ZW1zIiwiX3JlZjEiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0cmltIiwiZm9ybWF0RGF0ZSIsIml0ZW1JIiwiaXRlbSIsInNlcnZpY2VOdW1iZXIiLCJkYXRlRmllbGQiLCJzZXJ2aWNlRGF0ZSIsImZvcm1hdCIsInZpc2l0IiwidmlzaXREYXRlIiwiTWF0aCIsImNlaWwiLCJ0b3RhbEl0ZW0iLCJfeCIsIl94MiIsIl94MyIsIl94NCIsImhhbmRsZVJlZnJlc2hTZWFyY2giLCJoYW5kbGVQYWdlQ2hhbmdlIiwiZXZlbnQiLCJuZXdQYWdlIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwibG9hZGluZ09wZW5Nb2RhbCIsInNldExvYWRpbmdPcGVuTW9kYWwiLCJfdXNlU3RhdGUyMyIsIl91c2VTdGF0ZTI0IiwibW9kYWxEZWxldGVPcGVuTG9hZGluZyIsInNldE1vZGFsRGVsZXRlT3BlbkxvYWRpbmciLCJoYW5kbGVPcGVuTG9hZGluZyIsImhhbmRsZUNsb3NlVXBkYXRlIiwic2V0VGltZW91dCIsImhhbmRsZUNsb3NlTG9hZGluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlRGVsZXRlT3BlbkxvYWRpbmciLCJoYW5kbGVDbG9zZSIsImhhbmRsZURlbGV0ZUNsb3NlTG9hZGluZyIsImhhbmRsZU9wZW5PZmZsaW5lIiwiaGFuZGxlRXJyb3IiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2Iiwic2V0T3BlbiIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJEZWxldGVJZCIsInNldERlbGV0ZUlkIiwiaGFuZGxlT3BlbiIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJvcGVuMSIsInNldE9wZW4xIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsInVwZGF0ZUlkIiwic2V0VXBkYXRlSWQiLCJfdXNlU3RhdGUzMyIsIl91c2VTdGF0ZTM0Iiwic3RhdHVzIiwic2V0U3RhdHVzIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsImFjdGlvbiIsInNldEFjdGlvbiIsIl91c2VTdGF0ZTM3IiwiX3VzZVN0YXRlMzgiLCJyZWFzb24iLCJzZXRSZWFzb24iLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwiaW52b2ljZU4iLCJzZXRJbnZvaWNlTiIsInRoZW4iLCJjYXRjaCIsImhhbmRsZUNyZWF0ZUNvbW1lbnQiLCJfcmVmMTAiLCJpZEluZm8iLCJwZXJzb24iLCJkYXRlTm90aWZpY2F0aW9uIiwiRGF0ZSIsInBvc3QiLCJsb2ciLCJoYW5kbGVTdWJtaXRVcGRhdGVTdGF0dXMiLCJfcmVmMTEiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXQiLCJfeDUiLCJoYW5kbGVPcGVuVXBkYXRlIiwiX3VzZVN0YXRlNDEiLCJfdXNlU3RhdGU0MiIsInNlbGVjdGVkUm93cyIsInNldFNlbGVjdGVkUm93cyIsIl91c2VTdGF0ZTQzIiwiX3VzZVN0YXRlNDQiLCJvcGVuRGVsZXRlTXVsdGlwbGUiLCJzZXRPcGVuRGVsZXRlTXVsdGlwbGUiLCJoYW5kbGVPcGVuTXVsdGlwbGUiLCJoYW5kbGVDbG9zZU11bHRpcGxlIiwiX3VzZVN0YXRlNDUiLCJfdXNlU3RhdGU0NiIsIm9wZW5EZWxldGVBbGwiLCJzZXRPcGVuRGVsZXRlQWxsIiwiaGFuZGxlT3BlbkFsbCIsImhhbmRsZUNsb3NlQWxsIiwiX3VzZVN0YXRlNDciLCJfdXNlU3RhdGU0OCIsIm9wZW5SZWFzb25EZWxldGUiLCJzZXRPcGVuUmVhc29uRGVsZXRlIiwiaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSIsImhhbmRsZUNsb3NlUmVhc29uRGVsZXRlIiwiaGFuZGxlRGVsZXRlIiwiX3JlZjEyIiwiZGVsZXRlIiwiYWxlcnQiLCJfdXNlU3RhdGU0OSIsIl91c2VTdGF0ZTUwIiwiTWFpbnRlbmFuY2VEZWxldGVkIiwic2V0TWFpbnRlbmFuY2VEZWxldGVkIiwiZmV0Y2hGdW5jdGlvbiIsIl9yZWYxMyIsImRlbGV0ZVByb21pc2VzIiwiX3JlZjE0IiwiaWRUb0RlbGV0ZSIsIl94NiIsIlByb21pc2UiLCJhbGwiLCJyZWxhdGVkIiwiaW5mbyIsInRvU3RyaW5nIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjE1IiwiaGFuZGxlRGVsZXRlTWFueSIsIl9yZWYxNiIsIl9yZWYxNyIsIl94OCIsIl94NyIsIl91c2VTdGF0ZTUxIiwiX3VzZVN0YXRlNTIiLCJzZWFyY2hNYWludGVuYW5jZSIsInNldFNlYXJjaE1haW50ZW5hbmNlIiwic3RvcmVkVmFsdWUiLCJfUmVhY3QkdXNlU3RhdGUiLCJpdGVtcyIsInF1aWNrRmlsdGVyRXhjbHVkZUhpZGRlbkNvbHVtbnMiLCJxdWlja0ZpbHRlclZhbHVlcyIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJmaWx0ZXJNb2RlbCIsInNldEZpbHRlck1vZGVsIiwiX3VzZVN0YXRlNTMiLCJfdXNlU3RhdGU1NCIsImNvbHVtblZpc2liaWxpdHlNb2RlbCIsInNldENvbHVtblZpc2liaWxpdHlNb2RlbCIsImhhbmRlbEhpZGRlbkNvbHVtbiIsIm5ld0hpZGRlbiIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlRmlsdGVyIiwibmV3TW9kZWwiLCJfbmV3TW9kZWwkcXVpY2tGaWx0ZXIiLCJqb2luIiwic3RvcmVkUXVpY2siLCJwYXJzZSIsIl9zdG9yZWRRdWljayRxdWlja0ZpbCIsInN0b3JlZENvbHVtbnMiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsInZhbHVlR2V0dGVyIiwicGFyYW1zIiwiY3VzdG9tZXJOYW1lIiwicmVuZGVyQ2VsbCIsIkNvbnZlcnRlZCIsInVuZGVmaW5lZCIsInRpdGxlIiwiZGlzYWJsZWQiLCJsZW5ndGgiLCJ0byIsIm9uQ2xpY2siLCJjdXJzb3IiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsIm5hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJmbG9hdCIsIm1hcmdpbiIsInBhZ2luYXRpb25Nb2RlIiwicm93Q291bnQiLCJwYWdpbmF0aW9uIiwicGFnZVNpemUiLCJvblBhZ2VDaGFuZ2UiLCJyb3dzIiwic2xvdHMiLCJ0b29sYmFyIiwib25Sb3dTZWxlY3Rpb25Nb2RlbENoYW5nZSIsIm5ld1NlbGVjdGlvbiIsInNsb3RQcm9wcyIsInNob3dRdWlja0ZpbHRlciIsInByaW50T3B0aW9ucyIsImRpc2FibGVUb29sYmFyQnV0dG9uIiwiZ2V0Um93Q2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJjaGVja2JveFNlbGVjdGlvbiIsImRpc2FibGVEZW5zaXR5U2VsZWN0b3IiLCJyb3dTZWxlY3Rpb25Nb2RlbCIsIm9uRmlsdGVyTW9kZWxDaGFuZ2UiLCJvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZSIsInBhZGRpbmciLCJjb3VudCIsIm9uQ2hhbmdlIiwiaXRlbU5hbWUiLCJmaW5kIiwibSIsIm9uQ2xvc2UiLCJ0ZXh0QWxpZ24iLCJnYXAiLCJwbGFjZW1lbnQiLCJvblN1Ym1pdCIsImNvbnRhaW5lciIsInhzIiwicmVxdWlyZWQiLCJ2YWx1ZSIsInRhcmdldCIsImxhYmVsIiwiZGVmYXVsdFZhbHVlIiwiY2xvc2VBZnRlclRyYW5zaXRpb24iLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0IiwibXVsdGlsaW5lIiwicGxhY2Vob2xkZXIiLCJtYiIsImZvbnRXZWlnaHQiLCJmdWxsV2lkdGgiLCJzaXplIiwiYXV0b0ZvY3VzIiwidHlwZSIsImlucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkJ1dHRvbiIsIldhcm5pbmdBbWJlckljb24iLCJDbG9zZUljb24iLCJwIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyVG9wIiwiY29uZmlybVRleHQiLCJzZXRDb25maXJtVGV4dCIsImlzRGlzYWJsZWQiLCJzZXRJc0Rpc2FibGVkIiwib25Db25maXJtIiwibXIiLCJib3JkZXJDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=