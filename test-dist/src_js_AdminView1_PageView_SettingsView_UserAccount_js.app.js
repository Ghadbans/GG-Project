"use strict";
exports.id = "src_js_AdminView1_PageView_SettingsView_UserAccount_js";
exports.ids = ["src_js_AdminView1_PageView_SettingsView_UserAccount_js"];
exports.modules = {

/***/ "./node_modules/@mui/icons-material/VisibilityOff.js"
/*!***********************************************************!*\
  !*** ./node_modules/@mui/icons-material/VisibilityOff.js ***!
  \***********************************************************/
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
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"
}), 'VisibilityOff');

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

/***/ "./src/js/AdminView1/PageView/SettingsView/UserAccount.js"
/*!****************************************************************!*\
  !*** ./src/js/AdminView1/PageView/SettingsView/UserAccount.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chartview_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../component/SidebarDashE2 */ "./src/js/component/SidebarDashE2.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Input/Input.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputAdornment/InputAdornment.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/VisibilityOff */ "./node_modules/@mui/icons-material/VisibilityOff.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_ref3 => {
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
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_ref5 => {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
function UserAccount() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_34__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_34__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_18__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_19__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__.setUser)({
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
        return _ref9.apply(this, arguments);
      };
    }();
    fetchUser();
  }, [dispatch]);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_35__.logOut)());
    navigate('/');
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    account = _useState2[0],
    setAccount = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData = /*#__PURE__*/function () {
      var _ref0 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_18__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_19__.ENDPOINT_URL, "/employeeuser"));
          var formatDate = res.data.data.map(item => _objectSpread(_objectSpread({}, item), {}, {
            id: item._id
          }));
          setAccount(formatDate.reverse());
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchData() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    reason = _useState4[0],
    setReason = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    open = _useState6[0],
    setOpen = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    DeleteId = _useState8[0],
    setDeleteId = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    modalOpenLoading = _useState10[0],
    setModalOpenLoading = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    loadingOpenModal = _useState12[0],
    setLoadingOpenModal = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    loadingOpenModalError = _useState14[0],
    setLoadingOpenModalError = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    openReasonDelete = _useState16[0],
    setOpenReasonDelete = _useState16[1];
  var handleOpenReasonDelete = e => {
    e.preventDefault();
    setOpenReasonDelete(true);
  };
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  {/** Loading Update View Start */}
  var handleOpenLoading = () => {
    setLoadingOpenModal(true);
    setLoading(true);
    setOpen1(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleOpenLoadingError = () => {
    setLoadingOpenModalError(true);
    setLoading(true);
    setOpen1(false);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  var handleCloseLoading = () => {
    window.location.reload();
  };
  var handleCloseLoadingError = () => {
    setLoadingOpenModalError(false);
  };
  {/** Loading Update View End */}
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
  };
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    nameDelete = _useState18[0],
    setNameDelete = _useState18[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchData2 = /*#__PURE__*/function () {
      var _ref1 = _asyncToGenerator(function* () {
        if (DeleteId !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_18__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_19__.ENDPOINT_URL, "/get-employeeuser/").concat(DeleteId));
            setNameDelete(res.data.data.employeeName);
          } catch (error) {
            console.log(error);
          }
        }
      });
      return function fetchData2() {
        return _ref1.apply(this, arguments);
      };
    }();
    fetchData2();
  }, [DeleteId]);
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* () {
      var data = {
        idInfo: '',
        person: user.data.userName + ' Deleted ' + nameDelete,
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_18__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_19__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_18__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_19__.ENDPOINT_URL, "/delete-employeeuser/").concat(DeleteId));
        if (res) {
          handleCreateNotification();
          handleOpenModal();
        }
      } catch (error) {
        alert('try again');
      }
    });
    return function handleDelete(_x) {
      return _ref11.apply(this, arguments);
    };
  }();
  {/** Update Start */}
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState20 = _slicedToArray(_useState19, 2),
    employeeName = _useState20[0],
    setUserAccountName = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    userAccountRole = _useState22[0],
    setUserAccountRole = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState24 = _slicedToArray(_useState23, 2),
    employeeEmail = _useState24[0],
    setUserAccountMail = _useState24[1];
  {/** Change Password Open start */}
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    open1 = _useState26[0],
    setOpen1 = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState28 = _slicedToArray(_useState27, 2),
    updateId = _useState28[0],
    setUpdateId = _useState28[1];
  var handleOpenUpdate = id => {
    setOpen1(true);
    setUpdateId(id);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
    setUpdateId(null);
  };
  {/** Change Password Open end */}
  {/** Change Password Open start */}
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    open2 = _useState30[0],
    setOpen2 = _useState30[1];
  var handleOpenUpdateName = id => {
    setOpen2(true);
    setUpdateId(id);
  };
  var handleCloseUpdateName = () => {
    setOpen2(false);
    setUpdateId(null);
  };
  {/** Change Password Open end */}
  ;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchRelated = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        if (updateId !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_18__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_19__.ENDPOINT_URL, "/get-employeeuser/").concat(updateId));
            setUserAccountName(res.data.data.employeeName);
            setUserAccountRole(res.data.data.role);
            setUserAccountMail(res.data.data.employeeEmail);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      });
      return function fetchRelated() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchRelated();
  }, [updateId]);
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    showPassword = _useState32[0],
    setShowPassword = _useState32[1];
  var handleClickShowPassword = () => setShowPassword(show => !show);
  var handleMouseDownPassword = event => {
    event.preventDefault();
  };
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    showPassword1 = _useState34[0],
    setShowPassword1 = _useState34[1];
  var handleClickShowPassword1 = () => setShowPassword1(show => !show);
  var handleMouseDownPassword1 = event => {
    event.preventDefault();
  };
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState36 = _slicedToArray(_useState35, 2),
    oldPassword = _useState36[0],
    setOldPassword = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState38 = _slicedToArray(_useState37, 2),
    newPassword = _useState38[0],
    setNewPassword = _useState38[1];
  var handleResetPassword = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      try {
        var response = yield axios__WEBPACK_IMPORTED_MODULE_18__["default"].post("/auth/passwordreset/", {
          employeeEmail,
          role: userAccountRole,
          employeeName,
          oldPassword,
          newPassword
        });
        if (response) {
          handleOpenLoading();
        }
      } catch (error) {
        handleOpenLoadingError();
      }
    });
    return function handleResetPassword(_x2) {
      return _ref13.apply(this, arguments);
    };
  }();
  {/** Update End */}
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sideBar = _React$useState2[0],
    setSideBar = _React$useState2[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var columns = [{
    field: 'employeeName',
    headerName: 'User Name',
    width: sideBar ? 320 : 450
  }, {
    field: 'employeeEmail',
    headerName: 'Email',
    width: sideBar ? 320 : 450
  }, {
    field: 'role',
    headerName: 'Role',
    width: 200
  }, {
    field: 'edit',
    headerName: 'Edit',
    width: 100,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: () => handleOpenUpdate(params.row._id),
      disabled: user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.NavLink, {
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_42__["default"], {
      style: {
        color: 'gray'
      }
    })))))
  }, {
    field: 'Delete',
    headerName: 'Delete',
    width: 100,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "                                ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: () => handleOpen(params.row._id),
      disabled: user.data.role === 'User'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_17__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_32__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "User"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_47__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_46__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "inherit",
    onClick: handleLogout
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_36__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_33__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_30__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_29__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDashE2__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_21__.NavLink, {
    disabled: user.data.role !== 'CEO',
    to: "/UserAccountForm",
    className: "ItemsName",
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    className: "btnCustomer",
    style: {
      fontSize: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: {
      height: 520,
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_40__.DataGrid, {
    rows: account,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__.GridToolbar
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    checkboxSelection: true,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    onClick: handleOpenReasonDelete
  }, "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    onClick: handleClose
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: modalOpenLoading,
    onClose: handleCloseModal,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_6__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_39__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_43__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Change Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleResetPassword
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "userName",
    label: "User Name",
    size: "small",
    value: employeeName,
    onChange: e => setUserAccountName(e.target.value)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: "small",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "role"
  }, "Role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    required: true,
    id: "role",
    value: userAccountRole,
    onChange: e => setUserAccountRole(e.target.value),
    name: "role",
    label: "Role"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    value: "CEO"
  }, "CEO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    value: "Admin"
  }, "Admin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    value: "User"
  }, "User")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, "Old Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: "small",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "outlined-adornment-password",
    type: showPassword ? 'text' : 'password',
    endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      position: "end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "aria-label": "toggle password visibility",
      onClick: handleClickShowPassword,
      onMouseDown: handleMouseDownPassword,
      edge: "end"
    }, showPassword ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_44__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_45__["default"], null))),
    onChange: e => setOldPassword(e.target.value)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], null, "New Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: "small",
    sx: {
      width: '100%',
      backgroundColor: 'white'
    },
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "outlined-adornment-password",
    type: showPassword1 ? 'text' : 'password',
    endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
      position: "end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      "aria-label": "toggle password visibility",
      onClick: handleClickShowPassword1,
      onMouseDown: handleMouseDownPassword1,
      edge: "end"
    }, showPassword1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_44__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_VisibilityOff__WEBPACK_IMPORTED_MODULE_45__["default"], null))),
    onChange: e => setNewPassword(e.target.value)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Update")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: loadingOpenModal,
    onClose: handleCloseLoading,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_6__["default"],
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Password Changed successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCloseLoading,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: loadingOpenModalError,
    onClose: handleCloseLoadingError,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_6__["default"],
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Invalid old password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCloseLoadingError,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
    open: openReasonDelete,
    onClose: handleCloseReasonDelete,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleCloseReasonDelete,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_43__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete: ", nameDelete, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserAccount);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUGFnZVZpZXdfU2V0dGluZ3NWaWV3X1VzZXJBY2NvdW50X2pzLmFwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFhO0FBQ2I7O0FBRUEsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDO0FBQ25GLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGtCQUFlO0FBQ2YsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCO0FBQzNFLGtCQUFrQixtQkFBTyxDQUFDLDhEQUFtQjtBQUM3QyxlQUFlLGtCQUFlO0FBQzlCO0FBQ0EsQ0FBQyxvQjs7Ozs7Ozs7Ozs7Ozs7OztBQ1pEOztBQUVrRDtBQUNGO0FBQ2hELGlFQUFlLGdFQUFhLGVBQWUsc0RBQUk7QUFDL0M7QUFDQSxDQUFDLFNBQVMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05WLENBQWtEO0FBQ3pCO0FBQ21DO0FBQ1I7QUFDc0I7QUFDUjtBQUNzTjtBQUM1TjtBQUNSO0FBQzFCO0FBQ3dCO0FBQ0s7QUFDQztBQUNRO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNJO0FBQ0k7QUFDVjtBQUNVO0FBQ2M7QUFDSTtBQUNYO0FBQytCO0FBQ3RDO0FBQ2M7QUFDVjtBQUNMO0FBQ1U7QUFDYjtBQUNFO0FBQ1U7QUFDTTtBQUNSO0FBQ1E7QUFHOUQsSUFBTXNFLGFBQWEsR0FBRzVELDBEQUFNLENBQUM2RCxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDakQzRSwwREFBQSxDQUFDdUMsOERBQU8sRUFBQXNDLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFD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Q0YsQ0FFSCxDQUNBLENBQ0osQ0FBQztBQUVWO0FBRUEsaUVBQWUrQixXQUFXLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvVmlzaWJpbGl0eU9mZi5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0FkZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vc3JjL2pzL0FkbWluVmlldzEvUGFnZVZpZXcvU2V0dGluZ3NWaWV3L1VzZXJBY2NvdW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXCJ1c2UgY2xpZW50XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG52YXIgX2pzeFJ1bnRpbWUgPSByZXF1aXJlKFwicmVhY3QvanN4LXJ1bnRpbWVcIik7XG52YXIgX2RlZmF1bHQgPSBleHBvcnRzLmRlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoIC8qI19fUFVSRV9fKi8oMCwgX2pzeFJ1bnRpbWUuanN4KShcInBhdGhcIiwge1xuICBkOiBcIk0xMiA3YzIuNzYgMCA1IDIuMjQgNSA1IDAgLjY1LS4xMyAxLjI2LS4zNiAxLjgzbDIuOTIgMi45MmMxLjUxLTEuMjYgMi43LTIuODkgMy40My00Ljc1LTEuNzMtNC4zOS02LTcuNS0xMS03LjUtMS40IDAtMi43NC4yNS0zLjk4LjdsMi4xNiAyLjE2QzEwLjc0IDcuMTMgMTEuMzUgNyAxMiA3TTIgNC4yN2wyLjI4IDIuMjguNDYuNDZDMy4wOCA4LjMgMS43OCAxMC4wMiAxIDEyYzEuNzMgNC4zOSA2IDcuNSAxMSA3LjUgMS41NSAwIDMuMDMtLjMgNC4zOC0uODRsLjQyLjQyTDE5LjczIDIyIDIxIDIwLjczIDMuMjcgM3pNNy41MyA5LjhsMS41NSAxLjU1Yy0uMDUuMjEtLjA4LjQzLS4wOC42NSAwIDEuNjYgMS4zNCAzIDMgMyAuMjIgMCAuNDQtLjAzLjY1LS4wOGwxLjU1IDEuNTVjLS42Ny4zMy0xLjQxLjUzLTIuMi41My0yLjc2IDAtNS0yLjI0LTUtNSAwLS43OS4yLTEuNTMuNTMtMi4ybTQuMzEtLjc4IDMuMTUgMy4xNS4wMi0uMTZjMC0xLjY2LTEuMzQtMy0zLTN6XCJcbn0pLCAnVmlzaWJpbGl0eU9mZicpOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ6XCJcbn0pLCAnQWRkJyk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9DaGFydHZpZXcuY3NzJ1xyXG5pbXBvcnQgU2lkZWJhckRhc2hFMiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnQvU2lkZWJhckRhc2hFMidcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IHsgVGFibGUsIElucHV0QWRvcm5tZW50LCBJY29uQnV0dG9uLCBzdHlsZWQsIE91dGxpbmVkSW5wdXQsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBDaGVja2JveCwgVGFibGVDb250YWluZXIsIFBhcGVyLCBUeXBvZ3JhcGh5LCBNb2RhbCwgQm94LCBHcmlkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBNZW51SXRlbSwgQmFja2Ryb3AsIEF1dG9jb21wbGV0ZSwgVGV4dEZpZWxkLCBJbnB1dCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5JztcclxuaW1wb3J0IERlbGV0ZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9EZWxldGUnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi8uLi8uLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBBZGQsIE1haWxPdXRsaW5lIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCB7IE5hdkxpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IENoZWNrQ2lyY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0NoZWNrQ2lyY2xlJztcclxuaW1wb3J0IENhbmNlbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DYW5jZWwnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgeyBEYXRhR3JpZCwgR3JpZFRvb2xiYXIgfSBmcm9tICdAbXVpL3gtZGF0YS1ncmlkJztcclxuaW1wb3J0IEVkaXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0JztcclxuaW1wb3J0IENsb3NlIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Zpc2liaWxpdHknO1xyXG5pbXBvcnQgVmlzaWJpbGl0eU9mZiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL1Zpc2liaWxpdHlPZmYnO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuLi8uLi9NZXNzYWdlQWRtaW5WaWV3JztcclxuaW1wb3J0IE5vdGlmaWNhdGlvblZJZXdJbmZvIGZyb20gJy4uLy4uL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuXHJcblxyXG5jb25zdCBEZWxldGVUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgRWRpdFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gVXNlckFjY291bnQoKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVzVXNlcklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKTtcclxuICAgIGNvbnN0IGZldGNoVXNlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgaWYgKHN0b3Jlc1VzZXJJZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7c3RvcmVzVXNlcklkfWApXHJcbiAgICAgICAgICBjb25zdCBOYW1lID0gcmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWU7XHJcbiAgICAgICAgICBjb25zdCBSb2xlID0gcmVzLmRhdGEuZGF0YS5yb2xlO1xyXG4gICAgICAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHVzZXJOYW1lOiBOYW1lLCByb2xlOiBSb2xlIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbYWNjb3VudCwgc2V0QWNjb3VudF0gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2VtcGxveWVldXNlcmApXHJcbiAgICAgICAgY29uc3QgZm9ybWF0RGF0ZSA9IHJlcy5kYXRhLmRhdGEubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgIGlkOiBpdGVtLl9pZCxcclxuICAgICAgICB9KSlcclxuICAgICAgICBzZXRBY2NvdW50KGZvcm1hdERhdGUucmV2ZXJzZSgpKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9LCBbXSlcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtEZWxldGVJZCwgc2V0RGVsZXRlSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbE9wZW5Mb2FkaW5nLCBzZXRNb2RhbE9wZW5Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWxFcnJvciwgc2V0TG9hZGluZ09wZW5Nb2RhbEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbb3BlblJlYXNvbkRlbGV0ZSwgc2V0T3BlblJlYXNvbkRlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5SZWFzb25EZWxldGUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRPcGVuUmVhc29uRGVsZXRlKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VSZWFzb25EZWxldGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuUmVhc29uRGVsZXRlKGZhbHNlKTtcclxuICB9O1xyXG4gIHsvKiogTG9hZGluZyBVcGRhdGUgVmlldyBTdGFydCAqLyB9XHJcbiAgY29uc3QgaGFuZGxlT3BlbkxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlT3BlbkxvYWRpbmdFcnJvciA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWxFcnJvcih0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRPcGVuMShmYWxzZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTG9hZGluZyA9ICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VMb2FkaW5nRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsRXJyb3IoZmFsc2UpO1xyXG4gIH1cclxuICB7LyoqIExvYWRpbmcgVXBkYXRlIFZpZXcgRW5kICovIH1cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKGlkKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgc2V0RGVsZXRlSWQoaWQpXHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVPcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRNb2RhbE9wZW5Mb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfTtcclxuICBjb25zdCBbbmFtZURlbGV0ZSwgc2V0TmFtZURlbGV0ZV0gPSB1c2VTdGF0ZSgnJylcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhMiA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgIGlmIChEZWxldGVJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtZW1wbG95ZWV1c2VyLyR7RGVsZXRlSWR9YClcclxuICAgICAgICAgIHNldE5hbWVEZWxldGUocmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWUpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhMigpXHJcbiAgfSwgW0RlbGV0ZUlkXSlcclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpZEluZm86ICcnLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgRGVsZXRlZCAnICsgbmFtZURlbGV0ZSxcclxuICAgICAgcmVhc29uLFxyXG4gICAgICBkYXRlTm90aWZpY2F0aW9uOiBuZXcgRGF0ZSgpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbmAsIGRhdGEpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLWVtcGxveWVldXNlci8ke0RlbGV0ZUlkfWApO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uKClcclxuICAgICAgICBoYW5kbGVPcGVuTW9kYWwoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgYWxlcnQoJ3RyeSBhZ2FpbicpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgey8qKiBVcGRhdGUgU3RhcnQgKi8gfVxyXG5cclxuICBjb25zdCBbZW1wbG95ZWVOYW1lLCBzZXRVc2VyQWNjb3VudE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt1c2VyQWNjb3VudFJvbGUsIHNldFVzZXJBY2NvdW50Um9sZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtcGxveWVlRW1haWwsIHNldFVzZXJBY2NvdW50TWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgey8qKiBDaGFuZ2UgUGFzc3dvcmQgT3BlbiBzdGFydCAqLyB9XHJcbiAgY29uc3QgW29wZW4xLCBzZXRPcGVuMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwZGF0ZUlkLCBzZXRVcGRhdGVJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3BlbjEodHJ1ZSk7XHJcbiAgICBzZXRVcGRhdGVJZChpZCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICAgIHNldFVwZGF0ZUlkKG51bGwpO1xyXG4gIH07XHJcbiAgey8qKiBDaGFuZ2UgUGFzc3dvcmQgT3BlbiBlbmQgKi8gfVxyXG4gIHsvKiogQ2hhbmdlIFBhc3N3b3JkIE9wZW4gc3RhcnQgKi8gfVxyXG4gIGNvbnN0IFtvcGVuMiwgc2V0T3BlbjJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuVXBkYXRlTmFtZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3BlbjIodHJ1ZSk7XHJcbiAgICBzZXRVcGRhdGVJZChpZCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVVwZGF0ZU5hbWUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuMihmYWxzZSk7XHJcbiAgICBzZXRVcGRhdGVJZChudWxsKTtcclxuICB9O1xyXG4gIHsvKiogQ2hhbmdlIFBhc3N3b3JkIE9wZW4gZW5kICovIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hSZWxhdGVkID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAodXBkYXRlSWQgIT09IG51bGwpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3VwZGF0ZUlkfWApXHJcbiAgICAgICAgICBzZXRVc2VyQWNjb3VudE5hbWUocmVzLmRhdGEuZGF0YS5lbXBsb3llZU5hbWUpO1xyXG4gICAgICAgICAgc2V0VXNlckFjY291bnRSb2xlKHJlcy5kYXRhLmRhdGEucm9sZSk7XHJcbiAgICAgICAgICBzZXRVc2VyQWNjb3VudE1haWwocmVzLmRhdGEuZGF0YS5lbXBsb3llZUVtYWlsKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFJlbGF0ZWQoKVxyXG5cclxuICB9LCBbdXBkYXRlSWRdKVxyXG5cclxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja1Nob3dQYXNzd29yZCA9ICgpID0+IHNldFNob3dQYXNzd29yZCgoc2hvdykgPT4gIXNob3cpO1xyXG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93blBhc3N3b3JkID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcbiAgY29uc3QgW3Nob3dQYXNzd29yZDEsIHNldFNob3dQYXNzd29yZDFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja1Nob3dQYXNzd29yZDEgPSAoKSA9PiBzZXRTaG93UGFzc3dvcmQxKChzaG93KSA9PiAhc2hvdyk7XHJcbiAgY29uc3QgaGFuZGxlTW91c2VEb3duUGFzc3dvcmQxID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcbiAgY29uc3QgW29sZFBhc3N3b3JkLCBzZXRPbGRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW25ld1Bhc3N3b3JkLCBzZXROZXdQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgaGFuZGxlUmVzZXRQYXNzd29yZCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hdXRoL3Bhc3N3b3JkcmVzZXQvYCxcclxuICAgICAgICB7IGVtcGxveWVlRW1haWwsIHJvbGU6IHVzZXJBY2NvdW50Um9sZSwgZW1wbG95ZWVOYW1lLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQgfSk7XHJcbiAgICAgIGlmIChyZXNwb25zZSkge1xyXG4gICAgICAgIGhhbmRsZU9wZW5Mb2FkaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGhhbmRsZU9wZW5Mb2FkaW5nRXJyb3IoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHsvKiogVXBkYXRlIEVuZCAqLyB9XHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgeyBmaWVsZDogJ2VtcGxveWVlTmFtZScsIGhlYWRlck5hbWU6ICdVc2VyIE5hbWUnLCB3aWR0aDogc2lkZUJhciA/IDMyMCA6IDQ1MCB9LFxyXG4gICAgeyBmaWVsZDogJ2VtcGxveWVlRW1haWwnLCBoZWFkZXJOYW1lOiAnRW1haWwnLCB3aWR0aDogc2lkZUJhciA/IDMyMCA6IDQ1MCB9LFxyXG4gICAgeyBmaWVsZDogJ3JvbGUnLCBoZWFkZXJOYW1lOiAnUm9sZScsIHdpZHRoOiAyMDAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICdlZGl0JywgaGVhZGVyTmFtZTogJ0VkaXQnLCB3aWR0aDogMTAwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPEVkaXRUb29sdGlwIHRpdGxlPVwiRWRpdFwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5VcGRhdGUocGFyYW1zLnJvdy5faWQpfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgIDxFZGl0IHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0gLz5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0VkaXRUb29sdGlwPlxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ0RlbGV0ZScsIGhlYWRlck5hbWU6ICdEZWxldGUnLCB3aWR0aDogMTAwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPERlbGV0ZVRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIj5cclxuICAgICAgICAgIDxzcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3BlbihwYXJhbXMucm93Ll9pZCl9IGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSA9PT0gJ1VzZXInfT5cclxuICAgICAgICAgICAgPERlbGV0ZUljb24gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIGNvbG9yOiAncmVkJyB9fSAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRGVsZXRlVG9vbHRpcD5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICBdXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdIb21lZW1wbG95ZWUnPlxyXG4gICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBvcGVuPXtzaWRlQmFyfSBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjMzAzNjhhJyB9fT5cclxuICAgICAgICAgIDxUb29sYmFyXHJcbiAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgcHI6ICcyNHB4JywgLy8ga2VlcCByaWdodCBwYWRkaW5nIHdoZW4gZHJhd2VyIGNsb3NlZFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyYXdlcn1cclxuICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICczNnB4JyxcclxuICAgICAgICAgICAgICAgIC4uLihzaWRlQmFyICYmIHsgZGlzcGxheTogJ25vbmUnIH0pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD1cImgxXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgbm9XcmFwXHJcbiAgICAgICAgICAgICAgc3g9e3sgZmxleEdyb3c6IDEgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFVzZXJcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNpZGVCYXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2lkZUJhcihmYWxzZSl9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaEUyIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiAxIH19ID5cclxuICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30gdG89XCIvVXNlckFjY291bnRGb3JtXCIgY2xhc3NOYW1lPSdJdGVtc05hbWUnIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JywgbWFyZ2luOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8QWRkIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIHN0eWxlPXt7IGZvbnRTaXplOiAnNDBweCcgfX0gLz5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgPEJveCBzeD17eyBoZWlnaHQ6IDUyMCwgd2lkdGg6ICcxMDAlJyB9fT5cclxuICAgICAgICAgICAgICAgIDxEYXRhR3JpZFxyXG4gICAgICAgICAgICAgICAgICByb3dzPXthY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICBzbG90cz17eyB0b29sYmFyOiBHcmlkVG9vbGJhciB9fVxyXG4gICAgICAgICAgICAgICAgICBzbG90UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaG93UXVpY2tGaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmludE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVRvb2xiYXJCdXR0b246IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBwYWRkaW5nOiAnMTBweCcgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Db250YWluZXI+PC9Cb3g+PC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxoMj5EbyB5b3Ugd2FudCB0byBEZWxldGUgPzwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInIG9uQ2xpY2s9e2hhbmRsZU9wZW5SZWFzb25EZWxldGV9PlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17bW9kYWxPcGVuTG9hZGluZ31cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZU1vZGFsfVxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGgyPiBEYXRhIHN1Y2Nlc3NmdWxseSBkZWxldGVkPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZU1vZGFsfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuMX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVVwZGF0ZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICBDaGFuZ2UgUGFzc3dvcmRcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVSZXNldFBhc3N3b3JkfT5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3VzZXJOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbD0nVXNlciBOYW1lJ1xyXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1wbG95ZWVOYW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJBY2NvdW50TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJyb2xlXCI+Um9sZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJyb2xlXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckFjY291bnRSb2xlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlckFjY291bnRSb2xlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicm9sZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSb2xlXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkNFT1wiPkNFTzwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiQWRtaW5cIj5BZG1pbjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiVXNlclwiPlVzZXI8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pk9sZCBQYXNzd29yZDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fVxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm91dGxpbmVkLWFkb3JubWVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cclxuICAgICAgICAgICAgICAgICAgICBlbmRBZG9ybm1lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0QWRvcm5tZW50IHBvc2l0aW9uPVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInRvZ2dsZSBwYXNzd29yZCB2aXNpYmlsaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja1Nob3dQYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17aGFuZGxlTW91c2VEb3duUGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZT1cImVuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1Bhc3N3b3JkID8gPFZpc2liaWxpdHkgLz4gOiA8VmlzaWJpbGl0eU9mZiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEFkb3JubWVudD5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRPbGRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5OZXcgUGFzc3dvcmQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1hZG9ybm1lbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZDEgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxyXG4gICAgICAgICAgICAgICAgICAgIGVuZEFkb3JubWVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBZG9ybm1lbnQgcG9zaXRpb249XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwidG9nZ2xlIHBhc3N3b3JkIHZpc2liaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrU2hvd1Bhc3N3b3JkMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17aGFuZGxlTW91c2VEb3duUGFzc3dvcmQxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2U9XCJlbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dQYXNzd29yZDEgPyA8VmlzaWJpbGl0eSAvPiA6IDxWaXNpYmlsaXR5T2ZmIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1Bhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlVwZGF0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTG9hZGluZ31cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IFBhc3N3b3JkIENoYW5nZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VMb2FkaW5nfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWxFcnJvcn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUxvYWRpbmdFcnJvcn1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2FuY2VsSWNvbiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgIDxoMj4gSW52YWxpZCBvbGQgcGFzc3dvcmQ8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUxvYWRpbmdFcnJvcn0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlUmVhc29uRGVsZXRlfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkNsb3NlXCIgcGxhY2VtZW50PSdsZWZ0Jz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VSZWFzb25EZWxldGV9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ3JpZ2h0JyB9fT5cclxuICAgICAgICAgICAgICA8Q2xvc2Ugc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgIFdoeSBkbyB5b3Ugd2FudCB0byBkZWxldGU6IHtuYW1lRGVsZXRlfT9cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVEZWxldGV9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdyZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWFzb259XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdSZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVhc29uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J1JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyQWNjb3VudFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXJEYXNoRTIiLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiQWNjb3VudENpcmNsZUljb24iLCJUYWJsZSIsIklucHV0QWRvcm5tZW50IiwiSWNvbkJ1dHRvbiIsInN0eWxlZCIsIk91dGxpbmVkSW5wdXQiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIkNoZWNrYm94IiwiVGFibGVDb250YWluZXIiLCJQYXBlciIsIlR5cG9ncmFwaHkiLCJNb2RhbCIsIkJveCIsIkdyaWQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJNZW51SXRlbSIsIkJhY2tkcm9wIiwiQXV0b2NvbXBsZXRlIiwiVGV4dEZpZWxkIiwiSW5wdXQiLCJWaXNpYmlsaXR5SWNvbiIsIkRlbGV0ZUljb24iLCJheGlvcyIsIkVORFBPSU5UX1VSTCIsIkFkZCIsIk1haWxPdXRsaW5lIiwiTmF2TGluayIsInVzZU5hdmlnYXRlIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiRGl2aWRlciIsIkNvbnRhaW5lciIsIkxpbmsiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImxvZ091dCIsInNlbGVjdEN1cnJlbnRVc2VyIiwic2V0VXNlciIsIkxvZ291dCIsIkNoZWNrQ2lyY2xlSWNvbiIsIkNhbmNlbEljb24iLCJMb2FkZXIiLCJEYXRhR3JpZCIsIkdyaWRUb29sYmFyIiwiRWRpdCIsIkNsb3NlIiwiVmlzaWJpbGl0eSIsIlZpc2liaWxpdHlPZmYiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJEZWxldGVUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJFZGl0VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiVmlld1Rvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNyIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmOCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIlVzZXJBY2NvdW50IiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjkiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImVycm9yIiwiY29uc29sZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFjY291bnQiLCJzZXRBY2NvdW50IiwiZmV0Y2hEYXRhIiwiX3JlZjAiLCJmb3JtYXREYXRlIiwibWFwIiwiaXRlbSIsImlkIiwiX2lkIiwicmV2ZXJzZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwicmVhc29uIiwic2V0UmVhc29uIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJzZXRPcGVuIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJEZWxldGVJZCIsInNldERlbGV0ZUlkIiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsIm1vZGFsT3BlbkxvYWRpbmciLCJzZXRNb2RhbE9wZW5Mb2FkaW5nIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsImxvYWRpbmdPcGVuTW9kYWxFcnJvciIsInNldExvYWRpbmdPcGVuTW9kYWxFcnJvciIsIl91c2VTdGF0ZTE1IiwiX3VzZVN0YXRlMTYiLCJvcGVuUmVhc29uRGVsZXRlIiwic2V0T3BlblJlYXNvbkRlbGV0ZSIsImhhbmRsZU9wZW5SZWFzb25EZWxldGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZSIsImhhbmRsZU9wZW5Mb2FkaW5nIiwic2V0T3BlbjEiLCJzZXRUaW1lb3V0IiwiaGFuZGxlT3BlbkxvYWRpbmdFcnJvciIsImhhbmRsZUNsb3NlTG9hZGluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiaGFuZGxlQ2xvc2VMb2FkaW5nRXJyb3IiLCJoYW5kbGVPcGVuIiwiaGFuZGxlT3Blbk1vZGFsIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbG9zZU1vZGFsIiwiX3VzZVN0YXRlMTciLCJfdXNlU3RhdGUxOCIsIm5hbWVEZWxldGUiLCJzZXROYW1lRGVsZXRlIiwiZmV0Y2hEYXRhMiIsIl9yZWYxIiwibG9nIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjEwIiwiaWRJbmZvIiwicGVyc29uIiwiZGF0ZU5vdGlmaWNhdGlvbiIsIkRhdGUiLCJwb3N0IiwiaGFuZGxlRGVsZXRlIiwiX3JlZjExIiwiZGVsZXRlIiwiYWxlcnQiLCJfeCIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJzZXRVc2VyQWNjb3VudE5hbWUiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwidXNlckFjY291bnRSb2xlIiwic2V0VXNlckFjY291bnRSb2xlIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsImVtcGxveWVlRW1haWwiLCJzZXRVc2VyQWNjb3VudE1haWwiLCJfdXNlU3RhdGUyNSIsIl91c2VTdGF0ZTI2Iiwib3BlbjEiLCJfdXNlU3RhdGUyNyIsIl91c2VTdGF0ZTI4IiwidXBkYXRlSWQiLCJzZXRVcGRhdGVJZCIsImhhbmRsZU9wZW5VcGRhdGUiLCJoYW5kbGVDbG9zZVVwZGF0ZSIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJvcGVuMiIsInNldE9wZW4yIiwiaGFuZGxlT3BlblVwZGF0ZU5hbWUiLCJoYW5kbGVDbG9zZVVwZGF0ZU5hbWUiLCJmZXRjaFJlbGF0ZWQiLCJfcmVmMTIiLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiaGFuZGxlQ2xpY2tTaG93UGFzc3dvcmQiLCJzaG93IiwiaGFuZGxlTW91c2VEb3duUGFzc3dvcmQiLCJldmVudCIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJzaG93UGFzc3dvcmQxIiwic2V0U2hvd1Bhc3N3b3JkMSIsImhhbmRsZUNsaWNrU2hvd1Bhc3N3b3JkMSIsImhhbmRsZU1vdXNlRG93blBhc3N3b3JkMSIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJvbGRQYXNzd29yZCIsInNldE9sZFBhc3N3b3JkIiwiX3VzZVN0YXRlMzciLCJfdXNlU3RhdGUzOCIsIm5ld1Bhc3N3b3JkIiwic2V0TmV3UGFzc3dvcmQiLCJoYW5kbGVSZXNldFBhc3N3b3JkIiwiX3JlZjEzIiwicmVzcG9uc2UiLCJfeDIiLCJfUmVhY3QkdXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJjb2x1bW5zIiwiZmllbGQiLCJoZWFkZXJOYW1lIiwicmVuZGVyQ2VsbCIsInBhcmFtcyIsInRpdGxlIiwib25DbGljayIsInJvdyIsImRpc2FibGVkIiwiY3Vyc29yIiwic3giLCJkaXNwbGF5IiwicHIiLCJlZGdlIiwibWFyZ2luUmlnaHQiLCJjb21wb25lbnQiLCJ2YXJpYW50Iiwibm9XcmFwIiwiZmxleEdyb3ciLCJuYW1lIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0IiwicGFsZXR0ZSIsIm1vZGUiLCJncmV5Iiwib3ZlcmZsb3ciLCJtYXhXaWR0aCIsIm10IiwidG8iLCJmbG9hdCIsIm1hcmdpbiIsInJvd3MiLCJzbG90cyIsInRvb2xiYXIiLCJzbG90UHJvcHMiLCJzaG93UXVpY2tGaWx0ZXIiLCJwcmludE9wdGlvbnMiLCJkaXNhYmxlVG9vbGJhckJ1dHRvbiIsImNoZWNrYm94U2VsZWN0aW9uIiwicGFkZGluZyIsIm9uQ2xvc2UiLCJ0ZXh0QWxpZ24iLCJnYXAiLCJCYWNrZHJvcENvbXBvbmVudCIsIkJhY2tkcm9wUHJvcHMiLCJ0aW1lb3V0IiwicGxhY2VtZW50Iiwib25TdWJtaXQiLCJjb250YWluZXIiLCJ4cyIsImxhYmVsIiwic2l6ZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsInR5cGUiLCJlbmRBZG9ybm1lbnQiLCJvbk1vdXNlRG93biIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwibXVsdGlsaW5lIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9