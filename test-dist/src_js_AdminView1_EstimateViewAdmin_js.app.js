"use strict";
exports.id = "src_js_AdminView1_EstimateViewAdmin_js";
exports.ids = ["src_js_AdminView1_EstimateViewAdmin_js"];
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

/***/ "./src/js/AdminView1/EstimateViewAdmin.js"
/*!************************************************!*\
  !*** ./src/js/AdminView1/EstimateViewAdmin.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _view_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.css */ "./src/js/AdminView1/view.css");
/* harmony import */ var _component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/SidebarDash */ "./src/js/component/SidebarDash.js");
/* harmony import */ var _PageView_Chartview_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageView/Chartview.css */ "./src/js/AdminView1/PageView/Chartview.css");
/* harmony import */ var _mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Visibility */ "./node_modules/@mui/icons-material/Visibility.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/tooltipClasses.js");
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Drawer */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Container */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Backdrop/Backdrop.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../apiConfig */ "./src/js/apiConfig.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Close.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Person2Outlined.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/PersonOffRounded.js");
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




































var DeleteTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"])(_ref => {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref2 => {
  var theme = _ref2.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__["default"].tooltip)]: {
      backgroundColor: 'red',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var EditTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"])(_ref3 => {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref4 => {
  var theme = _ref4.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__["default"].tooltip)]: {
      backgroundColor: 'gray',
      color: 'white',
      boxShadow: theme.shadows[1],
      fontSize: 11
    }
  };
});
var ViewTooltip = (0,_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"])(_ref5 => {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded3);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, props, {
    classes: {
      popper: className
    }
  }));
})(_ref6 => {
  var theme = _ref6.theme;
  return {
    ["& .".concat(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_10__["default"].tooltip)]: {
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
var AppBar = (0,_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"])(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
var Drawer = (0,_mui_material__WEBPACK_IMPORTED_MODULE_31__["default"])(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
function EstimateViewAdmin() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_41__.useDispatch)();
  var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_41__.useSelector)(_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__.selectCurrentUser);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var storesUserId = localStorage.getItem('user');
    var fetchUser = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator(function* () {
        if (storesUserId) {
          try {
            var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-employeeuser/").concat(storesUserId));
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
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_42__.logOut)());
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
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/grantAccess"));
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
  var estimationInfoC = grantAccess.filter(row => row.moduleName === "Estimate" && row.access.createM === true);
  var estimationInfoV = grantAccess.filter(row => row.moduleName === "Estimate" && row.access.viewM === true);
  var estimationInfoU = grantAccess.filter(row => row.moduleName === "Estimate" && row.access.editM === true);
  var estimationInfoD = grantAccess.filter(row => row.moduleName === "Estimate" && row.access.deleteM === true);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    estimate = _useState4[0],
    setEstimate = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loadingData = _useState6[0],
    setLoadingData = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    hiddenRow = _useState8[0],
    setHiddenRow = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState0 = _slicedToArray(_useState9, 2),
    hidden = _useState0[0],
    setHidden = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState10 = _slicedToArray(_useState1, 2),
    page = _useState10[0],
    setPage = _useState10[1];
  var limit = 100;
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    searchTerm = _useState12[0],
    setSearchTerm = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    debouncedSearchTerm = _useState14[0],
    setDebouncedSearchTerm = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    filterField = _useState16[0],
    setFilterField = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState18 = _slicedToArray(_useState17, 2),
    filterValue = _useState18[0],
    setFilterValue = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState20 = _slicedToArray(_useState19, 2),
    totalPage = _useState20[0],
    SetTotalPage = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState22 = _slicedToArray(_useState21, 2),
    selectedRows = _useState22[0],
    setSelectedRows = _useState22[1];
  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState24 = _slicedToArray(_useState23, 2),
    reason = _useState24[0],
    setReason = _useState24[1];
  var fetchItems = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (page, searchTerm, filterField, filterValue) {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/estimation-Information?page=").concat(page + 1, "&limit=").concat(limit, "&search=").concat(encodeURIComponent(searchTerm.trim()), "&filterField=").concat(encodeURIComponent(filterField.trim()), "&filterValue=").concat(encodeURIComponent(filterValue.trim())));
        var formatDate = res.data.itemI.map(item => _objectSpread(_objectSpread({}, item), {}, {
          id: item._id,
          dateField: item.estimateDate !== null ? dayjs__WEBPACK_IMPORTED_MODULE_38___default()(item.estimateDate).format('DD/MM/YYYY') : '',
          dueDateField: dayjs__WEBPACK_IMPORTED_MODULE_38___default()(item.estimateDueDate).format('DD/MM/YYYY')
        }));
        setEstimate(formatDate);
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
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    loading = _useState26[0],
    setLoading = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    ErrorOpenModal = _useState28[0],
    setErrorOpenModal = _useState28[1];
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    loadingOpenModal = _useState30[0],
    setLoadingOpenModal = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    modalDeleteOpenLoading = _useState32[0],
    setModalDeleteOpenLoading = _useState32[1];
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
  var handleCreateNotificationOffline = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoNumber, ReferenceInfoCustomer) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: 'QUO-' + String(ReferenceInfoNumber).padStart(6, '0') + ' For ' + ReferenceInfoCustomer,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/create-notification"), data);
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchDataHidden = /*#__PURE__*/function () {
      var _ref12 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/hidden"));
          setHiddenRow(res.data.data.map(row => row.idRow));
          setHidden(res.data.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchDataHidden() {
        return _ref12.apply(this, arguments);
      };
    }();
    fetchDataHidden();
  }, []);
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    openReasonDelete = _useState34[0],
    setOpenReasonDelete = _useState34[1];
  var handleOpenReasonDelete = e => {
    e.preventDefault();
    setOpenReasonDelete(true);
  };
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    open = _useState36[0],
    setOpen = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState38 = _slicedToArray(_useState37, 2),
    DeleteId = _useState38[0],
    setDeleteId = _useState38[1];
  var handleOpen = id => {
    setOpen(true);
    setDeleteId(id);
  };
  var handleClose = () => {
    setOpen(false);
  };
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    open1 = _useState40[0],
    setOpen1 = _useState40[1];
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState42 = _slicedToArray(_useState41, 2),
    updateId = _useState42[0],
    setUpdateId = _useState42[1];
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState44 = _slicedToArray(_useState43, 2),
    status = _useState44[0],
    setStatus = _useState44[1];
  var handleOpenUpdate = id => {
    setOpen1(true);
    setUpdateId(id);
  };
  var handleCloseUpdate = () => {
    setOpen1(false);
    setUpdateId(null);
  };
  {/** delete multiple && all modal start */}
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState46 = _slicedToArray(_useState45, 2),
    openDeleteMultiple = _useState46[0],
    setOpenDeleteMultiple = _useState46[1];
  var handleOpenMultiple = () => {
    setOpenDeleteMultiple(true);
  };
  var handleCloseMultiple = () => {
    setOpenDeleteMultiple(false);
  };
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState48 = _slicedToArray(_useState47, 2),
    openDeleteAll = _useState48[0],
    setOpenDeleteAll = _useState48[1];
  var handleOpenAll = () => {
    setOpenDeleteAll(true);
  };
  var handleCloseAll = () => {
    setOpenDeleteAll(false);
    setSelectedRows([]);
  };
  {/** delete multiple && all modal end */}
  {/** Loading Delete View End */}
  var handleDelete = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(function* () {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/delete-estimation/").concat(DeleteId));
        if (res) {
          setEstimate(prevEstimate => prevEstimate.filter(item => item._id !== DeleteId));
          handleDeleteOpenLoading();
        }
      } catch (error) {
        alert('An error as Occur');
      }
    });
    return function handleDelete() {
      return _ref13.apply(this, arguments);
    };
  }();
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState50 = _slicedToArray(_useState49, 2),
    EstimateDeleted = _useState50[0],
    setEstimateDeleted = _useState50[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchFunction = /*#__PURE__*/function () {
      var _ref14 = _asyncToGenerator(function* () {
        var deletePromises = selectedRows.map(/*#__PURE__*/function () {
          var _ref15 = _asyncToGenerator(function* (idToDelete) {
            return axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-estimation/").concat(idToDelete));
          });
          return function (_x8) {
            return _ref15.apply(this, arguments);
          };
        }());
        try {
          var res = yield Promise.all(deletePromises);
          setEstimateDeleted(res.map(row => 'Q-' + row.data.data.estimateNumber));
        } catch (error) {
          console.log(error);
        }
      });
      return function fetchFunction() {
        return _ref14.apply(this, arguments);
      };
    }();
    fetchFunction();
  }, [selectedRows]);
  var related = EstimateDeleted.map(row => row);
  var info = related.toString();
  var handleCreateNotification = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(function* () {
      var data = {
        idInfo: '',
        person: user.data.userName + ' Deleted ' + info,
        reason,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/create-notification"), data);
      } catch (error) {
        console.log(error);
      }
    });
    return function handleCreateNotification() {
      return _ref16.apply(this, arguments);
    };
  }();
  var handleDeleteMany = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(function* (e) {
      e.preventDefault();
      var deletePromises = selectedRows.map(/*#__PURE__*/function () {
        var _ref18 = _asyncToGenerator(function* (idToDelete) {
          return axios__WEBPACK_IMPORTED_MODULE_32__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/delete-estimation/").concat(idToDelete));
        });
        return function (_x0) {
          return _ref18.apply(this, arguments);
        };
      }());
      try {
        var res = yield Promise.all(deletePromises);
        if (res) {
          setEstimate(prevEstimate => prevEstimate.filter(item => !selectedRows.includes(item._id)));
          handleCreateNotification();
          setSelectedRows([]);
          handleDeleteOpenLoading();
        }
      } catch (error) {
        console.error('Error deleting items:', error);
      }
    });
    return function handleDeleteMany(_x9) {
      return _ref17.apply(this, arguments);
    };
  }();
  {/** DElete End */}
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState52 = _slicedToArray(_useState51, 2),
    estimateN = _useState52[0],
    setEstimateN = _useState52[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (updateId !== null) {
      axios__WEBPACK_IMPORTED_MODULE_32__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/get-estimation/").concat(updateId)).then(res => {
        // get the response data here
        setStatus(res.data.data.status);
        setEstimateN(res.data.data.estimateNumber);
      }).catch(error => {
        // Handle errors
        console.error('Error fetching data:', error);
      });
    }
  }, [updateId]);
  var handleCreateComment = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(function* () {
      var data = {
        idInfo: updateId,
        person: user.data.userName,
        reason: status + ' Q-' + estimateN,
        dateNotification: new Date()
      };
      try {
        yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/create-notification/"), data);
      } catch (error) {
        console.log(error);
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
        var res = yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].put("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/update-estimation/").concat(updateId), data);
        if (res) {
          setEstimate(prevEstimate => prevEstimate.map(item => item._id === updateId ? _objectSpread(_objectSpread({}, item), {}, {
            status: status
          }) : item));
          handleCreateComment();
          handleOpenLoading();
        }
      } catch (error) {
        console.error('Error making POST request:', error);
      }
    });
    return function handleSubmitUpdateStatus(_x1) {
      return _ref20.apply(this, arguments);
    };
  }();
  {/** hide Start */}
  var handleHideRow = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(function* (id) {
      if (user.data.role === 'CEO') {
        try {
          if (hiddenRow.includes(id)) {
            setHiddenRow(hiddenRow.filter(row => row !== id));
            var result = hidden.filter(row => row.idRow === id).map(row => row._id);
            var hiddenId = result.toString();
            yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/delete-hidden/").concat(hiddenId));
          } else {
            setHiddenRow([...hiddenRow, id]);
            yield axios__WEBPACK_IMPORTED_MODULE_32__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_33__.ENDPOINT_URL, "/create-hidden"), {
              idRow: id,
              hiddenByCEO: true
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
    return function handleHideRow(_x10) {
      return _ref21.apply(this, arguments);
    };
  }();
  var rowRenderer = params => {
    if (hiddenRow.includes(params.row._id && !user.data.role === 'CEO')) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, params.row[params.field]);
  };
  var _useState53 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState54 = _slicedToArray(_useState53, 2),
    filteredRows = _useState54[0],
    setFilteredRows = _useState54[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var Est = estimate.filter(row => !hiddenRow.includes(row._id));
    setFilteredRows(Est);
  }, [estimate]);
  {/** hide End */}
  var _useState55 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState56 = _slicedToArray(_useState55, 2),
    searchEstimate = _useState56[0],
    setSearchEstimate = _useState56[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
    var storedValue = localStorage.getItem('QuickFilterEstimate');
    if (storedValue) {
      setSearchEstimate(storedValue);
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
  var _useState57 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState58 = _slicedToArray(_useState57, 2),
    columnVisibilityModel = _useState58[0],
    setColumnVisibilityModel = _useState58[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsEstimate', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    setFilterModel(newModel);
    localStorage.setItem('QuickFilterEstimationTst', JSON.stringify(newModel));
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
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterEstimationTst'));
    if (storedQuick) {
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsEstimate'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, [searchEstimate]);
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    sideBar = _React$useState4[0],
    setSideBar = _React$useState4[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var columns = [{
    field: 'estimateDate',
    headerName: 'Date',
    minWidth: 100,
    flex: 1,
    type: 'date',
    valueGetter: params => new Date(params.row.estimateDate),
    renderCell: params => dayjs__WEBPACK_IMPORTED_MODULE_38___default()(params.row.estimateDate).format('DD/MM/YYYY')
  }, {
    field: 'customer',
    headerName: 'Customer Name',
    minWidth: 200,
    flex: 2,
    valueGetter: params => params.row.customerName.customerName.toUpperCase()
  }, {
    field: 'estimateNumber',
    headerName: 'Quotation#',
    minWidth: 100,
    flex: 1,
    valueFormatter: params => 'QUO-' + String((params === null || params === void 0 ? void 0 : params.value) || '').padStart(6, '0')
  }, {
    field: 'estimateSubject',
    headerName: 'Subject',
    minWidth: 150,
    flex: 1.5
  }, {
    field: 'status',
    headerName: 'Status',
    minWidth: 110,
    flex: 1,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
      color: params.row.status === "Draft" ? "gray" : params.row.status === "Sent" ? "blue" : params.row.status === "Decline" ? "red" : params.row.status === "Approved" ? "#339ba5" : params.row.status === "Invoiced" ? "#6a1b9a" : "black"
    }, params.row.status)
  }, {
    field: 'subTotal',
    headerName: 'Amount',
    minWidth: 90,
    flex: 1,
    renderCell: params => {
      var _params$row$totalInvo;
      return "$".concat((_params$row$totalInvo = params.row.totalInvoice) === null || _params$row$totalInvo === void 0 ? void 0 : _params$row$totalInvo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','));
    }
  }, {
    field: 'view',
    headerName: 'View',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      disabled: estimationInfoV.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/EstimateViewAdminAll/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Visibility__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        color: '#202a5a'
      }
    })))))
  }, {
    field: 'edit',
    headerName: 'Edit',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EditTooltip, {
      title: "Edit"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      onClick: () => handleOpenUpdate(params.row._id),
      disabled: params.row.status !== 'Draft' && estimationInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        color: 'gray'
      }
    }))))
  }, {
    field: 'Delete',
    headerName: 'Delete',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "                                ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
      onClick: () => handleOpen(params.row._id),
      disabled: estimationInfoD.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        cursor: 'pointer',
        color: 'red'
      }
    }))))
  }, {
    field: 'hide',
    headerName: 'Action',
    sortable: false,
    width: 60,
    minWidth: 60,
    renderCell: params => {
      if (user.data.role === 'CEO') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, hiddenRow.includes(params.row._id) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
          title: "UnHide"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
          onClick: () => handleHideRow(params.row._id)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_37__["default"], {
          style: {
            color: '#202a5a'
          }
        })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
          title: "Hide"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
          onClick: () => handleHideRow(params.row._id)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_36__["default"], {
          style: {
            color: '#202a5a'
          }
        })))));
      }
    }
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    sx: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_13__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppBar, {
    position: "absolute",
    open: sideBar,
    sx: {
      backgroundColor: '#30368a'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      pr: '24px' // keep right padding when drawer closed
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
      display: 'none'
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_18__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    sx: {
      flexGrow: 1
    }
  }, "Quotation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_48__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_47__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1]
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_19__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_15__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    component: "main",
    sx: {
      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
      flexGrow: 1,
      width: '100%',
      height: '100vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_12__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Container__WEBPACK_IMPORTED_MODULE_17__["default"], {
    maxWidth: "none",
    sx: {
      mt: 1
    }
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_39__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    disabled: estimationInfoC.length === 0 && user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
    to: '/EstimateInvoiceForm',
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_34__["default"], null))))))), estimate.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, estimate.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'left',
      margin: '10px'
    }
  }, selectedRows.length > 1 && selectedRows.length < estimate.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: user.data.role !== 'CEO',
    onClick: handleOpenAll,
    className: "btnCustomer2"
  }, "Delete multiple"), selectedRows.length === estimate.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleOpenAll,
    disabled: user.data.role !== 'CEO',
    className: "btnCustomer2"
  }, "Delete all") : '') : '', user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_45__.DataGrid, {
    paginationMode: "server",
    rowCount: totalPage * limit,
    pagination: true,
    page: page,
    pageSize: limit,
    onPageChange: handlePageChange,
    rows: estimate,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_46__.GridToolbar
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    rowSelectionModel: selectedRows,
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
    rowRenderer: rowRenderer,
    checkboxSelection: true,
    disableDensitySelector: true,
    filterModel: filterModel,
    onFilterModelChange: newModel => handleFilter(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px',
      '& .MuiDataGrid-footerContainer': {
        justifyContent: 'flex-start'
      },
      '& .MuiTablePagination-root': {
        flex: 'none'
      },
      '& .MuiTablePagination-spacer': {
        display: 'none'
      }
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_45__.DataGrid, {
    paginationMode: "server",
    rowCount: totalPage * limit,
    pagination: true,
    page: page,
    pageSize: limit,
    onPageChange: handlePageChange,
    rows: filteredRows,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_46__.GridToolbar
    },
    slotProps: {
      toolbar: {
        showQuickFilter: true,
        printOptions: {
          disableToolbarButton: true
        }
      }
    },
    onRowSelectionModelChange: newSelection => setSelectedRows(newSelection),
    rowRenderer: rowRenderer,
    checkboxSelection: true,
    rowSelectionModel: selectedRows,
    disableDensitySelector: true,
    filterModel: filterModel,
    onFilterModelChange: newModel => handleFilter(newModel),
    columnVisibilityModel: columnVisibilityModel,
    onColumnVisibilityModelChange: handelHiddenColumn,
    sx: {
      width: '100%',
      backgroundColor: 'white',
      padding: '10px',
      '& .MuiDataGrid-footerContainer': {
        justifyContent: 'flex-start'
      },
      '& .MuiTablePagination-root': {
        flex: 'none'
      },
      '& .MuiTablePagination-spacer': {
        display: 'none'
      }
    }
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _img_no_data_png__WEBPACK_IMPORTED_MODULE_44__,
    style: {
      position: 'relative',
      marginLeft: '19%',
      padding: '25px',
      height: '40%',
      top: '40px',
      width: '55%',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_30__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    item: true,
    xs: 12,
    style: {
      width: '100%',
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Do you Want to delete?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleClose,
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Cancel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    item: true,
    xs: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleDelete,
    className: "btnCustomer2",
    style: {
      width: '100%'
    }
  }, "Delete"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_30__["default"], {
    open: open1,
    onClose: handleCloseUpdate,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    onClick: handleCloseUpdate,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Update Quotation Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleSubmitUpdateStatus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    sx: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], {
    id: "status"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    required: true,
    id: "status",
    value: status,
    onChange: e => setStatus(e.target.value),
    name: "status",
    label: "status",
    defaultValue: "Draft"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    value: "Draft"
  }, "Draft"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    value: "Sent"
  }, "Sent"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    value: "Decline"
  }, "Decline"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], {
    value: "Approved"
  }, "Approved")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btnCustomer",
    style: {
      width: '100%'
    }
  }, "Update")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_30__["default"], {
    open: openDeleteMultiple,
    onClose: handleCloseMultiple,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_30__["default"], {
    open: openDeleteAll,
    onClose: handleCloseAll,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, "Note:"), " Selected rows will be deleted"), selectedRows.length > 1 && selectedRows.length < estimate.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), selectedRows.length === estimate.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
  }, "Cancel"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_30__["default"], {
    open: loadingOpenModal,
    onClose: handleCloseLoading,
    closeAfterTransition: true,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_28__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_30__["default"], {
    open: modalDeleteOpenLoading,
    onClose: handleDeleteCloseLoading,
    BackdropComponent: _mui_material__WEBPACK_IMPORTED_MODULE_28__["default"],
    BackdropProps: {
      timeout: 500
    },
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
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
  }, "Close")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_30__["default"], {
    open: openReasonDelete,
    onClose: handleCloseReasonDelete,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    sx: _objectSpread(_objectSpread({}, style), {}, {
      width: 500
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
    title: "Close",
    placement: "left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    onClick: handleCloseReasonDelete,
    style: {
      position: 'relative',
      float: 'right'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_35__["default"], {
    style: {
      color: '#202a5a'
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, "Why do you want to delete: ", info, "?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    onSubmit: handleDeleteMany
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    container: true,
    style: {
      alignItems: 'center',
      padding: '15px'
    },
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_29__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EstimateViewAdmin);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfRXN0aW1hdGVWaWV3QWRtaW5fanMuYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMsU0FBUyxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTlY7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMscUJBQXFCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdEI7O0FBRWtEO0FBQ0Y7QUFDaEQsaUVBQWUsZ0VBQWEsZUFBZSxzREFBSTtBQUMvQztBQUNBLENBQUMsc0JBQXNCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ052QixDQUFtRDtBQUMvQjtBQUMrQjtBQUNDO0FBQ3NCO0FBQ3hDO0FBQzBCO0FBQ1o7QUFDSTtBQUNJO0FBQ1E7QUFDbkI7QUFDRDtBQUNRO0FBQ1A7QUFDUDtBQUNFO0FBQ0k7QUFDSTtBQUNWO0FBQ1U7QUFDYztBQUNJO0FBQ2dMO0FBQ3hOO0FBQ2tCO0FBQ3FEO0FBQ3ZFO0FBQ2U7QUFDcUI7QUFDUjtBQUMwQjtBQUNoQztBQUNUO0FBQ2tCO0FBQ1A7QUFDUTtBQUcxRCxJQUFNbUUsYUFBYSxHQUFHeEMsMERBQU0sQ0FBQ3lDLElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNqRHhFLDBEQUFBLENBQUNXLDZEQUFPLEVBQUErRCxRQUFBLEtBQUtKLEtBQUs7SUFBRUssT0FBTyxFQUFFO01BQUVDLE1BQU0sRUFBRVA7SUFBVTtFQUFFLEVBQUUsQ0FBQztBQUFBLENBQ3ZELENBQUMsQ0FBQ1EsS0FBQTtFQUFBLElBQUdD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QixLQUFLLEVBQUU7TUFBRUssS0FBSyxFQUFFO0lBQU87RUFBRSxHQUFDLE1BQVksQ0FDaEYsQ0FDRixDQUNGLENBRUgsQ0FDQSxDQUNKLENBQUM7QUFFVjtBQUVBLGlFQUFlK0IsaUJBQWlCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL0FkZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1BlcnNvbjJPdXRsaW5lZC5qcyIsIndlYnBhY2s6Ly9nbG9iYWxnYXRlYXBpLy4vbm9kZV9tb2R1bGVzL0BtdWkvaWNvbnMtbWF0ZXJpYWwvZXNtL1BlcnNvbk9mZlJvdW5kZWQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL3NyYy9qcy9BZG1pblZpZXcxL0VzdGltYXRlVmlld0FkbWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ6XCJcbn0pLCAnQWRkJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTguMzkgMTQuNTZDMTYuNzEgMTMuNyAxNC41MyAxMyAxMiAxM3MtNC43MS43LTYuMzkgMS41NkM0LjYxIDE1LjA3IDQgMTYuMSA0IDE3LjIyVjIwaDE2di0yLjc4YzAtMS4xMi0uNjEtMi4xNS0xLjYxLTIuNjZNMTggMThINnYtLjc4YzAtLjM4LjItLjcyLjUyLS44OEM3LjcxIDE1LjczIDkuNjMgMTUgMTIgMTVjMi4zNyAwIDQuMjkuNzMgNS40OCAxLjM0LjMyLjE2LjUyLjUuNTIuODh6bS04LjIyLTZoNC40NGMxLjIxIDAgMi4xNC0xLjA2IDEuOTgtMi4yNmwtLjMyLTIuNDVDMTUuNTcgNS4zOSAxMy45MiA0IDEyIDRTOC40MyA1LjM5IDguMTIgNy4yOUw3LjggOS43NGMtLjE2IDEuMi43NyAyLjI2IDEuOTggMi4yNm0uMzItNC40MUMxMC4yNiA2LjY3IDExLjA2IDYgMTIgNnMxLjc0LjY3IDEuOSAxLjU5bC4zMiAyLjQxSDkuNzh6XCJcbn0pLCAnUGVyc29uMk91dGxpbmVkJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNOC42NSA1LjgyQzkuMzYgNC43MiAxMC42IDQgMTIgNGMyLjIxIDAgNCAxLjc5IDQgNCAwIDEuNC0uNzIgMi42NC0xLjgyIDMuMzV6TTIwIDE3LjE3Yy0uMDItMS4xLS42My0yLjExLTEuNjEtMi42Mi0uNTQtLjI4LTEuMTMtLjU0LTEuNzctLjc2em0uNDkgMy4zMkwzLjUxIDMuNTFhLjk5NTkuOTk1OSAwIDAgMC0xLjQxIDBjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFsOC4xOCA4LjE4Yy0xLjgyLjIzLTMuNDEuOC00LjcgMS40NkM0LjYgMTUuMDggNCAxNi4xMSA0IDE3LjIyVjIwaDEzLjE3bDEuOSAxLjljLjM5LjM5IDEuMDIuMzkgMS40MSAwIC40LS4zOS40LTEuMDIuMDEtMS40MVwiXG59KSwgJ1BlcnNvbk9mZlJvdW5kZWQnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL3ZpZXcuY3NzJztcclxuaW1wb3J0IFNpZGViYXJEYXNoIGZyb20gJy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaCc7XHJcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvU2VhcmNoJztcclxuaW1wb3J0IE5vdGlmaWNhdGlvbnNOb25lSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnNOb25lJztcclxuaW1wb3J0ICcuL1BhZ2VWaWV3L0NoYXJ0dmlldy5jc3MnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9WaXNpYmlsaXR5JztcclxuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRGVsZXRlJztcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFkZ2UnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0RpdmlkZXInO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgeyBUYWJsZSwgSWNvbkJ1dHRvbiwgc3R5bGVkLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVIZWFkLCBUYWJsZVJvdywgQ2hlY2tib3gsIFRhYmxlQ29udGFpbmVyLCBQYXBlciwgVHlwb2dyYXBoeSwgTW9kYWwsIEJveCwgR3JpZCwgRm9ybUNvbnRyb2wsIElucHV0TGFiZWwsIFNlbGVjdCwgTWVudUl0ZW0sIEJhY2tkcm9wLCBBdXRvY29tcGxldGUsIFRleHRGaWVsZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBBZGQsIENsb3NlLCBNYWlsT3V0bGluZSwgUGVyc29uMk91dGxpbmVkLCBQZXJzb25PZmZSb3VuZGVkIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vaW1nL25vLWRhdGEucG5nJztcclxuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRUb29sYmFyIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuXHJcblxyXG5jb25zdCBEZWxldGVUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgRWRpdFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gRXN0aW1hdGVWaWV3QWRtaW4oKSB7XHJcbiAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q3VycmVudFVzZXIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZXNVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpO1xyXG4gICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBpZiAoc3RvcmVzVXNlcklkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lbXBsb3llZXVzZXIvJHtzdG9yZXNVc2VySWR9YClcclxuICAgICAgICAgIGNvbnN0IE5hbWUgPSByZXMuZGF0YS5kYXRhLmVtcGxveWVlTmFtZTtcclxuICAgICAgICAgIGNvbnN0IFJvbGUgPSByZXMuZGF0YS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKHsgdXNlck5hbWU6IE5hbWUsIHJvbGU6IFJvbGUsIGlkOiByZXMuZGF0YS5kYXRhLl9pZCB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuYXZpZ2F0ZSgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFVzZXIoKVxyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICBkaXNwYXRjaChsb2dPdXQoKSk7XHJcbiAgICBuYXZpZ2F0ZSgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFtncmFudEFjY2Vzcywgc2V0R3JhbnRBY2Nlc3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaE51bWJlciA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9ncmFudEFjY2Vzc2ApO1xyXG4gICAgICAgIHJlcy5kYXRhPy5kYXRhPy5maWx0ZXIoKHJvdykgPT4gcm93LnVzZXJJRCA9PT0gdXNlci5kYXRhLmlkKVxyXG4gICAgICAgICAgLm1hcCgocm93KSA9PiBzZXRHcmFudEFjY2Vzcyhyb3cubW9kdWxlcykpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoTnVtYmVyKClcclxuICB9LCBbdXNlcl0pXHJcblxyXG4gIGNvbnN0IGVzdGltYXRpb25JbmZvQyA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJFc3RpbWF0ZVwiICYmIHJvdy5hY2Nlc3MuY3JlYXRlTSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgZXN0aW1hdGlvbkluZm9WID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkVzdGltYXRlXCIgJiYgcm93LmFjY2Vzcy52aWV3TSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgZXN0aW1hdGlvbkluZm9VID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkVzdGltYXRlXCIgJiYgcm93LmFjY2Vzcy5lZGl0TSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgZXN0aW1hdGlvbkluZm9EID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIkVzdGltYXRlXCIgJiYgcm93LmFjY2Vzcy5kZWxldGVNID09PSB0cnVlKTtcclxuXHJcblxyXG4gIGNvbnN0IFtlc3RpbWF0ZSwgc2V0RXN0aW1hdGVdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2hpZGRlblJvdywgc2V0SGlkZGVuUm93XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbaGlkZGVuLCBzZXRIaWRkZW5dID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGxpbWl0ID0gMTAwO1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZWJvdW5jZWRTZWFyY2hUZXJtLCBzZXREZWJvdW5jZWRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmaWx0ZXJGaWVsZCwgc2V0RmlsdGVyRmllbGRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ZpbHRlclZhbHVlLCBzZXRGaWx0ZXJWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdG90YWxQYWdlLCBTZXRUb3RhbFBhZ2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUm93cywgc2V0U2VsZWN0ZWRSb3dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmVhc29uLCBzZXRSZWFzb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBmZXRjaEl0ZW1zID0gYXN5bmMgKHBhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZXN0aW1hdGlvbi1JbmZvcm1hdGlvbj9wYWdlPSR7cGFnZSArIDF9JmxpbWl0PSR7bGltaXR9JnNlYXJjaD0ke2VuY29kZVVSSUNvbXBvbmVudChzZWFyY2hUZXJtLnRyaW0oKSl9JmZpbHRlckZpZWxkPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZpbHRlckZpZWxkLnRyaW0oKSl9JmZpbHRlclZhbHVlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZpbHRlclZhbHVlLnRyaW0oKSl9YCk7XHJcbiAgICAgIGNvbnN0IGZvcm1hdERhdGUgPSByZXMuZGF0YS5pdGVtSS5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICBpZDogaXRlbS5faWQsXHJcbiAgICAgICAgZGF0ZUZpZWxkOiBpdGVtLmVzdGltYXRlRGF0ZSAhPT0gbnVsbCA/IGRheWpzKGl0ZW0uZXN0aW1hdGVEYXRlKS5mb3JtYXQoJ0REL01NL1lZWVknKSA6ICcnLFxyXG4gICAgICAgIGR1ZURhdGVGaWVsZDogZGF5anMoaXRlbS5lc3RpbWF0ZUR1ZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIHNldEVzdGltYXRlKGZvcm1hdERhdGUpO1xyXG4gICAgICBTZXRUb3RhbFBhZ2UocmVzLmRhdGEudG90YWxQYWdlcyk7XHJcbiAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICBzZXRMb2FkaW5nRGF0YShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hJdGVtcyhwYWdlLCBkZWJvdW5jZWRTZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpO1xyXG4gIH0sIFtwYWdlLCBkZWJvdW5jZWRTZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IChldmVudCwgbmV3UGFnZSkgPT4ge1xyXG4gICAgc2V0UGFnZShuZXdQYWdlIC0gMSk7XHJcbiAgfTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xvYWRpbmdPcGVuTW9kYWwsIHNldExvYWRpbmdPcGVuTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbERlbGV0ZU9wZW5Mb2FkaW5nLCBzZXRNb2RhbERlbGV0ZU9wZW5Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB7LyoqIExvYWRpbmcgVXBkYXRlIFZpZXcgU3RhcnQgKi8gfVxyXG4gIGNvbnN0IGhhbmRsZU9wZW5Mb2FkaW5nID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBoYW5kbGVDbG9zZVVwZGF0ZSgpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZUxvYWRpbmcgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2FkaW5nT3Blbk1vZGFsKGZhbHNlKTtcclxuICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgZmV0Y2hJdGVtcyhwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpO1xyXG4gIH1cclxuICB7LyoqIExvYWRpbmcgVXBkYXRlIFZpZXcgRW5kICovIH1cclxuXHJcbiAgey8qKiBMb2FkaW5nIERlbGV0ZSBWaWV3IFN0YXJ0ICovIH1cclxuICBjb25zdCBoYW5kbGVEZWxldGVPcGVuTG9hZGluZyA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsRGVsZXRlT3BlbkxvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgaGFuZGxlQ2xvc2UoKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUNsb3NlTG9hZGluZyA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsRGVsZXRlT3BlbkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICBmZXRjaEl0ZW1zKHBhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuT2ZmbGluZSA9ICgpID0+IHtcclxuICAgIHNldExvYWRpbmdPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVFcnJvciA9ICgpID0+IHtcclxuICAgIHNldEVycm9yT3Blbk1vZGFsKHRydWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDUwMClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uT2ZmbGluZSA9IGFzeW5jIChSZWZlcmVuY2VJbmZvLCBSZWZlcmVuY2VJbmZvTnVtYmVyLCBSZWZlcmVuY2VJbmZvQ3VzdG9tZXIpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogUmVmZXJlbmNlSW5mbyxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIENyZWF0ZWQgJyxcclxuICAgICAgcmVhc29uOiAnUVVPLScgKyBTdHJpbmcoUmVmZXJlbmNlSW5mb051bWJlcikucGFkU3RhcnQoNiwgJzAnKSArICcgRm9yICcgKyBSZWZlcmVuY2VJbmZvQ3VzdG9tZXIsXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBzeW5jT2ZmID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgZmV0Y2hEYXRhKClcclxuICB9XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YUhpZGRlbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9oaWRkZW5gKVxyXG4gICAgICAgIHNldEhpZGRlblJvdyhyZXMuZGF0YS5kYXRhLm1hcCgocm93KSA9PiByb3cuaWRSb3cpKVxyXG4gICAgICAgIHNldEhpZGRlbihyZXMuZGF0YS5kYXRhKVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGFIaWRkZW4oKVxyXG4gIH0sIFtdKVxyXG4gIGNvbnN0IFtvcGVuUmVhc29uRGVsZXRlLCBzZXRPcGVuUmVhc29uRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtEZWxldGVJZCwgc2V0RGVsZXRlSWRdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICAgIHNldERlbGV0ZUlkKGlkKVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IFtvcGVuMSwgc2V0T3BlbjFdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1cGRhdGVJZCwgc2V0VXBkYXRlSWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuVXBkYXRlID0gKGlkKSA9PiB7XHJcbiAgICBzZXRPcGVuMSh0cnVlKTtcclxuICAgIHNldFVwZGF0ZUlkKGlkKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbjEoZmFsc2UpO1xyXG4gICAgc2V0VXBkYXRlSWQobnVsbCk7XHJcbiAgfTtcclxuICB7LyoqIGRlbGV0ZSBtdWx0aXBsZSAmJiBhbGwgbW9kYWwgc3RhcnQgKi8gfVxyXG4gIGNvbnN0IFtvcGVuRGVsZXRlTXVsdGlwbGUsIHNldE9wZW5EZWxldGVNdWx0aXBsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5NdWx0aXBsZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5EZWxldGVNdWx0aXBsZSh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTXVsdGlwbGUgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuRGVsZXRlTXVsdGlwbGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgW29wZW5EZWxldGVBbGwsIHNldE9wZW5EZWxldGVBbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPcGVuQWxsID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRlbGV0ZUFsbCh0cnVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlQWxsID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRlbGV0ZUFsbChmYWxzZSk7XHJcbiAgICBzZXRTZWxlY3RlZFJvd3MoW10pXHJcbiAgfTtcclxuICB7LyoqIGRlbGV0ZSBtdWx0aXBsZSAmJiBhbGwgbW9kYWwgZW5kICovIH1cclxuXHJcbiAgey8qKiBMb2FkaW5nIERlbGV0ZSBWaWV3IEVuZCAqLyB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtFTkRQT0lOVF9VUkx9L2RlbGV0ZS1lc3RpbWF0aW9uLyR7RGVsZXRlSWR9YCk7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgc2V0RXN0aW1hdGUocHJldkVzdGltYXRlID0+IHByZXZFc3RpbWF0ZS5maWx0ZXIoaXRlbSA9PiBpdGVtLl9pZCAhPT0gRGVsZXRlSWQpKTtcclxuICAgICAgICAgIGhhbmRsZURlbGV0ZU9wZW5Mb2FkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGFsZXJ0KCdBbiBlcnJvciBhcyBPY2N1cicpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIGNvbnN0IFtFc3RpbWF0ZURlbGV0ZWQsIHNldEVzdGltYXRlRGVsZXRlZF0gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZGVsZXRlUHJvbWlzZXMgPSBzZWxlY3RlZFJvd3MubWFwKGFzeW5jIChpZFRvRGVsZXRlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dldC1lc3RpbWF0aW9uLyR7aWRUb0RlbGV0ZX1gKVxyXG4gICAgICB9KVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByb21pc2UuYWxsKGRlbGV0ZVByb21pc2VzKTtcclxuICAgICAgICBzZXRFc3RpbWF0ZURlbGV0ZWQocmVzLm1hcCgocm93KSA9PiAnUS0nICsgcm93LmRhdGEuZGF0YS5lc3RpbWF0ZU51bWJlcikpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRnVuY3Rpb24oKVxyXG4gIH0sIFtzZWxlY3RlZFJvd3NdKVxyXG4gIGNvbnN0IHJlbGF0ZWQgPSBFc3RpbWF0ZURlbGV0ZWQubWFwKHJvdyA9PiByb3cpXHJcbiAgY29uc3QgaW5mbyA9IHJlbGF0ZWQudG9TdHJpbmcoKVxyXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgIGlkSW5mbzogJycsXHJcbiAgICAgIHBlcnNvbjogdXNlci5kYXRhLnVzZXJOYW1lICsgJyBEZWxldGVkICcgKyBpbmZvLFxyXG4gICAgICByZWFzb24sXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtbm90aWZpY2F0aW9uYCwgZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG4gIH1cclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZU1hbnkgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgY29uc3QgZGVsZXRlUHJvbWlzZXMgPSBzZWxlY3RlZFJvd3MubWFwKGFzeW5jIChpZFRvRGVsZXRlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtFTkRQT0lOVF9VUkx9L2RlbGV0ZS1lc3RpbWF0aW9uLyR7aWRUb0RlbGV0ZX1gKVxyXG4gICAgICB9KVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFByb21pc2UuYWxsKGRlbGV0ZVByb21pc2VzKTtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICBzZXRFc3RpbWF0ZShwcmV2RXN0aW1hdGUgPT4gcHJldkVzdGltYXRlLmZpbHRlcihpdGVtID0+ICFzZWxlY3RlZFJvd3MuaW5jbHVkZXMoaXRlbS5faWQpKSk7XHJcbiAgICAgICAgICBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb24oKVxyXG4gICAgICAgICAgc2V0U2VsZWN0ZWRSb3dzKFtdKVxyXG4gICAgICAgICAgaGFuZGxlRGVsZXRlT3BlbkxvYWRpbmcoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBpdGVtczonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB7LyoqIERFbGV0ZSBFbmQgKi8gfVxyXG4gIGNvbnN0IFtlc3RpbWF0ZU4sIHNldEVzdGltYXRlTl0gPSB1c2VTdGF0ZSgwKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXBkYXRlSWQgIT09IG51bGwpIHtcclxuICAgICAgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVzdGltYXRpb24vJHt1cGRhdGVJZH1gKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAvLyBnZXQgdGhlIHJlc3BvbnNlIGRhdGEgaGVyZVxyXG4gICAgICAgICAgc2V0U3RhdHVzKHJlcy5kYXRhLmRhdGEuc3RhdHVzKTtcclxuICAgICAgICAgIHNldEVzdGltYXRlTihyZXMuZGF0YS5kYXRhLmVzdGltYXRlTnVtYmVyKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAvLyBIYW5kbGUgZXJyb3JzXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbdXBkYXRlSWRdKTtcclxuICBjb25zdCBoYW5kbGVDcmVhdGVDb21tZW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiB1cGRhdGVJZCxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUsXHJcbiAgICAgIHJlYXNvbjogc3RhdHVzICsgJyBRLScgKyBlc3RpbWF0ZU4sXHJcbiAgICAgIGRhdGVOb3RpZmljYXRpb246IG5ldyBEYXRlKClcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBheGlvcy5wb3N0KGAke0VORFBPSU5UX1VSTH0vY3JlYXRlLW5vdGlmaWNhdGlvbi9gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdFVwZGF0ZVN0YXR1cyA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBzdGF0dXNcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wdXQoYCR7RU5EUE9JTlRfVVJMfS91cGRhdGUtZXN0aW1hdGlvbi8ke3VwZGF0ZUlkfWAsIGRhdGEpXHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICBzZXRFc3RpbWF0ZShwcmV2RXN0aW1hdGUgPT4gcHJldkVzdGltYXRlLm1hcChpdGVtID0+IGl0ZW0uX2lkID09PSB1cGRhdGVJZCA/IHsgLi4uaXRlbSwgc3RhdHVzOiBzdGF0dXMgfSA6IGl0ZW0pKTtcclxuICAgICAgICBoYW5kbGVDcmVhdGVDb21tZW50KCk7XHJcbiAgICAgICAgaGFuZGxlT3BlbkxvYWRpbmcoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbWFraW5nIFBPU1QgcmVxdWVzdDonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHsvKiogaGlkZSBTdGFydCAqLyB9XHJcbiAgY29uc3QgaGFuZGxlSGlkZVJvdyA9IGFzeW5jIChpZCkgPT4ge1xyXG5cclxuICAgIGlmICh1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTycpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoaGlkZGVuUm93LmluY2x1ZGVzKGlkKSkge1xyXG4gICAgICAgICAgc2V0SGlkZGVuUm93KGhpZGRlblJvdy5maWx0ZXIoKHJvdykgPT4gcm93ICE9PSBpZCkpO1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gaGlkZGVuLmZpbHRlcigocm93KSA9PiByb3cuaWRSb3cgPT09IGlkKVxyXG4gICAgICAgICAgICAubWFwKChyb3cpID0+IHJvdy5faWQpXHJcbiAgICAgICAgICBjb25zdCBoaWRkZW5JZCA9IHJlc3VsdC50b1N0cmluZygpXHJcblxyXG4gICAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLWhpZGRlbi8ke2hpZGRlbklkfWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRIaWRkZW5Sb3coWy4uLmhpZGRlblJvdywgaWRdKTtcclxuICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtaGlkZGVuYCwge1xyXG4gICAgICAgICAgICBpZFJvdzogaWQsIGhpZGRlbkJ5Q0VPOiB0cnVlXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgcm93UmVuZGVyZXIgPSAocGFyYW1zKSA9PiB7XHJcbiAgICBpZiAoaGlkZGVuUm93LmluY2x1ZGVzKHBhcmFtcy5yb3cuX2lkICYmICF1c2VyLmRhdGEucm9sZSA9PT0gJ0NFTycpKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gPGRpdj57cGFyYW1zLnJvd1twYXJhbXMuZmllbGRdfTwvZGl2PlxyXG4gIH1cclxuICBjb25zdCBbZmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXJlZFJvd3NdID0gdXNlU3RhdGUoW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IEVzdCA9IGVzdGltYXRlLmZpbHRlcihyb3cgPT4gIWhpZGRlblJvdy5pbmNsdWRlcyhyb3cuX2lkKSlcclxuICAgIHNldEZpbHRlcmVkUm93cyhFc3QpXHJcbiAgfSwgW2VzdGltYXRlXSlcclxuICB7LyoqIGhpZGUgRW5kICovIH1cclxuICBjb25zdCBbc2VhcmNoRXN0aW1hdGUsIHNldFNlYXJjaEVzdGltYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1F1aWNrRmlsdGVyRXN0aW1hdGUnKVxyXG4gICAgaWYgKHN0b3JlZFZhbHVlKSB7XHJcbiAgICAgIHNldFNlYXJjaEVzdGltYXRlKHN0b3JlZFZhbHVlKVxyXG4gICAgfVxyXG5cclxuICB9KVxyXG4gIGNvbnN0IFtmaWx0ZXJNb2RlbCwgc2V0RmlsdGVyTW9kZWxdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgaXRlbXM6IFtdLFxyXG4gICAgcXVpY2tGaWx0ZXJFeGNsdWRlSGlkZGVuQ29sdW1uczogdHJ1ZSxcclxuICAgIHF1aWNrRmlsdGVyVmFsdWVzOiBbXSxcclxuICB9KTtcclxuICBjb25zdCBbY29sdW1uVmlzaWJpbGl0eU1vZGVsLCBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWxdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IGhhbmRlbEhpZGRlbkNvbHVtbiA9IChuZXdIaWRkZW4pID0+IHtcclxuICAgIHNldENvbHVtblZpc2liaWxpdHlNb2RlbChuZXdIaWRkZW4pXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnSGlkZGVuQ29sdW1uc0VzdGltYXRlJywgSlNPTi5zdHJpbmdpZnkobmV3SGlkZGVuKSlcclxuICB9XHJcbiAgICBjb25zdCBoYW5kbGVGaWx0ZXIgPSAobmV3TW9kZWwpID0+IHtcclxuICAgIHNldEZpbHRlck1vZGVsKG5ld01vZGVsKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdRdWlja0ZpbHRlckVzdGltYXRpb25Uc3QnLCBKU09OLnN0cmluZ2lmeShuZXdNb2RlbCkpO1xyXG4gICAgaWYgKG5ld01vZGVsLnF1aWNrRmlsdGVyVmFsdWVzICYmIG5ld01vZGVsLnF1aWNrRmlsdGVyVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2V0U2VhcmNoVGVybShuZXdNb2RlbC5xdWlja0ZpbHRlclZhbHVlcy5qb2luKCcgJykpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0U2VhcmNoVGVybSgnJyk7XHJcbiAgICB9XHJcbiAgICBpZiAobmV3TW9kZWwuaXRlbXMgJiYgbmV3TW9kZWwuaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBzZXRGaWx0ZXJGaWVsZChuZXdNb2RlbC5pdGVtc1swXS5maWVsZCk7XHJcbiAgICAgIHNldEZpbHRlclZhbHVlKG5ld01vZGVsLml0ZW1zWzBdLnZhbHVlIHx8ICcnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldEZpbHRlckZpZWxkKCcnKTtcclxuICAgICAgc2V0RmlsdGVyVmFsdWUoJycpO1xyXG4gICAgfVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVkUXVpY2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdRdWlja0ZpbHRlckVzdGltYXRpb25Uc3QnKSlcclxuICAgIGlmIChzdG9yZWRRdWljaykge1xyXG4gICAgICBzZXRGaWx0ZXJNb2RlbChzdG9yZWRRdWljaylcclxuICAgIH1cclxuICAgIGNvbnN0IHN0b3JlZENvbHVtbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdIaWRkZW5Db2x1bW5zRXN0aW1hdGUnKSlcclxuICAgIGlmIChzdG9yZWRDb2x1bW5zKSB7XHJcbiAgICAgIHNldENvbHVtblZpc2liaWxpdHlNb2RlbChzdG9yZWRDb2x1bW5zKVxyXG4gICAgfVxyXG5cclxuICB9LCBbc2VhcmNoRXN0aW1hdGVdKVxyXG4gIGNvbnN0IFtzaWRlQmFyLCBzZXRTaWRlQmFyXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHRvZ2dsZURyYXdlciA9ICgpID0+IHtcclxuICAgIHNldFNpZGVCYXIoIXNpZGVCYXIpO1xyXG4gIH07XHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHsgZmllbGQ6ICdlc3RpbWF0ZURhdGUnLCBoZWFkZXJOYW1lOiAnRGF0ZScsIG1pbldpZHRoOiAxMDAsIGZsZXg6IDEsIHR5cGU6ICdkYXRlJywgdmFsdWVHZXR0ZXI6IChwYXJhbXMpID0+IG5ldyBEYXRlKHBhcmFtcy5yb3cuZXN0aW1hdGVEYXRlKSwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gZGF5anMocGFyYW1zLnJvdy5lc3RpbWF0ZURhdGUpLmZvcm1hdCgnREQvTU0vWVlZWScpIH0sXHJcbiAgICB7IGZpZWxkOiAnY3VzdG9tZXInLCBoZWFkZXJOYW1lOiAnQ3VzdG9tZXIgTmFtZScsIG1pbldpZHRoOiAyMDAsIGZsZXg6IDIsIHZhbHVlR2V0dGVyOiAocGFyYW1zKSA9PiBwYXJhbXMucm93LmN1c3RvbWVyTmFtZS5jdXN0b21lck5hbWUudG9VcHBlckNhc2UoKSB9LFxyXG4gICAgeyBmaWVsZDogJ2VzdGltYXRlTnVtYmVyJywgaGVhZGVyTmFtZTogJ1F1b3RhdGlvbiMnLCBtaW5XaWR0aDogMTAwLCBmbGV4OiAxLCB2YWx1ZUZvcm1hdHRlcjogKHBhcmFtcykgPT4gJ1FVTy0nICsgU3RyaW5nKHBhcmFtcz8udmFsdWUgfHwgJycpLnBhZFN0YXJ0KDYsICcwJykgfSxcclxuICAgIHsgZmllbGQ6ICdlc3RpbWF0ZVN1YmplY3QnLCBoZWFkZXJOYW1lOiAnU3ViamVjdCcsIG1pbldpZHRoOiAxNTAsIGZsZXg6IDEuNSB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ3N0YXR1cycsIGhlYWRlck5hbWU6ICdTdGF0dXMnLCBtaW5XaWR0aDogMTEwLCBmbGV4OiAxLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgIGNvbG9yPXtcclxuICAgICAgICAgICAgcGFyYW1zLnJvdy5zdGF0dXMgPT09IFwiRHJhZnRcIlxyXG4gICAgICAgICAgICAgID8gXCJncmF5XCIgOiBwYXJhbXMucm93LnN0YXR1cyA9PT0gXCJTZW50XCJcclxuICAgICAgICAgICAgICAgID8gXCJibHVlXCIgOlxyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnJvdy5zdGF0dXMgPT09IFwiRGVjbGluZVwiXHJcbiAgICAgICAgICAgICAgICAgID8gXCJyZWRcIiA6XHJcbiAgICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzID09PSBcIkFwcHJvdmVkXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiIzMzOWJhNVwiIDpcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMucm93LnN0YXR1cyA9PT0gXCJJbnZvaWNlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiIzZhMWI5YVwiIDogXCJibGFja1wiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3BhcmFtcy5yb3cuc3RhdHVzfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHsgZmllbGQ6ICdzdWJUb3RhbCcsIGhlYWRlck5hbWU6ICdBbW91bnQnLCBtaW5XaWR0aDogOTAsIGZsZXg6IDEsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IGAkJHtwYXJhbXMucm93LnRvdGFsSW52b2ljZT8udG9GaXhlZCgyKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpfWAgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICd2aWV3JywgaGVhZGVyTmFtZTogJ1ZpZXcnLCB3aWR0aDogNjAsIG1pbldpZHRoOiA2MCwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIlZpZXdcIj5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17ZXN0aW1hdGlvbkluZm9WLmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL0VzdGltYXRlVmlld0FkbWluQWxsLyR7cGFyYW1zLnJvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eUljb24gc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnZWRpdCcsIGhlYWRlck5hbWU6ICdFZGl0Jywgd2lkdGg6IDYwLCBtaW5XaWR0aDogNjAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8RWRpdFRvb2x0aXAgdGl0bGU9XCJFZGl0XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3BlblVwZGF0ZShwYXJhbXMucm93Ll9pZCl9IGRpc2FibGVkPXtwYXJhbXMucm93LnN0YXR1cyAhPT0gJ0RyYWZ0JyAmJiBlc3RpbWF0aW9uSW5mb1UubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgICAgPEVkaXRJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JheScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRWRpdFRvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnRGVsZXRlJywgaGVhZGVyTmFtZTogJ0RlbGV0ZScsIHdpZHRoOiA2MCwgbWluV2lkdGg6IDYwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPERlbGV0ZVRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIj5cclxuICAgICAgICAgIDxzcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlT3BlbihwYXJhbXMucm93Ll9pZCl9IGRpc2FibGVkPXtlc3RpbWF0aW9uSW5mb0QubGVuZ3RoID09PSAwICYmIHVzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30+XHJcbiAgICAgICAgICAgIDxEZWxldGVJY29uIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCBjb2xvcjogJ3JlZCcgfX0gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L0RlbGV0ZVRvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sIHtcclxuICAgICAgZmllbGQ6ICdoaWRlJyxcclxuICAgICAgaGVhZGVyTmFtZTogJ0FjdGlvbicsXHJcbiAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgd2lkdGg6IDYwLFxyXG4gICAgICBtaW5XaWR0aDogNjAsXHJcbiAgICAgIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IHtcclxuICAgICAgICBpZiAodXNlci5kYXRhLnJvbGUgPT09ICdDRU8nKSB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhpZGRlblJvdy5pbmNsdWRlcyhwYXJhbXMucm93Ll9pZCkgP1xyXG4gICAgICAgICAgICAgICAgICAoPFZpZXdUb29sdGlwIHRpdGxlPVwiVW5IaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVIaWRlUm93KHBhcmFtcy5yb3cuX2lkKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGVyc29uT2ZmUm91bmRlZCBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPilcclxuICAgICAgICAgICAgICAgICAgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiSGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUhpZGVSb3cocGFyYW1zLnJvdy5faWQpfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbjJPdXRsaW5lZCBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nSG9tZWVtcGxveWVlJz5cclxuICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XHJcbiAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImFic29sdXRlXCIgb3Blbj17c2lkZUJhcn0gc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnIzMwMzY4YScgfX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIHByOiAnMjRweCcsIC8vIGtlZXAgcmlnaHQgcGFkZGluZyB3aGVuIGRyYXdlciBjbG9zZWRcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9XHJcbiAgICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnMzZweCcsXHJcbiAgICAgICAgICAgICAgICAuLi4oc2lkZUJhciAmJiB7IGRpc3BsYXk6ICdub25lJyB9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoMVwiXHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIG5vV3JhcFxyXG4gICAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBRdW90YXRpb25cclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Tm90aWZpY2F0aW9uVklld0luZm8gLz5cclxuICAgICAgICAgICAgPE1lc3NhZ2VBZG1pblZpZXcgbmFtZT17dXNlci5kYXRhLnVzZXJOYW1lfSByb2xlPXt1c2VyLmRhdGEucm9sZX0gLz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5cclxuICAgICAgICAgICAgICA8TG9nb3V0IHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8RHJhd2VyIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIiBvcGVuPXtzaWRlQmFyfSBvbk1vdXNlRW50ZXI9eygpID0+IHNldFNpZGVCYXIodHJ1ZSl9IG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U2lkZUJhcihmYWxzZSl9PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAgICAgcHg6IFsxXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlRHJhd2VyfT5cclxuICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8TGlzdCBzeD17eyBoZWlnaHQ6ICc3MDBweCcgfX0+XHJcbiAgICAgICAgICAgIDxTaWRlYmFyRGFzaCAvPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGNvbXBvbmVudD1cIm1haW5cIlxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAodGhlbWUpID0+XHJcbiAgICAgICAgICAgICAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnbGlnaHQnXHJcbiAgICAgICAgICAgICAgICA/IHRoZW1lLnBhbGV0dGUuZ3JleVsxMDBdXHJcbiAgICAgICAgICAgICAgICA6IHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLFxyXG4gICAgICAgICAgICBmbGV4R3JvdzogMSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VG9vbGJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm5vbmVcIiBzeD17eyBtdDogMSB9fSA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsb2FkaW5nRGF0YSA/IDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgdG9wOiAnMTIwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCBtYXJnaW46ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e2VzdGltYXRpb25JbmZvQy5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy9Fc3RpbWF0ZUludm9pY2VGb3JtJ30gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyQWRkaW5nJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHtlc3RpbWF0ZS5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiA2MDAsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7ZXN0aW1hdGUubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAnbGVmdCcsIG1hcmdpbjogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPiAxICYmIHNlbGVjdGVkUm93cy5sZW5ndGggPCBlc3RpbWF0ZS5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRpc2FibGVkPXt1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9IG9uQ2xpY2s9e2hhbmRsZU9wZW5BbGx9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJz5EZWxldGUgbXVsdGlwbGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPT09IGVzdGltYXRlLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVPcGVuQWxsfSBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+RGVsZXRlIGFsbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uTW9kZT1cInNlcnZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q291bnQ9e3RvdGFsUGFnZSAqIGxpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtsaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtlc3RpbWF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90cz17eyB0b29sYmFyOiBHcmlkVG9vbGJhciB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UXVpY2tGaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVG9vbGJhckJ1dHRvbjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uTW9kZWw9e3NlbGVjdGVkUm93c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUm93U2VsZWN0aW9uTW9kZWxDaGFuZ2U9eyhuZXdTZWxlY3Rpb24pID0+IHNldFNlbGVjdGVkUm93cyhuZXdTZWxlY3Rpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93UmVuZGVyZXI9e3Jvd1JlbmRlcmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVEZW5zaXR5U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlck1vZGVsPXtmaWx0ZXJNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmlsdGVyTW9kZWxDaGFuZ2U9eyhuZXdNb2RlbCkgPT4gaGFuZGxlRmlsdGVyKG5ld01vZGVsKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZpc2liaWxpdHlNb2RlbD17Y29sdW1uVmlzaWJpbGl0eU1vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db2x1bW5WaXNpYmlsaXR5TW9kZWxDaGFuZ2U9e2hhbmRlbEhpZGRlbkNvbHVtbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7IHdpZHRoOiAnMTAwJScsIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJywgcGFkZGluZzogJzEwcHgnLCAnJiAuTXVpRGF0YUdyaWQtZm9vdGVyQ29udGFpbmVyJzogeyBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnIH0sICcmIC5NdWlUYWJsZVBhZ2luYXRpb24tcm9vdCc6IHsgZmxleDogJ25vbmUnIH0sICcmIC5NdWlUYWJsZVBhZ2luYXRpb24tc3BhY2VyJzogeyBkaXNwbGF5OiAnbm9uZScgfSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+KSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uTW9kZT1cInNlcnZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q291bnQ9e3RvdGFsUGFnZSAqIGxpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtsaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtmaWx0ZXJlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdHM9e3sgdG9vbGJhcjogR3JpZFRvb2xiYXIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1F1aWNrRmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVRvb2xiYXJCdXR0b246IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUm93U2VsZWN0aW9uTW9kZWxDaGFuZ2U9eyhuZXdTZWxlY3Rpb24pID0+IHNldFNlbGVjdGVkUm93cyhuZXdTZWxlY3Rpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93UmVuZGVyZXI9e3Jvd1JlbmRlcmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbk1vZGVsPXtzZWxlY3RlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRGVuc2l0eVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJNb2RlbD17ZmlsdGVyTW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZpbHRlck1vZGVsQ2hhbmdlPXsobmV3TW9kZWwpID0+IGhhbmRsZUZpbHRlcihuZXdNb2RlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WaXNpYmlsaXR5TW9kZWw9e2NvbHVtblZpc2liaWxpdHlNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29sdW1uVmlzaWJpbGl0eU1vZGVsQ2hhbmdlPXtoYW5kZWxIaWRkZW5Db2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHBhZGRpbmc6ICcxMHB4JywgJyYgLk11aURhdGFHcmlkLWZvb3RlckNvbnRhaW5lcic6IHsganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyB9LCAnJiAuTXVpVGFibGVQYWdpbmF0aW9uLXJvb3QnOiB7IGZsZXg6ICdub25lJyB9LCAnJiAuTXVpVGFibGVQYWdpbmF0aW9uLXNwYWNlcic6IHsgZGlzcGxheTogJ25vbmUnIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICApIDogPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17SW1hZ2V9IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW5MZWZ0OiAnMTklJywgcGFkZGluZzogJzI1cHgnLCBoZWlnaHQ6ICc0MCUnLCB0b3A6ICc0MHB4Jywgd2lkdGg6ICc1NSUnLCBib3hTaGFkb3c6ICcwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKScgfX0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHN0eWxlPXt7IGFsaWduSXRlbXM6ICdjZW50ZXInLCBwYWRkaW5nOiAnMTVweCcgfX0gc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgRG8geW91IFdhbnQgdG8gZGVsZXRlP1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJyBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19PkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlRGVsZXRlfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuMX1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVVwZGF0ZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJDbG9zZVwiIHBsYWNlbWVudD0nbGVmdCc+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlVXBkYXRlfSBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdyaWdodCcgfX0+XHJcbiAgICAgICAgICAgICAgPENsb3NlIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICBVcGRhdGUgUXVvdGF0aW9uIFN0YXR1c1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdFVwZGF0ZVN0YXR1c30+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzdHlsZT17eyBhbGlnbkl0ZW1zOiAnY2VudGVyJywgcGFkZGluZzogJzE1cHgnIH19IHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cInN0YXR1c1wiPlN0YXR1czwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzdGF0dXN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0dXMoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwic3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJEcmFmdFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJEcmFmdFwiPkRyYWZ0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJTZW50XCI+U2VudDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiRGVjbGluZVwiPkRlY2xpbmU8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIkFwcHJvdmVkXCI+QXBwcm92ZWQ8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5VcGRhdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkRlbGV0ZU11bHRpcGxlfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTXVsdGlwbGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxoMj5EbyB5b3Ugd2FudCB0byBEZWxldGUgPzwvaDI+XHJcbiAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZTo8L3NwYW4+IEFsbCBzZWxlY3RlZCByb3dzIHdpbGwgYmUgZGVsZXRlZDwvcD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMicgb25DbGljaz17aGFuZGxlRGVsZXRlTWFueX0+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTXVsdGlwbGV9PlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5EZWxldGVBbGx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VBbGx9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxoMj5EbyB5b3Ugd2FudCB0byBEZWxldGUgPzwvaDI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MubGVuZ3RoID09PSAxICYmIChcclxuICAgICAgICAgICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cInR4dDJcIiBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+Tm90ZTo8L3NwYW4+IFNlbGVjdGVkIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dzLmxlbmd0aCA+IDEgJiYgc2VsZWN0ZWRSb3dzLmxlbmd0aCA8IGVzdGltYXRlLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8cD48c3BhbiBjbGFzc05hbWU9XCJ0eHQyXCIgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19Pk5vdGU6PC9zcGFuPiBBbGwgc2VsZWN0ZWQgcm93cyB3aWxsIGJlIGRlbGV0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MubGVuZ3RoID09PSBlc3RpbWF0ZS5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gQWxsIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJyBvbkNsaWNrPXtoYW5kbGVPcGVuUmVhc29uRGVsZXRlfT5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VBbGx9PlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtsb2FkaW5nT3Blbk1vZGFsfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTG9hZGluZ31cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VMb2FkaW5nfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyJz5cclxuICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e21vZGFsRGVsZXRlT3BlbkxvYWRpbmd9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlRGVsZXRlQ2xvc2VMb2FkaW5nfVxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICAgICAgPGgyPiBEYXRhIHN1Y2Nlc3NmdWxseSBkZWxldGVkPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzYwcHgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEZWxldGVDbG9zZUxvYWRpbmd9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5SZWFzb25EZWxldGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VSZWFzb25EZWxldGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgV2h5IGRvIHlvdSB3YW50IHRvIGRlbGV0ZToge2luZm99P1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZURlbGV0ZU1hbnl9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdyZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWFzb259XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdSZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVhc29uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J1JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFc3RpbWF0ZVZpZXdBZG1pblxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNpZGViYXJEYXNoIiwiU2VhcmNoSWNvbiIsIk5vdGlmaWNhdGlvbnNOb25lSWNvbiIsIlZpc2liaWxpdHlJY29uIiwiRWRpdEljb24iLCJEZWxldGVJY29uIiwiTmF2TGluayIsInVzZU5hdmlnYXRlIiwiVG9vbHRpcCIsInRvb2x0aXBDbGFzc2VzIiwiTXVpQXBwQmFyIiwiVG9vbGJhciIsIkNzc0Jhc2VsaW5lIiwiTXVpRHJhd2VyIiwiTGlzdCIsIkJhZGdlIiwiRGl2aWRlciIsIkNvbnRhaW5lciIsIkxpbmsiLCJNZW51SWNvbiIsIkNoZXZyb25MZWZ0SWNvbiIsIk5vdGlmaWNhdGlvbnNJY29uIiwiVGFibGUiLCJJY29uQnV0dG9uIiwic3R5bGVkIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJDaGVja2JveCIsIlRhYmxlQ29udGFpbmVyIiwiUGFwZXIiLCJUeXBvZ3JhcGh5IiwiTW9kYWwiLCJCb3giLCJHcmlkIiwiRm9ybUNvbnRyb2wiLCJJbnB1dExhYmVsIiwiU2VsZWN0IiwiTWVudUl0ZW0iLCJCYWNrZHJvcCIsIkF1dG9jb21wbGV0ZSIsIlRleHRGaWVsZCIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwiQWRkIiwiQ2xvc2UiLCJNYWlsT3V0bGluZSIsIlBlcnNvbjJPdXRsaW5lZCIsIlBlcnNvbk9mZlJvdW5kZWQiLCJkYXlqcyIsIkxvYWRlciIsIkNoZWNrQ2lyY2xlSWNvbiIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2dvdXQiLCJJbWFnZSIsIkRhdGFHcmlkIiwiR3JpZFRvb2xiYXIiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJEZWxldGVUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJFZGl0VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiVmlld1Rvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNyIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmOCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIkVzdGltYXRlVmlld0FkbWluIiwibmF2aWdhdGUiLCJkaXNwYXRjaCIsInVzZXIiLCJzdG9yZXNVc2VySWQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmV0Y2hVc2VyIiwiX3JlZjkiLCJfYXN5bmNUb0dlbmVyYXRvciIsInJlcyIsImdldCIsIk5hbWUiLCJkYXRhIiwiZW1wbG95ZWVOYW1lIiwiUm9sZSIsInJvbGUiLCJ1c2VyTmFtZSIsImlkIiwiX2lkIiwiZXJyb3IiLCJjb25zb2xlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZ3JhbnRBY2Nlc3MiLCJzZXRHcmFudEFjY2VzcyIsImZldGNoTnVtYmVyIiwiX3JlZjAiLCJfcmVzJGRhdGEiLCJmaWx0ZXIiLCJyb3ciLCJ1c2VySUQiLCJtYXAiLCJtb2R1bGVzIiwiZXN0aW1hdGlvbkluZm9DIiwibW9kdWxlTmFtZSIsImFjY2VzcyIsImNyZWF0ZU0iLCJlc3RpbWF0aW9uSW5mb1YiLCJ2aWV3TSIsImVzdGltYXRpb25JbmZvVSIsImVkaXRNIiwiZXN0aW1hdGlvbkluZm9EIiwiZGVsZXRlTSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZXN0aW1hdGUiLCJzZXRFc3RpbWF0ZSIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwibG9hZGluZ0RhdGEiLCJzZXRMb2FkaW5nRGF0YSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiaGlkZGVuUm93Iiwic2V0SGlkZGVuUm93IiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTAiLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJwYWdlIiwic2V0UGFnZSIsImxpbWl0IiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwiX3VzZVN0YXRlMTMiLCJfdXNlU3RhdGUxNCIsImRlYm91bmNlZFNlYXJjaFRlcm0iLCJzZXREZWJvdW5jZWRTZWFyY2hUZXJtIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsImZpbHRlckZpZWxkIiwic2V0RmlsdGVyRmllbGQiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwiZmlsdGVyVmFsdWUiLCJzZXRGaWx0ZXJWYWx1ZSIsIl91c2VTdGF0ZTE5IiwiX3VzZVN0YXRlMjAiLCJ0b3RhbFBhZ2UiLCJTZXRUb3RhbFBhZ2UiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwic2VsZWN0ZWRSb3dzIiwic2V0U2VsZWN0ZWRSb3dzIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsInJlYXNvbiIsInNldFJlYXNvbiIsImZldGNoSXRlbXMiLCJfcmVmMSIsImVuY29kZVVSSUNvbXBvbmVudCIsInRyaW0iLCJmb3JtYXREYXRlIiwiaXRlbUkiLCJpdGVtIiwiZGF0ZUZpZWxkIiwiZXN0aW1hdGVEYXRlIiwiZm9ybWF0IiwiZHVlRGF0ZUZpZWxkIiwiZXN0aW1hdGVEdWVEYXRlIiwidG90YWxQYWdlcyIsIl94IiwiX3gyIiwiX3gzIiwiX3g0IiwiaGFuZGxlUGFnZUNoYW5nZSIsImV2ZW50IiwibmV3UGFnZSIsIl91c2VTdGF0ZTI1IiwiX3VzZVN0YXRlMjYiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTI3IiwiX3VzZVN0YXRlMjgiLCJFcnJvck9wZW5Nb2RhbCIsInNldEVycm9yT3Blbk1vZGFsIiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlMzEiLCJfdXNlU3RhdGUzMiIsIm1vZGFsRGVsZXRlT3BlbkxvYWRpbmciLCJzZXRNb2RhbERlbGV0ZU9wZW5Mb2FkaW5nIiwiaGFuZGxlT3BlbkxvYWRpbmciLCJoYW5kbGVDbG9zZVVwZGF0ZSIsInNldFRpbWVvdXQiLCJoYW5kbGVDbG9zZUxvYWRpbmciLCJoYW5kbGVEZWxldGVPcGVuTG9hZGluZyIsImhhbmRsZUNsb3NlIiwiaGFuZGxlRGVsZXRlQ2xvc2VMb2FkaW5nIiwiaGFuZGxlT3Blbk9mZmxpbmUiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbk9mZmxpbmUiLCJfcmVmMTAiLCJSZWZlcmVuY2VJbmZvIiwiUmVmZXJlbmNlSW5mb051bWJlciIsIlJlZmVyZW5jZUluZm9DdXN0b21lciIsImlkSW5mbyIsInBlcnNvbiIsIlN0cmluZyIsInBhZFN0YXJ0IiwiZGF0ZU5vdGlmaWNhdGlvbiIsIkRhdGUiLCJwb3N0IiwibG9nIiwiX3g1IiwiX3g2IiwiX3g3Iiwic3luY09mZiIsIl9yZWYxMSIsImZldGNoRGF0YSIsImZldGNoRGF0YUhpZGRlbiIsIl9yZWYxMiIsImlkUm93IiwiX3VzZVN0YXRlMzMiLCJfdXNlU3RhdGUzNCIsIm9wZW5SZWFzb25EZWxldGUiLCJzZXRPcGVuUmVhc29uRGVsZXRlIiwiaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsb3NlUmVhc29uRGVsZXRlIiwiX3VzZVN0YXRlMzUiLCJfdXNlU3RhdGUzNiIsInNldE9wZW4iLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4IiwiRGVsZXRlSWQiLCJzZXREZWxldGVJZCIsImhhbmRsZU9wZW4iLCJfdXNlU3RhdGUzOSIsIl91c2VTdGF0ZTQwIiwib3BlbjEiLCJzZXRPcGVuMSIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJ1cGRhdGVJZCIsInNldFVwZGF0ZUlkIiwiX3VzZVN0YXRlNDMiLCJfdXNlU3RhdGU0NCIsInN0YXR1cyIsInNldFN0YXR1cyIsImhhbmRsZU9wZW5VcGRhdGUiLCJfdXNlU3RhdGU0NSIsIl91c2VTdGF0ZTQ2Iiwib3BlbkRlbGV0ZU11bHRpcGxlIiwic2V0T3BlbkRlbGV0ZU11bHRpcGxlIiwiaGFuZGxlT3Blbk11bHRpcGxlIiwiaGFuZGxlQ2xvc2VNdWx0aXBsZSIsIl91c2VTdGF0ZTQ3IiwiX3VzZVN0YXRlNDgiLCJvcGVuRGVsZXRlQWxsIiwic2V0T3BlbkRlbGV0ZUFsbCIsImhhbmRsZU9wZW5BbGwiLCJoYW5kbGVDbG9zZUFsbCIsImhhbmRsZURlbGV0ZSIsIl9yZWYxMyIsImRlbGV0ZSIsInByZXZFc3RpbWF0ZSIsImFsZXJ0IiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsIkVzdGltYXRlRGVsZXRlZCIsInNldEVzdGltYXRlRGVsZXRlZCIsImZldGNoRnVuY3Rpb24iLCJfcmVmMTQiLCJkZWxldGVQcm9taXNlcyIsIl9yZWYxNSIsImlkVG9EZWxldGUiLCJfeDgiLCJQcm9taXNlIiwiYWxsIiwiZXN0aW1hdGVOdW1iZXIiLCJyZWxhdGVkIiwiaW5mbyIsInRvU3RyaW5nIiwiaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uIiwiX3JlZjE2IiwiaGFuZGxlRGVsZXRlTWFueSIsIl9yZWYxNyIsIl9yZWYxOCIsIl94MCIsImluY2x1ZGVzIiwiX3g5IiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsImVzdGltYXRlTiIsInNldEVzdGltYXRlTiIsInRoZW4iLCJjYXRjaCIsImhhbmRsZUNyZWF0ZUNvbW1lbnQiLCJfcmVmMTkiLCJoYW5kbGVTdWJtaXRVcGRhdGVTdGF0dXMiLCJfcmVmMjAiLCJwdXQiLCJfeDEiLCJoYW5kbGVIaWRlUm93IiwiX3JlZjIxIiwicmVzdWx0IiwiaGlkZGVuSWQiLCJoaWRkZW5CeUNFTyIsIl94MTAiLCJyb3dSZW5kZXJlciIsInBhcmFtcyIsImZpZWxkIiwiX3VzZVN0YXRlNTMiLCJfdXNlU3RhdGU1NCIsImZpbHRlcmVkUm93cyIsInNldEZpbHRlcmVkUm93cyIsIkVzdCIsIl91c2VTdGF0ZTU1IiwiX3VzZVN0YXRlNTYiLCJzZWFyY2hFc3RpbWF0ZSIsInNldFNlYXJjaEVzdGltYXRlIiwic3RvcmVkVmFsdWUiLCJfUmVhY3QkdXNlU3RhdGUiLCJpdGVtcyIsInF1aWNrRmlsdGVyRXhjbHVkZUhpZGRlbkNvbHVtbnMiLCJxdWlja0ZpbHRlclZhbHVlcyIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJmaWx0ZXJNb2RlbCIsInNldEZpbHRlck1vZGVsIiwiX3VzZVN0YXRlNTciLCJfdXNlU3RhdGU1OCIsImNvbHVtblZpc2liaWxpdHlNb2RlbCIsInNldENvbHVtblZpc2liaWxpdHlNb2RlbCIsImhhbmRlbEhpZGRlbkNvbHVtbiIsIm5ld0hpZGRlbiIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlRmlsdGVyIiwibmV3TW9kZWwiLCJsZW5ndGgiLCJqb2luIiwidmFsdWUiLCJzdG9yZWRRdWljayIsInBhcnNlIiwic3RvcmVkQ29sdW1ucyIsIl9SZWFjdCR1c2VTdGF0ZTMiLCJfUmVhY3QkdXNlU3RhdGU0Iiwic2lkZUJhciIsInNldFNpZGVCYXIiLCJ0b2dnbGVEcmF3ZXIiLCJjb2x1bW5zIiwiaGVhZGVyTmFtZSIsIm1pbldpZHRoIiwiZmxleCIsInR5cGUiLCJ2YWx1ZUdldHRlciIsInJlbmRlckNlbGwiLCJjdXN0b21lck5hbWUiLCJ0b1VwcGVyQ2FzZSIsInZhbHVlRm9ybWF0dGVyIiwiX3BhcmFtcyRyb3ckdG90YWxJbnZvIiwidG90YWxJbnZvaWNlIiwidG9GaXhlZCIsInJlcGxhY2UiLCJ0aXRsZSIsImRpc2FibGVkIiwidG8iLCJvbkNsaWNrIiwiY3Vyc29yIiwic29ydGFibGUiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsIm5hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJmbG9hdCIsIm1hcmdpbiIsInBhZ2luYXRpb25Nb2RlIiwicm93Q291bnQiLCJwYWdpbmF0aW9uIiwicGFnZVNpemUiLCJvblBhZ2VDaGFuZ2UiLCJyb3dzIiwic2xvdHMiLCJ0b29sYmFyIiwic2xvdFByb3BzIiwic2hvd1F1aWNrRmlsdGVyIiwicHJpbnRPcHRpb25zIiwiZGlzYWJsZVRvb2xiYXJCdXR0b24iLCJyb3dTZWxlY3Rpb25Nb2RlbCIsIm9uUm93U2VsZWN0aW9uTW9kZWxDaGFuZ2UiLCJuZXdTZWxlY3Rpb24iLCJjaGVja2JveFNlbGVjdGlvbiIsImRpc2FibGVEZW5zaXR5U2VsZWN0b3IiLCJvbkZpbHRlck1vZGVsQ2hhbmdlIiwib25Db2x1bW5WaXNpYmlsaXR5TW9kZWxDaGFuZ2UiLCJwYWRkaW5nIiwic3JjIiwib25DbG9zZSIsImNvbnRhaW5lciIsInhzIiwidGV4dEFsaWduIiwicGxhY2VtZW50Iiwib25TdWJtaXQiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwibGFiZWwiLCJkZWZhdWx0VmFsdWUiLCJnYXAiLCJjbG9zZUFmdGVyVHJhbnNpdGlvbiIsIkJhY2tkcm9wQ29tcG9uZW50IiwiQmFja2Ryb3BQcm9wcyIsInRpbWVvdXQiLCJtdWx0aWxpbmUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=