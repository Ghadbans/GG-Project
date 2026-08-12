"use strict";
exports.id = "src_js_AdminView1_ProjectViewAdmin_js";
exports.ids = ["src_js_AdminView1_ProjectViewAdmin_js"];
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

/***/ "./src/js/AdminView1/ProjectViewAdmin.js"
/*!***********************************************!*\
  !*** ./src/js/AdminView1/ProjectViewAdmin.js ***!
  \***********************************************/
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
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Person2Outlined.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/PersonOffRounded.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../features/auth/authSlice */ "./src/js/features/auth/authSlice.js");
/* harmony import */ var _component_Loader__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../component/Loader */ "./src/js/component/Loader.js");
/* harmony import */ var _mui_icons_material_CheckCircle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/icons-material/CheckCircle */ "./node_modules/@mui/icons-material/CheckCircle.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _img_no_data_png__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../img/no-data.png */ "./src/js/img/no-data.png");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _MessageAdminView__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./MessageAdminView */ "./src/js/AdminView1/MessageAdminView.js");
/* harmony import */ var _NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./NotificationVIewInfo */ "./src/js/AdminView1/NotificationVIewInfo.js");
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
function ProjectViewAdmin() {
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
  var ProjectInfoC = grantAccess.filter(row => row.moduleName === "Project" && row.access.createM === true);
  var ProjectInfoV = grantAccess.filter(row => row.moduleName === "Project" && row.access.viewM === true);
  var ProjectInfoU = grantAccess.filter(row => row.moduleName === "Project" && row.access.editM === true);
  var ProjectInfoD = grantAccess.filter(row => row.moduleName === "Project" && row.access.deleteM === true);
  var handleLogout = () => {
    localStorage.removeItem('user');
    dispatch((0,_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_36__.logOut)());
    navigate('/');
  };
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    project = _useState4[0],
    setProject = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    hiddenRow = _useState6[0],
    setHiddenRow = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    hidden = _useState8[0],
    setHidden = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState0 = _slicedToArray(_useState9, 2),
    page = _useState0[0],
    setPage = _useState0[1];
  var limit = 100;
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState10 = _slicedToArray(_useState1, 2),
    searchTerm = _useState10[0],
    setSearchTerm = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    debouncedSearchTerm = _useState12[0],
    setDebouncedSearchTerm = _useState12[1];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState14 = _slicedToArray(_useState13, 2),
    filterField = _useState14[0],
    setFilterField = _useState14[1];
  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState16 = _slicedToArray(_useState15, 2),
    filterValue = _useState16[0],
    setFilterValue = _useState16[1];
  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState18 = _slicedToArray(_useState17, 2),
    totalPage = _useState18[0],
    SetTotalPage = _useState18[1];
  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState20 = _slicedToArray(_useState19, 2),
    loadingData = _useState20[0],
    setLoadingData = _useState20[1];
  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState22 = _slicedToArray(_useState21, 2),
    reason = _useState22[0],
    setReason = _useState22[1];
  var fetchItems = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(function* (page, searchTerm, filterField, filterValue) {
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/project-Information?page=").concat(page + 1, "&limit=").concat(limit, "&search=").concat(encodeURIComponent(searchTerm.trim()), "&filterField=").concat(encodeURIComponent(filterField.trim()), "&filterValue=").concat(encodeURIComponent(filterValue.trim())));
        var formatDate = res.data.itemI.map(item => _objectSpread(_objectSpread({}, item), {}, {
          id: item._id
        }));
        setProject(formatDate);
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
    loading = _useState24[0],
    setLoading = _useState24[1];
  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    loadingOpenModal = _useState26[0],
    setLoadingOpenModal = _useState26[1];
  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    ErrorOpenModal = _useState28[0],
    setErrorOpenModal = _useState28[1];
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
    var _ref10 = _asyncToGenerator(function* (ReferenceInfo, ReferenceInfoProject, ReferenceInfoName) {
      var data = {
        idInfo: ReferenceInfo,
        person: user.data.userName + ' Created ',
        reason: ReferenceInfoProject + 'For' + ReferenceInfoName,
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
  /* const syncOff = async () => {
  } */

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchDataHidden = /*#__PURE__*/function () {
      var _ref11 = _asyncToGenerator(function* () {
        try {
          var res = yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/hidden"));
          setHiddenRow(res.data.data.map(row => row.idRow));
          setHidden(res.data.data);
          localStorage.removeItem('Hidden');
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      });
      return function fetchDataHidden() {
        return _ref11.apply(this, arguments);
      };
    }();
    fetchDataHidden();
  }, []);
  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    open = _useState30[0],
    setOpen = _useState30[1];
  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState32 = _slicedToArray(_useState31, 2),
    DeleteId = _useState32[0],
    setDeleteId = _useState32[1];
  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    modalOpenLoading = _useState34[0],
    setModalOpenLoading = _useState34[1];
  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState36 = _slicedToArray(_useState35, 2),
    selectedRows = _useState36[0],
    setSelectedRows = _useState36[1];
  var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    openDeleteMultiple = _useState38[0],
    setOpenDeleteMultiple = _useState38[1];
  var _useState39 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState40 = _slicedToArray(_useState39, 2),
    openReasonDelete = _useState40[0],
    setOpenReasonDelete = _useState40[1];
  var handleOpenReasonDelete = e => {
    e.preventDefault();
    setOpenReasonDelete(true);
  };
  var handleCloseReasonDelete = () => {
    setOpenReasonDelete(false);
  };
  var handleOpenMultiple = () => {
    setOpenDeleteMultiple(true);
  };
  var handleCloseMultiple = () => {
    setOpenDeleteMultiple(false);
  };
  var _useState41 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState42 = _slicedToArray(_useState41, 2),
    sideBar = _useState42[0],
    setSideBar = _useState42[1];
  var toggleDrawer = () => {
    setSideBar(!sideBar);
  };
  var handleHideRow = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(function* (id) {
      if (user.data.role === 'CEO') {
        try {
          if (hiddenRow.includes(id)) {
            setHiddenRow(hiddenRow.filter(row => row !== id));
            var result = hidden.filter(row => row.idRow === id).map(row => row._id);
            var hiddenId = result.toString();
            yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/delete-hidden/").concat(hiddenId));
          } else {
            setHiddenRow([...hiddenRow, id]);
            yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].post("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/create-hidden"), {
              idRow: id,
              hiddenByCEO: true
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
    return function handleHideRow(_x8) {
      return _ref12.apply(this, arguments);
    };
  }();
  var rowRenderer = params => {
    if (hiddenRow.includes(params.row._id) && user.data.role !== 'CEO') {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, params.row[params.field]);
  };
  var _useState43 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState44 = _slicedToArray(_useState43, 2),
    filteredRows = _useState44[0],
    setFilteredRows = _useState44[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var proj = project.filter(row => !hiddenRow.includes(row._id));
    setFilteredRows(proj);
  }, [project, hiddenRow]);
  var _useState45 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      items: [],
      quickFilterExcludeHiddenColumns: true,
      quickFilterValues: []
    }),
    _useState46 = _slicedToArray(_useState45, 2),
    filterModel = _useState46[0],
    setFilterModel = _useState46[1];
  var _useState47 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState48 = _slicedToArray(_useState47, 2),
    columnVisibilityModel = _useState48[0],
    setColumnVisibilityModel = _useState48[1];
  var handelHiddenColumn = newHidden => {
    setColumnVisibilityModel(newHidden);
    localStorage.setItem('HiddenColumnsProject', JSON.stringify(newHidden));
  };
  var handleFilter = newModel => {
    setFilterModel(newModel);
    localStorage.setItem('QuickFilterProjectTst', JSON.stringify(newModel));
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
    var storedQuick = JSON.parse(localStorage.getItem('QuickFilterProjectTst'));
    if (storedQuick) {
      setFilterModel(storedQuick);
    }
    var storedColumns = JSON.parse(localStorage.getItem('HiddenColumnsProject'));
    if (storedColumns) {
      setColumnVisibilityModel(storedColumns);
    }
  }, []);
  var _useState49 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState50 = _slicedToArray(_useState49, 2),
    openDeleteAll = _useState50[0],
    setOpenDeleteAll = _useState50[1];
  var handleOpenAll = () => {
    setOpenDeleteAll(true);
  };
  var handleCloseAll = () => {
    setOpenDeleteAll(false);
    setSelectedRows([]);
  };
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
    setOpen(false);
    setOpenDeleteMultiple(false);
    setOpenDeleteAll(false);
    setModalOpenLoading(false);
    setLoading(false);
    setSelectedRows([]);
    fetchItems(page, searchTerm, filterField, filterValue); // Refresh data instead of reload
  };
  var _useState51 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState52 = _slicedToArray(_useState51, 2),
    ProjectDeleted = _useState52[0],
    setProjectDeleted = _useState52[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var fetchFunction = /*#__PURE__*/function () {
      var _ref13 = _asyncToGenerator(function* () {
        var deletePromises = selectedRows.map(/*#__PURE__*/function () {
          var _ref14 = _asyncToGenerator(function* (idToDelete) {
            return axios__WEBPACK_IMPORTED_MODULE_28__["default"].get("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/get-projects/").concat(idToDelete));
          });
          return function (_x9) {
            return _ref14.apply(this, arguments);
          };
        }());
        try {
          var res = yield Promise.all(deletePromises);
          setProjectDeleted(res.map(row => 'P-' + row.data.data.projectNumber));
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
  var related = ProjectDeleted.map(row => row);
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
      var deletePromises = selectedRows.map(/*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator(function* (idToDelete) {
          return axios__WEBPACK_IMPORTED_MODULE_28__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/delete-projects/").concat(idToDelete));
        });
        return function (_x1) {
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
        console.log('an error as occur ', error);
      }
    });
    return function handleDeleteMany(_x0) {
      return _ref16.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(function* () {
      setLoading(true);
      setModalOpenLoading(true);
      handleClose();
      try {
        var res = yield axios__WEBPACK_IMPORTED_MODULE_28__["default"].delete("".concat(_apiConfig__WEBPACK_IMPORTED_MODULE_29__.ENDPOINT_URL, "/delete-projects/").concat(DeleteId));
        if (res) {
          handleOpenModal();
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setModalOpenLoading(false);
      }
    });
    return function handleDelete() {
      return _ref18.apply(this, arguments);
    };
  }();
  var columns = [{
    field: 'projectNumber',
    headerName: 'Project Number',
    minWidth: 80,
    flex: 0.8,
    valueFormatter: params => 'P-' + String((params === null || params === void 0 ? void 0 : params.value) || '').padStart(6, '0')
  }, {
    field: 'customer',
    headerName: 'Customer Name',
    minWidth: 150,
    flex: 1.5,
    valueGetter: params => {
      var _params$row$customerN;
      return ((_params$row$customerN = params.row.customerName) === null || _params$row$customerN === void 0 ? void 0 : _params$row$customerN.customerName) || 'No Customer';
    }
  }, {
    field: 'projectName',
    headerName: 'Project Name',
    minWidth: 200,
    flex: 2
  }, {
    field: 'description',
    headerName: 'Description',
    minWidth: 150,
    flex: 1.5
  }, {
    field: 'status',
    headerName: 'Status',
    minWidth: 100,
    flex: 1,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
      color: params.row.status === "Pending" ? "gray" : params.row.status === "On-Going" ? "blue" : params.row.status === "Stopped" ? "red" : params.row.status === "Pending" ? "Orange" : params.row.status === "Completed" ? "green" : "black"
    }, params.row.status)
  }, {
    field: 'view',
    headerName: 'View',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
      title: "View"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      disabled: ProjectInfoV.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/ProjectInfo/".concat(params.row._id),
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      disabled: ProjectInfoU.length === 0 && user.data.role !== 'CEO'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/ProjectUpdateView/".concat(params.row._id),
      className: "LinkName"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        color: 'gray'
      }
    })))))
  }, {
    field: 'Delete',
    headerName: 'Delete',
    width: 60,
    minWidth: 60,
    renderCell: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DeleteTooltip, {
      title: "Delete"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, "                           ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      onClick: () => handleOpen(params.row._id),
      disabled: ProjectInfoD.length === 0 && user.data.role !== 'CEO'
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
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onClick: () => handleHideRow(params.row._id)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_33__["default"], {
          style: {
            color: '#202a5a'
          }
        })))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, {
          title: "Hide"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onClick: () => handleHideRow(params.row._id)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_32__["default"], {
          style: {
            color: '#202a5a'
          }
        })))));
      }
    }
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "Homeemployee"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: toggleDrawer,
    sx: _objectSpread({
      marginRight: '36px'
    }, sideBar && {
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
  }, "Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_NotificationVIewInfo__WEBPACK_IMPORTED_MODULE_44__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MessageAdminView__WEBPACK_IMPORTED_MODULE_43__["default"], {
    name: user.data.userName,
    role: user.data.role
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick: toggleDrawer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_27__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_24__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_List__WEBPACK_IMPORTED_MODULE_23__["default"], {
    sx: {
      height: '700px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_SidebarDash__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, loadingData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      position: 'relative',
      top: '120px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_37__["default"], null))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, project.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'left',
      margin: '10px'
    }
  }, selectedRows.length > 1 && selectedRows.length < project.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    disabled: user.data.role !== 'CEO',
    onClick: handleOpenAll,
    className: "btnCustomer2"
  }, "Delete multiple"), selectedRows.length === project.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleOpenAll,
    disabled: user.data.role !== 'CEO',
    className: "btnCustomer2"
  }, "Delete all") : '') : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    style: {
      position: 'relative',
      float: 'right',
      margin: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ViewTooltip, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
    disabled: ProjectInfoC.length === 0 && user.data.role !== 'CEO'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
    to: '/ProjectFormView',
    className: "LinkName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "btnCustomerAdding"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_30__["default"], null))))))), project.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sx: {
      height: 600,
      width: '100%'
    }
  }, user.data.role === 'CEO' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__.DataGrid, {
    paginationMode: "server",
    rowCount: totalPage * limit,
    pagination: true,
    page: page,
    pageSize: limit,
    onPageChange: handlePageChange,
    rows: project,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_42__.GridToolbar
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
    rowRenderer: rowRenderer,
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
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_41__.DataGrid, {
    paginationMode: "server",
    rowCount: totalPage * limit,
    pagination: true,
    page: page,
    pageSize: limit,
    onPageChange: handlePageChange,
    rows: filteredRows,
    columns: columns,
    slots: {
      toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_42__.GridToolbar
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
    rowRenderer: rowRenderer,
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
    src: _img_no_data_png__WEBPACK_IMPORTED_MODULE_40__,
    style: {
      position: 'relative',
      marginLeft: '19%',
      padding: '25px',
      height: '40%',
      top: '40px',
      width: '55%',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)'
    }
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  }, "Note:"), " Selected rows will be deleted"), selectedRows.length > 1 && selectedRows.length < project.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "txt2",
    style: {
      color: 'red'
    }
  }, "Note:"), " All selected rows will be deleted"), selectedRows.length === project.length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
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
    open: loadingOpenModal,
    onClose: handleCloseModal,
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_37__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
    onClick: handleCloseModal,
    className: "btnCustomer"
  }, "Close"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_component_Loader__WEBPACK_IMPORTED_MODULE_37__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectViewAdmin);

/***/ }

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2pzX0FkbWluVmlldzFfUHJvamVjdFZpZXdBZG1pbl9qcy5hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxTQUFTLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOVjs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxxQkFBcUIsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ050Qjs7QUFFa0Q7QUFDRjtBQUNoRCxpRUFBZSxnRUFBYSxlQUFlLHNEQUFJO0FBQy9DO0FBQ0EsQ0FBQyxzQkFBc0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOdkIsQ0FBbUQ7QUFDL0I7QUFDOEI7QUFDRTtBQUNzQjtBQUN6QztBQUMyQjtBQUNaO0FBQ0k7QUFDSTtBQUMrSTtBQUN2STtBQUNuQjtBQUNEO0FBQ1E7QUFDUDtBQUNQO0FBQ0U7QUFDSTtBQUNJO0FBQ1Y7QUFDVTtBQUNjO0FBQ0k7QUFDeEM7QUFDa0I7QUFDcUQ7QUFDdkU7QUFDNEI7QUFDMEI7QUFDdkM7QUFDcUI7QUFDZDtBQUNUO0FBQ2tCO0FBQ1A7QUFDUTtBQUcxRCxJQUFNK0QsYUFBYSxHQUFHakQsMERBQU0sQ0FBQ2tELElBQUE7RUFBQSxJQUFHQyxTQUFTLEdBQUFELElBQUEsQ0FBVEMsU0FBUztJQUFLQyxLQUFLLEdBQUFDLHdCQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUFBLG9CQUNqRHBFLDBEQUFBLENBQUM0Qiw4REFBTyxFQUFBMEMsUUFBQSxLQUFLSixLQUFLO0lBQUVLLE9BQU8sRUFBRTtNQUFFQyxNQUFNLEVBQUVQO0lBQVU7RUFBRSxFQUFFLENBQUM7QUFBQSxDQUN2RCxDQUFDLENBQUNRLEtBQUE7RUFBQSxJQUFHQyxL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LENBQUMsSUFBS3hFLFNBQVMsQ0FBQ3dFLENBQUMsQ0FBQ3FLLE1BQU0sQ0FBQ3RILEtBQUssQ0FBRTtJQUMzQ3VILEtBQUssRUFBQyxRQUFRO0lBQ2Q1RCxFQUFFLEVBQUU7TUFBRTlTLEtBQUssRUFBRSxNQUFNO01BQUVsQixlQUFlLEVBQUU7SUFBUTtFQUFFLENBQ2pELENBQ0csQ0FBQyxlQUNQN0UsMERBQUEsV0FBSyxDQUFDLGVBQ05BLDBEQUFBLENBQUMyQixzREFBSTtJQUFDdU0sSUFBSTtJQUFDaU8sRUFBRSxFQUFFO0VBQUcsZ0JBQ2hCbmMsMERBQUE7SUFBUTBjLElBQUksRUFBQyxRQUFRO0lBQUN6WSxTQUFTLEVBQUMsYUFBYTtJQUFDeUIsS0FBSyxFQUFFO01BQUVLLEtBQUssRUFBRTtJQUFPO0VBQUUsR0FBQyxNQUFZLENBQ2hGLENBQ0YsQ0FDRixDQUVILENBQ0EsQ0FDSixDQUFDO0FBRVY7QUFFQSxpRUFBZStCLGdCQUFnQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9BZGQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9QZXJzb24yT3V0bGluZWQuanMiLCJ3ZWJwYWNrOi8vZ2xvYmFsZ2F0ZWFwaS8uL25vZGVfbW9kdWxlcy9AbXVpL2ljb25zLW1hdGVyaWFsL2VzbS9QZXJzb25PZmZSb3VuZGVkLmpzIiwid2VicGFjazovL2dsb2JhbGdhdGVhcGkvLi9zcmMvanMvQWRtaW5WaWV3MS9Qcm9qZWN0Vmlld0FkbWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuL3V0aWxzL2NyZWF0ZVN2Z0ljb24nO1xuaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN2Z0ljb24oIC8qI19fUFVSRV9fKi9fanN4KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ6XCJcbn0pLCAnQWRkJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNMTguMzkgMTQuNTZDMTYuNzEgMTMuNyAxNC41MyAxMyAxMiAxM3MtNC43MS43LTYuMzkgMS41NkM0LjYxIDE1LjA3IDQgMTYuMSA0IDE3LjIyVjIwaDE2di0yLjc4YzAtMS4xMi0uNjEtMi4xNS0xLjYxLTIuNjZNMTggMThINnYtLjc4YzAtLjM4LjItLjcyLjUyLS44OEM3LjcxIDE1LjczIDkuNjMgMTUgMTIgMTVjMi4zNyAwIDQuMjkuNzMgNS40OCAxLjM0LjMyLjE2LjUyLjUuNTIuODh6bS04LjIyLTZoNC40NGMxLjIxIDAgMi4xNC0xLjA2IDEuOTgtMi4yNmwtLjMyLTIuNDVDMTUuNTcgNS4zOSAxMy45MiA0IDEyIDRTOC40MyA1LjM5IDguMTIgNy4yOUw3LjggOS43NGMtLjE2IDEuMi43NyAyLjI2IDEuOTggMi4yNm0uMzItNC40MUMxMC4yNiA2LjY3IDExLjA2IDYgMTIgNnMxLjc0LjY3IDEuOSAxLjU5bC4zMiAyLjQxSDkuNzh6XCJcbn0pLCAnUGVyc29uMk91dGxpbmVkJyk7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBjcmVhdGVTdmdJY29uIGZyb20gJy4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL19qc3goXCJwYXRoXCIsIHtcbiAgZDogXCJNOC42NSA1LjgyQzkuMzYgNC43MiAxMC42IDQgMTIgNGMyLjIxIDAgNCAxLjc5IDQgNCAwIDEuNC0uNzIgMi42NC0xLjgyIDMuMzV6TTIwIDE3LjE3Yy0uMDItMS4xLS42My0yLjExLTEuNjEtMi42Mi0uNTQtLjI4LTEuMTMtLjU0LTEuNzctLjc2em0uNDkgMy4zMkwzLjUxIDMuNTFhLjk5NTkuOTk1OSAwIDAgMC0xLjQxIDBjLS4zOS4zOS0uMzkgMS4wMiAwIDEuNDFsOC4xOCA4LjE4Yy0xLjgyLjIzLTMuNDEuOC00LjcgMS40NkM0LjYgMTUuMDggNCAxNi4xMSA0IDE3LjIyVjIwaDEzLjE3bDEuOSAxLjljLjM5LjM5IDEuMDIuMzkgMS40MSAwIC40LS4zOS40LTEuMDIuMDEtMS40MVwiXG59KSwgJ1BlcnNvbk9mZlJvdW5kZWQnKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL3ZpZXcuY3NzJztcclxuaW1wb3J0IFNpZGViYXJEYXNoIGZyb20gJy4uL2NvbXBvbmVudC9TaWRlYmFyRGFzaCdcclxuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9TZWFyY2gnO1xyXG5pbXBvcnQgTm90aWZpY2F0aW9uc05vbmVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTm90aWZpY2F0aW9uc05vbmUnO1xyXG5pbXBvcnQgJy4vUGFnZVZpZXcvQ2hhcnR2aWV3LmNzcydcclxuaW1wb3J0IFZpc2liaWxpdHlJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvVmlzaWJpbGl0eSc7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZSc7XHJcbmltcG9ydCB7IE5hdkxpbmssIHVzZU5hdmlnYXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCB7IFRhYmxlLCBNb2RhbCwgSWNvbkJ1dHRvbiwgc3R5bGVkLCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgVGFibGVIZWFkLCBUYWJsZVJvdywgQ2hlY2tib3gsIFRhYmxlQ29udGFpbmVyLCBQYXBlciwgVHlwb2dyYXBoeSwgQm94LCBBdXRvY29tcGxldGUsIFRleHRGaWVsZCwgQmFja2Ryb3AsIEdyaWQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcclxuaW1wb3J0IFRvb2x0aXAsIHsgdG9vbHRpcENsYXNzZXMgfSBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgTXVpQXBwQmFyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXBwQmFyJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sYmFyJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgTXVpRHJhd2VyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRHJhd2VyJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0JztcclxuaW1wb3J0IEJhZGdlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQmFkZ2UnO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbXVpL21hdGVyaWFsL0RpdmlkZXInO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBDaGV2cm9uTGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGV2cm9uTGVmdCc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25zSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL05vdGlmaWNhdGlvbnMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBFTkRQT0lOVF9VUkwgfSBmcm9tICcuLi9hcGlDb25maWcnO1xyXG5pbXBvcnQgeyBBZGQsIENsb3NlLCBNYWlsT3V0bGluZSwgUGVyc29uMk91dGxpbmVkLCBQZXJzb25PZmZSb3VuZGVkIH0gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbCc7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IGxvZ091dCwgc2VsZWN0Q3VycmVudFVzZXIsIHNldFVzZXIgfSBmcm9tICcuLi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50L0xvYWRlcic7XHJcbmltcG9ydCBDaGVja0NpcmNsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0NpcmNsZSc7XHJcbmltcG9ydCBMb2dvdXQgZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Mb2dvdXQnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vaW1nL25vLWRhdGEucG5nJztcclxuaW1wb3J0IHsgRGF0YUdyaWQsIEdyaWRUb29sYmFyIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XHJcbmltcG9ydCBNZXNzYWdlQWRtaW5WaWV3IGZyb20gJy4vTWVzc2FnZUFkbWluVmlldyc7XHJcbmltcG9ydCBOb3RpZmljYXRpb25WSWV3SW5mbyBmcm9tICcuL05vdGlmaWNhdGlvblZJZXdJbmZvJztcclxuXHJcblxyXG5jb25zdCBEZWxldGVUb29sdGlwID0gc3R5bGVkKCh7IGNsYXNzTmFtZSwgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxUb29sdGlwIHsuLi5wcm9wc30gY2xhc3Nlcz17eyBwb3BwZXI6IGNsYXNzTmFtZSB9fSAvPlxyXG4pKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gIFtgJiAuJHt0b29sdGlwQ2xhc3Nlcy50b29sdGlwfWBdOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3QgRWRpdFRvb2x0aXAgPSBzdHlsZWQoKHsgY2xhc3NOYW1lLCAuLi5wcm9wcyB9KSA9PiAoXHJcbiAgPFRvb2x0aXAgey4uLnByb3BzfSBjbGFzc2VzPXt7IHBvcHBlcjogY2xhc3NOYW1lIH19IC8+XHJcbikpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgW2AmIC4ke3Rvb2x0aXBDbGFzc2VzLnRvb2x0aXB9YF06IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2dyYXknLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV0sXHJcbiAgICBmb250U2l6ZTogMTEsXHJcbiAgfSxcclxufSkpO1xyXG5jb25zdCBWaWV3VG9vbHRpcCA9IHN0eWxlZCgoeyBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcclxuICA8VG9vbHRpcCB7Li4ucHJvcHN9IGNsYXNzZXM9e3sgcG9wcGVyOiBjbGFzc05hbWUgfX0gLz5cclxuKSkoKHsgdGhlbWUgfSkgPT4gKHtcclxuICBbYCYgLiR7dG9vbHRpcENsYXNzZXMudG9vbHRpcH1gXToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzIwMmE1YScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1sxXSxcclxuICAgIGZvbnRTaXplOiAxMSxcclxuICB9LFxyXG59KSk7XHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIHRvcDogJzUwJScsXHJcbiAgbGVmdDogJzUwJScsXHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcclxuICB3aWR0aDogNDAwLFxyXG4gIGJnY29sb3I6ICdiYWNrZ3JvdW5kLnBhcGVyJyxcclxuICBib3hTaGFkb3c6IDI0LFxyXG4gIHB0OiAyLFxyXG4gIHB4OiA0LFxyXG4gIHBiOiAzLFxyXG59O1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuY29uc3QgQXBwQmFyID0gc3R5bGVkKE11aUFwcEJhciwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nLFxyXG59KSgoeyB0aGVtZSwgb3BlbiB9KSA9PiAoe1xyXG4gIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnd2lkdGgnLCAnbWFyZ2luJ10sIHtcclxuICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgfSksXHJcbiAgLi4uKG9wZW4gJiYge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB3aWR0aDogYGNhbGMoMTAwJSAtICR7ZHJhd2VyV2lkdGh9cHgpYCxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ3dpZHRoJywgJ21hcmdpbiddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9KSxcclxufSkpO1xyXG5jb25zdCBEcmF3ZXIgPSBzdHlsZWQoTXVpRHJhd2VyLCB7IHNob3VsZEZvcndhcmRQcm9wOiAocHJvcCkgPT4gcHJvcCAhPT0gJ29wZW4nIH0pKFxyXG4gICh7IHRoZW1lLCBvcGVuIH0pID0+ICh7XHJcbiAgICAnJiAuTXVpRHJhd2VyLXBhcGVyJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd3aWR0aCcsIHtcclxuICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICAgIH0pLFxyXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgICAgLi4uKCFvcGVuICYmIHtcclxuICAgICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnd2lkdGgnLCB7XHJcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpLFxyXG4gICAgICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDkpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSxcclxuICB9KSxcclxuKTtcclxuZnVuY3Rpb24gUHJvamVjdFZpZXdBZG1pbigpIHtcclxuICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RDdXJyZW50VXNlcik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3Jlc1VzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcbiAgICBjb25zdCBmZXRjaFVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmIChzdG9yZXNVc2VySWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vZ2V0LWVtcGxveWVldXNlci8ke3N0b3Jlc1VzZXJJZH1gKVxyXG4gICAgICAgICAgY29uc3QgTmFtZSA9IHJlcy5kYXRhLmRhdGEuZW1wbG95ZWVOYW1lO1xyXG4gICAgICAgICAgY29uc3QgUm9sZSA9IHJlcy5kYXRhLmRhdGEucm9sZTtcclxuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIoeyB1c2VyTmFtZTogTmFtZSwgcm9sZTogUm9sZSwgaWQ6IHJlcy5kYXRhLmRhdGEuX2lkIH0pKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmlnYXRlKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoVXNlcigpXHJcbiAgfSwgW2Rpc3BhdGNoXSk7XHJcbiAgY29uc3QgW2dyYW50QWNjZXNzLCBzZXRHcmFudEFjY2Vzc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoTnVtYmVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L2dyYW50QWNjZXNzYCk7XHJcbiAgICAgICAgcmVzLmRhdGE/LmRhdGE/LmZpbHRlcigocm93KSA9PiByb3cudXNlcklEID09PSB1c2VyLmRhdGEuaWQpXHJcbiAgICAgICAgICAubWFwKChyb3cpID0+IHNldEdyYW50QWNjZXNzKHJvdy5tb2R1bGVzKSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hOdW1iZXIoKVxyXG4gIH0sIFt1c2VyXSlcclxuICBjb25zdCBQcm9qZWN0SW5mb0MgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiUHJvamVjdFwiICYmIHJvdy5hY2Nlc3MuY3JlYXRlTSA9PT0gdHJ1ZSk7XHJcbiAgY29uc3QgUHJvamVjdEluZm9WID0gZ3JhbnRBY2Nlc3MuZmlsdGVyKChyb3cpID0+IHJvdy5tb2R1bGVOYW1lID09PSBcIlByb2plY3RcIiAmJiByb3cuYWNjZXNzLnZpZXdNID09PSB0cnVlKTtcclxuICBjb25zdCBQcm9qZWN0SW5mb1UgPSBncmFudEFjY2Vzcy5maWx0ZXIoKHJvdykgPT4gcm93Lm1vZHVsZU5hbWUgPT09IFwiUHJvamVjdFwiICYmIHJvdy5hY2Nlc3MuZWRpdE0gPT09IHRydWUpO1xyXG4gIGNvbnN0IFByb2plY3RJbmZvRCA9IGdyYW50QWNjZXNzLmZpbHRlcigocm93KSA9PiByb3cubW9kdWxlTmFtZSA9PT0gXCJQcm9qZWN0XCIgJiYgcm93LmFjY2Vzcy5kZWxldGVNID09PSB0cnVlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIGRpc3BhdGNoKGxvZ091dCgpKTtcclxuICAgIG5hdmlnYXRlKCcvJylcclxuICB9XHJcbiAgY29uc3QgW3Byb2plY3QsIHNldFByb2plY3RdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtoaWRkZW5Sb3csIHNldEhpZGRlblJvd10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBsaW1pdCA9IDEwMDtcclxuICBjb25zdCBbc2VhcmNoVGVybSwgc2V0U2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVib3VuY2VkU2VhcmNoVGVybSwgc2V0RGVib3VuY2VkU2VhcmNoVGVybV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZmlsdGVyRmllbGQsIHNldEZpbHRlckZpZWxkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmaWx0ZXJWYWx1ZSwgc2V0RmlsdGVyVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RvdGFsUGFnZSwgU2V0VG90YWxQYWdlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtsb2FkaW5nRGF0YSwgc2V0TG9hZGluZ0RhdGFdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3JlYXNvbiwgc2V0UmVhc29uXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgZmV0Y2hJdGVtcyA9IGFzeW5jIChwYWdlLCBzZWFyY2hUZXJtLCBmaWx0ZXJGaWVsZCwgZmlsdGVyVmFsdWUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtFTkRQT0lOVF9VUkx9L3Byb2plY3QtSW5mb3JtYXRpb24/cGFnZT0ke3BhZ2UgKyAxfSZsaW1pdD0ke2xpbWl0fSZzZWFyY2g9JHtlbmNvZGVVUklDb21wb25lbnQoc2VhcmNoVGVybS50cmltKCkpfSZmaWx0ZXJGaWVsZD0ke2VuY29kZVVSSUNvbXBvbmVudChmaWx0ZXJGaWVsZC50cmltKCkpfSZmaWx0ZXJWYWx1ZT0ke2VuY29kZVVSSUNvbXBvbmVudChmaWx0ZXJWYWx1ZS50cmltKCkpfWApO1xyXG4gICAgICBjb25zdCBmb3JtYXREYXRlID0gcmVzLmRhdGEuaXRlbUkubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgaWQ6IGl0ZW0uX2lkLFxyXG4gICAgICB9KSk7XHJcbiAgICAgIHNldFByb2plY3QoZm9ybWF0RGF0ZSk7XHJcbiAgICAgIFNldFRvdGFsUGFnZShyZXMuZGF0YS50b3RhbFBhZ2VzKTtcclxuICAgICAgc2V0TG9hZGluZ0RhdGEoZmFsc2UpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIHNldExvYWRpbmdEYXRhKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaEl0ZW1zKHBhZ2UsIGRlYm91bmNlZFNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSk7XHJcbiAgfSwgW3BhZ2UsIGRlYm91bmNlZFNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gKGV2ZW50LCBuZXdQYWdlKSA9PiB7XHJcbiAgICBzZXRQYWdlKG5ld1BhZ2UgLSAxKTtcclxuICB9O1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ09wZW5Nb2RhbCwgc2V0TG9hZGluZ09wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0Vycm9yT3Blbk1vZGFsLCBzZXRFcnJvck9wZW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9wZW5PZmZsaW5lID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZ09wZW5Nb2RhbCh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUVycm9yID0gKCkgPT4ge1xyXG4gICAgc2V0RXJyb3JPcGVuTW9kYWwodHJ1ZSk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDcmVhdGVOb3RpZmljYXRpb25PZmZsaW5lID0gYXN5bmMgKFJlZmVyZW5jZUluZm8sIFJlZmVyZW5jZUluZm9Qcm9qZWN0LCBSZWZlcmVuY2VJbmZvTmFtZSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiBSZWZlcmVuY2VJbmZvLFxyXG4gICAgICBwZXJzb246IHVzZXIuZGF0YS51c2VyTmFtZSArICcgQ3JlYXRlZCAnLFxyXG4gICAgICByZWFzb246IFJlZmVyZW5jZUluZm9Qcm9qZWN0ICsgJ0ZvcicgKyBSZWZlcmVuY2VJbmZvTmFtZSxcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogbmV3IERhdGUoKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qIGNvbnN0IHN5bmNPZmYgPSBhc3luYyAoKSA9PiB7XHJcbiAgfSAqL1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGFIaWRkZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0VORFBPSU5UX1VSTH0vaGlkZGVuYClcclxuICAgICAgICBzZXRIaWRkZW5Sb3cocmVzLmRhdGEuZGF0YS5tYXAoKHJvdykgPT4gcm93LmlkUm93KSlcclxuICAgICAgICBzZXRIaWRkZW4ocmVzLmRhdGEuZGF0YSlcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnSGlkZGVuJylcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmV0Y2hEYXRhSGlkZGVuKClcclxuICB9LCBbXSlcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW0RlbGV0ZUlkLCBzZXREZWxldGVJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbW9kYWxPcGVuTG9hZGluZywgc2V0TW9kYWxPcGVuTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkUm93cywgc2V0U2VsZWN0ZWRSb3dzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbb3BlbkRlbGV0ZU11bHRpcGxlLCBzZXRPcGVuRGVsZXRlTXVsdGlwbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuUmVhc29uRGVsZXRlLCBzZXRPcGVuUmVhc29uRGVsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5SZWFzb25EZWxldGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlT3Blbk11bHRpcGxlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkRlbGV0ZU11bHRpcGxlKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNdWx0aXBsZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW5EZWxldGVNdWx0aXBsZShmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3NpZGVCYXIsIHNldFNpZGVCYXJdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZUJhcighc2lkZUJhcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSGlkZVJvdyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgaWYgKHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGlmIChoaWRkZW5Sb3cuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICBzZXRIaWRkZW5Sb3coaGlkZGVuUm93LmZpbHRlcigocm93KSA9PiByb3cgIT09IGlkKSk7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBoaWRkZW4uZmlsdGVyKChyb3cpID0+IHJvdy5pZFJvdyA9PT0gaWQpXHJcbiAgICAgICAgICAgIC5tYXAoKHJvdykgPT4gcm93Ll9pZCk7XHJcbiAgICAgICAgICBjb25zdCBoaWRkZW5JZCA9IHJlc3VsdC50b1N0cmluZygpO1xyXG4gICAgICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAke0VORFBPSU5UX1VSTH0vZGVsZXRlLWhpZGRlbi8ke2hpZGRlbklkfWApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRIaWRkZW5Sb3coWy4uLmhpZGRlblJvdywgaWRdKTtcclxuICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoYCR7RU5EUE9JTlRfVVJMfS9jcmVhdGUtaGlkZGVuYCwge1xyXG4gICAgICAgICAgICBpZFJvdzogaWQsXHJcbiAgICAgICAgICAgIGhpZGRlbkJ5Q0VPOiB0cnVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm93UmVuZGVyZXIgPSAocGFyYW1zKSA9PiB7XHJcbiAgICBpZiAoaGlkZGVuUm93LmluY2x1ZGVzKHBhcmFtcy5yb3cuX2lkKSAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTycpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPGRpdj57cGFyYW1zLnJvd1twYXJhbXMuZmllbGRdfTwvZGl2PjtcclxuICB9O1xyXG5cclxuICBjb25zdCBbZmlsdGVyZWRSb3dzLCBzZXRGaWx0ZXJlZFJvd3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qID0gcHJvamVjdC5maWx0ZXIocm93ID0+ICFoaWRkZW5Sb3cuaW5jbHVkZXMocm93Ll9pZCkpO1xyXG4gICAgc2V0RmlsdGVyZWRSb3dzKHByb2opO1xyXG4gIH0sIFtwcm9qZWN0LCBoaWRkZW5Sb3ddKTtcclxuXHJcbiAgY29uc3QgW2ZpbHRlck1vZGVsLCBzZXRGaWx0ZXJNb2RlbF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpdGVtczogW10sXHJcbiAgICBxdWlja0ZpbHRlckV4Y2x1ZGVIaWRkZW5Db2x1bW5zOiB0cnVlLFxyXG4gICAgcXVpY2tGaWx0ZXJWYWx1ZXM6IFtdLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtjb2x1bW5WaXNpYmlsaXR5TW9kZWwsIHNldENvbHVtblZpc2liaWxpdHlNb2RlbF0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgaGFuZGVsSGlkZGVuQ29sdW1uID0gKG5ld0hpZGRlbikgPT4ge1xyXG4gICAgc2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsKG5ld0hpZGRlbik7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnSGlkZGVuQ29sdW1uc1Byb2plY3QnLCBKU09OLnN0cmluZ2lmeShuZXdIaWRkZW4pKTtcclxuICB9O1xyXG4gICAgY29uc3QgaGFuZGxlRmlsdGVyID0gKG5ld01vZGVsKSA9PiB7XHJcbiAgICBzZXRGaWx0ZXJNb2RlbChuZXdNb2RlbCk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUXVpY2tGaWx0ZXJQcm9qZWN0VHN0JywgSlNPTi5zdHJpbmdpZnkobmV3TW9kZWwpKTtcclxuICAgIGlmIChuZXdNb2RlbC5xdWlja0ZpbHRlclZhbHVlcyAmJiBuZXdNb2RlbC5xdWlja0ZpbHRlclZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHNldFNlYXJjaFRlcm0obmV3TW9kZWwucXVpY2tGaWx0ZXJWYWx1ZXMuam9pbignICcpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNlYXJjaFRlcm0oJycpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5ld01vZGVsLml0ZW1zICYmIG5ld01vZGVsLml0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgc2V0RmlsdGVyRmllbGQobmV3TW9kZWwuaXRlbXNbMF0uZmllbGQpO1xyXG4gICAgICBzZXRGaWx0ZXJWYWx1ZShuZXdNb2RlbC5pdGVtc1swXS52YWx1ZSB8fCAnJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRGaWx0ZXJGaWVsZCgnJyk7XHJcbiAgICAgIHNldEZpbHRlclZhbHVlKCcnKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRRdWljayA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1F1aWNrRmlsdGVyUHJvamVjdFRzdCcpKTtcclxuICAgIGlmIChzdG9yZWRRdWljaykge1xyXG4gICAgICBzZXRGaWx0ZXJNb2RlbChzdG9yZWRRdWljayk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdG9yZWRDb2x1bW5zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnSGlkZGVuQ29sdW1uc1Byb2plY3QnKSk7XHJcbiAgICBpZiAoc3RvcmVkQ29sdW1ucykge1xyXG4gICAgICBzZXRDb2x1bW5WaXNpYmlsaXR5TW9kZWwoc3RvcmVkQ29sdW1ucyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IFtvcGVuRGVsZXRlQWxsLCBzZXRPcGVuRGVsZXRlQWxsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlT3BlbkFsbCA9ICgpID0+IHtcclxuICAgIHNldE9wZW5EZWxldGVBbGwodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZUFsbCA9ICgpID0+IHtcclxuICAgIHNldE9wZW5EZWxldGVBbGwoZmFsc2UpO1xyXG4gICAgc2V0U2VsZWN0ZWRSb3dzKFtdKVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlT3BlbiA9IChpZCkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICAgIHNldERlbGV0ZUlkKGlkKVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlT3Blbk1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0TW9kYWxPcGVuTG9hZGluZyh0cnVlKTtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9LCA1MDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xyXG5cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0T3BlbkRlbGV0ZU11bHRpcGxlKGZhbHNlKTtcclxuICAgIHNldE9wZW5EZWxldGVBbGwoZmFsc2UpO1xyXG4gICAgc2V0TW9kYWxPcGVuTG9hZGluZyhmYWxzZSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIHNldFNlbGVjdGVkUm93cyhbXSk7XHJcbiAgICBmZXRjaEl0ZW1zKHBhZ2UsIHNlYXJjaFRlcm0sIGZpbHRlckZpZWxkLCBmaWx0ZXJWYWx1ZSk7IC8vIFJlZnJlc2ggZGF0YSBpbnN0ZWFkIG9mIHJlbG9hZFxyXG5cclxuICB9O1xyXG4gIGNvbnN0IFtQcm9qZWN0RGVsZXRlZCwgc2V0UHJvamVjdERlbGV0ZWRdID0gdXNlU3RhdGUoW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRlbGV0ZVByb21pc2VzID0gc2VsZWN0ZWRSb3dzLm1hcChhc3luYyAoaWRUb0RlbGV0ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBheGlvcy5nZXQoYCR7RU5EUE9JTlRfVVJMfS9nZXQtcHJvamVjdHMvJHtpZFRvRGVsZXRlfWApXHJcbiAgICAgIH0pXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgUHJvbWlzZS5hbGwoZGVsZXRlUHJvbWlzZXMpO1xyXG4gICAgICAgIHNldFByb2plY3REZWxldGVkKHJlcy5tYXAoKHJvdykgPT4gJ1AtJyArIHJvdy5kYXRhLmRhdGEucHJvamVjdE51bWJlcikpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZldGNoRnVuY3Rpb24oKVxyXG4gIH0sIFtzZWxlY3RlZFJvd3NdKVxyXG4gIGNvbnN0IHJlbGF0ZWQgPSBQcm9qZWN0RGVsZXRlZC5tYXAocm93ID0+IHJvdylcclxuICBjb25zdCBpbmZvID0gcmVsYXRlZC50b1N0cmluZygpXHJcbiAgY29uc3QgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaWRJbmZvOiAnJyxcclxuICAgICAgcGVyc29uOiB1c2VyLmRhdGEudXNlck5hbWUgKyAnIERlbGV0ZWQgJyArIGluZm8sXHJcbiAgICAgIHJlYXNvbixcclxuICAgICAgZGF0ZU5vdGlmaWNhdGlvbjogbmV3IERhdGUoKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MucG9zdChgJHtFTkRQT0lOVF9VUkx9L2NyZWF0ZS1ub3RpZmljYXRpb25gLCBkYXRhKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZU1hbnkgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBkZWxldGVQcm9taXNlcyA9IHNlbGVjdGVkUm93cy5tYXAoYXN5bmMgKGlkVG9EZWxldGUpID0+IHtcclxuICAgICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtFTkRQT0lOVF9VUkx9L2RlbGV0ZS1wcm9qZWN0cy8ke2lkVG9EZWxldGV9YCk7XHJcbiAgICB9KVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgUHJvbWlzZS5hbGwoZGVsZXRlUHJvbWlzZXMpO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaGFuZGxlQ3JlYXRlTm90aWZpY2F0aW9uKClcclxuICAgICAgICBoYW5kbGVPcGVuTW9kYWwoKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2FuIGVycm9yIGFzIG9jY3VyICcsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICBzZXRNb2RhbE9wZW5Mb2FkaW5nKHRydWUpO1xyXG4gICAgaGFuZGxlQ2xvc2UoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtFTkRQT0lOVF9VUkx9L2RlbGV0ZS1wcm9qZWN0cy8ke0RlbGV0ZUlkfWApO1xyXG4gICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgaGFuZGxlT3Blbk1vZGFsKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIHNldE1vZGFsT3BlbkxvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAgeyBmaWVsZDogJ3Byb2plY3ROdW1iZXInLCBoZWFkZXJOYW1lOiAnUHJvamVjdCBOdW1iZXInLCBtaW5XaWR0aDogODAsIGZsZXg6IDAuOCwgdmFsdWVGb3JtYXR0ZXI6IChwYXJhbXMpID0+ICdQLScgKyBTdHJpbmcocGFyYW1zPy52YWx1ZSB8fCAnJykucGFkU3RhcnQoNiwgJzAnKSB9LFxyXG4gICAgeyBmaWVsZDogJ2N1c3RvbWVyJywgaGVhZGVyTmFtZTogJ0N1c3RvbWVyIE5hbWUnLCBtaW5XaWR0aDogMTUwLCBmbGV4OiAxLjUsIHZhbHVlR2V0dGVyOiAocGFyYW1zKSA9PiBwYXJhbXMucm93LmN1c3RvbWVyTmFtZT8uY3VzdG9tZXJOYW1lIHx8ICdObyBDdXN0b21lcicgfSxcclxuICAgIHsgZmllbGQ6ICdwcm9qZWN0TmFtZScsIGhlYWRlck5hbWU6ICdQcm9qZWN0IE5hbWUnLCBtaW5XaWR0aDogMjAwLCBmbGV4OiAyIH0sXHJcbiAgICB7IGZpZWxkOiAnZGVzY3JpcHRpb24nLCBoZWFkZXJOYW1lOiAnRGVzY3JpcHRpb24nLCBtaW5XaWR0aDogMTUwLCBmbGV4OiAxLjUgfSxcclxuICAgIHtcclxuICAgICAgZmllbGQ6ICdzdGF0dXMnLCBoZWFkZXJOYW1lOiAnU3RhdHVzJywgbWluV2lkdGg6IDEwMCwgZmxleDogMSwgcmVuZGVyQ2VsbDogKHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICBjb2xvcj17XHJcbiAgICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzID09PSBcIlBlbmRpbmdcIlxyXG4gICAgICAgICAgICAgID8gXCJncmF5XCIgOiBwYXJhbXMucm93LnN0YXR1cyA9PT0gXCJPbi1Hb2luZ1wiXHJcbiAgICAgICAgICAgICAgICA/IFwiYmx1ZVwiIDpcclxuICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzID09PSBcIlN0b3BwZWRcIlxyXG4gICAgICAgICAgICAgICAgICA/IFwicmVkXCIgOlxyXG4gICAgICAgICAgICAgICAgICBwYXJhbXMucm93LnN0YXR1cyA9PT0gXCJQZW5kaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwiT3JhbmdlXCIgOlxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy5yb3cuc3RhdHVzID09PSBcIkNvbXBsZXRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiZ3JlZW5cIiA6IFwiYmxhY2tcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtwYXJhbXMucm93LnN0YXR1c31cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAndmlldycsIGhlYWRlck5hbWU6ICdWaWV3Jywgd2lkdGg6IDYwLCBtaW5XaWR0aDogNjAsIHJlbmRlckNlbGw6IChwYXJhbXMpID0+IChcclxuICAgICAgICA8Vmlld1Rvb2x0aXAgdGl0bGU9XCJWaWV3XCI+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e1Byb2plY3RJbmZvVi5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICA8TmF2TGluayB0bz17YC9Qcm9qZWN0SW5mby8ke3BhcmFtcy5yb3cuX2lkfWB9IGNsYXNzTmFtZT0nTGlua05hbWUnPlxyXG4gICAgICAgICAgICAgICAgPFZpc2liaWxpdHlJY29uIHN0eWxlPXt7IGNvbG9yOiAnIzIwMmE1YScgfX0gLz5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L1ZpZXdUb29sdGlwPlxyXG4gICAgICApXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBmaWVsZDogJ2VkaXQnLCBoZWFkZXJOYW1lOiAnRWRpdCcsIHdpZHRoOiA2MCwgbWluV2lkdGg6IDYwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPEVkaXRUb29sdGlwIHRpdGxlPVwiRWRpdFwiID5cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBkaXNhYmxlZD17UHJvamVjdEluZm9VLmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIHRvPXtgL1Byb2plY3RVcGRhdGVWaWV3LyR7cGFyYW1zLnJvdy5faWR9YH0gY2xhc3NOYW1lPSdMaW5rTmFtZSc+XHJcbiAgICAgICAgICAgICAgICA8RWRpdEljb24gc3R5bGU9e3sgY29sb3I6ICdncmF5JyB9fSAvPlxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvRWRpdFRvb2x0aXA+XHJcbiAgICAgIClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpZWxkOiAnRGVsZXRlJywgaGVhZGVyTmFtZTogJ0RlbGV0ZScsIHdpZHRoOiA2MCwgbWluV2lkdGg6IDYwLCByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPERlbGV0ZVRvb2x0aXAgdGl0bGU9XCJEZWxldGVcIj5cclxuICAgICAgICAgIDxzcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9wZW4ocGFyYW1zLnJvdy5faWQpfSBkaXNhYmxlZD17UHJvamVjdEluZm9ELmxlbmd0aCA9PT0gMCAmJiB1c2VyLmRhdGEucm9sZSAhPT0gJ0NFTyd9PlxyXG4gICAgICAgICAgICA8RGVsZXRlSWNvbiBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgY29sb3I6ICdyZWQnIH19IC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9EZWxldGVUb29sdGlwPlxyXG4gICAgICApXHJcbiAgICB9LCB7XHJcbiAgICAgIGZpZWxkOiAnaGlkZScsXHJcbiAgICAgIGhlYWRlck5hbWU6ICdBY3Rpb24nLFxyXG4gICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgIHdpZHRoOiA2MCxcclxuICAgICAgbWluV2lkdGg6IDYwLFxyXG4gICAgICByZW5kZXJDZWxsOiAocGFyYW1zKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJykge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoaWRkZW5Sb3cuaW5jbHVkZXMocGFyYW1zLnJvdy5faWQpID9cclxuICAgICAgICAgICAgICAgICAgKDxWaWV3VG9vbHRpcCB0aXRsZT1cIlVuSGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlSGlkZVJvdyhwYXJhbXMucm93Ll9pZCl9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBlcnNvbk9mZlJvdW5kZWQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD4pXHJcbiAgICAgICAgICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWV3VG9vbHRpcCB0aXRsZT1cIkhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVIaWRlUm93KHBhcmFtcy5yb3cuX2lkKX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQZXJzb24yT3V0bGluZWQgc3R5bGU9e3sgY29sb3I6ICcjMjAyYTVhJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIF1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J0hvbWVlbXBsb3llZSc+XHJcbiAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxyXG4gICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJhYnNvbHV0ZVwiIG9wZW49e3NpZGVCYXJ9IHN4PXt7IGJhY2tncm91bmRDb2xvcjogJyMzMDM2OGEnIH19PlxyXG4gICAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBwcjogJzI0cHgnLCAvLyBrZWVwIHJpZ2h0IHBhZGRpbmcgd2hlbiBkcmF3ZXIgY2xvc2VkXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJhd2VyfVxyXG4gICAgICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzM2cHgnLFxyXG4gICAgICAgICAgICAgICAgLi4uKHNpZGVCYXIgJiYgeyBkaXNwbGF5OiAnbm9uZScgfSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDFcIlxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICBub1dyYXBcclxuICAgICAgICAgICAgICBzeD17eyBmbGV4R3JvdzogMSB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUHJvamVjdFxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25WSWV3SW5mbyAvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZUFkbWluVmlldyBuYW1lPXt1c2VyLmRhdGEudXNlck5hbWV9IHJvbGU9e3VzZXIuZGF0YS5yb2xlfSAvPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxMb2dvdXQgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICAgIDxEcmF3ZXIgdmFyaWFudD1cInBlcm1hbmVudFwiIG9wZW49e3NpZGVCYXJ9IG9uTW91c2VFbnRlcj17KCkgPT4gc2V0U2lkZUJhcih0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRTaWRlQmFyKGZhbHNlKX0+XHJcbiAgICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICAgICBweDogWzFdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVEcmF3ZXJ9PlxyXG4gICAgICAgICAgICAgIDxDaGV2cm9uTGVmdEljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgIDxMaXN0IHN4PXt7IGhlaWdodDogJzcwMHB4JyB9fT5cclxuICAgICAgICAgICAgPFNpZGViYXJEYXNoIC8+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgY29tcG9uZW50PVwibWFpblwiXHJcbiAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICh0aGVtZSkgPT5cclxuICAgICAgICAgICAgICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdsaWdodCdcclxuICAgICAgICAgICAgICAgID8gdGhlbWUucGFsZXR0ZS5ncmV5WzEwMF1cclxuICAgICAgICAgICAgICAgIDogdGhlbWUucGFsZXR0ZS5ncmV5WzkwMF0sXHJcbiAgICAgICAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUb29sYmFyIC8+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibm9uZVwiIHN4PXt7IG10OiAxIH19ID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxvYWRpbmdEYXRhID8gPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIHRvcDogJzEyMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgPExvYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+IDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAge3Byb2plY3QubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBzdHlsZT17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJywgZmxvYXQ6ICdsZWZ0JywgbWFyZ2luOiAnMTBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPiAxICYmIHNlbGVjdGVkUm93cy5sZW5ndGggPCBwcm9qZWN0Lmxlbmd0aCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17dXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfSBvbkNsaWNrPXtoYW5kbGVPcGVuQWxsfSBjbGFzc05hbWU9J2J0bkN1c3RvbWVyMic+RGVsZXRlIG11bHRpcGxlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPT09IHByb2plY3QubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlT3BlbkFsbH0gZGlzYWJsZWQ9e3VzZXIuZGF0YS5yb2xlICE9PSAnQ0VPJ30gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInPkRlbGV0ZSBhbGw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnLCBtYXJnaW46ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8Vmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gZGlzYWJsZWQ9e1Byb2plY3RJbmZvQy5sZW5ndGggPT09IDAgJiYgdXNlci5kYXRhLnJvbGUgIT09ICdDRU8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayB0bz17Jy9Qcm9qZWN0Rm9ybVZpZXcnfSBjbGFzc05hbWU9J0xpbmtOYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXJBZGRpbmcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9WaWV3VG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvamVjdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3g9e3sgaGVpZ2h0OiA2MDAsIHdpZHRoOiAnMTAwJScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuZGF0YS5yb2xlID09PSAnQ0VPJyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uTW9kZT1cInNlcnZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q291bnQ9e3RvdGFsUGFnZSAqIGxpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtsaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtwcm9qZWN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RzPXt7IHRvb2xiYXI6IEdyaWRUb29sYmFyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJvd1NlbGVjdGlvbk1vZGVsQ2hhbmdlPXsobmV3U2VsZWN0aW9uKSA9PiBzZXRTZWxlY3RlZFJvd3MobmV3U2VsZWN0aW9uKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1F1aWNrRmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW50T3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVRvb2xiYXJCdXR0b246IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1JlbmRlcmVyPXtyb3dSZW5kZXJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94U2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlRGVuc2l0eVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb25Nb2RlbD17c2VsZWN0ZWRSb3dzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTW9kZWw9e2ZpbHRlck1vZGVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GaWx0ZXJNb2RlbENoYW5nZT17KG5ld01vZGVsKSA9PiBoYW5kbGVGaWx0ZXIobmV3TW9kZWwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uVmlzaWJpbGl0eU1vZGVsPXtjb2x1bW5WaXNpYmlsaXR5TW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbHVtblZpc2liaWxpdHlNb2RlbENoYW5nZT17aGFuZGVsSGlkZGVuQ29sdW1ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLCBwYWRkaW5nOiAnMTBweCcsICcmIC5NdWlEYXRhR3JpZC1mb290ZXJDb250YWluZXInOiB7IGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcgfSwgJyYgLk11aVRhYmxlUGFnaW5hdGlvbi1yb290JzogeyBmbGV4OiAnbm9uZScgfSwgJyYgLk11aVRhYmxlUGFnaW5hdGlvbi1zcGFjZXInOiB7IGRpc3BsYXk6ICdub25lJyB9IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YUdyaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uTW9kZT1cInNlcnZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q291bnQ9e3RvdGFsUGFnZSAqIGxpbWl0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlPXtwYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplPXtsaW1pdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblBhZ2VDaGFuZ2U9e2hhbmRsZVBhZ2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzPXtmaWx0ZXJlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdHM9e3sgdG9vbGJhcjogR3JpZFRvb2xiYXIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUm93U2VsZWN0aW9uTW9kZWxDaGFuZ2U9eyhuZXdTZWxlY3Rpb24pID0+IHNldFNlbGVjdGVkUm93cyhuZXdTZWxlY3Rpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdFByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UXVpY2tGaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbnRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlVG9vbGJhckJ1dHRvbjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93UmVuZGVyZXI9e3Jvd1JlbmRlcmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hTZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVEZW5zaXR5U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbk1vZGVsPXtzZWxlY3RlZFJvd3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJNb2RlbD17ZmlsdGVyTW9kZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZpbHRlck1vZGVsQ2hhbmdlPXsobmV3TW9kZWwpID0+IGhhbmRsZUZpbHRlcihuZXdNb2RlbCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5WaXNpYmlsaXR5TW9kZWw9e2NvbHVtblZpc2liaWxpdHlNb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29sdW1uVmlzaWJpbGl0eU1vZGVsQ2hhbmdlPXtoYW5kZWxIaWRkZW5Db2x1bW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeD17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIHBhZGRpbmc6ICcxMHB4JywgJyYgLk11aURhdGFHcmlkLWZvb3RlckNvbnRhaW5lcic6IHsganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyB9LCAnJiAuTXVpVGFibGVQYWdpbmF0aW9uLXJvb3QnOiB7IGZsZXg6ICdub25lJyB9LCAnJiAuTXVpVGFibGVQYWdpbmF0aW9uLXNwYWNlcic6IHsgZGlzcGxheTogJ25vbmUnIH0gfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICkgOiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtJbWFnZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIG1hcmdpbkxlZnQ6ICcxOSUnLCBwYWRkaW5nOiAnMjVweCcsIGhlaWdodDogJzQwJScsIHRvcDogJzQwcHgnLCB3aWR0aDogJzU1JScsIGJveFNoYWRvdzogJzAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgIH08L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgIDxoMj5EbyB5b3Ugd2FudCB0byBEZWxldGUgPzwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc2MHB4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcjInIG9uQ2xpY2s9e2hhbmRsZURlbGV0ZX0+XHJcbiAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVuRGVsZXRlTXVsdGlwbGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNdWx0aXBsZX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPGgyPkRvIHlvdSB3YW50IHRvIERlbGV0ZSA/PC9oMj5cclxuICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gQWxsIHNlbGVjdGVkIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJyBvbkNsaWNrPXtoYW5kbGVEZWxldGVNYW55fT5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VNdWx0aXBsZX0+XHJcbiAgICAgICAgICAgICAgICBDYW5jZWxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgb3Blbj17b3BlbkRlbGV0ZUFsbH1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZUFsbH1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgPGgyPkRvIHlvdSB3YW50IHRvIERlbGV0ZSA/PC9oMj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkUm93cy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gU2VsZWN0ZWQgcm93cyB3aWxsIGJlIGRlbGV0ZWQ8L3A+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzZWxlY3RlZFJvd3MubGVuZ3RoID4gMSAmJiBzZWxlY3RlZFJvd3MubGVuZ3RoIDwgcHJvamVjdC5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gQWxsIHNlbGVjdGVkIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dzLmxlbmd0aCA9PT0gcHJvamVjdC5sZW5ndGggJiYgKFxyXG4gICAgICAgICAgICAgICAgPHA+PHNwYW4gY2xhc3NOYW1lPVwidHh0MlwiIHN0eWxlPXt7IGNvbG9yOiAncmVkJyB9fT5Ob3RlOjwvc3Bhbj4gQWxsIHJvd3Mgd2lsbCBiZSBkZWxldGVkPC9wPlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXIyJyBvbkNsaWNrPXtoYW5kbGVPcGVuUmVhc29uRGVsZXRlfT5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG5DdXN0b21lcicgb25DbGljaz17aGFuZGxlQ2xvc2VBbGx9PlxyXG4gICAgICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e2xvYWRpbmdPcGVuTW9kYWx9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VNb2RhbH1cclxuICAgICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxyXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50PXtCYWNrZHJvcH1cclxuICAgICAgICBCYWNrZHJvcFByb3BzPXt7XHJcbiAgICAgICAgICB0aW1lb3V0OiA1MDAsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbC1tb2RhbC10aXRsZVwiXHJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggc3g9e3sgLi4uc3R5bGUsIHdpZHRoOiA1MDAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8TG9hZGVyIC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8cD48Q2hlY2tDaXJjbGVJY29uIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCBoZWlnaHQ6ICc0MHB4Jywgd2lkdGg6ICc0MHB4JyB9fSAvPjwvcD5cclxuICAgICAgICAgICAgICA8aDI+IERhdGEgU2F2ZWQgc3VjY2Vzc2Z1bGx5PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0gY2xhc3NOYW1lPSdidG5DdXN0b21lcic+XHJcbiAgICAgICAgICAgICAgICAgIENsb3NlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBvcGVuPXttb2RhbE9wZW5Mb2FkaW5nfVxyXG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTW9kYWx9XHJcbiAgICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxyXG4gICAgICAgIEJhY2tkcm9wUHJvcHM9e3tcclxuICAgICAgICAgIHRpbWVvdXQ6IDUwMCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibW9kYWwtbW9kYWwtZGVzY3JpcHRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBzeD17eyAuLi5zdHlsZSwgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nID8gKDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPjxDaGVja0NpcmNsZUljb24gc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIGhlaWdodDogJzQwcHgnLCB3aWR0aDogJzQwcHgnIH19IC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8aDI+IERhdGEgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnNjBweCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTW9kYWx9IGNsYXNzTmFtZT0nYnRuQ3VzdG9tZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQ2xvc2VcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIG9wZW49e29wZW5SZWFzb25EZWxldGV9XHJcbiAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VSZWFzb25EZWxldGV9XHJcbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8Qm94IHN4PXt7IC4uLnN0eWxlLCB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgPFZpZXdUb29sdGlwIHRpdGxlPVwiQ2xvc2VcIiBwbGFjZW1lbnQ9J2xlZnQnPlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZVJlYXNvbkRlbGV0ZX0gc3R5bGU9e3sgcG9zaXRpb246ICdyZWxhdGl2ZScsIGZsb2F0OiAncmlnaHQnIH19PlxyXG4gICAgICAgICAgICAgIDxDbG9zZSBzdHlsZT17eyBjb2xvcjogJyMyMDJhNWEnIH19IC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvVmlld1Rvb2x0aXA+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBpZD1cIm1vZGFsLW1vZGFsLXRpdGxlXCIgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgV2h5IGRvIHlvdSB3YW50IHRvIGRlbGV0ZToge2luZm99P1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZURlbGV0ZU1hbnl9PlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3R5bGU9e3sgYWxpZ25JdGVtczogJ2NlbnRlcicsIHBhZGRpbmc6ICcxNXB4JyB9fSBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIGlkPSdyZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9J3JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWFzb259XHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdSZWFzb24nXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmVhc29uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgbGFiZWw9J1JlYXNvbidcclxuICAgICAgICAgICAgICAgICAgc3g9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdidG5DdXN0b21lcicgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fT5TYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Vmlld0FkbWluXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZWJhckRhc2giLCJTZWFyY2hJY29uIiwiTm90aWZpY2F0aW9uc05vbmVJY29uIiwiVmlzaWJpbGl0eUljb24iLCJFZGl0SWNvbiIsIkRlbGV0ZUljb24iLCJOYXZMaW5rIiwidXNlTmF2aWdhdGUiLCJUYWJsZSIsIk1vZGFsIiwiSWNvbkJ1dHRvbiIsInN0eWxlZCIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiQ2hlY2tib3giLCJUYWJsZUNvbnRhaW5lciIsIlBhcGVyIiwiVHlwb2dyYXBoeSIsIkJveCIsIkF1dG9jb21wbGV0ZSIsIlRleHRGaWVsZCIsIkJhY2tkcm9wIiwiR3JpZCIsIlRvb2x0aXAiLCJ0b29sdGlwQ2xhc3NlcyIsIk11aUFwcEJhciIsIlRvb2xiYXIiLCJDc3NCYXNlbGluZSIsIk11aURyYXdlciIsIkxpc3QiLCJCYWRnZSIsIkRpdmlkZXIiLCJDb250YWluZXIiLCJMaW5rIiwiTWVudUljb24iLCJDaGV2cm9uTGVmdEljb24iLCJOb3RpZmljYXRpb25zSWNvbiIsImF4aW9zIiwiRU5EUE9JTlRfVVJMIiwiQWRkIiwiQ2xvc2UiLCJNYWlsT3V0bGluZSIsIlBlcnNvbjJPdXRsaW5lZCIsIlBlcnNvbk9mZlJvdW5kZWQiLCJkYXlqcyIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJsb2dPdXQiLCJzZWxlY3RDdXJyZW50VXNlciIsInNldFVzZXIiLCJMb2FkZXIiLCJDaGVja0NpcmNsZUljb24iLCJMb2dvdXQiLCJJbWFnZSIsIkRhdGFHcmlkIiwiR3JpZFRvb2xiYXIiLCJNZXNzYWdlQWRtaW5WaWV3IiwiTm90aWZpY2F0aW9uVklld0luZm8iLCJEZWxldGVUb29sdGlwIiwiX3JlZiIsImNsYXNzTmFtZSIsInByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NlcyIsInBvcHBlciIsIl9yZWYyIiwidGhlbWUiLCJjb25jYXQiLCJ0b29sdGlwIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJzaGFkb3dzIiwiZm9udFNpemUiLCJFZGl0VG9vbHRpcCIsIl9yZWYzIiwiX2V4Y2x1ZGVkMiIsIl9yZWY0IiwiVmlld1Rvb2x0aXAiLCJfcmVmNSIsIl9leGNsdWRlZDMiLCJfcmVmNiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwid2lkdGgiLCJiZ2NvbG9yIiwicHQiLCJweCIsInBiIiwiZHJhd2VyV2lkdGgiLCJBcHBCYXIiLCJzaG91bGRGb3J3YXJkUHJvcCIsInByb3AiLCJfcmVmNyIsIm9wZW4iLCJfb2JqZWN0U3ByZWFkIiwiekluZGV4IiwiZHJhd2VyIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJtYXJnaW5MZWZ0IiwiZW50ZXJpbmdTY3JlZW4iLCJEcmF3ZXIiLCJfcmVmOCIsIndoaXRlU3BhY2UiLCJib3hTaXppbmciLCJvdmVyZmxvd1giLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIlByb2plY3RWaWV3QWRtaW4iLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXNlciIsInN0b3Jlc1VzZXJJZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJmZXRjaFVzZXIiLCJfcmVmOSIsIl9hc3luY1RvR2VuZXJhdG9yIiwicmVzIiwiZ2V0IiwiTmFtZSIsImRhdGEiLCJlbXBsb3llZU5hbWUiLCJSb2xlIiwicm9sZSIsInVzZXJOYW1lIiwiaWQiLCJfaWQiLCJlcnJvciIsImNvbnNvbGUiLCJhcHBseSIsImFyZ3VtZW50cyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImdyYW50QWNjZXNzIiwic2V0R3JhbnRBY2Nlc3MiLCJmZXRjaE51bWJlciIsIl9yZWYwIiwiX3JlcyRkYXRhIiwiZmlsdGVyIiwicm93IiwidXNlcklEIiwibWFwIiwibW9kdWxlcyIsIlByb2plY3RJbmZvQyIsIm1vZHVsZU5hbWUiLCJhY2Nlc3MiLCJjcmVhdGVNIiwiUHJvamVjdEluZm9WIiwidmlld00iLCJQcm9qZWN0SW5mb1UiLCJlZGl0TSIsIlByb2plY3RJbmZvRCIsImRlbGV0ZU0iLCJoYW5kbGVMb2dvdXQiLCJyZW1vdmVJdGVtIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJwcm9qZWN0Iiwic2V0UHJvamVjdCIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaGlkZGVuUm93Iiwic2V0SGlkZGVuUm93IiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMCIsInBhZ2UiLCJzZXRQYWdlIiwibGltaXQiLCJfdXNlU3RhdGUxIiwiX3VzZVN0YXRlMTAiLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsIl91c2VTdGF0ZTExIiwiX3VzZVN0YXRlMTIiLCJkZWJvdW5jZWRTZWFyY2hUZXJtIiwic2V0RGVib3VuY2VkU2VhcmNoVGVybSIsIl91c2VTdGF0ZTEzIiwiX3VzZVN0YXRlMTQiLCJmaWx0ZXJGaWVsZCIsInNldEZpbHRlckZpZWxkIiwiX3VzZVN0YXRlMTUiLCJfdXNlU3RhdGUxNiIsImZpbHRlclZhbHVlIiwic2V0RmlsdGVyVmFsdWUiLCJfdXNlU3RhdGUxNyIsIl91c2VTdGF0ZTE4IiwidG90YWxQYWdlIiwiU2V0VG90YWxQYWdlIiwiX3VzZVN0YXRlMTkiLCJfdXNlU3RhdGUyMCIsImxvYWRpbmdEYXRhIiwic2V0TG9hZGluZ0RhdGEiLCJfdXNlU3RhdGUyMSIsIl91c2VTdGF0ZTIyIiwicmVhc29uIiwic2V0UmVhc29uIiwiZmV0Y2hJdGVtcyIsIl9yZWYxIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidHJpbSIsImZvcm1hdERhdGUiLCJpdGVtSSIsIml0ZW0iLCJ0b3RhbFBhZ2VzIiwiX3giLCJfeDIiLCJfeDMiLCJfeDQiLCJoYW5kbGVQYWdlQ2hhbmdlIiwiZXZlbnQiLCJuZXdQYWdlIiwiX3VzZVN0YXRlMjMiLCJfdXNlU3RhdGUyNCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiX3VzZVN0YXRlMjUiLCJfdXNlU3RhdGUyNiIsImxvYWRpbmdPcGVuTW9kYWwiLCJzZXRMb2FkaW5nT3Blbk1vZGFsIiwiX3VzZVN0YXRlMjciLCJfdXNlU3RhdGUyOCIsIkVycm9yT3Blbk1vZGFsIiwic2V0RXJyb3JPcGVuTW9kYWwiLCJoYW5kbGVPcGVuT2ZmbGluZSIsInNldFRpbWVvdXQiLCJoYW5kbGVFcnJvciIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbk9mZmxpbmUiLCJfcmVmMTAiLCJSZWZlcmVuY2VJbmZvIiwiUmVmZXJlbmNlSW5mb1Byb2plY3QiLCJSZWZlcmVuY2VJbmZvTmFtZSIsImlkSW5mbyIsInBlcnNvbiIsImRhdGVOb3RpZmljYXRpb24iLCJEYXRlIiwicG9zdCIsImxvZyIsIl94NSIsIl94NiIsIl94NyIsImZldGNoRGF0YUhpZGRlbiIsIl9yZWYxMSIsImlkUm93IiwiX3VzZVN0YXRlMjkiLCJfdXNlU3RhdGUzMCIsInNldE9wZW4iLCJfdXNlU3RhdGUzMSIsIl91c2VTdGF0ZTMyIiwiRGVsZXRlSWQiLCJzZXREZWxldGVJZCIsIl91c2VTdGF0ZTMzIiwiX3VzZVN0YXRlMzQiLCJtb2RhbE9wZW5Mb2FkaW5nIiwic2V0TW9kYWxPcGVuTG9hZGluZyIsIl91c2VTdGF0ZTM1IiwiX3VzZVN0YXRlMzYiLCJzZWxlY3RlZFJvd3MiLCJzZXRTZWxlY3RlZFJvd3MiLCJfdXNlU3RhdGUzNyIsIl91c2VTdGF0ZTM4Iiwib3BlbkRlbGV0ZU11bHRpcGxlIiwic2V0T3BlbkRlbGV0ZU11bHRpcGxlIiwiX3VzZVN0YXRlMzkiLCJfdXNlU3RhdGU0MCIsIm9wZW5SZWFzb25EZWxldGUiLCJzZXRPcGVuUmVhc29uRGVsZXRlIiwiaGFuZGxlT3BlblJlYXNvbkRlbGV0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZUNsb3NlUmVhc29uRGVsZXRlIiwiaGFuZGxlT3Blbk11bHRpcGxlIiwiaGFuZGxlQ2xvc2VNdWx0aXBsZSIsIl91c2VTdGF0ZTQxIiwiX3VzZVN0YXRlNDIiLCJzaWRlQmFyIiwic2V0U2lkZUJhciIsInRvZ2dsZURyYXdlciIsImhhbmRsZUhpZGVSb3ciLCJfcmVmMTIiLCJpbmNsdWRlcyIsInJlc3VsdCIsImhpZGRlbklkIiwidG9TdHJpbmciLCJkZWxldGUiLCJoaWRkZW5CeUNFTyIsIl94OCIsInJvd1JlbmRlcmVyIiwicGFyYW1zIiwiZmllbGQiLCJfdXNlU3RhdGU0MyIsIl91c2VTdGF0ZTQ0IiwiZmlsdGVyZWRSb3dzIiwic2V0RmlsdGVyZWRSb3dzIiwicHJvaiIsIl91c2VTdGF0ZTQ1IiwiaXRlbXMiLCJxdWlja0ZpbHRlckV4Y2x1ZGVIaWRkZW5Db2x1bW5zIiwicXVpY2tGaWx0ZXJWYWx1ZXMiLCJfdXNlU3RhdGU0NiIsImZpbHRlck1vZGVsIiwic2V0RmlsdGVyTW9kZWwiLCJfdXNlU3RhdGU0NyIsIl91c2VTdGF0ZTQ4IiwiY29sdW1uVmlzaWJpbGl0eU1vZGVsIiwic2V0Q29sdW1uVmlzaWJpbGl0eU1vZGVsIiwiaGFuZGVsSGlkZGVuQ29sdW1uIiwibmV3SGlkZGVuIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVGaWx0ZXIiLCJuZXdNb2RlbCIsImxlbmd0aCIsImpvaW4iLCJ2YWx1ZSIsInN0b3JlZFF1aWNrIiwicGFyc2UiLCJzdG9yZWRDb2x1bW5zIiwiX3VzZVN0YXRlNDkiLCJfdXNlU3RhdGU1MCIsIm9wZW5EZWxldGVBbGwiLCJzZXRPcGVuRGVsZXRlQWxsIiwiaGFuZGxlT3BlbkFsbCIsImhhbmRsZUNsb3NlQWxsIiwiaGFuZGxlT3BlbiIsImhhbmRsZU9wZW5Nb2RhbCIsImhhbmRsZUNsb3NlIiwiaGFuZGxlQ2xvc2VNb2RhbCIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiX3VzZVN0YXRlNTEiLCJfdXNlU3RhdGU1MiIsIlByb2plY3REZWxldGVkIiwic2V0UHJvamVjdERlbGV0ZWQiLCJmZXRjaEZ1bmN0aW9uIiwiX3JlZjEzIiwiZGVsZXRlUHJvbWlzZXMiLCJfcmVmMTQiLCJpZFRvRGVsZXRlIiwiX3g5IiwiUHJvbWlzZSIsImFsbCIsInByb2plY3ROdW1iZXIiLCJyZWxhdGVkIiwiaW5mbyIsImhhbmRsZUNyZWF0ZU5vdGlmaWNhdGlvbiIsIl9yZWYxNSIsImhhbmRsZURlbGV0ZU1hbnkiLCJfcmVmMTYiLCJfcmVmMTciLCJfeDEiLCJfeDAiLCJoYW5kbGVEZWxldGUiLCJfcmVmMTgiLCJjb2x1bW5zIiwiaGVhZGVyTmFtZSIsIm1pbldpZHRoIiwiZmxleCIsInZhbHVlRm9ybWF0dGVyIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJ2YWx1ZUdldHRlciIsIl9wYXJhbXMkcm93JGN1c3RvbWVyTiIsImN1c3RvbWVyTmFtZSIsInJlbmRlckNlbGwiLCJzdGF0dXMiLCJ0aXRsZSIsImRpc2FibGVkIiwidG8iLCJvbkNsaWNrIiwiY3Vyc29yIiwic29ydGFibGUiLCJzeCIsImRpc3BsYXkiLCJwciIsImVkZ2UiLCJtYXJnaW5SaWdodCIsImNvbXBvbmVudCIsInZhcmlhbnQiLCJub1dyYXAiLCJmbGV4R3JvdyIsIm5hbWUiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJoZWlnaHQiLCJwYWxldHRlIiwibW9kZSIsImdyZXkiLCJvdmVyZmxvdyIsIm1heFdpZHRoIiwibXQiLCJmbG9hdCIsIm1hcmdpbiIsInBhZ2luYXRpb25Nb2RlIiwicm93Q291bnQiLCJwYWdpbmF0aW9uIiwicGFnZVNpemUiLCJvblBhZ2VDaGFuZ2UiLCJyb3dzIiwic2xvdHMiLCJ0b29sYmFyIiwib25Sb3dTZWxlY3Rpb25Nb2RlbENoYW5nZSIsIm5ld1NlbGVjdGlvbiIsInNsb3RQcm9wcyIsInNob3dRdWlja0ZpbHRlciIsInByaW50T3B0aW9ucyIsImRpc2FibGVUb29sYmFyQnV0dG9uIiwiY2hlY2tib3hTZWxlY3Rpb24iLCJkaXNhYmxlRGVuc2l0eVNlbGVjdG9yIiwicm93U2VsZWN0aW9uTW9kZWwiLCJvbkZpbHRlck1vZGVsQ2hhbmdlIiwib25Db2x1bW5WaXNpYmlsaXR5TW9kZWxDaGFuZ2UiLCJwYWRkaW5nIiwic3JjIiwib25DbG9zZSIsInRleHRBbGlnbiIsImdhcCIsImNsb3NlQWZ0ZXJUcmFuc2l0aW9uIiwiQmFja2Ryb3BDb21wb25lbnQiLCJCYWNrZHJvcFByb3BzIiwidGltZW91dCIsInBsYWNlbWVudCIsIm9uU3VibWl0IiwiY29udGFpbmVyIiwieHMiLCJyZXF1aXJlZCIsIm11bHRpbGluZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJsYWJlbCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9