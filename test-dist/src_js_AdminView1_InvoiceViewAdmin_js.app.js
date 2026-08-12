"use strict";
exports.id = "src_js_AdminView1_InvoiceViewAdmin_js";
exports.ids = ["src_js_AdminView1_InvoiceViewAdmin_js"];
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

/***/ "./node_modules/@mui/icons-material/esm/Person2Outlined.js"
/*!*****************************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/Person2Outlined.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56C4.61 15.07 4 16.1 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M18 18H6v-.78c0-.38.2-.72.52-.88C7.71 15.73 9.63 15 12 15c2.37 0 4.29.73 5.48 1.34.32.16.52.5.52.88zm-8.22-6h4.44c1.21 0 2.14-1.06 1.98-2.26l-.32-2.45C15.57 5.39 13.92 4 12 4S8.43 5.39 8.12 7.29L7.8 9.74c-.16 1.2.77 2.26 1.98 2.26m.32-4.41C10.26 6.67 11.06 6 12 6s1.74.67 1.9 1.59l.32 2.41H9.78z"
}), 'Person2Outlined'));

/***/ },

/***/ "./node_modules/@mui/icons-material/esm/PersonOffRounded.js"
/*!******************************************************************!*\
  !*** ./node_modules/@mui/icons-material/esm/PersonOffRounded.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/material/utils/createSvgIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
  d: "M8.65 5.82C9.36 4.72 10.6 4 12 4c2.21 0 4 1.79 4 4 0 1.4-.72 2.64-1.82 3.35zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76zm.49 3.32L3.51 3.51a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l8.18 8.18c-1.82.23-3.41.8-4.7 1.46C4.6 15.08 4 16.11 4 17.22V20h13.17l1.9 1.9c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41"
}), 'PersonOffRounded'));

/***/ },

/***/ "./src/js/AdminView1/InvoiceViewAdmin.js"
/*!***********************************************!*\
  !*** ./src/js/AdminView1/InvoiceViewAdmin.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.mjs");
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Person2Outlined.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/PersonOffRounded.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../img/no-data.png */ "./src/js/img/no-data.png");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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





































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref => {
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
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref3 => {
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
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_22__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
function InvoiceViewAdmin() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_42__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_42__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId && storesUserId !== 'null') {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
            var Name = res.data.data.employeeName;
            var Role = res.data.data.role;
            dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__.setUser)({
              userName: Name,
              role: Role,
              id: res.data.data._id
            }));
          } catch (error) {
            console.error('Error fetching data:', error);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Failed to fetch user data.');
          }
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
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_43__.logOut)());
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/grantAccess"));
          (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.data) === null || _res$data === void 0 || _res$data.filter(row => row.userID === user.data.id).map(row => setGrantAccess(row.modules));
        } catch (error) {
          console.error('Error fetching data:', error);
          react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Failed to fetch permissions.');
        }
      });
      return function fetchNumber() {
        return _ref0.apply(this, arguments);
      };
    }();
    fetchNumber();
  }, [user]);

  // console.log(grantAccess)

  var InvoiceInfoC = grantAccess.filter(row => row.moduleName === "Invoice" && row.access.createM === true);
  var InvoiceInfoV = grantAccess.filter(row => row.moduleName === "Invoice" && row.access.viewM === true);
  var InvoiceInfoU = grantAccess.filter(row => row.moduleName === "Invoice" && row.access.editM === true);
  var InvoiceInfoD = grantAccess.filter(row => row.moduleName === "Invoice" && row.access.deleteM === true);
  {/** Get Invoice */}
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    invoice = _useState4[0],
    setInvoice = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    hiddenRow = _useState6[0],
    setHiddenRow = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    selectedRows = _useState0[0],
    setSelectedRows = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState10 = _slicedToArray(_useState1, 2),
    loadingData = _useState10[0],
    setLoadingData = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    reason = _useState12[0],
    setReason = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    newPurchase = _useState14[0],
    setNewPurchase = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState16 = _slicedToArray(_useState15, 2),
    page = _useState16[0],
    setPage = _useState16[1]; // Initialize page state to 0 (0-based index)
  var limit = 100;
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    searchTerm = _useState18[0],
    setSearchTerm = _useState18[1]; // Initialize search term state
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState20 = _slicedToArray(_useState19, 2),
    filterField = _useState20[0],
    setFilterField = _useState20[1]; // Initialize filter field state
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState22 = _slicedToArray(_useState21, 2),
    filterValue = _useState22[0],
    setFilterValue = _useState22[1]; // Initialize filter value state
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState24 = _slicedToArray(_useState23, 2),
    totalPage = _useState24[0],
    SetTotalPage = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(searchTerm),
    _useState26 = _slicedToArray(_useState25, 2),
    debouncedSearchTerm = _useState26[0],
    setDebouncedSearchTerm = _useState26[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // 500ms debounce delay

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);
  var fetchItems = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (page, searchTerm, filterField, filterValue) {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/invoice-Information?page=").concat(page + 1, "&limit=").concat(limit, "&search=").concat(encodeURIComponent(searchTerm.trim()), "&filterField=").concat(encodeURIComponent(filterField.trim()), "&filterValue=").concat(encodeURIComponent(filterValue.trim())));
        var formatDate = res.data.itemI.map(row => _objectSpread(_objectSpread({}, row), {}, {
          id: row._id,
          invoiceNumber: row.invoiceNumber,
          dateField: row.invoiceDate !== null ? dayjs__WEBPACK_IMPORTED_MODULE_39___default()(row.invoiceDate).format('DD/MM/YYYY') : '',
          dueDateField: dayjs__WEBPACK_IMPORTED_MODULE_39___default()(row.invoiceDueDate).format('DD/MM/YYYY')
        }));
        var invoices = formatDate;
        SetTotalPage(res.data.totalPages); // Ensure totalPage is correctly calculated
        setInvoice(invoices);
        setLoadingData(false);

        // Auto-repair status mismatch for zero-balance invoices
        var mismatchedInvoices = invoices.filter(inv => (inv.status === 'Partially-Paid' || inv.status === 'Sent' || inv.status === 'Draft' || inv.status === 'Pending') && parseFloat(inv.balanceDue) <= 0 && parseFloat(inv.totalInvoice) > 0);
        if (mismatchedInvoices.length > 0) {
          console.log("Repairing status for ".concat(mismatchedInvoices.length, " invoices sequentially..."));
          _asyncToGenerator(function* () {
            for (var inv of mismatchedInvoices) {
              try {
                yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/update-invoice/").concat(inv._id), {
                  status: 'Paid'
                });
                // Small delay to prevent rate limiting
                yield new Promise(resolve => setTimeout(resolve, 100));
              } catch (err) {
                console.error("Failed to repair invoice ".concat(inv.invoiceNumber, ":"), err);
              }
            }
          })();
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Failed to fetch invoices.');
        setLoadingData(false);
      }
    });
    return function fetchItems(_x, _x2, _x3, _x4) {
      return _ref1.apply(this, arguments);
    };
  }();
  var FilterInvoiceWith = invoice.filter(row => Array.isArray(row.items) && row.items.every(item => parseFloat(item.itemOut) === parseFloat(item.itemQty)));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchItems(page, debouncedSearchTerm, filterField, filterValue);
  }, [page, debouncedSearchTerm, filterField, filterValue]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // fetchAndSaveData();
  }, []);
  var handlePageChange = (event, newPage) => {
    setPage(newPage - 1); // Update page state (convert to 0-based index)
  };
  var handleRefreshSearch = () => {
    fetchItems(page, searchTerm, filterField, filterValue);
  };
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    loading = _useState28[0],
    setLoading = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    ErrorOpenModal = _useState30[0],
    setErrorOpenModal = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    loadingOpenModal = _useState32[0],
    setLoadingOpenModal = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    modalDeleteOpenLoading = _useState34[0],
    setModalDeleteOpenLoading = _useState34[1];
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
    setLoadingOpenModal(false);
    setLoading(false);
    fetchItems(page, searchTerm, filterField, filterValue);
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
    setModalDeleteOpenLoading(false);
    setLoading(false);
    fetchItems(page, searchTerm, filterField, filterValue);
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchDataHidden = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/hidden"));
          setHiddenRow(res.data.data.map(row => row.idRow));
          setHidden(res.data.data);
          localStorage.removeItem('Hidden');
        } catch (error) {
          console.error('Error fetching data:', error);
          react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Failed to fetch hidden rows.');
        }
      });
      return function fetchDataHidden() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchDataHidden();
  }, []);
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    openReasonDelete = _useState36[0],
    setOpenReasonDelete = _useState36[1];
  var handleOpenReasonDelete = e => {
    e.preventDefault();
    setOpenReasonDelete(true);
  };
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  {/** End Get Invoice */}
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    open = _useState38[0],
    setOpen = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState40 = _slicedToArray(_useState39, 2),
    DeleteId = _useState40[0],
    setDeleteId = _useState40[1];
  var handleOpen = id => {
    setOpen(true);
    setDeleteId(id);
  };
  var handleClose = () => {
    setOpen(false);
  };
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState42 = _slicedToArray(_useState41, 2),
    open1 = _useState42[0],
    setOpen1 = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState44 = _slicedToArray(_useState43, 2),
    updateId = _useState44[0],
    setUpdateId = _useState44[1];
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState46 = _slicedToArray(_useState45, 2),
    status = _useState46[0],
    setStatus = _useState46[1];
  var handleOpenUpdate = id => {
    setOpen1(true);
    setUpdateId(id);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
    setUpdateId(null);
  };
  {/** delete multiple && all modal start */}
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState48 = _slicedToArray(_useState47, 2),
    openDeleteMultiple = _useState48[0],
    setOpenDeleteMultiple = _useState48[1];
  var handleOpenMultiple = () => {
    setOpenDeleteMultiple(true);
  };
  var handleCloseMultiple = () => {
    setOpenDeleteMultiple(false);
  };
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    openDeleteAll = _useState50[0],
    setOpenDeleteAll = _useState50[1];
  var handleOpenAll = () => {
    setOpenDeleteAll(true);
  };
  var handleCloseAll = () => {
    setOpenDeleteAll(false);
  };
  {/** Delete Function */}
  var handleDelete = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* () {
      setLoading(true);
      setModalDeleteOpenLoading(true);
      handleClose();
      try {
        var invToDelete = invoice.find(inv => inv._id === DeleteId);
        if (invToDelete && invToDelete.ReferenceName && invToDelete.Position === 'Maintenance') {
          try {
            yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/update-maintenance/").concat(invToDelete.ReferenceName), {
              Converted: false,
              ReferenceName: null
            });
          } catch (e) {
            console.error('Failed to update maintenance order', e);
          }
        }
        var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/delete-invoice/").concat(DeleteId));
        if (res) {
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Failed to delete invoice.');
        handleError();
      }
    });
    return function handleDelete() {
      return _ref12.apply(this, arguments);
    };
  }();
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState52 = _slicedToArray(_useState51, 2),
    InvoiceDeleted = _useState52[0],
    setInvoiceDeleted = _useState52[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchFunction = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* () {
        var deletePromises = selectedRows.map(/*#__PURE__*/function () {
          var _ref14 = _asyncToGenerator(function* (idToDelete) {
            return axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-invoice/").concat(idToDelete));
          });
          return function (_x5) {
            return _ref14.apply(this, arguments);
          };
        }());
        try {
          var res = yield Promise.all(deletePromises);
          setInvoiceDeleted(res.map(row => 'INV-' + String(row.data.data.invoiceNumber).padStart(6, '0')));
        } catch (error) {
          console.error('Fetch error:', error);
        }
      });
      return function fetchFunction() {
        return _ref13.apply(this, arguments);
      };
    }();
    fetchFunction();
  }, [selectedRows]);
  var related = InvoiceDeleted.map(row => row);
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
        yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.error('Notification error:', error);
      }
    });
    return function handleCreateNotification() {
      return _ref15.apply(this, arguments);
    };
  }();
  var handleDeleteMany = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      setLoading(true);
      setModalDeleteOpenLoading(true);
      handleCloseMultiple();
      handleCloseAll();
      handleCloseReasonDelete();
      var deletePromises = selectedRows.map(/*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator(function* (idToDelete) {
          var invToDelete = invoice.find(inv => inv._id === idToDelete);
          if (invToDelete && invToDelete.ReferenceName && invToDelete.Position === 'Maintenance') {
            try {
              yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/update-maintenance/").concat(invToDelete.ReferenceName), {
                Converted: false,
                ReferenceName: null
              });
            } catch (e) {
              console.error('Failed to update maintenance order', e);
            }
          }
          return axios__WEBPACK_IMPORTED_MODULE_33__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/delete-invoice/").concat(idToDelete));
        });
        return function (_x7) {
          return _ref17.apply(this, arguments);
        };
      }());
      try {
        var res = yield Promise.all(deletePromises);
        if (res) {
          handleCreateNotification();
          setLoading(false);
          setSelectedRows([]);
        }
      } catch (error) {
        console.error('Delete Many error:', error);
        setLoading(false);
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Failed to delete multiple invoices.');
        handleError();
      }
    });
    return function handleDeleteMany(_x6) {
      return _ref16.apply(this, arguments);
    };
  }();
  {/** End Delete Function */}
  {/** Update Invoice Status start */}
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState54 = _slicedToArray(_useState53, 2),
    invoiceN = _useState54[0],
    setInvoiceN = _useState54[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchId = /*#__PURE__*/function () {
      var _ref18 = _asyncToGenerator(function* () {
        if (updateId !== null) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/get-invoice/").concat(updateId));
            setStatus(res.data.data.status);
            setInvoiceN(res.data.data.invoiceNumber);
          } catch (error) {
            console.error('Error fetching data:', error);
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Failed to fetch invoice detail.');
          }
        }
      });
      return function fetchId() {
        return _ref18.apply(this, arguments);
      };
    }();
    fetchId();
  }, [updateId]);
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(function* () {
      var data = {
        idInfo: updateId,
        person: user.data.userName,
        reason: status + ' INV-' + String(invoiceN).padStart(6, '0'),
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/create-notification/"), data);
      } catch (error) {
        console.error('Notification error:', error);
      }
    });
    return function handleCreateComment() {
      return _ref19.apply(this, arguments);
    };
  }();
  var handleSubmitUpdateStatus = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var data = {
        status
      };
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/update-invoice/").concat(updateId), data);
        if (res) {
          handleCreateComment();
          handleOpenLoading();
        }
      } catch (error) {
        console.error('Error making PUT request:', error);
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Failed to update invoice status.');
      }
    });
    return function handleSubmitUpdateStatus(_x8) {
      return _ref20.apply(this, arguments);
    };
  }();
  {/** Update Invoice Status End */}
  var handleHideRow = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(function* (id) {
      if (user.data.role === 'CEO') {
        try {
          if (hiddenRow.includes(id)) {
            setHiddenRow(hiddenRow.filter(row => row !== id));
            var result = hidden.filter(row => row.idRow === id).map(row => row._id);
            var hiddenId = result.toString();
            yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/delete-hidden/").concat(hiddenId));
          } else {
            setHiddenRow([...hiddenRow, id]);
            yield axios__WEBPACK_IMPORTED_MODULE_33__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_34__.ENDPOINT_URL, "/create-hidden"), {
              idRow: id,
              hiddenByCEO: true
            });
          }
        } catch (error) {
          console.error('Hide error:', error);
          react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error('Failed to update row visibility.');
        }
      }
    });
    return function handleHideRow(_x9) {
      return _ref21.apply(this, arguments);
    };
  }();
  var rowRenderer = params => {
    if (hiddenRow.includes(params.row._id) && user.data.role !== 'CEO') {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, params.row[params.field]);
  };
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState56 = _slicedToArray(_useState55, 2),
    filteredRows = _useState56[0],
    setFilteredRows = _useState56[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var Inv = invoice.filter(row => !hiddenRow.includes(row._id));
    setFilteredRows(Inv);
  }, [invoice, hiddenRow]);
  {/** search start */}
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState58 = _slicedToArray(_useState57, 2),
    searchInvoice = _useState58[0],
    setSearchInvoice = _useState58[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedValue = localStorage.getItem('QuickFilterInvoice');
    if (storedValue) {
      setSearchInvoice(storedValue);
    }
  }, []);
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    filterModel = _React$useState2[0],
    setFilterModel = _React$useState2[1];
  var _useState59 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState60 = _slicedToArray(_useState59, 2),
    columnVisibilityModel = _useState60[0],
    setColumnVisibilityModel = _useState60[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsInvoice', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    var _newModel$quickFilter;
    var searchTerm = ((_newModel$quickFilter = newModel.quickFilterValues) === null || _newModel$quickFilter === void 0 ? void 0 : _newModel$quickFilter.join(' ')) || '';
    setSearchTerm(searchTerm);
    setFilterModel(newModel);
    localStorage.setItem('QuickFilterInvoiceTst', JSON.stringify(newModel));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterInvoiceTst'));
    if (storedQuick) {
      var _storedQuick$quickFil;
      var _searchTerm = ((_storedQuick$quickFil = storedQuick.quickFilterValues) === null || _storedQuick$quickFil === void 0 ? void 0 : _storedQuick$quickFil.join(' ')) || '';
      setSearchTerm(_searchTerm);
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsInvoice'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, [searchInvoice]);
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  {/** search end */}
  var columns = [{
    field: 'invoiceNumber',
    headerName: 'Invoice#',
    minWidth: 100,
    flex: 1,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "INV-", String(params.row.invoiceNumber).padStart(6, '0')), " ")
  }, {
    field: 'customer',
    headerName: 'Customer Name',
    minWidth: 200,
    flex: 2,
    valueGetter: params => params.row.customerName.customerName.toUpperCase()
  }, {
    field: 'status',
    headerName: 'Status',
    minWidth: 100,
    flex: 1,
    renderCell: params => {
      var isActuallyPaid = parseFloat(params.row.balanceDue) <= 0 && parseFloat(params.row.totalInvoice) > 0;
      var displayStatus = isActuallyPaid ? "Paid" : params.row.status;
      var displayColor = isActuallyPaid ? "#4caf50" : params.row.status === "Draft" ? "gray" : params.row.status === "Sent" ? "blue" : params.row.status === "Decline" ? "red" : params.row.status === "Pending" ? "#801313" : params.row.status === "Paid" ? "#4caf50" : params.row.status === "Partially-Paid" ? "#fb8c00" : params.row.status === "Free of Charge" ? "#9c27b0" : "black";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
        color: displayColor
      }, displayStatus);
    }
  }, {
    field: 'invoiceSubject',
    headerName: 'Subject',
    minWidth: 150,
    flex: 1
  }, {
    field: 'dateField',
    headerName: 'Date',
    minWidth: 100,
    flex: 1
  }, {
    field: 'totalInvoice',
    headerName: 'I-Amount',
    minWidth: 100,
    flex: 1,
    renderCell: params => {
      var _params$row$totalInvo;
      return "$".concat((_params$row$totalInvo = params.row.totalInvoice) === null || _params$row$totalInvo === void 0 ? void 0 : _params$row$totalInvo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
  }, {
    field: 'total',
    headerName: 'A-Paid',
    minWidth: 100,
    flex: 1,
    renderCell: params => {
      var _params$row$total;
      return "$".concat((_params$row$total = params.row.total) === null || _params$row$total === void 0 ? void 0 : _params$row$total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
  }, {
    field: 'balanceDue',
    headerName: 'B-Due',
    minWidth: 100,
    flex: 1,
    renderCell: params => {
      var _params$row$balanceDu;
      return "$".concat((_params$row$balanceDu = params.row.balanceDue) === null || _params$row$balanceDu === void 0 ? void 0 : _params$row$balanceDu.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
  }, {
    field: 'view',
    headerName: 'View',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      disabled: InvoiceInfoV.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, {
      to: "/InvoiceViewAdminAll/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onClick: () => handleOpenUpdate(params.row._id),
      disabled: params.row.status !== 'Draft' && InvoiceInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        color: 'gray'
      }
    }))))
  }, {
    field: 'Delete',
    headerName: 'Delete',
    width: 50,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "                                ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onClick: () => handleOpen(params.row._id),
      disabled: InvoiceInfoD.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_7__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }, {
    field: 'hide',
    headerName: 'Action',
    sortable: false,
    width: 40,
    renderCell: params => {
      if (user.data.role === 'CEO') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, hiddenRow.includes(params.row._id) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
          title: "UnHide"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onClick: () => handleHideRow(params.row._id)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_38__["default"], {
          style: {
            color: '#202a5a'
          }
        })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
          title: "Hide"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onClick: () => handleHideRow(params.row._id)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
          style: {
            color: '#202a5a'
          }
        })))));
      }
    }
  }];
  {/** Search View End */}
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_31__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Invoice"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_49__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_48__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_32__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_29__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_28__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_25__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_30__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_40__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    disabled: InvoiceInfoC.length === 0 && user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.NavLink, {
    to: '/InvoiceForm',
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleRefreshSearch,
    className: "btnCustomer2"
  }, "Refresh Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, invoice.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'left',
      margin: '10px'
    }
  }, selectedRows.length > 1 && selectedRows.length < invoice.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: user.data.role !== 'CEO',
    onClick: handleOpenAll,
    className: "btnCustomer2"
  }, "Delete multiple"), selectedRows.length === invoice.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleOpenAll,
    disabled: user.data.role !== 'CEO',
    className: "btnCustomer2"
  }, "Delete all") : '') : '', user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_46__.DataGrid, {
    paginationMode: "server",
    rowCount: totalPage * limit,
    pagination: true,
    page: page,
    pageSize: limit,
    onPageChange: handlePageChange,
    rows: invoice,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_47__.GridToolbar
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    getRowClassName: params => FilterInvoiceWith.some(filteredRow => filteredRow.id === params.row.id) ? 'new-Purchase' : '',
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
    rowRenderer: rowRenderer,
    checkboxSelection: true,
    disableColumnFilter: true,
    disableDensitySelector: true,
    rowSelectionModel: selectedRows,
    filterModel: filterModel,
    onFilterModelChange: newModel => handleFilter(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px',
      '& .new-Purchase': {
        backgroundColor: '#e3f2fd'
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    count: totalPage,
    page: page + 1,
    onChange: handlePageChange,
    color: "primary",
    sx: {
      position: 'relative',
      top: '-50px',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'flex-start'
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_46__.DataGrid, {
    paginationMode: "server",
    rowCount: totalPage * limit,
    pagination: true,
    page: page,
    pageSize: limit,
    onPageChange: handlePageChange,
    rows: filteredRows,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_47__.GridToolbar
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    getRowClassName: params => FilterInvoiceWith.some(filteredRow => filteredRow.id === params.row.id) ? 'new-Purchase' : '',
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
    checkboxSelection: true,
    disableColumnFilter: true,
    disableDensitySelector: true,
    rowSelectionModel: selectedRows,
    filterModel: filterModel,
    onFilterModelChange: newModel => handleFilter(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px',
      '& .new-Purchase': {
        backgroundColor: '#e3f2fd'
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], {
    count: totalPage,
    page: page + 1,
    onChange: handlePageChange,
    color: "primary",
    sx: {
      position: 'relative',
      top: '-50px',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'flex-start'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: open,
    onClose: handleClose,
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
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: modalDeleteOpenLoading,
    onClose: handleDeleteCloseLoading,
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_40__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Done Successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleDeleteCloseLoading,
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
  }, "Note:"), " Selected rows will be deleted"), selectedRows.length > 1 && selectedRows.length < invoice.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), selectedRows.length === invoice.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
    style: {
      color: '#202a5a'
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
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Save")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: open1,
    onClose: handleCloseUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Update Invoice Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitUpdateStatus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    fullWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    id: "demo-simple-select-label"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: status,
    label: "Status",
    onChange: e => setStatus(e.target.value)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: 'Draft'
  }, "Draft"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: 'Sent'
  }, "Sent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: 'Pending'
  }, "Pending"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: 'Decline'
  }, "Decline"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    value: 'Free of Charge'
  }, "Free of Charge"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "btnCustomer6",
    style: {
      width: '100%'
    }
  }, "Update")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: loadingOpenModal,
    onClose: handleCloseLoading,
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_40__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_41__["default"], {
    style: {
      color: 'green',
      height: '40px',
      width: '40px'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Done Successfully"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleCloseLoading,
    className: "btnCustomer"
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    open: ErrorOpenModal,
    onClose: () => setErrorOpenModal(false),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, " Error Occured"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Please try again later"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: 'flex',
      gap: '60px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => setErrorOpenModal(false),
    className: "btnCustomer"
  }, "Close"))))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvoiceViewAdmin);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfSW52b2ljZVZpZXdBZG1pbl9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxTQUFTLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOVjs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxxQkFBcUIsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ050Qjs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxzQkFBc0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ052QixDQUFrRDtBQUNYO0FBQ3BCO0FBQ2U7QUFDZ0I7QUFDRTtBQUNzQjtBQUNkO0FBQ1o7QUFDSTtBQUNJO0FBQ3NNO0FBQzlMO0FBQ25CO0FBQ0Q7QUFDUTtBQUNQO0FBQ1A7QUFDRTtBQUNJO0FBQ0k7QUFDVjtBQUNVO0FBQ2M7QUFDSTtBQUN4QztBQUNrQjtBQUNxRDtBQUN2RTtBQUNlO0FBQ3FCO0FBQ1I7QUFDMEI7QUFDaEM7QUFDVDtBQUNrQjtBQUNQO0FBQ1E7QUFHMUQsSUFBTXFFLGFBQWEsR0FBR3ZELDBEQUFNLENBQUN3RCxJQUFBO0VBQUEsSUFBR0MsU0FBUyxHQUFBRCxJQUFBLENBQVRDLFNBQVM7SUFBS0MsS0FBSyxHQUFBQyx3QkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFBQSxvQkFDakQxRSwwREFBQSxDQUFDa0MsOERBQU8sRUFBQTBDLFFBQUEsS0FBS0osS0FBSztJQUFFSyxPQUFPLEVBQUU7TUFBRUMsTUFBTSxFQUFFUDtJQUFVO0VBQUUsRUFBRSxDQUFDO0FBQUEsQ0FDdkQsQ0FBQyxDQUFDUSxLQUFBO0VBQUEs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TyxFQUFFcEssa0JBQW1CO0lBQUNsTyxTQUFTLEVBQUM7RUFBYSxHQUFDLE9BRXJELENBQ0wsQ0FDRixDQUNKLENBQ0YsQ0FDQSxDQUFDLGVBQ1J2RSwwREFBQSxDQUFDdUIsc0RBQUs7SUFDSndGLElBQUksRUFBRThLLGNBQWU7SUFDckJxTyxPQUFPLEVBQUVBLENBQUEsS0FBTXBPLGlCQUFpQixDQUFDLEtBQUssQ0FBRTtJQUN4QyxtQkFBZ0IsbUJBQW1CO0lBQ25DLG9CQUFpQjtFQUF5QixnQkFFMUM5UiwwREFBQSxDQUFDd0Isc0RBQUc7SUFBQ3diLEVBQUUsRUFBQWhXLGFBQUEsQ0FBQUEsYUFBQSxLQUFPaEIsS0FBSztNQUFFSyxLQUFLLEVBQUU7SUFBRztFQUFHLGdCQUNoQ3JHLDBEQUFBO0lBQUtnRyxLQUFLLEVBQUU7TUFBRTZYLGNBQWMsRUFBRSxRQUFRO01BQUVzQyxTQUFTLEVBQUU7SUFBUztFQUFFLGdCQUM1RG5nQiwwREFBQSxhQUFJLGdCQUFrQixDQUFDLGVBQ3ZCQSwwREFBQSxZQUFHLHdCQUF5QixDQUFDLGVBQzdCQSwwREFBQTtJQUFLZ0csS0FBSyxFQUFFO01BQUVpWCxPQUFPLEVBQUUsTUFBTTtNQUFFbUQsR0FBRyxFQUFFLE1BQU07TUFBRXZDLGNBQWMsRUFBRTtJQUFTO0VBQUUsZ0JBQ3JFN2QsMERBQUE7SUFBUTZjLE9BQU8sRUFBRUEsQ0FBQSxLQUFNL0ssaUJBQWlCLENBQUMsS0FBSyxDQUFFO0lBQUN2TixTQUFTLEVBQUM7RUFBYSxHQUFDLE9BRWpFLENBQ0wsQ0FDRixDQUNGLENBQ0EsQ0FDSixDQUVBLENBQU0sQ0FBTSxDQUN4QixDQUFDO0FBRVY7QUFFQSxpRUFBZTZELGdCQUFnQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BZGQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9QZXJzb24yT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9QZXJzb25PZmZSb3VuZGVkLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9JbnZvaWNlVmlld0FkbWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ6XCJcbn0pLCAnQWRkJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTguMzkgMTQuNTZDMTYuNzEgMTMuNyAxNC41MyAxMyAxMiAxM3MtNC43MS43LTYuMzkgMS41NkM0LjYxIDE1LjA3IDQgMTYuMSA0IDE3LjIyVjIwaDE2di0yLjc4YzAtMS4xMi0uNjEtMi4xNS0xLjYxLTIuNjZNMTggMThINnYtLjc4YzAtLjM4LjItLjcyLjUyLS44OEM3LjcxIDE1LjczIDkuNjMgMTUgMTIgMTVjMi4zNyAwIDQuMjkuNzMgNS40OCAxLjM0LjMyLjE2LjUyLjUuNTIuODh6bS04LjIyLTZoNC40NGMxLjIxIDAgMi4xNC0xLjA2IDEuOTgtMi4yNmwtLjMyLTIuNDVDMTUuNTcgNS4zOSAxMy45MiA0IDEyIDRTOC40MyA1LjM5IDguMTIgNy4yOUw3LjggOS43NGMtLjE2IDEuMi43NyAyLjI2IDEuOTggMi4yNm0uMzItNC40MUMxMC4yNiA2LjY3IDExLjA2IDYgMTIgNnMxLjc0LjY3IDEuOSAxLjU5bC4zMiAyLjQxSDkuNzh6XCJcbn0pLCAnUGVyc29uMk91dGxpbmVkJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNOC42NSA1LjgyQzkuMzYgNC43MiAxMC42IDQgMTIgNGMyLjIxIDAgNCAxLjc5IDQgNCAwIDEuNC0uNzIgMi42NC0xLjgyIDMuMzV6TTIwIDE3LjE3Yy0uMDItMS4xLS42My0yLjExLTEuNjEtMi42Mi0uNTQtLjI4LTEuMTMtLjU0LTEuNzctLjc2em0uNDkgMy4zMkwzLjUxIDMuNTFhLjk5NTkuOTk1OSAwIDAgMC0xLjQxIDBjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFsOC4xOCA4LjE4Yy0xLjgyLjIzLTMuNDEuOC00LjcgMS40NkM0LjYgMTUuMDggNCAxNi4xMSA0IDE3LjIyVjIwaDEzLjE3bDEuOSAxLjljLjM5LjM5IDEuMDIuMzkgMS40MSAwIC40LS4zOS40LTEuMDIuMDEtMS40MVwiXG59KSwgJ1BlcnNvbk9mZlJvdW5kZWQnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICcuL3ZpZXcuY3NzJ1xyXG5pbXBvcnQgJy4vUGFnZVZpZXcvQ2hhcnR2aWV3LmNzcyc7XHJcbmltcG9ydCBTaWRlYmFyRGFzaCBmcm9tICcuLi9jb21wb25lbnQvU2lkZWJhckRhc2gnXHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0IFZpc2liaWxpdHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVmlzaWJpbGl0eSc7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IE5hdkxpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IFRhYmxlLCBJY29uQnV0dG9uLCBzdHlsZWQsIFRhYmxlQm9keSwgVGFibGVDZWxsLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBDaGVja2JveCwgVGFibGVDb250YWluZXIsIFBhcGVyLCBUeXBvZ3JhcGh5LCBNb2RhbCwgQm94LCBHcmlkLCBGb3JtQ29udHJvbCwgSW5wdXRMYWJlbCwgU2VsZWN0LCBNZW51SXRlbSwgQmFja2Ryb3AsIEF1dG9jb21wbGV0ZSwgVGV4dEZpZWxkLCBQYWdpbmF0aW9uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBUb29sdGlwLCB7IHRvb2x0aXBDbGFzc2VzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IE11aUFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVG9vbGJhcic7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IE11aURyYXdlciBmcm9tICdAbXVpL21hdGVyaWFsL0RyYXdlcic7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGlzdCc7XHJcbmltcG9ydCBCYWRnZSBmcm9tICdAbXVpL21hdGVyaWFsL0JhZGdlJztcclxuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01lbnUnO1xyXG5pbXBvcnQgQ2hldnJvbkxlZnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hldnJvbkxlZnQnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Ob3RpZmljYXRpb25zJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EUE9JTlRfVVJMIH0gZnJvbSAnLi4vYXBpQ29uZmlnJztcclxuaW1wb3J0IHsgQWRkLCBDbG9zZSwgTWFpbE91dGxpbmUsIFBlcnNvbjJPdXRsaW5lZCwgUGVyc29uT2ZmUm91bmRlZCB9IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwnO1xyXG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudC9Mb2FkZXInO1xyXG5pbXBvcnQgQ2hlY2tDaXJjbGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2hlY2tDaXJjbGUnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBsb2dPdXQsIHNlbGVjdEN1cnJlbnRVc2VyLCBzZXRVc2VyIH0gZnJvbSAnLi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uL2ltZy9uby1kYXRhLnBuZyc7XHJcbmltcG9ydCB7IERhdGFHcmlkLCBHcmlkVG9vbGJhciB9IGZyb20gJ0BtdWkveC1kYXRhLWdyaWQnO1xyXG5pbXBvcnQgTWVzc2FnZUFkbWluVmlldyBmcm9tICcuL01lc3NhZ2VBZG1pblZpZXcnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uVklld0luZm8gZnJvbSAnLi9Ob3RpZmljYXRpb25WSWV3SW5mbyc7XHJcblxyXG5cclxuY29uc3QgRGVsZXRlVG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IEVkaXRUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmF5JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxyXG4gICAgZm9udFNpemU6IDExLFxyXG4gIH0sXHJcbn0pKTtcclxuY29uc3QgVmlld1Rvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMDJhNWEnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBzdHlsZSA9IHtcclxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB0b3A6ICc1MCUnLFxyXG4gIGxlZnQ6ICc1MCUnLFxyXG4gIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKScsXHJcbiAgd2lkdGg6IDQwMCxcclxuICBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicsXHJcbiAgYm94U2hhZG93OiAyNCxcclxuICBwdDogMixcclxuICBweDogNCxcclxuICBwYjogMyxcclxufTtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcbmNvbnN0IEFwcEJhciA9IHN0eWxlZChNdWlBcHBCYXIsIHtcclxuICBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyxcclxufSkoKHsgdGhlbWUsIG9wZW4gfSkgPT4gKHtcclxuICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gIH0pLFxyXG4gIC4uLihvcGVuICYmIHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWyd3aWR0aCcsICdtYXJnaW4nXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgfSksXHJcbn0pKTtcclxuY29uc3QgRHJhd2VyID0gc3R5bGVkKE11aURyYXdlciwgeyBzaG91bGRGb3J3YXJkUHJvcDogKHByb3ApID0+IHByb3AgIT09ICdvcGVuJyB9KShcclxuICAoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gICAgJyYgLk11aURyYXdlci1wYXBlcic6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmVudGVyaW5nU2NyZWVuLFxyXG4gICAgICB9KSxcclxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgICAgIC4uLighb3BlbiAmJiB7XHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnaGlkZGVuJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3dpZHRoJywge1xyXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgICAgICB9KSxcclxuICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSxcclxuICAgICAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg5KSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KSxcclxuICAgIH0sXHJcbiAgfSksXHJcbik7XHJcbmZ1bmN0aW9uIEludm9pY2VWaWV3QWRtaW4oKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkICYmIHN0b3Jlc1VzZXJJZCAhPT0gJ251bGwnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUsIGlkOiByZXMuZGF0YS5kYXRhLl9pZCB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCB1c2VyIGRhdGEuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFtncmFudEFjY2Vzcywgc2V0R3JhbnRBY2Nlc3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ncmFudEFjY2Vzc2ApO1xyXG4gICAgICAgIHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnVzZXJJRCA9PT0gdXNlci5kYXRhLmlkKVxyXG4gICAgICAgICAgLm1hcCgocm93KSA9PiBzZXRHcmFudEFjY2Vzcyhyb3cubW9kdWxlcykpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBwZXJtaXNzaW9ucy4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hOdW1iZXIoKVxyXG4gIH0sIFt1c2VyXSlcclxuXHJcbiAgLy8gY29uc29sZS5sb2coZ3JhbnRBY2Nlc3MpXHJcblxyXG4gIGNvbnN0IEludm9pY2VJbmZvQyA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJJbnZvaWNlXCIgJiYgcm93LmFjY2Vzcy5jcmVhdGVNID09PSB0cnVlKTtcclxuICBjb25zdCBJbnZvaWNlSW5mb1YgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiSW52b2ljZVwiICYmIHJvdy5hY2Nlc3Mudmlld00gPT09IHRydWUpO1xyXG4gIGNvbnN0IEludm9pY2VJbmZvVSA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJJbnZvaWNlXCIgJiYgcm93LmFjY2Vzcy5lZGl0TSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgSW52b2ljZUluZm9EID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkludm9pY2VcIiAmJiByb3cuYWNjZXNzLmRlbGV0ZU0gPT09IHRydWUpO1xyXG5cclxuICB7LyoqIEdldCBJbnZvaWNlICovIH1cclxuICBjb25zdCBbaW52b2ljZSwgc2V0SW52b2ljZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2hpZGRlblJvdywgc2V0SGlkZGVuUm93XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFJvd3MsIHNldFNlbGVjdGVkUm93c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmdEYXRhLCBzZXRMb2FkaW5nRGF0YV0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW25ld1B1cmNoYXNlLCBzZXROZXdQdXJjaGFzZV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApOyAvLyBJbml0aWFsaXplIHBhZ2Ugc3RhdGUgdG8gMCAoMC1iYXNlZCBpbmRleClcclxuICBjb25zdCBsaW1pdCA9IDEwMDtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZSgnJyk7IC8vIEluaXRpYWxpemUgc2VhcmNoIHRlcm0gc3RhdGVcclxuICBjb25zdCBbZmlsdGVyRmllbGQsIHNldEZpbHRlckZpZWxkXSA9IHVzZVN0YXRlKCcnKTsgLy8gSW5pdGlhbGl6ZSBmaWx0ZXIgZmllbGQgc3RhdGVcclxuICBjb25zdCBbZmlsdGVyVmFsdWUsIHNldEZpbHRlclZhbHVlXSA9IHVzZVN0YXRlKCcnKTsgLy8gSW5pdGlhbGl6ZSBmaWx0ZXIgdmFsdWUgc3RhdGVcclxuICBjb25zdCBbdG90YWxQYWdlLCBTZXRUb3RhbFBhZ2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2RlYm91bmNlZFNlYXJjaFRlcm0sIHNldERlYm91bmNlZFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoc2VhcmNoVGVybSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldERlYm91bmNlZFNlYXJjaFRlcm0oc2VhcmNoVGVybSk7XHJcbiAgICB9LCA1MDApOyAvLyA1MDBtcyBkZWJvdW5jZSBkZWxheVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFyVGltZW91dChoYW5kbGVyKTtcclxuICAgIH07XHJcbiAgfSwgW3NlYXJjaFRlcm1dKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hJdGVtcyA9IGFzeW5jIChwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2ludm9pY2UtSW5mb3JtYXRpb24/cGFnZT0ke3BhZ2UgKyAxfSZsaW1pdD0ke2xpbWl0fSZzZWFyY2g9JHtlbmNvZGVVUklDb21wb25lbnQoc2VhcmNoVGVybS50cmltKCkpfSZmaWx0ZXJGaWVsZD0ke2VuY29kZVVSSUNvbXBvbmVudChmaWx0ZXJGaWVsZC50cmltKCkpfSZmaWx0ZXJWYWx1ZT0ke2VuY29kZVVSSUNvbXBvbmVudChmaWx0ZXJWYWx1ZS50cmltKCkpfWApO1xyXG4gICAgICBjb25zdCBmb3JtYXREYXRlID0gcmVzLmRhdGEuaXRlbUkubWFwKChyb3cpID0+ICh7XHJcbiAgICAgICAgLi4ucm93LFxyXG4gICAgICAgIGlkOiByb3cuX2lkLFxyXG4gICAgICAgIGludm9pY2VOdW1iZXI6IHJvdy5pbnZvaWNlTnVtYmVyLFxyXG4gICAgICAgIGRhdGVGaWVsZDogcm93Lmludm9pY2VEYXRlICE9PSBudWxsID8gZGF5anMocm93Lmludm9pY2VEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSA6ICcnLFxyXG4gICAgICAgIGR1ZURhdGVGaWVsZDogZGF5anMocm93Lmludm9pY2VEdWVEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSxcclxuICAgICAgfSkpO1xyXG4gICAgICBjb25zdCBpbnZvaWNlcyA9IGZvcm1hdERhdGU7XHJcbiAgICAgIFNldFRvdGFsUGFnZShyZXMuZGF0YS50b3RhbFBhZ2VzKTsgLy8gRW5zdXJlIHRvdGFsUGFnZSBpcyBjb3JyZWN0bHkgY2FsY3VsYXRlZFxyXG4gICAgICBzZXRJbnZvaWNlKGludm9pY2VzKTtcclxuICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpO1xyXG5cclxuICAgICAgLy8gQXV0by1yZXBhaXIgc3RhdHVzIG1pc21hdGNoIGZvciB6ZXJvLWJhbGFuY2UgaW52b2ljZXNcclxuICAgICAgY29uc3QgbWlzbWF0Y2hlZEludm9pY2VzID0gaW52b2ljZXMuZmlsdGVyKGludiA9PiBcclxuICAgICAgICAoaW52LnN0YXR1cyA9PT0gJ1BhcnRpYWxseS1QYWlkJyB8fCBpbnYuc3RhdHVzID09PSAnU2VudCcgfHwgaW52LnN0YXR1cyA9PT0gJ0RyYWZ0JyB8fCBpbnYuc3RhdHVzID09PSAnUGVuZGluZycpICYmIFxyXG4gICAgICAgIHBhcnNlRmxvYXQoaW52LmJhbGFuY2VEdWUpIDw9IDAgJiYgXHJcbiAgICAgICAgcGFyc2VGbG9hdChpbnYudG90YWxJbnZvaWNlKSA+IDBcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmIChtaXNtYXRjaGVkSW52b2ljZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBSZXBhaXJpbmcgc3RhdHVzIGZvciAke21pc21hdGNoZWRJbnZvaWNlcy5sZW5ndGh9IGludm9pY2VzIHNlcXVlbnRpYWxseS4uLmApO1xyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IGludiBvZiBtaXNtYXRjaGVkSW52b2ljZXMpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtaW52b2ljZS8ke2ludi5faWR9YCwgeyBzdGF0dXM6ICdQYWlkJyB9KTtcclxuICAgICAgICAgICAgICAvLyBTbWFsbCBkZWxheSB0byBwcmV2ZW50IHJhdGUgbGltaXRpbmdcclxuICAgICAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwKSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byByZXBhaXIgaW52b2ljZSAke2ludi5pbnZvaWNlTnVtYmVyfTpgLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIHRvYXN0LmVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggaW52b2ljZXMuJyk7XHJcbiAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IEZpbHRlckludm9pY2VXaXRoID0gaW52b2ljZS5maWx0ZXIocm93ID0+XHJcbiAgICBBcnJheS5pc0FycmF5KHJvdy5pdGVtcykgJiYgcm93Lml0ZW1zLmV2ZXJ5KGl0ZW0gPT4gcGFyc2VGbG9hdChpdGVtLml0ZW1PdXQpID09PSBwYXJzZUZsb2F0KGl0ZW0uaXRlbVF0eSkpXHJcbiAgKTtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaEl0ZW1zKHBhZ2UsIGRlYm91bmNlZFNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSk7XHJcbiAgfSwgW3BhZ2UsIGRlYm91bmNlZFNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gZmV0Y2hBbmRTYXZlRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChldmVudCwgbmV3UGFnZSkgPT4ge1xyXG4gICAgc2V0UGFnZShuZXdQYWdlIC0gMSk7IC8vIFVwZGF0ZSBwYWdlIHN0YXRlIChjb252ZXJ0IHRvIDAtYmFzZWQgaW5kZXgpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVmcmVzaFNlYXJjaCA9ICgpID0+IHtcclxuICAgIGZldGNoSXRlbXMocGFnZSwgc2VhcmNoVGVybSwgZmlsdGVyRmllbGQsIGZpbHRlclZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbERlbGV0ZU9wZW5Mb2FkaW5nLCBzZXRNb2RhbERlbGV0ZU9wZW5Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB7LyoqIExvYWRpbmcgVXBkYXRlIFZpZXcgU3RhcnQgKi8gfVxyXG4gIGNvbnN0IGhhbmRsZU9wZW5Mb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBoYW5kbGVDbG9zZVVwZGF0ZSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgZmV0Y2hJdGVtcyhwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpO1xyXG4gIH1cclxuICB7LyoqIExvYWRpbmcgVXBkYXRlIFZpZXcgRW5kICovIH1cclxuXHJcbiAgey8qKiBMb2FkaW5nIERlbGV0ZSBWaWV3IFN0YXJ0ICovIH1cclxuICBjb25zdCBoYW5kbGVEZWxldGVPcGVuTG9hZGluZyA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsRGVsZXRlT3BlbkxvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgaGFuZGxlQ2xvc2UoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsb3NlTG9hZGluZyA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsRGVsZXRlT3BlbkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICBmZXRjaEl0ZW1zKHBhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuT2ZmbGluZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hEYXRhSGlkZGVuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2hpZGRlbmApXHJcbiAgICAgICAgc2V0SGlkZGVuUm93KHJlcy5kYXRhLmRhdGEubWFwKChyb3cpID0+IHJvdy5pZFJvdykpXHJcbiAgICAgICAgc2V0SGlkZGVuKHJlcy5kYXRhLmRhdGEpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ0hpZGRlbicpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBoaWRkZW4gcm93cy4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhSGlkZGVuKClcclxuICB9LCBbXSlcclxuICBjb25zdCBbb3BlblJlYXNvbkRlbGV0ZSwgc2V0T3BlblJlYXNvbkRlbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5SZWFzb25EZWxldGUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBzZXRPcGVuUmVhc29uRGVsZXRlKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VSZWFzb25EZWxldGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuUmVhc29uRGVsZXRlKGZhbHNlKTtcclxuICB9O1xyXG4gIHsvKiogRW5kIEdldCBJbnZvaWNlICovIH1cclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0RlbGV0ZUlkLCBzZXREZWxldGVJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuID0gKGlkKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgc2V0RGVsZXRlSWQoaWQpXHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgW29wZW4xLCBzZXRPcGVuMV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VwZGF0ZUlkLCBzZXRVcGRhdGVJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblVwZGF0ZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3BlbjEodHJ1ZSk7XHJcbiAgICBzZXRVcGRhdGVJZChpZCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVVwZGF0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4xKGZhbHNlKTtcclxuICAgIHNldFVwZGF0ZUlkKG51bGwpO1xyXG4gIH07XHJcbiAgey8qKiBkZWxldGUgbXVsdGlwbGUgJiYgYWxsIG1vZGFsIHN0YXJ0ICovIH1cclxuICBjb25zdCBbb3BlbkRlbGV0ZU11bHRpcGxlLCBzZXRPcGVuRGVsZXRlTXVsdGlwbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuTXVsdGlwbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRGVsZXRlTXVsdGlwbGUodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU11bHRpcGxlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRlbGV0ZU11bHRpcGxlKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IFtvcGVuRGVsZXRlQWxsLCBzZXRPcGVuRGVsZXRlQWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbkFsbCA9ICgpID0+IHtcclxuICAgIHNldE9wZW5EZWxldGVBbGwodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUFsbCA9ICgpID0+IHtcclxuICAgIHNldE9wZW5EZWxldGVBbGwoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHsvKiogRGVsZXRlIEZ1bmN0aW9uICovIH1cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0TW9kYWxEZWxldGVPcGVuTG9hZGluZyh0cnVlKTtcclxuICAgIGhhbmRsZUNsb3NlKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBpbnZUb0RlbGV0ZSA9IGludm9pY2UuZmluZChpbnYgPT4gaW52Ll9pZCA9PT0gRGVsZXRlSWQpO1xyXG4gICAgICBpZiAoaW52VG9EZWxldGUgJiYgaW52VG9EZWxldGUuUmVmZXJlbmNlTmFtZSAmJiBpbnZUb0RlbGV0ZS5Qb3NpdGlvbiA9PT0gJ01haW50ZW5hbmNlJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtbWFpbnRlbmFuY2UvJHtpbnZUb0RlbGV0ZS5SZWZlcmVuY2VOYW1lfWAsIHsgQ29udmVydGVkOiBmYWxzZSwgUmVmZXJlbmNlTmFtZTogbnVsbCB9KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgbWFpbnRlbmFuY2Ugb3JkZXInLCBlKTsgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5kZWxldGUoYCR7RU5EUE9JTlRfVVJMfS9kZWxldGUtaW52b2ljZS8ke0RlbGV0ZUlkfWApO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgdG9hc3QuZXJyb3IoJ0ZhaWxlZCB0byBkZWxldGUgaW52b2ljZS4nKTtcclxuICAgICAgaGFuZGxlRXJyb3IoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IFtJbnZvaWNlRGVsZXRlZCwgc2V0SW52b2ljZURlbGV0ZWRdID0gdXNlU3RhdGUoW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZVByb21pc2VzID0gc2VsZWN0ZWRSb3dzLm1hcChhc3luYyAoaWRUb0RlbGV0ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaW52b2ljZS8ke2lkVG9EZWxldGV9YClcclxuICAgICAgfSlcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbChkZWxldGVQcm9taXNlcyk7XHJcbiAgICAgICAgc2V0SW52b2ljZURlbGV0ZWQocmVzLm1hcCgocm93KSA9PiAnSU5WLScgKyBTdHJpbmcocm93LmRhdGEuZGF0YS5pbnZvaWNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGZXRjaCBlcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRnVuY3Rpb24oKVxyXG4gIH0sIFtzZWxlY3RlZFJvd3NdKVxyXG4gIGNvbnN0IHJlbGF0ZWQgPSBJbnZvaWNlRGVsZXRlZC5tYXAocm93ID0+IHJvdylcclxuICBjb25zdCBpbmZvID0gcmVsYXRlZC50b1N0cmluZygpXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiAnJyxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIERlbGV0ZWQgJyArIGluZm8sXHJcbiAgICAgIHJlYXNvbixcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogbmV3IERhdGUoKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignTm90aWZpY2F0aW9uIGVycm9yOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlTWFueSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRNb2RhbERlbGV0ZU9wZW5Mb2FkaW5nKHRydWUpO1xyXG4gICAgaGFuZGxlQ2xvc2VNdWx0aXBsZSgpO1xyXG4gICAgaGFuZGxlQ2xvc2VBbGwoKTtcclxuICAgIGhhbmRsZUNsb3NlUmVhc29uRGVsZXRlKCk7XHJcbiAgICBjb25zdCBkZWxldGVQcm9taXNlcyA9IHNlbGVjdGVkUm93cy5tYXAoYXN5bmMgKGlkVG9EZWxldGUpID0+IHtcclxuICAgICAgY29uc3QgaW52VG9EZWxldGUgPSBpbnZvaWNlLmZpbmQoaW52ID0+IGludi5faWQgPT09IGlkVG9EZWxldGUpO1xyXG4gICAgICBpZiAoaW52VG9EZWxldGUgJiYgaW52VG9EZWxldGUuUmVmZXJlbmNlTmFtZSAmJiBpbnZUb0RlbGV0ZS5Qb3NpdGlvbiA9PT0gJ01haW50ZW5hbmNlJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtbWFpbnRlbmFuY2UvJHtpbnZUb0RlbGV0ZS5SZWZlcmVuY2VOYW1lfWAsIHsgQ29udmVydGVkOiBmYWxzZSwgUmVmZXJlbmNlTmFtZTogbnVsbCB9KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byB1cGRhdGUgbWFpbnRlbmFuY2Ugb3JkZXInLCBlKTsgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBheGlvcy5kZWxldGUoYCR7RU5EUE9JTlRfVVJMfS9kZWxldGUtaW52b2ljZS8ke2lkVG9EZWxldGV9YClcclxuICAgIH0pXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbChkZWxldGVQcm9taXNlcyk7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oKVxyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkUm93cyhbXSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0RlbGV0ZSBNYW55IGVycm9yOicsIGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHRvYXN0LmVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIG11bHRpcGxlIGludm9pY2VzLicpO1xyXG4gICAgICBoYW5kbGVFcnJvcigpO1xyXG4gICAgfVxyXG4gIH1cclxuICB7LyoqIEVuZCBEZWxldGUgRnVuY3Rpb24gKi8gfVxyXG4gIHsvKiogVXBkYXRlIEludm9pY2UgU3RhdHVzIHN0YXJ0ICovIH1cclxuICBjb25zdCBbaW52b2ljZU4sIHNldEludm9pY2VOXSA9IHVzZVN0YXRlKDApXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoSWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICh1cGRhdGVJZCAhPT0gbnVsbCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtaW52b2ljZS8ke3VwZGF0ZUlkfWApXHJcbiAgICAgICAgICBzZXRTdGF0dXMocmVzLmRhdGEuZGF0YS5zdGF0dXMpO1xyXG4gICAgICAgICAgc2V0SW52b2ljZU4ocmVzLmRhdGEuZGF0YS5pbnZvaWNlTnVtYmVyKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICB0b2FzdC5lcnJvcignRmFpbGVkIHRvIGZldGNoIGludm9pY2UgZGV0YWlsLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hJZCgpXHJcbiAgfSwgW3VwZGF0ZUlkXSk7XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlQ29tbWVudCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogdXBkYXRlSWQsXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lLFxyXG4gICAgICByZWFzb246IHN0YXR1cyArICcgSU5WLScgKyBTdHJpbmcoaW52b2ljZU4pLnBhZFN0YXJ0KDYsICcwJyksXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbi9gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignTm90aWZpY2F0aW9uIGVycm9yOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0VXBkYXRlU3RhdHVzID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIHN0YXR1c1xyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnB1dChgJHtFTkRQT0lOVF9VUkx9L3VwZGF0ZS1pbnZvaWNlLyR7dXBkYXRlSWR9YCwgZGF0YSlcclxuICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgIGhhbmRsZUNyZWF0ZUNvbW1lbnQoKTtcclxuICAgICAgICBoYW5kbGVPcGVuTG9hZGluZygpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBtYWtpbmcgUFVUIHJlcXVlc3Q6JywgZXJyb3IpO1xyXG4gICAgICB0b2FzdC5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBpbnZvaWNlIHN0YXR1cy4nKTtcclxuICAgIH1cclxuICB9XHJcbiAgey8qKiBVcGRhdGUgSW52b2ljZSBTdGF0dXMgRW5kICovIH1cclxuXHJcblxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlSGlkZVJvdyA9IGFzeW5jIChpZCkgPT4ge1xyXG5cclxuICAgIGlmICh1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTycpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoaGlkZGVuUm93LmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgc2V0SGlkZGVuUm93KGhpZGRlblJvdy5maWx0ZXIoKHJvdykgPT4gcm93ICE9PSBpZCkpO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGlkZGVuLmZpbHRlcigocm93KSA9PiByb3cuaWRSb3cgPT09IGlkKVxyXG4gICAgICAgICAgICAubWFwKChyb3cpID0+IHJvdy5faWQpXHJcbiAgICAgICAgICBjb25zdCBoaWRkZW5JZCA9IHJlc3VsdC50b1N0cmluZygpXHJcblxyXG4gICAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLWhpZGRlbi8ke2hpZGRlbklkfWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRIaWRkZW5Sb3coWy4uLmhpZGRlblJvdywgaWRdKTtcclxuICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtaGlkZGVuYCwge1xyXG4gICAgICAgICAgICBpZFJvdzogaWQsIGhpZGRlbkJ5Q0VPOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdIaWRlIGVycm9yOicsIGVycm9yKTtcclxuICAgICAgICB0b2FzdC5lcnJvcignRmFpbGVkIHRvIHVwZGF0ZSByb3cgdmlzaWJpbGl0eS4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgcm93UmVuZGVyZXIgPSAocGFyYW1zKSA9PiB7XHJcbiAgICBpZiAoaGlkZGVuUm93LmluY2x1ZGVzKHBhcmFtcy5yb3cuX2lkKSAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTycpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuICAgIHJldHVybiA8ZGl2PntwYXJhbXMucm93W3BhcmFtcy5maWVsZF19PC9kaXY+XHJcbiAgfVxyXG4gIGNvbnN0IFtmaWx0ZXJlZFJvd3MsIHNldEZpbHRlcmVkUm93c10gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgSW52ID0gaW52b2ljZS5maWx0ZXIocm93ID0+ICFoaWRkZW5Sb3cuaW5jbHVkZXMocm93Ll9pZCkpXHJcbiAgICBzZXRGaWx0ZXJlZFJvd3MoSW52KVxyXG4gIH0sIFtpbnZvaWNlLCBoaWRkZW5Sb3ddKVxyXG4gIHsvKiogc2VhcmNoIHN0YXJ0ICovIH1cclxuICBjb25zdCBbc2VhcmNoSW52b2ljZSwgc2V0U2VhcmNoSW52b2ljZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUXVpY2tGaWx0ZXJJbnZvaWNlJylcclxuICAgIGlmIChzdG9yZWRWYWx1ZSkge1xyXG4gICAgICBzZXRTZWFyY2hJbnZvaWNlKHN0b3JlZFZhbHVlKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IFtmaWx0ZXJNb2RlbCwgc2V0RmlsdGVyTW9kZWxdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgaXRlbXM6IFtdLFxyXG4gICAgcXVpY2tGaWx0ZXJFeGNsdWRlSGlkZGVuQ29sdW1uczogdHJ1ZSxcclxuICAgIHF1aWNrRmlsdGVyVmFsdWVzOiBbXSxcclxuICB9KTtcclxuICBjb25zdCBbY29sdW1uVmlzaWJpbGl0eU1vZGVsLCBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWxdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IGhhbmRlbEhpZGRlbkNvbHVtbiA9IChuZXdIaWRkZW4pID0+IHtcclxuICAgIHNldENvbHVtblZpc2liaWxpdHlNb2RlbChuZXdIaWRkZW4pXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnSGlkZGVuQ29sdW1uc0ludm9pY2UnLCBKU09OLnN0cmluZ2lmeShuZXdIaWRkZW4pKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVGaWx0ZXIgPSAobmV3TW9kZWwpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBuZXdNb2RlbC5xdWlja0ZpbHRlclZhbHVlcz8uam9pbignICcpIHx8ICcnO1xyXG4gICAgc2V0U2VhcmNoVGVybShzZWFyY2hUZXJtKTtcclxuICAgIHNldEZpbHRlck1vZGVsKG5ld01vZGVsKVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1F1aWNrRmlsdGVySW52b2ljZVRzdCcsIEpTT04uc3RyaW5naWZ5KG5ld01vZGVsKSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFF1aWNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUXVpY2tGaWx0ZXJJbnZvaWNlVHN0JykpXHJcbiAgICBpZiAoc3RvcmVkUXVpY2spIHtcclxuICAgICAgY29uc3Qgc2VhcmNoVGVybSA9IHN0b3JlZFF1aWNrLnF1aWNrRmlsdGVyVmFsdWVzPy5qb2luKCcgJykgfHwgJyc7XHJcbiAgICAgIHNldFNlYXJjaFRlcm0oc2VhcmNoVGVybSk7XHJcbiAgICAgIHNldEZpbHRlck1vZGVsKHN0b3JlZFF1aWNrKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc3RvcmVkQ29sdW1ucyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0hpZGRlbkNvbHVtbnNJbnZvaWNlJykpXHJcbiAgICBpZiAoc3RvcmVkQ29sdW1ucykge1xyXG4gICAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwoc3RvcmVkQ29sdW1ucylcclxuICAgIH1cclxuXHJcbiAgfSwgW3NlYXJjaEludm9pY2VdKVxyXG4gIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcbiAgey8qKiBzZWFyY2ggZW5kICovIH1cclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgeyBmaWVsZDogJ2ludm9pY2VOdW1iZXInLCBoZWFkZXJOYW1lOiAnSW52b2ljZSMnLCBtaW5XaWR0aDogMTAwLCBmbGV4OiAxLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoPGRpdj4gPHNwYW4+SU5WLXtTdHJpbmcocGFyYW1zLnJvdy5pbnZvaWNlTnVtYmVyKS5wYWRTdGFydCg2LCAnMCcpfTwvc3Bhbj4gPC9kaXY+KSB9LFxyXG4gICAgeyBmaWVsZDogJ2N1c3RvbWVyJywgaGVhZGVyTmFtZTogJ0N1c3RvbWVyIE5hbWUnLCBtaW5XaWR0aDogMjAwLCBmbGV4OiAyLCB2YWx1ZUdldHRlcjogKHBhcmFtcykgPT4gcGFyYW1zLnJvdy5jdXN0b21lck5hbWUuY3VzdG9tZXJOYW1lLnRvVXBwZXJDYXNlKCkgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICdzdGF0dXMnLCBoZWFkZXJOYW1lOiAnU3RhdHVzJywgbWluV2lkdGg6IDEwMCwgZmxleDogMSwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzQWN0dWFsbHlQYWlkID0gcGFyc2VGbG9hdChwYXJhbXMucm93LmJhbGFuY2VEdWUpIDw9IDAgJiYgcGFyc2VGbG9hdChwYXJhbXMucm93LnRvdGFsSW52b2ljZSkgPiAwO1xyXG4gICAgICAgIGNvbnN0IGRpc3BsYXlTdGF0dXMgPSBpc0FjdHVhbGx5UGFpZCA/IFwiUGFpZFwiIDogcGFyYW1zLnJvdy5zdGF0dXM7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheUNvbG9yID0gaXNBY3R1YWxseVBhaWQgPyBcIiM0Y2FmNTBcIiA6IChcclxuICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzID09PSBcIkRyYWZ0XCIgPyBcImdyYXlcIiA6XHJcbiAgICAgICAgICBwYXJhbXMucm93LnN0YXR1cyA9PT0gXCJTZW50XCIgPyBcImJsdWVcIiA6XHJcbiAgICAgICAgICBwYXJhbXMucm93LnN0YXR1cyA9PT0gXCJEZWNsaW5lXCIgPyBcInJlZFwiIDpcclxuICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzID09PSBcIlBlbmRpbmdcIiA/IFwiIzgwMTMxM1wiIDpcclxuICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzID09PSBcIlBhaWRcIiA/IFwiIzRjYWY1MFwiIDpcclxuICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzID09PSBcIlBhcnRpYWxseS1QYWlkXCIgPyBcIiNmYjhjMDBcIiA6XHJcbiAgICAgICAgICBwYXJhbXMucm93LnN0YXR1cyA9PT0gXCJGcmVlIG9mIENoYXJnZVwiID8gXCIjOWMyN2IwXCIgOiBcImJsYWNrXCJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9e2Rpc3BsYXlDb2xvcn0+XHJcbiAgICAgICAgICAgIHtkaXNwbGF5U3RhdHVzfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7IGZpZWxkOiAnaW52b2ljZVN1YmplY3QnLCBoZWFkZXJOYW1lOiAnU3ViamVjdCcsIG1pbldpZHRoOiAxNTAsIGZsZXg6IDEgfSxcclxuICAgIHsgZmllbGQ6ICdkYXRlRmllbGQnLCBoZWFkZXJOYW1lOiAnRGF0ZScsIG1pbldpZHRoOiAxMDAsIGZsZXg6IDEgfSxcclxuICAgIHsgZmllbGQ6ICd0b3RhbEludm9pY2UnLCBoZWFkZXJOYW1lOiAnSS1BbW91bnQnLCBtaW5XaWR0aDogMTAwLCBmbGV4OiAxLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiBgJCR7cGFyYW1zLnJvdy50b3RhbEludm9pY2U/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gIH0sXHJcbiAgICB7IGZpZWxkOiAndG90YWwnLCBoZWFkZXJOYW1lOiAnQS1QYWlkJywgbWluV2lkdGg6IDEwMCwgZmxleDogMSwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gYCQke3BhcmFtcy5yb3cudG90YWw/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gIH0sXHJcbiAgICB7IGZpZWxkOiAnYmFsYW5jZUR1ZScsIGhlYWRlck5hbWU6ICdCLUR1ZScsIG1pbldpZHRoOiAxMDAsIGZsZXg6IDEsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IGAkJHtwYXJhbXMucm93LmJhbGFuY2VEdWU/LnRvRml4ZWQoMikucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKX1gIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAndmlldycsIGhlYWRlck5hbWU6ICdWaWV3Jywgd2lkdGg6IDYwLCBtaW5XaWR0aDogNjAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJWaWV3XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e0ludm9pY2VJbmZvVi5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9JbnZvaWNlVmlld0FkbWluQWxsLyR7cGFyYW1zLnJvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eUljb24gc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnZWRpdCcsIGhlYWRlck5hbWU6ICdFZGl0Jywgd2lkdGg6IDUwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPEVkaXRUb29sdGlwIHRpdGxlPVwiRWRpdFwiPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW5VcGRhdGUocGFyYW1zLnJvdy5faWQpfSBkaXNhYmxlZD17cGFyYW1zLnJvdy5zdGF0dXMgIT09ICdEcmFmdCcgJiYgSW52b2ljZUluZm9VLmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgIDxFZGl0SWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyYXknIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0VkaXRUb29sdGlwPlxyXG5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICdEZWxldGUnLCBoZWFkZXJOYW1lOiAnRGVsZXRlJywgd2lkdGg6IDUwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPERlbGV0ZVRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIj5cclxuICAgICAgICAgIDxzcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3BlbihwYXJhbXMucm93Ll9pZCl9IGRpc2FibGVkPXtJbnZvaWNlSW5mb0QubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0RlbGV0ZVRvb2x0aXA+KVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICdoaWRlJyxcclxuICAgICAgaGVhZGVyTmFtZTogJ0FjdGlvbicsXHJcbiAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJykge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoaWRkZW5Sb3cuaW5jbHVkZXMocGFyYW1zLnJvdy5faWQpID9cclxuICAgICAgICAgICAgICAgICAgKDxWaWV3VG9vbHRpcCB0aXRsZT1cIlVuSGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlSGlkZVJvdyhwYXJhbXMucm93Ll9pZCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbk9mZlJvdW5kZWQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD4pXHJcbiAgICAgICAgICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVIaWRlUm93KHBhcmFtcy5yb3cuX2lkKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb24yT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIF1cclxuXHJcbiAgey8qKiBTZWFyY2ggVmlldyBFbmQgKi8gfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgSW52b2ljZVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiAxIH19ID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxvYWRpbmdEYXRhID8gPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICcxMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PiA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgID5cclxuICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCBtYXJnaW46ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e0ludm9pY2VJbmZvQy5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy9JbnZvaWNlRm9ybSd9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdidG5DdXN0b21lckFkZGluZyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBZGQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUmVmcmVzaFNlYXJjaH0gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInPlJlZnJlc2ggU2VhcmNoPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiA2MDAsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2ludm9pY2UubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBmbG9hdDogJ2xlZnQnLCBtYXJnaW46ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPiAxICYmIHNlbGVjdGVkUm93cy5sZW5ndGggPCBpbnZvaWNlLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9IG9uQ2xpY2s9e2hhbmRsZU9wZW5BbGx9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJz5EZWxldGUgbXVsdGlwbGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPT09IGludm9pY2UubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuQWxsfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+RGVsZXRlIGFsbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTycgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbk1vZGU9XCJzZXJ2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0NvdW50PXt0b3RhbFBhZ2UgKiBsaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17bGltaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17aW52b2ljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90cz17eyB0b29sYmFyOiBHcmlkVG9vbGJhciB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UXVpY2tGaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVG9vbGJhckJ1dHRvbjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Um93Q2xhc3NOYW1lPXsocGFyYW1zKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGaWx0ZXJJbnZvaWNlV2l0aC5zb21lKGZpbHRlcmVkUm93ID0+IGZpbHRlcmVkUm93LmlkID09PSBwYXJhbXMucm93LmlkKSA/ICduZXctUHVyY2hhc2UnIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUm93U2VsZWN0aW9uTW9kZWxDaGFuZ2U9eyhuZXdTZWxlY3Rpb24pID0+IHNldFNlbGVjdGVkUm93cyhuZXdTZWxlY3Rpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93UmVuZGVyZXI9e3Jvd1JlbmRlcmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDb2x1bW5GaWx0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVEZW5zaXR5U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbk1vZGVsPXtzZWxlY3RlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJNb2RlbD17ZmlsdGVyTW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZpbHRlck1vZGVsQ2hhbmdlPXsobmV3TW9kZWwpID0+IGhhbmRsZUZpbHRlcihuZXdNb2RlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WaXNpYmlsaXR5TW9kZWw9e2NvbHVtblZpc2liaWxpdHlNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29sdW1uVmlzaWJpbGl0eU1vZGVsQ2hhbmdlPXtoYW5kZWxIaWRkZW5Db2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyYgLm5ldy1QdXJjaGFzZSc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZTNmMmZkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXt0b3RhbFBhZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17cGFnZSArIDF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnLTUwcHgnLCB6SW5kZXg6IDEwMDAsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyB9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFHcmlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbk1vZGU9XCJzZXJ2ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0NvdW50PXt0b3RhbFBhZ2UgKiBsaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZT17bGltaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25QYWdlQ2hhbmdlPXtoYW5kbGVQYWdlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17ZmlsdGVyZWRSb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RzPXt7IHRvb2xiYXI6IEdyaWRUb29sYmFyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90UHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dRdWlja0ZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmludE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVUb29sYmFyQnV0dG9uOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRSb3dDbGFzc05hbWU9eyhwYXJhbXMpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZpbHRlckludm9pY2VXaXRoLnNvbWUoZmlsdGVyZWRSb3cgPT4gZmlsdGVyZWRSb3cuaWQgPT09IHBhcmFtcy5yb3cuaWQpID8gJ25ldy1QdXJjaGFzZScgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Sb3dTZWxlY3Rpb25Nb2RlbENoYW5nZT17KG5ld1NlbGVjdGlvbikgPT4gc2V0U2VsZWN0ZWRSb3dzKG5ld1NlbGVjdGlvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveFNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNvbHVtbkZpbHRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZURlbnNpdHlTZWxlY3RvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uTW9kZWw9e3NlbGVjdGVkUm93c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck1vZGVsPXtmaWx0ZXJNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmlsdGVyTW9kZWxDaGFuZ2U9eyhuZXdNb2RlbCkgPT4gaGFuZGxlRmlsdGVyKG5ld01vZGVsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZpc2liaWxpdHlNb2RlbD17Y29sdW1uVmlzaWJpbGl0eU1vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db2x1bW5WaXNpYmlsaXR5TW9kZWxDaGFuZ2U9e2hhbmRlbEhpZGRlbkNvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJiAubmV3LVB1cmNoYXNlJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlM2YyZmQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdpbmF0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ9e3RvdGFsUGFnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlICsgMX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUGFnZUNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB0b3A6ICctNTBweCcsIHpJbmRleDogMTAwMCwgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnIH19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5EbyB5b3Ugd2FudCB0byBEZWxldGUgPzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17bW9kYWxEZWxldGVPcGVuTG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVEZWxldGVDbG9zZUxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PENoZWNrQ2lyY2xlSWNvbiBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgaGVpZ2h0OiAnNDBweCcsIHdpZHRoOiAnNDBweCcgfX0gLz48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+IERvbmUgU3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZUNsb3NlTG9hZGluZ30gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVuRGVsZXRlQWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlQWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+RG8geW91IHdhbnQgdG8gRGVsZXRlID88L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dzLmxlbmd0aCA9PT0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGU6PC9zcGFuPiBTZWxlY3RlZCByb3dzIHdpbGwgYmUgZGVsZXRlZDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPiAxICYmIHNlbGVjdGVkUm93cy5sZW5ndGggPCBpbnZvaWNlLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGU6PC9zcGFuPiBBbGwgc2VsZWN0ZWQgcm93cyB3aWxsIGJlIGRlbGV0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MubGVuZ3RoID09PSBpbnZvaWNlLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGU6PC9zcGFuPiBBbGwgcm93cyB3aWxsIGJlIGRlbGV0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInIG9uQ2xpY2s9e2hhbmRsZU9wZW5SZWFzb25EZWxldGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBvbkNsaWNrPXtoYW5kbGVDbG9zZUFsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17b3BlblJlYXNvbkRlbGV0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZX1cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlUmVhc29uRGVsZXRlfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBXaHkgZG8geW91IHdhbnQgdG8gZGVsZXRlOiB7aW5mb30/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRGVsZXRlTWFueX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9J3JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ncmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3JlYXNvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRSZWFzb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nUmVhc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtvcGVuMX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVVwZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGUgSW52b2ljZSBTdGF0dXNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFVwZGF0ZVN0YXR1c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBmdWxsV2lkdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5TdGF0dXM8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3RhdHVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT17J0RyYWZ0J30+RHJhZnQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsnU2VudCd9PlNlbnQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsnUGVuZGluZyd9PlBlbmRpbmc8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsnRGVjbGluZSd9PkRlY2xpbmU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPXsnRnJlZSBvZiBDaGFyZ2UnfT5GcmVlIG9mIENoYXJnZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcjYnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX0+VXBkYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTG9hZGluZ31cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAoPExvYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4gRG9uZSBTdWNjZXNzZnVsbHk8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VMb2FkaW5nfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17RXJyb3JPcGVuTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0RXJyb3JPcGVuTW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+IEVycm9yIE9jY3VyZWQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5QbGVhc2UgdHJ5IGFnYWluIGxhdGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldEVycm9yT3Blbk1vZGFsKGZhbHNlKX0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj48L0JveD48L0JveD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW52b2ljZVZpZXdBZG1pblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInRvYXN0IiwiU2lkZWJhckRhc2giLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiVmlzaWJpbGl0eUljb24iLCJFZGl0SWNvbiIsIkRlbGV0ZUljb24iLCJOYXZMaW5rIiwidXNlTmF2aWdhdGUiLCJUYWJsZSIsIkljb25CdXR0b24iLCJzdHlsZWQiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIkNoZWNrYm94IiwiVGFibGVDb250YWluZXIiLCJQYXBlciIsIlR5cG9ncmFwaHkiLCJNb2RhbCIsIkJveCIsIkdyaWQiLCJGb3JtQ29udHJvbCIsIklucHV0TGFiZWwiLCJTZWxlY3QiLCJNZW51SXRlbSIsIkJhY2tkcm9wIiwiQXV0b2NvbXBsZXRlIiwiVGV4dEZpZWxkIiwiUGFnaW5hdGlvbiIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkRpdmlkZXIiLCJDb250YWluZXIiLCJMaW5rIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwiQWRkIiwiQ2xvc2UiLCJNYWlsT3V0bGluZSIsIlBlcnNvbjJPdXRsaW5lZCIsIlBlcnNvbk9mZlJvdW5kZWQiLCJkYXlqcyIsIkxvYWRlciIsIkNoZWNrQ2lyY2xlSWNvbiIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJJbWFnZSIsIkRhdGFHcmlkIiwiR3JpZFRvb2xiYXIiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJEZWxldGVUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJFZGl0VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiVmlld1Rvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNyIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmOCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkludm9pY2VWaWV3QWRtaW4iLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmOSIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiaWQiLCJfaWQiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJncmFudEFjY2VzcyIsInNldEdyYW50QWNjZXNzIiwiZmV0Y2hOdW1iZXIiLCJfcmVmMCIsIl9yZXMkZGF0YSIsImZpbHRlciIsInJvdyIsInVzZXJJRCIsIm1hcCIsIm1vZHVsZXMiLCJJbnZvaWNlSW5mb0MiLCJtb2R1bGVOYW1lIiwiYWNjZXNzIiwiY3JlYXRlTSIsIkludm9pY2VJbmZvViIsInZpZXdNIiwiSW52b2ljZUluZm9VIiwiZWRpdE0iLCJJbnZvaWNlSW5mb0QiLCJkZWxldGVNIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJpbnZvaWNlIiwic2V0SW52b2ljZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaGlkZGVuUm93Iiwic2V0SGlkZGVuUm93IiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsInNlbGVjdGVkUm93cyIsInNldFNlbGVjdGVkUm93cyIsIl91c2VTdGF0ZTEiLCJfdXNlU3RhdGUxMCIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwicmVhc29uIiwic2V0UmVhc29uIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsIm5ld1B1cmNoYXNlIiwic2V0TmV3UHVyY2hhc2UiLCJfdXNlU3RhdGUxNSIsIl91c2VTdGF0ZTE2IiwicGFnZSIsInNldFBhZ2UiLCJsaW1pdCIsIl91c2VTdGF0ZTE3IiwiX3VzZVN0YXRlMTgiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJmaWx0ZXJGaWVsZCIsInNldEZpbHRlckZpZWxkIiwiX3VzZVN0YXRlMjEiLCJfdXNlU3RhdGUyMiIsImZpbHRlclZhbHVlIiwic2V0RmlsdGVyVmFsdWUiLCJfdXNlU3RhdGUyMyIsIl91c2VTdGF0ZTI0IiwidG90YWxQYWdlIiwiU2V0VG90YWxQYWdlIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsImRlYm91bmNlZFNlYXJjaFRlcm0iLCJzZXREZWJvdW5jZWRTZWFyY2hUZXJtIiwiaGFuZGxlciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJmZXRjaEl0ZW1zIiwiX3JlZjEiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0cmltIiwiZm9ybWF0RGF0ZSIsIml0ZW1JIiwiaW52b2ljZU51bWJlciIsImRhdGVGaWVsZCIsImludm9pY2VEYXRlIiwiZm9ybWF0IiwiZHVlRGF0ZUZpZWxkIiwiaW52b2ljZUR1ZURhdGUiLCJpbnZvaWNlcyIsInRvdGFsUGFnZXMiLCJtaXNtYXRjaGVkSW52b2ljZXMiLCJpbnYiLCJzdGF0dXMiLCJwYXJzZUZsb2F0IiwiYmFsYW5jZUR1ZSIsInRvdGFsSW52b2ljZSIsImxlbmd0aCIsImxvZyIsInB1dCIsIlByb21pc2UiLCJyZXNvbHZlIiwiZXJyIiwiX3giLCJfeDIiLCJfeDMiLCJfeDQiLCJGaWx0ZXJJbnZvaWNlV2l0aCIsIkFycmF5IiwiaXNBcnJheSIsIml0ZW1zIiwiZXZlcnkiLCJpdGVtIiwiaXRlbU91dCIsIml0ZW1RdHkiLCJoYW5kbGVQYWdlQ2hhbmdlIiwiZXZlbnQiLCJuZXdQYWdlIiwiaGFuZGxlUmVmcmVzaFNlYXJjaCIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTI5IiwiX3VzZVN0YXRlMzAiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsIm1vZGFsRGVsZXRlT3BlbkxvYWRpbmciLCJzZXRNb2RhbERlbGV0ZU9wZW5Mb2FkaW5nIiwiaGFuZGxlT3BlbkxvYWRpbmciLCJoYW5kbGVDbG9zZVVwZGF0ZSIsImhhbmRsZUNsb3NlTG9hZGluZyIsImhhbmRsZURlbGV0ZU9wZW5Mb2FkaW5nIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVEZWxldGVDbG9zZUxvYWRpbmciLCJoYW5kbGVPcGVuT2ZmbGluZSIsImhhbmRsZUVycm9yIiwiZmV0Y2hEYXRhSGlkZGVuIiwiX3JlZjExIiwiaWRSb3ciLCJfdXNlU3RhdGUzNSIsIl91c2VTdGF0ZTM2Iiwib3BlblJlYXNvbkRlbGV0ZSIsInNldE9wZW5SZWFzb25EZWxldGUiLCJoYW5kbGVPcGVuUmVhc29uRGVsZXRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlQ2xvc2VSZWFzb25EZWxldGUiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4Iiwic2V0T3BlbiIsIl91c2VTdGF0ZTM5IiwiX3VzZVN0YXRlNDAiLCJEZWxldGVJZCIsInNldERlbGV0ZUlkIiwiaGFuZGxlT3BlbiIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJvcGVuMSIsInNldE9wZW4xIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsInVwZGF0ZUlkIiwic2V0VXBkYXRlSWQiLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2Iiwic2V0U3RhdHVzIiwiaGFuZGxlT3BlblVwZGF0ZSIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJvcGVuRGVsZXRlTXVsdGlwbGUiLCJzZXRPcGVuRGVsZXRlTXVsdGlwbGUiLCJoYW5kbGVPcGVuTXVsdGlwbGUiLCJoYW5kbGVDbG9zZU11bHRpcGxlIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsIm9wZW5EZWxldGVBbGwiLCJzZXRPcGVuRGVsZXRlQWxsIiwiaGFuZGxlT3BlbkFsbCIsImhhbmRsZUNsb3NlQWxsIiwiaGFuZGxlRGVsZXRlIiwiX3JlZjEyIiwiaW52VG9EZWxldGUiLCJmaW5kIiwiUmVmZXJlbmNlTmFtZSIsIlBvc2l0aW9uIiwiQ29udmVydGVkIiwiZGVsZXRlIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsIkludm9pY2VEZWxldGVkIiwic2V0SW52b2ljZURlbGV0ZWQiLCJmZXRjaEZ1bmN0aW9uIiwiX3JlZjEzIiwiZGVsZXRlUHJvbWlzZXMiLCJfcmVmMTQiLCJpZFRvRGVsZXRlIiwiX3g1IiwiYWxsIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJyZWxhdGVkIiwiaW5mbyIsInRvU3RyaW5nIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjE1IiwiaWRJbmZvIiwicGVyc29uIiwiZGF0ZU5vdGlmaWNhdGlvbiIsIkRhdGUiLCJwb3N0IiwiaGFuZGxlRGVsZXRlTWFueSIsIl9yZWYxNiIsIl9yZWYxNyIsIl94NyIsIl94NiIsIl91c2VTdGF0ZTUzIiwiX3VzZVN0YXRlNTQiLCJpbnZvaWNlTiIsInNldEludm9pY2VOIiwiZmV0Y2hJZCIsIl9yZWYxOCIsImhhbmRsZUNyZWF0ZUNvbW1lbnQiLCJfcmVmMTkiLCJoYW5kbGVTdWJtaXRVcGRhdGVTdGF0dXMiLCJfcmVmMjAiLCJfeDgiLCJoYW5kbGVIaWRlUm93IiwiX3JlZjIxIiwiaW5jbHVkZXMiLCJyZXN1bHQiLCJoaWRkZW5JZCIsImhpZGRlbkJ5Q0VPIiwiX3g5Iiwicm93UmVuZGVyZXIiLCJwYXJhbXMiLCJmaWVsZCIsIl91c2VTdGF0ZTU1IiwiX3VzZVN0YXRlNTYiLCJmaWx0ZXJlZFJvd3MiLCJzZXRGaWx0ZXJlZFJvd3MiLCJJbnYiLCJfdXNlU3RhdGU1NyIsIl91c2VTdGF0ZTU4Iiwic2VhcmNoSW52b2ljZSIsInNldFNlYXJjaEludm9pY2UiLCJzdG9yZWRWYWx1ZSIsIl9SZWFjdCR1c2VTdGF0ZSIsInF1aWNrRmlsdGVyRXhjbHVkZUhpZGRlbkNvbHVtbnMiLCJxdWlja0ZpbHRlclZhbHVlcyIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJmaWx0ZXJNb2RlbCIsInNldEZpbHRlck1vZGVsIiwiX3VzZVN0YXRlNTkiLCJfdXNlU3RhdGU2MCIsImNvbHVtblZpc2liaWxpdHlNb2RlbCIsInNldENvbHVtblZpc2liaWxpdHlNb2RlbCIsImhhbmRlbEhpZGRlbkNvbHVtbiIsIm5ld0hpZGRlbiIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlRmlsdGVyIiwibmV3TW9kZWwiLCJfbmV3TW9kZWwkcXVpY2tGaWx0ZXIiLCJqb2luIiwic3RvcmVkUXVpY2siLCJwYXJzZSIsIl9zdG9yZWRRdWljayRxdWlja0ZpbCIsInN0b3JlZENvbHVtbnMiLCJfUmVhY3QkdXNlU3RhdGUzIiwiX1JlYWN0JHVzZVN0YXRlNCIsInNpZGVCYXIiLCJzZXRTaWRlQmFyIiwidG9nZ2xlRHJhd2VyIiwiY29sdW1ucyIsImhlYWRlck5hbWUiLCJtaW5XaWR0aCIsImZsZXgiLCJyZW5kZXJDZWxsIiwidmFsdWVHZXR0ZXIiLCJjdXN0b21lck5hbWUiLCJ0b1VwcGVyQ2FzZSIsImlzQWN0dWFsbHlQYWlkIiwiZGlzcGxheVN0YXR1cyIsImRpc3BsYXlDb2xvciIsIl9wYXJhbXMkcm93JHRvdGFsSW52byIsInRvRml4ZWQiLCJyZXBsYWNlIiwiX3BhcmFtcyRyb3ckdG90YWwiLCJ0b3RhbCIsIl9wYXJhbXMkcm93JGJhbGFuY2VEdSIsInRpdGxlIiwiZGlzYWJsZWQiLCJ0byIsIm9uQ2xpY2siLCJjdXJzb3IiLCJzb3J0YWJsZSIsInN4IiwiZGlzcGxheSIsInByIiwiZWRnZSIsIm1hcmdpblJpZ2h0IiwiY29tcG9uZW50IiwidmFyaWFudCIsIm5vV3JhcCIsImZsZXhHcm93IiwibmFtZSIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsInBhbGV0dGUiLCJtb2RlIiwiZ3JleSIsIm92ZXJmbG93IiwibWF4V2lkdGgiLCJtdCIsImZsb2F0IiwibWFyZ2luIiwiRnJhZ21lbnQiLCJwYWdpbmF0aW9uTW9kZSIsInJvd0NvdW50IiwicGFnaW5hdGlvbiIsInBhZ2VTaXplIiwib25QYWdlQ2hhbmdlIiwicm93cyIsInNsb3RzIiwidG9vbGJhciIsInNsb3RQcm9wcyIsInNob3dRdWlja0ZpbHRlciIsInByaW50T3B0aW9ucyIsImRpc2FibGVUb29sYmFyQnV0dG9uIiwiZ2V0Um93Q2xhc3NOYW1lIiwic29tZSIsImZpbHRlcmVkUm93Iiwib25Sb3dTZWxlY3Rpb25Nb2RlbENoYW5nZSIsIm5ld1NlbGVjdGlvbiIsImNoZWNrYm94U2VsZWN0aW9uIiwiZGlzYWJsZUNvbHVtbkZpbHRlciIsImRpc2FibGVEZW5zaXR5U2VsZWN0b3IiLCJyb3dTZWxlY3Rpb25Nb2RlbCIsIm9uRmlsdGVyTW9kZWxDaGFuZ2UiLCJvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZSIsInBhZGRpbmciLCJjb3VudCIsIm9uQ2hhbmdlIiwib25DbG9zZSIsInRleHRBbGlnbiIsImdhcCIsInBsYWNlbWVudCIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwieHMiLCJyZXF1aXJlZCIsIm11bHRpbGluZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJ0YXJnZXQiLCJsYWJlbCIsInR5cGUiLCJmdWxsV2lkdGgiLCJsYWJlbElkIl0sInNvdXJjZVJvb3QiOiIifQ==